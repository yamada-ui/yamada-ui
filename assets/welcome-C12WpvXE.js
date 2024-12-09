import{j as r}from"./jsx-runtime-CfatFE5O.js";import{useMDXComponents as t}from"./index-DUy19JZU.js";import{ae as i}from"./index-pfJQ0HjT.js";import{C as a}from"./center-BAqe7zvx.js";import{I as s}from"./image-CV7tXz41.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-DDQrYzMz.js";import"../sb-preview/runtime.js";import"./index-ZuzByk-F.js";import"./index-CJyPbrN5.js";import"./index-DrFu-skq.js";import"./factory-ZSnRp-09.js";import"./use-image-DLrTaywm.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-Bj6hwx_Q.js";import"./theme-provider-B08WIPTu.js";function o(n){const e={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...t(),...n.components};return r.jsxs(r.Fragment,{children:[r.jsx(i,{title:"Documents / Welcome"}),`
`,r.jsx(a,{mb:"16",children:r.jsx(s,{w:"full",maxW:"xl",src:"https://raw.githubusercontent.com/hirotomoyamada/yamada-ui/main/logo/logo-colored@2x.png"})}),`
`,r.jsx(e.h1,{id:"usage",children:"Usage"}),`
`,r.jsxs(e.ol,{children:[`
`,r.jsxs(e.li,{children:["Wrap your application with the ",r.jsx(e.code,{children:"UIProvider"})," provided"]}),`
`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { UIProvider } from "@yamada-ui/react"

const App = ({ children }) => {
  return <UIProvider>{children}</UIProvider>
}

export default App
`})}),`
`,r.jsx(e.p,{children:"Yamada-ui supports light and dark modes by default"}),`
`,r.jsxs(e.ol,{start:"2",children:[`
`,r.jsx(e.li,{children:"Now you can start using components like so"}),`
`]}),`
`,r.jsx(e.pre,{children:r.jsx(e.code,{className:"language-tsx",children:`import { Text } from "@yamada-ui/react"

const Example = () => {
  return <Text>ギャルのパンティーおくれーーーっ！！！！！</Text>
}
`})})]})}function U(n={}){const{wrapper:e}={...t(),...n.components};return e?r.jsx(e,{...n,children:r.jsx(o,{...n})}):o(n)}export{U as default};