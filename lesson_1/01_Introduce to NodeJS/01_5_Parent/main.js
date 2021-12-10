const db = require('./dbConnection');

const cn = new db();
cn.connect();

// Пример проверяет являеться ли модуль подключаемым или запускемым, 
// который ранее уже был подключён