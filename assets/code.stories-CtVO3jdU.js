import{j as o}from"./jsx-runtime-CfatFE5O.js";import{c as a}from"./components-CjEd-fpd.js";import{f as k}from"./forward-ref-D13m8o2p.js";import{u as V}from"./use-component-style-DXYrx7jC.js";import{o as z}from"./theme-provider-BsBO7Bt7.js";import{b as _,c as b}from"./factory-Nur_zO5a.js";import{W}from"./flex-D0g4BNvT.js";import{V as l}from"./stack-C0yA_Fgo.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-D-QJtIN2.js";import"./text-62Futka0.js";import"./index-B1nZG4Mb.js";import"./use-checkbox-CGCpte5c.js";import"./index-BEKWAhRA.js";import"./form-control-zj-lY-eQ.js";import"./factory-C7oui4wX.js";import"./proxy-BYKFXsWv.js";import"./index-DKQLNlvR.js";import"./index-B_YN6e7D.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BmU0CMcq.js";import"./tooltip-8cg3dupo.js";import"./index-DdZUI5bP.js";import"./index-BMKmWsig.js";import"./index-CBbxfOTw.js";import"./index-CpbJQdhj.js";import"./index-0izHGgc0.js";import"./index-BkD6i14w.js";import"./portal-BYArVHbV.js";import"./index-ZuzByk-F.js";import"./slide-fade-Cmuj6chS.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Le3SFznY.js";import"./scale-fade-DZMuid-q.js";import"./index-hBuKIhm7.js";import"./index-S7lgn1rl.js";import"./select-T1HpgUPI.js";import"./select-list-CuZRFrrL.js";import"./index-Ci6jtn_l.js";import"./icon-M07mMfJs.js";import"./popover-trigger-VZ6-C5a8.js";import"./close-button-hZ5Z7fa0.js";import"./use-ripple-D3zgM-CO.js";import"./index-X5oM7jx7.js";import"./index-gGKStiao.js";import"./index-DmyN1gVE.js";const e=k((r,j)=>{const[w,f]=V("Code",r),{className:v,...y}=z(f);return o.jsx(_.code,{ref:j,className:b("ui-code",v),__css:w,...y})});e.displayName="Code";e.__ui__="Code";const Vo={component:e,title:"Components / Typography / Code"},n=()=>o.jsx(e,{children:'console.log("Hello, Yamada!")'}),c=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",size:"xs",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",size:"sm",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",size:"md",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",size:"lg",children:'console.log("Hello, Yamada!")'})]}),m=()=>o.jsxs(o.Fragment,{children:[o.jsx(e,{colorScheme:"primary",variant:"solid",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"secondary",variant:"outline",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"warning",variant:"subtle",children:'console.log("Hello, Yamada!")'}),o.jsx(e,{colorScheme:"danger",variant:"surface",children:'console.log("Hello, Yamada!")'})]}),s=()=>o.jsxs(W,{gap:"md",w:"full",children:[o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"solid",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"outline",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"subtle",children:'console.log("Hello, Yamada!")'},r))}),o.jsx(l,{w:"auto",children:a.map(r=>o.jsx(e,{colorScheme:r,variant:"surface",children:'console.log("Hello, Yamada!")'},r))})]});var t,i,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
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
