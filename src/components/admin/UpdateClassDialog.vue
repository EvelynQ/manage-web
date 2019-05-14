<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release:
*   Date: 2019-05-14
------------------------------------------------->
<template>
    <div>
        <el-dialog
                :before-close="handleClose"
                :visible.sync="show">
            <el-row>
                <el-col>
                    <el-form :model="classInfo" :rules="rules" ref="classInfo" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="种类名称:" prop="name">
                            <el-input v-model="classInfo.name"></el-input>
                        </el-form-item>
                        <el-form-item label="种类描述:">
                            <el-input v-model="classInfo.desc"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div style="text-align: center">
                <span slot="footer" class="dialog-footer">
                <el-button @click="close" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="submit('classInfo')">修 改</el-button>
            </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'UpdateClassDialog',
    props:['id'],
    data () {
      return {
        show: true,
        cla: {}, //部门列表集合
        loading: false,
        classInfo: {name: '', desc: ''},
        rules: {
          name: [
            {required: true, message: '设备种类名称不能为空', trigger: 'blur'},
          ],
        },
      }
    },
    methods: {
      handleClose(done) {
        this.$emit('update-dialog');
        done();
      },
      /**
       * 提交创建
       */
      submit (classInfo) {
        this.$refs[classInfo].validate((valid) => {
          if (valid) {
            this.updateClass();
          } else {
            alert('请按照要求输入种类信息')
          }
        })
      },
      close () {
        this.$emit('update-dialog')
      },
      /**
       * 修改设备种类
       */
      updateClass () {
        let data = this.classInfo;
        data.userId = this.$cookies.get('userId');
        data.id = this.id;
        this.axios({
          url: this.HOST.HOST + 'class/update',
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


