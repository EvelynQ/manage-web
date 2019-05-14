<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release:
*   Date: 2019-05-14
------------------------------------------------->
<template>
    <div>
        <!--添加用户信息弹框以及显示表头部搜索-->
        <add-depart-dialog v-if="show"
                           @show-dialog="showDialog"
        ></add-depart-dialog>
        <el-row>
            <el-col :span="4">
                <el-button size="mini" type="primary" plain @click="showDialog" icon="el-icon-plus">添加</el-button>
            </el-col>
            <el-col :offset="10" :span="6">
                <el-input type="text" placeholder="查询条件"
                          v-model="query"
                          style="width: 100%" size="mini"></el-input>
            </el-col>
            <el-col :span="4">
                <el-button size="mini" type="success" plain @click="search"
                           icon="el-icon-search">查找
                </el-button>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
                <!--设备信息记录表-->
                <div style="padding-top: 10px;width: 670px">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="text-danger">
                            <th class="text-center">设备ID</th>
                            <th class="text-center">设备种类</th>
                            <th class="text-center">设备型号</th>
                            <th class="text-center">制造厂商</th>
                            <th class="text-center">生产日期</th>
                            <th class="text-center">设备状态</th>
                            <th v-if="(state !== 0) && (state !== 2) " class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="text-center" v-for="(equip, index) in equips">
                            <td>{{equip.id}}</td>
                            <td>{{equip.className}}</td>
                            <td>{{equip.type}}</td>
                            <td>{{equip.facture}}</td>
                            <td>{{equip.proyDate}}</td>
                            <td>{{equip.state}}</td>
                            <td v-if="(state !== 0) && (state !== 2) " >
                                <el-button type="warning" size="mini" @click="updateDepart(index)" plain>修 改
                                </el-button>
                                <el-button type="danger" size="mini" @click="deleteDepart(index)" plain>删 除
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
  import AddDepartDialog from './AddDepartDialog'
  import UpdateDepartDialog from './UpdateDepartDialog'
  import Page from '../common/Page'
  import qs from 'qs'

  export default {
    name: 'EquipManage',
    components: {AddDepartDialog, Page},
    data () {
      return {
        show: false,
        state: 0,
        query: '', //模糊查找的设备型号
        total: 0,
        size: 0,
        equips: {},
      }
    },
    created () {
      this.equipList()
    },
    methods: {
      showDialog () {
        this.show = !this.show
      },
      showUpdate () {
        this.update = !this.update
      },
      /**
       * 根据条件查找部门
       */
      search () {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'depart/search',
          method: 'get',
          params: {
            userId: userId,
            query: this.query
          }
        }).then(res => {
          if (res.data.code === 0) {
            this.equips = res.data.data
          } else {
            alert(res.data.message)
          }
        })
      },

      /**
       * 获得设备列表
       */
      equipList (page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'equip/list',
          method: 'get',
          params: {
            userId: userId,
            page: page,
            limit: limit,
          }
        }).then(res => {
          if (res.data.code === 0) {
            let data = res.data.data
            this.total = data.total
            this.size = Number(data.limit)
            delete data['total']
            delete data['limit']
            this.departs = data
          } else {
            alert(res.data.message)
          }
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
