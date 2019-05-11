<template>
    <div>
        <!--维修记录信息表格-->
        <div class="container">
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">历史记录管理</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center" >序号</th>
                    <th class="text-center" >所属编号</th>
                    <th class="text-center" >所属类别</th>
                    <th class="text-center" >设备型号</th>
                    <th class="text-center" >报修日期</th>
                    <th class="text-center" >完成日期</th>
                    <th class="text-center">维修人</th>
                </tr>
                </thead>

                <tbody>
                <tr class="text-center">
                    <td>1</td>
                    <td>001</td>
                    <td>5</td>
                    <td>Aell-大型机床</td>
                    <td>2015.9.10</td>
                    <td>2015.9.12</td>
                    <td>Tony</td>
                </tr>
                </tbody>

            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "documents"
    }
</script>

<style scoped>

</style>