import{j as e}from"./jsx-runtime-DztICxWZ.js";import{useMDXComponents as d}from"./index-BghErDIA.js";import{M as p}from"./index-B-z1MY4b.js";import{r as o}from"./index-Bv9Y92EF.js";import{G as a}from"./grid-4Nt5rXDY.js";import{T as r}from"./text-KN7rBBtq.js";import{B as i}from"./box-Ds8SIjx6.js";import{d as c}from"./index-BylWRU36.js";import"./iframe-DMwX8sWB.js";import"./index-BcXpNjVA.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BaC3dPEX.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./theme-provider-DsbwOWxu.js";import"./use-component-style-DHLtMqa5.js";function l(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...d(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Documents / Theme / Spaces"}),`
`,e.jsx(n.h1,{id:"spaces",children:"Spaces"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const spaces = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  4.5: "1.125rem",
  5: "1.25rem",
  5.5: "1.375rem",
  6: "1.5rem",
  6.5: "1.625rem",
  7: "1.75rem",
  7.5: "1.875rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  13: "3.25rem",
  14: "3.5rem",
  15: "3.75rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  68: "17rem",
  72: "18rem",
  76: "19rem",
  80: "20rem",
  84: "21rem",
  88: "22rem",
  92: "23rem",
  96: "24rem",
}
`})}),`
`,e.jsx(n.h2,{id:"semantics",children:"Semantics"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`spaces: {
  xs: "1",
  sm: "2",
  md: "4",
  normal: "6",
  lg: "8",
  xl: "12",
  "2xl": "16",
  "3xl": "24",
  "4xl": "32",
}
`})}),`
`,e.jsx(n.h2,{id:"token",children:"Token"}),`
`,e.jsxs(a,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[e.jsx(r,{m:"0",children:"Name"}),e.jsx(r,{m:"0",children:"Rem"}),e.jsx(r,{m:"0",children:"Pixel"}),e.jsx(i,{}),Object.entries(c.semantics.spaces).map(([m,s])=>{const x=c.spaces[s];return e.jsxs(o.Fragment,{children:[e.jsx(r,{m:"0",children:m}),e.jsx(r,{m:"0",children:x}),e.jsx(r,{m:"0",children:`${parseFloat(x)*16}px`}),e.jsx(i,{maxW:x,h:"8xs",bg:"red.500"})]},m)})]}),`
`,e.jsx(n.h2,{id:"default",children:"Default"}),`
`,e.jsxs(a,{templateColumns:"5rem 5rem 5rem 1fr",my:"md",gap:"md",children:[e.jsx(r,{m:"0",children:"Name"}),e.jsx(r,{m:"0",children:"Rem"}),e.jsx(r,{m:"0",children:"Pixel"}),e.jsx(i,{}),e.jsx(r,{m:"0",children:"px"}),e.jsx(r,{m:"0",children:"0.0625rem"}),e.jsx(r,{m:"0",children:"1px"}),e.jsx(i,{maxW:"1px",h:"8xs",bg:"green.500"}),Object.entries(c.spaces).filter(([m])=>!isNaN(Number(m))).sort(([m],[s])=>m-s).map(([m,s])=>e.jsxs(o.Fragment,{children:[e.jsx(r,{m:"0",children:m}),e.jsx(r,{m:"0",children:s}),e.jsx(r,{m:"0",children:`${parseFloat(s)*16}px`}),e.jsx(i,{maxW:s,h:"8xs",bg:"green.500"})]},m))]})]})}function G(t={}){const{wrapper:n}={...d(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(l,{...t})}):l(t)}export{G as default};
