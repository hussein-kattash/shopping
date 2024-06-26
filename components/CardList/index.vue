<template>
  <div class="col-12">
    <div class="flex flex-row align-items-start py-4 sm:px-4 gap-4">
      <img
        class="w-9 w-10rem block mx-auto border-round h-6rem"
        :src="props.image"
        :alt="props.name"
      />
      <div
        class="flex flex-row justify-content-between align-items-start flex-1 gap-4"
      >
        <div
          class="flex flex-column align-items-start gap-3"
        >
          <div class="text-2xl font-bold text-900">
            {{ props.name }}
          </div>
          <Rating
            :modelValue="props.rating"
            readonly
            :cancel="false"
          ></Rating>
          <div class="flex align-items-center gap-3">
            <span class="flex align-items-center gap-2">
              <i class="pi pi-tag"></i>
              <span class="font-semibold">{{ props.category }}</span>
            </span>
            <!-- <Tag
              :value="slotProps.data.inventoryStatus"
              :severity="getSeverity(slotProps.data)"
            ></Tag> -->
          </div>
        </div>
        <div
          class="flex flex-column align-items-end gap-3"
        >
          <span class="text-2xl font-semibold"
            >${{ props.price }}</span
          >
          <Button
            raised
            icon="pi pi-shopping-cart"
            rounded
            class="mt-3"
          ></Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  category: String,
  name: String,
  image: String,
  rating: Number,
  price: Number,
});
const config = useRuntimeConfig();
</script>

<style scoped>
</style>