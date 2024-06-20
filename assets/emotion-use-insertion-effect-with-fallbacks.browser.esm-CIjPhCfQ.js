import{r as c,a as u}from"./index-BwDkhjyp.js";var i={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=c,v=Symbol.for("react.element"),m=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,x=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,n){var r,s={},o=null,f=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(f=e.ref);for(r in e)E.call(e,r)&&!b.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:v,type:t,key:o,ref:f,props:s,_owner:x.current}}a.Fragment=m;a.jsx=p;a.jsxs=p;i.exports=a;var k=i.exports;function l(){return l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(null,arguments)}var O=function(e){return e()},_=u.useInsertionEffect?u.useInsertionEffect:!1,R=_||O,j=_||c.useLayoutEffect;export{l as _,R as a,k as j,j as u};
