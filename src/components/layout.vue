<template>
  <div class="app-main">
    <header class="app-header">移动端自定义布局开发</header>
    <div class="app-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout"
};
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  .app-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: #999;
    background: #333;
    // background: linear-gradient(
    //   to right,
    //   #9d4a71,
    //   #ddb7b7
    // ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .app-container {
    flex: 1;
    display: flex;
    // margin: 20px 50px 0;
  }
}
</style>