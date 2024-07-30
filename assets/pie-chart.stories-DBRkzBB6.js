import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{P as c}from"./components-yCBLa_Bd.js";import{u as Te,a as Ie,b as Me,C as Re,c as De,R as Je,L as Ue,d as _e,T as We,e as Ve}from"./use-chart-tooltip-CiCkW0qf.js";import{u as Fe,P as ze,a as Ne}from"./use-pie-chart-DeO6uZtL.js";import{f as He}from"./forward-ref-BmTAT9U5.js";import{a as $e}from"./use-component-style-DRlwxZhB.js";import{o as Ee}from"./theme-provider-CgekAyNK.js";import{b as Be,c as qe}from"./factory-BXeT7qA-.js";import{V as f,H as Ge}from"./stack-By0izq3K.js";import{W as Ke}from"./flex-28tKwT7e.js";import{C as Qe,b as Xe}from"./card-JQJT2z0g.js";import{T as A}from"./text-CkzTM_kh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-xf8c1cao.js";import"./index-DD8JGwS4.js";import"./index-dZARYsYs.js";import"./ui-provider-vn_aFqYR.js";import"./index-Dzn7FVja.js";import"./motion-CcTWI5_V.js";import"./loading-provider-BlDKCDBl.js";import"./index-Dxynqg56.js";import"./Combination-CONbhR2A.js";import"./loading-mQT9J7oF.js";import"./icon-DIrcXz1L.js";import"./index-jt6EZpVS.js";import"./motion-DhpH0FRI.js";import"./index-UcjmprJc.js";import"./container-portal-D_8J7oaj.js";import"./index-DxjWwZXO.js";import"./notice-C0m_B0AJ.js";import"./alert-Bg8_w__7.js";import"./close-button-DV2TJvIJ.js";import"./use-ripple-2cGyX1K8.js";import"./container-2ltlYRD5.js";import"./box-B1h8yYhg.js";import"./checkbox-Dncp1lmg.js";import"./index-CEihWUfX.js";import"./index-Irie4EHF.js";import"./form-control-CqHILFcM.js";import"./index-CXLSpR74.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-AYHfqsqL.js";import"./index-XSAGmtry.js";import"./index-D5OdYTIO.js";import"./index-B0klFHMr.js";import"./index-D5u8eIG7.js";import"./index-BEzKMtfG.js";import"./slide-fade-CTxSPoDC.js";import"./utils-DYgquvih.js";import"./scale-fade-hIdHgWHj.js";import"./index-DBCDrfEK.js";import"./index-PMfx84N2.js";import"./select-Ba-9a6tg.js";import"./option-C1HF-Zpl.js";import"./index-CP_iHTUG.js";import"./popover-content-C6Kqwo6O.js";import"./index-BzaPwyBI.js";import"./index-Du0-7Fls.js";import"./index-XokATsxS.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-c3TJijBM.js";import"./PolarAngleAxis-B9WCuJ1N.js";import"./extends-CF3RwP-h.js";const s=He((o,t)=>{const[r,p]=$e("PieChart",o),{className:l,data:e,pieProps:a,chartProps:Z,cellProps:ee,containerProps:ne,withTooltip:ae=!0,withLegend:oe=!1,tooltipProps:te,tooltipAnimationDuration:re,tooltipDataSource:le="all",valueFormatter:w,unit:se,innerRadius:ie,outerRadius:pe,paddingAngle:me,startAngle:ce,endAngle:ue,withLabels:de,withLabelLines:he,labelOffset:ge,isPercent:ve,strokeWidth:Ce,legendProps:be,...Pe}=Ee(p),{pieVars:Se,getPieProps:xe,getPieChartProps:we,getCellProps:y,setHighlightedArea:ye}=Fe({data:e,pieProps:a,chartProps:Z,cellProps:ee,innerRadius:ie,outerRadius:pe,paddingAngle:me,startAngle:ce,endAngle:ue,strokeWidth:Ce,withLabels:de,withLabelLines:he,labelOffset:ge,isPercent:ve,valueFormatter:w,styles:r}),{getContainerProps:fe}=Te({containerProps:ne}),{tooltipProps:Ae,getTooltipProps:Le}=Ie({tooltipProps:te,tooltipAnimationDuration:re,styles:r}),{legendProps:je,getLegendProps:Oe}=Me({legendProps:be}),ke=i.useMemo(()=>e.map(({name:m},x)=>n.jsx(Re,{...y({index:x,className:"ui-pie-chart__cell"})},`pie-cell-${m}`)),[e,y]);return n.jsx(De,{value:{styles:r},children:n.jsx(Be.div,{ref:t,className:qe("ui-pie-chart",l),var:Se,__css:{maxW:"full",...r.container},...Pe,children:n.jsx(Je,{...fe({className:"ui-pie-chart__container"}),children:n.jsxs(ze,{...we({className:"ui-pie-chart__chart"}),children:[n.jsx(Ne,{...xe({className:"ui-pie-chart__pie"}),children:ke}),oe?n.jsx(Ue,{content:({payload:m})=>n.jsx(_e,{className:"ui-pie-chart__legend",payload:m,onHighlight:ye,...je}),...Oe()}):null,ae?n.jsx(We,{content:({label:m,payload:x})=>n.jsx(Ve,{className:"ui-pie-chart__tooltip",label:m,payload:le==="segment"?x:e,valueFormatter:w,unit:se,...Ae}),...Le()}):null]})})})})}),ga={title:"Components / Data Display / PieChart",component:s},u=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o})},d=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),[t,r]=i.useState({data:o,withTooltip:!0,withLegend:!1,fillOpacity:1,paddingAngle:0,startAngle:90,endAngle:-270,strokeWidth:1,tooltipAnimationDuration:0,outerRadius:80,tooltipDataSource:"all"}),{outerRadius:p,...l}=t;return n.jsxs(f,{children:[n.jsx(s,{outerRadius:`${p}%`,...l}),n.jsxs(Ke,{gap:"md",alignItems:"flex-start",children:[n.jsx(c,{component:"Slider",items:[{label:"Padding angle",value:t.paddingAngle,min:0,max:30,step:1,onChange:e=>{r(a=>({...a,paddingAngle:e}))}},{label:"Stroke width",value:t.strokeWidth,min:.5,max:5,step:.5,onChange:e=>{r(a=>({...a,strokeWidth:e}))}},{label:"Start angle",value:t.startAngle,min:0,max:180,step:1,onChange:e=>{r(a=>({...a,startAngle:e}))}},{label:"End angle",value:t.endAngle,min:180,max:360,step:1,onChange:e=>{r(a=>({...a,endAngle:e}))}},{label:"Fill opacity",value:t.fillOpacity,min:0,max:1,step:.1,onChange:e=>{r(a=>({...a,fillOpacity:e}))}},{label:"Tooltip animation duration",value:t.tooltipAnimationDuration,min:0,max:2e3,onChange:e=>{r(a=>({...a,tooltipAnimationDuration:e}))}}]}),n.jsxs(f,{w:"auto",children:[n.jsx(c,{component:"Slider",items:[{label:"Outer Radius",value:t.outerRadius,min:0,max:100,onChange:e=>{r(a=>({...a,outerRadius:e}))}},{label:"Label Offset",value:t.labelOffset,min:0,max:100,onChange:e=>{r(a=>({...a,labelOffset:e}))}}]}),n.jsx(c,{component:"Select",items:[{label:"Tooltip data source",defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],value:t.tooltipDataSource,onChange:e=>{r(a=>({...a,tooltipDataSource:e}))}}]}),n.jsx(c,{component:"Switch",items:[{label:"tooltip",isChecked:t.withTooltip,onChange:()=>r(e=>({...e,withTooltip:!e.withTooltip}))},{label:"legend",isChecked:t.withLegend,onChange:()=>r(e=>({...e,withLegend:!e.withLegend}))},{label:"label",isChecked:t.withLabels,onChange:()=>r(e=>({...e,withLabels:!e.withLabels}))},{label:"label line",isChecked:t.withLabelLines,onChange:()=>r(e=>({...e,withLabelLines:!e.withLabelLines}))},{label:"isPercent",isChecked:t.isPercent,onChange:()=>r(e=>({...e,isPercent:!e.isPercent}))}]})]})]})]})},h=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsxs(n.Fragment,{children:[n.jsx(s,{data:o,size:"sm"}),n.jsx(s,{data:o,size:"md"}),n.jsx(s,{data:o,size:"lg"})]})},g=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,withLegend:!0})},v=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,valueFormatter:t=>t.toLocaleString()})},C=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,fillOpacity:[.8,.7]})},b=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,pieProps:{activeShape:{strokeWidth:2,stroke:["black","white"]},inactiveShape:{opacity:.5}}})},P=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),t=r=>{const{payload:p}=r;return p?n.jsx(Qe,{variant:"subtle",colorScheme:"gray",children:n.jsx(Xe,{gap:"sm",children:p.map((l,e)=>{var a;return n.jsxs(Ge,{w:"full",justifyContent:"space-between",children:[n.jsx(A,{children:l==null?void 0:l.name}),n.jsx(A,{color:(a=l==null?void 0:l.payload)==null?void 0:a.color,children:l==null?void 0:l.value})]},`payload-${e}`)})})}):null};return n.jsx(s,{data:o,tooltipProps:{content:t}})},S=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var L,j,O;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} />;
}`,...(O=(j=u.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var k,T,I;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
  const [props, setProps] = useState<PieChartProps>({
    data: data,
    withTooltip: true,
    withLegend: false,
    fillOpacity: 1,
    paddingAngle: 0,
    startAngle: 90,
    endAngle: -270,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    outerRadius: 80,
    tooltipDataSource: "all"
  });
  const {
    outerRadius,
    ...rest
  } = props;
  return <VStack>
      <PieChart outerRadius={\`\${outerRadius}%\`} {...rest} />

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
}`,...(I=(T=d.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var M,R,D;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
      <PieChart data={data} size="sm" />
      <PieChart data={data} size="md" />
      <PieChart data={data} size="lg" />
    </>;
}`,...(D=(R=h.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var J,U,_;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} withLegend />;
}`,...(_=(U=g.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var W,V,F;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} valueFormatter={value => value.toLocaleString()} />;
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var z,N,H;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} fillOpacity={[0.8, 0.7]} />;
}`,...(H=(N=C.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,E,B;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} pieProps={{
    activeShape: {
      strokeWidth: 2,
      stroke: ["black", "white"]
    },
    inactiveShape: {
      opacity: 0.5
    }
  }} />;
}`,...(B=(E=b.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var q,G,K;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(K=(G=P.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
  return <PieChart data={data} withLegend legendProps={{
    verticalAlign: "bottom",
    mb: "0",
    mt: "4"
  }} />;
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const va=["basic","custom","withSize","withLegend","withValueFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend"];export{va as __namedExportsOrder,u as basic,d as custom,b as customActiveShape,S as customLegend,P as customTooltip,ga as default,C as withFillOpacity,g as withLegend,h as withSize,v as withValueFormatter};
