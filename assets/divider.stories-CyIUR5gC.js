import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{r as v}from"./index-BwPxMuoB.js";import{f as C}from"./forward-ref-Ukjd1cIW.js";import{u as E}from"./use-component-style-CpB_lyT3.js";import{o as L}from"./theme-provider-ChqdwXGn.js";import{b as N,c as R}from"./factory-DbNU74ts.js";import{F as B}from"./flex-BYE4mzTi.js";import"./_commonjsHelpers-Cpj98o6Y.js";const t=C((j,D)=>{const[{borderBottomWidth:s,borderColor:i,borderLeftWidth:d,borderRightWidth:l,borderStyle:a,borderTopWidth:c,borderWidth:n,...z},_]=E("Divider",j),{className:w,orientation:m="horizontal",__css:y,...W}=L(_),h=v.useMemo(()=>({horizontal:{border:"0",borderBottomWidth:s||c||n||"1px",borderColor:i,borderStyle:a,width:"100%"},vertical:{border:"0",borderColor:i,borderLeftWidth:d||l||n||"1px",borderStyle:a,height:"100%"}}),[s,i,d,l,a,c,n]),S=v.useMemo(()=>h[m],[h,m]),F={...z,...S,...y};return r.jsx(N.hr,{ref:D,className:R("ui-divider",w),__css:F,...W})});t.displayName="Divider";t.__ui__="Divider";const H={component:t,title:"Components / Layouts / Divider"},o=()=>r.jsxs(r.Fragment,{children:[r.jsx(t,{variant:"solid",orientation:"horizontal",w:"lg"}),r.jsx(t,{variant:"dashed",orientation:"horizontal",w:"lg"}),r.jsx(t,{variant:"dotted",orientation:"horizontal",w:"lg"})]}),e=()=>r.jsxs(B,{gap:"md",children:[r.jsx(t,{variant:"solid",h:"lg",orientation:"vertical"}),r.jsx(t,{variant:"dashed",h:"lg",orientation:"vertical"}),r.jsx(t,{variant:"dotted",h:"lg",orientation:"vertical"})]});var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <Divider variant="solid" orientation="horizontal" w="lg" />

      <Divider variant="dashed" orientation="horizontal" w="lg" />

      <Divider variant="dotted" orientation="horizontal" w="lg" />
    </>;
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,b;e.parameters={...e.parameters,docs:{...(x=e.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Flex gap="md">
      <Divider variant="solid" h="lg" orientation="vertical" />

      <Divider variant="dashed" h="lg" orientation="vertical" />

      <Divider variant="dotted" h="lg" orientation="vertical" />
    </Flex>;
}`,...(b=(f=e.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const I=["horizontal","vertical"];export{I as __namedExportsOrder,H as default,o as horizontal,e as vertical};
