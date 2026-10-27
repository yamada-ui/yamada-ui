import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-eq8zrF0J.js";import{Cn as r,_n as i,jn as ee,sr as a,zn as te}from"./props-B6HR9zbn.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";import{a as ne,d as re,r as ie,t as ae}from"./create-component-DfdklnlB.js";import{a as oe,dn as se,l as s,s as ce,un as le,za as ue}from"./chart-Dawl3pVd.js";import{c,d as de,i as l,l as fe,o as pe,s as me,t as he,u as ge}from"./polar-chart-DtATZe2M.js";import{n as _e,t as u}from"./props-table-QJnv2pkU.js";var d;function f(){return(f=e((()=>{re(),d=ne({base:{"--legend-swatch-color":`{radar-stroke}`,"--tooltip-swatch-color":`{radar-stroke}`}})})))()}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?p(Object(n),!0).forEach(function(t){ve(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ve(e,t,n){return(t=ye(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e){var t=be(e,`string`);return typeof t==`symbol`?t:t+``}function be(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var xe,Se,Ce,we,Te;function Ee(){return(Ee=e((()=>{xe=t(n()),Se=n(),se(),de(),Ce=[`axis`],we=m(m({},ge),{},{layout:`centric`,startAngle:90,endAngle:-270}),Te=(0,Se.forwardRef)((e,t)=>{var n=ue(e,we);return xe.createElement(fe,{chartName:`RadarChart`,defaultTooltipEventType:`axis`,validateTooltipEventTypes:Ce,tooltipPayloadSearcher:le,categoricalChartProps:n,ref:t})})})))()}var De,h,Oe,ke,g,_;function v(){return(v=e((()=>{De=n(),Ee(),ie(),c(),f(),h=o(),{PropsContext:Oe,usePropsContext:ke,withContext:g}=ae(`radar-chart`,d),_=g(({children:e,nameKey:t,series:n=[],withAngleAxis:r=!!t,withGrid:i=!0,...ee})=>{let a=(0,De.useMemo)(()=>[{component:l,fallback:n.map((e,t)=>(0,h.jsx)(l,{...e},t))}],[n]);return(0,h.jsx)(me,{components:a,nameKey:t,render:e=>(0,h.jsx)(Te,{...e}),withAngleAxis:r,withGrid:i,...ee,children:e})})()})))()}var y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Ae;function $(){return($=e((()=>{y=n(),_e(),v(),ce(),c(),te(),i(),b=o(),x={component:_,title:`Components / Chart / RadarChart`},S=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,C=()=>[{browser:`chrome`,downloads:S(),visits:S()},{browser:`edge`,downloads:S(),visits:S()},{browser:`firefox`,downloads:S(),visits:S()},{browser:`opera`,downloads:S(),visits:S()},{browser:`safari`,downloads:S(),visits:S()},{browser:`other`,downloads:S(),visits:S()}],w=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e})},T=()=>{let e=(0,y.useMemo)(()=>C(),[]);return(0,b.jsxs)(_,{data:e,children:[(0,b.jsx)(oe,{}),(0,b.jsx)(l,{color:`blue`,dataKey:`visits`}),(0,b.jsx)(l,{color:`green`,dataKey:`downloads`}),(0,b.jsx)(pe,{}),(0,b.jsx)(he,{dataKey:`browser`})]})},E=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(u,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,b.jsx)(_,{size:r,data:t,nameKey:`browser`,series:e},i)})},D=()=>{let e=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(u,{variant:`stack`,rows:ee,children:(t,n,r)=>(0,b.jsx)(_,{data:e,series:s([{dataKey:`visits`},{dataKey:`downloads`}],n)},r)})},O=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e})},k=()=>{let e=(0,y.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e})},A=()=>{let e=(0,y.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{fillOpacity:`1`}})},j=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0})},M=()=>{let e=(0,y.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(u,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withLegend:!0,legendProps:{placement:r}},i)})},N=()=>{let e=(0,y.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0,label:!0}})},P=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(u,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,gridProps:{gridType:r}},i)})},F=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(u,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,gridProps:{fill:`mono.emphasized`,gridType:r,opacity:.2}},i)})},I=()=>{let e=(0,y.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{fill:`transparent`}})},L=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0}})},R=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,syncId:`chart`}),(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,syncId:`chart`})]})},z=()=>{let e=(0,y.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickFormatter:e=>r(e)},radarProps:{dot:!0,label:{formatter:e=>Number(e).toLocaleString()}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),r(t)],labelFormatter:e=>r(a(e)?e:``)}})},B=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,angleAxisProps:{axisLine:!0}})},V=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickLine:!0}})},H=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},U=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:!0}})},W=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(_,{data:t,series:e}),(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withAngleAxis:!1})]})},G=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withGrid:!1})},K=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1}})},q=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,withTooltip:!1})},J=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{strokeDasharray:`10 10`}})},Y=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`,dot:{fill:`blue`}},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},X=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:[`blue`,`red`]}},tooltipProps:{contentProps:{withSwatch:!1}}})},Z=()=>{let e=(0,y.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{contentProps:{withSwatch:!1}}})},Q=()=>{let e=(0,y.useMemo)(()=>s([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,y.useMemo)(()=>C(),[]);return(0,b.jsx)(_,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]}}})},Ae=`Basic.Composition.Size.ColorScheme.Gradient.Color.Filled.RadiusAxis.Legend.Label.GridType.GridFilled.Line.Dot.Synced.Formatter.AngleAxisLine.AngleAxisTickLine.Domain.TooltipCursor.DisabledAngleAxis.DisabledGrid.DisabledActiveDot.DisabledTooltip.CustomRadar.CustomDot.CustomActiveDot.CustomLabel.CustomTooltipCursor`.split(`.`),w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <RadarChart.Root key={key} data={data} nameKey="browser" series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{B as AngleAxisLine,V as AngleAxisTickLine,w as Basic,k as Color,D as ColorScheme,T as Composition,X as CustomActiveDot,Y as CustomDot,Z as CustomLabel,J as CustomRadar,Q as CustomTooltipCursor,K as DisabledActiveDot,W as DisabledAngleAxis,G as DisabledGrid,q as DisabledTooltip,H as Domain,L as Dot,A as Filled,z as Formatter,O as Gradient,F as GridFilled,P as GridType,N as Label,M as Legend,I as Line,j as RadiusAxis,E as Size,R as Synced,U as TooltipCursor,Ae as __namedExportsOrder,x as default};