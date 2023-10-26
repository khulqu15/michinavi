<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="w-full flex items-center justify-center min-h-screen relative">
          <div class="animate-div"></div>
          <h2 class="uppercase text-2xl font-bold italic">Welcome</h2>
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
  position: absolute;
  background-color: rgb(2, 104, 199);
}
</style>
  