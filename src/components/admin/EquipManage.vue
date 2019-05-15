<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-05-14
------------------------------------------------->
<template>
    <div>
        <!--添加用户信息弹框以及显示表头部搜索-->
        <add-equip-dialog v-if="show"
                          @show-dialog="showDialog"
        ></add-equip-dialog>
        <el-row>
            <el-col :span="4">
                <el-button size="mini" type="primary" plain @click="showDialog" icon="el-icon-plus">添加</el-button>
            </el-col>
            <el-col :span="6">
                <el-select v-model="initValue"
                           @change="setState"
                           size="mini">
                    <el-option label="正常" value="0"></el-option>
                    <el-option label="异常" value="-1"></el-option>
                    <el-option label="维修" value="1"></el-option>
                    <el-option label="已报废" value="2"></el-option>
                </el-select>
            </el-col>
            <el-col :offset="4" :span="6">
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
                            <td v-if="(state !== 0) && (state !== 2) ">
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
  import AddEquipDialog from './AddEquipDialog'
  import Page from '../common/Page'
  import qs from 'qs'

  export default {

    name: 'EquipManage',
    components: {AddEquipDialog, Page},
    data () {
      return {
        show: false,
        initValue: '正常',
        state: 0,
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
      showDialog () {
        this.show = !this.show
      },

      /**
       * 设置检索的设备状态
       */
      setState (value) {
        this.equipList(value)
        this.state = value
      },
      /**
       * 根据条件查找设备
       */
      search () {
        this.equipList(this.state, this.query, )
      },

      /**
       * 获得设备列表
       */
      equipList (state, query = null,  page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'equip/list',
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
