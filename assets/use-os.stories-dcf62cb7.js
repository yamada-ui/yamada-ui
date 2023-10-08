import{a as m,j as u}from"./jsx-runtime-29545a09.js";import{T as p}from"./tag-e36e36d9.js";import{T as f}from"./text-55afa3ec.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-21c73088.js";import"./index-37b4dfa9.js";import"./factory-ea08dcfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./theme-17a0d6cf.js";import"./icon-cd648dc6.js";import"./index-c817ab90.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-fa830b0f.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",Y={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,Y as default};
//# sourceMappingURL=use-os.stories-dcf62cb7.js.map
