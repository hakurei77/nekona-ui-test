<script setup lang="ts">
import hljs from 'highlight.js';
import { useSlots } from 'vue';
interface Props {
  lang: string;
}
const props = withDefaults(defineProps<Props>(), {
  lang: 'plaintext'
});
const slots = useSlots();

// 根据不同语言返回对应的颜色
const getLanguageColor = (lang: string) => {
  const colors: Record<string, string> = {
    'javascript': '#f7df1e',
    'typescript': '#3178c6',
    'vue': '#4fc08d',
    'html': '#e34c26',
    'css': '#1572b6',
    'scss': '#cf649a',
    'json': '#000000',
    'markdown': '#083fa1',
    'python': '#3776ab',
    'java': '#007396',
    'c': '#555555',
    'cpp': '#00599c',
    'go': '#00add8',
    'rust': '#000000',
    'php': '#777bb4',
    'sql': '#336791',
    'bash': '#4eaa25',
    'shell': '#4eaa25',
    'yaml': '#cb171e',
    'xml': '#0060ac',
    'docker': '#2496ed',
    'kotlin': '#7f52ff',
    'swift': '#fa7343',
    'ruby': '#cc342d',
    'perl': '#39457e',
    'lua': '#000080',
    'r': '#276dc3',
    'matlab': '#0076a8',
    'nginx': '#009639',
    'apache': '#d22128',
  };
  
  // 转换为小写进行匹配
  const lowerLang = lang.toLowerCase();
  
  // 如果找到匹配的语言颜色，则返回，否则返回默认颜色
  return colors[lowerLang] || '#666666';
};
// 获取插槽内容并去除首尾空白
const getCodeContent = () => {
  const defaultSlot = slots.default?.();
  if (defaultSlot && defaultSlot.length > 0 && defaultSlot[0]) {
    // 获取文本内容并去除首尾空白
    const children = defaultSlot[0].children;
    const text = children ? children.toString().trim() : '';
    return text;
  }
  return '';
};
// 高亮处理后的代码
const highlightCode = (code: string, lang: string) => {
  if (!code) return '';
  // 临时保存原始的 console.error 方法
  const originalConsoleError = console.error;
  try {
    // 临时重写 console.error 以抑制错误信息
    console.error = () => {};
    // 尝试使用指定的语言进行高亮
    return hljs.highlight(code, {
      language: lang,
      ignoreIllegals: true
    }).value;
  } catch (error) {
    // 如果出错，使用自动语言检测
    return hljs.highlightAuto(code).value;
  } finally {
    // 恢复原始的 console.error 方法
    console.error = originalConsoleError;
  }
};
</script>

<template>
  <pre class="hljs">
    <div class="d-code-top">
      <span :style="{ color: getLanguageColor(props.lang) }">{{ props.lang }}</span>
    </div>
    <code v-html="highlightCode(getCodeContent(), props.lang)"></code>
  </pre>
</template>

<style lang='scss' scoped>
$d-code-border-1: #9da5cf;
$d-code-text-base: 1rem;
.d-code-top {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $d-code-border-1;
  padding: 4px 12px;
  font-weight: 600;
}
pre {
  width: 100%;
  display: flex;
  flex-direction: column;
  user-select: text;
  font-size: $d-code-text-base;
  border-radius: 6px;
  margin-top: 4px;
  margin-bottom: 4px;
}
code {
  padding: 8px 12px;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
</style>