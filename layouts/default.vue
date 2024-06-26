<template>
  <div>
      <Navbar/>
      <div class="min-h-screen">
        <slot />
      </div>
      <Footer/>
  </div>
</template>

<script setup>
import Navbar from "../components/common/Navbar.vue"
import Footer from "../components/common/Footer.vue"
</script>

<style scoped>
</style>