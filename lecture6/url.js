var url = require('url');

var urlStr = 'http://idols.com/hot/q?group=EXID&name=하니&since=';
var parsed = url.parse(urlStr, true);
console.log('지금부터 parsed 시작')
console.log(parsed);

console.log('지금부터 parsed 끝')

console.log('protocol : ', parsed.protocol);
console.log('host : ', parsed.host);
console.log('query : ', parsed.query);