import{j as o}from"./jsx-runtime-CfatFE5O.js";import{c as a}from"./components-DwxTyLM4.js";import{f as k}from"./forward-ref-D13m8o2p.js";import{u as V}from"./use-component-style-Bj6hwx_Q.js";import{o as z}from"./theme-provider-B08WIPTu.js";import{b as _,c as b}from"./factory-ZSnRp-09.js";import{W}from"./flex-ZeDiVseB.js";import{V as l}from"./stack-C-NTCosl.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-C9iD9jp7.js";import"./text-Q2VnSl4h.js";import"./index-CReU6qRk.js";import"./use-checkbox-U_dzeJq7.js";import"./index-C676fJGf.js";import"./form-control-CsCePsX1.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./icon-D-mdHq7J.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-Bnw1OyhA.js";const e=k((r,j)=>{const[w,f]=V("Code",r),{className:v,...y}=z(f);return o.jsx(_.code,{ref:j,className:b("ui-code",v),__css:w,...y})});e.displayName="Code";e.__ui__="Code";const Vo={component:e,title:"Components / Typography / Code"},n=()=>o.jsx(e,{children:'console.log("Hello, Yamada!")'}),c=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",size:"xs",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",size:"sm",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",size:"md",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",size:"lg",children:'console.log("Hello, Yamada!")'})]}),m=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",variant:"solid",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",variant:"outline",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",variant:"subtle",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",variant:"surface",children:'console.log("Hello, Yamada!")'})]}),s=()=>o.jsxs(W,{gap:"md",w:"full",children:[o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"solid",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"outline",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"subtle",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"surface",children:'console.log("Hello, Yamada!")'},r))})]});var t,i,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return <Code>console.log("Hello, Yamada!")</Code>;
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,h,S;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <>
      <Code colorScheme="primary" size="xs">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" size="sm">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" size="md">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" size="lg">
        console.log("Hello, Yamada!")
      </Code>
    </>;
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var u,g,C;m.parameters={...m.parameters,docs:{...(u=m.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <>
      <Code colorScheme="primary" variant="solid">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="secondary" variant="outline">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="warning" variant="subtle">
        console.log("Hello, Yamada!")
      </Code>

      <Code colorScheme="danger" variant="surface">
        console.log("Hello, Yamada!")
      </Code>
    </>;
}`,...(C=(g=m.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var x,H,Y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <Wrap gap="md" w="full">
      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Code key={colorScheme} colorScheme={colorScheme} variant="solid">
            console.log("Hello, Yamada!")
          </Code>)}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Code key={colorScheme} colorScheme={colorScheme} variant="outline">
            console.log("Hello, Yamada!")
          </Code>)}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Code key={colorScheme} colorScheme={colorScheme} variant="subtle">
            console.log("Hello, Yamada!")
          </Code>)}
      </VStack>

      <VStack w="auto">
        {colorSchemes.map(colorScheme => <Code key={colorScheme} colorScheme={colorScheme} variant="surface">
            console.log("Hello, Yamada!")
          </Code>)}
      </VStack>
    </Wrap>;
}`,...(Y=(H=s.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};const zo=["basic","withSize","withVariant","withColorScheme"];export{zo as __namedExportsOrder,n as basic,Vo as default,s as withColorScheme,c as withSize,m as withVariant};
