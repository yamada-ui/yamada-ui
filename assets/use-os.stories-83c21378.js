import{j as m,a as u}from"./jsx-runtime-b08f8875.js";import{T as p}from"./tag-827312dd.js";import{T as f}from"./text-c7eceae7.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-668a9f85.js";import"./index-98029261.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./icon-a76117e5.js";import"./index-7636bab8.js";import"./theme-provider-78d359c6.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-b6002d28.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",Y={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,Y as default};
//# sourceMappingURL=use-os.stories-83c21378.js.map
