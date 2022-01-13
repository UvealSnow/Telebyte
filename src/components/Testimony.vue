<template>
  <div class="testimony">
    <div class="testimony__controls">
      <icon class="cursor-pointer" size="xl" image="chevron-left" />
      <div class="flex-grow">
        <img class="w-14 mx-auto" :src="testimony.clientPicture.url" :alt="testimony.clientName">
      </div>
      <icon class="cursor-pointer" size="xl" image="chevron-right" />
    </div>

    <p class="testimony__review" v-text="testimony.review" />

    <p class="text-xs font-bold" v-text="`- ${testimony.clientName}`" />
  </div>
</template>

<script>
export default {
  props: {
    testimony: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss">
.testimony {
  @apply flex flex-col;

  &__controls {
    @apply  flex flex-row w-60 mx-auto items-center;
  }

  &__review {
    @apply text-xs w-10/12 md:w-7/12 lg:w-5/12 mx-auto leading-loose my-8;
  }
}
</style>
