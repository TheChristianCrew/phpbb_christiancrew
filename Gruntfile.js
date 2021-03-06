module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * grunt-sass
     * https://www.npmjs.com/package/grunt-sass
     *
     * Compiles Sass from ./sass/main.scss and saved to ./style.css
     */
    sass: {
      buildStylesheet: {
        files: {
          'theme/stylesheet.css': 'scss/main.scss'
        }
      }
    },

    /**
     * grunt-postcss
     * https://github.com/nDmitry/grunt-postcss
     *
     * pixrem - adds fallbacks for rem
     * autoprefixer - Adds vendor prefixes
     * cssnano - minifies and optimizes css
     */
    postcss: {
      options: {
        processors: [
          require('pixrem')(),
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano'),
          require('postcss-merge-rules')()
        ]
      },
      dist: {
        src: 'theme/stylesheet.css'
      }
    },

    /**
     * grunt-contrib-uglify
     * https://github.com/gruntjs/grunt-contrib-uglify
     *
     * Minifies JavaScript
     */
     uglify: {
       dist: {
         files: {
           'template/js/cc.min.js': ['template/js/vendor/*.js', 'template/js/cc.js']
         }
       }
     },

    /**
     * grunt-contrib-watch
     * https://github.com/gruntjs/grunt-contrib-watch
     *
     * Automatically run grunt when files change
     */
    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['scss/*.scss', 'scss/components/*.scss', 'scss/utilities/*.scss', 'scss/vendor/*.scss'],
        tasks: ['sass', 'postcss']
      },
      js: {
        files: ['template/js/vendor/*.js', 'template/js/cc.js'],
        tasks: ['uglify']
      }
    }

  });

  // Automatically load all NPM tasks
  require('load-grunt-tasks')(grunt);

  // Register tasks
  grunt.registerTask('default', ['sass', 'postcss', 'uglify']);

}
