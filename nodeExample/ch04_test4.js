var Calc = require('./calc3');

var calc = new Calc();
calc.emit('stop');
calc.add(10,20);
console.log(Calc.title + '에 stop 이벤트 전달함');