<template>
  <div class="projects container mx-auto flex flex-col mt-24">
    <p class="subtitle">{{ section.subtitle }}</p>
    <h3 class="title">{{ section.title }}</h3>

    <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <project
        v-for="(project, i) in projects"
        :project="project"
        :key="i"
      />
    </div>

    <a
      v-if="section.slug"
      :href="section.slug"
      v-text="section.actionText"
      class="text-center uppercase font-bold text-xs my-6"
    />
  </div>
</template>

<script>
import Project from '../Project.vue';

export default {
  components: {
    Project,
  },

  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },

  computed: {
    projects() {
      const { featuredProjects, regularProjects } = this.$static.gcms;
      return [
        ...featuredProjects,
        ...regularProjects,
      ].slice(0, 6);
    },
  },
};
</script>

<static-query>
{
  gcms {
    featuredProjects: projects(where: { featured: true }, orderBy: publishedAt_DESC, first: 6) {
      slug
      body
      title
      featured
      updatedAt
      image {
        url
      }
    }
    regularProjects: projects(where: { featured: false }, orderBy: createdAt_DESC, first: 6) {
      title
      slug
      id
      body
      updatedAt
      featured
      image {
        url
      }
    }
  }
}
</static-query>