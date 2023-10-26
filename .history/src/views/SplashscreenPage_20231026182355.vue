<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="w-full flex items-center justify-center min-h-screen relative">
          <div class="animate-div bg-primary"></div>
          <h2 class="uppercase text-2xl font-bold italic relative">Welcome</h2>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  </script>
  
<style scoped>
.animate-div {
  width: 12rem;
  height: 12rem;
  border-radius: 4rem;
  transition: all .3s ease-in-out;
  position: absolute;
  left: -30%;
  animation-name: animatediv;
  animation-delay: 500ms;
  animation-fill-mode: forwards;
  animation-duration: 2s;
}

@keyframes animatediv {
  0% {
    width: 12rem;
    height: 12rem;
    left: -30%;
  }
  100% {
    width: 100%;
    height: 100%;
    left: 0%;
    border-radius: 0;
  }
}
</style>
  