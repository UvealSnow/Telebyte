<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="href"
    class="action-button"
    :class="`action-button--${style}`"
    @click="$emit(events.CLICK)"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: null,
    },

    style: {
      type: String,
      default: 'primary',
    },
  },

  data: () => ({
    events: {
      CLICK: 'click',
    },
  }),
};
</script>

<style lang="scss">
.action-button {
  @apply font-bold block
    text-xs md:text-sm lg:text-base
    w-full py-4 px-8 mt-4
    rounded-full
    disabled:opacity-50;

  &--primary {
    @apply bg-telebyte-green text-white hover:text-gray-100;
  }

  &--secondary {
    @apply bg-white text-black;
  }
}
</style>
