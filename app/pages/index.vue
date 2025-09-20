<script setup lang="ts">
definePageMeta({ colorMode: 'dark' })

const { $trpc } = useNuxtApp()
const { data, pending, refresh } =
  await $trpc.boiler.getCurrentTemperature.useQuery()
const counter = ref(40)
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
<!--    <div class="text-9xl font-bold">{{ pending ? "Loading..." : data }}°C</div>-->
    <div class="text-9xl font-bold">{{ counter }}</div>

    <div class="grid grid-cols-1 gap-4">
      <UFormField  size="xl" label="Email">
        <UInput size="xl" placeholder="Enter your email" />
      </UFormField>
      <UFormField size="xl" label="Email" description="We'll never share your email with anyone else.">
        <UInput size="xl" placeholder="Enter your email" class="w-full" />
      </UFormField>
      <UFormField  size="xl" label="Slider" >
        <USlider v-model="counter" size="xl" style="width: 400px"/>
      </UFormField>
    </div>
    <div class="flex gap-2 mt-8">
      <UButton size="xl" type="submit">
        Submit
      </UButton>
      <UButton  size="xl" variant="outline" >
        Clear
      </UButton>
    </div>
<!--    <Slider v-model="counter" />-->
<!--    <div class="slider" tabindex="0" style="box-shadow: rgba(13, 99, 248, 0) 0px 0px 0px 4px; transform: translateY(0px) scaleX(1) scaleY(1);"><div class="indicator" style="transform: scaleY(0.677778);"></div><div style="transform: scaleX(1) scaleY(1);"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#101417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="4" stroke="#101417" fill="#101417"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg></div></div>-->
<!--    <div class="slider" tabindex="0" style="box-shadow: rgba(13, 99, 248, 0) 0px 0px 0px 4px; transform: translateY(0px) scaleX(1) scaleY(1);"><div class="indicator" style="transform: scaleY(0.677778);"></div><div style="transform: scaleX(1) scaleY(1);"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#101417" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="12" cy="12" r="4" stroke="#101417" fill="#101417"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg></div></div>-->


<!--    <div class="container pt-160" style="z-index:10; ">-->
<!--      <div class="glass-container">-->
<!--        <div class="glass-filter" style="z-index:10; "></div>-->
<!--        <div class="glass-overlay" style="z-index:10; "></div>-->
<!--        <div class="glass-specular" style="z-index:10; "></div>-->
<!--        <div class="glass-content" style="z-index:10; ">-->
<!--          <a class="glass-content__link" href="#" @click="() => counter++">-->
<!--            <img src="https://assets.codepen.io/923404/finder.png" alt="Finder" />-->
<!--          </a>-->
<!--          <a class="glass-content__link" href="#" @click="counter++">-->
<!--            <img src="https://assets.codepen.io/923404/map.png" alt="Maps" />-->
<!--          </a>-->
<!--          <a class="glass-content__link" href="#" @click="counter++">-->
<!--            <img src="https://assets.codepen.io/923404/messages.png" alt="Messages" />-->
<!--          </a>-->
<!--          <a class="glass-content__link" href="#" @click="counter++">-->
<!--            <img src="https://assets.codepen.io/923404/safari.png" alt="Safari" />-->
<!--          </a>-->
<!--          <a class="glass-content__link" href="#">-->
<!--            <img src="https://assets.codepen.io/923404/books.png" alt="Books" />-->
<!--          </a>-->
<!--        </div>-->

<!--        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">-->
<!--          <filter id="lensFilter" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">-->
<!--            <feComponentTransfer in="SourceAlpha" result="alpha">-->
<!--              <feFuncA type="identity" />-->
<!--            </feComponentTransfer>-->

<!--            <feGaussianBlur in="alpha" stdDeviation="50" result="blur" />-->

<!--            <feDisplacementMap in="SourceGraphic" in2="blur" scale="50" xChannelSelector="A" yChannelSelector="A" />-->
<!--          </filter>-->
<!--        </svg>-->

<!--      </div>-->
<!--    </div>-->
<!--    <svg class="editorial"-->
<!--         xmlns="http://www.w3.org/2000/svg"-->
<!--         xmlns:xlink="http://www.w3.org/1999/xlink"-->
<!--         viewBox="0 24 150 28 "-->
<!--         preserveAspectRatio="none">-->
<!--      <defs>-->
<!--        <path id="gentle-wave"-->
<!--              d="M-160 44c30 0-->
<!--    58-18 88-18s-->
<!--    58 18 88 18-->
<!--    58-18 88-18-->
<!--    58 18 88 18-->
<!--    v44h-352z" />-->
<!--      </defs>-->
<!--      <g class="parallax1">-->
<!--        <use xlink:href="#gentle-wave" x="50" y="3" fill="#f461c1"/>-->
<!--      </g>-->
<!--      <g class="parallax2">-->
<!--        <use xlink:href="#gentle-wave" x="50" y="0" fill="#4579e2"/>-->
<!--      </g>-->
<!--      <g class="parallax3">-->
<!--        <use xlink:href="#gentle-wave" x="50" y="9" fill="#3461c1"/>-->
<!--      </g>-->
<!--      <g class="parallax4">-->
<!--        <use xlink:href="#gentle-wave" x="50" y="6" fill="#fff"/>-->
<!--      </g>-->
<!--    </svg>-->

  </div>
</template>


<style scoped>
.slider {
  width: 100px;
  height: 225px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  touch-action: none;
  outline: none;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}


.glass-container {
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 2rem;
  overflow: hidden;
  flex: 1 1 auto;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1);
  color: var(--lg-text);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 2.2);
}


.glass-filter,
.glass-overlay,
.glass-specular {
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.glass-filter {
  z-index: 0;
  backdrop-filter: blur(3px);
  filter: url(#lensFilter) saturate(120%) brightness(1.15);
}

.glass-overlay {
  z-index: 1;
  background: var(--lg-bg-color);
}

.glass-specular {
  z-index: 2;
  box-shadow: inset 1px 1px 0 var(--lg-highlight),
  inset 0 0 5px var(--lg-highlight);
}

.glass-content {
  position: relative;
  z-index: 3;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: space-around;
  padding: 12px 28px;
  gap: 1rem;
  flex-wrap: wrap;
}

.glass-content__link {
  margin-bottom: -1px;
  margin-top: 6px;
  transition: transform 0.2s ease-out;

  img {
    width: 78px;
  }

  &:active {
    transform: scale(0.95);
  }
}


.player__controls > :first-child {
  margin-right: 2rem;
}

.glass-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--lg-grey);
  transition: color 0.3s ease;
  cursor: pointer;
}

.glass-item svg {
  fill: var(--lg-grey);
  height: 50px;
  margin-bottom: 0.25rem;
  filter: drop-shadow(0 0 3px rgba(255 255 255 / 0.25));
  transition: transform 0.25s ease-out;

  &:active {
    transform: scale(0.95);
  }
}


.glass-item--active svg {
  fill: var(--lg-red);
}


.editorial {
  display: block;
  width: 100%;
  height: 190px;
  max-height: 160px;
  margin: 0;
  z-index:0;
  bottom:0;
  position:absolute;
  left:0px;
  float:left;
}

.parallax1 > use {
  animation: move-forever1 10s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax2 > use {
  animation: move-forever2 8s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax3 > use {
  animation: move-forever3 6s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
.parallax4 > use {
  animation: move-forever4 4s linear infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
}
@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
@keyframes move-forever3 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}
@keyframes move-forever4 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

</style>
