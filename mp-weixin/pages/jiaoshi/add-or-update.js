(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaoshi/add-or-update"],{2798:function(e,t,n){},4222:function(e,t,n){"use strict";n.r(t);var i=n("f3af"),r=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=r.a},"647c":function(e,t,n){"use strict";(function(e){n("403b"),n("921b");i(n("66fd"));var t=i(n("ce80"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},7498:function(e,t,n){"use strict";var i=n("2798"),r=n.n(i);r.a},ce80:function(e,t,n){"use strict";n.r(t);var i=n("f66b"),r=n("4222");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("7498");var u,o=n("f0c5"),s=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"5cd8a1d7",null,!1,i["a"],u);t["default"]=s.exports},f3af:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,i,r,a,u){try{var o=e[a](u),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(i,r)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function o(e){a(u,i,r,o,s,"next",e)}function s(e){a(u,i,r,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("08a3"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{ruleForm:{gonghao:"",mima:"",jiaoshixingming:"",xingbie:"",touxiang:"",xueyuan:"",zhicheng:"",dianhua:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{gonghao:!1,mima:!1,jiaoshixingming:!1,xingbie:!1,touxiang:!1,xueyuan:!1,zhicheng:!1,dianhua:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var t=u(i.default.mark((function t(n){var r,a,u,o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,this.$api.session(r);case 3:if(a=t.sent,this.user=a.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=14;break}return this.ruleForm.id=n.id,t.next=12,this.$api.info("jiaoshi",this.ruleForm.id);case 12:a=t.sent,this.ruleForm=a.data;case 14:if(!n.cross){t.next=53;break}u=e.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 17:if((t.t1=t.t0()).done){t.next=53;break}if(o=t.t1.value,"gonghao"!=o){t.next=23;break}return this.ruleForm.gonghao=u[o],this.ro.gonghao=!0,t.abrupt("continue",17);case 23:if("mima"!=o){t.next=27;break}return this.ruleForm.mima=u[o],this.ro.mima=!0,t.abrupt("continue",17);case 27:if("jiaoshixingming"!=o){t.next=31;break}return this.ruleForm.jiaoshixingming=u[o],this.ro.jiaoshixingming=!0,t.abrupt("continue",17);case 31:if("xingbie"!=o){t.next=35;break}return this.ruleForm.xingbie=u[o],this.ro.xingbie=!0,t.abrupt("continue",17);case 35:if("touxiang"!=o){t.next=39;break}return this.ruleForm.touxiang=u[o],this.ro.touxiang=!0,t.abrupt("continue",17);case 39:if("xueyuan"!=o){t.next=43;break}return this.ruleForm.xueyuan=u[o],this.ro.xueyuan=!0,t.abrupt("continue",17);case 43:if("zhicheng"!=o){t.next=47;break}return this.ruleForm.zhicheng=u[o],this.ro.zhicheng=!0,t.abrupt("continue",17);case 47:if("dianhua"!=o){t.next=51;break}return this.ruleForm.dianhua=u[o],this.ro.dianhua=!0,t.abrupt("continue",17);case 51:t.next=17;break;case 53:this.styleChange();case 54:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang=e.$base.url+"upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=u(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.gonghao){e.next=3;break}return this.$utils.msg("工号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.mima){e.next=6;break}return this.$utils.msg("密码不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.id){e.next=11;break}return e.next=9,this.$api.update("jiaoshi",this.ruleForm);case 9:e.next=13;break;case 11:return e.next=13,this.$api.add("jiaoshi",this.ruleForm);case 13:this.$utils.msgBack("提交成功");case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),i=t.getMonth()+1,r=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(n,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};t.default=s}).call(this,n("543d")["default"])},f66b:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}))}},[["647c","common/runtime","common/vendor"]]]);