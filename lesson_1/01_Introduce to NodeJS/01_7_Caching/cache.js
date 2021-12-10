module.exports = {
    fname : "Ivan",
    lname : "Ivanov",
    age : 25,
    sayHello : function () {
        console.log('Hello! ', 'My name is ', this.fname, ' I\'m ', this.age, ' years old!')
    }
}