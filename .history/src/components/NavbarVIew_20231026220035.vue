<template>
    <div class="grid md:grid-cols-3 grid-cols-2 items-center justify-between gap-x-6 p-6 pb-12">
        <div class="flex items-center gap-2 md:inline-block hidden">
            <button class="btn btn-ghost font-normal normal-case">About</button>
            <button class="btn btn-ghost font-normal normal-case">Pricing</button>
            <button class="btn btn-ghost font-normal normal-case">Settings</button>
            <button class="btn btn-ghost font-normal normal-case">Support</button>
        </div>
        <div class="text-center w-full">
            <img src="/assets/images/logo.png" alt="Logo" class="w-10 inline-block">
        </div>
        <div class="flex items-center justify-end">
            <button class="btn bg-black text-white rounded-full font-normal normal-case">Login <Icon icon="solar:login-2-bold" class="text-xl"/></button>
        </div>
    </div>
</template>


<script>
export default {
  name: 'NavbarView'
};
</script>