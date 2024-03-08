import{a as e,F as z,j as r}from"./jsx-runtime-5BUNAZ9W.js";import{d as i}from"./index-xNRvIn36.js";import{C as o}from"./color-swatch-qpsTNy-u.js";import{W as a}from"./flex-D2teTW8h.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-bBWP4weD.js";import"./factory-d4qha7R6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-d9n8R3cE.js";const E={title:"Components / Data Display / ColorSwatch",component:o},c=()=>e(z,{children:[e(a,{gap:"md",children:[r(o,{color:"#4387f4"}),r(o,{color:"rgba(234, 22, 174, 0.5)"}),r(o,{color:"hsla(251, 87%, 67%, 0.7)"})]}),r(a,{gap:"md",children:Object.entries(i.colors.whiteAlpha).map(([n,p])=>r(o,{color:p},n))}),r(a,{gap:"md",children:Object.entries(i.colors.blackAlpha).map(([n,p])=>r(o,{color:p},n))})]}),t=()=>e(a,{gap:"md",children:[r(o,{color:"#4387f4",variant:"basic"}),r(o,{color:"rgba(234, 22, 174, 0.5)",variant:"rounded"})]}),s=()=>e(a,{gap:"md",children:[r(o,{color:"#4387f4",size:"sm"}),r(o,{color:"rgba(234, 22, 174, 0.5)",size:"md"}),r(o,{color:"hsla(251, 87%, 67%, 0.7)",size:"lg"})]}),l=()=>e(a,{gap:"md",children:[r(o,{color:"#4387f4",withShadow:!1}),r(o,{color:"rgba(234, 22, 174, 0.5)",withShadow:!1}),r(o,{color:"hsla(251, 87%, 67%, 0.7)",withShadow:!1})]});var m,d,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <ColorSwatch color="#4387f4" />
        <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
        <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" />
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.whiteAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>

      <Wrap gap="md">
        {Object.entries(defaultTheme.colors.blackAlpha).map(([key, color]) => <ColorSwatch key={key} color={color} />)}
      </Wrap>
    </>;
}`,...(h=(d=c.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var w,S,g;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" variant="basic" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" variant="rounded" />
    </Wrap>;
}`,...(g=(S=t.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var u,f,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" size="sm" />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" size="md" />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" size="lg" />
    </Wrap>;
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,W,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <ColorSwatch color="#4387f4" withShadow={false} />
      <ColorSwatch color="rgba(234, 22, 174, 0.5)" withShadow={false} />
      <ColorSwatch color="hsla(251, 87%, 67%, 0.7)" withShadow={false} />
    </Wrap>;
}`,...(k=(W=l.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};const q=["basic","withVariant","withSize","disabledShadow"];export{q as __namedExportsOrder,c as basic,E as default,l as disabledShadow,s as withSize,t as withVariant};
