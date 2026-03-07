import{r as a,j as o,w as Je,P as T,k as Qe}from"./iframe-B5zEG4pt.js";import{P as Ne}from"./props-table-BXBXuWY9.js";import{P as Ue,p as We}from"./PieChart-1Jbx8DTD.js";import{a as A,P as Xe}from"./polar-chart-CT6GGRas.js";import{d,b as Ye,C as Ze,c as es}from"./chart-UgEjhjor.js";import"./preload-helper-C1FmrZbK.js";import"./grid-D3h0a7yN.js";import"./grid-item-C5pl0hby.js";import"./for-ZQaUuyXi.js";import"./flex-DT9VscZ7.js";import"./heading-BAHytR1U.js";import"./use-css-CXnuVu11.js";import"./tooltip.style-DifkcNj0.js";import"./index-Bx7H4NkV.js";const{withContext:ss}=Je("pie-chart",We),n=ss(({children:s,series:r=[],tooltipProps:t,...i})=>{const m=a.useMemo(()=>[{component:A,fallback:r.map((k,He)=>o.jsx(A,{...k},He))}],[r]),qe=a.useCallback(()=>null,[]);return o.jsx(Xe,{components:m,render:k=>o.jsx(Ue,{...k}),tooltipProps:{labelFormatter:qe,...t},...i,children:s})})(),fs={component:n,title:"Components / Chart / PieChart"},e=(s=1e3,r=5e3)=>Math.floor(Math.random()*(r-s+1))+s,l=()=>[{browser:"chrome",downloads:e(),visits:e()},{browser:"edge",downloads:e(),visits:e()},{browser:"firefox",downloads:e(),visits:e()},{browser:"opera",downloads:e(),visits:e()},{browser:"safari",downloads:e(),visits:e()},{browser:"other",downloads:e(),visits:e()}],u=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s})},c=()=>{const s=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsxs(n,{children:[o.jsx(A,{data:s,dataKey:"visits",nameKey:"browser",children:o.jsx(Ye,{color:"white",dataKey:"browser"})}),o.jsx(Ze,{}),o.jsx(es,{})]})},w=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(Ne,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,i,m)=>o.jsx(n,{size:i,data:r,series:s},m)})},p=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l(),"blue"),[]);return o.jsx(n,{data:r,series:s})},b=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s})},f=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,sectorStroke:"none",series:s})},v=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(Ne,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(t,i,m)=>o.jsx(n,{data:r,series:s,withLegend:!0,legendProps:{placement:i}},m)})},P=()=>{const s=a.useMemo(()=>[{dataKey:"visits",innerRadius:"80%",nameKey:"browser"},{dataKey:"downloads",nameKey:"browser",outerRadius:"70%"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s})},y=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:!0}})},g=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:!0,labelLine:!0}})},h=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:{offset:12}}})},V=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{labelList:{color:"white"}}})},K=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{paddingAngle:15}})},M=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{startAngle:0}})},C=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{endAngle:-180}})},x=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{innerRadius:"70%"}})},D=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{outerRadius:"90%"}})},R=()=>{const s=a.useMemo(()=>[{activeIndex:0,dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,pieProps:{innerRadius:"70%",outerRadius:"90%",sectorProps:({isActive:t,outerRadius:i})=>({outerRadius:t?i+15:i})}})},S=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsxs(o.Fragment,{children:[o.jsx(n,{data:r,series:s,syncId:"chart"}),o.jsx(n,{data:r,series:s,syncId:"chart"})]})},j=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return o.jsx(n,{data:r,series:s,pieProps:{label:{formatter:(t,i)=>`${(i*100).toFixed(0)}%`},labelLine:!0,labelList:{color:"white",formatter:t=>Qe(t)?T(t):t}},tooltipProps:{formatter:(t,i="")=>[Number(t).toLocaleString(),T(i)]}})},L=()=>{const s=a.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),r=a.useMemo(()=>d(l()),[]);return o.jsx(n,{data:r,series:s,withTooltip:!1})};var I,_,F;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} />;
}`,...(F=(_=u.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var E,O,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var $,B,G;w.parameters={...w.parameters,docs:{...($=w.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <PieChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...(G=(B=w.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var N,q,H;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData(), "blue"), []);
  return <PieChart.Root data={data} series={series} />;
}`,...(H=(q=p.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var J,Q,U;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(U=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,oe;P.parameters={...P.parameters,docs:{...(re=P.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(oe=(ae=P.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,te,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,le,me;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(le=g.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var ue,ce,we;h.parameters={...h.parameters,docs:{...(ue=h.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(we=(ce=h.parameters)==null?void 0:ce.docs)==null?void 0:we.source}}};var pe,be,fe;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(be=V.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ve,Pe,ye;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    paddingAngle: 15
  }} />;
}`,...(ye=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:ye.source}}};var ge,he,Ve;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    startAngle: 0
  }} />;
}`,...(Ve=(he=M.parameters)==null?void 0:he.docs)==null?void 0:Ve.source}}};var Ke,Me,Ce;C.parameters={...C.parameters,docs:{...(Ke=C.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    endAngle: -180
  }} />;
}`,...(Ce=(Me=C.parameters)==null?void 0:Me.docs)==null?void 0:Ce.source}}};var xe,De,Re;x.parameters={...x.parameters,docs:{...(xe=x.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    innerRadius: "70%"
  }} />;
}`,...(Re=(De=x.parameters)==null?void 0:De.docs)==null?void 0:Re.source}}};var Se,je,Le;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} pieProps={{
    outerRadius: "90%"
  }} />;
}`,...(Le=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var ke,Ae,Te;R.parameters={...R.parameters,docs:{...(ke=R.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ae=R.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Ie,_e,Fe;S.parameters={...S.parameters,docs:{...(Ie=S.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <>
      <PieChart.Root data={data} series={series} syncId="chart" />
      <PieChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...(Fe=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source}}};var Ee,Oe,ze;j.parameters={...j.parameters,docs:{...(Ee=j.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(ze=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var $e,Be,Ge;L.parameters={...L.parameters,docs:{...($e=L.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  const series = useMemo<PieChart.PieProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => PieChart.mergeData(createData()), []);
  return <PieChart.Root data={data} series={series} withTooltip={false} />;
}`,...(Ge=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};const vs=["Basic","Composition","Size","Gradients","SectorColors","SectorStroke","Legend","Stacked","Label","LabelLine","LabelOffset","LabelList","PaddingAngle","StartAngle","EndAngle","InnerRadius","OuterRadius","ActiveSector","Synced","Formatter","DisabledTooltip"];export{R as ActiveSector,u as Basic,c as Composition,L as DisabledTooltip,C as EndAngle,j as Formatter,p as Gradients,x as InnerRadius,y as Label,g as LabelLine,V as LabelList,h as LabelOffset,v as Legend,D as OuterRadius,K as PaddingAngle,b as SectorColors,f as SectorStroke,w as Size,P as Stacked,M as StartAngle,S as Synced,vs as __namedExportsOrder,fs as default};
