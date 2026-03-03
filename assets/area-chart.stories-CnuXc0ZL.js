import{p as it,r as o,q as lt,j as s,C as mt,P as ct}from"./iframe-BtFlpYLv.js";import{P as y}from"./props-table-C-1iM-Ol.js";import{d as r}from"./dayjs.min-BOx0KwrF.js";import{C as pt,a as u,b as ut,c as nt,d as Z}from"./cartesian-chart-CPsK6hhy.js";import{a as Mt,m as i,C as dt,b as yt}from"./chart-BdhABgkr.js";import"./preload-helper-C1FmrZbK.js";import"./grid-D1_nTnww.js";import"./grid-item-DSNOgZLY.js";import"./for-CkMu8O76.js";import"./flex-sv8FeSmq.js";import"./heading-BHQEJC0C.js";import"./use-css-BcmSvhGc.js";import"./tooltip.style-BTXbFY8K.js";import"./index-Bg5djS7O.js";const bt=it({base:{"--legend-swatch-color":"{line-stroke}","--tooltip-swatch-color":"{line-stroke}"}});var At=["axis"],xt=o.forwardRef((a,t)=>o.createElement(pt,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:At,tooltipPayloadSearcher:Mt,categoricalChartProps:a,ref:t}));const Kt=({accessibilityLayer:a=!0,compact:t,data:e,layout:l="horizontal",responsive:c,syncId:m,syncMethod:p,...M})=>{const ee=o.useCallback(ae=>({...ae,...M}),[M]);return{getChartProps:o.useCallback(ae=>({accessibilityLayer:a,compact:t,data:e,layout:l,margin:{left:16,right:16},responsive:c,syncId:m,syncMethod:p,...ae}),[a,t,e,l,c,m,p]),getRootProps:ee}},{withContext:Pt}=lt("area-chart",bt),n=Pt(({children:a,series:t=[],chartProps:e,...l})=>{const{getChartProps:c,getRootProps:m}=Kt(l),p=o.useMemo(()=>[{component:u,fallback:t.map((M,ee)=>s.jsx(u,{...M},ee))}],[t]);return s.jsx(ut,{components:p,render:M=>s.jsx(xt,{...c({...M,...e})}),...m(),children:a})})(),It={component:n,title:"Components / Chart / AreaChart"},te=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,d=(a=6)=>Array.from({length:a},(t,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:te(1e3,2e3),mobile:te(3e3,4e3),tablet:te(2e3,3e3)})),b=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},A=()=>{const a=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:a,children:[s.jsx(dt,{labelFormatter:t=>r(t).format("MMM")}),s.jsx(nt,{dataKey:"date",tickFormatter:t=>r(t).format("MMM")}),s.jsx(u,{color:"mono.900",dataKey:"desktop",dot:!0,children:s.jsx(yt,{})}),s.jsx(u,{color:"mono.600",dataKey:"tablet"}),s.jsx(u,{color:"mono.300",dataKey:"mobile"})]})},x=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,c)=>s.jsx(n,{size:l,data:t,series:a,tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},K=()=>{const a=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:mt,children:(t,e,l)=>s.jsx(n,{data:a,series:i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],e),tooltipProps:{labelFormatter:c=>r(c).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:c=>r(c).format("MMM")}},l)})},P=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},k=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{fillOpacity:"1",stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},f=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,c)=>s.jsx(n,{data:t,series:a,areaProps:{type:l},tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},v=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",areaProps:{stackId:"stack"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsxs(n,{data:t,series:a,children:[s.jsx(dt,{labelFormatter:e=>r(e).format("MMM")}),s.jsx(nt,{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}),s.jsx(u,{dataKey:"desktop",stackId:1}),s.jsx(u,{dataKey:"tablet",stackId:1}),s.jsx(u,{dataKey:"mobile"})]})]})},C=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{stackId:"stack"},chartProps:{stackOffset:"expand"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},F=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},g=()=>{const a=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"green",dataKey:"tablet"},{color:"blue",dataKey:"mobile"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,c)=>s.jsx(n,{data:t,series:a,withLegend:!0,areaProps:{stackId:"stack"},legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},j=()=>{const a=o.useMemo(()=>i([{name:"Desktop",dataKey:"desktop"},{name:"Tablet",dataKey:"tablet"},{name:"Mobile",dataKey:"mobile"}],"blue"),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},D=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,c)=>s.jsx(n,{data:t,series:a,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")}},c)})},S=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},w=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},R=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},Y=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(y,{variant:"stack",rows:["start","end"],children:(e,l,c)=>s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:m=>r(m).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:m=>r(m).format("MMM")},yAxisProps:{orientation:l}},c)})},L=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},T=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d().map(({date:e,desktop:l,mobile:c,tablet:m},p)=>({date:e,desktop:p===3?null:l,mobile:p===3?null:c,tablet:p===3?null:m})),[]);return s.jsx(n,{data:t,series:a,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},I=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),ct(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},_=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(Z,{label:"Reference line",y:3e3}),s.jsx(Z,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(Z,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},N=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},E=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},O=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},X=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},G=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},$=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},z=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},B=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},V=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},H=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(Z,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},U=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},W=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},q=()=>{const a=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,areaProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},J=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},Q=()=>{const a=o.useMemo(()=>i([{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}]),[]),t=o.useMemo(()=>d(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};var re,oe,se;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ne,de,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(de=A.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var le,me,ce;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(ce=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var pe,ue,Me;K.parameters={...K.parameters,docs:{...(pe=K.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Me=(ue=K.parameters)==null?void 0:ue.docs)==null?void 0:Me.source}}};var ye,be,Ae;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Ae=(be=P.parameters)==null?void 0:be.docs)==null?void 0:Ae.source}}};var xe,Ke,Pe;h.parameters={...h.parameters,docs:{...(xe=h.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ke=h.parameters)==null?void 0:Ke.docs)==null?void 0:Pe.source}}};var he,ke,fe;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(fe=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var ve,Ce,Fe;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Ce=f.parameters)==null?void 0:Ce.docs)==null?void 0:Fe.source}}};var ge,je,De;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(De=(je=v.parameters)==null?void 0:je.docs)==null?void 0:De.source}}};var Se,we,Re;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Re=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Re.source}}};var Ye,Le,Te;F.parameters={...F.parameters,docs:{...(Ye=F.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(Te=(Le=F.parameters)==null?void 0:Le.docs)==null?void 0:Te.source}}};var Ie,_e,Ne;g.parameters={...g.parameters,docs:{...(Ie=g.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ne=(_e=g.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Ee,Oe,Xe;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:Xe.source}}};var Ge,$e,ze;D.parameters={...D.parameters,docs:{...(Ge=D.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(ze=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Be,Ve,He;S.parameters={...S.parameters,docs:{...(Be=S.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(He=(Ve=S.parameters)==null?void 0:Ve.docs)==null?void 0:He.source}}};var Ue,We,qe;w.parameters={...w.parameters,docs:{...(Ue=w.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(qe=(We=w.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;R.parameters={...R.parameters,docs:{...(Je=R.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var ea,aa,ta;Y.parameters={...Y.parameters,docs:{...(ea=Y.parameters)==null?void 0:ea.docs,source:{originalSource:`() => {
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
}`,...(ta=(aa=Y.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,oa,sa;L.parameters={...L.parameters,docs:{...(ra=L.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
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
}`,...(sa=(oa=L.parameters)==null?void 0:oa.docs)==null?void 0:sa.source}}};var na,da,ia;T.parameters={...T.parameters,docs:{...(na=T.parameters)==null?void 0:na.docs,source:{originalSource:`() => {
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
}`,...(ia=(da=T.parameters)==null?void 0:da.docs)==null?void 0:ia.source}}};var la,ma,ca;I.parameters={...I.parameters,docs:{...(la=I.parameters)==null?void 0:la.docs,source:{originalSource:`() => {
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
}`,...(ca=(ma=I.parameters)==null?void 0:ma.docs)==null?void 0:ca.source}}};var pa,ua,Ma;_.parameters={..._.parameters,docs:{...(pa=_.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
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
}`,...(Ma=(ua=_.parameters)==null?void 0:ua.docs)==null?void 0:Ma.source}}};var ya,ba,Aa;N.parameters={...N.parameters,docs:{...(ya=N.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
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
}`,...(Aa=(ba=N.parameters)==null?void 0:ba.docs)==null?void 0:Aa.source}}};var xa,Ka,Pa;E.parameters={...E.parameters,docs:{...(xa=E.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
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
}`,...(Pa=(Ka=E.parameters)==null?void 0:Ka.docs)==null?void 0:Pa.source}}};var ha,ka,fa;O.parameters={...O.parameters,docs:{...(ha=O.parameters)==null?void 0:ha.docs,source:{originalSource:`() => {
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
}`,...(fa=(ka=O.parameters)==null?void 0:ka.docs)==null?void 0:fa.source}}};var va,Ca,Fa;X.parameters={...X.parameters,docs:{...(va=X.parameters)==null?void 0:va.docs,source:{originalSource:`() => {
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
}`,...(Fa=(Ca=X.parameters)==null?void 0:Ca.docs)==null?void 0:Fa.source}}};var ga,ja,Da;G.parameters={...G.parameters,docs:{...(ga=G.parameters)==null?void 0:ga.docs,source:{originalSource:`() => {
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
}`,...(Da=(ja=G.parameters)==null?void 0:ja.docs)==null?void 0:Da.source}}};var Sa,wa,Ra;$.parameters={...$.parameters,docs:{...(Sa=$.parameters)==null?void 0:Sa.docs,source:{originalSource:`() => {
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
}`,...(Ra=(wa=$.parameters)==null?void 0:wa.docs)==null?void 0:Ra.source}}};var Ya,La,Ta;z.parameters={...z.parameters,docs:{...(Ya=z.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(Ta=(La=z.parameters)==null?void 0:La.docs)==null?void 0:Ta.source}}};var Ia,_a,Na;B.parameters={...B.parameters,docs:{...(Ia=B.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
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
}`,...(Na=(_a=B.parameters)==null?void 0:_a.docs)==null?void 0:Na.source}}};var Ea,Oa,Xa;V.parameters={...V.parameters,docs:{...(Ea=V.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
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
}`,...(Xa=(Oa=V.parameters)==null?void 0:Oa.docs)==null?void 0:Xa.source}}};var Ga,$a,za;H.parameters={...H.parameters,docs:{...(Ga=H.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
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
}`,...(za=($a=H.parameters)==null?void 0:$a.docs)==null?void 0:za.source}}};var Ba,Va,Ha;U.parameters={...U.parameters,docs:{...(Ba=U.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
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
}`,...(Ha=(Va=U.parameters)==null?void 0:Va.docs)==null?void 0:Ha.source}}};var Ua,Wa,qa;W.parameters={...W.parameters,docs:{...(Ua=W.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
}`,...(qa=(Wa=W.parameters)==null?void 0:Wa.docs)==null?void 0:qa.source}}};var Ja,Qa,Za;q.parameters={...q.parameters,docs:{...(Ja=q.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
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
}`,...(Za=(Qa=q.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var et,at,tt;J.parameters={...J.parameters,docs:{...(et=J.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(tt=(at=J.parameters)==null?void 0:at.docs)==null?void 0:tt.source}}};var rt,ot,st;Q.parameters={...Q.parameters,docs:{...(rt=Q.parameters)==null?void 0:rt.docs,source:{originalSource:`() => {
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
}`,...(st=(ot=Q.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};const _t=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","Type","Stacked","StackedExpanded","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomArea","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{E as AxisLabel,N as AxisTickLine,b as Basic,h as Color,K as ColorScheme,A as Composition,T as ConnectNull,W as CustomActiveDot,V as CustomArea,B as CustomAxis,U as CustomDot,J as CustomGrid,q as CustomLabelList,H as CustomReferenceLine,Q as CustomTooltipCursor,$ as DisabledActiveDot,z as DisabledTooltip,G as DisabledXAxis,O as Domain,S as Dot,k as Filled,I as Formatter,P as Gradient,D as Grid,R as LabelList,g as Legend,j as Name,Y as Orientation,_ as ReferenceLine,x as Size,v as Stacked,C as StackedExpanded,L as Synced,X as TooltipCursor,f as Type,w as Unit,F as YAxis,_t as __namedExportsOrder,It as default};
