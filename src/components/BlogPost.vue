<template>
  <div class="post shadow-xl rounded text-gray-700">
    <img class="post__thumbnail" :src="post.thumbnail.url" :alt="post.title">
    
    <div class="post__body p-8">
      <div class="flex flex-row text-xs justify-between select-none">
        <p>por <span class="font-bold" v-text="writtenBy" /></p>
        <p v-text="publishedAt" />
      </div>

      <g-link :to="`/posts/${post.slug}`">
        <h2 class="text-4xl font-bold my-4 hover:text-telebyte-green duration-300" v-text="post.title" />
        <p class="text-sm leading-relaxed mb-4" v-text="post.brief" />
      </g-link>
    </div>

    <hr class="border-t border-gray-300 w-9/12">

    <div class="post__tags px-8 py-4">
      <g-link
        class="uppercase text-xs font-bold text-gray-400 mr-4 hover:text-telebyte-green duration-300"
        v-for="(tag, i) in post.tags"
        v-text="tag.name" 
        :to="`tags/${tag.slug}`"
        :key="i"
      />
    </div>

    <!-- <g-link class="block text-center" to="posts">ver más</g-link> -->
  </div>
</template>

<script>
import * as moment from 'moment';

export default {
  props: {
    post: {
      required: true,
      type: Object,
      default: () => ({}),
    }
  },

  created() {
    moment.locale('es');
  },

  computed: {
    writtenBy() {
      return this.post.publishedBy.name.replace(' ', '_').toLowerCase();
    },

    publishedAt() {
      return moment(this.post.publishedAt).format('LL');
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  &__thumbnail {
    width: 100%;
    height: 260px;
  }
}
</style>
