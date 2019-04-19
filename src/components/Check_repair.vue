<template>
    <div>

        <div class="container">
            <form action="" role='form' class="">
                <div class="form-group">
                    <label for="equip_id" class="">设备ID：</label>
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
                    <label for="state" class="">运行状态：</label>
                    <select class="form-control" id="state">
                        <option>正常</option>
                        <option>异常</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="button" value="添加" class="btn btn-primary" v-on:click='add()'>
                    <input type="reset" value="重置" class="btn btn-warning">
                </div>
            </form>
            <table class="table table-bordered table-hover">
                <caption class="h4 text-info text-center">检修信息表</caption>
                <thead>
                <tr class="text-danger">
                    <th class="text-center">检修id</th>
                    <th class="text-center">设备编号</th>
                    <th class="text-center">检修日期</th>
                    <th class="text-center">检修人</th>
                    <th class="text-center">运行状态</th>
                </tr>
                </thead>
            </table>
        </div>

    </div>
</template>

<script>
    export default {
        name: "check_repair"
    }
</script>

<style scoped>

</style>