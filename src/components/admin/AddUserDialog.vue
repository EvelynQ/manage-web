<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>          *
*   @version Release: v1.0                       *
*   Date: 2019-05-12                             *
------------------------------------------------->
<template>
    <div>
        <el-dialog :visible.sync="show">
            <el-row>
                <el-col>
                    <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户账号:" prop="account">
                            <el-input v-model="userInfo.account"></el-input>
                        </el-form-item>
                        <el-form-item label="用户昵称:" prop="username">
                            <el-input v-model="userInfo.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码:" prop="password">
                            <el-input type="password" v-model="userInfo.password"></el-input>
                        </el-form-item>
                        <el-form-item label="部门:" prop="depart">
                            <el-select
                                    remote
                                    :remote-method="loadData"
                                    filterable
                                    :loading="loading"
                                    v-model="userInfo.depart" placeholder="请选择用户所属部门">
                                <el-option
                                        v-for="item in departs"
                                        :label="item.depart"
                                        :key="item.id"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="身份类型:" prop="type">
                            <el-select v-model="userInfo.type" placeholder="请选择用户身份">
                                <el-option label="检修员" value="1"></el-option>
                                <el-option label="系统管理员" value="2"></el-option>
                                <el-option label="维修员" value="3"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="close" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="submit('userInfo')">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'AddUserDialog',
    data () {
      return {
        show: true,
        departs: {}, //部门列表集合
        loading: false,
        userInfo: {
          account: '',
          username: '',
          password: '',
          depart: '',
          type: '',
        },
        rules: {
          account: [
            {required: true, message: '用户账号不能为空', trigger: 'blur'},
            {min: 6, max: 11 , message: '账号长度必须在6-11之间', trigger: 'blur'},
          ],
          username: [
            {required: true, message: '用户昵称不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '用户密码不能为空', trigger: 'blur'}
          ],
          depart: [
            {required: true, message: '用户部门不能为空', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '用户身份类型不能为空', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      /**
       * 提交创建
       */
      submit (userInfo) {
        this.$refs[userInfo].validate((valid) => {
          if (valid) {
            this.addUser();
          } else {
            alert('请按照要求输入用户信息')
          }
        })
      },
      close () {
        this.$emit('show-dialog')
      },
      loadData (query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.getDeparts(query)
          }, 200)
        } else {
          this.departs = {}
        }
      },
      /**
       * 获得部门数据
       * @param query
       */
      getDeparts (query) {
        this.axios({
          url: this.HOST.HOST + 'depart/search',
          method: 'get',
          params: {userId: this.$cookies.get('userId'), query: query}
        }).then(res => {
          if (res.data.code !== 0) {
            alert(res.data.message)
          } else {
            this.departs = res.data.data
          }
        })
      },
      /**
       * 添加用户
       */
      addUser () {
        let data = this.userInfo;
        data.userId = this.$cookies.get('userId');
        this.axios({
          url: this.HOST.HOST + 'user/add',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message)
          if(res.data.code === 0) {
            this.$router.push('empty');
            this.$router.go(-1);
          }
        })
      },
    }
  }
</script>

<style scoped>
    .image {
        font-size: 10px;
        margin-top: 10px;
    }

    .formaName {
        font-size: 10px;
        text-align: left;
    }
</style>
