<template>
    <div>
        <form class="form-horizontal" role="form">
            <fieldset>
                <legend>设备维修</legend>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="equipid">设备编号*</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="equipid" type="text" />
                    </div>
                    <label class="col-sm-1 control-label" for="man">维修人</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="man" type="text"/>
                    </div>

                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="repairtime">维修时间</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="repairtime" type="text"/>
                    </div>
                    <label class="col-sm-1 control-label" for="pretime">预计交付时间</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="pretime" type="text"/>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="fee">维修费用</label>
                    <div class="col-sm-4">
                        <input class="form-control" id="fee" type="text"/>
                    </div>

                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label" for="reason">故障原因</label>
                    <div class="col-sm-4">
                        <textarea class="form-control" rows="3" id="reason" style="margin-top: 10px"></textarea>
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
        name: "repair"
    }
</script>

<style scoped>

</style>