<template>
    <div id="navigation">
      <Menu
        mode="horizontal"
        :theme="themes"
        active-name="0"
        @on-select="subject"
        class="Menu"
      >
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-list"></Icon>
            客户管理
          </template>
          <MenuGroup>
            <MenuItem
              name="1-1"
              class="MenuItemStyle"
            >
              <router-link
                to="/background/withClients"
              >意向客户</router-link>
            </MenuItem>
            <MenuItem
              name="1-2"
              class="MenuItemStyle"
            >
              <router-link
                to="/background/client"
              >客户</router-link>
            </MenuItem>
            <MenuItem
              name="1-3"
              class="MenuItemStyle"
            >
              <router-link
                to="/background/unnamed"
              >。。。。。。</router-link>
            </MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
            统计分析
          </template>
          <MenuGroup>
            <MenuItem
              name="2-1"
              class="MenuItemStyle"
            >
              <router-link
                to="/background/diagram"
              >图表展示</router-link>
            </MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-color-filter"></Icon>
            模式切换
          </template>
          <MenuGroup>
            <MenuItem
              name="light"
            >白昼</MenuItem>
            <MenuItem
              name="dark"
            >夜晚</MenuItem>
            <MenuItem
              name="primary"
            >个性</MenuItem>
          </MenuGroup>
        </Submenu>
        <Submenu
          name="9"
          class="logout"
        >
          <template slot="title">
            <Icon type="person"></Icon>
            {{userName}}
          </template>
          <MenuGroup>
            <MenuItem
              name="person-logout"
            >
              <a class="clearCookie" @click="clearCookie($router)">
                注销
              </a>
            </MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
  </div>
</template>

<style lang="less" scoped>
#navigation {
  .Menu {
    position: relative;
    &>img{
        height: 40px;
    }
  }
  .logout {
    position: absolute;
    right: 0;
  }
  .ivu-menu-item-selected {
    color: #495060;
    background-color: #ffffff;
  }
  .MenuItemStyle {
    padding: 0;
    a {
      display: block;
      padding: 7px 16px 8px;
    }
  }
  .clearCookie{
    display: block;
    width: 72px;
    height: 34px;
    line-height: 34px;
  }
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['themes', 'userName', 'imgUrl'])
  },
  methods: {
    ...mapActions(['subject', 'clearCookie', 'getUsers'])
  },
  mounted () {
    this.getUsers()
  }
}
</script>
