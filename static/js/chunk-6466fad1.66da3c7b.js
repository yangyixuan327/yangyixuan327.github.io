(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6466fad1"],{a434:function(e,t,o){"use strict";var i=o("23e7"),a=o("23cb"),s=o("a691"),n=o("50c4"),l=o("7b0b"),c=o("65f0"),r=o("8418"),m=o("1dde"),d=o("ae40"),u=m("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,p=Math.min,g=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!h},{splice:function(e,t){var o,i,m,d,u,h,D=l(this),b=n(D.length),F=a(e,b),x=arguments.length;if(0===x?o=i=0:1===x?(o=0,i=b-F):(o=x-2,i=p(f(s(t),0),b-F)),b+o-i>g)throw TypeError(v);for(m=c(D,i),d=0;d<i;d++)u=F+d,u in D&&r(m,d,D[u]);if(m.length=i,o<i){for(d=F;d<b-i;d++)u=d+i,h=d+o,u in D?D[h]=D[u]:delete D[h];for(d=b;d>b-i+o;d--)delete D[d-1]}else if(o>i)for(d=b-i;d>F;d--)u=d+i-1,h=d+o-1,u in D?D[h]=D[u]:delete D[h];for(d=0;d<o;d++)D[d+F]=arguments[d+2];return D.length=b-i+o,m}})},c087:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-dropdown",{on:{command:e.handleCommand},scopedSlots:e._u([{key:"dropdown",fn:function(){return[o("el-dropdown-menu",[o("el-dropdown-item",{attrs:{command:"section"}},[e._v("科室管理")]),o("el-dropdown-item",{attrs:{command:"medicine"}},[e._v("药品管理")]),o("el-dropdown-item",{attrs:{command:"fee"}},[e._v("收费管理")]),o("el-dropdown-item",{attrs:{command:"examination"}},[e._v("化验项目管理")]),o("el-dropdown-item",{attrs:{command:"vaccine"}},[e._v("疫苗管理")]),o("el-dropdown-item",{attrs:{command:"hospitalize"}},[e._v("住院管理")])],1)]},proxy:!0}])},[o("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.tag)),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),o("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",align:"right"},on:{click:e.onCreateNewClicked}},[e._v("新建"),o("i",{staticClass:"el-icon-plus el-icon--right"})])],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:e.column1},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),o("el-table-column",{attrs:{label:e.column2},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.name)+" ")]}}])}),o("el-table-column",{attrs:{label:e.column3,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.description1))])]}}])}),"科室管理"===e.tag||"收费管理"===e.tag||"住院管理"===e.tag?o("el-table-column",{attrs:{label:e.column4,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.description2))])]}}],null,!1,2216385586)}):e._e(),"科室管理"===e.tag||"住院管理"===e.tag?o("el-table-column",{attrs:{label:e.column5,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.description3))])]}}],null,!1,768603187)}):e._e(),"科室管理"===e.tag?o("el-table-column",{attrs:{label:e.column6,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.onImageClicked(t.$index,t.row.id)}}},[e._v("图片")])]}}],null,!1,964179809)}):e._e(),o("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button-group",[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:function(o){return e.onEditClicked(t.row.id,t.$index)}}}),o("el-button",{attrs:{type:"danger",icon:"el-icon-delete"},on:{click:function(o){return e.onDeleteClicked(t.row,t.$index)}}})],1)]}}])})],1),o("el-dialog",{attrs:{visible:e.addSectionDialog.visible,title:e.addSectionDialog.title,width:"50%",center:""},on:{close:function(t){e.addSectionDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.addSectionDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.addSectionDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.addSectionForm}},[o("el-form-item",{attrs:{label:"科室名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.addSectionForm.secName,callback:function(t){e.$set(e.addSectionForm,"secName",t)},expression:"addSectionForm.secName"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.sectionWordsDialog.visible,title:e.sectionWordsDialog.title,width:"50%",center:""},on:{close:function(t){e.sectionWordsDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.sectionWordsDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.sectionWordsDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.secForm}},[o("el-form-item",{attrs:{label:"科室名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.secForm.sectionName,callback:function(t){e.$set(e.secForm,"sectionName",t)},expression:"secForm.sectionName"}})],1),o("el-form-item",{attrs:{label:"前台功能描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.secForm.recDesc,callback:function(t){e.$set(e.secForm,"recDesc",t)},expression:"secForm.recDesc"}})],1),o("el-form-item",{attrs:{label:"医助功能描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.secForm.assissDesc,callback:function(t){e.$set(e.secForm,"assissDesc",t)},expression:"secForm.assissDesc"}})],1),o("el-form-item",{attrs:{label:"医师功能描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.secForm.docDesc,callback:function(t){e.$set(e.secForm,"docDesc",t)},expression:"secForm.docDesc"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.sectionImageDialog.visible,title:e.sectionImageDialog.title,width:"50%",center:"","destroy-on-close":""},on:{close:function(t){e.sectionImageDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.sectionImageDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sectionImageDialog.visible=!1}}},[e._v("确 定")])],1)]},proxy:!0}])},[o("div",{staticClass:"case-image",attrs:{visible:e.sectionImageDialog.contentVisible}},e._l(e.imageUrls,(function(t){return o("el-image",{key:t,attrs:{src:t,lazy:""},scopedSlots:e._u([{key:"error",fn:function(){return[o("div",{staticClass:"image-slot"},[o("i",{staticClass:"el-icon-picture-outline"})])]},proxy:!0}],null,!0)})})),1),o("el-upload",{staticClass:"media-upload",attrs:{action:e.postUrl,name:e.uploadParamName,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.handleSuccess,multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList},scopedSlots:e._u([{key:"tip",fn:function(){return[o("div",{staticClass:"el-upload__tip"},[e._v(e._s(e.uploadTip))])]},proxy:!0}])},[o("el-button",{staticStyle:{"margin-left":"auto","margin-top":"40px"},attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1)],1),o("el-dialog",{attrs:{visible:e.medicineDialog.visible,title:e.medicineDialog.title,width:"50%",center:""},on:{close:function(t){e.medicineDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.medicineDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.medicineDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.medForm}},[o("el-form-item",{attrs:{label:"药品名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.medForm.medName,callback:function(t){e.$set(e.medForm,"medName",t)},expression:"medForm.medName"}})],1),o("el-form-item",{attrs:{label:"功能描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.medForm.medDesc,callback:function(t){e.$set(e.medForm,"medDesc",t)},expression:"medForm.medDesc"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.feeDialog.visible,title:e.feeDialog.title,width:"50%",center:""},on:{close:function(t){e.feeDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.feeDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.feeDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.feeForm}},[o("el-form-item",{attrs:{label:"收费项目名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.feeForm.feeName,callback:function(t){e.$set(e.feeForm,"feeName",t)},expression:"feeForm.feeName"}})],1),o("el-form-item",{attrs:{label:"价格","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.feeForm.price,callback:function(t){e.$set(e.feeForm,"price",t)},expression:"feeForm.price"}})],1),o("el-form-item",{attrs:{label:"收费描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.feeForm.feeDesc,callback:function(t){e.$set(e.feeForm,"feeDesc",t)},expression:"feeForm.feeDesc"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.examDialog.visible,title:e.examDialog.title,width:"50%",center:""},on:{close:function(t){e.examDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.examDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.examDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.examForm}},[o("el-form-item",{attrs:{label:"化验项目名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.examForm.examName,callback:function(t){e.$set(e.examForm,"examName",t)},expression:"examForm.examName"}})],1),o("el-form-item",{attrs:{label:"化验描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.examForm.examDesc,callback:function(t){e.$set(e.examForm,"examDesc",t)},expression:"examForm.examDesc"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.vacDialog.visible,title:e.vacDialog.title,width:"50%",center:""},on:{close:function(t){e.vacDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.vacDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.vacDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.vacForm}},[o("el-form-item",{attrs:{label:"疫苗名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.vacForm.vacName,callback:function(t){e.$set(e.vacForm,"vacName",t)},expression:"vacForm.vacName"}})],1),o("el-form-item",{attrs:{label:"疫苗描述","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.vacForm.vacDesc,callback:function(t){e.$set(e.vacForm,"vacDesc",t)},expression:"vacForm.vacDesc"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.addHosDialog.visible,title:e.addHosDialog.title,width:"50%",center:""},on:{close:function(t){e.addHosDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.addHosDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.addHosDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.addHosForm}},[o("el-form-item",{attrs:{label:"动物名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.addHosForm.hosAnimalName,callback:function(t){e.$set(e.addHosForm,"hosAnimalName",t)},expression:"addHosForm.hosAnimalName"}})],1),o("el-form-item",{attrs:{label:"病名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.addHosForm.disease,callback:function(t){e.$set(e.addHosForm,"disease",t)},expression:"addHosForm.disease"}})],1),o("el-form-item",{attrs:{label:"入院日期","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.addHosForm.inDate,callback:function(t){e.$set(e.addHosForm,"inDate",t)},expression:"addHosForm.inDate"}})],1)],1)],1),o("el-dialog",{attrs:{visible:e.hosDialog.visible,title:e.hosDialog.title,width:"50%",center:""},on:{close:function(t){e.hosDialog.visible=!1}},scopedSlots:e._u([{key:"footer",fn:function(){return[o("span",{staticClass:"dialog-footer"},[o("el-button",{on:{click:function(t){e.hosDialog.visible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.hosDialogConfirmOnClicked}},[e._v("确 定")])],1)]},proxy:!0}])},[o("el-form",{attrs:{model:e.hosForm}},[o("el-form-item",{attrs:{label:"动物名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.hosForm.hosAnimalName,callback:function(t){e.$set(e.hosForm,"hosAnimalName",t)},expression:"hosForm.hosAnimalName"}})],1),o("el-form-item",{attrs:{label:"病名","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.hosForm.disease,callback:function(t){e.$set(e.hosForm,"disease",t)},expression:"hosForm.disease"}})],1),o("el-form-item",{attrs:{label:"入院日期","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.hosForm.inDate,callback:function(t){e.$set(e.hosForm,"inDate",t)},expression:"hosForm.inDate"}})],1),o("el-form-item",{attrs:{label:"出院日期","label-width":"120px"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.hosForm.outDate,callback:function(t){e.$set(e.hosForm,"outDate",t)},expression:"hosForm.outDate"}})],1)],1)],1)],1)},a=[],s=(o("b0c0"),o("a434"),o("99af"),o("b775")),n=o("2fff");function l(e){return"section"===e?Object(n["a"])({url:"/admin/structure/section",method:"get"}):"medicine"===e?Object(n["a"])({url:"/admin/structure/medicine",method:"get"}):"fee"===e?Object(n["a"])({url:"/admin/structure/fee",method:"get"}):"examination"===e?Object(n["a"])({url:"/admin/structure/examination",method:"get"}):"vaccine"===e?Object(n["a"])({url:"/admin/structure/vaccine",method:"get"}):"hospitalize"===e?Object(n["a"])({url:"/admin/structure/hospitalize",method:"get"}):void 0}function c(e){return Object(n["a"])({url:"/admin/structure/section/"+e,method:"get"})}function r(e){return Object(n["a"])({url:"/admin/structure/section",method:"delete",params:e})}function m(e){return Object(n["a"])({url:"/admin/structure/medicine",method:"delete",params:e})}function d(e){return Object(n["a"])({url:"/admin/structure/fee",method:"delete",params:e})}function u(e){return Object(n["a"])({url:"/admin/structure/examination",method:"delete",params:e})}function h(e){return Object(n["a"])({url:"/admin/structure/vaccine",method:"delete",params:e})}function f(e){return Object(n["a"])({url:"/admin/structure/hospitalize",method:"delete",params:e})}function p(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function g(e,t){return Object(n["a"])({url:"/admin/structure/section/"+e,method:"post",data:t})}function v(e){return Object(n["a"])({url:"/admin/structure/section",method:"put",params:e})}function D(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function b(e,t){return Object(n["a"])({url:"/admin/structure/medicine/"+e,method:"post",data:t})}function F(e,t){return Object(n["a"])({url:"/admin/structure/medicine",method:"put",params:{medName:e,medDescrip:t}})}function x(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function I(e,t){return Object(n["a"])({url:"/admin/structure/fee/"+e,method:"post",data:t})}function N(e,t,o){return Object(n["a"])({url:"/admin/structure/fee",method:"put",params:{feeName:e,feePrice:t,feeDescrip:o}})}function k(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function w(e,t){return Object(n["a"])({url:"/admin/structure/examination/"+e,method:"post",data:t})}function y(e,t){return Object(n["a"])({url:"/admin/structure/examination",method:"put",params:{examName:e,examDescrip:t}})}function M(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function _(e,t){return Object(n["a"])({url:"/admin/structure/vaccine/"+e,method:"post",data:t})}function C(e,t){return Object(n["a"])({url:"/admin/structure/vaccine",method:"put",params:{vacName:e,vacDescrip:t}})}function O(e){if(null!=e.changeMode)return e.changeMode,Object(s["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function S(e,t){return Object(n["a"])({url:"/admin/structure/hospitalize/"+e,method:"post",data:t})}function j(e,t,o){return Object(n["a"])({url:"/admin/structure/hospitalize",method:"put",params:{hosAnimalName:e,disease:t,inDate:o}})}function H(e){var t=new Date(e),o=t.getFullYear(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,a=t.getDate()<10?"0"+t.getDate():t.getDate(),s=t.getHours()<10?"0"+t.getHours():t.getHours(),n=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),l=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds();return o+"-"+i+"-"+a+" "+s+":"+n+":"+l}var $={filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!1,column1:"column1",column2:"column2",column3:"column3",column4:"column4",column5:"column5",column6:"column6",tag:"选择结构",addSectionDialog:{visible:!1,title:""},addSectionForm:{secName:""},sectionWordsDialog:{visible:!1,title:"",changeMode:"add"},secForm:{sectionId:-1,sectionIndex:-1,sectionName:"",recDesc:"",assissDesc:"",docDesc:"",sectionImageUrl:""},sectionImageDialog:{visible:!1,contentVisible:!0,title:""},imageUrls:[],postUrl:"",uploadParamName:"image",uploadTip:"",fileList:[],medicineDialog:{visible:!1,title:"",changeMode:"add"},medForm:{medId:-1,medIndex:-1,medName:"",medDesc:""},feeDialog:{visible:!1,title:"",changeMode:"add"},feeForm:{feeId:-1,feeIndex:-1,feeName:"",price:10,feeDesc:""},examDialog:{visible:!1,title:"",changeMode:"add"},examForm:{examId:-1,examIndex:-1,examName:"",examDesc:""},vacDialog:{visible:!1,title:"",changeMode:"add"},vacForm:{vacId:-1,vacIndex:-1,vacName:"",vacDesc:""},addHosForm:{hosAnimalName:"",disease:"",inDate:""},addHosDialog:{visible:!1,title:""},hosDialog:{visible:!1,title:"",changeMode:"add"},hosForm:{hosId:-1,hosIndex:-1,hosAnimalName:"",disease:"",inDate:"",outDate:""}}},created:function(){this.handleCommand("section")},methods:{onCreateNewClicked:function(){"科室管理"===this.tag?(this.addSectionDialog.visible=!0,this.addSectionDialog.title="创建科室",this.addSectionForm.secName=""):"药品管理"===this.tag?(this.medicineDialog.visible=!0,this.medicineDialog.title="创建药品",this.medForm.medName="",this.medForm.medDesc="",this.medicineDialog.changeMode="add"):"收费管理"===this.tag?(this.feeDialog.visible=!0,this.feeDialog.title="创建收费项目",this.feeForm.feeName="",this.feeForm.price="",this.feeForm.feeDesc="",this.feeDialog.changeMode="add"):"化验项目管理"===this.tag?(this.examDialog.visible=!0,this.examDialog.title="创建化验项目",this.examForm.examName="",this.examForm.examDesc="",this.examDialog.changeMode="add"):"疫苗管理"===this.tag?(this.vacDialog.visible=!0,this.vacDialog.title="创建疫苗",this.vacForm.vacName="",this.vacForm.vacDesc="",this.vacDialog.changeMode="add"):"住院管理"===this.tag&&(this.addHosDialog.visible=!0,this.addHosDialog.title="创建住院",this.addHosForm.hosAnimalName="",this.addHosForm.disease="",this.addHosForm.inDate="")},onEditClicked:function(e,t){"科室管理"===this.tag?(this.sectionWordsDialog.title="编辑科室",this.secForm.sectionId=e,this.secForm.sectionIndex=t,this.secForm.sectionName=this.list[t].name,this.secForm.recDesc=this.list[t].description1,this.secForm.assissDesc=this.list[t].description2,this.secForm.docDesc=this.list[t].description3,this.secForm.sectionImageUrl=this.list[t].description4,this.sectionWordsDialog.changeMode="update",this.sectionWordsDialog.visible=!0):"药品管理"===this.tag?(this.medicineDialog.visible=!0,this.medicineDialog.title="编辑药品",this.medForm.medId=e,this.medForm.medIndex=t,this.medForm.medName=this.list[t].name,this.medForm.medDesc=this.list[t].description1,this.medicineDialog.changeMode="update"):"收费管理"===this.tag?(this.feeDialog.visible=!0,this.feeDialog.title="编辑收费项目",this.feeForm.feeId=e,this.feeForm.feeIndex=t,this.feeForm.feeName=this.list[t].name,this.feeForm.price=this.list[t].description1,this.feeForm.feeDesc=this.list[t].description2,this.feeDialog.changeMode="update"):"化验项目管理"===this.tag?(this.examDialog.visible=!0,this.examDialog.title="编辑药品",this.examForm.examId=e,this.examForm.examIndex=t,this.examForm.examName=this.list[t].name,this.examForm.examDesc=this.list[t].description1,this.examDialog.changeMode="update"):"疫苗管理"===this.tag?(this.vacDialog.visible=!0,this.vacDialog.title="编辑疫苗",this.vacForm.vacId=e,this.vacForm.vacIndex=t,this.vacForm.vacName=this.list[t].name,this.vacForm.vacDesc=this.list[t].description1,this.vacDialog.changeMode="update"):"住院管理"===this.tag&&(this.hosDialog.visible=!0,this.hosDialog.title="编辑住院信息",this.hosForm.hosId=e,this.hosForm.hosIndex=t,this.hosForm.hosAnimalName=this.list[t].name,this.hosForm.disease=this.list[t].description1,this.hosForm.inDate=this.list[t].description2,this.hosForm.outDate=this.list[t].description3,this.hosDialog.changeMode="update")},onDeleteClicked:function(e,t){var o=this;console.log(t),this.$confirm("此操作将永久删除此记录，是否继续？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){if("科室管理"===o.tag){var i={sectionId:e.id};r(i).then((function(e){console.log(e),console.log(i),o.list.splice(t,1)}))}else if("药品管理"===o.tag){var a={medId:e.id};m(a).then((function(e){console.log(e),console.log(a),o.list.splice(t,1)}))}else if("收费管理"===o.tag){var s={feeId:e.id};d(s).then((function(e){console.log(e),console.log(s),o.list.splice(t,1)}))}else if("化验项目管理"===o.tag){var n={examId:e.id};u(n).then((function(e){console.log(e),console.log(n),o.list.splice(t,1)}))}else if("疫苗管理"===o.tag){var l={vacId:e.id};h(l).then((function(e){console.log(e),console.log(l),o.list.splice(t,1)}))}else if("住院管理"===o.tag){var c={hosId:e.id};f(c).then((function(e){console.log(e),console.log(c),o.list.splice(t,1)}))}o.$message({type:"success",message:"删除成功！"})})).catch((function(){o.$message({type:"info",message:"已取消删除"})}))},onImageClicked:function(e,t){var o=this;this.sectionImageDialog.visible=!0,this.sectionImageDialog.contentVisible=!0,this.sectionImageDialog.title="科室图片",this.uploadTip="上传图片",this.uploadParamName="image";var i="http://59.110.174.202:8080";this.postUrl=i+"/admin/structure/section/"+t+"/image",console.log(e+""+t),c(t).then((function(e){var t="";t="http://"+e.data.responseMap.result.sectionImageUrl,console.log(t),o.imageUrls=[t],console.log(e.data.responseMap.result)}))},addSectionDialogConfirmOnClicked:function(){var e=this,t={sectionName:this.addSectionForm.secName};v(t).then((function(o){console.log("created new section"+t.sectionName),console.log(o.data.responseMap.result),e.list.push({id:o.data.responseMap.result,name:t.sectionName,description1:"",description2:"",description3:"",description4:""})})),this.addSectionDialog.visible=!1},sectionWordsDialogConfirmOnClicked:function(){var e=this,t={sectionId:this.secForm.sectionId,sectionName:this.secForm.sectionName,recDescrip:this.secForm.recDesc,docDescrip:this.secForm.docDesc,assisDescrip:this.secForm.assissDesc,sectionImageUrl:this.secForm.sectionImageUrl,changeMode:this.sectionWordsDialog.changeMode};p(t).then((function(o){var i=e.secForm.sectionIndex,a=e.sectionWordsDialog.changeMode;if("update"===a&&null!=i&&i>=0){e.list[i].name=e.secForm.sectionName,e.list[i].description1=e.secForm.recDesc,e.list[i].description2=e.secForm.assissDesc,e.list[i].description3=e.secForm.docDesc,e.list[i].description4=e.secForm.sectionImageUrl;var s=t.sectionId,n={sectionId:e.secForm.sectionId,sectionName:e.secForm.sectionName,recDescrip:e.secForm.recDesc,docDescrip:e.secForm.docDesc,assisDescrip:e.secForm.assissDesc,sectionImageUrl:e.secForm.sectionImageUrl};console.log(n),g(s,n).then((function(e){console.log("updated section"+n)}))}e.sectionWordsDialog.visible=!1}))},medicineDialogConfirmOnClicked:function(){var e=this,t={medId:this.medForm.medId,medIndex:this.medForm.medIndex,medName:this.medForm.medName,medDesc:this.medForm.medDesc,changeMode:this.medicineDialog.changeMode};D(t).then((function(t){var o=e.medForm.medIndex,i=e.medicineDialog.changeMode,a=e.medForm.medId;if("update"===i){if(null!=o&&o>=0){var s={medId:e.medForm.medId,medName:e.medForm.medName,medDescrip:e.medForm.medDesc};b(a,s).then((function(e){console.log("updated medicine"+s)})),e.list[o].name=e.medForm.medName,e.list[o].description1=e.medForm.medDesc}}else if("add"===i){var n=e.medForm.medName,l=e.medForm.medDesc;console.log(n+l),F(n,l).then((function(t){console.log("created new medicine"+n+l),e.list.push({id:t.data.responseMap.result,name:n,description1:l})}))}e.medicineDialog.visible=!1}))},feeDialogConfirmOnClicked:function(){var e=this,t={feeId:this.feeForm.feeId,feeIndex:this.feeForm.feeIndex,feeName:this.feeForm.feeName,price:this.feeForm.price,feeDesc:this.feeForm.feeDesc,changeMode:this.medicineDialog.changeMode};x(t).then((function(t){var o=e.feeForm.feeIndex,i=e.feeDialog.changeMode,a=e.feeForm.feeId,s={feeId:e.feeForm.feeId,feeName:e.feeForm.feeName,feePrice:e.feeForm.price,feeDescrip:e.feeForm.feeDesc};if("update"===i)null!=o&&o>=0&&(e.list[o].name=e.feeForm.feeName,e.list[o].description1=e.feeForm.price,e.list[o].description2=e.feeForm.feeDesc,I(a,s).then((function(e){console.log("updated fee"+s)})));else if("add"===i){var n=e.feeForm.feeName,l=e.feeForm.price,c=e.feeForm.feeDesc;console.log(n+l+c),N(n,l,c).then((function(t){console.log("created new fee"+n+l+c),e.list.push({id:t.data.responseMap.result,name:n,description1:l,description2:c})}))}e.feeDialog.visible=!1}))},examDialogConfirmOnClicked:function(){var e=this,t={examId:this.examForm.examId,examIndex:this.examForm.examIndex,examName:this.examForm.examName,examDesc:this.examForm.examDesc,changeMode:this.examDialog.changeMode};k(t).then((function(t){var o=e.examForm.examIndex,i=e.examDialog.changeMode,a=e.examForm.examId,s={examId:e.examForm.examId,examName:e.examForm.examName,examDescrip:e.examForm.examDesc};if("update"===i)null!=o&&o>=0&&(e.list[o].name=e.examForm.examName,e.list[o].description1=e.examForm.examDesc,w(a,s).then((function(e){console.log("updated examination"+s)})));else if("add"===i){var n=e.examForm.examName,l=e.examForm.examDesc;y(n,l).then((function(t){console.log("created new exam"+n+l),e.list.push({id:t.data.responseMap.result,name:n,description1:l})}))}e.examDialog.visible=!1}))},vacDialogConfirmOnClicked:function(){var e=this,t={vacId:this.vacForm.vacId,vacIndex:this.vacForm.vacIndex,vacName:this.vacForm.vacName,vacDesc:this.vacForm.vacDesc,changeMode:this.vacDialog.changeMode};M(t).then((function(t){var o=e.vacForm.vacIndex,i=e.vacDialog.changeMode,a=e.vacForm.vacId,s={vacId:e.vacForm.vacId,vacName:e.vacForm.vacName,vacDescrip:e.vacForm.vacDesc};if("update"===i)null!=o&&o>=0&&(e.list[o].name=e.vacForm.vacName,e.list[o].description1=e.vacForm.vacDesc,_(a,s).then((function(e){console.log("updated vaccine"+s)})));else if("add"===i){var n=e.vacForm.vacName,l=e.vacForm.vacDesc;C(n,l).then((function(t){console.log("created new vaccine"+n+l),e.list.push({id:t.data.responseMap.result,name:n,description1:l})}))}e.vacDialog.visible=!1}))},addHosDialogConfirmOnClicked:function(){var e=this,t=this.addHosForm.hosAnimalName,o=this.addHosForm.disease,i=H(this.addHosForm.inDate);j(t,o,i).then((function(a){console.log("created new hospitalize"+t+o+i),e.list.push({id:a.data.responseMap.result,name:t,description1:o,description2:i,description3:""})})),this.addHosDialog.visible=!1},hosDialogConfirmOnClicked:function(){var e=this,t={hosId:this.hosForm.hosId,hosIndex:this.hosForm.hosIndex,hosAnimalName:this.hosForm.hosAnimalName,disease:this.hosForm.disease,inDate:this.hosForm.inDate,outDate:this.hosForm.outDate,changeMode:this.hosDialog.changeMode};O(t).then((function(t){var o=e.hosForm.hosIndex,i=e.hosDialog.changeMode,a=e.hosForm.hosId,s={hosId:e.hosForm.hosId,hosAnimalName:e.hosForm.hosAnimalName,disease:e.hosForm.disease,inDate:H(e.hosForm.inDate),outDate:H(e.hosForm.outDate)};console.log(s),"update"===i&&null!=o&&o>=0&&(e.list[o].name=e.hosForm.hosAnimalName,e.list[o].description1=e.hosForm.disease,e.list[o].description2=H(e.hosForm.inDate),e.list[o].description3=H(e.hosForm.outDate),S(a,s).then((function(e){console.log(s)}))),e.hosDialog.visible=!1}))},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},handleSuccess:function(e){var t=e.responseMap.result;null!==t?(t="http://"+t,console.log(t),this.videoUrl=t,this.imageUrls=[t]):(this.videoUrl="",this.imageUrls=[])},handleCommand:function(e){var t=this;"section"===e?(this.tag="科室管理",this.column1="科室ID",this.column2="科室名",this.column3="前台功能描述",this.column4="医助功能描述",this.column5="医师功能描述",this.column6="科室图片",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].sectionId,name:o[a].sectionName,description1:null!=o[a].recDescrip?o[a].recDescrip:"",description2:null!=o[a].assisDescrip?o[a].assisDescrip:"",description3:null!=o[a].docDescrip?o[a].docDescrip:"",description4:null!=o[a].sectionImageUrl?o[a].sectionImageUrl:""});t.list=i,console.log(t.list)}))):"medicine"===e?(this.tag="药品管理",this.column1="药品ID",this.column2="药品名",this.column3="功能描述",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].medId,name:o[a].medName,description1:o[a].medDescrip});t.list=i}))):"fee"===e?(this.tag="收费管理",this.column1="收费项目ID",this.column2="收费项目名",this.column3="价格",this.column4="收费描述",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].feeId,name:o[a].feeName,description1:o[a].feePrice,description2:o[a].feeDescrip});t.list=i}))):"examination"===e?(this.tag="化验项目管理",this.column1="化验项目ID",this.column2="化验项目名",this.column3="化验描述",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].examId,name:o[a].examName,description1:o[a].examDescrip});t.list=i}))):"vaccine"===e?(this.tag="疫苗管理",this.column1="疫苗ID",this.column2="疫苗名",this.column3="疫苗描述",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].vacId,name:o[a].vacName,description1:o[a].vacDescrip});t.list=i}))):"hospitalize"===e&&(this.tag="住院管理",this.column1="ID",this.column2="动物名字",this.column3="病名",this.column4="入院日期",this.column5="出院日期",l(e).then((function(e){var o=e.data.responseMap.result;console.log(o);for(var i=[],a=0;a<o.length;a++)i.push({id:o[a].hosId,name:o[a].hosAnimalName,description1:o[a].disease,description2:H(o[a].inDate),description3:H(o[a].outDate)});t.list=i})))}}},A=$,U=o("2877"),W=Object(U["a"])(A,i,a,!1,null,null,null);t["default"]=W.exports}}]);