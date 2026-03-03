import{p as Bt,r,q as Gt,j as s,C as It,P as Vt}from"./iframe-B_LcDk8j.js";import{P as u}from"./props-table-qgGdocBx.js";import{d as o}from"./dayjs.min-DiQooryX.js";import{C as Ht,f as M,b as Ut,c as Wt,d as U}from"./cartesian-chart-YK7l32ae.js";import{a as qt,C as Jt,b as Qt}from"./chart-BZAiiNsB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BlZthnbl.js";import"./grid-item-D8ZfrR7E.js";import"./for-B4Q7qiCG.js";import"./flex-BReIzsmR.js";import"./heading-CKLDXwzq.js";import"./use-css-BNUvMACT.js";import"./tooltip.style-BduI7Oig.js";import"./index-BceY5Ms_.js";const Zt=Bt({base:{"--legend-swatch-color":"{line-stroke}","--tooltip-swatch-color":"{line-stroke}"}});var ea=["axis"],ta=r.forwardRef((a,t)=>r.createElement(Ht,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:ea,tooltipPayloadSearcher:qt,categoricalChartProps:a,ref:t}));const aa=({accessibilityLayer:a=!0,compact:t,data:e,layout:l="horizontal",responsive:m,syncId:d,syncMethod:c,...p})=>{const W=r.useCallback(q=>({...q,...p}),[p]);return{getChartProps:r.useCallback(q=>({accessibilityLayer:a,compact:t,data:e,layout:l,margin:{left:16,right:16},responsive:m,syncId:d,syncMethod:c,...q}),[a,t,e,l,m,d,c]),getRootProps:W}},{withContext:ra}=Gt("line-chart",Zt),n=ra(({children:a,series:t=[],chartProps:e,...l})=>{const{getChartProps:m,getRootProps:d}=aa(l),c=r.useMemo(()=>[{component:M,fallback:t.map((p,W)=>s.jsx(M,{...p},W))}],[t]);return s.jsx(Ut,{components:c,render:p=>s.jsx(ta,{...m({...p,...e})}),...d(),children:a})})(),Ka={component:n,title:"Components / Chart / LineChart"},J=(a=1e3,t=5e3)=>Math.floor(Math.random()*(t-a+1))+a,i=(a=6)=>Array.from({length:a},(t,e)=>({date:o().add(e,"month").format("YYYY-MM-DD"),desktop:J(),mobile:J(),tablet:J()})),y=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},b=()=>{const a=r.useMemo(()=>i(),[]);return s.jsxs(n,{data:a,children:[s.jsx(Jt,{labelFormatter:t=>o(t).format("MMM")}),s.jsx(Wt,{dataKey:"date",tickFormatter:t=>o(t).format("MMM")}),s.jsx(M,{dataKey:"desktop",dot:!0,children:s.jsx(Qt,{})}),s.jsx(M,{dataKey:"tablet"}),s.jsx(M,{dataKey:"mobile"})]})},x=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,m)=>s.jsx(n,{size:l,data:t,series:a,tooltipProps:{labelFormatter:d=>o(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")}},m)})},P=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:It,children:(e,l,m)=>s.jsx(n,{colorScheme:l,data:t,series:a,tooltipProps:{labelFormatter:d=>o(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")}},m)})},K=()=>{const a=r.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},h=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,lineProps:{type:l},tooltipProps:{labelFormatter:d=>o(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")}},m)})},k=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},f=()=>{const a=r.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withLegend:!0,legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")}},m)})},v=()=>{const a=r.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withLegend:!0,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},L=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")}},m)})},C=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},F=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},j=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"}],[]),t=r.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:t,series:a,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:"date",formatter:e=>o(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},A=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(u,{variant:"stack",rows:["start","end"],children:(e,l,m)=>s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:d=>o(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>o(d).format("MMM")},yAxisProps:{orientation:l}},m)})},g=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}}),s.jsx(n,{data:t,series:a,syncId:"chart",tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})]})},D=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i().map(({date:e,desktop:l,mobile:m,tablet:d},c)=>({date:e,desktop:c===3?null:l,mobile:c===3?null:m,tablet:c===3?null:d})),[]);return s.jsx(n,{data:t,series:a,lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},w=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),Vt(l)],labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},R=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsxs(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:[s.jsx(U,{label:"Reference line",y:3e3}),s.jsx(U,{label:{position:"insideTopLeft",value:"Reference line"},x:o().add(3,"month").format("YYYY-MM-DD")}),s.jsx(U,{label:{position:"center",value:"Reference line"},segment:[{x:o().format("YYYY-MM-DD"),y:0},{x:o().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},S=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},Y=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{label:"Value"}})},T=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},_=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:!0,labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},N=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},E=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},X=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},z=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>o(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},O=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{color:["red","blue"],dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},$=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},children:s.jsx(U,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},B=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},G=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{activeDot:{fill:["red","blue"]}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},I=()=>{const a=r.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,lineProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},V=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>o(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})},H=()=>{const a=r.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),t=r.useMemo(()=>i(),[]);return s.jsx(n,{data:t,series:a,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>o(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>o(e).format("MMM")}})};var Q,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,re;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var oe,se,ne;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,de,le;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(le=(de=P.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,ce,pe;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(pe=(ce=K.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,Me,ye;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ye=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var be,xe,Pe;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Pe=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Pe.source}}};var Ke,he,ke;f.parameters={...f.parameters,docs:{...(Ke=f.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(ke=(he=f.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var fe,ve,Le;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Le=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Le.source}}};var Ce,Fe,je;L.parameters={...L.parameters,docs:{...(Ce=L.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(je=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ae,ge,De;C.parameters={...C.parameters,docs:{...(Ae=C.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(De=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:De.source}}};var we,Re,Se;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Se=(Re=F.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var Ye,Te,_e;j.parameters={...j.parameters,docs:{...(Ye=j.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(_e=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Ne,Ee,Xe;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Xe.source}}};var ze,Oe,$e;g.parameters={...g.parameters,docs:{...(ze=g.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...($e=(Oe=g.parameters)==null?void 0:Oe.docs)==null?void 0:$e.source}}};var Be,Ge,Ie;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Ie=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Ie.source}}};var Ve,He,Ue;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Ue=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var We,qe,Je;R.parameters={...R.parameters,docs:{...(We=R.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Je=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Qe,Ze,et;S.parameters={...S.parameters,docs:{...(Qe=S.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(et=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:et.source}}};var tt,at,rt;Y.parameters={...Y.parameters,docs:{...(tt=Y.parameters)==null?void 0:tt.docs,source:{originalSource:`() => {
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
}`,...(rt=(at=Y.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var ot,st,nt;T.parameters={...T.parameters,docs:{...(ot=T.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(nt=(st=T.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}};var it,dt,lt;_.parameters={..._.parameters,docs:{...(it=_.parameters)==null?void 0:it.docs,source:{originalSource:`() => {
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
}`,...(lt=(dt=_.parameters)==null?void 0:dt.docs)==null?void 0:lt.source}}};var mt,ct,pt;N.parameters={...N.parameters,docs:{...(mt=N.parameters)==null?void 0:mt.docs,source:{originalSource:`() => {
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
}`,...(pt=(ct=N.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var ut,Mt,yt;E.parameters={...E.parameters,docs:{...(ut=E.parameters)==null?void 0:ut.docs,source:{originalSource:`() => {
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
}`,...(yt=(Mt=E.parameters)==null?void 0:Mt.docs)==null?void 0:yt.source}}};var bt,xt,Pt;X.parameters={...X.parameters,docs:{...(bt=X.parameters)==null?void 0:bt.docs,source:{originalSource:`() => {
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
}`,...(Pt=(xt=X.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var Kt,ht,kt;z.parameters={...z.parameters,docs:{...(Kt=z.parameters)==null?void 0:Kt.docs,source:{originalSource:`() => {
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
}`,...(kt=(ht=z.parameters)==null?void 0:ht.docs)==null?void 0:kt.source}}};var ft,vt,Lt;O.parameters={...O.parameters,docs:{...(ft=O.parameters)==null?void 0:ft.docs,source:{originalSource:`() => {
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
}`,...(Lt=(vt=O.parameters)==null?void 0:vt.docs)==null?void 0:Lt.source}}};var Ct,Ft,jt;$.parameters={...$.parameters,docs:{...(Ct=$.parameters)==null?void 0:Ct.docs,source:{originalSource:`() => {
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
}`,...(jt=(Ft=$.parameters)==null?void 0:Ft.docs)==null?void 0:jt.source}}};var At,gt,Dt;B.parameters={...B.parameters,docs:{...(At=B.parameters)==null?void 0:At.docs,source:{originalSource:`() => {
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
}`,...(Dt=(gt=B.parameters)==null?void 0:gt.docs)==null?void 0:Dt.source}}};var wt,Rt,St;G.parameters={...G.parameters,docs:{...(wt=G.parameters)==null?void 0:wt.docs,source:{originalSource:`() => {
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
}`,...(St=(Rt=G.parameters)==null?void 0:Rt.docs)==null?void 0:St.source}}};var Yt,Tt,_t;I.parameters={...I.parameters,docs:{...(Yt=I.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => {
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
}`,...(_t=(Tt=I.parameters)==null?void 0:Tt.docs)==null?void 0:_t.source}}};var Nt,Et,Xt;V.parameters={...V.parameters,docs:{...(Nt=V.parameters)==null?void 0:Nt.docs,source:{originalSource:`() => {
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
}`,...(Xt=(Et=V.parameters)==null?void 0:Et.docs)==null?void 0:Xt.source}}};var zt,Ot,$t;H.parameters={...H.parameters,docs:{...(zt=H.parameters)==null?void 0:zt.docs,source:{originalSource:`() => {
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
}`,...($t=(Ot=H.parameters)==null?void 0:Ot.docs)==null?void 0:$t.source}}};const ha=["Basic","Composition","Size","ColorScheme","Color","Type","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomLine","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{Y as AxisLabel,S as AxisTickLine,y as Basic,K as Color,P as ColorScheme,b as Composition,D as ConnectNull,G as CustomActiveDot,z as CustomAxis,B as CustomDot,V as CustomGrid,I as CustomLabelList,O as CustomLine,$ as CustomReferenceLine,H as CustomTooltipCursor,E as DisabledActiveDot,X as DisabledTooltip,N as DisabledXAxis,T as Domain,C as Dot,w as Formatter,L as Grid,j as LabelList,f as Legend,v as Name,A as Orientation,R as ReferenceLine,x as Size,g as Synced,_ as TooltipCursor,h as Type,F as Unit,k as YAxis,ha as __namedExportsOrder,Ka as default};
