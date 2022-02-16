<template>
    <p
        :class="sizeClass"
        class="font-display"
    >
        <slot />
    </p>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md',
        },
    },
    computed: {
        sizeClass () {
            switch (this.size) {
            case '4xl': return 'text-4xl';
            case '3xl': return 'text-3xl';
            case '2xl': return 'text-2xl';
            case 'xl': return 'text-xl';
            case 'lg': return 'text-lg';
            case 'md': return 'text-md';
            case 'sm': return 'text-sm';
            case 'xs':
            default:
                return 'text-xs';
            }
        },
    },
};
</script>
