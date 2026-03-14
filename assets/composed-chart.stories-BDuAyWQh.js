import{p as oe,r as s,j as r,w as se,C as re,P as ne}from"./iframe-DyywAl9M.js";import{P as M}from"./props-table-DObtv924.js";import{d as o}from"./dayjs.min-DvJkc7nD.js";import{C as de,f as ee,a as ae,e as te,b as ie,c as me,d as Z}from"./cartesian-chart-BOSSei-4.js";import{a as pe,g as le,c as ce,C as ue,b as Me}from"./chart-AUolMmGP.js";import{l as Ce}from"./line-chart.style-DkHSHNAg.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./use-css-D3ey5yo7.js";import"./tooltip.style-DYqsefBl.js";import"./index-CYndilSg.js";const ye=oe({base:{...Ce.base,"--bar-fill-opacity":"0.6","--bar-stroke":"none"}});var be=["axis"],Pe=s.forwardRef((a,t)=>s.createElement(de,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:be,tooltipPayloadSearcher:pe,categoricalChartProps:a,ref:t}));function fe(a){return a[0]==="line"}function he(a){return a[0]==="area"}function Ke(a){return a[0]==="bar"}function i(a,t="mono",e="invert"){const p=le(a.length,t,e);return a.map(([l,m],c)=>[l,{...m,color:p[c]}])}const{withContext:xe}=se("composed-chart",ye),n=xe(({children:a,series:t=[],barProps:e,...p})=>{const l=s.useMemo(()=>[{component:ee,fallback:t.filter(fe).map(([,m],c)=>r.jsx(ee,{...m},c))},{component:ae,fallback:t.filter(he).map(([,m],c)=>r.jsx(ae,{...m},c))},{component:te,fallback:t.filter(Ke).map(([,m],c)=>r.jsx(te,{...m},c))}],[t]);return r.jsx(ie,{components:l,render:m=>r.jsx(Pe,{...m}),barProps:{barSize:40,...e},...p,children:a})})(),Ne={component:n,title:"Components / Chart / ComposedChart"},u=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,d=(a=6)=>Array.from({length:a},(t,e)=>({date:o().add(e,"month").format("YYYY-MM-DD"),desktop:u(),mobile:u(),tablet:u()})),C=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},y=()=>{const a=s.useMemo(()=>d(),[]);return r.jsxs(n,{data:a,children:[r.jsx(ce,{}),r.jsx(ue,{labelFormatter:t=>o(t).format("MMM")}),r.jsx(me,{dataKey:"date",tickFormatter:t=>o(t).format("MMM")}),r.jsx(te,{color:"blue",dataKey:"desktop"}),r.jsx(ae,{color:"green",dataKey:"tablet",dot:!0}),r.jsx(ee,{color:"red",dataKey:"mobile",dot:!0,children:r.jsx(Me,{})})]})},b=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,p,l)=>r.jsx(n,{size:p,data:t,series:a,tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},P=()=>{const a=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:re,children:(t,e,p)=>r.jsx(n,{colorScheme:e,data:a,series:i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]],e),tooltipProps:{labelFormatter:l=>o(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>o(l).format("MMM")}},p)})},f=()=>{const a=s.useMemo(()=>[["bar",{color:"blue",dataKey:"desktop"}],["area",{color:"green",dataKey:"tablet"}],["line",{color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},h=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},K=()=>{const a=s.useMemo(()=>[["bar",{color:"blue",dataKey:"desktop"}],["area",{color:"green",dataKey:"tablet"}],["line",{color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,withLegend:!0,legendProps:{placement:p},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},x=()=>{const a=s.useMemo(()=>[["bar",{name:"Desktop",color:"blue",dataKey:"desktop"}],["area",{name:"Tablet",color:"green",dataKey:"tablet"}],["line",{name:"Mobile",color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},k=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["xy","x","y","none"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,gridProps:{horizontal:p.includes("x"),vertical:p.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},D=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,areaProps:{type:p},lineProps:{type:p},tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},v=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{dot:!0},lineProps:{dot:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},g=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d().map(({date:e,desktop:p,mobile:l,tablet:m},c)=>({date:e,desktop:p,mobile:c===3?null:l,tablet:c===3?null:m})),[]);return r.jsx(n,{data:t,series:a,areaProps:{connectNulls:!0,dot:!0},lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},F=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>Array.from({length:6},(e,p)=>({date:o().add(p,"month").format("YYYY-MM-DD"),desktop:[u(1e3,2e3),u(4e3,5e3)],mobile:u(),tablet:u()})),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},j=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop",radius:[0,0,4,4]}],["bar",{dataKey:"tablet",radius:[4,4,0,0]}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},A=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{barSize:50},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},S=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{radius:8},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},R=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["bar",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,chartProps:{barGap:16},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},w=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},L=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(r.Fragment,{children:[r.jsx(n,{data:t,series:a,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),r.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:"date",formatter:e=>o(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},Y=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["start","end"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:p==="end"?16:0,right:p==="start"?16:0}},tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")},yAxisProps:{orientation:p}},l)})},T=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(r.Fragment,{children:[r.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}}),r.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})]})},_=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,p="")=>[Number(e).toLocaleString(),ne(p)],labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},B=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:[r.jsx(Z,{label:"Reference line",y:3e3}),r.jsx(Z,{label:{position:"insideTopLeft",value:"Reference line"},x:o().add(3,"month").format("YYYY-MM-DD")}),r.jsx(Z,{label:{position:"center",value:"Reference line"},segment:[{x:o().format("YYYY-MM-DD"),y:0},{x:o().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},N=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},z=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{label:"Value"}})},E=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},G=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},X=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},O=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},V=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},I=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>o(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},$=()=>{const a=s.useMemo(()=>[["bar",{dataKey:"desktop"}],["area",{color:["green","orange"],dataKey:"tablet"}],["line",{color:["red","blue"],dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{strokeDasharray:"15 15"},lineProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},H=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:r.jsx(Z,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},U=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet",dot:{fill:"blue!"}}],["line",{dataKey:"mobile",dot:{fill:["white!","black!"],stroke:"red!",strokeWidth:1}}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},W=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:["red","blue"]}},lineProps:{activeDot:{fill:["green","orange"]}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},q=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,lineProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},J=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},Q=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data}>
      <ComposedChart.Legend />
      <ComposedChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <ComposedChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <ComposedChart.Bar color="blue" dataKey="desktop" />
      <ComposedChart.Area color="green" dataKey="tablet" dot />
      <ComposedChart.Line color="red" dataKey="mobile" dot>
        <ComposedChart.LabelList />
      </ComposedChart.Line>
    </ComposedChart.Root>;
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ComposedChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <ComposedChart.Root key={key} colorScheme={row} data={data} series={ComposedChart.mergeSeries<Data>([["bar", {
      dataKey: "desktop"
    }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
      dataKey: "tablet"
    }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
      dataKey: "mobile"
    }] satisfies ComposedChart.ComposedProps<Data>], row)} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...P.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...h.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <ComposedChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...K.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    name: "Desktop",
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    name: "Tablet",
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    name: "Mobile",
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <ComposedChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <ComposedChart.Root key={key} data={data} series={series} areaProps={{
      type
    }} lineProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    dot: true
  }} lineProps={{
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData().map(({
    date,
    desktop,
    mobile,
    tablet
  }, index) => ({
    date,
    desktop,
    mobile: index === 3 ? null : mobile,
    tablet: index === 3 ? null : tablet
  })), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    connectNulls: true,
    dot: true
  }} lineProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...g.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => Array.from({
    length: 6
  }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: [randomValue(1000, 2000), randomValue(4000, 5000)],
    mobile: randomValue(),
    tablet: randomValue()
  })), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop",
    radius: [0, 0, 4, 4]
  }] satisfies ComposedChart.ComposedProps<Data>, ["bar", {
    dataKey: "tablet",
    radius: [4, 4, 0, 0]
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    barSize: 50
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    radius: 8
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["bar", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} chartProps={{
    barGap: 16
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...R.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...w.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <ComposedChart.Root data={data} series={series} lineProps={{
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

      <ComposedChart.Root data={data} series={series} withTooltip={false} withXAxis={false} lineProps={{
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
}`,...L.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <ComposedChart.Root key={key} data={data} series={series} withYAxis chartProps={{
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
}`,...Y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <ComposedChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <ComposedChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <ComposedChart.ReferenceLine label="Reference line" y={3000} />
      <ComposedChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <ComposedChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </ComposedChart.Root>;
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...E.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...G.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...X.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...O.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...V.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...I.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: ["green", "orange"],
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: ["red", "blue"],
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    strokeDasharray: "15 15"
  }} lineProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...$.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <ComposedChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </ComposedChart.Root>;
}`,...H.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet",
    dot: {
      fill: "blue!"
    }
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile",
    dot: {
      fill: ["white!", "black!"],
      stroke: "red!",
      strokeWidth: 1
    }
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} lineProps={{
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
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: {
      fill: ["red", "blue"]
    }
  }} lineProps={{
    activeDot: {
      fill: ["green", "orange"]
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
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} lineProps={{
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
}`,...q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} gridProps={{
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}};const ze=["Basic","Composition","Size","ColorScheme","Color","YAxis","Legend","Name","Grid","LineType","LineDot","LineConnectNull","BarRange","BarStacked","BarSize","BarRadius","BarGap","Unit","LabelList","Orientation","Synced","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledLineActiveDot","DisabledTooltip","CustomAxis","CustomLine","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{z as AxisLabel,N as AxisTickLine,R as BarGap,S as BarRadius,F as BarRange,A as BarSize,j as BarStacked,C as Basic,f as Color,P as ColorScheme,y as Composition,W as CustomActiveDot,I as CustomAxis,U as CustomDot,J as CustomGrid,q as CustomLabelList,$ as CustomLine,H as CustomReferenceLine,Q as CustomTooltipCursor,O as DisabledLineActiveDot,V as DisabledTooltip,X as DisabledXAxis,E as Domain,_ as Formatter,k as Grid,L as LabelList,K as Legend,g as LineConnectNull,v as LineDot,D as LineType,x as Name,Y as Orientation,B as ReferenceLine,b as Size,T as Synced,G as TooltipCursor,w as Unit,h as YAxis,ze as __namedExportsOrder,Ne as default};
