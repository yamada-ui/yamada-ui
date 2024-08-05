import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{P as _}from"./components-DrqHrM2S.js";import{g as ie,B as ee,f as pe,h as b,i as me,j as K,u as ce,a as le,b as de,k as ue,c as ye,R as he,l as Da,L as be,d as ge,T as xe,e as Me}from"./use-chart-tooltip-udK6DiRI.js";import{u as Ke,o as we}from"./theme-provider-CgekAyNK.js";import{c as ja,b as Se}from"./factory-BXeT7qA-.js";import{X as ne,Y as te,u as Le,a as Ce,b as Ae,C as ve}from"./use-chart-reference-line-B1hT0Ttc.js";import{f as Te}from"./forward-ref-BmTAT9U5.js";import{a as Pe}from"./use-component-style-DRlwxZhB.js";import{W as D}from"./flex-28tKwT7e.js";import{V as _a,H as ke}from"./stack-By0izq3K.js";import{C as Be,a as fe,b as Je}from"./card-JQJT2z0g.js";import{T as Fa}from"./text-CkzTM_kh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xf8c1cao.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-C-Ez9bTq.js";import"./index-Cc_yIGoF.js";import"./motion-CcTWI5_V.js";import"./loading-provider-BlDKCDBl.js";import"./index-Dxynqg56.js";import"./Combination-CONbhR2A.js";import"./loading-mQT9J7oF.js";import"./icon-DIrcXz1L.js";import"./index-jt6EZpVS.js";import"./motion-DhpH0FRI.js";import"./index-UcjmprJc.js";import"./container-portal-D_8J7oaj.js";import"./index-DxjWwZXO.js";import"./notice-C0m_B0AJ.js";import"./alert-Bg8_w__7.js";import"./close-button-DV2TJvIJ.js";import"./use-ripple-2cGyX1K8.js";import"./container-2ltlYRD5.js";import"./box-B1h8yYhg.js";import"./checkbox-Dncp1lmg.js";import"./index-CEihWUfX.js";import"./index-Irie4EHF.js";import"./form-control-CqHILFcM.js";import"./index-CXLSpR74.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-AYHfqsqL.js";import"./index-XSAGmtry.js";import"./index-D5OdYTIO.js";import"./index-B0klFHMr.js";import"./index-D5u8eIG7.js";import"./index-BEzKMtfG.js";import"./slide-fade-CTxSPoDC.js";import"./utils-DYgquvih.js";import"./scale-fade-hIdHgWHj.js";import"./index-DBCDrfEK.js";import"./index-PMfx84N2.js";import"./select-DmB-yekh.js";import"./option-CCIYLpqk.js";import"./index-CP_iHTUG.js";import"./popover-content-CR4_9T1h.js";import"./index-BzaPwyBI.js";import"./index-Du0-7Fls.js";import"./index-XokATsxS.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-c3TJijBM.js";import"./extends-CF3RwP-h.js";var Ve=ie({chartName:"BarChart",GraphicalChild:ee,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:ne},{axisType:"yAxis",AxisComp:te}],formatAxisMap:pe});const Fe=({data:s,series:o,type:t="default",layoutType:r="horizontal",referenceLineProps:i=[],fillOpacity:p=1,syncId:d,xAxisLabel:g,yAxisLabel:A,styles:u,...v})=>{const G=n.useId(),{theme:l}=Ke(),[T,va]=n.useState(null),P=t==="stacked"||t==="percent",k=T!==null,{activeBar:I={},background:N={},dimBar:B,...z}=v.barProps??{},W=n.useMemo(()=>o.map(({color:c},y)=>({__prefix:"ui",name:`bar-${y}`,token:"colors",value:c??"transparent"})),[o]),O=n.useMemo(()=>i.map(({color:c},y)=>({__prefix:"ui",name:`reference-line-${y}`,token:"colors",value:c??"transparent"})),[i]),X=n.useMemo(()=>[...W,...O,{__prefix:"ui",name:"fill-opacity",value:p}],[W,p,O]),[Y,H]=n.useMemo(()=>{const c={barGap:8,...v.chartProps};return b([c,me],u.chart)(l)},[v.chartProps,u.chart,l]),[R,$]=n.useMemo(()=>{const c={fillOpacity:"var(--ui-fill-opacity)",strokeOpacity:1,...z};return b([c,K],u.bar)(l)},[z,u.bar,l]),[E,U]=n.useMemo(()=>{const c={fillOpacity:.3,strokeOpacity:0,...B};return b([c,K])(l)},[B,l]),[q,Q]=n.useMemo(()=>b([I,K],u.activeBar)(l),[I,u.activeBar,l]),[x,Z]=n.useMemo(()=>b([N,K],u.background)(l),[N,u.background,l]),aa=n.useMemo(()=>o.map((c,y)=>{const{dataKey:h,activeBar:w={},background:f={},dimBar:J={},...V}=c,F=`${G}-${h}`,S=`var(--ui-bar-${y})`,M=k&&T!==h,j={...E,...J},ra={...R,...V,...M?j:{}},ka=b([ra,K],$,M?U:void 0)(l,!0),Ba={...q,...w},fa=b([Ba,K],Q)(l,!0),Ja={...x,...f},Va=b([Ja,K],Z)(l,!0);return{...ka,id:F,activeBar:fa,background:Va,color:S,dataKey:h}}),[Q,q,Z,x,$,R,U,E,T,o,k,l,G]),Ta=n.useCallback(({index:c,className:y,...h},w=null)=>{const{id:f,className:J,activeBar:V,background:F,color:S,dataKey:M,...j}=aa[c];return{ref:w,className:ja(y,J),activeBar:V,background:F,id:f,name:M,dataKey:M,fill:S,stroke:S,isAnimationActive:!1,stackId:P?"stack":void 0,...h,...j}},[aa,P]),Pa=n.useCallback(({className:c,...y}={},h=null)=>({ref:h,className:ja(c,H),data:s,stackOffset:t==="percent"?"expand":void 0,layout:r,syncId:d,margin:{bottom:g?30:void 0,left:A?10:void 0,right:A?5:void 0},...y,...Y}),[H,s,t,r,d,g,A,Y]);return{barVars:X,getBarProps:Ta,getBarChartProps:Pa,setHighlightedArea:va}},m=Te((s,o)=>{const[t,r]=Pe("BarChart",s),{className:i,series:p,dataKey:d,layoutType:g,tickLine:A,gridAxis:u,withXAxis:v,withYAxis:G,barProps:l,xAxisProps:T,yAxisProps:va,xAxisLabel:P,yAxisLabel:k,xAxisLabelProps:I,yAxisLabelProps:N,type:B="default",withTooltip:z=!0,withLegend:W=!1,containerProps:O,unit:X,yAxisTickFormatter:Y,xAxisTickFormatter:H,valueFormatter:R,labelFormatter:$,tooltipProps:E,tooltipAnimationDuration:U,legendProps:q,data:Q,referenceLineProps:x=[],gridProps:Z,strokeDasharray:aa,fillOpacity:Ta,chartProps:Pa,syncId:c,...y}=we(r),{getBarChartProps:h,getBarProps:w,barVars:f,setHighlightedArea:J}=Fe({data:Q,series:p,type:B,layoutType:g,chartProps:Pa,barProps:l,referenceLineProps:x,fillOpacity:Ta,syncId:c,xAxisLabel:P,yAxisLabel:k,styles:t}),{getContainerProps:V}=ce({containerProps:O}),{getXAxisProps:F,getYAxisProps:S,getXAxisLabelProps:M,getYAxisLabelProps:j}=Le({dataKey:d,type:B,layoutType:g,tickLine:A,gridAxis:u,withXAxis:v,withYAxis:G,xAxisProps:T,yAxisProps:va,xAxisLabel:P,yAxisLabel:k,xAxisLabelProps:I,yAxisLabelProps:N,unit:X,yAxisTickFormatter:Y,xAxisTickFormatter:H,styles:t}),{getReferenceLineProps:ra}=Ce({referenceLineProps:x,styles:t}),{getGridProps:ka}=Ae({gridProps:Z,gridAxis:u,strokeDasharray:aa,styles:t}),{tooltipProps:Ba,getTooltipProps:fa}=le({tooltipProps:E,tooltipAnimationDuration:U,styles:t}),{legendProps:Ja,getLegendProps:Va}=de({legendProps:q}),oe=n.useMemo(()=>p.map(({dataKey:L},C)=>e.jsx(ee,{...w({index:C,className:"ui-bar-chart__bar"})},`bar-${L}`)),[w,p]),se=n.useMemo(()=>x.map((L,C)=>e.jsx(ue,{...ra({index:C,className:"ui-bar-chart__reference-line"})},`referenceLine-${C}`)),[ra,x]);return e.jsx(ye,{value:{styles:t},children:e.jsx(Se.div,{ref:o,className:ja("ui-bar-chart",i),var:f,__css:{maxW:"full",...t.container},...y,children:e.jsx(he,{...V({className:"ui-bar-chart__container"}),children:e.jsxs(Ve,{...h({className:"ui-bar-chart__chart"}),children:[e.jsx(ve,{...ka({className:"ui-bar-chart__grid"})}),e.jsx(ne,{...F({className:"ui-bar-chart__x-axis"}),children:e.jsx(Da,{...M({className:"ui-bar-chart__x-axis-label"})})}),e.jsx(te,{...S({className:"ui-bar-chart__y-axis"}),children:e.jsx(Da,{...j({className:"ui-bar-chart__y-axis-label"})})}),W?e.jsx(be,{content:({payload:L})=>e.jsx(ge,{className:"ui-bar-chart__legend",payload:L,onHighlight:J,...Ja}),...Va()}):null,z?e.jsx(xe,{content:({label:L,payload:C})=>e.jsx(Me,{className:"ui-bar-chart__tooltip",label:L,payload:C,valueFormatter:R,labelFormatter:$,unit:X,...Ba}),...fa()}):null,oe,se]})})})})}),qn={title:"Components / Data Display / BarChart",component:m},a=()=>Math.floor(Math.random()*4001)+1e3,ea=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},na=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=n.useState({data:s,series:o,dataKey:"month",withXAxis:!0,withYAxis:!0,withTooltip:!0,withLegend:!1,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:1,tickLine:"y",strokeDasharray:"5 5",gridAxis:"x",type:"default",layoutType:"horizontal"});return e.jsxs(D,{gap:"md",alignItems:"flex-start",children:[e.jsx(m,{...t}),e.jsxs(D,{gap:"md",children:[e.jsxs(_a,{w:"auto",children:[e.jsx(_,{component:"Select",items:[{label:"Chart type",defaultValue:"default",items:[{label:"default",value:"default"},{label:"stacked",value:"stacked"},{label:"percent",value:"percent"}],value:t.type,onChange:i=>{r(p=>({...p,type:i}))}},{label:"Layout type",defaultValue:"horizontal",items:[{label:"horizontal",value:"horizontal"},{label:"vertical",value:"vertical"}],value:t.layoutType,onChange:i=>{r(p=>({...p,layoutType:i}))}}]}),e.jsx(_,{component:"SegmentedControl",items:[{label:"Tick line",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.tickLine,onChange:i=>{r(p=>({...p,tickLine:i}))}},{label:"Grid axis",items:[{label:"x",value:"x"},{label:"y",value:"y"},{label:"xy",value:"xy"},{label:"none",value:"none"}],value:t.gridAxis,onChange:i=>{r(p=>({...p,gridAxis:i}))}}]})]}),e.jsxs(_a,{w:"auto",children:[e.jsx(_,{component:"Slider",items:[{label:"Fill opacity",value:t.fillOpacity,min:0,max:1,step:.1,onChange:i=>{r(p=>({...p,fillOpacity:i}))}},{label:"Tooltip animation duration",value:t.tooltipAnimationDuration,min:0,max:2e3,onChange:i=>{r(p=>({...p,tooltipAnimationDuration:i}))}}]}),e.jsx(D,{gap:"md",alignItems:"flex-start",children:e.jsx(_,{component:"Switch",items:[{label:"x axis",isChecked:t.withXAxis,onChange:()=>r(i=>({...i,withXAxis:!i.withXAxis}))},{label:"y axis",isChecked:t.withYAxis,onChange:()=>r(i=>({...i,withYAxis:!i.withYAxis}))},{label:"legend",isChecked:t.withLegend,onChange:()=>r(i=>({...i,withLegend:!i.withLegend}))},{label:"tooltip",isChecked:t.withTooltip,onChange:()=>r(i=>({...i,withTooltip:!i.withTooltip}))}]})})]})]})]})},ta=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsxs(e.Fragment,{children:[e.jsx(m,{data:s,series:o,dataKey:"month",size:"sm"}),e.jsx(m,{data:s,series:o,dataKey:"month",size:"md"}),e.jsx(m,{data:s,series:o,dataKey:"month",size:"lg"}),e.jsx(m,{data:s,series:o,dataKey:"month",size:"full"})]})},oa=()=>{const s=n.useMemo(()=>{const t=["January","February","March","April","May","June"];return[t.map(r=>({month:r,Smartphones:a()})),t.map(r=>({month:r,Laptops:a()}))]},[]),o=n.useMemo(()=>[[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[{dataKey:"Laptops",color:["secondary.500","secondary.400"]}]],[]);return e.jsxs(_a,{children:[e.jsx(m,{data:s[0],series:o[0],dataKey:"month",syncId:"syncId"}),e.jsx(m,{data:s[1],series:o[1],dataKey:"month",syncId:"syncId"})]})},sa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",referenceLineProps:[{y:3e3,label:"x line",color:"red.500"},{x:"Page F",label:"y line"}]})},ia=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0})},pa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",valueFormatter:t=>t.toLocaleString()})},ma=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",xAxisTickFormatter:t=>t.toUpperCase()})},ca=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",yAxisTickFormatter:t=>t.toLocaleString()})},la=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",labelFormatter:t=>t.toLocaleString()})},da=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",gridAxis:"xy",strokeDasharray:"15 15"})},ua=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",fillOpacity:[.8,.7]})},ya=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",unit:"views",yAxisProps:{width:75}})},ha=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",xAxisLabel:"date",yAxisLabel:"view"})},ba=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},ga=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(p=>({month:p,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],stackId:"a"},{dataKey:"Laptops",color:["secondary.500","secondary.400"],stackId:"a"},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),[t,r]=n.useState({barGap:4,barCategoryGap:10});return e.jsxs(D,{gap:"md",alignItems:"flex-start",children:[e.jsx(m,{data:s,series:o,dataKey:"month",chartProps:t}),e.jsx(D,{w:"auto",children:e.jsx(_,{component:"Slider",items:[{label:"Bar Gap",value:t.barGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barGap:i}))}},{label:"Bar Category Gap",value:t.barCategoryGap,min:0,max:50,step:1,onChange:i=>{r(p=>({...p,barCategoryGap:i}))}}]})})]})},xa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:[a(),a()]})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},Ma=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],radius:[12,12,0,0]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},Ka=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],background:{fill:["blackAlpha.300","whiteAlpha.300"],stroke:["blackAlpha.500","whiteAlpha.500"],strokeWidth:1,radius:10}},{dataKey:"Laptops",color:["secondary.500","secondary.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},wa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",tickLine:"xy",yAxisProps:{tickMargin:15,orientation:"right",domain:[0,15e3]},xAxisProps:{tickMargin:15,orientation:"top",padding:{left:30,right:30},color:["red.500","red.500"]}})},Sa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"],activeBar:{fill:["secondary.500","secondary.400"],stroke:["secondary.500","secondary.400"]}}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month"})},La=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(i=>({month:i,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]),t=r=>{const{label:i,payload:p}=r;return p?e.jsxs(Be,{variant:"subtle",colorScheme:"gray",children:[e.jsx(fe,{children:e.jsx(Fa,{fontSize:"lg",fontWeight:"semibold",children:i})}),e.jsx(Je,{gap:"sm",children:p.map((d,g)=>e.jsxs(ke,{w:"full",justifyContent:"space-between",children:[e.jsx(Fa,{children:d==null?void 0:d.name}),e.jsx(Fa,{color:d==null?void 0:d.color,children:d==null?void 0:d.value})]},`payload-${g}`))})]}):null};return e.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{content:t}})},Ca=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",tooltipProps:{cursor:{fill:["primary.100","primary.950"],stroke:["secondary.300","secondary.700"],strokeWidth:1,strokeDasharray:"5 5"}}})},Aa=()=>{const s=n.useMemo(()=>["January","February","March","April","May","June"].map(r=>({month:r,Smartphones:a(),Laptops:a(),Tablets:a()})),[]),o=n.useMemo(()=>[{dataKey:"Smartphones",color:["primary.500","primary.400"]},{dataKey:"Laptops",color:["secondary.500","secondary.400"]},{dataKey:"Tablets",color:["warning.500","warning.400"]}],[]);return e.jsx(m,{data:s,series:o,dataKey:"month",withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var Ga,Ia,Na;ea.parameters={...ea.parameters,docs:{...(Ga=ea.parameters)==null?void 0:Ga.docs,source:{originalSource:`() => {
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
}`,...(Na=(Ia=ea.parameters)==null?void 0:Ia.docs)==null?void 0:Na.source}}};var za,Wa,Oa;na.parameters={...na.parameters,docs:{...(za=na.parameters)==null?void 0:za.docs,source:{originalSource:`() => {
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
}`,...(Oa=(Wa=na.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.source}}};var Xa,Ya,Ha;ta.parameters={...ta.parameters,docs:{...(Xa=ta.parameters)==null?void 0:Xa.docs,source:{originalSource:`() => {
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
}`,...(Ha=(Ya=ta.parameters)==null?void 0:Ya.docs)==null?void 0:Ha.source}}};var Ra,$a,Ea;oa.parameters={...oa.parameters,docs:{...(Ra=oa.parameters)==null?void 0:Ra.docs,source:{originalSource:`() => {
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
}`,...(Ea=($a=oa.parameters)==null?void 0:$a.docs)==null?void 0:Ea.source}}};var Ua,qa,Qa;sa.parameters={...sa.parameters,docs:{...(Ua=sa.parameters)==null?void 0:Ua.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" withLegend />;
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
  return <BarChart data={data} series={series} dataKey="month" valueFormatter={value => value.toLocaleString()} />;
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
  return <BarChart data={data} series={series} dataKey="month" xAxisTickFormatter={value => value.toUpperCase()} />;
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
  return <BarChart data={data} series={series} dataKey="month" yAxisTickFormatter={value => value.toLocaleString()} />;
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
  return <BarChart data={data} series={series} dataKey="month" labelFormatter={value => value.toLocaleString()} />;
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
  return <BarChart data={data} series={series} dataKey="month" gridAxis="xy" strokeDasharray="15 15" />;
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
  return <BarChart data={data} series={series} dataKey="month" fillOpacity={[0.8, 0.7]} />;
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
  return <BarChart data={data} series={series} dataKey="month" unit="views" yAxisProps={{
    width: 75
  }} />;
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
  return <BarChart data={data} series={series} dataKey="month" xAxisLabel="date" yAxisLabel="view" />;
}`,...(Ar=(Cr=ha.parameters)==null?void 0:Cr.docs)==null?void 0:Ar.source}}};var vr,Tr,Pr;ba.parameters={...ba.parameters,docs:{...(vr=ba.parameters)==null?void 0:vr.docs,source:{originalSource:`() => {
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
}`,...(Pr=(Tr=ba.parameters)==null?void 0:Tr.docs)==null?void 0:Pr.source}}};var kr,Br,fr;ga.parameters={...ga.parameters,docs:{...(kr=ga.parameters)==null?void 0:kr.docs,source:{originalSource:`() => {
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
}`,...(fr=(Br=ga.parameters)==null?void 0:Br.docs)==null?void 0:fr.source}}};var Jr,Vr,Fr;xa.parameters={...xa.parameters,docs:{...(Jr=xa.parameters)==null?void 0:Jr.docs,source:{originalSource:`() => {
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
}`,...(Fr=(Vr=xa.parameters)==null?void 0:Vr.docs)==null?void 0:Fr.source}}};var jr,_r,Dr;Ma.parameters={...Ma.parameters,docs:{...(jr=Ma.parameters)==null?void 0:jr.docs,source:{originalSource:`() => {
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
}`,...(Dr=(_r=Ma.parameters)==null?void 0:_r.docs)==null?void 0:Dr.source}}};var Gr,Ir,Nr;Ka.parameters={...Ka.parameters,docs:{...(Gr=Ka.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Nr=(Ir=Ka.parameters)==null?void 0:Ir.docs)==null?void 0:Nr.source}}};var zr,Wr,Or;wa.parameters={...wa.parameters,docs:{...(zr=wa.parameters)==null?void 0:zr.docs,source:{originalSource:`() => {
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
}`,...(Or=(Wr=wa.parameters)==null?void 0:Wr.docs)==null?void 0:Or.source}}};var Xr,Yr,Hr;Sa.parameters={...Sa.parameters,docs:{...(Xr=Sa.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
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
}`,...(Hr=(Yr=Sa.parameters)==null?void 0:Yr.docs)==null?void 0:Hr.source}}};var Rr,$r,Er;La.parameters={...La.parameters,docs:{...(Rr=La.parameters)==null?void 0:Rr.docs,source:{originalSource:`() => {
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
}`,...(Er=($r=La.parameters)==null?void 0:$r.docs)==null?void 0:Er.source}}};var Ur,qr,Qr;Ca.parameters={...Ca.parameters,docs:{...(Ur=Ca.parameters)==null?void 0:Ur.docs,source:{originalSource:`() => {
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
  return <BarChart data={data} series={series} dataKey="month" withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(re=(ae=Aa.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Qn=["basic","custom","withSize","withSync","withReferenceLine","withLegend","withValueFormatter","withXAxisTickFormatter","withYAxisTickFormatter","withLabelFormatter","withStrokeDasharray","withFillOpacity","withUnit","withAxisLabel","useMixData","withGap","useRangeData","customBar","customBackground","customAxis","customActiveBar","customTooltip","customCursor","customLegend"];export{Qn as __namedExportsOrder,ea as basic,na as custom,Sa as customActiveBar,wa as customAxis,Ka as customBackground,Ma as customBar,Ca as customCursor,Aa as customLegend,La as customTooltip,qn as default,ba as useMixData,xa as useRangeData,ha as withAxisLabel,ua as withFillOpacity,ga as withGap,la as withLabelFormatter,ia as withLegend,sa as withReferenceLine,ta as withSize,da as withStrokeDasharray,oa as withSync,ya as withUnit,pa as withValueFormatter,ma as withXAxisTickFormatter,ca as withYAxisTickFormatter};
