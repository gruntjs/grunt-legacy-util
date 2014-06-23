module.exports = function(grunt) {

  var util = require('../../');

  grunt.registerTask('default', function(text) {
    var done = this.async();
    util.spawn({
      grunt: true,
      args: ['--gruntfile', 'Gruntfile-argv-child.js'],
    }, function(err, result, code) {
      var matches = result.stdout.match(/^(OUTPUT: .*)/m);
      console.log(matches ? matches[1] : '');
      done();
    });
  });

};
