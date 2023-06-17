<template>
  <a-config-provider :locale="locale">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </a-config-provider>
</template>

<script setup lang="ts">
import locale from 'ant-design-vue/es/locale/zh_CN'
</script>

<style>
#app {
  font-family: Alibaba PuHui, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #e6e6e6;
  font-size: 16px;
}
</style>
