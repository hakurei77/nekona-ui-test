<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
interface Item {
  item: string;
  path: string;
}
interface List {
  title: string;
  list: Item[];
}
interface Props {
  sidebarList: List[];
}
defineProps<Props>();
const router = useRouter();
const route = useRoute();
// 扁平化树状数据，添加层级信息
const flattenItems = (lists: List[]) => {
  const result: Array<{
    title: string;
    path?: string;
    level: number;
  }> = [];
  lists.forEach(list => {
    result.push({
      title: list.title,
      level: 0
    });
    list.list.forEach(item => {
      result.push({
        title: item.item,
        path: item.path,
        level: 1
      });
    });
  });
  return result;
};
// 处理点击事件
const handleItemClick = (path?: string) => {
  if (path) {
    router.push(path);
  }
};
// 检查当前路径是否匹配路由
const isActive = (path?: string) => {
  if (!path) return false;
  return route.path === path;
};
</script>

<template>
  <div class="docs-sidebar">
    <div v-for="(item, index) in flattenItems(sidebarList)" :key="index" :class="[
      `docs-sidebar__item--level-${item.level}`,
      { 'active': isActive(item.path) }
    ]" @click="handleItemClick(item.path)">
      {{ item.title }}
    </div>
  </div>
</template>

<style lang='scss' scoped>
.docs-sidebar {
  width: 266px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0px 18px;
  padding-bottom: 48px;
  border-right: 1px solid var(--palette-2-border-1);
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
  &__item {
    &--level-0 {
      font-size: var(--text-lg);
      font-weight: 600;
      margin-top: 26px;
      margin-bottom: 8px;
      &:first-child {
        margin-top: 18px;
      }
    }
    &--level-1 {
      border-radius: 6px;
      color: var(--palette-2-text-3);
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 18px;
      font-size: var(--text-sm);
      cursor: pointer;
      &:hover {
        color: var(--palette-3-text-1);
        font-weight: 600;
      }
      &.active {
        background-color: var(--palette-3-bg);
        color: var(--palette-3-text-1);
        font-weight: 600;
      }
    }
  }
}
</style>