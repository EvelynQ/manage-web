<template>
    <div>
        <div class="container">
            <div class="notice_nav r_right">
                <a class="btn btn-default" data-toggle="modal" data-target="#myModal">
                    <span class="glyphicon glyphicon-plus">新增</span>
                </a>
            </div>
        </div>
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title" id="myModalLabel">添加检查记录</h4>
                    </div>
                    <div class="modal-body">

                        <form action="" role='form' class="">
                            <div class="form-group">
                                <label for="equip_id" class="">设备编号：</label>
                                <input type="text" id="equip_id" class="form-control" v-model="equip_id" >
                            </div>
                            <div class="form-group">
                                <label for="checkdate" class="">检修日期：</label>
                                <input type="text" id="checkdate" class="form-control" v-model="checkdate" >
                            </div>
                            <div class="form-group">
                                <label for="checkman">检修人：</label>
                                <input type="text" id="checkman" class="form-control" v-model="checkman" >
                            </div>
                            <div class="form-group">
                                <label for="state" class="">检查结果：</label>
                                <select class="form-control" id="state">
                                    <option>正常</option>
                                    <option>异常</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="resetBtn" class="btn btn-success"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>重置</button>
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>提交</button>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="container">-->
            <!--<form action="" role='form' class="">-->
                <!--<div class="form-group">-->
                    <!--<label for="equip_id" class="">设备ID：</label>-->
                    <!--<input type="text" id="equip_id" class="form-control" v-model="equip_id" >-->
                <!--</div>-->
                <!--<div class="form-group">-->
                    <!--<label for="checkdate" class="">检修日期：</label>-->
                    <!--<input type="text" id="checkdate" class="form-control" v-model="checkdate" >-->
                <!--</div>-->
                <!--<div class="form-group">-->
                    <!--<label for="checkman">检修人：</label>-->
                    <!--<input type="text" id="checkman" class="form-control" v-model="checkman" >-->
                <!--</div>-->
                <!--<div class="form-group">-->
                    <!--<label for="state" class="">运行状态：</label>-->
                    <!--<select class="form-control" id="state">-->
                        <!--<option>正常</option>-->
                        <!--<option>异常</option>-->
                    <!--</select>-->
                <!--</div>-->
                <!--<div class="form-group">-->
                    <!--<input type="button" value="提交" class="btn btn-primary">-->
                    <!--<input type="reset" value="重置" class="btn btn-warning">-->
                <!--</div>-->
            <!--</form>-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">检查信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">检修ID</th>
                    <th class="text-center">设备编号</th>
                    <th class="text-center">检修日期</th>
                    <th class="text-center">检修人</th>
                    <th class="text-center">检查结果</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>001</td>
                    <td>2015-02-01</td>
                    <td>Evelyn</td>
                    <td>正常</td>
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
        name: "check"
    }
</script>

<style scoped>

</style>