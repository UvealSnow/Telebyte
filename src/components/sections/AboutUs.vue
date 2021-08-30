<template>
  <div class="about-us container mx-auto mt-24">
    <div class="about-us__container flex flex-row">
      <div class="about-us__bg hidden xl:block xl:w-1/2"></div>

      <div class="about-us__accordion self-end p-8 bg-gray-100 flex flex-col w-full xl:w-1/2">
        <p class="subtitle text-gray-400">{{ section.subtitle }}</p>
        <h3 class="title">{{ section.title }}</h3>

        <accordion :pages="$static.gcms.pages" />
      </div>
    </div> 
  </div>
</template>

<script>
import Accordion from '../Accordion.vue';

export default {
  components: {
    Accordion,
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

<static-query>
{
  gcms {
    pages(orderBy: order_ASC) {
      title
      brief
      slug
    }
  }
}
</static-query>

<style lang="scss" scoped>
.about-us {
  &__accordion {
    height: 445px;
  }

  &__bg {
    height: 520px;
    background-size: cover;
    background-position: left;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom, rgba(125, 164, 93, .45), rgba(125, 164, 93, .45)), url('../../assets/img/hero-bg.png');
  }
}
</style>
