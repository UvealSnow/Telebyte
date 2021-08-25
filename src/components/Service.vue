<template>
  <div class="
    flex flex-col
    border-gray-300
    pl-10 pb-6
    lg:pb-0 lg:first:pl-0 lg:border-l md:first:border-l-0
  ">
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
