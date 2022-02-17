<template>
    <div class="font-body h-screen w-full flex pb-16 lg:pb-0 bg-slate-900 text-zinc-300">
        <div
            class="h-full p-6 fixed lg:left-0 top-0 w-full md:w-auto pb-24 lg:pb-6 transition-all bg-slate-900"
            :class="{
                'left-[-100%]': !isMobileSidebarShown,
                'left-0': isMobileSidebarShown,
            }"
        >
            <div
                class="bg-slate-900 h-full flex flex-col rounded-md shadow-xl overflow-hidden transition-all border-2 border-slate-800 w-full"
                :class="sidebarWidthClass"
            >
                <div class="w-100 h-16 p-4 border-b-2 border-slate-800 flex justify-between items-center">
                    <nuxt-link
                        to="/"
                        class="h-full"
                    >
                        <img
                            src="~/assets/images/logo_small.png"
                            alt="relect-logo"
                            class="h-full w-auto object-contain"
                        >
                    </nuxt-link>
                </div>
                <div
                    class="hover:bg-slate-800 border-t-2 border-slate-800 w-100 cursor-pointer mt-auto p-4 text-center transition-colors hidden lg:block"
                    :title="$t('toggleSidebar')"
                    @click="toggleSidebaOpen"
                >
                    <i
                        class="bx bx-menu-alt-right bx-sm"
                    />
                </div>
            </div>
        </div>
        <div
            :class="sidebarWidthClass"
            class="transition-all hidden lg:block"
        />
        <div class="grow h-full lg:pt-6 lg:pl-6">
            <div class="container mx-auto h-full px-6 flex flex-col">
                <div
                    id="header"
                    class="h-16 w-full flex items-center"
                >
                    {{ siteTitle }}
                </div>
                <div class="pb-6 pt-4 grow">
                    <Nuxt />
                </div>
            </div>
        </div>
        <div class="fixed bottom-0 left-0 w-full p-4 h-16 bg-slate-900 border-t-2 border-slate-800 flex lg:hidden items-center justify-between">
            <div @click="toggleMobuleSidebar">
                <i class="bx bx-menu-alt-right bx-sm" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            isSidebarOpen: true,
            isMobileSidebarShown: false,
        };
    },
    head () {
        return {
            title: this.siteTitle + ' :: Relect',
        };
    },
    computed: {
        siteTitle () {
            return this.$t('title.' + this.$route.path);
        },
        sidebarWidthClass () {
            return this.isSidebarOpen ? 'lg:w-80 md:w-64' : 'lg:w-16';
        },
    },
    methods: {
        toggleSidebaOpen () {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
        toggleMobuleSidebar () {
            this.isMobileSidebarShown = !this.isMobileSidebarShown;
        },
    },
};
</script>
