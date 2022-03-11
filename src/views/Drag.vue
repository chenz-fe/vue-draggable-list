<template>
  <div class="content">
    <header class="title">qwwqw</header>
    <div class="all">
      <div class="component-list">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item
            v-for="(item, i) in AllPageList"
            :key="i"
            :title="item.name"
            :name="item.id"
          >
            <draggable
              class="dragArea list-group"
              :list="item.children"
              :group="{ name: 'comp', pull: 'clone', put: false }"
              @change="log"
              :sort="false"
            >
              <div
                :class="'list-group-item'"
                v-for="element in item.children"
                :key="element.id"
              >
                <img src="" :alt="element.name" />
                {{ element.name }}
              </div>
            </draggable>
          </el-collapse-item></el-collapse
        >
      </div>
      <div class="container">
        <draggable
          tag="el-collapse"
          class="dragArea list-group center"
          :list="containerList"
          group="comp"
          @change="log"
        >
          <div
            class="component-item"
            v-for="(element, index) in containerList"
            :key="index"
            @click="changeItem(index)"
          >
            <i class="el-icon-circle-close" @click.stop="deleteItem(index)"></i>
            <component :activeObj="element" :is="element.type"></component>
          </div>
        </draggable>
      </div>
      <div class="dataconfig">
        <template v-if="activeObj">
          <component
            :is="`${activeObj.type}Config`"
            :activeObj="activeObj"
            :isSave="isSave"
            @sendValid="sendValid"
          >
          </component>
        </template>
      </div>
    </div>
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
  methods: {
    handleChange(e) {
      this.activeNames = e;
      console.log(e);
    },
    log: function (evt) {
      console.log(evt);
      if (evt.added) {
        this.activeObj = evt.added.element;
        this.count += 1;
        const item = evt.added.element;
        const idx = this.containerList.findIndex((e) => e.id === item.id);
        let temp = JSON.parse(JSON.stringify(this.containerList));
        temp[idx].id = this.count;
        this.containerList = temp;
      } else {
        this.activeObj = null;
      }
    },
    sendValid() {},
    deleteItem(index) {
      this.containerList.splice(index, 1);
    },
    changeItem(index) {
      this.activeObj = this.containerList[index];
      console.log(index, "----index-----");
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  flex: 1;
  box-sizing: border-box;
  .title {
    display: flex;
    box-sizing: border-box;
    height: 42px;
    border-bottom: 1px solid #ccc;
    position: relative;
    background-color: #fff;
    line-height: 42px;
    padding: 0 10px;
  }
  .all {
    position: relative;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: calc(100% - 42px);
    width: 100%;
    overflow: hidden;
    .component-list {
      width: 250px;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background-color: #fff;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      border-right: 1px solid #ccc;
      /deep/ .el-collapse-item__content {
        padding-bottom: 0;
      }
    }
    .container {
      background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 0.1) 1px,
            transparent 1px
          )
          0% 0% / 10px 10px,
        linear-gradient(-90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% /
          50px 50px,
        linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 10px
          10px,
        linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px) 0% 0% / 50px
          50px;
      height: calc(100% - 24px);
      background-color: #fff;
      overflow: auto;
      margin: 0 auto;
      width: 375px;
      height: 667px;
      margin-top: 10%;
      box-sizing: border-box;
      border-radius: 12px;
      box-shadow: #ebedf0 0 4px 12px;

      .center {
        display: flex;
        flex-direction: column;
      }
      .component-item {
        width: 100%;
        position: relative;
        .el-icon-circle-close {
          position: absolute;
          top: 5px;
          right: 20px;
          height: 0;
          width: 0;
        }
        .el-icon-circle-close:hover {
          color: red;
        }
      }
    }
    .dataconfig {
      width: 250px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      background-color: #fff;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
      border-left: 1px solid #ccc;
    }
  }
  .list-group-item {
    position: relative;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-sizing: border-box;
    width: 75px;
    height: 70px;
    margin: 10px 0 5px 5px;
    border: 1px solid #fff;
    border-radius: 4px;
    text-align: center;
    color: #666;
    text-align: center;
    cursor: move;
    display: flex;
    flex-direction: column;
  }
  .tabBar {
    position: fixed;
  }
  .list-group {
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
    border: 0;
  }
}
</style>