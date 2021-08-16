// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/scss/main.scss');

import Icon from '~/components/atoms/Icon.vue';
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Icon', Icon);
  Vue.component('Layout', DefaultLayout);
}
