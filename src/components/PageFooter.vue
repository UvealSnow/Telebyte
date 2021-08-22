<template>
  <footer class="footer w-full bg-black">
    <div class="footer__container w-full">
      <div class="footer__content flex flex-row items-end h-full p-8">
        <div class="footer__left container flex flex-col">
          <g-link to="/">
            <g-image class="pl-4 sm:pl-0" :alt="$static.metadata.siteName" src="~/assets/img/telebyte-logo.png" />
          </g-link>
          <p class="text-white leading-loose py-4" v-text="$static.metadata.siteDescription" />
          <div class="flex w-full">
            <a v-for="(link, i) in $static.metadata.socialNetworks" :key="i" :href="link.linkTo" class="py-4 pr-8">
              <icon :image="link.icon" color="white" />
            </a>
          </div>
        </div>
        <div class="footer__right pl-16">
          <h3 class="text-2xl uppercase text-white font-bold pb-4">contáctanos</h3>

          <header-cta v-for="(cta, i) in ctas" :icon="cta.icon" color="white" :key="i" class="text-white py-1">
            <a v-if="cta.linkTo" :href="cta.linkTo" v-text="cta.title" />
            <p v-else v-text="cta.title" />
          </header-cta>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderCta from './HeaderCta.vue';

export default {
  components: {
    HeaderCta,
  },

  data: () => ({
    ctas: [
      { icon: 'map-pin', title: 'Cerrada Vista Hermosa #156. Fracc. Bosques de Linda Vista. Villa de Pozos. San Luis Potosí, S.L.P.' },
      { icon: 'mail-sm', title: 'hola@telebyte.mx', linkTo: 'mailto:hola@telebyte.mx' },
      { icon: 'phone', title: '+52 (444) 198 2929', linkTo: 'tel:+524441982929' },
      { icon: 'watch-sm', title: 'LUN - VIE 8:00 am ~ 5:00 pm' },
    ],
  }),
};
</script>

<static-query>
query {
  metadata {
    siteName,
    siteDescription,
    socialNetworks {
      icon,
      linkTo,
    },
  }
}
</static-query>

<style lang="scss" scoped>
.footer {
  height: 880px;
}

  .footer__veil {
    width: 100vw;
    height: 780px;
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
  }

  .footer__container {
    height: 780px;
    overflow: hidden;
    background-size: cover;
    background-position: top;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../assets/img/fiber.jpeg');
  }

  .footer__left {
    width: 380px;
  }

  .footer__right {
    width: 550px;
  }
</style>
