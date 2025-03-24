import{j as a}from"./jsx-runtime-BpbtHYHY.js";import{r as n}from"./index-BwPxMuoB.js";import{P as I}from"./components-UqfDC4B9.js";import{k as pe,B as oe,m as me,h as x,n as ce,o as L,C as Ia,u as le,a as de,b as ue,q as ye,c as he,R as be,j as Na,L as ge,d as xe,T as Me,e as Ke}from"./use-chart-tooltip-D9zlfhiv.js";import{u as we,g as Se,o as ve}from"./theme-provider-DGyR61Aa.js";import{c as Da,J as Le,b as Ce}from"./factory-B_KMcXyW.js";import{X as se,Y as ie,u as Ae,a as Te,b as ke,C as Pe}from"./use-chart-reference-line-BRfXz7J6.js";import{f as Be}from"./forward-ref-Ukjd1cIW.js";import{a as fe}from"./use-component-style-65RA3nVD.js";import{W as _}from"./flex-DvtQc3o-.js";import{V as Ga,H as Je}from"./stack-D_e4Awei.js";import{C as Ve,a as Fe,b as je}from"./card-CTcOJUYg.js";import{T as _a}from"./text-clsxocLN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-B5b1ezDi.js";import"./index-CmygkWjO.js";import"./use-checkbox-D04DuIcU.js";import"./index-CuS4wVb_.js";import"./form-control-4O_IQfgA.js";import"./factory-CplEbptb.js";import"./proxy-qc5arozF.js";import"./index-DLOQPSsO.js";import"./index-CpILZzml.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Tj-aA0qb.js";import"./tooltip-BjQKmVlx.js";import"./index-HHw4H1QN.js";import"./index-2pdm5d7T.js";import"./index-8mCCCrtj.js";import"./index-swnplGbx.js";import"./index-AoowuF6j.js";import"./index-2ihZSkad.js";import"./portal-DnDmgWrA.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-B3WI7AqC.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-DODAe1Af.js";import"./scale-fade-B70jfWAg.js";import"./index-Bbp3WuCW.js";import"./index-iqP3Qh_g.js";import"./select-D8Sm63Mk.js";import"./select-list-C94BFRlV.js";import"./index-tjcNNcsH.js";import"./icon-DIzRaLo1.js";import"./popover-trigger-lFjT6k2t.js";import"./close-button-DYk-GqDy.js";import"./use-ripple-DqSHYmP8.js";import"./index-kCrJIFe4.js";import"./index-qZwaV1-B.js";import"./index-rMDCi0HR.js";import"./tiny-invariant-CopsF_GD.js";import"./index-BhKcopM4.js";import"./use-css-CgehdxcN.js";var Ie=pe({chartName:"BarChart",GraphicalChild:oe,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:se},{axisType:"yAxis",AxisComp:ie}],formatAxisMap:me});const _e=({type:o="default",cell:s=De,data:t,fillOpacity:r=1,layoutType:i="horizontal",series:p,styles:d,syncId:g,xAxisLabel:C,yAxisLabel:M,referenceLineProps:y=[],...k})=>{const P=n.useId(),{theme:l}=we(),[B,Ta]=n.useState(null),D=o==="stacked"||o==="percent",G=B!==null,{activeBar:f={},background:N={},dimBar:z,...W}=k.barProps??{},O=n.useMemo(()=>p.map(({color:c},u)=>({name:`bar-${u}`,token:"colors",value:c??"transparent"})),[p]),X=n.useMemo(()=>y.map(({color:c},u)=>({name:`reference-line-${u}`,token:"colors",value:c??"transparent"})),[y]),Y=n.useMemo(()=>[...O,...X,{name:"fill-opacity",value:r}],[O,r,X]),[$,J]=n.useMemo(()=>{const c={barGap:8,...k.chartProps};return x([c,ce],d.chart)(l)},[k.chartProps,d.chart,l]),[H,R]=n.useMemo(()=>{const c={fillOpacity:"$fill-opacity",strokeOpacity:1,...W};return x([c,L],d.bar)(l)},[W,d.bar,l]),[E,U]=n.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...z};return x([c,L])(l)},[z,l]),[q,Q]=n.useMemo(()=>x([f,L],d.activeBar)(l),[f,d.activeBar,l]),[K,Z]=n.useMemo(()=>x([N,L],d.background)(l),[N,d.background,l]),aa=n.useMemo(()=>p.map((c,u)=>{const{activeBar:h={},background:w={},dataKey:b,dimBar:S={},...F}=c,j=`${P}-${b}`,A=Se(`bar-${u}`)(l),v=G&&B!==b,T={...E,...S},Ba={...H,...F,...v?T:{}},fa=x([Ba,L],R,v?U:void 0)(l,!0),Ja={...q,...h},Va=x([Ja,L],Q)(l,!0),Fa={...K,...w},ja=x([Fa,L],Z)(l,!0);return{...fa,id:j,activeBar:Va,background:ja,color:A,dataKey:b}}),[Q,q,Z,K,R,H,U,E,B,p,G,l,P]),V=n.useCallback(({className:c,index:u,...h},w=null)=>{const{id:b,className:S,activeBar:F,background:j,color:A,dataKey:v="",...T}=aa[u]??{};return{id:b,ref:w,name:v,className:Da(c,S),activeBar:F,background:j,dataKey:v,fill:A,isAnimationActive:!1,stackId:D?"stack":void 0,stroke:A,...h,...T}},[aa,D]),ka=n.useMemo(()=>{const c=p.some(u=>u.stackId);return p.map((u,h)=>{const{dataKey:w}=u;return a.jsx(oe,{...V({className:"ui-bar-chart__bar",index:h}),children:t.map((b,S)=>Le(s,{data:b,hasStack:c,index:S,series:u}))},`bar-${w}`)})},[p,V,s,t]),Pa=n.useCallback(({className:c,...u}={},h=null)=>({ref:h,className:Da(c,J),data:t,layout:i,margin:{bottom:C?30:void 0,left:M?10:void 0,right:M?5:void 0},stackOffset:o==="percent"?"expand":void 0,syncId:g,...u,...$}),[J,t,o,i,g,C,M,$]);return{bars:ka,barVars:Y,setHighlightedArea:Ta,getBarChartProps:Pa,getBarProps:V}},De=({data:o,hasStack:s,index:t,series:r})=>{const{dataKey:i}=r,p=`cell-${i}-${t}`;if(!s)return a.jsx(Ia,{},p);const d=Object.keys(o),g=Object.values(o),C=d.findIndex(y=>y===i),M=g.findLastIndex(y=>y!==0);return C===M?a.jsx(Ia,{},p):a.jsx(Ia,{radius:0},p)},m=Be((o,s)=>{const[t,r]=fe("BarChart",o),{type:i="default",className:p,cell:d,data:g,dataKey:C,fillOpacity:M,gridAxis:y,labelFormatter:k,layoutType:P,series:l,strokeDasharray:B,syncId:Ta,tickLine:D,tooltipAnimationDuration:G,unit:f,valueFormatter:N,withLegend:z=!1,withTooltip:W=!0,withXAxis:O,withYAxis:X,xAxisLabel:Y,xAxisTickFormatter:$,yAxisLabel:J,yAxisTickFormatter:H,barProps:R,chartProps:E,containerProps:U,gridProps:q,legendProps:Q,referenceLineProps:K=[],tooltipProps:Z,xAxisLabelProps:aa,xAxisProps:V,yAxisLabelProps:ka,yAxisProps:Pa,...c}=ve(r),{bars:u,barVars:h,setHighlightedArea:w,getBarChartProps:b}=_e({type:i,cell:d,data:g,fillOpacity:M,layoutType:P,series:l,styles:t,syncId:Ta,xAxisLabel:Y,yAxisLabel:J,barProps:R,chartProps:E,referenceLineProps:K}),{getContainerProps:S}=le({containerProps:U}),{getXAxisLabelProps:F,getXAxisProps:j,getYAxisLabelProps:A,getYAxisProps:v}=Ae({type:i,dataKey:C,gridAxis:y,layoutType:P,styles:t,tickLine:D,unit:f,withXAxis:O,withYAxis:X,xAxisLabel:Y,xAxisTickFormatter:$,yAxisLabel:J,yAxisTickFormatter:H,xAxisLabelProps:aa,xAxisProps:V,yAxisLabelProps:ka,yAxisProps:Pa}),{getReferenceLineProps:T}=Te({styles:t,referenceLineProps:K}),{getGridProps:Ba}=ke({gridAxis:y,strokeDasharray:B,styles:t,gridProps:q}),{getTooltipProps:fa,tooltipProps:Ja}=de({styles:t,tooltipAnimationDuration:G,tooltipProps:Z}),{getLegendProps:Va,legendProps:Fa}=ue({legendProps:Q}),ja=n.useMemo(()=>K.map((ra,ea)=>a.jsx(ye,{...T({className:"ui-bar-chart__reference-line",index:ea})},`referenceLine-${ea}`)),[T,K]);return a.jsx(he,{value:{styles:t},children:a.jsx(Ce.div,{ref:s,className:Da("ui-bar-chart",p),__css:{maxW:"full",vars:h,...t.container},...c,children:a.jsx(be,{...S({className:"ui-bar-chart__container"}),children:a.jsxs(Ie,{...b({className:"ui-bar-chart__chart"}),children:[a.jsx(Pe,{...Ba({className:"ui-bar-chart__grid"})}),a.jsx(se,{...j({className:"ui-bar-chart__x-axis"}),children:a.jsx(Na,{...F({className:"ui-bar-chart__x-axis-label"})})}),a.jsx(ie,{...v({className:"ui-bar-chart__y-axis"}),children:a.jsx(Na,{...A({className:"ui-bar-chart__y-axis-label"})})}),z?a.jsx(ge,{content:({payload:ra})=>a.jsx(xe,{className:"ui-bar-chart__legend",payload:ra,onHighlight:w,...Fa}),...Va()}):null,W?a.jsx(Me,{content:({label:ra,payload:ea})=>a.jsx(Ke,{className:"ui-bar-chart__tooltip",label:ra,labelFormatter:k,payload:ea,unit:f,valueFormatter:N,...Ja}),...fa()}):null,u,ja]})})})})});m.displayName="BarChart";m.__ui__="BarChart";const zn={component:m,title:"Components / Data Display / BarChart"},e=()=>Math.floor(Math.random()*4001)+1e3,na=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},ta=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({Laptops:e(),month:p,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]),[t,r]=n.useState({type:"default",data:o,dataKey:"month",fillOpacity:1,gridAxis:"x",layoutType:"horizontal",series:s,strokeDasharray:"5 5",strokeWidth:2,tickLine:"y",tooltipAnimationDuration:0,withLegend:!1,withTooltip:!0,withXAxis:!0,withYAxis:!0});return a.jsxs(_,{alignItems:"flex-start",gap:"md",children:[a.jsx(m,{...t}),a.jsxs(_,{gap:"md",children:[a.jsxs(Ga,{w:"auto",children:[a.jsx(I,{component:"Select",items:[{defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],label:"Chart type",value:t.type,onChange:i=>{r(p=>({...p,type:i}))}},{defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],label:"Layout type",value:t.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),a.jsx(I,{component:"SegmentedControl",items:[{items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],label:"Tick line",value:t.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],label:"Grid axis",value:t.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(Ga,{w:"auto",children:[a.jsx(I,{component:"Slider",items:[{label:"Fill opacity",max:1,min:0,step:.1,value:t.fillOpacity,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",max:2e3,min:0,value:t.tooltipAnimationDuration,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(_,{alignItems:"flex-start",gap:"md",children:a.jsx(I,{component:"Switch",items:[{isChecked:t.withXAxis,label:"x axis",onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{isChecked:t.withYAxis,label:"y axis",onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{isChecked:t.withLegend,label:"legend",onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{isChecked:t.withTooltip,label:"tooltip",onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},oa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{size:"sm",data:o,dataKey:"month",series:s}),a.jsx(m,{size:"md",data:o,dataKey:"month",series:s}),a.jsx(m,{size:"lg",data:o,dataKey:"month",series:s}),a.jsx(m,{size:"full",data:o,dataKey:"month",series:s})]})},sa=()=>{const o=n.useMemo(()=>{const t=["January","February","March","April","May","June"];return[t.map(r=>({month:r,Smartphones:e()})),t.map(r=>({Laptops:e(),month:r}))]},[]),s=n.useMemo(()=>[[{color:["primary.500","primary.400"],dataKey:"Smartphones"}],[{color:["secondary.500","secondary.400"],dataKey:"Laptops"}]],[]);return a.jsxs(Ga,{children:[a.jsx(m,{data:o[0],dataKey:"month",series:s[0],syncId:"syncId"}),a.jsx(m,{data:o[1],dataKey:"month",series:s[1],syncId:"syncId"})]})},ia=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,referenceLineProps:[{color:"red.500",label:"x line",y:3e3},{label:"y line",x:"Page F"}]})},pa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,withLegend:!0})},ma=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,valueFormatter:t=>t.toLocaleString()})},ca=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,xAxisTickFormatter:t=>t.toUpperCase()})},la=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,yAxisTickFormatter:t=>t.toLocaleString()})},da=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",labelFormatter:t=>t.toLocaleString(),series:s})},ua=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",gridAxis:"xy",series:s,strokeDasharray:"15 15"})},ya=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",fillOpacity:[.8,.7],series:s})},ha=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,unit:"views",yAxisProps:{width:75}})},ba=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,xAxisLabel:"date",yAxisLabel:"view"})},ga=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones",stackId:"a"},{color:["secondary.500","secondary.400"],dataKey:"Laptops",stackId:"a"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},xa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({Laptops:e(),month:p,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones",stackId:"a"},{color:["secondary.500","secondary.400"],dataKey:"Laptops",stackId:"a"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]),[t,r]=n.useState({barCategoryGap:10,barGap:4});return a.jsxs(_,{alignItems:"flex-start",gap:"md",children:[a.jsx(m,{data:o,dataKey:"month",series:s,chartProps:t}),a.jsx(_,{w:"auto",children:a.jsx(I,{component:"Slider",items:[{label:"Bar Gap",max:50,min:0,step:1,value:t.barGap,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",max:50,min:0,step:1,value:t.barCategoryGap,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},Ma=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[e(),e()]})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},Ka=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones",radius:[12,12,0,0]},{color:["secondary.500","secondary.400"],dataKey:"Laptops"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},wa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e()})),[]),s=n.useMemo(()=>[{background:{fill:["blackAlpha.300","whiteAlpha.300"],radius:10,stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1},color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},Sa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,tickLine:"xy",xAxisProps:{color:["red.500","red.500"],orientation:"top",padding:{left:30,right:30},tickMargin:15},yAxisProps:{domain:[0,15e3],orientation:"right",tickMargin:15}})},va=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:e()})),[]),s=n.useMemo(()=>[{activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]},color:["primary.500","primary.400"],dataKey:"Smartphones"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s})},La=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(i=>({Laptops:e(),month:i,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]),t=r=>{const{label:i,payload:p}=r;return p?a.jsxs(Ve,{colorScheme:"gray",variant:"subtle",children:[a.jsx(Fe,{children:a.jsx(_a,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(je,{gap:"sm",children:p.map((d,g)=>a.jsxs(Je,{justifyContent:"space-between",w:"full",children:[a.jsx(_a,{children:d.name}),a.jsx(_a,{color:d.color,children:d.value})]},`payload-${g}`))})]}):null};return a.jsx(m,{data:o,dataKey:"month",series:s,tooltipProps:{content:t}})},Ca=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeDasharray:"5 5",strokeWidth:1}}})},Aa=()=>{const o=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({Laptops:e(),month:r,Smartphones:e(),Tablets:e()})),[]),s=n.useMemo(()=>[{color:["primary.500","primary.400"],dataKey:"Smartphones"},{color:["secondary.500","secondary.400"],dataKey:"Laptops"},{color:["warning.500","warning.400"],dataKey:"Tablets"}],[]);return a.jsx(m,{data:o,dataKey:"month",series:s,withLegend:!0,legendProps:{mb:"0",mt:"4",verticalAlign:"bottom"}})};var za,Wa,Oa;na.parameters={...na.parameters,docs:{...(za=na.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(Oa=(Wa=na.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.source}}};var Xa,Ya,$a;ta.parameters={...ta.parameters,docs:{...(Xa=ta.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  const [props, setProps] = useState<BarChartProps>({
    type: "default",
    data: data,
    dataKey: "month",
    fillOpacity: 1,
    gridAxis: "x",
    layoutType: "horizontal",
    series: series,
    strokeDasharray: "5 5",
    strokeWidth: 2,
    tickLine: "y",
    tooltipAnimationDuration: 0,
    withLegend: false,
    withTooltip: true,
    withXAxis: true,
    withYAxis: true
  });
  return <Wrap alignItems="flex-start" gap="md">
      <BarChart {...props} />

      <Wrap gap="md">
        <VStack w="auto">
          <PropControl component="Select" items={[{
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
          label: "Chart type",
          value: props.type,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              type: value as BarChartType
            }));
          }
        }, {
          defaultValue: "horizontal",
          items: [{
            label: "horizontal",
            value: "horizontal"
          }, {
            label: "vertical",
            value: "vertical"
          }],
          label: "Layout type",
          value: props.layoutType,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              layoutType: value as ChartLayoutType
            }));
          }
        }]} />

          <PropControl component="SegmentedControl" items={[{
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
          label: "Tick line",
          value: props.tickLine,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tickLine: value as ChartAxisType
            }));
          }
        }, {
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
          label: "Grid axis",
          value: props.gridAxis,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              gridAxis: value as ChartAxisType
            }));
          }
        }]} />
        </VStack>

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Fill opacity",
          max: 1,
          min: 0,
          step: 0.1,
          value: props.fillOpacity as number,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              fillOpacity: value
            }));
          }
        }, {
          label: "Tooltip animation duration",
          max: 2000,
          min: 0,
          value: props.tooltipAnimationDuration,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipAnimationDuration: value
            }));
          }
        }]} />

          <Wrap alignItems="flex-start" gap="md">
            <PropControl component="Switch" items={[{
            isChecked: props.withXAxis,
            label: "x axis",
            onChange: () => setProps(prev => ({
              ...prev,
              withXAxis: !prev.withXAxis
            }))
          }, {
            isChecked: props.withYAxis,
            label: "y axis",
            onChange: () => setProps(prev => ({
              ...prev,
              withYAxis: !prev.withYAxis
            }))
          }, {
            isChecked: props.withLegend,
            label: "legend",
            onChange: () => setProps(prev => ({
              ...prev,
              withLegend: !prev.withLegend
            }))
          }, {
            isChecked: props.withTooltip,
            label: "tooltip",
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
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <>
      <BarChart size="sm" data={data} dataKey="month" series={series} />
      <BarChart size="md" data={data} dataKey="month" series={series} />
      <BarChart size="lg" data={data} dataKey="month" series={series} />
      <BarChart size="full" data={data} dataKey="month" series={series} />
    </>;
}`,...(Ea=(Ra=oa.parameters)==null?void 0:Ra.docs)==null?void 0:Ea.source}}};var Ua,qa,Qa;sa.parameters={...sa.parameters,docs:{...(Ua=sa.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return [months.map(month => ({
      month,
      Smartphones: randomValue()
    })), months.map(month => ({
      Laptops: randomValue(),
      month
    }))];
  }, []);
  const series: BarProps[][] = useMemo(() => [[{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }], [{
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }]], []);
  return <VStack>
      <BarChart data={data[0]!} dataKey="month" series={series[0]!} syncId="syncId" />
      <BarChart data={data[1]!} dataKey="month" series={series[1]!} syncId="syncId" />
    </VStack>;
}`,...(Qa=(qa=sa.parameters)==null?void 0:qa.docs)==null?void 0:Qa.source}}};var Za,ar,rr;ia.parameters={...ia.parameters,docs:{...(Za=ia.parameters)==null?void 0:Za.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} referenceLineProps={[{
    color: "red.500",
    label: "x line",
    y: 3000
  }, {
    label: "y line",
    x: "Page F"
  }]} />;
}`,...(rr=(ar=ia.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var er,nr,tr;pa.parameters={...pa.parameters,docs:{...(er=pa.parameters)==null?void 0:er.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} withLegend />;
}`,...(tr=(nr=pa.parameters)==null?void 0:nr.docs)==null?void 0:tr.source}}};var or,sr,ir;ma.parameters={...ma.parameters,docs:{...(or=ma.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} valueFormatter={value => value.toLocaleString()} />;
}`,...(ir=(sr=ma.parameters)==null?void 0:sr.docs)==null?void 0:ir.source}}};var pr,mr,cr;ca.parameters={...ca.parameters,docs:{...(pr=ca.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} xAxisTickFormatter={value => value.toUpperCase()} />;
}`,...(cr=(mr=ca.parameters)==null?void 0:mr.docs)==null?void 0:cr.source}}};var lr,dr,ur;la.parameters={...la.parameters,docs:{...(lr=la.parameters)==null?void 0:lr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} yAxisTickFormatter={value => value.toLocaleString()} />;
}`,...(ur=(dr=la.parameters)==null?void 0:dr.docs)==null?void 0:ur.source}}};var yr,hr,br;da.parameters={...da.parameters,docs:{...(yr=da.parameters)==null?void 0:yr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" labelFormatter={value => value.toLocaleString()} series={series} />;
}`,...(br=(hr=da.parameters)==null?void 0:hr.docs)==null?void 0:br.source}}};var gr,xr,Mr;ua.parameters={...ua.parameters,docs:{...(gr=ua.parameters)==null?void 0:gr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" gridAxis="xy" series={series} strokeDasharray="15 15" />;
}`,...(Mr=(xr=ua.parameters)==null?void 0:xr.docs)==null?void 0:Mr.source}}};var Kr,wr,Sr;ya.parameters={...ya.parameters,docs:{...(Kr=ya.parameters)==null?void 0:Kr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" fillOpacity={[0.8, 0.7]} series={series} />;
}`,...(Sr=(wr=ya.parameters)==null?void 0:wr.docs)==null?void 0:Sr.source}}};var vr,Lr,Cr;ha.parameters={...ha.parameters,docs:{...(vr=ha.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} unit="views" yAxisProps={{
    width: 75
  }} />;
}`,...(Cr=(Lr=ha.parameters)==null?void 0:Lr.docs)==null?void 0:Cr.source}}};var Ar,Tr,kr;ba.parameters={...ba.parameters,docs:{...(Ar=ba.parameters)==null?void 0:Ar.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} xAxisLabel="date" yAxisLabel="view" />;
}`,...(kr=(Tr=ba.parameters)==null?void 0:Tr.docs)==null?void 0:kr.source}}};var Pr,Br,fr;ga.parameters={...ga.parameters,docs:{...(Pr=ga.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones",
    stackId: "a"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops",
    stackId: "a"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(fr=(Br=ga.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};var Jr,Vr,Fr;xa.parameters={...xa.parameters,docs:{...(Jr=xa.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones",
    stackId: "a"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops",
    stackId: "a"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  const [props, setProps] = useState({
    barCategoryGap: 10,
    barGap: 4
  });
  return <Wrap alignItems="flex-start" gap="md">
      <BarChart data={data} dataKey="month" series={series} chartProps={props} />

      <Wrap w="auto">
        <PropControl component="Slider" items={[{
        label: "Bar Gap",
        max: 50,
        min: 0,
        step: 1,
        value: props.barGap,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            barGap: value
          }));
        }
      }, {
        label: "Bar Category Gap",
        max: 50,
        min: 0,
        step: 1,
        value: props.barCategoryGap,
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
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(_r=(Ir=Ma.parameters)==null?void 0:Ir.docs)==null?void 0:_r.source}}};var Dr,Gr,Nr;Ka.parameters={...Ka.parameters,docs:{...(Dr=Ka.parameters)==null?void 0:Dr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones",
    radius: [12, 12, 0, 0]
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(Nr=(Gr=Ka.parameters)==null?void 0:Gr.docs)==null?void 0:Nr.source}}};var zr,Wr,Or;wa.parameters={...wa.parameters,docs:{...(zr=wa.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    background: {
      fill: ["blackAlpha.300", "whiteAlpha.300"],
      radius: 10,
      stroke: ["blackAlpha.500", "whiteAlpha.500"],
      strokeWidth: 1
    },
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(Or=(Wr=wa.parameters)==null?void 0:Wr.docs)==null?void 0:Or.source}}};var Xr,Yr,$r;Sa.parameters={...Sa.parameters,docs:{...(Xr=Sa.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} tickLine="xy" xAxisProps={{
    color: ["red.500", "red.500"],
    orientation: "top",
    padding: {
      left: 30,
      right: 30
    },
    tickMargin: 15
  }} yAxisProps={{
    domain: [0, 15000],
    orientation: "right",
    tickMargin: 15
  }} />;
}`,...($r=(Yr=Sa.parameters)==null?void 0:Yr.docs)==null?void 0:$r.source}}};var Hr,Rr,Er;va.parameters={...va.parameters,docs:{...(Hr=va.parameters)==null?void 0:Hr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      month,
      Smartphones: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    activeBar: {
      fill: ["secondary.500", "secondary.400"],
      stroke: ["secondary.500", "secondary.400"]
    },
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} />;
}`,...(Er=(Rr=va.parameters)==null?void 0:Rr.docs)==null?void 0:Er.source}}};var Ur,qr,Qr;La.parameters={...La.parameters,docs:{...(Ur=La.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
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
    return <Card colorScheme="gray" variant="subtle">
        <CardHeader>
          <Text fontSize="lg" fontWeight="semibold">
            {label}
          </Text>
        </CardHeader>

        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} justifyContent="space-between" w="full">
              <Text>{value.name}</Text>
              <Text color={value.color}>{value.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <BarChart data={data} dataKey="month" series={series} tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(Qr=(qr=La.parameters)==null?void 0:qr.docs)==null?void 0:Qr.source}}};var Zr,ae,re;Ca.parameters={...Ca.parameters,docs:{...(Zr=Ca.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} tooltipProps={{
    cursor: {
      fill: ["primary.100", "primary.950"],
      stroke: ["secondary.300", "secondary.700"],
      strokeDasharray: "5 5",
      strokeWidth: 1
    }
  }} />;
}`,...(re=(ae=Ca.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ee,ne,te;Aa.parameters={...Aa.parameters,docs:{...(ee=Aa.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const data = useMemo(() => {
    const months = ["January", "February", "March", "April", "May", "June"];
    return months.map(month => ({
      Laptops: randomValue(),
      month,
      Smartphones: randomValue(),
      Tablets: randomValue()
    }));
  }, []);
  const series: BarProps[] = useMemo(() => [{
    color: ["primary.500", "primary.400"],
    dataKey: "Smartphones"
  }, {
    color: ["secondary.500", "secondary.400"],
    dataKey: "Laptops"
  }, {
    color: ["warning.500", "warning.400"],
    dataKey: "Tablets"
  }], []);
  return <BarChart data={data} dataKey="month" series={series} withLegend legendProps={{
    mb: "0",
    mt: "4",
    verticalAlign: "bottom"
  }} />;
}`,...(te=(ne=Aa.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Wn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withXAxisTickFormatter","withYAxisTickFormatter","withLabelFormatter","withStrokeDasharray","withFillOpacity","withUnit","withAxisLabel","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Wn as __namedExportsOrder,na as basic,ta as custom,va as customActiveBar,Sa as customAxis,wa as customBackground,Ka as customBar,Ca as customCursor,Aa as customLegend,La as customTooltip,zn as default,ga as useMixData,Ma as useRangeData,ba as withAxisLabel,ya as withFillOpacity,xa as withGap,da as withLabelFormatter,pa as withLegend,ia as withReferenceLine,oa as withSize,ua as withStrokeDasharray,sa as withSync,ha as withUnit,ma as withValueFormatter,ca as withXAxisTickFormatter,la as withYAxisTickFormatter};
