<template>
    <div id="landing">
        <div class="landing">
            <img :src="imgUrl + 'landingLogo.png'">
            <ul>
                <li>
                    <Input
                        type="text"
                        v-model="landing.name"
                        placeholder="用户名"
                        :maxlength="10"
                        :autofocus="true"
                        @on-blur="isName"
                        @on-change="verify"
                        @on-enter="landingVerify($router)"
                    />
                    <span
                        class="markedWords"
                        v-show="nameShow"
                        v-text="landing.name===''?'用户名不能为空':'用户名错误'"
                    ></span>
                </li>
                <li>
                    <Input
                        type="password"
                        v-model="landing.password"
                        placeholder="密码"
                        :maxlength="10"
                        @on-blur="isPassword"
                        @on-change="verify"
                        @on-enter="landingVerify($router)"
                    />
                    <span
                        class="markedWords"
                        v-show="passwordShow"
                        v-text="landing.password===''?'密码不能为空':'密码错误'"
                    ></span>
                </li>
                <li>
                    <Button
                        @click="landingVerify($router)"
                    >
                        登录
                    </Button>
                </li>
                <li v-show="false">
                    <a
                        :href="wechat.api + '?redirect=' + origin">
                        微信快速登录
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'landing',
  data () {
    return {
      origin: ''
    }
  },
  computed: {
    ...mapGetters([
      'wechat',
      'imgUrl',
      'landing',
      'marked',
      'nameShow',
      'passwordShow'
    ])
  },
  methods: {
    ...mapActions(['verify', 'isName', 'isPassword', 'landingVerify'])
  },
  mounted () {
    this.origin = location.origin
  }
}
</script>

<style lang="less" scoped>
@import "./../assets/css/style";

a {
  color: #495060;
}
a:hover {
  color: #495060;
}
.button {
  width: 320px;
  height: 50px;
  cursor: pointer;
  margin: 40px auto 0;
  font-size: 22px;
  color: #ffffff;
  border-radius: 4px;
  &:hover {
    border: 1px #ffffff solid;
  }
}
#landing {
  min-width: 960px;
  min-height: 100vh;
  background: url("@{imgUrl}login_bg.jpg") no-repeat center top;
  background-size: cover;
  background-position: center;
  position: relative;
  .landing {
    width: 460px;
    height: 460px;
    position: fixed;
    // margin-left: -230px;
    margin-top: -230px;
    right: 10%;
    top: 50%;
    border-radius: 9px;
    border: 1px solid rgba(193, 191, 189, 0.7);
    box-shadow: 0 0 20px rgba(106, 79, 48, 0.9);
    background-color: rgba(200, 200, 200, 0.8);
    img {
      width: 200px;
      margin: 20px 120px;
    }
    ul {
      border-top: 1px solid rgba(255, 255, 255, 0.9);
      li {
        position: relative;
        width: 320px;
        margin: 0 auto;
        .markedWords {
          height: 30px;
          line-height: 30px;
          font-size: 16px;
          color: #f04134;
          text-align: center;
          position: absolute;
          left: 0;
          bottom: -32px;
        }
        button {
          background-color: #108ee9;
          border: 1px #108ee9 solid;
          .button;
        }
        a {
          display: block;
          text-align: center;
          line-height: 50px;
          background-color: green;
          border: 1px green solid;
          .button;
        }
      }
    }
  }
}
</style>
