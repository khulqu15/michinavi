<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="w-full flex items-center justify-center min-h-screen relative">
        <div>
          <img src="/assets/images/logo.png" alt="Logo" class="w-16 logo-splash h-16">
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
.logo-splash {
  transform: scale(3);
  filter: blur(3rem);
  animation-name: animateku;
  animation-delay: 500ms;
  animation-fill-mode: both;
  animation-duration: 500ms;
}

@keyframes animateku {
  0% {
    transform: scale(3);
    filter: blur(3rem);
  }
  100% {
    transform: scale(1);
    filter: blur(0);
  }
}
</style>