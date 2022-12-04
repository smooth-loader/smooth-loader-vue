<script setup lang="ts">
import { onMounted } from 'vue'
import smoothLoader from 'smooth-loader'

type Props = {
    original: string
    small?: string
}

const { original, small } = defineProps<Props>()

onMounted(() => smoothLoader('.smooth-loader'))
</script>

<template>
    <div :data-src="original" class="smooth-loader">
        <slot />
    </div>
</template>