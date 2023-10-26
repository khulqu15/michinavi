<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="container" class="relative min-h-screen overflow-hidden">
            <div class="absolute top-0 left-0 p-6 rounded-br-3xl">
                <ion-button fill="clear" class="btn bg-black text-white rounded-xl">Kembali</ion-button>
            </div>
            <div class="absolute left-0 top-0 w-full h-full bg-primary"></div>
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