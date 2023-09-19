<script setup lang="ts"></script>

<script>
export default {
  name: 'vui-button',
};
</script>

<template>
  <div>
    <!-- vue3 the $listeners is deprecated -->
    <button type="button" class="vui-button" v-bind="$attrs">
      <slot></slot>
    </button>
  </div>
</template>

<style lang="less" scoped>
.vui-button {
  color: #317a2e;
}
</style>
