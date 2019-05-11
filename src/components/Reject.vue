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
                        <h4 class="modal-title" id="myModalLabel">申请报废</h4>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                        <label  for="equipid">设备编号*</label>
                        <input class="form-control" id="equipid" type="text" />
                        </div>
                        <div class="form-group">
                        <label for="scraptime">报废日期</label>
                        <input class="form-control" id="scraptime" type="text"/>
                        </div>
                        <div class="form-group">
                        <label for="oldprice">原价</label>
                        <input class="form-control" id="oldprice" type="text"/>
                        </div>
                        <div class="form-group">
                        <label  for="preprice">折旧价</label>
                        <input class="form-control" id="preprice" type="text"/>
                        </div>
                        <div class="form-group">
                        <label for="reason">报废原因</label>
                        <textarea class="form-control"  id="reason"></textarea>
                        </div>
                        <div class="form-group">
                        <label  for="requestman">申请人</label>
                        <input  class="form-control" id="requestman" type="text"/>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="resetBtn" class="btn btn-success"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>重置</button>
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>提交</button>
                    </div>
                </div>
            </div>
        </div>
        <!--报废信息记录表-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">报废信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">序号</th>
                    <th class="text-center">设备编号</th>
                    <th class="text-center">报废日期</th>
                    <th class="text-center">原价</th>
                    <th class="text-center">折旧价</th>
                    <th class="text-center">报废原因</th>
                    <th class="text-center">申请人</th>
                    <th class="text-center">设备状态</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>001</td>
                    <td>2019-09-23</td>
                    <td>300元</td>
                    <td>40元</td>
                    <td>修不好了，太旧了</td>
                    <td>Evelyn</td>
                    <td>报废</td>
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
        name: "reject"
    }
</script>

<style scoped>

</style>