<template>
  <div
    class="card border-1 border-gray-200 bg-gray-50 flex justify-content-center align-items-center product-details"
  >
    <div class="col-12 flex flex-row h-full">
      <div class="col-5 h-full">
        <img
          :src="`${config.public.apiBase}/uploads/${product?.image}`"
          alt="Image"
          class="w-full h-full"
        />
      </div>
      <div
        class="col-7 px-6 flex flex-column justify-content-center align-items-start"
      >
        <h2 class="text-4xl font-medium mb-0">{{ product?.name }}</h2>
        <div
          class="flex flex-row justify-content-between w-full align-items-center mb-0"
        >
          <p class="text-xl">Price - ${{ product?.price }}</p>
          <Rating
            :model-value="product?.rating"
            readonly
            :cancel="false"
          ></Rating>
        </div>
        <h3 class="font-bold border-bottom-1 border-gray-200 mb-0 pb-2 w-full">
          Product description:
        </h3>
        <p class="mb-0 w-full">{{ product?.description }}</p>
        <div>
          <p class="text-2xl mb-2">Quantity:</p>
          <div
            class="flex w-10rem border-1 border-primary border-round w-3 flex-row justify-content-center align-items-center"
          >
            <Button
              icon="pi pi-minus"
              text
              aria-label="minus"
              @click="decreaseQty(product)"
            />
            <p class="mx-4">{{ product.quantity }}</p>
            <Button
              icon="pi pi-plus"
              text
              aria-label="plus"
              @click="addToCart(product)"
            />
          </div>
        </div>
        <Button
          label="Delet from Cart"
          icon="pi pi-trash"
          class="w-full mb-0 mt-4"
          @click="confirm1()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConfirm } from "primevue/useconfirm";
import { cartStore } from "../../stores/Cart";
import { useToast } from "primevue/usetoast";

const confirm = useConfirm();
const toast = useToast();
const { product } = defineProps(["product"]);
const config = useRuntimeConfig();
const store = cartStore();
const addToCart = (product) => {
  store.addToCart(product);
};
const removeItem = (productId) => {
  store.removeItem(productId);

  toast.add({
    severity: "success",
    summary: "Success",
    detail: "You have deleted this product successfully.",
    life: 3000,
  });
};

const decreaseQty = (product) => {
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    removeItem(product.id);
  }
};

const confirm1 = () => {
  confirm.require({
    message: "Are you sure you want to delete this product?",
    header: "Confirmation",
    icon: "pi pi-exclamation-triangle",
    accept: () => {
      removeItem(product._id);
    },
  });
};
</script>

<style scoped>
.product-details {
  height: 500px;
}
</style>