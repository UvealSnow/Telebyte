<template>
  <Layout>
    <hero
      :section="{
        title: 'Servicios',
        subtitle: 'Encuentra el servicio que tu empresa requiere'
      }"
    />
  </Layout>
</template>

<script>
import Hero from '../components/sections/Hero.vue';

export default {
  components: {
    Hero,
  },
};
</script>
