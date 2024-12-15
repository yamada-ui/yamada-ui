import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as E}from"./index-ClcD9ViR.js";import{u as we,C as Ve}from"./index.esm-Dl1kyd6X.js";import{c as Be}from"./components-BHpPRnZt.js";import{u as He,a as Fe,b as Ge,R as Te}from"./use-radio-group-C9ToTmah.js";import{e as Ae}from"./form-control-DNngTyAT.js";import{a as Me}from"./use-component-style-D7fUVUlo.js";import{o as ze}from"./theme-provider-Dit74geM.js";import{a4 as Ee,b as R,c as Pe,g as Le}from"./factory-Bqmz9C5P.js";import{F as Ue,W as We}from"./flex-CcbyqeIa.js";import{F as u}from"./fieldset-2iPkQaSi.js";import{H as Je,V as _e}from"./stack-DEpjuaqO.js";import{B as De}from"./button-B8Q1YJpe.js";import{B as L}from"./box-CS_Q_mBe.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./text-Cr1YzEG3.js";import"./forward-ref-D13m8o2p.js";import"./index-DcJSUYRC.js";import"./use-checkbox-Bmr8WAWN.js";import"./index-5c62fTH4.js";import"./factory-Cbq3E2qU.js";import"./proxy-BYKFXsWv.js";import"./index-D-iNr3rb.js";import"./index-B_9DrOMl.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DKkLsRXg.js";import"./tooltip-BRhMOSGw.js";import"./index-B4UZJbBZ.js";import"./index-D0QjGqiR.js";import"./index-C6P-3PHl.js";import"./index-CZSIMnfE.js";import"./index-Pbv_ILj1.js";import"./index-BkD6i14w.js";import"./portal-DBnEVTNa.js";import"./index-ZuzByk-F.js";import"./slide-fade-BhjlDBiO.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BkYmOMuc.js";import"./scale-fade-13h1cMen.js";import"./index-CieLuCnG.js";import"./index-S7lgn1rl.js";import"./select-BAi0Gejg.js";import"./select-list-B1sjvTim.js";import"./index-DxQD85Cv.js";import"./icon-DeZ7GCXS.js";import"./popover-trigger-CaVm9NYE.js";import"./close-button-BPWfu35m.js";import"./use-ripple-DFvMPDyV.js";import"./index-CjWtGFYg.js";import"./index-gGKStiao.js";import"./index-Bqglt4Z4.js";import"./visually-hidden-CuTTkjW9.js";import"./loading-CmllsJT7.js";const i=E.forwardRef((o,d)=>{const c=He(),{value:t,...a}={...c},r=Ae(o),[s,m]=Me("Radio",{...a,...o}),{className:p,children:w,disabled:V=a.disabled??r.disabled,gap:F="0.5rem",invalid:G=a.invalid??r.invalid,label:A,readOnly:P=a.readOnly??r.readOnly,required:W=a.required??r.required,iconProps:_,inputProps:D,labelProps:q,...l}=ze(m);l.checked??(l.checked=l.isChecked);const O=t&&l.value?t===l.value:l.checked,B=a.onChange&&l.value?Ee(a.onChange,l.onChange):l.onChange,{checked:H,props:T,getContainerProps:h,getIconProps:M,getInputProps:z,getLabelProps:qe}=Fe({...l,checked:O,disabled:V,invalid:G,readOnly:P,required:W,onChange:B}),Oe=t?H?0:-1:0;return e.jsxs(R.label,{className:Pe("ui-radio",p),...h(T),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:F,position:"relative",verticalAlign:"top",...s.container},children:[e.jsx(R.input,{className:"ui-radio__input",...z({...D,tabIndex:Oe},d)}),e.jsx(R.div,{className:"ui-radio__icon",...M(_),__css:{display:"inline-block",position:"relative",userSelect:"none",...s.icon}}),e.jsx(R.span,{className:"ui-radio__label",...qe(q),__css:{...s.label},children:w??A})]})});i.displayName="Radio";i.__ui__="Radio";const n=E.forwardRef(({id:o,className:d,colorScheme:c,size:t,variant:a,children:r,direction:s="column",gap:m,items:p=[],...w},V)=>{const{disabled:F,invalid:G,labelId:A,readOnly:P,required:W,..._}=Ae({id:o,...w}),{id:D,name:q,props:l,value:O,getContainerProps:B,onChange:H}=Ge(_),T=Le(r);let h=[];return!T.length&&p.length&&(h=p.map((M,z)=>e.jsx(i,{...M},z))),e.jsx(Te,{value:{name:q,colorScheme:c,size:t,variant:a,disabled:F,invalid:G,readOnly:P,required:W,value:O,onChange:H},children:e.jsx(Ue,{ref:V,className:Pe("ui-radio-group",d),gap:m??(s==="row"?"1rem":void 0),...B({id:D,"aria-labelledby":A,...l}),direction:s,children:r??h})})});n.displayName="RadioGroup";n.__ui__="RadioGroup";const Ki={component:i,title:"Components / Forms / Radio"},v=()=>e.jsx(i,{children:"孫悟空"}),f=()=>e.jsxs(We,{gap:"md",children:[e.jsx(i,{size:"sm",children:"孫悟空"}),e.jsx(i,{size:"md",children:"ベジータ"}),e.jsx(i,{size:"lg",children:"フリーザ"})]}),x=()=>e.jsx(We,{gap:"md",children:Be.map(o=>e.jsx(i,{colorScheme:o,defaultChecked:!0,children:o},o))}),g=()=>e.jsx(i,{defaultChecked:!0,children:"孫悟空"}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isDisabled:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isReadOnly:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isInvalid:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{children:"All Notifications"})}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const o=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{defaultValue:"孫悟空",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(n,{defaultValue:"孫悟空",items:o})]})},C=()=>{const[o,d]=E.useState("孫悟空");return e.jsxs(n,{value:o,onChange:d,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]})},k=()=>{const o=t=>{const{getIconProps:a,getInputProps:r}=Fe(t);return e.jsxs(L,{as:"label",children:[e.jsx("input",{...r(),"aria-label":t.value}),e.jsx(L,{as:"span",...a(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:t.value})]})},{getContainerProps:d,getRadioProps:c}=Ge({defaultValue:"孫悟空"});return e.jsxs(Je,{gap:"sm",...d(),children:[e.jsx(o,{...c({value:"孫悟空"})}),e.jsx(o,{...c({value:"ベジータ"})}),e.jsx(o,{...c({value:"フリーザ"})})]})},y=()=>{var r;const{control:o,formState:{errors:d},handleSubmit:c,watch:t}=we(),a=s=>console.log("submit:",s);return console.log("watch:",t()),e.jsxs(_e,{as:"form",onSubmit:c(a),children:[e.jsx(u,{errorMessage:(r=d.radio)==null?void 0:r.message,isInvalid:!!d.radio,legend:"Who is your favorite character?",children:e.jsx(Ve,{name:"radio",control:o,render:({field:s})=>e.jsxs(n,{...s,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},I=()=>{var s;const o={radio:"孫悟空"},{control:d,formState:{errors:c},handleSubmit:t,watch:a}=we({defaultValues:o}),r=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(_e,{as:"form",onSubmit:t(r),children:[e.jsx(u,{errorMessage:(s=c.radio)==null?void 0:s.message,isInvalid:!!c.radio,legend:"Who is your favorite character?",children:e.jsx(Ve,{name:"radio",control:d,render:({field:m})=>e.jsxs(n,{...m,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var U,J,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,oe,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ae=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var re,ne,te;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio defaultChecked isDisabled>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isDisabled value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(te=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,le,de;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio defaultChecked isReadOnly>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isReadOnly value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(de=(le=b.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio defaultChecked isInvalid>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isInvalid value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <Radio>All Notifications</Radio>
      </Fieldset>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(me=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,Re;N.parameters={...N.parameters,docs:{...(pe=N.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  const items: RadioItem[] = [{
    label: "孫悟空",
    value: "孫悟空"
  }, {
    label: "ベジータ",
    value: "ベジータ"
  }, {
    label: "フリーザ",
    value: "フリーザ"
  }];
  return <>
      <RadioGroup defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" direction="row">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>;
}`,...(Re=(he=N.parameters)==null?void 0:he.docs)==null?void 0:Re.source}}};var ve,fe,xe;C.parameters={...C.parameters,docs:{...(ve=C.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={setValue}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(xe=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ge,je,be;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getIconProps,
      getInputProps
    } = useRadio(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box as="span" {...getIconProps()} borderWidth="1px" cursor="pointer" px="sm" py="xs" rounded="md" _checked={{
        bg: "blue.500",
        borderColor: "blue.500",
        color: "white"
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getContainerProps,
    getRadioProps
  } = useRadioGroup<string>({
    defaultValue: "孫悟空"
  });
  return <HStack gap="sm" {...getContainerProps()}>
      <CustomRadio {...getRadioProps({
      value: "孫悟空"
    })} />
      <CustomRadio {...getRadioProps({
      value: "ベジータ"
    })} />
      <CustomRadio {...getRadioProps({
      value: "フリーザ"
    })} />
    </HStack>;
}`,...(be=(je=k.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Se,Ne,Ce;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.radio?.message} isInvalid={!!errors.radio} legend="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ce=(Ne=y.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};var ke,ye,Ie;I.parameters={...I.parameters,docs:{...(ke=I.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const defaultValues: Data = {
    radio: "孫悟空"
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
      <Fieldset errorMessage={errors.radio?.message} isInvalid={!!errors.radio} legend="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ie=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};const Qi=["basic","withSize","withColorScheme","withDefaultChecked","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Qi as __namedExportsOrder,v as basic,C as customControl,k as customHook,Ki as default,j as isDisabled,S as isInvalid,b as isReadonly,y as reactHookForm,I as reactHookFormWithDefaultValue,x as withColorScheme,g as withDefaultChecked,N as withGroup,f as withSize};
