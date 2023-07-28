import{a as m,j as u}from"./jsx-runtime-276775ef.js";import{T as p}from"./tag-e8d7c8f0.js";import{T as f}from"./text-1e5971fb.js";import"./index-1cdf6ce0.js";import"./index-d3c113d0.js";import"./index-9326d079.js";import"./factory-54465b8b.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./theme-ead977c1.js";import"./icon-a990f23f.js";import"./index-553b807d.js";import"./forward-ref-86842115.js";import"./use-component-style-645da9e2.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",E={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,E as default};
//# sourceMappingURL=use-os.stories-ad74a859.js.map
