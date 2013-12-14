module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: ['/*! <%= pkg.name %> <%= pkg.version %>. ',
                 'Copyright 2013 Chris Cummins. Built ',
                 '<%= grunt.template.today("dd-mm-yyyy") %>. */\n'].join(''),
        compress: true
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>-<%= pkg.version %>.min.js': ['<%= pkg.name %>.js']
        }
      }
    },
    jshint: {
      files: ['Gruntfile.js <%= pkg.name %>.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'uglify']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'uglify']);
};
