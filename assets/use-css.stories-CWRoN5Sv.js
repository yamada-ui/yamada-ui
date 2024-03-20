import{j as N}from"./jsx-runtime-CKrituN3.js";import{r as h}from"./index-CBqU2yxZ.js";import{a7 as M,a8 as E,a9 as p,aa as R,ab as G,ac as H}from"./factory-jQ8alorc.js";import{B as j}from"./box-DTX5RwVd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";function g(s,t){if(s.inserted[t.name]===void 0)return s.insert("",t,s.sheet,!0)}function x(s,t,e){var o=[],i=E(s,o,e);return o.length<2?e:i+t(o)}var T=function(t){var e=M(t);e.sheet.speedy=function(u){this.isSpeedy=u},e.compat=!0;var o=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var m=p(a,e.registered,void 0);return R(e,m,!1),e.key+"-"+m.name},i=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var m=p(a,e.registered),v="animation-"+m.name;return g(e,{name:m.name,styles:"@keyframes "+v+"{"+m.styles+"}"}),v},c=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];var m=p(a,e.registered);g(e,m)},l=function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return x(e.registered,o,W(a))};return{css:o,cx:l,injectGlobal:c,keyframes:i,hydrate:function(n){n.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:E.bind(null,e.registered),merge:x.bind(null,e.registered,o)}},W=function s(t){for(var e="",o=0;o<t.length;o++){var i=t[o];if(i!=null){var c=void 0;switch(typeof i){case"boolean":break;case"object":{if(Array.isArray(i))c=s(i);else{c="";for(var l in i)i[l]&&l&&(c&&(c+=" "),c+=l)}break}default:c=i}c&&(e&&(e+=" "),e+=c)}}return e},$=T({key:"css"}),q=$.css;const z=(s={})=>{const t=h.useContext(G);return h.useMemo(()=>D(s)(t),[s,t])},D=(s={})=>t=>q(H(s)(t)),P={title:"Hooks / useCSS"},f=()=>{const s=z({p:"md",rounded:"md",bg:"primary",color:"white"});return N.jsx(j,{className:s,children:"Box"})},d=()=>{const s=h.useMemo(()=>({p:"md",rounded:"md",bg:"primary",color:"white"}),[]),t=z(s);return N.jsx(j,{className:t,children:"Box"})};var S,y,b;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const className = useCSS({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  });
  return <Box className={className}>Box</Box>;
}`,...(b=(y=f.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,B,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    p: "md",
    rounded: "md",
    bg: "primary",
    color: "white"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(C=(B=d.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const Q=["basic","memoization"];export{Q as __namedExportsOrder,f as basic,P as default,d as memoization};
