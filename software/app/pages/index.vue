<script setup lang="ts">
import { VisLine, VisXYContainer } from '@unovis/vue'
import { useIntervalFn } from '@vueuse/core'
import type { DataRecord } from '#shared/boiler/type'

const { $trpc } = useNuxtApp()
const { data: temperature, refresh } = await $trpc.boiler.getCurrentTemperature.useQuery()
useIntervalFn(refresh, 1000)
</script>

<template>
  <div class="flex flex-col items-center justify-center p-8 h-full">
    <UPageCard
        class="max-w-xs"
        variant="subtle"
        icon="ph:thermometer"
        :title="temperature ? `${temperature}°C` : 'N/A'"
        description="Current Temperature of the boiler. For a good espresso, the temperature should be between 90°C and 96°C."
        :ui="{ leadingIcon: 'size-15', title: 'text-3xl' }"
    >
      <template #footer>
        <VisXYContainer :data="[]" width="100%" height="100px">
          <VisLine color="gray"
                   curveType="basis"
                   :x="({ x }: DataRecord) => x"
                   :y="({ y }: DataRecord) => y"
                   :interpolateMissingData="true"/>
        </VisXYContainer>
      </template>
    </UPageCard>
  </div>
</template>
