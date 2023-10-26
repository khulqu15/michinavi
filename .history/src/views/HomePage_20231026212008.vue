<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container" class="container mx-auto">
        <div class="grid md:grid-cols-3 grid-cols-2 place-items-stretch gap-6">
          <div class="space-y-6 md:col-span-1 col-span-2">
            <div class="rounded-3xl bg-primary w-full min-h-[28vh]"></div>
            <div class="rounded-3xl bg-primary w-full min-h-[28vh]"></div>
            <div class="rounded-3xl bg-primary w-full min-h-[28vh]"></div>
          </div>
          <div class="rounded-3xl bg-white w-full min-h-[80vh] col-span-2 p-6"></div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
