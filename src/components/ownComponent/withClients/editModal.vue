<template>
  <div id="editModal">
    <Modal
      fullscreen
      v-model="ClientsEditData.editModal"
      @on-ok="editClients"
      @on-cancel="editClientsWindowOff"
      :title="ClientsEditData.new?'添加客户':'编辑客户'"
    >
      <div>
        <ul>
          <li
            v-for="(value, key) in ClientsEditData.keyValue"
            :key="key"
            style="margin: 9px auto;"
          >
            <Input
              :disabled="(key === 'callback' && !ClientsEditData.new ? true : false)"
              v-model="!ClientsEditData.new && key === 'callback'?'禁止编辑':value.value">
              <span
                slot="prepend"
                v-html="value.key"
              ></span>
            </Input>
          </li>
        </ul>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'editModal',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'ClientsEditData'
    ])
  },
  methods: {
    ...mapActions([
      'editClientsWindowOff',
      'editClients'
    ])
  },
  mounted () {

  }
}
</script>

<style lang="less" scoped>
#editModal {

}
</style>
