
var request = new XMLHttpRequest();
//使用open方法，请求类型 API的url 同步（true）或异步（false）
request.open('GET',"https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=url",true);

//访问 onload 函数的数据
request.onload = function(e){
    if (request.status === 200 && request.readyState === 4){
        console.log("请求成功")
        var text = request.response    
        console.log(text)
        document.getElementById("video").load();
        document.getElementById("source").src = text;
    }
   
}
 request.send();
