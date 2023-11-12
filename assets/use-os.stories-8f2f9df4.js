import{j as m,a as u}from"./jsx-runtime-03b4ddbf.js";import{T as p}from"./tag-00cdfdb4.js";import{T as f}from"./text-5fb4d3a2.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-7f5a09fd.js";import"./index-fb5f5578.js";import"./factory-5c69ebb0.js";import"./icon-b93ac65a.js";import"./index-e9290b19.js";import"./theme-provider-cb22a602.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-7eac11b7.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",E={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,E as default};
//# sourceMappingURL=use-os.stories-8f2f9df4.js.map
