<script setup lang="ts">
import { VisLine, VisPlotband, VisXYContainer } from '@unovis/vue'
import { useIntervalFn } from '@vueuse/core'
import type { DataRecord } from '#shared/heater/type'

const { $trpc } = useNuxtApp()
const { data: temperatures, refresh: refreshAll } = await $trpc.boiler.getAllTemperatures.useQuery()
useIntervalFn(refreshAll, 5000)
const temperature = computed(() => temperatures.value?.at(-1) ?? null)
</script>

<template>
  <div class="flex flex-col items-center justify-center p-8 h-full">
    <UPageCard
        class="max-w-xs"
        variant="subtle"
        icon="ph:thermometer"
        :title="temperature && temperature !== 'not-available' ? `${temperature}°C` : 'N/A'"
        description="Current Temperature of the boiler. For a good espresso, the temperature should be between 90°C and 96°C."
        :ui="{ leadingIcon: 'size-15', title: 'text-3xl' }"
    >
      <template #footer>
        <VisXYContainer :data="temperatures?.map((t, i) => ({y: t,x: i})) ?? []" width="100%" height="100px" :yDomain="[10,110]">
          <VisLine color="gray"
                   curveType="basis"
                   :x="({ x }: DataRecord) => x"
                   :y="({ y }: DataRecord) => y"
                   :interpolateMissingData="true"/>
          <VisPlotband :from="90" :to="97" axis="y" color="rgba(245, 40, 145, 0.2)" />
        </VisXYContainer>
      </template>
    </UPageCard>
  </div>
</template>
