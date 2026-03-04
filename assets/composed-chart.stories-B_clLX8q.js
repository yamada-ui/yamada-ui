import{p as mt,r as s,j as r,w as pt,C as lt,P as ct}from"./iframe-CDtyXoOO.js";import{P as M}from"./props-table-DYt7Ja4e.js";import{d as o}from"./dayjs.min-BjoKb5ww.js";import{C as ut,f as ee,a as ae,e as te,b as Mt,c as Ct,d as Z}from"./cartesian-chart-Def6O8wg.js";import{a as yt,g as bt,c as Pt,C as ft,b as ht}from"./chart-DjEUWMK9.js";import{l as Kt}from"./line-chart.style-DdjgGwLF.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DpJ8J1qO.js";import"./grid-item-DaL57pqN.js";import"./for-DZaCca0D.js";import"./flex-CYMR6J43.js";import"./heading-WBLK2JzD.js";import"./use-css-Dk0f2Q57.js";import"./tooltip.style-ctn-0sv1.js";import"./index-BGFOYurP.js";const xt=mt({base:{...Kt.base,"--bar-fill-opacity":"0.6","--bar-stroke":"none"}});var kt=["axis"],Dt=s.forwardRef((a,t)=>s.createElement(ut,{chartName:"ComposedChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:kt,tooltipPayloadSearcher:yt,categoricalChartProps:a,ref:t}));function vt(a){return a[0]==="line"}function gt(a){return a[0]==="area"}function Ft(a){return a[0]==="bar"}function i(a,t="mono",e="invert"){const p=bt(a.length,t,e);return a.map(([l,m],c)=>[l,{...m,color:p[c]}])}const{withContext:jt}=pt("composed-chart",xt),n=jt(({children:a,series:t=[],barProps:e,...p})=>{const l=s.useMemo(()=>[{component:ee,fallback:t.filter(vt).map(([,m],c)=>r.jsx(ee,{...m},c))},{component:ae,fallback:t.filter(gt).map(([,m],c)=>r.jsx(ae,{...m},c))},{component:te,fallback:t.filter(Ft).map(([,m],c)=>r.jsx(te,{...m},c))}],[t]);return r.jsx(Mt,{components:l,render:m=>r.jsx(Dt,{...m}),barProps:{barSize:40,...e},...p,children:a})})(),Vt={component:n,title:"Components / Chart / ComposedChart"},u=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,d=(a=6)=>Array.from({length:a},(t,e)=>({date:o().add(e,"month").format("YYYY-MM-DD"),desktop:u(),mobile:u(),tablet:u()})),C=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},y=()=>{const a=s.useMemo(()=>d(),[]);return r.jsxs(n,{data:a,children:[r.jsx(Pt,{}),r.jsx(ft,{labelFormatter:t=>o(t).format("MMM")}),r.jsx(Ct,{dataKey:"date",tickFormatter:t=>o(t).format("MMM")}),r.jsx(te,{color:"blue",dataKey:"desktop"}),r.jsx(ae,{color:"green",dataKey:"tablet",dot:!0}),r.jsx(ee,{color:"red",dataKey:"mobile",dot:!0,children:r.jsx(ht,{})})]})},b=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,p,l)=>r.jsx(n,{size:p,data:t,series:a,tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},P=()=>{const a=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:lt,children:(t,e,p)=>r.jsx(n,{colorScheme:e,data:a,series:i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]],e),tooltipProps:{labelFormatter:l=>o(l).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:l=>o(l).format("MMM")}},p)})},f=()=>{const a=s.useMemo(()=>[["bar",{color:"blue",dataKey:"desktop"}],["area",{color:"green",dataKey:"tablet"}],["line",{color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},h=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},K=()=>{const a=s.useMemo(()=>[["bar",{color:"blue",dataKey:"desktop"}],["area",{color:"green",dataKey:"tablet"}],["line",{color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,withLegend:!0,legendProps:{placement:p},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},x=()=>{const a=s.useMemo(()=>[["bar",{name:"Desktop",color:"blue",dataKey:"desktop"}],["area",{name:"Tablet",color:"green",dataKey:"tablet"}],["line",{name:"Mobile",color:"red",dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},k=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["xy","x","y","none"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,gridProps:{horizontal:p.includes("x"),vertical:p.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},D=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,areaProps:{type:p},lineProps:{type:p},tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")}},l)})},v=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{dot:!0},lineProps:{dot:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},g=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d().map(({date:e,desktop:p,mobile:l,tablet:m},c)=>({date:e,desktop:p,mobile:c===3?null:l,tablet:c===3?null:m})),[]);return r.jsx(n,{data:t,series:a,areaProps:{connectNulls:!0,dot:!0},lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},F=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>Array.from({length:6},(e,p)=>({date:o().add(p,"month").format("YYYY-MM-DD"),desktop:[u(1e3,2e3),u(4e3,5e3)],mobile:u(),tablet:u()})),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},j=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop",radius:[0,0,4,4]}],["bar",{dataKey:"tablet",radius:[4,4,0,0]}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},A=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{barSize:50},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},S=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,barProps:{radius:8},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},R=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["bar",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,chartProps:{barGap:16},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},w=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},L=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(r.Fragment,{children:[r.jsx(n,{data:t,series:a,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),r.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:"date",formatter:e=>o(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},Y=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(M,{variant:"stack",rows:["start","end"],children:(e,p,l)=>r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:p==="end"?16:0,right:p==="start"?16:0}},tooltipProps:{labelFormatter:m=>o(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>o(m).format("MMM")},yAxisProps:{orientation:p}},l)})},T=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(r.Fragment,{children:[r.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}}),r.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})]})},_=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,p="")=>[Number(e).toLocaleString(),ct(p)],labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},B=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:[r.jsx(Z,{label:"Reference line",y:3e3}),r.jsx(Z,{label:{position:"insideTopLeft",value:"Reference line"},x:o().add(3,"month").format("YYYY-MM-DD")}),r.jsx(Z,{label:{position:"center",value:"Reference line"},segment:[{x:o().format("YYYY-MM-DD"),y:0},{x:o().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},N=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},z=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{label:"Value"}})},E=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},G=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},X=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},O=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},V=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},I=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>o(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},$=()=>{const a=s.useMemo(()=>[["bar",{dataKey:"desktop"}],["area",{color:["green","orange"],dataKey:"tablet"}],["line",{color:["red","blue"],dataKey:"mobile"}]],[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{strokeDasharray:"15 15"},lineProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},H=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:r.jsx(Z,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},U=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet",dot:{fill:"blue!"}}],["line",{dataKey:"mobile",dot:{fill:["white!","black!"],stroke:"red!",strokeWidth:1}}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},W=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:["red","blue"]}},lineProps:{activeDot:{fill:["green","orange"]}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},q=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,lineProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},J=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},Q=()=>{const a=s.useMemo(()=>i([["bar",{dataKey:"desktop"}],["area",{dataKey:"tablet"}],["line",{dataKey:"mobile"}]]),[]),t=s.useMemo(()=>d(),[]);return r.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})};var oe,se,re;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(re=(se=C.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ne,de,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(de=y.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var me,pe,le;b.parameters={...b.parameters,docs:{...(me=b.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(le=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:le.source}}};var ce,ue,Me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(Me=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var Ce,ye,be;f.parameters={...f.parameters,docs:{...(Ce=f.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(be=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Pe,fe,he;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(he=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var Ke,xe,ke;K.parameters={...K.parameters,docs:{...(Ke=K.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(ke=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var De,ve,ge;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(ge=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var Fe,je,Ae;k.parameters={...k.parameters,docs:{...(Fe=k.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ae=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Se,Re,we;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(we=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Le,Ye,Te;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ye=v.parameters)==null?void 0:Ye.docs)==null?void 0:Te.source}}};var _e,Be,Ne;g.parameters={...g.parameters,docs:{...(_e=g.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Be=g.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var ze,Ee,Ge;F.parameters={...F.parameters,docs:{...(ze=F.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Ee=F.parameters)==null?void 0:Ee.docs)==null?void 0:Ge.source}}};var Xe,Oe,Ve;j.parameters={...j.parameters,docs:{...(Xe=j.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Ve.source}}};var Ie,$e,He;A.parameters={...A.parameters,docs:{...(Ie=A.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(He=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Ue,We,qe;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(qe=(We=S.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;w.parameters={...w.parameters,docs:{...(ea=w.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
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
}`,...(ta=(aa=w.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var oa,sa,ra;L.parameters={...L.parameters,docs:{...(oa=L.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
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
}`,...(ra=(sa=L.parameters)==null?void 0:sa.docs)==null?void 0:ra.source}}};var na,da,ia;Y.parameters={...Y.parameters,docs:{...(na=Y.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
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
}`,...(ia=(da=Y.parameters)==null?void 0:da.docs)==null?void 0:ia.source}}};var ma,pa,la;T.parameters={...T.parameters,docs:{...(ma=T.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
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
}`,...(la=(pa=T.parameters)==null?void 0:pa.docs)==null?void 0:la.source}}};var ca,ua,Ma;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`() => {
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
}`,...(Ma=(ua=_.parameters)==null?void 0:ua.docs)==null?void 0:Ma.source}}};var Ca,ya,ba;B.parameters={...B.parameters,docs:{...(Ca=B.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(ba=(ya=B.parameters)==null?void 0:ya.docs)==null?void 0:ba.source}}};var Pa,fa,ha;N.parameters={...N.parameters,docs:{...(Pa=N.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
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
}`,...(ha=(fa=N.parameters)==null?void 0:fa.docs)==null?void 0:ha.source}}};var Ka,xa,ka;z.parameters={...z.parameters,docs:{...(Ka=z.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
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
}`,...(ka=(xa=z.parameters)==null?void 0:xa.docs)==null?void 0:ka.source}}};var Da,va,ga;E.parameters={...E.parameters,docs:{...(Da=E.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
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
}`,...(ga=(va=E.parameters)==null?void 0:va.docs)==null?void 0:ga.source}}};var Fa,ja,Aa;G.parameters={...G.parameters,docs:{...(Fa=G.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
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
}`,...(Aa=(ja=G.parameters)==null?void 0:ja.docs)==null?void 0:Aa.source}}};var Sa,Ra,wa;X.parameters={...X.parameters,docs:{...(Sa=X.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
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
}`,...(wa=(Ra=X.parameters)==null?void 0:Ra.docs)==null?void 0:wa.source}}};var La,Ya,Ta;O.parameters={...O.parameters,docs:{...(La=O.parameters)==null?void 0:La.docs,source:{originalSource:`() => {
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
}`,...(Ta=(Ya=O.parameters)==null?void 0:Ya.docs)==null?void 0:Ta.source}}};var _a,Ba,Na;V.parameters={...V.parameters,docs:{...(_a=V.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
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
}`,...(Na=(Ba=V.parameters)==null?void 0:Ba.docs)==null?void 0:Na.source}}};var za,Ea,Ga;I.parameters={...I.parameters,docs:{...(za=I.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
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
}`,...(Ga=(Ea=I.parameters)==null?void 0:Ea.docs)==null?void 0:Ga.source}}};var Xa,Oa,Va;$.parameters={...$.parameters,docs:{...(Xa=$.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...(Va=(Oa=$.parameters)==null?void 0:Oa.docs)==null?void 0:Va.source}}};var Ia,$a,Ha;H.parameters={...H.parameters,docs:{...(Ia=H.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
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
}`,...(Ha=($a=H.parameters)==null?void 0:$a.docs)==null?void 0:Ha.source}}};var Ua,Wa,qa;U.parameters={...U.parameters,docs:{...(Ua=U.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
}`,...(qa=(Wa=U.parameters)==null?void 0:Wa.docs)==null?void 0:qa.source}}};var Ja,Qa,Za;W.parameters={...W.parameters,docs:{...(Ja=W.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
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
}`,...(Za=(Qa=W.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var et,at,tt;q.parameters={...q.parameters,docs:{...(et=q.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(tt=(at=q.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var ot,st,rt;J.parameters={...J.parameters,docs:{...(ot=J.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(rt=(st=J.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var nt,dt,it;Q.parameters={...Q.parameters,docs:{...(nt=Q.parameters)==null?void 0:nt.docs,source:{originalSource:`() => {
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
}`,...(it=(dt=Q.parameters)==null?void 0:dt.docs)==null?void 0:it.source}}};const It=["Basic","Composition","Size","ColorScheme","Color","YAxis","Legend","Name","Grid","LineType","LineDot","LineConnectNull","BarRange","BarStacked","BarSize","BarRadius","BarGap","Unit","LabelList","Orientation","Synced","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledLineActiveDot","DisabledTooltip","CustomAxis","CustomLine","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{z as AxisLabel,N as AxisTickLine,R as BarGap,S as BarRadius,F as BarRange,A as BarSize,j as BarStacked,C as Basic,f as Color,P as ColorScheme,y as Composition,W as CustomActiveDot,I as CustomAxis,U as CustomDot,J as CustomGrid,q as CustomLabelList,$ as CustomLine,H as CustomReferenceLine,Q as CustomTooltipCursor,O as DisabledLineActiveDot,V as DisabledTooltip,X as DisabledXAxis,E as Domain,_ as Formatter,k as Grid,L as LabelList,K as Legend,g as LineConnectNull,v as LineDot,D as LineType,x as Name,Y as Orientation,B as ReferenceLine,b as Size,T as Synced,G as TooltipCursor,w as Unit,h as YAxis,It as __namedExportsOrder,Vt as default};
