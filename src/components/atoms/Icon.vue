<template>
  <component
    :is="require(`~/assets/img/icons/${image}.svg`)"
    :class="`svg-icon svg-icon--size-${size} svg-icon--${color} svg-icon--${weight}`"
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
    },
    weight: {
      type: String,
      default: 'normal',
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
    width: 40px;
    height: 40px;
  }

  &--size-xl {
    width: 50px;
    height: 50px;
  }

  &--gray {
    path {
      stroke: rgba(0, 0, 0, .35);
    }
  }

  &--black {
    path {
      stroke: rgba(0, 0, 0, 1);
    }
  }

  &--green {
    path {
      stroke: rgba(124, 164, 93, 1);
    }
  }

  &--white {
    path {
      stroke: rgba(255, 255, 255, 1);
    }
  }

  &--normal {
    path {
      stroke-width: 2;
    }
  }

  &--bold {
    path {
      stroke-width: 4;
    }
  }
}
</style>
