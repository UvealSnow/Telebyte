<template>
  <div class="footer relative flex flex-col md:flex-row justify-center font-light">
    <div class="footer__contact shadow-xl relative md:absolute flex flex-row container mx-auto bg-white">
      <div class="footer__contact--left py-12 px-8 w-full lg:w-3/5">
        <h3 class="text-2xl text-black">
          <span class="font-bold">Envíanos</span> un mensaje
        </h3>

        <contact-form id="contactanos" class="pt-8" />
      </div>
      <div class="footer__contact--right hidden lg:block border-l border-gray-300 py-12 px-8 w-2/5">
        <h3 class="text-2xl text-black pb-6">
          <span class="font-bold">Nuestros</span> datos
        </h3>

        <header-cta
          v-for="(cta, i) in ctas"
          :icon="cta.icon"
          color="gray"
          :key="i"
          class="text-black py-2"
          :title="cta.title"
        >
          <a v-if="cta.linkTo" :href="cta.linkTo" v-text="contactData[cta.key]" />
          <p v-else v-text="contactData[cta.key]" />
        </header-cta>
      </div>
    </div>

    <footer class="footer flex flex-col w-full bg-black">
      <div class="footer__container w-full">
        <div class="footer__content container mx-auto flex flex-col md:flex-row items-end h-full p-8 justify-end md:justify-start">
          <div class="footer__left order-last md:order-first container flex flex-col">
            <g-link to="/">
              <g-image class="pl-0 md:pl-4" :alt="$static.metadata.siteName" src="~/assets/img/telebyte-logo.png" />
            </g-link>
            <p class="text-white leading-loose py-4" v-text="$static.metadata.siteDescription" />
            <div class="flex w-full">
              <a v-for="(link, i) in $static.metadata.socialNetworks" :key="i" :href="link.linkTo" class="py-4 pr-8">
                <icon :image="link.icon" color="white" />
              </a>
            </div>
          </div>
          <div class="footer__right order-first md:order-last md:pl-16">
            <h3 class="text-2xl uppercase text-white font-bold pb-4">contáctanos</h3>

            <header-cta v-for="(cta, i) in ctas" :icon="cta.icon" color="white" :key="i" class="text-white py-1">
              <a v-if="cta.linkTo" :href="cta.linkTo" v-text="contactData[cta.key]" />
              <p v-else v-text="contactData[cta.key]" />
            </header-cta>
          </div>
        </div>
      </div>
      <div class="footer__credits text-white text-xs p-8">
        <p>Hecho por <a href="https://kevinavila.pro" class="">@UvealSnow</a></p>
        <p>© Telebyte, {{ currentYear }}</p>
      </div>
    </footer>
  </div>
</template>

<script>
import HeaderCta from './HeaderCta.vue';
import ContactForm from './ContactForm.vue';

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
    ContactForm,
  },

  data: () => ({
    ctas: [
      {
        icon: 'map-pin',
        title: 'DIRECCIÓN',
        key: 'address',
      },
      {
        icon: 'mail-sm',
        title: 'CORREO ELECTRONICO',
        key: 'email',
        linkTo: 'emailAction',
      },
      {
        icon: 'phone',
        title: 'NÚMERO',
        key: 'phone',
        linkTo: 'phoneAction',
      },
      {
        icon: 'watch-sm',
        title: 'HORARIO',
        key: 'schedule',
      },
    ],
  }),

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
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
$height-sm: 680px;
$height-md: 580px;

.btn {
  background-color: #7ca45d;
}

.footer {
  min-height: $height-sm;

  @screen md {
    margin-top: 200px;
  }

  &__contact {
    @screen md {
      bottom: 400px;
    }
  }

  &__veil {
    width: 100vw;
    height: $height-sm;
    position: absolute;
    background-color: rgba(0, 0, 0, .5);
    
    @screen md {
      height: $height-md;
    }
  }

  &__container {
    height: $height-sm;
    overflow: hidden;
    background-size: cover;
    background-position: top;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../assets/img/fiber.jpeg');
    
    @screen md {
      height: $height-md;
    }
  }

  &__left {
    width: 380px;
    max-width: 100%;
  }

  &__right {
    width: 550px;
    max-width: 100%;
  }
}
</style>
