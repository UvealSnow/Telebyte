<template>
  <div class="post shadow-xl rounded text-gray-700">
    <img class="post__thumbnail" :src="post.thumbnail.url" :alt="post.title">
    
    <div class="post__body p-8">
      <post-info :post="post" />

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
  </div>
</template>

<script>
import PostInfo from './PostInfo.vue';

export default {
  components: {
    PostInfo,
  },

  props: {
    post: {
      required: true,
      type: Object,
      default: () => ({}),
    }
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
