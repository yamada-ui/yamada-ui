import{p as H,r as o,j as s,w as U,C as q,P as J}from"./iframe-BYxWTAfU.js";import{P as u}from"./props-table-Bo4bQ_jN.js";import{d as r}from"./dayjs.min-C7bNsMF6.js";import{C as Q,e as p,b as W,c as Z,d as z}from"./cartesian-chart-C-mUoVq8.js";import{a as aa,C as ea,b as ta}from"./chart-C2f0c0OO.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./for-CEjldjdR.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./use-css-uFcrR-rG.js";import"./tooltip.style-BdUKuCry.js";import"./index-Cbp4cmNX.js";const ra=H({base:{"--legend-swatch-color":"{bar-color}","--tooltip-cursor-fill-opacity":"0.4","--tooltip-cursor-stroke":"none","--tooltip-swatch-color":"{bar-color}"}});var oa=["axis","item"],sa=o.forwardRef((t,e)=>o.createElement(Q,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:oa,tooltipPayloadSearcher:aa,categoricalChartProps:t,ref:e}));const{withContext:na}=U("bar-chart",ra),n=na(({children:t,series:e=[],...a})=>{const i=o.useMemo(()=>[{component:p,fallback:e.map((m,l)=>s.jsx(p,{...m},l))}],[e]);return s.jsx(W,{components:i,render:m=>s.jsx(sa,{...m}),...a,children:t})})(),ha={component:n,title:"Components / Chart / BarChart"},c=(t=1e3,e=5e3)=>Math.floor(Math.random()*(e-t+1))+t,d=(t=6)=>Array.from({length:t},(e,a)=>({date:r().add(a,"month").format("YYYY-MM-DD"),desktop:c(),mobile:c(),tablet:c()})),M=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},y=()=>{const t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,children:[s.jsx(ea,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(Z,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(p,{dataKey:"desktop",children:s.jsx(ta,{})}),s.jsx(p,{dataKey:"tablet"}),s.jsx(p,{dataKey:"mobile"})]})},b=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(a,i,m)=>s.jsx(n,{size:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},x=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:q,children:(a,i,m)=>s.jsx(n,{colorScheme:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},K=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},P=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>Array.from({length:6},(a,i)=>({date:r().add(i,"month").format("YYYY-MM-DD"),desktop:[c(1e3,2e3),c(4e3,5e3)],mobile:[c(1e3,2e3),c(4e3,5e3)],tablet:[c(1e3,2e3),c(4e3,5e3)]})),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},k=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet",radius:[0,0,4,4],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[4,4,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{radius:0,stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>`${(Number(a)*100).toFixed(0)}%`}})},f=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},v=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withLegend:!0,legendProps:{placement:i},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},F=()=>{const t=o.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withLegend:!0,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},C=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xy","x","y","none"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,gridProps:{horizontal:i.includes("x"),vertical:i.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},A=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{label:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:a=>(a/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},j=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,barProps:{label:!0},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:e,series:t,withTooltip:!1,withXAxis:!1,barProps:{label:{dataKey:"date",formatter:a=>r(String(a)).format("MMM")}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},B=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{layout:"vertical"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{type:"number"},yAxisProps:{type:"category",dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},g=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start","end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{left:i==="end"?16:0,right:i==="start"?16:0}},tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")},yAxisProps:{orientation:i}},m)})},D=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}}),s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})]})},R=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(a,i="")=>[Number(a).toLocaleString(),J(i)],labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>a.toLocaleString()}})},w=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:[s.jsx(z,{label:"Reference line",y:3e3}),s.jsx(z,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(z,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},S=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},Y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{label:"Value"}})},L=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},T=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,chartProps:{barCategoryGap:32,barGap:8},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},_=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop",radius:8},{color:"blue",dataKey:"tablet",radius:[0,0,8,8],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[8,8,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},I=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:!0,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},N=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},O=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},V=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:a=>r(a).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},E=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:s.jsx(z,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},G=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,barProps:{label:{color:"red"}},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},X=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},$=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:{fill:"red",fillOpacity:.2},labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
}`,...x.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}};const fa=["Basic","Composition","Size","ColorScheme","Color","Range","Stacked","Percent","YAxis","Legend","Name","Grid","Unit","LabelList","Vertical","Orientation","Synced","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","Gap","Radius","TooltipCursor","DisabledXAxis","DisabledTooltip","CustomAxis","CustomReferenceLine","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{Y as AxisLabel,S as AxisTickLine,M as Basic,K as Color,x as ColorScheme,y as Composition,V as CustomAxis,X as CustomGrid,G as CustomLabelList,E as CustomReferenceLine,$ as CustomTooltipCursor,O as DisabledTooltip,N as DisabledXAxis,L as Domain,R as Formatter,T as Gap,C as Grid,j as LabelList,v as Legend,F as Name,g as Orientation,h as Percent,_ as Radius,P as Range,w as ReferenceLine,b as Size,k as Stacked,D as Synced,I as TooltipCursor,A as Unit,B as Vertical,f as YAxis,fa as __namedExportsOrder,ha as default};
