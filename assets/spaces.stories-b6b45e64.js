import{M as h}from"./index-151b9345.js";import{J as d}from"./components-30bc794c.js";import{r as x}from"./index-61bf1805.js";import{j as r,a as p,F as g}from"./jsx-runtime-e6a661ac.js";import{G as l}from"./grid-aa9709ea.js";import{u as a}from"./index-e744116c.js";import{T as e}from"./text-db0e2e1e.js";import{B as m}from"./box-1be76882.js";import{d as f}from"./index-889e24e9.js";import"./iframe-d2008474.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./_commonjsHelpers-de833af9.js";import"./index-2801d3c9.js";import"./index-c4ced888.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./index-356e4a49.js";import"./index-e9f0f437.js";import"./ui-provider-b90281bb.js";import"./environment-provider-ca813800.js";import"./factory-3c20bca9.js";import"./loading-provider-4472eab6.js";import"./index-121a462f.js";import"./Combination-0278cbee.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-3c2f8b38.js";import"./index-1e5cc672.js";import"./theme-00f66a43.js";import"./index-14097b93.js";import"./index-f963e1c4.js";import"./icon-4e9764f5.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./notice-92746e96.js";import"./alert-69d52738.js";import"./use-component-style-b3c7bc86.js";import"./close-button-26ca03e9.js";import"./container-ecb6011b.js";import"./stack-cb01ca35.js";function s(i){const n=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2"},a(),i.components);return p(g,{children:[r(h,{title:"Documents / Theme / Spaces"}),`
`,r(n.h1,{id:"spaces",children:"Spaces"}),`
`,r(n.pre,{children:r(n.code,{className:"language-ts",children:`const spaces = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  normal: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4.5rem',
  '3xl': '6rem',
  '4xl': '10rem',

  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}
`})}),`
`,r(n.h2,{id:"token",children:"Token"}),`
`,r(d,{children:p(l,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[r(e,{children:"Name"}),r(e,{children:"Rem"}),r(e,{children:"Pixel"}),r(m,{}),r(e,{children:"xs"}),r(e,{children:"0.25rem"}),r(e,{children:"4px"}),r(m,{maxW:"0.25rem",h:"9xs",bg:"red.500"}),r(e,{children:"sm"}),r(e,{children:"0.5rem"}),r(e,{children:"8px"}),r(m,{maxW:"0.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"md"}),r(e,{children:"1rem"}),r(e,{children:"16px"}),r(m,{maxW:"1rem",h:"9xs",bg:"red.500"}),r(e,{children:"normal"}),r(e,{children:"1.5rem"}),r(e,{children:"24px"}),r(m,{maxW:"1.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"lg"}),r(e,{children:"2rem"}),r(e,{children:"32px"}),r(m,{maxW:"2rem",h:"9xs",bg:"red.500"}),r(e,{children:"xl"}),r(e,{children:"3rem"}),r(e,{children:"48px"}),r(m,{maxW:"3rem",h:"9xs",bg:"red.500"}),r(e,{children:"2xl"}),r(e,{children:"4.5rem"}),r(e,{children:"72px"}),r(m,{maxW:"4.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"3xl"}),r(e,{children:"6rem"}),r(e,{children:"96px"}),r(m,{maxW:"6rem",h:"9xs",bg:"red.500"}),r(e,{children:"4xl"}),r(e,{children:"10rem"}),r(e,{children:"160px"}),r(m,{maxW:"10rem",h:"9xs",bg:"red.500"})]})}),`
`,r(n.h2,{id:"default",children:"Default"}),`
`,r(d,{children:p(l,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[r(e,{children:"Name"}),r(e,{children:"Rem"}),r(e,{children:"Pixel"}),r(m,{}),r(e,{children:"px"}),r(e,{children:"0.0625rem"}),r(e,{children:"1px"}),r(m,{maxW:"1px",h:"9xs",bg:"green.500"}),Object.entries(f.spaces).filter(([t])=>!isNaN(Number(t))).sort(([t],[o])=>t-o).map(([t,o])=>p(x.Fragment,{children:[r(e,{children:t}),r(e,{children:o}),r(e,{children:`${parseFloat(o)*16}px`}),r(m,{maxW:o,h:"9xs",bg:"green.500"})]},t))]})})]})}function u(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?r(n,{...i,children:r(s,{...i})}):s(i)}const b=()=>{throw new Error("Docs-only story")};b.parameters={docsOnly:!0};const c={title:"Documents / Theme / Spaces",tags:["stories-mdx"],includeStories:["__page"]};c.parameters=c.parameters||{};c.parameters.docs={...c.parameters.docs||{},page:u};const cr=["__page"];export{cr as __namedExportsOrder,b as __page,c as default};
//# sourceMappingURL=spaces.stories-b6b45e64.js.map
