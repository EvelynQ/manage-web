<template>
    <div>
        <nav class="navbar" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">设备信息管理系统</a>
                </div>
                <ul class="nav navbar-nav navbar-right">
                    <div>
                        <li><span style="font-size: 5px">欢迎您,{{username}} </span>
                            <el-link @click="loginOut" style="font-size: 5px;margin-left: 5px" type="primary"><i class="el-icon-switch-button"><span> 退出</span></i></el-link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        username: null,
      }
    },
    created() {
      this.username = this.$cookies.get('userName')
    },
    methods: {
      loginOut() {
        this.$cookies.remove('userId');
        this.$cookies.remove('userName');
        this.$cookies.remove('userType');
        this.$router.push({path: '/login'});
      },
    },
  }
</script>

<style scoped>

</style>
