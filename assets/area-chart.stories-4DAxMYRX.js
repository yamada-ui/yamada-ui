import{p as ot,r as o,q as st,j as s,C as nt,P as dt}from"./iframe-DODjxWwE.js";import{P as y}from"./props-table-ZR7jTkpX.js";import{d as r}from"./dayjs.min-DU2cXNRY.js";import{C as it,a as u,b as lt,c as tt,d as Q}from"./cartesian-chart-Bll4eY_9.js";import{a as mt,m as i,C as rt,b as ct}from"./chart-TYlNbGo9.js";import"./preload-helper-C1FmrZbK.js";import"./grid-Li_yOnyx.js";import"./grid-item-BIvHal1F.js";import"./for-C4WAygvI.js";import"./flex-0Hjpi8Yw.js";import"./heading-inyJVtn1.js";import"./use-css-BU56Y2V9.js";import"./tooltip.style-CPC5D_Rt.js";import"./index-CwNA2UDN.js";const pt=ot({base:{"--legend-swatch-color":"{line-stroke}","--tooltip-swatch-color":"{line-stroke}"}});var ut=["axis"],Mt=o.forwardRef((t,a)=>o.createElement(it,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:ut,tooltipPayloadSearcher:mt,categoricalChartProps:t,ref:a}));const yt=({accessibilityLayer:t=!0,compact:a,data:e,layout:l="horizontal",responsive:c,syncId:m,syncMethod:p,...M})=>{const Z=o.useCallback(ee=>({...ee,...M}),[M]);return{getChartProps:o.useCallback(ee=>({accessibilityLayer:t,compact:a,data:e,layout:l,margin:{left:16,right:16},responsive:c,syncId:m,syncMethod:p,...ee}),[t,a,e,l,c,m,p]),getRootProps:Z}},{withContext:bt}=st("area-chart",pt),n=bt(({children:t,series:a=[],chartProps:e,...l})=>{const{getChartProps:c,getRootProps:m}=yt(l),p=o.useMemo(()=>[{component:u,fallback:a.map((M,Z)=>s.jsx(u,{...M},Z))}],[a]);return s.jsx(lt,{components:p,render:M=>s.jsx(Mt,{...c({...M,...e})}),series:a,...m(),children:t})})(),Rt={component:n,title:"Components / Chart / AreaChart"},ae=(t=1e3,a=5e3)=>Math.floor(Math.random()*(a-t+1))+t,d=(t=6)=>Array.from({length:t},(a,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:ae(1e3,2e3),mobile:ae(3e3,4e3),tablet:ae(2e3,3e3)})),b=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},A=()=>{const t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,children:[s.jsx(rt,{labelFormatter:a=>r(a).format("MMM")}),s.jsx(tt,{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}),s.jsx(u,{color:"mono.900",dataKey:"desktop",dot:!0,children:s.jsx(ct,{})}),s.jsx(u,{color:"mono.600",dataKey:"tablet"}),s.jsx(u,{color:"mono.300",dataKey:"mobile"})]})},x=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,c)=>s.jsx(n,{size:l,data:a,series:t,tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},P=()=>{const t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:nt,children:(a,e,l)=>s.jsx(n,{data:t,series:i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],e),tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},l)})},K=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],"blue"),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},k=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,c)=>s.jsx(n,{data:a,series:t,areaProps:{type:l},tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},f=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,syncId:"chart",areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsxs(n,{data:a,series:t,children:[s.jsx(rt,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(tt,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(u,{dataKey:"desktop",stackId:1}),s.jsx(u,{dataKey:"tablet",stackId:1}),s.jsx(u,{dataKey:"mobile"})]})]})},v=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,areaProps:{stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},C=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},F=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,c)=>s.jsx(n,{data:a,series:t,withLegend:!0,areaProps:{stackId:"stack"},legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},g=()=>{const t=o.useMemo(()=>i([{name:"Desktop",dataKey:"desktop"},{name:"Tablet",dataKey:"tablet"},{name:"Mobile",dataKey:"mobile"}],"blue"),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},j=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,c)=>s.jsx(n,{data:a,series:t,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},D=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},S=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},w=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:a,series:t,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},R=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["start","end"],children:(e,l,c)=>s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")},yAxisProps:{orientation:l}},c)})},Y=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},L=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d().map(({date:e,desktop:l,mobile:c,tablet:m},p)=>({date:e,desktop:p===3?null:l,mobile:p===3?null:c,tablet:p===3?null:m})),[]);return s.jsx(n,{data:a,series:t,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},T=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),dt(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},I=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(Q,{label:"Reference line",y:3e3}),s.jsx(Q,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(Q,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},_=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},N=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},E=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},O=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},X=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},G=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},$=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},z=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},B=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},V=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(Q,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},H=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},U=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},W=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,areaProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},q=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},J=()=>{const t=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),a=o.useMemo(()=>d(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};var te,re,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(oe=(re=b.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var se,ne,de;A.parameters={...A.parameters,docs:{...(se=A.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(de=(ne=A.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,le,me;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(me=(le=x.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ce,pe,ue;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ue=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var Me,ye,be;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(be=(ye=K.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ae,xe,Pe;h.parameters={...h.parameters,docs:{...(Ae=h.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Pe=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var Ke,he,ke;k.parameters={...k.parameters,docs:{...(Ke=k.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(ke=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var fe,ve,Ce;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Fe,ge,je;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(je=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var De,Se,we;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(we=(Se=C.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Re,Ye,Le;F.parameters={...F.parameters,docs:{...(Re=F.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ye=F.parameters)==null?void 0:Ye.docs)==null?void 0:Le.source}}};var Te,Ie,_e;g.parameters={...g.parameters,docs:{...(Te=g.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(_e=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Ne,Ee,Oe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Xe,Ge,$e;D.parameters={...D.parameters,docs:{...(Xe=D.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...($e=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:$e.source}}};var ze,Be,Ve;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var He,Ue,We;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(We=(Ue=w.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var qe,Je,Qe;R.parameters={...R.parameters,docs:{...(qe=R.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,ea,aa;Y.parameters={...Y.parameters,docs:{...(Ze=Y.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(aa=(ea=Y.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ta,ra,oa;L.parameters={...L.parameters,docs:{...(ta=L.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
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
}`,...(oa=(ra=L.parameters)==null?void 0:ra.docs)==null?void 0:oa.source}}};var sa,na,da;T.parameters={...T.parameters,docs:{...(sa=T.parameters)==null?void 0:sa.docs,source:{originalSource:`() => {
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
}`,...(da=(na=T.parameters)==null?void 0:na.docs)==null?void 0:da.source}}};var ia,la,ma;I.parameters={...I.parameters,docs:{...(ia=I.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
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
}`,...(ma=(la=I.parameters)==null?void 0:la.docs)==null?void 0:ma.source}}};var ca,pa,ua;_.parameters={..._.parameters,docs:{...(ca=_.parameters)==null?void 0:ca.docs,source:{originalSource:`() => {
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
}`,...(ua=(pa=_.parameters)==null?void 0:pa.docs)==null?void 0:ua.source}}};var Ma,ya,ba;N.parameters={...N.parameters,docs:{...(Ma=N.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
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
}`,...(ba=(ya=N.parameters)==null?void 0:ya.docs)==null?void 0:ba.source}}};var Aa,xa,Pa;E.parameters={...E.parameters,docs:{...(Aa=E.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
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
}`,...(Pa=(xa=E.parameters)==null?void 0:xa.docs)==null?void 0:Pa.source}}};var Ka,ha,ka;O.parameters={...O.parameters,docs:{...(Ka=O.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
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
}`,...(ka=(ha=O.parameters)==null?void 0:ha.docs)==null?void 0:ka.source}}};var fa,va,Ca;X.parameters={...X.parameters,docs:{...(fa=X.parameters)==null?void 0:fa.docs,source:{originalSource:`() => {
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
}`,...(Ca=(va=X.parameters)==null?void 0:va.docs)==null?void 0:Ca.source}}};var Fa,ga,ja;G.parameters={...G.parameters,docs:{...(Fa=G.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
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
}`,...(ja=(ga=G.parameters)==null?void 0:ga.docs)==null?void 0:ja.source}}};var Da,Sa,wa;$.parameters={...$.parameters,docs:{...(Da=$.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
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
}`,...(wa=(Sa=$.parameters)==null?void 0:Sa.docs)==null?void 0:wa.source}}};var Ra,Ya,La;z.parameters={...z.parameters,docs:{...(Ra=z.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
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
}`,...(La=(Ya=z.parameters)==null?void 0:Ya.docs)==null?void 0:La.source}}};var Ta,Ia,_a;B.parameters={...B.parameters,docs:{...(Ta=B.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
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
}`,...(_a=(Ia=B.parameters)==null?void 0:Ia.docs)==null?void 0:_a.source}}};var Na,Ea,Oa;V.parameters={...V.parameters,docs:{...(Na=V.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
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
}`,...(Oa=(Ea=V.parameters)==null?void 0:Ea.docs)==null?void 0:Oa.source}}};var Xa,Ga,$a;H.parameters={...H.parameters,docs:{...(Xa=H.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...($a=(Ga=H.parameters)==null?void 0:Ga.docs)==null?void 0:$a.source}}};var za,Ba,Va;U.parameters={...U.parameters,docs:{...(za=U.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
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
}`,...(Va=(Ba=U.parameters)==null?void 0:Ba.docs)==null?void 0:Va.source}}};var Ha,Ua,Wa;W.parameters={...W.parameters,docs:{...(Ha=W.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
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
}`,...(Wa=(Ua=W.parameters)==null?void 0:Ua.docs)==null?void 0:Wa.source}}};var qa,Ja,Qa;q.parameters={...q.parameters,docs:{...(qa=q.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
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
}`,...(Qa=(Ja=q.parameters)==null?void 0:Ja.docs)==null?void 0:Qa.source}}};var Za,et,at;J.parameters={...J.parameters,docs:{...(Za=J.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
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
}`,...(at=(et=J.parameters)==null?void 0:et.docs)==null?void 0:at.source}}};const Yt=["Basic","Composition","Size","ColorScheme","Gradient","Color","Type","Stacked","StackedExpanded","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomArea","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{N as AxisLabel,_ as AxisTickLine,b as Basic,h as Color,P as ColorScheme,A as Composition,L as ConnectNull,U as CustomActiveDot,B as CustomArea,z as CustomAxis,H as CustomDot,q as CustomGrid,W as CustomLabelList,V as CustomReferenceLine,J as CustomTooltipCursor,G as DisabledActiveDot,$ as DisabledTooltip,X as DisabledXAxis,E as Domain,D as Dot,T as Formatter,K as Gradient,j as Grid,w as LabelList,F as Legend,g as Name,R as Orientation,I as ReferenceLine,x as Size,f as Stacked,v as StackedExpanded,Y as Synced,O as TooltipCursor,k as Type,S as Unit,C as YAxis,Yt as __namedExportsOrder,Rt as default};
