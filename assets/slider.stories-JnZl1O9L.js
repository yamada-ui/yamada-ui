import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I,n as B}from"./icon-BQcQed63.js";import{u as Ue}from"./index-CBqzus2r.js";import{r as l}from"./index-uCp2LrAq.js";import{u as Xe,C as Ye}from"./index.esm-TLwx9zN6.js";import{e as n,c as Ze,f as s,g as D,h as q,i as er}from"./components-CaA2IFLO.js";import{T as i}from"./text-BOhk0htq.js";import{C as rr}from"./center-CSFPO4u1.js";import{B as P}from"./button-C5HSAH_Q.js";import{V as Ne}from"./stack-DeQ5YYY4.js";import{T as nr}from"./tooltip-DUFiaKRG.js";import{F as O}from"./form-control-CXekA9Vm.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./theme-provider-CfMKAtcZ.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./forward-ref-Dr5Hqd9a.js";import"./index-CYZlXLuv.js";import"./index-DDmzt4a4.js";import"./_basePickBy-Bio_TAWW.js";import"./iframe-DVwPDITX.js";import"../sb-preview/runtime.js";import"./index-CqS9fqXy.js";import"./component-IvP1ueaU.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-BWp85wBy.js";import"./index-kuq29Idc.js";import"./environment-provider-BhdF2tQ4.js";import"./motion-BNFRb361.js";import"./loading-provider-CtAcKjCW.js";import"./index-CAzj2Fxr.js";import"./Combination-nrDmEbEK.js";import"./loading-CD9zg-8p.js";import"./use-component-style-C1oydc60.js";import"./motion-Bi86PhT5.js";import"./index-DSHhgXSs.js";import"./container-portal--tud7o6s.js";import"./notice-CYOUCK2V.js";import"./alert-EQ9Vq4UV.js";import"./close-button-B2_55Hm9.js";import"./use-ripple-BZmEDmbU.js";import"./container-BHdAVcDB.js";import"./box-ANpItPfh.js";import"./index-BkEwqnoP.js";import"./index-Dc2KQwVC.js";import"./flex-BWicnFVx.js";import"./index-GzwDZ30x.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./index-Bh6_N6k1.js";import"./index-3VUv5hbS.js";import"./select-d9n7a2wp.js";import"./option-C98FFlvU.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./popover-content-DdSqGHqW.js";import"./index-DpNfAtp1.js";import"./index-BPmMvQRx.js";import"./index-DpYz45Vm.js";import"./index-CEbtGM79.js";import"./index-Bz6F23rc.js";import"./slide-fade-DX8q9FlF.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./index-3uUm-2Os.js";const jn={title:"Components / Forms / Slider",component:n},m=()=>e.jsx(n,{}),c=()=>e.jsx(n,{defaultValue:50}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{size:"sm",defaultValue:25}),e.jsx(n,{size:"md",defaultValue:50}),e.jsx(n,{size:"lg",defaultValue:75})]}),p=()=>e.jsx(e.Fragment,{children:Ze.map(r=>e.jsx(n,{colorScheme:r},r))}),h=()=>e.jsx(n,{orientation:"vertical",h:"calc(100vh - 16px * 2)"}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReversed:!0}),e.jsx(n,{isReversed:!0,orientation:"vertical",h:"calc(100vh - 16px * 3 - 14px)"})]}),g=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,min:0,max:200,onChange:a})]})},x=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,step:10,onChange:a})]})},v=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,step:10,focusThumbOnChange:!1}),e.jsxs(rr,{w:"full",gap:"md",children:[e.jsx(P,{isDisabled:r===0,onClick:()=>a(o=>o!==0?o-10:o),children:"-10"}),e.jsx(P,{isDisabled:r===100,colorScheme:"blue",onClick:()=>a(o=>o!==100?o+10:o),children:"+10"})]})]})},b=()=>e.jsxs(Ne,{gap:"lg",children:[e.jsxs(n,{size:"sm",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(n,{size:"md",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]}),e.jsxs(n,{size:"lg",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"})]})]}),j=()=>{const[r,a]=l.useState(50),[o,{on:t,off:u}]=Ue(!1);return e.jsxs(n,{value:r,onChange:a,mt:"10",onMouseEnter:t,onMouseLeave:u,children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsx(nr,{placement:"top",label:`${r}%`,isOpen:o,children:e.jsx(D,{})})]})},C=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0}),e.jsx(O,{isDisabled:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(n,{})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0}),e.jsx(O,{isReadOnly:!0,label:"volume (sound)",helperMessage:"Please select your preferred volume.",children:e.jsx(n,{})})]}),f=()=>{const[r,a]=l.useState(15);return e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:r<20,value:r,onChange:a}),e.jsx(O,{isInvalid:r<20,label:"volume (sound)",errorMessage:"Volume should be set to 20 or higher.",children:e.jsx(n,{value:r,onChange:a})})]})},w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{trackColor:"orange.200",filledTrackColor:"orange.500",thumbColor:"orange.700"}),e.jsx(n,{trackProps:{bg:"green.200"},filledTrackProps:{bg:"green.500"},thumbProps:{bg:"green.700"}}),e.jsxs(n,{children:[e.jsx(q,{bg:"blue.200",filledTrackProps:{bg:"blue.500"}}),e.jsx(D,{bg:"blue.700"})]}),e.jsxs(n,{children:[e.jsx(q,{bg:"red.200",children:e.jsx(er,{bg:"red.500"})}),e.jsx(D,{bg:"red.700"})]})]}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{thumbProps:{color:"blue.500",boxSize:"6",children:e.jsx(I,{icon:B})}}),e.jsx(n,{children:e.jsx(D,{color:"blue.500",boxSize:"6",children:e.jsx(I,{icon:B})})})]}),V=()=>{const[r,a]=l.useState(50);return e.jsx(e.Fragment,{children:e.jsxs(n,{value:r,onChange:a,mt:"10",children:[e.jsx(s,{value:25,w:"10",ml:"-5",children:"25%"}),e.jsx(s,{value:50,w:"10",ml:"-5",children:"50%"}),e.jsx(s,{value:75,w:"10",ml:"-5",children:"75%"}),e.jsxs(s,{value:r,bg:"blue.500",color:"white",py:"0.5",rounded:"md",w:"10",mt:"-10",ml:"-5",children:[r,"%"]})]})})},T=()=>{const[r,a]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r]}),e.jsx(n,{value:r,onChange:a})]})},F=()=>{const[r,a]=l.useState(50),[o,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", Start Value: ",o]}),e.jsx(n,{value:r,onChange:a,onChangeStart:t})]})},z=()=>{const[r,a]=l.useState(50),[o,t]=l.useState(50);return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:["Value: ",r,", End Value: ",o]}),e.jsx(n,{value:r,onChange:a,onChangeEnd:t})]})},y=()=>{var R;const r={slider:50},{control:a,handleSubmit:o,watch:t,formState:{errors:u}}=Xe({defaultValues:r}),Qe=E=>console.log("submit:",E);return console.log("watch:",t()),e.jsxs(Ne,{as:"form",onSubmit:o(Qe),children:[e.jsx(O,{isInvalid:!!u.slider,label:"Volume",errorMessage:(R=u.slider)==null?void 0:R.message,children:e.jsx(Ye,{name:"slider",control:a,rules:{max:{value:50,message:"The maximum value is 50."}},render:({field:E})=>e.jsx(n,{...E})})}),e.jsx(P,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var H,W,L;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Slider />;
}`,...(L=(W=m.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var _,$,A;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Slider defaultValue={50} />;
}`,...(A=($=c.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var G,J,K;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Slider size="sm" defaultValue={25} />
      <Slider size="md" defaultValue={50} />
      <Slider size="lg" defaultValue={75} />
    </>;
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,U;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      {colorSchemes.map(colorScheme => <Slider key={colorScheme} colorScheme={colorScheme} />)}
    </>;
}`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Slider orientation="vertical" h="calc(100vh - 16px * 2)" />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Slider isReversed />
      <Slider isReversed orientation="vertical" h="calc(100vh - 16px * 3 - 14px)" />
    </>;
}`,...(ne=(re=S.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var ae,se,oe;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} min={0} max={200} onChange={onChange} />
    </>;
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,te,ie;x.parameters={...x.parameters,docs:{...(le=x.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} onChange={onChange} />
    </>;
}`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ue,me,ce;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} step={10} focusThumbOnChange={false} />

      <Center w="full" gap="md">
        <Button isDisabled={value === 0} onClick={() => setValue(prev => prev !== 0 ? prev - 10 : prev)}>
          -10
        </Button>
        <Button isDisabled={value === 100} colorScheme="blue" onClick={() => setValue(prev => prev !== 100 ? prev + 10 : prev)}>
          +10
        </Button>
      </Center>
    </>;
}`,...(ce=(me=v.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var de,pe,he;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <VStack gap="lg">
      <Slider size="sm">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="md">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>

      <Slider size="lg">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
      </Slider>
    </VStack>;
}`,...(he=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var Se,ge,xe;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [isOpen, {
    on,
    off
  }] = useBoolean(false);
  return <Slider value={value} onChange={onChange} mt="10" onMouseEnter={on} onMouseLeave={off}>
      <SliderMark value={25} w="10" ml="-5">
        25%
      </SliderMark>
      <SliderMark value={50} w="10" ml="-5">
        50%
      </SliderMark>
      <SliderMark value={75} w="10" ml="-5">
        75%
      </SliderMark>

      <Tooltip placement="top" label={\`\${value}%\`} isOpen={isOpen}>
        <SliderThumb />
      </Tooltip>
    </Slider>;
}`,...(xe=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ve,be,je;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <Slider isDisabled />

      <FormControl isDisabled label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(je=(be=C.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ce,ke,fe;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Slider isReadOnly />

      <FormControl isReadOnly label="volume (sound)" helperMessage="Please select your preferred volume.">
        <Slider />
      </FormControl>
    </>;
}`,...(fe=(ke=k.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};var we,Me,Ve;f.parameters={...f.parameters,docs:{...(we=f.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(15);
  return <>
      <Slider isInvalid={value < 20} value={value} onChange={onChange} />

      <FormControl isInvalid={value < 20} label="volume (sound)" errorMessage="Volume should be set to 20 or higher.">
        <Slider value={value} onChange={onChange} />
      </FormControl>
    </>;
}`,...(Ve=(Me=f.parameters)==null?void 0:Me.docs)==null?void 0:Ve.source}}};var Te,Fe,ze;w.parameters={...w.parameters,docs:{...(Te=w.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Slider trackColor="orange.200" filledTrackColor="orange.500" thumbColor="orange.700" />

      <Slider trackProps={{
      bg: "green.200"
    }} filledTrackProps={{
      bg: "green.500"
    }} thumbProps={{
      bg: "green.700"
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
}`,...(ze=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var ye,De,Oe;M.parameters={...M.parameters,docs:{...(ye=M.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <Slider thumbProps={{
      color: "blue.500",
      boxSize: "6",
      children: <Icon icon={faWaveSquare} />
    }} />

      <Slider>
        <SliderThumb color="blue.500" boxSize="6">
          <Icon icon={faWaveSquare} />
        </SliderThumb>
      </Slider>
    </>;
}`,...(Oe=(De=M.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Ee,Pe,Re;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Slider value={value} onChange={onChange} mt="10">
        <SliderMark value={25} w="10" ml="-5">
          25%
        </SliderMark>
        <SliderMark value={50} w="10" ml="-5">
          50%
        </SliderMark>
        <SliderMark value={75} w="10" ml="-5">
          75%
        </SliderMark>
        <SliderMark value={value} bg="blue.500" color="white" py="0.5" rounded="md" w="10" mt="-10" ml="-5">
          {value}%
        </SliderMark>
      </Slider>
    </>;
}`,...(Re=(Pe=V.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var Ie,Be,qe;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  return <>
      <Text>Value: {value}</Text>
      <Slider value={value} onChange={onChange} />
    </>;
}`,...(qe=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:qe.source}}};var He,We,Le;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [startValue, onChangeStart] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, Start Value: {startValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeStart={onChangeStart} />
    </>;
}`,...(Le=(We=F.parameters)==null?void 0:We.docs)==null?void 0:Le.source}}};var _e,$e,Ae;z.parameters={...z.parameters,docs:{...(_e=z.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(50);
  const [endValue, onChangeEnd] = useState<number>(50);
  return <>
      <Text>
        Value: {value}, End Value: {endValue}
      </Text>
      <Slider value={value} onChange={onChange} onChangeEnd={onChangeEnd} />
    </>;
}`,...(Ae=($e=z.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var Ge,Je,Ke;y.parameters={...y.parameters,docs:{...(Ge=y.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  type Data = {
    slider: number;
  };
  const defaultValues: Data = {
    slider: 50
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.slider} label="Volume" errorMessage={errors.slider?.message}>
        <Controller name="slider" control={control} rules={{
        max: {
          value: 50,
          message: "The maximum value is 50."
        }
      }} render={({
        field
      }) => <Slider {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ke=(Je=y.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const Cn=["basic","withDefaultValue","withSize","withColorScheme","withOrientation","withReversed","withMinMax","withStep","withFocusThumbOnChange","withMark","withTooltip","isDisabled","isReadonly","isInvalid","customColor","customThumb","customMark","customControl","onChangeStart","onChangeEnd","reactHookForm"];export{Cn as __namedExportsOrder,m as basic,w as customColor,T as customControl,V as customMark,M as customThumb,jn as default,C as isDisabled,f as isInvalid,k as isReadonly,z as onChangeEnd,F as onChangeStart,y as reactHookForm,p as withColorScheme,c as withDefaultValue,v as withFocusThumbOnChange,b as withMark,g as withMinMax,h as withOrientation,S as withReversed,d as withSize,x as withStep,j as withTooltip};
