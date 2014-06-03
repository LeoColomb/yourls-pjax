module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './assets',
          layout: function (type, component) {
            return type;
          }
        }
      }
    },
    uglify: {
      options: {
        report: 'min'
      },
      javascript: {
        src: 'assets/js/jquery.pjax.js',
        dest: 'assets/js/jquery.pjax.min.js',
      }
    }
  });

  // Load modules required
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-composer');

  // Default task
  grunt.registerTask('default', [
    'bower',
    'uglify',
    'composer:update:no-dev:optimize-autoloader'
  ]);
};
