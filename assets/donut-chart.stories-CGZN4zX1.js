import{p as N,r as o,j as a,w as O,s as z,T as W,P as I,k as G}from"./iframe-DyywAl9M.js";import{P as F}from"./props-table-DObtv924.js";import{p as $,P as q}from"./PieChart-B9pvzLRD.js";import{C as A,P as H}from"./polar-chart-D2Mh0mCG.js";import{d as l,e as _,b as J,C as Q,c as U}from"./chart-AUolMmGP.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CesITxv8.js";import"./grid-item-CE_Bwy0r.js";import"./for-CDZkNiUE.js";import"./flex-BnhEuXYW.js";import"./heading-CRYotZbx.js";import"./use-css-D3ey5yo7.js";import"./tooltip.style-DYqsefBl.js";import"./index-CYndilSg.js";const X=N({base:$.base}),{withContext:Y}=O("donut-chart",X),n=Y(({children:r,series:s=[],tooltipProps:d,...i})=>{const t=o.useMemo(()=>[{component:A,fallback:s.map((T,E)=>a.jsx(A,{...T},E))}],[s]),B=o.useCallback(()=>null,[]);return a.jsx(H,{components:t,render:T=>a.jsx(q,{...T}),tooltipProps:{labelFormatter:B,...d},...i,children:r})})(),we={component:n,title:"Components / Chart / DonutChart"},e=(r=1e3,s=5e3)=>Math.floor(Math.random()*(s-r+1))+r,u=()=>[{browser:"chrome",downloads:e(),visits:e()},{browser:"edge",downloads:e(),visits:e()},{browser:"firefox",downloads:e(),visits:e()},{browser:"opera",downloads:e(),visits:e()},{browser:"safari",downloads:e(),visits:e()},{browser:"other",downloads:e(),visits:e()}],m=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r})},c=()=>{const r=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsxs(n,{children:[a.jsxs(A,{data:r,dataKey:"visits",nameKey:"browser",children:[a.jsx(J,{color:"white",dataKey:"browser"}),a.jsx(W,{as:"span",children:"Donut Chart"})]}),a.jsx(Q,{}),a.jsx(U,{})]})},w=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(F,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(d,i,t)=>a.jsx(n,{size:i,data:s,series:r},t)})},b=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u(),"blue"),[]);return a.jsx(n,{data:s,series:r})},p=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r})},f=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,sectorStroke:"none",series:r})},v=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(F,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(d,i,t)=>a.jsx(n,{data:s,series:r,withLegend:!0,legendProps:{placement:i}},t)})},y=()=>{const r=o.useMemo(()=>[{dataKey:"visits",innerRadius:"80%",nameKey:"browser"},{dataKey:"downloads",innerRadius:"50%",nameKey:"browser",outerRadius:"70%"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r})},h=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:!0}})},D=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:!0,labelLine:!0}})},g=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:{offset:12}}})},V=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{labelList:{color:"white"}}})},x=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]),d=o.useMemo(()=>s.reduce((i,{visits:t})=>i+t,0),[s]);return a.jsxs(a.Fragment,{children:[a.jsx(n,{data:s,series:r,children:a.jsx(_,{fontSize:"5xl",fontWeight:"bold",position:"center",children:"Visitors"})}),a.jsx(n,{data:s,children:a.jsx(A,{dataKey:"visits",nameKey:"browser",children:a.jsx(_,{content:({className:i,viewBox:t})=>!t||!("cx"in t)||!("cy"in t)?null:a.jsxs("text",{className:i,dominantBaseline:"middle",textAnchor:"middle",x:t.cx,y:t.cy,children:[a.jsx(z.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:a.jsx("tspan",{x:t.cx,y:t.cy,children:d.toLocaleString()})}),a.jsx(z.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:a.jsx("tspan",{x:t.cx,y:t.cy+36,children:"Visitors"})})]})})})})]})},C=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{paddingAngle:15}})},K=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{startAngle:0}})},M=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{endAngle:-180}})},P=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{innerRadius:"50%"}})},S=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{outerRadius:"80%"}})},R=()=>{const r=o.useMemo(()=>[{activeIndex:0,dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{innerRadius:"70%",outerRadius:"90%",sectorProps:({isActive:d,outerRadius:i})=>({outerRadius:d?i+15:i})}})},j=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsxs(a.Fragment,{children:[a.jsx(n,{data:s,series:r,syncId:"chart"}),a.jsx(n,{data:s,series:r,syncId:"chart"})]})},L=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:{formatter:(d,i)=>`${(i*100).toFixed(0)}%`},labelLine:!0,labelList:{color:"white",formatter:d=>G(d)?I(d):d}},tooltipProps:{formatter:(d,i="")=>[Number(d).toLocaleString(),I(i)]}})},k=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,withTooltip:!1})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} />;
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
  return <DonutChart.Root>
      <DonutChart.Donut data={data} dataKey="visits" nameKey="browser">
        <DonutChart.LabelList color="white" dataKey="browser" />
        <Text as="span">Donut Chart</Text>
      </DonutChart.Donut>
      <DonutChart.Tooltip />
      <DonutChart.Legend />
    </DonutChart.Root>;
}`,...c.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <DonutChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData(), "blue"), []);
  return <DonutChart.Root data={data} series={series} />;
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} />;
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} sectorStroke="none" series={series} />;
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
      {(_, placement, key) => <DonutChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    innerRadius: "80%",
    nameKey: "browser"
  }, {
    dataKey: "downloads",
    innerRadius: "50%",
    nameKey: "browser",
    outerRadius: "70%"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} />;
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} donutProps={{
    label: true
  }} />;
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} donutProps={{
    label: true,
    labelLine: true
  }} />;
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} donutProps={{
    label: {
      offset: 12
    }
  }} />;
}`,...g.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} donutProps={{
    labelList: {
      color: "white"
    }
  }} />;
}`,...V.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  const total = useMemo(() => data.reduce((acc, {
    visits
  }) => acc + visits, 0), [data]);
  return <>
      <DonutChart.Root data={data} series={series}>
        <DonutChart.Label fontSize="5xl" fontWeight="bold" position="center">
          Visitors
        </DonutChart.Label>
      </DonutChart.Root>

      <DonutChart.Root data={data}>
        <DonutChart.Donut dataKey="visits" nameKey="browser">
          <DonutChart.Label content={({
          className,
          viewBox
        }) => {
          if (!viewBox) return null;
          if (!("cx" in viewBox) || !("cy" in viewBox)) return null;
          return <text className={className} dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
                  <styled.tspan asChild fontSize="6xl" fontWeight="bold">
                    <tspan x={viewBox.cx} y={viewBox.cy}>
                      {total.toLocaleString()}
                    </tspan>
                  </styled.tspan>

                  <styled.tspan asChild color="fg.muted" fontSize="xl">
                    <tspan x={viewBox.cx} y={viewBox.cy + 36}>
                      Visitors
                    </tspan>
                  </styled.tspan>
                </text>;
        }} />
        </DonutChart.Donut>
      </DonutChart.Root>
    </>;
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    paddingAngle: 15
  }} />;
}`,...C.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    startAngle: 0
  }} />;
}`,...K.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    endAngle: -180
  }} />;
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    innerRadius: "50%"
  }} />;
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    outerRadius: "80%"
  }} />;
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    activeIndex: 0,
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    innerRadius: "70%",
    outerRadius: "90%",
    sectorProps: ({
      isActive,
      outerRadius
    }) => ({
      outerRadius: isActive ? outerRadius + 15 : outerRadius
    })
  }} />;
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <>
      <DonutChart.Root data={data} series={series} syncId="chart" />
      <DonutChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
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
  return <DonutChart.Root data={data} series={series} donutProps={{
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
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} withTooltip={false} />;
}`,...k.parameters?.docs?.source}}};const be=["Basic","Composition","Size","Gradients","SectorColors","SectorStroke","Legend","Stacked","Label","LabelLine","LabelOffset","LabelList","CenterLabel","PaddingAngle","StartAngle","EndAngle","InnerRadius","OuterRadius","ActiveSector","Synced","Formatter","DisabledTooltip"];export{R as ActiveSector,m as Basic,x as CenterLabel,c as Composition,k as DisabledTooltip,M as EndAngle,L as Formatter,b as Gradients,P as InnerRadius,h as Label,D as LabelLine,V as LabelList,g as LabelOffset,v as Legend,S as OuterRadius,C as PaddingAngle,p as SectorColors,f as SectorStroke,w as Size,y as Stacked,K as StartAngle,j as Synced,be as __namedExportsOrder,we as default};
