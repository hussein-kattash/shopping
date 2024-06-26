<template>
  <div
    class="card border-1 border-gray-200 bg-gray-50 flex justify-content-center align-items-center product-details"
  >
    <div class="col-12 flex flex-row h-full">
      <div class="col-5 h-full">
        <img
          :src="productDetails?.image"
          alt="Image"
          class="w-full h-full"
        />
      </div>
      <div
        class="col-7 px-6 flex flex-column justify-content-center align-items-start"
      >
        <h2 class="text-4xl font-medium mb-0">{{ productDetails?.name }}</h2>
        <div
          class="flex flex-row justify-content-between w-full align-items-center mb-0"
        >
          <p class="text-xl">Price - ${{ productDetails?.price }}</p>
          <Rating :model-value="productDetails?.rating" readonly :cancel="false"></Rating>
        </div>
        <h3 class="font-bold border-bottom-1 border-gray-200 mb-0 pb-2 w-full">
          Product description:
        </h3>
        <p class="mb-0 w-full">{{ productDetails?.description }}</p>

        <Button
          label="Add to Cart"
          icon="pi pi-cart-plus"
          class="w-full mb-0 mt-4"
          @click="addToCart"
        />
      </div>
    </div>
    <Toast/>
  </div>
</template>

<script setup lang="ts">
import { GetProductDetails } from "~/services/GetProductDetails";
import ProgressSpinner from "primevue/progressspinner";
import { cartStore } from "@/stores/Cart";
import { useToast } from "primevue/usetoast";
import {data} from "../../data/data";

const productDetails = ref()

const toast = useToast();
const store = cartStore();
const route = useRoute();
const config = useRuntimeConfig();


const addToCart = () => {
  if (data) {
    store.addToCart(data[route.params.id as any]);
  }
  toast.add({ severity: 'success', summary: 'Success', detail: 'You have added this product to your cart successfully.', life: 3000 });
};

onMounted(()=>{
  productDetails.value = data[Number(route.params.id) - 1]
})
</script>

<style scoped>
.product-details {
  height: 500px;
}
</style>