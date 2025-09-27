<script setup lang="ts">
import { VisLine, VisXYContainer } from '@unovis/vue'

type DataRecord = { x: number; y: number | null }
const { $trpc } = useNuxtApp()
const { data: temperature, refresh } = await $trpc.boiler.getCurrentTemperature.useQuery()
let counter = 0

const temperatures = ref<DataRecord[]>([])
const updateTemperatures = async () => {
  await refresh()
  const temp = temperature.value
  temperatures.value.push({
    x: counter++,
    y: temp && temp !== 'not-available' ? temp : null,
  })
  if (temperatures.value.length > 100) temperatures.value.shift()
  return
}
const liveTemperature = setInterval(updateTemperatures, 1000)
onUnmounted(() => clearInterval(liveTemperature))
</script>

<template>
  <UPageColumns class="p-6 columns-3 gap-6">
    <UPageCard
        variant="subtle"
        icon="ph:thermometer"
        :title="(temperature && 'not-available'!==temperature) ? `${temperature}°C` : 'N/A'"
        description="Current Temperature of the boiler. For a good espresso, the temperature should be between 90°C and 96°C."
        :ui="{ leadingIcon: 'size-15', title: 'text-3xl' }"
    >
      <template #footer>
        <VisXYContainer :data="temperatures" width="100%" height="100px">
          <VisLine color="gray"
                   curveType="basis"
                   :x="({ x }: DataRecord) => x"
                   :y="({ y }: DataRecord) => y"
                   :interpolateMissingData="true"/>
        </VisXYContainer>
      </template>
    </UPageCard>
  </UPageColumns>
</template>
