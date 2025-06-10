import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as M}from"./index-Bv9Y92EF.js";import{u as Ge,C as Ae}from"./index.esm-DdgAP9ly.js";import{c as Te}from"./components-BAAl2FdL.js";import{u as Me,a as Pe,b as _e,R as ze}from"./use-radio-group-BtVY0UGE.js";import{e as Ie}from"./form-control-C8eO6U25.js";import{a as Ee}from"./use-component-style-DHLtMqa5.js";import{o as Le}from"./theme-provider-DsbwOWxu.js";import{a5 as Ue,b as v,c as We,g as Je}from"./factory-7Z88KRtK.js";import{F as Ke,W as Oe}from"./flex-B0SWTXUi.js";import{F as u}from"./fieldset-BqeGYmPS.js";import{H as Qe,V as qe}from"./stack-DL8tKm2J.js";import{B as De}from"./button-nZ2ZqBRb.js";import{B as J}from"./box-Ds8SIjx6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./text-KN7rBBtq.js";import"./forward-ref-DH6f5tnY.js";import"./index-CQqf5rDh.js";import"./use-checkbox-Dj2PfqIK.js";import"./index-DNaxzNVT.js";import"./factory-UaNlpug7.js";import"./proxy-r-x5KraU.js";import"./index-D3uVnNfI.js";import"./index-DCkI3YJn.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-Bz9rJ8_M.js";import"./tooltip-Bqvs1x-w.js";import"./index-BhIdR6KT.js";import"./index-vKAUfVXn.js";import"./index-B_yC7JIW.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./index-B2HRqSdn.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./slide-fade-CwK7Wr_w.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./scale-fade-D309oxZP.js";import"./index-CHX88LJr.js";import"./index-DrADDttQ.js";import"./select-Bx_8s32I.js";import"./select-list-DgjlmZ5-.js";import"./index-BdmKGyZV.js";import"./icon-DKuqv-9Z.js";import"./popover-trigger-T6UAq76Q.js";import"./close-button-BbMPcnm8.js";import"./use-ripple-Vo7SgDWD.js";import"./index-M_HQDTPf.js";import"./index-YFprnXPi.js";import"./index-BimsXrcc.js";import"./visually-hidden-D8yDyhNx.js";import"./loading-DVofVDF_.js";const i=M.forwardRef((o,d)=>{const c=Me(),{value:t,...a}={...c},r=Ie(o),[l,m]=Ee("Radio",{...a,...o}),{className:p,children:V,disabled:F=a.disabled??r.disabled,gap:G="0.5rem",invalid:A=a.invalid??r.invalid,label:z,readOnly:E=a.readOnly??r.readOnly,required:L=a.required??r.required,iconProps:U,inputProps:P,labelProps:_,...s}=Le(m);s.checked??(s.checked=s.isChecked);const I=t&&s.value?t===s.value:s.checked,W=a.onChange&&s.value?Ue(a.onChange,s.onChange):s.onChange,{checked:O,props:q,getContainerProps:D,getIconProps:B,getInputProps:H,getLabelProps:T}=Pe({...s,checked:I,disabled:F,invalid:A,readOnly:E,required:L,onChange:W}),h=t?O?0:-1:0;return e.jsxs(v.label,{className:We("ui-radio",p),...D(q),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:G,position:"relative",verticalAlign:"top",...l.container},children:[e.jsx(v.input,{className:"ui-radio__input",...H({...P,tabIndex:h},d)}),e.jsx(v.div,{className:"ui-radio__icon",...B(U),__css:{display:"inline-block",position:"relative",userSelect:"none",...l.icon}}),e.jsx(v.span,{className:"ui-radio__label",...T(_),__css:{...l.label},children:V??z})]})});i.displayName="Radio";i.__ui__="Radio";const n=M.forwardRef(({id:o,className:d,colorScheme:c,size:t,variant:a,children:r,direction:l="column",gap:m,items:p=[],...V},F)=>{const{disabled:G,invalid:A,isDisabled:z,isInvalid:E,isReadOnly:L,isRequired:U,labelId:P,readOnly:_,required:s,...I}=Ie({id:o,...V}),{id:W,name:O,props:q,value:D,getContainerProps:B,onChange:H}=_e(I),T=Je(r);let h=[];return!T.length&&p.length&&(h=p.map((Be,He)=>e.jsx(i,{...Be},He))),e.jsx(ze,{value:{name:O,colorScheme:c,size:t,variant:a,disabled:G,invalid:A,readOnly:_,required:s,value:D,onChange:H},children:e.jsx(Ke,{ref:F,className:We("ui-radio-group",d),gap:m??(l==="row"?"1rem":void 0),...B({id:W,"aria-labelledby":P,...q}),direction:l,children:r??h})})});n.displayName="RadioGroup";n.__ui__="RadioGroup";const Yi={component:i,title:"Components / Forms / Radio"},R=()=>e.jsx(i,{children:"孫悟空"}),f=()=>e.jsxs(Oe,{gap:"md",children:[e.jsx(i,{size:"sm",children:"孫悟空"}),e.jsx(i,{size:"md",children:"ベジータ"}),e.jsx(i,{size:"lg",children:"フリーザ"})]}),x=()=>e.jsx(Oe,{gap:"md",children:Te.map(o=>e.jsx(i,{colorScheme:o,defaultChecked:!0,children:o},o))}),g=()=>e.jsx(i,{defaultChecked:!0,children:"孫悟空"}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{disabled:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,disabled:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{disabled:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{disabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{disabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{readOnly:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,readOnly:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{readOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{legend:"Which notifications would you like to receive?",readOnly:!0,children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{legend:"Which notifications would you like to receive?",readOnly:!0,children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{invalid:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,invalid:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{invalid:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{errorMessage:"This is required.",invalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{children:"All Notifications"})}),e.jsx(u,{errorMessage:"This is required.",invalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const o=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{defaultValue:"孫悟空",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(n,{defaultValue:"孫悟空",items:o})]})},C=()=>{const[o,d]=M.useState("孫悟空");return e.jsxs(n,{value:o,onChange:d,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]})},k=()=>{const o=t=>{const{getIconProps:a,getInputProps:r}=Pe(t);return e.jsxs(J,{as:"label",children:[e.jsx("input",{...r(),"aria-label":t.value}),e.jsx(J,{as:"span",...a(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:t.value})]})},{getContainerProps:d,getRadioProps:c}=_e({defaultValue:"孫悟空"});return e.jsxs(Qe,{gap:"sm",...d(),children:[e.jsx(o,{...c({value:"孫悟空"})}),e.jsx(o,{...c({value:"ベジータ"})}),e.jsx(o,{...c({value:"フリーザ"})})]})},y=()=>{var r;const{control:o,formState:{errors:d},handleSubmit:c,watch:t}=Ge(),a=l=>console.log("submit:",l);return console.log("watch:",t()),e.jsxs(qe,{as:"form",onSubmit:c(a),children:[e.jsx(u,{errorMessage:(r=d.radio)==null?void 0:r.message,invalid:!!d.radio,legend:"Who is your favorite character?",children:e.jsx(Ae,{name:"radio",control:o,render:({field:l})=>e.jsxs(n,{...l,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},w=()=>{var l;const o={radio:"孫悟空"},{control:d,formState:{errors:c},handleSubmit:t,watch:a}=Ge({defaultValues:o}),r=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(qe,{as:"form",onSubmit:t(r),children:[e.jsx(u,{errorMessage:(l=c.radio)==null?void 0:l.message,invalid:!!c.radio,legend:"Who is your favorite character?",children:e.jsx(Ae,{name:"radio",control:d,render:({field:m})=>e.jsxs(n,{...m,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(De,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var K,Q,X;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(X=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...($=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ie,oe;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(oe=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ae,re,ne;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ne=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,le,se;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <Radio disabled>All Notifications</Radio>
      <Radio defaultChecked disabled>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio disabled value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset disabled legend="Which notifications would you like to receive?">
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset disabled legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(se=(le=j.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var de,ce,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <Radio readOnly>All Notifications</Radio>
      <Radio defaultChecked readOnly>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio readOnly value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset legend="Which notifications would you like to receive?" readOnly>
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset legend="Which notifications would you like to receive?" readOnly>
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(ue=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Radio invalid>All Notifications</Radio>
      <Radio defaultChecked invalid>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio invalid value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset errorMessage="This is required." invalid legend="Which notifications would you like to receive?">
        <Radio>All Notifications</Radio>
      </Fieldset>

      <Fieldset errorMessage="This is required." invalid legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(he=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var ve,Re,fe;N.parameters={...N.parameters,docs:{...(ve=N.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(fe=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:fe.source}}};var xe,ge,je;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={setValue}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(je=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var be,Se,Ne;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Se=k.parameters)==null?void 0:Se.docs)==null?void 0:Ne.source}}};var Ce,ke,ye;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.radio?.message} invalid={!!errors.radio} legend="Who is your favorite character?">
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
}`,...(ye=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var we,Ve,Fe;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.radio?.message} invalid={!!errors.radio} legend="Who is your favorite character?">
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
}`,...(Fe=(Ve=w.parameters)==null?void 0:Ve.docs)==null?void 0:Fe.source}}};const Zi=["basic","withSize","withColorScheme","withDefaultChecked","disabled","readOnly","invalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Zi as __namedExportsOrder,R as basic,C as customControl,k as customHook,Yi as default,j as disabled,S as invalid,y as reactHookForm,w as reactHookFormWithDefaultValue,b as readOnly,x as withColorScheme,g as withDefaultChecked,N as withGroup,f as withSize};
