<template>
  <div class="service">
    <icon
      color="black"
      size="xl"
      weight="bold"
      class="mb-4"
      :image="service.icon"
    />
    <h3 class="text-sm text-black uppercase font-bold pb-2" v-text="service.title" />
    <p class="w-4/6 text-xs text-gray-400 leading-relaxed pb-2" v-text="service.brief" />

    <g-link
      :to="`services/${service.slug}`"
      class="text-telebyte-green text-xs uppercase font-bold"
    >leer más</g-link>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.service {
  @apply flex flex-col
    lg:pl-6
    border-gray-300 lg:border-l md:first:border-l-0;
}
</style>
