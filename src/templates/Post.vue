<template>
  <Layout>
    <div class="text-lg font-light">
      <div
        class="project__bg bg-cover bg-center bg-no-repeat w-full"
        :style="`background-image: url(${post.thumbnail.url})`"
      />

      <div class="container mx-auto my-24">
        <h1 class="font-bold text-4xl pb-2" v-text="post.title" />
        <post-info :post="post" class="mb-8" />
        <div v-html="post.body.html" />
      </div>
    </div>
  </Layout>
</template>

<script>
import PostInfo from '../components/PostInfo.vue';

export default {
  components: {
    PostInfo,
  },

  computed: {
    post() {
      return this.$page.gcms.post;
    },
  },
};
</script>

<page-query>
query getPost($slug: String) {
  gcms {
    post(where: {slug: $slug}) {
      title
      publishedAt
      body {
        html
      }
      thumbnail {
        url
      }
      createdBy {
        name
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.project {
  &__bg {
    height: 630px;
  }
}
</style>
