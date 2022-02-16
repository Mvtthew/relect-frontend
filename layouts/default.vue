<template>
    <div class="font-body h-screen w-full flex">
        <div
            class="bg-stone-200 h-full flex flex-col"
            :class="sidebarWidthClass"
        >
            <div class="w-100 h-16 p-4 bg-stone-300 flex justify-between items-center">
                <nuxt-link
                    to="/"
                    class="h-full"
                >
                    <img
                        :src="imgSrc"
                        alt="relect-logo"
                        class="h-full w-auto"
                    >
                </nuxt-link>
            </div>
            <div
                class="bg-stone-300 hover:bg-stone-400 w-100 cursor-pointer mt-auto p-4 text-center"
                :title="$t('toggleSidebar')"
                @click="toggleSidebaOpen"
            >
                <i
                    class="bx bx-menu-alt-right bx-sm"
                />
            </div>
        </div>
        <div class="grow h-full overflow-scroll">
            <div
                id="header"
                class="h-16 bg-stone-200"
            >
                {{ siteTitle }}
            </div>
            <div class="p-4">
                <Nuxt />
            </div>
        </div>
    </div>
</template>

<script>
import logoSmall from '~/assets/images/logo_small.png';
import logoBig from '~/assets/images/logo_big.png';

export default {
    data () {
        return {
            isSidebarOpen: true,
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
            return this.isSidebarOpen ? 'w-64' : 'w-16';
        },
        imgSrc () {
            return this.isSidebarOpen ? logoBig : logoSmall;
        },
    },
    methods: {
        toggleSidebaOpen () {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>
