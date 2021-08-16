<template>
  <div class="header__cta flex">
    <icon :image="icon" size="medium" class="mr-3 ml-6" />
    <div class="flex flex-col">
      <p class="text-sm text-white font-bold pb-1" v-text="title" />
      <slot />
    </div>
  </div>
</template>

<script>
// import Icon from '@/components/atoms/Icon.vue';

// To do: Is this really a good idea?
export default {
  components: {
    // Icon,
  },

  props: {
    icon: {
      required: true,
      type: String,
    },

    title: {
      type: String,
      default: 'CTA title',
    },
  },
};
</script>
