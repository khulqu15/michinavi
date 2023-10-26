<template>
    <div class="grid md:grid-cols-3 grid-cols-2 items-center justify-between gap-x-6 p-6 pb-12">
        <div class="flex items-center gap-2 md:inline-block hidden">
            <button class="btn btn-ghost font-normal normal-case">About</button>
            <button class="btn btn-ghost font-normal normal-case">Pricing</button>
            <button class="btn btn-ghost font-normal normal-case">Settings</button>
            <button class="btn btn-ghost font-normal normal-case">Support</button>
        </div>
        <div class="md:text-center w-full">
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <label for="my-drawer" class="btn btn-primary drawer-button">
                        <Icon icon="line-md:close-to-menu-transition" class="text-xl"/>
                    </label>
                </div> 
                <div class="drawer-side">
                    <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                    <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
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