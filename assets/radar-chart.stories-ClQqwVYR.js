import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ao as n,Go as r,Oo as i,Sm as a,To as o,Uo as s,Wm as c,dm as l,gm as u,im as d,nm as f,xo as p,yo as m}from"./iframe-Cky8WQYe.js";import{n as h,t as g}from"./storybook-BGOioLTX.js";var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;e((()=>{g(),_=t(c(),1),m(),f(),v=d(),y={component:p,title:`Components / Chart / RadarChart`},b=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,x=()=>[{browser:`chrome`,downloads:b(),visits:b()},{browser:`edge`,downloads:b(),visits:b()},{browser:`firefox`,downloads:b(),visits:b()},{browser:`opera`,downloads:b(),visits:b()},{browser:`safari`,downloads:b(),visits:b()},{browser:`other`,downloads:b(),visits:b()}],S=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e})},C=()=>{let e=(0,_.useMemo)(()=>x(),[]);return(0,v.jsxs)(p,{data:e,children:[(0,v.jsx)(s,{}),(0,v.jsx)(i,{color:`blue`,dataKey:`visits`}),(0,v.jsx)(i,{color:`green`,dataKey:`downloads`}),(0,v.jsx)(n,{}),(0,v.jsx)(o,{dataKey:`browser`})]})},w=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,v.jsx)(p,{size:r,data:t,nameKey:`browser`,series:e},i)})},T=()=>{let e=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(h,{variant:`stack`,rows:u,children:(t,n,i)=>(0,v.jsx)(p,{data:e,series:r([{dataKey:`visits`},{dataKey:`downloads`}],n)},i)})},E=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e})},D=()=>{let e=(0,_.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e})},O=()=>{let e=(0,_.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{fillOpacity:`1`}})},k=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}],`blue`),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0})},A=()=>{let e=(0,_.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withLegend:!0,legendProps:{placement:r}},i)})},j=()=>{let e=(0,_.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0,label:!0}})},M=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,gridProps:{gridType:r}},i)})},N=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(h,{variant:`stack`,rows:[`polygon`,`circle`],children:(n,r,i)=>(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,gridProps:{fill:`mono.emphasized`,gridType:r,opacity:.2}},i)})},P=()=>{let e=(0,_.useMemo)(()=>[{color:`red`,dataKey:`visits`},{color:`green`,dataKey:`downloads`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{fill:`transparent`}})},F=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{dot:!0}})},I=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,syncId:`chart`}),(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,syncId:`chart`})]})},L=()=>{let e=(0,_.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickFormatter:e=>l(e)},radarProps:{dot:!0,label:{formatter:e=>Number(e).toLocaleString()}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),l(t)],labelFormatter:e=>l(a(e)?e:``)}})},R=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,angleAxisProps:{axisLine:!0}})},z=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,angleAxisProps:{tickLine:!0}})},B=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withRadiusAxis:!0,radiusAxisProps:{axisLine:!1,domain:[0,7e3],tick:!1,ticks:[0,1e3,2e3,3e3,4e3,5e3,6e3,7e3]}})},V=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:!0}})},H=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{data:t,series:e}),(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withAngleAxis:!1})]})},U=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withGrid:!1})},W=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1}})},G=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,withTooltip:!1})},K=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{strokeDasharray:`10 10`}})},q=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`,dot:{fill:`blue`}},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:!1},tooltipProps:{contentProps:{withSwatch:!1}}})},J=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:[`blue`,`red`]}},tooltipProps:{contentProps:{withSwatch:!1}}})},Y=()=>{let e=(0,_.useMemo)(()=>[{color:`blue`,dataKey:`visits`}],[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,radarProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{contentProps:{withSwatch:!1}}})},X=()=>{let e=(0,_.useMemo)(()=>r([{dataKey:`visits`},{dataKey:`downloads`}]),[]),t=(0,_.useMemo)(()=>x(),[]);return(0,v.jsx)(p,{data:t,nameKey:`browser`,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]}}})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data}>
      <RadarChart.Tooltip />
      <RadarChart.Radar color="blue" dataKey="visits" />
      <RadarChart.Radar color="green" dataKey="downloads" />
      <RadarChart.RadiusAxis />
      <RadarChart.AngleAxis dataKey="browser" />
    </RadarChart.Root>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadarChart.Root key={key} size={row} data={data} nameKey="browser" series={series} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <RadarChart.Root key={key} data={data} series={RadarChart.mergeSeries([{
      dataKey: "visits"
    }, {
      dataKey: "downloads"
    }], row) as RadarChart.RadarProps<Data>[]} />}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "red",
    dataKey: "visits"
  }, {
    color: "green",
    dataKey: "downloads"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withRadiusAxis />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "visits"
  }], []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true,
    label: true
  }} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    dot: true
  }} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    axisLine: true
  }} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} angleAxisProps={{
    tickLine: true
  }} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} tooltipProps={{
    cursor: true
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withGrid={false} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    activeDot: false
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} withTooltip={false} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadarChart.RadarProps<Data>[]>(() => RadarChart.mergeSeries([{
    dataKey: "visits"
  }, {
    dataKey: "downloads"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <RadarChart.Root data={data} nameKey="browser" series={series} radarProps={{
    strokeDasharray: "10 10"
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z=`Basic.Composition.Size.ColorScheme.Gradient.Color.Filled.RadiusAxis.Legend.Label.GridType.GridFilled.Line.Dot.Synced.Formatter.AngleAxisLine.AngleAxisTickLine.Domain.TooltipCursor.DisabledAngleAxis.DisabledGrid.DisabledActiveDot.DisabledTooltip.CustomRadar.CustomDot.CustomActiveDot.CustomLabel.CustomTooltipCursor`.split(`.`)}))();export{R as AngleAxisLine,z as AngleAxisTickLine,S as Basic,D as Color,T as ColorScheme,C as Composition,J as CustomActiveDot,q as CustomDot,Y as CustomLabel,K as CustomRadar,X as CustomTooltipCursor,W as DisabledActiveDot,H as DisabledAngleAxis,U as DisabledGrid,G as DisabledTooltip,B as Domain,F as Dot,O as Filled,L as Formatter,E as Gradient,N as GridFilled,M as GridType,j as Label,A as Legend,P as Line,k as RadiusAxis,w as Size,I as Synced,V as TooltipCursor,Z as __namedExportsOrder,y as default};