<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div class="fixed w-full h-full flex items-center justify-center bg-base-200 z-20 transition-all" :class="{'-left-[100%] opacity-0 invisible': emailLocal, 'left-0 top-0': !emailLocal}">
            <div class="absolute top-0 left-0 p-3 rounded-br-3xl inline-block bg-base-100">
                <ion-button onclick="back_modal.showModal()" fill="clear" class="btn rounded-xl btn-sm px-0"
                :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}">Back</ion-button>
            </div>
            <div class="max-w-md w-full p-6 rounded-3xl">
                <form @submit.prevent="submitUserForm" class="text-2xl">
                    <h2 class="text-2xl leading-relaxed">Hi, To Start Demo 
                        <div class="inline-block w-24 h-8 overflow-hidden rounded-2xl relative top-2">
                            <img src="/assets/images/wall3.jpg" class="w-full h-full object-center object-cover absolute top-0 left-0" alt="Image">
                        </div>
                        <br> 
                        Enter Your Email
                    </h2>
                    <div class="form-control space-y-3">
                        <label for="email" class="text-sm text-base-content/50">Email Address</label>
                        <input id="email" v-model="email" placeholder="eg. ninno@example.com" type="email" required class="input w-full bg-base-100">
                        <label for="email" id="email_error" class="text-error"></label>
                    </div>
                    <ion-button type="submit" fill="clear" class="btn bg-black text-white mt-6">Start</ion-button>
                </form>
            </div>
        </div>
        <div>
            <div id="container" class="relative min-h-screen overflow-hidden">
                <video id="camera_view" class="absolute left-0 top-0 w-full h-full" ref="videoElement" autoplay playsinline></video>
                <div class="absolute bottom-0 left-0 w-full flex items-center justify-center">
                    <div class="p-3 rounded-t-3xl inline-block bg-base-100">
                        <ion-button onclick="option_modal.showModal()" fill="clear" size="small" class="btn px-0 rounded-xl"
                        :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}"><Icon icon="mingcute:up-fill" class="text-2xl"/></ion-button>
                    </div>
                </div>
                <div class="absolute top-0 left-0 p-3 rounded-br-3xl inline-block bg-base-100">
                    <ion-button onclick="back_modal.showModal()" fill="clear" class="btn rounded-xl btn-sm px-0"
                    :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}">Back</ion-button>
                </div>
                <div class="p-4 absolute top-0 right-0 bg-base-100/10 flex items-center gap-2 rounded-bl-3xl backdrop-blur-lg inline-block">
                    <div v-if="cameras.length > 1">
                        <select v-model="camera" @change="switchCam(camera)" class="select md:select-md select-sm" :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}">
                            <option v-for="item in cameras" :key="item.deviceId" :value="item.deviceId">
                                {{ item.label.length > 10 ? item.label.substring(0, 10) + '...' : item.label }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <ion-button fill="clear" @click="emailLocal = null" size="small" class="btn px-0 rounded-xl border-0"
                        :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}"><Icon icon="solar:user-bold-duotone" class="text-2xl"/></ion-button>
                    </div>
                </div>
            </div>
            <dialog id="option_modal" class="modal modal-bottom">
                <div class="modal-box max-w-2xl w-full mx-auto p-0">
                    <form method="dialog" class="w-full flex justify-center py-4">
                        <button class="btn px-3 bg-black text-white rounded-xl"><Icon icon="mingcute:down-fill" class="text-2xl"/></button>
                    </form>
                    <div class="px-6">
                        <h3 class="font-bold text-lg font-bold text-base-content">Data Captured <div class="badge badge-primary">4</div></h3>
                    </div>
                    <div class="max-h-[50vh] overflow-y-auto">
                        <div class="space-y-3 px-6 pb-6">
                            <div v-for="item, index in 4" :key="index" class="md:flex justify-between p-4 bg-gray-100 rounded-xl items-center">
                                <div class="relative">
                                    <h4 class="font-semibold my-0 mb-2 text-base-content">Pothole (12, 4)</h4>
                                    <div class="flex items-center gap-x-3">
                                        <Icon icon="heroicons:map-pin-20-solid" class="text-xl text-primary"/> 
                                        <span class="text-sm text-base-content">(75.4372102, 128.4739272)</span>
                                    </div>
                                </div>
                                <img src="/assets/images/about2.png"  alt="RecordedDataNih" class="md:w-24 w-full md:mt-0 mt-4 md:h-32 h-24 rounded-lg object-cover object-center">
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
            <dialog id="back_modal" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute text-xl right-2 top-2">✕</button>
                    </form>
                    <h3 class="font-bold text-lg">Are you sure ?</h3>
                    <form method="dialog" class="grid grid-cols-3 gap-x-4">
                        <ion-button type="submit" class="btn btn-ghost w-full normal-case" fill="clear">Cancel</ion-button>
                        <ion-button type="submit" router-link="/home" router-direction="forward" class="btn w-full normal-case" :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}" fill="clear">Back</ion-button>
                        <ion-button type="submit" @click="stopStream()" class="btn btn-error normal-case" fill="clear">Stop</ion-button>
                    </form>
                </div>
            </dialog>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
<script setup lang="ts">
import { IonContent, IonPage, IonButton } from '@ionic/vue';
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import { useIonRouter } from '@ionic/vue';

const router = useIonRouter()
const videoElement: Ref<any> = ref(null)
const stream: Ref<MediaStream|null> = ref(null)
const theme = ref('')
const camera = ref('')
const cameras: Ref<any> = ref([])
const user: any = ref()
const email: Ref<any> = ref('')
const emailLocal: Ref<any> = ref(null)

onMounted(async() => {
    theme.value = localStorage.getItem('theme') || 'light';
    emailLocal.value = localStorage.getItem('email') || null
    email.value = localStorage.getItem('email') || null
    getLocalUser()
    await getAvailableCam()
    if(emailLocal.value) startWebStream()
})

function getLocalUser() {
    user.value = localStorage.getItem('item') || null
}

function submitUserForm() {
    localStorage.setItem('email', email.value)
    emailLocal.value = email.value
    startWebStream()
}

function stopStream() {
    if (stream.value) {
        const tracks = stream.value.getTracks();
        tracks.forEach(track => track.stop());
        stream.value = null;
        setTimeout(() => {
            router.push('/home')
        }, 500);
    }
}

const getAvailableCam = async() => {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = devices.filter(device => device.kind == 'videoinput')
        cameras.value = videoDevices
        if(videoDevices.length > 0) camera.value = videoDevices[0].deviceId
    } catch(error) {
        console.error("Error getting available cameras:", error);
    }
}

const switchCam = async(deviceId: any) => {
    if(stream.value) stream.value.getTracks().forEach(track => track.stop())
    try {
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: { deviceId: deviceId }
        })
        videoElement.value.srcObject = stream.value
        camera.value = deviceId
    } catch(error) {
        console.error("Error switching camera:", error);
    }
}

const startWebStream = async() => {
    try {
        stream.value = await navigator.mediaDevices.getUserMedia({
            video: true
        })
        videoElement.value.srcObject = stream.value
    } catch(error) {
        console.error("Error accessing the webcam:", error);
    }
}

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