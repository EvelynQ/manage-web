<template>
    <div>
        <div class="container">
            <div class="notice_nav r_right">
                <a class="btn btn-default" data-toggle="modal" data-target="#myModal">
                    <span class="glyphicon glyphicon-plus">添加</span>
                </a>
            </div>
        </div>
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">添加部门</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="txt_departname">部门名称</label>
                            <input type="text" name="txt_departname" class="form-control" id="txt_departname" placeholder="部门名称">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                        <button type="button" id="resetBtn" class="btn btn-success"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>重置</button>
                    </div>
                </div>
            </div>
        </div>

        <!--部门信息表-->
        <div  class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">部门信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">部门ID</th>
                    <th class="text-center">部门名称</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>人事部</td>
                    <td>
                        <button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >修改</button>
                        <button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >删除</button>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
<!--部门信息表结束-->
    </div>
</template>

<script>
    export default {
        name: "adddepart"
    }
</script>

<style scoped>

</style>