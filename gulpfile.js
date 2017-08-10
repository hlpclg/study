/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// #production —— 检查当前环境是否是生成环境，默认为true
// #assetsDir —— 前端资源目录路径，默认是resources/assets
// #cssOutput —— 所有css文件默认输出目录，默认是public/css
// #jsOutput —— 所有JS文件输出目录，默认是public/js
// #sourcemaps —— 是否要生成Source Map（关于什么是Source Map，可参考阮一峰的这篇文章：JavaScript Source Map 详解），默认为true


var elixir = require('laravel-elixir');

/**
 * laravel elixir config
 * @type {Boolean}
 */
elixir.config.production = false;
// elixir.config.assetsDir = false;
// elixir.config.cssOutput = false;
// elixir.config.jsOutput = false;
elixir.config.sourcemaps = false;

// 
elixir(function(mix) {
    mix.sass(['app.scss', 'content.scss']);
});

// 默认生成app.css 
// elixir(function(mix) {
//     mix.less(['app.less', 'controllers.less']);
// });

// 指定生成目录以及文件
// elixir(function(mix) {
//     mix.less(['app.less', 'controllers.less'], 'public/stylesheets/style.css');
// });

// 默认生成all.css 
// elixir(function(mix) {
//     mix.styles([
//         'main.css'
//     ]);
// });