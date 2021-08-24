<template>
  <Layout>
    <div class="hero mb-96">
      <div class="stripe"></div>
      <div class="hero__content absolute text-center">
        <p class="text-gray-300 font-bold text-xs">TU ALIADO ESTRATÉGICO</p>
        <h1 class="text-white font-bold text-lg md:text-3xl lg:text-5xl">LOS MEJORES EN TELECOMUNICACIONES DE LA REGIÓN</h1>
        <a class="block shadow max-w-xs mx-auto bg-white text-xs font-bold rounded-full px-6 py-3 mt-4" href="#">NUESTROS SERVICIOS</a>
      </div>

      <!-- About us -->
      <div class="about-us container mx-auto flex flex-col md:flex-row">

      </div>

      <!-- Projects -->
      <div class="projects container mx-auto flex flex-col mt-24">
        <p class="subtitle">galería</p>
        <h3 class="title">trabajos recientes</h3>

        <div class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <project
            v-for="(project, i) in projects"
            :project="project"
            :key="i"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Project from '../components/Project.vue';

export default {
  components: {
    Project,
  },

  metaInfo: {
    title: 'Inicio'
  },

  computed: {
    projects() {
      const { featuredProjects, regularProjects } = this.$page.gcms;
      return [
        ...featuredProjects,
        ...regularProjects,
      ].slice(0, 6);
    },
  },
};
</script>


<page-query> 
{
  gcms {
    featuredProjects: projects(where: { featured: true }, orderBy: publishedAt_DESC, first: 6) {
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
</page-query>

<style lang="scss">
.hero {
  height: 630px;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .6)), url('../assets/img/hero-bg.png');

  &__content {
    top: 50%;
    left: 50%;

    width: 100vw;
    transform: translate(-50%, 0%);

    @screen md {
      width: 650px;
      transform: translate(-50%, -100%);
    }

    @screen lg {
      width: 1000px;
      transform: translate(-50%, -100%);
    }
  }
}

.stripe {
  left: 50%;
  width: 100%;
  height: 100%;
  position: relative;
  background-size: cover;
  transform: translateX(-50%);
  background-repeat: no-repeat;
  clip-path: polygon(67% 0%, 100% 0%, 46% 100%, 10% 100%);
  background-image: linear-gradient(to bottom, rgba(98, 138, 56, .3), rgba(98, 138, 56, .3)), url('../assets/img/polygon-bg.jpeg');
}
</style>
