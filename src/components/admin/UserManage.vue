<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>          *
*   @version Release: v1.0                       *
*   Date: 2019-05-12                             *
------------------------------------------------->
<template>
    <div>
        <!--添加用户信息弹框以及显示表头部搜索-->
        <add-user-dialog v-if="show"
                         @show-dialog="showDialog"
        ></add-user-dialog>
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
                            <th class="text-center">账号</th>
                            <th class="text-center">用户名</th>
                            <th class="text-center">归属部门</th>
                            <th class="text-center">用户类型</th>
                            <th class="text-center">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="text-center" v-for="(user, index) in users">
                            <td>{{user.id}}</td>
                            <td>{{user.account}}</td>
                            <td>{{user.username}}</td>
                            <td>{{user.depart}}</td>
                            <td>{{user.type}}</td>
                            <td>
                                <el-button type="danger" size="mini" @click="deleteUser(index)" plain>删除
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
                  @change-page = 'changePage'
            ></Page>
        </div>
    </div>
</template>

<script>
  import AddUserDialog from './AddUserDialog';
  import Page from '../common/Page';
  import qs from 'qs';

  export default {
    name: 'adduser',
    components: {AddUserDialog,Page},
    data () {
      return {
        show: false,
        query: null, //模糊查找的用户的账号
        total: 0,
        size: 5,
        users: {},
      }
    },
    created() {
      this.userList();
    },
    methods: {
      showDialog () {
        this.show = !this.show
      },
      /**
       * 根据条件查找用户
       */
      search () {
        this.userList(0, this.query);
      },
      userList(page = 0, query = null, limit = 5) {
        let userId = this.$cookies.get('userId');
        this.axios({
          url: this.HOST.HOST + 'user/list',
          method: 'get',
          params: {
            userId: userId,
            page: page,
            query: query,
            limit: limit,
          }
        }).then(res => {
          if(res.data.code === 0) {
            let data = res.data.data;
            this.total = data.total;
            delete data['total'];
            this.users = data;
          } else {
            alert(res.data.message);
          }
        })
      },
      /**
       * 更新页数
       * @param page
       */
      changePage(page) {
        this.userList(page);
      },
      /**
       * 删除指定的用户
       * @param index
       */
      deleteUser(index) {
        let id = this.users[index].id;
        let data = {
          id: id,
          userId: this.$cookies.get('userId')
        };
        this.axios({
          url: this.HOST.HOST + 'user/delete',
          method: 'post',
          data: qs.stringify(data)
        }).then(res => {
          if(res.data.code !== 0) {
            alert(res.data.message);
          } else {
            this.$router.push('empty');
            this.$router.go(-1);
          }
        })
      },
    },
  }
</script>

<style scoped>
    table td {
        vertical-align: middle !important;
    }
</style>
