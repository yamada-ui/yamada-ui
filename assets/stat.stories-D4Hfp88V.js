import{i as e}from"./preload-helper-B45gAKPr.js";import{pt as t,tr as n}from"./core-RNiP33lW.js";import{t as r}from"./jsx-runtime-BBQGix-2.js";import{_n as i,bn as a,gn as o,hn as s,vn as c,xn as l,yn as u}from"./iframe-Clx83w1K.js";import{n as d,t as f}from"./storybook-BXu3k916.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{f(),t(),s(),p=r(),m={component:u,title:`Components / Stat`},h=()=>(0,p.jsxs)(u,{children:[(0,p.jsx)(c,{children:`Total Page Views`}),(0,p.jsx)(l,{children:`1,993,818`}),(0,p.jsxs)(o,{children:[(0,p.jsx)(i,{type:`increase`}),`21% more than last month`]})]}),g=()=>(0,p.jsx)(u,{helperMessage:`21% more than last month`,icon:`increase`,label:`Total Page Views`,value:`1,993,818`}),_=()=>(0,p.jsx)(d,{columns:[`xs`,`sm`,`md`,`lg`],rows:n,children:(e,t,n)=>(0,p.jsx)(u,{colorScheme:t,size:e,label:`Time to complete`,value:(0,p.jsxs)(p.Fragment,{children:[`8`,(0,p.jsx)(a,{children:`hr`}),`18`,(0,p.jsx)(a,{children:`min`})]})},n)}),v=()=>(0,p.jsx)(d,{variant:`stack`,rows:n,children:(e,t,n)=>(0,p.jsx)(u,{colorScheme:t,helperMessage:`21% more than last month`,label:`Total Likes`,value:`818K`},n)}),y=()=>(0,p.jsx)(u,{centerContent:!0,helperMessage:`From August 1 to August 18`,icon:`increase`,label:`Downloads`,value:`18K`}),b=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{label:`Time to complete`,value:(0,p.jsxs)(p.Fragment,{children:[`8`,(0,p.jsx)(a,{children:`hr`}),`18`,(0,p.jsx)(a,{children:`min`})]})}),(0,p.jsxs)(u,{children:[(0,p.jsx)(c,{children:`Time to complete`}),(0,p.jsxs)(l,{children:[`8`,(0,p.jsx)(a,{children:`hr`}),`18`,(0,p.jsx)(a,{children:`min`})]})]})]}),x=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{helperMessage:`21% more than last month`,icon:`decrease`,label:`Total Page Views`,value:`1,993,818`}),(0,p.jsxs)(u,{children:[(0,p.jsx)(c,{children:`Total Page Views`}),(0,p.jsx)(l,{children:`1,993,818`}),(0,p.jsxs)(o,{children:[(0,p.jsx)(i,{type:`decrease`}),`21% more than last month`]})]})]}),h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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