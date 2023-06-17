<script setup lang="ts">
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

const columns = [
  {
    title: '序号',
    dataIndex: 'key',
    width: '8%',
  },
  {
    title: '用户名',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: '头像',
    dataIndex: 'avatar',
    width: '15%',
    slots: {
      customRender: 'avatar',
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: '20%',
  },
  {
    title: '用户权限',
    dataIndex: 'right',
    width: '15%',
  },
  {
    title: '操作',
    key: 'action',
    slots: {
      customRender: 'operation',
    },
  },
]
columns.forEach((v) => (v.className = 'column-grey'))
const data = []

for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    avatar: '',
    createTime: formatTime(new Date().toString()),
    right: `管理员`,
    action: 'name',
  })
}
const pagination = {
  pageSize: 10, // 默认每页显示数量
  showQuickJumper: true,
  showSizeChanger: true, // 显示可改变每页数量
  pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
  showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // 改变每页数量时更新显示
}
const dataSource = reactive(data)

// 编辑用户
const isUserInfoShow = ref(false)
const confirmLoading = ref(false)
const editUserInfo = () => {
  isUserInfoShow.value = true
}
const handleEditUserInfo = () => {
  confirmLoading.value = true
  setTimeout(() => {
    confirmLoading.value = false
    isUserInfoShow.value = false
    console.log('更新用户信息')
  }, 2000)
}
// 删除用户
const deleteUser = () => {
  Modal.confirm({
    title: () => '确定删除该用户？',
    icon: () => createVNode(ExclamationCircleOutlined),
    content: () => 'Some descriptions',

    okType: 'danger',
    okText: () => 'Yes',
    cancelText: () => 'No',

    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
    },
  })
}
</script>
<template>
  <div class="user-container">
    <div class="user-table-title">用户列表</div>
    <a-table
      :columns="columns"
      :data-source="dataSource"
      :pagination="pagination"
      style="margin-top: 40px; border-radius: 8px"
    >
      <template #avatar="{ record }">
        <a-avatar></a-avatar>
      </template>
      <template #operation="{ record }">
        <a @click="editUserInfo">编辑</a>
        <a-divider type="vertical" />
        <a @click="deleteUser">删除</a>
      </template>
    </a-table>
    <a-modal
      v-model:visible="isUserInfoShow"
      title="编辑用户"
      :confirm-loading="confirmLoading"
      @ok="handleEditUserInfo"
    >
      <p>无内容</p>
      <p>无内容</p>
      <p>无内容</p>
    </a-modal>
  </div>
</template>
<style>
.user-container {
  width: 1184px;
  padding: 0 32px;
  background-color: rgba(56, 58, 64, 1);
  border-radius: 2px;
}
.ant-table-thead > tr > th {
  text-align: center;
  background: rgba(209, 130, 98, 1);
}
.ant-table-tbody > tr > td {
  text-align: center;
  border-bottom-color: rgba(232, 232, 232, 1);
}

.column-grey {
  background: rgba(56, 58, 64, 1);
}
.editable-row-operations a {
  margin-right: 8px;
}

.user-table-title {
  height: 24px;
  text-align: left;
  padding: 20px 0px 0px;
  color: rgba(230, 230, 230, 1);
  font-size: 16px;
}
</style>
