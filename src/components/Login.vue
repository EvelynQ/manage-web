<template>
    <div>
        <el-row>
            <el-col :offset="8" :span="8">
                <el-card style="width: 100%; text-align: center;margin-top: 100px">
                    <h2 class="form-signin">Please sign in</h2>
                    <form class="form-signin" role="form">
                        <div class="input-group">
                            <span class="input-group-addon">用户名：</span>
                            <input type="text" class="form-control" placeholder="username" v-model="account">
                        </div>
                        <br>
                        <div class="input-group">
                            <span class="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
                            <input type="password" class="form-control" placeholder="password" v-model="password">

                        </div>
                        <br>
                        <div style="text-align: center">
                            <el-button type="primary" size="mini" plain @click="login">登录</el-button>
                            <el-button size="mini" plain native-type="reset" type="warning">取消</el-button>
                        </div>
                    </form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'login',
    data () {
      return {
        account: null,
        password: null,
      }
    },
    methods: {
      login () {
        let data = {
          account: this.account,
          password: this.password,
        }
        this.axios({
          url: this.HOST.HOST + 'user/login',
          method: 'post',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message)
          if (res.data.code == 0) {
            let data = res.data.data;
            this.$cookies.set('userId', data.id, '1d');
            this.$cookies.set('userName', data.name, '1d');
            this.$cookies.set('userType', data.type, '1d');
            this.$router.push({path: '/'});
          }
        })
      }
    },
  }
</script>

<style scoped>
    .form-signin {
        max-width: 300px;
        padding: 15px;
        margin: 0 auto;
    }
</style>
