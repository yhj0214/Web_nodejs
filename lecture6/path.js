var pathUtil = require('path');

var path = '/foo/bar/baz/asdf/quux.html';

console.log('dirname : ', pathUtil.dirname(path));
console.log('basename : ', pathUtil.basename(path));
console.log('extname : ', pathUtil.extname(path));

var parsed = pathUtil.parse('/usr/tmp/local/image.png');
console.log('parsed : ', parsed);
console.log('base : ', parsed.base);
console.log('ext : ', parsed.ext)