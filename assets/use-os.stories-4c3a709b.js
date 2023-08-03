import{a as m,j as u}from"./jsx-runtime-37f7df21.js";import{T as p}from"./tag-316790e2.js";import{T as f}from"./text-6737f911.js";import"./index-f1f2c4b1.js";import"./index-a86b0e54.js";import"./index-9082b512.js";import"./factory-81c6291d.js";import"./extends-3d932e16.js";import"./theme-2b4f2a73.js";import"./icon-36765902.js";import"./index-e84132d8.js";import"./forward-ref-92ccee95.js";import"./use-component-style-f03a93f0.js";const x=()=>{const{userAgent:t}=window.navigator,n=/(Macintosh)|(MacIntel)|(MacPPC)|(Mac68K)/i,e=/(Win32)|(Win64)|(Windows)|(WinCE)/i,a=/(iPhone)|(iPad)|(iPod)/i,c=/Android/i,d=/Linux/i;return n.test(t)?"macos":a.test(t)?"ios":e.test(t)?"windows":c.test(t)?"android":d.test(t)?"linux":"undetermined"},w=()=>typeof window<"u"?x():"undetermined",E={title:"Hooks / useOS"},o=()=>{const t=w();return m(f,{children:["Your os is ",u(p,{children:t})]})};var r,s,i;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const os = useOS();
  return <Text>
      Your os is <Tag>{os}</Tag>
    </Text>;
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};const Y=["basic"];export{Y as __namedExportsOrder,o as basic,E as default};
//# sourceMappingURL=use-os.stories-4c3a709b.js.map
