import{j as r}from"./jsx-runtime-CfatFE5O.js";import{C as o}from"./color-swatch-DnORvs5b.js";import{d as p}from"./index-CoFFd29a.js";import{W as a}from"./flex-Dy15NtS6.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-B--WxH8d.js";import"./factory-D0ba2aB7.js";import"./theme-provider-r-UN7Xzc.js";const E={component:o,title:"Components / Data Display / ColorSwatch"},e=()=>r.jsxs(r.Fragment,{children:[r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4"}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r.jsx(a,{gap:"md",children:Object.entries(p.colors.whiteAlpha??{}).map(([l,n])=>r.jsx(o,{color:n},l))}),r.jsx(a,{gap:"md",children:Object.entries(p.colors.blackAlpha??{}).map(([l,n])=>r.jsx(o,{color:n},l))})]}),s=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{variant:"basic",color:"#4387f4"}),r.jsx(o,{variant:"rounded",color:"rgba(234, 22, 174, 0.5)"})]}),t=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{size:"sm",color:"#4387f4"}),r.jsx(o,{size:"md",color:"rgba(234, 22, 174, 0.5)"}),r.jsx(o,{size:"lg",color:"hsla(251, 87%, 67%, 0.7)"})]}),c=()=>r.jsxs(a,{gap:"md",children:[r.jsx(o,{color:"#4387f4",withShadow:!1}),r.jsx(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r.jsx(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]});var i,m,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <ColorSwatch color="#4387f4" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" />
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.whiteAlpha ?? {}).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.blackAlpha ?? {}).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>
    </>;
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,w,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch variant="basic" color="#4387f4" />
      <ColorSwatch variant="rounded" color="rgba(234, 22, 174, 0.5)" />
    </Wrap>;
}`,...(S=(w=s.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var g,u,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch size="sm" color="#4387f4" />
      <ColorSwatch size="md" color="rgba(234, 22, 174, 0.5)" />
      <ColorSwatch size="lg" color="hsla(251, 87%, 67%, 0.7)" />
    </Wrap>;
}`,...(j=(u=t.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var x,f,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const V=["basic","withVariant","withSize","disabledShadow"];export{V as __namedExportsOrder,e as basic,E as default,c as disabledShadow,t as withSize,s as withVariant};
