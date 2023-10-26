<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <navbar-view />
        <progress-view />
      </ion-content>
    </ion-page>
  </template>
    
<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import NavbarView from '@/components/NavbarView.vue';
import ProgressView from '@/components/ProgressView.vue';
</script>