(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(7),c=a.n(r),i=(a(16),a(2)),s=a(10),u=a(8),o=a.n(u),j=a(0),d=function(e){var t=e.setCategorias,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],u=r[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>2?(t((function(e){return[c].concat(Object(s.a)(e))})),u("")):alert("La categoria debe contener al menos 2 caracteres")},children:Object(j.jsx)("input",{type:"text",value:c,placeholder:"Que gif quieres buscar?",onChange:function(e){u(e.target.value)}})})};d.PropType={setCategorias:o.a.func.isRequired};var l=a(11),p=a(6),b=a.n(p),f=a(9),m=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=" https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=OJbywJoakF4uNAhDvMqpDT118Se771Un"),e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.title,a=e.url;return Object(j.jsxs)("div",{className:"card animate__animated animate__bounce",children:[Object(j.jsx)("img",{src:a,alt:t}),Object(j.jsx)("p",{children:t})]})},O=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){m(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=a.data,c=a.loading;return Object(j.jsxs)(j.Fragment,{children:[c&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(j.jsxs)("h3",{className:"animate__animated animate__fadeIn",children:[" ",t," "]}),Object(j.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(j.jsx)(h,Object(l.a)({},e),e.id)}))})," "]})},g=function(){var e=Object(n.useState)(["Dragon Ball"]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:" GifExpertApp "}),Object(j.jsx)(d,{setCategorias:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:a.map((function(e){return Object(j.jsx)(O,{category:e},e)}))})]})};c.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.d79a120e.chunk.js.map