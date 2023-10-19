import{j as m,a as u}from"./jsx-runtime-b08f8875.js";import{T as p}from"./tag-3bb010aa.js";import{T as f}from"./text-50bfeca2.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-b013f003.js";import"./index-a3b565a7.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./icon-1c0bf186.js";import"./index-6cdd3cb8.js";import"./theme-provider-1097130b.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-07e84389.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",Y={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,Y as default};
//# sourceMappingURL=use-os.stories-e68e66ee.js.map
