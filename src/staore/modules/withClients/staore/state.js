export default {
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
  },
  callbackShow: false,
  callbackAddShow: false,
  tableLoading: false
}
