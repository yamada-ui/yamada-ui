import{p as Qe,r as t,j as r,w as Ue,s as k,P as V,k as Ie}from"./iframe-DFva2jMV.js";import{P as We}from"./props-table-B_8J15-m.js";import{b as Xe,d as Ye,g as O,P as Ze}from"./polar-chart-EXauoP2h.js";import{r as ea,a as aa,d as l,e as A,b as ra,C as ta,c as sa}from"./chart-CpFMDtcB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-x41VgY43.js";import"./grid-item-1UEeJgUu.js";import"./for-BFLNBjH-.js";import"./flex-nV8c4wGK.js";import"./heading-H0Zm1g-d.js";import"./use-css-Ducu8UxE.js";import"./tooltip.style-CksDLP7y.js";import"./index-BwDAfbKD.js";const oa=Qe({base:{"--label-color":"colors.fg","--label-list-color":"colors.fg.contrast","--legend-swatch-color":"{sector-color}","--sector-stroke":"none","--tooltip-swatch-color":"{sector-color}"}});function z(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),s.push.apply(s,n)}return s}function N(e){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?z(Object(s),!0).forEach(function(n){na(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):z(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function na(e,a,s){return(a=ia(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function ia(e){var a=da(e,"string");return typeof a=="symbol"?a:a+""}function da(e,a){if(typeof e!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var la=["axis","item"],ca=N(N({},Ye),{},{layout:"radial",startAngle:0,endAngle:360}),ma=t.forwardRef((e,a)=>{var s=ea(e,ca);return t.createElement(Xe,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:la,tooltipPayloadSearcher:aa,categoricalChartProps:s,ref:a})});const{withContext:ua}=Ue("radial-chart",oa),i=ua(({children:e,endAngle:a=-270,innerRadius:s="20%",outerRadius:n="90%",series:o=[],startAngle:m=90,gridProps:Ge,tooltipProps:Fe,...$e})=>{const qe=t.useMemo(()=>[{component:O,fallback:o.map((T,Je)=>r.jsx(O,{...T},Je))}],[o]),He=t.useCallback(()=>null,[]);return r.jsx(Ze,{components:qe,endAngle:a,innerRadius:s,outerRadius:n,render:T=>r.jsx(ma,{...T}),startAngle:m,gridProps:{type:"circle",...Ge},tooltipProps:{labelFormatter:He,...Fe},...$e,children:e})})(),Sa={component:i,title:"Components / Chart / RadialChart"},d=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,c=()=>[{browser:"chrome",visits:d()},{browser:"edge",visits:d()},{browser:"firefox",visits:d()},{browser:"opera",visits:d()},{browser:"safari",visits:d()}],u=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e})},p=()=>{const e=t.useMemo(()=>l(c()),[]);return r.jsxs(i,{data:e,children:[r.jsx(O,{dataKey:"visits",nameKey:"browser",children:r.jsx(ra,{dataKey:"browser",offset:4,position:"insideStart"})}),r.jsx(ta,{}),r.jsx(sa,{})]})},b=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(We,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(s,n,o)=>r.jsx(i,{size:n,data:a,series:e},o)})},y=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e})},h=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>[{browser:"chrome",fill:"cyan",visits:d()},{browser:"edge",fill:"green",visits:d()},{browser:"firefox",fill:"orange",visits:d()},{browser:"opera",fill:"red",visits:d()},{browser:"safari",fill:"blue",visits:d()}],[]);return r.jsx(i,{data:a,series:e})},R=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>[{browser:"chrome",fill:"cyan",visits:d()},{browser:"edge",fill:"green",visits:d()},{browser:"firefox",fill:"orange",visits:d()},{browser:"opera",fill:"red",visits:d()},{browser:"safari",fill:"blue",visits:d()}],[]);return r.jsx(We,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(s,n,o)=>r.jsx(i,{data:a,series:e,withLegend:!0,legendProps:{placement:n}},o)})},g=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e,radialProps:{label:!0}})},f=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,radialProps:{labelList:!0}})},x=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l([{browser:"chrome",visits:d()},{browser:"edge",visits:d()},{browser:"safari",visits:d()}]),[]),s=t.useMemo(()=>a.reduce((n,{visits:o})=>n+o,0),[a]);return r.jsxs(r.Fragment,{children:[r.jsx(i,{data:a,innerRadius:"60%",series:e,children:r.jsx(A,{fontSize:"5xl",fontWeight:"bold",position:"center",children:"Visitors"})}),r.jsx(i,{data:a,innerRadius:"60%",series:e,children:r.jsx(A,{content:({className:n,viewBox:o})=>!o||!("cx"in o)||!("cy"in o)?null:r.jsxs("text",{className:n,dominantBaseline:"middle",textAnchor:"middle",x:o.cx,y:o.cy,children:[r.jsx(k.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:r.jsx("tspan",{x:o.cx,y:o.cy,children:s.toLocaleString()})}),r.jsx(k.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:r.jsx("tspan",{x:o.cx,y:o.cy+36,children:"Visitors"})})]})})})]})},C=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,startAngle:0})},v=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,endAngle:-180,series:e})},w=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,innerRadius:"40%",series:e})},K=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,outerRadius:"70%",series:e})},M=()=>{const e=t.useMemo(()=>[{cornerRadius:9999,dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,outerRadius:"70%",series:e})},S=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{barCategoryGap:"20%",data:a,outerRadius:"70%",series:e})},j=()=>{const e=t.useMemo(()=>[{color:"blue.500",dataKey:"desktop",nameKey:"browser",stackId:"stack"},{color:"blue.300",dataKey:"mobile",nameKey:"browser",stackId:"stack"}],[]),a=t.useMemo(()=>[{browser:"chrome",desktop:d(2e3,3e3),mobile:d(4e3,5e3)}],[]),s=t.useMemo(()=>a.reduce((n,{desktop:o,mobile:m})=>n+o+m,0),[a]);return r.jsx(i,{data:a,endAngle:180,innerRadius:"70%",series:e,startAngle:0,tooltipProps:{formatter:(n,o,m)=>[Number(n).toLocaleString(),V(Ie(m.dataKey)?m.dataKey:"")]},children:r.jsx(A,{content:({className:n,viewBox:o})=>!o||!("cx"in o)||!("cy"in o)?null:r.jsxs("text",{className:n,dominantBaseline:"middle",textAnchor:"middle",x:o.cx,y:o.cy,children:[r.jsx(k.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:r.jsx("tspan",{x:o.cx,y:o.cy-40,children:s.toLocaleString()})}),r.jsx(k.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:r.jsx("tspan",{x:o.cx,y:o.cy,children:"Visitors"})})]})})})},P=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsxs(r.Fragment,{children:[r.jsx(i,{data:a,series:e,syncId:"chart"}),r.jsx(i,{data:a,series:e,syncId:"chart"})]})},D=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e,radialProps:{label:{formatter:s=>Number(s).toLocaleString()},labelList:{formatter:s=>Ie(s)?V(s):s}},tooltipProps:{formatter:(s,n="")=>[Number(s).toLocaleString(),V(n)]}})},L=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,withTooltip:!1})};var B,_,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...(E=(_=u.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,W,G;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data}>
      <RadialChart.Radial dataKey="visits" nameKey="browser">
        <RadialChart.LabelList dataKey="browser" offset={4} position="insideStart" />
      </RadialChart.Radial>
      <RadialChart.Tooltip />
      <RadialChart.Legend />
    </RadialChart.Root>;
}`,...(G=(W=p.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var F,$,q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadialChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...(q=($=b.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var H,J,Q;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    fill: "blue",
    visits: randomValue()
  }], []);
  return <RadialChart.Root data={data} series={series} />;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo<Data[]>(() => [{
    browser: "chrome",
    fill: "cyan",
    visits: randomValue()
  }, {
    browser: "edge",
    fill: "green",
    visits: randomValue()
  }, {
    browser: "firefox",
    fill: "orange",
    visits: randomValue()
  }, {
    browser: "opera",
    fill: "red",
    visits: randomValue()
  }, {
    browser: "safari",
    fill: "blue",
    visits: randomValue()
  }], []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <RadialChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...(ae=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    label: true
  }} />;
}`,...(se=(te=g.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ne,ie;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    labelList: true
  }} />;
}`,...(ie=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var de,le,ce;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData([{
    browser: "chrome",
    visits: randomValue()
  }, {
    browser: "edge",
    visits: randomValue()
  }, {
    browser: "safari",
    visits: randomValue()
  }]), []);
  const total = useMemo(() => data.reduce((acc, {
    visits
  }) => acc + visits, 0), [data]);
  return <>
      <RadialChart.Root data={data} innerRadius="60%" series={series}>
        <RadialChart.Label fontSize="5xl" fontWeight="bold" position="center">
          Visitors
        </RadialChart.Label>
      </RadialChart.Root>

      <RadialChart.Root data={data} innerRadius="60%" series={series}>
        <RadialChart.Label content={({
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
      </RadialChart.Root>
    </>;
}`,...(ce=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,ue,pe;C.parameters={...C.parameters,docs:{...(me=C.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} startAngle={0} />;
}`,...(pe=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var be,ye,he;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} endAngle={-180} series={series} />;
}`,...(he=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var Re,ge,fe;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} innerRadius="40%" series={series} />;
}`,...(fe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var xe,Ce,ve;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...(ve=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var we,Ke,Me;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    cornerRadius: 9999,
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...(Me=(Ke=M.parameters)==null?void 0:Ke.docs)==null?void 0:Me.source}}};var Se,je,Pe;S.parameters={...S.parameters,docs:{...(Se=S.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root barCategoryGap="20%" data={data} outerRadius="70%" series={series} />;
}`,...(Pe=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Pe.source}}};var De,Le,ke;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<{
    browser: string;
    desktop: number;
    mobile: number;
  }>[]>(() => [{
    color: "blue.500",
    dataKey: "desktop",
    nameKey: "browser",
    stackId: "stack"
  }, {
    color: "blue.300",
    dataKey: "mobile",
    nameKey: "browser",
    stackId: "stack"
  }], []);
  const data = useMemo(() => [{
    browser: "chrome",
    desktop: randomValue(2000, 3000),
    mobile: randomValue(4000, 5000)
  }], []);
  const total = useMemo(() => data.reduce((acc, {
    desktop,
    mobile
  }) => acc + desktop + mobile, 0), [data]);
  return <RadialChart.Root data={data} endAngle={180} innerRadius="70%" series={series} startAngle={0} tooltipProps={{
    formatter: (value, _, data) => [Number(value).toLocaleString(), toTitleCase(isString(data.dataKey) ? data.dataKey : "")]
  }}>
      <RadialChart.Label content={({
      className,
      viewBox
    }) => {
      if (!viewBox) return null;
      if (!("cx" in viewBox) || !("cy" in viewBox)) return null;
      return <text className={className} dominantBaseline="middle" textAnchor="middle" x={viewBox.cx} y={viewBox.cy}>
              <styled.tspan asChild fontSize="6xl" fontWeight="bold">
                <tspan x={viewBox.cx} y={viewBox.cy - 40}>
                  {total.toLocaleString()}
                </tspan>
              </styled.tspan>

              <styled.tspan asChild color="fg.muted" fontSize="xl">
                <tspan x={viewBox.cx} y={viewBox.cy}>
                  Visitors
                </tspan>
              </styled.tspan>
            </text>;
    }} />
    </RadialChart.Root>;
}`,...(ke=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Te,Ve,Oe;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <>
      <RadialChart.Root data={data} series={series} syncId="chart" />
      <RadialChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...(Oe=(Ve=P.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.source}}};var Ae,ze,Ne;D.parameters={...D.parameters,docs:{...(Ae=D.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    label: {
      formatter: value => Number(value).toLocaleString()
    },
    labelList: {
      formatter: value => isString(value) ? toTitleCase(value) : value
    }
  }} tooltipProps={{
    formatter: (value, name = "") => [Number(value).toLocaleString(), toTitleCase(name)]
  }} />;
}`,...(Ne=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:Ne.source}}};var Be,_e,Ee;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} withTooltip={false} />;
}`,...(Ee=(_e=L.parameters)==null?void 0:_e.docs)==null?void 0:Ee.source}}};const ja=["Basic","Composition","Size","Gradients","SectorColors","Legend","Label","LabelList","CenterLabel","StartAngle","EndAngle","InnerRadius","OuterRadius","CornerRadius","Gap","Stacked","Synced","Formatter","DisabledTooltip"];export{u as Basic,x as CenterLabel,p as Composition,M as CornerRadius,L as DisabledTooltip,v as EndAngle,D as Formatter,S as Gap,y as Gradients,w as InnerRadius,g as Label,f as LabelList,R as Legend,K as OuterRadius,h as SectorColors,b as Size,j as Stacked,C as StartAngle,P as Synced,ja as __namedExportsOrder,Sa as default};
