import{a as m,j as u}from"./jsx-runtime-e6a661ac.js";import{T as p}from"./tag-63b69e2a.js";import{T as f}from"./text-c74b4a28.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-da5324ab.js";import"./index-993965ad.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./theme-2199e320.js";import"./icon-0982bb38.js";import"./index-44980711.js";import"./forward-ref-c496b87d.js";import"./use-component-style-277e16ba.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",Y={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,i,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(s=(i=o.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const _=["basic"];export{_ as __namedExportsOrder,o as basic,Y as default};
//# sourceMappingURL=use-os.stories-f15211d9.js.map
