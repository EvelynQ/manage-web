<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release:
*   Date: 2019-05-14
------------------------------------------------->
<template>
    <div>
        <!--添加用户信息弹框以及显示表头部搜索-->
        <add-class-dialog v-if="show"
                          @show-dialog="showDialog"
        ></add-class-dialog>
        <update-class-dialog v-if="update"
                             @update-dialog="showUpdate"
                             :id="id"
        >
        </update-class-dialog>
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
                <!--用户信息记录表-->
                <div style="padding-top: 10px;width: 670px">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="text-danger">
                            <th class="text-center">序号</th>
                            <th class="text-center">种类名称</th>
                            <th class="text-center">种类描述</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="text-center" v-for="(c, index) in cla">
                            <td>{{c.id}}</td>
                            <td>{{c.class}}</td>
                            <td>{{c.desc}}</td>
                            <td>
                                <el-button type="warning" size="mini" @click="updateClass(index)" plain>修 改
                                </el-button>
                                <el-button type="danger" size="mini" @click="deleteClass(index)" plain>删 除
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
  import AddClassDialog from './AddClassDialog'
  import UpdateClassDialog from './UpdateClassDialog'
  import Page from '../common/Page'
  import qs from 'qs'

  export default {
    name: 'classManage',
    components: {AddClassDialog, Page, UpdateClassDialog},
    data () {
      return {
        show: false,
        query: '', //模糊查找的设备种类的名称
        total: 0,
        size: 0,
        cla: {},
        /**
         * 用于设备种类修改的更新绑定数据
         */
        update: false,
        id: '',
      }
    },
    created () {
      this.classList()
    },
    methods: {
      showDialog () {
        this.show = !this.show
      },
      showUpdate () {
        this.update = !this.update
      },
      /**
       * 根据条件查找设备种类列表
       */
      search (page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'class/search',
          method: 'get',
          params: {
            userId: userId,
            query: this.query,
            page: 1,
            limit: limit
          }
        }).then(res => {
          if (res.data.code === 0) {
            let data = res.data.data
            this.total = data.total
            this.size = Number(data.limit)
            delete data['total']
            delete data['limit']
            this.cla = data
          } else {
            alert(res.data.message)
          }
        })
      },

      /**
       * 获得部门列表
       */
      classList (page = 1, limit = 5) {
        let userId = this.$cookies.get('userId')
        this.axios({
          url: this.HOST.HOST + 'class/list',
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
            this.cla = data
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
        if (this.query === '') {
          this.classList(page)
        } else {
          this.search(page)
        }
      },
      /**
       * 删除指定的部门
       * @param index
       */
      deleteClass (index) {
        let id = this.cla[index].id
        let data = {
          id: id,
          userId: this.$cookies.get('userId')
        }
        this.axios({
          url: this.HOST.HOST + 'depart/delete',
          method: 'post',
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: qs.stringify(data)
        }).then(res => {
          if (res.data.code !== 0) {
            alert(res.data.message)
          } else {
            this.$router.push('empty')
            this.$router.go(-1)
          }
        })
      },
      /**
       * 更新部门信息
       * @param index
       */
      updateClass (index) {
        this.id = this.cla[index].id
        this.showUpdate()
      }
    },
  }
</script>

<style scoped>
    table td {
        vertical-align: middle !important;
    }
</style>

