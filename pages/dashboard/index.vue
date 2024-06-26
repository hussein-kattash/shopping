<template>
    <div>
        <h1>Welcome to your dashboard</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

definePageMeta({
  layout: "admin",
});
</script>

<style scoped>

</style>