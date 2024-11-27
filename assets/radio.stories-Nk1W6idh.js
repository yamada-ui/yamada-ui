import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as E}from"./index-ClcD9ViR.js";import{u as we,C as Ve}from"./index.esm-CEdvtQ_U.js";import{c as Be}from"./components-DRuDLEkK.js";import{u as He,a as Fe,b as Ae,R as Te}from"./use-radio-group-0Oy19qSa.js";import{e as Ge}from"./form-control-C7lyVmHF.js";import{a as Me}from"./use-component-style-fOirb5M1.js";import{o as ze}from"./theme-provider-DSx3k1bh.js";import{a4 as Ee,b as R,c as Pe,A as Le}from"./factory-Dfrbb1EY.js";import{F as Ue,W as De}from"./flex-DjgpQWnX.js";import{F as u}from"./fieldset-XmGjM8yj.js";import{H as Je,V as We}from"./stack-DgGWIYtK.js";import{B as _e}from"./button-DSDDuS_l.js";import{B as L}from"./box-JOSxMso6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D4SEQqYY.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-XEjwXVFn.js";import"./index-DTJiSQyB.js";import"./i18n-provider-BEOsEj1w.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-C58sem2v.js";import"./index-D7KS8MXr.js";import"./Combination-CkmEMpJG.js";import"./loading-C7VoLX3j.js";import"./icon-DDeGQYl6.js";import"./use-var-BQS3JFPa.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-ZwKcqPm6.js";import"./index-ZuzByk-F.js";import"./factory-Dgu6MzDY.js";import"./notice-DqMOeslb.js";import"./alert-DWFIkvOW.js";import"./close-button-CWvKsDoK.js";import"./use-ripple-KQOZlJVZ.js";import"./container-Co5ig03C.js";import"./text-ACfjY0cR.js";import"./use-checkbox-DuFV5g_J.js";import"./index-DImDLiuZ.js";import"./index-De_nPH_B.js";import"./index-BLjMRlHy.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-Cu0l-YVb.js";import"./index-DqeO0dAp.js";import"./index-Y4TAv5_r.js";import"./index-CFtnIMNb.js";import"./index-D_3Ilmao.js";import"./index-CKnINgQh.js";import"./slide-fade-C_UtloVa.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-Crg7yCn-.js";import"./scale-fade-EI-PmUlW.js";import"./index-O1jdRUiZ.js";import"./index-B5Z2HpMN.js";import"./select-CRMH0pLx.js";import"./select-list-Cc07f8Px.js";import"./index-CgNA1xsw.js";import"./popover-trigger-4MaltcBz.js";import"./index-DYgLfGUQ.js";import"./index-gGKStiao.js";import"./index-BVP762bF.js";import"./visually-hidden-7f6lnkhb.js";const i=E.forwardRef((o,c)=>{const r=He(),{value:s,...a}={...r},n=Ge(o),[l,m]=Me("Radio",{...a,...o}),{className:p,children:w,gap:V="0.5rem",isDisabled:F=a.isDisabled??n.isDisabled,isInvalid:A=a.isInvalid??n.isInvalid,isReadOnly:G=a.isReadOnly??n.isReadOnly,isRequired:P=a.isRequired??n.isRequired,label:D,iconProps:W,inputProps:_,labelProps:q,...d}=ze(m);d.checked??(d.checked=d.isChecked);const O=s&&d.value?s===d.value:d.checked,B=a.onChange&&d.value?Ee(a.onChange,d.onChange):d.onChange,{checked:H,props:T,getContainerProps:h,getIconProps:M,getInputProps:z,getLabelProps:qe}=Fe({...d,checked:O,isDisabled:F,isInvalid:A,isReadOnly:G,isRequired:P,onChange:B}),Oe=s?H?0:-1:0;return e.jsxs(R.label,{className:Pe("ui-radio",p),...h(T),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:V,position:"relative",verticalAlign:"top",...l.container},children:[e.jsx(R.input,{className:"ui-radio__input",...z({..._,tabIndex:Oe},c)}),e.jsx(R.div,{className:"ui-radio__icon",...M(W),__css:{display:"inline-block",position:"relative",userSelect:"none",...l.icon}}),e.jsx(R.span,{className:"ui-radio__label",...qe(q),__css:{...l.label},children:w??D})]})});i.displayName="Radio";i.__ui__="Radio";const t=E.forwardRef(({id:o,className:c,colorScheme:r,size:s,variant:a,children:n,direction:l="column",gap:m,items:p=[],...w},V)=>{const{isDisabled:F,isInvalid:A,isReadOnly:G,isRequired:P,labelId:D,...W}=Ge({id:o,...w}),{id:_,name:q,props:d,value:O,getContainerProps:B,onChange:H}=Ae(W),T=Le(n);let h=[];return!T.length&&p.length&&(h=p.map((M,z)=>e.jsx(i,{...M},z))),e.jsx(Te,{value:{name:q,colorScheme:r,size:s,variant:a,isDisabled:F,isInvalid:A,isReadOnly:G,isRequired:P,value:O,onChange:H},children:e.jsx(Ue,{ref:V,className:Pe("ui-radio-group",c),gap:m??(l==="row"?"1rem":void 0),...B({id:_,"aria-labelledby":D,...d}),direction:l,children:n??h})})});t.displayName="RadioGroup";t.__ui__="RadioGroup";const to={component:i,title:"Components / Forms / Radio"},v=()=>e.jsx(i,{children:"孫悟空"}),f=()=>e.jsxs(De,{gap:"md",children:[e.jsx(i,{size:"sm",children:"孫悟空"}),e.jsx(i,{size:"md",children:"ベジータ"}),e.jsx(i,{size:"lg",children:"フリーザ"})]}),x=()=>e.jsx(i,{defaultChecked:!0,children:"孫悟空"}),g=()=>e.jsx(De,{gap:"md",children:Be.map(o=>e.jsx(i,{colorScheme:o,defaultChecked:!0,children:o},o))}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isDisabled:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isReadOnly:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isInvalid:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{children:"All Notifications"})}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const o=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(t,{defaultValue:"孫悟空",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(t,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(t,{defaultValue:"孫悟空",items:o})]})},C=()=>{const[o,c]=E.useState("孫悟空");return e.jsxs(t,{value:o,onChange:r=>c(r),children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]})},k=()=>{const o=s=>{const{getIconProps:a,getInputProps:n}=Fe(s);return e.jsxs(L,{as:"label",children:[e.jsx("input",{...n(),"aria-label":s.value}),e.jsx(L,{as:"span",...a(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:s.value})]})},{getContainerProps:c,getRadioProps:r}=Ae({defaultValue:"孫悟空"});return e.jsxs(Je,{gap:"sm",...c(),children:[e.jsx(o,{...r({value:"孫悟空"})}),e.jsx(o,{...r({value:"ベジータ"})}),e.jsx(o,{...r({value:"フリーザ"})})]})},y=()=>{var n;const{control:o,formState:{errors:c},handleSubmit:r,watch:s}=we(),a=l=>console.log("submit:",l);return console.log("watch:",s()),e.jsxs(We,{as:"form",onSubmit:r(a),children:[e.jsx(u,{errorMessage:(n=c.radio)==null?void 0:n.message,isInvalid:!!c.radio,legend:"Who is your favorite character?",children:e.jsx(Ve,{name:"radio",control:o,render:({field:l})=>e.jsxs(t,{...l,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},I=()=>{var l;const o={radio:"孫悟空"},{control:c,formState:{errors:r},handleSubmit:s,watch:a}=we({defaultValues:o}),n=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(We,{as:"form",onSubmit:s(n),children:[e.jsx(u,{errorMessage:(l=r.radio)==null?void 0:l.message,isInvalid:!!r.radio,legend:"Who is your favorite character?",children:e.jsx(Ve,{name:"radio",control:c,render:({field:m})=>e.jsxs(t,{...m,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var U,J,K;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ee=($=x.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ie,oe,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
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
  return <RadioGroup value={value} onChange={value => setValue(value)}>
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
}`,...(Ie=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ie.source}}};const so=["basic","withSize","withDefaultChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{so as __namedExportsOrder,v as basic,C as customControl,k as customHook,to as default,j as isDisabled,S as isInvalid,b as isReadonly,y as reactHookForm,I as reactHookFormWithDefaultValue,g as withColorScheme,x as withDefaultChecked,N as withGroup,f as withSize};
