<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div id="container" class="relative min-h-screen overflow-hidden">
            <video id="camera_view" class="absolute left-0 top-0 w-full h-full" ref="videoElement" autoplay playsinline></video>
            <div class="absolute bottom-0 left-0 w-full flex items-center justify-center">
                <div class="p-3 rounded-t-3xl inline-block bg-white">
                    <ion-button onclick="option_modal.showModal()" fill="clear" size="small" class="btn px-0 bg-black text-white rounded-xl"><Icon icon="mingcute:up-fill" class="text-2xl"/></ion-button>
                </div>
            </div>
            <div class="absolute top-0 left-0 p-3 rounded-br-3xl inline-block bg-white">
                <ion-button fill="clear" router-link="/home" router-direction="forward" class="btn bg-black text-white rounded-xl">Kembali</ion-button>
            </div>
        </div>
        <dialog id="option_modal" class="modal modal-bottom">
            <div class="modal-box max-w-2xl w-11/12 mx-auto">
                <form method="dialog" class="w-full flex justify-center">
                    <button class="btn px-3 bg-black text-white rounded-xl"><Icon icon="mingcute:down-fill" class="text-2xl"/></button>
                </form>
                <div class="max-h-[4rem] overflow-y-auto">
                    <h3 class="font-bold text-lg font-bold">Data Captured <div class="badge badge-primary">2</div></h3>
                    <div class="flex justify-between p-4 bg-gray-100 rounded-xl items-center">
                        <div class="relative">
                            <h4 class="font-semibold my-0 mb-2">Pothole (12, 4)</h4>
                            <div class="flex items-center gap-x-3">
                                <Icon icon="heroicons:map-pin-20-solid" class="text-xl text-primary"/> 
                                <span class="text-sm">(75.437282, 128.4739272)</span>
                            </div>
                        </div>
                        <img src="/assets/images/about2.png" alt="RecordedData" class="w-24 h-32 rounded-lg object-cover object-center">
                    </div>
                </div>
            </div>
        </dialog>
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
        videoElement.value.srcObject = stream.value
    } catch(error) {
        console.error("Error accessing the webcam:", error);
    }
}

onMounted(() => {
    startWebStream()
})

onBeforeUnmount(() => {
    if(stream.value) {
        const tracks = stream.value.getTracks()
        tracks.forEach(track => track.stop())
    }
})
</script>

<style scoped>
#camera_view {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
    background-size: cover;
    overflow: hidden;
}
</style>