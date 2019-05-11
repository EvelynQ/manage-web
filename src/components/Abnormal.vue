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
        <!--<div class="table-responsive" >-->
            <div class="container" >
            <table class="table table-striped" >
                <thead>
                <tr>
                    <th class="text-center" >编号</th>
                    <th class="text-center" >设备ID</th>
                    <th class="text-center" >所属类别</th>
                    <th class="text-center" >设备型号</th>
                    <th class="text-center" >设备状态</th>
                    <th class="text-center">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>5</td>
                    <td>机床</td>
                    <td>Aell-大型机床</td>
                    <td>运行</td>
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
       <nav style="text-align: center">
        <ul class="pagination">
            <li><a href="#">&laquo;</a>
            </li>
            <li class="active"><a href="#">1</a>
            </li>
            <li class=""><a href="#">2</a>
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
       </nav>
    </div>
</template>

<script>
    export default {
        name: "abnormal"
    }
</script>

<style scoped>

</style>