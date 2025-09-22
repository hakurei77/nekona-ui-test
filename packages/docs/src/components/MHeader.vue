<script setup lang="ts">
import { NekoIcon } from "nekona-ui-test";
import MVersionNumberCapsule from "./MVersionNumberCapsule.vue";
import packageJson from "../../../core/package.json";

interface Props {
  title: string;
  icon: string;
}
defineProps<Props>();

const version = packageJson.version;
</script>

<template>
  <div class="docs-header">
    <neko-icon :name="icon" :scale="3" class="docs-header__icon" />
    <span class="docs-header__title">{{ title }}</span>
    <MVersionNumberCapsule :version="version" class="docs-header__version" />
  </div>
</template>

<style lang="scss" scoped>
.docs-header {
  width: 100%;
  height: 64px;
  display: flex;
  border-bottom: 1px solid var(--palette-2-border-1);
  align-items: center;
  padding: 0px 24px;
  color: var(--palette-2-text-1);

  &__title {
    margin-left: 12px;
    font-size: var(--text-xl);
    font-weight: 600;
  }

  &__version {
    margin-left: 20px;
  }
}
</style>
