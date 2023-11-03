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
                                <ul class="menu sticky sticky-top top-0 p-4 pt-8 space-y-3 bg-base-100 md:rounded-r-3xl rounded-none w-80 min-h-full text-base-content">
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
                                    <li class="absolute bottom-0 inline-block hover:bg-base-100 active:bg-base-100 focus:bg-base-100 bg-base-100 left-0 w-full p-6">
                                        <div class="flex items-center justify-between py-0 px-5">
                                            <p class="py-4 text-base-content"><Icon icon="pajamas:appearance" class="text-xl inline-block mr-3"/> Appearance</p>
                                        </div>
                                        <div class="grid grid-cols-2 hover:bg-base-100 active:bg-base-100 focus:bg-base-100 bg-base-100">
                                            <ion-button fill="clear" @click="changeTheme('light')" class="btn join-item">Light</ion-button>
                                            <ion-button fill="clear" @click="changeTheme('dark')" class="btn join-item">Dark</ion-button>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-10">
                        <div class="w-full flex justify-between items-center md:ml-6 bg-base-100 p-6 rounded-bl-3xl">
                            <div>
                                <h4 class="font-semibold text-base-content">Data Recorded</h4>
                            </div>
                            <div>
                                <div class="dropdown dropdown-bottom dropdown-end px-6">
                                    <label tabindex="0" class="avatar">
                                        <div class="w-12 mask mask-squircle">
                                            <img src="/assets/images/Ninno.png" />
                                        </div>
                                    </label>
                                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a class="text-base-content">Profile</a></li>
                                        <li><a class="text-base-content">Logout</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="max-h-[88vh] overflow-y-auto">
                            <div class="w-full p-6">
                                <div v-if="isLoad" class="space-y-3 grid md:grid-cols-2 gap-6">
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
                                <div v-else>
                                    <div v-if="data" class="space-y-3 grid grid-cols-2">
                                        <div class="overflow-x-auto bg-base-100">
                                            <table class="table">
                                                <!-- head -->
                                                <thead>
                                                    <tr>
                                                        <th>
                                                        <label>
                                                            <input type="checkbox" class="checkbox" />
                                                        </label>
                                                        </th>
                                                        <th>Name</th>
                                                        <th>Dimension</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                <!-- row 1 -->
                                                <tr class="hover" v-for="item, key in data" @click="setSelected(key)" :key="key">
                                                    <th>
                                                        <label>
                                                            <input type="checkbox" class="checkbox" />
                                                        </label>
                                                    </th>
                                                    <td class="text-base-content">{{ formattedName(item.image) }}</td>
                                                    <td class="text-base-content">{{ item.width }}, {{ item.height }}</td>
                                                    <th>
                                                        <ion-button fill="clear" @click="setSelected(key)" class="btn btn-ghost btn-xs text-base-content">details</ion-button>
                                                        <ion-button fill="clear" @click="setDelete(key)" class="btn btn-error btn-xs">Delete</ion-button>
                                                    </th>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                </div>
                            </div>
                            <div class="relative w-full bottom-0 left-0 py-6 mt-12 flex justify-center text-base-content">
                                2023 Developed by <span class="text-primary ml-1 font-semibold"><a href="https://hayago.id" target="_blank">Hayago</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>
      
<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue'
import { onMounted, ref, Ref } from 'vue';
const theme: Ref<any> = ref('light');
import { db, storage } from '@/firebase';
import { onValue, ref as dbRef } from 'firebase/database'
import { ref as storageRef, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

const data: Ref<any> = ref()
const isLoad: Ref<boolean> = ref(true)
const dataSelected: Ref<any> = ref('')

onMounted(() => {
    theme.value = localStorage.getItem('theme') || 'light';
    changeTheme(theme.value)
    getDataCam()
});

async function getImageDimensions(src: string): Promise<{ width: number, height: number }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    img.src = src;
  });
}

function setDelete(key: any) {
    console.log('halo')
}

function changeTheme(data: string) {
    theme.value = data
    localStorage.setItem('theme', theme.value)
    document.documentElement.setAttribute('data-theme', theme.value);
}

function formattedName(imageName: string) {
    let formattedName = imageName.split('.')[0];
    formattedName = formattedName.replace(/[_-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return formattedName;
}

function setSelected(key: any) {
    dataSelected.value = key
    const buttonOptionModal = document.getElementById('optionModal')
    if(buttonOptionModal) buttonOptionModal.click()
}

function getDataCam() {
    const dataRef = dbRef(db, 'michiapp/data')
    onValue(dataRef, async (snapshot) => {
        const dataResult = snapshot.val()
        const objectKeys = Object.keys(dataResult);
        const iterate = ref(0)
        for(const key of objectKeys) {
            if(dataResult[key]) {
                if(iterate.value == 0) dataSelected.value = key 
                const dataItem = {...dataResult[key]};
                const dataImage = storageRef(storage, 'imageName.png');
                dataItem.imageFile = await getDownloadURL(dataImage);
                const dimensions = await getImageDimensions(dataItem.imageFile);
                dataItem.width = dimensions.width;
                dataItem.height = dimensions.height;
                dataResult[key] = dataItem;
            }
        }
        data.value = dataResult
        isLoad.value = false
    })
}
</script>