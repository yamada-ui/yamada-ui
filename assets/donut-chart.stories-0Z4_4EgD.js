import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{r as i}from"./index-BwDkhjyp.js";import{P as c}from"./components-jbJrqU4U.js";import{u as Je,a as Ue,b as _e,C as Fe,c as We,R as Ve,L as ze,d as Ne,T as $e,e as He}from"./use-chart-tooltip-CbqEeb6i.js";import{u as Ee,P as Be,a as qe}from"./use-pie-chart-Db4_48rE.js";import{f as Ge}from"./forward-ref-BmTAT9U5.js";import{a as Ke}from"./use-component-style-p12qS94K.js";import{o as Qe}from"./theme-provider-BmJ-9UWz.js";import{b as Xe,c as Ye}from"./factory-CJEIqePD.js";import{V as L,H as Ze}from"./stack-ByAleKXq.js";import{W as en}from"./flex-Ccx8R6aJ.js";import{C as nn,b as an}from"./card-4mXu7vmZ.js";import{T as O}from"./text-CYMgUvo8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-6iPGEe4i.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-C_A3wlnb.js";import"./index-CB49XI1O.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-DBzF8Pld.js";import"./index-BlhRxAhu.js";import"./Combination-CONbhR2A.js";import"./loading-CbCkpXHC.js";import"./icon-D5_Yzct7.js";import"./index-f0vfX_rP.js";import"./motion-C535EKyX.js";import"./index-Ms_xn5rh.js";import"./container-portal-HerNt1yQ.js";import"./index-DxjWwZXO.js";import"./notice-DKgLU1VA.js";import"./alert-nWlmBprx.js";import"./close-button-1ErNEcA0.js";import"./use-ripple-CiehlBDG.js";import"./container-DPSi26JF.js";import"./box-BkalbGPk.js";import"./checkbox-BQZf1mmI.js";import"./index-Dk_zcgRG.js";import"./index-B5K7Amiu.js";import"./form-control-3r7D-N3m.js";import"./index-Bm3tH3yA.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-DUYfPygX.js";import"./index-CwsNPHBe.js";import"./index-qTz9fmf8.js";import"./index-Dg-m_leh.js";import"./index-DAi4bgxS.js";import"./index-mdpvRLjT.js";import"./slide-fade-BMCVwM0D.js";import"./utils-C0ha9mnk.js";import"./scale-fade-BIJ1WRrF.js";import"./index-Djgm-JrL.js";import"./index-Bqz3rL1X.js";import"./select-DbCUu-6M.js";import"./option-j_CZSd_X.js";import"./index-bDxk9gk2.js";import"./popover-content-ClRYcrsN.js";import"./index-8NJL_rSX.js";import"./index-Du0-7Fls.js";import"./index-CSwBjuih.js";import"./_getPrototype-CVMNbDHg.js";import"./_baseAssignValue-qKg1-Mlh.js";import"./debounce-Cs0iuJfd.js";import"./tiny-invariant-CopsF_GD.js";import"./isPlainObject-HKV9_Kky.js";import"./index-D3ylJrlI.js";import"./use-css-DmawWM9f.js";import"./PolarAngleAxis-CwsqqKOT.js";import"./extends-CF3RwP-h.js";const s=Ge((o,a)=>{const[t,u]=Ke("DonutChart",o),{className:l,data:p,pieProps:e,chartProps:r,cellProps:te,containerProps:re,withTooltip:le=!0,withLegend:se=!1,tooltipProps:ie,tooltipAnimationDuration:pe,tooltipDataSource:ue="all",valueFormatter:me,labelFormatter:ce,unit:de,paddingAngle:he,startAngle:ge,endAngle:ve,withLabels:f,withLabelLines:be,labelOffset:Ce,isPercent:Pe,innerRadius:Se=f?"60%":"80%",outerRadius:xe,strokeWidth:we,legendProps:ye,...fe}=Qe(u),{pieVars:Ae,getPieProps:Le,getPieChartProps:Oe,getCellProps:A,setHighlightedArea:je}=Ee({data:p,pieProps:e,chartProps:r,cellProps:te,innerRadius:Se,outerRadius:xe,paddingAngle:he,startAngle:ge,endAngle:ve,strokeWidth:we,withLabels:f,withLabelLines:be,labelOffset:Ce,isPercent:Pe,labelFormatter:ce,styles:t}),{getContainerProps:ke}=Je({containerProps:re}),{tooltipProps:De,getTooltipProps:Te}=Ue({tooltipProps:ie,tooltipAnimationDuration:pe,styles:t}),{legendProps:Re,getLegendProps:Ie}=_e({legendProps:ye}),Me=i.useMemo(()=>p.map(({name:m},y)=>n.jsx(Fe,{...A({index:y,className:"ui-donut-chart__cell"})},`donut-cell-${m}`)),[p,A]);return n.jsx(We,{value:{styles:t},children:n.jsx(Xe.div,{ref:a,className:Ye("ui-donut-chart",l),var:Ae,__css:{maxW:"full",...t.container},...fe,children:n.jsx(Ve,{...ke({className:"ui-donut-chart__container"}),children:n.jsxs(Be,{...Oe({className:"ui-donut-chart__chart"}),children:[n.jsx(qe,{...Le({className:"ui-donut-chart__donut"}),children:Me}),se?n.jsx(ze,{content:({payload:m})=>n.jsx(Ne,{className:"ui-donut-chart__legend",payload:m,onHighlight:je,...Re}),...Ie()}):null,le?n.jsx($e,{content:({label:m,payload:y})=>n.jsx(He,{className:"ui-donut-chart__tooltip",label:m,payload:ue==="segment"?y:p,valueFormatter:me,unit:de,...De}),...Te()}):null]})})})})}),Sa={title:"Components / Data Display / DonutChart",component:s},d=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o})},h=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),[a,t]=i.useState({data:o,withTooltip:!0,withLegend:!1,fillOpacity:1,paddingAngle:0,startAngle:90,endAngle:-270,strokeWidth:1,tooltipAnimationDuration:0,innerRadius:60,outerRadius:80,tooltipDataSource:"all"}),{innerRadius:u,outerRadius:l,...p}=a;return n.jsxs(L,{children:[n.jsx(s,{innerRadius:`${u}%`,outerRadius:`${l}%`,...p}),n.jsxs(en,{gap:"md",alignItems:"flex-start",children:[n.jsx(c,{component:"Slider",items:[{label:"Padding angle",value:a.paddingAngle,min:0,max:30,step:1,onChange:e=>{t(r=>({...r,paddingAngle:e}))}},{label:"Stroke width",value:a.strokeWidth,min:.5,max:5,step:.5,onChange:e=>{t(r=>({...r,strokeWidth:e}))}},{label:"Start angle",value:a.startAngle,min:0,max:180,step:1,onChange:e=>{t(r=>({...r,startAngle:e}))}},{label:"End angle",value:a.endAngle,min:180,max:360,step:1,onChange:e=>{t(r=>({...r,endAngle:e}))}},{label:"Fill opacity",value:a.fillOpacity,min:0,max:1,step:.1,onChange:e=>{t(r=>({...r,fillOpacity:e}))}},{label:"Tooltip animation duration",value:a.tooltipAnimationDuration,min:0,max:2e3,onChange:e=>{t(r=>({...r,tooltipAnimationDuration:e}))}}]}),n.jsxs(L,{w:"auto",children:[n.jsx(c,{component:"Slider",items:[{label:"Inner Radius",value:a.innerRadius,min:0,max:100,onChange:e=>{t(r=>({...r,innerRadius:e}))}},{label:"Outer Radius",value:a.outerRadius,min:0,max:100,onChange:e=>{t(r=>({...r,outerRadius:e}))}},{label:"Label Offset",value:a.labelOffset,min:0,max:100,onChange:e=>{t(r=>({...r,labelOffset:e}))}}]}),n.jsx(c,{component:"Select",items:[{label:"Tooltip data source",defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],value:a.tooltipDataSource,onChange:e=>{t(r=>({...r,tooltipDataSource:e}))}}]}),n.jsx(c,{component:"Switch",items:[{label:"tooltip",isChecked:a.withTooltip,onChange:()=>t(e=>({...e,withTooltip:!e.withTooltip}))},{label:"legend",isChecked:a.withLegend,onChange:()=>t(e=>({...e,withLegend:!e.withLegend}))},{label:"label",isChecked:a.withLabels,onChange:()=>t(e=>({...e,withLabels:!e.withLabels}))},{label:"label line",isChecked:a.withLabelLines,onChange:()=>t(e=>({...e,withLabelLines:!e.withLabelLines}))},{label:"isPercent",isChecked:a.isPercent,onChange:()=>t(e=>({...e,isPercent:!e.isPercent}))}]})]})]})]})},g=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsxs(n.Fragment,{children:[n.jsx(s,{data:o,size:"sm"}),n.jsx(s,{data:o,size:"md"}),n.jsx(s,{data:o,size:"lg"})]})},v=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,withLegend:!0})},b=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,valueFormatter:a=>a.toLocaleString()})},C=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,labelFormatter:a=>a.toLocaleString()})},P=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,fillOpacity:[.8,.7]})},S=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,pieProps:{activeShape:{strokeWidth:2,stroke:["black","white"]},inactiveShape:{opacity:.5}}})},x=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),a=t=>{const{payload:u}=t;return u?n.jsx(nn,{variant:"subtle",colorScheme:"gray",children:n.jsx(an,{gap:"sm",children:u.map((l,p)=>{var e;return n.jsxs(Ze,{w:"full",justifyContent:"space-between",children:[n.jsx(O,{children:l==null?void 0:l.name}),n.jsx(O,{color:(e=l==null?void 0:l.payload)==null?void 0:e.color,children:l==null?void 0:l.value})]},`payload-${p}`)})})}):null};return n.jsx(s,{data:o,tooltipProps:{content:a}})},w=()=>{const o=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:o,withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})};var j,k,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
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
}`,...(D=(k=d.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var T,R,I;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(U=(J=g.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var _,F,W;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(W=(F=v.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};var V,z,N;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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
}`,...(N=(z=b.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var $,H,E;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
  return <DonutChart data={data} labelFormatter={value => value.toLocaleString()} />;
}`,...(E=(H=C.parameters)==null?void 0:H.docs)==null?void 0:E.source}}};var B,q,G;P.parameters={...P.parameters,docs:{...(B=P.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
  return <DonutChart data={data} pieProps={{
    activeShape: {
      strokeWidth: 2,
      stroke: ["black", "white"]
    },
    inactiveShape: {
      opacity: 0.5
    }
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
}`,...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,ae,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const xa=["basic","custom","withSize","withLegend","withValueFormatter","withLabelFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend"];export{xa as __namedExportsOrder,d as basic,h as custom,S as customActiveShape,w as customLegend,x as customTooltip,Sa as default,P as withFillOpacity,C as withLabelFormatter,v as withLegend,g as withSize,b as withValueFormatter};
