<script setup lang="ts">
interface Props {
  version: string;
}
defineProps<Props>();
</script>

<template>
  <div class="docs-version-number-capsule">
    {{ version }}
  </div>
</template>

<style lang="scss" scoped>
.docs-version-number-capsule {
  background-color: var(--palette-1-bg);
  border-radius: 999px;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--palette-1-border-1);
  font-size: var(--text-sm);
}
</style>
