<template>
  <div id="header" class="header container mx-auto flex flex-col py-6">
    <div class="header__top flex items-center">
      <div class="header__logo flex-grow">
        <g-link to="/">
          <g-image alt="Example image" src="~/assets/img/telebyte-logo.png" />
        </g-link>
      </div>

      <div class="header_ctas flex">
        <header-cta icon="phone-incoming" title="Llámanos">
          <a class="text-xs text-white" href="tel:+524441983512">+52 444 198 3512</a>
        </header-cta>

        <header-cta icon="mail" title="Envíanos un correo">
          <a class="text-xs text-white" href="mailto:hola@telebyte.mx">hola@telebyte.mx</a>
        </header-cta>

        <header-cta icon="watch" title="Horario de atención">
          <p class="text-xs text-white">Lun - Vie 8:00am ~ 6:00pm</p>
        </header-cta>
      </div>
    </div>

    <div class="header__bottom flex bg-white rounded mt-6">
      <div class="header__links flex flex-grow items-center p-4">
        <a v-for="(link, i) in links" :key="i" :href="link.linkTo" v-text="link.label" class="text-sm px-3" />
      </div>
      <div class="header__socials flex items-center justify-items-end">
        <a v-for="(link, i) in socials" :key="i" :href="link.linkTo" class="p-4 border-gray-200 border-l h-full">
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
    socials: [
      { icon: 'facebook', linkTo: '' },
      { icon: 'twitter', linkTo: '' },
      { icon: 'instagram', linkTo: '' },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.header {
  // @apply ;
}
</style>