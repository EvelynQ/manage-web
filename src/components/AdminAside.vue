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
                <el-menu-item index="/changePass">
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
                    <i class="el-icon-setting"></i>
                    <span>系统管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/user">
                    <div style="font-size: 10px">
                        <i class="el-icon-user"></i>
                        <span>用户信息管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="/depart">
                    <div style="font-size: 10px">
                        <i class="el-icon-s-unfold"></i>
                        <span>部门信息管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="/class">
                    <div style="font-size: 10px">
                        <i class="el-icon-coin"></i>
                        <span>种类信息管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="/equip">
                    <div style="font-size: 10px">
                        <i class="el-icon-s-tools"></i>
                        <span>设备信息管理</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'admin_aside',
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
