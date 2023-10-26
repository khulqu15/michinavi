<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <navbar-view />
        <div class="bg-gradient-to-t from-gray-200 to-transparent min-h-screen">
            <div class="w-full min-h-[60vh] relative container px-6 my-12 mx-auto">
                <div class="p-6 bg-white/30 shadow-2xl shadow-black/10 max-w-md w-full backdrop-blur-lg mx-auto rounded-3xl">
                    <div class="px-6 py-0 relative mt-4 -top-8 inline-block">
                        <h2 class="text-4xl leading-relaxed break-words">Log In
                        <div class="inline-block w-48 h-10 overflow-hidden rounded-2xl relative top-1">
                            <img src="/assets/images/wall1.png" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
                        </div>
                        </h2>
                    </div>
                    <ion-button fill="clear" class="btn btn-primary w-full normal-case">
                        <Icon icon="bi:google"  class="text-xl mr-3"/> Log In with Google
                    </ion-button>
                    <div class="form-control mt-4">
                        <label for="email" class="text-sm text-black/50 font-medium">Username or Email Address</label>
                        <input type="text" class="input w-full" placeholder="hello@michinavi.com">
                    </div>
                </div>
            </div>
            <div class="relative w-full bottom-0 left-0 py-6 mt-12 flex justify-center">
                2023 Developed by <span class="text-primary ml-1 font-semibold"><a href="https://hayago.id" target="_blank">Hayago</a></span>
            </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
    
<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import NavbarView from '@/components/NavbarView.vue';
import ProgressView from '@/components/ProgressView.vue';
</script>