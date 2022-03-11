const state = {
  RFIDNUM: '',
  topHeader:'topHeader',
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
  getters
}
