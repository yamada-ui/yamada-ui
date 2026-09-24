import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{_n as n,dn as r,tr as i}from"./props-Bz1FL_va.js";import{t as a}from"./jsx-runtime-BdxMnOeJ.js";import{r as ee,t as te}from"./create-component-DtmnY_ce.js";import{a as o,c as s,i as c,r as l,s as u}from"./chart-BjaYBYpt.js";import{i as ne,n as d,r as f,t as p}from"./PieChart-DJ9nLh3Y.js";import{c as m,r as h,s as g}from"./polar-chart-Cu-H7TGr.js";import{n as _,t as v}from"./props-table-CLkISL0o.js";var y,b,x,S,C,w;function T(){return(T=e((()=>{y=t(),d(),ee(),f(),m(),b=a(),{PropsContext:x,usePropsContext:S,withContext:C}=te(`pie-chart`,ne),w=C(({children:e,series:t=[],tooltipProps:n,...r})=>{let i=(0,y.useMemo)(()=>[{component:h,fallback:t.map((e,t)=>(0,b.jsx)(h,{...e},t))}],[t]),a=(0,y.useCallback)(()=>null,[]);return(0,b.jsx)(g,{components:i,render:e=>(0,b.jsx)(p,{...e}),tooltipProps:{labelFormatter:a,...n},...r,children:e})})()})))()}var E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{E=t(),_(),T(),u(),m(),r(),D=a(),O={component:w,title:`Components / Chart / PieChart`},k=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,A=()=>[{browser:`chrome`,downloads:k(),visits:k()},{browser:`edge`,downloads:k(),visits:k()},{browser:`firefox`,downloads:k(),visits:k()},{browser:`opera`,downloads:k(),visits:k()},{browser:`safari`,downloads:k(),visits:k()},{browser:`other`,downloads:k(),visits:k()}],j=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e})},M=()=>{let e=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsxs)(w,{children:[(0,D.jsx)(h,{data:e,dataKey:`visits`,nameKey:`browser`,children:(0,D.jsx)(l,{color:`white`,dataKey:`browser`})}),(0,D.jsx)(o,{}),(0,D.jsx)(c,{})]})},N=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(v,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,D.jsx)(w,{size:r,data:t,series:e},i)})},P=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A(),`blue`),[]);return(0,D.jsx)(w,{data:t,series:e})},F=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e})},I=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,sectorStroke:`none`,series:e})},L=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(v,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,D.jsx)(w,{data:t,series:e,withLegend:!0,legendProps:{placement:r}},i)})},R=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,innerRadius:`80%`,nameKey:`browser`},{dataKey:`downloads`,nameKey:`browser`,outerRadius:`70%`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e})},z=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{label:!0}})},B=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{label:!0,labelLine:!0}})},V=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{label:{offset:12}}})},H=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{labelList:{color:`white`}}})},U=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{paddingAngle:15}})},W=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{startAngle:0}})},G=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{endAngle:-180}})},K=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{innerRadius:`70%`}})},q=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{outerRadius:`90%`}})},J=()=>{let e=(0,E.useMemo)(()=>[{activeIndex:0,dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{innerRadius:`70%`,outerRadius:`90%`,sectorProps:({isActive:e,outerRadius:t})=>({outerRadius:e?t+15:t})}})},Y=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(w,{data:t,series:e,syncId:`chart`}),(0,D.jsx)(w,{data:t,series:e,syncId:`chart`})]})},X=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>[{browser:`chrome`,downloads:k(),fill:`cyan`,visits:k()},{browser:`edge`,downloads:k(),fill:`green`,visits:k()},{browser:`firefox`,downloads:k(),fill:`orange`,visits:k()},{browser:`opera`,downloads:k(),fill:`red`,visits:k()},{browser:`safari`,downloads:k(),fill:`blue`,visits:k()},{browser:`other`,downloads:k(),fill:`gray`,visits:k()}],[]);return(0,D.jsx)(w,{data:t,series:e,pieProps:{label:{formatter:(e,t)=>`${(t*100).toFixed(0)}%`},labelLine:!0,labelList:{color:`white`,formatter:e=>i(e)?n(e):e}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),n(t)]}})},Z=()=>{let e=(0,E.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,E.useMemo)(()=>s(A()),[]);return(0,D.jsx)(w,{data:t,series:e,withTooltip:!1})},Q=[`Basic`,`Composition`,`Size`,`Gradients`,`SectorColors`,`SectorStroke`,`Legend`,`Stacked`,`Label`,`LabelLine`,`LabelOffset`,`LabelList`,`PaddingAngle`,`StartAngle`,`EndAngle`,`InnerRadius`,`OuterRadius`,`ActiveSector`,`Synced`,`Formatter`,`DisabledTooltip`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root>
      <PieChart.Pie data={data} dataKey="visits" nameKey="browser">
        <PieChart.LabelList color="white" dataKey="browser" />
      </PieChart.Pie>
      <PieChart.Tooltip />
      <PieChart.Legend />
    </PieChart.Root>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <PieChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData(), "blue"), []);
  return <PieChart.Root data={data} series={series} />;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} sectorStroke="none" series={series} />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <PieChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    innerRadius: "80%",
    nameKey: "browser"
  }, {
    dataKey: "downloads",
    nameKey: "browser",
    outerRadius: "70%"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} pieProps={{
    label: true
  }} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} pieProps={{
    label: true,
    labelLine: true
  }} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} pieProps={{
    label: {
      offset: 12
    }
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} pieProps={{
    labelList: {
      color: "white"
    }
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    paddingAngle: 15
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    startAngle: 0
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    endAngle: -180
  }} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    innerRadius: "70%"
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    outerRadius: "90%"
  }} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    activeIndex: 0,
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    innerRadius: "70%",
    outerRadius: "90%",
    sectorProps: ({
      isActive,
      outerRadius
    }) => ({
      outerRadius: isActive ? outerRadius + 15 : outerRadius
    })
  }} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <>
      <PieChart.Root data={data} series={series} syncId="chart" />
      <PieChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    downloads: randomValue(),
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    downloads: randomValue(),
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    downloads: randomValue(),
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    downloads: randomValue(),
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    downloads: randomValue(),
    fill: "blue",
    visits: randomValue()
  }, {
    browser: "other",
    downloads: randomValue(),
    fill: "gray",
    visits: randomValue()
  }], []);
  return <PieChart.Root data={data} series={series} pieProps={{
    label: {
      formatter: (_, percent) => \`\${(percent * 100).toFixed(0)}%\`
    },
    labelLine: true,
    labelList: {
      color: "white",
      formatter: value => isString(value) ? toTitleCase(value) : value
    }
  }} tooltipProps={{
    formatter: (value, name = "") => [Number(value).toLocaleString(), toTitleCase(name)]
  }} />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} withTooltip={false} />;
}`,...Z.parameters?.docs?.source}}}})))()}$();export{J as ActiveSector,j as Basic,M as Composition,Z as DisabledTooltip,G as EndAngle,X as Formatter,P as Gradients,K as InnerRadius,z as Label,B as LabelLine,H as LabelList,V as LabelOffset,L as Legend,q as OuterRadius,U as PaddingAngle,F as SectorColors,I as SectorStroke,N as Size,R as Stacked,W as StartAngle,Y as Synced,Q as __namedExportsOrder,O as default};