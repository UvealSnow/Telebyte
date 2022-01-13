<template>
  <Layout>
    <div class="text-lg font-light">
      <hero :section="{ title: service.title, subtitle: 'Uno de nuestros servicios' }" />

      <div class="container mx-auto my-24">
        <h1 class="font-bold text-4xl pb-8" v-text="service.title" />
        <div v-html="service.body" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Hero from '../components/sections/Hero.vue';

export default {
  components: {
    Hero,
  },

  computed: {
    service() {
      return this.$page.gcms.service;
    }
  },
};
</script>

<page-query>
query getService($slug: String) {
  gcms {
    service(where: { slug: $slug }) {
      title
      body
      icon
    }
  }
}
</page-query>

<style lang="scss" scoped>
.project {
  &__bg {
    height: 630px;
  }
}
</style>
