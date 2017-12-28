var os = require('os');

console.log(os.hostname());
console.log('시스템의 메모리 : %d / %d / %d', os.freemem(), os.totalmem(), os.totalmem()-os.freemem());

console.log(os.cpus());
console.log(os.networkInterfaces());