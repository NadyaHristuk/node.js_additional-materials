"Working with Non-Relational Databases" (using MongoDB as an example)
There are three methods for adding documents to a collection:
- insertOne(): adds one document
- insertMany(): adds multiple documents
- insert(): can add either one or multiple documents
Example:
db.cats.insertOne({name: 'barsik', age: 3, characteristics: ['messes in slippers', 'allows being petted', 'tabby']})
Some restrictions when using key names:
- The symbol $ cannot be the first character in the key name.
- The key name cannot contain the dot (.) symbol.
- It is not recommended to use the name _id.
db.cats.insertMany([{name: 'Lama', age: 2, characteristics: ['messes in the litter box', 'doesn't allow being petted', 'gray']}, {name: 'Liza', age: 4, characteristics: ['messes in the litter box', 'allows being petted', 'white']}])
db.cats.insert([{name: 'Boris', age: 12, characteristics: ['messes in the litter box', 'doesn't allow being petted', 'gray']}, {name: 'Murzik', age: 1, characteristics: ['messes in the litter box', 'allows being petted', 'black']}])
To display documents in a more convenient and visual format, we can add the call to the pretty() method:
db.cats.find().pretty()
Querying with projections:
db.cats.find({age: {$lte: 3}, characteristics: 'allows being petted'}).pretty()
Projection with exclusion of the 'name' field:
db.cats.find({age: {$lte: 3}, characteristics: 'allows being petted'}, {name: 0}).pretty()
Projection with inclusion of only the 'name' and 'age' fields:
db.cats.find({age: {$lte: 3}, characteristics: 'allows being petted'}, {name: 1, age: 1}).pretty()
Querying nested objects:
db.cats.insert({name: 'Dariy', age: 10, characteristics: ['messes in the litter box', 'doesn't allow being petted', 'gray'], owners: {name: 'Nata', age: 23, address: 'Poltava'}})

db.cats.find({'owners.name': 'Nata'})
Query configuration and sorting:
- db.cats.find().limit(3) - get the first three documents
- db.cats.find().skip(3) - skip the first three documents
- db.cats.find().sort({name: 1}) - sort by the 'name' field in ascending order
db.cats.findOne({age: {$lte: 3}})
Cursors:
The result of a query obtained using the find() function is called a cursor. Cursors encapsulate sets of objects retrieved from the database. Using JavaScript syntax and cursor methods, we can display the retrieved documents on the screen and process them in some way.
var cursor = db.cats.find();
while (cursor.hasNext()) {
	obj = cursor.next();
	print(obj["name"]);
}
Using the count() function, we can get the number of elements in the collection:
db.cats.count()
db.cats.find({age: {$lte: 3}}).count()
In MongoDB queries, conditional constructions can be used using comparison operators:
- $eq: equal to
- $ne: not equal to
- $gt: greater than
- $gte: greater than or equal to
- $lt: less than
- $lte: less than or equal to
For example, to find cats younger than or equal to 2 years, we can use:
db.cats.find({age: {$lte: 2}}).pretty()
Searching with arrays and operators $in, $nin, $all:
The $in operator specifies an array of possible expressions and searches for keys whose values are present in the array:

```
db.cats.find({age: {$in: [2, 10]}})
```

Conversely, the $nin operator specifies an array of possible expressions and searches for keys whose values are not present in the array:

```
db.cats.find({age: {$nin: [2, 10]}})
```

The $all operator is similar to $in: it also specifies an array of possible expressions but requires documents to have the entire defined set of expressions:

```
db.cats.find({"characteristics": {$all: ["messes in the litter box", "allows being petted"]}})
```

The $size operator is used to find documents where arrays have a number of elements equal to the $size value:

```
db.cats.find({"characteristics": {$size: 3}})
```

The $exists operator allows extracting only those documents where a specific key is present or absent:

```
db.cats.find({owners: {$exists: true}})
```

The $type operator retrieves only those documents where a specific key has a value of a specific type, such as a string or number:

```
db.cats.find({age: {$type: "number"}})
```

The $regex operator sets a regular expression that the field value must match:

```
db.cats.find({name: {$regex: "L"}})
```

The $or operator:

```
db.cats.find({$or: [{name: {$regex: "L"}}, {age: {$lte: 3}}]})
```

The $and operator:

```
db.cats.find({$and: [{name: {$regex: "L"}}, {age: {$lte: 3}}]})
```

The save method:

```javascript
db.cats.save({"_id": ObjectId("5a571b186a51cf10a4383303"), name: "Bars", age: 3})
```

The update method:

```javascript
db.cats.update({name: "Bars"}, {name: "Tom", age: 5}, {upsert: true})
```

The $set operator:

```javascript
db.cats.update({name: "Tom"}, {$set: {characteristics: ['messes in the litter box', 'doesn't allow being petted', 'gray']}})
```

The $unset operator:

```javascript
db.cats.update({name: "Tom"}, {$unset: {age: 1}})
```

The updateOne and updateMany methods:

```javascript
db.cats.updateOne({name: "Tom"}, {$push: {characteristics: "stinky"}})
db.cats.updateOne({name: "Tom"}, {$push: {characteristics: {$each: ["snoring", "angry"]}}})
```

The $addToSet operator:

```javascript
db.cats.update({name: "Lama"}, {$addToSet: {characteristics: "crazy"}})
```

The $pop operator:

```javascript
db.cats.update({name: "Tom"}, {$pop: {characteristics: 1}})
```

The $pull operator:

```javascript
db.cats.update({name: "Tom"}, {$pull: {characteristics: "gray"}})
```

The $pullAll operator:

```javascript
db.cats.update({name: "Tom"}, {$pullAll: {characteristics: ["doesn't allow being petted", "stinky", "snoring"]}})
```

Deletion:
To remove documents in MongoDB, the remove

 method is used:

```javascript
db.cats.remove({name: "Tom"})
db.cats.remove({name: "Tom"}, true) // once
db.cats.remove({name: "Tom"}, false) // default: multi
```
Here are two files with data that you can use to learn and practice various queries to the MongoDB database using the Mongoose library.

1. [fish.json](https://github.com/NadyaHristuk/node.js_additional-materials/blob/main/fish.json): This file contains information about different fish species. You can use it to create a collection in the MongoDB database and perform queries such as searching, inserting, updating, and deleting data about fish. Examples of queries could include finding all fish of a certain species, updating the size of a fish, or removing fish from the collection.

2. [frog.json](https://github.com/NadyaHristuk/node.js_additional-materials/blob/main/frog.json): This file contains information about various frog species. You can use it to create a separate collection in the MongoDB database and perform queries such as searching, inserting, updating, and deleting data about frogs. For instance, you can search for frogs of a specific color, update their weight, or delete frogs from the collection.

By using these data files, you can practice working with MongoDB and Mongoose, learn about database queries, create schemas, perform CRUD operations (Create, Read, Update, Delete), and explore various features provided by MongoDB and Mongoose for data manipulation. This will help you improve your database skills and utilize MongoDB effectively in your Node.js projects.
