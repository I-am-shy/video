var urls = ["https://v.api.aa1.cn/api/api-dy-girl/index.php?aa1=url","https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=url"]
let url;
let num = Math.random();

if( num >= 2/3){
    console.log("一号接口")
    url = urls[0]
}else if(num < 2/3 && num >=1/3){
    console.log("二号接口")
    url = urls[1]
}else{
    console.log("三号接口")
    url = urls[1]
}

var request = new XMLHttpRequest();
//使用open方法，请求类型 API的url 同步（true）或异步（false）
request.open('GET',url,true);

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

 var bt = document.getElementById("bt");
 bt.addEventListener("click",(e)=>{
    let re = new XMLHttpRequest();
    re.open("GET","https://v.api.aa1.cn/api/api-video-gaoxiao/index.php?aa1=url",true);
    re.onload = function(e){
        if(request.status === 200 && request.readyState === 4){
            var src = re.response
            document.getElementById("video").load();
            document.getElementById("source").src = src;
        }
    }

    re.send();
 })
var btn = document.getElementById("btn");
btn.addEventListener("click",function(){
    document.getElementById("video").load();
    document.getElementById("source").src = "https://api.caonm.net/api/mjsp/m.php"
})
