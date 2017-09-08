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

/**
 * #sass method
 */
// elixir(function(mix) {
//     mix.sass(['app.scss', 'content.scss']);
// });

/**
 * #less method
 */
// 默认生成app.css 
// elixir(function(mix) {
//     mix.less(['app.less', 'controllers.less']);
// });

// 指定生成目录以及文件
// elixir(function(mix) {
//     mix.less(['app.less', 'controllers.less'], 'public/stylesheets/style.css');
// });

// #styles method
// 默认生成all.css 
// elixir(function(mix) {
//     mix.styles([
//         'main.css'
//     ]);
// });
// 
// # browserify method
// elixir(function(mix) {
//     mix.browserify('main.js');
// });
// 
// 


/**
 * babel method
 */
// elixir(function(mix) {
//     mix.babel([
//         'order.js',
//         'product.js'
//     ]);
// });

/**
 * scripts method.
 */
// elixir(function(mix) {
//     mix.scripts([
//         'main.js',
//         'app.js'
//     ]);
// });
// 

// 合并多个文件到不同的文件
// elixir(function(mix) {
//     mix.scripts(['app.js', 'controllers.js'], 'public/js/app.js')
//         .scripts(['forum.js', 'threads.js'], 'public/js/forum.js');
// });


/**
 * version method (对public文件夹下的文件增加版本号)
 * @param  {[type]} mix) { mix.version(['css/all.css', 'js/app.js']);} [description]
 * @return {[type]}      [description]
 */
elixir(function(mix) {
    mix.version(['css/all.css', 'js/app.js']);
});


/**
 * #task method
 */
require('./tasks/elixir-extensions');

elixir(function(mix) {
    // mix.speak('Tea, Earl Grey, Hot');
});