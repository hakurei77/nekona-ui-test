<template>
    <svg :style="{ width: scaledSize + 'em', height: scaledSize + 'em' }" class="SVGICON" :class="{ active: isActive }">
        <use :xlink:href="prefix + name" fill="currentColor"></use>
    </svg>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import type { _ } from './types';

const props = withDefaults(defineProps<_>(), {
    scale: 1,
    prefix: '#icon-',
    isActive: false
});

const baseSize = 1; // 基础大小
const scaledSize = computed(() => {
    return baseSize * props.scale;
});
</script>

<style scoped>
.SVGICON {
    /* --svg-icon-color-1: var(--icon-1); */
}

.SVGICON :deep(path) {
    transition: fill 0.3s ease, stroke 0.3s ease;
}

.SVGICON.active {
    /* --svg-icon-color-1: var(--icon-1-active); */
}
</style>