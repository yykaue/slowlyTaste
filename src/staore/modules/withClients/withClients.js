import {
  Message
} from 'iview'
import {
  searchClientsData,
  addClientsData,
  editClientsData,
  amendClientsData,
  removeClientsData,
  arrAddClientsData
} from './../../../api/withClients'

const withClients = {
  state: {
    clientsData: [],
    ClientsEditData: {
      new: true,
      editModal: false,
      removeModal: false,
      _id: null,
      keyValue: {
        client: {
          key: '客户&nbsp;姓名',
          value: ''
        },
        contact: {
          key: '客户&nbsp;电话',
          value: ''
        },
        businessArea: {
          key: '客户&nbsp;地区',
          value: ''
        },
        businessType: {
          key: '客户&nbsp;业务',
          value: ''
        },
        callback: {
          key: '回访&nbsp;情况',
          value: ''
        },
        result: {
          key: '是否&nbsp;成交',
          value: ''
        },
        tradingVolume: {
          key: '成交&nbsp;金额',
          value: ''
        }
      },
      filter: {
        client: '',
        creationTime: '',
        contact: '',
        businessArea: '',
        businessType: '',
        callback: [],
        result: '',
        tradingVolume: ''
      }
    },
    searchValue: {
      input: '',
      select: '',
      selectOption: {
        client: '客户姓名',
        businessArea: '客户地区',
        businessType: '客户业务',
        result: '是否成交'
      }
    },
    paging: {
      filter: {},
      pagination: 10,
      count: 1
    },
    clientsDataTotal: 0,
    callback: {
      user: '',
      content: [],
      show: false,
      text: '',
      id: 0,
      name: '',
      addShow: false
    }
  },
  mutations: {
    getWithClients (state) {
      searchClientsData({
        state: null,
        params: state.paging
      }).then(res => {
        state.clientsData = res.data.data
        state.clientsDataTotal = res.data.total
      }).catch(err => {
        console.log(err)
      })
    },
    callbackAddArr (state) {
      let data = {
        id: 0,
        superaddition: {}
      }
      data.id = state.callback.id
      data.superaddition[state.callback.name] = {
        time: new Date().getTime(),
        content: state.callback.text
      }
      arrAddClientsData(
        {
          state: null,
          params: data
        }
      ).then(() => {
        state.callback.addShow = false
        Message.success('回访添加成功')
      }).catch(err => {
        Message.error('回访添加失败' + err)
      })
    },
    editWithClients (state) {
      editClientsData({
        state: null,
        params: {
          id: state.ClientsEditData._id
        }
      }).then(res => {
        let x = res.data.data[0]
        state.ClientsEditData.keyValue.client.value = x.client
        state.ClientsEditData.keyValue.contact.value = x.contact
        state.ClientsEditData.keyValue.businessArea.value = x.businessArea
        state.ClientsEditData.keyValue.businessType.value = x.businessType
        state.ClientsEditData.keyValue.result.value = x.result
        state.ClientsEditData.keyValue.callback.value = x.callback
        state.ClientsEditData.keyValue.tradingVolume.value = x.tradingVolume
        Message.success('拉取客户信息成功')
      }).catch(err => {
        Message.error('拉取客户信息失败' + err)
      })
    },
    removeModalShow (state) {
      state.ClientsEditData.removeModal = !state.ClientsEditData.removeModal
    },
    editModalShow (state) {
      state.ClientsEditData.editModal = !state.ClientsEditData.editModal
    },
    removeKeyValue (state) {
      state.ClientsEditData.filter.client = ''
      state.ClientsEditData.filter.creationTime = ''
      state.ClientsEditData.filter.contact = ''
      state.ClientsEditData.filter.businessArea = ''
      state.ClientsEditData.filter.businessType = ''
      state.ClientsEditData.filter.callback = []
      state.ClientsEditData.filter.result = ''
      state.ClientsEditData.filter.tradingVolume = ''

      state.ClientsEditData.keyValue.client.value = ''
      state.ClientsEditData.keyValue.contact.value = ''
      state.ClientsEditData.keyValue.businessArea.value = ''
      state.ClientsEditData.keyValue.businessType.value = ''
      state.ClientsEditData.keyValue.result.value = ''
      state.ClientsEditData.keyValue.tradingVolume.value = ''
    },
    callbackShow (state) {
      state.callback.show = !state.callback.show
    },
    callbackAddShow (state) {
      state.callback.addShow = !state.callback.addShow
    }
  },
  actions: {
    getWithClients: ({
      commit
    }, page) => {
      if (page) {
        state.paging.count = page
      }
      commit('getWithClients')
    },
    callbackAddArr: ({
      commit
    }) => {
      commit('callbackAddArr')
    },
    callbackAddShow: ({
      state,
      commit
    }, params) => {
      state.callback.id = params.id
      state.callback.name = params.key
      commit('callbackAddShow')
    },
    editClients: ({
      state,
      commit
    }) => {
      state.ClientsEditData.filter.client = state.ClientsEditData.keyValue.client.value
      state.ClientsEditData.filter.creationTime = new Date().getTime()
      state.ClientsEditData.filter.contact = state.ClientsEditData.keyValue.contact.value
      state.ClientsEditData.filter.businessArea = state.ClientsEditData.keyValue.businessArea.value
      state.ClientsEditData.filter.businessType = state.ClientsEditData.keyValue.businessType.value
      state.ClientsEditData.filter.result = state.ClientsEditData.keyValue.result.value
      state.ClientsEditData.filter.tradingVolume = state.ClientsEditData.keyValue.tradingVolume.value
      if (state.ClientsEditData.new) {
        state.ClientsEditData.filter.callback = [
          {
            time: new Date().getTime(),
            details: state.ClientsEditData.keyValue.callback.value
          }
        ]
        addClientsData({
          state: null,
          params: state.ClientsEditData.filter
        }).then(res => {
          Message.success('添加成功')
          commit('getWithClients')
          commit('removeKeyValue')
        }).catch(err => {
          Message.error('添加失败' + err)
        })
      } else {
        state.ClientsEditData.filter.callback = state.ClientsEditData.keyValue.callback.value
        amendClientsData({
          state: null,
          params: {
            id: state.ClientsEditData._id,
            filter: state.ClientsEditData.filter
          }
        }).then(res => {
          Message.success('修改成功')
          commit('getWithClients')
          commit('removeKeyValue')
        }).catch(err => {
          Message.error('修改失败' + err)
        })
      }
    },
    removeWithClients: ({
      state,
      commit
    }) => {
      removeClientsData({
        state: null,
        params: {
          id: state.ClientsEditData._id
        }
      }).then(res => {
        Message.success('删除成功')
        commit('getWithClients')
        state.ClientsEditData._id = null
      }).catch(err => {
        Message.error('删除失败' + err)
      })
    },
    editClientsWindowOn: ({
      state,
      commit
    }, identify) => {
      if (identify) {
        state.ClientsEditData.new = false
        state.ClientsEditData._id = identify._id
        commit('editWithClients', identify)
      } else {
        state.ClientsEditData.new = true
      }
      commit('editModalShow')
    },
    editClientsWindowOff: ({
      state,
      commit
    }) => {
      state.ClientsEditData.new = true
      commit('removeKeyValue')
    },
    removeClientsWindowOn: ({
      state,
      commit
    }, params) => {
      state.ClientsEditData._id = params._id
      commit('removeModalShow')
    },
    removeClientsWindowOff: ({
      state
    }) => {
      state.ClientsEditData._id = null
    },
    searchClientsInformation: ({
      state,
      commit
    }) => {
      state.paging.filter = {}
      if (state.searchValue.input) {
        state.paging.filter[state.searchValue.select] = state.searchValue.input
      }
      console.log(state.paging.filter)
      commit('getWithClients')
    },
    setPagination: ({
      state
    }, pageSize) => {
      if (pageSize) {
        state.paging.pagination = parseInt(pageSize)
      }
    },
    setCallbackCancel: ({
      state,
      commit
    }, params) => {
      state.callback.user = params.client
      state.callback.content = params.callback
      commit('callbackShow')
    },
    removeCallbackCancel: ({
      state,
      commit
    }) => {
      commit('callbackShow')
      state.callback = {
        user: '',
        content: [],
        show: false
      }
    }
  },
  getters: {
    clientsData (state) {
      return state.clientsData
    },
    searchValue (state) {
      return state.searchValue
    },
    ClientsEditData (state) {
      return state.ClientsEditData
    },
    clientsDataTotal (state) {
      return state.clientsDataTotal
    },
    paging (state) {
      return state.paging
    },
    callback (state) {
      return state.callback
    }
  }
}

export default withClients
