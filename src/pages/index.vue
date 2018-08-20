<template>
     <div id="index">
        <isNavigation class="isNavigation"></isNavigation>
        <Row>
            <Col span="24">
                <router-view ></router-view>
            </Col>
        </Row>
     </div>
</template>

<script>
import isNavigation from './../components/ownComponent/index/Navigation'
// import Cookies from 'js-cookie'

export default {
  name: 'index',
  components: {
    isNavigation
  },
  mounted () {
    // function off() {
    //   Cookies.remove('rank', {
    //     domain: 'localhost'
    //   })
    // }

    // window.onunload = off()
    // window.onbeforeunload = off()
  }
}
</script>
<style lang="less" scoped>
#index {
  min-width: 660px;
  padding-top: 60px;
  .isNavigation {
    width: 100vw;
    position: fixed;
    z-index: 18;
    top: 0;
    left: 0;
  }
}
</style>
