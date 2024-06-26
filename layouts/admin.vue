<template>
    <div>
        <AdminNavbar/>
        <div class="min-h-screen">
          <slot />
        </div>
        <Footer/>
    </div>
  </template>
  
  <script setup>
  import AdminNavbar from "../components/common/AdminNavbar.vue"
  import Footer from "../components/common/Footer.vue"
  </script>
  
  <style scoped>
  </style>