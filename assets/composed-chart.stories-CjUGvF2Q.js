import{n as e,o as t}from"./rolldown-runtime-C0FnF6B9.js";import{t as n}from"./react-DiVRNtpo.js";import{Nn as r,Tn as i,_n as ee,dn as te}from"./props-Bz1FL_va.js";import{t as ne}from"./jsx-runtime-BdxMnOeJ.js";import{a as re,d as ie,r as ae,t as oe}from"./create-component-DtmnY_ce.js";import{t as se}from"./dayjs.min-QUnUIOl1.js";import{n as ce,t as le}from"./line-chart.style-Dv8PRNbS.js";import{a as ue,dn as de,i as fe,o as pe,r as me,s as he,un as ge}from"./chart-BjaYBYpt.js";import{a,c as _e,i as o,l as ve,n as ye,o as be,r as xe,s as Se,t as Ce}from"./cartesian-chart-BrBLxv9Q.js";import{n as we,t as s}from"./props-table-CLkISL0o.js";var Te;function Ee(){return(Ee=e((()=>{ie(),le(),Te=re({base:{...ce.base,"--bar-fill-opacity":`0.6`,"--bar-stroke":`none`}})})))()}var De,Oe,ke,Ae;function je(){return(je=e((()=>{De=t(n()),Oe=n(),de(),ve(),ke=[`axis`],Ae=(0,Oe.forwardRef)((e,t)=>De.createElement(_e,{chartName:`ComposedChart`,defaultTooltipEventType:`axis`,validateTooltipEventTypes:ke,tooltipPayloadSearcher:ge,categoricalChartProps:e,ref:t}))})))()}function Me(e){return e[0]===`line`}function Ne(e){return e[0]===`area`}function Pe(e){return e[0]===`bar`}function c(e,t=`mono`,n=`invert`){let r=pe(e.length,t,n);return e.map(([e,t],n)=>[e,{...t,color:r[n]}])}var Fe,l,Ie,Le,Re,u;function ze(){return(ze=e((()=>{Fe=n(),je(),ae(),Se(),he(),Ee(),l=ne(),{PropsContext:Ie,usePropsContext:Le,withContext:Re}=oe(`composed-chart`,Te),u=Re(({children:e,series:t=[],barProps:n,...r})=>{let i=(0,Fe.useMemo)(()=>[{component:o,fallback:t.filter(Me).map(([,e],t)=>(0,l.jsx)(o,{...e},t))},{component:ye,fallback:t.filter(Ne).map(([,e],t)=>(0,l.jsx)(ye,{...e},t))},{component:xe,fallback:t.filter(Pe).map(([,e],t)=>(0,l.jsx)(xe,{...e},t))}],[t]);return(0,l.jsx)(Ce,{components:i,render:e=>(0,l.jsx)(Ae,{...e}),barProps:{barSize:40,...n},...r,children:e})})()})))()}var d,f,p,Be,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ve;function He(){return(He=e((()=>{d=t(se(),1),f=n(),we(),ze(),he(),Se(),r(),te(),p=ne(),Be={component:u,title:`Components / Chart / ComposedChart`},m=(e=1e3,t=5e3)=>Math.floor(Math.random()*(t-e+1))+e,h=(e=6)=>Array.from({length:e},(e,t)=>({date:(0,d.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:m(),mobile:m(),tablet:m()})),g=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},_=()=>{let e=(0,f.useMemo)(()=>h(),[]);return(0,p.jsxs)(u,{data:e,children:[(0,p.jsx)(fe,{}),(0,p.jsx)(ue,{labelFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(be,{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}),(0,p.jsx)(xe,{color:`blue`,dataKey:`desktop`}),(0,p.jsx)(ye,{color:`green`,dataKey:`tablet`,dot:!0}),(0,p.jsx)(o,{color:`red`,dataKey:`mobile`,dot:!0,children:(0,p.jsx)(me,{})})]})},v=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:[`xs`,`sm`,`md`,`lg`,`xl`],children:(n,r,i)=>(0,p.jsx)(u,{size:r,data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},y=()=>{let e=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:i,children:(t,n,r)=>(0,p.jsx)(u,{colorScheme:n,data:e,series:c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]],n),tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},r)})},b=()=>{let e=(0,f.useMemo)(()=>[[`bar`,{color:`blue`,dataKey:`desktop`}],[`area`,{color:`green`,dataKey:`tablet`}],[`line`,{color:`red`,dataKey:`mobile`}]],[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},x=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},S=()=>{let e=(0,f.useMemo)(()=>[[`bar`,{color:`blue`,dataKey:`desktop`}],[`area`,{color:`green`,dataKey:`tablet`}],[`line`,{color:`red`,dataKey:`mobile`}]],[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:[`start-start`,`start-center`,`start-end`,`center-start`,`center-start-start`,`center-start-end`,`center-end`,`center-end-start`,`center-end-end`,`end-start`,`end-center`,`end-end`],children:(n,r,i)=>(0,p.jsx)(u,{data:t,series:e,withLegend:!0,legendProps:{placement:r},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},C=()=>{let e=(0,f.useMemo)(()=>[[`bar`,{name:`Desktop`,color:`blue`,dataKey:`desktop`}],[`area`,{name:`Tablet`,color:`green`,dataKey:`tablet`}],[`line`,{name:`Mobile`,color:`red`,dataKey:`mobile`}]],[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withLegend:!0,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},w=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:[`xy`,`x`,`y`,`none`],children:(n,r,i)=>(0,p.jsx)(u,{data:t,series:e,gridProps:{horizontal:r.includes(`x`),vertical:r.includes(`y`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},T=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:[`monotone`,`bump`,`linear`,`natural`,`step`,`stepBefore`,`stepAfter`],children:(n,r,i)=>(0,p.jsx)(u,{data:t,series:e,areaProps:{type:r},lineProps:{type:r},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}},i)})},E=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{dot:!0},lineProps:{dot:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},D=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h().map(({date:e,desktop:t,mobile:n,tablet:r},i)=>({date:e,desktop:t,mobile:i===3?null:n,tablet:i===3?null:r})),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{connectNulls:!0,dot:!0},lineProps:{connectNulls:!0,dot:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},O=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>Array.from({length:6},(e,t)=>({date:(0,d.default)().add(t,`month`).format(`YYYY-MM-DD`),desktop:[m(1e3,2e3),m(4e3,5e3)],mobile:m(),tablet:m()})),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},k=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`,radius:[0,0,4,4]}],[`bar`,{dataKey:`tablet`,radius:[4,4,0,0]}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,barProps:{stackId:`stack`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},A=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,barProps:{barSize:50},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},j=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,barProps:{radius:8},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},M=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`bar`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,chartProps:{barGap:16},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},N=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},lineProps:{dot:!0,label:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`}},tooltipProps:{formatter:e=>`${(Number(e)/1e3).toFixed(1)}k`,labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],tickFormatter:e=>(e/1e3).toFixed(1),ticks:[0,2500,5e3,7500,1e4],unit:`k`}})},P=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{data:t,series:e,lineProps:{dot:!0,label:!0},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}}),(0,p.jsx)(u,{data:t,series:e,withTooltip:!1,withXAxis:!1,lineProps:{dot:!0,label:{dataKey:`date`,formatter:e=>(0,d.default)(String(e)).format(`MMM`)}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})]})},F=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(s,{variant:`stack`,rows:[`start`,`end`],children:(n,r,i)=>(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{left:r===`end`?16:0,right:r===`start`?16:0}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{orientation:r}},i)})},I=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}}),(0,p.jsx)(u,{data:t,series:e,syncId:`chart`,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})]})},L=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{formatter:(e,t=``)=>[Number(e).toLocaleString(),ee(t)],labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{tickFormatter:e=>e.toLocaleString()}})},R=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsxs)(u,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},children:[(0,p.jsx)(a,{label:`Reference line`,y:3e3}),(0,p.jsx)(a,{label:{position:`insideTopLeft`,value:`Reference line`},x:(0,d.default)().add(3,`month`).format(`YYYY-MM-DD`)}),(0,p.jsx)(a,{label:{position:`center`,value:`Reference line`},segment:[{x:(0,d.default)().format(`YYYY-MM-DD`),y:0},{x:(0,d.default)().add(3,`month`).format(`YYYY-MM-DD`),y:3e3}]})]})},z=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`),tickLine:!0},yAxisProps:{tickLine:!0}})},B=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:`Date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{label:`Value`}})},V=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,5e3],ticks:[0,1e3,2e3,3e3,4e3,5e3]}})},H=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{cursor:!0,labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},U=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withXAxis:!1,chartProps:{margin:{left:0,right:0}},tooltipProps:{labelFormatter:()=>null}})},W=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},G=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withTooltip:!1,xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},K=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,withYAxis:!0,chartProps:{margin:{right:16}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickFormatter:e=>(0,d.default)(e).format(`MMM`),tickLine:{color:[`red`,`blue`]}},yAxisProps:{label:{color:[`red`,`blue`]},tick:{color:[`red`,`blue`]},tickLine:{color:[`red`,`blue`]}}})},q=()=>{let e=(0,f.useMemo)(()=>[[`bar`,{dataKey:`desktop`}],[`area`,{color:[`green`,`orange`],dataKey:`tablet`}],[`line`,{color:[`red`,`blue`],dataKey:`mobile`}]],[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{strokeDasharray:`15 15`},lineProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},J=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},children:(0,p.jsx)(a,{color:[`green`,`blue`],label:{color:[`green`,`blue`],position:`insideTopRight`,value:`Reference line`},strokeDasharray:`15 15`,y:3e3})})},Y=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`,dot:{fill:`blue!`}}],[`line`,{dataKey:`mobile`,dot:{fill:[`white!`,`black!`],stroke:`red!`,strokeWidth:1}}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{activeDot:!1},lineProps:{activeDot:!1},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},X=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,areaProps:{activeDot:{fill:[`red`,`blue`]}},lineProps:{activeDot:{fill:[`green`,`orange`]}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},Z=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,lineProps:{activeDot:{fill:`red`},dot:{fill:`red`},label:{color:`red`}},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)},yAxisProps:{domain:[0,1e4],ticks:[0,2500,5e3,7500,1e4]}})},Q=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,gridProps:{strokeDasharray:`15 15`},tooltipProps:{labelFormatter:e=>(0,d.default)(e).format(`MMM`),contentProps:{withSwatch:!1}},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},$=()=>{let e=(0,f.useMemo)(()=>c([[`bar`,{dataKey:`desktop`}],[`area`,{dataKey:`tablet`}],[`line`,{dataKey:`mobile`}]]),[]),t=(0,f.useMemo)(()=>h(),[]);return(0,p.jsx)(u,{data:t,series:e,tooltipProps:{cursor:{stroke:[`red`,`blue`]},labelFormatter:e=>(0,d.default)(e).format(`MMM`)},xAxisProps:{dataKey:`date`,tickFormatter:e=>(0,d.default)(e).format(`MMM`)}})},Ve=`Basic.Composition.Size.ColorScheme.Color.YAxis.Legend.Name.Grid.LineType.LineDot.LineConnectNull.BarRange.BarStacked.BarSize.BarRadius.BarGap.Unit.LabelList.Orientation.Synced.Formatter.ReferenceLine.AxisTickLine.AxisLabel.Domain.TooltipCursor.DisabledXAxis.DisabledLineActiveDot.DisabledTooltip.CustomAxis.CustomLine.CustomReferenceLine.CustomDot.CustomActiveDot.CustomLabelList.CustomGrid.CustomTooltipCursor`.split(`.`),g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data}>
      <ComposedChart.Legend />
      <ComposedChart.Tooltip labelFormatter={value => dayjs(value as string).format("MMM")} />
      <ComposedChart.XAxis dataKey="date" tickFormatter={value => dayjs(value).format("MMM")} />
      <ComposedChart.Bar color="blue" dataKey="desktop" />
      <ComposedChart.Area color="green" dataKey="tablet" dot />
      <ComposedChart.Line color="red" dataKey="mobile" dot>
        <ComposedChart.LabelList />
      </ComposedChart.Line>
    </ComposedChart.Root>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  const data = useMemo(() => createData(), []);
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => <ComposedChart.Root key={key} colorScheme={row} data={data} series={ComposedChart.mergeSeries<Data>([["bar", {
      dataKey: "desktop"
    }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
      dataKey: "tablet"
    }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
      dataKey: "mobile"
    }] satisfies ComposedChart.ComposedProps<Data>], row)} tooltipProps={{
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
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
    barSize: 50
  }} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 10000],
    tickFormatter: value => (value / 1000).toFixed(1),
    ticks: [0, 2500, 5000, 7500, 10000],
    unit: "k"
  }} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
      labelFormatter: value => dayjs(value as string).format("MMM")
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
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} yAxisProps={{
      domain: [0, 10000],
      ticks: [0, 2500, 5000, 7500, 10000]
    }} />
    </>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} yAxisProps={{
      orientation
    }} />}
    </PropsTable>;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
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
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />

      <ComposedChart.Root data={data} series={series} syncId="chart" tooltipProps={{
      labelFormatter: value => dayjs(value as string).format("MMM")
    }} xAxisProps={{
      dataKey: "date",
      tickFormatter: value => dayjs(value).format("MMM")
    }} />
    </>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    tickFormatter: value => value.toLocaleString()
  }} />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM"),
    tickLine: true
  }} yAxisProps={{
    tickLine: true
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    label: "Date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    label: "Value"
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
  return <ComposedChart.Root data={data} series={series} withYAxis chartProps={{
    margin: {
      right: 16
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} yAxisProps={{
    domain: [0, 5000],
    ticks: [0, 1000, 2000, 3000, 4000, 5000]
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
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    cursor: true,
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
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
  return <ComposedChart.Root data={data} series={series} withXAxis={false} chartProps={{
    margin: {
      left: 0,
      right: 0
    }
  }} tooltipProps={{
    labelFormatter: () => null
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
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: false
  }} lineProps={{
    activeDot: false
  }} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
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
  return <ComposedChart.Root data={data} series={series} withTooltip={false} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const series = useMemo(() => ComposedChart.mergeSeries<Data>([["bar", {
    dataKey: "desktop"
  }] satisfies ComposedChart.ComposedProps<Data>, ["area", {
    dataKey: "tablet"
  }] satisfies ComposedChart.ComposedProps<Data>, ["line", {
    dataKey: "mobile"
  }] satisfies ComposedChart.ComposedProps<Data>]), []);
  const data = useMemo(() => createData(), []);
  return <ComposedChart.Root data={data} series={series} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM")
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM"),
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
  return <ComposedChart.Root data={data} series={series} areaProps={{
    activeDot: {
      fill: ["red", "blue"]
    }
  }} lineProps={{
    activeDot: {
      fill: ["green", "orange"]
    }
  }} tooltipProps={{
    labelFormatter: value => dayjs(value as string).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
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
    labelFormatter: value => dayjs(value as string).format("MMM"),
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
    labelFormatter: value => dayjs(value as string).format("MMM"),
    contentProps: {
      withSwatch: false
    }
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
    labelFormatter: value => dayjs(value as string).format("MMM")
  }} xAxisProps={{
    dataKey: "date",
    tickFormatter: value => dayjs(value).format("MMM")
  }} />;
}`,...$.parameters?.docs?.source}}}})))()}He();export{B as AxisLabel,z as AxisTickLine,M as BarGap,j as BarRadius,O as BarRange,A as BarSize,k as BarStacked,g as Basic,b as Color,y as ColorScheme,_ as Composition,X as CustomActiveDot,K as CustomAxis,Y as CustomDot,Q as CustomGrid,Z as CustomLabelList,q as CustomLine,J as CustomReferenceLine,$ as CustomTooltipCursor,W as DisabledLineActiveDot,G as DisabledTooltip,U as DisabledXAxis,V as Domain,L as Formatter,w as Grid,P as LabelList,S as Legend,D as LineConnectNull,E as LineDot,T as LineType,C as Name,F as Orientation,R as ReferenceLine,v as Size,I as Synced,H as TooltipCursor,N as Unit,x as YAxis,Ve as __namedExportsOrder,Be as default};