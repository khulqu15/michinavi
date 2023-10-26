<template>
  <ion-app>
    <navbar-view/>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import NavbarView from '@/components/NavbarVIew.vue'
</script>
