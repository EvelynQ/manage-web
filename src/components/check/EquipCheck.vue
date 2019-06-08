<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>
*   @version Release: v1.0
*   Date: 2019-06-08
*   设备异常情况报告
------------------------------------------------->
<template>
 <div>
     <el-input placeholder="请输入设备编号" size="medium" v-model="input1">
         <template slot="prepend">异常设备：</template>
     </el-input>
     <div style="margin-top: 20px">
         <div style="text-align: center">
             <el-button type="primary" round plain size="mini" native-type="reset">取消</el-button>
             <el-button type="warning" round plain size="mini">上报</el-button>
         </div>
     </div>
 </div>
</template>

<script>
  export default {
    name: 'EquipCheck'
  }
</script>

<style scoped>

</style>
