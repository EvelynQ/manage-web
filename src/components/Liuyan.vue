<template>
    <div>
        <div class="row">
            <ul class="breadcrumb">
                <li><a href="#">论坛</a></li>
                <li><a href="#">留言</a></li>
                <li class="active">帖子详情</li>
            </ul>
        </div>
        <div class="media">
            <div class="media-left">
                <img class="media-object" src="" alt="...">
            </div>
            <div class="media-body">
                <h4 class="media-heading">hkhkh</h4>
                <p>你真棒 啊啦啦啦</p>
                <p>2楼&nbsp;&nbsp;2017-08-08&nbsp;&nbsp;23:15发表</p>
                <hr>
            </div>
        </div>

        <div class="media">
            <div class="media-left">
                <img class="media-object" src="" alt="...">
            </div>
            <div class="media-body">
                <h4 class="media-heading">Media heading</h4>
                <p>嘿嘿额嘿嘿</p>
                <p>1楼&nbsp;&nbsp;2017-08-08&nbsp;&nbsp;23:15发表</p>
                <hr>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div id="user">
                    <span id="user-fa"><i class="glyphicon glyphicon-user"></i></span>
                    <span href="#" id="usename">XXXX</span>
                </div>
                <div id="usermessage">
                    <div class="edit">
                        <a href=""><i class="glyphicon glyphicon-camera"></i></a>
                        <a href=""><i class="glyphicon glyphicon-pencil"></i></a>
                        <a href=""><i class="glyphicon glyphicon-picture"></i></a>
                        <a href=""><i class="glyphicon glyphicon-file"></i></a>
                    </div>
                    <div class="content">
                        <input id="message" class="text-success" type="text" placeholder="写下您的评论...."></input>
                        <button id="btn" class="btn btn-success" onclick="sendMess()" >发表 </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "liuyan"
    }
</script>

<style scoped>
    /**{*/
    /*margin: 0px;*/
    /*padding: 0px;*/
    /*}*/
    #user-fa{
        display: inline-block;
        width: 36px;
        height: 36px;
        border: 1px solid #EEEEEE;
        background-color: #EEEEEE;
        box-shadow: 1px 1px 5px ;
        border-radius: 18px;
        text-align: center;
    }
    #user-fa>i{
        font-size: 20px;
        margin-top: 5px;
    }
    #user>a{
        padding-top: 5px;
        text-decoration: none;
    }
    .edit{
        padding: 10px;
        margin-top: 20px;
        /*border-bottom: 1px solid  #C7254E;*/
    }
    .edit>a{
        color: #000000;
        margin: 2px;
    }
    .edit>a:hover{
        color:#999999;
        background-color: #D9EDF7;
    }
    #message{
        width: 100%;
        height: 100px;

    }
    .btn-success{
        float: right;
    }
    .container{
        margin-left: 10px;
    }
    .media{
        margin-left: 10px;
    }
</style>