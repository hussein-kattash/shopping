<template>
  <div class="mt-8 border-top-1 border-gray-200 sm:mx-6">
    <div
      class="my-4 flex flex-column align-items-center justify-content-center"
    >
      <img :src="logo" class="sm:w-10rem w-6rem"/>
      <div class="my-4 flex align-items-center justify-content-center">
        <nuxt-link to="/" class="no-underline link">Home</nuxt-link>
        <NuxtLink to="/products" class="sm:mx-6 mx-3 no-underline link">Our Products</NuxtLink>
        <NuxtLink to="/contact-us" class="no-underline link">Contact us</NuxtLink>
      </div>
      <div class="flex justify-content-center align-items-center">
        <Button
          icon="pi pi-instagram"
          text
          raised
          rounded
          aria-label="instagram"
        />
        <Button
          icon="pi pi-facebook"
          text
          raised
          rounded
          aria-label="facebook"
          class="mx-4"
        />
        <Button
          icon="pi pi-whatsapp"
          text
          raised
          rounded
          aria-label="whatsapp"
          class="mr-4"
        />
        <Button icon="pi pi-telegram" text raised rounded aria-label="telegram" />
      </div>
      <div class="flex mt-4 justify-content-center align-items-center">
        <NuxtLink class="no-underline link sm:mr-4 mr-2" to="/">Privacy Policy</NuxtLink>
        <NuxtLink class="no-underline link sm:ml-4 ml-2" to="/">Terms of Service</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import logo from "../../assets/images/logo.png";
</script>

<style scoped>
.link {
  color: var(--text-color);
}
</style>