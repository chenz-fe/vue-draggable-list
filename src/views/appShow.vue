<template>
<div class="container">
      <header class="title">
      <div class="left"><el-button icon="el-icon-arrow-left" @click="goHome" type="text">返回</el-button></div>
    </header>
        <draggable
          tag="el-collapse"
          class="dragArea list-group center"
          :list="containerList"
          group="comp"
          @change="log"
          :disabled="disabled"
        >
          <div
            class="component-item"
            v-for="(element, index) in containerList"
            :key="index"
            @click="changeItem(index)"
          >
            <component :activeObj="element" :is="element.type"></component>
          </div>
        </draggable>
      </div>
</template>

<script >
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      disabled: true,
      AllPageList: [
        {
          name: "常用组件",
          id: "1",
          children: [
            { type: "topHeader", name: "公共头部", content: "sssdsd" },
            { type: "KingKongSenior", name: "金刚位", content: "sssdsd" },
            { type: "Tab", name: "标签栏", content: "sssdsd" },
          ],
        },
        {
          name: "空压相关组件",
          id: "2",
          children: [
            { type: "topHeader", name: "公共头部", content: "sssdsd" },
            { type: "KingKongSenior", name: "金刚位", content: "sssdsd" },
            { type: "KingKongSenior", name: "金刚位", content: "sssdsd" },
          ],
        },
      ],
      activeNames: ["1"],
      containerList: [],
      isSave: false,
      activeObj: null,
    };
  },
  created(){
    if(sessionStorage.getItem('containerList')){
      this.containerList = JSON.parse(sessionStorage.getItem('containerList'))
    }
  },
  methods: {
    goHome(){
      history.go(-1)
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  flex: 1;
  box-sizing: border-box;
  .title {
     position: fixed;
    display: flex;
    box-sizing: border-box;
    height: 42px;
    border-bottom: 1px solid #ccc;
    position: relative;
    // background-color: #fff;
    line-height: 42px;
    padding: 0 10px;
    justify-content: space-between;
   
  }
  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border: 0;
  }
}
</style>