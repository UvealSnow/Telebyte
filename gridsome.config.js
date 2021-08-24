// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('postcss');

const postcssPlugins = [
  tailwind(),
];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgecss(require('./purgecss.config.js')));

const socialNetworks = [
  { icon: 'facebook', linkTo: 'https://facebook.com' },
  { icon: 'twitter', linkTo: 'https://twitter.com' },
  { icon: 'instagram', linkTo: 'https://instagram.com' },
];

module.exports = {
  siteName: 'Telebyte S.A. de C.V.',
  siteDescription: 'Con más de 30 años de experiencia, Telebyte S.A. de C.V. ofrece el mejor servicio disponible en la región.',

  metadata: {
    socialNetworks,
  },

  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://api-us-east-1.graphcms.com/v2/cksprroxl2ulp01y25dh9e078/master',
        fieldName: 'gcms',
        typeName: 'gcmsTypes',
      },
    },
  ],

  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}
