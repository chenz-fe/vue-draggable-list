<template>
  <div class="KingKongSenior">
    <!-- {{studentList}} -->
    <div  class="item" v-for="(item,index) in studentList" :key="index"><img :src="item.src" :alt="item.type"><span>{{item.name}}</span></div>
  </div>
</template>
<script>
export default {
  name: "KingKongSenior",
  props: {
    activeObj: {
      type: Object,
      require: true,
    },
  },
  data(){
    return{
      studentList:[{ name: '诊断记录',src:require('./imgge/DiagnosisRecord.png'),type:'DiagnosisRecord' },{ name: '诊断工具',src:require('./imgge/diagnosis.png'),type:'diagnosis' },{ name: '预测维护',src:require('./imgge/PredictiveMaintenance.png'),type:'PredictiveMaintenance' },{ name: '预测维护',src:require('./imgge/PredictiveMaintenance.png'),type:'PredictiveMaintenance' },{ name: '预测维护',src:require('./imgge/PredictiveMaintenance.png'),type:'PredictiveMaintenance' }]
    }
    
  }
};
</script>

<style lang="scss" scoped>
.KingKongSenior {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  flex-wrap: wrap;

  .item{
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     white-space: wrap;
    width:calc(33.33%);
    border-radius: 5px;
    margin-bottom: 10px;
    >img{
      width: 56px;
      height: 56px;
      margin-bottom: 5px;
    }
    >span{
      
      color: #333;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>