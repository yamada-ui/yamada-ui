import{p as Sa,r,q as ja,j as s,C as ka,P as J,l as Aa}from"./iframe-B_LcDk8j.js";import{P as l}from"./props-table-qgGdocBx.js";import{b as Ta,d as La,c as V,P as Oa,e as _a,f as Ea}from"./polar-chart-DFwOPwhr.js";import{r as Fa,a as Ga,m as i,C as za}from"./chart-BZAiiNsB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BlZthnbl.js";import"./grid-item-D8ZfrR7E.js";import"./for-B4Q7qiCG.js";import"./flex-BReIzsmR.js";import"./heading-CKLDXwzq.js";import"./use-css-BNUvMACT.js";import"./tooltip.style-BduI7Oig.js";import"./index-BceY5Ms_.js";const Na=Sa({base:{"--legend-swatch-color":"{radar-stroke}","--tooltip-swatch-color":"{radar-stroke}"}});function U(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,n)}return t}function X(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?U(Object(t),!0).forEach(function(n){Ia(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function Ia(e,a,t){return(a=Ba(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Ba(e){var a=Ha(e,"string");return typeof a=="symbol"?a:a+""}function Ha(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var $a=["axis"],qa=X(X({},La),{},{layout:"centric",startAngle:90,endAngle:-270}),Va=r.forwardRef((e,a)=>{var t=Fa(e,qa);return r.createElement(Ta,{chartName:"RadarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:$a,tooltipPayloadSearcher:Ga,categoricalChartProps:t,ref:a})});const Wa=({accessibilityLayer:e=!0,cx:a,cy:t,data:n,innerRadius:c,outerRadius:p,responsive:y,syncId:w,syncMethod:R,...K})=>{const u=r.useCallback(W=>({...W,...K}),[K]);return{getChartProps:r.useCallback(W=>({accessibilityLayer:e,cx:a,cy:t,data:n,innerRadius:c,margin:{left:16,right:16},outerRadius:p,responsive:y,syncId:w,syncMethod:R,...W}),[e,a,t,n,c,p,y,w,R]),getRootProps:u}},{withContext:Ja}=ja("radar-chart",Na),o=Ja(({children:e,nameKey:a,series:t=[],withAngleAxis:n=!!a,withGrid:c=!0,chartProps:p,...y})=>{const{getChartProps:w,getRootProps:R}=Wa(y),K=r.useMemo(()=>[{component:V,fallback:t.map((u,Q)=>s.jsx(V,{...u},Q))}],[t]);return s.jsx(Oa,{components:K,nameKey:a,render:u=>s.jsx(Va,{...w({...u,...p})}),withAngleAxis:n,withGrid:c,...R(),children:e})})(),ir={component:o,title:"Components / Chart / RadarChart"},m=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,d=()=>[{browser:"chrome",downloads:m(),visits:m()},{browser:"edge",downloads:m(),visits:m()},{browser:"firefox",downloads:m(),visits:m()},{browser:"opera",downloads:m(),visits:m()},{browser:"safari",downloads:m(),visits:m()},{browser:"other",downloads:m(),visits:m()}],h=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},b=()=>{const e=r.useMemo(()=>d(),[]);return s.jsxs(o,{data:e,children:[s.jsx(za,{}),s.jsx(V,{color:"blue",dataKey:"visits"}),s.jsx(V,{color:"green",dataKey:"downloads"}),s.jsx(_a,{}),s.jsx(Ea,{dataKey:"browser"})]})},C=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,n,c)=>s.jsx(o,{size:n,data:a,nameKey:"browser",series:e},c)})},g=()=>{const e=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:ka,children:(a,t,n)=>s.jsx(o,{data:e,series:i([{dataKey:"visits"},{dataKey:"downloads"}],t)},n)})},P=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},v=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},M=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0})},D=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,withLegend:!0,legendProps:{placement:n}},c)})},x=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0,label:!0}})},f=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["polygon","circle"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{gridType:n}},c)})},S=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["polygon","circle"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{fill:"mono.emphasized",gridType:n,opacity:.2}},c)})},j=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fill:"transparent"}})},k=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0}})},A=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"}),s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"})]})},T=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickFormatter:t=>J(t)},radarProps:{dot:!0,label:{formatter:t=>Number(t).toLocaleString()}},tooltipProps:{formatter:(t,n="")=>[Number(t).toLocaleString(),J(n)],labelFormatter:t=>J(Aa(t)?t:"")}})},L=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{axisLine:!0}})},O=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickLine:!0}})},_=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},E=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:!0}})},F=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,series:e}),s.jsx(o,{data:a,nameKey:"browser",series:e,withAngleAxis:!1})]})},G=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withGrid:!1})},z=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1}})},N=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withTooltip:!1})},I=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{strokeDasharray:"10 10"}})},B=()=>{const e=r.useMemo(()=>i([{dataKey:"visits",dot:{fill:"blue"}},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},H=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{contentProps:{withSwatch:!1}}})},$=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{contentProps:{withSwatch:!1}}})},q=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:{stroke:["red","blue"]}}})};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...(ne=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,ie,ce;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...(ce=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,ue,le;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(le=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,ye,we;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(we=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Re,Ke,he;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...(he=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:he.source}}};var be,Ce,ge;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(ge=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var Pe,ve,Me;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...(Me=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:Me.source}}};var De,xe,fe;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,je,ke;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(ke=(je=S.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ae,Te,Le;j.parameters={...j.parameters,docs:{...(Ae=j.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Le=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Oe,_e,Ee;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...(Ee=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Fe,Ge,ze;A.parameters={...A.parameters,docs:{...(Fe=A.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ge=A.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ne,Ie,Be;T.parameters={...T.parameters,docs:{...(Ne=T.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Be=(Ie=T.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var He,$e,qe;L.parameters={...L.parameters,docs:{...(He=L.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...(qe=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var Ve,We,Je;O.parameters={...O.parameters,docs:{...(Ve=O.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...(Je=(We=O.parameters)==null?void 0:We.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Xe=(Ue=_.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;E.parameters={...E.parameters,docs:{...(Ye=E.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...(ea=(Ze=E.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ra,sa;F.parameters={...F.parameters,docs:{...(aa=F.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
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
}`,...(sa=(ra=F.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ta,oa,na;G.parameters={...G.parameters,docs:{...(ta=G.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...(na=(oa=G.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var da,ia,ca;z.parameters={...z.parameters,docs:{...(da=z.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...(ca=(ia=z.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ma,ua,la;N.parameters={...N.parameters,docs:{...(ma=N.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...(la=(ua=N.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var pa,ya,wa;I.parameters={...I.parameters,docs:{...(pa=I.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...(wa=(ya=I.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var Ra,Ka,ha;B.parameters={...B.parameters,docs:{...(Ra=B.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
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
}`,...(ha=(Ka=B.parameters)==null?void 0:Ka.docs)==null?void 0:ha.source}}};var ba,Ca,ga;H.parameters={...H.parameters,docs:{...(ba=H.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ca=H.parameters)==null?void 0:Ca.docs)==null?void 0:ga.source}}};var Pa,va,Ma;$.parameters={...$.parameters,docs:{...(Pa=$.parameters)==null?void 0:Pa.docs,source:{originalSource:`() => {
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
}`,...(Ma=(va=$.parameters)==null?void 0:va.docs)==null?void 0:Ma.source}}};var Da,xa,fa;q.parameters={...q.parameters,docs:{...(Da=q.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
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
}`,...(fa=(xa=q.parameters)==null?void 0:xa.docs)==null?void 0:fa.source}}};const cr=["Basic","Composition","Size","ColorScheme","Gradient","Color","RadiusAxis","Legend","Label","GridType","GridFilled","Line","Dot","Synced","Formatter","AngleAxisLine","AngleAxisTickLine","Domain","TooltipCursor","DisabledAngleAxis","DisabledGrid","DisabledActiveDot","DisabledTooltip","CustomRadar","CustomDot","CustomActiveDot","CustomLabel","CustomTooltipCursor"];export{L as AngleAxisLine,O as AngleAxisTickLine,h as Basic,v as Color,g as ColorScheme,b as Composition,H as CustomActiveDot,B as CustomDot,$ as CustomLabel,I as CustomRadar,q as CustomTooltipCursor,z as DisabledActiveDot,F as DisabledAngleAxis,G as DisabledGrid,N as DisabledTooltip,_ as Domain,k as Dot,T as Formatter,P as Gradient,S as GridFilled,f as GridType,x as Label,D as Legend,j as Line,M as RadiusAxis,C as Size,A as Synced,E as TooltipCursor,cr as __namedExportsOrder,ir as default};
