<template>
  <validation-observer ref="form" v-slot="{ valid }">
    <form
      class="mt-4"
      method="POST"
      :action="envVars.formspreeUrl"
    >
      <validation-provider v-slot="{ errors }" rules="required" name="name">
        <div class="input pb-4">
          <label for="name" class="block font-bold text-xs pb-2">Nombre completo</label>
          <input
            v-model="name"
            class="border rounded border-gray-300 w-full p-1"
            id="name"
            name="name"
            type="text"
            autocomplete="off"
            required
          >
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>

      <validation-provider v-slot="{ errors }" rules="required|email" name="_replyto">
        <div class="input pb-4">
          <label for="email" class="block font-bold text-xs pb-2">Email</label>
          <input
            v-model="email"
            class="border rounded border-gray-300 w-full p-1"
            id="email"
            type="email"
            name="_replyto"
            autocomplete="off"
            required
          >
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>
      
      <validation-provider v-slot="{ errors }"  rules="required" name="message">
        <div class="input pb-4">
          <label for="message" class="block font-bold text-xs pb-2">Tu mensaje</label>
          <textarea
            v-model="message"
            class="border rounded border-gray-300 h-32 w-full p-1"
            name="message"
            required
          />
          <span class="text-xs text-red-500" v-text="errors[0]" />
        </div>
      </validation-provider>
      <div class="g-recaptcha" :data-sitekey="envVars.recaptchaPublic"></div>
      <button
        :disabled="!valid"
        type="submit"
        class="bg-telebyte-green w-64 py-4 mt-4 rounded-full text-white font-bold text-sm disabled:opacity-50"
      >
        ENVIAR MENSAJE
      </button>
    </form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data: () => ({
    name: '',
    email: '',
    message: '',
  }),

  computed: {
    envVars() {
      return {
        formspreeUrl: process.env.GRIDSOME_FORMSPREE_URL,
        recaptchaPublic: process.env.GRIDSOME_RECAPTCHA_PUBLIC,
      };
    },
  },
};
</script>
