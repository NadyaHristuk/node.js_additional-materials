# 3 дз
__________________________________________________
"npm run changeCatsToContacts" - или 3 дз,
начиная с 3 дз вам почти все, что нужно для выполнения дз будут показывать на уроке, - просто сами вы это не напишите, или если и напишите, то далеко не за неделю. По этому моих пояснений будет становится меньше, ибо как делать дз и так на уроке показывают.\
**Так же большая просьба!!!**
С 3 дз у Вас появится файл - .env и он находится в .gitignore. И не надо мне, в переживаниях, что я не смогу проверить дз, его заливать на гит, ок?
у меня честно тоже есть база на Аталасе, я могу спокойно создать свой .env в каждом вашем проекте со своими данными и я подключаюсь к своей чистой коллекции, каждый раз зачищаю. И спокойненько могу потестить ваш код ))
Меня же не инетерсует именно содержимое ВАШЕЙ конекретной базы. Мне надо что бы ваш код был работоспособный. Была правильная архитектура приложения, ну и что бы он был визуально "нормальный" (еслинт и т.д.)
Если меня что-то смущает в конертной работе, то я стучусь к студенту в личку и прошу именно его содержимое .env файла, что бы подключится к его базе, но такое бывает редко, обычно только если есть какие-то ошибки, которые студент сам не может отловить, и я помогаю с решением ошибок

__________________________________________________
## Работа с БД - функции
Немного позанудничаю.
Если вы это уже поняли, то просто пропускаем и можно не читать. Но если вы не совсем разобрались. То давайте разберемся с функциями
Функции обращения к БД в названии которых есть слово One - были созданы для работы с любыми полями, но обычно с любым другим кроме поля **_id**.
Для работы с полем ** _id** есть специальные функции в названии которых уже содержится слово **ById** что позволяет немного сократить синтаксис обращения к БД
Начнем с первого варианта который я встерчала в некоторых дз -
**findOne({ _id: id })** - тут вызывается функция - в названии которой используется - One -  в этой функции явно не указывается конкретное поле, по которому идет поиск в БД, по этому надо явно указывать название поля _id и значение которое передается - id  - ({ _id: id })
**updateOne({ _id: id }, { token })** - тут тоже самое, в названии есть слово One и тут явно передается название поля _id по которому идет поиск и потом явно передаешь значение этого поля id
**findOneAndUpdate({ _id: id },  { subscription },  { new: true } )** - аналогично.
НО ЭТО ВСЕ МОЖНО УПРОСТИТЬ НА ЧУТЬ-ЧУТЬ
_____________________________________________________________
Что бы не передавать явно указанное название поля - _id можно использовать функции, в названии которых уже содержится слово id. Это специальные - именованные функции для поиска по полю id, а именно
`Model.findById()`
`Model.findByIdAndDelete()`
`Model.findByIdAndRemove()`
`Model.findByIdAndUpdate()`
тут везде явно указывается название поля, по которому будет  производится поиск по базе данных - ById
по этому тут можно сразу передавать значение по которому происходит поиск - в этом примере мы его передаем в переменной - id
**НО даже когда используются функции в названии которых уже явно указывается слово ById , по которому идет поиск в БД, все равно используется синтаксис, как будуд-то вызыватеся функция с записью** -  **One **
В двух ДЗ видела вот такую запись  -
```javascript
 const result = await Contact.findByIdAndUpdate({ _id: contactId },
    { ...body },
    { new: true },
  )
```
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndUpdate
если вы используете **findByIdAndUpdate** достаточно сразу передавать **id** , не надо конкретизировать какое поле вы передаете - `{ _id: id }` - `findByIdAndUpdate( id, ...body, { new: true } )`
или если вы хотите явно указывать поле, по которому вы обращаетесь с БД, то можно использовать `findOneAndUpdate( { _id: id }, ...body, { new: true })` - и тут надо явно указывать по какому полю мы ищем элемент.
____________________________________
И такая же ситуация и с функцией удаления.
```javascript
const result = await Contact.findByIdAndRemove({ _id: contactId })
```
 Вот ссылка на официальную документацию, где показывается, как передаются аргументы - https://mongoosejs.com/docs/api/model.html#model_Model.findByIdAndDelete
`findByIdAndRemove(id) `- не надо передавать { _id: id }, вы и так уже объявили, по какому полю ищите
_______________________________________________________________

3дз -  очень **может не помешать проверка на правильность введенного id в роутах**
Проверку можно делать через Joi - есть специальная доп-библиотека для проверки, используется в связе с с Joi
или можете через монгус
Build In Solution > Mongoose 5.7.12
If you are using Mongoose, we can test whether a String is of 12 bytes or a string of 24 hex characters by using mongoose build-in isValidObjectId.
`mongoose.isValidObjectId(string); /* will return true/false */`

__________________________________________________
А еще вы уже большие, и по этому -
А давайте вы начнете **красиво оформлять сам файл Readme.md** - Что значит красиво? - файл должен содержать краткую информацию о том, что это за проект, как его запустить. и что он умеет делать - на какие роуты каую информацию можно получить. Возможный пример - https://github.com/HackerNews/API - не обязательно так красиво, но это что бы было куда стремится.
Что дополнительно почитать:
https://medium.com/astrolabe/%D0%BA%D0%B0%D0%BA-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%[…]-%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%B9-readme-159f88076b26

http://webdesign.ru.net/article/pravila-oformleniya-fayla-readmemd-na-github.html
_______________________________________________________________
### Архитектура приложений MVC и REST
я не нашла так, что бы было хорошо описано в одном источнике.
Проблема в том, что часто пишут таким языком, что бы понять это, надо уже знать это - по этому скину 3 статьи - если постараться прочитать их то по идее в голове из кусочков должно сформироваться представление о том, что хотели этим сказать - MVC
https://dev.to/eaetukudo/understanding-mvc-pattern-in-nodejs-2bdn - об архитектуре - модель, представление, контроллер - (хорошо и с примером кода, что и где должно лежать по папочкам)
https://habr.com/ru/company/ruvds/blog/333856/ - на примере абстрактных функций
https://ruseller.com/lessons.php?id=666 - тут проблема в том. что они на примере пхп обьясняют, но я думаю будет понятно
https://metanit.com/web/nodejs/7.1.php - и на примере чистой ноды
А вот тут только единственное место, где не плохо об рахитектуре - REST API
https://webdraftt.com/tutorial/nodejs/rest-api - общая инфа, и
https://webdraftt.com/tutorial/nodejs/app-structure - а вот тут уже именно об архитектуре

_______________________________________________________________
### Допольнительный материал - видео по Node.js 
если есть желание углубится в ноду,  - в предложенных курсах будет и то, что вам будут рассказывать в след. лекциях, и что-то дополнительно. 

 Можете и покодить и посмотреть доп-инфу 
 
- https://www.youtube.com/watch?v=thWNUby1G3U&list=PLC3y8-rFHvwhco_O8PS1iS9xRrdVTvSIz&index=2 - хороший курс, вот тут с 1 по 10 тему, это объяснение базы, на которой строится нода, очень советую посмотреть и разобраться. 

- https://www.youtube.com/watch?v=ob9qRQeajA0&list=PL0lO_mIqDDFX0qH9w5YQIDV6Wxy0oawet - курс на русском. без такого глубокого погружения. но тоже много полезного 

- Три курса по основам ноды от одного автора, от совсем основ, до построения корзины и АPI - мне он нравится очень просто и понятно излагает

https://www.youtube.com/watch?v=65a5QQ3ZR2g&list=PL55RiY5tL51oGJorjEgl6NVeDbx_fO5jR - Node.js - Tutorial - Introduction

https://www.youtube.com/watch?v=-3vvxn78MH4&list=PL55RiY5tL51rajp7Xr_zk-fCFtzdlGKUp&index=2 - NodeJS / Express / MongoDB - Build a Shopping Cart

https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q - What is a RESTful API? | Creating a REST API with Node.js

- https://www.youtube.com/watch?v=7f787SsgknA - понимание асинхронности в ноде. Как просиходит цикл событий.

- Как дополнение и более глубокий разбор тем
https://www.youtube.com/watch?v=vQldMjSJ6-w&list=PLvTBThJr861y60LQrUGpJNPu3Nt2EeQsP - JWT

-  как дополнение кроме того, то есть в основных темах 
https://www.youtube.com/watch?v=_ndbCZ9Ni6E - Koa как замена Express

https://www.youtube.com/watch?v=7giZGFDGnkc&list=RDCMUCSJbGtTlrDami-tDGPUV9-w&start_radio=1 - GraphQL - как перейти к новой концепции запросов к беку

https://www.youtube.com/watch?v=ed8SzALpx1Q - GraphQL Full Course - Novice to Expert

и желательно кроме монги разобраться еще с SQL базой данных -
https://www.youtube.com/watch?v=2tDvHQCBt3w&t=4s - Работа с базами данных в Node.js на примере PostgreSQL

-  И самое  главное, что когда вы будете смотреть как кодят, на ноде у вас уже будет намотренность, и вы будешь уже интуитивно понимать как называют переменные, и как архитектуру пишут 

**По основам ноды.**
Необязательно всех авторов смотреть, я скинула нескольких, потому что обычно один автор заходит и его подача материала, а другой не заходит и не подходит его подача материала. 
Если все пересмотрите и будет скучно я Вам еще подкину, что можно глянуть - это пока основы

**Список дополнительных тем по Node.js**  -  https://docs.google.com/spreadsheets/d/1DAm9kUziEXw56CsZzEk0UsoucS_5RG5gMMNX-x-gmfc/edit#gid=379096805

____________________________________________
### Если вам сложно и плохо дается в понимании **как сделать 3 дз**- может вам помогут эти ссылочки

https://towardsdatascience.com/build-a-rest-api-with-node-express-and-mongodb-937ff95f23a5 

https://rahmanfadhil.com/express-rest-api/

https://medium.com/@alicantorun/build-a-rest-api-with-mongodb-mongoose-and-node-js-3a5afc4a0431

https://blog.tericcabrel.com/create-a-rest-api-with-nodejs-express-mongodb-and-typescript/

# Работа с базами данных

Возможно, вы уже слышали, что существуют два основных типа баз данных: SQL и NoSQL.

## SQL

Начнём с SQL. Это язык запросов, предназначенный для работы с реляционными базами данных. SQL немного отличается в зависимости от продукта, который вы используете, но базовые вещи в них тождественны.

Сами данные хранятся в таблицах. Каждая добавленная часть будет представлена в виде строки в таблице, как в Google Sheets или Microsoft Excel.

В базе данных SQL вы можете определить схемы. Они предоставят скелет для данных, которые вы собираетесь разместить. Также, перед тем, как сохранить данные, будет необходимо задать типы различных значений. Например, вам нужно будет определить таблицу для ваших пользовательских данных и сообщить базе данных, что у неё есть имя пользователя, являющееся строкой, и возраст - целый тип.

## NoSQL

С другой стороны, в последнее десятилетие стали весьма популярны NoSQL базы данных. С NoSQL вам не нужно определять схему и вы можете хранить любой произвольный JSON. Это хорошо сочетается с JavaScript, потому что мы можем легко превратить любой объект в JSON. Будьте осторожны, потому что вы никогда не можете гарантировать, что данные консистентны, и вы никогда не сможете узнать, какая структура находится в базе данных.

## Node.js и MongoDB

Существует распространённое заблуждение о Node.js, которое можно услышать довольно часто:

*«Node.js можно использовать только с MongoDB (самая популярная NoSQL база данных)».*

По моему опыту, это не так. У большинства баз данных имеются драйверы для Node.js и библиотеки в NPM. По моему мнению, они такие же простые и лёгкие в использовании, как MongoDB.



### Создание таблицы mongodb


**Теорема Брюера**

  эвристическое утверждение о том, что в любой реализации распределённых вычислений возможно обеспечить не более двух из трёх следующих свойств:
  
   согласованность данных (англ. consistency) — во всех вычислительных узлах в один момент времени данные не противоречат друг другу;
   
   доступность (англ. availability) — любой запрос к распределённой системе завершается корректным откликом;
   
   устойчивость к разделению (англ. partition tolerance) — расщепление распределённой системы на несколько изолированных секций не приводит к некорректности отклика от каждой из секций.
   

#### CAP-теорема

**MongoDB**

   humongous – огромный
   
   документо-ориентированное хранение данных (JSON-подобная схема)
   не требует описания схем данных
   
   JavaScript в качестве языка запросов к базе данных

```javascript
db.students.insert({
    name: 'Дарья',
    nickname: 'Пиратка',
    group: 'ПИ-401'
})
```

##### Выборка данных

```javascript
db.students.find(){
    "_id" : <mark>ObjectId("56cc30e2e52c943bf62fff72")</mark>,
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
```

##### Любой процесс на любой машине сам отвечает за генерацию ID'шников и не вступает в конфликты с другими
```javascript
ObjectId("56cc30e2e52c943bf62fff72")
56cc30e2 – time
e52c94 – mid
3bf6 – pid
2fff72 – inc

```
56cc30e2 e52c94 3bf6 2fff72
56cc3503 e52c94 3bf6 2fff73</span>

```javascript
function insertStudent(name, nickname, group) {
    var year = group.split('-').pop().slice(0, 1);
    db.students.insert({
        name: name,
        nickname: nickname,
        group: group,
        year: year
    });
}
```
```javascript
insertStudent('Пётр', 'petr', 'МТ-204')
```
```javascript
db.students.find()
{
    "_id" : ObjectId("56cc30e2e52c943bf62fff72"),
    "name" : "Дарья",
    "nickname" : "Пиратка",
    "group" : "ПИ-401"
}
{
    "_id" : ObjectId("56cc3a2ae52c943bf62fff74"),
    "name" : "Пётр",
    "nickname" : "petr",
    "group" : "МТ-204",
    "year" : "2"
}
```

### Выборка данных
```javascript
db.students.find({
    group: 'ПИ-301'
}})

```
```javascript
db.students.find({
    course: { $lt : 3 }
})
```
Для примера ищем у всех студентов, у кого 9 оценка по ДС равна 1
```javascript
{
    name: 'Дарья',
    course : 4,
    group : 'ПИ-401',
    grades: {
        javascript: [1,0.5,1,1,1,0.5,1,1,0.5,1],
        verstka: [1,1,1,1,1,0.5,1,0.5,0.5,0.5]
    }
}
```
Для этого будет достаточно просто записать
```javascript
db.students.find({
    "grades.javascript.9": 1
})
```
```javascript
db.students.update({
    group: /3\d{2}/
}, {
    $set: {
        course: "3"
    }
}, {
    multi: true
})
```

#### Удаление
```javascript
db.students.remove({
    course: 1
})
```
### Репликация и шардирование

##### Range Based шардирование
##### Hash Based шардирование

###### Range Based vs Hash Based

    Range Based проще настроить, но возможно неравномерное распределение данных
    Hash Based «соседние данные скорее всего будут в разных шардах», зато распределение максимально равномерно

### JOIN
#### Нормализация и денормализация

Нормализация — это процесс организации данных в базе данных, включающий создание таблиц и установление отношений между ними в соответствии с правилами, которые обеспечивают защиту данных и делают базу данных более гибкой, устраняя избыточность и несогласованные зависимости.

Избыточность данных приводит к непродуктивному расходованию свободного места на диске и затрудняет обслуживание баз данных. Например, если данные, хранящиеся в нескольких местах, потребуется изменить, в них придется внести одни и те же изменения во всех этих местах. Изменение адреса клиента гораздо легче реализовать, если в базе данных эти сведения хранятся только в таблице Customers и нигде больше. 

#####     Транзакции и конкурентность
   Транзакции в MongoDB https://habrahabr.ru/post/153321/

Добавление в MongoDB транзакции. Но на самом деле это не панацея и у них есть ограничения, некоторые перечислены ниже, а некоторые в комментариях

    все работает хорошо (база консистентна, транзакции не теряются) в предположении, что если мы получили подтверждение от хранилища, что запись прошла, она действительно прошла и эти данные не потеряются (монга обеспечивает это при включенном журналировании)
    транзакции оптимистические, проэтому при изменении объекта с высокой частотой из разных потоков их лучше не использовать
    для изменения n объектов в одной транзакции используется 2n+2 запросов
    со временем у нас будут накапливаться tx объекты от упавших транзакций — периодически мы должны удалять старые


####    MongoDriver
   MongoDB Native  -https://github.com/mongodb/node-mongodb-native
   
   Mongoose https://www.npmjs.com/package/mongoose
   
#### Для чего нужно и не нужно использовать?
       Сильные стороны MongoDB
            - Большие объемы данных
            - Гибкая модель данных (schemeless)
            - Простота
          
        Слабые стороны MongoDB
            Нормализация
            
		Так для чего нужно?
            	- Быстрые прототипы
                - Блоги
                - Эксперименты
                - проект на хакатоне

##Установка и начало работы с MongoDB

 Установка и начало работы с MongoDB на Windows - https://metanit.com/nosql/mongodb/1.2.php

c:/mongodb/data/db - создать такие папочки
c:/mongodb/log - mongo.log - тут создать этот файл для логов

Запускаем по Виндой от имени администратора терминал - в папке mongodb 

mongod --directoryperdb --dbpath c:\mongodb\data\db --logpath c:\mongodb\log\mongo.log --logappend --rest --install

И нажать - Enter

И теперь можно проверить работает ли наша Монга - введя в консоли - net start MongoDB
				

## Express mongodb

Простая разработка приложений на Node.js и MongoDB с помощью Mongoose
Node.js и MongoDB  -- это пара, каждый из которой создан друг для друга. Умение использовать JSON сверх меры и JavaScript делают разработку очень простой. 

CRUD это то, что необходимо для большинства разрабатываемых приложений. Ведь информацию нужно постоянно создавать, читать, редактировать и удалять.

Сегодня мы разберем примеры кода для обработки операций CRUD в приложении, использующем Node.js, ExpressJS и MongoDB. Воспользуемся популярным Node-пакетом, mongoose .

Эти примеры кода использовались для создания Node.js RESTful API , так как при создании API необходимо использование операций CRUD. Для того, чтобы увидеть эти команды в действии, прочитайте этот пост. Эта статья есть нечто большее, чем ссылка на различные команды и способы их использования.

#### Что такое Mongoose?

mongoose -- пакет объектного моделирования для Node, который в основном работает как ORM, которые вы можете встретить в других языках (вроде Eloquent for Laravel).

Mongoose позволяет нам обращаться к MongoDB с помощью команд CRUD просто и легко. Для использования mongoose добавьте ее в свой Node-проект следующей командой:

`$ npm i mongoose`

Теперь, когда пакет установлен, просто прикрепите его к проекту:

`const mongoose = require('mongoose');`

Также необходимо подключиться к MongoDB (локальной или внешней):

`mongoose.connect('mongodb://aaa:1235@ds241489.mlab.com:41489/test_base');`

Переходим к командам.

##### Определение модели

Перед тем, как работать с CRUD-операциями, нам необходима mongoose-модель. Эти модели -- это конструкторы, которые мы определяем. Они представляют (схематически) документы, которые могут быь сохранены и извлечены из БД. 

##### Mongoose схема.
mongoose схема -- это то, что используется для определения атрибутов для наших документов.

Mongoose методы. Методы могут также быть определены в mongoose схеме.

##### Пример модели для Users

```javascript
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

Здесь рассмотрено, как схема определяется. Надо сначала прикрутить  mongoose и mongoose.Schema. Затем мы можем определить атрибуты в нашей userSchema для всего, что необходимо в профиле нашего юзера  user. Также заметьте, как можно определить вложенные объекты как в атрибуте meta.

Разрешенные типы данных SchemaTypes:
·         String
·         Number
·         Date
·         Buffer
·         Boolean
·         Mixed
·         ObjectId
·         Array

Затем создадим mongoose модель вызовом mongoose.model. Также можно создать специальные методы. Удобное, кстати, место для создания метода  хэширования пароля 

#### Пользовательский метод

```javascript
// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema ...

// custom method to add string to end of name
// you can create more important methods like name validations or formatting
// you can also do queries and find similar users 
userSchema.methods.dudify = function() {
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
```

##ПРИМЕР ИСПОЛЬЗОВАНИЯ

ТЕПЕРЬ У НАС ЕСТЬ ПОЛЬЗОВАТЕЛЬСКАЯ МОДЕЛЬ И МЕТОД, КОТОРЫЙ МОЖНО ВЫЗВАТЬ В КОДЕ:

```javascript
// if our user.js file is at app/models/user.js
var User = require('./app/models/user');
  
// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
chris.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
```

Это бесполезный пользовательский метод, но мысль в том, чтобы научиться создавать пользовательские методы и использовать их. Эту методику можно использовать для того, чтобы убедиться, что пароль hashed перед сохранением, для сравнения паролей, найти пользователей со сходными атрибутами и т. д.

###Выполнение функции перед сохранением

Допустим, мы хотим иметь переменную created_at для фиксации времени создания записи. Можно использовать схему Schema pre метод для того, чтобы некоторые операции были выполнены перед сохранением объекта.

Ниже приведен код, который необходимо добавить к нашей схеме для того, чтобы сохранялась дата в переменной created_at при первом сохранении, и в updated_at при каждом последующем:

```javascript
// on every save, add the date
userSchema.pre('save', function(next) {
  // get the current date
   currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

```
Теперь при каждом сохранении будет добавляться дата. Также это отличное место для хэширования паролей и проверки, не введен ли простой текст.

Мы также можем определить еще некоторые вещи в схемах и моделях, такие как статика и индексы. Для дополнительной информации -- mongoose docs.

### Создание

Мы будем использовать метод User, созданный ранее. Встроенный в модели mongoose save метод используется для создания user:

```javascript
// grab the user model
var User = require('./app/models/user');

// create a new user
var newUser = User({
  name: 'Peter Quill', //req.body.name
  username: 'starlord55',//req.body.username
  password: 'password',//req.body.password
  admin: true
});

// save the user
newUser.save(function(err) {
  if (err) throw err;

  console.log('User created!');
});

```


### Чтение

Может быть много причин для запроса базы данных пользователей (users). Может понадобиться отдельный пользователь, группа похожих пользователей, все пользователи и другие разные сценарии. Ниже несколько примеров:

```javascript
Find all (найти все)
// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});
//Find one (найти один)
// get the user starlord55
User.find({ username: 'starlord55' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});

//Find by ID (Найти по ID)
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // show the one user
  console.log(user);
});
```

### Запросы

**Можно также пользоваться синтаксисом MongoDB query** 

```javascript
// get any admin that was created in the past month

// get the date 1 month ago
let monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ admin: true }).where('created_at').gt(monthAgo).exec(function(err, users) {
  if (err) throw err;

  // show the admins in the past month
  console.log(users);
});
```

#### Редактирование (обновление)

Здесь мы будем находить отдельного пользователя, изменять некоторые атрибуты и затем сохранять.

Получить пользователя, затем обновить

```javascript
// get a user with ID of 1
User.findById(1, function(err, user) {
  if (err) throw err;

  // change the users location
  user.location = 'uk';

  // save the user
  user.save(function(err) {
    if (err) throw err;

    console.log('User successfully updated!');
  });
});
```

Следует помнить, что мы создали функцию для изменения updated_at даты, это будет также происходить при сохранении save.

**Найти и обновить**

Есть более простой метод, в котором нет необходимости извлекать пользователя, модифицировать и затем сохранять. Можно простоприменить mongodb команду findAndModify.

```javascript
// find the user starlord55
// update him to starlord 88
User.findOneAndUpdate({ username: 'starlord55' }, { username: 'starlord88' }, (err, user)=> {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```

**Найти по ID и обновить**

```javascript
// find the user with id 4
// update username to starlord 88
User.findByIdAndUpdate(4, { username: 'starlord88' }, (err, user) => {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(user);
});
```


### Удаление

**Получить USER, потом удалить**

```javascript
// get the user starlord55
User.find({ username: 'starlord55' }, (err, user) =>{
  if (err) throw err;

  // delete him
  user.remove(function(err) {
    if (err) throw err;

    console.log('User successfully deleted!');
  });
});
```

**Найти и удалить**

```javascript
// find the user with id 4
User.findOneAndRemove({ username: 'starlord55' }, (err) => {
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```
**Найти по ID и удалить**

```javascript
// find the user with id 4
User.findByIdAndRemove(4, (err) =>{
  if (err) throw err;

  // we have deleted the user
  console.log('User deleted!');
});
```

---

## Node.js и PostgreSQL

Для простоты мы будем использовать SQL в следующем примере. Мой выбор — PostgreSQL.

Чтобы запустить PostgreSQL, вам необходимо установить его на свой компьютер. Если вы используете Mac, вы можете использовать Homebrew для установки PostgreSQL. В противном случае, если вы работаете в Linux, вы можете установить его с помощью своего диспетчера пакетов.

![](NodeHeroEbook-TheComplete-010.png)

Для получения дополнительной информации ознакомьтесь с этим отличным [руководством](http://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/) по началу работы с вашей первой базой данных.

Если вы планируете использовать инструмент для просмотра базы данных, я бы рекомендовал утилиту для командной строки — `psql`. Она поставляется вместе с сервером PostgreSQL. Вот небольшая [инструкция](http://www.postgresonline.com/downloads/special_feature/postgresql83_psql_cheatsheet.pdf), которая пригодится, если вы начнёте использовать `psql`.

Если вам не нравится интерфейс командной строки, вы можете использовать [pgAdmin](https://www.pgadmin.org/), который является инструментом с открытым исходным кодом и предназначен для администрирования PostgreSQL.

Обратите внимание, что SQL — это сам по себе язык программирования. Мы не будем рассматривать все его возможности, а только наиболее простые. Если вам потребуется глубже изучить SQL, то в интернете есть много отличных онлайн-курсов, охватывающих все основы [PostgreSQL](https://www.pluralsight.com/courses/postgresql-getting-started).

## Взаимодействие Node.js с базой данных

Во-первых, мы должны создать базу данных, которую мы будем использовать. Для этого введите следующую команду в терминал: `createdb node_hero`.

Затем мы должны создать таблицу для наших пользователей.

```sql
CREATE TABLE users(
  name VARCHAR(20),
  age SMALLINT
);
```

Наконец, мы можем вернуться к программированию. Вот как вы можете взаимодействовать с вашей базой данных через вашу программу на Node.js:

```javascript
'use strict'

const pg = require('pg')
const conString = 'postgres://username:password@ localhost/node_hero' // Убедитесь, что вы указали данные от вашей базы данных

pg.connect(conString, function (err, client, done) {
  if (err) {
    return console.error('error fetching client from pool', err)
  }
  client.query('SELECT $1::varchar AS my_first_query', ['node hero'], function (err, result) {
    done()

    if (err) {
      return console.error('error happened during query', err)
    }
    console.log(result.rows[0])
    process.exit(0)
  })
})
```

Это был простой пример — "hello world" в PostgreSQL. Обратите внимание, что первым параметром является строка, которая является нашей SQL-командой, второй параметр представляет собой массив значений, которыми мы хотели бы параметризовать наш запрос.

Большой ошибкой с точки зрения безопасности был бы ввод данных, пришедших от пользователя, в том виде, в котором они были переданы. Приведённая выше функция `client.query` защищает вас от SQL-инъекций, являющихся распространённым видом атаки, когда злоумышленник пытается внедрить в запрос произвольный SQL-код. Всегда учитывайте это при создании любого приложения, в котором возможен ввод данных со стороны пользователя. Чтобы узнать больше, ознакомьтесь с нашим [контрольным списком безопасности Node.js-приложений](https://blog.risingstack.com/node-js-security-checklist/).

*Примечание переводчика: обычно никто не пишет SQL-запросы руками, вместо этого используют так называемые конструкторы запросов (query builder), например [sequelize](http://docs.sequelizejs.com/) и [knex](http://knexjs.org/).*

Давайте продолжим наш предыдущий пример.

```javascript
app.post('/users', function (req, res, next) {
  const user = req.body

  pg.connect(conString, function (err, client, done) {
    if (err) {
      // Передача ошибки в обработчик express
      return next(err)
    }
    client.query('INSERT INTO users (name, age) VALUES ($1, $2);', [user.name, user.age], function (err, result) {
      done() // Этот коллбек сигнализирует драйверу pg, что соединение может быть закрыто или возвращено в пул соединений
      if (err) {
        // Передача ошибки в обработчик express
        return next(err)
      }
      res.send(200)
    })
  })
})
```

Достижение разблокировано: пользователь сохранён в базе данных! :) Теперь давайте попробуем прочитать эти данные. Затем добавим в наше приложение новый роут для поиска пользователей.

```javascript
app.get('/users', function (req, res, next {
  pg.connect(conString, function (err, client, done) {
    if (err) {
      // Передача ошибки в обработчик express
      return next(err)
    }
    client.query('SELECT name, age FROM users;', [], function (err, result) {
      done()
      if (err) {
        // Передача ошибки в обработчик express
        return next(err)
      }
      res.json(result.rows)
    })
  })
})
```

## Это было не так сложно, не так ли?

Теперь вы можете запустить любой сложный SQL-запрос, который вы только сможете вообразить, в вашем Node.js-приложении.

>  *С помощью этой техники вы можете постоянно хранить данные в своём приложении, а благодаря трудолюбивой команде разработчиков модуля node-postgres это проще простого.*

Мы рассмотрели все основы, которые вы должны знать об использовании баз данных в Node.js. Теперь попробуйте создать что-то самостоятельно.

---

## “Работа с нереляционными БД” (на примере MongoDB)

```js
 use test
```
Теперь в качестве текущей будет установлена БД test.

Если мы хотим узнать, какая бд используется в текущей момент, то мы можем воспользоваться командой db:
```js
db
==> test
```
Используя команду ```db.stats()```, можно получить статистику по текущей базе данных
статистику по коллекции users: ```db.users.stats()```

### Для добавления в коллекцию могут использоваться три ее метода:
- ```insertOne()```: добавляет один документ
- ```insertMany()```: добавляет несколько документов
- ```insert()```: может добавлять как один, так и несколько документов
```js
db.cats.insertOne({name: 'barsik', age: 3, characteristics: ['гадит в тапки', 'дает себя гладить', 'рябой']})
```
Некоторые ограничения при использовании имен ключей:
1. Символ ```$``` не может быть первым символом в имени ключа
2. Имя ключа не может содержать символ точки .
3. Имя ```_id``` не рекомендуется использовать
```js
db.cats.insertMany([{name: 'Lama', age: 2, characteristics: ['гадит в лоток', 'не дает себя гладить', 'серый']}, {name: 'Liza', age: 4, characteristics: ['гадит в лоток', 'дает себя гладить', 'белый']}])

db.cats.insert([{name: 'Boris', age: 12, characteristics: ['гадит в лоток', 'не дает себя гладить', 'серый']}, {name: 'Murzik', age: 1, characteristics: ['гадит в лоток', 'дает себя гладить', 'черный']}])
```
### Для вывода документов в более удобном наглядном представлении мы можем добавить вызов метода ```pretty()```:
```js
db.cats.find().pretty()

db.cats.find({age: {$lte: 3}, characteristics: 'дает себя гладить'}).pretty()
```
### Проекция:
```js
db.cats.find({age: {$lte: 3}, characteristics: 'дает себя гладить'}, {name: 0}).pretty()

db.cats.find({age: {$lte: 3}, characteristics: 'дает себя гладить'}, {name: 1, age: 1}).pretty()
```
### Запрос к вложенным объектам
```js
db.cats.insert({name: 'Dariy', age: 10, characteristics: ['гадит в лоток', 'не дает себя гладить', 'серый'], owners: {name: 'Nata', age: 23, adress: 'Poltava'}})

db.cats.find({'owners.name': 'Nata'})
```
### Настройка запросов и сортировка:
```js
db.cats.find().limit(3) - первые три
db.cats.find().skip(3) - пропустить первые три
db.cats.find().sort({name: 1}) 

db.cats.findOne({age: {$lte: 3}})
```
### Курсоры
Результат выборки, получаемой с помощью функции ```find```, называется курсором
Курсоры инкапсулируют в себе наборы получаемых из бд объектов. Используя синтаксис языка javascript и методы курсоров, мы можем вывести полученные документы на экран и как-то их обработать. 
```js
var cursor = db.cats.find();
while(cursor.hasNext()){
	obj = cursor.next();
	print(obj["name"]);
}
```
### С помощью функции count() можно получить число элементов в коллекции:
```js
db.cats.count()
db.cats.find({age: {$lte: 3}}).count()
```

### В MongoDB в запросах можно использовать условные конструкции с помощью операторов сравнения:

- ```$eq``` - (равно)
- ```$gt``` - (больше чем)
- ```$lt``` - (меньше чем)
- ```$gte``` - (больше или равно)
- ```$lte``` - (меньше или равно)
```js
db.cats.find ({age: {$lte: 10, $gte:2}})
```
### Поиск по массивам и операторы ```$in, $nin, $all```
Оператор ```$in``` определяет массив возможных выражений и ищет те ключи, значение которых имеется в массиве:
```js
db.cats.find({age: {$in : [2, 10]}})
```
Противоположным образом действует оператор ```$nin``` - он определяет массив возможных выражений и ищет те ключи, значение которых отсутствует в этом массиве
```js
db.cats.find({age: {$nin : [2, 10]}})
```
Оператор ```$all``` похож на ```$in```: он также определяет массив возможных выражений, но требует, чтобы документы имели весь определяемый набор выражений. 
```js
db.cats.find ({"characteristics": {$all : ["гадит в лоток", "дает себя гладить"]}})
```

#### Оператор ```$size```
Оператор ```$size``` используется для нахождения документов, в которых массивы имеют число элементов, равным значению ```$size```. 
```js
db.cats.find({"characteristics": {$size:3}})
```
#### Оператор ```$exists```
Оператор ```$exists``` позволяет извлечь только те документы, в которых определенный ключ присутствует или отсутствует. 
```js
db.cats.find({owners: {$exists:true}})
```
#### Оператор ```$type```
Оператор ```$type``` извлекает только те документы, в которых определенный ключ имеет значение определенного типа, например, строку или число
```js
db.cats.find({age: {$type:"number"}})
```

#### Оператор ```$regex```
Оператор ```$regex``` задает регулярное выражение, которому должно соответствовать значение поля.
```js 
db.cats.find({name: {$regex:"L"}})
```

#### Оператор ```$or```
```js
db.cats.find({$or: [{name: {$regex:"L"}}, {age: {$lte: 3}}]})
```
#### Оператор ```$and```
```js
db.cats.find({$and: [{name: {$regex:"L"}}, {age: {$lte: 3}}]})
```

### Метод save
В этот документ в качестве поля можно передать параметр ```_id```. Если метод находит документ с таким значением ```_id```, то документ обновляется. Если же с подобным ```_id``` нет документов, то документ вставляется.
```js
db.cats.save({"_id": ObjectId("5a571b186a51cf10a4383303"), name: "Bars", age: 3})
```
### Метод update
Более детальную настройку при обновлении предлагает функция update. Она принимает три параметра:

1. ```query```: принимает запрос на выборку документа, который надо обновить
2. ```objNew```: представляет документ с новой информацией, который заместит старый при обновлении

3. ```options```: определяет дополнительные параметры при обновлении документов. Может принимать два аргумента: ```upsert``` и ```multi```.

Если параметр ```upsert``` имеет значение true, что mongodb будет обновлять документ, если он найден, и создавать новый, если такого документа нет. Если же он имеет значение false, то mongodb не будет создавать новый документ, если запрос на выборку не найдет ни одного документа.

Параметр ```multi``` указывает, должен ли обновляться первый элемент в выборке (используется по умолчанию, если данный параметр не указан) или же должны обновляться все документы в выборке.
```js
db.cats.update({name : "Bars"}, {name: "Tom", age : 5}, {upsert: true})
```
оператор ```$set``` - если документ не содержит обновляемое поле, то оно создается
```js
db.cats.update({name : "Tom"}, {$set: {characteristics: ['гадит в лоток', 'не дает себя гладить', 'серый']}})
```
Указав значение ```multi:true```, мы можем обновить все документы выборки
```js
{multi:true}
```
Для удаления отдельного ключа используется оператор ```$unset```:
```js
db.cats.update({name : "Tom"}, {$unset: {age: 1}})
```

### Метод updateOne и updateMany
Метод ```updateOne``` похож на метод ```update``` за тем исключением, что он обновляет только один документ.
Если необходимо обновить все документы, соответствующие некоторому критерию, то применяется метод ```updateMany()```:

### Массивы

#### Оператор ```$push```
```js
db.cats.updateOne({name : "Tom"}, {$push: {characteristics: "вонюч"}})
db.cats.updateOne({name : "Tom"}, {$push: {characteristics: {$each: ["храпит", "злой"]}}})
```

#### Оператор ```$addToSet```
Оператор ```$addToSet``` подобно оператору ```$push``` добавляет объекты в массив. Отличие состоит в том, что ```$addToSet``` добавляет данные, если их еще нет в массиве:
```js
db.cats.update({name : "Lama"}, {$addToSet: {characteristics: "безумен"}})
```
#### Оператор ```$pop``` 
Позволяет удалять элемент из массива:
```js
db.cats.update({name : "Tom"}, {$pop: {characteristics: 1}})
```
> 1 конец массива
> -1 начало массива

#### Оператор ```$pull ```
Удаляет по значению
```js
db.cats.update({name : "Tom"}, {$pull: {characteristics: "серый"}})
```
#### Оператор ```$pullAll```
А если мы хотим удалить не одно значение, а сразу несколько, тогда мы можем:
```js
db.cats.update({name : "Tom"}, {$pullAll: {characteristics: ["не дает себя гладить", "вонюч", "храпит"]}})
```

### Удаление

Для удаления документов в MongoDB предусмотрен метод ```remove```:
```js
db.cats.remove({name : "Tom"})
db.cats.remove({name : "Tom"}, true) - once
db.cats.remove({name : "Tom"}, false) - default multi 
```
