var path = require('path');

// 디렉터리 이름 합치기
var directoies  = ["users", "mike", "docs"];
var docsDirectory = directoies.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);

//디렉터리 이름과 파일 이름 합치기
var curPath = path.join('/Users/jay', 'notepad.exe');
console.log('파일 패스 : %s', curPath);

var dirname = path.dirname(curPath);
var basename = path.basename(curPath);
var extname = path.extname(curPath);

console.log('디렉터리 : %s, 파일이름 : %s, 확장자 : %s', dirname,  basename, extname);