import{p as Ze,r as o,j as a,w as es,s as z,T as ss,P as I,k as rs}from"./iframe-CB_c4yPO.js";import{P as Ue}from"./props-table-BjvRz0ip.js";import{p as as,P as os}from"./PieChart-mCQhKz2O.js";import{C as A,P as ns}from"./polar-chart-D5Jg4NQW.js";import{d as l,e as _,b as ts,C as is,c as ds}from"./chart-D4QyzFt_.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BCypQkXZ.js";import"./grid-item-DTd5CMtr.js";import"./for-CaYrSH9z.js";import"./flex-CqWSpy3b.js";import"./heading-D_KdFZs2.js";import"./use-css-CNBlxe9E.js";import"./tooltip.style-BmZeb-Kx.js";import"./index-D9roVnR2.js";const ls=Ze({base:as.base}),{withContext:us}=es("donut-chart",ls),n=us(({children:r,series:s=[],tooltipProps:d,...i})=>{const t=o.useMemo(()=>[{component:A,fallback:s.map((T,Ye)=>a.jsx(A,{...T},Ye))}],[s]),Xe=o.useCallback(()=>null,[]);return a.jsx(ns,{components:t,render:T=>a.jsx(os,{...T}),tooltipProps:{labelFormatter:Xe,...d},...i,children:r})})(),Ks={component:n,title:"Components / Chart / DonutChart"},e=(r=1e3,s=5e3)=>Math.floor(Math.random()*(s-r+1))+r,u=()=>[{browser:"chrome",downloads:e(),visits:e()},{browser:"edge",downloads:e(),visits:e()},{browser:"firefox",downloads:e(),visits:e()},{browser:"opera",downloads:e(),visits:e()},{browser:"safari",downloads:e(),visits:e()},{browser:"other",downloads:e(),visits:e()}],m=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r})},c=()=>{const r=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsxs(n,{children:[a.jsxs(A,{data:r,dataKey:"visits",nameKey:"browser",children:[a.jsx(ts,{color:"white",dataKey:"browser"}),a.jsx(ss,{as:"span",children:"Donut Chart"})]}),a.jsx(is,{}),a.jsx(ds,{})]})},w=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(Ue,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(d,i,t)=>a.jsx(n,{size:i,data:s,series:r},t)})},b=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u(),"blue"),[]);return a.jsx(n,{data:s,series:r})},p=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r})},f=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,sectorStroke:"none",series:r})},v=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(Ue,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(d,i,t)=>a.jsx(n,{data:s,series:r,withLegend:!0,legendProps:{placement:i}},t)})},y=()=>{const r=o.useMemo(()=>[{dataKey:"visits",innerRadius:"80%",nameKey:"browser"},{dataKey:"downloads",innerRadius:"50%",nameKey:"browser",outerRadius:"70%"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r})},h=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:!0}})},D=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:!0,labelLine:!0}})},g=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:{offset:12}}})},V=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{labelList:{color:"white"}}})},x=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]),d=o.useMemo(()=>s.reduce((i,{visits:t})=>i+t,0),[s]);return a.jsxs(a.Fragment,{children:[a.jsx(n,{data:s,series:r,children:a.jsx(_,{fontSize:"5xl",fontWeight:"bold",position:"center",children:"Visitors"})}),a.jsx(n,{data:s,children:a.jsx(A,{dataKey:"visits",nameKey:"browser",children:a.jsx(_,{content:({className:i,viewBox:t})=>!t||!("cx"in t)||!("cy"in t)?null:a.jsxs("text",{className:i,dominantBaseline:"middle",textAnchor:"middle",x:t.cx,y:t.cy,children:[a.jsx(z.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:a.jsx("tspan",{x:t.cx,y:t.cy,children:d.toLocaleString()})}),a.jsx(z.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:a.jsx("tspan",{x:t.cx,y:t.cy+36,children:"Visitors"})})]})})})})]})},C=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{paddingAngle:15}})},K=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{startAngle:0}})},M=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{endAngle:-180}})},P=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{innerRadius:"50%"}})},S=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{outerRadius:"80%"}})},R=()=>{const r=o.useMemo(()=>[{activeIndex:0,dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,donutProps:{innerRadius:"70%",outerRadius:"90%",sectorProps:({isActive:d,outerRadius:i})=>({outerRadius:d?i+15:i})}})},j=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsxs(a.Fragment,{children:[a.jsx(n,{data:s,series:r,syncId:"chart"}),a.jsx(n,{data:s,series:r,syncId:"chart"})]})},L=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>[{browser:"chrome",downloads:e(),fill:"cyan",visits:e()},{browser:"edge",downloads:e(),fill:"green",visits:e()},{browser:"firefox",downloads:e(),fill:"orange",visits:e()},{browser:"opera",downloads:e(),fill:"red",visits:e()},{browser:"safari",downloads:e(),fill:"blue",visits:e()},{browser:"other",downloads:e(),fill:"gray",visits:e()}],[]);return a.jsx(n,{data:s,series:r,donutProps:{label:{formatter:(d,i)=>`${(i*100).toFixed(0)}%`},labelLine:!0,labelList:{color:"white",formatter:d=>rs(d)?I(d):d}},tooltipProps:{formatter:(d,i="")=>[Number(d).toLocaleString(),I(i)]}})},k=()=>{const r=o.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),s=o.useMemo(()=>l(u()),[]);return a.jsx(n,{data:s,series:r,withTooltip:!1})};var F,B,E;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} />;
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var N,O,W;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(W=(O=c.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var G,$,q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <DonutChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...(q=($=w.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var H,J,Q;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData(), "blue"), []);
  return <DonutChart.Root data={data} series={series} />;
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(se=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};var re,ae,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,te,ie;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ie=(te=y.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var de,le,ue;h.parameters={...h.parameters,docs:{...(de=h.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ue=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var me,ce,we;D.parameters={...D.parameters,docs:{...(me=D.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(we=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:we.source}}};var be,pe,fe;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(fe=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ve,ye,he;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(he=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var De,ge,Ve;x.parameters={...x.parameters,docs:{...(De=x.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ve=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:Ve.source}}};var xe,Ce,Ke;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    paddingAngle: 15
  }} />;
}`,...(Ke=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Ke.source}}};var Me,Pe,Se;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    startAngle: 0
  }} />;
}`,...(Se=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Re,je,Le;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    endAngle: -180
  }} />;
}`,...(Le=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Le.source}}};var ke,Ae,Te;P.parameters={...P.parameters,docs:{...(ke=P.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    innerRadius: "50%"
  }} />;
}`,...(Te=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var ze,Ie,_e;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} donutProps={{
    outerRadius: "80%"
  }} />;
}`,...(_e=(Ie=S.parameters)==null?void 0:Ie.docs)==null?void 0:_e.source}}};var Fe,Be,Ee;R.parameters={...R.parameters,docs:{...(Fe=R.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ee=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Ne,Oe,We;j.parameters={...j.parameters,docs:{...(Ne=j.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <>
      <DonutChart.Root data={data} series={series} syncId="chart" />
      <DonutChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...(We=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:We.source}}};var Ge,$e,qe;L.parameters={...L.parameters,docs:{...(Ge=L.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(qe=($e=L.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var He,Je,Qe;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const series = useMemo<DonutChart.DonutProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => DonutChart.mergeData(createData()), []);
  return <DonutChart.Root data={data} series={series} withTooltip={false} />;
}`,...(Qe=(Je=k.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};const Ms=["Basic","Composition","Size","Gradients","SectorColors","SectorStroke","Legend","Stacked","Label","LabelLine","LabelOffset","LabelList","CenterLabel","PaddingAngle","StartAngle","EndAngle","InnerRadius","OuterRadius","ActiveSector","Synced","Formatter","DisabledTooltip"];export{R as ActiveSector,m as Basic,x as CenterLabel,c as Composition,k as DisabledTooltip,M as EndAngle,L as Formatter,b as Gradients,P as InnerRadius,h as Label,D as LabelLine,V as LabelList,g as LabelOffset,v as Legend,S as OuterRadius,C as PaddingAngle,p as SectorColors,f as SectorStroke,w as Size,y as Stacked,K as StartAngle,j as Synced,Ms as __namedExportsOrder,Ks as default};
