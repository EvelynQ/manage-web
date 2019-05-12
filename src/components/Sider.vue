<template>
    <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            router
            active-text-color="#ffa400">
        <el-submenu index="1">
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
                        <span>用户管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="1-2">
                    <div style="font-size: 10px">
                        <i class="el-icon-s-unfold"></i>
                        <span>部门管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="1-3">
                    <div style="font-size: 10px">
                        <i class="el-icon-edit"></i>
                        <span>修改密码</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">
                <div style="text-align: left">
                    <i class="el-icon-s-grid"></i>
                    <span>设备管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="2-1">
                    <div style="font-size: 10px">
                        <i class="el-icon-s-tools"></i>
                        <span>设备管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="2-2">
                    <div style="font-size: 10px">
                        <i class="el-icon-coin"></i>
                        <span>种类管理</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <div style="text-align: left">
                    <i class="el-icon-s-claim"></i>
                    <span>运行管理</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item index="3-1">
                    <div style="font-size: 10px">
                        <i class="el-icon-view"></i>
                        <span>检查管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="3-2">
                    <div style="font-size: 10px">
                        <i class="el-icon-postcard"></i>
                        <span>记录管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="3-3">
                    <div style="font-size: 10px">
                        <i class="el-icon-brush"></i>
                        <span>维修管理</span>
                    </div>
                </el-menu-item>
                <el-menu-item index="3-4">
                    <div style="font-size: 10px">
                        <i class="el-icon-delete"></i>
                        <span>报废管理</span>
                    </div>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
  export default {
    name: 'index_sider',
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    },
  }
</script>

<style scoped>
</style>
