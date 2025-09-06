<script setup lang="ts">
const { $trpc } = useNuxtApp()
const { data, pending, refresh } =
	await $trpc.boiler.getCurrentTemperature.useQuery()
</script>

<template>
    <div class="text-2xl font-bold">{{ pending ? "Loading...": data }}°C</div>
    <UButton @click="refresh">Refresh</UButton>
</template>
