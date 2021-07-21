const EventEmitter = require('events');

console.log(__filename);
console.log(__dirname);
var url='http://mylogger.io/log';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        //Raise an event
        this.emit('messageLogging', {id : 2,  url : 'http://'})
    }
}




module.exports = Logger;
