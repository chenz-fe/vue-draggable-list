const state = {
  RFIDNUM: '',
  active:'0',
  name:'1111',
  tabList:[
    {name:'信息总览',type:''},
    {name:'远程诊断',type:''},
    {name:'设备保养',type:''},
    {name:'指标统计',type:''}

  ],
  recordNum: {
    deviceName: '',
    checkPosition: '',
    deviceCode: '',
    id:''
  },
  instrumentName:'',
  isLoading: '0',
  distinctionArr:['1','2','3','4','5']
  // isUpdate:'0'
}
const actions = {
  getList({ commit }, componentData) {
    console.log(componentData, '-----componentData------')
    commit('GET_LIST', { data: null, archivesMode: componentData.archivesMode });
  },
}
const mutations = {
  changeRFID(state, num) {
    console.log(num, '存入vux的RFID编码')
    state.RFIDNUM = num
  },
  recordRFID(state, numObj) {
    console.log(numObj, '记录vux的RFID编码')
    state.recordNum = numObj
  },
  changeName(state,val){
    state.instrumentName = val
  },
  isLoading(state,val){
    state.isLoading = val
  },
  distinctionArr(state,val){
    state.distinctionArr = val
  }
  // isUpdate(state,val){
  //   state.isUpdate = val
  // }
}
const getters = {}
export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true //多加了namespaced為true
}
