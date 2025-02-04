<template>
  <Layout>
    <div class="text-lg font-light">
      <div
        class="project__bg bg-cover bg-center bg-no-repeat w-full"
        :style="`background-image: url(${image})`"
      />
      <div class="container px-8 xl:mx-auto my-24">
        <h1 class="font-bold text-4xl pb-8" v-text="project.title" />
        <div v-html="project.body" />
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  computed: {
    project() {
      return this.$page.gcms.project;
    },
    image() {
      const { url } = this.project.image;
      const arr = url.split('/');
      arr.splice(arr.length - 1, 0, 'quality=value:50');
      return arr.join('/');
    },
  },
};
</script>

<page-query>
query getProject($slug: String) {
  gcms {
    project(where: { slug: $slug }) {
      title
      body
      image {
        id
        url(transformation: {
          document: {
            output: {
              format: webp
            }
          }
          image: {
            resize: {
              width: 1024
              height: 630
            }
          }
        })
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
