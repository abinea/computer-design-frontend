<template>
  <a-layout-header class="header bg-gray">
    <div class="header-title text-sm">
      面向加油站不安全行为实时检测场景的普适性解决方案
    </div>
    <div>
      <BellOutlined class="text-sm" />
      <a-avatar size="small" class="header-avatar" :src="avatar" />
      <span class="header-user"> Sored </span>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import avatar from '@/assets/img/avatar.png'
</script>

<style lang="less" scoped>
.header {
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;

  &-title {
    color: var(--color-white-0);
    padding: 9px 0 13px 21px;
  }

  &-avatar {
    margin-left: 24px;
    margin-right: 8px;
  }

  &-user {
    margin-right: 28px;
  }
}
</style>
