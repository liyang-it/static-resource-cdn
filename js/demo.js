// 获取 body 元素  
var body = document.body;

// 创建一个新的  元素  
var div = document.createElement("div");

// 设置 div 元素的内容  
div.innerHTML = "Success";

// 将 span 元素添加到 body 元素中  
body.appendChild(div);