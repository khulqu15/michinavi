<template>
    <div class="grid lg:grid-cols-3 grid-cols-2 items-center justify-between gap-x-6 p-6 pb-12">
        <div class="flex items-center gap-2 lg:inline-block hidden text-base-content">
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/home" router-direction="back">Home</ion-button>
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/about" router-direction="back">About</ion-button>
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/pricing" router-direction="back">Pricing</ion-button>
            <!-- You can open the modal using ID.showModal() method -->
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" onclick="my_modal_3.showModal()">Setting</ion-button>
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/support" router-direction="back">Support</ion-button>
        </div>
        <div class="lg:text-center lg:inline-block flex w-full">
            <div class="drawer z-40 relative lg:hidden block">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-auto">
                    <label for="my-drawer" class="btn btn-ghost">
                        <Icon icon="line-md:close-to-menu-transition" class="text-base-content text-xl"/>
                    </label>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li class="flex items-center"><img src="/assets/images/logo.png" alt="Logo" class="w-20 inline-block"> <span class="text-xl text-primary font-semibold uppercase">MichiNavi</span></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/home" router-direction="back">Home</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/about" router-direction="back">About</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/pricing" router-direction="back">Pricing</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" onclick="my_modal_3.showModal()">Setting</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/support" router-direction="back">Support</ion-button></li>
                    </ul>
                </div>
            </div>
            <ion-button router-link="/home" fill="clear" router-direction="back">
                <img src="/assets/images/logo.png" alt="Logo" class="w-10 inline-block relative lg:left-0 -left-12">
            </ion-button>
        </div>
        <div class="flex items-center justify-end">
            <ion-button class="btn rounded-full font-normal normal-case"
                :class="{'bg-black text-white': theme == 'light', 'bg-white text-black': theme == 'dark'}"
                fill="clear" router-link="/login" router-direction="back">Log In <Icon icon="solar:login-2-bold" class="text-xl"/></ion-button>
        </div>
        <dialog id="my_modal_3" class="modal">
            <div class="modal-box">
                <form method="dialog">
                <button class="btn text-xl text-base-content btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="font-bold text-lg text-base-content">Setting Page</h3>
                <div class="flex items-center justify-between">
                    <p class="py-4 text-base-content"><Icon icon="pajamas:appearance" class="text-xl inline-block mr-3"/> Appearance</p>
                    <button @click="changeTheme()" class="btn btn-bordered">{{ theme }}</button>
                </div>
                <div class="flex items-center justify-between">
                    <p class="py-4 text-base-content"><Icon icon="tabler:box-model" class="text-xl inline-block mr-3"/> Model System</p>
                    <button class="btn btn-bordered text-base-content">MobileNet</button>
                </div>
            </div>
        </dialog>
    </div>
</template>


<script lang="ts">
import { IonButton } from '@ionic/vue';
import { onMounted, ref, Ref } from 'vue';

export default {
    setup() {
        const theme: Ref<any> = ref('light');

        onMounted(() => {
            theme.value = localStorage.getItem('theme') || 'light';
        });

        function changeTheme() {
            if(theme.value == 'light') theme.value = 'dark'
            else theme.value = 'light'
            localStorage.setItem('theme', theme.value)
            document.documentElement.setAttribute('data-theme', theme.value);
        }
        
        return {
            theme,
            changeTheme,
        };
    },
    components: {
        IonButton,
    }
}

</script>