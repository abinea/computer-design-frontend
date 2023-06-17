<template>
  <div class="breadcrumb">
    <a-breadcrumb :routes="routes" class="breadcrumb-comp">
      <template #itemRender="{ route, paths }">
        <span v-if="route.path === ''">{{ route.title }}</span>
        <router-link v-else class="breadcrumb-link" :to="`${paths.at(-1)}`">
          {{ route.title }}
        </router-link>
      </template>
    </a-breadcrumb>
    <span class="breadcrumb-title">{{ $route.meta.title }}</span>
  </div>
</template>

<script setup lang="ts">
import type { RouteLocationNormalized } from 'vue-router'

const route = useRoute()
const routes = computed(() => getRoutes(route))
const getRoutes = (route: RouteLocationNormalized) => {
  const firstChild = {
    path: '',
    title: route.meta?.type,
  }
  const lastChild = {
    path: route.fullPath,
    title: route.meta?.title,
  }
  return [firstChild, lastChild]
}
</script>

<style lang="less" scoped>
.breadcrumb {
  height: 72px;
  display: flex;
  flex-direction: column;

  &-comp {
    margin-top: 16px;
    padding-left: 30px;
    padding-bottom: 10px;
  }

  & &-link {
    color: var(--color-blue-1);
  }
  &-title {
    color: #d6d6d8;
    font-size: 20px;
    padding-left: 30px;
    padding-bottom: 2px;
  }
}
</style>
