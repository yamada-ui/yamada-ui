import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Co as n,Ds as r,Lo as i,Ro as a,Uo as ee,Vo as te,Wm as o,dm as s,gm as ne,im as c,nm as l,yo as u,zo as d}from"./iframe-oONnPOF5.js";import{n as f,t as p}from"./storybook-BTvOKQAd.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{p(),m=t(r(),1),h=t(o(),1),u(),l(),g=c(),_={component:n,title:`Components / Chart / LineChart`},v=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,y=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,m.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:v(),mobile:v(),tablet:v()})),b=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},x=()=>{let e=(0,h.useMemo)(()=>y(),[]);return(0,g.jsxs)(n,{data:e,children:[(0,g.jsx)(ee,{labelFormatter:e=>(0,m.default)(e).format(`MMM`)}),(0,g.jsx)(d,{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}),(0,g.jsx)(i,{dataKey:`desktop`,dot:!0,children:(0,g.jsx)(te,{})}),(0,g.jsx)(i,{dataKey:`tablet`}),(0,g.jsx)(i,{dataKey:`mobile`})]})},S=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(r,i,a)=>(0,g.jsx)(n,{size:i,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}},a)})},C=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:ne,children:(r,i,a)=>(0,g.jsx)(n,{colorScheme:i,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}},a)})},w=()=>{let e=(0,h.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`},{color:`green`,dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},T=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:[`monotone`,`bump`,`linear`,`natural`,`step`,`stepBefore`,`stepAfter`],children:(r,i,a)=>(0,g.jsx)(n,{data:t,series:e,lineProps:{type:i},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}},a)})},E=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},D=()=>{let e=(0,h.useMemo)(()=>[{color:`red`,dataKey:`desktop`},{color:`blue`,dataKey:`tablet`},{color:`green`,dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(r,i,a)=>(0,g.jsx)(n,{data:t,series:e,withLegend:!0,legendProps:{placement:i},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}},a)})},O=()=>{let e=(0,h.useMemo)(()=>[{name:`Desktop`,color:`red`,dataKey:`desktop`},{name:`Tablet`,color:`blue`,dataKey:`tablet`},{name:`Mobile`,color:`green`,dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},k=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(r,i,a)=>(0,g.jsx)(n,{data:t,series:e,gridProps:{horizontal:i.includes(`x`),vertical:i.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}},a)})},A=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},j=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},M=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{data:t,series:e,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,g.jsx)(n,{data:t,series:e,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:`date`,formatter:e=>(0,m.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},N=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(f,{variant:`stack`,rows:[`start`,`end`],children:(r,i,a)=>(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:i===`end`?16:0,right:i===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{orientation:i}},a)})},P=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(n,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}}),(0,g.jsx)(n,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})]})},F=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y().map(({date:e,desktop:t,mobile:n,tablet:r},i)=>({date:e,desktop:i===3?null:t,mobile:i===3?null:n,tablet:i===3?null:r})),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},I=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),s(t)],labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},L=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsxs)(n,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},children:[(0,g.jsx)(a,{label:`Reference line`,y:3e3}),(0,g.jsx)(a,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,m.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,g.jsx)(a,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,m.default)().format(`YYYY-MM-DD`),y:0},{x:(0,m.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},R=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},z=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},B=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},V=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},H=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},U=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},W=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},G=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,m.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},K=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{color:[`red`,`blue`],dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},q=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},children:(0,g.jsx)(a,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},J=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`,dot:{fill:`blue`}},{dataKey:`mobile`,dot:{fill:[`white`,`black`],stroke:`red`,strokeWidth:1}}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},Y=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{activeDot:{fill:[`red`,`blue`]}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},X=()=>{let e=(0,h.useMemo)(()=>[{color:`blue`,dataKey:`desktop`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,lineProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Z=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,m.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},Q=()=>{let e=(0,h.useMemo)(()=>[{dataKey:`desktop`},{dataKey:`tablet`},{dataKey:`mobile`}],[]),t=(0,h.useMemo)(()=>y(),[]);return(0,g.jsx)(n,{data:t,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]},labelFormatter:e=>(0,m.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,m.default)(e).format(`MMM`)}})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data}>
      <LineChart.Tooltip labelFormatter={value => dayjs(value).format("MMM")} />
      <LineChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <LineChart.Line dataKey="desktop" dot>
        <LineChart.LabelList />
      </LineChart.Line>
      <LineChart.Line dataKey="tablet" />
      <LineChart.Line dataKey="mobile" />
    </LineChart.Root>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => <LineChart.Root key={key} size={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <LineChart.Root key={key} colorScheme={row} data={data} series={series} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet"
  }, {
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["monotone", "bump", "linear", "natural", "step", "stepBefore", "stepAfter"]}>
      {(_, type, key) => <LineChart.Root key={key} data={data} series={series} lineProps={{
      type
    }} tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    color: "red",
    dataKey: "desktop"
  }, {
    color: "blue",
    dataKey: "tablet"
  }, {
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start-start", "start-center", "start-end", "center-start", "center-start-start", "center-start-end", "center-end", "center-end-start", "center-end-end", "end-start", "end-center", "end-end"]}>
      {(_, placement, key) => <LineChart.Root key={key} data={data} series={series} withLegend legendProps={{
      placement
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    name: "Desktop",
    color: "red",
    dataKey: "desktop"
  }, {
    name: "Tablet",
    color: "blue",
    dataKey: "tablet"
  }, {
    name: "Mobile",
    color: "green",
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withLegend tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["xy", "x", "y", "none"]}>
      {(_, row, key) => <LineChart.Root key={key} data={data} series={series} gridProps={{
      horizontal: row.includes("x"),
      vertical: row.includes("y")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    dot: true,
    label: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <LineChart.Root data={data} series={series} lineProps={{
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

      <LineChart.Root data={data} series={series} withTooltip={false} withXAxis={false} lineProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={["start", "end"]}>
      {(_, orientation, key) => <LineChart.Root key={key} data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <>
      <LineChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <LineChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
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
  return <LineChart.Root data={data} series={series} lineProps={{
    connectNulls: true,
    dot: true
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <LineChart.ReferenceLine label="Reference line" y={3000} />
      <LineChart.ReferenceLine label={{
      position: "insideTopLeft",
      value: "Reference line"
    }} x={dayjs().add(3, "month").format("YYYY-MM-DD")} />
      <LineChart.ReferenceLine label={{
      position: "center",
      value: "Reference line"
    }} segment={[{
      x: dayjs().format("YYYY-MM-DD"),
      y: 0
    }, {
      x: dayjs().add(3, "month").format("YYYY-MM-DD"),
      y: 3000
    }]} />
    </LineChart.Root>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
  }} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} withYAxis chartProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    color: ["red", "blue"],
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    strokeDasharray: "15 15"
  }} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }}>
      <LineChart.ReferenceLine color={["green", "blue"]} label={{
      color: ["green", "blue"],
      position: "insideTopRight",
      value: "Reference line"
    }} strokeDasharray="15 15" y={3000} />
    </LineChart.Root>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
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
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
    activeDot: {
      fill: ["red", "blue"]
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    color: "blue",
    dataKey: "desktop"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} lineProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} gridProps={{
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
  const series = useMemo<LineChart.LineProps<Data>[]>(() => [{
    dataKey: "desktop"
  }, {
    dataKey: "tablet"
  }, {
    dataKey: "mobile"
  }], []);
  const data = useMemo(() => createData(), []);
  return <LineChart.Root data={data} series={series} tooltipProps={{
    cursor: {
      stroke: ["red", "blue"]
    },
    labelFormatter: value => dayjs(value).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}},$=`Basic.Composition.Size.ColorScheme.Color.Type.YAxis.Legend.Name.Grid.Dot.Unit.LabelList.Orientation.Synced.ConnectNull.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.TooltipCursor.DisabledXAxis.DisabledActiveDot.DisabledTooltip.CustomAxis.CustomLine.CustomReferenceLine.CustomDot.CustomActiveDot.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`)}))();export{z as AxisLabel,R as AxisTickLine,b as Basic,w as Color,C as ColorScheme,x as Composition,F as ConnectNull,Y as CustomActiveDot,G as CustomAxis,J as CustomDot,Z as CustomGrid,X as CustomLabelList,K as CustomLine,q as CustomReferenceLine,Q as CustomTooltipCursor,U as DisabledActiveDot,W as DisabledTooltip,H as DisabledXAxis,B as Domain,A as Dot,I as Formatter,k as Grid,M as LabelList,D as Legend,O as Name,N as Orientation,L as ReferenceLine,S as Size,P as Synced,V as TooltipCursor,T as Type,j as Unit,E as YAxis,$ as __namedExportsOrder,_ as default};