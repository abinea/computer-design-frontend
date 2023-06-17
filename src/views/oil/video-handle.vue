<template>
  <div class="video">
    <div class="video-player">
      <videoPlay
        ref="videoRef"
        v-bind="options"
        :src="videoSrc"
        @play="handlePlay"
      />
    </div>
    <div class="video-result">
      <a-button
        type="primary"
        danger
        class="video-warn_btn"
        @click="triggerWarning('manual')"
      >
        一键报警
      </a-button>
      <div class="video-identify_feature">
        识别参数：
        <ul v-if="isAddArea">
          <li v-for="(val, key) of data1">
            <span v-if="val != 0">{{ key }}: {{ val }}</span>
          </li>
        </ul>
        <ul v-else>
          <li v-for="(val, key) of data2">{{ key }}: {{ val }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { videoPlay } from 'vue3-video-play'
import { Modal } from 'ant-design-vue'

const options = reactive({
  width: 'fit-content', // 播放器宽度
  height: '98%', // 播放器高度
  muted: true, // 静音
  speedRate: ['0.75', '1.0', '1.25', '1.5', '2.0'], // 播放倍速
  autoPlay: true, // 自动播放
  loop: true, // 循环播放
  volume: 0, // 默认音量大小
  control: false, // 是否显示控制器
  // controlBtns: [
  // 	"audioTrack", // 音轨切换按钮
  // 	// "quality", // 视频质量切换按钮
  // 	"speedRate", // 播放速度切换按钮
  // 	"volume", // 音量
  // 	// "setting", // 设置
  // 	// "pip", // 画中画
  // 	"pageFullScreen", // 网页全屏按钮
  // 	"fullScreen", // 全屏按钮
  // ],
  title: '', // 视频名称
  src: '', // 视频源
  poster: '', // 封面:视频第一帧
  // preload: "", // 预加载
  currentTime: 0, // 当前播放时间
})

const route = useRoute()
const isAddArea = computed(() => route.meta.type === '加油区')
const videoSrc = ref(''),
  handlePlay = ref<unknown>()
watch(
  isAddArea,
  (val) => {
    videoSrc.value = val
      ? '/api/video/A_04_det.mp4'
      : '/api/video/U_03_det_fix.mp4'
    handlePlay.value = val ? handlePlayAdd : handlePlayUnload
  },
  { immediate: true }
)

let data1 = reactive({
  person: 2,
  work_clothes: 2,
  car: 3,
  trunk: 1,
  license: 2,
})
let data2 = reactive({
  person: 1,
  work_clothes: 2,
  oil_line: 1,
  fire_extinguisher35: 2,
  vigilance_stand: 3,
})

let timer1 = ref<NodeJS.Timer>(),
  isWarned = false
function handlePlayAdd(e: Event) {
  const videoEl = e.target as HTMLVideoElement
  timer1.value = setInterval(() => {
    if (videoEl.currentTime >= 3) {
      data1.person = 3
      data1.trunk = 1
    }
    if (videoEl.currentTime >= 5) {
      data1.person = 2
    }
    if (videoEl.currentTime >= 6) {
      data1.trunk = 0
    }
    if (videoEl.currentTime >= 7) {
      data1.trunk = 1
    }
    if (videoEl.currentTime >= 9) {
      data1.trunk = 0
    }
    if (videoEl.currentTime >= 11) {
      data1.person = 3
    }
    if (videoEl.currentTime >= 17) {
      data1.person = 2
    }
    if (videoEl.currentTime >= 22.4) {
      data1.person = 5
      data1.work_clothes = 3
    }
    if (videoEl.currentTime >= 25) {
      data1.person = 3
    }
    if (videoEl.currentTime >= 27) {
      data1.person = 5
    }

    if (videoEl.currentTime >= 31) {
      data1.person = 4
      data1.work_clothes = 2
    }
    if (videoEl.currentTime >= 32) {
      data1.person = 3
      data1.work_clothes = 1
    }
    if (videoEl.currentTime >= 33) {
      data1.person = 4
    }
    if (videoEl.currentTime >= 35) {
      data1.work_clothes = 2
    }
  }, 400)
}

const timer2 = ref<NodeJS.Timer>()
function handlePlayUnload(e: Event) {
  if (isWarned && timer2.value) {
    return
  } else {
    const videoEl = e.target as HTMLVideoElement
    timer2.value = setInterval(async () => {
      if (videoEl.currentTime >= 36) {
        data2.person = 3
        data2.work_clothes = 3
      } else if (videoEl.currentTime >= 35) {
        data2.fire_extinguisher35 = 2
      } else if (videoEl.currentTime >= 34) {
        data2.fire_extinguisher35 = 3
      } else if (videoEl.currentTime >= 33) {
        data2.fire_extinguisher35 = 2
      } else if (videoEl.currentTime >= 32.2) {
        data2.fire_extinguisher35 = 3
      } else if (videoEl.currentTime >= 32) {
        data2.person = 2
        data2.work_clothes = 2
      } else if (videoEl.currentTime >= 28) {
        data2.person = 3
        data2.work_clothes = 3
      } else if (videoEl.currentTime >= 14.1) {
        data2.vigilance_stand = 2
      } else if (videoEl.currentTime >= 14) {
        data2.work_clothes = 2
      } else if (videoEl.currentTime >= 9) {
        data2.person = 2
      } else if (videoEl.currentTime >= 6) {
        data2.person = 1
        data2.work_clothes = 1
      }
      if (!isWarned && videoEl.currentTime >= 15) {
        // isModalVisible.value = true
        triggerWarning('monitor')
        isWarned = true
      }
    }, 300)
  }
}
const triggerWarning = (trigger: string) => {
  let content =
    trigger === 'monitor'
      ? '检测到交通锥缺失，已一键预警！'
      : '显示存在不规范操作，已一键报警'

  Modal.warning({
    title: '报警信息',
    content,
    style: 'top: 30%',
  })
}

const videoRef = ref<HTMLElement>()
onMounted(() => {
  videoRef.value = document.querySelector('video')!
})
</script>

<style lang="less" scoped>
.video {
  min-height: 760px;
  display: flex;

  &-player {
    box-sizing: border-box;
    width: 76%;
    margin-right: 50px;
  }

  &-identify_feature {
    margin-top: 20px;
    ul {
      list-style: none;
      padding-left: 0;
      padding-top: 0.5em;
      text-indent: 1.2em;
    }
  }

  &-btn {
    font-size: 14px;
    border: 0px;
    height: 36px;
    border-radius: 4px;
    color: #fff;
  }
}
</style>
