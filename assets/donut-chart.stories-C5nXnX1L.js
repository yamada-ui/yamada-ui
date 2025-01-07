import{j as n}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{P as c}from"./components-BcmmBqo7.js";import{h as $e,l as He,u as Ee,a as Be,b as qe,C as Ge,c as Ke,R as Qe,j as Xe,L as Ye,d as Ze,T as en,e as nn}from"./use-chart-tooltip-BjBNhT1B.js";import{u as an,o as on}from"./theme-provider-r-UN7Xzc.js";import{c as ie,b as tn}from"./factory-D0ba2aB7.js";import{u as rn,P as ln,a as sn}from"./use-pie-chart-DMAsKOAe.js";import{f as un}from"./forward-ref-D13m8o2p.js";import{a as pn}from"./use-component-style-B--WxH8d.js";import{V as j,H as mn}from"./stack-CcCHu966.js";import{W as cn}from"./flex-Dy15NtS6.js";import{C as dn,b as hn}from"./card-C919QPqq.js";import{T as O}from"./text-BB5_0k3k.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./box-Ch0hVi2V.js";import"./index-rZyt8EED.js";import"./use-checkbox-D-VN4oI2.js";import"./index-CC4Nvd09.js";import"./form-control-BjOXh3qv.js";import"./factory-COvmBIaQ.js";import"./proxy-DYgA1A03.js";import"./index-CUCM51Cx.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-CTLjK8Sl.js";import"./tooltip-CtQO_TGc.js";import"./index-I8sPqzTA.js";import"./index-Dwwrjx8s.js";import"./index-D8fKLhx4.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./index-YDlv44yi.js";import"./portal-nz1T67ed.js";import"./index-DGFU5M_O.js";import"./slide-fade-B_qqM4fM.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-BWwQf8_A.js";import"./index-c15aqeo_.js";import"./select-tL1_OW35.js";import"./select-list-DTHtP90Y.js";import"./index-D0l_ls7Z.js";import"./icon-47ftZrjE.js";import"./popover-trigger-kCg_5LKg.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./tiny-invariant-CopsF_GD.js";import"./index-CpCSUgdU.js";import"./use-css-0ZSHo6c7.js";import"./PolarAngleAxis-DWSytvmP.js";const vn=({styles:a,...o})=>{const{theme:t}=an(),[u,i]=$e([o.labelProps??{},He],a.label)(t);return{getLabelProps:s.useCallback(({className:e,...r}={},y=null)=>({ref:y,className:ie(e,i),...r,...u}),[i,u])}},l=un((a,o)=>{const[t,u]=pn("DonutChart",a),{className:i,data:p,endAngle:e,withLabels:r,innerRadius:y=r?"60%":"80%",isPercent:ue,labelFormatter:pe,labelOffset:me,outerRadius:ce,paddingAngle:de,percent:he,startAngle:ve,strokeWidth:ge,tooltipAnimationDuration:be,tooltipDataSource:Ce="all",unit:Pe,valueFormatter:Se,withLabelLines:xe,withLegend:we=!1,withTooltip:fe=!0,cellProps:ye,chartProps:Le,containerProps:Ae,labelProps:je,legendProps:Oe,pieProps:De,tooltipProps:ke,...Te}=on(u),{pieVars:Re,setHighlightedArea:Ie,getCellProps:A,getPieChartProps:Me,getPieProps:Je}=rn({data:p,endAngle:e,innerRadius:y,isPercent:ue,labelFormatter:pe,labelOffset:me,outerRadius:ce,paddingAngle:de,percent:he,startAngle:ve,strokeWidth:ge,styles:t,withLabelLines:xe,withLabels:r,cellProps:ye,chartProps:Le,pieProps:De}),{getContainerProps:Ue}=Ee({containerProps:Ae}),{getTooltipProps:_e,tooltipProps:We}=Be({styles:t,tooltipAnimationDuration:be,tooltipProps:ke}),{getLegendProps:Fe,legendProps:Ne}=qe({legendProps:Oe}),{getLabelProps:Ve}=vn({styles:t,labelProps:je}),ze=s.useMemo(()=>p.map(({name:m},L)=>n.jsx(Ge,{...A({className:"ui-donut-chart__cell",index:L})},`donut-cell-${m}`)),[p,A]);return n.jsx(Ke,{value:{styles:t},children:n.jsx(tn.div,{ref:o,className:ie("ui-donut-chart",i),__css:{maxW:"full",vars:Re,...t.container},...Te,children:n.jsx(Qe,{...Ue({className:"ui-donut-chart__container"}),children:n.jsxs(ln,{...Me({className:"ui-donut-chart__chart"}),children:[n.jsxs(sn,{...Je({className:"ui-donut-chart__donut"}),children:[ze,n.jsx(Xe,{...Ve({className:"ui-donut-chart__label"})})]}),we?n.jsx(Ye,{content:({payload:m})=>n.jsx(Ze,{className:"ui-donut-chart__legend",payload:m,onHighlight:Ie,...Ne}),...Fe()}):null,fe?n.jsx(en,{content:({label:m,payload:L})=>n.jsx(nn,{className:"ui-donut-chart__tooltip",label:m,payload:Ce==="segment"?L:p,unit:Pe,valueFormatter:Se,...We}),..._e()}):null]})})})})});l.displayName="DonutChart";l.__ui__="DonutChart";const ba={component:l,title:"Components / Data Display / DonutChart"},d=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a})},h=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]),[o,t]=s.useState({data:a,endAngle:-270,fillOpacity:1,innerRadius:60,outerRadius:80,paddingAngle:0,startAngle:90,strokeWidth:1,tooltipAnimationDuration:0,tooltipDataSource:"all",withLegend:!1,withTooltip:!0}),{innerRadius:u,outerRadius:i,...p}=o;return n.jsxs(j,{children:[n.jsx(l,{innerRadius:`${u}%`,outerRadius:`${i}%`,...p}),n.jsxs(cn,{alignItems:"flex-start",gap:"md",children:[n.jsx(c,{component:"Slider",items:[{label:"Padding angle",max:30,min:0,step:1,value:o.paddingAngle,onChange:e=>{t(r=>({...r,paddingAngle:e}))}},{label:"Stroke width",max:5,min:.5,step:.5,value:o.strokeWidth,onChange:e=>{t(r=>({...r,strokeWidth:e}))}},{label:"Start angle",max:180,min:0,step:1,value:o.startAngle,onChange:e=>{t(r=>({...r,startAngle:e}))}},{label:"End angle",max:360,min:180,step:1,value:o.endAngle,onChange:e=>{t(r=>({...r,endAngle:e}))}},{label:"Fill opacity",max:1,min:0,step:.1,value:o.fillOpacity,onChange:e=>{t(r=>({...r,fillOpacity:e}))}},{label:"Tooltip animation duration",max:2e3,min:0,value:o.tooltipAnimationDuration,onChange:e=>{t(r=>({...r,tooltipAnimationDuration:e}))}}]}),n.jsxs(j,{w:"auto",children:[n.jsx(c,{component:"Slider",items:[{label:"Inner Radius",max:100,min:0,value:o.innerRadius,onChange:e=>{t(r=>({...r,innerRadius:e}))}},{label:"Outer Radius",max:100,min:0,value:o.outerRadius,onChange:e=>{t(r=>({...r,outerRadius:e}))}},{label:"Label Offset",max:100,min:0,value:o.labelOffset,onChange:e=>{t(r=>({...r,labelOffset:e}))}}]}),n.jsx(c,{component:"Select",items:[{defaultValue:"all",items:[{label:"all",value:"all"},{label:"segment",value:"segment"}],label:"Tooltip data source",value:o.tooltipDataSource,onChange:e=>{t(r=>({...r,tooltipDataSource:e}))}}]}),n.jsx(c,{component:"Switch",items:[{isChecked:o.withTooltip,label:"tooltip",onChange:()=>t(e=>({...e,withTooltip:!e.withTooltip}))},{isChecked:o.withLegend,label:"legend",onChange:()=>t(e=>({...e,withLegend:!e.withLegend}))},{isChecked:o.withLabels,label:"label",onChange:()=>t(e=>({...e,withLabels:!e.withLabels}))},{isChecked:o.withLabelLines,label:"label line",onChange:()=>t(e=>({...e,withLabelLines:!e.withLabelLines}))},{isChecked:o.isPercent,label:"isPercent",onChange:()=>t(e=>({...e,isPercent:!e.isPercent}))}]})]})]})]})},v=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsxs(n.Fragment,{children:[n.jsx(l,{size:"sm",data:a}),n.jsx(l,{size:"md",data:a}),n.jsx(l,{size:"lg",data:a})]})},g=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,withLegend:!0})},b=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,valueFormatter:o=>o.toLocaleString()})},C=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,labelFormatter:o=>o.toLocaleString()})},P=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,fillOpacity:[.8,.7]})},S=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,pieProps:{activeShape:{stroke:["black","white"],strokeWidth:2},inactiveShape:{opacity:.5}}})},x=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]),o=t=>{const{payload:u}=t;return u?n.jsx(dn,{colorScheme:"gray",variant:"subtle",children:n.jsx(hn,{gap:"sm",children:u.map((i,p)=>n.jsxs(mn,{justifyContent:"space-between",w:"full",children:[n.jsx(O,{children:i.name}),n.jsx(O,{color:i.payload.color,children:i.value})]},`payload-${p}`))})}):null};return n.jsx(l,{data:a,tooltipProps:{content:o}})},w=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,withLegend:!0,legendProps:{mb:"0",mt:"4",verticalAlign:"bottom"}})},f=()=>{const a=s.useMemo(()=>[{name:"USA",color:"red.500",value:400},{name:"India",color:"orange.500",value:300},{name:"Japan",color:"blue.500",value:100},{name:"Other",color:"gray.500",value:200}],[]);return n.jsx(l,{data:a,labelProps:{fill:["black","white"],fontSize:"md",fontWeight:"bold",position:"center",value:"DonutChart"}})};var D,k,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} />;
}`,...(T=(k=d.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var R,I,M;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  const [props, setProps] = useState<DonutChartProps>({
    data: data,
    endAngle: -270,
    fillOpacity: 1,
    innerRadius: 60,
    outerRadius: 80,
    paddingAngle: 0,
    startAngle: 90,
    strokeWidth: 1,
    tooltipAnimationDuration: 0,
    tooltipDataSource: "all",
    withLegend: false,
    withTooltip: true
  });
  const {
    innerRadius,
    outerRadius,
    ...rest
  } = props;
  return <VStack>
      <DonutChart innerRadius={\`\${innerRadius}%\`} outerRadius={\`\${outerRadius}%\`} {...rest} />

      <Wrap alignItems="flex-start" gap="md">
        <PropControl component="Slider" items={[{
        label: "Padding angle",
        max: 30,
        min: 0,
        step: 1,
        value: props.paddingAngle,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            paddingAngle: value
          }));
        }
      }, {
        label: "Stroke width",
        max: 5,
        min: 0.5,
        step: 0.5,
        value: props.strokeWidth,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            strokeWidth: value
          }));
        }
      }, {
        label: "Start angle",
        max: 180,
        min: 0,
        step: 1,
        value: props.startAngle,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            startAngle: value
          }));
        }
      }, {
        label: "End angle",
        max: 360,
        min: 180,
        step: 1,
        value: props.endAngle,
        onChange: value => {
          setProps(prev => ({
            ...prev,
            endAngle: value
          }));
        }
      }, {
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

        <VStack w="auto">
          <PropControl component="Slider" items={[{
          label: "Inner Radius",
          max: 100,
          min: 0,
          value: props.innerRadius as number,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              innerRadius: value
            }));
          }
        }, {
          label: "Outer Radius",
          max: 100,
          min: 0,
          value: props.outerRadius as number,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              outerRadius: value
            }));
          }
        }, {
          label: "Label Offset",
          max: 100,
          min: 0,
          value: props.labelOffset as number,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              labelOffset: value
            }));
          }
        }]} />

          <PropControl component="Select" items={[{
          defaultValue: "all",
          items: [{
            label: "all",
            value: "all"
          }, {
            label: "segment",
            value: "segment"
          }],
          label: "Tooltip data source",
          value: props.tooltipDataSource,
          onChange: value => {
            setProps(prev => ({
              ...prev,
              tooltipDataSource: value as TooltipDataSourceType
            }));
          }
        }]} />

          <PropControl component="Switch" items={[{
          isChecked: props.withTooltip,
          label: "tooltip",
          onChange: () => setProps(prev => ({
            ...prev,
            withTooltip: !prev.withTooltip
          }))
        }, {
          isChecked: props.withLegend,
          label: "legend",
          onChange: () => setProps(prev => ({
            ...prev,
            withLegend: !prev.withLegend
          }))
        }, {
          isChecked: props.withLabels,
          label: "label",
          onChange: () => setProps(prev => ({
            ...prev,
            withLabels: !prev.withLabels
          }))
        }, {
          isChecked: props.withLabelLines,
          label: "label line",
          onChange: () => setProps(prev => ({
            ...prev,
            withLabelLines: !prev.withLabelLines
          }))
        }, {
          isChecked: props.isPercent,
          label: "isPercent",
          onChange: () => setProps(prev => ({
            ...prev,
            isPercent: !prev.isPercent
          }))
        }]} />
        </VStack>
      </Wrap>
    </VStack>;
}`,...(M=(I=h.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var J,U,_;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <>
      <DonutChart size="sm" data={data} />
      <DonutChart size="md" data={data} />
      <DonutChart size="lg" data={data} />
    </>;
}`,...(_=(U=v.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var W,F,N;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} withLegend />;
}`,...(N=(F=g.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var V,z,$;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} valueFormatter={value => value.toLocaleString()} />;
}`,...($=(z=b.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var H,E,B;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} labelFormatter={value => value.toLocaleString()} />;
}`,...(B=(E=C.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var q,G,K;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} fillOpacity={[0.8, 0.7]} />;
}`,...(K=(G=P.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;S.parameters={...S.parameters,docs:{...(Q=S.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} pieProps={{
    activeShape: {
      stroke: ["black", "white"],
      strokeWidth: 2
    },
    inactiveShape: {
      opacity: 0.5
    }
  }} />;
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ne;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  const CustomTooltip: ChartTooltip = (props: {
    payload?: Dict[];
  }) => {
    const {
      payload
    } = props;
    if (!payload) return null;
    return <Card colorScheme="gray" variant="subtle">
        <CardBody gap="sm">
          {payload.map((value, index) => <HStack key={\`payload-\${index}\`} justifyContent="space-between" w="full">
              <Text>{value.name}</Text>
              <Text color={value.payload.color}>{value.value}</Text>
            </HStack>)}
        </CardBody>
      </Card>;
  };
  return <DonutChart data={data} tooltipProps={{
    content: CustomTooltip
  }} />;
}`,...(ne=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,oe,te;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} withLegend legendProps={{
    mb: "0",
    mt: "4",
    verticalAlign: "bottom"
  }} />;
}`,...(te=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var re,le,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const data: CellProps[] = useMemo(() => [{
    name: "USA",
    color: "red.500",
    value: 400
  }, {
    name: "India",
    color: "orange.500",
    value: 300
  }, {
    name: "Japan",
    color: "blue.500",
    value: 100
  }, {
    name: "Other",
    color: "gray.500",
    value: 200
  }], []);
  return <DonutChart data={data} labelProps={{
    fill: ["black", "white"],
    fontSize: "md",
    fontWeight: "bold",
    position: "center",
    value: "DonutChart"
  }} />;
}`,...(se=(le=f.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const Ca=["basic","custom","withSize","withLegend","withValueFormatter","withLabelFormatter","withFillOpacity","customActiveShape","customTooltip","customLegend","customLabel"];export{Ca as __namedExportsOrder,d as basic,h as custom,S as customActiveShape,f as customLabel,w as customLegend,x as customTooltip,ba as default,P as withFillOpacity,C as withLabelFormatter,g as withLegend,v as withSize,b as withValueFormatter};
