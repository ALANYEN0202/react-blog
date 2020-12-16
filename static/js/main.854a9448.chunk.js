(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{35:function(n,t,e){"use strict";e.r(t);var r=e(1),c=e(0),o=e(20),i=e.n(o),a=e(4),u=e(3),s=e(2),b=Object(c.createContext)(null),j="token",d=function(n){localStorage.setItem(j,n)},f=function(){return localStorage.getItem(j)},l="https://student-json-api.lidemy.me",p=function(){var n=f();return fetch("".concat(l,"/me"),{headers:{authorization:"Bearer ".concat(n)}}).then((function(n){return n.json()}))},O=e(10);function h(){var n=Object(u.a)(["\n  font-size: 24px;\n  background: white;\n  border: none;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n\n  & + & {\n    margin-left: 8px;\n  }\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.6);\n    color: white;\n    border-radius: 8px;\n    transition: all 0.2s;\n  }\n\n  ","\n"]);return h=function(){return n},n}function x(){var n=Object(u.a)(["\n  text-align: center;\n  margin-top: 10px;\n"]);return x=function(){return n},n}function g(){var n=Object(u.a)(["\n  color: rgba(0, 0, 0, 0.8);\n"]);return g=function(){return n},n}function v(){var n=Object(u.a)(["\n  font-size: 24px;\n  color: #333;\n  text-decoration: none;\n"]);return v=function(){return n},n}function m(){var n=Object(u.a)(["\n  border-bottom: 1px solid rgba(0, 12, 34, 0.2);\n  padding: 16px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n"]);return m=function(){return n},n}function k(){var n=Object(u.a)(["\n  position: relative;\n  width: 80%;\n  margin: 0 auto;\n"]);return k=function(){return n},n}var y=s.b.div(k()),S=s.b.div(m()),w=Object(s.b)(O.b)(v()),C=s.b.div(g()),z=s.b.div(x()),P=s.b.button(h(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    border: none;\n  "}));function F(n){var t=n.post;return Object(r.jsxs)(S,{children:[Object(r.jsx)(w,{to:"/posts/".concat(t.id),children:t.title}),Object(r.jsx)(C,{children:new Date(t.createdAt).toLocaleString()})]})}function $(n){for(var t=n.allPagesNumber,e=n.pages,c=n.setPages,o=[],i=1;i<=t;i++)o.push(i);return o.map((function(n){return Object(r.jsx)(P,{$active:e===n,onClick:function(){c(n)},children:n},n)}))}function _(){var n=Object(c.useState)([]),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(1),u=Object(a.a)(i,2),s=u[0],b=u[1],j=Object(c.useState)(),d=Object(a.a)(j,2),f=d[0],p=d[1];return Object(c.useEffect)((function(){fetch("".concat(l,"/posts")).then((function(n){return n.json()})).then((function(n){p([Math.ceil(n.length/5)])})),function(n,t){return fetch("".concat(l,"/posts?_sort=createdAt&_order=desc&_limit=").concat(n,"&_page=").concat(t)).then((function(n){return n.json()}))}(5,s).then((function(n){return o(n)}))}),[s]),Object(r.jsxs)(y,{children:[e.map((function(n){return Object(r.jsx)(F,{post:n},n.id)})),Object(r.jsx)(z,{children:Object(r.jsx)($,{allPagesNumber:f,pages:s,setPages:b})})]})}var J=e(5);function N(){var n=Object(u.a)(["\n  padding: 10px;\n  background: rgba(0, 0, 255, 0.7);\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 8px;\n    background: green;\n    transition: all 0.1s;\n  }\n"]);return N=function(){return n},n}function A(){var n=Object(u.a)(["\n  color: red;\n"]);return A=function(){return n},n}var D=s.b.div(A()),E=s.b.button(N());function I(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),s=u[0],j=u[1],f=Object(c.useState)(),O=Object(a.a)(f,2),h=O[0],x=O[1],g=Object(J.f)(),v=Object(c.useContext)(b).setUser;return Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault(),x(null),function(n,t){return fetch("".concat(l,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:n,password:t})}).then((function(n){return n.json()}))}(e,s).then((function(n){if(0===n.ok)return x(n.message);var t=n.token;d(t),p().then((function(n){if(1!==n.ok)return x(n.message);v(n.data),g.push("/")}))}))},children:["username:"," ",Object(r.jsx)("input",{style:{marginRight:"8px"},value:e,onChange:function(n){o(n.target.value)}}),"password:"," ",Object(r.jsx)("input",{style:{marginRight:"8px"},type:"password",value:s,onChange:function(n){j(n.target.value)}}),Object(r.jsx)(E,{children:"\u767b\u5165"}),h&&Object(r.jsx)(D,{children:h})]})}function R(){var n=Object(u.a)([""]);return R=function(){return n},n}function T(){var n=Object(u.a)([""]);return T=function(){return n},n}function U(){var n=Object(u.a)(["\n  padding: 8px;\n"]);return U=function(){return n},n}var B=s.b.div(U()),M=s.b.div(T()),Z=s.b.div(R());function G(n){var t=n.singlePost;return Object(r.jsxs)(B,{children:[Object(r.jsx)(M,{children:t.title}),Object(r.jsx)(Z,{children:t.body})]})}function H(){var n=Object(J.h)().id,t=Object(c.useState)({}),e=Object(a.a)(t,2),o=e[0],i=e[1];return Object(c.useEffect)((function(){(function(n){return fetch("".concat(l,"/posts/").concat(n)).then((function(n){return n.json()}))})(n).then((function(n){return i(n)}))}),[n]),Object(r.jsx)(G,{singlePost:o})}function L(){var n=Object(u.a)(["\n  padding: 10px;\n  background: #333;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n\n  &:hover {\n    border-radius: 8px;\n    background: green;\n    transition: all 0.1s;\n  }\n"]);return L=function(){return n},n}function q(){var n=Object(u.a)(["\n  background: rgba(255, 0, 0, 0.8);\n  color: rgba(255, 255, 255, 0.9);\n  padding: 10px;\n  border-radius: 8px;\n"]);return q=function(){return n},n}function K(){var n=Object(u.a)(["\n  margin: 0px 8px;\n  padding: 8px;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  text-align: center;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  color: red;\n"]);return V=function(){return n},n}var W=s.b.div(V()),X=s.b.form(Q()),Y=s.b.input(K()),nn=s.b.span(q()),tn=s.b.button(L());function en(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),s=u[0],j=u[1],f=Object(c.useState)(""),O=Object(a.a)(f,2),h=O[0],x=O[1],g=Object(c.useState)(null),v=Object(a.a)(g,2),m=v[0],k=v[1],y=Object(c.useContext)(b).setUser,S=Object(J.f)();return Object(r.jsxs)(X,{onSubmit:function(n){n.preventDefault(),function(n,t,e){return fetch("".concat(l,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({nickname:n,username:t,password:e})}).then((function(n){return n.json()}))}(e,s,h).then((function(n){if(1!==n.ok)return k(n.message);d(n.token),p().then((function(t){if(1!==t.ok)return k(n.message);y(t.data),S.push("/")}))}))},children:[Object(r.jsx)(nn,{children:"nickname:"}),Object(r.jsx)(Y,{value:e,onChange:function(n){o(n.target.value)}}),Object(r.jsx)(nn,{children:"username:"}),Object(r.jsx)(Y,{value:s,onChange:function(n){j(n.target.value)}}),Object(r.jsx)(nn,{children:"password:"}),Object(r.jsx)(Y,{type:"password",value:h,onChange:function(n){x(n.target.value)}}),Object(r.jsx)(tn,{children:"\u8a3b\u518a"}),m&&Object(r.jsx)(W,{children:m})]})}function rn(){var n=Object(u.a)(["\n  position: absolute;\n  width: 100%;\n  border-radius: 8px;\n  left: 0px;\n  top: 0px;\n  opacity: 0.2;\n"]);return rn=function(){return n},n}function cn(){var n=Object(u.a)(["\n  position: relative;\n  padding: 10px;\n  font-size: 24px;\n"]);return cn=function(){return n},n}function on(){var n=Object(u.a)([""]);return on=function(){return n},n}function an(){var n=Object(u.a)(["\n  text-align: center;\n  font-size: 32px;\n  font-weight: bold;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n  padding: 10px 0px;\n"]);return an=function(){return n},n}function un(){var n=Object(u.a)(["\n  margin: 0 auto;\n  width: 80%;\n"]);return un=function(){return n},n}var sn=s.b.div(un()),bn=s.b.div(an()),jn=s.b.div(on()),dn=s.b.div(cn()),fn=s.b.img(rn());function ln(){return Object(r.jsxs)(sn,{children:[Object(r.jsx)(bn,{children:"\u95dc\u65bc\u9019\u500b\u90e8\u843d\u683c"}),Object(r.jsx)(jn,{children:Object(r.jsxs)(dn,{children:["\u9019\u662f\u4e00\u500b\u7df4\u7fd2\u5982\u4f55\u4f7f\u7528 React \u7684\u7c21\u6613\u90e8\u843d\u683c\uff0c\u6709\u7c21\u55ae\u7684\u767b\u5165\u529f\u80fd\uff0c\u8a3b\u518a\u529f\u80fd\uff0c\u767c\u8868\u6587\u7ae0\uff0c\u9996\u9801\u6587\u7ae0\u5217\u8868\uff0c\u9ede\u9032\u53bb\u80fd\u770b\u5230\u55ae\u7bc7\u6587\u7ae0\uff0c\u9996\u9801\u5206\u9801\u529f\u80fd\uff0c\u505a\u4e86\u9019\u4e9b\u624d\u767c\u73fe\u8001\u5e2b\u8aaa\u7684\u7d30\u7bc0\u5f88\u91cd\u8981\uff0c\u6709\u5404\u7a2e\u932f\u8aa4\u72c0\u6cc1\u8981\u6703\u61c2\u7684\u986f\u793a\u51fa\u4f86\uff0c\u4e0d\u904e\u6211\u90fd\u60f3\u4e0d\u592a\u5230...\u61c9\u8a72\u662f\u591a\u53bb\u5be6\u4f5c\u6216\u662f\u9047\u5230\u624d\u6703\u6ce8\u610f\u5230\uff0c\u4f46\u6709\u6642\u9047\u5230\u5c31\u4f86\u4e0d\u53ca\u4e86...\uff0c\u5229\u7528\u9019\u4e9b\u7df4\u7fd2\u85c9\u6b64\u4f86\u5b78\u7fd2 React \u57fa\u672c\u4f7f\u7528\u65b9\u6cd5\uff0c\u8001\u5e2b\u4e5f\u8aaa\u660e\u6703\u7528\u4e86\u9019\u4e9b\u518d\u53bb\u505a\u5ef6\u4f38\u76f8\u4fe1\u80fd\u61c9\u4ed8\u5927\u90e8\u5206\u5834\u9762\uff1f \u5728\u6b64\u4e5f\u611f\u8b1d Huli \u8001\u5e2b\u7684\u8010\u5fc3\u5730\u6559\u5c0e\u8b93\u6211\u5b78\u5230\u4e86\u5f88\u591a\u5f88\u591a\uff0c\u96e2\u6c42\u8077\u6642\u9593\u4e5f\u4e0d\u9060\u4e86\uff0c \u5e0c\u671b\u80fd\u5920\u4e00\u5207\u9806\u5229\uff5e",Object(r.jsx)(fn,{src:"https://i.ibb.co/ZgbZ99y/IMG-1753.jpg"})]})})]})}function pn(){var n=Object(u.a)(["\n  background: white;\n  padding: 8px;\n  cursor: pointer;\n  border-radius: 8px;\n\n  &:hover {\n    background: #548c00;\n    color: white;\n  }\n"]);return pn=function(){return n},n}function On(){var n=Object(u.a)(["\n  width: 100%;\n  font-size: 18px;\n  padding: 5px;\n"]);return On=function(){return n},n}function hn(){var n=Object(u.a)(["\n  padding: 8px;\n  border: none;\n  border-bottom: 1px solid black;\n  outline: none;\n  font-size: 18px;\n"]);return hn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  margin: 8px 0px;\n  font-size: 32px;\n"]);return xn=function(){return n},n}function gn(){var n=Object(u.a)([""]);return gn=function(){return n},n}function vn(){var n=Object(u.a)(["\n  text-align: center;\n"]);return vn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  color: red;\n"]);return mn=function(){return n},n}var kn=s.b.div(mn()),yn=s.b.div(vn()),Sn=s.b.form(gn()),wn=s.b.div(xn()),Cn=s.b.input(hn()),zn=s.b.textarea(On()),Pn=s.b.button(pn());function Fn(){var n=Object(c.useState)(""),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),s=u[0],b=u[1],j=Object(c.useState)(null),d=Object(a.a)(j,2),p=d[0],O=d[1],h=Object(J.f)();return Object(r.jsx)(yn,{children:Object(r.jsxs)(Sn,{onSubmit:function(n){O(null),console.log(s),n.preventDefault(),function(n,t){var e=f();return fetch("".concat(l,"/posts"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(e)},body:JSON.stringify({title:n,body:t})}).then((function(n){return n.json()}))}(e,s).then((function(n){if(0===n.ok)return O(n.message);h.push("/")}))},children:[Object(r.jsx)(wn,{children:Object(r.jsx)(Cn,{placeholder:"Title",value:e,onChange:function(n){o(n.target.value)}})}),Object(r.jsx)(zn,{rows:"10",value:s,onChange:function(n){b(n.target.value)}}),Object(r.jsx)(Pn,{children:"\u767c\u5e03\u6587\u7ae0"}),p&&Object(r.jsx)(kn,{children:p})]})})}function $n(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return $n=function(){return n},n}function _n(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-left: 8px;\n  padding: 10px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n  background: rgba(255, 255, 255, 1);\n  border: none;\n  font-size: 16px;\n\n  &:hover {\n    color: red;\n  }\n"]);return _n=function(){return n},n}function Jn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  margin-left: 8px;\n  padding: 10px;\n  cursor: pointer;\n  color: black;\n  text-decoration: none;\n\n  ","\n  &:hover {\n    color: red;\n  }\n"]);return Jn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n"]);return Nn=function(){return n},n}function An(){var n=Object(u.a)([""]);return An=function(){return n},n}function Dn(){var n=Object(u.a)(["\n  height: 64px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  padding: 0px 32px;\n  background: rgba(255, 255, 255, 1);\n  z-index: 2;\n"]);return Dn=function(){return n},n}var En=s.b.div(Dn()),In=s.b.h1(An()),Rn=s.b.div(Nn()),Tn=Object(s.b)(O.b)(Jn(),(function(n){return n.$active&&"\n    background: rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n  "})),Un=s.b.button(_n()),Bn=s.b.div($n());var Mn=function(){var n=Object(J.g)(),t=Object(c.useContext)(b),e=t.user,o=t.setUser,i=Object(J.f)();return Object(r.jsxs)(En,{children:[Object(r.jsxs)(Bn,{children:[Object(r.jsx)(In,{children:"\u6211\u7684\u7b2c\u4e00\u500b\u90e8\u843d\u683c"}),Object(r.jsxs)(Rn,{children:[Object(r.jsx)(Tn,{to:"/",$active:"/"===n.pathname,children:"\u9996\u9801"}),Object(r.jsx)(Tn,{to:"/about",$active:"/about"===n.pathname,children:"\u95dc\u65bc\u9019\u500b\u90e8\u843d\u683c"}),e&&Object(r.jsx)(Tn,{to:"/new-post",$active:"/new-post"===n.pathname,children:"\u767c\u5e03\u6587\u7ae0"})]})]}),Object(r.jsxs)(Rn,{children:[!e&&Object(r.jsx)(Tn,{to:"/login",$active:"/login"===n.pathname,children:"\u767b\u5165"}),!e&&Object(r.jsx)(Tn,{to:"/register",$active:"/register"===n.pathname,children:"\u8a3b\u518a"}),e&&Object(r.jsx)(Un,{onClick:function(){d(""),o(null),"/"!==n.pathname&&i.push("/")},children:"\u767b\u51fa"})]})]})};function Zn(){var n=Object(u.a)(["\n  padding-top: 64px;\n"]);return Zn=function(){return n},n}var Gn=s.b.div(Zn());var Hn=function(){var n=Object(c.useState)(null),t=Object(a.a)(n,2),e=t[0],o=t[1],i=Object(c.useState)(!1),u=Object(a.a)(i,2),s=u[0],j=u[1];return Object(c.useEffect)((function(){""!==f()&&(j(!0),p().then((function(n){if(1!==n.ok)return j(!1);o(n.data),j(!1)})))}),[]),Object(r.jsx)(b.Provider,{value:{user:e,setUser:o},children:Object(r.jsx)(Gn,{children:Object(r.jsxs)(O.a,{children:[!s&&Object(r.jsx)(Mn,{}),Object(r.jsxs)(J.c,{children:[Object(r.jsx)(J.a,{exact:!0,path:"/",children:Object(r.jsx)(_,{})}),Object(r.jsx)(J.a,{path:"/login",children:Object(r.jsx)(I,{})}),Object(r.jsx)(J.a,{path:"/posts/:id",children:Object(r.jsx)(H,{})}),Object(r.jsx)(J.a,{path:"/register",children:Object(r.jsx)(en,{})}),Object(r.jsx)(J.a,{path:"/about",children:Object(r.jsx)(ln,{})}),Object(r.jsx)(J.a,{path:"/new-post",children:Object(r.jsx)(Fn,{})})]})]})})})};i.a.render(Object(r.jsx)(s.a,{theme:{colors:{primary_green:"#00AA00",primary_red:"#FF0000",primary_white:"#FFFFFF"}},children:Object(r.jsx)(Hn,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.854a9448.chunk.js.map