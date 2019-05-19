<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-05-19
*   需要维修但是没有被分配的设备的列表
------------------------------------------------->
<template>
<div>
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
                            <el-button type="primary" size="mini" @click="Repair(index)" plain>维 修
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

  export default {

    name: 'RepairList',
    components: {Page},
    data () {
      return {
        show: false,
        initValue: '正常',
        state: 1,
        query: '', //模糊查找的设备型号
        total: 0,
        size: 0,
        equips: {},
      }
    },
    created () {
      this.equipList(this.state)
    },
    methods: {
      /**
       * 获得设备列表
       */
      equipList (state, query = null,  page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'repair/all',
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
       * 选择自己能够维修的设备
       */
      Repair(index) {
        let data = {
          id: this.equips[index].id,
          userId: this.$cookies.get('userId')
        };
        this.axios({
          url: this.HOST.HOST + 'repair/chose',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          alert(res.data.message);
          this.$router.push('empty');
          this.$router.go(-1);
        })
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
