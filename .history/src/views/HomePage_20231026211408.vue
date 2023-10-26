<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container px-8">
        <div class="grid md:grid-cols-2 grid-cols-2 place-items-stretch gap-8">
          <div>

          </div>
          <div class="rounded-xl bg-primary w-full min-h-[80vh]"></div>
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
