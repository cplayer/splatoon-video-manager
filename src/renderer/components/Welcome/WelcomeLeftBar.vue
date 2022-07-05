<template>
  <!--侧边栏-->
  <div id="WelcomeLeftBar">
    <el-menu
        :default-active="this.$router.path"
        router
        class="left-nav-welcome">
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
        <i :class="item.icon"></i>
        <span slot="title">{{ item.item }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'welcome-left-bar',
  data () {
    return {
      navList: [
        {name: '/videoDownloader', item: '视频下载', icon: 'el-icon-download'},
        {name: '/videoManager', item: '视频管理', icon: 'el-icon-menu'}
      ]
    }
  }
}
</script>

<style scoped>

</style>