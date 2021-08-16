<template>
  <component
    :is="require(`~/assets/img/icons/${image}.svg`)"
    :class="`svg-icon svg-icon--size-${size}`"
  />
</template>

<script>
export default {
  name: 'Icon',

  props: {
    image: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'small',
    }
  },
};
</script>

<style lang="scss" scoped>
.svg-icon {
  max-width: 100%;
  max-height: 100%;

  &--size-small {
    width: 25px;
    height: 25px;
  }

  &--size-medium {
    width: 35px;
    height: 35px;
  }

  &--size-large {
    width: 60px;
    height: 60px;
  }
}
</style>
