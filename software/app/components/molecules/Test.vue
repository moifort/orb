<script setup lang="ts">
import type { CurrentTemperatureC } from '#shared/heater/type'

defineProps<{ temperature: CurrentTemperatureC }>()
</script>

<template>
  <UPageCard
      class="max-w-xs"
      variant="subtle"
      icon="ph:thermometer"
      :title="temperature && temperature !== 'not-available' ? `${Math.round(temperature)}°C` : 'N/A'"
      description="Current Temperature of the boiler. For a good espresso, the temperature should be between 90°C and 96°C."
      :ui="{ leadingIcon: 'size-15', title: 'text-3xl' }"
  />
</template>
