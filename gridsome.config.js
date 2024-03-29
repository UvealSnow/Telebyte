// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');

const postcssPlugins = [
  tailwind(),
];

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
      use: "gridsome-plugin-tailwindcss",
      // these options are optional, as they are copies of the default values...
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env.GRAPH_CMS_URL,
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
