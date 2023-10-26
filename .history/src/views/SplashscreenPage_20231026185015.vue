<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-full flex items-center justify-center min-h-screen relative">
        <div>
          <img src="/assets/images/logo.png" alt="Logo" class="w-16 h-16">
        </div>
        <h2 class="uppercase text-2xl font-bold italic relative">Welcome</h2>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>
