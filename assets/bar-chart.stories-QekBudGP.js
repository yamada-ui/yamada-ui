import{j as a}from"./jsx-runtime-Nms4Y4qS.js";import{r as e}from"./index-BwDkhjyp.js";import{P as G}from"./components-FNe2OWsV.js";import{g as Hr,B as Or,f as Rr,h as g,i as $r,j as S,u as Er,a as Ur,b as qr,k as Qr,c as Zr,R as ae,l as Va,L as re,d as ee,T as ne,e as te}from"./use-chart-tooltip-BLcrMrfD.js";import{u as oe,o as se}from"./theme-provider-DwNsBv-g.js";import{c as fa,b as ie}from"./factory-CtEVzbYf.js";import{X as Xr,Y as Yr,u as pe,a as me,b as ce,C as le}from"./use-chart-reference-line-xaHMnngH.js";import{f as de}from"./forward-ref-BmTAT9U5.js";import{a as ue}from"./use-component-style-D3qgkwVB.js";import{W as I}from"./flex--8sdKDgM.js";import{V as Ja,H as ye}from"./stack-C7XG3IUB.js";import{C as he,a as be,b as ge}from"./card-BO2D41En.js";import{T as Ba}from"./text-Qrm_BZjp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFefAklC.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-CVrXeRvs.js";import"./index-BH89NuV_.js";import"./motion-Y1F55cL9.js";import"./loading-provider-VhzgdbKu.js";import"./index-D5xNZpPq.js";import"./Combination-CONbhR2A.js";import"./loading-k_S2O4S_.js";import"./icon-DBsGF4uC.js";import"./index-DXbYvzpO.js";import"./motion-BkrKHA2r.js";import"./index-DGf9HWvz.js";import"./container-portal-L5A7yTqF.js";import"./index-B8XB3FuZ.js";import"./notice-xTxcRRx6.js";import"./alert-Bseh01mv.js";import"./close-button-J6wxUJLK.js";import"./use-ripple-CSL3XTH4.js";import"./container-CWrAVThj.js";import"./box-Dp44rSxf.js";import"./checkbox-f3K8qtAd.js";import"./index-BIU3i3r0.js";import"./index-fvg_gLDB.js";import"./form-control-v7wnzt3v.js";import"./index-NOySenzF.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DgKavlYQ.js";import"./index-DvH-Nylt.js";import"./index-ChJj91-k.js";import"./index-DgakmGlb.js";import"./index-DMsqADb0.js";import"./index-TPq6y0l-.js";import"./slide-fade-DfDhQgVJ.js";import"./utils-CaOb0Y6o.js";import"./scale-fade-CTXvONpm.js";import"./index-DsEil29M.js";import"./index-ByJgBht4.js";import"./select-BY8MjBoB.js";import"./option-SEY6h2C2.js";import"./index-CXXWvYyT.js";import"./popover-content-UjB2tYau.js";import"./index-B5DGAwAw.js";import"./index-Du0-7Fls.js";import"./index-CcUROoY5.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-CHzYYTf_.js";import"./extends-CF3RwP-h.js";var xe=Hr({chartName:"BarChart",GraphicalChild:Or,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:Xr},{axisType:"yAxis",AxisComp:Yr}],formatAxisMap:Rr});const Me=({data:s,series:t,type:o="default",layoutType:r="horizontal",referenceLineProps:i=[],fillOpacity:p=1,syncId:d,xAxisLabel:x,yAxisLabel:v,styles:u,...L})=>{const D=e.useId(),{theme:l}=oe(),[A,Sa]=e.useState(null),T=o==="stacked"||o==="percent",P=A!==null,{activeBar:N={},background:z={},dimBar:k,...W}=L.barProps??{},O=e.useMemo(()=>t.map(({color:c},y)=>({__prefix:"ui",name:`bar-${y}`,token:"colors",value:c??"transparent"})),[t]),X=e.useMemo(()=>i.map(({color:c},y)=>({__prefix:"ui",name:`reference-line-${y}`,token:"colors",value:c??"transparent"})),[i]),Y=e.useMemo(()=>[...O,...X,{__prefix:"ui",name:"fill-opacity",value:p}],[O,p,X]),[B,H]=e.useMemo(()=>{const c={barGap:8,...L.chartProps};return g([c,$r],u.chart)(l)},[L.chartProps,u.chart,l]),[R,$]=e.useMemo(()=>{const c={fillOpacity:"var(--ui-fill-opacity)",strokeOpacity:1,...W};return g([c,S],u.bar)(l)},[W,u.bar,l]),[E,M]=e.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...k};return g([c,S])(l)},[k,l]),[U,q]=e.useMemo(()=>g([N,S],u.activeBar)(l),[N,u.activeBar,l]),[Q,Z]=e.useMemo(()=>g([z,S],u.background)(l),[z,u.background,l]),aa=e.useMemo(()=>t.map((c,y)=>{const{dataKey:h,activeBar:f={},background:J={},dimBar:V={},...j}=c,F=`${D}-${h}`,K=`var(--ui-bar-${y})`,w=P&&A!==h,_={...E,...V},La={...R,...j,...w?_:{}},Aa=g([La,S],$,w?M:void 0)(l,!0),Ta={...U,...f},Pa=g([Ta,S],q)(l,!0),ka={...Q,...J},b=g([ka,S],Z)(l,!0);return{...Aa,id:F,activeBar:Pa,background:b,color:K,dataKey:h}}),[q,U,Z,Q,$,R,M,E,A,t,P,l,D]),Ca=e.useCallback(({index:c,className:y,...h},f=null)=>{const{id:J,className:V,activeBar:j,background:F,color:K,dataKey:w,..._}=aa[c];return{ref:f,className:fa(y,V),activeBar:j,background:F,id:J,name:w,dataKey:w,fill:K,stroke:K,isAnimationActive:!1,stackId:T?"stack":void 0,...h,..._}},[aa,T]),va=e.useCallback(({className:c,...y}={},h=null)=>({ref:h,className:fa(c,H),data:s,stackOffset:o==="percent"?"expand":void 0,layout:r,syncId:d,margin:{bottom:x?30:void 0,left:v?10:void 0,right:v?5:void 0},...y,...B}),[H,s,o,r,d,x,v,B]);return{barVars:Y,getBarProps:Ca,getBarChartProps:va,setHighlightedArea:Sa}},m=de((s,t)=>{const[o,r]=ue("BarChart",s),{className:i,series:p,dataKey:d,layoutType:x,tickLine:v,gridAxis:u,withXAxis:L,withYAxis:D,barProps:l,xAxisProps:A,yAxisProps:Sa,xAxisLabel:T,yAxisLabel:P,xAxisLabelProps:N,yAxisLabelProps:z,type:k="default",withTooltip:W=!0,withLegend:O=!1,containerProps:X,unit:Y,valueFormatter:B,tooltipProps:H,tooltipAnimationDuration:R,legendProps:$,data:E,referenceLineProps:M=[],gridProps:U,strokeDasharray:q,fillOpacity:Q,chartProps:Z,syncId:aa,...Ca}=se(r),{getBarChartProps:va,getBarProps:c,barVars:y,setHighlightedArea:h}=Me({data:E,series:p,type:k,layoutType:x,chartProps:Z,barProps:l,referenceLineProps:M,fillOpacity:Q,syncId:aa,xAxisLabel:T,yAxisLabel:P,styles:o}),{getContainerProps:f}=Er({containerProps:X}),{getXAxisProps:J,getYAxisProps:V,getXAxisLabelProps:j,getYAxisLabelProps:F}=pe({dataKey:d,type:k,layoutType:x,tickLine:v,gridAxis:u,withXAxis:L,withYAxis:D,xAxisProps:A,yAxisProps:Sa,xAxisLabel:T,yAxisLabel:P,xAxisLabelProps:N,yAxisLabelProps:z,unit:Y,valueFormatter:B,styles:o}),{getReferenceLineProps:K}=me({referenceLineProps:M,styles:o}),{getGridProps:w}=ce({gridProps:U,gridAxis:u,strokeDasharray:q,styles:o}),{tooltipProps:_,getTooltipProps:La}=Ur({tooltipProps:H,tooltipAnimationDuration:R,styles:o}),{legendProps:Aa,getLegendProps:Ta}=qr({legendProps:$}),Pa=e.useMemo(()=>p.map(({dataKey:b},C)=>a.jsx(Or,{...c({index:C,className:"ui-bar-chart__bar"})},`bar-${b}`)),[c,p]),ka=e.useMemo(()=>M.map((b,C)=>a.jsx(Qr,{...K({index:C,className:"ui-bar-chart__reference-line"})},`referenceLine-${C}`)),[K,M]);return a.jsx(Zr,{value:{styles:o},children:a.jsx(ie.div,{ref:t,className:fa("ui-bar-chart",i),var:y,__css:{maxW:"full",...o.container},...Ca,children:a.jsx(ae,{...f({className:"ui-bar-chart__container"}),children:a.jsxs(xe,{...va({className:"ui-bar-chart__chart"}),children:[a.jsx(le,{...w({className:"ui-bar-chart__grid"})}),a.jsx(Xr,{...J({className:"ui-bar-chart__x-axis"}),children:a.jsx(Va,{...j({className:"ui-bar-chart__x-axis-label"})})}),a.jsx(Yr,{...V({className:"ui-bar-chart__y-axis"}),children:a.jsx(Va,{...F({className:"ui-bar-chart__y-axis-label"})})}),O?a.jsx(re,{content:({payload:b})=>a.jsx(ee,{className:"ui-bar-chart__legend",payload:b,onHighlight:h,...Aa}),...Ta()}):null,W?a.jsx(ne,{content:({label:b,payload:C})=>a.jsx(te,{className:"ui-bar-chart__tooltip",label:b,payload:C,valueFormatter:B,unit:Y,..._}),...La()}):null,Pa,ka]})})})})}),_n={title:"Components / Feedback / BarChart",component:m},n=()=>Math.floor(Math.random()*4001)+1e3,ra=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ea=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[o,r]=e.useState({data:s,series:t,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return a.jsxs(I,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{...o}),a.jsxs(I,{gap:"md",children:[a.jsxs(Ja,{w:"auto",children:[a.jsx(G,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:o.type,onChange:i=>{r(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:o.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),a.jsx(G,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:o.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:o.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),a.jsxs(Ja,{w:"auto",children:[a.jsx(G,{component:"Slider",items:[{label:"Fill opacity",value:o.fillOpacity,min:0,max:1,step:.1,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:o.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),a.jsx(I,{gap:"md",alignItems:"flex-start",children:a.jsx(G,{component:"Switch",items:[{label:"x axis",isChecked:o.withXAxis,onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:o.withYAxis,onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:o.withLegend,onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:o.withTooltip,onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},na=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsxs(a.Fragment,{children:[a.jsx(m,{data:s,series:t,dataKey:"month",size:"sm"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"md"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"lg"}),a.jsx(m,{data:s,series:t,dataKey:"month",size:"full"})]})},ta=()=>{const s=e.useMemo(()=>{const o=["January","February","March","April","May","June"];return[o.map(r=>({month:r,Smartphones:n()})),o.map(r=>({month:r,Laptops:n()}))]},[]),t=e.useMemo(()=>[[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}]],[]);return a.jsxs(Ja,{children:[a.jsx(m,{data:s[0],series:t[0],dataKey:"month",syncId:"syncId"}),a.jsx(m,{data:s[1],series:t[1],dataKey:"month",syncId:"syncId"})]})},oa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},sa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",withLegend:!0})},ia=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",valueFormatter:o=>o.toLocaleString()})},pa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ma=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",fillOpacity:[.8,.7]})},ca=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",unit:"views",yAxisProps:{width:75}})},la=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",xAxisLabel:"date",yAxisLabel:"view"})},da=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ua=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[o,r]=e.useState({barGap:4,barCategoryGap:10});return a.jsxs(I,{gap:"md",alignItems:"flex-start",children:[a.jsx(m,{data:s,series:t,dataKey:"month",chartProps:o}),a.jsx(I,{w:"auto",children:a.jsx(G,{component:"Slider",items:[{label:"Bar Gap",value:o.barGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:o.barCategoryGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},ya=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[n(),n()]})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ha=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ba=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},ga=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},xa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month"})},Ma=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),o=r=>{const{label:i,payload:p}=r;return p?a.jsxs(he,{variant:"subtle",colorScheme:"gray",children:[a.jsx(be,{children:a.jsx(Ba,{fontSize:"lg",fontWeight:"semibold",children:i})}),a.jsx(ge,{gap:"sm",children:p.map((d,x)=>a.jsxs(ye,{w:"full",justifyContent:"space-between",children:[a.jsx(Ba,{children:d==null?void 0:d.name}),a.jsx(Ba,{color:d==null?void 0:d.color,children:d==null?void 0:d.value})]},`payload-${x}`))})]}):null};return a.jsx(m,{data:s,series:t,dataKey:"month",tooltipProps:{content:o}})},Ka=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},wa=()=>{const s=e.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:n(),Laptops:n(),Tablets:n()})),[]),t=e.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return a.jsx(m,{data:s,series:t,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var ja,Fa,_a;ra.parameters={...ra.parameters,docs:{...(ja=ra.parameters)==null?void 0:ja.docs,source:{originalSource:`() => {
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
}`,...(_a=(Fa=ra.parameters)==null?void 0:Fa.docs)==null?void 0:_a.source}}};var Ga,Ia,Da;ea.parameters={...ea.parameters,docs:{...(Ga=ea.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
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
}`,...(Da=(Ia=ea.parameters)==null?void 0:Ia.docs)==null?void 0:Da.source}}};var Na,za,Wa;na.parameters={...na.parameters,docs:{...(Na=na.parameters)==null?void 0:Na.docs,source:{originalSource:`() => {
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
}`,...(Wa=(za=na.parameters)==null?void 0:za.docs)==null?void 0:Wa.source}}};var Oa,Xa,Ya;ta.parameters={...ta.parameters,docs:{...(Oa=ta.parameters)==null?void 0:Oa.docs,source:{originalSource:`() => {
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
}`,...(Ya=(Xa=ta.parameters)==null?void 0:Xa.docs)==null?void 0:Ya.source}}};var Ha,Ra,$a;oa.parameters={...oa.parameters,docs:{...(Ha=oa.parameters)==null?void 0:Ha.docs,source:{originalSource:`() => {
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
}`,...($a=(Ra=oa.parameters)==null?void 0:Ra.docs)==null?void 0:$a.source}}};var Ea,Ua,qa;sa.parameters={...sa.parameters,docs:{...(Ea=sa.parameters)==null?void 0:Ea.docs,source:{originalSource:`() => {
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
}`,...(qa=(Ua=sa.parameters)==null?void 0:Ua.docs)==null?void 0:qa.source}}};var Qa,Za,ar;ia.parameters={...ia.parameters,docs:{...(Qa=ia.parameters)==null?void 0:Qa.docs,source:{originalSource:`() => {
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
}`,...(ar=(Za=ia.parameters)==null?void 0:Za.docs)==null?void 0:ar.source}}};var rr,er,nr;pa.parameters={...pa.parameters,docs:{...(rr=pa.parameters)==null?void 0:rr.docs,source:{originalSource:`() => {
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
}`,...(nr=(er=pa.parameters)==null?void 0:er.docs)==null?void 0:nr.source}}};var tr,or,sr;ma.parameters={...ma.parameters,docs:{...(tr=ma.parameters)==null?void 0:tr.docs,source:{originalSource:`() => {
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
}`,...(sr=(or=ma.parameters)==null?void 0:or.docs)==null?void 0:sr.source}}};var ir,pr,mr;ca.parameters={...ca.parameters,docs:{...(ir=ca.parameters)==null?void 0:ir.docs,source:{originalSource:`() => {
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
}`,...(mr=(pr=ca.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};var cr,lr,dr;la.parameters={...la.parameters,docs:{...(cr=la.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
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
}`,...(dr=(lr=la.parameters)==null?void 0:lr.docs)==null?void 0:dr.source}}};var ur,yr,hr;da.parameters={...da.parameters,docs:{...(ur=da.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
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
}`,...(hr=(yr=da.parameters)==null?void 0:yr.docs)==null?void 0:hr.source}}};var br,gr,xr;ua.parameters={...ua.parameters,docs:{...(br=ua.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
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
}`,...(xr=(gr=ua.parameters)==null?void 0:gr.docs)==null?void 0:xr.source}}};var Mr,Kr,wr;ya.parameters={...ya.parameters,docs:{...(Mr=ya.parameters)==null?void 0:Mr.docs,source:{originalSource:`() => {
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
}`,...(wr=(Kr=ya.parameters)==null?void 0:Kr.docs)==null?void 0:wr.source}}};var Sr,Cr,vr;ha.parameters={...ha.parameters,docs:{...(Sr=ha.parameters)==null?void 0:Sr.docs,source:{originalSource:`() => {
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
}`,...(vr=(Cr=ha.parameters)==null?void 0:Cr.docs)==null?void 0:vr.source}}};var Lr,Ar,Tr;ba.parameters={...ba.parameters,docs:{...(Lr=ba.parameters)==null?void 0:Lr.docs,source:{originalSource:`() => {
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
}`,...(Tr=(Ar=ba.parameters)==null?void 0:Ar.docs)==null?void 0:Tr.source}}};var Pr,kr,Br;ga.parameters={...ga.parameters,docs:{...(Pr=ga.parameters)==null?void 0:Pr.docs,source:{originalSource:`() => {
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
}`,...(Br=(kr=ga.parameters)==null?void 0:kr.docs)==null?void 0:Br.source}}};var fr,Jr,Vr;xa.parameters={...xa.parameters,docs:{...(fr=xa.parameters)==null?void 0:fr.docs,source:{originalSource:`() => {
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
}`,...(Vr=(Jr=xa.parameters)==null?void 0:Jr.docs)==null?void 0:Vr.source}}};var jr,Fr,_r;Ma.parameters={...Ma.parameters,docs:{...(jr=Ma.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(_r=(Fr=Ma.parameters)==null?void 0:Fr.docs)==null?void 0:_r.source}}};var Gr,Ir,Dr;Ka.parameters={...Ka.parameters,docs:{...(Gr=Ka.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Dr=(Ir=Ka.parameters)==null?void 0:Ir.docs)==null?void 0:Dr.source}}};var Nr,zr,Wr;wa.parameters={...wa.parameters,docs:{...(Nr=wa.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
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
}`,...(Wr=(zr=wa.parameters)==null?void 0:zr.docs)==null?void 0:Wr.source}}};const Gn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withStrokeDasharray","withFillOpacity","withUnit","withAxisLabel","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Gn as __namedExportsOrder,ra as basic,ea as custom,xa as customActiveBar,ga as customAxis,ba as customBackground,ha as customBar,Ka as customCursor,wa as customLegend,Ma as customTooltip,_n as default,da as useMixData,ya as useRangeData,la as withAxisLabel,ma as withFillOpacity,ua as withGap,sa as withLegend,oa as withReferenceLine,na as withSize,pa as withStrokeDasharray,ta as withSync,ca as withUnit,ia as withValueFormatter};
