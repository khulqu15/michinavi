<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <navbar-view active="home"/>
        <div id="container" class="container mx-auto pb-6 mt-6 lg:px-0 px-12">
          <div class="px-6 py-0 relative mt-4 -top-8 inline-block">
            <h2 class="text-4xl leading-relaxed break-words">MichiNavi
              <div class="inline-block w-72 h-10 overflow-hidden rounded-2xl relative top-1">
                <img src="/assets/images/wall3.jpg" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
              </div> <br> Revolutionizing Pothole Detection Technology Today.
            </h2>
          </div>
          <div class="flex px-12 items-center my-12">
            <div class="max-w-md w-full h-[32rem] relative overflow-hidden rounded-3xl bg-primary">
                <img src="/assets/images/about1.jpg" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
            </div>
            <div class="lg:w-3/4 w-full p-8 bg-white/20 -left-24 backdrop-blur-xl rounded-3xl">
                
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
  import NavbarView from '@/components/NavbarView.vue';
  import { IonContent, IonPage, IonButton } from '@ionic/vue';
  
  function openWindow(path: string) {
    window.open(path);
  }
  </script>