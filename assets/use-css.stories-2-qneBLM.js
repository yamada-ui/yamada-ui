import{c1 as M,c2 as j,c3 as g,c4 as G,ax as R,c5 as H,r as C,c6 as T,j as E}from"./iframe-D_HYglKf.js";import{B as w}from"./box-Dq_m1DJN.js";import"./preload-helper-C1FmrZbK.js";function p(s,n){if(s.inserted[n.name]===void 0)return s.insert("",n,s.sheet,!0)}function v(s,n,e){var o=[],c=j(s,o,e);return o.length<2?e:c+n(o)}var W=function(n){var e=M(n);e.sheet.speedy=function(u){this.isSpeedy=u},e.compat=!0;var o=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered,void 0);return G(e,m,!1),e.key+"-"+m.name},c=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered),h="animation-"+m.name;return p(e,{name:m.name,styles:"@keyframes "+h+"{"+m.styles+"}"}),h},i=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];var m=g(a,e.registered);p(e,m)},l=function(){for(var t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return v(e.registered,o,$(a))};return{css:o,cx:l,injectGlobal:i,keyframes:c,hydrate:function(t){t.forEach(function(a){e.inserted[a]=!0})},flush:function(){e.registered={},e.inserted={},e.sheet.flush()},sheet:e.sheet,cache:e,getRegisteredStyles:j.bind(null,e.registered),merge:v.bind(null,e.registered,o)}},$=function s(n){for(var e="",o=0;o<n.length;o++){var c=n[o];if(c!=null){var i=void 0;switch(typeof c){case"boolean":break;case"object":{if(Array.isArray(c))i=s(c);else{i="";for(var l in c)c[l]&&l&&(i&&(i+=" "),i+=l)}break}default:i=c}i&&(e&&(e+=" "),e+=i)}}return e},q=W({key:"css"}),D=q.css;const z=(s={})=>{const n=R(),{theme:e}=H();return C.useMemo(()=>F(n,e)(s),[s,n,e])},F=(s,n)=>(e={})=>D(T(s,n)(e)),L={title:"Hooks / useCSS"},d=()=>{const s=z({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"});return E.jsx(w,{className:s,children:"Box"})},f=()=>{const s=C.useMemo(()=>({bg:"mono",color:"mono.contrast",p:"md",rounded:"md"}),[]),n=z(s);return E.jsx(w,{className:n,children:"Box"})};var x,S,y;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const className = useCSS({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  });
  return <Box className={className}>Box</Box>;
}`,...(y=(S=d.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var b,B,N;f.parameters={...f.parameters,docs:{...(b=f.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const css = useMemo(() => ({
    bg: "mono",
    color: "mono.contrast",
    p: "md",
    rounded: "md"
  }), []);
  const className = useCSS(css);
  return <Box className={className}>Box</Box>;
}`,...(N=(B=f.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const O=["Basic","Memoization"];export{d as Basic,f as Memoization,O as __namedExportsOrder,L as default};
