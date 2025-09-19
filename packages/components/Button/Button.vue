<script setup lang="ts">
import type { ButtonProps } from './types';
defineOptions({
  name: 'NekoButton',
})
withDefaults(defineProps<ButtonProps>(), {
  text: "aaa"
})
</script>

<template>
  <div>
    <button>{{ text }}</button>
    <div class="a">dadad</div>
  </div>
</template>

<style lang='scss' scoped>
button {
  background-color: red;
}
</style>