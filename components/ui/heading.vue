<template>
    <p class="sizeClass">
        <slot />
    </p>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'md'
        }
    },
    computed: {
        sizeClass () {
            return 'text-' + this.size
        }
    }
}
</script>
