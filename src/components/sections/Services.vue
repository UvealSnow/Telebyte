<template>
  <div id="servicios" class="services">
    <p class="subtitle">{{ section.subtitle }}</p>
    <h3 class="title">{{ section.title }}</h3>

    <div class="services__content">
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

<style lang="scss">
.services {
  @apply container mx-auto flex flex-col mt-24 px-8;

  &__content {
    @apply grid gap-4
      grid-cols-1 md:grid-cols-2 lg:grid-cols-4;
  }
}
</style>
