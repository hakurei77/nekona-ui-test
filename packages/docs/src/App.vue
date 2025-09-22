<script setup lang="ts">
import MHeader from "@/components/MHeader.vue";
import MSidebar from "./components/MSidebar.vue";
import DocsConfig from "../docs.config.json";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="docs">
    <m-header :icon="DocsConfig.titleIcon" :title="DocsConfig.title" />
    <div class="docs__main">
      <m-sidebar :sidebarList="DocsConfig.sidebar" />
      <div class="docs__main__content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.docs {
  width: 100%;
  height: 100vh;
  &__main {
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    &__content {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      // 自定义滚动条样式
      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background: transparent;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--primary-color);
        border-radius: 999px;
      }
    }
  }
}
</style>
