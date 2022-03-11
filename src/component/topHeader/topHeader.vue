<template>
  <div class="app-main">
    <div class="title-bg">
    </div>
    <div class="title">
      <div ><img src="./imgge/Switch.png" alt="Switch"  @click="switchItemName"> 切换项目</div>
      <div class="title-name">{{name}}</div>
      <div >333</div>
    </div>
  </div>
</template>
<script>
import { mapState,mapActions} from 'vuex'
export default {
  name: "topHeader",
  props:{
      activeObj: {
      type: Object,
      require: true
    },
  },
  computed: mapState({
    name: function (state) {
      return state.topHeader.name
    },
  }),
  created () {
      this.getList()
  },
  methods: {
     ...mapActions('topHeader', [
      'pushName',
      'getList'
    ]),
    
  },
  
};
</script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  height: 94px;
  background:#6D8CFD;
  flex-direction: column;
  .title-bg{
    height: 44px;
  }
  .title{
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    // font-size: 12px;
  
  >div{
    width: 90px;
    font-size: 12px;
    >img{
    width: 12px;
    height: 9px;
  }
  }
  >div:last-child{
    text-align: right;
  }
  &-name{
    font-size: 16px !important;
    font-weight: bold;
    color: #fff;
    width:calc(100% - 100px) !important;
    text-align: center;
  }
  
  }
}
</style>