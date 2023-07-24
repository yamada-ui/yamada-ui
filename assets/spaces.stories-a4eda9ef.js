import{M as h}from"./index-0466dac8.js";import{J as p}from"./components-83b33aeb.js";import{r as x}from"./index-1cdf6ce0.js";import{j as r,a as c,F as g}from"./jsx-runtime-276775ef.js";import{G as l}from"./grid-8d2b2fbf.js";import{u as a}from"./index-69b0450a.js";import{T as e}from"./text-914562f0.js";import{B as m}from"./box-34b29ebb.js";import{d as f}from"./index-1d8ff3ed.js";import"./iframe-cd219d1c.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./index-a01a9712.js";import"./inheritsLoose-c82a83d4.js";import"./index-c8f542d6.js";import"./index-356e4a49.js";import"./index-4250150d.js";import"./ui-provider-b8ae2fed.js";import"./environment-provider-f0cd95a3.js";import"./factory-75cc801c.js";import"./loading-provider-d366d231.js";import"./index-7320e9bd.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./motion-53506941.js";import"./motion-1ef152f4.js";import"./forward-ref-86842115.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./theme-8f32df8a.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./index-f3237c2b.js";import"./container-portal-1f9dc5e6.js";import"./notice-ba0e8aa8.js";import"./alert-185d7d3c.js";import"./use-component-style-9ee8741d.js";import"./close-button-a6b70db7.js";import"./container-2e66fed5.js";import"./stack-960c90c9.js";function s(i){const n=Object.assign({h1:"h1",pre:"pre",code:"code",h2:"h2"},a(),i.components);return c(g,{children:[r(h,{title:"Documents / Theme / Spaces"}),`
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
`,r(p,{children:c(l,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[r(e,{children:"Name"}),r(e,{children:"Rem"}),r(e,{children:"Pixel"}),r(m,{}),r(e,{children:"xs"}),r(e,{children:"0.25rem"}),r(e,{children:"4px"}),r(m,{maxW:"0.25rem",h:"9xs",bg:"red.500"}),r(e,{children:"sm"}),r(e,{children:"0.5rem"}),r(e,{children:"8px"}),r(m,{maxW:"0.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"md"}),r(e,{children:"1rem"}),r(e,{children:"16px"}),r(m,{maxW:"1rem",h:"9xs",bg:"red.500"}),r(e,{children:"normal"}),r(e,{children:"1.5rem"}),r(e,{children:"24px"}),r(m,{maxW:"1.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"lg"}),r(e,{children:"2rem"}),r(e,{children:"32px"}),r(m,{maxW:"2rem",h:"9xs",bg:"red.500"}),r(e,{children:"xl"}),r(e,{children:"3rem"}),r(e,{children:"48px"}),r(m,{maxW:"3rem",h:"9xs",bg:"red.500"}),r(e,{children:"2xl"}),r(e,{children:"4.5rem"}),r(e,{children:"72px"}),r(m,{maxW:"4.5rem",h:"9xs",bg:"red.500"}),r(e,{children:"3xl"}),r(e,{children:"6rem"}),r(e,{children:"96px"}),r(m,{maxW:"6rem",h:"9xs",bg:"red.500"}),r(e,{children:"4xl"}),r(e,{children:"10rem"}),r(e,{children:"160px"}),r(m,{maxW:"10rem",h:"9xs",bg:"red.500"})]})}),`
`,r(n.h2,{id:"default",children:"Default"}),`
`,r(p,{children:c(l,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[r(e,{children:"Name"}),r(e,{children:"Rem"}),r(e,{children:"Pixel"}),r(m,{}),r(e,{children:"px"}),r(e,{children:"0.0625rem"}),r(e,{children:"1px"}),r(m,{maxW:"1px",h:"9xs",bg:"green.500"}),Object.entries(f.spaces).filter(([t])=>!isNaN(Number(t))).sort(([t],[o])=>t-o).map(([t,o])=>c(x.Fragment,{children:[r(e,{children:t}),r(e,{children:o}),r(e,{children:`${parseFloat(o)*16}px`}),r(m,{maxW:o,h:"9xs",bg:"green.500"})]},t))]})})]})}function u(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?r(n,{...i,children:r(s,{...i})}):s(i)}const b=()=>{throw new Error("Docs-only story")};b.parameters={docsOnly:!0};const d={title:"Documents / Theme / Spaces",tags:["stories-mdx"],includeStories:["__page"]};d.parameters=d.parameters||{};d.parameters.docs={...d.parameters.docs||{},page:u};const cr=["__page"];export{cr as __namedExportsOrder,b as __page,d as default};
//# sourceMappingURL=spaces.stories-a4eda9ef.js.map
