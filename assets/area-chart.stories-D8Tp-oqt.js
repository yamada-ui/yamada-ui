import{p as te,r as o,j as s,w as re,C as oe,P as se}from"./iframe-BkSt7vyM.js";import{P as u}from"./props-table-DN3lVgaW.js";import{d as r}from"./dayjs.min-CTI_tmwS.js";import{l as ne}from"./line-chart.style-CfXewtv5.js";import{C as de,a as p,b as ie,c as ee,d as J}from"./cartesian-chart-C_yZ02f3.js";import{a as le,m as i,C as ae,b as me}from"./chart-B4BtqvT_.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-DmgtKOBh.js";import"./grid-item-DSqTnqMu.js";import"./for-B9rKCkzX.js";import"./flex-BpaptubY.js";import"./heading-CMTXcFtE.js";import"./use-css-BIqkSMsI.js";import"./tooltip.style-BRkwoWGL.js";import"./index-Dz2PB-bl.js";const ce=te({base:ne.base});var pe=["axis"],ue=o.forwardRef((a,t)=>o.createElement(de,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:pe,tooltipPayloadSearcher:le,categoricalChartProps:a,ref:t}));const{withContext:Me}=re("area-chart",ce),n=Me(({children:a,series:t=[],...e})=>{const l=o.useMemo(()=>[{component:p,fallback:t.map((m,c)=>s.jsx(p,{...m},c))}],[t]);return s.jsx(ie,{components:l,render:m=>s.jsx(ue,{...m}),...e,children:a})})(),Se={component:n,title:"Components / Chart / AreaChart"},Z=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,d=(a=6)=>Array.from({length:a},(t,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:Z(1e3,2e3),mobile:Z(3e3,4e3),tablet:Z(2e3,3e3)})),M=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},y=()=>{const a=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:a,children:[s.jsx(ae,{labelFormatter:t=>r(t).format("MMM")}),s.jsx(ee,{dataKey:"date",tickFormatter:t=>r(t).format("MMM")}),s.jsx(p,{color:"mono.900",dataKey:"desktop",dot:!0,children:s.jsx(me,{})}),s.jsx(p,{color:"mono.600",dataKey:"tablet"}),s.jsx(p,{color:"mono.300",dataKey:"mobile"})]})},b=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,m)=>s.jsx(n,{size:l,data:t,series:a,tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},A=()=>{const a=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:oe,children:(t,e,l)=>s.jsx(n,{data:a,series:i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],e),tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},l)})},x=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},K=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},P=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{fillOpacity:"1",stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,areaProps:{type:l},tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},k=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsxs(n,{data:t,series:a,children:[s.jsx(ae,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(ee,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(p,{dataKey:"desktop",stackId:1}),s.jsx(p,{dataKey:"tablet",stackId:1}),s.jsx(p,{dataKey:"mobile"})]})]})},f=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},v=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},C=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withLegend:!0,areaProps:{stackId:"stack"},legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},F=()=>{const a=o.useMemo(()=>i([{name:"Desktop",dataKey:"desktop"},{name:"Tablet",dataKey:"tablet"},{name:"Mobile",dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},j=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},g=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},D=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},S=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},w=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start","end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")},yAxisProps:{orientation:l}},m)})},R=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},Y=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d().map(({date:e,desktop:l,mobile:m,tablet:c},Q)=>({date:e,desktop:Q===3?null:l,mobile:Q===3?null:m,tablet:Q===3?null:c})),[]);return s.jsx(n,{data:t,series:a,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},L=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),se(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},T=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(J,{label:"Reference line",y:3e3}),s.jsx(J,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(J,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},I=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},_=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},N=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},E=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},O=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},X=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},G=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},$=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},z=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},B=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(J,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},V=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},H=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},U=()=>{const a=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},W=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},q=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...M.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data}>
      <AreaChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <AreaChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <AreaChart.Area color="mono.900" dataKey="desktop" dot>
        <AreaChart.LabelList />
      </AreaChart.Area>
      <AreaChart.Area color="mono.600" dataKey="tablet" />
      <AreaChart.Area color="mono.300" dataKey="mobile" />
    </AreaChart.Root>;
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <AreaChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <AreaChart.Root key={key} data={data} series={AreaChart.mergeSeries([{
      dataKey: "desktop"
    }, {
      dataKey: "tablet"
    }, {
      dataKey: "mobile"
    }], row) as AreaChart.AreaProps<Data>[]} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    withGradient: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...K.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    fillOpacity: "1",
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...P.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <AreaChart.Root key={key} data={data} series={series} areaProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} syncId="chart" areaProps={{
      stackId: "stack"
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <AreaChart.Root data={data} series={series}>
        <AreaChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
        <AreaChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
        <AreaChart.Area dataKey="desktop" stackId={1} />
        <AreaChart.Area dataKey="tablet" stackId={1} />
        <AreaChart.Area dataKey="mobile" />
      </AreaChart.Root>
    </>;
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis areaProps={{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <AreaChart.Root key={key} data={data} series={series} withLegend areaProps={{
      stackId: "stack"
    }} legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    name: "Desktop",
    dataKey: "desktop"
  }, {
    name: "Tablet",
    dataKey: "tablet"
  }, {
    name: "Mobile",
    dataKey: "mobile"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <AreaChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...j.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    dot: true,
    label: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis areaProps={{
    dot: true,
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
}`,...D.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} areaProps={{
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

      <AreaChart.Root data={data} series={series} withTooltip={false} withXAxis={false} areaProps={{
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
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <AreaChart.Root key={key} data={data} series={series} withYAxis chartProps={{
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
}`,...w.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <AreaChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...R.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
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
  return <AreaChart.Root data={data} series={series} areaProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Y.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...L.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <AreaChart.ReferenceLine label="Reference line" y={3000} />
      <AreaChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <AreaChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </AreaChart.Root>;
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...I.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,..._.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...E.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...O.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...X.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...G.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...$.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...z.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <AreaChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </AreaChart.Root>;
}`,...B.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
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
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
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
}`,...V.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: {
      fill: ["blue", "red"]
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
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
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
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} gridProps={{
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...q.parameters?.docs?.source}}};const we=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","Type","Stacked","StackedExpanded","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomArea","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{_ as AxisLabel,I as AxisTickLine,M as Basic,K as Color,A as ColorScheme,y as Composition,Y as ConnectNull,H as CustomActiveDot,z as CustomArea,$ as CustomAxis,V as CustomDot,W as CustomGrid,U as CustomLabelList,B as CustomReferenceLine,q as CustomTooltipCursor,X as DisabledActiveDot,G as DisabledTooltip,O as DisabledXAxis,N as Domain,g as Dot,P as Filled,L as Formatter,x as Gradient,j as Grid,S as LabelList,C as Legend,F as Name,w as Orientation,T as ReferenceLine,b as Size,k as Stacked,f as StackedExpanded,R as Synced,E as TooltipCursor,h as Type,D as Unit,v as YAxis,we as __namedExportsOrder,Se as default};
