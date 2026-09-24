import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{Nn as r,Tn as i,_n as a,dn as o,tr as ee}from"./props-Bz1FL_va.js";import{t as s}from"./jsx-runtime-BdxMnOeJ.js";import{a as te,d as ne,r as re,t as ie}from"./create-component-DtmnY_ce.js";import{a as ae,dn as oe,l as c,s as se,un as ce,za as le}from"./chart-BjaYBYpt.js";import{c as l,d as ue,i as u,l as de,o as fe,s as pe,t as me,u as he}from"./polar-chart-Cu-H7TGr.js";import{n as ge,t as d}from"./props-table-CLkISL0o.js";var f;function p(){return(p=e((()=>{ne(),f=te({base:{"--legend-swatch-color":`{radar-stroke}`,"--tooltip-swatch-color":`{radar-stroke}`}})})))()}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?m(Object(n),!0).forEach(function(t){_e(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _e(e,t,n){return(t=ve(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ve(e){var t=ye(e,`string`);return typeof t==`symbol`?t:t+``}function ye(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var be,xe,Se,Ce,we;function Te(){return(Te=e((()=>{be=t(n()),xe=n(),oe(),ue(),Se=[`axis`],Ce=h(h({},he),{},{layout:`centric`,startAngle:90,endAngle:-270}),we=(0,xe.forwardRef)((e,t)=>{var n=le(e,Ce);return be.createElement(de,{chartName:`RadarChart`,defaultTooltipEventType:`axis`,validateTooltipEventTypes:Se,tooltipPayloadSearcher:ce,categoricalChartProps:n,ref:t})})})))()}var Ee,g,De,Oe,_,v;function y(){return(y=e((()=>{Ee=n(),Te(),re(),l(),p(),g=s(),{PropsContext:De,usePropsContext:Oe,withContext:_}=ie(`radar-chart`,f),v=_(({children:e,nameKey:t,series:n=[],withAngleAxis:r=!!t,withGrid:i=!0,...a})=>{let o=(0,Ee.useMemo)(()=>[{component:u,fallback:n.map((e,t)=>(0,g.jsx)(u,{...e},t))}],[n]);return(0,g.jsx)(pe,{components:o,nameKey:t,render:e=>(0,g.jsx)(we,{...e}),withAngleAxis:r,withGrid:i,...a,children:e})})()})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ke;function Ae(){return(Ae=e((()=>{b=n(),ge(),y(),se(),l(),r(),o(),x=s(),S={component:v,title:`Components / Chart / RadarChart`},C=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,w=()=>[{browser:`chrome`,downloads:C(),visits:C()},{browser:`edge`,downloads:C(),visits:C()},{browser:`firefox`,downloads:C(),visits:C()},{browser:`opera`,downloads:C(),visits:C()},{browser:`safari`,downloads:C(),visits:C()},{browser:`other`,downloads:C(),visits:C()}],T=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e})},E=()=>{let e=(0,b.useMemo)(()=>w(),[]);return(0,x.jsxs)(v,{data:e,children:[(0,x.jsx)(ae,{}),(0,x.jsx)(u,{color:`blue`,dataKey:`visits`}),(0,x.jsx)(u,{color:`green`,dataKey:`downloads`}),(0,x.jsx)(fe,{}),(0,x.jsx)(me,{dataKey:`browser`})]})},D=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(d,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,x.jsx)(v,{size:r,data:t,nameKey:`browser`,series:e},i)})},O=()=>{let e=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(d,{variant:`stack`,rows:i,children:(t,n,r)=>(0,x.jsx)(v,{data:e,series:c([{dataKey:`visits`},{dataKey:`downloads`}],n)},r)})},k=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e})},A=()=>{let e=(0,b.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e})},j=()=>{let e=(0,b.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{fillOpacity:`1`}})},M=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0})},N=()=>{let e=(0,b.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(d,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withLegend:!0,legendProps:{placement:r}},i)})},P=()=>{let e=(0,b.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0,label:!0}})},F=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(d,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,gridProps:{gridType:r}},i)})},I=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(d,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,gridProps:{fill:`mono.emphasized`,gridType:r,opacity:.2}},i)})},L=()=>{let e=(0,b.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{fill:`transparent`}})},R=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0}})},z=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,syncId:`chart`}),(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,syncId:`chart`})]})},B=()=>{let e=(0,b.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickFormatter:e=>a(e)},radarProps:{dot:!0,label:{formatter:e=>Number(e).toLocaleString()}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),a(t)],labelFormatter:e=>a(ee(e)?e:``)}})},V=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,angleAxisProps:{axisLine:!0}})},H=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickLine:!0}})},U=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},W=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:!0}})},G=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(v,{data:t,series:e}),(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withAngleAxis:!1})]})},K=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withGrid:!1})},q=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1}})},J=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,withTooltip:!1})},Y=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{strokeDasharray:`10 10`}})},X=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`,dot:{fill:`blue`}},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},Z=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:[`blue`,`red`]}},tooltipProps:{contentProps:{withSwatch:!1}}})},Q=()=>{let e=(0,b.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{contentProps:{withSwatch:!1}}})},$=()=>{let e=(0,b.useMemo)(()=>c([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,b.useMemo)(()=>w(),[]);return(0,x.jsx)(v,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]}}})},ke=`Basic.Composition.Size.ColorScheme.Gradient.Color.Filled.RadiusAxis.Legend.Label.GridType.GridFilled.Line.Dot.Synced.Formatter.AngleAxisLine.AngleAxisTickLine.Domain.TooltipCursor.DisabledAngleAxis.DisabledGrid.DisabledActiveDot.DisabledTooltip.CustomRadar.CustomDot.CustomActiveDot.CustomLabel.CustomTooltipCursor`.split(`.`),T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
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
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Ae();export{V as AngleAxisLine,H as AngleAxisTickLine,T as Basic,A as Color,O as ColorScheme,E as Composition,Z as CustomActiveDot,X as CustomDot,Q as CustomLabel,Y as CustomRadar,$ as CustomTooltipCursor,q as DisabledActiveDot,G as DisabledAngleAxis,K as DisabledGrid,J as DisabledTooltip,U as Domain,R as Dot,j as Filled,B as Formatter,k as Gradient,I as GridFilled,F as GridType,P as Label,N as Legend,L as Line,M as RadiusAxis,D as Size,z as Synced,W as TooltipCursor,ke as __namedExportsOrder,S as default};