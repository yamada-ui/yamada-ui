import{bB as C,bC as x,bD as g,bE as E,ax as N,bk as j,r as S,bF as w,j as b}from"./iframe-COpE3uSe.js";import{B as y}from"./box-D7U2gjmM.js";import"./preload-helper-D9Z9MdNV.js";function p(s,n){if(s.inserted[n.name]===void 0)return s.insert("",n,s.sheet,!0)}function v(s,n,e){var o=[],c=x(s,o,e);return o.length<2?e:c+n(o)}var z=function(n){var e=C(n);e.sheet.speedy=function(u){this.isSpeedy=u},e.compat=!0;var o=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered,void 0);return E(e,m,!1),e.key+"-"+m.name},c=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered),h="animation-"+m.name;return p(e,{name:m.name,styles:"@keyframes "+h+"{"+m.styles+"}"}),h},i=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered);p(e,m)},l=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return v(e.registered,o,M(a))};return{css:o,cx:l,injectGlobal:i,keyframes:c,hydrate:function(t){t.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:x.bind(null,e.registered),merge:v.bind(null,e.registered,o)}},M=function s(n){for(var e="",o=0;o<n.length;o++){var c=n[o];if(c!=null){var i=void 0;switch(typeof c){case"boolean":break;case"object":{if(Array.isArray(c))i=s(c);else{i="";for(var l in c)c[l]&&l&&(i&&(i+=" "),i+=l)}break}default:i=c}i&&(e&&(e+=" "),e+=i)}}return e},G=z({key:"css"}),R=G.css;const B=(s={})=>{const n=N(),{theme:e}=j();return S.useMemo(()=>D(n,e)(s),[s,n,e])},D=(s,n)=>(e={})=>R(w(s,n)(e)),W={title:"Hooks / useCSS"},d=()=>{const s=B({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"});return b.jsx(y,{className:s,children:"Box"})},f=()=>{const s=S.useMemo(()=>({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"}),[]),n=B(s);return b.jsx(y,{className:n,children:"Box"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...f.parameters?.docs?.source}}};const $=["Basic","Memoization"];export{d as Basic,f as Memoization,$ as __namedExportsOrder,W as default};
