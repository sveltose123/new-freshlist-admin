(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[144],{2148:function(e,a,t){"use strict";t.r(a),t.d(a,"AddSubCategory",(function(){return j}));var n=t(45),s=t(11),r=t(12),l=t(14),o=t(13),c=t(1),i=t.n(c),u=t(815),d=t(813),m=t(814),p=t(194),f=t(818),b=t(827),g=t(828),h=t(824),v=t(805),y=t(837),E=t(21),O=t(822),j=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",r.state.name),a.append("sortorder",r.state.sortorder),a.append("desc",r.state.desc),a.append("status",r.state.status),null!==r.state.selectedFile&&a.append("brand_img",r.state.selectedFile,r.state.selectedName),O.a.post("/addbrand",a).then((function(e){console.log(e),r.props.history.push("/app/freshlist/subcategory/subcategoryList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add SubCategory")),i.a.createElement(m.a,null,i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return E.a.push("/app/freshlist/subcategory/subcategoryListt")}},"Back"))),i.a.createElement(f.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(g.a,null,"SubCategory Name"),i.a.createElement(h.a,{type:"text",placeholder:"Customer Name",name:"name",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Priority"),i.a.createElement(h.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(g.a,null,"Category"),i.a.createElement(v.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},i.a.createElement("option",null,"---Select Product---"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3"))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(y.a,null,i.a.createElement(g.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))))),i.a.createElement(d.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add SubCategory"))))))}}]),t}(c.Component);a.default=j},822:function(e,a,t){"use strict";var n=t(44),s=t.n(n).a.create({baseURL:"http://35.154.86.59/api/admin"});a.a=s},824:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),o=t(1),c=t.n(o),i=t(2),u=t.n(i),d=t(5),m=t.n(d),p=t(4),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,g=e.innerRef,h=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var j=Object(p.mapToCssModules)(m()(a,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||u&&"function"===typeof u)&&(h.type=r),h.children&&!b&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(E,Object(n.a)({},h,{ref:g,className:j,"aria-invalid":i}))},a}(c.a.Component);g.propTypes=b,g.defaultProps={type:"text"},a.a=g},827:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(17),l=t(19),o=t(1),c=t.n(o),i=t(2),u=t.n(i),d=t(5),m=t.n(d),p=t(4),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},a}(o.Component);g.propTypes=b,g.defaultProps={tag:"form"},a.a=g},828:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),o=t(2),c=t.n(o),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],p=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:p,order:p,offset:p})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,p=e.size,f=e.for,b=Object(s.a)(e,m),g=[];o.forEach((function(a,n){var s=e[a];if(delete b[a],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var o,c=l?"-":"-"+a+"-";r=h(l,a,s.size),g.push(Object(d.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),t)}else r=h(l,a,s),g.push(r)}}));var v=Object(d.mapToCssModules)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!p&&"col-form-label-"+p,g,!!g.length&&"col-form-label"),t);return l.a.createElement(c,Object(n.a)({htmlFor:f},b,{className:v}))};v.propTypes=b,v.defaultProps=g,a.a=v},837:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),l=t.n(r),o=t(2),c=t.n(o),i=t(5),u=t.n(i),d=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,o=e.disabled,c=e.check,i=e.inline,p=e.tag,f=Object(s.a)(e,m),b=Object(d.mapToCssModules)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===p&&(f.disabled=o),l.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=144.7e99485f.chunk.js.map