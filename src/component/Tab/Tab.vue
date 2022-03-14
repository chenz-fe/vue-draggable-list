<template>
  <div class="app-main">
    <van-tabs v-model="active">
      <van-tab v-for="(item,inde) in list"  :key="inde" :title="item.name">
        <OverviewInformation></OverviewInformation>
      </van-tab>
      
    </van-tabs>
  </div>
</template>
<script>
import OverviewInformation from './src/components/OverviewInformation.vue';
import { mapState } from "vuex";
import { Tab, Tabs } from "vant";
export default {
  name: "Tab",
  components: {
    OverviewInformation,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },

  props: {
    activeObj: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {
      // active: 1,
    };
  },

  computed: mapState({
    active:{
      get:function (state) {
      return state['Tab/store'].active;
    }
    } ,
     list: function (state) {
      return state['Tab/store'].tabList;
    },
  }),

  created() {
    // this.getList()
    console.log(Tab, "----Tab---");
  },

  methods: {
    //  ...mapActions('Tab', [
    //   'pushName',
    //   'getList'
    // ]),
  },
};
</script>

<style lang="scss" scoped>
.app-main {
  display: flex;
  flex-direction: column;
  .title-bg {
    height: 44px;
  }
  .title {
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    // font-size: 12px;

    > div {
      width: 90px;
      font-size: 12px;
      > img {
        width: 12px;
        height: 9px;
      }
    }
    > div:last-child {
      text-align: right;
    }
    &-name {
      font-size: 16px !important;
      font-weight: bold;
      color: #fff;
      width: calc(100% - 100px) !important;
      text-align: center;
    }
  }
}
</style>