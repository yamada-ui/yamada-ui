import{r as o,j as s,w as Oa,C as za,P as $a}from"./iframe-DFva2jMV.js";import{P as c}from"./props-table-B_8J15-m.js";import{d as r}from"./dayjs.min-B3bmQakq.js";import{C as Ba,f as p,b as Ga,c as Ia,d as V}from"./cartesian-chart-DnsPMY2j.js";import{l as Va}from"./line-chart.style-DNB6u5a0.js";import{a as Ha,C as Ua,b as Wa}from"./chart-CpFMDtcB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-x41VgY43.js";import"./grid-item-1UEeJgUu.js";import"./for-BFLNBjH-.js";import"./flex-nV8c4wGK.js";import"./heading-H0Zm1g-d.js";import"./use-css-Ducu8UxE.js";import"./tooltip.style-CksDLP7y.js";import"./index-BwDAfbKD.js";var qa=["axis"],Ja=o.forwardRef((t,a)=>o.createElement(Ba,{chartName:"LineChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:qa,tooltipPayloadSearcher:Ha,categoricalChartProps:t,ref:a}));const{withContext:Qa}=Oa("line-chart",Va),n=Qa(({children:t,series:a=[],...e})=>{const l=o.useMemo(()=>[{component:p,fallback:a.map((m,d)=>s.jsx(p,{...m},d))}],[a]);return s.jsx(Ga,{components:l,render:m=>s.jsx(Ja,{...m}),...e,children:t})})(),Mt={component:n,title:"Components / Chart / LineChart"},U=(t=1e3,a=5e3)=>Math.floor(Math.random()*(a-t+1))+t,i=(t=6)=>Array.from({length:t},(a,e)=>({date:r().add(e,"month").format("YYYY-MM-DD"),desktop:U(),mobile:U(),tablet:U()})),u=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},M=()=>{const t=o.useMemo(()=>i(),[]);return s.jsxs(n,{data:t,children:[s.jsx(Ua,{labelFormatter:a=>r(a).format("MMM")}),s.jsx(Ia,{dataKey:"date",tickFormatter:a=>r(a).format("MMM")}),s.jsx(p,{dataKey:"desktop",dot:!0,children:s.jsx(Wa,{})}),s.jsx(p,{dataKey:"tablet"}),s.jsx(p,{dataKey:"mobile"})]})},y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(e,l,m)=>s.jsx(n,{size:l,data:a,series:t,tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},b=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:za,children:(e,l,m)=>s.jsx(n,{colorScheme:l,data:a,series:t,tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},x=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},K=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["monotone","bump","linear","natural","step","stepBefore","stepAfter"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,lineProps:{type:l},tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},P=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},h=()=>{const t=o.useMemo(()=>[{color:"red",dataKey:"desktop"},{color:"blue",dataKey:"tablet"},{color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,withLegend:!0,legendProps:{placement:l},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},k=()=>{const t=o.useMemo(()=>[{name:"Desktop",color:"red",dataKey:"desktop"},{name:"Tablet",color:"blue",dataKey:"tablet"},{name:"Mobile",color:"green",dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withLegend:!0,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},f=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["xy","x","y","none"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,gridProps:{horizontal:l.includes("x"),vertical:l.includes("y")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")}},m)})},v=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},L=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:"k"}})},F=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),s.jsx(n,{data:a,series:t,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:"date",formatter:e=>r(String(e)).format("MMM")}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},C=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(c,{variant:"stack",rows:["start","end"],children:(e,l,m)=>s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{left:l==="end"?16:0,right:l==="start"?16:0}},tooltipProps:{labelFormatter:d=>r(d).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:d=>r(d).format("MMM")},yAxisProps:{orientation:l}},m)})},j=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}}),s.jsx(n,{data:a,series:t,syncId:"chart",tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})]})},A=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i().map(({date:e,desktop:l,mobile:m,tablet:d},H)=>({date:e,desktop:H===3?null:l,mobile:H===3?null:m,tablet:H===3?null:d})),[]);return s.jsx(n,{data:a,series:t,lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},D=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,l="")=>[Number(e).toLocaleString(),$a(l)],labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},g=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsxs(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:[s.jsx(V,{label:"Reference line",y:3e3}),s.jsx(V,{label:{position:"insideTopLeft",value:"Reference line"},x:r().add(3,"month").format("YYYY-MM-DD")}),s.jsx(V,{label:{position:"center",value:"Reference line"},segment:[{x:r().format("YYYY-MM-DD"),y:0},{x:r().add(3,"month").format("YYYY-MM-DD"),y:3e3}]})]})},w=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM"),tickLine:!0},yAxisProps:{tickLine:!0}})},S=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:"Date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{label:"Value"}})},R=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},Y=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:!0,labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},T=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},_=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},N=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withTooltip:!1,xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},E=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",label:{color:["red","blue"]},tick:{color:["red","blue"]},tickFormatter:e=>r(e).format("MMM"),tickLine:{color:["red","blue"]}},yAxisProps:{label:{color:["red","blue"]},tick:{color:["red","blue"]},tickLine:{color:["red","blue"]}}})},X=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{color:["red","blue"],dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},O=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},children:s.jsx(V,{color:["green","blue"],label:{color:["green","blue"],position:"insideTopRight",value:"Reference line"},strokeDasharray:"15 15",y:3e3})})},z=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet",dot:{fill:"blue"}},{dataKey:"mobile",dot:{fill:["white","black"],stroke:"red",strokeWidth:1}}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},$=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:{fill:["red","blue"]}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},B=()=>{const t=o.useMemo(()=>[{color:"blue",dataKey:"desktop"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,lineProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},G=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,gridProps:{strokeDasharray:"15 15"},tooltipProps:{labelFormatter:e=>r(e).format("MMM"),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})},I=()=>{const t=o.useMemo(()=>[{dataKey:"desktop"},{dataKey:"tablet"},{dataKey:"mobile"}],[]),a=o.useMemo(()=>i(),[]);return s.jsx(n,{data:a,series:t,tooltipProps:{cursor:{stroke:["red","blue"]},labelFormatter:e=>r(e).format("MMM")},xAxisProps:{dataKey:"date",tickFormatter:e=>r(e).format("MMM")}})};var W,q,J;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(J=(q=u.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,Z,ee;M.parameters={...M.parameters,docs:{...(Q=M.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(re=(te=y.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var oe,se,ne;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ne=(se=b.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var ie,de,le;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(le=(de=x.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var me,ce,pe;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(pe=(ce=K.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,Me,ye;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(ye=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var be,xe,Ke;h.parameters={...h.parameters,docs:{...(be=h.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ke=(xe=h.parameters)==null?void 0:xe.docs)==null?void 0:Ke.source}}};var Pe,he,ke;k.parameters={...k.parameters,docs:{...(Pe=k.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(ke=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var fe,ve,Le;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Le=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Le.source}}};var Fe,Ce,je;v.parameters={...v.parameters,docs:{...(Fe=v.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(je=(Ce=v.parameters)==null?void 0:Ce.docs)==null?void 0:je.source}}};var Ae,De,ge;L.parameters={...L.parameters,docs:{...(Ae=L.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(ge=(De=L.parameters)==null?void 0:De.docs)==null?void 0:ge.source}}};var we,Se,Re;F.parameters={...F.parameters,docs:{...(we=F.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Re=(Se=F.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var Ye,Te,_e;C.parameters={...C.parameters,docs:{...(Ye=C.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(_e=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Ne,Ee,Xe;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:Xe.source}}};var Oe,ze,$e;A.parameters={...A.parameters,docs:{...(Oe=A.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...($e=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:$e.source}}};var Be,Ge,Ie;D.parameters={...D.parameters,docs:{...(Be=D.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Ie=(Ge=D.parameters)==null?void 0:Ge.docs)==null?void 0:Ie.source}}};var Ve,He,Ue;g.parameters={...g.parameters,docs:{...(Ve=g.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Ue=(He=g.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var We,qe,Je;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Je=(qe=w.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Qe,Ze,ea;S.parameters={...S.parameters,docs:{...(Qe=S.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(ea=(Ze=S.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ta,ra;R.parameters={...R.parameters,docs:{...(aa=R.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
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
}`,...(ra=(ta=R.parameters)==null?void 0:ta.docs)==null?void 0:ra.source}}};var oa,sa,na;Y.parameters={...Y.parameters,docs:{...(oa=Y.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
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
}`,...(na=(sa=Y.parameters)==null?void 0:sa.docs)==null?void 0:na.source}}};var ia,da,la;T.parameters={...T.parameters,docs:{...(ia=T.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
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
}`,...(la=(da=T.parameters)==null?void 0:da.docs)==null?void 0:la.source}}};var ma,ca,pa;_.parameters={..._.parameters,docs:{...(ma=_.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
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
}`,...(pa=(ca=_.parameters)==null?void 0:ca.docs)==null?void 0:pa.source}}};var ua,Ma,ya;N.parameters={...N.parameters,docs:{...(ua=N.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
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
}`,...(ya=(Ma=N.parameters)==null?void 0:Ma.docs)==null?void 0:ya.source}}};var ba,xa,Ka;E.parameters={...E.parameters,docs:{...(ba=E.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
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
}`,...(Ka=(xa=E.parameters)==null?void 0:xa.docs)==null?void 0:Ka.source}}};var Pa,ha,ka;X.parameters={...X.parameters,docs:{...(Pa=X.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
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
}`,...(ka=(ha=X.parameters)==null?void 0:ha.docs)==null?void 0:ka.source}}};var fa,va,La;O.parameters={...O.parameters,docs:{...(fa=O.parameters)==null?void 0:fa.docs,source:{originalSource:`() => {
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
}`,...(La=(va=O.parameters)==null?void 0:va.docs)==null?void 0:La.source}}};var Fa,Ca,ja;z.parameters={...z.parameters,docs:{...(Fa=z.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
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
}`,...(ja=(Ca=z.parameters)==null?void 0:Ca.docs)==null?void 0:ja.source}}};var Aa,Da,ga;$.parameters={...$.parameters,docs:{...(Aa=$.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
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
}`,...(ga=(Da=$.parameters)==null?void 0:Da.docs)==null?void 0:ga.source}}};var wa,Sa,Ra;B.parameters={...B.parameters,docs:{...(wa=B.parameters)==null?void 0:wa.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Sa=B.parameters)==null?void 0:Sa.docs)==null?void 0:Ra.source}}};var Ya,Ta,_a;G.parameters={...G.parameters,docs:{...(Ya=G.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(_a=(Ta=G.parameters)==null?void 0:Ta.docs)==null?void 0:_a.source}}};var Na,Ea,Xa;I.parameters={...I.parameters,docs:{...(Na=I.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
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
}`,...(Xa=(Ea=I.parameters)==null?void 0:Ea.docs)==null?void 0:Xa.source}}};const yt=["Basic","Composition","Size","ColorScheme","Color","Type","YAxis","Legend","Name","Grid","Dot","Unit","LabelList","Orientation","Synced","ConnectNull","Formatter","ReferenceLine","AxisTickLine","AxisLabel","Domain","TooltipCursor","DisabledXAxis","DisabledActiveDot","DisabledTooltip","CustomAxis","CustomLine","CustomReferenceLine","CustomDot","CustomActiveDot","CustomLabelList","CustomGrid","CustomTooltipCursor"];export{S as AxisLabel,w as AxisTickLine,u as Basic,x as Color,b as ColorScheme,M as Composition,A as ConnectNull,$ as CustomActiveDot,E as CustomAxis,z as CustomDot,G as CustomGrid,B as CustomLabelList,X as CustomLine,O as CustomReferenceLine,I as CustomTooltipCursor,_ as DisabledActiveDot,N as DisabledTooltip,T as DisabledXAxis,R as Domain,v as Dot,D as Formatter,f as Grid,F as LabelList,h as Legend,k as Name,C as Orientation,g as ReferenceLine,y as Size,j as Synced,Y as TooltipCursor,K as Type,L as Unit,P as YAxis,yt as __namedExportsOrder,Mt as default};
