import{p as Ta,r,q as La,j as s,C as Oa,P as Q,l as _a}from"./iframe-BtFlpYLv.js";import{P as l}from"./props-table-C-1iM-Ol.js";import{b as Ea,d as Fa,c as W,P as Ga,e as za,f as Na}from"./polar-chart-BiXtsDnx.js";import{r as Ia,a as Ba,m as i,C as Ha}from"./chart-BdhABgkr.js";import"./preload-helper-C1FmrZbK.js";import"./grid-D1_nTnww.js";import"./grid-item-DSNOgZLY.js";import"./for-CkMu8O76.js";import"./flex-sv8FeSmq.js";import"./heading-BHQEJC0C.js";import"./use-css-BcmSvhGc.js";import"./tooltip.style-BTXbFY8K.js";import"./index-Bg5djS7O.js";const $a=Ta({base:{"--legend-swatch-color":"{radar-stroke}","--tooltip-swatch-color":"{radar-stroke}"}});function X(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),t.push.apply(t,n)}return t}function Y(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?X(Object(t),!0).forEach(function(n){qa(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function qa(e,a,t){return(a=Va(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Va(e){var a=Wa(e,"string");return typeof a=="symbol"?a:a+""}function Wa(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var n=t.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var Ja=["axis"],Qa=Y(Y({},Fa),{},{layout:"centric",startAngle:90,endAngle:-270}),Ua=r.forwardRef((e,a)=>{var t=Ia(e,Qa);return r.createElement(Ea,{chartName:"RadarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Ja,tooltipPayloadSearcher:Ba,categoricalChartProps:t,ref:a})});const Xa=({accessibilityLayer:e=!0,cx:a,cy:t,data:n,innerRadius:c,outerRadius:p,responsive:y,syncId:w,syncMethod:K,...R})=>{const u=r.useCallback(J=>({...J,...R}),[R]);return{getChartProps:r.useCallback(J=>({accessibilityLayer:e,cx:a,cy:t,data:n,innerRadius:c,margin:{left:16,right:16},outerRadius:p,responsive:y,syncId:w,syncMethod:K,...J}),[e,a,t,n,c,p,y,w,K]),getRootProps:u}},{withContext:Ya}=La("radar-chart",$a),o=Ya(({children:e,nameKey:a,series:t=[],withAngleAxis:n=!!a,withGrid:c=!0,chartProps:p,...y})=>{const{getChartProps:w,getRootProps:K}=Xa(y),R=r.useMemo(()=>[{component:W,fallback:t.map((u,U)=>s.jsx(W,{...u},U))}],[t]);return s.jsx(Ga,{components:R,nameKey:a,render:u=>s.jsx(Ua,{...w({...u,...p})}),withAngleAxis:n,withGrid:c,...K(),children:e})})(),lr={component:o,title:"Components / Chart / RadarChart"},m=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,d=()=>[{browser:"chrome",downloads:m(),visits:m()},{browser:"edge",downloads:m(),visits:m()},{browser:"firefox",downloads:m(),visits:m()},{browser:"opera",downloads:m(),visits:m()},{browser:"safari",downloads:m(),visits:m()},{browser:"other",downloads:m(),visits:m()}],h=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},b=()=>{const e=r.useMemo(()=>d(),[]);return s.jsxs(o,{data:e,children:[s.jsx(Ha,{}),s.jsx(W,{color:"blue",dataKey:"visits"}),s.jsx(W,{color:"green",dataKey:"downloads"}),s.jsx(za,{}),s.jsx(Na,{dataKey:"browser"})]})},C=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,n,c)=>s.jsx(o,{size:n,data:a,nameKey:"browser",series:e},c)})},g=()=>{const e=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:Oa,children:(a,t,n)=>s.jsx(o,{data:e,series:i([{dataKey:"visits"},{dataKey:"downloads"}],t)},n)})},P=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},M=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},v=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fillOpacity:"1"}})},D=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0})},x=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,withLegend:!0,legendProps:{placement:n}},c)})},f=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0,label:!0}})},S=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["polygon","circle"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{gridType:n}},c)})},j=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(l,{variant:"stack",rows:["polygon","circle"],children:(t,n,c)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{fill:"mono.emphasized",gridType:n,opacity:.2}},c)})},k=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fill:"transparent"}})},A=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0}})},T=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"}),s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"})]})},L=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickFormatter:t=>Q(t)},radarProps:{dot:!0,label:{formatter:t=>Number(t).toLocaleString()}},tooltipProps:{formatter:(t,n="")=>[Number(t).toLocaleString(),Q(n)],labelFormatter:t=>Q(_a(t)?t:"")}})},O=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{axisLine:!0}})},_=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickLine:!0}})},E=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},F=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:!0}})},G=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,series:e}),s.jsx(o,{data:a,nameKey:"browser",series:e,withAngleAxis:!1})]})},z=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withGrid:!1})},N=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1}})},I=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withTooltip:!1})},B=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{strokeDasharray:"10 10"}})},H=()=>{const e=r.useMemo(()=>i([{dataKey:"visits",dot:{fill:"blue"}},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},$=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{contentProps:{withSwatch:!1}}})},q=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{contentProps:{withSwatch:!1}}})},V=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>d(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:{stroke:["red","blue"]}}})};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,se,te;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ne,de;C.parameters={...C.parameters,docs:{...(oe=C.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...(de=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,ce,me;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,le,pe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(pe=(le=P.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ye,we,Ke;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(Ke=(we=M.parameters)==null?void 0:we.docs)==null?void 0:Ke.source}}};var Re,he,be;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(be=(he=v.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var Ce,ge,Pe;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...(Pe=(ge=D.parameters)==null?void 0:ge.docs)==null?void 0:Pe.source}}};var Me,ve,De;x.parameters={...x.parameters,docs:{...(Me=x.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(De=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:De.source}}};var xe,fe,Se;f.parameters={...f.parameters,docs:{...(xe=f.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...(Se=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var je,ke,Ae;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(Ae=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Te,Le,Oe;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var _e,Ee,Fe;k.parameters={...k.parameters,docs:{...(_e=k.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Fe=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Fe.source}}};var Ge,ze,Ne;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...(Ne=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source}}};var Ie,Be,He;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(He=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:He.source}}};var $e,qe,Ve;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Ve=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var We,Je,Qe;O.parameters={...O.parameters,docs:{...(We=O.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...(Qe=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ue,Xe,Ye;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...(Ye=(Xe=_.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,ea,aa;E.parameters={...E.parameters,docs:{...(Ze=E.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(aa=(ea=E.parameters)==null?void 0:ea.docs)==null?void 0:aa.source}}};var ra,sa,ta;F.parameters={...F.parameters,docs:{...(ra=F.parameters)==null?void 0:ra.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...(ta=(sa=F.parameters)==null?void 0:sa.docs)==null?void 0:ta.source}}};var oa,na,da;G.parameters={...G.parameters,docs:{...(oa=G.parameters)==null?void 0:oa.docs,source:{originalSource:`() => {
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
}`,...(da=(na=G.parameters)==null?void 0:na.docs)==null?void 0:da.source}}};var ia,ca,ma;z.parameters={...z.parameters,docs:{...(ia=z.parameters)==null?void 0:ia.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...(ma=(ca=z.parameters)==null?void 0:ca.docs)==null?void 0:ma.source}}};var ua,la,pa;N.parameters={...N.parameters,docs:{...(ua=N.parameters)==null?void 0:ua.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...(pa=(la=N.parameters)==null?void 0:la.docs)==null?void 0:pa.source}}};var ya,wa,Ka;I.parameters={...I.parameters,docs:{...(ya=I.parameters)==null?void 0:ya.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...(Ka=(wa=I.parameters)==null?void 0:wa.docs)==null?void 0:Ka.source}}};var Ra,ha,ba;B.parameters={...B.parameters,docs:{...(Ra=B.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...(ba=(ha=B.parameters)==null?void 0:ha.docs)==null?void 0:ba.source}}};var Ca,ga,Pa;H.parameters={...H.parameters,docs:{...(Ca=H.parameters)==null?void 0:Ca.docs,source:{originalSource:`() => {
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
}`,...(Pa=(ga=H.parameters)==null?void 0:ga.docs)==null?void 0:Pa.source}}};var Ma,va,Da;$.parameters={...$.parameters,docs:{...(Ma=$.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
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
}`,...(Da=(va=$.parameters)==null?void 0:va.docs)==null?void 0:Da.source}}};var xa,fa,Sa;q.parameters={...q.parameters,docs:{...(xa=q.parameters)==null?void 0:xa.docs,source:{originalSource:`() => {
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
}`,...(Sa=(fa=q.parameters)==null?void 0:fa.docs)==null?void 0:Sa.source}}};var ja,ka,Aa;V.parameters={...V.parameters,docs:{...(ja=V.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
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
}`,...(Aa=(ka=V.parameters)==null?void 0:ka.docs)==null?void 0:Aa.source}}};const pr=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","RadiusAxis","Legend","Label","GridType","GridFilled","Line","Dot","Synced","Formatter","AngleAxisLine","AngleAxisTickLine","Domain","TooltipCursor","DisabledAngleAxis","DisabledGrid","DisabledActiveDot","DisabledTooltip","CustomRadar","CustomDot","CustomActiveDot","CustomLabel","CustomTooltipCursor"];export{O as AngleAxisLine,_ as AngleAxisTickLine,h as Basic,M as Color,g as ColorScheme,b as Composition,$ as CustomActiveDot,H as CustomDot,q as CustomLabel,B as CustomRadar,V as CustomTooltipCursor,N as DisabledActiveDot,G as DisabledAngleAxis,z as DisabledGrid,I as DisabledTooltip,E as Domain,A as Dot,v as Filled,L as Formatter,P as Gradient,j as GridFilled,S as GridType,f as Label,x as Legend,k as Line,D as RadiusAxis,C as Size,T as Synced,F as TooltipCursor,pr as __namedExportsOrder,lr as default};
