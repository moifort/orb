<script setup lang="ts">
const { $trpc } = useNuxtApp()
const { data: temperature, refresh } = await $trpc.boiler.getCurrentTemperature.useQuery()

setInterval(refresh, 1000)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
    <div class="text-9xl font-bold" v-if="temperature === null || temperature === 'not-available'">N/A</div>
    <div class="text-9xl font-bold" v-else>{{ Math.round(temperature) }}°C</div>
  </div>
</template>
