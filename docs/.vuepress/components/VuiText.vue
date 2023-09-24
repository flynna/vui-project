<script>
export default {
  name: 'VuiText',
  props: ['type'],
  computed: {
    className() {
      return `vui-text-${this.type ?? 'default'}`;
    },
  },
};
</script>

<template>
  <div class="vui-text" :class="className" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<style scoped>
.vui-text {
  line-height: 28px;
  padding: 3px 5px;
  margin: 5px 0;
  border-radius: 3px;
  font-size: 14px;
  color: #fff;
  border: 1px solid;

  &.vui-text-default {
    background: #fff;
    color: #000;
  }

  &.vui-text-primary {
    background: #409efe;
  }

  &.vui-text-success {
    background: #67c139;
  }

  &.vui-text-info {
    background: #90939a;
  }

  &.vui-text-warning {
    background: #e6a23d;
  }

  &.vui-text-danger {
    background: #f46c6c;
  }
}
</style>
