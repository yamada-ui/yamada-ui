import{q as I,I as k,d as H,f as E,k as _,l as f,n as D,o as F,j as e,s as A,F as O,C as b}from"./iframe-BG38LAQ9.js";import{c as K}from"./createLucideIcon-CsglGZ6M.js";import{P as M}from"./props-table-JZnj-Axh.js";import"./grid-C7OhmlE8.js";import"./grid-item-KziFp2cJ.js";import"./for-1Jrr3mXT.js";import"./flex-BnFbM7LR.js";import"./heading-DSMkYvJJ.js";/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],B=K("triangle",W),N=I(k)({as:B}),q=H({base:{helperMessage:{alignItems:"center",color:"fg.muted",display:"inline-flex"},icon:{"&[data-type='decrease']":{color:"fg.error",fill:"fg.error",transform:"rotate(180deg)"},"&[data-type='increase']":{color:"fg.success",fill:"fg.success"},fontSize:"1em",me:"1",verticalAlign:"middle"},label:{color:"fg.muted",fontWeight:"medium"},root:{display:"flex",flexDirection:"column"},unit:{color:"fg.muted",fontWeight:"initial",letterSpacing:"initial"},value:{alignItems:"baseline",color:"colorScheme.solid",display:"inline-flex",fontFeatureSettings:'"pnum"',fontVariantNumeric:"proportional-nums",fontWeight:"semibold",letterSpacing:"tight",lineHeight:"1",verticalAlign:"baseline"}},props:{centerContent:{false:{root:{alignItems:"flex-start"}},true:{root:{alignItems:"center"}}}},sizes:{xs:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"3xl",gap:"1"}},sm:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"4xl",gap:"1"}},md:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"5xl",gap:"1.5"}},lg:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"6xl",gap:"2"}}},defaultProps:{size:"md"}}),{withContext:m,withProvider:Z}=E("stat",q),t=Z(({children:s,helperMessage:n,icon:a,label:C,value:v,helperMessageProps:y,iconProps:z,labelProps:T,valueProps:w,...P})=>{const i=_(s),V=f(i,r),R=f(i,l),U=f(i,c),L=D(i)?s:F(i,r,l,c);return e.jsxs(A.dl,{...P,children:[V??e.jsx(r,{...T,children:C}),R??e.jsx(l,{...w,children:v}),U??e.jsxs(c,{...y,children:[a?e.jsx(j,{type:a,...z}):null,n]}),L]})},"root")(),j=m(({type:s="increase",...n})=>{const{t:a}=O("stat");return e.jsx(N,{"aria-label":a(s==="increase"?"Increased by":"Decreased by"),"data-type":s,...n})},"icon")(),r=m("dt","label")(),l=m("dd","value")(),o=m("span","unit")(),c=m("dd","helperMessage")(),ae={component:t,title:"Components / Stat"},p=()=>e.jsxs(t,{children:[e.jsx(r,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(c,{children:[e.jsx(j,{type:"increase"}),"21% more than last month"]})]}),d=()=>e.jsx(t,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",value:"1,993,818"}),u=()=>e.jsx(M,{columns:["xs","sm","md","lg"],rows:b,children:(s,n,a)=>e.jsx(t,{colorScheme:n,size:s,helperMessage:"Time to complete",label:"Downloads",value:e.jsxs(e.Fragment,{children:["8",e.jsx(o,{children:"hr"}),"18",e.jsx(o,{children:"min"})]})},a)}),S=()=>e.jsx(M,{variant:"stack",rows:b,children:(s,n,a)=>e.jsx(t,{colorScheme:n,helperMessage:"21% more than last month",label:"Total Likes",value:"818K"},a)}),h=()=>e.jsx(t,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",value:"18K"}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Time to complete",value:e.jsxs(e.Fragment,{children:["8",e.jsx(o,{children:"hr"}),"18",e.jsx(o,{children:"min"})]})}),e.jsxs(t,{children:[e.jsx(r,{children:"Time to complete"}),e.jsxs(l,{children:["8",e.jsx(o,{children:"hr"}),"18",e.jsx(o,{children:"min"})]})]})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",value:"1,993,818"}),e.jsxs(t,{children:[e.jsx(r,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(c,{children:[e.jsx(j,{type:"decrease"}),"21% more than last month"]})]})]});p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root>
      <Stat.Label>Total Page Views</Stat.Label>
      <Stat.Value>1,993,818</Stat.Value>
      <Stat.HelperMessage>
        <Stat.Icon type="increase" />
        21% more than last month
      </Stat.HelperMessage>
    </Stat.Root>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root helperMessage="21% more than last month" icon="increase" label="Total Page Views" value="1,993,818" />;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Stat.Root key={key} colorScheme={row} size={column} helperMessage="Time to complete" label="Downloads" value={<>
              8<Stat.Unit>hr</Stat.Unit>
              18<Stat.Unit>min</Stat.Unit>
            </>} />}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <Stat.Root key={key} colorScheme={row} helperMessage="21% more than last month" label="Total Likes" value="818K" />}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root centerContent helperMessage="From August 1 to August 18" icon="increase" label="Downloads" value="18K" />;
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};const se=["Basic","PropsPattern","Size","ColorScheme","CenterContent","Unit","Decrease"];export{p as Basic,h as CenterContent,S as ColorScheme,x as Decrease,d as PropsPattern,u as Size,g as Unit,se as __namedExportsOrder,ae as default};
