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



        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">新增</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="txt_classname">种类名称</label>
                            <input type="text" name="txt_classname" class="form-control" id="txt_classname" placeholder="种类名称">
                        </div>

                        <div class="form-group">
                            <label for="txt_desc">种类描述</label>
                            <input type="text" name="txt_desc" class="form-control" id="txt_desc" placeholder="种类描述">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                    </div>
                </div>
            </div>
        </div>
        <!--种类信息表-->
        <div  class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">种类信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">序号</th>
                    <th class="text-center">种类名称</th>
                    <th class="text-center">种类描述</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "addclass"
    }
</script>

<style scoped>
    .r_right {
        padding:20px;
    }

</style>