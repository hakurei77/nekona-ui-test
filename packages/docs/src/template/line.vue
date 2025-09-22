<template>
  <div class="d-line">
    <div class="d-line__main" />
    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="45.2551" y="49.4975" width="64" height="64" transform="rotate(45 45.2551 49.4975)" fill="currentColor" />
      <rect x="94.7527" y="98.9949" width="64" height="64" transform="rotate(45 94.7527 98.9949)" fill="currentColor" />
      <rect x="94.7527" width="64" height="64" transform="rotate(45 94.7527 0)" fill="currentColor" />
    </svg>
    <svg width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="45.2548" width="64" height="64" transform="rotate(-45 0 45.2548)" fill="#FFD52C" />
    </svg>
    <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="144.25" y="140.007" width="64" height="64" transform="rotate(-135 144.25 140.007)" fill="currentColor" />
      <rect x="94.7529" y="90.5096" width="64" height="64" transform="rotate(-135 94.7529 90.5096)"
        fill="currentColor" />
      <rect x="94.7529" y="189.505" width="64" height="64" transform="rotate(-135 94.7529 189.505)"
        fill="currentColor" />
    </svg>
    <div class="d-line__main" />
  </div>
</template>

<style lang="scss" scoped>
$d-line-text-1: #a78cfc;
.d-line {
  width: 100%;
  height: 24px;
  margin-top: 6px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  color: $d-line-text-1;
  &__main {
    width: 100%;
    height: 1px;
    background-color: $d-line-text-1;
  }
  svg {
    width: 2.4em;
    height: 2.4em;
  }
  svg:nth-child(3) {
    width: 1.3em;
    height: 1.3em;
  }
}
</style>
