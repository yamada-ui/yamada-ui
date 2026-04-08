import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Co as n,Cp as r,Xp as i,Za as ee,_o as a,as as te,dp as ne,fo as o,go as s,po as c,pp as re,xo as l,yo as ie,yp as ae}from"./iframe-BMT_Rpw5.js";import{n as u,t as oe}from"./storybook-B9kHjFpk.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,se;e((()=>{oe(),d=t(te(),1),f=t(i(),1),ee(),ne(),p=re(),m={component:o,title:`Components / Chart / AreaChart`},h=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,g=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,d.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:h(1e3,2e3),mobile:h(3e3,4e3),tablet:h(2e3,3e3)})),_=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},v=()=>{let e=(0,f.useMemo)(()=>g(),[]);return(0,p.jsxs)(o,{data:e,children:[(0,p.jsx)(l,{labelFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(a,{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(c,{color:`mono.900`,dataKey:`desktop`,dot:!0,children:(0,p.jsx)(ie,{})}),(0,p.jsx)(c,{color:`mono.600`,dataKey:`tablet`}),(0,p.jsx)(c,{color:`mono.300`,dataKey:`mobile`})]})},y=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,p.jsx)(o,{size:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},b=()=>{let e=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:r,children:(t,r,i)=>(0,p.jsx)(o,{data:e,series:n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],r),tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},x=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],`blue`),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},S=()=>{let e=(0,f.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},C=()=>{let e=(0,f.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{fillOpacity:`1`,stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},w=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:[`monotone`,`bump`,`linear`,`natural`,`step`,`stepBefore`,`stepAfter`],children:(n,r,i)=>(0,p.jsx)(o,{data:t,series:e,areaProps:{type:r},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},T=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{data:t,series:e,syncId:`chart`,areaProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}}),(0,p.jsxs)(o,{data:t,series:e,children:[(0,p.jsx)(l,{labelFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(a,{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(c,{dataKey:`desktop`,stackId:1}),(0,p.jsx)(c,{dataKey:`tablet`,stackId:1}),(0,p.jsx)(c,{dataKey:`mobile`})]})]})},E=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,areaProps:{stackId:`stack`},chartProps:{stackOffset:`expand`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},D=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},O=()=>{let e=(0,f.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,p.jsx)(o,{data:t,series:e,withLegend:!0,areaProps:{stackId:`stack`},legendProps:{placement:r},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},k=()=>{let e=(0,f.useMemo)(()=>n([{name:`Desktop`,dataKey:`desktop`},{name:`Tablet`,dataKey:`tablet`},{name:`Mobile`,dataKey:`mobile`}],`blue`),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},A=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(n,r,i)=>(0,p.jsx)(o,{data:t,series:e,gridProps:{horizontal:r.includes(`x`),vertical:r.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},j=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},M=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},N=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{data:t,series:e,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,p.jsx)(o,{data:t,series:e,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:`date`,formatter:e=>(0,d.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},P=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(u,{variant:`stack`,rows:[`start`,`end`],children:(n,r,i)=>(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:r===`end`?16:0,right:r===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{orientation:r}},i)})},F=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}}),(0,p.jsx)(o,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})]})},I=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g().map(({date:e,desktop:t,mobile:n,tablet:r},i)=>({date:e,desktop:i===3?null:t,mobile:i===3?null:n,tablet:i===3?null:r})),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},L=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),ae(t)],labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},R=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsxs)(o,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},children:[(0,p.jsx)(s,{label:`Reference line`,y:3e3}),(0,p.jsx)(s,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,d.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,p.jsx)(s,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,d.default)().format(`YYYY-MM-DD`),y:0},{x:(0,d.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},z=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},B=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},V=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},H=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},U=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},W=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},G=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},K=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,d.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},q=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},J=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},children:(0,p.jsx)(s,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},Y=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`,dot:{fill:`blue`}},{dataKey:`mobile`,dot:{fill:[`white`,`black`],stroke:`red`,strokeWidth:1}}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},X=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{activeDot:{fill:[`blue`,`red`]}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},Z=()=>{let e=(0,f.useMemo)(()=>[{color:`blue`,dataKey:`desktop`}],[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,areaProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Q=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},$=()=>{let e=(0,f.useMemo)(()=>n([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,f.useMemo)(()=>g(),[]);return(0,p.jsx)(o,{data:t,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]},labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data}>
      <AreaChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <AreaChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <AreaChart.Area color="mono.900" dataKey="desktop" dot>
        <AreaChart.LabelList />
      </AreaChart.Area>
      <AreaChart.Area color="mono.600" dataKey="tablet" />
      <AreaChart.Area color="mono.300" dataKey="mobile" />
    </AreaChart.Root>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <AreaChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <AreaChart.Root key={key} data={data} series={AreaChart.mergeSeries([{
      dataKey: "desktop"
    }, {
      dataKey: "tablet"
    }, {
      dataKey: "mobile"
    }], row) as AreaChart.AreaProps<Data>[]} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    withGradient: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    fillOpacity: "1",
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <AreaChart.Root key={key} data={data} series={series} areaProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} syncId="chart" areaProps={{
      stackId: "stack"
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <AreaChart.Root data={data} series={series}>
        <AreaChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
        <AreaChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
        <AreaChart.Area dataKey="desktop" stackId={1} />
        <AreaChart.Area dataKey="tablet" stackId={1} />
        <AreaChart.Area dataKey="mobile" />
      </AreaChart.Root>
    </>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis areaProps={{
    stackId: "stack"
  }} chartProps={{
    stackOffset: "expand"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    tickFormatter: value => \`\${(Number(value) * 100).toFixed(0)}%\`
  }} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "green",
    dataKey: "tablet"
  }, {
    color: "blue",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <AreaChart.Root key={key} data={data} series={series} withLegend areaProps={{
      stackId: "stack"
    }} legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    name: "Desktop",
    dataKey: "desktop"
  }, {
    name: "Tablet",
    dataKey: "tablet"
  }, {
    name: "Mobile",
    dataKey: "mobile"
  }], "blue"), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <AreaChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    dot: true,
    label: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis areaProps={{
    dot: true,
    label: {
      formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`
    }
  }} chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 10000],
    tickFormatter: value => (value / 1000).toFixed(1),
    ticks: [0, 2500, 5000, 7500, 10000],
    unit: "k"
  }} />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} areaProps={{
      dot: true,
      label: true
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      domain: [0, 10000],
      ticks: [0, 2500, 5000, 7500, 10000]
    }} />

      <AreaChart.Root data={data} series={series} withTooltip={false} withXAxis={false} areaProps={{
      dot: true,
      label: {
        dataKey: "date",
        formatter: value => dayjs(String(value)).format("MMM")
      }
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      domain: [0, 10000],
      ticks: [0, 2500, 5000, 7500, 10000]
    }} />
    </>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <AreaChart.Root key={key} data={data} series={series} withYAxis chartProps={{
      margin: {
        left: orientation === "end" ? 16 : 0,
        right: orientation === "start" ? 16 : 0
      }
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      orientation
    }} />}
    </PropsTable>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <AreaChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <AreaChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData().map(({
    date,
    desktop,
    mobile,
    tablet
  }, index) => ({
    date,
    desktop: index === 3 ? null : desktop,
    mobile: index === 3 ? null : mobile,
    tablet: index === 3 ? null : tablet
  })), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    formatter: (value, name = "") => [Number(value).toLocaleString(), toTitleCase(name)],
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    tickFormatter: value => value.toLocaleString()
  }} />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <AreaChart.ReferenceLine label="Reference line" y={3000} />
      <AreaChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <AreaChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </AreaChart.Root>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM"),
    tickLine: true
  }} yAxisProps={{
    tickLine: true
  }} />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    label: "Date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    label: "Value"
  }} />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 5000],
    ticks: [0, 1000, 2000, 3000, 4000, 5000]
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    label: {
      color: ["red", "blue"]
    },
    tick: {
      color: ["red", "blue"]
    },
    tickFormatter: value => dayjs(value).format("MMM"),
    tickLine: {
      color: ["red", "blue"]
    }
  }} yAxisProps={{
    label: {
      color: ["red", "blue"]
    },
    tick: {
      color: ["red", "blue"]
    },
    tickLine: {
      color: ["red", "blue"]
    }
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <AreaChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </AreaChart.Root>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet",
    dot: {
      fill: "blue"
    }
  }, {
    dataKey: "mobile",
    dot: {
      fill: ["white", "black"],
      stroke: "red",
      strokeWidth: 1
    }
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: {
      fill: ["blue", "red"]
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} areaProps={{
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
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 10000],
    ticks: [0, 2500, 5000, 7500, 10000]
  }} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} gridProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<AreaChart.AreaProps<Data>[]>(() => AreaChart.mergeSeries([{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }]), []);
  const data = useMemo(() => createData(), []);
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...$.parameters?.docs?.source}}},se=`Basic.Composition.Size.ColorScheme.Gradient.Color.Filled.Type.Stacked.StackedExpanded.YAxis.Legend.Name.Grid.Dot.Unit.LabelList.Orientation.Synced.ConnectNull.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.TooltipCursor.DisabledXAxis.DisabledActiveDot.DisabledTooltip.CustomAxis.CustomArea.CustomReferenceLine.CustomDot.CustomActiveDot.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`)}))();export{B as AxisLabel,z as AxisTickLine,_ as Basic,S as Color,b as ColorScheme,v as Composition,I as ConnectNull,X as CustomActiveDot,q as CustomArea,K as CustomAxis,Y as CustomDot,Q as CustomGrid,Z as CustomLabelList,J as CustomReferenceLine,$ as CustomTooltipCursor,W as DisabledActiveDot,G as DisabledTooltip,U as DisabledXAxis,V as Domain,j as Dot,C as Filled,L as Formatter,x as Gradient,A as Grid,N as LabelList,O as Legend,k as Name,P as Orientation,R as ReferenceLine,y as Size,T as Stacked,E as StackedExpanded,F as Synced,H as TooltipCursor,w as Type,M as Unit,D as YAxis,se as __namedExportsOrder,m as default};