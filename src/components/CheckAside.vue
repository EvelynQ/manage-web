<template>
    <el-menu
            class="el-menu-vertical-demo"
            router
            :default-active="active"
            active-text-color="#ffa400">
        <el-submenu index="1">
            <template slot="title">
                <div style="text-align: left">
                    <i class="el-icon-s-grid"></i>
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
                <el-menu-item index="/changePass">
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
                    <i class="el-icon-s-claim"></i>
                    <span>异常管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/check/equip">
                    <div style="font-size: 10px">
                        <i class="el-icon-view"></i>
                        <span>检查信息录入</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="/destroy/list">
                    <div style="font-size: 10px">
                        <i class="el-icon-delete"></i>
                        <span>报废信息列表</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'check_aside',
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
