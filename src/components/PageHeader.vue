<template>
  <div id="header" class="container mx-auto flex-col py-6">
    <div class="flex flex-col md:flex-row md:items-center">
      <div class="flex-grow">
        <g-link to="/">
          <g-image class="pl-4 sm:pl-0" :alt="$static.metadata.siteName" src="~/assets/img/telebyte-logo.png" />
        </g-link>
      </div>

      <div class="flex flex-col text-white md:flex-row">
        <header-cta class="ml-8" icon="phone-incoming" title="Llámanos">
          <a class="text-xs text-white" href="tel:+524441983512">+52 444 198 3512</a>
        </header-cta>

        <header-cta class="ml-8" icon="mail" title="Envíanos un correo">
          <a class="text-xs text-white" href="mailto:hola@telebyte.mx">hola@telebyte.mx</a>
        </header-cta>

        <header-cta class="ml-8" icon="watch" title="Horario de atención">
          <p class="text-xs text-white">Lun - Vie 8:00am ~ 6:00pm</p>
        </header-cta>
      </div>
    </div>

    <div class="hidden sm:flex bg-white rounded mt-6">
      <div class="flex flex-grow items-center p-4">
        <a v-for="(link, i) in links" :key="i" :href="link.linkTo" v-text="link.label" class="text-sm px-3 block" />
      </div>
      <div class="header__socials flex items-center justify-items-end">
        <a v-for="(link, i) in $static.metadata.socialNetworks" :key="i" :href="link.linkTo" class="p-4 border-gray-200 border-l h-full">
          <icon :image="link.icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCta from '~/components/HeaderCta.vue'

export default {
  components: {
    HeaderCta,
  },

  data: () => ({
    links: [
      { label: 'INICIO', linkTo: '' },
      { label: 'SERVICIOS', linkTo: '' },
      { label: 'GALERÍA', linkTo: '' },
      { label: 'TESTIMONIOS', linkTo: '' },
      { label: 'CONTÁCTANOS', linkTo: '' },
    ],
  }),
};
</script>

<static-query>
query {
  metadata {
    siteName,
    socialNetworks {
      icon,
      linkTo,
    },
  }
}
</static-query>
