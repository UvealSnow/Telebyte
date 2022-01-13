<template>
  <div class="hero">
    <div class="stripe"></div>
    <div class="hero__content">
      <div class="hero__text">
        <p
        v-if="section.subtitle"
        v-text="section.subtitle"
        class="text-gray-300 text-xs"
      />
      <h1
        v-if="section.title"
        v-text="section.title"
        class="text-2xl md:text-3xl lg:text-5xl md:max-w-lg lg:max-w-4xl"
      />

      <div class="w-3/4 md:w-2/5 max-w-xs mx-auto">
        <ActionButton
          v-if="section.slug"
          :href="section.slug"
        >
          {{ section.actionText }}
        </ActionButton>
        <span v-else class="my-10 w-full h-8 block" />
      </div>

      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from '~/components/atoms/ActionButton.vue';

export default {
  components: {
    ActionButton,
  },

  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.hero {
  @apply relative;
  height: 630px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../../assets/img/hero-bg.png');

  &__text {
    @apply text-center text-white uppercase font-bold
      px-8 z-10;
  }

  &__content {
    top: 0;
    @apply flex absolute justify-center items-center w-screen h-full;
  }
  
  .stripe {
    left: 50%;
    width: 100%;
    height: 100%;
    position: relative;
    background-size: cover;
    transform: translateX(-50%);
    background-repeat: no-repeat;
    clip-path: polygon(67% 0%, 100% 0%, 46% 100%, 10% 100%);
    background-image: linear-gradient(to bottom, rgba(98, 138, 56, .3), rgba(98, 138, 56, .3)), url('../../assets/img/polygon-bg.jpeg');
  }
}
</style>

