/*
* @Author: GuoSai
* @Date:   2017-08-10 23:56:37
* @Last Modified by:   Peter
* @Last Modified time: 2017-09-09 01:17:28
*/

'use strict';

// File: elixir-extensions.js

var gulp = require('gulp');
var shell = require('gulp-shell');
var Elixir = require('laravel-elixir');

var Task = Elixir.Task;

Elixir.extend('speak', function(message) {

    new Task('speak', function() {
        return gulp.src('').pipe(shell('say ' + message));
    }).watch('./public/**');

});
