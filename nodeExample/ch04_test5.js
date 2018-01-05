const fs = require('fs');

// 파일을 동기식 IO로 읽어 들입니다

const data = fs.readFileSync('../package.json', 'utf-8');

// 읽어 들인 데이터를 출력한다.
console.log(data);