<template>
  <div class="page-header">
    <div class="flex flex-col md:flex-row md:items-center">
      <div class="flex-grow">
        <g-link to="/">
          <g-image class="pl-4 sm:pl-0" :alt="$static.metadata.siteName" src="~/assets/img/telebyte-logo.png" />
        </g-link>
      </div>

      <div class="flex flex-col text-white md:flex-row">
        <header-cta
          v-for="(cta, i) in ctas"
          :icon="cta.icon"
          :title="cta.title"
          :key="i"
          class="ml-8"
          :class="cta.class"
        >
          <a v-if="cta.linkTo" :href="cta.linkTo" class="text-xs text-white" v-text="contactData[cta.key]" />
          <p v-else class="text-xs text-white" v-text="contactData[cta.key]" />
        </header-cta>
      </div>
    </div>

    <div class="hidden md:flex bg-white rounded mt-2">
      <div class="flex flex-grow items-center py-2 p-4">
        <a v-for="(link, i) in links" :key="i" :href="link.linkTo" v-text="link.label" class="text-sm px-3 block" />
      </div>
      <div class="header__socials flex items-center justify-items-end">
        <a v-for="(link, i) in $static.metadata.socialNetworks" :key="i" :href="link.linkTo" class="py-2 px-4 border-gray-200 border-l h-full">
          <icon :image="link.icon" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCta from '~/components/HeaderCta.vue'

export default {
  props: {
    contactData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  
  components: {
    HeaderCta,
  },

  data: () => ({
    ctas: [
      {
        icon: 'mail',
        title: 'Envíanos un correo',
        key: 'email',
        linkTo: 'emailAction',
      },
      {
        icon: 'phone-incoming',
        title: 'Llámanos',
        key: 'phone',
        linkTo: 'phoneAction',
      },
      {
        icon: 'watch',
        title: 'Horario de atención',
        key: 'schedule',
        class: 'flex md:hidden lg:flex'
      },
    ],
    links: [
      { label: 'INICIO', linkTo: '/' },
      { label: 'SERVICIOS', linkTo: '/#servicios' },
      { label: 'GALERÍA', linkTo: '/#proyectos' },
      { label: 'TESTIMONIOS', linkTo: '/#testimonios' },
      { label: 'CONTÁCTANOS', linkTo: '#contactanos' },
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

<style lang="scss" scoped>
.page-header {
  @apply container mx-auto flex-col bg-gray-900 z-50
    py-3 md:px-8
    md:fixed;
}
</style>
