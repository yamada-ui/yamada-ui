import{j as a}from"./jsx-runtime-CKrituN3.js";import{r as e}from"./index-CBqU2yxZ.js";import{P as F}from"./components-BVzpG0CK.js";import{g as Ir,B as Vr,f as Dr,a as x,b as zr,c as C,u as Nr,d as Wr,e as Or,R as Xr,C as Yr,h as Hr,L as Rr,i as $r,T as Er,j as Ur}from"./use-chart-tooltip-Btd2zdme.js";import{u as qr,o as Qr}from"./theme-provider-BXaPRWNI.js";import{c as La,u as Zr}from"./factory-BVMa8fXZ.js";import{X as jr,Y as Fr,u as ae,a as re,b as ee,C as ne}from"./use-chart-reference-line-CcT42jzc.js";import{f as te}from"./forward-ref-DuAegr0M.js";import{a as oe}from"./use-component-style-DFx-AFMQ.js";import{W as _}from"./flex-CB3lumw3.js";import{V as Aa,H as se}from"./stack-Y-4i-p3Z.js";import{C as ie,a as pe,b as me}from"./card-BBTtGndz.js";import{T as va}from"./text-CocBWv30.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFfB8ey4.js";import"./index-CBJcInrG.js";import"./_basePickBy-BFZklOx5.js";import"./iframe-2dmKWyuM.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-JdRuaFY6.js";import"./isPlainObject-80CfKZvR.js";import"./index-DrFu-skq.js";import"./ui-provider-CEUWN67H.js";import"./index-qfwbxg5S.js";import"./environment-provider-DfVYCp7H.js";import"./motion-JgkBPv6g.js";import"./loading-provider-C42Sy3Y8.js";import"./index-WRgVllkg.js";import"./Combination-DlzjZhkT.js";import"./loading-CvwcjMtk.js";import"./index-BtoBQEmV.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./icon-BlEaeaZb.js";import"./motion-CvgaHKJY.js";import"./index-_tcQm2Fk.js";import"./container-portal-Noj2PZgk.js";import"./notice-UyBoMm2u.js";import"./alert-CAvcd948.js";import"./close-button--w0E3lIE.js";import"./use-ripple-qFQz7cO6.js";import"./container-DB4x0OTp.js";import"./box-DD-NA1tL.js";import"./index-CWmLHDC_.js";import"./index-eENvL-zr.js";import"./form-control-BYWtcG_D.js";import"./index-_K0FJqMm.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-BSBoRBkp.js";import"./index-DhdFwUso.js";import"./index-BZMtSqRZ.js";import"./slide-fade-C5auomOa.js";import"./utils-CCAUAsB4.js";import"./scale-fade-CKENLmw4.js";import"./index-DH1WMIuf.js";import"./index-CpvBRLJe.js";import"./select-BJB6PTf4.js";import"./option-DVE4ZWu7.js";import"./index-DFE8F9kp.js";import"./popover-content-G8w2_ihC.js";import"./index-BN1YOB1a.js";import"./index-rYLD436_.js";import"./index-BCwV-Nep.js";import"./index-4igDc-3Z.js";import"./throttle-CrrS22_E.js";import"./tiny-invariant-CopsF_GD.js";import"./isString-HgUFrMKh.js";import"./_baseUniq-BldSWMm_.js";import"./index-D3ylJrlI.js";import"./use-css-BBxCc9Nj.js";var ce=Ir({chartName:"BarChart",GraphicalChild:Vr,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:jr},{axisType:"yAxis",AxisComp:Fr}],formatAxisMap:Dr});const le=({data:s,series:o,type:t="default",layoutType:r="horizontal",referenceLineProps:i=[],fillOpacity:p=1,syncId:d,styles:u,...v})=>{const L=e.useId(),{theme:l}=qr(),[A,Ma]=e.useState(null),G=t==="stacked"||t==="percent",I=A!==null,{activeBar:T={},background:D={},dimBar:z,...N}=v.barProps??{},P=e.useMemo(()=>o.map(({color:c},y)=>({__prefix:"ui",name:`bar-${y}`,token:"colors",value:c??"transparent"})),[o]),k=e.useMemo(()=>i.map(({color:c},y)=>({__prefix:"ui",name:`reference-line-${y}`,token:"colors",value:c??"transparent"})),[i]),Ka=e.useMemo(()=>[...P,...k,{__prefix:"ui",name:"fill-opacity",value:p}],[P,p,k]),[W,O]=e.useMemo(()=>{const c={barGap:8,...v.chartProps};return x([c,zr],u.chart)(l)},[v.chartProps,u.chart,l]),[X,M]=e.useMemo(()=>{const c={fillOpacity:"var(--ui-fill-opacity)",strokeOpacity:1,...N};return x([c,C],u.bar)(l)},[N,u.bar,l]),[Y,H]=e.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...z};return x([c,C])(l)},[z,l]),[R,$]=e.useMemo(()=>x([T,C],u.activeBar)(l),[T,u.activeBar,l]),[E,U]=e.useMemo(()=>x([D,C],u.background)(l),[D,u.background,l]),q=e.useMemo(()=>o.map((c,y)=>{const{dataKey:h,activeBar:B={},background:w={},dimBar:f={},...J}=c,V=`${L}-${h}`,S=`var(--ui-bar-${y})`,K=I&&A!==h,j={...Y,...f},wa={...X,...J,...K?j:{}},Sa=x([wa,C],M,K?H:void 0)(l,!0),g={...R,...B},b=x([g,C],$)(l,!0),_r={...E,...w},Gr=x([_r,C],U)(l,!0);return{...Sa,id:V,activeBar:b,background:Gr,color:S,dataKey:h}}),[$,R,U,E,M,X,H,Y,A,o,I,l,L]),Q=e.useCallback(({index:c,className:y,...h},B=null)=>{const{id:w,className:f,activeBar:J,background:V,color:S,dataKey:K,...j}=q[c];return{ref:B,className:La(y,f),activeBar:J,background:V,id:w,name:K,dataKey:K,fill:S,stroke:S,isAnimationActive:!1,stackId:G?"stack":void 0,...h,...j}},[q,G]),Ca=e.useCallback(({className:c,...y}={},h=null)=>({ref:h,className:La(c,O),data:s,stackOffset:t==="percent"?"expand":void 0,layout:r,syncId:d,...y,...W}),[O,W,s,d,r,t]);return{barVars:Ka,getBarProps:Q,getBarChartProps:Ca,setHighlightedArea:Ma}},m=te((s,o)=>{const[t,r]=oe("BarChart",s),{className:i,series:p,dataKey:d,layoutType:u,tickLine:v,gridAxis:L,withXAxis:l,withYAxis:A,barProps:Ma,xAxisProps:G,yAxisProps:I,type:T="default",withTooltip:D=!0,withLegend:z=!1,containerProps:N,unit:P,valueFormatter:k,tooltipProps:Ka,tooltipAnimationDuration:W,legendProps:O,data:X,referenceLineProps:M=[],gridProps:Y,strokeDasharray:H,fillOpacity:R,chartProps:$,syncId:E,...U}=Qr(r),{getBarChartProps:q,getBarProps:Q,barVars:Ca,setHighlightedArea:c}=le({data:X,series:p,type:T,layoutType:u,chartProps:$,barProps:Ma,referenceLineProps:M,fillOpacity:R,syncId:E,styles:t}),{getContainerProps:y}=Nr({containerProps:N}),{getXAxisProps:h,getYAxisProps:B}=ae({dataKey:d,type:T,layoutType:u,tickLine:v,gridAxis:L,withXAxis:l,withYAxis:A,xAxisProps:G,yAxisProps:I,unit:P,valueFormatter:k,styles:t}),{getReferenceLineProps:w}=re({referenceLineProps:M,styles:t}),{getGridProps:f}=ee({gridProps:Y,gridAxis:L,strokeDasharray:H,styles:t}),{tooltipProps:J,getTooltipProps:V,tooltipVars:S}=Wr({tooltipProps:Ka,tooltipAnimationDuration:W,styles:t}),{legendProps:K,getLegendProps:j}=Or({legendProps:O}),wa=e.useMemo(()=>p.map(({dataKey:g},b)=>a.jsx(Vr,{...Q({index:b,className:"ui-bar-chart__bar"})},`bar-${g}`)),[Q,p]),Sa=e.useMemo(()=>M.map((g,b)=>a.jsx(Xr,{...w({index:b,className:"ui-bar-chart__reference-line"})},`referenceLine-${b}`)),[w,M]);return a.jsx(Yr,{value:{styles:t},children:a.jsx(Zr.div,{ref:o,className:La("ui-bar-chart",i),var:[...Ca,...S],__css:{maxW:"full",...t.container},...U,children:a.jsx(Hr,{...y({className:"ui-bar-chart__container"}),children:a.jsxs(ce,{...q({className:"ui-bar-chart__chart"}),children:[a.jsx(ne,{...f({className:"ui-area-chart__grid"})}),a.jsx(jr,{...h({className:"ui-bar-chart__x-axis"})}),a.jsx(Fr,{...B({className:"ui-bar-chart__y-axis"})}),z?a.jsx(Rr,{content:({payload:g})=>a.jsx($r,{className:"ui-bar-chart__legend",payload:g,onHighlight:c,...K}),...j()}):null,D?a.jsx(Er,{content:({label:g,payload:b})=>a.jsx(Ur,{className:"ui-bar-chart__tooltip",label:g,payload:b,valueFormatter:k,unit:P,...J}),...V()}):null,wa,Sa]})})})})}),Jn={title:"Components / Feedback / BarChart",component:m},n=()=>Math.floor(Math.random()*4001)+1e3,Z=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},aa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=e.useState({data:s,series:o,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{...t}),a.jsxs(_,{gap:"md",children:[a.jsxs(Aa,{w:"auto",children:[a.jsx(F,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:t.type,onChange:i=>{r(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:t.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),a.jsx(F,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(Aa,{w:"auto",children:[a.jsx(F,{component:"Slider",items:[{label:"Fill opacity",value:t.fillOpacity,min:0,max:1,step:.1,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:t.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(_,{gap:"md",alignItems:"flex-start",children:a.jsx(F,{component:"Switch",items:[{label:"x axis",isChecked:t.withXAxis,onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:t.withYAxis,onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:t.withLegend,onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:t.withTooltip,onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},ra=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{data:s,series:o,dataKey:"month",size:"sm"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"md"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"lg"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"full"})]})},ea=()=>{const s=e.useMemo(()=>{const t=["January","February","March","April","May","June"];return[t.map(r=>({month:r,Smartphones:n()})),t.map(r=>({month:r,Laptops:n()}))]},[]),o=e.useMemo(()=>[[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}]],[]);return a.jsxs(Aa,{children:[a.jsx(m,{data:s[0],series:o[0],dataKey:"month",syncId:"syncId"}),a.jsx(m,{data:s[1],series:o[1],dataKey:"month",syncId:"syncId"})]})},na=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},ta=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0})},oa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",valueFormatter:t=>t.toLocaleString()})},sa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ia=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",fillOpacity:[.8,.7]})},pa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",unit:"views",yAxisProps:{width:75}})},ma=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ca=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=e.useState({barGap:4,barCategoryGap:10});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{data:s,series:o,dataKey:"month",chartProps:t}),a.jsx(_,{w:"auto",children:a.jsx(F,{component:"Slider",items:[{label:"Bar Gap",value:t.barGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:t.barCategoryGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},la=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[n(),n()]})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},da=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ua=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ya=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},ha=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ga=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),t=r=>{const{label:i,payload:p}=r;return p?a.jsxs(ie,{variant:"subtle",colorScheme:"gray",children:[a.jsx(pe,{children:a.jsx(va,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(me,{gap:"sm",children:p.map((d,u)=>a.jsxs(se,{w:"full",justifyContent:"space-between",children:[a.jsx(va,{children:d==null?void 0:d.name}),a.jsx(va,{color:d==null?void 0:d.color,children:d==null?void 0:d.value})]},`payload-${u}`))})]}):null};return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{content:t}})},ba=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},xa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),o=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var Ta,Pa,ka;Z.parameters={...Z.parameters,docs:{...(Ta=Z.parameters)==null?void 0:Ta.docs,source:{originalSource:`() => {
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
}`,...(ka=(Pa=Z.parameters)==null?void 0:Pa.docs)==null?void 0:ka.source}}};var Ba,fa,Ja;aa.parameters={...aa.parameters,docs:{...(Ba=aa.parameters)==null?void 0:Ba.docs,source:{originalSource:`() => {
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
}`,...(Ja=(fa=aa.parameters)==null?void 0:fa.docs)==null?void 0:Ja.source}}};var Va,ja,Fa;ra.parameters={...ra.parameters,docs:{...(Va=ra.parameters)==null?void 0:Va.docs,source:{originalSource:`() => {
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
}`,...(Fa=(ja=ra.parameters)==null?void 0:ja.docs)==null?void 0:Fa.source}}};var _a,Ga,Ia;ea.parameters={...ea.parameters,docs:{...(_a=ea.parameters)==null?void 0:_a.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return [months.map(month => ({
      month,
      Smartphones: randomValue()
    })), months.map(month => ({
      month,
      Laptops: randomValue()
    }))];
  }, []);
  const series: BarProps[][] = useMemo(() => [[{
    dataKey: "Smartphones",
    color: ["primary.500", "primary.400"]
  }], [{
    dataKey: "Laptops",
    color: ["secondary.500", "secondary.400"]
  }]], []);
  return <VStack>
      <BarChart data={data[0]} series={series[0]} dataKey="month" syncId="syncId" />
      <BarChart data={data[1]} series={series[1]} dataKey="month" syncId="syncId" />
    </VStack>;
}`,...(Ia=(Ga=ea.parameters)==null?void 0:Ga.docs)==null?void 0:Ia.source}}};var Da,za,Na;na.parameters={...na.parameters,docs:{...(Da=na.parameters)==null?void 0:Da.docs,source:{originalSource:`() => {
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
}`,...(Na=(za=na.parameters)==null?void 0:za.docs)==null?void 0:Na.source}}};var Wa,Oa,Xa;ta.parameters={...ta.parameters,docs:{...(Wa=ta.parameters)==null?void 0:Wa.docs,source:{originalSource:`() => {
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
}`,...(Xa=(Oa=ta.parameters)==null?void 0:Oa.docs)==null?void 0:Xa.source}}};var Ya,Ha,Ra;oa.parameters={...oa.parameters,docs:{...(Ya=oa.parameters)==null?void 0:Ya.docs,source:{originalSource:`() => {
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
}`,...(Ra=(Ha=oa.parameters)==null?void 0:Ha.docs)==null?void 0:Ra.source}}};var $a,Ea,Ua;sa.parameters={...sa.parameters,docs:{...($a=sa.parameters)==null?void 0:$a.docs,source:{originalSource:`() => {
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
}`,...(Ua=(Ea=sa.parameters)==null?void 0:Ea.docs)==null?void 0:Ua.source}}};var qa,Qa,Za;ia.parameters={...ia.parameters,docs:{...(qa=ia.parameters)==null?void 0:qa.docs,source:{originalSource:`() => {
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
}`,...(Za=(Qa=ia.parameters)==null?void 0:Qa.docs)==null?void 0:Za.source}}};var ar,rr,er;pa.parameters={...pa.parameters,docs:{...(ar=pa.parameters)==null?void 0:ar.docs,source:{originalSource:`() => {
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
}`,...(er=(rr=pa.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};var nr,tr,or;ma.parameters={...ma.parameters,docs:{...(nr=ma.parameters)==null?void 0:nr.docs,source:{originalSource:`() => {
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
}`,...(or=(tr=ma.parameters)==null?void 0:tr.docs)==null?void 0:or.source}}};var sr,ir,pr;ca.parameters={...ca.parameters,docs:{...(sr=ca.parameters)==null?void 0:sr.docs,source:{originalSource:`() => {
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
}`,...(pr=(ir=ca.parameters)==null?void 0:ir.docs)==null?void 0:pr.source}}};var mr,cr,lr;la.parameters={...la.parameters,docs:{...(mr=la.parameters)==null?void 0:mr.docs,source:{originalSource:`() => {
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
}`,...(lr=(cr=la.parameters)==null?void 0:cr.docs)==null?void 0:lr.source}}};var dr,ur,yr;da.parameters={...da.parameters,docs:{...(dr=da.parameters)==null?void 0:dr.docs,source:{originalSource:`() => {
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
}`,...(yr=(ur=da.parameters)==null?void 0:ur.docs)==null?void 0:yr.source}}};var hr,gr,br;ua.parameters={...ua.parameters,docs:{...(hr=ua.parameters)==null?void 0:hr.docs,source:{originalSource:`() => {
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
}`,...(br=(gr=ua.parameters)==null?void 0:gr.docs)==null?void 0:br.source}}};var xr,Mr,Kr;ya.parameters={...ya.parameters,docs:{...(xr=ya.parameters)==null?void 0:xr.docs,source:{originalSource:`() => {
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
}`,...(Kr=(Mr=ya.parameters)==null?void 0:Mr.docs)==null?void 0:Kr.source}}};var Cr,wr,Sr;ha.parameters={...ha.parameters,docs:{...(Cr=ha.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(wr=ha.parameters)==null?void 0:wr.docs)==null?void 0:Sr.source}}};var vr,Lr,Ar;ga.parameters={...ga.parameters,docs:{...(vr=ga.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Lr=ga.parameters)==null?void 0:Lr.docs)==null?void 0:Ar.source}}};var Tr,Pr,kr;ba.parameters={...ba.parameters,docs:{...(Tr=ba.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
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
}`,...(kr=(Pr=ba.parameters)==null?void 0:Pr.docs)==null?void 0:kr.source}}};var Br,fr,Jr;xa.parameters={...xa.parameters,docs:{...(Br=xa.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Jr=(fr=xa.parameters)==null?void 0:fr.docs)==null?void 0:Jr.source}}};const Vn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withStrokeDasharray","withFillOpacity","withUnit","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Vn as __namedExportsOrder,Z as basic,aa as custom,ha as customActiveBar,ya as customAxis,ua as customBackground,da as customBar,ba as customCursor,xa as customLegend,ga as customTooltip,Jn as default,ma as useMixData,la as useRangeData,ia as withFillOpacity,ca as withGap,ta as withLegend,na as withReferenceLine,ra as withSize,sa as withStrokeDasharray,ea as withSync,pa as withUnit,oa as withValueFormatter};
