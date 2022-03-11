<template>
  <div class="config" style="height: 100%">
    <CommonConfig
      :activeObj="activeObj"
      :moduleName="activeObj.label"
      @changeType="changeType"
    >
      <template v-slot:attribute>{{activeObj}} </template>
      <template v-slot:dataSource>222</template>
      <template v-slot:interactive>333</template>
    </CommonConfig>
  </div>
</template>
<script>
export default {
  name: "topHeaderConfig",
  data() {
    return {
      list: [],
    };
  },
  props: {
    activeObj: {
      type: Object,
      require: true,
    },
    pageConfig: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
  },
  watch: {},
  methods: {
    changeType(val) {
      console.log(val);
      // this.activeObj.option.data.dataType = val;
    },
  },
};
</script>
<style lang="less" type="text/less" scoped>
.config {
  .attr-title {
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    margin: 0 20px 0 0px;
  }
  .config-button {
    width: 85px;
    height: 27px;
    padding: 0;
    border-radius: 2px;
  }
  .config-button.is-plain:focus,
  .config-button.is-plain:hover {
    color: #333333;
  }
  .attr-title {
    color: #333333;
    font-size: 14px;
    font-weight: 400;
    margin: 0 20px 0 0px;
  }
  .check-icon {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .All {
    display: flex;
    // flex-direction: column;
    flex-wrap: wrap;
    &-config {
      margin: 10px;
    }
  }

  .config-button {
    width: 85px;
    height: 27px;
    padding: 0;
    position: relative;
    border-radius: 2px;
    // margin: 10px;
  }
  .config-button.is-plain:focus,
  .config-button.is-plain:hover {
    color: #333333;
  }
  .el-button + .el-button {
    margin: 0;
  }
  .old-station-data-config {
    /deep/ .el-submenu__title {
      height: 34px;
      line-height: 34px;
      padding-left: 0px !important;
      background: #f6fafc;
      border-bottom: 1px solid #eeeeee;
      span {
        font-weight: bold;
      }
    }
    /deep/ .el-submenu__title:hover {
      background: #f6fafc;
    }
    /*菜单关闭*/
    /*/deep/ .el-submenu>.el-submenu__title .el-submenu__icon-arrow{*/
    /*  -webkit-transform: rotateZ(-90deg);*/
    /*  -ms-transform: rotate(-90deg);*/
    /*  transform: rotateZ(-90deg);*/
    /*  right: 10px;*/
    /*}*/
    /*!*菜单展开*!*/
    /*/deep/ .el-submenu.is-opened>.el-submenu__title .el-submenu__icon-arrow{*/
    /*  -webkit-transform: rotateZ(0deg);*/
    /*  -ms-transform: rotate(0deg);*/
    /*  transform: rotateZ(0deg);*/
    /*  right: 10px;*/
    /*}*/
    // /deep/ .el-menu {
    //   padding: 0 5px 0 15px;
    // }
    .device-data {
      padding-bottom: 20px;
      border-bottom: 1px solid #eeeeee;
      margin-left: 24px;
      margin-right: 10px;
    }
    .device-param {
      color: #666666;
      font-size: 14px;
      margin-top: 20px;
    }
    .device-radio {
      margin-top: 15px;
    }
    .device-value {
      margin-top: 12px;
      // /deep/ .el-col {
      //   padding: 0 !important;
      // }
    }
    .device-select {
      /deep/ .el-input__inner {
        // width: 160px;
        height: 32px;
        line-height: 32px;
      }
      /deep/ .el-input__icon {
        line-height: 32px;
      }
    }
    .device-input /deep/ .el-input__inner {
      width: 90px;
      height: 32px;
      // margin-left: 10px;
    }
    .img-icon {
      margin-left: 5px;
    }
    .device-param-rename {
      width: auto !important;
      display: inline-block;
      /deep/ .el-input__inner {
        width: 90px;
        height: 32px;
      }
    }
  }
}
</style>
