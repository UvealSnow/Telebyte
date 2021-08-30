<template>
  <div class="accordion overflow-y-scroll">
    <accordion-row
      v-for="(page, i) in pages"
      :page="page"
      :key="i"
      @close-all="closeAll"
    />
  </div>
</template>

<script>
import AccordionRow from './AccordionRow.vue';

export default {
  props: {
    pages: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },

  components: {
    AccordionRow,
  },

  methods: {
    closeAll() {
      this.$children.forEach((c) => c.close());
    },
  },
};
</script>