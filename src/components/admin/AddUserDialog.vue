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
                            <el-input v-model="userInfo.password"></el-input>
                        </el-form-item>
                        <el-form-item label="部门:" prop="depart">
                            <el-select v-model="userInfo.depart" placeholder="请选择用户所属部门">
                                <el-option
                                        v-for="item in departs"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
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
  export default {
    name: 'AddUserDialog',
    data () {
      return {
        show: true,
        departs: {}, //部门列表集合
        userInfo: {
          account: '',
          username: '',
          password: '',
          depart: 1,
          type: '',
        },
        rules: {
          account: [
            {required: true, message: '用户账号不能为空', trigger: 'blur'}
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
      submit (userInfo) {
        this.$refs[userInfo].validate((valid) => {
          if(valid) {
            console.log(this.userInfo)
            this.$emit('show-dialog')
          }
        })
      },
      close () {
        this.$emit('show-dialog')
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
