(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-list"],{"1d4e":function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,".list-goods1[data-v-41042b68]{display:block;width:%?362?%;float:left;background-color:#fff;margin:0 0 %?8?% 0}.list-goods2[data-v-41042b68]{display:block;width:%?362?%;float:left;background-color:#fff;margin:0 0 %?8?% %?8?%}.detail_amount_tip[data-v-41042b68]{text-align:right;position:relative;top:-25px;color:#fff;background:rgba(0,0,0,.2784313725490196);padding-right:10px;font-size:14px;line-height:20px}.content[data-v-41042b68]{display:flex;flex-direction:column;align-items:center;justify-content:center}.logo[data-v-41042b68]{height:%?200?%;width:%?200?%;margin-top:%?200?%;margin-left:auto;margin-right:auto;margin-bottom:%?50?%}.text-area[data-v-41042b68]{display:flex;justify-content:center}.title[data-v-41042b68]{font-size:%?36?%;color:#8f8f94}",""]),t.exports=a},"2ecb":function(t,a,e){"use strict";var i=e("bb44"),n=e.n(i);n.a},"334d":function(t,a,e){"use strict";e.r(a);var i=e("64c9"),n=e.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);a["default"]=n.a},"43ca":function(t,a,e){"use strict";var i=e("868b"),n=e.n(i);n.a},"64c9":function(t,a,e){"use strict";e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("99af"),e("14d9"),e("ac1f"),e("841c");var i={data:function(){return{curType:"list",title:"",kw:"",originData:[],totalData:[],listData:[],scrollTop:0,page:0,pageSize:20}},onPageScroll:function(t){this.scrollTop=t.scrollTop},onLoad:function(t){var a=this,e=this;this.title=t.title;var i=this.$globalVariable.publicPath+"static/".concat(t.tid,"/").concat(t.bid,".json");this.originData=[],uni.request({url:i,success:function(t){a.totalData=t.data,a.originData=t.data,e.listDataByPage()},fail:function(t){console.error("Failed to load JSON file",t)}})},methods:{handleDetail:function(t){uni.setStorageSync("detail",[]),uni.setStorageSync("detail",t),uni.navigateTo({url:"/pages/index/detail"})},home:function(){var t=getCurrentPages();t&&t.length>1?uni.navigateBack({delta:1}):history.back()},listDataByPage:function(){for(var t=this.page*this.pageSize,a=0,e=t;e<this.totalData.length;e++){if(a+=1,a>this.pageSize)return!0;this.listData.push(this.totalData[e])}},loadMore:function(){this.page=this.page+1,this.listDataByPage()},searchData:function(){this.page=0,this.listData=[],this.totalData=[];for(var t=this.kw.toLowerCase().split(" "),a=0;a<this.originData.length;a++)void 0!==t[0]&&this.originData[a].title.toLowerCase().search(t[0].toLowerCase())>-1&&(void 0===t[1]||this.originData[a].title.toLowerCase().search(t[1].toLowerCase())>-1)&&(void 0===t[2]||this.originData[a].title.toLowerCase().search(t[2].toLowerCase())>-1)&&(void 0===t[3]||this.originData[a].title.toLowerCase().search(t[3].toLowerCase())>-1)&&this.totalData.push(this.originData[a]);this.listDataByPage()}}};a.default=i},"868b":function(t,a,e){var i=e("a6e5");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("0de55978",i,!0,{sourceMap:!1,shadowMode:!1})},"93b7":function(t,a,e){"use strict";e.r(a);var i=e("a2ea"),n=e("334d");for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);e("43ca"),e("2ecb");var r=e("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"41042b68",null,!1,i["a"],void 0);a["default"]=s.exports},a2ea:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return o})),e.d(a,"a",(function(){return i}));var i={uniNavBar:e("fafa").default,uSearch:e("d9c2").default,uButton:e("4276").default,uDivider:e("6da47").default,uBackTop:e("2d40").default},n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",[e("uni-nav-bar",{attrs:{"left-icon":"back",statusBar:"false",title:t.title,"background-color":"rgb(52 168 83)",color:"#FFFFFF",fixed:"true"},on:{clickLeft:function(a){arguments[0]=a=t.$handleEvent(a),t.home()}}}),e("u-search",{staticStyle:{margin:"10px"},attrs:{"bg-color":"#FFFFFF",placeholder:"search",showAction:!1},on:{search:function(a){arguments[0]=a=t.$handleEvent(a),t.searchData()},clear:function(a){arguments[0]=a=t.$handleEvent(a),t.searchData()}},model:{value:t.kw,callback:function(a){t.kw=a},expression:"kw"}}),e("v-uni-view",{staticStyle:{margin:"0 auto",width:"732rpx"}},t._l(t.listData,(function(a,i){return e("v-uni-view",{key:i,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleDetail(a)}}},[e("v-uni-view",{class:i%2===0?"list-goods1":"list-goods2"},[e("v-uni-image",{staticStyle:{width:"362rpx",height:"362rpx","background-color":"#eeeeee"},attrs:{src:a.cover,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"detail_amount_tip"},[t._v("+"+t._s(a.amount)+" color")]),e("span",{staticStyle:{margin:"-40rpx 10rpx 10rpx 10rpx",display:"block",height:"57px","font-size":"14px",color:"#6d6d6d",overflow:"hidden"}},[t._v(t._s(a.title))])],1)],1)})),1),e("v-uni-view",{staticStyle:{padding:"20rpx",clear:"both"}},[this.listData.length<this.totalData.length?e("u-button",{attrs:{type:"success",text:"CLICK LOAD MORE"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.loadMore.apply(void 0,arguments)}}}):e("u-divider",{attrs:{text:"NO MORE DATA"}})],1),e("u-back-top",{attrs:{"scroll-top":t.scrollTop}})],1)},o=[]},a6e5:function(t,a,e){var i=e("24fb");a=i(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* uni.scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.grid-text[data-v-41042b68]{font-size:18px;color:#2d8cf0;height:60px;line-height:53px;padding:%?10?% 0 %?20?% %?0?%;box-sizing:border-box}.album[data-v-41042b68]{display:flex;flex-direction:row;align-items:flex-start}.album__avatar[data-v-41042b68]{background-color:#f3f4f6;padding:5px;border-radius:3px}.album__content[data-v-41042b68]{margin-left:10px;flex:1}',""]),t.exports=a},bb44:function(t,a,e){var i=e("1d4e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=e("4f06").default;n("4a948c88",i,!0,{sourceMap:!1,shadowMode:!1})}}]);