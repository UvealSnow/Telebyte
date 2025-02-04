<template>
  <div
    class="project bg-no-repeat bg-center bg-cover"
    :style="`background-image: url('${image}')`"
  >
    <div class="project__container flex flex-col justify-center items-center w-full h-full transition-all duration-300">
      <p v-text="project.title" class="text-gray-300 text-xs uppercase -mb-2" />
      <div>
        <g-link :to="`/projects/${project.slug}`" class="-ml-4">
          <icon image="zoom-in" color="white" size="large" weight="bold" />
        </g-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    image() {
      const { url } = this.project.image;
      const arr = url.split('/');
      arr.splice(arr.length - 1, 0, 'quality=value:50');
      return arr.join('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  height: 320px;

  &__container {
    opacity: 0;
    position: relative;
    background-color: rgba(#7CA45D, .75);
  }

  &:hover > &__container {
    opacity: 1;
  }
}
</style>