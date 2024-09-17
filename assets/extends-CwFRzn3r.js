import{r as _}from"./index-BwDkhjyp.js";var u={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=_,m=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,v=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function i(t,r,n){var e,o={},a=null,p=null;n!==void 0&&(a=""+n),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)y.call(r,e)&&!x.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:m,type:t,key:a,ref:p,props:o,_owner:v.current}}s.Fragment=c;s.jsx=i;s.jsxs=i;u.exports=s;var d=u.exports;function f(){return f=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)({}).hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t},f.apply(null,arguments)}export{f as _,d as j};
