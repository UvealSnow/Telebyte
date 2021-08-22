<template>
  <div class="my-3 md:my-0 flex justify-start">
    <div class="icon">
      <icon :image="icon" size="medium" :color="color" />
    </div>
    <div class="flex flex-col flex-grow">
      <p v-if="title" class="text-sm text-white font-bold pb-1" v-text="title" />
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      required: true,
      type: String,
    },

    title: {
      type: String,
      default: '',
    },

    color: {
      type: String,
      default: 'green',
    },
  },
};
</script>

<style lang="scss" scoped>
  .icon {
    margin: auto;
    min-width: 45px !important;
    flex-grow: 0;
  }
</style>
