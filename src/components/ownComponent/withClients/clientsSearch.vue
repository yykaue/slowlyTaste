<template>
  <div id="ClientsSearch">
    <Input
      search
      size="large"
      class="search"
      v-model="searchValue.input"
      @on-enter="searchClientsInformation"
    >
      <Select
        v-model="searchValue.select"
        slot="prepend"
        style="width: 80px"
      >
        <Option
          v-for="(value, key) in searchValue.selectOption"
          :key="key"
          :value="key"
        >{{value}}</Option>
      </Select>
      <Button
        slot="append"
        icon="ios-search"
        type="primary"
        @click="searchClientsInformation()"
      >搜索</Button>
    </Input>
    <Button
      size="large"
      class="button"
      type="success"
      @click="editClientsWindowOn()"
    >添加客户</Button>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ClientsSearch',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'searchValue'
    ])
  },
  methods: {
    ...mapActions([
      'editClientsWindowOn',
      'searchClientsInformation'
    ])
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
#ClientsSearch {
  position: relative;
  z-index: 9;
  padding: 30px 40px 20px;
  .search {
    float: left;
    width: 50%;
  }
  .button {
    float: right;
    margin-left: 49px;
  }
}
</style>
