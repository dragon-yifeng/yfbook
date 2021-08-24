const express = require('express');
var app = express();
const url = require("url");

// 定义方法
app.get('/',function(req,res){
    res.send('HellowWord')
});

// 响应接口
app.get('/list/product',function(req,res){
    // 获取get请求中的参数
    var requset_url  = req.url;
    var strurl  = url.parse(requset_url,true).query
    console.log(requset_url)
    var id = req.id;
    let result = {
        err:0,
        msg:'ok',
        data:{
            'name':strurl.name,
            'price':'1999',
            'title':'好吃的花生',
            'id':strurl.id
        }
    }
    res.send(result)
})
// 定义端口，此处所用为3000端口，可自行更改
var server = app.listen(3000,function() {
    console.log('runing 3000.....');
})