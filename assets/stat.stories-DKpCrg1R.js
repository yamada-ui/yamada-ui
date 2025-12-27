import{n as Y,o as $,I as ee,d as te,g as ae,u as se,j as e,s as re,G as ne,C as F}from"./iframe-DaVT7dxo.js";import{P as O}from"./props-table-c8iwS7A1.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Cjbr-zPO.js";import"./grid-item-BPeiKHRL.js";import"./for-CMUOzp-w.js";import"./flex-XAtIsEC9.js";import"./heading-DKCzfUaM.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],le=Y("triangle",oe),ie=$(ee)({as:le}),ce=te({base:{helperMessage:{alignItems:"center",color:"fg.muted",display:"inline-flex"},icon:{"&[data-type='decrease']":{color:"fg.error",fill:"fg.error",transform:"rotate(180deg)"},"&[data-type='increase']":{color:"fg.success",fill:"fg.success"},fontSize:"1em",me:"1",verticalAlign:"middle"},label:{color:"fg.muted",fontWeight:"medium"},root:{display:"flex",flexDirection:"column"},unit:{color:"fg.muted",fontWeight:"initial",letterSpacing:"initial"},value:{alignItems:"baseline",color:"colorScheme.solid",display:"inline-flex",fontFeatureSettings:'"pnum"',fontVariantNumeric:"proportional-nums",fontWeight:"semibold",letterSpacing:"tight",lineHeight:"1",verticalAlign:"baseline"}},props:{centerContent:{false:{root:{alignItems:"flex-start"}},true:{root:{alignItems:"center"}}}},sizes:{xs:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"3xl",gap:"1"}},sm:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"4xl",gap:"1"}},md:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"5xl",gap:"1.5"}},lg:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"6xl",gap:"2"}}},defaultProps:{size:"md"}}),{withContext:i,withProvider:me}=ae("stat",ce),t=me(({children:s,helperMessage:r,icon:a,label:D,value:K,helperMessageProps:W,iconProps:B,labelProps:N,valueProps:G,...Z})=>{const[q,J,Q,X]=se(s,o,l,g);return e.jsxs(re.dl,{...Z,children:[J??e.jsx(o,{...N,children:D}),Q??e.jsx(l,{...G,children:K}),X??e.jsxs(g,{...W,children:[a?e.jsx(x,{type:a,...B}):null,r]}),q]})},"root")(),x=i(({type:s="increase",...r})=>{const{t:a}=ne("stat");return e.jsx(ie,{"aria-label":a(s==="increase"?"Increased by":"Decreased by"),"data-type":s,...r})},"icon")(),o=i("dt","label")(),l=i("dd","value")(),n=i("span","unit")(),g=i("dd","helperMessage")(),je={component:t,title:"Components / Stat"},c=()=>e.jsxs(t,{children:[e.jsx(o,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(g,{children:[e.jsx(x,{type:"increase"}),"21% more than last month"]})]}),m=()=>e.jsx(t,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",value:"1,993,818"}),p=()=>e.jsx(O,{columns:["xs","sm","md","lg"],rows:F,children:(s,r,a)=>e.jsx(t,{colorScheme:r,size:s,label:"Time to complete",value:e.jsxs(e.Fragment,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})},a)}),u=()=>e.jsx(O,{variant:"stack",rows:F,children:(s,r,a)=>e.jsx(t,{colorScheme:r,helperMessage:"21% more than last month",label:"Total Likes",value:"818K"},a)}),d=()=>e.jsx(t,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",value:"18K"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Time to complete",value:e.jsxs(e.Fragment,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})}),e.jsxs(t,{children:[e.jsx(o,{children:"Time to complete"}),e.jsxs(l,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})]})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",value:"1,993,818"}),e.jsxs(t,{children:[e.jsx(o,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(g,{children:[e.jsx(x,{type:"decrease"}),"21% more than last month"]})]})]});var f,j,b;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Stat.Root>
      <Stat.Label>Total Page Views</Stat.Label>
      <Stat.Value>1,993,818</Stat.Value>
      <Stat.HelperMessage>
        <Stat.Icon type="increase" />
        21% more than last month
      </Stat.HelperMessage>
    </Stat.Root>;
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var M,v,z;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Stat.Root helperMessage="21% more than last month" icon="increase" label="Total Page Views" value="1,993,818" />;
}`,...(z=(v=m.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var T,y,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Stat.Root key={key} colorScheme={row} size={column} label="Time to complete" value={<>
              8<Stat.Unit>hr</Stat.Unit>
              18<Stat.Unit>min</Stat.Unit>
            </>} />}
    </PropsTable>;
}`,...(C=(y=p.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,P,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <Stat.Root key={key} colorScheme={row} helperMessage="21% more than last month" label="Total Likes" value="818K" />}
    </PropsTable>;
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var V,U,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Stat.Root centerContent helperMessage="From August 1 to August 18" icon="increase" label="Downloads" value="18K" />;
}`,...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var I,k,H;S.parameters={...S.parameters,docs:{...(I=S.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <>
      <Stat.Root label="Time to complete" value={<>
            8<Stat.Unit>hr</Stat.Unit>
            18<Stat.Unit>min</Stat.Unit>
          </>} />

      <Stat.Root>
        <Stat.Label>Time to complete</Stat.Label>
        <Stat.Value>
          8<Stat.Unit>hr</Stat.Unit>
          18<Stat.Unit>min</Stat.Unit>
        </Stat.Value>
      </Stat.Root>
    </>;
}`,...(H=(k=S.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var _,E,A;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <>
      <Stat.Root helperMessage="21% more than last month" icon="decrease" label="Total Page Views" value="1,993,818" />

      <Stat.Root>
        <Stat.Label>Total Page Views</Stat.Label>
        <Stat.Value>1,993,818</Stat.Value>
        <Stat.HelperMessage>
          <Stat.Icon type="decrease" />
          21% more than last month
        </Stat.HelperMessage>
      </Stat.Root>
    </>;
}`,...(A=(E=h.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};const be=["Basic","PropsPattern","Size","ColorScheme","CenterContent","Unit","Decrease"];export{c as Basic,d as CenterContent,u as ColorScheme,h as Decrease,m as PropsPattern,p as Size,S as Unit,be as __namedExportsOrder,je as default};
