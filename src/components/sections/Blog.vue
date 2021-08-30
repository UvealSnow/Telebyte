<template>
  <div class="container mx-auto mt-24">
    <p class="subtitle text-center">{{ section.subtitle }}</p>
    <h3 class="title text-center">{{ section.title }}</h3>
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
