// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require('~/assets/scss/main.scss');


import Icon from '~/components/atoms/Icon.vue';
import DefaultLayout from '~/layouts/Default.vue';

import * as moment from 'moment';
import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

moment.locale('es');

extend('email', {
  ...email,
  message: 'Por favor ingresa un correo electrónico válido.',
});

extend('required',{
  ...required,
  message: 'Este campo es requerido.',
});

export default function (Vue, { head }) {
  // Set default layout as a global component

  Vue.component('Icon', Icon);
  Vue.component('Layout', DefaultLayout);

  head.script.push({
    src: 'https://www.google.com/recaptcha/api.js',
    body: true,
    async: true,
    defer: true,
  });
}
