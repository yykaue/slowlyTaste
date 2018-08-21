import {
  Message
} from 'iview'
import {
  searchClientsData,
  editClientsData
} from './../../../../api/withClients'

export default {
  getWithClients (state) {
    state.tableLoading = true
    searchClientsData({
      state: null,
      params: state.paging
    }).then(res => {
      state.clientsData = res.data.data
      state.clientsDataTotal = res.data.total
      state.tableLoading = false
    }).catch(err => {
      console.log(err)
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
    state.ClientsEditData.keyValue.callback.value = ''
    state.ClientsEditData.keyValue.tradingVolume.value = ''
  },
  callbackShow (state) {
    state.callbackShow = !state.callbackShow
  },
  setCallbackAddShow (state) {
    state.callbackAddShow = !state.callbackAddShow
  }
}
