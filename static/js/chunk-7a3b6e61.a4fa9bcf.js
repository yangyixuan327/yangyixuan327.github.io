(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a3b6e61"],{2018:function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return u}));var s=n("2fff");function a(){return Object(s["a"])({url:"/admin/structure/examination",method:"get",params:null})}function r(t){return Object(s["a"])({url:"/admin/structure/examination",method:"put",params:t})}function i(t,e){return Object(s["a"])({url:"/admin/structure/examination/"+t,method:"post",data:e})}function o(t){return Object(s["a"])({url:"/admin/structure/examination",method:"delete",params:t})}function c(t){return Object(s["a"])({url:"/admin/test/question/searchByTestOption",method:"get",params:{testOptionId:t}})}function l(t,e){return Object(s["a"])({url:"/admin/test/paper/"+t+"/addQues",method:"put",data:e})}function u(t){return Object(s["a"])({url:"/admin/test/question/search",method:"post",data:t})}},3590:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[t._m(0),n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-col",{attrs:{span:6}},[n("el-dropdown",{staticStyle:{"margin-bottom":"8px"},on:{command:t.handleCommand}},[n("el-button",{attrs:{type:"primary"}},[t._v(" "+t._s(t.dropdownTitle)),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"all"}},[t._v("全部")]),n("el-dropdown-item",{attrs:{command:"select"}},[t._v("选择题")]),n("el-dropdown-item",{attrs:{command:"judge"}},[t._v("判断题")]),n("el-dropdown-item",{attrs:{command:"qa"}},[t._v("问答题")])],1)],1)],1),n("el-col",{attrs:{span:6,offset:12}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:16}},[n("el-input",{model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),n("el-col",{attrs:{span:2}},[n("el-button",{attrs:{type:"primary"},on:{click:t.onSearchClicked}},[t._v("搜索")])],1)],1)],1)],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",prop:"created_at",label:"勾选",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-checkbox",{model:{value:e.row.selected,callback:function(n){t.$set(e.row,"selected",n)},expression:"scope.row.selected"}})]}}])}),n("el-table-column",{attrs:{align:"center",label:"ID",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.quesId)+" ")]}}])}),n("el-table-column",{attrs:{label:"题型",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.type)+" ")]}}])}),n("el-table-column",{attrs:{label:"题目"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.descrip)+" ")]}}])}),n("el-table-column",{attrs:{label:"标签",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.tag)+" ")]}}])}),n("el-table-column",{attrs:{label:"分数",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.score)+" ")]}}])}),n("el-table-column",{attrs:{label:"答案",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.answer))])]}}])})],1),n("div",{staticStyle:{"margin-top":"30px","margin-bottom":"20px"},attrs:{align:"center"}},[n("el-button",{attrs:{type:"primary"},on:{click:t.onSaveClicked}},[t._v("保存配置")])],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"0 auto","text-align":"center",height:"80px"}},[n("span",{staticStyle:{"font-size":"40px"}},[n("b",[t._v("配置试卷题目")])])])}],r=(n("d3b7"),n("90bb")),i=n("2018");function o(t){return new Promise((function(e){return setTimeout(e,t)}))}var c={data:function(){return{list:[],listLoading:!1,paperId:-1,searchText:"",dropdownTitle:"选择病例类别",command:"",quesListIsSelected:[]}},created:function(){var t=this;this.paperId=this.$route.query.paperId,this.fetchData(),o(200).then((function(){t.handleCommand("all")}))},mounted:function(){window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",this.back,!1))},destroyed:function(){window.removeEventListener("popstate",this.back,!1)},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(r["d"])().then((function(e){for(var n=e.data.responseMap.result,s=0;s<n.length;s++)t.quesListIsSelected.push({quesId:n[s].quesId,selected:!1}),t.list.push({quesId:n[s].quesId,type:n[s].type,tag:n[s].tag,descrip:n[s].descrip,score:n[s].score,answer:n[s].answer,selected:!1});t.listLoading=!1})),o(200).then((function(){Object(i["g"])(t.paperId).then((function(e){for(var n=e.data.responseMap.result,s=0;s<n.length;s++)for(var a=0;a<t.list.length;a++)n[s].quesId===t.list[a].quesId&&(t.quesListIsSelected[a].selected=!0,t.list[a].selected=!0)}))}))},back:function(){var t=this;this.$confirm("修改尚未保存，直接退出页面将不会作任何修改！是否确认退出？","注意",{confirmButtonText:"保存并退出",cancelButtonText:"取消",distinguishCancelAndClose:!0,center:!0}).then((function(){for(var e=[],n=0;n<t.list.length;n++)!0===t.list[n].selected&&e.push(t.list[n].quesId);Object(i["b"])(t.paperId,e).then((function(e){t.$message({type:"success",message:"保存成功!"}),t.$router.push("/test_manage/paper_manage")}))})).catch((function(){window.history&&window.history.pushState&&(history.pushState(null,null,document.URL),window.addEventListener("popstate",t.back,!1))}))},onSaveClicked:function(){var t=this;this.$confirm("确认保存试卷配置？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){for(var e=[],n=0;n<t.list.length;n++)!0===t.list[n].selected&&e.push(t.list[n].quesId);Object(i["b"])(t.paperId,e).then((function(e){t.$message({type:"success",message:"保存成功!"}),t.$router.push("/test_manage/paper_manage")}))})).catch((function(){t.$message({type:"info",message:"已取消保存"})}))},setSelectedList:function(){for(var t=0;t<this.list.length;t++)for(var e=0;e<this.quesListIsSelected.length;e++)this.quesListIsSelected[e].quesId===this.list[t].quesId&&(this.quesListIsSelected[e].selected=this.list[t].selected)},onSearchClicked:function(){if("all"===this.command&&""!==this.searchText){var t={search:this.searchText};this.setSelectedList(),this.unionSearch(t),this.setIfSelected()}else if("all"!==this.command&&""!==this.searchText){var e={type:this.command,search:this.searchText};this.setSelectedList(),this.unionSearch(e),this.setIfSelected()}else if("all"!==this.command&&""===this.searchText){var n={type:this.command};this.setSelectedList(),this.unionSearch(n),this.setIfSelected()}},unionSearch:function(t){var e=this;Object(i["e"])(t).then((function(t){var n=t.data.responseMap.result;e.list=[];for(var s=0;s<n.length;s++)e.list.push({quesId:n[s].quesId,type:n[s].type,tag:n[s].tag,descrip:n[s].descrip,score:n[s].score,answer:n[s].answer,selected:!1})}))},setParamsAndUnionSearch:function(t){if(""===this.searchText){var e={type:t};console.log(e),this.unionSearch(e)}else{var n={type:t,search:this.searchText};this.unionSearch(n)}},setIfSelected:function(){var t=this;o(200).then((function(){for(var e=0;e<t.list.length;e++)for(var n=0;n<t.quesListIsSelected.length;n++)t.quesListIsSelected[n].quesId===t.list[e].quesId&&(t.list[e].selected=t.quesListIsSelected[n].selected)}))},handleCommand:function(t){var e=this;this.command=t,this.setSelectedList(),"select"===t?(this.dropdownTitle="选择题",this.setParamsAndUnionSearch(t),this.setIfSelected()):"judge"===t?(this.dropdownTitle="判断题",this.setParamsAndUnionSearch(t),this.setIfSelected()):"qa"===t?(this.dropdownTitle="问答题",this.setParamsAndUnionSearch(t),this.setIfSelected()):"all"===t&&(this.dropdownTitle="全部",Object(r["d"])().then((function(t){var n=t.data.responseMap.result;e.list=[];for(var s=0;s<n.length;s++)e.list.push({quesId:n[s].quesId,type:n[s].type,tag:n[s].tag,descrip:n[s].descrip,score:n[s].score,answer:n[s].answer,selected:!1})})),this.setIfSelected())}}},l=c,u=n("2877"),d=Object(u["a"])(l,s,a,!1,null,null,null);e["default"]=d.exports},"90bb":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return c})),n.d(e,"e",(function(){return l}));var s=n("b775"),a=n("2fff");function r(){return Object(a["a"])({url:"/admin/test/question",method:"get",params:null})}function i(t,e){return Object(a["a"])({url:"/admin/test/question/"+t,method:"post",data:e})}function o(t){return Object(a["a"])({url:"admin/test/question",method:"put",data:t})}function c(t){return Object(a["a"])({url:"/admin/test/question",method:"delete",params:t})}function l(t){if(null!=t.changeMode)return t.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:t})}}}]);