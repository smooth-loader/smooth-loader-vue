<script setup lang="ts">
import { onMounted, ref } from 'vue'
import smoothLoader from 'smooth-loader'

type Props = {
    lg: string
    sm?: string
}

const { lg, sm } = defineProps<Props>()
const imgElem = ref<HTMLImageElement | null>(null)

onMounted(() => imgElem.value ? smoothLoader([imgElem.value]) : null)
</script>

<template>
    <img
        v-if="sm"
        :src="sm"
        :data-src="lg"
        ref="imgElem"
    />

    <img
        v-else
        :data-src="lg"
        ref="imgElem"
    />
</template>

<style scoped>
img {
    background-color: #eee;
}
</style>