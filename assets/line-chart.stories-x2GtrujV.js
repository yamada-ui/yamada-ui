import{r as o,j as s,w as W,C as q,P as J}from"./iframe-BYxWTAfU.js";import{P as c}from"./props-table-Bo4bQ_jN.js";import{d as r}from"./dayjs.min-C7bNsMF6.js";import{C as Q,f as p,b as Z,c as ee,d as V}from"./cartesian-chart-C-mUoVq8.js";import{l as ae}from"./line-chart.style-Jgq2WSGv.js";import{a as te,C as re,b as oe}from"./chart-C2f0c0OO.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-bp-0Bl5B.js";import"./grid-item-DnsObMPH.js";import"./for-CEjldjdR.js";import"./flex-njHzf6oI.js";import"./heading-BIviWjk_.js";import"./use-css-uFcrR-rG.js";import"./tooltip.style-BdUKuCry.js";import"./index-Cbp4cmNX.js";var se=["axis"],ne=o.forwardRef((t,a)=>o.createElement(Q,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:se,tooltipPayloadSearcher:te,categoricalChartProps:t,ref:a}));const{withContext:ie}=W("line-chart",ae),n=ie(({children:t,series:a=[],...e})=>{const l=o.useMemo(()=>[{component:p,fallback:a.map((m,d)=>s.jsx(p,{...m},d))}],[a]);return s.jsx(Z,{components:l,render:m=>s.jsx(ne,{...m}),...e,children:t})})(),ve={component:n,title:"Components / Chart / LineChart"},U=(t=1e3,a=5e3)=>Math.floor(Math.random()*(a-t+1))+t,i=(t=6)=>Array.from({length:t},(a,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:U(),mobile:U(),tablet:U()})),u=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},M=()=>{const t=o.useMemo(()=>i(),[]);return s.jsxs(n,{data:t,children:[s.jsx(re,{labelFormatter:a=>r(a).format("MMM")}),s.jsx(ee,{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}),s.jsx(p,{dataKey:"desktop",dot:!0,children:s.jsx(oe,{})}),s.jsx(p,{dataKey:"tablet"}),s.jsx(p,{dataKey:"mobile"})]})},y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,m)=>s.jsx(n,{size:l,data:a,series:t,tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},b=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:q,children:(e,l,m)=>s.jsx(n,{colorScheme:l,data:a,series:t,tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},x=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},K=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,lineProps:{type:l},tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},P=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,withLegend:!0,legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},k=()=>{const t=o.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},f=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},v=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},L=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},F=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:a,series:t,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},C=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["start","end"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")},yAxisProps:{orientation:l}},m)})},j=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},A=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i().map(({date:e,desktop:l,mobile:m,tablet:d},H)=>({date:e,desktop:H===3?null:l,mobile:H===3?null:m,tablet:H===3?null:d})),[]);return s.jsx(n,{data:a,series:t,lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},D=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),J(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},g=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(V,{label:"Reference line",y:3e3}),s.jsx(V,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(V,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},w=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},S=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},R=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},Y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},T=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},_=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},N=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},E=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},X=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{color:["red","blue"],dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},O=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(V,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},z=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},$=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:{fill:["red","blue"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},B=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},G=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},I=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...u.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data}>
      <LineChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <LineChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <LineChart.Line dataKey="desktop" dot>
        <LineChart.LabelList />
      </LineChart.Line>
      <LineChart.Line dataKey="tablet" />
      <LineChart.Line dataKey="mobile" />
    </LineChart.Root>;
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <LineChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <LineChart.Root key={key} colorScheme={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
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
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <LineChart.Root key={key} data={data} series={series} lineProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...K.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
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
      {(_, placement, key) => <LineChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
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
  return <LineChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <LineChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    dot: true,
    label: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...v.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} lineProps={{
    dot: true,
    label: {
      formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`
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
}`,...L.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <LineChart.Root data={data} series={series} lineProps={{
      dot: true,
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

      <LineChart.Root data={data} series={series} withTooltip={false} withXAxis={false} lineProps={{
      dot: true,
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
}`,...F.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <LineChart.Root key={key} data={data} series={series} withYAxis chartProps={{
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
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <LineChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <LineChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData().map(({
    date,
    desktop,
    mobile,
    tablet
  }, index) => ({
    date,
    desktop: index === 3 ? null : desktop,
    mobile: index === 3 ? null : mobile,
    tablet: index === 3 ? null : tablet
  })), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...A.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <LineChart.ReferenceLine label="Reference line" y={3000} />
      <LineChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <LineChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </LineChart.Root>;
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...R.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...E.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    color: ["red", "blue"],
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...X.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <LineChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </LineChart.Root>;
}`,...O.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet",
    dot: {
      fill: "blue"
    }
  }, {
    dataKey: "mobile",
    dot: {
      fill: ["white", "black"],
      stroke: "red",
      strokeWidth: 1
    }
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: {
      fill: ["red", "blue"]
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: {
      fill: "red"
    },
    dot: {
      fill: "red"
    },
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
}`,...B.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} gridProps={{
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
}`,...G.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...I.parameters?.docs?.source}}};const Le=["Basic","Composition","Size","ColorScheme","Color","Type","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomLine","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{S as AxisLabel,w as AxisTickLine,u as Basic,x as Color,b as ColorScheme,M as Composition,A as ConnectNull,$ as CustomActiveDot,E as CustomAxis,z as CustomDot,G as CustomGrid,B as CustomLabelList,X as CustomLine,O as CustomReferenceLine,I as CustomTooltipCursor,_ as DisabledActiveDot,N as DisabledTooltip,T as DisabledXAxis,R as Domain,v as Dot,D as Formatter,f as Grid,F as LabelList,h as Legend,k as Name,C as Orientation,g as ReferenceLine,y as Size,j as Synced,Y as TooltipCursor,K as Type,L as Unit,P as YAxis,Le as __namedExportsOrder,ve as default};
