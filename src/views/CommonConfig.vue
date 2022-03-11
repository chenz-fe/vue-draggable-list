<!-- 模块组件通用配置文件 -->
<template>
    <div class="common-config">
      <el-tabs :stretch="true">
        <el-tab-pane label="样式配置">
          <slot name="attribute"></slot>
        </el-tab-pane>
        <el-tab-pane label="数据配置" ref="dataSource">
          <slot name="dataSource"></slot>
        </el-tab-pane>
        <el-tab-pane label="交互配置" ref="interactive">
          <slot name="interactive"></slot>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
export default {
  name: 'CommonConfig',
  components: {},
  data () {
    return {
      config: {
        component: {}
      },
      isHasdataSource: true,
      isHasInteractive: true,
      dataType: 0
    }
  },
  props: {
    activeObj: {
      type: Object,
      default: () => {
        return {}
      }
    },
    moduleName: {
      type: String,
      require: true
    },
    isHasDataType: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    config: {
      deep: true,
      handler (val) {
        this.$emit('changeConfig', val)
      }
    },
    activeObj: {
      deep: true,
      handler (val) {
        console.log(val);
        // this.dataType = val.option.data.dataType
      }
    }
  },
  methods: {
    changeType (val) {
      this.$emit('changeType', val)
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.config = this.activeObj
      if (this.$refs.dataSource.$el.innerHTML === '') {
        this.isHasdataSource = false
      } else {
        this.isHasdataSource = true
      }
      if (this.$refs.interactive.$el.innerHTML === '') {
        this.isHasInteractive = false
      } else {
        this.isHasInteractive = true
      }
    })
    if (this.activeObj.option) {
      this.dataType = this.activeObj.option.data.dataType
    }
  }
}
</script>

<style lang="less" type="text/less" scoped>
  .common-config{
    height: 100%;
    overflow: hidden;
    .data-container{
      width: 100%;
      margin-top: 20px;
    }
    .data-text{
      font-size: 14px;
      color: #333333;
    }
    .datatype-contain{
      width: 260px;
      font-size: 14px;
      color: #333333;
      margin-top: 16px;
    }
    .form{
      overflow: hidden;
      height: 107px;
    }
    /deep/ .el-tabs{
      height: 100%;
    }
    /deep/ .el-tabs__item{
      font-weight: normal;
      color: #333333;
      &.is-active{
        font-weight: 500;
        color: #333333;
      }
    }
    /deep/ .el-tabs__content{
      height: 100%;
      overflow: auto;
    }
    /deep/ .el-tab-pane{
      position: relative;
      padding: 0 0 0 20px;
    }

    /deep/ .el-form-item{
      float: left;
      margin: 20px 0 0 0;
      &:nth-child(odd){
        margin-right: 20px;
      }
    }
    /deep/ .el-form-item__content{
      position: relative;
      line-height: 30px;
      height: 30px;
      span{
        &.label{
          position: absolute;
          left: 10px;
          top: 2px;
          z-index: 999;
        }
      }
      .el-input-number.is-controls-right{
        .el-input__inner{
          padding-left: 0px;
          padding-right: 0;
        }
      }
      .el-input-number--small{
        width: 118px;
      }
      .el-form-item--mini.el-form-item,.el-form-item--small.el-form-item{
        margin-bottom: 10px;
      }
    }
  }
</style>
