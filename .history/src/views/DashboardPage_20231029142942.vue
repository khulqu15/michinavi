<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <div class="bg-base-200 min-h-screen">
                <div class="grid grid-cols-12">
                    <div class="col-span-2">
                        <div class="drawer lg:drawer-open">
                            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                            <div class="drawer-content flex flex-col items-center justify-center">
                                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                            </div> 
                            <div class="drawer-side">
                                <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
                                <ul class="menu p-4 pt-8 space-y-3 bg-base-100 md:rounded-r-3xl rounded-none w-80 min-h-full text-base-content">
                                    <li>
                                        <router-link class="hover:bg-base-100 focus:bg-base-100 active:bg-base-100" to="/dashboard">
                                            <img src="/assets/images/logo.png" alt="Logo" class="w-12">
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="text-base-content" to="/dashboard">
                                            <Icon class="text-2xl" icon="solar:home-2-linear" />
                                            <span>Data Recorded</span>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link class="text-base-content" to="/dashboard/profile">
                                            <Icon class="text-2xl" icon="solar:user-linear" />
                                            <span>Video Uploaded</span>
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-10">
                        <div class="w-full flex justify-between items-center md:ml-6 bg-white p-6 rounded-bl-3xl">
                            <div>
                                <h4 class="font-semibold">Data Recorded</h4>
                            </div>
                        </div>
                        <div class="w-full p-6 grid md:grid-cols-2 gap-6">
                            <div class="w-full bg-base-100 rounded-3xl">
                                <div class="p-6">
                                    <h4 class="font-semibold">Data Tracked</h4>
                                </div>
                            </div>
                            <div class="w-full bg-base-100 rounded-3xl">
                                <div class="p-6">
                                    <h4 class="font-semibold">Data Tracked</h4>
                                </div>
                            </div>
                        </div>
                        <div class="relative w-full bottom-0 left-0 py-6 mt-12 flex justify-center text-base-content">
                            2023 Developed by <span class="text-primary ml-1 font-semibold"><a href="https://hayago.id" target="_blank">Hayago</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
  </template>
      
  <script setup lang="ts">
  import { IonContent, IonPage } from '@ionic/vue';
  </script>