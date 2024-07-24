import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{P as c}from"./components-D6Bb2uEr.js";import{u as Te,a as De,b as Re,C as Ie,c as Me,R as Je,L as Ue,d as _e,T as We,e as Ve}from"./use-chart-tooltip-B7VyC8OA.js";import{u as Fe,P as ze,a as Ne}from"./use-pie-chart-CNMXlQIK.js";import{f as $e}from"./forward-ref-BmTAT9U5.js";import{a as He}from"./use-component-style-WvnhTyjM.js";import{o as Ee}from"./theme-provider-BgcEQoqm.js";import{b as Be,c as qe}from"./factory-CSM9sPSx.js";import{V as L,H as Ge}from"./stack-SpfWy_a6.js";import{W as Ke}from"./flex-DB7lh134.js";import{C as Qe,b as Xe}from"./card-CNl70Hs-.js";import{T as j}from"./text-BookO5vh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CvfKnqoV.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-DICDWbsB.js";import"./index-DtP7b3N9.js";import"./motion-Bwwxf1oz.js";import"./loading-provider-C3G_7BIp.js";import"./index-DWEUlx1C.js";import"./Combination-CONbhR2A.js";import"./loading-BomcEXko.js";import"./icon-CcTu3FGm.js";import"./index-D84whEjo.js";import"./motion-CJ0Wabpj.js";import"./index-C4_4nMA3.js";import"./container-portal-D-ohbITJ.js";import"./index-DxjWwZXO.js";import"./notice-DykH8IWk.js";import"./alert-BMy-2sRK.js";import"./close-button-DHzsuGbG.js";import"./use-ripple-CjBaOxYI.js";import"./container-B4DYrRWa.js";import"./box-DFfDP5ur.js";import"./checkbox-BJn3XSSi.js";import"./index-CeDrGg2i.js";import"./index-DtwaELu4.js";import"./form-control--QN0xTJO.js";import"./index-CA0CoE9D.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DSapTmfa.js";import"./index-WMSiNdqI.js";import"./index-D5mciU3Y.js";import"./index-lGxQ7XbO.js";import"./index-C1sIUdxj.js";import"./index-COBVKLaq.js";import"./slide-fade-CtXYE2I0.js";import"./utils-C1onMfPn.js";import"./scale-fade-CGBM4697.js";import"./index-DCuOK1Fs.js";import"./index-CxbgkKk9.js";import"./select-LboTRYhO.js";import"./option-CwK8hE9j.js";import"./index-DCjskD-V.js";import"./popover-content-NepE_FfP.js";import"./index-Cq8ovcjm.js";import"./index-Du0-7Fls.js";import"./index-C8fXWcF1.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-C_2KUCck.js";import"./PolarAngleAxis-BQCKsS2b.js";import"./extends-CF3RwP-h.js";const s=$e((t,a)=>{const[o,u]=He("DonutChart",t),{className:l,data:p,pieProps:e,chartProps:r,cellProps:ne,containerProps:ae,withTooltip:oe=!0,withLegend:te=!1,tooltipProps:re,tooltipAnimationDuration:le,tooltipDataSource:se="all",valueFormatter:y,unit:ie,paddingAngle:pe,startAngle:ue,endAngle:me,withLabels:f,withLabelLines:ce,labelOffset:de,isPercent:he,innerRadius:ge=f?"60%":"80%",outerRadius:ve,strokeWidth:Ce,legendProps:be,...Pe}=Ee(u),{pieVars:Se,getPieProps:xe,getPieChartProps:we,getCellProps:A,setHighlightedArea:ye}=Fe({data:p,pieProps:e,chartProps:r,cellProps:ne,innerRadius:ge,outerRadius:ve,paddingAngle:pe,startAngle:ue,endAngle:me,strokeWidth:Ce,withLabels:f,withLabelLines:ce,labelOffset:de,isPercent:he,valueFormatter:y,styles:o}),{getContainerProps:fe}=Te({containerProps:ae}),{tooltipProps:Ae,getTooltipProps:Le}=De({tooltipProps:re,tooltipAnimationDuration:le,styles:o}),{legendProps:je,getLegendProps:Oe}=Re({legendProps:be}),ke=i.useMemo(()=>p.map(({name:m},w)=>n.jsx(Ie,{...A({index:w,className:"ui-donut-chart__cell"})},`donut-cell-${m}`)),[p,A]);return n.jsx(Me,{value:{styles:o},children:n.jsx(Be.div,{ref:a,className:qe("ui-donut-chart",l),var:Se,__css:{maxW:"full",...o.container},...Pe,children:n.jsx(Je,{...fe({className:"ui-donut-chart__container"}),children:n.jsxs(ze,{...we({className:"ui-donut-chart__chart"}),children:[n.jsx(Ne,{...xe({className:"ui-donut-chart__donut"}),children:ke}),te?n.jsx(Ue,{content:({payload:m})=>n.jsx(_e,{className:"ui-donut-chart__legend",payload:m,onHighlight:ye,...je}),...Oe()}):null,oe?n.jsx(We,{content:({label:m,payload:w})=>n.jsx(Ve,{className:"ui-donut-chart__tooltip",label:m,payload:se==="segment"?w:p,valueFormatter:y,unit:ie,...Ae}),...Le()}):null]})})})})}),ga={title:"Components / Data Display / DonutChart",component:s},d=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t})},h=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),[a,o]=i.useState({data:t,withTooltip:!0,withLegend:!1,fillOpacity:1,paddingAngle:0,startAngle:90,endAngle:-270,strokeWidth:1,tooltipAnimationDuration:0,innerRadius:60,outerRadius:80,tooltipDataSource:"all"}),{innerRadius:u,outerRadius:l,...p}=a;return n.jsxs(L,{children:[n.jsx(s,{innerRadius:`${u}%`,outerRadius:`${l}%`,...p}),n.jsxs(Ke,{gap:"md",alignItems:"flex-start",children:[n.jsx(c,{component:"Slider",items:[{label:"Padding angle",value:a.paddingAngle,min:0,max:30,step:1,onChange:e=>{o(r=>({...r,paddingAngle:e}))}},{label:"Stroke width",value:a.strokeWidth,min:.5,max:5,step:.5,onChange:e=>{o(r=>({...r,strokeWidth:e}))}},{label:"Start angle",value:a.startAngle,min:0,max:180,step:1,onChange:e=>{o(r=>({...r,startAngle:e}))}},{label:"End angle",value:a.endAngle,min:180,max:360,step:1,onChange:e=>{o(r=>({...r,endAngle:e}))}},{label:"Fill opacity",value:a.fillOpacity,min:0,max:1,step:.1,onChange:e=>{o(r=>({...r,fillOpacity:e}))}},{label:"Tooltip animation duration",value:a.tooltipAnimationDuration,min:0,max:2e3,onChange:e=>{o(r=>({...r,tooltipAnimationDuration:e}))}}]}),n.jsxs(L,{w:"auto",children:[n.jsx(c,{component:"Slider",items:[{label:"Inner Radius",value:a.innerRadius,min:0,max:100,onChange:e=>{o(r=>({...r,innerRadius:e}))}},{label:"Outer Radius",value:a.outerRadius,min:0,max:100,onChange:e=>{o(r=>({...r,outerRadius:e}))}},{label:"Label Offset",value:a.labelOffset,min:0,max:100,onChange:e=>{o(r=>({...r,labelOffset:e}))}}]}),n.jsx(c,{component:"Select",items:[{label:"Tooltip data source",defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],value:a.tooltipDataSource,onChange:e=>{o(r=>({...r,tooltipDataSource:e}))}}]}),n.jsx(c,{component:"Switch",items:[{label:"tooltip",isChecked:a.withTooltip,onChange:()=>o(e=>({...e,withTooltip:!e.withTooltip}))},{label:"legend",isChecked:a.withLegend,onChange:()=>o(e=>({...e,withLegend:!e.withLegend}))},{label:"label",isChecked:a.withLabels,onChange:()=>o(e=>({...e,withLabels:!e.withLabels}))},{label:"label line",isChecked:a.withLabelLines,onChange:()=>o(e=>({...e,withLabelLines:!e.withLabelLines}))},{label:"isPercent",isChecked:a.isPercent,onChange:()=>o(e=>({...e,isPercent:!e.isPercent}))}]})]})]})]})},g=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsxs(n.Fragment,{children:[n.jsx(s,{data:t,size:"sm"}),n.jsx(s,{data:t,size:"md"}),n.jsx(s,{data:t,size:"lg"})]})},v=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t,withLegend:!0})},C=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t,valueFormatter:a=>a.toLocaleString()})},b=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t,fillOpacity:[.8,.7]})},P=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t,pieProps:{activeShape:{strokeWidth:2,stroke:["black","white"]},inactiveShape:{opacity:.5}}})},S=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),a=o=>{const{payload:u}=o;return u?n.jsx(Qe,{variant:"subtle",colorScheme:"gray",children:n.jsx(Xe,{gap:"sm",children:u.map((l,p)=>{var e;return n.jsxs(Ge,{w:"full",justifyContent:"space-between",children:[n.jsx(j,{children:l==null?void 0:l.name}),n.jsx(j,{color:(e=l==null?void 0:l.payload)==null?void 0:e.color,children:l==null?void 0:l.value})]},`payload-${p}`)})})}):null};return n.jsx(s,{data:t,tooltipProps:{content:a}})},x=()=>{const t=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:t,withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var O,k,T;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} />;
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var D,R,I;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  const [props, setProps] = useState<DonutChartProps>({
    data: data,
    withTooltip: true,
    withLegend: false,
    fillOpacity: 1,
    paddingAngle: 0,
    startAngle: 90,
    endAngle: -270,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    innerRadius: 60,
    outerRadius: 80,
    tooltipDataSource: "all"
  });
  const {
    innerRadius,
    outerRadius,
    ...rest
  } = props;
  return <VStack>
      <DonutChart innerRadius={\`\${innerRadius}%\`} outerRadius={\`\${outerRadius}%\`} {...rest} />

      <Wrap gap="md" alignItems="flex-start">
        <PropControl component="Slider" items={[{
        label: "Padding angle",
        value: props.paddingAngle,
        min: 0,
        max: 30,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            paddingAngle: value
          }));
        }
      }, {
        label: "Stroke width",
        value: props.strokeWidth,
        min: 0.5,
        max: 5,
        step: 0.5,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            strokeWidth: value
          }));
        }
      }, {
        label: "Start angle",
        value: props.startAngle,
        min: 0,
        max: 180,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            startAngle: value
          }));
        }
      }, {
        label: "End angle",
        value: props.endAngle,
        min: 180,
        max: 360,
        step: 1,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            endAngle: value
          }));
        }
      }, {
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

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Inner Radius",
          value: (props.innerRadius as number),
          min: 0,
          max: 100,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              innerRadius: value
            }));
          }
        }, {
          label: "Outer Radius",
          value: (props.outerRadius as number),
          min: 0,
          max: 100,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              outerRadius: value
            }));
          }
        }, {
          label: "Label Offset",
          value: (props.labelOffset as number),
          min: 0,
          max: 100,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              labelOffset: value
            }));
          }
        }]} />

          <PropControl component="Select" items={[{
          label: "Tooltip data source",
          defaultValue: "all",
          items: [{
            label: "all",
            value: "all"
          }, {
            label: "segment",
            value: "segment"
          }],
          value: props.tooltipDataSource,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipDataSource: (value as TooltipDataSourceType)
            }));
          }
        }]} />

          <PropControl component="Switch" items={[{
          label: "tooltip",
          isChecked: props.withTooltip,
          onChange: () => setProps(prev => ({
            ...prev,
            withTooltip: !prev.withTooltip
          }))
        }, {
          label: "legend",
          isChecked: props.withLegend,
          onChange: () => setProps(prev => ({
            ...prev,
            withLegend: !prev.withLegend
          }))
        }, {
          label: "label",
          isChecked: props.withLabels,
          onChange: () => setProps(prev => ({
            ...prev,
            withLabels: !prev.withLabels
          }))
        }, {
          label: "label line",
          isChecked: props.withLabelLines,
          onChange: () => setProps(prev => ({
            ...prev,
            withLabelLines: !prev.withLabelLines
          }))
        }, {
          label: "isPercent",
          isChecked: props.isPercent,
          onChange: () => setProps(prev => ({
            ...prev,
            isPercent: !prev.isPercent
          }))
        }]} />
        </VStack>
      </Wrap>
    </VStack>;
}`,...(I=(R=h.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var M,J,U;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <>
      <DonutChart data={data} size="sm" />
      <DonutChart data={data} size="md" />
      <DonutChart data={data} size="lg" />
    </>;
}`,...(U=(J=g.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var _,W,V;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} withLegend />;
}`,...(V=(W=v.parameters)==null?void 0:W.docs)==null?void 0:V.source}}};var F,z,N;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} valueFormatter={value => value.toLocaleString()} />;
}`,...(N=(z=C.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var $,H,E;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} fillOpacity={[0.8, 0.7]} />;
}`,...(E=(H=b.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var B,q,G;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} pieProps={{
    activeShape: {
      strokeWidth: 2,
      stroke: ["black", "white"]
    },
    inactiveShape: {
      opacity: 0.5
    }
  }} />;
}`,...(G=(q=P.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  const CustomTooltip: ChartTooltip = (props: {
    payload?: Dict[];
  }) => {
    const {
      payload
    } = props;
    if (!payload) return null;
    return <Card variant="subtle" colorScheme="gray">
        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} w="full" justifyContent="space-between">
              <Text>{value?.name}</Text>
              <Text color={value?.payload?.color}>{value?.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <DonutChart data={data} tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    value: 400,
    color: "red.500"
  }, {
    name: "India",
    value: 300,
    color: "orange.500"
  }, {
    name: "Japan",
    value: 100,
    color: "blue.500"
  }, {
    name: "Other",
    value: 200,
    color: "gray.500"
  }], []);
  return <DonutChart data={data} withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const va=["basic","custom","withSize","withLegend","withValueFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend"];export{va as __namedExportsOrder,d as basic,h as custom,P as customActiveShape,x as customLegend,S as customTooltip,ga as default,b as withFillOpacity,v as withLegend,g as withSize,C as withValueFormatter};
