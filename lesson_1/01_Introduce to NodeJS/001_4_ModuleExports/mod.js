var number = 10;

function hello(){
    console.log('Hello, User!');
}

module.exports = {
    variable : number,
    sayHello : hello
};


// module.exports = exports = this.exports
// - значение попадает не в объект exports 
// а в объект module и у него есть свойство export и это свойство хранит
// объект, который будет экспортироваться, а само слово exports 
// просто хранит ссылку на  module.exports
