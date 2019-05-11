<template>
    <div>
        <div class="container">
            <div class="notice_nav r_right">
                <a class="btn btn-default" data-toggle="modal" data-target="#myModal">
                    <span class="glyphicon glyphicon-plus">添加</span>
                </a>
            </div>
        </div>
        <!--模态框开始-->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <!--模态框头部-->
                    <div class="modal-header">
                        <h4 class="modal-title">添加用户</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="account" class="">账号*：</label>
                            <input type="text" id="account" class="form-control" v-model="username" >
                        </div>
                        <div class="form-group">
                            <label for="username" class="">用户名*：</label>
                            <input type="text" id="username" class="form-control" v-model="username" >
                        </div>
                        <div class="form-group">
                            <label for="password">密 码*：</label>
                            <input type="text" id="password" class="form-control" v-model="age" >
                        </div>
                        <div class="form-group">
                            <label for="department" class="">归属部门*：</label>
                            <!--<input type="text" id="department" class="form-control" v-model="username" >-->
                            <select class="form-control" id="department">
                                <option>人事部</option>
                                <option>生产部</option>
                                <option>研发部</option>
                                <option>支持部</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="usertype" class="">用户类型*：</label>
                            <!--<input type="text" id="usertype" class="form-control" v-model="username" >-->
                            <select class="form-control" id="usertype">
                                <option>普通员工</option>
                                <option>系统管理员</option>
                                <option>维修员</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>重置</button>
                    </div>
                </div>
            </div>
        </div>
        <!--用户信息记录表-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">用户信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">序号</th>
                    <th class="text-center">账号</th>
                    <th class="text-center">用户名</th>
                    <th class="text-center">密码</th>
                    <th class="text-center">归属部门</th>
                    <th class="text-center">用户类型</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>001</td>
                    <td>Evelyn</td>
                    <td>123456</td>
                    <td>人事部</td>
                    <td>维修员</td>
                    <td>
                        <button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >修改</button>
                        <button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >删除</button>
                    </td>


                </tr>
                </tbody>
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