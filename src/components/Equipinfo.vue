<template>
    <div>
        <!--设备信息表格-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">设备信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center" >设备ID</th>
                    <th class="text-center" >所属类别</th>
                    <th class="text-center" >设备型号</th>
                    <th class="text-center" >设备状态</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>

                <tbody>
                <tr class="text-center">
                    <td>001</td>
                    <td>5</td>
                    <td>Aell-大型机床</td>
                    <td>运行</td>
                    <td>
                        <!--<button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >设备报修</button>-->
                        <a class="btn btn-danger btn-xs" data-toggle="modal" data-target="#myModal">设备报修</a>
                        <button class="btn btn-danger btn-xs" data-toggle='modal' data-target='#layer' >设备报废</button>
                    </td>
                </tr>
                </tbody>

            </table>
        </div>
        <!--设备报修模态框-->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">设备报修</h4>
                    </div>
                    <div class="modal-body">

                        <div class="form-group">
                            <label for="repairtime">报修日期</label>
                            <input class="form-control" id="repairtime" type="text"/>
                        </div>
                        <div class="form-group">
                            <label for="reason">故障原因</label>
                            <textarea class="form-control" id="reason" ></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                        <button type="button" id="resetBtn" class="btn btn-success"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>重置</button>
                    </div>
                </div>
            </div>
        </div><!--模态框结束-->
    </div>
</template>

<script>
    export default {
        name: "equipinfo"
    }
</script>

<style scoped>

</style>