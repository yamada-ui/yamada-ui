import{q as h,I as x,d as y,f as T,r as k,j as e,s as b,C,V as R,y as v}from"./iframe-BHpF9Anv.js";import{P as S}from"./props-table-BDseLMKU.js";import{C as D}from"./close-button-BCaMbwt4.js";import{c as j}from"./createLucideIcon-Ch8LwIgJ.js";import{u as I}from"./button-D5SiRG3I.js";import"./grid-ByedI7Nf.js";import"./grid-item-DEAolyKT.js";import"./for-ByLCT2H8.js";import"./flex-BfatBxpB.js";import"./heading-D9cNz4N2.js";import"./icon-button-Dh58kTcW.js";import"./x-icon-DEXWImVD.js";import"./use-ripple-CxqsGXIn.js";import"./rings-BBe5N9Nh.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],L=j("circle-check-big",w);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],z=j("info",_);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]],E=j("octagon-alert",M);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],O=j("triangle-alert",P),V=h(x)({as:L}),B=h(x)({as:z}),H=h(x)({as:E}),N=h(x)({as:O}),F=y({base:{description:{lineHeight:"shorter"},icon:{boxSize:"5",flexShrink:0,fontSize:"xl",marginEnd:"3"},loading:{flexShrink:0,fontSize:"xl",marginEnd:"3"},root:{alignItems:"start",display:"flex",overflow:"hidden",position:"relative",px:"4",py:"3",rounded:"l2",w:"full"},title:{display:"block",lineHeight:"shorter",marginEnd:"2"}},variants:{island:{description:{color:"fg.muted"},icon:{color:"colorScheme.solid"},root:{layerStyle:"panel",pl:7,_before:{bg:"colorScheme.solid",h:"calc(100% - {sizes.5})",left:"3",position:"absolute",rounded:"full",top:"50%",transform:"translateY(-50%)",w:1}}},plain:{description:{color:"fg.muted"},icon:{color:"colorScheme.solid"},root:{layerStyle:"panel"}},solid:{icon:{textStyle:"solid"},root:{layerStyle:"solid"}},subtle:{icon:{textStyle:"subtle"},root:{layerStyle:"subtle"}},surface:{icon:{textStyle:"surface"},root:{layerStyle:"surface"}}},compounds:[{css:{icon:{color:["colorScheme.600","colorScheme.400"]}},colorScheme:["secondary","gray"],variant:"plain"}],defaultProps:{variant:"plain"}}),$={error:H,info:B,success:V,warning:N},{ComponentContext:q,useComponentContext:Y,withContext:g,withProvider:G}=T("alert",F),t=G(({status:r,colorScheme:s=r,...l})=>{const f=k.useMemo(()=>({status:r}),[r]);return e.jsx(q,{value:f,children:e.jsx(b.div,{colorScheme:s,role:"alert",...l})})},"root")({status:"info"}),i=g(({as:r,...s})=>{const{status:l}=Y(),f=r||$[l];return e.jsx(f,{...s})},"icon")(),c=g(({loadingScheme:r="oval",...s})=>{const l=I(r);return e.jsx(l,{...s})},["icon","loading"])(),n=g("p","title")(),o=g("span","description")(),ie={component:t,title:"Components / Alert"},a=()=>e.jsxs(t,{children:[e.jsx(i,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),d=()=>e.jsx(S,{variant:"stack",columns:["plain","solid","subtle","surface","island"],rows:["info","success","warning","error"],children:(r,s,l)=>e.jsxs(t,{variant:r,status:s,children:[r!=="island"?e.jsx(i,{}):null,e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]},l)}),p=()=>e.jsx(S,{variant:"stack",columns:["plain","solid","subtle","surface","island"],rows:C,children:(r,s,l)=>e.jsxs(t,{colorScheme:s,variant:r,children:[r!=="island"?e.jsx(i,{}):null,e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]},l)}),u=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{status:"info",children:[e.jsx(i,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{status:"success",children:[e.jsx(i,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{status:"warning",children:[e.jsx(i,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{status:"error",children:[e.jsx(i,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]})]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{variant:"plain",status:"info",children:[e.jsx(c,{}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{variant:"subtle",status:"success",children:[e.jsx(c,{loadingScheme:"grid"}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{variant:"solid",status:"warning",children:[e.jsx(c,{loadingScheme:"puff"}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{variant:"surface",status:"error",children:[e.jsx(c,{loadingScheme:"dots"}),e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]})]}),A=()=>e.jsxs(e.Fragment,{children:[e.jsxs(t,{alignItems:"center",flexDirection:"column",h:"2xs",justifyContent:"center",status:"success",textAlign:"center",children:[e.jsx(i,{boxSize:"40px",mr:0}),e.jsx(n,{fontSize:"lg",mb:1,mr:0,mt:4,children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsxs(t,{status:"success",children:[e.jsx(i,{}),e.jsxs(R,{gap:"xs",children:[e.jsx(n,{children:"セル"}),e.jsx(o,{children:"か…完全体に………完全体になれさえすれば………！！！"})]}),e.jsx(D,{colorScheme:"mono",position:"absolute",right:2,top:2,onClick:v})]})]});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return <Alert.Root>
      <Alert.Icon />
      <Alert.Title>セル</Alert.Title>
      <Alert.Description>
        か…完全体に………完全体になれさえすれば………！！！
      </Alert.Description>
    </Alert.Root>;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["plain", "solid", "subtle", "surface", "island"]} rows={["info", "success", "warning", "error"]}>
      {(column, row, key) => {
      return <Alert.Root key={key} variant={column} status={row}>
            {column !== "island" ? <Alert.Icon /> : null}
            <Alert.Title>セル</Alert.Title>
            <Alert.Description>
              か…完全体に………完全体になれさえすれば………！！！
            </Alert.Description>
          </Alert.Root>;
    }}
    </PropsTable>;
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["plain", "solid", "subtle", "surface", "island"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Alert.Root key={key} colorScheme={row} variant={column}>
            {column !== "island" ? <Alert.Icon /> : null}
            <Alert.Title>セル</Alert.Title>
            <Alert.Description>
              か…完全体に………完全体になれさえすれば………！！！
            </Alert.Description>
          </Alert.Root>;
    }}
    </PropsTable>;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Alert.Root status="info">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="success">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="warning">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="error">
        <Alert.Icon />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>;
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Alert.Root variant="plain" status="info">
        <Alert.Loading />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="subtle" status="success">
        <Alert.Loading loadingScheme="grid" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="solid" status="warning">
        <Alert.Loading loadingScheme="puff" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root variant="surface" status="error">
        <Alert.Loading loadingScheme="dots" />
        <Alert.Title>セル</Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>
    </>;
}`,...m.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Alert.Root alignItems="center" flexDirection="column" h="2xs" justifyContent="center" status="success" textAlign="center">
        <Alert.Icon boxSize="40px" mr={0} />
        <Alert.Title fontSize="lg" mb={1} mr={0} mt={4}>
          セル
        </Alert.Title>
        <Alert.Description>
          か…完全体に………完全体になれさえすれば………！！！
        </Alert.Description>
      </Alert.Root>

      <Alert.Root status="success">
        <Alert.Icon />

        <VStack gap="xs">
          <Alert.Title>セル</Alert.Title>
          <Alert.Description>
            か…完全体に………完全体になれさえすれば………！！！
          </Alert.Description>
        </VStack>

        <CloseButton colorScheme="mono" position="absolute" right={2} top={2} onClick={noop} />
      </Alert.Root>
    </>;
}`,...A.parameters?.docs?.source}}};const ce=["Basic","Variant","ColorScheme","Status","Loading","CustomLayout"];export{a as Basic,p as ColorScheme,A as CustomLayout,m as Loading,u as Status,d as Variant,ce as __namedExportsOrder,ie as default};
