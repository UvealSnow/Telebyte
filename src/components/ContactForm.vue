<template>
  <validation-observer ref="form" v-slot="{ handleSubmit }">
    <form @submit.prevent="handleSubmit(attemptSubmit)">
      <validation-provider v-slot="{ errors }" rules="required" name="name">
        <div class="input pb-4">
          <label for="name" class="block font-bold text-xs pb-2">Nombre completo</label>
          <input
            v-model="formData.name"
            class="border rounded border-gray-300 w-full p-1"
            id="name"
            type="text"
            autocomplete="off"
          >
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required|email" name="email">
        <div class="input pb-4">
          <label for="email" class="block font-bold text-xs pb-2">Email</label>
          <input
            class="border rounded border-gray-300 w-full p-1"
            id="email"
            type="email"
            autocomplete="off"
            v-model="formData.email"
          >
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>
      
      <validation-provider v-slot="{ errors }"  rules="required" name="message">
        <div class="input pb-4">
          <label for="message" class="block font-bold text-xs pb-2">Tu mensaje</label>
          <textarea
            class="border rounded border-gray-300 h-32 w-full p-1"
            name="message"
            v-model="formData.message"
          />
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>
      <vue-recaptcha
        :sitekey="envVars.recaptchaPublic"
        @verify="verifyRecaptcha"
      >
        <button :disabled="sending" class="bg-telebyte-green w-64 py-4 mt-4 rounded-full text-white font-bold text-sm">ENVIAR MENSAJE</button>
      </vue-recaptcha>
      <!-- <div class="g-recaptcha" :data-sitekey="envVars.recaptchaPublic"></div> -->
    </form>
  </validation-observer>
</template>

<script>
import axios from 'axios';
import VueRecaptcha from 'vue-recaptcha';
import { ValidationProvider, ValidationObserver } from 'vee-validate';

const initialFormData = {
  name: '',
  email: '',
  message: '',
  'g-recaptcha-response': '',
};

export default {
  components: {
    VueRecaptcha,
    ValidationObserver,
    ValidationProvider,
  },

  data: () => ({
    sending: false,
    formData: {},
  }),

  created() {
    this.formData = initialFormData;
  },

  computed: {
    envVars() {
      return {
        formspreeUrl: process.env.GRIDSOME_FORMSPREE_URL,
        recaptchaPublic: process.env.GRIDSOME_RECAPTCHA_PUBLIC,
      };
    },
  },

  methods: {
    attemptSubmit() {
      this.$refs.form.validate().then(() => {
        if (!this.sending) {
          this.sending = true;
          axios.post(
            this.envVars.formspreeUrl,
            { ...this.formData },
            { headers: { 'Accept': 'application/json' } },
          ).then(() => {
            this.$toast.success("Mensaje enviado!");
            this.formData = initialFormData;
          })
          .catch(() => this.$toast.error('El mensaje no pudo ser enviado'))
          .then(() => this.sending = false);
        }
      });
    },

    verifyRecaptcha(val) {
      this.formData['g-recaptcha-response'] = val;
      this.attemptSubmit();
    },
  },
};
</script>
