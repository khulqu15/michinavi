<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="container" class="container mx-auto pb-6 mt-6 lg:px-0 px-8">
            
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