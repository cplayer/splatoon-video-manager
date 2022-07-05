<template>
  <div>
    <el-row>
      <el-col :span="24">
        视频链接地址：
        <el-input placeholder="请输入视频地址" v-model="videoAddr">
          <el-select v-model="videoSelect" slot="prepend" placeholder="请选择">
            <el-option v-for="(item, i) in websiteList" :label="item.name" :value="item.value" :key="i"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-download" @click="handleDownload()"></el-button>
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {ipcRenderer} from 'electron'

export default {
  name: 'video-downloader',
  data () {
    return {
      videoAddr: '',
      videoSelect: '',
      websiteList: [
        {
          'name': 'Youtube',
          'value': '1'
        },
        {
          'name': 'OpenRec',
          'value': '2'
        },
        {
          'name': 'Twitch',
          'value': '3'
        }
      ]
    }
  },
  methods: {
    handleDownload () {
      if (this.videoSelect === '1') {
        ipcRenderer.send('download-youtube', this.videoAddr)
      } else if (this.videoSelect === '2') {
        ipcRenderer.send('download-openrec', this.videoAddr)
      } else if (this.videoSelect === '3') {
        ipcRenderer.send('download-twitch', this.videoAddr)
      }
    }
  }
}
</script>

<style scoped>
.el-select {
  width: 130px;
}
</style>