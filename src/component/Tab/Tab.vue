<template>
  <van-tabs v-model="active">
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>
</template>
<script>
import { mapState} from 'vuex'
import { Tab, Tabs } from 'vant';
export default {
  name: "Tab",

  components: {
       [Tab.name]: Tab,
       [Tabs.name]: Tabs,
   },

  props:{
      activeObj: {
      type: Object,
      require: true
    },
  },

  data() {
    return {
      active: 1
    }
  },

  computed: mapState({
    name: function (state) {
      return state.Tab.name
    },
  }),

  created () {
      // this.getList()
      console.log(Tab,'----Tab---');
  },

  methods: {
    //  ...mapActions('Tab', [
    //   'pushName',
    //   'getList'
    // ]),
    
  }
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