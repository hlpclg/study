/*
* @Author: GuoSai
* @Date:   2017-08-10 23:56:37
* @Last Modified by:   GuoSai
* @Last Modified time: 2017-08-10 23:58:12
*/

'use strict';


'use strict';

// File: elixir-extensions.js

var gulp = require('gulp');
var shell = require('gulp-shell');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('speak', function(message) {

    new Task('speak', function() {
        return gulp.src('').pipe(shell('say ' + message));
    });

}).watch('./app/**');


// mix.speak('Hello World');