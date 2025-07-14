import{bo as N,bp as S,bq as g,br as j,ag as C,b9 as E,r as x,bs as w,j as b}from"./iframe-Cn-KGvUL.js";import{B as y}from"./box-BN1cq553.js";function p(r,n){if(r.inserted[n.name]===void 0)return r.insert("",n,r.sheet,!0)}function v(r,n,e){var o=[],c=S(r,o,e);return o.length<2?e:c+n(o)}var z=function(n){var e=N(n);e.sheet.speedy=function(u){this.isSpeedy=u},e.compat=!0;var o=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];var m=g(a,e.registered,void 0);return j(e,m,!1),e.key+"-"+m.name},c=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];var m=g(a,e.registered),h="animation-"+m.name;return p(e,{name:m.name,styles:"@keyframes "+h+"{"+m.styles+"}"}),h},i=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];var m=g(a,e.registered);p(e,m)},l=function(){for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return v(e.registered,o,M(a))};return{css:o,cx:l,injectGlobal:i,keyframes:c,hydrate:function(t){t.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:S.bind(null,e.registered),merge:v.bind(null,e.registered,o)}},M=function r(n){for(var e="",o=0;o<n.length;o++){var c=n[o];if(c!=null){var i=void 0;switch(typeof c){case"boolean":break;case"object":{if(Array.isArray(c))i=r(c);else{i="";for(var l in c)c[l]&&l&&(i&&(i+=" "),i+=l)}break}default:i=c}i&&(e&&(e+=" "),e+=i)}}return e},G=z({key:"css"}),R=G.css;const B=(r={})=>{const n=C(),{theme:e}=E();return x.useMemo(()=>q(n,e)(r),[r,n,e])},q=(r,n)=>(e={})=>R(w(r,n)(e)),W={title:"Hooks / useCSS"},d=()=>{const r=B({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"});return b.jsx(y,{className:r,children:"Box"})},f=()=>{const r=x.useMemo(()=>({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"}),[]),n=B(r);return b.jsx(y,{className:n,children:"Box"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
