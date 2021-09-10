(this["webpackJsonpblog-auth-client"]=this["webpackJsonpblog-auth-client"]||[]).push([[0],{33:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(11),i=c.n(n),r=c(3),l=(c(33),c(34),c(35),c(36),c(37),c(22)),o=c(5),j=c(0),u=function(e){var t=e.authenticated,c=Object(o.g)(),a=[{label:"Home",icon:"pi pi-desktop",command:function(e){c.push("/home")}},{label:"Editar usu\xe1rio",icon:"pi pi-user-edit",command:function(e){c.push("/edit-user")}},{label:"Artigos",icon:"pi pi-book",command:function(e){c.push("/list-articles")}},{label:"Sair",icon:"pi pi-arrow-circle-up",command:function(e){c.push("/logout")}}],s=[{label:"Home",icon:"pi pi-desktop",command:function(e){c.push("/home")}},{label:"Cadastrar usu\xe1rio",icon:"pi pi-user-plus",command:function(e){c.push("/create-user")}},{label:"Logar",icon:"pi pi-lock",command:function(e){c.push("/login")}}];return Object(j.jsxs)(j.Fragment,{children:[t&&Object(j.jsx)(l.a,{model:a,style:{margin:0,padding:0}}),!t&&Object(j.jsx)(l.a,{model:s,style:{margin:0,padding:0}})]})},b=c(6),d=c(16),m=c(4),O=c(7),h=function(e){var t=e.baseUrl,c=Object(o.g)();return Object(j.jsxs)(O.a,{title:"Usu\xe1rio",subTitle:"Cadastrar novo usu\xe1rio",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target),s={};a.forEach((function(e,t){s[t]=e}));var n=JSON.stringify(s);Array.from(document.querySelectorAll("input")).forEach((function(e){return e.value=""}));var i="".concat(t,"/api/auth");fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:n}).then((function(e){return e.ok&&c.push("/login"),e.json()}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(b.a,{name:"email",id:"email",type:"text",required:!0})]}),Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Senha"}),Object(j.jsx)(d.a,{name:"password",required:!0})]}),Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"password_confirmation",children:"Confirma\xe7\xe3o de senha"}),Object(j.jsx)(d.a,{name:"password_confirmation",feedback:!1,required:!0})]})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Enviar"})]})]})},p=function(e){var t=e.baseUrl,c=e.setIsAuthenticated,s=e.setEmail,n=e.setClient,i=e.setAccessToken,r=Object(o.g)(),l=Object(a.useCallback)((function(){return r.push("/request-password")}),[r]);return Object(j.jsxs)(O.a,{title:"Login",subTitle:"Autenticar-se no sistema",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=new FormData(e.target),l={};a.forEach((function(e,t){l[t]=e})),sessionStorage.setItem("email",l.email);var o=JSON.stringify(l),j="".concat(t,"/api/auth/sign_in");fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:o}).then((function(e){return 200===e.status&&(c(!0),s(sessionStorage.getItem("email")),n(e.headers.get("client")),i(e.headers.get("access-token")),sessionStorage.setItem("isAuthenticated","true"),sessionStorage.setItem("client",e.headers.get("client")),sessionStorage.setItem("accessToken",e.headers.get("access-token")),r.push("/")),e.json()}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(b.a,{name:"email",id:"email",type:"text",required:!0})]}),Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Senha"}),Object(j.jsx)(d.a,{name:"password",feedback:!1,required:!0})]})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Logar"})," ",Object(j.jsx)(m.a,{type:"button",className:"p-button-sm",label:"Esqueceu a senha?",onClick:function(e){return l()}})]})]})},x=function(e){var t=e.baseUrl,c=e.email,s=e.client,n=e.accessToken,i=e.setIsAuthenticated,l=e.setEmail,u=e.setClient,b=e.setAccessToken,d=Object(a.useState)(0),m=Object(r.a)(d,2),O=m[0],h=m[1],p=Object(o.g)();return Object(a.useEffect)((function(){!function(){var e="".concat(t,"/api/auth/sign_out");fetch(e,{method:"DELETE",headers:{uid:c,client:s,"access-token":n}}).then((function(e){return 200===e.status&&(h(200),l(""),u(""),b(""),i(!1),sessionStorage.removeItem("isAuthenticated"),sessionStorage.removeItem("email"),sessionStorage.removeItem("client"),sessionStorage.removeItem("accessToken"),p.push("/login")),e.json()})).catch((function(e){console.error("---ERROS---",e)}))}()}),[t,c,s,n,i,l,u,b,p]),Object(j.jsx)(j.Fragment,{children:200===O?Object(j.jsx)(o.a,{to:"/login"}):Object(j.jsx)("h4",{children:"conectado"})})},f=c(10),v=c.n(f),g=c(14),k=c(18),N=function(e){var t=e.baseUrl,c=e.email,s=e.client,n=e.accessToken,i=Object(a.useState)([]),l=Object(r.a)(i,2),u=l[0],b=l[1];Object(a.useEffect)((function(){!function(){var e={"Content-Type":"application/json",uid:c,client:s,"access-token":n},a="".concat(t,"/api/articles");fetch(a,{headers:e},{method:"GET"}).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(c=e.sent,t.ok){e.next=7;break}return a=c&&c.message||t.statusText,window.location="/login",e.abrupt("return",Promise.reject(a));case 7:b(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("---ERROS---",e)}))}()}),[c,s,n,t]);var d=Object(o.g)(),O=Object(a.useCallback)((function(e){return d.push("/view-article/".concat(e))}),[d]),h=Object(a.useCallback)((function(e){return d.push("/edit-article/".concat(e))}),[d]),p=Object(a.useCallback)((function(){return d.push("/create-article")}),[d]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"p-col-12",children:Object(j.jsx)(m.a,{className:"p-button-text",label:"Criar novo artigo",onClick:function(e){return p()}})}),u.map((function(e){return Object(j.jsx)("div",{className:"p-col-12",children:Object(j.jsxs)(k.a,{legend:e.title,children:[Object(j.jsx)("p",{children:e.body.length>=200?e.body.substring(0,200)+"...":e.body}),Object(j.jsx)(m.a,{className:"p-button-sm p-button-outlined",label:"Visualizar",onClick:function(t){return O(e.id)}})," ",Object(j.jsx)(m.a,{className:"p-button-sm p-button-outlined",label:"Editar",onClick:function(t){return h(e.id)}})]})},e.id)}))]})},y=function(e){var t=e.baseUrl,c=e.email,s=e.client,n=e.accessToken,i=Object(a.useState)([]),l=Object(r.a)(i,2),u=l[0],b=l[1],d=Object(o.i)().id;Object(a.useEffect)((function(){!function(){var e={"Content-Type":"application/json",uid:c,client:s,"access-token":n},a="".concat(t,"/api/articles/").concat(d);fetch(a,{headers:e},{method:"GET"}).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(c=e.sent,t.ok){e.next=7;break}return a=c&&c.message||t.statusText,window.location="/login",e.abrupt("return",Promise.reject(a));case 7:b(c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error("---ERROS---",e)}))}()}),[c,s,n,t,d]);var O=Object(o.g)(),h=Object(a.useCallback)((function(){return O.push("/list-articles")}),[O]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(k.a,{legend:u.title,children:[Object(j.jsx)("p",{children:u.body}),Object(j.jsx)(m.a,{className:"p-button-sm p-button-outlined",label:"Voltar",onClick:function(e){return h()}})]})})},S=c(19),T=c(15),C=function(e){var t=e.email,c=e.client,s=e.accessToken,n=e.baseUrl,i=Object(a.useState)([]),l=Object(r.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(""),p=Object(r.a)(h,2),x=p[0],f=p[1],k=Object(a.useState)(""),N=Object(r.a)(k,2),y=N[0],C=N[1],w=Object(a.useState)(!1),E=Object(r.a)(w,2),F=E[0],U=E[1],A=Object(o.i)().id,I=Object(o.g)();Object(a.useEffect)((function(){!function(){var e={"Content-Type":"application/json",uid:t,client:c,"access-token":s},a="".concat(n,"/api/articles/").concat(A);fetch(a,{headers:e},{method:"GET"}).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(c=e.sent,t.ok){e.next=7;break}return a=c&&c.message||t.statusText,window.location="/login",e.abrupt("return",Promise.reject(a));case 7:d(c),f(c.title),C(c.body);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(">---ERROS---\x3e ",e)}))}()}),[t,c,s,n,A]);var q=Object(a.useCallback)((function(){return I.push("/list-articles")}),[I]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{title:"Editar artigo",subTitle:"Fa\xe7a as altera\xe7\xf5es necess\xe1rias no artigo e clique em salvar",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={};a.title=x,a.body=y;var i=JSON.stringify(a),r="".concat(n,"/api/articles/").concat(A);fetch(r,{method:"PUT",headers:{"Content-Type":"application/json",uid:t,client:c,"access-token":s},body:i}).then((function(e){return e.ok&&U(!0),e.json()}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"titulo",children:"Titulo"}),Object(j.jsx)(b.a,{name:"titulo",id:"titulo",type:"text",defaultValue:u.title,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(j.jsx)(S.a,{rows:5,cols:30,defaultValue:u.body,onChange:function(e){return C(e.target.value)},autoResize:!0})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Salvar"})," ",Object(j.jsx)(m.a,{type:"button",className:"p-button-sm",label:"Voltar",onClick:function(e){return q()}})," ",Object(j.jsx)(m.a,{type:"button",className:"p-button-sm p-button-danger",label:"Deletar",onClick:function(e){return function(e){if(e.preventDefault(),!0===window.confirm("Voc\xea deseja realmente deletar o artigo definitivamente?")){var a="".concat(n,"/api/articles/").concat(A);fetch(a,{method:"DELETE",headers:{"Content-Type":"application/json",uid:t,client:c,"access-token":s}}).then((function(e){return e.ok&&I.push("/list-articles"),e.json()}))}}(e)}})]})]}),F?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(T.a,{severity:"success",text:"Altera\xe7\xf5es salvas com sucesso!"})]}):null]})},w=function(e){var t=e.email,c=e.client,s=e.accessToken,n=e.baseUrl,i=Object(a.useState)(""),l=Object(r.a)(i,2),u=l[0],d=l[1],h=Object(a.useState)(""),p=Object(r.a)(h,2),x=p[0],f=p[1],v=Object(o.g)(),g=Object(a.useCallback)((function(){return v.push("/list-articles")}),[v]);return Object(j.jsxs)(O.a,{title:"Novo artigo",subTitle:"Insira o t\xedtulo e o conte\xfado para criar um novo artigo",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={};a.title=u,a.body=x;var i=JSON.stringify(a),r="".concat(n,"/api/articles");fetch(r,{method:"POST",headers:{"Content-Type":"application/json",uid:t,client:c,"access-token":s},body:i}).then((function(e){return e.ok&&v.push("/list-articles"),e.json()})).catch((function(e){console.log(">---ERROS---\x3e ",e)}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"titulo",children:"Titulo"}),Object(j.jsx)(b.a,{name:"titulo",id:"titulo",type:"text",onChange:function(e){return d(e.target.value)},required:!0})]}),Object(j.jsx)(S.a,{rows:5,cols:30,onChange:function(e){return f(e.target.value)},autoResize:!0})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Salvar"})," ",Object(j.jsx)(m.a,{type:"button",className:"p-button-sm",label:"Voltar",onClick:function(e){return g()}})]})]})},E=function(e){var t=e.baseUrl,c=Object(a.useState)(),s=Object(r.a)(c,2),n=s[0],i=s[1],l=Object(a.useState)(!1),o=Object(r.a)(l,2),u=o[0],d=o[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{title:"Recuperar senha",subTitle:"Digite o e-mail cadastrad para recuperar a senha",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={};c.email=n,console.log(c);var a=JSON.stringify(c),s="".concat(t,"/api/auth/password");fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:a}).then((function(e){return 200===e.status&&d(!0),e.json()}))},children:[Object(j.jsx)("div",{className:"p-fluid",children:Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)(b.a,{name:"email",id:"email",type:"text",onChange:function(e){return i(e.target.value)},required:!0})]})}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Enviar"})]})]}),u?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(T.a,{severity:"info",text:"Instru\xe7\xf5es enviadas para o e-mail informado!"})]}):null]})};var F=function(e){var t=e.baseUrl,c=new URLSearchParams(Object(o.h)().search),s=Object(a.useState)(),n=Object(r.a)(s,2),i=n[0],l=n[1],u=Object(a.useState)(),b=Object(r.a)(u,2),h=b[0],p=b[1],x=Object(a.useState)(),f=Object(r.a)(x,2),v=f[0],g=f[1],k=Object(a.useState)(!1),N=Object(r.a)(k,2),y=N[0],S=N[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{title:"Login",subTitle:"Autenticar-se no sistema",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={};a.password=i,a.password_confirmation=h;var s=JSON.stringify(a),n="".concat(t,"/api/auth/password");fetch(n,{method:"PUT",headers:{"Content-Type":"application/json",uid:c.get("uid"),client:c.get("client"),"access-token":c.get("access-token"),token:c.get("token")},body:s}).then((function(e){return e.ok&&(g("Senha alterada com sucesso!"),S(!0)),e.json()}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"password",children:"Nova senha"}),Object(j.jsx)(d.a,{name:"password",feedback:!1,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"password_confirmation",children:"Confirme a senha"}),Object(j.jsx)(d.a,{name:"password_confirmation",feedback:!1,onChange:function(e){return p(e.target.value)},required:!0})]})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Salvar"})]})]}),y?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(T.a,{severity:"success",text:v})]}):null]})},U=function(e){var t=e.email,c=e.client,s=e.accessToken,n=e.baseUrl,i=Object(a.useState)(!1),l=Object(r.a)(i,2),o=l[0],u=l[1],d=Object(a.useState)(),h=Object(r.a)(d,2),p=h[0],x=h[1],f=Object(a.useState)(),k=Object(r.a)(f,2),N=k[0],y=k[1];Object(a.useEffect)((function(){!function(){var e={"Content-Type":"application/json",uid:t,client:c,"access-token":s},a="".concat(n,"/api/auth/validate_token");fetch(a,{headers:e},{method:"GET"}).then(function(){var e=Object(g.a)(v.a.mark((function e(t){var c,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(c=e.sent,t.ok){e.next=7;break}return a=c&&c.message||t.statusText,window.location="/login",e.abrupt("return",Promise.reject(a));case 7:x(c.data.name),y(c.data.nickname);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(">---ERROS---\x3e ",e)}))}()}),[t,c,s,n]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(O.a,{title:"Editar usu\xe1rio",subTitle:"Fa\xe7a as altera\xe7\xf5es necess\xe1rias e clique em salvar",children:[Object(j.jsx)("br",{}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a={};a.name=p,a.nickname=N;var i=JSON.stringify(a),r="".concat(n,"/api/auth");fetch(r,{method:"PUT",headers:{"Content-Type":"application/json",uid:t,client:c,"access-token":s},body:i}).then((function(e){return e.ok&&u(!0),e.json()}))},children:[Object(j.jsxs)("div",{className:"p-fluid",children:[Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Nome"}),Object(j.jsx)(b.a,{name:"name",id:"name",type:"text",defaultValue:p,onChange:function(e){return x(e.target.value)}})]}),Object(j.jsxs)("div",{className:"p-field",children:[Object(j.jsx)("label",{htmlFor:"nickname",children:"Nickname"}),Object(j.jsx)(b.a,{name:"nickname",id:"nickname",type:"text",defaultValue:N,onChange:function(e){return y(e.target.value)}})]})]}),Object(j.jsx)(m.a,{type:"submit",className:"p-button-sm",label:"Salvar"})]})]}),o?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)(T.a,{severity:"success",text:"Altera\xe7\xf5es salvas com sucesso!"})]}):null]})},A=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("img",{src:"logo.png",alt:"Logomarca Taggrafia"})]})},I=c(12);var q=function(){function e(e,t){var c=sessionStorage.getItem(e);return c||t}var t=Object(a.useState)(e("isAuthenticated",!1)),c=Object(r.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(e("client","")),l=Object(r.a)(i,2),b=l[0],d=l[1],m=Object(a.useState)(e("accessToken","")),O=Object(r.a)(m,2),f=O[0],v=O[1],g=Object(a.useState)(e("email","")),k=Object(r.a)(g,2),S=k[0],T=k[1],q="http://localhost:3001";return Object(j.jsx)(I.a,{children:Object(j.jsxs)("div",{className:"p-grid p-justify-center nested-grid",children:[Object(j.jsx)("div",{className:"p-col-2"}),Object(j.jsx)("div",{className:"p-col-8",style:{padding:1},children:Object(j.jsx)(u,{authenticated:s})}),Object(j.jsx)("div",{className:"p-col-2"}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/home",children:Object(j.jsx)("div",{className:"p-grid p-justify-center",children:Object(j.jsx)("div",{className:"p-col-12",children:Object(j.jsx)(A,{})})})}),Object(j.jsxs)(o.b,{path:"/create-user",children:[Object(j.jsx)("div",{className:"p-col-4"}),Object(j.jsx)("div",{className:"p-col-4",children:Object(j.jsx)(h,{baseUrl:q})}),Object(j.jsx)("div",{className:"p-col-4"})]}),Object(j.jsxs)(o.b,{path:"/edit-user",children:[Object(j.jsx)("div",{className:"p-col-4"}),Object(j.jsx)("div",{className:"p-col-4",children:Object(j.jsx)(U,{baseUrl:q,email:S,client:b,accessToken:f})}),Object(j.jsx)("div",{className:"p-col-4"})]}),Object(j.jsxs)(o.b,{path:"/login",children:[Object(j.jsx)("div",{className:"p-col-4"}),Object(j.jsx)("div",{className:"p-col-4",children:Object(j.jsx)(p,{baseUrl:q,setIsAuthenticated:n,setEmail:T,setClient:d,setAccessToken:v})}),Object(j.jsx)("div",{className:"p-col-4"})]}),Object(j.jsxs)(o.b,{path:"/request-password",children:[Object(j.jsx)("div",{className:"p-col-4"}),Object(j.jsx)("div",{className:"p-col-4",children:Object(j.jsx)(E,{baseUrl:q})}),Object(j.jsx)("div",{className:"p-col-4"})]}),Object(j.jsxs)(o.b,{path:"/reset-password",children:[Object(j.jsx)("div",{className:"p-col-4"}),Object(j.jsx)("div",{className:"p-col-4",children:Object(j.jsx)(F,{baseUrl:q})}),Object(j.jsx)("div",{className:"p-col-4"})]}),Object(j.jsxs)(o.b,{path:"/list-articles",children:[Object(j.jsx)("div",{className:"p-col-2"}),Object(j.jsx)("div",{className:"p-col-8",children:Object(j.jsx)(N,{baseUrl:q,email:S,client:b,accessToken:f})}),Object(j.jsx)("div",{className:"p-col-2"})]}),Object(j.jsxs)(o.b,{path:"/view-article/:id",children:[Object(j.jsx)("div",{className:"p-col-2"}),Object(j.jsx)("div",{className:"p-col-8",children:Object(j.jsx)(y,{baseUrl:q,email:S,client:b,accessToken:f})}),Object(j.jsx)("div",{className:"p-col-2"})]}),Object(j.jsxs)(o.b,{path:"/edit-article/:id",children:[Object(j.jsx)("div",{className:"p-col-3"}),Object(j.jsx)("div",{className:"p-col-6",children:Object(j.jsx)(C,{baseUrl:q,email:S,client:b,accessToken:f})}),Object(j.jsx)("div",{className:"p-col-3"})]}),Object(j.jsxs)(o.b,{path:"/create-article",children:[Object(j.jsx)("div",{className:"p-col-3"}),Object(j.jsx)("div",{className:"p-col-6",children:Object(j.jsx)(w,{baseUrl:q,email:S,client:b,accessToken:f})}),Object(j.jsx)("div",{className:"p-col-3"})]}),Object(j.jsx)(o.b,{path:"/logout",children:Object(j.jsx)(x,{baseUrl:q,email:S,client:b,accessToken:f,setIsAuthenticated:n,setEmail:T,setClient:d,setAccessToken:v})}),Object(j.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(o.a,{to:"/home"})}})]})]})})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),R()}},[[45,1,2]]]);
//# sourceMappingURL=main.42c770a8.chunk.js.map