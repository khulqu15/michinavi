<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <navbar-view/>
      <div id="container" class="container mx-auto pb-6 mt-6 lg:px-0 px-8">
        <div class="px-6 py-0 relative mt-4 -top-8 lg:hidden inline-block">
          <h2 class="text-4xl leading-relaxed break-words">Detecting Road 
            <div class="inline-block w-24 h-10 overflow-hidden rounded-2xl relative top-1">
              <img src="/assets/images/wall1.png" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
            </div> Potholes with Precision 
            <div class="inline-block w-24 h-10 rounded-2xl bg-primary relative top-1"></div>
          </h2>
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-2 items-strecth place-items-stretch gap-6">
          <div class="space-y-6 lg:col-span-1 col-span-2">
            <div class="side-div rounded-3xl bg-gray-100 w-full min-h-[13rem] relative overflow-hidden flex items-center justify-center p-6">
              <img src="/assets/images/1.png" class="w-full opacity-50 grayscale h-full object-center object-cover absolute" alt="Image">
              <div class="w-full h-full relative p-6 bg-white/40 backdrop-blur-lg rounded-xl">
                Teknologi pendeteksian modern meningkatkan efisiensi dan akurasi di berbagai bidang.
              </div>
            </div>
            <div class="side-div rounded-3xl bg-gradient-to-t from-blue-700 to-blue-400 w-full min-h-[13rem] relative overflow-hidden flex items-center justify-center p-6">
              <div class="w-full grid grid-cols-3 items-center h-full relative p-6 bg-white/10 border-white/30 border text-white backdrop-blur-lg rounded-xl">
                <div class="col-span-2">Hubungi kami apabila ada pertanyaan</div>
                <div class="text-right">
                  <Icon icon="teenyicons:whatsapp-solid" class="text-white text-4xl inline-block"/>
                </div>
              </div>
            </div>
            <div class="side-div rounded-3xl flex items-center px-6 bg-primary w-full min-h-[13rem] relative overflow-hidden">
              <img src="/assets/images/3.png" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
              <div class="w-full grid grid-cols-2 items-center h-full relative p-6 text-white rounded-xl">
                <div class="text-left">
                  <div class="avatar">
                    <div class="w-16 rounded-full">
                      <img src="/assets/images/Ninno.png" />
                    </div>
                  </div>
                  <p>M. Khusnul Khuluq</p>
                </div>
                <div class="text-right">
                  <img src="/assets/images/hayago.png" alt="Hayago Logo" class="w-24 inline-block">
                </div>
              </div>
            </div>
          </div>
          <div class="main-div h-full rounded-3xl bg-white w-full col-span-2">
            <div class="px-6 py-0 relative -top-8 lg:inline-block hidden">
              <h2 class="text-5xl leading-relaxed">Detecting Road <div class="inline-block w-24 h-10 rounded-2xl bg-primary relative top-1"></div> Potholes with Precision <div class="inline-block w-24 h-10 rounded-2xl bg-primary relative top-1"></div></h2>
            </div>
            <div class="w-full bg-primary min-h-[30.5rem] rounded-3xl relative overflow-hidden">
              <img src="/assets/images/2.png" class="w-full h-full object-center object-cover absolute" alt="Image">
              <div class="absolute max-w-lg w-full rounded-xl px-8 shadow-xl py-4 bg-black/30 backdrop-blur-lg right-6 bottom-6">
                <h2 class="text-white">Pendeteksian dini kerusakan jalan dapat mencegah kecelakaan yang fatal.</h2>
                <div class="mt-12 flex justify-end items-center mb-4">
                  <button class="btn bg-white text-black rounded-full">Mulai Sekarang <Icon icon="solar:map-arrow-up-bold-duotone" class="text-xl rotate-45 ml-2" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative w-full bottom-0 left-0 py-6 mt-12 flex justify-center">
        2023 Developed by <span class="text-primary ml-1 font-semibold"><a href="https://hayago.id" target="_blank">Hayago</a></span>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import NavbarView from '@/components/NavbarVIew.vue'
</script>