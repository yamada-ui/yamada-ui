import{r as a,j as o,w as E,P as T,k as O}from"./iframe-DyywAl9M.js";import{P as I}from"./props-table-DObtv924.js";import{P as z,p as $}from"./PieChart-B9pvzLRD.js";import{a as A,P as B}from"./polar-chart-D2Mh0mCG.js";import{d,b as G,C as N,c as q}from"./chart-AUolMmGP.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./use-css-D3ey5yo7.js";import"./tooltip.style-DYqsefBl.js";import"./index-CYndilSg.js";const{withContext:H}=E("pie-chart",$),n=H(({children:s,series:r=[],tooltipProps:t,...i})=>{const m=a.useMemo(()=>[{component:A,fallback:r.map((k,F)=>o.jsx(A,{...k},F))}],[r]),_=a.useCallback(()=>null,[]);return o.jsx(B,{components:m,render:k=>o.jsx(z,{...k}),tooltipProps:{labelFormatter:_,...t},...i,children:s})})(),ie={component:n,title:"Components / Chart / PieChart"},e=(s=1e3,r=5e3)=>Math.floor(Math.random()*(r-s+1))+s,l=()=>[{browser:"chrome",downloads:e(),visits:e()},{browser:"edge",downloads:e(),visits:e()},{browser:"firefox",downloads:e(),visits:e()},{browser:"opera",downloads:e(),visits:e()},{browser:"safari",downloads:e(),visits:e()},{browser:"other",downloads:e(),visits:e()}],u=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s})},c=()=>{const s=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsxs(n,{children:[o.jsx(A,{data:s,dataKey:"visits",nameKey:"browser",children:o.jsx(G,{color:"white",dataKey:"browser"})}),o.jsx(N,{}),o.jsx(q,{})]})},w=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(I,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,i,m)=>o.jsx(n,{size:i,data:r,series:s},m)})},p=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l(),"blue"),[]);return o.jsx(n,{data:r,series:s})},b=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s})},f=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,sectorStroke:"none",series:s})},v=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(I,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,i,m)=>o.jsx(n,{data:r,series:s,withLegend:!0,legendProps:{placement:i}},m)})},P=()=>{const s=a.useMemo(()=>[{dataKey:"visits",innerRadius:"80%",nameKey:"browser"},{dataKey:"downloads",nameKey:"browser",outerRadius:"70%"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s})},y=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:!0}})},g=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:!0,labelLine:!0}})},h=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:{offset:12}}})},V=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{labelList:{color:"white"}}})},K=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{paddingAngle:15}})},M=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{startAngle:0}})},C=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{endAngle:-180}})},x=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{innerRadius:"70%"}})},D=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{outerRadius:"90%"}})},R=()=>{const s=a.useMemo(()=>[{activeIndex:0,dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{innerRadius:"70%",outerRadius:"90%",sectorProps:({isActive:t,outerRadius:i})=>({outerRadius:t?i+15:i})}})},S=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsxs(o.Fragment,{children:[o.jsx(n,{data:r,series:s,syncId:"chart"}),o.jsx(n,{data:r,series:s,syncId:"chart"})]})},j=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:{formatter:(t,i)=>`${(i*100).toFixed(0)}%`},labelLine:!0,labelList:{color:"white",formatter:t=>O(t)?T(t):t}},tooltipProps:{formatter:(t,i="")=>[Number(t).toLocaleString(),T(i)]}})},L=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,withTooltip:!1})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} />;
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <PieChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData(), "blue"), []);
  return <PieChart.Root data={data} series={series} />;
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <PieChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    paddingAngle: 15
  }} />;
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    startAngle: 0
  }} />;
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    endAngle: -180
  }} />;
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    innerRadius: "70%"
  }} />;
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    outerRadius: "90%"
  }} />;
}`,...D.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
}`,...R.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <>
      <PieChart.Root data={data} series={series} syncId="chart" />
      <PieChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} withTooltip={false} />;
}`,...L.parameters?.docs?.source}}};const de=["Basic","Composition","Size","Gradients","SectorColors","SectorStroke","Legend","Stacked","Label","LabelLine","LabelOffset","LabelList","PaddingAngle","StartAngle","EndAngle","InnerRadius","OuterRadius","ActiveSector","Synced","Formatter","DisabledTooltip"];export{R as ActiveSector,u as Basic,c as Composition,L as DisabledTooltip,C as EndAngle,j as Formatter,p as Gradients,x as InnerRadius,y as Label,g as LabelLine,V as LabelList,h as LabelOffset,v as Legend,D as OuterRadius,K as PaddingAngle,b as SectorColors,f as SectorStroke,w as Size,P as Stacked,M as StartAngle,S as Synced,de as __namedExportsOrder,ie as default};
