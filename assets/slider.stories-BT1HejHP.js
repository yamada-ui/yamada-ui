import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as l}from"./index-ClcD9ViR.js";import{u as Ue,C as We}from"./index.esm-C-rOWAyx.js";import{b as n,c as Xe,d as o,e as z,f as R,g as Ye}from"./components-BcmmBqo7.js";import{T as i}from"./text-BB5_0k3k.js";import{a as Ze,B as P}from"./button-CtWzhuL8.js";import{C as er}from"./center-B5IQJJLi.js";import{V as Ne}from"./stack-CcCHu966.js";import{u as rr}from"./index-gGKStiao.js";import{T as nr}from"./tooltip-CtQO_TGc.js";import{F as D}from"./fieldset-D7vG6RZi.js";import{A as I}from"./activity-3I-evH6O.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-r-UN7Xzc.js";import"./factory-D0ba2aB7.js";import"./box-Ch0hVi2V.js";import"./index-rZyt8EED.js";import"./use-checkbox-D-VN4oI2.js";import"./index-CC4Nvd09.js";import"./form-control-BjOXh3qv.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-B--WxH8d.js";import"./factory-COvmBIaQ.js";import"./proxy-DYgA1A03.js";import"./index-CUCM51Cx.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-CTLjK8Sl.js";import"./index-BWwQf8_A.js";import"./index-c15aqeo_.js";import"./select-tL1_OW35.js";import"./select-list-DTHtP90Y.js";import"./index-D0l_ls7Z.js";import"./index-I8sPqzTA.js";import"./icon-47ftZrjE.js";import"./index-Dwwrjx8s.js";import"./popover-trigger-kCg_5LKg.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-YDlv44yi.js";import"./slide-fade-B_qqM4fM.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-DCP_Eude.js";import"./index-DQZtUkQ0.js";import"./index-D8fKLhx4.js";import"./portal-nz1T67ed.js";import"./index-DGFU5M_O.js";import"./loading-1q-H-TJ4.js";import"./visually-hidden-BE6IIooX.js";import"./createLucideIcon-C_T9K6g-.js";const sn={component:n,title:"Components / Forms / Slider"},u=()=>e.jsx(n,{}),d=()=>e.jsx(n,{defaultValue:50}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",defaultValue:25}),e.jsx(n,{size:"md",defaultValue:50}),e.jsx(n,{size:"lg",defaultValue:75})]}),m=()=>e.jsx(e.Fragment,{children:Xe.map(r=>e.jsx(n,{colorScheme:r},r))}),p=()=>e.jsx(n,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReversed:!0}),e.jsx(n,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),S=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{max:200,min:0,value:r,onChange:a})]})},g=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{step:10,value:r,onChange:a})]})},v=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{focusThumbOnChange:!1,step:10,value:r}),e.jsxs(Ze,{as:er,gap:"md",w:"full",children:[e.jsx(P,{isDisabled:r===0,onClick:()=>a(s=>s!==0?s-10:s),children:"-10"}),e.jsx(P,{colorScheme:"blue",isDisabled:r===100,onClick:()=>a(s=>s!==100?s+10:s),children:"+10"})]})]})},x=()=>e.jsxs(Ne,{gap:"lg",children:[e.jsxs(n,{size:"sm",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(n,{size:"md",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(n,{size:"lg",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),b=()=>{const[r,a]=l.useState(50),[s,{off:t,on:E}]=rr(!1);return e.jsxs(n,{mt:"10",value:r,onChange:a,onMouseEnter:E,onMouseLeave:t,children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(nr,{label:`${r}%`,open:s,placement:"top",children:e.jsx(z,{})})]})},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsx(D,{helperMessage:"Please select your preferred volume.",isDisabled:!0,legend:"Sound volume",children:e.jsx(n,{})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsx(D,{helperMessage:"Please select your preferred volume.",isReadOnly:!0,legend:"Sound volume",children:e.jsx(n,{})})]}),k=()=>{const[r,a]=l.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:r<20,value:r,onChange:a}),e.jsx(D,{errorMessage:"Volume should be set to 20 or higher.",isInvalid:r<20,legend:"Sound volume",children:e.jsx(n,{value:r,onChange:a})})]})},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(n,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(n,{children:[e.jsx(R,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(z,{bg:"blue.700"})]}),e.jsxs(n,{children:[e.jsx(R,{bg:"red.200",children:e.jsx(Ye,{bg:"red.500"})}),e.jsx(z,{bg:"red.700"})]})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{thumbProps:{boxSize:"6",children:e.jsx(I,{}),color:"blue.500"}}),e.jsx(n,{children:e.jsx(z,{boxSize:"6",color:"blue.500",children:e.jsx(I,{})})})]}),M=()=>{const[r,a]=l.useState(50);return e.jsxs(n,{mt:"10",value:r,onChange:a,children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(o,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:r,w:"10",children:[r,"%"]})]})},V=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,onChange:a})]})},T=()=>{const[r,a]=l.useState(50),[s,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", Start Value: ",s]}),e.jsx(n,{value:r,onChange:a,onChangeStart:t})]})},F=()=>{const[r,a]=l.useState(50),[s,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", End Value: ",s]}),e.jsx(n,{value:r,onChange:a,onChangeEnd:t})]})},y=()=>{var B;const r={slider:50},{control:a,formState:{errors:s},handleSubmit:t,watch:E}=Ue({defaultValues:r}),Qe=O=>console.log("submit:",O);return console.log("watch:",E()),e.jsxs(Ne,{as:"form",onSubmit:t(Qe),children:[e.jsx(D,{errorMessage:(B=s.slider)==null?void 0:B.message,isInvalid:!!s.slider,legend:"Sound volume",children:e.jsx(We,{name:"slider",control:a,render:({field:O})=>e.jsx(n,{...O}),rules:{max:{message:"The maximum value is 50.",value:50}}})}),e.jsx(P,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,G,H;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,_,$;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var q,J,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(U=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <Slider h="calc(100vh - 16px * 2)" orientation="vertical" />;
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider h="calc(100vh - 16px * 3 - 14px)" isReversed orientation="vertical" />
    </>;
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,ae,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider max={200} min={0} value={value} onChange={onChange} />
    </>;
}`,...(se=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,le,te;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider step={10} value={value} onChange={onChange} />
    </>;
}`,...(te=(le=g.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,ue,de;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider focusThumbOnChange={false} step={10} value={value} />

      <ButtonGroup as={Center} gap="md" w="full">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button colorScheme="blue" isDisabled={value === 100} onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </ButtonGroup>
    </>;
}`,...(de=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var ce,me,pe;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <Slider size="sm">
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark ml="-5" value={25} w="10">
          25%
        </SliderMark>
        <SliderMark ml="-5" value={50} w="10">
          50%
        </SliderMark>
        <SliderMark ml="-5" value={75} w="10">
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,Se,ge;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    off,
    on
  }] = useBoolean(false);
  return <Slider mt="10" value={value} onChange={onChange} onMouseEnter={on} onMouseLeave={off}>
      <SliderMark ml="-5" value={25} w="10">
        25%
      </SliderMark>
      <SliderMark ml="-5" value={50} w="10">
        50%
      </SliderMark>
      <SliderMark ml="-5" value={75} w="10">
        75%
      </SliderMark>

      <Tooltip label={\`\${value}%\`} open={isOpen} placement="top">
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(ge=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var ve,xe,be;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <Fieldset helperMessage="Please select your preferred volume." isDisabled legend="Sound volume">
        <Slider />
      </Fieldset>
    </>;
}`,...(be=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var je,Ce,ke;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <Fieldset helperMessage="Please select your preferred volume." isReadOnly legend="Sound volume">
        <Slider />
      </Fieldset>
    </>;
}`,...(ke=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var fe,we,Me;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <Fieldset errorMessage="Volume should be set to 20 or higher." isInvalid={value < 20} legend="Sound volume">
        <Slider value={value} onChange={onChange} />
      </Fieldset>
    </>;
}`,...(Me=(we=k.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var Ve,Te,Fe;f.parameters={...f.parameters,docs:{...(Ve=f.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <Slider filledTrackColor="orange.500" thumbColor="orange.700" trackColor="orange.200" />

      <Slider filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
    }} trackProps={{
      bg: "green.200"
    }} />

      <Slider>
        <SliderTrack bg="blue.200" filledTrackProps={{
        bg: "blue.500"
      }} />
        <SliderThumb bg="blue.700" />
      </Slider>

      <Slider>
        <SliderTrack bg="red.200">
          <SliderFilledTrack bg="red.500" />
        </SliderTrack>

        <SliderThumb bg="red.700" />
      </Slider>
    </>;
}`,...(Fe=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:Fe.source}}};var ye,ze,De;w.parameters={...w.parameters,docs:{...(ye=w.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      boxSize: "6",
      children: <ActivityIcon />,
      color: "blue.500"
    }} />

      <Slider>
        <SliderThumb boxSize="6" color="blue.500">
          <ActivityIcon />
        </SliderThumb>
      </Slider>
    </>;
}`,...(De=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ee,Oe,Pe;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <Slider mt="10" value={value} onChange={onChange}>
      <SliderMark ml="-5" value={25} w="10">
        25%
      </SliderMark>
      <SliderMark ml="-5" value={50} w="10">
        50%
      </SliderMark>
      <SliderMark ml="-5" value={75} w="10">
        75%
      </SliderMark>
      <SliderMark bg="blue.500" color="white" ml="-5" mt="-10" py="0.5" rounded="md" value={value} w="10">
        {value}%
      </SliderMark>
    </Slider>;
}`,...(Pe=(Oe=M.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source}}};var Be,Re,Ie;V.parameters={...V.parameters,docs:{...(Be=V.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(Ie=(Re=V.parameters)==null?void 0:Re.docs)==null?void 0:Ie.source}}};var Ae,Ge,He;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(He=(Ge=T.parameters)==null?void 0:Ge.docs)==null?void 0:He.source}}};var Le,_e,$e;F.parameters={...F.parameters,docs:{...(Le=F.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...($e=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:$e.source}}};var qe,Je,Ke;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  interface Data {
    slider: number;
  }
  const defaultValues: Data = {
    slider: 50
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.slider?.message} isInvalid={!!errors.slider} legend="Sound volume">
        <Controller name="slider" control={control} render={({
        field
      }) => <Slider {...field} />} rules={{
        max: {
          message: "The maximum value is 50.",
          value: 50
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ke=(Je=y.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const on=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{on as __namedExportsOrder,u as basic,f as customColor,V as customControl,M as customMark,w as customThumb,sn as default,j as isDisabled,k as isInvalid,C as isReadonly,F as onChangeEnd,T as onChangeStart,y as reactHookForm,m as withColorScheme,d as withDefaultValue,v as withFocusThumbOnChange,x as withMark,S as withMinMax,p as withOrientation,h as withReversed,c as withSize,g as withStep,b as withTooltip};
