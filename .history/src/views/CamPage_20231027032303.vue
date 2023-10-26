<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="container" class="relative min-h-screen overflow-hidden">
            <video id="camera_view" class="absolute left-0 top-0 w-full h-full" ref="videoElement" autoplay playsinline></video>
            <div class="absolute bottom-0 left-0 w-full flex items-center justify-center">
                <div class="p-3 rounded-t-3xl inline-block bg-white">
                    <ion-button fill="clear" size="small" class="btn px-0 bg-black text-white rounded-xl"><Icon icon="mingcute:up-fill" class="text-2xl"/></ion-button>
                </div>
            </div>
            <div class="absolute top-0 left-0 p-3 rounded-br-3xl inline-block bg-white">
                <ion-button fill="clear" router-link="/home" router-direction="forward" class="btn bg-black text-white rounded-xl">Kembali</ion-button>
            </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue';

const videoElement: Ref<any> = ref(null)
const stream: Ref<MediaStream|null> = ref(null)

const startWebStream = async() => {
    try {
        stream.value = await navigator.mediaDevices.getUserMedia({video: true})
        videoElement.value.srcObject = stream
    } catch(error) {
        console.error("Error accessing the webcam:", error);
    }
}

onMounted(() => {
    startWebStream()
})

onBeforeUnmount(() => {
    if(stream.value) {
        let tracks = stream.value.getTracks()
        tracks.forEach(track => track.stop())
    }
})
</script>