<script setup lang="ts">
const { data } = await useFetch<string>('/api/hello')
</script>


<template>
  <div class="text-2xl font-bold">{{ data }}</div>
</template>
