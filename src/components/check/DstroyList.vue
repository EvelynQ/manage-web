<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release:
*   Date: 2019-06-08
------------------------------------------------->
<template>
    <div>
        <el-row>
            <el-col :span="24">
                <!--设备信息记录表-->
                <div style="padding-top: 10px;width: 670px">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr class="text-danger">
                            <th class="text-center">设备ID</th>
                            <th class="text-center">设备型号</th>
                            <th class="text-center">报废原因</th>
                            <th class="text-center">报废日期</th>
                            <th class="text-center">申请人</th>
                        </tr>
                        </thead>
                        <tbody>
                        <!--<tr class="text-center" v-for="(equip, index) in equips">-->
                            <!--<td>{{equip.equip_id}}</td>-->
                            <!--<td>{{equip.equip_type}}</td>-->
                            <!--<td>{{equip.equip_class}}</td>-->
                            <!--<td>{{equip.equip_facture}}</td>-->
                            <!--<td>-->
                                <!--<el-button type="primary" size="mini" @click="Repair(index)" plain>维 修-->
                                <!--</el-button>-->
                            <!--</td>-->
                        <!--</tr>-->
                        <tr class="text-center">
                            <td>1</td>
                            <td>XHD45G</td>
                            <td>内核坏了</td>
                            <td>2019-06-01</td>
                            <td>维修员01</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </el-col>
        </el-row>

        <!--分页部分-->
        <div style="text-align: center">
            <Page v-bind:total='total'
                  v-bind:size='size'
                  @change-page='changePage'
            ></Page>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'DstroyList'
  }
</script>

<style scoped>

</style>
