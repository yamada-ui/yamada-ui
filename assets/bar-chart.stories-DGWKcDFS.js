import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Cp as n,Xp as r,Za as i,_o as ee,as as te,do as a,dp as o,go as s,mo as c,pp as l,xo as u,yo as d,yp as f}from"./iframe-DZGIdQv0.js";import{n as p,t as m}from"./storybook-Do_1vhrs.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{m(),h=t(te(),1),g=t(r(),1),i(),o(),_=l(),v={component:a,title:`Components / Chart / BarChart`},y=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,b=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,h.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:y(),mobile:y(),tablet:y()})),x=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},S=()=>{let e=(0,g.useMemo)(()=>b(),[]);return(0,_.jsxs)(a,{data:e,children:[(0,_.jsx)(u,{labelFormatter:e=>(0,h.default)(e).format(`MMM`)}),(0,_.jsx)(ee,{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}),(0,_.jsx)(c,{dataKey:`desktop`,children:(0,_.jsx)(d,{})}),(0,_.jsx)(c,{dataKey:`tablet`}),(0,_.jsx)(c,{dataKey:`mobile`})]})},C=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(p,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,_.jsx)(a,{size:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}},i)})},w=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(p,{variant:`stack`,rows:n,children:(n,r,i)=>(0,_.jsx)(a,{colorScheme:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}},i)})},T=()=>{let e=(0,g.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`},{color:`green`,dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},E=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>Array.from({length:6},(e,t)=>({date:(0,h.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:[y(1e3,2e3),y(4e3,5e3)],mobile:[y(1e3,2e3),y(4e3,5e3)],tablet:[y(1e3,2e3),y(4e3,5e3)]})),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},D=()=>{let e=(0,g.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`,radius:[0,0,4,4],stackId:`stack`},{color:`green`,dataKey:`mobile`,radius:[4,4,0,0],stackId:`stack`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},O=()=>{let e=(0,g.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`},{color:`green`,dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,barProps:{radius:0,stackId:`stack`},chartProps:{stackOffset:`expand`},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},k=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},A=()=>{let e=(0,g.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`},{color:`green`,dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(p,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,_.jsx)(a,{data:t,series:e,withLegend:!0,legendProps:{placement:r},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}},i)})},j=()=>{let e=(0,g.useMemo)(()=>[{name:`Desktop`,color:`red`,dataKey:`desktop`},{name:`Tablet`,color:`blue`,dataKey:`tablet`},{name:`Mobile`,color:`green`,dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},M=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(p,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(n,r,i)=>(0,_.jsx)(a,{data:t,series:e,gridProps:{horizontal:r.includes(`x`),vertical:r.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}},i)})},N=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,barProps:{label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},P=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{data:t,series:e,barProps:{label:!0},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,_.jsx)(a,{data:t,series:e,withTooltip:!1,withXAxis:!1,barProps:{label:{dataKey:`date`,formatter:e=>(0,h.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},F=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{layout:`vertical`},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{type:`number`},yAxisProps:{type:`category`,dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},I=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(p,{variant:`stack`,rows:[`start`,`end`],children:(n,r,i)=>(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:r===`end`?16:0,right:r===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{orientation:r}},i)})},L=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(a,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}}),(0,_.jsx)(a,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})]})},R=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),f(t)],labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},z=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsxs)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},children:[(0,_.jsx)(s,{label:`Reference line`,y:3e3}),(0,_.jsx)(s,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,h.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,_.jsx)(s,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,h.default)().format(`YYYY-MM-DD`),y:0},{x:(0,h.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},B=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},V=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},H=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},U=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,chartProps:{barCategoryGap:32,barGap:8},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},W=()=>{let e=(0,g.useMemo)(()=>[{color:`red`,dataKey:`desktop`,radius:8},{color:`blue`,dataKey:`tablet`,radius:[0,0,8,8],stackId:`stack`},{color:`green`,dataKey:`mobile`,radius:[8,8,0,0],stackId:`stack`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},G=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},K=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},q=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},J=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,h.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},Y=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},children:(0,_.jsx)(s,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},X=()=>{let e=(0,g.useMemo)(()=>[{color:`blue`,dataKey:`desktop`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,barProps:{label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Z=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,h.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},Q=()=>{let e=(0,g.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,g.useMemo)(()=>b(),[]);return(0,_.jsx)(a,{data:t,series:e,tooltipProps:{cursor:{fill:`red`,fillOpacity:.2},labelFormatter:e=>(0,h.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,h.default)(e).format(`MMM`)}})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data}>
      <BarChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <BarChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <BarChart.Bar dataKey="desktop">
        <BarChart.LabelList />
      </BarChart.Bar>
      <BarChart.Bar dataKey="tablet" />
      <BarChart.Bar dataKey="mobile" />
    </BarChart.Root>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <BarChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <BarChart.Root key={key} colorScheme={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet"
  }, {
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => Array.from({
    length: 6
  }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: [randomValue(1000, 2000), randomValue(4000, 5000)],
    mobile: [randomValue(1000, 2000), randomValue(4000, 5000)],
    tablet: [randomValue(1000, 2000), randomValue(4000, 5000)]
  })), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet",
    radius: [0, 0, 4, 4],
    stackId: "stack"
  }, {
    color: "green",
    dataKey: "mobile",
    radius: [4, 4, 0, 0],
    stackId: "stack"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet"
  }, {
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis barProps={{
    radius: 0,
    stackId: "stack"
  }} chartProps={{
    stackOffset: "expand"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    tickFormatter: value => \`\${(Number(value) * 100).toFixed(0)}%\`
  }} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet"
  }, {
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <BarChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    name: "Desktop",
    color: "red",
    dataKey: "desktop"
  }, {
    name: "Tablet",
    color: "blue",
    dataKey: "tablet"
  }, {
    name: "Mobile",
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <BarChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis barProps={{
    label: {
      formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`
    }
  }} chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 10000],
    tickFormatter: value => (value / 1000).toFixed(1),
    ticks: [0, 2500, 5000, 7500, 10000],
    unit: "k"
  }} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <BarChart.Root data={data} series={series} barProps={{
      label: true
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      domain: [0, 10000],
      ticks: [0, 2500, 5000, 7500, 10000]
    }} />

      <BarChart.Root data={data} series={series} withTooltip={false} withXAxis={false} barProps={{
      label: {
        dataKey: "date",
        formatter: value => dayjs(String(value)).format("MMM")
      }
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      domain: [0, 10000],
      ticks: [0, 2500, 5000, 7500, 10000]
    }} />
    </>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    layout: "vertical"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    type: "number"
  }} yAxisProps={{
    type: "category",
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <BarChart.Root key={key} data={data} series={series} withYAxis chartProps={{
      margin: {
        left: orientation === "end" ? 16 : 0,
        right: orientation === "start" ? 16 : 0
      }
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      orientation
    }} />}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <BarChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <BarChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    formatter: (value, name = "") => [Number(value).toLocaleString(), toTitleCase(name)],
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    tickFormatter: value => value.toLocaleString()
  }} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <BarChart.ReferenceLine label="Reference line" y={3000} />
      <BarChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <BarChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </BarChart.Root>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM"),
    tickLine: true
  }} yAxisProps={{
    tickLine: true
  }} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    label: "Date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    label: "Value"
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 5000],
    ticks: [0, 1000, 2000, 3000, 4000, 5000]
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} chartProps={{
    barCategoryGap: 32,
    barGap: 8
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop",
    radius: 8
  }, {
    color: "blue",
    dataKey: "tablet",
    radius: [0, 0, 8, 8],
    stackId: "stack"
  }, {
    color: "green",
    dataKey: "mobile",
    radius: [8, 8, 0, 0],
    stackId: "stack"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    label: {
      color: ["red", "blue"]
    },
    tick: {
      color: ["red", "blue"]
    },
    tickFormatter: value => dayjs(value).format("MMM"),
    tickLine: {
      color: ["red", "blue"]
    }
  }} yAxisProps={{
    label: {
      color: ["red", "blue"]
    },
    tick: {
      color: ["red", "blue"]
    },
    tickLine: {
      color: ["red", "blue"]
    }
  }} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <BarChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </BarChart.Root>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} barProps={{
    label: {
      color: "red"
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 10000],
    ticks: [0, 2500, 5000, 7500, 10000]
  }} />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} gridProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <BarChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      fill: "red",
      fillOpacity: 0.2
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}},$=`Basic.Composition.Size.ColorScheme.Color.Range.Stacked.Percent.YAxis.Legend.Name.Grid.Unit.LabelList.Vertical.Orientation.Synced.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.Gap.Radius.TooltipCursor.DisabledXAxis.DisabledTooltip.CustomAxis.CustomReferenceLine.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`)}))();export{V as AxisLabel,B as AxisTickLine,x as Basic,T as Color,w as ColorScheme,S as Composition,J as CustomAxis,Z as CustomGrid,X as CustomLabelList,Y as CustomReferenceLine,Q as CustomTooltipCursor,q as DisabledTooltip,K as DisabledXAxis,H as Domain,R as Formatter,U as Gap,M as Grid,P as LabelList,A as Legend,j as Name,I as Orientation,O as Percent,W as Radius,E as Range,z as ReferenceLine,C as Size,D as Stacked,L as Synced,G as TooltipCursor,N as Unit,F as Vertical,k as YAxis,$ as __namedExportsOrder,v as default};