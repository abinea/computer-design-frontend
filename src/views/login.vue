<script setup lang="ts"></script>

<template>
  <div class="login-container">
    <header class="login-header">
      <img src="@/icons/login-szu.png" alt="login-szu" style="width: 50px" />
      <p class="login-header-title">FML ReID LabelTool</p>
      <p class="login-header-subtitle">跨镜多目标追踪数据集标注工具</p>
    </header>
    <Form></Form>
    <footer class="login-footer">
      Copyright &copy; 2021深圳大学未来媒体实验室
    </footer>
  </div>
</template>

<style lang="less">
.login {
  &-container {
    display: grid;
    place-content: center;
    background-image: url('@/icons/login-bg.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 37px 64px;
    text-align: left;
  }
  &-header {
    margin-top: 100px;
    width: 380px;
    height: 74px;
    margin-bottom: 44px;
    &-title {
      font-family: 'Alibaba PuHui';
      font-size: 33px;
      margin-left: 12px;
      text-align: left;
      display: inline-block;
    }
    &-subtitle {
      color: rgba(255, 255, 255, 0.22);
      text-align: right;
    }
  }
  &-footer {
    margin-top: 205px;
    font-size: 14px;
    color: rgba(153, 153, 153, 1);
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
