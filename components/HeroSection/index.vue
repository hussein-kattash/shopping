<template>
  <div class="grid grid-nogutter surface-section text-800 min-h-screen">
    <div
      class="col-12 md:col-6 sm:p-6 text-center md:text-left flex align-items-center"
    >
      <section>
        <span class="block sm:text-6xl text-3xl font-bold mb-1 title"
          >{{ props.title }}</span
        >
        <Chip class="text-primary bg-green-100 text-sm" label="25% Discount  Online Shop" />
        <p class="mt-2 mb-4 text-700 line-height-3">
           {{ props.desc }}
        </p>
        <NuxtLink to="/products">
          <Button
          label="Our Products"
          type="button"
          class="mr-3 p-button-raised"
        ></Button>
        </NuxtLink>
      </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden flex justify-content-center align-items-center">
      <img :src="props.slide" alt="Image"  class="w-10"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  slide:String,
  title:String,
  desc:String
});
</script>

<style scoped>
.title{
  color:var(--text-color)
}
</style>