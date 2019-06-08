<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release:
*   Date: 2019-05-19
------------------------------------------------->
<template>

    <el-dialog
            :before-close="handleClose"
            :visible.sync="show">
        <el-row>
            <el-col>
                <el-input placeholder="请输入原因" v-model="reason" v-if="type == 0">
                    <template slot="prepend">异常原因:</template>
                </el-input>
                <el-input placeholder="请输入内容" v-model="reason" v-if="type == 1">
                    <template slot="prepend">报废原因:</template>
                </el-input>
            </el-col>
        </el-row>
        <div style="text-align: center;margin-top: 10px">
                <span slot="footer" class="dialog-footer">
                <el-button @click="close" type="primary" plain size="mini">取 消</el-button>
                <el-button v-if="type == 0" type="success" plain size="mini" @click="submit(0)">交 付</el-button>
                <el-button v-if="type == 1" type="danger" plain size="mini" @click="submit(1)">报 废</el-button>
            </span>
        </div>
    </el-dialog>
</template>

<script>
  import qs from 'qs'

  export default {
    name: 'ReasonDialog',
    props: ['id', 'type', 'equipId'],
    data () {
      return {
        show: true,
        reason: '',
        loading: false,
      }
    },
    methods: {
      handleClose (done) {
        this.$emit('show-dialog')
        done()
      },
      /**
       * 提交创建
       */
      submit (type) {
        if (type === 0) {
          this.finish(this.id)
        } else {
          this.destroyEquip(this.equipId, this.id)
        }
      },
      /**
       * 设备维修完成
       * @param id
       */
      finish (id) {
        let data = {
          id: id,
          userId: this.$cookies.get('userId'),
          reason: this.reason
        }
        this.axios({
          url: this.HOST.HOST + 'repair/finish',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message)
          this.$router.push('empty')
          this.$router.go(-1)
        })
      },

      /**
       * 对指定的设备进行报废操作
       * @param equipId
       * @param repairId
       */
      destroyEquip (equipId, repairId) {
        let data = {
          equipId: equipId,
          repairId: repairId,
          userId: this.$cookies.get('userId'),
          reason: this.reason
        }
        this.axios({
          url: this.HOST.HOST + 'scrap/add',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message)
          this.$router.push('empty')
          this.$router.go(-1)
        })
      },
      close () {
        this.$emit('show-dialog')
      },
    }
  }
</script>

<style scoped>

</style>
