<template>
    <div>
        <div>

            <div class="modal-body">
                <div class="input-group">
                    <span class="input-group-addon">旧密码&nbsp;&nbsp;</span>
                    <input type="text" class="form-control" placeholder="请输入旧密码" name="oldpwd">
                    <span class='input-group-addon hidden' id='oldspan' hidden><span class="label label-danger" hidden>密码错误</span></span>

                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">新密码&nbsp;&nbsp;</span>
                    <input type="text" class="form-control" name="newpwd">
                    <span class='input-group-addon hidden' id='newspan' hidden><span class="label label-danger" hidden>新密码不能为空</span></span>

                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">确认密码</span>
                    <input type="text" class="form-control" name="repwd">
                    <span class='input-group-addon hidden' id='respan' hidden><span class="label label-danger" hidden>两次输入的密码不一致</span></span>
                </div>
            </div>
            <div style="text-align: center">
                <el-button type="primary" round plain size="mini">取消</el-button>
                <el-button type="warning" round plain size="mini">修改密码</el-button>
            </div>

        </div>
    </div>
</template>

<script>
  export default {
    name: 'change-pass'
  }
</script>

<style scoped>

</style>
