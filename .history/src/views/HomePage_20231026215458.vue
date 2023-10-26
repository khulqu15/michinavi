<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <navbar-view/>
      <div id="container" class="container mx-auto pb-6 md:px-0 px-12">
        <div class="grid md:grid-cols-3 grid-cols-2 place-items-stretch gap-6">
          <div class="space-y-6 md:col-span-1 col-span-2">
            <div class="rounded-3xl bg-primary w-full min-h-[26vh]"></div>
            <div class="rounded-3xl bg-primary w-full min-h-[26vh]"></div>
            <div class="rounded-3xl bg-primary w-full min-h-[26vh]"></div>
          </div>
          <div class="rounded-3xl bg-white w-full min-h-[80vh] col-span-2">
            <div class="px-6 py-0 relative -top-8">
              <h2 class="text-5xl leading-relaxed">Detecting Road <div class="inline-block w-24 h-10 rounded-2xl bg-primary relative top-1"></div> Potholes with Precision <div class="inline-block w-24 h-10 rounded-2xl bg-primary relative top-1"></div></h2>
            </div>
            <div class="w-full h-auto bg-primary min-h-[57vh] rounded-3xl"></div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import NavbarView from '@/components/NavbarVIew.vue'
</script>