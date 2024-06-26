<template>
  <div class="mt-4">
    <div class="border-y-4 mb-4" v-for="product in store.items" :key="product">
      <ProductCartDetials :product="product" />
    </div>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div
      v-if="store.items.length > 0"
      class="card font-bold text-xl md:text-3xl text-center py-4 mx-10"
    >
      <p>total price: ${{ store.totalPrice }}</p>
    </div>
    <div v-else>
      <Message :closable="false">
        <p>Not product in your cart ❌</p>
      </Message>
      <div class="flex justify-content-center align-items-center w-full">
        <NuxtLink to="/products" class="text-center w-3">
          <Button icon="pi pi-arrow-right" label="Our Product" iconPos="right" class="w-full" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCartDetials from "../../components/ProductCartDetails";
import { cartStore } from "../../stores/Cart";

const store = cartStore();
</script>

<style lang="scss" scoped>
</style>