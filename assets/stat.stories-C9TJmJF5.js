import{n as e}from"./chunk-zsgVPwQN.js";import{Cp as t,Ft as n,It as r,Lt as i,Nt as a,Pt as o,Rt as s,dp as c,pp as l,zt as u}from"./iframe-a-xI_IFE.js";import{n as d,t as f}from"./storybook-BiX3a8CE.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{f(),c(),a(),p=l(),m={component:i,title:`Components / Stat`},h=()=>(0,p.jsxs)(i,{children:[(0,p.jsx)(r,{children:`Total Page Views`}),(0,p.jsx)(u,{children:`1,993,818`}),(0,p.jsxs)(o,{children:[(0,p.jsx)(n,{type:`increase`}),`21% more than last month`]})]}),g=()=>(0,p.jsx)(i,{helperMessage:`21% more than last month`,icon:`increase`,label:`Total Page Views`,value:`1,993,818`}),_=()=>(0,p.jsx)(d,{columns:[`xs`,`sm`,`md`,`lg`],rows:t,children:(e,t,n)=>(0,p.jsx)(i,{colorScheme:t,size:e,label:`Time to complete`,value:(0,p.jsxs)(p.Fragment,{children:[`8`,(0,p.jsx)(s,{children:`hr`}),`18`,(0,p.jsx)(s,{children:`min`})]})},n)}),v=()=>(0,p.jsx)(d,{variant:`stack`,rows:t,children:(e,t,n)=>(0,p.jsx)(i,{colorScheme:t,helperMessage:`21% more than last month`,label:`Total Likes`,value:`818K`},n)}),y=()=>(0,p.jsx)(i,{centerContent:!0,helperMessage:`From August 1 to August 18`,icon:`increase`,label:`Downloads`,value:`18K`}),b=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{label:`Time to complete`,value:(0,p.jsxs)(p.Fragment,{children:[`8`,(0,p.jsx)(s,{children:`hr`}),`18`,(0,p.jsx)(s,{children:`min`})]})}),(0,p.jsxs)(i,{children:[(0,p.jsx)(r,{children:`Time to complete`}),(0,p.jsxs)(u,{children:[`8`,(0,p.jsx)(s,{children:`hr`}),`18`,(0,p.jsx)(s,{children:`min`})]})]})]}),x=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i,{helperMessage:`21% more than last month`,icon:`decrease`,label:`Total Page Views`,value:`1,993,818`}),(0,p.jsxs)(i,{children:[(0,p.jsx)(r,{children:`Total Page Views`}),(0,p.jsx)(u,{children:`1,993,818`}),(0,p.jsxs)(o,{children:[(0,p.jsx)(n,{type:`decrease`}),`21% more than last month`]})]})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root>
      <Stat.Label>Total Page Views</Stat.Label>
      <Stat.Value>1,993,818</Stat.Value>
      <Stat.HelperMessage>
        <Stat.Icon type="increase" />
        21% more than last month
      </Stat.HelperMessage>
    </Stat.Root>;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root helperMessage="21% more than last month" icon="increase" label="Total Page Views" value="1,993,818" />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["xs", "sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Stat.Root key={key} colorScheme={row} size={column} label="Time to complete" value={<>
              8<Stat.Unit>hr</Stat.Unit>
              18<Stat.Unit>min</Stat.Unit>
            </>} />}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <Stat.Root key={key} colorScheme={row} helperMessage="21% more than last month" label="Total Likes" value="818K" />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <Stat.Root centerContent helperMessage="From August 1 to August 18" icon="increase" label="Downloads" value="18K" />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}},S=[`Basic`,`PropsPattern`,`Size`,`ColorScheme`,`CenterContent`,`Unit`,`Decrease`]}))();export{h as Basic,y as CenterContent,v as ColorScheme,x as Decrease,g as PropsPattern,_ as Size,b as Unit,S as __namedExportsOrder,m as default};