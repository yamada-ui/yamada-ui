import{j as a}from"./jsx-runtime-CKrituN3.js";import{r}from"./index-CBqU2yxZ.js";import{P as J}from"./components-hVbf-y0w.js";import{g as Gr,B as Jr,f as Ir,a as M,b as Dr,c as C,u as zr,d as Nr,e as Wr,R as Or,C as Xr,h as Yr,L as Hr,i as Rr,T as $r,j as Er}from"./use-chart-tooltip-ErTdICLe.js";import{u as Ur,o as qr}from"./theme-provider-6JRwGmsH.js";import{c as va,u as Qr}from"./factory-DKdOmnTE.js";import{X as Vr,Y as jr,u as Zr,a as ae,b as re,C as ee}from"./use-chart-reference-line-BQfDAxVs.js";import{f as ne}from"./forward-ref-DuAegr0M.js";import{a as te}from"./use-component-style-CM81S9bB.js";import{W as V}from"./flex-BM0IWjBd.js";import{V as La,H as oe}from"./stack-BLwkV04r.js";import{C as se,a as ie,b as pe}from"./card-BskNoIG0.js";import{T as Sa}from"./text-CY2A-aql.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B_ZeHhCe.js";import"./index-iEiuivQB.js";import"./_basePickBy-DOcyg-dM.js";import"./iframe-D3bXSDor.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-JdRuaFY6.js";import"./isPlainObject-80CfKZvR.js";import"./index-DrFu-skq.js";import"./ui-provider-BPl31IrY.js";import"./index-Cq4f4sK0.js";import"./environment-provider-Cgf-DIgC.js";import"./motion-JgkBPv6g.js";import"./loading-provider-Cb18XwbM.js";import"./index-CdZFaoT8.js";import"./Combination-DlzjZhkT.js";import"./loading-wACCLo5l.js";import"./index-CdrX07di.js";import"./index-mdwqubC6.js";import"./index-5LWoB8xm.js";import"./icon-1JWgpStP.js";import"./motion-CLgphBsa.js";import"./index-_tcQm2Fk.js";import"./container-portal-D2xVMWUg.js";import"./notice-BXTSmgnh.js";import"./alert-BOxyDV5f.js";import"./close-button-0-3R9bmA.js";import"./use-ripple-CmSVpGdD.js";import"./container-Sd9O3KU7.js";import"./box-CoyWgssb.js";import"./index-tFXHeeE6.js";import"./index-DathS1El.js";import"./form-control-BTl1HNZj.js";import"./index-Bz2oK1rb.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-C6x180pT.js";import"./index-HXvsaqMF.js";import"./index-B1qgFRIq.js";import"./slide-fade-DSkGhpsW.js";import"./utils-Bs-IWrvS.js";import"./scale-fade-BKc-0Sur.js";import"./index-D8aVwMLp.js";import"./index-CpvBRLJe.js";import"./select-Ds1hD6my.js";import"./option-ITveUlSE.js";import"./index-CzYF0rws.js";import"./popover-content-BT71lgsa.js";import"./index-BThYfF5i.js";import"./index-rYLD436_.js";import"./index-C-KxyEAH.js";import"./index-BxUjUPEB.js";import"./throttle-CrrS22_E.js";import"./tiny-invariant-CopsF_GD.js";import"./isString-HgUFrMKh.js";import"./_baseUniq-BldSWMm_.js";import"./index-D3ylJrlI.js";import"./use-css-DV7J2nG3.js";var me=Gr({chartName:"BarChart",GraphicalChild:Jr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Vr},{axisType:"yAxis",AxisComp:jr}],formatAxisMap:Ir});const ce=({data:s,series:t,type:o="default",layoutType:e="horizontal",referenceLineProps:i=[],fillOpacity:p=1,styles:c,...h})=>{const j=r.useId(),{theme:l}=Ur(),[v,xa]=r.useState(null),F=o==="stacked"||o==="percent",_=v!==null,{activeBar:G={},background:L={},dimBar:I,...D}=h.barProps??{},z=r.useMemo(()=>t.map(({color:d},u)=>({__prefix:"ui",name:`bar-${u}`,token:"colors",value:d??"transparent"})),[t]),A=r.useMemo(()=>i.map(({color:d},u)=>({__prefix:"ui",name:`reference-line-${u}`,token:"colors",value:d??"transparent"})),[i]),N=r.useMemo(()=>[...z,...A,{__prefix:"ui",name:"fill-opacity",value:p}],[z,p,A]),[W,O]=r.useMemo(()=>{const d={barGap:8,...h.chartProps};return M([d,Dr],c.chart)(l)},[h.chartProps,c.chart,l]),[X,Y]=r.useMemo(()=>{const d={fillOpacity:"var(--ui-fill-opacity)",strokeOpacity:1,...D};return M([d,C],c.bar)(l)},[D,c.bar,l]),[x,H]=r.useMemo(()=>{const d={fillOpacity:.3,strokeOpacity:0,...I};return M([d,C])(l)},[I,l]),[R,$]=r.useMemo(()=>M([G,C],c.activeBar)(l),[G,c.activeBar,l]),[E,U]=r.useMemo(()=>M([L,C],c.background)(l),[L,c.background,l]),q=r.useMemo(()=>t.map((d,u)=>{const{dataKey:y,activeBar:T={},background:w={},dimBar:P={},...k}=d,B=`${j}-${y}`,S=`var(--ui-bar-${u})`,K=_&&v!==y,f={...x,...P},Ca={...X,...k,...K?f:{}},wa=M([Ca,C],Y,K?H:void 0)(l,!0),g={...R,...T},b=M([g,C],$)(l,!0),Fr={...E,...w},_r=M([Fr,C],U)(l,!0);return{...wa,id:B,activeBar:b,background:_r,color:S,dataKey:y}}),[$,R,U,E,Y,X,H,x,v,t,_,l,j]),Q=r.useCallback(({index:d,className:u,...y},T=null)=>{const{id:w,className:P,activeBar:k,background:B,color:S,dataKey:K,...f}=q[d];return{ref:T,className:va(u,P),activeBar:k,background:B,id:w,name:K,dataKey:K,fill:S,stroke:S,isAnimationActive:!1,stackId:F?"stack":void 0,...y,...f}},[q,F]),Ka=r.useCallback(({className:d,...u}={},y=null)=>({ref:y,className:va(d,O),data:s,stackOffset:o==="percent"?"expand":void 0,layout:e,...u,...W}),[O,W,s,e,o]);return{barVars:N,getBarProps:Q,getBarChartProps:Ka,setHighlightedArea:xa}},m=ne((s,t)=>{const[o,e]=te("BarChart",s),{className:i,series:p,dataKey:c,layoutType:h,tickLine:j,gridAxis:l,withXAxis:v,withYAxis:xa,barProps:F,xAxisProps:_,yAxisProps:G,type:L="default",withTooltip:I=!0,withLegend:D=!1,containerProps:z,unit:A,valueFormatter:N,tooltipProps:W,tooltipAnimationDuration:O,legendProps:X,data:Y,referenceLineProps:x=[],gridProps:H,strokeDasharray:R,fillOpacity:$,chartProps:E,...U}=qr(e),{getBarChartProps:q,getBarProps:Q,barVars:Ka,setHighlightedArea:d}=ce({data:Y,series:p,type:L,layoutType:h,chartProps:E,barProps:F,referenceLineProps:x,fillOpacity:$,styles:o}),{getContainerProps:u}=zr({containerProps:z}),{getXAxisProps:y,getYAxisProps:T}=Zr({dataKey:c,type:L,layoutType:h,tickLine:j,gridAxis:l,withXAxis:v,withYAxis:xa,xAxisProps:_,yAxisProps:G,unit:A,valueFormatter:N,styles:o}),{getReferenceLineProps:w}=ae({referenceLineProps:x,styles:o}),{getGridProps:P}=re({gridProps:H,gridAxis:l,strokeDasharray:R,styles:o}),{tooltipProps:k,getTooltipProps:B,tooltipVars:S}=Nr({tooltipProps:W,tooltipAnimationDuration:O,styles:o}),{legendProps:K,getLegendProps:f}=Wr({legendProps:X}),Ca=r.useMemo(()=>p.map(({dataKey:g},b)=>a.jsx(Jr,{...Q({index:b,className:"ui-bar-chart__bar"})},`bar-${g}`)),[Q,p]),wa=r.useMemo(()=>x.map((g,b)=>a.jsx(Or,{...w({index:b,className:"ui-bar-chart__reference-line"})},`referenceLine-${b}`)),[w,x]);return a.jsx(Xr,{value:{styles:o},children:a.jsx(Qr.div,{ref:t,className:va("ui-bar-chart",i),var:[...Ka,...S],__css:{maxW:"full",...o.container},...U,children:a.jsx(Yr,{...u({className:"ui-bar-chart__container"}),children:a.jsxs(me,{...q({className:"ui-bar-chart__chart"}),children:[a.jsx(ee,{...P({className:"ui-area-chart__grid"})}),a.jsx(Vr,{...y({className:"ui-bar-chart__x-axis"})}),a.jsx(jr,{...T({className:"ui-bar-chart__y-axis"})}),D?a.jsx(Hr,{content:({payload:g})=>a.jsx(Rr,{className:"ui-bar-chart__legend",payload:g,onHighlight:d,...K}),...f()}):null,I?a.jsx($r,{content:({label:g,payload:b})=>a.jsx(Er,{className:"ui-bar-chart__tooltip",label:g,payload:b,valueFormatter:N,unit:A,...k}),...B()}):null,Ca,wa]})})})})}),fn={title:"Components / Feedback / BarChart",component:m},n=()=>Math.floor(Math.random()*4001)+1e3,Z=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},aa=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[o,e]=r.useState({data:s,series:t,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return a.jsxs(V,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{...o}),a.jsxs(V,{gap:"md",children:[a.jsxs(La,{w:"auto",children:[a.jsx(J,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:o.type,onChange:i=>{e(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:o.layoutType,onChange:i=>{e(p=>({...p,layoutType:i}))}}]}),a.jsx(J,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:o.tickLine,onChange:i=>{e(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:o.gridAxis,onChange:i=>{e(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(La,{w:"auto",children:[a.jsx(J,{component:"Slider",items:[{label:"Fill opacity",value:o.fillOpacity,min:0,max:1,step:.1,onChange:i=>{e(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:o.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{e(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(V,{gap:"md",alignItems:"flex-start",children:a.jsx(J,{component:"Switch",items:[{label:"x axis",isChecked:o.withXAxis,onChange:()=>e(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:o.withYAxis,onChange:()=>e(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:o.withLegend,onChange:()=>e(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:o.withTooltip,onChange:()=>e(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},ra=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{data:s,series:t,dataKey:"month",size:"sm"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"md"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"lg"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"full"})]})},ea=()=>{const s=[r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n()})),[]),r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Laptops:n()})),[])],t=[r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]),r.useMemo(()=>[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[])];return a.jsxs(La,{children:[a.jsx(m,{data:s[0],series:t[0],dataKey:"month",chartProps:{syncId:"syncId"}}),a.jsx(m,{data:s[1],series:t[1],dataKey:"month",chartProps:{syncId:"syncId"}})]})},na=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},ta=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",withLegend:!0})},oa=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",valueFormatter:o=>o.toLocaleString()})},sa=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ia=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",fillOpacity:[.8,.7]})},pa=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",unit:"views",yAxisProps:{width:75}})},ma=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ca=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[o,e]=r.useState({barGap:4,barCategoryGap:10});return a.jsxs(V,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{data:s,series:t,dataKey:"month",chartProps:o}),a.jsx(V,{w:"auto",children:a.jsx(J,{component:"Slider",items:[{label:"Bar Gap",value:o.barGap,min:0,max:50,step:1,onChange:i=>{e(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:o.barCategoryGap,min:0,max:50,step:1,onChange:i=>{e(p=>({...p,barCategoryGap:i}))}}]})})]})},la=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:[n(),n()]})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},da=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ua=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ya=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},ha=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ga=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),o=e=>{const{label:i,payload:p}=e;return p?a.jsxs(se,{variant:"subtle",colorScheme:"gray",children:[a.jsx(ie,{children:a.jsx(Sa,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(pe,{gap:"sm",children:p.map((c,h)=>a.jsxs(oe,{w:"full",justifyContent:"space-between",children:[a.jsx(Sa,{children:c==null?void 0:c.name}),a.jsx(Sa,{color:c==null?void 0:c.color,children:c==null?void 0:c.value})]},`payload-${h}`))})]}):null};return a.jsx(m,{data:s,series:t,dataKey:"month",tooltipProps:{content:o}})},ba=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},Ma=()=>{const s=r.useMemo(()=>["January","February","March","April","May","June"].map(e=>({month:e,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=r.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var Aa,Ta,Pa;Z.parameters={...Z.parameters,docs:{...(Aa=Z.parameters)==null?void 0:Aa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(Pa=(Ta=Z.parameters)==null?void 0:Ta.docs)==null?void 0:Pa.source}}};var ka,Ba,fa;aa.parameters={...aa.parameters,docs:{...(ka=aa.parameters)==null?void 0:ka.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const [props, setProps] = useState<BarChartProps>({
    data: data,
    series: series,
    dataKey: "month",
    withXAxis: true,
    withYAxis: true,
    withTooltip: true,
    withLegend: false,
    strokeWidth: 2,
    tooltipAnimationDuration: 0,
    fillOpacity: 1,
    tickLine: "y",
    strokeDasharray: "5 5",
    gridAxis: "x",
    type: "default",
    layoutType: "horizontal"
  });
  return <Wrap gap="md" alignItems="flex-start">
      <BarChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl component="Select" items={[{
          label: "Chart type",
          defaultValue: "default",
          items: [{
            label: "default",
            value: "default"
          }, {
            label: "stacked",
            value: "stacked"
          }, {
            label: "percent",
            value: "percent"
          }],
          value: props.type,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              type: (value as BarChartType)
            }));
          }
        }, {
          label: "Layout type",
          defaultValue: "horizontal",
          items: [{
            label: "horizontal",
            value: "horizontal"
          }, {
            label: "vertical",
            value: "vertical"
          }],
          value: props.layoutType,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              layoutType: (value as ChartLayoutType)
            }));
          }
        }]} />

          <PropControl component="SegmentedControl" items={[{
          label: "Tick line",
          items: [{
            label: "x",
            value: "x"
          }, {
            label: "y",
            value: "y"
          }, {
            label: "xy",
            value: "xy"
          }, {
            label: "none",
            value: "none"
          }],
          value: props.tickLine,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tickLine: (value as ChartAxisType)
            }));
          }
        }, {
          label: "Grid axis",
          items: [{
            label: "x",
            value: "x"
          }, {
            label: "y",
            value: "y"
          }, {
            label: "xy",
            value: "xy"
          }, {
            label: "none",
            value: "none"
          }],
          value: props.gridAxis,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              gridAxis: (value as ChartAxisType)
            }));
          }
        }]} />
        </VStack>

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Fill opacity",
          value: (props.fillOpacity as number),
          min: 0,
          max: 1,
          step: 0.1,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              fillOpacity: value
            }));
          }
        }, {
          label: "Tooltip animation duration",
          value: props.tooltipAnimationDuration,
          min: 0,
          max: 2000,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipAnimationDuration: value
            }));
          }
        }]} />

          <Wrap gap="md" alignItems="flex-start">
            <PropControl component="Switch" items={[{
            label: "x axis",
            isChecked: props.withXAxis,
            onChange: () => setProps(prev => ({
              ...prev,
              withXAxis: !prev.withXAxis
            }))
          }, {
            label: "y axis",
            isChecked: props.withYAxis,
            onChange: () => setProps(prev => ({
              ...prev,
              withYAxis: !prev.withYAxis
            }))
          }, {
            label: "legend",
            isChecked: props.withLegend,
            onChange: () => setProps(prev => ({
              ...prev,
              withLegend: !prev.withLegend
            }))
          }, {
            label: "tooltip",
            isChecked: props.withTooltip,
            onChange: () => setProps(prev => ({
              ...prev,
              withTooltip: !prev.withTooltip
            }))
          }]} />
          </Wrap>
        </VStack>
      </Wrap>
    </Wrap>;
}`,...(fa=(Ba=aa.parameters)==null?void 0:Ba.docs)==null?void 0:fa.source}}};var Ja,Va,ja;ra.parameters={...ra.parameters,docs:{...(Ja=ra.parameters)==null?void 0:Ja.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <>
      <BarChart data={data} series={series} dataKey="month" size="sm" />
      <BarChart data={data} series={series} dataKey="month" size="md" />
      <BarChart data={data} series={series} dataKey="month" size="lg" />
      <BarChart data={data} series={series} dataKey="month" size="full" />
    </>;
}`,...(ja=(Va=ra.parameters)==null?void 0:Va.docs)==null?void 0:ja.source}}};var Fa,_a,Ga;ea.parameters={...ea.parameters,docs:{...(Fa=ea.parameters)==null?void 0:Fa.docs,source:{originalSource:`() => {
  const data = [useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue()
    }));
  }, []), useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Laptops: randomValue()
    }));
  }, [])];
  const series: BarProps[][] = [useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }], []), useMemo(() => [{
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }], [])];
  return <VStack>
      <BarChart data={data[0]} series={series[0]} dataKey="month" chartProps={{
      syncId: "syncId"
    }} />
      <BarChart data={data[1]} series={series[1]} dataKey="month" chartProps={{
      syncId: "syncId"
    }} />
    </VStack>;
}`,...(Ga=(_a=ea.parameters)==null?void 0:_a.docs)==null?void 0:Ga.source}}};var Ia,Da,za;na.parameters={...na.parameters,docs:{...(Ia=na.parameters)==null?void 0:Ia.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" referenceLineProps={[{
    y: 3000,
    label: "x line",
    color: "red.500"
  }, {
    x: "Page F",
    label: "y line"
  }]} />;
}`,...(za=(Da=na.parameters)==null?void 0:Da.docs)==null?void 0:za.source}}};var Na,Wa,Oa;ta.parameters={...ta.parameters,docs:{...(Na=ta.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" withLegend />;
}`,...(Oa=(Wa=ta.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.source}}};var Xa,Ya,Ha;oa.parameters={...oa.parameters,docs:{...(Xa=oa.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" valueFormatter={value => value.toLocaleString()} />;
}`,...(Ha=(Ya=oa.parameters)==null?void 0:Ya.docs)==null?void 0:Ha.source}}};var Ra,$a,Ea;sa.parameters={...sa.parameters,docs:{...(Ra=sa.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" gridAxis="xy" strokeDasharray="15 15" />;
}`,...(Ea=($a=sa.parameters)==null?void 0:$a.docs)==null?void 0:Ea.source}}};var Ua,qa,Qa;ia.parameters={...ia.parameters,docs:{...(Ua=ia.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" fillOpacity={[0.8, 0.7]} />;
}`,...(Qa=(qa=ia.parameters)==null?void 0:qa.docs)==null?void 0:Qa.source}}};var Za,ar,rr;pa.parameters={...pa.parameters,docs:{...(Za=pa.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" unit="views" yAxisProps={{
    width: 75
  }} />;
}`,...(rr=(ar=pa.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var er,nr,tr;ma.parameters={...ma.parameters,docs:{...(er=ma.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    stackId: "a"
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"],
    stackId: "a"
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(tr=(nr=ma.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,sr,ir;ca.parameters={...ca.parameters,docs:{...(or=ca.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    stackId: "a"
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"],
    stackId: "a"
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const [props, setProps] = useState({
    barGap: 4,
    barCategoryGap: 10
  });
  return <Wrap gap="md" alignItems="flex-start">
      <BarChart data={data} series={series} dataKey="month" chartProps={props} />

      <Wrap w="auto">
        <PropControl component="Slider" items={[{
        label: "Bar Gap",
        value: props.barGap,
        min: 0,
        max: 50,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            barGap: value
          }));
        }
      }, {
        label: "Bar Category Gap",
        value: props.barCategoryGap,
        min: 0,
        max: 50,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            barCategoryGap: value
          }));
        }
      }]} />
      </Wrap>
    </Wrap>;
}`,...(ir=(sr=ca.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var pr,mr,cr;la.parameters={...la.parameters,docs:{...(pr=la.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: [randomValue(), randomValue()]
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(cr=(mr=la.parameters)==null?void 0:mr.docs)==null?void 0:cr.source}}};var lr,dr,ur;da.parameters={...da.parameters,docs:{...(lr=da.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    radius: [12, 12, 0, 0]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(ur=(dr=da.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var yr,hr,gr;ua.parameters={...ua.parameters,docs:{...(yr=ua.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    background: {
      fill: ["blackAlpha.300", "whiteAlpha.300"],
      stroke: ["blackAlpha.500", "whiteAlpha.500"],
      strokeWidth: 1,
      radius: 10
    }
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(gr=(hr=ua.parameters)==null?void 0:hr.docs)==null?void 0:gr.source}}};var br,Mr,xr;ya.parameters={...ya.parameters,docs:{...(br=ya.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" tickLine="xy" yAxisProps={{
    tickMargin: 15,
    orientation: "right",
    domain: [0, 15000]
  }} xAxisProps={{
    tickMargin: 15,
    orientation: "top",
    padding: {
      left: 30,
      right: 30
    },
    color: ["red.500", "red.500"]
  }} />;
}`,...(xr=(Mr=ya.parameters)==null?void 0:Mr.docs)==null?void 0:xr.source}}};var Kr,Cr,wr;ha.parameters={...ha.parameters,docs:{...(Kr=ha.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"],
    activeBar: {
      fill: ["secondary.500", "secondary.400"],
      stroke: ["secondary.500", "secondary.400"]
    }
  }], []);
  return <BarChart data={data} series={series} dataKey="month" />;
}`,...(wr=(Cr=ha.parameters)==null?void 0:Cr.docs)==null?void 0:wr.source}}};var Sr,vr,Lr;ga.parameters={...ga.parameters,docs:{...(Sr=ga.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  const CustomTooltip: ChartTooltip = (props: {
    label?: string;
    payload?: Dict[];
  }) => {
    const {
      label,
      payload
    } = props;
    if (!payload) return null;
    return <Card variant="subtle" colorScheme="gray">
        <CardHeader>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </CardHeader>

        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} w="full" justifyContent="space-between">
              <Text>{value?.name}</Text>
              <Text color={value?.color}>{value?.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <BarChart data={data} series={series} dataKey="month" tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(Lr=(vr=ga.parameters)==null?void 0:vr.docs)==null?void 0:Lr.source}}};var Ar,Tr,Pr;ba.parameters={...ba.parameters,docs:{...(Ar=ba.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" tooltipProps={{
    cursor: {
      fill: ["primary.100", "primary.950"],
      stroke: ["secondary.300", "secondary.700"],
      strokeWidth: 1,
      strokeDasharray: "5 5"
    }
  }} />;
}`,...(Pr=(Tr=ba.parameters)==null?void 0:Tr.docs)==null?void 0:Pr.source}}};var kr,Br,fr;Ma.parameters={...Ma.parameters,docs:{...(kr=Ma.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue(),
      Laptops: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }, {
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }, {
    dataKey: "Tablets",
    color: ["warning.500", "warning.400"]
  }], []);
  return <BarChart data={data} series={series} dataKey="month" withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(fr=(Br=Ma.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};const Jn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withStrokeDasharray","withFillOpacity","withUnit","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Jn as __namedExportsOrder,Z as basic,aa as custom,ha as customActiveBar,ya as customAxis,ua as customBackground,da as customBar,ba as customCursor,Ma as customLegend,ga as customTooltip,fn as default,ma as useMixData,la as useRangeData,ia as withFillOpacity,ca as withGap,ta as withLegend,na as withReferenceLine,ra as withSize,sa as withStrokeDasharray,ea as withSync,pa as withUnit,oa as withValueFormatter};
