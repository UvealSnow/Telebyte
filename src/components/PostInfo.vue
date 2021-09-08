<template>
  <div class="flex flex-row text-xs justify-between select-none">
    <p>por <span class="font-bold" v-text="writtenBy" /></p>
    <p v-text="publishedAt" />
  </div>
</template>

<script>
import * as moment from 'moment';

export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },

  computed: {
    writtenBy() {
      return this.post.createdBy.name.replace(' ', '_').toLowerCase();
    },

    publishedAt() {
      return moment(this.post.publishedAt).format('LL');
    },
  },
};
</script>