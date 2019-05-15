<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-05-15
------------------------------------------------->
<template>
    <div>
        <el-dialog
                :before-close="handleClose"
                :visible.sync="show">
            <el-row>
                <el-col>
                    <el-form :model="equipInfo" :rules="rules" ref="equipInfo" label-width="100px"
                             class="demo-ruleForm">
                        <el-form-item label="设备型号:" prop="type">
                            <el-input v-model="equipInfo.type"></el-input>
                        </el-form-item>
                        <el-form-item label="制造厂商:" prop="facture">
                            <el-input v-model="equipInfo.facture"></el-input>
                        </el-form-item>
                        <el-form-item label="生产日期"
                                      prop="proyDate">
                            <el-date-picker type="date" format="yyyy 年 MM 月 dd 日" value-format="yyyy-MM-dd" placeholder="选择生产日期" v-model="equipInfo.proyDate" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                        <el-form-item label="设备种类:" prop="classId">
                            <el-select
                                    remote
                                    :remote-method="loadData"
                                    filterable
                                    :loading="loading"
                                    v-model="equipInfo.classId" placeholder="请选择设备所属种类">
                                <el-option
                                        v-for="item in cla"
                                        :label="item.class"
                                        :key="item.id"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-form>
                </el-col>
            </el-row>
            <div style="text-align: center">
                <span slot="footer" class="dialog-footer">
                <el-button @click="close" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="submit('equipInfo')">添 加</el-button>
            </span>
            </div>
        </el-dialog>
    </div>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'AddEquipDialog',
    data () {
      return {
        show: true,
        cla: {}, //设备种类列表集合
        loading: false,
        equipInfo: {type: '', classId: '', facture: '', proyDate: ''},
        rules: {
          type: [
            {required: true, message: '设备型号名称不能为空', trigger: 'blur'},
          ],
          classId: [
            {required: true, message: '设备所属种类不能为空', trigger: 'blur'},
          ],
          facture: [
            {required: true, message: '制造商不能为空', trigger: 'blur'},
          ],
          proyDate: [
            {required: true, message: '请选择日期', trigger: 'change' }
          ],
        },
      }
    },
    methods: {
      handleClose(done) {
        this.$emit('show-dialog');
        done();
      },
      //获得种类名称
      loadData (query) {
        if (query !== '') {
          this.loading = true
          setTimeout(() => {
            this.loading = false
            this.getCla(query)
          }, 200)
        } else {
          this.cla = {}
        }
      },

      /**
       * 根据种类名称得到设备种类名称
       */
      getCla(query) {
        this.axios({
          url: this.HOST.HOST + 'class/search',
          method: 'get',
          params: {
            userId: this.$cookies.get('userId'),
            query: query,
            page: 1,
            limit: 5,
          }
        }).then(res => {
          let data = res.data.data;
          delete data['total'];
          delete data['limit'];
          this.cla = data;
        })
      },
      /**
       * 提交创建
       */
      submit (equipInfo) {
        this.$refs[equipInfo].validate((valid) => {
          if (valid) {
            this.addEquip();
          } else {
            alert('请按照要求输入种类信息')
          }
        })
      },
      close () {
        this.$emit('show-dialog')
      },
      /**
       * 添加设备种类
       */
      addEquip () {
        let data = this.equipInfo
        data.userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'equip/add',
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
