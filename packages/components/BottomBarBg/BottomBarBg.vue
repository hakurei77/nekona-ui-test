<script setup lang="ts">
import { computed } from "vue";
import type { BottomBarBgProps } from "./types";

const props = withDefaults(defineProps<BottomBarBgProps>(), {
  totalWidth: 50,
  totalHeight: 50,
  curveWidth: 15,
  curveHeight: 8,
  arcRadius: 10,
  activeIndex: 0,
  navCount: 5,
});

const pathData = computed(() => {
  // 计算每个导航项的宽度
  const itemWidth = props.totalWidth / props.navCount;
  // 计算凹陷部分的起始位置
  // 居中显示在当前活动的导航项下方
  const startPoint =
    itemWidth * props.activeIndex +
    itemWidth / 2 -
    props.curveWidth -
    props.arcRadius;
  return `
    M 0 0
    H ${startPoint}
    Q ${startPoint + props.curveWidth} 0 ${startPoint + props.curveWidth} ${
    props.curveHeight
  }
    A ${props.arcRadius} ${props.arcRadius} 0 0 0 ${
    startPoint + props.curveWidth + props.arcRadius * 2
  } ${props.curveHeight}
    Q ${startPoint + props.curveWidth + props.arcRadius * 2} 0 ${
    startPoint + props.curveWidth * 2 + props.arcRadius * 2
  } 0
    H ${props.totalWidth}
    V ${props.totalHeight}
    H 0
    Z
  `.trim();
});
</script>

<template>
  <svg
    :width="totalWidth"
    :height="totalHeight"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :d="pathData" fill="currentColor" class="m-bottom-bar-svg-path" />
  </svg>
</template>

<style lang="scss" scoped>
.m-bottom-bar-svg-path {
  transition: all 0.3s ease;
}
</style>
