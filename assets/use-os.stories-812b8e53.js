import{j as m,a as u}from"./jsx-runtime-03b4ddbf.js";import{T as p}from"./tag-af32064b.js";import{T as f}from"./text-64b2ab85.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-042574bb.js";import"./index-57da3535.js";import"./factory-0b90ba06.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./theme-provider-89b34f8f.js";import"./icon-583bdc7e.js";import"./index-8dce054c.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-c6f16384.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",Y={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,Y as default};
//# sourceMappingURL=use-os.stories-812b8e53.js.map
