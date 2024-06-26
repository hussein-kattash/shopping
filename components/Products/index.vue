
<template>
  <div class="card sm:px-6 mt-8">
    <DataView :value="data" :layout="layout">
      <template #header>
        <div
          class="flex h-3rem align-items-center w-full justify-content-between"
        >
          <div class="flex justify-content-center">
            <h2  class="sm:text-4xl text-2xl title">Our Products</h2>
          </div>
          <div class="flex justify-content-end">
            <DataViewLayoutOptions v-model="layout" />
          </div>
        </div>
      </template>

      <template #list="slotProps">
        <CardList
          :category="slotProps.data.category"
          :name="slotProps.data.name"
          :price="slotProps.data.price"
          :rating="slotProps.data.rating"
          :image="slotProps.data.image"
        />
      </template>

      <template #grid="slotProps">
        <CardGrid
          :id="slotProps.data._id"
          :category="slotProps.data.category"
          :name="slotProps.data.name"
          :price="slotProps.data.price"
          :rating="slotProps.data.rating"
          :image="slotProps.data.image"
        />
      </template>
    </DataView>
  </div>
</template>

<script setup>
import { ref } from "vue";
const layout = ref("grid");
import {data} from '../../data/data';

</script>


<style scoped>
.title {
  color: var(--text-color);
}
</style>