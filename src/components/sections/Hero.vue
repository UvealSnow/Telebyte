<template>
  <div class="hero">
    <div class="stripe"></div>
    <div class="hero__content absolute text-center">
      <p class="text-gray-300 uppercase font-bold text-xs">{{ section.subtitle }}</p>
      <h1 class="text-white uppercase font-bold text-lg md:text-3xl lg:text-5xl">{{ section.title }}</h1>
      <a class="block shadow max-w-xs mx-auto bg-white text-xs font-bold rounded-full px-6 py-3 mt-4" href="#">NUESTROS SERVICIOS</a>
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