import{r as f}from"./index-IybTgENJ.js";var l=function(){return l=Object.assign||function(e){for(var r,t=1,a=arguments.length;t<a;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},l.apply(this,arguments)};function b(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r}function B(n,e,r){if(r||arguments.length===2)for(var t=0,a=e.length,o;t<a;t++)(o||!(t in e))&&(o||(o=Array.prototype.slice.call(e,0,t)),o[t]=e[t]);return n.concat(o||Array.prototype.slice.call(e))}var d="right-scroll-bar-position",s="width-before-scroll-bar",w="with-scroll-bars-hidden",x="--removed-body-scroll-bar-size";function E(n,e){return typeof n=="function"?n(e):n&&(n.current=e),n}function C(n,e){var r=f.useState(function(){return{value:n,callback:e,facade:{get current(){return r.value},set current(t){var a=r.value;a!==t&&(r.value=t,r.callback(t,a))}}}})[0];return r.callback=e,r.facade}function G(n,e){return C(e||null,function(r){return n.forEach(function(t){return E(t,r)})})}function h(n){return n}function m(n,e){e===void 0&&(e=h);var r=[],t=!1,a={read:function(){if(t)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:n},useMedium:function(o){var i=e(o,t);return r.push(i),function(){r=r.filter(function(c){return c!==i})}},assignSyncMedium:function(o){for(t=!0;r.length;){var i=r;r=[],i.forEach(o)}r={push:function(c){return o(c)},filter:function(){return r}}},assignMedium:function(o){t=!0;var i=[];if(r.length){var c=r;r=[],c.forEach(o),i=r}var S=function(){var u=i;i=[],u.forEach(o)},g=function(){return Promise.resolve().then(S)};g(),r={push:function(u){i.push(u),g()},filter:function(u){return i=i.filter(u),r}}}};return a}function L(n,e){return e===void 0&&(e=h),m(n,e)}function Q(n){n===void 0&&(n={});var e=m(null);return e.options=l({async:!0,ssr:!1},n),e}var y=function(n){var e=n.sideCar,r=b(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var t=e.read();if(!t)throw new Error("Sidecar medium not found");return f.createElement(t,l({},r))};y.isSideCarExport=!0;function H(n,e){return n.useMedium(e),y}var p,_=function(){if(p)return p;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function O(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=_();return e&&n.setAttribute("nonce",e),n}function R(n,e){n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}function N(n){var e=document.head||document.getElementsByTagName("head")[0];e.appendChild(n)}var j=function(){var n=0,e=null;return{add:function(r){n==0&&(e=O())&&(R(e,r),N(e)),n++},remove:function(){n--,!n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},T=function(){var n=j();return function(e,r){f.useEffect(function(){return n.add(e),function(){n.remove()}},[e&&r])}},k=function(){var n=T(),e=function(r){var t=r.styles,a=r.dynamic;return n(t,a),null};return e},I={left:0,top:0,right:0,gap:0},v=function(n){return parseInt(n||"",10)||0},M=function(n){var e=window.getComputedStyle(document.body),r=e[n==="padding"?"paddingLeft":"marginLeft"],t=e[n==="padding"?"paddingTop":"marginTop"],a=e[n==="padding"?"paddingRight":"marginRight"];return[v(r),v(t),v(a)]},W=function(n){if(n===void 0&&(n="margin"),typeof window>"u")return I;var e=M(n),r=document.documentElement.clientWidth,t=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,t-r+e[2]-e[0])}},z=k(),P=function(n,e,r,t){var a=n.left,o=n.top,i=n.right,c=n.gap;return r===void 0&&(r="margin"),`
  .`.concat(w,` {
   overflow: hidden `).concat(t,`;
   padding-right: `).concat(c,"px ").concat(t,`;
  }
  body {
    overflow: hidden `).concat(t,`;
    overscroll-behavior: contain;
    `).concat([e&&"position: relative ".concat(t,";"),r==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(i,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(t,`;
    `),r==="padding"&&"padding-right: ".concat(c,"px ").concat(t,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(d,` {
    right: `).concat(c,"px ").concat(t,`;
  }
  
  .`).concat(s,` {
    margin-right: `).concat(c,"px ").concat(t,`;
  }
  
  .`).concat(d," .").concat(d,` {
    right: 0 `).concat(t,`;
  }
  
  .`).concat(s," .").concat(s,` {
    margin-right: 0 `).concat(t,`;
  }
  
  body {
    `).concat(x,": ").concat(c,`px;
  }
`)},V=function(n){var e=n.noRelative,r=n.noImportant,t=n.gapMode,a=t===void 0?"margin":t,o=f.useMemo(function(){return W(a)},[a]);return f.createElement(z,{styles:P(o,!e,a,r?"":"!important")})};export{V as R,b as _,l as a,B as b,Q as c,L as d,H as e,s as f,k as s,G as u,d as z};
