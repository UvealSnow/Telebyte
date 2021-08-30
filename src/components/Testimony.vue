<template>
  <div class="testimony flex flex-col">
    <div class="testimony__controls flex flex-row w-60 mx-auto items-center">
      <icon class="cursor-pointer" size="xl" image="chevron-left" />
      <div class="flex-grow">
        <img class="w-14 mx-auto" :src="testimony.clientPicture.url" :alt="testimony.clientName">
      </div>
      <icon class="cursor-pointer" size="xl" image="chevron-right" />
    </div>

    <p class="text-xs w-5/12 mx-auto leading-loose my-8" v-text="testimony.review" />

    <p class="text-xs font-bold" v-text="`- ${testimony.clientName}`" />
  </div>
</template>

<script>
export default {
  props: {
    testimony: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
