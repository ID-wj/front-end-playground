(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{725:function(t,e,r){"use strict";r.r(e);var a=r(69),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("小程序的一些能力更新、踩坑历史、以及一些开源工具库和框架的推荐记录第一弹。")]),t._v(" "),r("h1",{attrs:{id:"小程序-latest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序-latest"}},[t._v("#")]),t._v(" 小程序 latest")]),t._v(" "),r("h2",{attrs:{id:"开发者工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具"}},[t._v("#")]),t._v(" 开发者工具")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/settings.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("新增黑色主题"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/devtools/edit.html#typescript-%E6%94%AF%E6%8C%81",target:"_blank",rel:"noopener noreferrer"}},[t._v("支持 Typescript"),r("OutboundLink")],1)])]),t._v(" "),r("h1",{attrs:{id:"小程序教程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小程序教程"}},[t._v("#")]),t._v(" 小程序教程")]),t._v(" "),r("h2",{attrs:{id:"使用-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-tips"}},[t._v("#")]),t._v(" 使用 Tips")]),t._v(" "),r("ul",[r("li",[r("RouterLink",{attrs:{to:"/wxapp-technique/wxapp-official-functions.html"}},[t._v("超实用小程序官方能力")])],1)]),t._v(" "),r("blockquote",[r("p",[t._v("目前来说，大多数是我自己的文章，也非常欢迎大家推荐文章来~")])]),t._v(" "),r("h2",{attrs:{id:"最新踩坑-tips"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#最新踩坑-tips"}},[t._v("#")]),t._v(" 最新踩坑 Tips")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("调试小程序时，有些请求例如上传文件请求，无法再控制台里查看到完整的请求信息。\n解决办法：小程序开发工具可以设置网络代理，转发到抓包工具例如 Charles 中即可。")])]),t._v(" "),r("li",[r("p",[t._v("在原生页跳转进入小程序场景下（仿原生，没有关闭和后退按钮），有没有内部能力从小程序返回到原生页？\n可使用"),r("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateBackMiniProgram.html?search-key=navigateBackMiniProgram",target:"_blank",rel:"noopener noreferrer"}},[t._v("navigateBackMiniProgram"),r("OutboundLink")],1),t._v("返回到上一个小程序。只有在当前小程序是被其他小程序打开时可以调用成功")]),t._v(" "),r("blockquote",[r("p",[t._v("虽然写的是返回小程序，但是他就是可以用。算是实现的有 bug，目前测试没遇到过不行的情况。\niOS 仿原生点了是切后台，安卓仿原生是关闭，这个无解。\n想安心一点就用"),r("code",[t._v('<navigator target="miniProgram" open-type="exit">')]),t._v("，版本比较高")])])]),t._v(" "),r("li",[r("p",[t._v("小程序右上角的关闭按钮，只是将小程序切换到后台并不会关闭小程序。若需要重新加载，需要在微信首页下拉删掉使用过的小程序；另从后台唤醒时，会触发"),r("code",[t._v("onShow")]),t._v("而不是"),r("code",[t._v("onLoad")]),t._v("。")])]),t._v(" "),r("li",[r("p",[t._v("如果用户通过微信首页下拉删掉使用过的小程序，那么小程序代码里面通过 localStorage 保存的缓存信息以及通过文件管理器保存的文件都会被清掉。")])]),t._v(" "),r("li",[r("p",[t._v("小程序工具上传代码，勾选 ES6 转 ES5，只会针对 ES6 进行编译，对 ES7/ES8 代码并不会编译，可能导致兼容性问题（如"),r("code",[t._v("Object.values")]),t._v("）。\n节后工具会上线一个 ES6+ 转 ES5 的能力，一站式全部处理掉。")])])]),t._v(" "),r("blockquote",[r("p",[t._v("后续踩坑相关的，可能会整理到一个地方一起沉淀吧~~~")])]),t._v(" "),r("h1",{attrs:{id:"tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[t._v("#")]),t._v(" tools")]),t._v(" "),r("h2",{attrs:{id:"框架"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#框架"}},[t._v("#")]),t._v(" 框架")]),t._v(" "),r("blockquote",[r("p",[t._v("Tips 仅供参考: 小程序开发本身就比较方便，个人感觉最好的方式建议直接使用原生开发噢")])]),t._v(" "),r("h3",{attrs:{id:"wepy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wepy"}},[t._v("#")]),t._v(" wepy")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/Tencent/wepy",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Tencent/wepy"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"mpvue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mpvue"}},[t._v("#")]),t._v(" mpvue")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/mpvue",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/mpvue"),r("OutboundLink")],1)])]),t._v(" "),r("h2",{attrs:{id:"工具"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),r("h3",{attrs:{id:"werequest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#werequest"}},[t._v("#")]),t._v(" weRequest")]),t._v(" "),r("p",[t._v("解决繁琐的小程序会话管理，一款自带登录态管理的网络请求组件：")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("session 登录态管理（静默续期）")])]),t._v(" "),r("li",[r("p",[t._v("cache 请求缓存能力")])]),t._v(" "),r("li",[r("p",[t._v("封装请求测速能力")])]),t._v(" "),r("li",[r("p",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/IvinWu/weRequest",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/IvinWu/weRequest"),r("OutboundLink")],1)])])]),t._v(" "),r("h3",{attrs:{id:"we-cropper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#we-cropper"}},[t._v("#")]),t._v(" we-cropper")]),t._v(" "),r("p",[t._v("微信小程序图片裁剪工具。")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/we-plugin/we-cropper",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/we-plugin/we-cropper"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"westore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#westore"}},[t._v("#")]),t._v(" westore")]),t._v(" "),r("p",[t._v("微信小程序状态管理解决方案")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/Tencent/westore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Tencent/westore"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("Tips: store 为全局状态，不同组件或页面需要注意数据隔离")])]),t._v(" "),r("h2",{attrs:{id:"图表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图表"}},[t._v("#")]),t._v(" 图表")]),t._v(" "),r("h3",{attrs:{id:"echarts-for-weixin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#echarts-for-weixin"}},[t._v("#")]),t._v(" echarts-for-weixin")]),t._v(" "),r("p",[t._v("ECharts 的微信小程序版本")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/ecomfe/echarts-for-weixin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/ecomfe/echarts-for-weixin"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("注意：移动端中使用 ECharts，折线图的点击事件体验会很差")])]),t._v(" "),r("h3",{attrs:{id:"wx-f2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wx-f2"}},[t._v("#")]),t._v(" wx-f2")]),t._v(" "),r("p",[t._v("F2 的微信小程序图表示例")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/antvis/wx-f2",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/antvis/wx-f2"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"wx-charts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wx-charts"}},[t._v("#")]),t._v(" wx-charts")]),t._v(" "),r("p",[t._v("微信小程序图表 charts 组件")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/xiaolin3303/wx-charts",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xiaolin3303/wx-charts"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("该图表组件已没有维护，但是源码比较简单清晰，可自定义修改")])]),t._v(" "),r("h2",{attrs:{id:"ui-库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui-库"}},[t._v("#")]),t._v(" UI 库")]),t._v(" "),r("h3",{attrs:{id:"weui-小程序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#weui-小程序"}},[t._v("#")]),t._v(" weui-小程序")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/Tencent/weui-wxss",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Tencent/weui-wxss"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"wux-weapp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wux-weapp"}},[t._v("#")]),t._v(" wux-weapp")]),t._v(" "),r("ul",[r("li",[t._v("Github: "),r("a",{attrs:{href:"https://github.com/wux-weapp/wux-weapp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/wux-weapp/wux-weapp"),r("OutboundLink")],1)])]),t._v(" "),r("blockquote",[r("p",[t._v("Tips: 表单相关的 input/textarea 稍微有毒，其他暂可正常使用")])]),t._v(" "),r("h1",{attrs:{id:"结束语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结束语"}},[t._v("#")]),t._v(" 结束语")]),t._v(" "),r("p",[t._v("本期作为第一期，所以把目前的一些工具库和文章沉淀一并发出，大家如果有很好的文章、工具推荐，可以一起留言讨论和推荐。")])])}),[],!1,null,null,null);e.default=s.exports}}]);