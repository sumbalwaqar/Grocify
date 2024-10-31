const mix = require('laravel-mix');

mix
    .js('public/javascripts/app.js', 'public/dist')
    .sass('public/stylesheets/app.scss', 'public/dist')
    .setPublicPath('public')