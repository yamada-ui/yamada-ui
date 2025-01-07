import{j as o}from"./jsx-runtime-CfatFE5O.js";import{c as a}from"./components-BcmmBqo7.js";import{f as k}from"./forward-ref-D13m8o2p.js";import{u as V}from"./use-component-style-B--WxH8d.js";import{o as z}from"./theme-provider-r-UN7Xzc.js";import{b as _,c as b}from"./factory-D0ba2aB7.js";import{W}from"./flex-Dy15NtS6.js";import{V as l}from"./stack-CcCHu966.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-Ch0hVi2V.js";import"./text-BB5_0k3k.js";import"./index-rZyt8EED.js";import"./use-checkbox-D-VN4oI2.js";import"./index-CC4Nvd09.js";import"./form-control-BjOXh3qv.js";import"./factory-COvmBIaQ.js";import"./proxy-DYgA1A03.js";import"./index-CUCM51Cx.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-CTLjK8Sl.js";import"./tooltip-CtQO_TGc.js";import"./index-I8sPqzTA.js";import"./index-Dwwrjx8s.js";import"./index-D8fKLhx4.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./index-YDlv44yi.js";import"./portal-nz1T67ed.js";import"./index-DGFU5M_O.js";import"./slide-fade-B_qqM4fM.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-BWwQf8_A.js";import"./index-c15aqeo_.js";import"./select-tL1_OW35.js";import"./select-list-DTHtP90Y.js";import"./index-D0l_ls7Z.js";import"./icon-47ftZrjE.js";import"./popover-trigger-kCg_5LKg.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";const e=k((r,j)=>{const[w,f]=V("Code",r),{className:v,...y}=z(f);return o.jsx(_.code,{ref:j,className:b("ui-code",v),__css:w,...y})});e.displayName="Code";e.__ui__="Code";const Vo={component:e,title:"Components / Typography / Code"},n=()=>o.jsx(e,{children:'console.log("Hello, Yamada!")'}),c=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",size:"xs",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",size:"sm",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",size:"md",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",size:"lg",children:'console.log("Hello, Yamada!")'})]}),m=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",variant:"solid",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",variant:"outline",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",variant:"subtle",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",variant:"surface",children:'console.log("Hello, Yamada!")'})]}),s=()=>o.jsxs(W,{gap:"md",w:"full",children:[o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"solid",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"outline",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"subtle",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"surface",children:'console.log("Hello, Yamada!")'},r))})]});var t,i,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
