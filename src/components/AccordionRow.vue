<template>
  <div class="accordion-row border-b first:border-t border-gray-300">
    <div
      class="accordion-row__title flex flex-row items-center py-3 cursor-pointer"
      @click="toggle"
    >
      <icon image="chevron-down" size="sm" color="black" />
      <h3 class="text-sm text-gray-500 ml-4 select-none" v-text="page.title" />
    </div>

    <div
      class="accordion-row__body text-xs text-gray-500 leading-relaxed pl-10"
      :class="[ active ? 'block' : 'hidden' ]"
    >
      <p class="mb-2" v-text="page.brief" />
      <g-link class="block font-bold mb-4" :to="page.slug">leer más</g-link>
    </div>
  </div>  
</template>

<script>
export default {
  props: {
    page: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  data: () => ({
    active: false,
  }),

  methods: {
    toggle() {
      this.$emit('close-all');
      this.active = true;
    },

    close() {
      this.active = false;
    },
  },
};
</script>
