<template>
  <div class="container">
    <h2>加油站工作人员架构</h2>
    <img
      src="@/assets/picture/架构.png"
      alt=""
      width="600"
      style="height: fit-content"
    />
    <h3>加油站工作人员信息</h3>
    <div class="info-list">
      <table>
        <tr v-for="info in architecture.data" :key="info.id">
          <td>{{ info.role.concat('—'.repeat(6 - info.role.length)) }}</td>
          <td>姓名：{{ info.name }}</td>
          <td>工号：{{ info.cardId }}</td>
          <td>手机号码：{{ info.phone }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import architecture from '@/const/architecture.json'
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    margin-top: 16px;
    font-size: 20px;
  }

  .info-list {
    display: flex;
    td {
      padding: 10px 24px;
    }
    font-size: 16px;
  }
}
</style>
