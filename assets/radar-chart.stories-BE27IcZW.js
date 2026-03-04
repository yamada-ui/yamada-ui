import{p as Sa,r,j as s,w as ja,C as ka,P as H,k as Aa}from"./iframe-CDtyXoOO.js";import{P as u}from"./props-table-DYt7Ja4e.js";import{b as Ta,d as La,c as I,P as Oa,e as _a,f as Ea}from"./polar-chart-BfH8pncF.js";import{r as Fa,a as Ga,m as i,C as za}from"./chart-DjEUWMK9.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DpJ8J1qO.js";import"./grid-item-DaL57pqN.js";import"./for-DZaCca0D.js";import"./flex-CYMR6J43.js";import"./heading-WBLK2JzD.js";import"./use-css-Dk0f2Q57.js";import"./tooltip.style-ctn-0sv1.js";import"./index-BGFOYurP.js";const Na=Sa({base:{"--legend-swatch-color":"{radar-stroke}","--tooltip-swatch-color":"{radar-stroke}"}});function $(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter(function(m){return Object.getOwnPropertyDescriptor(e,m).enumerable})),t.push.apply(t,d)}return t}function V(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?$(Object(t),!0).forEach(function(d){Ia(e,d,t[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):$(Object(t)).forEach(function(d){Object.defineProperty(e,d,Object.getOwnPropertyDescriptor(t,d))})}return e}function Ia(e,a,t){return(a=Ba(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function Ba(e){var a=Ha(e,"string");return typeof a=="symbol"?a:a+""}function Ha(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var d=t.call(e,a);if(typeof d!="object")return d;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var $a=["axis"],Va=V(V({},La),{},{layout:"centric",startAngle:90,endAngle:-270}),Wa=r.forwardRef((e,a)=>{var t=Fa(e,Va);return r.createElement(Ta,{chartName:"RadarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:$a,tooltipPayloadSearcher:Ga,categoricalChartProps:t,ref:a})});const{withContext:qa}=ja("radar-chart",Na),o=qa(({children:e,nameKey:a,series:t=[],withAngleAxis:d=!!a,withGrid:m=!0,...Da})=>{const xa=r.useMemo(()=>[{component:I,fallback:t.map((B,fa)=>s.jsx(I,{...B},fa))}],[t]);return s.jsx(Oa,{components:xa,nameKey:a,render:B=>s.jsx(Wa,{...B}),withAngleAxis:d,withGrid:m,...Da,children:e})})(),dr={component:o,title:"Components / Chart / RadarChart"},c=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,n=()=>[{browser:"chrome",downloads:c(),visits:c()},{browser:"edge",downloads:c(),visits:c()},{browser:"firefox",downloads:c(),visits:c()},{browser:"opera",downloads:c(),visits:c()},{browser:"safari",downloads:c(),visits:c()},{browser:"other",downloads:c(),visits:c()}],l=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},p=()=>{const e=r.useMemo(()=>n(),[]);return s.jsxs(o,{data:e,children:[s.jsx(za,{}),s.jsx(I,{color:"blue",dataKey:"visits"}),s.jsx(I,{color:"green",dataKey:"downloads"}),s.jsx(_a,{}),s.jsx(Ea,{dataKey:"browser"})]})},y=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,d,m)=>s.jsx(o,{size:d,data:a,nameKey:"browser",series:e},m)})},w=()=>{const e=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:ka,children:(a,t,d)=>s.jsx(o,{data:e,series:i([{dataKey:"visits"},{dataKey:"downloads"}],t)},d)})},K=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},R=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e})},h=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fillOpacity:"1"}})},b=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}],"blue"),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0})},C=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,withLegend:!0,legendProps:{placement:d}},m)})},g=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0,label:!0}})},M=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["polygon","circle"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{gridType:d}},m)})},v=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(u,{variant:"stack",rows:["polygon","circle"],children:(t,d,m)=>s.jsx(o,{data:a,nameKey:"browser",series:e,gridProps:{fill:"mono.emphasized",gridType:d,opacity:.2}},m)})},P=()=>{const e=r.useMemo(()=>[{color:"red",dataKey:"visits"},{color:"green",dataKey:"downloads"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{fill:"transparent"}})},D=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{dot:!0}})},x=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"}),s.jsx(o,{data:a,nameKey:"browser",series:e,syncId:"chart"})]})},f=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickFormatter:t=>H(t)},radarProps:{dot:!0,label:{formatter:t=>Number(t).toLocaleString()}},tooltipProps:{formatter:(t,d="")=>[Number(t).toLocaleString(),H(d)],labelFormatter:t=>H(Aa(t)?t:"")}})},S=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{axisLine:!0}})},j=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,angleAxisProps:{tickLine:!0}})},k=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},A=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:!0}})},T=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsxs(s.Fragment,{children:[s.jsx(o,{data:a,series:e}),s.jsx(o,{data:a,nameKey:"browser",series:e,withAngleAxis:!1})]})},L=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withGrid:!1})},O=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1}})},_=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,withTooltip:!1})},E=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{strokeDasharray:"10 10"}})},F=()=>{const e=r.useMemo(()=>i([{dataKey:"visits",dot:{fill:"blue"}},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},G=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:["blue","red"]}},tooltipProps:{contentProps:{withSwatch:!1}}})},z=()=>{const e=r.useMemo(()=>[{color:"blue",dataKey:"visits"}],[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,radarProps:{activeDot:{fill:"red"},dot:{fill:"red"},label:{color:"red"}},tooltipProps:{contentProps:{withSwatch:!1}}})},N=()=>{const e=r.useMemo(()=>i([{dataKey:"visits"},{dataKey:"downloads"}]),[]),a=r.useMemo(()=>n(),[]);return s.jsx(o,{data:a,nameKey:"browser",series:e,tooltipProps:{cursor:{stroke:["red","blue"]}}})};var W,q,J;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(J=(q=l.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,U,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...(X=(U=p.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,oe,ne;K.parameters={...K.parameters,docs:{...(te=K.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(ne=(oe=K.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var de,ie,ce;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...(ce=(ie=R.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var me,ue,le;h.parameters={...h.parameters,docs:{...(me=h.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(le=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:le.source}}};var pe,ye,we;b.parameters={...b.parameters,docs:{...(pe=b.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...(we=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:we.source}}};var Ke,Re,he;C.parameters={...C.parameters,docs:{...(Ke=C.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(he=(Re=C.parameters)==null?void 0:Re.docs)==null?void 0:he.source}}};var be,Ce,ge;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...(ge=(Ce=g.parameters)==null?void 0:Ce.docs)==null?void 0:ge.source}}};var Me,ve,Pe;M.parameters={...M.parameters,docs:{...(Me=M.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ve=M.parameters)==null?void 0:ve.docs)==null?void 0:Pe.source}}};var De,xe,fe;v.parameters={...v.parameters,docs:{...(De=v.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(fe=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};var Se,je,ke;P.parameters={...P.parameters,docs:{...(Se=P.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(ke=(je=P.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ae,Te,Le;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...(Le=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:Le.source}}};var Oe,_e,Ee;x.parameters={...x.parameters,docs:{...(Oe=x.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(Ee=(_e=x.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};var Fe,Ge,ze;f.parameters={...f.parameters,docs:{...(Fe=f.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ge=f.parameters)==null?void 0:Ge.docs)==null?void 0:ze.source}}};var Ne,Ie,Be;S.parameters={...S.parameters,docs:{...(Ne=S.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...(Be=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:Be.source}}};var He,$e,Ve;j.parameters={...j.parameters,docs:{...(He=j.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...(Ve=($e=j.parameters)==null?void 0:$e.docs)==null?void 0:Ve.source}}};var We,qe,Je;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Je=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Qe,Ue,Xe;A.parameters={...A.parameters,docs:{...(Qe=A.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...(Xe=(Ue=A.parameters)==null?void 0:Ue.docs)==null?void 0:Xe.source}}};var Ye,Ze,ea;T.parameters={...T.parameters,docs:{...(Ye=T.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(ea=(Ze=T.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source}}};var aa,ra,sa;L.parameters={...L.parameters,docs:{...(aa=L.parameters)==null?void 0:aa.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...(sa=(ra=L.parameters)==null?void 0:ra.docs)==null?void 0:sa.source}}};var ta,oa,na;O.parameters={...O.parameters,docs:{...(ta=O.parameters)==null?void 0:ta.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...(na=(oa=O.parameters)==null?void 0:oa.docs)==null?void 0:na.source}}};var da,ia,ca;_.parameters={..._.parameters,docs:{...(da=_.parameters)==null?void 0:da.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...(ca=(ia=_.parameters)==null?void 0:ia.docs)==null?void 0:ca.source}}};var ma,ua,la;E.parameters={...E.parameters,docs:{...(ma=E.parameters)==null?void 0:ma.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...(la=(ua=E.parameters)==null?void 0:ua.docs)==null?void 0:la.source}}};var pa,ya,wa;F.parameters={...F.parameters,docs:{...(pa=F.parameters)==null?void 0:pa.docs,source:{originalSource:`() => {
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
}`,...(wa=(ya=F.parameters)==null?void 0:ya.docs)==null?void 0:wa.source}}};var Ka,Ra,ha;G.parameters={...G.parameters,docs:{...(Ka=G.parameters)==null?void 0:Ka.docs,source:{originalSource:`() => {
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
}`,...(ha=(Ra=G.parameters)==null?void 0:Ra.docs)==null?void 0:ha.source}}};var ba,Ca,ga;z.parameters={...z.parameters,docs:{...(ba=z.parameters)==null?void 0:ba.docs,source:{originalSource:`() => {
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
}`,...(ga=(Ca=z.parameters)==null?void 0:Ca.docs)==null?void 0:ga.source}}};var Ma,va,Pa;N.parameters={...N.parameters,docs:{...(Ma=N.parameters)==null?void 0:Ma.docs,source:{originalSource:`() => {
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
}`,...(Pa=(va=N.parameters)==null?void 0:va.docs)==null?void 0:Pa.source}}};const ir=["Basic","Composition","Size","ColorScheme","Gradient","Color","Filled","RadiusAxis","Legend","Label","GridType","GridFilled","Line","Dot","Synced","Formatter","AngleAxisLine","AngleAxisTickLine","Domain","TooltipCursor","DisabledAngleAxis","DisabledGrid","DisabledActiveDot","DisabledTooltip","CustomRadar","CustomDot","CustomActiveDot","CustomLabel","CustomTooltipCursor"];export{S as AngleAxisLine,j as AngleAxisTickLine,l as Basic,R as Color,w as ColorScheme,p as Composition,G as CustomActiveDot,F as CustomDot,z as CustomLabel,E as CustomRadar,N as CustomTooltipCursor,O as DisabledActiveDot,T as DisabledAngleAxis,L as DisabledGrid,_ as DisabledTooltip,k as Domain,D as Dot,h as Filled,f as Formatter,K as Gradient,v as GridFilled,M as GridType,g as Label,C as Legend,P as Line,b as RadiusAxis,y as Size,x as Synced,A as TooltipCursor,ir as __namedExportsOrder,dr as default};
