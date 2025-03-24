import{j as r}from"./jsx-runtime-BpbtHYHY.js";import{useMDXComponents as t}from"./index-DL0pJNxC.js";import{M as i}from"./index-WzOI8nfV.js";import{C as s}from"./center-BgoPILRQ.js";import{I as a}from"./image-0JOkNejR.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-Civl6kSn.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./factory-B_KMcXyW.js";import"./use-image-qWTdrDZe.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-65RA3nVD.js";import"./theme-provider-DGyR61Aa.js";function e(o){const n={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...o.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Documents / Welcome"}),`
`,r.jsx(s,{mb:"16",children:r.jsx(a,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})}),`
`,r.jsx(n.h1,{id:"usage",children:"Usage"}),`
`,r.jsxs(n.ol,{children:[`
`,r.jsxs(n.li,{children:["Wrap your application with the ",r.jsx(n.code,{children:"UIProvider"})," provided"]}),`
`]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import { UIProvider } from "@yamada-ui/react"

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
`})}),`
`,r.jsx(n.p,{children:"Yamada-ui supports light and dark modes by default"}),`
`,r.jsxs(n.ol,{start:"2",children:[`
`,r.jsx(n.li,{children:"Now you can start using components like so"}),`
`]}),`
`,r.jsx(n.pre,{children:r.jsx(n.code,{className:"language-tsx",children:`import { Text } from "@yamada-ui/react"

const Example = () => {
  return <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
}
`})})]})}function U(o={}){const{wrapper:n}={...t(),...o.components};return n?r.jsx(n,{...o,children:r.jsx(e,{...o})}):e(o)}export{U as default};
