(this["webpackJsonpstudent-management-system"]=this["webpackJsonpstudent-management-system"]||[]).push([[0],{125:function(e,t,n){e.exports=n(327)},130:function(e,t,n){},131:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){},324:function(e,t,n){},325:function(e,t,n){},326:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(121),i=n.n(l),o=(n(130),n(131),n(11)),c=n(38),u=n.n(c),m=n(15);n(134),n(72);var s=function(e){return r.a.createElement("div",{className:"buttons"},r.a.createElement("div",null,r.a.createElement(m.AwesomeButton,{type:"primary",size:"large",onPress:function(){return e.createHandler()}},"Add Student")),r.a.createElement("div",null,r.a.createElement(m.AwesomeButton,{type:"primary",size:"large",onPress:function(){return e.deleteHandler()}},"Delete Student")),r.a.createElement("div",null,r.a.createElement(m.AwesomeButton,{type:"primary",size:"large",onPress:function(){return e.updateHandler()}},"Update Student")))};n(135);var d=function(e){var t=e.showModal>0?"modal":"modalOff";return r.a.createElement("div",{className:t},1===e.showModal?r.a.createElement("div",{className:"modal1-wrapper-box"},r.a.createElement("div",{className:"button-close",onClick:function(){return e.deleteHandler()}},"+"),r.a.createElement("label",{for:"id"},"ID"),r.a.createElement("input",{name:"id",id:"id",type:"number",onChange:function(t){return e.setId(t.target.value)}}),r.a.createElement(m.AwesomeButton,{type:"secondary",size:"small",onPress:function(){return e.httpDeleteHandler()}},"Delete")):r.a.createElement("div",null),2===e.showModal?r.a.createElement("div",{className:"modal2-wrapper-box"},r.a.createElement("div",{className:"button-close",onClick:function(){return e.updateHandler()}},"+"),r.a.createElement("label",{for:"id"},"ID"),r.a.createElement("input",{name:"id",id:"id",type:"number",onChange:function(t){return e.setId(t.target.value)}}),r.a.createElement("label",{for:"firstName"},"First name"),r.a.createElement("input",{name:"firstName",id:"firstName",onChange:function(t){return e.setFirstName(t.target.value)}}),r.a.createElement("label",{for:"lastName"},"Last name"),r.a.createElement("input",{name:"lastName",id:"lastName",onChange:function(t){return e.setLastName(t.target.value)}}),r.a.createElement("label",{for:"semester"},"Semester"),r.a.createElement("input",{name:"semester",id:"semseter",type:"number",onChange:function(t){return e.setSemester(t.target.value)}}),r.a.createElement("label",{for:"faculty"},"Faculty"),r.a.createElement("input",{name:"faculty",id:"faculty",onChange:function(t){return e.setFaculty(t.target.value)}}),r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{name:"email",id:"email",onChange:function(t){return e.setEmail(t.target.value)}}),r.a.createElement(m.AwesomeButton,{type:"secondary",size:"small",onPress:function(){return e.httpPutHandler()}},"Update")):r.a.createElement("div",null),3===e.showModal?r.a.createElement("div",{className:"modal3-wrapper-box"},r.a.createElement("div",{className:"button-close",onClick:function(){return e.createHandler()}},"+"),r.a.createElement("label",{for:"firstName"},"First name"),r.a.createElement("input",{name:"firstName",id:"firstName",onChange:function(t){return e.setFirstName(t.target.value)}}),r.a.createElement("label",{for:"lastName"},"Last name"),r.a.createElement("input",{name:"lastName",id:"lastName",onChange:function(t){return e.setLastName(t.target.value)}}),r.a.createElement("label",{for:"semester"},"Semester"),r.a.createElement("input",{name:"semester",id:"semseter",type:"number",onChange:function(t){return e.setSemester(t.target.value)}}),r.a.createElement("label",{for:"faculty"},"Faculty"),r.a.createElement("input",{name:"faculty",id:"faculty",onChange:function(t){return e.setFaculty(t.target.value)}}),r.a.createElement("label",{for:"email"},"Email"),r.a.createElement("input",{name:"email",id:"email",onChange:function(t){return e.setEmail(t.target.value)}}),r.a.createElement(m.AwesomeButton,{type:"secondary",size:"small",onPress:function(){return e.httpPostHandler()}},"Add")):r.a.createElement("div",null))},f=n(10),E=n.n(f);n(321);var p=function(e){return r.a.createElement("div",{className:"table"},r.a.createElement(E.a,{data:e.items,plugins:[f.plugins.LocalPlugin]},r.a.createElement(f.RowDefinition,null,r.a.createElement(f.ColumnDefinition,{id:"id",title:"ID"}),r.a.createElement(f.ColumnDefinition,{id:"firstName",title:"First Name"}),r.a.createElement(f.ColumnDefinition,{id:"lastName",title:"Last Name"}),r.a.createElement(f.ColumnDefinition,{id:"semester",title:"Semester"}),r.a.createElement(f.ColumnDefinition,{id:"faculty",title:"Faculty"}),r.a.createElement(f.ColumnDefinition,{id:"email",title:"Email"}))))};n(322),n(323),n(324);var h=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("p",null,"ID: ",e.id),r.a.createElement("p",null,"Name: ",e.name),r.a.createElement("p",null,"Semester: ",e.semester),r.a.createElement("p",null,"Faculty: ",e.faculty),r.a.createElement("p",null,"Email: ",e.email))};var v=function(e){return r.a.createElement("div",{className:"list"},e.items.map((function(e){return r.a.createElement(h,{id:e.id,name:e.firstName+" "+e.lastName,semester:e.semester,faculty:e.faculty,email:e.email})})))};var b=function(){var e="https://salty-reaches-26979.herokuapp.com/students/",t=Object(a.useState)([]),n=Object(o.a)(t,2),l=n[0],i=n[1],c=Object(a.useState)(!0),m=Object(o.a)(c,2),f=m[0],E=m[1],h=Object(a.useState)(0),b=Object(o.a)(h,2),N=b[0],y=b[1],g=Object(a.useState)(),w=Object(o.a)(g,2),S=w[0],j=w[1],O=Object(a.useState)(),C=Object(o.a)(O,2),H=C[0],D=C[1],F=Object(a.useState)(),P=Object(o.a)(F,2),A=P[0],I=P[1],k=Object(a.useState)(),B=Object(o.a)(k,2),x=B[0],L=B[1],M=Object(a.useState)(),z=Object(o.a)(M,2),T=z[0],J=z[1],U=Object(a.useState)(),W=Object(o.a)(U,2),R=W[0],$=W[1];function q(){j(""),D(""),I(""),L(""),J(""),$("")}function G(){y(0===N?1:0)}function K(){y(0===N?2:0)}function Q(){y(0===N?3:0)}return Object(a.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){i(e),E(!1)}),(function(e){u.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"+e})}))}),[]),r.a.createElement("div",{className:"body"},f?r.a.createElement("div",{className:"body-placeholder"},"Is loading..."):r.a.createElement("div",{className:"body-wrapper"},r.a.createElement(p,{items:l}),r.a.createElement(v,{items:l}),r.a.createElement("div",{className:"body-wrapper-buttons"},r.a.createElement(s,{createHandler:function(){return Q()},deleteHandler:function(){return G()},updateHandler:function(){return K()}}))),r.a.createElement(d,{showModal:N,deleteHandler:function(){return G()},updateHandler:function(){return K()},createHandler:function(){return Q()},httpDeleteHandler:function(){return fetch(e+S,{method:"delete",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return alert(e)}),(function(e){u.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"+e})})),q(),void window.location.reload()},httpPutHandler:function(){return function(){var t={id:Number(S),firstName:H,lastName:A,semester:Number(x),faculty:T,email:R};q();var n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch(e+S,n).then((function(e){return e.json()})).then((function(e){return console.log(e)})),window.location.reload()}()},httpPostHandler:function(){return function(){var t={firstName:H,lastName:A,semester:Number(x),faculty:T,email:R};q();var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch(e,n).then((function(e){return e.json()})).then((function(e){return console.log(e)}),(function(e){u.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"+e})})),window.location.reload()}()},setId:function(e){return j(e)},setFirstName:function(e){return D(e)},setLastName:function(e){return I(e)},setSemester:function(e){return L(e)},setFaculty:function(e){return J(e)},setEmail:function(e){return $(e)}}))};n(325),n(326);var N=function(){return r.a.createElement("div",{className:"logo"},r.a.createElement("div",{className:"logo-placeholder"},"Student MA"))};var y=function(){return r.a.createElement("div",{className:"header"},r.a.createElement(N,null))};var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[125,1,2]]]);
//# sourceMappingURL=main.9ce63056.chunk.js.map