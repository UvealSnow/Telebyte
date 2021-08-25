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
      class="text-center uppercase text-xs my-6"
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

    projects: {
      type: Array,
      required: true,
      default: () => ([]),
    },
  },
};
</script>