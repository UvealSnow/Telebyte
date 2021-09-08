<template>
  <div class="hero">
    <div class="stripe"></div>
    <div class="hero__content absolute text-center">
      <p
        v-if="section.subtitle"
        v-text="section.subtitle"
        class="text-gray-300 uppercase font-bold text-xs"
      />
      <h1
        v-if="section.title"
        v-text="section.title"
        class="text-white uppercase font-bold text-lg md:text-3xl lg:text-5xl"
      />
      <a
        v-if="section.slug"
        v-text="section.actionText"
        :href="section.slug"
        class="block shadow max-w-xs mx-auto bg-white text-xs font-bold rounded-full px-6 py-3 mt-4 uppercase"
      />
      <span v-else class="my-10 w-full h-8 block" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.hero {
  height: 630px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../../assets/img/hero-bg.png');

  &__content {
    top: 50%;
    left: 50%;

    width: 100vw;
    transform: translate(-50%, 0%);

    @screen md {
      width: 650px;
      transform: translate(-50%, -100%);
    }

    @screen lg {
      width: 1000px;
      transform: translate(-50%, -100%);
    }
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

