<template>
    <div>
        <form class="form-horizontal" role="form">
            <fieldset>
                <legend>设备报废</legend>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="equipid">设备编号*</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="equipid" type="text" />
                    </div>
                    <label class="col-sm-1 control-label" for="scraptime">报废日期</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="scraptime" type="text"/>
                    </div>

                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="oldprice">原价</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="oldprice" type="text"/>
                    </div>
                    <label class="col-sm-1 control-label" for="pretime">折旧价</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="pretime" type="text"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="reason">报废原因</label>
                    <div class="col-sm-4">
                        <textarea class="form-control" rows="3" id="reason" style="margin-top: 10px"></textarea>
                    </div>
                    <label class="col-sm-1 control-label" for="requestman">申请人</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="requestman" type="text"/>
                    </div>
                </div>
                <div class="form-group" style="text-align: center">
                    <input type="button" value="添加" class="btn btn-primary">
                    <input type="reset" value="重置" class="btn btn-primary">
                </div>

            </fieldset>

        </form>
    </div>
</template>

<script>
    export default {
        name: "reject"
    }
</script>

<style scoped>

</style>