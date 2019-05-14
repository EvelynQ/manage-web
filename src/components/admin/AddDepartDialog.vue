<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-05-14
*   添加部门的弹框
------------------------------------------------->
<template>
    <div>
        <el-dialog
                :before-close="handleClose"
                :visible.sync="show">
            <el-row>
                <el-col>
                    <el-form :model="departInfo" :rules="rules" ref="departInfo" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="部门名称:" prop="depart">
                            <el-input v-model="departInfo.depart"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div style="text-align: center">
                <span slot="footer" class="dialog-footer">
                <el-button @click="close" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="submit('departInfo')">添 加</el-button>
            </span>
            </div>
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
        departInfo: {depart: ''},
        rules: {
          depart: [
            {required: true, message: '部门名称不能为空', trigger: 'blur'},
          ],
        },
      }
    },
    methods: {
      handleClose(done) {
        this.$emit('show-dialog');
        done();
      },
      /**
       * 提交创建
       */
      submit (userInfo) {
        this.$refs[userInfo].validate((valid) => {
          if (valid) {
            this.addDepart()
          } else {
            alert('请按照要求输入部门信息')
          }
        })
      },
      close () {
        this.$emit('show-dialog')
      },
      /**
       * 添加用户
       */
      addDepart () {
        let data = this.departInfo
        data.userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'depart/add',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message)
          if (res.data.code === 0) {
            this.$router.push('empty')
            this.$router.go(-1)
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
