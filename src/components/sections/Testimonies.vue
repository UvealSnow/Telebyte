<template>
  <div id="testimonios" class="testimonies">
    <div class="cool-bg">
      <div class="polygon"></div>
    </div>

    <div class="testimonies__container">
      <p class="subtitle text-center">{{ section.subtitle }}</p>
      <h3 class="title text-center">{{ section.title }}</h3>

      <testimony
        v-for="(testimony, i) in $static.gcms.testimonies"
        :testimony="testimony"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import Testimony from '../Testimony.vue';

export default {
  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },

  components: {
    Testimony,
  },
};
</script>

<static-query>
{
  gcms {
    testimonies(orderBy: featured_ASC) {
      clientName
      review
      clientPicture {
        url
      }
    }
  }
}
</static-query>

<style lang="scss">
$bg-height: 440px;

.cool-bg {
  width: 100%;
  height: $bg-height;
  position: relative;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url('../../assets/img/servers.png');
}

.polygon {
  width: 100%;
  height: $bg-height;
  top: 0; left: 0;
  clip-path: polygon(0% 0%, 70% 0%, 20% 100%, 0% 100%);
  background-image: linear-gradient(to bottom, rgba(98, 138, 56, .3), rgba(98, 138, 56, .3));
}

.testimonies {
  @apply w-full mx-auto mt-24 mb-80 relative;

  &__container {
    @apply text-center w-10/12 mx-auto bg-white shadow-lg rounded-sm p-10;
    top: 45%; left: 50%;
    position: absolute;
    transform: translateX(-50%);
  }
}
</style>
