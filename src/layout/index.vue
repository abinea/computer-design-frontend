<template>
  <a-layout class="layout">
    <Header></Header>
    <a-layout class="layout-main">
      <Asider></Asider>
      <a-layout class="layout-main">
        <Breadcrumb></Breadcrumb>
        <a-layout-content class="layout-content">
          <router-view class="layout-view"></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  min-height: 728px;
  overflow-y: hidden;
  display: flex;
  &-main {
    background: #292c32;
    display: flex;
  }
  &-content {
    margin: 24px 30px 30px 30px;
    background-color: rgba(56, 58, 64);
    border-radius: 2px;
  }
  &-view {
    min-height: 560px;
    padding: 32px;
  }
}
</style>
