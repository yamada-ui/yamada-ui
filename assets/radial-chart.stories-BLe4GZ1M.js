import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{_n as r,dn as i,tr as a}from"./props-Bz1FL_va.js";import{t as o}from"./jsx-runtime-BdxMnOeJ.js";import{d as s,f as c}from"./utils-DG4lHdyV.js";import{a as l,d as ee,r as te,t as ne}from"./create-component-DtmnY_ce.js";import{a as re,c as u,dn as ie,i as ae,n as d,r as oe,s as se,un as ce,za as le}from"./chart-BjaYBYpt.js";import{a as f,c as p,d as ue,l as de,s as fe,u as pe}from"./polar-chart-Cu-H7TGr.js";import{n as me,t as m}from"./props-table-CLkISL0o.js";var h;function g(){return(g=e((()=>{ee(),h=l({base:{"--label-color":`colors.fg`,"--label-list-color":`colors.fg.contrast`,"--legend-swatch-color":`{sector-color}`,"--sector-stroke":`none`,"--tooltip-swatch-color":`{sector-color}`}})})))()}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?_(Object(n),!0).forEach(function(t){he(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function he(e,t,n){return(t=ge(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ge(e){var t=_e(e,`string`);return typeof t==`symbol`?t:t+``}function _e(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}var y,b,x,S,C;function w(){return(w=e((()=>{y=t(n()),b=n(),ie(),ue(),x=[`axis`,`item`],S=v(v({},pe),{},{layout:`radial`,startAngle:0,endAngle:360}),C=(0,b.forwardRef)((e,t)=>{var n=le(e,S);return y.createElement(de,{chartName:`RadialBarChart`,defaultTooltipEventType:`axis`,validateTooltipEventTypes:x,tooltipPayloadSearcher:ce,categoricalChartProps:n,ref:t})})})))()}var T,E,ve,ye,D,O;function k(){return(k=e((()=>{T=n(),w(),te(),p(),g(),E=o(),{PropsContext:ve,usePropsContext:ye,withContext:D}=ne(`radial-chart`,h),O=D(({children:e,endAngle:t=-270,innerRadius:n=`20%`,outerRadius:r=`90%`,series:i=[],startAngle:a=90,gridProps:o,tooltipProps:s,...c})=>{let l=(0,T.useMemo)(()=>[{component:f,fallback:i.map((e,t)=>(0,E.jsx)(f,{...e},t))}],[i]),ee=(0,T.useCallback)(()=>null,[]);return(0,E.jsx)(fe,{components:l,endAngle:t,innerRadius:n,outerRadius:r,render:e=>(0,E.jsx)(C,{...e}),startAngle:a,gridProps:{type:`circle`,...o},tooltipProps:{labelFormatter:ee,...s},...c,children:e})})()})))()}var A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,be;function xe(){return(xe=e((()=>{A=n(),me(),k(),se(),p(),s(),i(),j=o(),M={component:O,title:`Components / Chart / RadialChart`},N=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,P=()=>[{browser:`chrome`,visits:N()},{browser:`edge`,visits:N()},{browser:`firefox`,visits:N()},{browser:`opera`,visits:N()},{browser:`safari`,visits:N()}],F=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,series:e})},I=()=>{let e=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsxs)(O,{data:e,children:[(0,j.jsx)(f,{dataKey:`visits`,nameKey:`browser`,children:(0,j.jsx)(oe,{dataKey:`browser`,offset:4,position:`insideStart`})}),(0,j.jsx)(re,{}),(0,j.jsx)(ae,{})]})},L=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(m,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,j.jsx)(O,{size:r,data:t,series:e},i)})},R=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P(),`blue`),[]);return(0,j.jsx)(O,{data:t,series:e})},z=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>[{browser:`chrome`,fill:`cyan`,visits:N()},{browser:`edge`,fill:`green`,visits:N()},{browser:`firefox`,fill:`orange`,visits:N()},{browser:`opera`,fill:`red`,visits:N()},{browser:`safari`,fill:`blue`,visits:N()}],[]);return(0,j.jsx)(O,{data:t,series:e})},B=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>[{browser:`chrome`,fill:`cyan`,visits:N()},{browser:`edge`,fill:`green`,visits:N()},{browser:`firefox`,fill:`orange`,visits:N()},{browser:`opera`,fill:`red`,visits:N()},{browser:`safari`,fill:`blue`,visits:N()}],[]);return(0,j.jsx)(m,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,j.jsx)(O,{data:t,series:e,withLegend:!0,legendProps:{placement:r}},i)})},V=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P(),`blue`),[]);return(0,j.jsx)(O,{data:t,series:e,radialProps:{label:!0}})},H=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,series:e,radialProps:{labelList:!0}})},U=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u([{browser:`chrome`,visits:N()},{browser:`edge`,visits:N()},{browser:`safari`,visits:N()}]),[]),n=(0,A.useMemo)(()=>t.reduce((e,{visits:t})=>e+t,0),[t]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(O,{data:t,innerRadius:`60%`,series:e,children:(0,j.jsx)(d,{fontSize:`5xl`,fontWeight:`bold`,position:`center`,children:`Visitors`})}),(0,j.jsx)(O,{data:t,innerRadius:`60%`,series:e,children:(0,j.jsx)(d,{content:({className:e,viewBox:t})=>!t||!(`cx`in t)||!(`cy`in t)?null:(0,j.jsxs)(`text`,{className:e,dominantBaseline:`middle`,textAnchor:`middle`,x:t.cx,y:t.cy,children:[(0,j.jsx)(c.tspan,{asChild:!0,fontSize:`6xl`,fontWeight:`bold`,children:(0,j.jsx)(`tspan`,{x:t.cx,y:t.cy,children:n.toLocaleString()})}),(0,j.jsx)(c.tspan,{asChild:!0,color:`fg.muted`,fontSize:`xl`,children:(0,j.jsx)(`tspan`,{x:t.cx,y:t.cy+36,children:`Visitors`})})]})})})]})},W=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,series:e,startAngle:0})},G=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,endAngle:-180,series:e})},K=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,innerRadius:`40%`,series:e})},q=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,outerRadius:`70%`,series:e})},J=()=>{let e=(0,A.useMemo)(()=>[{cornerRadius:9999,dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,outerRadius:`70%`,series:e})},Y=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{barCategoryGap:`20%`,data:t,outerRadius:`70%`,series:e})},X=()=>{let e=(0,A.useMemo)(()=>[{color:`blue.500`,dataKey:`desktop`,nameKey:`browser`,stackId:`stack`},{color:`blue.300`,dataKey:`mobile`,nameKey:`browser`,stackId:`stack`}],[]),t=(0,A.useMemo)(()=>[{browser:`chrome`,desktop:N(2e3,3e3),mobile:N(4e3,5e3)}],[]),n=(0,A.useMemo)(()=>t.reduce((e,{desktop:t,mobile:n})=>e+t+n,0),[t]);return(0,j.jsx)(O,{data:t,endAngle:180,innerRadius:`70%`,series:e,startAngle:0,tooltipProps:{formatter:(e,t,n)=>[Number(e).toLocaleString(),r(a(n.dataKey)?n.dataKey:``)]},children:(0,j.jsx)(d,{content:({className:e,viewBox:t})=>!t||!(`cx`in t)||!(`cy`in t)?null:(0,j.jsxs)(`text`,{className:e,dominantBaseline:`middle`,textAnchor:`middle`,x:t.cx,y:t.cy,children:[(0,j.jsx)(c.tspan,{asChild:!0,fontSize:`6xl`,fontWeight:`bold`,children:(0,j.jsx)(`tspan`,{x:t.cx,y:t.cy-40,children:n.toLocaleString()})}),(0,j.jsx)(c.tspan,{asChild:!0,color:`fg.muted`,fontSize:`xl`,children:(0,j.jsx)(`tspan`,{x:t.cx,y:t.cy,children:`Visitors`})})]})})})},Z=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(O,{data:t,series:e,syncId:`chart`}),(0,j.jsx)(O,{data:t,series:e,syncId:`chart`})]})},Q=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P(),`blue`),[]);return(0,j.jsx)(O,{data:t,series:e,radialProps:{label:{formatter:e=>Number(e).toLocaleString()},labelList:{formatter:e=>a(e)?r(e):e}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),r(t)]}})},$=()=>{let e=(0,A.useMemo)(()=>[{dataKey:`visits`,nameKey:`browser`}],[]),t=(0,A.useMemo)(()=>u(P()),[]);return(0,j.jsx)(O,{data:t,series:e,withTooltip:!1})},be=[`Basic`,`Composition`,`Size`,`Gradients`,`SectorColors`,`Legend`,`Label`,`LabelList`,`CenterLabel`,`StartAngle`,`EndAngle`,`InnerRadius`,`OuterRadius`,`CornerRadius`,`Gap`,`Stacked`,`Synced`,`Formatter`,`DisabledTooltip`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data}>
      <RadialChart.Radial dataKey="visits" nameKey="browser">
        <RadialChart.LabelList dataKey="browser" offset={4} position="insideStart" />
      </RadialChart.Radial>
      <RadialChart.Tooltip />
      <RadialChart.Legend />
    </RadialChart.Root>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <RadialChart.Root key={key} size={row} data={data} series={series} />}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <RadialChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} />}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData(), "blue"), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    label: true
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} radialProps={{
    labelList: true
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} startAngle={0} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} endAngle={-180} series={series} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} innerRadius="40%" series={series} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    cornerRadius: 9999,
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} outerRadius="70%" series={series} />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root barCategoryGap="20%" data={data} outerRadius="70%" series={series} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <>
      <RadialChart.Root data={data} series={series} syncId="chart" />
      <RadialChart.Root data={data} series={series} syncId="chart" />
    </>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<RadialChart.RadialProps<Data>[]>(() => [{
    dataKey: "visits",
    nameKey: "browser"
  }], []);
  const data = useMemo(() => RadialChart.mergeData(createData()), []);
  return <RadialChart.Root data={data} series={series} withTooltip={false} />;
}`,...$.parameters?.docs?.source}}}})))()}xe();export{F as Basic,U as CenterLabel,I as Composition,J as CornerRadius,$ as DisabledTooltip,G as EndAngle,Q as Formatter,Y as Gap,R as Gradients,K as InnerRadius,V as Label,H as LabelList,B as Legend,q as OuterRadius,z as SectorColors,L as Size,X as Stacked,W as StartAngle,Z as Synced,be as __namedExportsOrder,M as default};