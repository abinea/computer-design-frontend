<template>
  <a-layout-sider width="208" :trigger="null" class="aside bg-gray">
    <a-menu
      class="aside-menu bg-gray"
      mode="inline"
      v-model:selectedKeys="selectedKeys"
      v-model:open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <a-sub-menu key="sub1">
        <template #icon>
          <check-circle-outlined />
        </template>
        <template #title>加油区</template>
        <a-menu-item key="1">图片处理</a-menu-item>
        <a-menu-item key="2">视频监控</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <template #icon>
          <profile-outlined />
        </template>
        <template #title>卸油区</template>
        <a-menu-item key="3">图片处理</a-menu-item>
        <a-menu-item key="4">视频监控</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub3">
        <template #icon>
          <table-outlined />
        </template>
        <template #title>后台管理</template>
        <a-menu-item key="5">用户管理</a-menu-item>
        <a-menu-item key="6">任务管理</a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub4">
        <template #icon>
          <form-outlined />
        </template>
        <template #title>安全措施</template>
        <a-menu-item key="7">安全条例</a-menu-item>
        <a-menu-item key="8">应急预案</a-menu-item>
        <a-menu-item key="9">联系电话</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const paths = router
  .getRoutes()
  .filter((v) => !v.meta.hidden)
  .map((v) => v.path)

const selectedKeys = ref<string[]>([String(paths.indexOf(route.path))])
watch(selectedKeys, (val) => router.push(paths[Number(val[0])]))

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4']
const openKeys = ref<string[]>([])
switch (route.meta?.type) {
  case '加油区':
    openKeys.value = ['sub1']
    break
  case '卸油区':
    openKeys.value = ['sub2']
    break
  case '后台管理':
    openKeys.value = ['sub3']
    break
  case '安全措施':
    openKeys.value = ['sub4']
    break
}
const onOpenChange = (keys: string[]) => {
  const latestOpenKey = keys.find(
    (key) => openKeys.value.indexOf(key) === -1
  ) as string

  if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    openKeys.value = keys
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : []
  }
}
</script>

<style lang="less" scoped>
.aside {
  height: 100vh;
}
/deep/.aside-menu {
  .ant-menu-submenu-title {
    font-size: 16px;
  }

  .ant-menu-submenu-selected .ant-menu-submenu-arrow {
    color: var(--color-blue-1);
  }
  .ant-menu-sub.ant-menu-inline {
    background-color: var(--color-gray-0);
  }
  .ant-menu-item {
    &-selected,
    &-active {
      color: var(--color-white-0);
      background-color: var(--color-blue-1);
    }
  }
}
</style>
