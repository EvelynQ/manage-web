<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>          *
*   @version Release: v1.0                       *
*   Date: 2019-05-12                             *
------------------------------------------------->
<template>
    <div>
        <el-container>
            <el-header>
                <el-row>
                    <el-col :span="18" :offset="3">
                        <Head></Head>
                    </el-col>
                </el-row>
            </el-header>
            <el-row>
                <el-container>
                    <el-col :offset="3" :span="6">
                        <el-aside>
                            <Sider></Sider>
                        </el-aside>
                    </el-col>
                    <el-col :span="12">
                        <el-main>
                            <router-view/>
                        </el-main>
                    </el-col>
                </el-container>
            </el-row>

        </el-container>
    </div>
</template>

<script>
  import Head from './Head'
  import Sider from './Sider'

  export default {
    name: 'Main',
    data () {
      return {
      }
    },
    components: {Head, Sider},
    created () {
      this.checkLogin()
    },
    methods: {
      checkLogin () {
        if (this.$cookies.get('userId') === null) {
          this.$router.push({path: '/login'})
        }
      }
    },
  }
</script>

<style scoped>
    .el-header, .el-footer {
        color: #333;
        text-align: center;
        #line-height: 60px;
    }

    .el-aside {
        text-align: center;
        #line-height: 200px;
    }

    .el-main {
        #line-height: 160px;
        padding: 0 0 0 0;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        #line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        $line-height: 320px;
    }
</style>
