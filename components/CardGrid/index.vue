<template>
  <div @click="navigateTo" class="col-12 sm:col-6 lg:col-4 xl:col-3 p-2 cursor-pointer">
    <div class="p-4 border-1 surface-border surface-card border-round">
      <div
        class="flex flex-wrap align-items-center justify-content-between gap-2"
      >
        <div class="flex align-items-center gap-2">
          <i class="pi pi-tag"></i>
          <span class="font-semibold">{{ props.category }}</span>
        </div>
        <!-- <Tag
          :value="slotProps.data.inventoryStatus"
          :severity="getSeverity(slotProps.data)"
        ></Tag> -->
      </div>
      <div class="flex flex-column align-items-center gap-3 py-5">
        <img
          class="w-full rounded h-14rem"
          :src="props.image"
          :alt="props.name"
        />
        <div class="text-2xl font-bold">{{ props.name }}</div>
        <Rating :modelValue="props.rating" readonly :cancel="false"></Rating>
      </div>
      <div class="flex align-items-center justify-content-between">
        <span class="text-2xl font-semibold">${{ props.price }}</span>
        <Button raised icon="pi pi-shopping-cart" rounded></Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  id:String,
  category: String,
  name: String,
  image: String,
  rating: Number,
  price: Number,
});
const config = useRuntimeConfig();
const router = useRouter();

const navigateTo = ()=>{
  router.push(`/products/${props.id}`)
}
</script>

<style scoped>
</style>