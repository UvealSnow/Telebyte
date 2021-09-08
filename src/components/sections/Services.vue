<template>
  <div id="servicios" class="services container mx-auto flex flex-col mt-24">
    <p class="subtitle">{{ section.subtitle }}</p>
    <h3 class="title">{{ section.title }}</h3>

    <div class="grid grid-cols-1 md:grids-cols-2 lg:grid-cols-4">
      <service
        v-for="(service, i) in $static.gcms.services"
        :service="service"
        :key="i"
      />
    </div>
  </div>
</template>

<script>
import Service from '../Service.vue';

export default {
  components: {
    Service,
  },

  props: {
    section: {
      Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>

<static-query>
{
  gcms {
    services(orderBy: order_ASC) {
      icon
      title
      brief
      slug
    }
  }
}
</static-query>
