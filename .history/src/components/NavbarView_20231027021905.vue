<template>
    <div class="grid lg:grid-cols-3 grid-cols-2 items-center justify-between gap-x-6 p-6 pb-12">
        <div class="flex items-center gap-2 lg:inline-block hidden">
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/about" router-direction="back">About</ion-button>
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/pricing" router-direction="back">Pricing</ion-button>
            <!-- You can open the modal using ID.showModal() method -->
            <button class="btn btn-ghost relative top-1 font-normal normal-case" onclick="my_modal_3.showModal()">Setting</button>
            <dialog id="my_modal_3" class="modal">
                <div class="modal-box">
                    <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 class="font-bold text-lg">Setting Page</h3>
                    <div class="flex items-center justify-between">
                        <p class="py-4">Appearance</p>
                    </div>
                </div>
            </dialog>
            <ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/support" router-direction="back">Support</ion-button>
        </div>
        <div class="lg:text-center lg:inline-block flex w-full">
            <div class="drawer z-40 relative lg:hidden block">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content w-auto">
                    <label for="my-drawer" class="btn btn-ghost">
                        <Icon icon="line-md:close-to-menu-transition" class="text-black text-xl"/>
                    </label>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/about" router-direction="back">About</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/pricing" router-direction="back">Pricing</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/setting" router-direction="back">Settings</ion-button></li>
                        <li><ion-button class="btn btn-ghost p-0 mt-0 font-normal normal-case" fill="clear" router-link="/support" router-direction="back">Support</ion-button></li>
                    </ul>
                </div>
            </div>
            <ion-button router-link="/home" fill="clear" router-direction="back">
                <img src="/assets/images/logo.png" alt="Logo" class="w-10 inline-block relative lg:left-0 -left-12">
            </ion-button>
        </div>
        <div class="flex items-center justify-end">
            <ion-button class="btn bg-black text-white rounded-full font-normal normal-case" fill="clear" router-link="/login" router-direction="back">Login <Icon icon="solar:login-2-bold" class="text-xl"/></ion-button>
        </div>
    </div>
</template>


<script lang="ts">
import { IonButton } from '@ionic/vue';

export default {
    components: {
        IonButton,
    }
}

</script>