<template>
  <Layout>
    <hero
      :section="{
        title: 'Publicaciones',
        subtitle: 'La experiencia Telebyte!'
      }"
    />

    <div class="container mx-auto">
      <p class="subtitle text-center mt-8">Vuelve pronto</p>
      <h1 class="title text-4xl text-center">En construcción</h1>
    </div>
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

<static-query>
{
  gcms {
    services(orderBy: order_ASC) {
      title
      slug
      brief
      icon
    }
  }
}
</static-query>