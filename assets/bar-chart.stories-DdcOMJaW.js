import{p as Ne,r as o,q as Oe,j as s,C as Ve,P as Ee}from"./iframe-BtFlpYLv.js";import{P as M}from"./props-table-C-1iM-Ol.js";import{d as r}from"./dayjs.min-BOx0KwrF.js";import{C as Ge,e as u,b as Xe,c as $e,d as U}from"./cartesian-chart-CPsK6hhy.js";import{a as ze,C as He,b as Ue}from"./chart-BdhABgkr.js";import"./preload-helper-C1FmrZbK.js";import"./grid-D1_nTnww.js";import"./grid-item-DSNOgZLY.js";import"./for-CkMu8O76.js";import"./flex-sv8FeSmq.js";import"./heading-BHQEJC0C.js";import"./use-css-BcmSvhGc.js";import"./tooltip.style-BTXbFY8K.js";import"./index-Bg5djS7O.js";const qe=Ne({base:{"--legend-swatch-color":"{line-stroke}","--tooltip-cursor-fill-opacity":"0.4","--tooltip-cursor-stroke":"none","--tooltip-swatch-color":"{line-stroke}"}});var Je=["axis","item"],Qe=o.forwardRef((t,e)=>o.createElement(Ge,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Je,tooltipPayloadSearcher:ze,categoricalChartProps:t,ref:e}));const We=({accessibilityLayer:t=!0,compact:e,data:a,layout:i="horizontal",responsive:m,syncId:l,syncMethod:y,...p})=>{const q=o.useCallback(J=>({...J,...p}),[p]);return{getChartProps:o.useCallback(J=>({accessibilityLayer:t,compact:e,data:a,layout:i,margin:{left:16,right:16},responsive:m,syncId:l,syncMethod:y,...J}),[t,e,a,i,m,l,y]),getRootProps:q}},{withContext:Ze}=Oe("bar-chart",qe),n=Ze(({children:t,series:e=[],chartProps:a,...i})=>{const{getChartProps:m,getRootProps:l}=We(i),y=o.useMemo(()=>[{component:u,fallback:e.map((p,q)=>s.jsx(u,{...p},q))}],[e]);return s.jsx(Xe,{components:y,render:p=>s.jsx(Qe,{...m({...p,...a})}),...l(),children:t})})(),yt={component:n,title:"Components / Chart / BarChart"},c=(t=1e3,e=5e3)=>Math.floor(Math.random()*(e-t+1))+t,d=(t=6)=>Array.from({length:t},(e,a)=>({date:r().add(a,"month").format("YYYY-MM-DD"),desktop:c(),mobile:c(),tablet:c()})),b=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},x=()=>{const t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,children:[s.jsx(He,{labelFormatter:e=>r(e).format("MMM")}),s.jsx($e,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(u,{dataKey:"desktop",children:s.jsx(Ue,{})}),s.jsx(u,{dataKey:"tablet"}),s.jsx(u,{dataKey:"mobile"})]})},K=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(M,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(a,i,m)=>s.jsx(n,{size:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},P=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(M,{variant:"stack",rows:Ve,children:(a,i,m)=>s.jsx(n,{colorScheme:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},k=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{dataKey:"desktop",range:!0},{dataKey:"tablet",range:!0},{dataKey:"mobile",range:!0}],[]),e=o.useMemo(()=>Array.from({length:6},(a,i)=>({date:r().add(i,"month").format("YYYY-MM-DD"),desktop:[c(1e3,2e3),c(4e3,5e3)],mobile:[c(1e3,2e3),c(4e3,5e3)],tablet:[c(1e3,2e3),c(4e3,5e3)]})),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},f=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet",radius:[0,0,4,4],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[4,4,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},v=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{radius:0,stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>`${(Number(a)*100).toFixed(0)}%`}})},F=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},C=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(M,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withLegend:!0,legendProps:{placement:i},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},g=()=>{const t=o.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withLegend:!0,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},A=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(M,{variant:"stack",rows:["xy","x","y","none"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,gridProps:{horizontal:i.includes("x"),vertical:i.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},j=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{label:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:a=>(a/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},B=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,barProps:{label:!0},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:e,series:t,withTooltip:!1,withXAxis:!1,barProps:{label:{dataKey:"date",formatter:a=>r(String(a)).format("MMM")}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},D=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{layout:"vertical"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{type:"number"},yAxisProps:{type:"category",dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},R=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(M,{variant:"stack",rows:["start","end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{left:i==="end"?16:0,right:i==="start"?16:0}},tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")},yAxisProps:{orientation:i}},m)})},w=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}}),s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})]})},S=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(a,i="")=>[Number(a).toLocaleString(),Ee(i)],labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>a.toLocaleString()}})},Y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:[s.jsx(U,{label:"Reference line",y:3e3}),s.jsx(U,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(U,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},L=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},T=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{label:"Value"}})},_=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},I=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,chartProps:{barCategoryGap:32,barGap:8},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},N=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop",radius:8},{color:"blue",dataKey:"tablet",radius:[0,0,8,8],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[8,8,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},O=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:!0,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},V=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},E=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},G=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:a=>r(a).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},X=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:s.jsx(U,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},$=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,barProps:{label:{color:"red"}},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},z=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},H=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:{fill:"red",fillOpacity:.2},labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})};var Q,W,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(Z=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Z.source}}};var aa,ea,ta;x.parameters={...x.parameters,docs:{...(aa=x.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
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
}`,...(ta=(ea=x.parameters)==null?void 0:ea.docs)==null?void 0:ta.source}}};var ra,oa,sa;K.parameters={...K.parameters,docs:{...(ra=K.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
}`,...(sa=(oa=K.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var na,da,ia;P.parameters={...P.parameters,docs:{...(na=P.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
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
}`,...(ia=(da=P.parameters)==null?void 0:da.docs)==null?void 0:ia.source}}};var la,ma,ca;k.parameters={...k.parameters,docs:{...(la=k.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
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
}`,...(ca=(ma=k.parameters)==null?void 0:ma.docs)==null?void 0:ca.source}}};var pa,ua,Ma;h.parameters={...h.parameters,docs:{...(pa=h.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
  const series = useMemo<BarChart.BarProps<Data>[]>(() => [{
    dataKey: "desktop",
    range: true
  }, {
    dataKey: "tablet",
    range: true
  }, {
    dataKey: "mobile",
    range: true
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
}`,...(Ma=(ua=h.parameters)==null?void 0:ua.docs)==null?void 0:Ma.source}}};var ya,ba,xa;f.parameters={...f.parameters,docs:{...(ya=f.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(xa=(ba=f.parameters)==null?void 0:ba.docs)==null?void 0:xa.source}}};var Ka,Pa,ka;v.parameters={...v.parameters,docs:{...(Ka=v.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
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
}`,...(ka=(Pa=v.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var ha,fa,va;F.parameters={...F.parameters,docs:{...(ha=F.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(va=(fa=F.parameters)==null?void 0:fa.docs)==null?void 0:va.source}}};var Fa,Ca,ga;C.parameters={...C.parameters,docs:{...(Fa=C.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ca=C.parameters)==null?void 0:Ca.docs)==null?void 0:ga.source}}};var Aa,ja,Ba;g.parameters={...g.parameters,docs:{...(Aa=g.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
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
}`,...(Ba=(ja=g.parameters)==null?void 0:ja.docs)==null?void 0:Ba.source}}};var Da,Ra,wa;A.parameters={...A.parameters,docs:{...(Da=A.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
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
}`,...(wa=(Ra=A.parameters)==null?void 0:Ra.docs)==null?void 0:wa.source}}};var Sa,Ya,La;j.parameters={...j.parameters,docs:{...(Sa=j.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
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
}`,...(La=(Ya=j.parameters)==null?void 0:Ya.docs)==null?void 0:La.source}}};var Ta,_a,Ia;B.parameters={...B.parameters,docs:{...(Ta=B.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
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
}`,...(Ia=(_a=B.parameters)==null?void 0:_a.docs)==null?void 0:Ia.source}}};var Na,Oa,Va;D.parameters={...D.parameters,docs:{...(Na=D.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
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
}`,...(Va=(Oa=D.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var Ea,Ga,Xa;R.parameters={...R.parameters,docs:{...(Ea=R.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
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
}`,...(Xa=(Ga=R.parameters)==null?void 0:Ga.docs)==null?void 0:Xa.source}}};var $a,za,Ha;w.parameters={...w.parameters,docs:{...($a=w.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
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
}`,...(Ha=(za=w.parameters)==null?void 0:za.docs)==null?void 0:Ha.source}}};var Ua,qa,Ja;S.parameters={...S.parameters,docs:{...(Ua=S.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
}`,...(Ja=(qa=S.parameters)==null?void 0:qa.docs)==null?void 0:Ja.source}}};var Qa,Wa,Za;Y.parameters={...Y.parameters,docs:{...(Qa=Y.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
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
}`,...(Za=(Wa=Y.parameters)==null?void 0:Wa.docs)==null?void 0:Za.source}}};var ae,ee,te;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,oe,se;T.parameters={...T.parameters,docs:{...(re=T.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,de,ie;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(de=_.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var le,me,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=I.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,Me;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Me=(ue=N.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var ye,be,xe;O.parameters={...O.parameters,docs:{...(ye=O.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(xe=(be=O.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var Ke,Pe,ke;V.parameters={...V.parameters,docs:{...(Ke=V.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(ke=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};var he,fe,ve;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(ve=(fe=E.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Fe,Ce,ge;G.parameters={...G.parameters,docs:{...(Fe=G.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var Ae,je,Be;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Be=(je=X.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var De,Re,we;$.parameters={...$.parameters,docs:{...(De=$.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(we=(Re=$.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Se,Ye,Le;z.parameters={...z.parameters,docs:{...(Se=z.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ye=z.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};var Te,_e,Ie;H.parameters={...H.parameters,docs:{...(Te=H.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(Ie=(_e=H.parameters)==null?void 0:_e.docs)==null?void 0:Ie.source}}};const bt=["Basic","Composition","Size","ColorScheme","Color","Range","Stacked","Percent","YAxis","Legend","Name","Grid","Unit","LabelList","Vertical","Orientation","Synced","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","Gap","Radius","TooltipCursor","DisabledXAxis","DisabledTooltip","CustomAxis","CustomReferenceLine","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{T as AxisLabel,L as AxisTickLine,b as Basic,k as Color,P as ColorScheme,x as Composition,G as CustomAxis,z as CustomGrid,$ as CustomLabelList,X as CustomReferenceLine,H as CustomTooltipCursor,E as DisabledTooltip,V as DisabledXAxis,_ as Domain,S as Formatter,I as Gap,A as Grid,B as LabelList,C as Legend,g as Name,R as Orientation,v as Percent,N as Radius,h as Range,Y as ReferenceLine,K as Size,f as Stacked,w as Synced,O as TooltipCursor,j as Unit,D as Vertical,F as YAxis,bt as __namedExportsOrder,yt as default};
