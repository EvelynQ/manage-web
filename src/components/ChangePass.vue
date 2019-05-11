<template>
    <div>
        <div class="container">
            <div class="notice_nav r_right">
                <a class="btn btn-default" data-toggle="modal" data-target="#pwdModal">
                    <span class="glyphicon glyphicon-pencil">修改密码</span>
                </a>
            </div>
        </div>
        <!-- 模态框（Modal） -->
        <div class="modal fade" id="pwdModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×
                        </button>
                        <h4 class="modal-title" id="myModalLabel">
                            修改密码
                        </h4>
                    </div>
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
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">
                            关闭
                        </button>
                        <button type="button" class="btn btn-primary" id="btnPwd">
                            提交更改
                        </button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->
    </div>
</template>

<script>
    export default {
        name: "change-pass"
    }
</script>

<style scoped>

</style>