<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'VuiButton',
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
