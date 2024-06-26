<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <nuxt-link to="/" class="sm:mr-4">
          <img :src="logo" class="w-6rem" />
        </nuxt-link>
      </template>
      <template #item="{ item, props }">
        <nuxt-link
          :to="item.link"
          v-ripple
          class="flex align-items-center"
          v-bind="props.action"
        >
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
        </nuxt-link>
      </template>
      <template #end>
        <div class="flex align-items-center gap-2 sm:mr-3">
          <InputText
            placeholder="Search"
            type="text"
            class="w-8rem sm:w-auto sm:mr-2"
          />
          <NuxtLink to="/products/cart">
            <i
              v-if="store.items.length !== 0"
              v-badge.danger="store.items.length"
              class="pi pi-shopping-cart p-overlay-badge"
              style="font-size: 2rem"
            />
            <i v-else class="pi pi-shopping-cart" style="font-size: 2rem" />
          </NuxtLink>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import logo from "../../assets/images/logo.png";
import {cartStore} from "@/stores/Cart";

const store = cartStore();

const items = ref([
  {
    label: "Home",
    icon: "pi pi-home",
    link: "/",
  },
  {
    label: "Products",
    icon: "pi pi-shopping-bag",
    link: "/products",
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
    link: "/contact-us",
  },
]);
</script>
