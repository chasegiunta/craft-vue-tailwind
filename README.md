# craft-vue-tailwind

Fork of [craft-vue](https://github.com/chasegiunta/craft-vue) template that integrates the Tailwind CSS utility framework & removes unused CSS with Purgecss.

## What's Included

- `npm run dev` / `yarn dev`: first-in-class development experience.
  - Webpack + `vue-loader` for single file Vue components
  - State preserving hot-reload
  - Page reloading on file edits (twig, html, etc)
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build` / `yarn build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony)
  - Babel compiling
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano)
  - Static assets compiled with version hashes for efficient long-term caching
  - Removes unused CSS with Purgecss
  - Bundle size analytics

### Fork It And Make Your Own

You can (and should) fork this repo to create your own boilerplate

## Build Setup

``` bash
# create & install project
composer create-project chasegiunta/craft-vue-tailwind PATH -s RC

# run Craft's setup command

# install dependencies
npm install # yarn

# initialize Tailwind's config file
./node_modules/.bin/tailwind init

# run dev server (default runs on localhost:8080)
npm run dev # yarn dev

# build for production with minification
npm run build # yarn build
```

Only _your assets_ will be served from `localhost:8080` and referenced in the base template. You'll still load your site locally under your normal development domain (domain.test, etc.)

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tailwind utilities in .vue files
Using Tailwind utilities (`@apply`, etc.) inside a Vue component is possible, but not necessarily advisable. The problem is that you will have to inject the Tailwind utility classes into the <style> section for your component ([example here](https://github.com/chasegiunta/craft-vue-tailwind/blob/a3a62ea1077aff1515b05d33b41aece47a877d28/src/components/HelloWorld.vue#L23)) . This will cause those styles to be repeated for every component. Purgecss definitely helps alleviate this problem, but you will still end up with some repeating rules in your CSS file. You can read more about it [on this GitHub issue](https://github.com/tailwindcss/tailwindcss/issues/1). The Tailwind team was [considering a way around this](https://github.com/tailwindcss/tailwindcss/pull/169) but at this time have decided not to implement it (yet).

## Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use SASS:
``` bash
npm install sass-loader node-sass --save-dev
# yarn add sass-loader node-sass --dev
```
Note you also need to install node-sass because sass-loader depends on it as a peer dependency.

Read more about this at http://vuejs-templates.github.io/webpack/pre-processors.html

## Babel Compiling
This boilerplate uses babel-preset-env for configuring babel. [You can read more about it here.](http://vuejs-templates.github.io/webpack/babel.html)

## Linting
This boilerplate uses ESLint as the linter, and uses the Standard preset with some small customizations. [You can read more about it here.(http://vuejs-templates.github.io/webpack/linter.html)
