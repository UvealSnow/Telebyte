<template>
  <div class="container mx-auto mt-24">
    <p class="subtitle text-center">{{ section.subtitle }}</p>
    <h3 class="title text-center">{{ section.title }}</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <blog-post
        v-for="(post, i) in $static.gcms.posts"
        :post="post"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import BlogPost from '../BlogPost.vue';

export default {
  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },

  components: {
    BlogPost,
  }
};
</script>

<static-query>
{
  gcms {
    posts(last: 3, orderBy: createdAt_ASC) {
      slug
      brief
      title
      publishedAt
      thumbnail {
        url
      }
      publishedBy {
        name
      }
      tags {
        name
        slug
      }
    }
  }
}
</static-query>
