// https://github.com/adamwathan/vue-cli-tailwind-example/edit/master/.postcssrc.js
module.exports = {
  "plugins": [
    require('postcss-import')(),
    require('postcss-url')(),
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')(),
  ]
}
