import{j as m,a as u}from"./jsx-runtime-4d953e71.js";import{T as p}from"./text-afdead5d.js";import{T as f}from"./tag-2f2e44d1.js";import"./index-de62f0e0.js";import"./forward-ref-396247d7.js";import"./use-component-style-a395c77f.js";import"./theme-326cd56d.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./index-f5798947.js";import"./index-690d7341.js";import"./icon-5ed183e8.js";import"./index-ac0f8f33.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",E={title:"Hooks / useOS"},o=()=>{const t=w();return m(p,{children:["Your os is ",u(f,{children:t})]})};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,E as default};
//# sourceMappingURL=use-os.stories-b4a2474b.js.map
