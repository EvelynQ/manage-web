<template>
    <div>

        <div class="panel panel-default">
            <div class="panel-heading">
                搜索
            </div>
            <div class="panel-body">
                <form role="form" class="form-inline">
                    <div class="form-group">
                        <label for="name">设备编号</label>
                        <input type="text" class="form-control" id="name" placeholder="请输入设备编号">
                    </div>
                    <div class="form-group">
                        <label for="name">状态</label>
                        <select class="form-control">
                            <option>正常</option>
                            <option>异常</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-default">开始搜索</button>
                    </div>
                </form>
            </div>
        </div>

        <!--
                      列表展示
                  -->
        <div class="table-responsive" >
            <table class="table table-striped" >
                <thead>
                <tr>
                    <th>编号</th>
                    <th>设备编号</th>
                    <th>设备类型</th>
                    <th>运行状态</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>
                        23
                    </td>
                    <td>机床</td>

                    <td>上架</td>
                    <td>
                        <div class="btn-group">
                            <a href="" class="btn btn-default">维修</a><a href="" class="btn btn-danger">报废</a>
                        </div>

                    </td>
                </tr>

                </tbody>
            </table>
        </div>

        <!--分页设置-->
        <ul class="pagination" style="float: right;">
            <li><a href="#">&laquo;</a>
            </li>
            <li class="active"><a href="#">1</a>
            </li>
            <li class="disabled"><a href="#">2</a>
            </li>
            <li><a href="#">3</a>
            </li>
            <li><a href="#">4</a>
            </li>
            <li><a href="#">5</a>
            </li>
            <li><a href="#">&raquo;</a>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "abnormal"
    }
</script>

<style scoped>

</style>