<template>
  <component
    :is="require(`~/assets/img/icons/${image}.svg`)"
    :class="`svg-icon svg-icon--size-${size} svg-icon--${color}`"
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
    },
    color: {
      type: String,
      default: 'gray',
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

  &--gray {
    path {
      stroke-width: 2;
      stroke: rgba(0, 0, 0, .35);
    }
  }

  &--green {
    path {
      stroke-width: 2;
      stroke: rgba(124, 164, 93, 1);
    }
  }

  &--white {
    path {
      stroke-width: 2;
      stroke: rgba(255, 255, 255, 1);
    }
  }
}
</style>
