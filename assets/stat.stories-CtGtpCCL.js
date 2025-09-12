import{n as U,I as L,d as I,g as k,u as H,j as e,s as _,A,C as f}from"./iframe-Bn8cMbTR.js";import{P as j}from"./props-table-BxRkBYtX.js";import{c as E}from"./createLucideIcon-C--YS6xs.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DGlXmtIK.js";import"./grid-item-UPArcUwJ.js";import"./for-DbXOaV0m.js";import"./flex-MN_M9PAs.js";import"./heading-Dcpj3_ac.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]],O=E("triangle",F),D=U(L)({as:O}),K=I({base:{helperMessage:{alignItems:"center",color:"fg.muted",display:"inline-flex"},icon:{"&[data-type='decrease']":{color:"fg.error",fill:"fg.error",transform:"rotate(180deg)"},"&[data-type='increase']":{color:"fg.success",fill:"fg.success"},fontSize:"1em",me:"1",verticalAlign:"middle"},label:{color:"fg.muted",fontWeight:"medium"},root:{display:"flex",flexDirection:"column"},unit:{color:"fg.muted",fontWeight:"initial",letterSpacing:"initial"},value:{alignItems:"baseline",color:"colorScheme.solid",display:"inline-flex",fontFeatureSettings:'"pnum"',fontVariantNumeric:"proportional-nums",fontWeight:"semibold",letterSpacing:"tight",lineHeight:"1",verticalAlign:"baseline"}},props:{centerContent:{false:{root:{alignItems:"flex-start"}},true:{root:{alignItems:"center"}}}},sizes:{xs:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"3xl",gap:"1"}},sm:{helperMessage:{fontSize:"xs"},label:{fontSize:"sm"},root:{gap:"1"},unit:{fontSize:"sm"},value:{fontSize:"4xl",gap:"1"}},md:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"5xl",gap:"1.5"}},lg:{helperMessage:{fontSize:"sm"},label:{fontSize:"md"},root:{gap:"2"},unit:{fontSize:"md"},value:{fontSize:"6xl",gap:"2"}}},defaultProps:{size:"md"}}),{withContext:i,withProvider:W}=k("stat",K),t=W(({children:s,helperMessage:r,icon:a,label:b,value:M,helperMessageProps:v,iconProps:z,labelProps:T,valueProps:y,...C})=>{const[w,P,R,V]=H(s,o,l,g);return e.jsxs(_.dl,{...C,children:[P??e.jsx(o,{...T,children:b}),R??e.jsx(l,{...y,children:M}),V??e.jsxs(g,{...v,children:[a?e.jsx(x,{type:a,...z}):null,r]}),w]})},"root")(),x=i(({type:s="increase",...r})=>{const{t:a}=A("stat");return e.jsx(D,{"aria-label":a(s==="increase"?"Increased by":"Decreased by"),"data-type":s,...r})},"icon")(),o=i("dt","label")(),l=i("dd","value")(),n=i("span","unit")(),g=i("dd","helperMessage")(),$={component:t,title:"Components / Stat"},c=()=>e.jsxs(t,{children:[e.jsx(o,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(g,{children:[e.jsx(x,{type:"increase"}),"21% more than last month"]})]}),m=()=>e.jsx(t,{helperMessage:"21% more than last month",icon:"increase",label:"Total Page Views",value:"1,993,818"}),p=()=>e.jsx(j,{columns:["xs","sm","md","lg"],rows:f,children:(s,r,a)=>e.jsx(t,{colorScheme:r,size:s,label:"Time to complete",value:e.jsxs(e.Fragment,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})},a)}),u=()=>e.jsx(j,{variant:"stack",rows:f,children:(s,r,a)=>e.jsx(t,{colorScheme:r,helperMessage:"21% more than last month",label:"Total Likes",value:"818K"},a)}),d=()=>e.jsx(t,{centerContent:!0,helperMessage:"From August 1 to August 18",icon:"increase",label:"Downloads",value:"18K"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Time to complete",value:e.jsxs(e.Fragment,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})}),e.jsxs(t,{children:[e.jsx(o,{children:"Time to complete"}),e.jsxs(l,{children:["8",e.jsx(n,{children:"hr"}),"18",e.jsx(n,{children:"min"})]})]})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{helperMessage:"21% more than last month",icon:"decrease",label:"Total Page Views",value:"1,993,818"}),e.jsxs(t,{children:[e.jsx(o,{children:"Total Page Views"}),e.jsx(l,{children:"1,993,818"}),e.jsxs(g,{children:[e.jsx(x,{type:"decrease"}),"21% more than last month"]})]})]});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root>
      <Stat.Label>Total Page Views</Stat.Label>
      <Stat.Value>1,993,818</Stat.Value>
      <Stat.HelperMessage>
        <Stat.Icon type="increase" />
        21% more than last month
      </Stat.HelperMessage>
    </Stat.Root>;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root helperMessage="21% more than last month" icon="increase" label="Total Page Views" value="1,993,818" />;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Stat.Root key={key} colorScheme={row} size={column} label="Time to complete" value={<>
              8<Stat.Unit>hr</Stat.Unit>
              18<Stat.Unit>min</Stat.Unit>
            </>} />}
    </PropsTable>;
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <Stat.Root key={key} colorScheme={row} helperMessage="21% more than last month" label="Total Likes" value="818K" />}
    </PropsTable>;
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root centerContent helperMessage="From August 1 to August 18" icon="increase" label="Downloads" value="18K" />;
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const ee=["Basic","PropsPattern","Size","ColorScheme","CenterContent","Unit","Decrease"];export{c as Basic,d as CenterContent,u as ColorScheme,h as Decrease,m as PropsPattern,p as Size,S as Unit,ee as __namedExportsOrder,$ as default};
