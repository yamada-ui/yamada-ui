import{p as Le,r as o,j as s,w as Te,C as _e,P as Ie}from"./iframe-qjGiUz6b.js";import{P as u}from"./props-table-695isBmC.js";import{d as r}from"./dayjs.min-CntykdM7.js";import{C as Ne,e as p,b as Oe,c as Ve,d as z}from"./cartesian-chart-lkU7hpLO.js";import{a as Ee,C as Ge,b as Xe}from"./chart-DT4xhLWt.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CZYREmgE.js";import"./grid-item-DMIxSy19.js";import"./for-BvpQiPtL.js";import"./flex-BMAQi8a8.js";import"./heading-CexfIZlJ.js";import"./use-css-DM2Aihob.js";import"./tooltip.style-BvVwkZKM.js";import"./index-BddTzLtH.js";const $e=Le({base:{"--legend-swatch-color":"{bar-color}","--tooltip-cursor-fill-opacity":"0.4","--tooltip-cursor-stroke":"none","--tooltip-swatch-color":"{bar-color}"}});var ze=["axis","item"],He=o.forwardRef((t,e)=>o.createElement(Ne,{chartName:"BarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:ze,tooltipPayloadSearcher:Ee,categoricalChartProps:t,ref:e}));const{withContext:Ue}=Te("bar-chart",$e),n=Ue(({children:t,series:e=[],...a})=>{const i=o.useMemo(()=>[{component:p,fallback:e.map((m,l)=>s.jsx(p,{...m},l))}],[e]);return s.jsx(Oe,{components:i,render:m=>s.jsx(He,{...m}),...a,children:t})})(),lt={component:n,title:"Components / Chart / BarChart"},c=(t=1e3,e=5e3)=>Math.floor(Math.random()*(e-t+1))+t,d=(t=6)=>Array.from({length:t},(e,a)=>({date:r().add(a,"month").format("YYYY-MM-DD"),desktop:c(),mobile:c(),tablet:c()})),M=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},y=()=>{const t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,children:[s.jsx(Ge,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(Ve,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(p,{dataKey:"desktop",children:s.jsx(Xe,{})}),s.jsx(p,{dataKey:"tablet"}),s.jsx(p,{dataKey:"mobile"})]})},b=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(a,i,m)=>s.jsx(n,{size:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},x=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:_e,children:(a,i,m)=>s.jsx(n,{colorScheme:i,data:e,series:t,tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},K=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},P=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>Array.from({length:6},(a,i)=>({date:r().add(i,"month").format("YYYY-MM-DD"),desktop:[c(1e3,2e3),c(4e3,5e3)],mobile:[c(1e3,2e3),c(4e3,5e3)],tablet:[c(1e3,2e3),c(4e3,5e3)]})),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},k=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet",radius:[0,0,4,4],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[4,4,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{radius:0,stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>`${(Number(a)*100).toFixed(0)}%`}})},f=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},v=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withLegend:!0,legendProps:{placement:i},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},F=()=>{const t=o.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withLegend:!0,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},C=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xy","x","y","none"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,gridProps:{horizontal:i.includes("x"),vertical:i.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")}},m)})},A=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,barProps:{label:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:a=>`${(Number(a)/1e3).toFixed(1)}k`,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:a=>(a/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},j=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,barProps:{label:!0},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:e,series:t,withTooltip:!1,withXAxis:!1,barProps:{label:{dataKey:"date",formatter:a=>r(String(a)).format("MMM")}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},B=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{layout:"vertical"},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{type:"number"},yAxisProps:{type:"category",dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},g=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start","end"],children:(a,i,m)=>s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{left:i==="end"?16:0,right:i==="start"?16:0}},tooltipProps:{labelFormatter:l=>r(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>r(l).format("MMM")},yAxisProps:{orientation:i}},m)})},D=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}}),s.jsx(n,{data:e,series:t,syncId:"chart",tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})]})},R=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(a,i="")=>[Number(a).toLocaleString(),Ie(i)],labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{tickFormatter:a=>a.toLocaleString()}})},w=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:[s.jsx(z,{label:"Reference line",y:3e3}),s.jsx(z,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(z,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},S=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},Y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{label:"Value"}})},L=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},T=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,chartProps:{barCategoryGap:32,barGap:8},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},_=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop",radius:8},{color:"blue",dataKey:"tablet",radius:[0,0,8,8],stackId:"stack"},{color:"green",dataKey:"mobile",radius:[8,8,0,0],stackId:"stack"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},I=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:!0,labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},N=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},O=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},V=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:a=>r(a).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},E=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},children:s.jsx(z,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},G=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,barProps:{label:{color:"red"}},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},X=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:a=>r(a).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})},$=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),e=o.useMemo(()=>d(),[]);return s.jsx(n,{data:e,series:t,tooltipProps:{cursor:{fill:"red",fillOpacity:.2},labelFormatter:a=>r(a).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}})};var H,U,q;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(q=(U=M.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var J,Q,W;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Z,aa,ea;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ea=(aa=b.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var ta,ra,oa;x.parameters={...x.parameters,docs:{...(ta=x.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
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
}`,...(oa=(ra=x.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var sa,na,da;K.parameters={...K.parameters,docs:{...(sa=K.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
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
}`,...(da=(na=K.parameters)==null?void 0:na.docs)==null?void 0:da.source}}};var ia,la,ma;P.parameters={...P.parameters,docs:{...(ia=P.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
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
}`,...(ma=(la=P.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var ca,pa,ua;k.parameters={...k.parameters,docs:{...(ca=k.parameters)==null?void 0:ca.docs,source:{originalSource:`() => {
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
}`,...(ua=(pa=k.parameters)==null?void 0:pa.docs)==null?void 0:ua.source}}};var Ma,ya,ba;h.parameters={...h.parameters,docs:{...(Ma=h.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
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
}`,...(ba=(ya=h.parameters)==null?void 0:ya.docs)==null?void 0:ba.source}}};var xa,Ka,Pa;f.parameters={...f.parameters,docs:{...(xa=f.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
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
}`,...(Pa=(Ka=f.parameters)==null?void 0:Ka.docs)==null?void 0:Pa.source}}};var ka,ha,fa;v.parameters={...v.parameters,docs:{...(ka=v.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
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
}`,...(fa=(ha=v.parameters)==null?void 0:ha.docs)==null?void 0:fa.source}}};var va,Fa,Ca;F.parameters={...F.parameters,docs:{...(va=F.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
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
}`,...(Ca=(Fa=F.parameters)==null?void 0:Fa.docs)==null?void 0:Ca.source}}};var Aa,ja,Ba;C.parameters={...C.parameters,docs:{...(Aa=C.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
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
}`,...(Ba=(ja=C.parameters)==null?void 0:ja.docs)==null?void 0:Ba.source}}};var ga,Da,Ra;A.parameters={...A.parameters,docs:{...(ga=A.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Da=A.parameters)==null?void 0:Da.docs)==null?void 0:Ra.source}}};var wa,Sa,Ya;j.parameters={...j.parameters,docs:{...(wa=j.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
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
}`,...(Ya=(Sa=j.parameters)==null?void 0:Sa.docs)==null?void 0:Ya.source}}};var La,Ta,_a;B.parameters={...B.parameters,docs:{...(La=B.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
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
}`,...(_a=(Ta=B.parameters)==null?void 0:Ta.docs)==null?void 0:_a.source}}};var Ia,Na,Oa;g.parameters={...g.parameters,docs:{...(Ia=g.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
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
}`,...(Oa=(Na=g.parameters)==null?void 0:Na.docs)==null?void 0:Oa.source}}};var Va,Ea,Ga;D.parameters={...D.parameters,docs:{...(Va=D.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
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
}`,...(Ga=(Ea=D.parameters)==null?void 0:Ea.docs)==null?void 0:Ga.source}}};var Xa,$a,za;R.parameters={...R.parameters,docs:{...(Xa=R.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...(za=($a=R.parameters)==null?void 0:$a.docs)==null?void 0:za.source}}};var Ha,Ua,qa;w.parameters={...w.parameters,docs:{...(Ha=w.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
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
}`,...(qa=(Ua=w.parameters)==null?void 0:Ua.docs)==null?void 0:qa.source}}};var Ja,Qa,Wa;S.parameters={...S.parameters,docs:{...(Ja=S.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
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
}`,...(Wa=(Qa=S.parameters)==null?void 0:Qa.docs)==null?void 0:Wa.source}}};var Za,ae,ee;Y.parameters={...Y.parameters,docs:{...(Za=Y.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
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
}`,...(ee=(ae=Y.parameters)==null?void 0:ae.docs)==null?void 0:ee.source}}};var te,re,oe;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=L.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,de;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(de=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,le,me;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(me=(le=_.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ce,pe,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ue=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Me,ye,be;N.parameters={...N.parameters,docs:{...(Me=N.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(be=(ye=N.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var xe,Ke,Pe;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ke=O.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source}}};var ke,he,fe;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(fe=(he=V.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,Fe,Ce;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Ce.source}}};var Ae,je,Be;G.parameters={...G.parameters,docs:{...(Ae=G.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Be=(je=G.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var ge,De,Re;X.parameters={...X.parameters,docs:{...(ge=X.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Re=(De=X.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var we,Se,Ye;$.parameters={...$.parameters,docs:{...(we=$.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Se=$.parameters)==null?void 0:Se.docs)==null?void 0:Ye.source}}};const mt=["Basic","Composition","Size","ColorScheme","Color","Range","Stacked","Percent","YAxis","Legend","Name","Grid","Unit","LabelList","Vertical","Orientation","Synced","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","Gap","Radius","TooltipCursor","DisabledXAxis","DisabledTooltip","CustomAxis","CustomReferenceLine","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{Y as AxisLabel,S as AxisTickLine,M as Basic,K as Color,x as ColorScheme,y as Composition,V as CustomAxis,X as CustomGrid,G as CustomLabelList,E as CustomReferenceLine,$ as CustomTooltipCursor,O as DisabledTooltip,N as DisabledXAxis,L as Domain,R as Formatter,T as Gap,C as Grid,j as LabelList,v as Legend,F as Name,g as Orientation,h as Percent,_ as Radius,P as Range,w as ReferenceLine,b as Size,k as Stacked,D as Synced,I as TooltipCursor,A as Unit,B as Vertical,f as YAxis,mt as __namedExportsOrder,lt as default};
