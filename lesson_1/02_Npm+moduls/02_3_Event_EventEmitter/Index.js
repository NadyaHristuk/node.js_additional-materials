const events = require('events');
const util = require('util');

let car= function(model){
    this.model = model;
}

util.inherits(car, events.EventEmitter);

const bmw = new car ('BMW');
const audi = new car ('Audi');
const volvo = new car ('Volvo');

const cars = [bmw, audi, volvo];
cars.forEach(function(car){
    car.on('speed', function(text){
        console.log(`${car.model} speed is - ${text}`)
    });
});

bmw.emit('speed', '254.5 km');
volvo.emit('speed', '180 km');
audi.emit('speed', '320 km');

// Пример показывает работу с двумя базовыми модулями - 'events' и 'util'
// в примере с помощью метода - util.inherits применяеться расширение функций
//  конструктора для классов - теперь каждый будущий экземпляр класса будет 
//  содержать функциональность events.EventEmitter