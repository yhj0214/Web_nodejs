var pathUtil = require('path');

var path = '/foo/bar/baz/asdf/quux.html';

var newPath = pathUtil.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
console.log('path.join : ', newPath);

var newPath2 = pathUtil.format({
    root : "/",
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
});

console.log('path.format : ', newPath2);