<template>
    <div>
        <!--<h2>创建模态框（Modal）</h2>-->
        <!-- 按钮触发模态框 -->
        <div class="notice_nav r_right">
            <a class="btn btn-default" data-toggle="modal" data-target="#myModal">
                <span class="glyphicon glyphicon-plus">新增</span>
            </a>
            <a class="btn btn-default">
                <span class="glyphicon glyphicon-remove">删除</span>
            </a>
            <a class="btn btn-default">
                <span class="glyphicon glyphicon-pencil">修改</span>
            </a>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">新增</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="account" class="">账号：</label>
                            <input type="text" id="account" class="form-control" v-model="username" >
                        </div>
                        <div class="form-group">
                            <label for="username" class="">用户名：</label>
                            <input type="text" id="username" class="form-control" v-model="username" >
                        </div>
                        <div class="form-group">
                            <label for="password">密 码：</label>
                            <input type="text" id="password" class="form-control" v-model="age" >
                        </div>
                        <div class="form-group">
                            <label for="department" class="">归属部门：</label>
                            <!--<input type="text" id="department" class="form-control" v-model="username" >-->
                            <select class="form-control" id="department">
                                <option>人事部</option>
                                <option>生产部</option>
                                <option>研发部</option>
                                <option>支持部</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="usertype" class="">用户类型：</label>
                            <!--<input type="text" id="usertype" class="form-control" v-model="username" >-->
                            <select class="form-control" id="usertype">
                                <option>普通员工</option>
                                <option>设备管理员</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                    </div>
                </div>
            </div>
        </div>
        <!--用户信息表-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">用户信息表</caption>
                <tr class="text-danger">
                    <th class="text-center">序号</th>
                    <th class="text-center">账号</th>
                    <th class="text-center">用户名</th>
                    <th class="text-center">密码</th>
                    <th class="text-center">归属部门</th>
                    <th class="text-center">用户类型</th>
                    <th class="text-center">操作</th>
                </tr>
                <!--<tr class="text-center" v-for='(item,index) in myData'>-->
                    <!--<td>{{index}}</td>-->
                    <!--<td>{{item.account}}</td>-->
                    <!--<td>{{item.name}}</td>-->
                    <!--<td>{{item.pass}}</td>-->
                    <!--<td>{{item.depart}}</td>-->
                    <!--<td>{{item.type}}</td>-->
                    <!--<td>-->
                        <!--<button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' v-on:click="currentUser=index">删除</button>-->
                    <!--</td>-->

                <!--</tr>-->
                <!--<tr v-show="myData.length!=0">-->
                    <!--<td colspan="7" class="text-right">-->
                        <!--<button class="btn btn-danger btn-xs" v-on:click='currentUser="all"' data-toggle='modal' data-target="#layer">全部删除</button>-->
                    <!--</td>-->
                <!--</tr>-->
                <!--<tr v-show="myData.length==0">-->
                <!--<td colspan="6" class="text-center">-->
                <!--<p class="text-muted">暂无数据...</p>-->
                <!--</td>-->
                <!--</tr>-->
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "adduser"
    }
</script>

<style scoped>
    table td {vertical-align: middle !important;}
</style>