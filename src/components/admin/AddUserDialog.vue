<!------------------------------------------------
*   @author Kitetop <1363215999@qq.com>          *
*   @version Release: v1.0                       *
*   Date: 2019-05-12                             *
------------------------------------------------->
<template>
    <div>
        <el-dialog :visible.sync="show">
            <span slot="footer" class="dialog-footer">
                <el-button @click="close" size="mini">取 消</el-button>
                <el-button type="primary" size="mini" @click="submit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    name: 'AddResponseDialog',
    props: ['userId', 'themeId', 'responseId', 'fatherId'],
    data () {
      return {
        fileList: [],
        show: true,
        type: 0,
        text: '',
        image: ''
      }
    },
    methods: {
      submit () {
        this.$emit('show-dialog')
      },
      close () {
        this.$emit('show-dialog')
      },
    }
  }
</script>

<style scoped>
    .image {
        font-size: 10px;
        margin-top: 10px;
    }
</style>
