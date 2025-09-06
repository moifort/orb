<script setup lang="ts">
const { $trpc } = useNuxtApp()
const { data, pending } = await $trpc.hello.useQuery()
</script>

<template>
    <div class="text-2xl font-bold" >{{ pending ? "Loading...": data }}°C</div>
</template>
