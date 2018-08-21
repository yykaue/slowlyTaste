import {
  Message
} from 'iview'
import {
  addClientsData,
  amendClientsData,
  removeClientsData,
  arrAddClientsData
} from './../../../../api/withClients'

export default {
  getWithClients: ({
    state,
    commit
  }, page) => {
    if (page) {
      state.paging.count = page
    }
    commit('getWithClients')
  },
  callbackAddArr: ({
    state,
    commit
  }) => {
    let data = {
      id: 0,
      superaddition: {}
    }
    data.id = state.callback.id
    data.superaddition[state.callback.name] = {
      time: new Date().getTime(),
      details: state.callback.text
    }
    arrAddClientsData(
      {
        state: null,
        params: data
      }
    ).then(() => {
      state.callback.addShow = false
      commit('getWithClients')
      Message.success('回访添加成功')
    }).catch(err => {
      Message.error('回访添加失败' + err)
    })
  },
  setCallbackAddShow: ({
    commit
  }) => {
    commit('setCallbackAddShow')
  },
  openCallbackAddShow: ({
    state,
    commit
  }, params) => {
    state.callback.id = params.id
    state.callback.name = params.key
    commit('setCallbackAddShow')
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
    commit('getWithClients')
  },
  setPagination: ({
    state,
    commit
  }, pageSize) => {
    if (pageSize) {
      state.paging.pagination = parseInt(pageSize)
    }
    commit('getWithClients')
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
}
