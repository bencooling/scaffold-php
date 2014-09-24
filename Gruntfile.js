'use strict';

/*
|--------------------------------------------------------------------------
| Gruntfile
|--------------------------------------------------------------------------
| 
| Main configuration file for tasks
|
*/
module.exports = function(grunt){

  // Plugins
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    /*
    |--------------------------------------------------------------------------
    | "phpunit" task
    |--------------------------------------------------------------------------
    | 
    | Perform test
    |
    */
  , phpunit: {
      unit: {
        dir: 'tests'
      }
    , options: {
        bin: 'vendor/bin/phpunit'
      , configuration: 'phpunit.xml'
      }
    }

    /*
    |--------------------------------------------------------------------------
    | "watch" task
    |--------------------------------------------------------------------------
    |
    | Perform test on saving php file
    | Refresh config files on change.
    |
    */
  , watch: {
      options: {
        livereload: true
      }
    , php : {
      files: [ 'app/**/*.php' ]
    , tasks: [ 'phpunit' ]
    }
    , configFiles: {
        files: [ 'Gruntfile.js' ]
      }
    }

    /*
    |--------------------------------------------------------------------------
    | "php" task
    |--------------------------------------------------------------------------
    | 
    | Run HTML server
    |
    */
  , php: {
      dist: {
        options: {
          port: 8080,
          base: '',
          open: true,
          keepalive: true
        }
      }
    }

  });

  /*
  |--------------------------------------------------------------------------
  | "preview" task
  |--------------------------------------------------------------------------
  |
  | View application in browser
  |
  */
  grunt.registerTask('default', [
    'phpunit'
  , 'php'
  ]);

};