<script setup lang="ts">
const router = useRouter()
const navigateTaskDetail = () => {
  router.replace('/task-detail')
}
const TaskData = {
  taskTitle: '',
  taskDesc: '',
  taskOwner: '',
  taskStartTime: '',
  taskProgress: '',
}

const dataSource = reactive(Array(100).fill(TaskData))
const filterState = ref('0')
const moreSelection = ref('更多')
const isBordered = ref(false)
const pagination = {
  pageSize: 10, // 默认每页显示数量
  showQuickJumper: true,
  showSizeChanger: true, // 显示可改变每页数量
  pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
  showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // 改变每页数量时更新显示
}
</script>

<template>
  <div class="task-manage-container">
    <div class="task-manage-title">任务列表</div>
    <div class="task-manage-header">
      <a-radio-group v-model:value="filterState" button-style="solid">
        <a-radio-button value="0">全部</a-radio-button>
        <a-radio-button value="1">已完成</a-radio-button>
        <a-radio-button value="2">未完成</a-radio-button>
      </a-radio-group>
      <a-input-search placeholder="请输入" class="task-manage-header-search" />
    </div>
    <a-list
      :data-source="dataSource"
      class="task-manage-list"
      item-layout="horizontal"
      :pagination="pagination"
    >
      <template #renderItem="{ item }">
        <a-list-item>
          <div class="task-manage-list-item">
            <span class="task-manage-list-block">Task</span>
            <div style="margin-left: 23px; margin-right: 40px; width: 340px">
              <div class="task-manage-list-title">一个任务名称</div>
              <div class="task-manage-list-desc">
                一段假想的简介，这是一段比较长的简介。
              </div>
            </div>
            <div style="width: 42px">
              <div class="task-manage-list-owner">Owner</div>
              <div class="task-manage-list-owner">曲丽丽</div>
            </div>
            <div style="margin-left: 39px; margin-right: 40px; width: 117px">
              <div class="task-manage-list-startTime">开始时间</div>
              <div class="task-manage-list-startTime">2016-06-16 14:30</div>
            </div>
            <a-progress
              style="width: 160px; margin-right: 50px"
              :percent="50"
            />

            <span style="padding-right: 2px">
              <a-tag color="success">正在上传</a-tag>
            </span>
          </div>
        </a-list-item>
      </template>
    </a-list>

    <div class="line"></div>
  </div>
</template>

<style lang="less">
.task-manage {
  &-container {
    padding: 0px 35px 21px 35px;
    border-radius: 2px;
  }
  &-title {
    padding-top: 23px;
    display: inline-block;
    height: 34px;
    color: rgba(179, 179, 179, 1);
    font-size: 24px;
  }
  &-header {
    padding-left: 469px;
    display: inline-block;
    label {
      color: rgba(91, 154, 248, 1);
      // background-color: rgba(91, 154, 248, 1);
      border: 1px solid rgba(91, 154, 248, 1);
      &:first-child {
        border-left: 1px solid rgba(91, 154, 248, 1);
      }
    }
    &-search {
      margin: 26px 0px 0px 41px;
      width: 263px;
      height: 31px;
      padding-left: 12px;
      background-color: rgba(56, 58, 64, 1);
      border: 0.97px solid rgba(217, 217, 217, 1);
      border-radius: 1.94px;
      color: rgba(230, 230, 230, 1);
    }
  }

  &-list {
    margin: 40px 25px 0px 17px;
    &-item {
      width: 1040px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &-title {
      color: rgba(91, 154, 248, 1);
      height: 22px;
      line-height: 22px;
    }
    &-block {
      margin-left: 8px;
      aspect-ratio: 1/1;
      width: 46px;
      background-color: rgba(89, 126, 247, 1);
      font-size: 15px;
      display: grid;
      place-items: center;
    }

    &-desc {
      margin-top: 3px;
      height: 22px;
      color: rgba(255, 255, 255, 0.45);
      font-size: 13.53px;
      line-height: 21.27px;
    }

    &-owner {
      margin-top: 3px;
      height: 22px;
      color: rgba(255, 255, 255, 0.45);
      font-size: 13.53px;
      line-height: 21.27px;
    }

    &-startTime {
      margin-top: 3px;
      height: 22px;
      color: rgba(255, 255, 255, 0.45);
      font-size: 13.53px;
      line-height: 21.27px;
    }

    .ant-list-item {
      border-bottom: 1px solid rgb(233, 233, 233) !important;
      &:last-child {
        border-bottom: 0px;
      }
    }
    .ant-progress-bg {
      height: 6px !important;
    }
    .ant-progress-inner {
      background-color: rgba(245, 245, 245, 1);
    }
    .ant-select {
      color: #177ddc;
      &-selector {
        padding-left: 0 !important;
      }
    }
    .ant-tag {
      font-weight: 700;
      color: rgba(30, 97, 42, 1);
      border-radius: 45px;
      background: rgba(175, 224, 183, 1);
    }
  }
}
</style>
