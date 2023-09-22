<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type?: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger';
}>();

const className = computed(() => {
  return `vui-text-${props.type ?? 'default'}`;
});
</script>

<script lang="ts">
export default {
  name: 'VuiText',
};
</script>

<template>
  <div class="vui-text" :class="className" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<style lang="less" scoped src="./index.less"></style>
