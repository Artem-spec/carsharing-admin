(this["webpackJsonpcarsharing-admin"]=this["webpackJsonpcarsharing-admin"]||[]).push([[0],{25:function(e,t,r){"use strict";r(0);var n=r(1);t.a=function(e){var t=e.width,r=e.height;return Object(n.jsx)("svg",{width:t,height:r,viewBox:"0 0 45 45",fill:"none",children:Object(n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 22.25C0 9.96178 9.96198 0 22.2504 0C34.538 0 44.5 9.96178 44.5 22.25C44.5 25.0644 43.9774 27.7567 43.0241 30.2353C41.3767 27.6868 38.5104 26 35.25 26C30.1414 26 26 30.1414 26 35.25C26 38.5104 27.6868 41.3768 30.2354 43.0241C27.7569 43.9775 25.0647 44.5 22.2504 44.5C9.96198 44.5 0 34.5382 0 22.25ZM30.2354 43.0241C31.6801 43.9579 33.4018 44.5 35.25 44.5C40.3586 44.5 44.5 40.3586 44.5 35.25C44.5 33.4017 43.9579 31.6801 43.0241 30.2353C40.7682 36.1002 36.1001 40.7682 30.2354 43.0241Z",fill:"#0EC261"})})}},36:function(e,t,r){e.exports={loading:"loading_loading__1kb0E"}},37:function(e,t,r){e.exports={"wrap-center":"authorization_wrap-center__1IkdQ",header:"authorization_header__-hK99","heading-h1":"authorization_heading-h1__Egga4","heading-h1_margin":"authorization_heading-h1_margin__3hkn6","wrap-form":"authorization_wrap-form__EaQ7L"}},39:function(e,t,r){e.exports={"form-authorization":"formAuthorization_form-authorization__Ks6He","heading-form":"formAuthorization_heading-form__2voz2","form-label":"formAuthorization_form-label__fxQBA","form-input":"formAuthorization_form-input__2ZFcc","form-wrap-button":"formAuthorization_form-wrap-button__Kgy_Q","form-link":"formAuthorization_form-link__2SFtN","form-button":"formAuthorization_form-button__pHqaO","error-msg":"formAuthorization_error-msg__2ZKnF","active-error-msg":"formAuthorization_active-error-msg__2YpfY"}},50:function(e,t,r){},56:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(17),o=r.n(c),i=r(9),s=r(11),u=r(19),h=(r(50),r(3)),j=r(10),d=r(20),b=r(1),l=["children","isAuthenticated"],f=function(e){var t=e.children,r=e.isAuthenticated,n=Object(d.a)(e,l);return Object(b.jsx)(h.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){var n=e.location;return r?Object(b.jsx)(h.a,{to:{pathname:"/admin",state:{from:n}}}):t}}))},m=["children"],p=function(e){var t=e.children,r=Object(d.a)(e,m);return Object(b.jsx)(h.b,Object(j.a)(Object(j.a)({},r),{},{exact:!0,render:function(){return t}}))},O=[{path:"panel",component:Object(n.lazy)((function(){return r.e(3).then(r.bind(null,79))})),exact:!0}],_=r(12),x=r.n(_),g=r(36),v=r.n(g),N=(r(56),function(){var e=x.a.bind(v.a);return Object(b.jsx)("div",{className:e("loading"),children:Object(b.jsx)("div",{className:"text-center",children:Object(b.jsx)("div",{className:"spinner-border",role:"status"})})})}),w=function(){return Object(b.jsx)(h.d,{children:Object(b.jsx)(n.Suspense,{fallback:Object(b.jsx)(N,{}),children:O.map((function(e){var t=e.component,r=e.path,n=e.exact;return Object(b.jsx)(h.b,{path:"/".concat(r),exact:n,children:Object(b.jsx)(t,{})},r)}))})})},z=r(37),A=r.n(z),k=r(25),C=r(24),y=r.n(C),I=r(38),S=r(18),E=r(39),Z=r.n(E),F=function(e){return{type:"AUTHORIZATION",payload:e}},R=r(40),T=r.n(R).a.create({baseURL:"https://api-factory.simbirsoft1.com/api",responseType:"json"});T.defaults.headers.common.Authorization="Basic MTFkN2M5Zjo0Y2JjZWE5NmRl",T.defaults.headers.common["X-Api-Factory-Application-Id"]="5e25c641099b810b946c5d5b";var M=T,B=function(){var e=x.a.bind(Z.a),t=Object(i.b)(),r=Object(n.useState)(""),a=Object(S.a)(r,2),c=a[0],o=a[1],s=Object(n.useState)(""),u=Object(S.a)(s,2),j=u[0],d=u[1],l=Object(n.useState)(!1),f=Object(S.a)(l,2),m=f[0],p=f[1],O=Object(h.g)(),_=function(e,t){t(e.target.value)};return Object(b.jsxs)("form",{className:e("form-authorization"),onSubmit:function(e){e.preventDefault();var r=function(){var e=Object(I.a)(y.a.mark((function e(){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.post("/auth/login",{username:c,password:j}).then((function(e){return e.data})).catch((function(){return p(!0)}));case 2:return"object"===typeof(r=e.sent)&&(t(F({auth_success:r.refrash_token,auth_error:!1})),n=r.access_token,sessionStorage.setItem("token",n),O.push("/panel")),e.abrupt("return",r);case 5:case"end":return e.stop()}var n}),e)})));return function(){return e.apply(this,arguments)}}();r()},children:[Object(b.jsx)("h3",{className:e("heading-form"),children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)("label",{className:e("form-label"),htmlFor:"login",children:"\u041f\u043e\u0447\u0442\u0430"}),Object(b.jsx)("input",{className:e("form-input"),id:"login",required:!0,onChange:function(e){return _(e,o)}}),Object(b.jsx)("label",{className:e("form-label"),htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsx)("input",{className:e("form-input"),id:"password",type:"password",required:!0,onChange:function(e){return _(e,d)}}),Object(b.jsx)("p",{className:e("error-msg",{"active-error-msg":m}),children:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043b\u043e\u0433\u0438\u043d \u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(b.jsxs)("div",{className:e("form-wrap-button"),children:[Object(b.jsx)("a",{href:"#",className:e("form-link"),children:"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f"}),Object(b.jsx)("button",{className:e("form-button"),type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},H=function(){var e=Object(i.c)((function(e){return e})).auth,t=x.a.bind(A.a),r=Object(h.g)();return Object(n.useEffect)((function(){e.auth_error||r.push("/panel")}),[e]),e.auth_error&&Object(b.jsxs)("div",{className:t("wrap-center"),children:[Object(b.jsxs)("div",{className:t("header"),children:[Object(b.jsx)(k.a,{width:45,height:45}),Object(b.jsx)("h1",{className:t("heading-h1","heading-h1_margin"),children:"Need for drive"})]}),Object(b.jsx)("div",{className:t("wrap-form"),children:Object(b.jsx)(B,{})})]})},K=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e})).auth,r=Object(h.g)();return Object(n.useEffect)((function(){var t=sessionStorage.getItem("token");t?(e(F({auth_success:t,auth_error:!1})),r.push("/panel")):r.push("/admin")}),[]),Object(b.jsx)(s.a,{children:Object(b.jsxs)(h.d,{children:[Object(b.jsx)(p,{path:"/admin",children:Object(b.jsx)(H,{})}),Object(b.jsx)(f,{path:"/panel",isAuthenticated:t.auth_error,children:Object(b.jsx)(w,{})})]})})},Q={auth_success:"",auth_error:!0},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;return"AUTHORIZATION"===t.type?Object(j.a)(Object(j.a)({},e),t.payload):e},J=Object(u.a)({auth:q}),U=Object(u.b)(J);o.a.render(Object(b.jsx)(i.a,{store:U,children:Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(K,{})})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.7b236304.chunk.js.map