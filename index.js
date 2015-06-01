var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  files.unshift(pattern(path.resolve(require.resolve('steam-factory'))));
};

framework.$inject = ['config.files'];
module.exports = {'framework:steam-factory': ['factory', framework]};
