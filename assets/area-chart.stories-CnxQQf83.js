import{p as st,r as o,j as s,w as nt,C as dt,P as it}from"./iframe-BARHselC.js";import{P as u}from"./props-table-BkvYFuzx.js";import{d as r}from"./dayjs.min-Bo0M3omr.js";import{l as lt}from"./line-chart.style-JRMsoGOW.js";import{C as mt,a as p,b as ct,c as rt,d as J}from"./cartesian-chart-BNuGl6Zx.js";import{a as pt,m as i,C as ot,b as ut}from"./chart-BKIULMI7.js";import"./preload-helper-C1FmrZbK.js";import"./grid-TYCxZ6Tw.js";import"./grid-item-Bza5qvEt.js";import"./for-CY_Ito8d.js";import"./flex-50IdHGUY.js";import"./heading-DrqV-doR.js";import"./use-css-BEj04wmi.js";import"./tooltip.style-uN9OTHIP.js";import"./index-DucqNR3R.js";const Mt=st({base:lt.base});var yt=["axis"],bt=o.forwardRef((a,t)=>o.createElement(mt,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:yt,tooltipPayloadSearcher:pt,categoricalChartProps:a,ref:t}));const{withContext:At}=nt("area-chart",Mt),n=At(({children:a,series:t=[],...e})=>{const l=o.useMemo(()=>[{component:p,fallback:t.map((m,c)=>s.jsx(p,{...m},c))}],[t]);return s.jsx(ct,{components:l,render:m=>s.jsx(bt,{...m}),...e,children:a})})(),Yt={component:n,title:"Components / Chart / AreaChart"},Z=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,d=(a=6)=>Array.from({length:a},(t,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:Z(1e3,2e3),mobile:Z(3e3,4e3),tablet:Z(2e3,3e3)})),M=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},y=()=>{const a=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:a,children:[s.jsx(ot,{labelFormatter:t=>r(t).format("MMM")}),s.jsx(rt,{dataKey:"date",tickFormatter:t=>r(t).format("MMM")}),s.jsx(p,{color:"mono.900",dataKey:"desktop",dot:!0,children:s.jsx(ut,{})}),s.jsx(p,{color:"mono.600",dataKey:"tablet"}),s.jsx(p,{color:"mono.300",dataKey:"mobile"})]})},b=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,m)=>s.jsx(n,{size:l,data:t,series:a,tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},A=()=>{const a=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:dt,children:(t,e,l)=>s.jsx(n,{data:a,series:i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],e),tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},l)})},x=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},K=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},P=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{fillOpacity:"1",stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,areaProps:{type:l},tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},k=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsxs(n,{data:t,series:a,children:[s.jsx(ot,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(rt,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(p,{dataKey:"desktop",stackId:1}),s.jsx(p,{dataKey:"tablet",stackId:1}),s.jsx(p,{dataKey:"mobile"})]})]})},f=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},v=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},C=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withLegend:!0,areaProps:{stackId:"stack"},legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},F=()=>{const a=o.useMemo(()=>i([{name:"Desktop",dataKey:"desktop"},{name:"Tablet",dataKey:"tablet"},{name:"Mobile",dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},j=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},m)})},g=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},D=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},S=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},w=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(u,{variant:"stack",rows:["start","end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")},yAxisProps:{orientation:l}},m)})},R=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},Y=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d().map(({date:e,desktop:l,mobile:m,tablet:c},Q)=>({date:e,desktop:Q===3?null:l,mobile:Q===3?null:m,tablet:Q===3?null:c})),[]);return s.jsx(n,{data:t,series:a,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},L=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),it(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},T=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(J,{label:"Reference line",y:3e3}),s.jsx(J,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(J,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},I=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},_=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},N=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},E=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},O=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},X=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},G=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},$=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},z=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},B=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(J,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},V=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},H=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},U=()=>{const a=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},W=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},q=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};var ee,ae,te;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(te=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var re,oe,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,de,ie;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var le,me,ce;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=A.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,Me;x.parameters={...x.parameters,docs:{...(pe=x.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Me=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var ye,be,Ae;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Ae=(be=K.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var xe,Ke,Pe;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source}}};var he,ke,fe;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(fe=(ke=h.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var ve,Ce,Fe;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var je,ge,De;f.parameters={...f.parameters,docs:{...(je=f.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(De=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var Se,we,Re;v.parameters={...v.parameters,docs:{...(Se=v.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Re=(we=v.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Ye,Le,Te;C.parameters={...C.parameters,docs:{...(Ye=C.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(Te=(Le=C.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Ie,_e,Ne;F.parameters={...F.parameters,docs:{...(Ie=F.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ne=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Ee,Oe,Xe;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Xe.source}}};var Ge,$e,ze;g.parameters={...g.parameters,docs:{...(Ge=g.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(ze=($e=g.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Be,Ve,He;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(He=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Ue,We,qe;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(qe=(We=S.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;w.parameters={...w.parameters,docs:{...(Je=w.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Qe=w.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;R.parameters={...R.parameters,docs:{...(ea=R.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
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
}`,...(ta=(aa=R.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,oa,sa;Y.parameters={...Y.parameters,docs:{...(ra=Y.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
}`,...(sa=(oa=Y.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var na,da,ia;L.parameters={...L.parameters,docs:{...(na=L.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
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
}`,...(ia=(da=L.parameters)==null?void 0:da.docs)==null?void 0:ia.source}}};var la,ma,ca;T.parameters={...T.parameters,docs:{...(la=T.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
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
}`,...(ca=(ma=T.parameters)==null?void 0:ma.docs)==null?void 0:ca.source}}};var pa,ua,Ma;I.parameters={...I.parameters,docs:{...(pa=I.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
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
}`,...(Ma=(ua=I.parameters)==null?void 0:ua.docs)==null?void 0:Ma.source}}};var ya,ba,Aa;_.parameters={..._.parameters,docs:{...(ya=_.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(Aa=(ba=_.parameters)==null?void 0:ba.docs)==null?void 0:Aa.source}}};var xa,Ka,Pa;N.parameters={...N.parameters,docs:{...(xa=N.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
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
}`,...(Pa=(Ka=N.parameters)==null?void 0:Ka.docs)==null?void 0:Pa.source}}};var ha,ka,fa;E.parameters={...E.parameters,docs:{...(ha=E.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(fa=(ka=E.parameters)==null?void 0:ka.docs)==null?void 0:fa.source}}};var va,Ca,Fa;O.parameters={...O.parameters,docs:{...(va=O.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
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
}`,...(Fa=(Ca=O.parameters)==null?void 0:Ca.docs)==null?void 0:Fa.source}}};var ja,ga,Da;X.parameters={...X.parameters,docs:{...(ja=X.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
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
}`,...(Da=(ga=X.parameters)==null?void 0:ga.docs)==null?void 0:Da.source}}};var Sa,wa,Ra;G.parameters={...G.parameters,docs:{...(Sa=G.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
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
}`,...(Ra=(wa=G.parameters)==null?void 0:wa.docs)==null?void 0:Ra.source}}};var Ya,La,Ta;$.parameters={...$.parameters,docs:{...(Ya=$.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(Ta=(La=$.parameters)==null?void 0:La.docs)==null?void 0:Ta.source}}};var Ia,_a,Na;z.parameters={...z.parameters,docs:{...(Ia=z.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
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
}`,...(Na=(_a=z.parameters)==null?void 0:_a.docs)==null?void 0:Na.source}}};var Ea,Oa,Xa;B.parameters={...B.parameters,docs:{...(Ea=B.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
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
}`,...(Xa=(Oa=B.parameters)==null?void 0:Oa.docs)==null?void 0:Xa.source}}};var Ga,$a,za;V.parameters={...V.parameters,docs:{...(Ga=V.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
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
}`,...(za=($a=V.parameters)==null?void 0:$a.docs)==null?void 0:za.source}}};var Ba,Va,Ha;H.parameters={...H.parameters,docs:{...(Ba=H.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
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
}`,...(Ha=(Va=H.parameters)==null?void 0:Va.docs)==null?void 0:Ha.source}}};var Ua,Wa,qa;U.parameters={...U.parameters,docs:{...(Ua=U.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
}`,...(qa=(Wa=U.parameters)==null?void 0:Wa.docs)==null?void 0:qa.source}}};var Ja,Qa,Za;W.parameters={...W.parameters,docs:{...(Ja=W.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
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
}`,...(Za=(Qa=W.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var et,at,tt;q.parameters={...q.parameters,docs:{...(et=q.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(tt=(at=q.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};const Lt=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","Type","Stacked","StackedExpanded","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomArea","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{_ as AxisLabel,I as AxisTickLine,M as Basic,K as Color,A as ColorScheme,y as Composition,Y as ConnectNull,H as CustomActiveDot,z as CustomArea,$ as CustomAxis,V as CustomDot,W as CustomGrid,U as CustomLabelList,B as CustomReferenceLine,q as CustomTooltipCursor,X as DisabledActiveDot,G as DisabledTooltip,O as DisabledXAxis,N as Domain,g as Dot,P as Filled,L as Formatter,x as Gradient,j as Grid,S as LabelList,C as Legend,F as Name,w as Orientation,T as ReferenceLine,b as Size,k as Stacked,f as StackedExpanded,R as Synced,E as TooltipCursor,h as Type,D as Unit,v as YAxis,Lt as __namedExportsOrder,Yt as default};
