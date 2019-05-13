<template>
    <el-menu
            class="el-menu-vertical-demo"
            router
            :default-active="active"
            active-text-color="#ffa400">
        <el-submenu index="1">
            <template slot="title">
                <div style="text-align: left">
                    <i class="el-icon-setting"></i>
                    <span>公共管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">
                    <div style="font-size: 10px">
                        <i class="el-icon-edit"></i>
                        <span>修改信息</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <div style="font-size: 10px">
                        <i class="el-icon-warning-outline"></i>
                        <span>修改密码</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <div style="text-align: left">
                    <i class="el-icon-brush"></i>
                    <span>维修管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">
                    <div style="font-size: 10px">
                        <i class="el-icon-document"></i>
                        <span>维修信息列表</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="2-1">
                    <div style="font-size: 10px">
                        <i class="el-icon-document-add"></i>
                        <span>记录信息列表</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'repair_aside',
    created() {
      this.active = this.getIndex();
    },
    data () {
      return {
        active: '', //默认活动
      }
    },
    methods: {
      getIndex() {
        let uri = this.$route.path;
        if(uri === '/') {
          return null;
        } else {
          return uri;
        }
      },
    }
  }
</script>

<style scoped>

</style>
