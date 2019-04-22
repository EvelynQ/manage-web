<template>
    <div>
        <form class="form-horizontal" role="form" style="padding: 30px 100px 10px;">
            <div class="form-group">
                <lable for="username" class="col-sm-2 control-label">用户名：</lable>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="username">
                </div>
            </div>
            <div class="form-group">
                <lable for="phone" class="col-sm-2 control-label">手机号码：</lable>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="phone">
                </div>
            </div>
            <div class="form-group">
                <lable for="password" class="col-sm-2 control-label">密码：</lable>
                <div class="col-sm-4">
                    <input type="text" class="form-control" id="password" name="password">
                </div>
                <div style="display:inline">
                    <label class="help-block">6-16位字母、数字、符号、区分大小写</label>
                </div>
            </div>
            <div class="from-group">
                <div class="col-sm-offset-2 col-sm-4">
                    <button type="submit" class="btn btn-warning" style="width:380px;">立即注册</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "register"
    }
</script>

<style scoped>

</style>