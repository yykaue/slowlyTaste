<template>
  <div id="withClients">
    <!-- 信息检索 -->
    <ClientsSearch/>

    <!-- 信息列表 -->
    <div class="tableBox">
      <Table
        border
        class="table"
        :columns="columns"
        :data="clientsData"
        :loading="tableLoading"
      ></Table>
    </div>

    <!-- 分页 -->
    <div class="PageBox">
      <Page
        :total="clientsDataTotal"
        :page-size="paging.pagination"
        @on-page-size-change="setPagination"
        @on-change="getWithClients"
        show-sizer
        show-total
      ></Page>
    </div>

    <!-- 添加/编辑客户信息 -->
    <EditModal v-show="ClientsEditData.editModal"/>

    <!-- 查看所有回访 -->
    <Modal
        v-model="callbackShow"
        :title="callback.user + ' 的回访记录'"
        @on-cancel="removeCallbackCancel">
        <p
          style="padding: 6px 18px;"
          v-for="value in callback.content"
          :key="value.time"
          v-text="value.details"
        ></p>
    </Modal>

    <!-- 添加回访信息 -->
    <Modal
        v-model="callbackAddShow"
        title="添加回访信息"
        @on-ok="callbackAddArr"
        @on-cancel="setCallbackAddShow">
        <Input
          v-model="callback.text"
          placeholder="请输入回访信息"
          style="width: 96%"
        />
    </Modal>

    <!-- 删除信息对话框 -->
    <Modal
        v-model="ClientsEditData.removeModal"
        title="确认窗"
        @on-ok="removeWithClients"
        @on-cancel="removeClientsWindowOff">
        <p style="color: red;text-align: center;font-size: 30px;">
          确定要删除这条信息吗！
        </p>
    </Modal>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters, mapActions } from 'vuex'
import EditModal from './../components/ownComponent/withClients/editModal'
import ClientsSearch from './../components/ownComponent/withClients/ClientsSearch'

export default {
  name: 'withClients',
  components: {
    EditModal,
    ClientsSearch
  },
  computed: {
    ...mapGetters([
      'clientsData',
      'ClientsEditData',
      'clientsDataTotal',
      'paging',
      'callback',
      'tableLoading',
      'callbackShow',
      'callbackAddShow'
    ])
  },
  methods: {
    ...mapActions([
      'getWithClients',
      'addWithClients',
      'editWithClients',
      'amendWithClients',
      'removeWithClients',
      'removeClientsWindowOn',
      'editClientsWindowOn',
      'removeClientsWindowOff',
      'setPagination',
      'callbackCancel',
      'setCallbackCancel',
      'removeCallbackCancel',
      'callbackAddArr',
      'setCallbackAddShow',
      'openCallbackAddShow'
    ])
  },
  mounted () {
    this.getWithClients()
  },
  data () {
    return {
      columns: [
        {
          title: '客户姓名',
          key: 'client',
          align: 'center',
          width: 81,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.client
            )
          }
        },
        {
          title: '创建日期',
          key: 'creationTime',
          align: 'center',
          width: 108,
          render: (h, params) => {
            return h(
              'div',
              {},
              [
                h(
                  'p',
                  {},
                  moment(params.row.creationTime).format('YYYY-MM-DD')
                ),
                h(
                  'p',
                  {},
                  moment(params.row.creationTime).format('HH:mm:ss')
                )
              ]
            )
          }
        },
        {
          title: '客户电话',
          key: 'contact',
          align: 'center',
          width: 108,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.contact
            )
          }
        },
        {
          title: '客户地区',
          key: 'businessArea',
          align: 'center',
          width: 220,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.businessArea
            )
          }
        },
        {
          title: '客户业务',
          key: 'businessType',
          align: 'center',
          width: 108,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.businessType
            )
          }
        },
        {
          title: '回访情况',
          key: 'callback',
          align: 'center',
          minWidth: 220,
          render: (h, params) => {
            let callback = params.row.callback
            return h(
              'div',
              {
                style: {
                  overflow: 'hidden',
                  minWidth: '200px'
                }
              },
              [
                h(
                  'div',
                  {
                    style: {
                      float: 'left'
                    }
                  },
                  [
                    h(
                      'p',
                      {},
                      moment(callback[callback.length - 1].time).format('YYYY-MM-DD')
                    ),
                    h(
                      'p',
                      {},
                      moment(callback[callback.length - 1].time).format('HH:mm:ss')
                    )
                  ]
                ),
                h(
                  'div',
                  {
                    style: {
                      float: 'left',
                      marginLeft: '18px',
                      minHeight: '36px',
                      lineHeight: '36px'
                    }
                  },
                  callback[callback.length - 1].details
                ),
                h(
                  'div',
                  {
                    style: {
                      float: 'right'
                    }
                  },
                  [
                    h('Button', {
                      props: {
                        type: 'success',
                        size: 'small'
                      },
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                        click: () => {
                          this.setCallbackCancel(params.row)
                        }
                      }
                    }, '查看全部'),
                    h('Button', {
                      props: {
                        type: 'primary',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          let data = {
                            id: params.row._id,
                            key: 'callback'
                          }
                          this.openCallbackAddShow(data)
                        }
                      }
                    }, '追加回访')
                  ]
                )
              ]
            )
          }
        },
        {
          title: '是否成交',
          key: 'result',
          align: 'center',
          width: 81,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.result
            )
          }
        },
        {
          title: '成交金额',
          key: 'tradingVolume',
          align: 'center',
          width: 81,
          render: (h, params) => {
            return h(
              'div',
              {},
              params.row.tradingVolume
            )
          }
        },
        {
          title: '操作',
          key: '_id',
          align: 'center',
          width: 120,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.editClientsWindowOn(params.row)
                  }
                }
              }, '编辑'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.removeClientsWindowOn(params.row)
                  }
                }
              }, '删除')
            ])
          }
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
#withClients {
  padding-bottom: 60px;
  .tableBox {
    width: 98%;
    margin: 0 auto;
    min-width: 1200px;
    .table{
      min-height: 520px;
    }
  }
  .PageBox {
    padding: 20px;
    text-align: center;
  }
}
</style>
