<template>
    <nuxt-link
        :to="to"
        :title="title"
    >
        <div class="w-full px-4">
            <div
                class="px-[0.4rem] h-12 whitespace-nowrap flex items-center transition-all"
                :class="{'border-b border-slate-800': showBorderBottom}"
            >
                <i
                    class="bx"
                    :class="icon"
                />
                <span
                    v-if="showTitle"
                    class="ml-2"
                >
                    {{ title }}
                </span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: 'bx-circle',
        },
        showTitle: {
            type: Boolean,
            default: false,
        },
        showBorderBottom: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
