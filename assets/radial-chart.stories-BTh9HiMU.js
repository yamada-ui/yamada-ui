import{p as ta,r as t,q as sa,j as r,s as z,P as _,l as ea}from"./iframe-B_LcDk8j.js";import{P as aa}from"./props-table-qgGdocBx.js";import{b as oa,d as na,g as E,P as ia}from"./polar-chart-DFwOPwhr.js";import{r as da,a as la,c as l,b as ca,C as ma,d as ua,e as I}from"./chart-BZAiiNsB.js";import"./preload-helper-C1FmrZbK.js";import"./grid-BlZthnbl.js";import"./grid-item-D8ZfrR7E.js";import"./for-B4Q7qiCG.js";import"./flex-BReIzsmR.js";import"./heading-CKLDXwzq.js";import"./use-css-BNUvMACT.js";import"./tooltip.style-BduI7Oig.js";import"./index-BceY5Ms_.js";const pa=ta({base:{"--label-color":"colors.fg","--label-list-color":"colors.fg.contrast","--legend-swatch-color":"{sector-color}","--sector-stroke":"none","--tooltip-swatch-color":"{sector-color}"}});function Q(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),s.push.apply(s,n)}return s}function U(e){for(var a=1;a<arguments.length;a++){var s=arguments[a]!=null?arguments[a]:{};a%2?Q(Object(s),!0).forEach(function(n){ba(e,n,s[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):Q(Object(s)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))})}return e}function ba(e,a,s){return(a=ya(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function ya(e){var a=ha(e,"string");return typeof a=="symbol"?a:a+""}function ha(e,a){if(typeof e!="object"||!e)return e;var s=e[Symbol.toPrimitive];if(s!==void 0){var n=s.call(e,a);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var Ra=["axis","item"],ga=U(U({},na),{},{layout:"radial",startAngle:0,endAngle:360}),fa=t.forwardRef((e,a)=>{var s=da(e,ga);return t.createElement(oa,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:Ra,tooltipPayloadSearcher:la,categoricalChartProps:s,ref:a})});const Ca=({accessibilityLayer:e=!0,barCategoryGap:a,barGap:s,barSize:n,cx:o,cy:m,data:p,endAngle:b,innerRadius:y,layout:h,maxBarSize:u,outerRadius:R,responsive:W,reverseStackOrder:F,stackOffset:G,startAngle:q,syncId:$,syncMethod:H,...J})=>{const ra=t.useCallback(B=>({...B,...J}),[J]);return{getChartProps:t.useCallback(B=>({accessibilityLayer:e,barCategoryGap:a,barGap:s,barSize:n,cx:o,cy:m,data:p,endAngle:b,innerRadius:y,layout:h,margin:{left:16,right:16},maxBarSize:u,outerRadius:R,responsive:W,reverseStackOrder:F,stackOffset:G,startAngle:q,syncId:$,syncMethod:H,...B}),[e,o,m,p,b,y,h,R,W,q,$,H,a,s,n,u,F,G]),getRootProps:ra}},{withContext:xa}=sa("radial-chart",pa),i=xa(({children:e,series:a=[],chartProps:s,gridProps:n,tooltipProps:o,...m})=>{const{getChartProps:p,getRootProps:b}=Ca({endAngle:-270,innerRadius:"20%",outerRadius:"90%",startAngle:90,...m}),y=t.useMemo(()=>[{component:E,fallback:a.map((u,R)=>r.jsx(E,{...u},R))}],[a]),h=t.useCallback(()=>null,[]);return r.jsx(ia,{components:y,render:u=>r.jsx(fa,{...p({...u,...s})}),gridProps:{type:"circle",...n},tooltipProps:{labelFormatter:h,...o},...b(),children:e})})(),Na={component:i,title:"Components / Chart / RadialChart"},d=(e=1e3,a=5e3)=>Math.floor(Math.random()*(a-e+1))+e,c=()=>[{browser:"chrome",visits:d()},{browser:"edge",visits:d()},{browser:"firefox",visits:d()},{browser:"opera",visits:d()},{browser:"safari",visits:d()}],g=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e})},f=()=>{const e=t.useMemo(()=>l(c()),[]);return r.jsxs(i,{data:e,children:[r.jsx(E,{dataKey:"visits",nameKey:"browser",children:r.jsx(ca,{dataKey:"browser",offset:4,position:"insideStart"})}),r.jsx(ma,{}),r.jsx(ua,{})]})},C=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(aa,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(s,n,o)=>r.jsx(i,{size:n,data:a,series:e},o)})},x=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e})},v=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>[{browser:"chrome",fill:"cyan",visits:d()},{browser:"edge",fill:"green",visits:d()},{browser:"firefox",fill:"orange",visits:d()},{browser:"opera",fill:"red",visits:d()},{browser:"safari",fill:"blue",visits:d()}],[]);return r.jsx(i,{data:a,series:e})},w=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>[{browser:"chrome",fill:"cyan",visits:d()},{browser:"edge",fill:"green",visits:d()},{browser:"firefox",fill:"orange",visits:d()},{browser:"opera",fill:"red",visits:d()},{browser:"safari",fill:"blue",visits:d()}],[]);return r.jsx(aa,{variant:"stack",rows:["start-start","start-center","start-end","center-start","center-end","end-start","end-center","end-end"],children:(s,n,o)=>r.jsx(i,{data:a,series:e,withLegend:!0,legendProps:{placement:n}},o)})},K=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e,radialProps:{label:!0}})},M=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,radialProps:{labelList:!0}})},P=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l([{browser:"chrome",visits:d()},{browser:"edge",visits:d()},{browser:"safari",visits:d()}]),[]),s=t.useMemo(()=>a.reduce((n,{visits:o})=>n+o,0),[a]);return r.jsxs(r.Fragment,{children:[r.jsx(i,{data:a,innerRadius:"60%",series:e,children:r.jsx(I,{fontSize:"5xl",fontWeight:"bold",position:"center",children:"Visitors"})}),r.jsx(i,{data:a,innerRadius:"60%",series:e,children:r.jsx(I,{content:({className:n,viewBox:o})=>!o||!("cx"in o)||!("cy"in o)?null:r.jsxs("text",{className:n,dominantBaseline:"middle",textAnchor:"middle",x:o.cx,y:o.cy,children:[r.jsx(z.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:r.jsx("tspan",{x:o.cx,y:o.cy,children:s.toLocaleString()})}),r.jsx(z.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:r.jsx("tspan",{x:o.cx,y:o.cy+36,children:"Visitors"})})]})})})]})},j=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,startAngle:0})},D=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,endAngle:-180,series:e})},S=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,innerRadius:"40%",series:e})},L=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,outerRadius:"70%",series:e})},k=()=>{const e=t.useMemo(()=>[{cornerRadius:9999,dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,outerRadius:"70%",series:e})},T=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{barCategoryGap:"20%",data:a,outerRadius:"70%",series:e})},V=()=>{const e=t.useMemo(()=>[{color:"blue.500",dataKey:"desktop",nameKey:"browser",stackId:"stack"},{color:"blue.300",dataKey:"mobile",nameKey:"browser",stackId:"stack"}],[]),a=t.useMemo(()=>[{browser:"chrome",desktop:d(2e3,3e3),mobile:d(4e3,5e3)}],[]),s=t.useMemo(()=>a.reduce((n,{desktop:o,mobile:m})=>n+o+m,0),[a]);return r.jsx(i,{data:a,endAngle:180,innerRadius:"70%",series:e,startAngle:0,tooltipProps:{formatter:(n,o,m)=>[Number(n).toLocaleString(),_(ea(m.dataKey)?m.dataKey:"")]},children:r.jsx(I,{content:({className:n,viewBox:o})=>!o||!("cx"in o)||!("cy"in o)?null:r.jsxs("text",{className:n,dominantBaseline:"middle",textAnchor:"middle",x:o.cx,y:o.cy,children:[r.jsx(z.tspan,{asChild:!0,fontSize:"6xl",fontWeight:"bold",children:r.jsx("tspan",{x:o.cx,y:o.cy-40,children:s.toLocaleString()})}),r.jsx(z.tspan,{asChild:!0,color:"fg.muted",fontSize:"xl",children:r.jsx("tspan",{x:o.cx,y:o.cy,children:"Visitors"})})]})})})},O=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsxs(r.Fragment,{children:[r.jsx(i,{data:a,series:e,syncId:"chart"}),r.jsx(i,{data:a,series:e,syncId:"chart"})]})},A=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c(),"blue"),[]);return r.jsx(i,{data:a,series:e,radialProps:{label:{formatter:s=>Number(s).toLocaleString()},labelList:{formatter:s=>ea(s)?_(s):s}},tooltipProps:{formatter:(s,n="")=>[Number(s).toLocaleString(),_(n)]}})},N=()=>{const e=t.useMemo(()=>[{dataKey:"visits",nameKey:"browser"}],[]),a=t.useMemo(()=>l(c()),[]);return r.jsx(i,{data:a,series:e,withTooltip:!1})};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data}>
      <RadialChart.Radial dataKey="visits" nameKey="browser">
        <RadialChart.LabelList dataKey="browser" offset={4} position="insideStart" />
      </RadialChart.Radial>
      <RadialChart.Tooltip />
      <RadialChart.Legend />
    </RadialChart.Root>;
}`,...(re=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadialChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...(oe=(se=C.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ie,de;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...(de=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ce,me;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(me=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,pe,be;w.parameters={...w.parameters,docs:{...(ue=w.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(be=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var ye,he,Re;K.parameters={...K.parameters,docs:{...(ye=K.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    label: true
  }} />;
}`,...(Re=(he=K.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};var ge,fe,Ce;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    labelList: true
  }} />;
}`,...(Ce=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Ce.source}}};var xe,ve,we;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(we=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};var Ke,Me,Pe;j.parameters={...j.parameters,docs:{...(Ke=j.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} startAngle={0} />;
}`,...(Pe=(Me=j.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var je,De,Se;D.parameters={...D.parameters,docs:{...(je=D.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} endAngle={-180} series={series} />;
}`,...(Se=(De=D.parameters)==null?void 0:De.docs)==null?void 0:Se.source}}};var Le,ke,Te;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} innerRadius="40%" series={series} />;
}`,...(Te=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var Ve,Oe,Ae;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...(Ae=(Oe=L.parameters)==null?void 0:Oe.docs)==null?void 0:Ae.source}}};var Ne,ze,Be;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    cornerRadius: 9999,
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...(Be=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Be.source}}};var _e,Ee,Ie;T.parameters={...T.parameters,docs:{...(_e=T.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root barCategoryGap="20%" data={data} outerRadius="70%" series={series} />;
}`,...(Ie=(Ee=T.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var We,Fe,Ge;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Fe=V.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var qe,$e,He;O.parameters={...O.parameters,docs:{...(qe=O.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <>
      <RadialChart.Root data={data} series={series} syncId="chart" />
      <RadialChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...(He=($e=O.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};var Je,Qe,Ue;A.parameters={...A.parameters,docs:{...(Je=A.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Qe=A.parameters)==null?void 0:Qe.docs)==null?void 0:Ue.source}}};var Xe,Ye,Ze;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} withTooltip={false} />;
}`,...(Ze=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};const za=["Basic","Composition","Size","Gradients","SectorColors","Legend","Label","LabelList","CenterLabel","StartAngle","EndAngle","InnerRadius","OuterRadius","CornerRadius","Gap","Stacked","Synced","Formatter","DisabledTooltip"];export{g as Basic,P as CenterLabel,f as Composition,k as CornerRadius,N as DisabledTooltip,D as EndAngle,A as Formatter,T as Gap,x as Gradients,S as InnerRadius,K as Label,M as LabelList,w as Legend,L as OuterRadius,v as SectorColors,C as Size,V as Stacked,j as StartAngle,O as Synced,za as __namedExportsOrder,Na as default};
