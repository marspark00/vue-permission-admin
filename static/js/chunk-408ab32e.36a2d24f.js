(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-408ab32e"],{"1c64":function(e,t,n){},"1cc6":function(e,t,n){"use strict";var i=n("1c64"),a=n.n(i);a.a},"333d":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[n("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},a=[];n("c5f6");Math.easeInOutQuad=function(e,t,n,i){return e/=i/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)};var s=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function o(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function r(e,t,n){var i=l(),a=e-i,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var l=Math.easeInOutQuad(c,i,a,t);o(l),c<t?s(e):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&r(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&r(0,800)}}},u=c,d=(n("1cc6"),n("2877")),p=Object(d["a"])(u,i,a,!1,null,"f3b72548",null);t["a"]=p.exports},6724:function(e,t,n){"use strict";n("8d41");var i="@@wavesContext";function a(e,t){function n(n){var i=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=a.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var o=s.getBoundingClientRect(),l=s.querySelector(".waves-ripple");switch(l?l.className="waves-ripple":(l=document.createElement("span"),l.className="waves-ripple",l.style.height=l.style.width=Math.max(o.width,o.height)+"px",s.appendChild(l)),a.type){case"center":l.style.top=o.height/2-l.offsetHeight/2+"px",l.style.left=o.width/2-l.offsetWidth/2+"px";break;default:l.style.top=(n.pageY-o.top-l.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",l.style.left=(n.pageX-o.left-l.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return l.style.backgroundColor=a.color,l.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=n:e[i]={removeHandle:n},n}var s={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},o=function(e){e.directive("waves",s)};window.Vue&&(window.waves=s,Vue.use(o)),s.install=o;t["a"]=s},"8d41":function(e,t,n){},f982:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["add"],expression:"['add']"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"success",icon:"el-icon-edit"},on:{click:e.handleAdd}},[e._v("\n      添加角色\n    ")])],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-row",e._l(t.row.permissions,function(t,i){return n("el-col",{key:i,attrs:{span:11,offset:1}},[n("div",{staticStyle:{"margin-bottom":"10px"}},[n("span",[e._v(" "+e._s(t.name)+"：")]),e._v(" "),e._l(t.selected,function(t){return n("el-tag",{key:t,staticStyle:{margin:"0 5px"},attrs:{type:"success"}},[e._v("\n                "+e._s(e.permissionOption[t])+"\n              ")])})],2)])}),1)]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"唯一识别码",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.code))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"角色名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"描述",prop:"desc",align:"center"}}),e._v(" "),n("el-table-column",{attrs:{label:"状态",width:"200px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66"},on:{change:function(n){return e.handleModifyState(t.$index,t.row)}},model:{value:t.row.state,callback:function(n){e.$set(t.row,"state",n)},expression:"scope.row.state"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"success",icon:"el-icon-edit",size:"mini"},on:{click:function(n){return e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),"deleted"!=t.row.status?n("el-button",{directives:[{name:"permission",rawName:"v-permission",value:["delete"],expression:"['delete']"}],attrs:{icon:"el-icon-delete",size:"mini",type:"danger",disabled:"admin"===t.row.username},on:{click:function(n){return e.handleDelete(t.row,"deleted")}}},[e._v("删除\n        ")]):e._e()]}}])})],1),e._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page_no,limit:e.listQuery.page_size},on:{"update:page":function(t){return e.$set(e.listQuery,"page_no",t)},"update:limit":function(t){return e.$set(e.listQuery,"page_size",t)},pagination:e.getList}}),e._v(" "),n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"userForm",attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"110px"}},[n("el-form-item",{attrs:{label:"唯一识别码：",prop:"code"}},[n("el-input",{attrs:{disabled:"create"!==e.dialogStatus},model:{value:e.temp.code,callback:function(t){e.$set(e.temp,"code",t)},expression:"temp.code"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"角色名称：",prop:"name"}},[n("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"状态：",prop:"state"}},[n("el-switch",{attrs:{"active-color":"#13ce66"},model:{value:e.temp.state,callback:function(t){e.$set(e.temp,"state",t)},expression:"temp.state"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"描述：",prop:"desc"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.temp.desc,callback:function(t){e.$set(e.temp,"desc",t)},expression:"temp.desc"}})],1),e._v(" "),n("hr",{staticClass:"el-divider"}),e._v(" "),n("el-form-item",{attrs:{label:"拥有权限：",prop:"permission"}},e._l(e.temp.permissions,function(t,i){return n("el-form-item",{key:i,attrs:{label:t.name+"："}},[n("el-checkbox",{attrs:{indeterminate:t.indeterminate},on:{change:function(n){return e.onChangeCheckAll(n,t)}},model:{value:t.checkedAll,callback:function(n){e.$set(t,"checkedAll",n)},expression:"permission.checkedAll"}},[e._v("全选")]),e._v(" "),n("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.selected,callback:function(n){e.$set(t,"selected",n)},expression:"permission.selected"}},e._l(t.actionsOptions,function(i){return n("el-checkbox",{key:i,attrs:{label:i,name:"type"},on:{change:function(n){return e.onChangeCheck(t)}}},[e._v("\n              "+e._s(e.permissionOption[i])+"\n            ")])}),1)],1)}),1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){"create"===e.dialogStatus?e.submit():e.updateData()}}},[e._v("确认")])],1)],1)],1)},a=[],s=(n("ac4d"),n("8a81"),n("ac6a"),n("7514"),n("7f7f"),n("96cf"),n("3b8d")),o=n("8593"),l=n("6724"),r=n("333d"),c={name:"Role",components:{Pagination:r["a"]},directives:{waves:l["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]}},data:function(){return{permissionOption:this.$store.getters.buttons,tableKey:0,list:[],permissionList:[],total:0,listLoading:!0,listQuery:{page_no:1,page_size:10},temp:{code:"",name:"",desc:"",state:!0,permissions:[]},tempCopy:null,dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"添加"},rules:{code:[{required:!0,trigger:"blur",message:"识别码不能为空"}],name:[{required:!0,trigger:"blur",message:"角色名称不能为空"}]}}},created:function(){this.tempCopy=Object.assign({},this.temp),this.getList(),this.getPermission()},methods:{getPermission:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(o["f"])({page_no:1,page_size:50});case 2:t=e.sent,n=t.data.items.map(function(e){return{checkedAll:!1,selected:[],indeterminate:!1,code:e.code,name:e.name,state:e.state,actionsOptions:e.permission}}).filter(function(e){return e.state}),this.permissionList=JSON.parse(JSON.stringify(n)),this.$set(this.temp,"permissions",n);case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e?t.actionsOptions:[],indeterminate:!1,checkedAll:e})},getList:function(){var e=this;this.listLoading=!0,Object(o["g"])(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page_no=1,this.getList()},handleModifyState:function(e,t){var n=this;Object(o["o"])({_id:t._id,state:t.state}).then(function(e){n.$message({message:"操作成功",type:"success"})})},resetForm:function(e){if(void 0===this.$refs[e])return!1;this.$refs[e].resetFields(),this.temp=Object.assign({},this.tempCopy),this.$set(this.temp,"permissions",this.permissionList)},handleAdd:function(){var e=this;this.resetForm("userForm"),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["userForm"].clearValidate()})},submit:function(){var e=this;this.$refs["userForm"].validate(function(t){t&&Object(o["c"])(e.temp).then(function(t){e.list.push(t.data),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.dialogStatus="update",this.temp=Object.assign({},e);var n=this.permissionList.map(function(t){var n=JSON.parse(JSON.stringify(t)),i=e.permissions.find(function(e){return e.code===t.code});return i&&(n.selected=i.selected),n.indeterminate=!!n.selected.length&&n.selected.length<n.actionsOptions.length,n.checkedAll=n.selected.length===n.actionsOptions.length,n});this.$set(this.temp,"permissions",n),this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["userForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["userForm"].validate(function(t){t&&Object(o["o"])(e.temp).then(function(){var t=!0,n=!1,i=void 0;try{for(var a,s=e.list[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var o=a.value;if(o._id===e.temp._id){var l=e.list.indexOf(o);e.list.splice(l,1,e.temp);break}}}catch(r){n=!0,i=r}finally{try{t||null==s.return||s.return()}finally{if(n)throw i}}e.dialogFormVisible=!1,e.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})})},handleDelete:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o["k"])({_id:e._id}).then(function(){t.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var n=t.list.indexOf(e);t.list.splice(n,1)})})}}},u=c,d=n("2877"),p=Object(d["a"])(u,i,a,!1,null,null,null);t["default"]=p.exports}}]);