<template>
    <div>

    <div class="container">
        <!--<h2>表格</h2>-->
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
                            <label for="txt_classid">种类id</label>
                            <input type="text" name="txt_classid" class="form-control" id="txt_classid" placeholder="种类">
                        </div>

                        <div class="form-group">
                            <label for="txt_equiptype">设备型号</label>
                            <input type="text" name="txt_equiptype" class="form-control" id="txt_equiptype" placeholder="设备型号">
                        </div>

                        <div class="form-group">
                            <label for="txt_manufacture">制造厂商</label>
                            <input type="text" name="txt_manufacture" class="form-control" id="txt_manufacture" placeholder="制造厂商">
                        </div>

                        <div class="form-group">
                            <label for="txt_productdate">生产日期</label>
                            <input type="text" name="txt_productdate" class="form-control" id="txt_productdate" placeholder="生产日期">
                        </div>
                        <div class="from-group">
                            <label for="txt_buydate">购买日期</label>
                            <input type="text" name="txt_buydate" class="form-control" id="txt_buydate" placeholder="购买日期">
                        </div>
                        <div class="from-group">
                            <label for="txt_useyear">使用年限</label>
                            <input type="text" name="txt_useyear" class="form-control" id="txt_useyear" placeholder="使用年限">
                        </div>
                        <div class="from-group">
                            <label for="txt_equipstate">设备状态</label>
                            <input type="text" name="txt_equipstate" class="form-control" id="txt_equipstate" placeholder="设备状态">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span>关闭</button>
                        <button type="button" id="btn_submit" class="btn btn-primary" data-dismiss="modal"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>保存</button>
                    </div>
                </div>
            </div>
        </div>

        <!--设备信息表格-->
        <h3>设备信息记录表:</h3>
        <table class="table table-bordered table-hover">

            <thead>

            <tr class="text-danger">
                <th class="text-center" style="width: 50px">设备ID</th>
                <th class="text-center" style="width: 50px">种类ID</th>
                <th class="text-center" style="width: 80px">设备型号</th>
                <th class="text-center" style="width: 80px">制造厂商</th>
                <th class="text-center" style="width: 80px">生产日期</th>
                <th class="text-center" style="width: 80px">购买日期</th>
                <th class="text-center" style="width: 80px">使用年限</th>
                <th class="text-center" style="width: 80px">设备状态</th>
            </tr>
            </thead>

            <tbody>
            <tr class="text-center">
                <td>1</td>
                <td>5</td>
                <td>Aell-大型机床</td>
                <td>Debbie</td>
                <td>2018.12.1</td>
                <td>2019.3.1</td>
                <td>2019-2020</td>
                <td>运行</td>
            </tr>
           </tbody>

        </table>
    </div>
    </div>
</template>

<script>
    export default {
        name: "addequip"
    }
</script>

<style scoped>

</style>