import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Ds as n,Fo as r,Ho as i,Io as ee,Lo as te,Mo as a,Ro as o,Uo as ne,Vo as re,Wm as ie,dm as ae,gm as oe,im as se,jo as s,nm as ce,yo as le,zo as ue}from"./iframe-oONnPOF5.js";import{n as c,t as de}from"./storybook-BTvOKQAd.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{de(),l=t(n(),1),u=t(ie(),1),le(),ce(),d=se(),f={component:s,title:`Components / Chart / ComposedChart`},p=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,m=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,l.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:p(),mobile:p(),tablet:p()})),h=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},g=()=>{let e=(0,u.useMemo)(()=>m(),[]);return(0,d.jsxs)(s,{data:e,children:[(0,d.jsx)(i,{}),(0,d.jsx)(ne,{labelFormatter:e=>(0,l.default)(e).format(`MMM`)}),(0,d.jsx)(ue,{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}),(0,d.jsx)(ee,{color:`blue`,dataKey:`desktop`}),(0,d.jsx)(r,{color:`green`,dataKey:`tablet`,dot:!0}),(0,d.jsx)(te,{color:`red`,dataKey:`mobile`,dot:!0,children:(0,d.jsx)(re,{})})]})},_=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,d.jsx)(s,{size:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}},i)})},v=()=>{let e=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:oe,children:(t,n,r)=>(0,d.jsx)(s,{colorScheme:n,data:e,series:a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]],n),tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}},r)})},y=()=>{let e=(0,u.useMemo)(()=>[[`bar`,{color:`blue`,dataKey:`desktop`}],[`area`,{color:`green`,dataKey:`tablet`}],[`line`,{color:`red`,dataKey:`mobile`}]],[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},b=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},x=()=>{let e=(0,u.useMemo)(()=>[[`bar`,{color:`blue`,dataKey:`desktop`}],[`area`,{color:`green`,dataKey:`tablet`}],[`line`,{color:`red`,dataKey:`mobile`}]],[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,d.jsx)(s,{data:t,series:e,withLegend:!0,legendProps:{placement:r},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}},i)})},S=()=>{let e=(0,u.useMemo)(()=>[[`bar`,{name:`Desktop`,color:`blue`,dataKey:`desktop`}],[`area`,{name:`Tablet`,color:`green`,dataKey:`tablet`}],[`line`,{name:`Mobile`,color:`red`,dataKey:`mobile`}]],[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},C=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(n,r,i)=>(0,d.jsx)(s,{data:t,series:e,gridProps:{horizontal:r.includes(`x`),vertical:r.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}},i)})},w=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:[`monotone`,`bump`,`linear`,`natural`,`step`,`stepBefore`,`stepAfter`],children:(n,r,i)=>(0,d.jsx)(s,{data:t,series:e,areaProps:{type:r},lineProps:{type:r},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}},i)})},T=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{dot:!0},lineProps:{dot:!0},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},E=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m().map(({date:e,desktop:t,mobile:n,tablet:r},i)=>({date:e,desktop:t,mobile:i===3?null:n,tablet:i===3?null:r})),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{connectNulls:!0,dot:!0},lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},D=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>Array.from({length:6},(e,t)=>({date:(0,l.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:[p(1e3,2e3),p(4e3,5e3)],mobile:p(),tablet:p()})),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},O=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`,radius:[0,0,4,4]}],[`bar`,{dataKey:`tablet`,radius:[4,4,0,0]}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,barProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},k=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,barProps:{barSize:50},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},A=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,barProps:{radius:8},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},j=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`bar`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,chartProps:{barGap:16},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},M=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},N=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{data:t,series:e,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,d.jsx)(s,{data:t,series:e,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:`date`,formatter:e=>(0,l.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},P=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(c,{variant:`stack`,rows:[`start`,`end`],children:(n,r,i)=>(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:r===`end`?16:0,right:r===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{orientation:r}},i)})},F=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}}),(0,d.jsx)(s,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})]})},I=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),ae(t)],labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},L=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsxs)(s,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},children:[(0,d.jsx)(o,{label:`Reference line`,y:3e3}),(0,d.jsx)(o,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,l.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,d.jsx)(o,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,l.default)().format(`YYYY-MM-DD`),y:0},{x:(0,l.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},R=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},z=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},B=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},V=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},H=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},U=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},W=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},G=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,l.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},K=()=>{let e=(0,u.useMemo)(()=>[[`bar`,{dataKey:`desktop`}],[`area`,{color:[`green`,`orange`],dataKey:`tablet`}],[`line`,{color:[`red`,`blue`],dataKey:`mobile`}]],[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{strokeDasharray:`15 15`},lineProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},q=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},children:(0,d.jsx)(o,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},J=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`,dot:{fill:`blue!`}}],[`line`,{dataKey:`mobile`,dot:{fill:[`white!`,`black!`],stroke:`red!`,strokeWidth:1}}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},Y=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,areaProps:{activeDot:{fill:[`red`,`blue`]}},lineProps:{activeDot:{fill:[`green`,`orange`]}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},X=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,lineProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Z=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,l.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},Q=()=>{let e=(0,u.useMemo)(()=>a([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,u.useMemo)(()=>m(),[]);return(0,d.jsx)(s,{data:t,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]},labelFormatter:e=>(0,l.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,l.default)(e).format(`MMM`)}})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data}>
      <ComposedChart.Legend />
      <ComposedChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <ComposedChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <ComposedChart.Bar color="blue" dataKey="desktop" />
      <ComposedChart.Area color="green" dataKey="tablet" dot />
      <ComposedChart.Line color="red" dataKey="mobile" dot>
        <ComposedChart.LabelList />
      </ComposedChart.Line>
    </ComposedChart.Root>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <ComposedChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <ComposedChart.Root key={key} colorScheme={row} data={data} series={ComposedChart.mergeSeries<Data>([["bar", {
      dataKey: "desktop"
    }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
      dataKey: "tablet"
    }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
      dataKey: "mobile"
    }] satisfies ComposedChart.ComposedProps<Data>], row)} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <ComposedChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    name: "Desktop",
    color: "blue",
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    name: "Tablet",
    color: "green",
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    name: "Mobile",
    color: "red",
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <ComposedChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <ComposedChart.Root key={key} data={data} series={series} areaProps={{
      type
    }} lineProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    dot: true
  }} lineProps={{
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData().map(({
    date,
    desktop,
    mobile,
    tablet
  }, index) => ({
    date,
    desktop,
    mobile: index === 3 ? null : mobile,
    tablet: index === 3 ? null : tablet
  })), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    connectNulls: true,
    dot: true
  }} lineProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => Array.from({
    length: 6
  }, (_, index) => ({
    date: dayjs().add(index, "month").format("YYYY-MM-DD"),
    desktop: [randomValue(1000, 2000), randomValue(4000, 5000)],
    mobile: randomValue(),
    tablet: randomValue()
  })), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop",
    radius: [0, 0, 4, 4]
  }] satisfies ComposedChart.ComposedProps<Data>, ["bar", {
    dataKey: "tablet",
    radius: [4, 4, 0, 0]
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    stackId: "stack"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    barSize: 50
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} barProps={{
    radius: 8
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["bar", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} chartProps={{
    barGap: 16
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} lineProps={{
    dot: true,
    label: {
      formatter: value => \`\${(Number(value) / 1000).toFixed(1)}k\`
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <ComposedChart.Root data={data} series={series} lineProps={{
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

      <ComposedChart.Root data={data} series={series} withTooltip={false} withXAxis={false} lineProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <ComposedChart.Root key={key} data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <>
      <ComposedChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <ComposedChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <ComposedChart.ReferenceLine label="Reference line" y={3000} />
      <ComposedChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <ComposedChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </ComposedChart.Root>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<ComposedChart.ComposedProps<Data>[]>(() => [["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    color: ["green", "orange"],
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    color: ["red", "blue"],
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>], []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    strokeDasharray: "15 15"
  }} lineProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <ComposedChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </ComposedChart.Root>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet",
    dot: {
      fill: "blue!"
    }
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile",
    dot: {
      fill: ["white!", "black!"],
      stroke: "red!",
      strokeWidth: 1
    }
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} lineProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: {
      fill: ["red", "blue"]
    }
  }} lineProps={{
    activeDot: {
      fill: ["green", "orange"]
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} lineProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} gridProps={{
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
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}},$=`Basic.Composition.Size.ColorScheme.Color.YAxis.Legend.Name.Grid.LineType.LineDot.LineConnectNull.BarRange.BarStacked.BarSize.BarRadius.BarGap.Unit.LabelList.Orientation.Synced.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.TooltipCursor.DisabledXAxis.DisabledLineActiveDot.DisabledTooltip.CustomAxis.CustomLine.CustomReferenceLine.CustomDot.CustomActiveDot.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`)}))();export{z as AxisLabel,R as AxisTickLine,j as BarGap,A as BarRadius,D as BarRange,k as BarSize,O as BarStacked,h as Basic,y as Color,v as ColorScheme,g as Composition,Y as CustomActiveDot,G as CustomAxis,J as CustomDot,Z as CustomGrid,X as CustomLabelList,K as CustomLine,q as CustomReferenceLine,Q as CustomTooltipCursor,U as DisabledLineActiveDot,W as DisabledTooltip,H as DisabledXAxis,B as Domain,I as Formatter,C as Grid,N as LabelList,x as Legend,E as LineConnectNull,T as LineDot,w as LineType,S as Name,P as Orientation,L as ReferenceLine,_ as Size,F as Synced,V as TooltipCursor,M as Unit,b as YAxis,$ as __namedExportsOrder,f as default};