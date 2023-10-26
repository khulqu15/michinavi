<template>
    <div class="grid grid-cols-3 items-center justify-between gap-x-6 p-6">
        <div class="flex items-center gap-2">
            <button class="btn btn-ghost font-normal normal-case">About</button>
            <button class="btn btn-ghost font-normal normal-case">Pricing</button>
            <button class="btn btn-ghost font-normal normal-case">Settings</button>
            <button class="btn btn-ghost font-normal normal-case">Support</button>
        </div>
        <div>
            <img src="/assets/images/logo.png" alt="Logo" class="w-10">
        </div>
        <div>
            <img src="/assets/images/logo.png" alt="Logo" class="w-10">
        </div>
    </div>
</template>


<script>
export default {
  name: 'NavbarView'
};
</script>