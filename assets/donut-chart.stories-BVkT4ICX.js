import{j as n}from"./extends-CwFRzn3r.js";import{r as i}from"./index-BwDkhjyp.js";import{P as c}from"./components-B_rMwC4_.js";import{h as ze,l as $e,u as He,a as Ee,b as Be,C as qe,c as Ge,R as Ke,j as Qe,L as Xe,d as Ye,T as Ze,e as en}from"./use-chart-tooltip-C-M3nNCa.js";import{u as nn,o as an}from"./theme-provider-CpaSpGZh.js";import{c as pe,b as on}from"./factory-BjF4_dRw.js";import{u as tn,P as rn,a as ln}from"./use-pie-chart-BUVYgt7S.js";import{f as sn}from"./forward-ref-BWI-Phbn.js";import{a as pn}from"./use-component-style-DVO-iEPi.js";import{V as O,H as un}from"./stack-D4S-2JYT.js";import{W as mn}from"./flex-uUFGZwrf.js";import{C as cn,b as dn}from"./card-kZ7qOf-M.js";import{T as k}from"./text-CpJ_XsDk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_Ccg1d.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./box-B5FcoOR4.js";import"./checkbox-vlO53CvA.js";import"./index-WsJcG9Vu.js";import"./form-control-wNB_sh9j.js";import"./index-BaNhddRa.js";import"./index-B4Eu0jvp.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-CWbLabfc.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./index-B6Y8FPE8.js";import"./index-PkG0ZV6c.js";import"./index-BxBWkPyk.js";import"./slide-fade-DE5mVSQd.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-B25oQz4C.js";import"./select-list-CnZQzAWu.js";import"./index-BjUO4q1E.js";import"./popover-content-Brt-pbKo.js";import"./index-is6smmpS.js";import"./index-Du0-7Fls.js";import"./index-C53kKj3W.js";import"./_baseAssignValue-BMomzBkp.js";import"./debounce-RRDXRYZE.js";import"./tiny-invariant-CopsF_GD.js";import"./index-D3ylJrlI.js";import"./use-css-ClJFy1Ng.js";import"./PolarAngleAxis-BYpXzXpA.js";const hn=({styles:a,...o})=>{const{theme:t}=nn(),[p,l]=ze([o.labelProps??{},$e],a.label)(t);return{getLabelProps:i.useCallback(({className:e,...r}={},L=null)=>({ref:L,className:pe(e,l),...r,...p}),[l,p])}},s=sn((a,o)=>{const[t,p]=pn("DonutChart",a),{className:l,data:u,pieProps:e,chartProps:r,cellProps:L,containerProps:ue,withTooltip:me=!0,withLegend:ce=!1,tooltipProps:de,tooltipAnimationDuration:he,tooltipDataSource:ge="all",valueFormatter:ve,labelFormatter:be,unit:Ce,paddingAngle:Pe,startAngle:Se,endAngle:xe,withLabels:A,withLabelLines:we,labelOffset:fe,isPercent:Le,innerRadius:ye=A?"60%":"80%",outerRadius:Ae,strokeWidth:je,legendProps:Oe,labelProps:ke,...De}=an(p),{pieVars:Te,getPieProps:Re,getPieChartProps:Ie,getCellProps:j,setHighlightedArea:Me}=tn({data:u,pieProps:e,chartProps:r,cellProps:L,innerRadius:ye,outerRadius:Ae,paddingAngle:Pe,startAngle:Se,endAngle:xe,strokeWidth:je,withLabels:A,withLabelLines:we,labelOffset:fe,isPercent:Le,labelFormatter:be,styles:t}),{getContainerProps:Je}=He({containerProps:ue}),{tooltipProps:Ue,getTooltipProps:_e}=Ee({tooltipProps:de,tooltipAnimationDuration:he,styles:t}),{legendProps:We,getLegendProps:Fe}=Be({legendProps:Oe}),{getLabelProps:Ne}=hn({labelProps:ke,styles:t}),Ve=i.useMemo(()=>u.map(({name:m},y)=>n.jsx(qe,{...j({index:y,className:"ui-donut-chart__cell"})},`donut-cell-${m}`)),[u,j]);return n.jsx(Ge,{value:{styles:t},children:n.jsx(on.div,{ref:o,className:pe("ui-donut-chart",l),__css:{maxW:"full",vars:Te,...t.container},...De,children:n.jsx(Ke,{...Je({className:"ui-donut-chart__container"}),children:n.jsxs(rn,{...Ie({className:"ui-donut-chart__chart"}),children:[n.jsxs(ln,{...Re({className:"ui-donut-chart__donut"}),children:[Ve,n.jsx(Qe,{...Ne({className:"ui-donut-chart__label"})})]}),ce?n.jsx(Xe,{content:({payload:m})=>n.jsx(Ye,{className:"ui-donut-chart__legend",payload:m,onHighlight:Me,...We}),...Fe()}):null,me?n.jsx(Ze,{content:({label:m,payload:y})=>n.jsx(en,{className:"ui-donut-chart__tooltip",label:m,payload:ge==="segment"?y:u,valueFormatter:ve,unit:Ce,...Ue}),..._e()}):null]})})})})}),Oa={title:"Components / Data Display / DonutChart",component:s},d=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a})},h=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),[o,t]=i.useState({data:a,withTooltip:!0,withLegend:!1,fillOpacity:1,paddingAngle:0,startAngle:90,endAngle:-270,strokeWidth:1,tooltipAnimationDuration:0,innerRadius:60,outerRadius:80,tooltipDataSource:"all"}),{innerRadius:p,outerRadius:l,...u}=o;return n.jsxs(O,{children:[n.jsx(s,{innerRadius:`${p}%`,outerRadius:`${l}%`,...u}),n.jsxs(mn,{gap:"md",alignItems:"flex-start",children:[n.jsx(c,{component:"Slider",items:[{label:"Padding angle",value:o.paddingAngle,min:0,max:30,step:1,onChange:e=>{t(r=>({...r,paddingAngle:e}))}},{label:"Stroke width",value:o.strokeWidth,min:.5,max:5,step:.5,onChange:e=>{t(r=>({...r,strokeWidth:e}))}},{label:"Start angle",value:o.startAngle,min:0,max:180,step:1,onChange:e=>{t(r=>({...r,startAngle:e}))}},{label:"End angle",value:o.endAngle,min:180,max:360,step:1,onChange:e=>{t(r=>({...r,endAngle:e}))}},{label:"Fill opacity",value:o.fillOpacity,min:0,max:1,step:.1,onChange:e=>{t(r=>({...r,fillOpacity:e}))}},{label:"Tooltip animation duration",value:o.tooltipAnimationDuration,min:0,max:2e3,onChange:e=>{t(r=>({...r,tooltipAnimationDuration:e}))}}]}),n.jsxs(O,{w:"auto",children:[n.jsx(c,{component:"Slider",items:[{label:"Inner Radius",value:o.innerRadius,min:0,max:100,onChange:e=>{t(r=>({...r,innerRadius:e}))}},{label:"Outer Radius",value:o.outerRadius,min:0,max:100,onChange:e=>{t(r=>({...r,outerRadius:e}))}},{label:"Label Offset",value:o.labelOffset,min:0,max:100,onChange:e=>{t(r=>({...r,labelOffset:e}))}}]}),n.jsx(c,{component:"Select",items:[{label:"Tooltip data source",defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],value:o.tooltipDataSource,onChange:e=>{t(r=>({...r,tooltipDataSource:e}))}}]}),n.jsx(c,{component:"Switch",items:[{label:"tooltip",isChecked:o.withTooltip,onChange:()=>t(e=>({...e,withTooltip:!e.withTooltip}))},{label:"legend",isChecked:o.withLegend,onChange:()=>t(e=>({...e,withLegend:!e.withLegend}))},{label:"label",isChecked:o.withLabels,onChange:()=>t(e=>({...e,withLabels:!e.withLabels}))},{label:"label line",isChecked:o.withLabelLines,onChange:()=>t(e=>({...e,withLabelLines:!e.withLabelLines}))},{label:"isPercent",isChecked:o.isPercent,onChange:()=>t(e=>({...e,isPercent:!e.isPercent}))}]})]})]})]})},g=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsxs(n.Fragment,{children:[n.jsx(s,{data:a,size:"sm"}),n.jsx(s,{data:a,size:"md"}),n.jsx(s,{data:a,size:"lg"})]})},v=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,withLegend:!0})},b=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,valueFormatter:o=>o.toLocaleString()})},C=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,labelFormatter:o=>o.toLocaleString()})},P=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,fillOpacity:[.8,.7]})},S=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,pieProps:{activeShape:{strokeWidth:2,stroke:["black","white"]},inactiveShape:{opacity:.5}}})},x=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]),o=t=>{const{payload:p}=t;return p?n.jsx(cn,{variant:"subtle",colorScheme:"gray",children:n.jsx(dn,{gap:"sm",children:p.map((l,u)=>{var e;return n.jsxs(un,{w:"full",justifyContent:"space-between",children:[n.jsx(k,{children:l==null?void 0:l.name}),n.jsx(k,{color:(e=l==null?void 0:l.payload)==null?void 0:e.color,children:l==null?void 0:l.value})]},`payload-${u}`)})})}):null};return n.jsx(s,{data:a,tooltipProps:{content:o}})},w=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,withLegend:!0,legendProps:{verticalAlign:"bottom",mb:"0",mt:"4"}})},f=()=>{const a=i.useMemo(()=>[{name:"USA",value:400,color:"red.500"},{name:"India",value:300,color:"orange.500"},{name:"Japan",value:100,color:"blue.500"},{name:"Other",value:200,color:"gray.500"}],[]);return n.jsx(s,{data:a,labelProps:{value:"DonutChart",position:"center",fill:["black","white"],fontSize:"md",fontWeight:"bold"}})};var D,T,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(R=(T=d.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var I,M,J;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
        value: props.fillOpacity as number,
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
          value: props.innerRadius as number,
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
          value: props.outerRadius as number,
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
          value: props.labelOffset as number,
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
              tooltipDataSource: value as TooltipDataSourceType
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
}`,...(J=(M=h.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var U,_,W;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(W=(_=g.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var F,N,V;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
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
}`,...(V=(N=v.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var z,$,H;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(H=($=b.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var E,B,q;C.parameters={...C.parameters,docs:{...(E=C.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(q=(B=C.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var G,K,Q;P.parameters={...P.parameters,docs:{...(G=P.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=P.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;S.parameters={...S.parameters,docs:{...(X=S.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ne,ae;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
}`,...(ae=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,te,re;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var le,se,ie;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
  return <DonutChart data={data} labelProps={{
    value: "DonutChart",
    position: "center",
    fill: ["black", "white"],
    fontSize: "md",
    fontWeight: "bold"
  }} />;
}`,...(ie=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};const ka=["basic","custom","withSize","withLegend","withValueFormatter","withLabelFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend","customLabel"];export{ka as __namedExportsOrder,d as basic,h as custom,S as customActiveShape,f as customLabel,w as customLegend,x as customTooltip,Oa as default,P as withFillOpacity,C as withLabelFormatter,v as withLegend,g as withSize,b as withValueFormatter};
