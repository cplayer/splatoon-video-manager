<template>
  <div id="welcomeWrapper">
    <main>
      <el-container>
        <el-aside width="200px">
          <welcome-left-bar></welcome-left-bar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </main>
  </div>
</template>

<script>
import WelcomeLeftBar from './Welcome/WelcomeLeftBar'
export default {
  name: 'welcome-page',
  components: { WelcomeLeftBar }
}
</script>

<style scoped>
div {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>