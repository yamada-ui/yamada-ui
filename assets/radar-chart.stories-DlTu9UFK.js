import{p as Q,r,j as s,w as U,C as X,P as H,k as Y}from"./iframe-DyywAl9M.js";import{P as u}from"./props-table-DObtv924.js";import{b as Z,d as ee,c as I,P as ae,e as re,f as se}from"./polar-chart-D2Mh0mCG.js";import{r as te,a as oe,m as i,C as ne}from"./chart-AUolMmGP.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./use-css-D3ey5yo7.js";import"./tooltip.style-DYqsefBl.js";import"./index-CYndilSg.js";const de=Q({base:{"--legend-swatch-color":"{radar-stroke}","--tooltip-swatch-color":"{radar-stroke}"}});function $(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),t.push.apply(t,d)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?$(Object(t),!0).forEach(function(d){ie(e,d,t[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(t,d))})}return e}function ie(e,a,t){return(a=ce(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function ce(e){var a=me(e,"string");return typeof a=="symbol"?a:a+""}function me(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var d=t.call(e,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var ue=["axis"],le=V(V({},ee),{},{layout:"centric",startAngle:90,endAngle:-270}),pe=r.forwardRef((e,a)=>{var t=te(e,le);return r.createElement(Z,{chartName:"RadarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:ue,tooltipPayloadSearcher:oe,categoricalChartProps:t,ref:a})});const{withContext:ye}=U("radar-chart",de),o=ye(({children:e,nameKey:a,series:t=[],withAngleAxis:d=!!a,withGrid:m=!0,...W})=>{const q=r.useMemo(()=>[{component:I,fallback:t.map((B,J)=>s.jsx(I,{...B},J))}],[t]);return s.jsx(ae,{components:q,nameKey:a,render:B=>s.jsx(pe,{...B}),withAngleAxis:d,withGrid:m,...W,children:e})})(),Se={component:o,title:"Components / Chart / RadarChart"},c=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,n=()=>[{browser:"chrome",downloads:c(),visits:c()},{browser:"edge",downloads:c(),visits:c()},{browser:"firefox",downloads:c(),visits:c()},{browser:"opera",downloads:c(),visits:c()},{browser:"safari",downloads:c(),visits:c()},{browser:"other",downloads:c(),visits:c()}],l=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},p=()=>{const e=r.useMemo(()=>n(),[]);return s.jsxs(o,{data:e,children:[s.jsx(ne,{}),s.jsx(I,{color:"blue",dataKey:"visits"}),s.jsx(I,{color:"green",dataKey:"downloads"}),s.jsx(re,{}),s.jsx(se,{dataKey:"browser"})]})},y=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,d,m)=>s.jsx(o,{size:d,data:a,nameKey:"browser",series:e},m)})},w=()=>{const e=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:X,children:(a,t,d)=>s.jsx(o,{data:e,series:i([{dataKey:"visits"},{dataKey:"downloads"}],t)},d)})},K=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},R=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},h=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fillOpacity:"1"}})},b=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0})},C=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,withLegend:!0,legendProps:{placement:d}},m)})},g=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0,label:!0}})},M=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["polygon","circle"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{gridType:d}},m)})},v=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["polygon","circle"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{fill:"mono.emphasized",gridType:d,opacity:.2}},m)})},P=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fill:"transparent"}})},D=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0}})},x=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"}),s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"})]})},f=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickFormatter:t=>H(t)},radarProps:{dot:!0,label:{formatter:t=>Number(t).toLocaleString()}},tooltipProps:{formatter:(t,d="")=>[Number(t).toLocaleString(),H(d)],labelFormatter:t=>H(Y(t)?t:"")}})},S=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{axisLine:!0}})},j=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickLine:!0}})},k=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},A=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:!0}})},T=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,series:e}),s.jsx(o,{data:a,nameKey:"browser",series:e,withAngleAxis:!1})]})},L=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withGrid:!1})},O=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1}})},_=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withTooltip:!1})},E=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{strokeDasharray:"10 10"}})},F=()=>{const e=r.useMemo(()=>i([{dataKey:"visits",dot:{fill:"blue"}},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},G=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{contentProps:{withSwatch:!1}}})},z=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{contentProps:{withSwatch:!1}}})},N=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:{stroke:["red","blue"]}}})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...K.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...R.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    fillOpacity: "1"
  }} />;
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <RadarChart.Root key={key} data={data} nameKey="browser" series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...g.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["polygon", "circle"]}>
      {(_, gridType, key) => <RadarChart.Root key={key} data={data} nameKey="browser" series={series} gridProps={{
      gridType
    }} />}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["polygon", "circle"]}>
      {(_, gridType, key) => <RadarChart.Root key={key} data={data} nameKey="browser" series={series} gridProps={{
      fill: "mono.emphasized",
      gridType,
      opacity: 0.2
    }} />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    fill: "transparent"
  }} />;
}`,...P.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <RadarChart.Root data={data} nameKey="browser" series={series} syncId="chart" />
      <RadarChart.Root data={data} nameKey="browser" series={series} syncId="chart" />
    </>;
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickFormatter: value => toTitleCase(value)
  }} radarProps={{
    dot: true,
    label: {
      formatter: value => Number(value).toLocaleString()
    }
  }} tooltipProps={{
    formatter: (value, name = "") => [Number(value).toLocaleString(), toTitleCase(name)],
    labelFormatter: value => toTitleCase(isString(value) ? value : "")
  }} />;
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis radiusAxisProps={{
    axisLine: false,
    domain: [0, 7000],
    tick: false,
    ticks: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000]
  }} />;
}`,...k.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <RadarChart.Root data={data} series={series} />
      <RadarChart.Root data={data} nameKey="browser" series={series} withAngleAxis={false} />
    </>;
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...L.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...O.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,..._.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits",
    dot: {
      fill: "blue"
    }
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} tooltipProps={{
    contentProps: {
      withSwatch: false
    }
  }} />;
}`,...F.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: {
      fill: ["blue", "red"]
    }
  }} tooltipProps={{
    contentProps: {
      withSwatch: false
    }
  }} />;
}`,...G.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
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
    contentProps: {
      withSwatch: false
    }
  }} />;
}`,...z.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    }
  }} />;
}`,...N.parameters?.docs?.source}}};const je=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","RadiusAxis","Legend","Label","GridType","GridFilled","Line","Dot","Synced","Formatter","AngleAxisLine","AngleAxisTickLine","Domain","TooltipCursor","DisabledAngleAxis","DisabledGrid","DisabledActiveDot","DisabledTooltip","CustomRadar","CustomDot","CustomActiveDot","CustomLabel","CustomTooltipCursor"];export{S as AngleAxisLine,j as AngleAxisTickLine,l as Basic,R as Color,w as ColorScheme,p as Composition,G as CustomActiveDot,F as CustomDot,z as CustomLabel,E as CustomRadar,N as CustomTooltipCursor,O as DisabledActiveDot,T as DisabledAngleAxis,L as DisabledGrid,_ as DisabledTooltip,k as Domain,D as Dot,h as Filled,f as Formatter,K as Gradient,v as GridFilled,M as GridType,g as Label,C as Legend,P as Line,b as RadiusAxis,y as Size,x as Synced,A as TooltipCursor,je as __namedExportsOrder,Se as default};
