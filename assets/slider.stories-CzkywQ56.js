import{j as e}from"./extends-CwFRzn3r.js";import{u as Ue}from"./index-CoJrGj-T.js";import{r as l}from"./index-BwDkhjyp.js";import{u as We,C as Xe}from"./index.esm-DXPXqkjk.js";import{b as n,c as Ye,d as o,e as z,f as B,g as Ze}from"./components-C9595ZAn.js";import{T as i}from"./text-DzUFhekZ.js";import{C as er}from"./center-tpAwapBn.js";import{B as P}from"./button-D6MtFxez.js";import{V as Ne}from"./stack-DlPMk-Cq.js";import{T as rr}from"./tooltip-BjYwaRc0.js";import{F as D}from"./form-control-DEVK4waL.js";import{A as I}from"./activity-CWuc6JZn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-EJODL346.js";import"./factory-CB2imrkD.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./theme-provider-D1j4LEQ9.js";import"./ui-provider-n09sy5wb.js";import"./index-C7I_pN7l.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BppVNRPn.js";import"./index-CtiIN-rJ.js";import"./Combination-IUp2vs9T.js";import"./loading-6PAwx6O9.js";import"./icon-GDJ6YhRU.js";import"./use-component-style-CLkw4iG2.js";import"./use-var-D-eiJB8b.js";import"./forward-ref-BWI-Phbn.js";import"./factory-C3FBZMw9.js";import"./portal-DhKIhJFj.js";import"./index-Drt3gf4w.js";import"./notice-Dqn85RIz.js";import"./alert-CKoFoHX4.js";import"./close-button-DxeSp445.js";import"./use-ripple-D_F9Vz55.js";import"./container-CjODcgJW.js";import"./box-DZiPb3wb.js";import"./checkbox-B9VwNL8A.js";import"./index-DMJJ3cSc.js";import"./index-DeXdSJTC.js";import"./index-D0acwzsx.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./index-D__Mkjvw.js";import"./index-BAaRSIWS.js";import"./select-DEfMB_vi.js";import"./select-list-LABsm-BI.js";import"./index-LwS2tk1a.js";import"./index-C60CJblF.js";import"./index-BZtt5eCJ.js";import"./popover-trigger-EpYwdnAy.js";import"./slide-fade-C-Ns1lqG.js";import"./index-BWWKr8fL.js";import"./index-wnA7eVNJ.js";import"./forward-ref-scR1bmHx.js";import"./utils-Da0AOJfu.js";import"./scale-fade-WF4VFMO2.js";import"./index-DORD3SAs.js";import"./index-DzUochMe.js";import"./index-CF-WRANw.js";import"./lucide-icon-DTzfJBKH.js";const cn={component:n,title:"Components / Forms / Slider"},u=()=>e.jsx(n,{}),m=()=>e.jsx(n,{defaultValue:50}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",defaultValue:25}),e.jsx(n,{size:"md",defaultValue:50}),e.jsx(n,{size:"lg",defaultValue:75})]}),d=()=>e.jsx(e.Fragment,{children:Ye.map(r=>e.jsx(n,{colorScheme:r},r))}),p=()=>e.jsx(n,{h:"calc(100vh - 16px * 2)",orientation:"vertical"}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReversed:!0}),e.jsx(n,{h:"calc(100vh - 16px * 3 - 14px)",isReversed:!0,orientation:"vertical"})]}),S=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{max:200,min:0,value:r,onChange:a})]})},g=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{step:10,value:r,onChange:a})]})},x=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{focusThumbOnChange:!1,step:10,value:r}),e.jsxs(er,{gap:"md",w:"full",children:[e.jsx(P,{isDisabled:r===0,onClick:()=>a(s=>s!==0?s-10:s),children:"-10"}),e.jsx(P,{colorScheme:"blue",isDisabled:r===100,onClick:()=>a(s=>s!==100?s+10:s),children:"+10"})]})]})},v=()=>e.jsxs(Ne,{gap:"lg",children:[e.jsxs(n,{size:"sm",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(n,{size:"md",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]}),e.jsxs(n,{size:"lg",children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"})]})]}),b=()=>{const[r,a]=l.useState(50),[s,{off:t,on:O}]=Ue(!1);return e.jsxs(n,{mt:"10",value:r,onChange:a,onMouseEnter:O,onMouseLeave:t,children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsx(rr,{isOpen:s,label:`${r}%`,placement:"top",children:e.jsx(z,{})})]})},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsx(D,{helperMessage:"Please select your preferred volume.",isDisabled:!0,label:"volume (sound)",children:e.jsx(n,{})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsx(D,{helperMessage:"Please select your preferred volume.",isReadOnly:!0,label:"volume (sound)",children:e.jsx(n,{})})]}),k=()=>{const[r,a]=l.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:r<20,value:r,onChange:a}),e.jsx(D,{errorMessage:"Volume should be set to 20 or higher.",isInvalid:r<20,label:"volume (sound)",children:e.jsx(n,{value:r,onChange:a})})]})},f=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{filledTrackColor:"orange.500",thumbColor:"orange.700",trackColor:"orange.200"}),e.jsx(n,{filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"},trackProps:{bg:"green.200"}}),e.jsxs(n,{children:[e.jsx(B,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(z,{bg:"blue.700"})]}),e.jsxs(n,{children:[e.jsx(B,{bg:"red.200",children:e.jsx(Ze,{bg:"red.500"})}),e.jsx(z,{bg:"red.700"})]})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{thumbProps:{boxSize:"6",children:e.jsx(I,{}),color:"blue.500"}}),e.jsx(n,{children:e.jsx(z,{boxSize:"6",color:"blue.500",children:e.jsx(I,{})})})]}),M=()=>{const[r,a]=l.useState(50);return e.jsxs(n,{mt:"10",value:r,onChange:a,children:[e.jsx(o,{ml:"-5",value:25,w:"10",children:"25%"}),e.jsx(o,{ml:"-5",value:50,w:"10",children:"50%"}),e.jsx(o,{ml:"-5",value:75,w:"10",children:"75%"}),e.jsxs(o,{bg:"blue.500",color:"white",ml:"-5",mt:"-10",py:"0.5",rounded:"md",value:r,w:"10",children:[r,"%"]})]})},V=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,onChange:a})]})},T=()=>{const[r,a]=l.useState(50),[s,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", Start Value: ",s]}),e.jsx(n,{value:r,onChange:a,onChangeStart:t})]})},F=()=>{const[r,a]=l.useState(50),[s,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", End Value: ",s]}),e.jsx(n,{value:r,onChange:a,onChangeEnd:t})]})},y=()=>{var R;const r={slider:50},{control:a,formState:{errors:s},handleSubmit:t,watch:O}=We({defaultValues:r}),Qe=E=>console.log("submit:",E);return console.log("watch:",O()),e.jsxs(Ne,{as:"form",onSubmit:t(Qe),children:[e.jsx(D,{errorMessage:(R=s.slider)==null?void 0:R.message,isInvalid:!!s.slider,label:"Volume",children:e.jsx(Xe,{name:"slider",control:a,render:({field:E})=>e.jsx(n,{...E}),rules:{max:{message:"The maximum value is 50.",value:50}}})}),e.jsx(P,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,H,L;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(L=(H=u.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var _,$,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(q=($=m.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var G,J,K;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
}`,...(te=(le=g.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,ue,me;x.parameters={...x.parameters,docs:{...(ie=x.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider focusThumbOnChange={false} step={10} value={value} />

      <Center gap="md" w="full">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button colorScheme="blue" isDisabled={value === 100} onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(me=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,de,pe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var he,Se,ge;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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

      <Tooltip isOpen={isOpen} label={\`\${value}%\`} placement="top">
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(ge=(Se=b.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var xe,ve,be;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl helperMessage="Please select your preferred volume." isDisabled label="volume (sound)">
        <Slider />
      </FormControl>
    </>;
}`,...(be=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var je,Ce,ke;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl helperMessage="Please select your preferred volume." isReadOnly label="volume (sound)">
        <Slider />
      </FormControl>
    </>;
}`,...(ke=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var fe,we,Me;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl errorMessage="Volume should be set to 20 or higher." isInvalid={value < 20} label="volume (sound)">
        <Slider value={value} onChange={onChange} />
      </FormControl>
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
      children: <Activity />,
      color: "blue.500"
    }} />

      <Slider>
        <SliderThumb boxSize="6" color="blue.500">
          <Activity />
        </SliderThumb>
      </Slider>
    </>;
}`,...(De=(ze=w.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Oe,Ee,Pe;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Ee=M.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Re,Be,Ie;V.parameters={...V.parameters,docs:{...(Re=V.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(Ie=(Be=V.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Ae,He,Le;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Le=(He=T.parameters)==null?void 0:He.docs)==null?void 0:Le.source}}};var _e,$e,qe;F.parameters={...F.parameters,docs:{...(_e=F.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(qe=($e=F.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var Ge,Je,Ke;y.parameters={...y.parameters,docs:{...(Ge=y.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.slider?.message} isInvalid={!!errors.slider} label="Volume">
        <Controller name="slider" control={control} render={({
        field
      }) => <Slider {...field} />} rules={{
        max: {
          message: "The maximum value is 50.",
          value: 50
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ke=(Je=y.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const dn=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{dn as __namedExportsOrder,u as basic,f as customColor,V as customControl,M as customMark,w as customThumb,cn as default,j as isDisabled,k as isInvalid,C as isReadonly,F as onChangeEnd,T as onChangeStart,y as reactHookForm,d as withColorScheme,m as withDefaultValue,x as withFocusThumbOnChange,v as withMark,S as withMinMax,p as withOrientation,h as withReversed,c as withSize,g as withStep,b as withTooltip};
