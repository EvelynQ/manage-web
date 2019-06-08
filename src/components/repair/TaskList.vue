<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-05-19
*   自己选择的维修任务
------------------------------------------------->
<template>
    <div>
        <!--添加用户信息弹框以及显示表头部搜索-->
        <reason-dialog v-if="show"
                       @show-dialog="showDialog"
                       :id="id"
                       :equipId="equipId"
                       :type="type"
        ></reason-dialog>
        <el-row>
            <el-col :span="24">
                <!--设备信息记录表-->
                <div style="padding-top: 10px;width: 670px">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="text-danger">
                            <th class="text-center">设备ID</th>
                            <th class="text-center">设备型号</th>
                            <th class="text-center">设备种类</th>
                            <th class="text-center">生产厂家</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="text-center" v-for="(equip, index) in equips">
                            <td>{{equip.equip_id}}</td>
                            <td>{{equip.equip_type}}</td>
                            <td>{{equip.equip_class}}</td>
                            <td>{{equip.equip_facture}}</td>
                            <td>
                                <el-button type="success" size="mini" @click="finish(index, 0)" plain>完 成</el-button>
                                <el-button type="danger" size="mini" @click="destroyEquip(index, 1)" plain>报 废
                                </el-button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </el-col>
        </el-row>

        <!--分页部分-->
        <div style="text-align: center">
            <Page v-bind:total='total'
                  v-bind:size='size'
                  @change-page='changePage'
            ></Page>
        </div>
    </div>
</template>

<script>
  import Page from '../common/Page'
  import qs from 'qs'
  import ReasonDialog from './ReasonDialog'

  export default {

    name: 'TaskList',
    components: {Page, ReasonDialog},
    data () {
      return {
        show: false,
        id: '',
        //0 设备交付 1 设备报废
        type: '',
        state: 1,
        total: 0,
        size: 0,
        equipId: '',
        equips: {},
      }
    },
    created () {
      this.equipList(this.state)
    },
    methods: {
      showDialog () {
        this.show = !this.show
      },
      /**
       * 获得设备列表
       */
      equipList (state, query = null, page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'repair/my',
          method: 'get',
          params: {
            userId: userId,
            page: page,
            state: state,
            query: query,
            limit: limit,
          }
        }).then(res => {
          if (res.data.code === 0) {
            let data = res.data.data
            this.total = data.total
            this.size = Number(data.limit)
            delete data['total']
            delete data['limit']
            this.equips = data
          } else {
            alert(res.data.message)
          }
        })
      },
      /**
       * 交付完成好的设备
       */
      finish (index, type) {
        this.id = this.equips[index].id
        this.type = type
        this.showDialog()
      },
      destroyEquip (index, type) {
        this.id = this.equips[index].id;
        this.equipId = this.equips[index].equip_id;
        this.type = type
        this.showDialog()
      },

      /**
       * 更新页数
       * @param page
       */
      changePage (page) {
        this.equipList(page)
      },
    },
  }
</script>

<style scoped>
    table td {
        vertical-align: middle !important;
    }
</style>

