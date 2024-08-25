import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{P as I}from"./components-DKGQ_4mo.js";import{k as pe,B as oe,m as me,h as x,n as ce,o as A,C as Ia,u as le,a as de,b as ue,q as ye,c as he,R as be,j as Na,L as ge,d as xe,T as Me,e as Ke}from"./use-chart-tooltip-DsCEqQ28.js";import{u as we,g as Se,o as Le}from"./theme-provider-CuwCkym_.js";import{c as Da,B as Ce,b as Ae}from"./factory-EKX9DfWO.js";import{X as se,Y as ie,u as ve,a as Te,b as ke,C as Pe}from"./use-chart-reference-line-BIyPatJG.js";import{f as Be}from"./forward-ref-BmTAT9U5.js";import{a as fe}from"./use-component-style-3J6UAnbr.js";import{W as _}from"./flex-CA-i6_9p.js";import{V as Ga,H as Je}from"./stack-D91i49_J.js";import{C as Ve,a as Fe,b as je}from"./card-BwvO-LJt.js";import{T as _a}from"./text-COyfleYz.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BicLiV9m.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-dLfoAhwj.js";import"./index-Ckaex7cz.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-tWWtjslR.js";import"./index-BSWiOGL_.js";import"./Combination-CONbhR2A.js";import"./loading-B-RfC1y8.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";import"./motion-B_4DOUn5.js";import"./index-Ms_xn5rh.js";import"./container-portal-CECpxDWy.js";import"./index-DxjWwZXO.js";import"./notice-D3c02wE_.js";import"./alert-CCNvKjr1.js";import"./close-button-HuZkQ3Ew.js";import"./use-ripple-B2dghNjE.js";import"./container-VdeNhP8k.js";import"./box-n5Fo5JA2.js";import"./checkbox-Bbou0Mbc.js";import"./index-BpRvIbo0.js";import"./index-DhlHQJq_.js";import"./form-control-DFW2rk8c.js";import"./index-CqJAT4P8.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-B_ceceuy.js";import"./index-ByUNUozh.js";import"./index-DRG4LbkO.js";import"./index-XLuwk0SB.js";import"./index-4Gt8jg-E.js";import"./index-Dj6MDi8M.js";import"./slide-fade-BMyyzG7L.js";import"./utils-Bqd04Qt3.js";import"./scale-fade-C2yiJ92K.js";import"./index-DzGRWxgB.js";import"./index-Bqz3rL1X.js";import"./select-Dg6wY2Nd.js";import"./option-Con4M0tj.js";import"./index-CG4JKEVD.js";import"./popover-content-BOclz9bm.js";import"./index-BLx-LETd.js";import"./index-Du0-7Fls.js";import"./index-CMAEynL2.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-DAVNJ7bd.js";import"./extends-CF3RwP-h.js";var Ie=pe({chartName:"BarChart",GraphicalChild:oe,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:se},{axisType:"yAxis",AxisComp:ie}],formatAxisMap:me});const _e=({data:s,series:o,type:t="default",layoutType:r="horizontal",referenceLineProps:i=[],fillOpacity:p=1,syncId:d,xAxisLabel:b,yAxisLabel:M,styles:y,cell:g=De,...k})=>{const D=n.useId(),{theme:l}=we(),[P,G]=n.useState(null),B=t==="stacked"||t==="percent",N=P!==null,{activeBar:z={},background:f={},dimBar:W,...O}=k.barProps??{},X=n.useMemo(()=>o.map(({color:c},u)=>({name:`bar-${u}`,token:"colors",value:c??"transparent"})),[o]),J=n.useMemo(()=>i.map(({color:c},u)=>({name:`reference-line-${u}`,token:"colors",value:c??"transparent"})),[i]),Ta=n.useMemo(()=>[...X,...J,{name:"fill-opacity",value:p}],[X,p,J]),[Y,$]=n.useMemo(()=>{const c={barGap:8,...k.chartProps};return x([c,ce],y.chart)(l)},[k.chartProps,y.chart,l]),[H,R]=n.useMemo(()=>{const c={fillOpacity:"$fill-opacity",strokeOpacity:1,...O};return x([c,A],y.bar)(l)},[O,y.bar,l]),[E,U]=n.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...W};return x([c,A])(l)},[W,l]),[q,K]=n.useMemo(()=>x([z,A],y.activeBar)(l),[z,y.activeBar,l]),[Q,Z]=n.useMemo(()=>x([f,A],y.background)(l),[f,y.background,l]),aa=n.useMemo(()=>o.map((c,u)=>{const{dataKey:h,activeBar:w={},background:S={},dimBar:L={},...F}=c,j=`${D}-${h}`,v=Se(`bar-${u}`)(l),C=N&&P!==h,T={...E,...L},Ba={...H,...F,...C?T:{}},fa=x([Ba,A],R,C?U:void 0)(l,!0),Ja={...q,...w},Va=x([Ja,A],K)(l,!0),Fa={...Q,...S},ja=x([Fa,A],Z)(l,!0);return{...fa,id:j,activeBar:Va,background:ja,color:v,dataKey:h}}),[K,q,Z,Q,R,H,U,E,P,o,N,l,D]),V=n.useCallback(({index:c,className:u,...h},w=null)=>{const{id:S,className:L,activeBar:F,background:j,color:v,dataKey:C,...T}=aa[c];return{ref:w,className:Da(u,L),activeBar:F,background:j,id:S,name:C,dataKey:C,fill:v,stroke:v,isAnimationActive:!1,stackId:B?"stack":void 0,...h,...T}},[aa,B]),ka=n.useMemo(()=>{const c=o.some(u=>u.stackId);return o.map((u,h)=>{const{dataKey:w}=u;return a.jsx(oe,{...V({index:h,className:"ui-bar-chart__bar"}),children:s.map((S,L)=>Ce(g,{series:u,data:S,index:L,hasStack:c}))},`bar-${w}`)})},[o,V,g,s]),Pa=n.useCallback(({className:c,...u}={},h=null)=>({ref:h,className:Da(c,$),data:s,stackOffset:t==="percent"?"expand":void 0,layout:r,syncId:d,margin:{bottom:b?30:void 0,left:M?10:void 0,right:M?5:void 0},...u,...Y}),[$,s,t,r,d,b,M,Y]);return{bars:ka,barVars:Ta,getBarProps:V,getBarChartProps:Pa,setHighlightedArea:G}},De=({hasStack:s,series:o,data:t,index:r})=>{const{dataKey:i}=o,p=`cell-${i}-${r}`;if(!s)return a.jsx(Ia,{},p);const d=Object.keys(t),b=Object.values(t),M=d.findIndex(g=>g===i),y=b.findLastIndex(g=>g!==0);return M===y?a.jsx(Ia,{},p):a.jsx(Ia,{radius:0},p)},m=Be((s,o)=>{const[t,r]=fe("BarChart",s),{className:i,series:p,dataKey:d,layoutType:b,tickLine:M,gridAxis:y,withXAxis:g,withYAxis:k,barProps:D,xAxisProps:l,yAxisProps:P,xAxisLabel:G,yAxisLabel:B,xAxisLabelProps:N,yAxisLabelProps:z,type:f="default",withTooltip:W=!0,withLegend:O=!1,containerProps:X,unit:J,yAxisTickFormatter:Ta,xAxisTickFormatter:Y,valueFormatter:$,labelFormatter:H,tooltipProps:R,tooltipAnimationDuration:E,legendProps:U,data:q,referenceLineProps:K=[],gridProps:Q,strokeDasharray:Z,fillOpacity:aa,chartProps:V,syncId:ka,cell:Pa,...c}=Le(r),{bars:u,barVars:h,getBarChartProps:w,setHighlightedArea:S}=_e({data:q,series:p,cell:Pa,type:f,layoutType:b,chartProps:V,barProps:D,referenceLineProps:K,fillOpacity:aa,syncId:ka,xAxisLabel:G,yAxisLabel:B,styles:t}),{getContainerProps:L}=le({containerProps:X}),{getXAxisProps:F,getYAxisProps:j,getXAxisLabelProps:v,getYAxisLabelProps:C}=ve({dataKey:d,type:f,layoutType:b,tickLine:M,gridAxis:y,withXAxis:g,withYAxis:k,xAxisProps:l,yAxisProps:P,xAxisLabel:G,yAxisLabel:B,xAxisLabelProps:N,yAxisLabelProps:z,unit:J,yAxisTickFormatter:Ta,xAxisTickFormatter:Y,styles:t}),{getReferenceLineProps:T}=Te({referenceLineProps:K,styles:t}),{getGridProps:Ba}=ke({gridProps:Q,gridAxis:y,strokeDasharray:Z,styles:t}),{tooltipProps:fa,getTooltipProps:Ja}=de({tooltipProps:R,tooltipAnimationDuration:E,styles:t}),{legendProps:Va,getLegendProps:Fa}=ue({legendProps:U}),ja=n.useMemo(()=>K.map((ra,ea)=>a.jsx(ye,{...T({index:ea,className:"ui-bar-chart__reference-line"})},`referenceLine-${ea}`)),[T,K]);return a.jsx(he,{value:{styles:t},children:a.jsx(Ae.div,{ref:o,className:Da("ui-bar-chart",i),var:h,__css:{maxW:"full",...t.container},...c,children:a.jsx(be,{...L({className:"ui-bar-chart__container"}),children:a.jsxs(Ie,{...w({className:"ui-bar-chart__chart"}),children:[a.jsx(Pe,{...Ba({className:"ui-bar-chart__grid"})}),a.jsx(se,{...F({className:"ui-bar-chart__x-axis"}),children:a.jsx(Na,{...v({className:"ui-bar-chart__x-axis-label"})})}),a.jsx(ie,{...j({className:"ui-bar-chart__y-axis"}),children:a.jsx(Na,{...C({className:"ui-bar-chart__y-axis-label"})})}),O?a.jsx(ge,{content:({payload:ra})=>a.jsx(xe,{className:"ui-bar-chart__legend",payload:ra,onHighlight:S,...Va}),...Fa()}):null,W?a.jsx(Me,{content:({label:ra,payload:ea})=>a.jsx(Ke,{className:"ui-bar-chart__tooltip",label:ra,payload:ea,valueFormatter:$,labelFormatter:H,unit:J,...fa}),...Ja()}):null,u,ja]})})})})}),rt={title:"Components / Data Display / BarChart",component:m},e=()=>Math.floor(Math.random()*4001)+1e3,na=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},ta=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=n.useState({data:s,series:o,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{...t}),a.jsxs(_,{gap:"md",children:[a.jsxs(Ga,{w:"auto",children:[a.jsx(I,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:t.type,onChange:i=>{r(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:t.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),a.jsx(I,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(Ga,{w:"auto",children:[a.jsx(I,{component:"Slider",items:[{label:"Fill opacity",value:t.fillOpacity,min:0,max:1,step:.1,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:t.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(_,{gap:"md",alignItems:"flex-start",children:a.jsx(I,{component:"Switch",items:[{label:"x axis",isChecked:t.withXAxis,onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:t.withYAxis,onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:t.withLegend,onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:t.withTooltip,onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},oa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{data:s,series:o,dataKey:"month",size:"sm"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"md"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"lg"}),a.jsx(m,{data:s,series:o,dataKey:"month",size:"full"})]})},sa=()=>{const s=n.useMemo(()=>{const t=["January","February","March","April","May","June"];return[t.map(r=>({month:r,Smartphones:e()})),t.map(r=>({month:r,Laptops:e()}))]},[]),o=n.useMemo(()=>[[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}]],[]);return a.jsxs(Ga,{children:[a.jsx(m,{data:s[0],series:o[0],dataKey:"month",syncId:"syncId"}),a.jsx(m,{data:s[1],series:o[1],dataKey:"month",syncId:"syncId"})]})},ia=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},pa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0})},ma=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",valueFormatter:t=>t.toLocaleString()})},ca=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",xAxisTickFormatter:t=>t.toUpperCase()})},la=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",yAxisTickFormatter:t=>t.toLocaleString()})},da=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",labelFormatter:t=>t.toLocaleString()})},ua=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ya=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",fillOpacity:[.8,.7]})},ha=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",unit:"views",yAxisProps:{width:75}})},ba=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",xAxisLabel:"date",yAxisLabel:"view"})},ga=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},xa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=n.useState({barGap:4,barCategoryGap:10});return a.jsxs(_,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{data:s,series:o,dataKey:"month",chartProps:t}),a.jsx(_,{w:"auto",children:a.jsx(I,{component:"Slider",items:[{label:"Bar Gap",value:t.barGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:t.barCategoryGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},Ma=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[e(),e()]})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},Ka=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},wa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},Sa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},La=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month"})},Ca=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),t=r=>{const{label:i,payload:p}=r;return p?a.jsxs(Ve,{variant:"subtle",colorScheme:"gray",children:[a.jsx(Fe,{children:a.jsx(_a,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(je,{gap:"sm",children:p.map((d,b)=>a.jsxs(Je,{w:"full",justifyContent:"space-between",children:[a.jsx(_a,{children:d==null?void 0:d.name}),a.jsx(_a,{color:d==null?void 0:d.color,children:d==null?void 0:d.value})]},`payload-${b}`))})]}):null};return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{content:t}})},Aa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},va=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e(),Laptops:e(),Tablets:e()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var za,Wa,Oa;na.parameters={...na.parameters,docs:{...(za=na.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
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
}`,...(Oa=(Wa=na.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.source}}};var Xa,Ya,$a;ta.parameters={...ta.parameters,docs:{...(Xa=ta.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...($a=(Ya=ta.parameters)==null?void 0:Ya.docs)==null?void 0:$a.source}}};var Ha,Ra,Ea;oa.parameters={...oa.parameters,docs:{...(Ha=oa.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
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
}`,...(Ea=(Ra=oa.parameters)==null?void 0:Ra.docs)==null?void 0:Ea.source}}};var Ua,qa,Qa;sa.parameters={...sa.parameters,docs:{...(Ua=sa.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
}`,...(Qa=(qa=sa.parameters)==null?void 0:qa.docs)==null?void 0:Qa.source}}};var Za,ar,rr;ia.parameters={...ia.parameters,docs:{...(Za=ia.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
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
}`,...(rr=(ar=ia.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var er,nr,tr;pa.parameters={...pa.parameters,docs:{...(er=pa.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
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
}`,...(tr=(nr=pa.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,sr,ir;ma.parameters={...ma.parameters,docs:{...(or=ma.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
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
}`,...(ir=(sr=ma.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var pr,mr,cr;ca.parameters={...ca.parameters,docs:{...(pr=ca.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" xAxisTickFormatter={value => value.toUpperCase()} />;
}`,...(cr=(mr=ca.parameters)==null?void 0:mr.docs)==null?void 0:cr.source}}};var lr,dr,ur;la.parameters={...la.parameters,docs:{...(lr=la.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" yAxisTickFormatter={value => value.toLocaleString()} />;
}`,...(ur=(dr=la.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var yr,hr,br;da.parameters={...da.parameters,docs:{...(yr=da.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" labelFormatter={value => value.toLocaleString()} />;
}`,...(br=(hr=da.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var gr,xr,Mr;ua.parameters={...ua.parameters,docs:{...(gr=ua.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
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
}`,...(Mr=(xr=ua.parameters)==null?void 0:xr.docs)==null?void 0:Mr.source}}};var Kr,wr,Sr;ya.parameters={...ya.parameters,docs:{...(Kr=ya.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
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
}`,...(Sr=(wr=ya.parameters)==null?void 0:wr.docs)==null?void 0:Sr.source}}};var Lr,Cr,Ar;ha.parameters={...ha.parameters,docs:{...(Lr=ha.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
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
}`,...(Ar=(Cr=ha.parameters)==null?void 0:Cr.docs)==null?void 0:Ar.source}}};var vr,Tr,kr;ba.parameters={...ba.parameters,docs:{...(vr=ba.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" xAxisLabel="date" yAxisLabel="view" />;
}`,...(kr=(Tr=ba.parameters)==null?void 0:Tr.docs)==null?void 0:kr.source}}};var Pr,Br,fr;ga.parameters={...ga.parameters,docs:{...(Pr=ga.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(fr=(Br=ga.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};var Jr,Vr,Fr;xa.parameters={...xa.parameters,docs:{...(Jr=xa.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Vr=xa.parameters)==null?void 0:Vr.docs)==null?void 0:Fr.source}}};var jr,Ir,_r;Ma.parameters={...Ma.parameters,docs:{...(jr=Ma.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Ir=Ma.parameters)==null?void 0:Ir.docs)==null?void 0:_r.source}}};var Dr,Gr,Nr;Ka.parameters={...Ka.parameters,docs:{...(Dr=Ka.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Gr=Ka.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var zr,Wr,Or;wa.parameters={...wa.parameters,docs:{...(zr=wa.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Wr=wa.parameters)==null?void 0:Wr.docs)==null?void 0:Or.source}}};var Xr,Yr,$r;Sa.parameters={...Sa.parameters,docs:{...(Xr=Sa.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...($r=(Yr=Sa.parameters)==null?void 0:Yr.docs)==null?void 0:$r.source}}};var Hr,Rr,Er;La.parameters={...La.parameters,docs:{...(Hr=La.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
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
}`,...(Er=(Rr=La.parameters)==null?void 0:Rr.docs)==null?void 0:Er.source}}};var Ur,qr,Qr;Ca.parameters={...Ca.parameters,docs:{...(Ur=Ca.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
}`,...(Qr=(qr=Ca.parameters)==null?void 0:qr.docs)==null?void 0:Qr.source}}};var Zr,ae,re;Aa.parameters={...Aa.parameters,docs:{...(Zr=Aa.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(re=(ae=Aa.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ee,ne,te;va.parameters={...va.parameters,docs:{...(ee=va.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(te=(ne=va.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const et=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withXAxisTickFormatter","withYAxisTickFormatter","withLabelFormatter","withStrokeDasharray","withFillOpacity","withUnit","withAxisLabel","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{et as __namedExportsOrder,na as basic,ta as custom,La as customActiveBar,Sa as customAxis,wa as customBackground,Ka as customBar,Aa as customCursor,va as customLegend,Ca as customTooltip,rt as default,ga as useMixData,Ma as useRangeData,ba as withAxisLabel,ya as withFillOpacity,xa as withGap,da as withLabelFormatter,pa as withLegend,ia as withReferenceLine,oa as withSize,ua as withStrokeDasharray,sa as withSync,ha as withUnit,ma as withValueFormatter,ca as withXAxisTickFormatter,la as withYAxisTickFormatter};
