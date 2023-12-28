/**
 * 用于JDK9 HTML中文帮助手册调用
 * Created by liyang on 2023-12-28.
 */

// 修改页面的 adDivContent 元素
const adDivContent = document.getElementById('adDivContent')
// 样式
adDivContent.style = 'position: fixed;width: 200px;top: 100px;right: 5px;text-align: center;line-height: 5px;'
// 内容
let updateContent = '<img src="https://avatars.githubusercontent.com/u/47813056?v=4" style="width: 100%;height: 100%;"/>'
updateContent += '<p><a href="" style=""  target="_blank">最新网址</a></p>'
updateContent += '<p><a href="https://blog.csdn.net/qq_40739917" style="" target="_blank">CSDN@头上一片天空</a></p>'
adDivContent.innerHTML = updateContent

// 创建div节点
var div = document.createElement("div");
var body = document.getElementsByTagName("body");
body.appendChild(div)