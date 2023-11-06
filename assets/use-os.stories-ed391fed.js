import{j as m,a as u}from"./jsx-runtime-03b4ddbf.js";import{T as p}from"./tag-3aae264d.js";import{T as f}from"./text-d5943c82.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-78c604bb.js";import"./index-8d83eaa2.js";import"./factory-c9bc4a28.js";import"./icon-e1655999.js";import"./index-f08d32bc.js";import"./theme-provider-a03ffa08.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-ab2b35f8.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",E={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,E as default};
//# sourceMappingURL=use-os.stories-ed391fed.js.map
