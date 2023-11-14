import{r as f}from"./index-8ee6c85d.js";import{a as h,_ as b}from"./tslib.es6-3f3c652b.js";var d="right-scroll-bar-position",s="width-before-scroll-bar",w="with-scroll-bars-hidden",x="--removed-body-scroll-bar-size";function C(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function E(n,e){var t=f.useState(function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(r){var a=t.value;a!==r&&(t.value=r,t.callback(r,a))}}}})[0];return t.callback=e,t.facade}function A(n,e){return E(e||null,function(t){return n.forEach(function(r){return C(r,t)})})}function m(n){return n}function p(n,e){e===void 0&&(e=m);var t=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(c){var i=e(c,r);return t.push(i),function(){t=t.filter(function(o){return o!==i})}},assignSyncMedium:function(c){for(r=!0;t.length;){var i=t;t=[],i.forEach(c)}t={push:function(o){return c(o)},filter:function(){return t}}},assignMedium:function(c){r=!0;var i=[];if(t.length){var o=t;t=[],o.forEach(c),i=t}var S=function(){var u=i;i=[],u.forEach(c)},v=function(){return Promise.resolve().then(S)};v(),t={push:function(u){i.push(u),v()},filter:function(u){return i=i.filter(u),t}}}};return a}function H(n,e){return e===void 0&&(e=m),p(n,e)}function O(n){n===void 0&&(n={});var e=p(null);return e.options=h({async:!0,ssr:!1},n),e}var y=function(n){var e=n.sideCar,t=b(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return f.createElement(r,h({},t))};y.isSideCarExport=!0;function P(n,e){return n.useMedium(e),y}var g,_=function(){if(g)return g;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function R(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=_();return e&&n.setAttribute("nonce",e),n}function N(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function T(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var k=function(){var n=0,e=null;return{add:function(t){n==0&&(e=R())&&(N(e,t),T(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},M=function(){var n=k();return function(e,t){f.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&t])}},W=function(){var n=M(),e=function(t){var r=t.styles,a=t.dynamic;return n(r,a),null};return e},z={left:0,top:0,right:0,gap:0},l=function(n){return parseInt(n||"",10)||0},I=function(n){var e=window.getComputedStyle(document.body),t=e[n==="padding"?"paddingLeft":"marginLeft"],r=e[n==="padding"?"paddingTop":"marginTop"],a=e[n==="padding"?"paddingRight":"marginRight"];return[l(t),l(r),l(a)]},B=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return z;var e=I(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},j=W(),G=function(n,e,t,r){var a=n.left,c=n.top,i=n.right,o=n.gap;return t===void 0&&(t="margin"),`
  .`.concat(w,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(r,";"),t==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),t==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(d,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(s,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(d," .").concat(d,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(s," .").concat(s,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body {
    `).concat(x,": ").concat(o,`px;
  }
`)},V=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,a=r===void 0?"margin":r,c=f.useMemo(function(){return B(a)},[a]);return f.createElement(j,{styles:G(c,!e,a,t?"":"!important")})};export{V as R,H as a,O as c,P as e,s as f,W as s,A as u,d as z};
//# sourceMappingURL=component-71ef0e25.js.map
