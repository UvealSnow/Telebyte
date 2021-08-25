<template>
  <Layout>
    <component  
      v-for="(section, i) in $page.gcms.sections"
      v-bind:section="section"
      :is="section.component"
      :key="i"
    />
  </Layout>
</template>

<script>
import components from '../components/sections/index.js';

export default {
  components,

  metaInfo: {
    title: 'Inicio'
  },
};
</script>


<page-query> 
{
  gcms {
    sections(orderBy: order_ASC) {
      slug
      title
      subtitle
      component
      actionText
    }
  }
}
</page-query>

<style lang="scss">
.hero {
  height: 630px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../assets/img/hero-bg.png');

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
  background-image: linear-gradient(to bottom, rgba(98, 138, 56, .3), rgba(98, 138, 56, .3)), url('../assets/img/polygon-bg.jpeg');
}
</style>
