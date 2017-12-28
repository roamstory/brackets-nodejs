var url = require('url');
var querystring =  require('querystring');

var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curURL);

console.log('주소문자열 : %s',curStr);

console.dir(curURL);


var param = querystring.parse(curURL.query);

console.log(param.query);
console.log(querystring.stringify(param));