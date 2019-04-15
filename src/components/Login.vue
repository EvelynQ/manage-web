<template>
    <div>
        <div style="padding: 100px 100px 10px;">
            <h2 class="form-signin">Please sign in</h2>
            <form class="form-signin" role="form" action="" method="post">
                <div class="input-group">
                    <span class="input-group-addon">用户名：</span>
                    <input type="text" class="form-control" placeholder="username">
                </div>
                <br>
                <div class="input-group">
                    <span class="input-group-addon">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
                    <input type="text" class="form-control" placeholder="password">

                </div>
                <br>
                <div class="text-right">
                    <button class="btn btn-primary" type="submit">登陆</button>
                    <button class="btn btn-danger" data-dismiss="modal">取消</button>
                </div>
            </form>
    </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .form-signin {
        max-width: 300px;
        padding: 15px;
        margin: 0 auto;
    }
</style>