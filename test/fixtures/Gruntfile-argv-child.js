module.exports = function(grunt) {

  grunt.registerTask('default', function(text) {
    console.log('OUTPUT: ' + process.argv.slice(2).join(' '));
  });

};
