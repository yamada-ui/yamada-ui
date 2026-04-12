import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ds as n,Fo as r,Go as i,Po as a,Ro as o,Uo as s,Vo as ee,Wm as te,dm as ne,gm as re,im as ie,nm as ae,yo as oe,zo as c}from"./iframe-oONnPOF5.js";import{n as l,t as se}from"./storybook-BTvOKQAd.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{se(),u=t(n(),1),d=t(te(),1),oe(),ae(),f=ie(),p={component:a,title:`Components / Chart / AreaChart`},m=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,h=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,u.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:m(1e3,2e3),mobile:m(3e3,4e3),tablet:m(2e3,3e3)})),g=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},_=()=>{let e=(0,d.useMemo)(()=>h(),[]);return(0,f.jsxs)(a,{data:e,children:[(0,f.jsx)(s,{labelFormatter:e=>(0,u.default)(e).format(`MMM`)}),(0,f.jsx)(c,{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}),(0,f.jsx)(r,{color:`mono.900`,dataKey:`desktop`,dot:!0,children:(0,f.jsx)(ee,{})}),(0,f.jsx)(r,{color:`mono.600`,dataKey:`tablet`}),(0,f.jsx)(r,{color:`mono.300`,dataKey:`mobile`})]})},v=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,f.jsx)(a,{size:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}},i)})},y=()=>{let e=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:re,children:(t,n,r)=>(0,f.jsx)(a,{data:e,series:i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],n),tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}},r)})},b=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],`blue`),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{withGradient:!0},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},x=()=>{let e=(0,d.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},S=()=>{let e=(0,d.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{fillOpacity:`1`,stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},C=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`monotone`,`bump`,`linear`,`natural`,`step`,`stepBefore`,`stepAfter`],children:(n,r,i)=>(0,f.jsx)(a,{data:t,series:e,areaProps:{type:r},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}},i)})},w=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{data:t,series:e,syncId:`chart`,areaProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}}),(0,f.jsxs)(a,{data:t,series:e,children:[(0,f.jsx)(s,{labelFormatter:e=>(0,u.default)(e).format(`MMM`)}),(0,f.jsx)(c,{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}),(0,f.jsx)(r,{dataKey:`desktop`,stackId:1}),(0,f.jsx)(r,{dataKey:`tablet`,stackId:1}),(0,f.jsx)(r,{dataKey:`mobile`})]})]})},T=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,areaProps:{stackId:`stack`},chartProps:{stackOffset:`expand`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>`${(Number(e)*100).toFixed(0)}%`}})},E=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},D=()=>{let e=(0,d.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`green`,dataKey:`tablet`},{color:`blue`,dataKey:`mobile`}],[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,f.jsx)(a,{data:t,series:e,withLegend:!0,areaProps:{stackId:`stack`},legendProps:{placement:r},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}},i)})},O=()=>{let e=(0,d.useMemo)(()=>i([{name:`Desktop`,dataKey:`desktop`},{name:`Tablet`,dataKey:`tablet`},{name:`Mobile`,dataKey:`mobile`}],`blue`),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},k=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(n,r,i)=>(0,f.jsx)(a,{data:t,series:e,gridProps:{horizontal:r.includes(`x`),vertical:r.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}},i)})},A=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},j=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,areaProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},chartProps:{margin:{right:16}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},M=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{data:t,series:e,areaProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,f.jsx)(a,{data:t,series:e,withTooltip:!1,withXAxis:!1,areaProps:{dot:!0,label:{dataKey:`date`,formatter:e=>(0,u.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},N=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(l,{variant:`stack`,rows:[`start`,`end`],children:(n,r,i)=>(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:r===`end`?16:0,right:r===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{orientation:r}},i)})},P=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}}),(0,f.jsx)(a,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})]})},F=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h().map(({date:e,desktop:t,mobile:n,tablet:r},i)=>({date:e,desktop:i===3?null:t,mobile:i===3?null:n,tablet:i===3?null:r})),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},I=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),ne(t)],labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},L=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsxs)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},children:[(0,f.jsx)(o,{label:`Reference line`,y:3e3}),(0,f.jsx)(o,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,u.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,f.jsx)(o,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,u.default)().format(`YYYY-MM-DD`),y:0},{x:(0,u.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},R=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},z=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},B=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},V=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},H=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},U=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},W=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},G=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,u.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},K=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},q=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},children:(0,f.jsx)(o,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},J=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`,dot:{fill:`blue`}},{dataKey:`mobile`,dot:{fill:[`white`,`black`],stroke:`red`,strokeWidth:1}}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},Y=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{activeDot:{fill:[`blue`,`red`]}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},X=()=>{let e=(0,d.useMemo)(()=>[{color:`blue`,dataKey:`desktop`}],[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,areaProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Z=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,u.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},Q=()=>{let e=(0,d.useMemo)(()=>i([{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}]),[]),t=(0,d.useMemo)(()=>h(),[]);return(0,f.jsx)(a,{data:t,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]},labelFormatter:e=>(0,u.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,u.default)(e).format(`MMM`)}})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
    fillOpacity: "1",
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
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
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <AreaChart.Root key={key} data={data} series={series} withLegend areaProps={{
      stackId: "stack"
    }} legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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
    label: "Date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    label: "Value"
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
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 5000],
    ticks: [0, 1000, 2000, 3000, 4000, 5000]
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
  return <AreaChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
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
  return <AreaChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
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
  return <AreaChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
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
  return <AreaChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$=`Basic.Composition.Size.ColorScheme.Gradient.Color.Filled.Type.Stacked.StackedExpanded.YAxis.Legend.Name.Grid.Dot.Unit.LabelList.Orientation.Synced.ConnectNull.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.TooltipCursor.DisabledXAxis.DisabledActiveDot.DisabledTooltip.CustomAxis.CustomArea.CustomReferenceLine.CustomDot.CustomActiveDot.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`)}))();export{z as AxisLabel,R as AxisTickLine,g as Basic,x as Color,y as ColorScheme,_ as Composition,F as ConnectNull,Y as CustomActiveDot,K as CustomArea,G as CustomAxis,J as CustomDot,Z as CustomGrid,X as CustomLabelList,q as CustomReferenceLine,Q as CustomTooltipCursor,U as DisabledActiveDot,W as DisabledTooltip,H as DisabledXAxis,B as Domain,A as Dot,S as Filled,I as Formatter,b as Gradient,k as Grid,M as LabelList,D as Legend,O as Name,N as Orientation,L as ReferenceLine,v as Size,w as Stacked,T as StackedExpanded,P as Synced,V as TooltipCursor,C as Type,j as Unit,E as YAxis,$ as __namedExportsOrder,p as default};