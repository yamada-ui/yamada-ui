import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as M}from"./index-ClcD9ViR.js";import{u as Fe,C as Ge}from"./index.esm-C-rOWAyx.js";import{c as Te}from"./components-BcmmBqo7.js";import{u as Me,a as Ae,b as Pe,R as ze}from"./use-radio-group-DqWir-IY.js";import{e as _e}from"./form-control-BjOXh3qv.js";import{a as Ee}from"./use-component-style-B--WxH8d.js";import{o as Le}from"./theme-provider-r-UN7Xzc.js";import{a5 as Ue,b as R,c as We,g as Je}from"./factory-D0ba2aB7.js";import{F as Ke,W as De}from"./flex-Dy15NtS6.js";import{F as u}from"./fieldset-D7vG6RZi.js";import{H as Qe,V as qe}from"./stack-CcCHu966.js";import{B as Oe}from"./button-CtWzhuL8.js";import{B as J}from"./box-Ch0hVi2V.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./text-BB5_0k3k.js";import"./forward-ref-D13m8o2p.js";import"./index-rZyt8EED.js";import"./use-checkbox-D-VN4oI2.js";import"./index-CC4Nvd09.js";import"./factory-COvmBIaQ.js";import"./proxy-DYgA1A03.js";import"./index-CUCM51Cx.js";import"./index-B8wuD80-.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-CTLjK8Sl.js";import"./tooltip-CtQO_TGc.js";import"./index-I8sPqzTA.js";import"./index-Dwwrjx8s.js";import"./index-D8fKLhx4.js";import"./index-BsUqj9vT.js";import"./index-BEBw9Wn7.js";import"./index-YDlv44yi.js";import"./portal-nz1T67ed.js";import"./index-DGFU5M_O.js";import"./slide-fade-B_qqM4fM.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-BcVfKnbi.js";import"./scale-fade-C4ZlA-0I.js";import"./index-BWwQf8_A.js";import"./index-c15aqeo_.js";import"./select-tL1_OW35.js";import"./select-list-DTHtP90Y.js";import"./index-D0l_ls7Z.js";import"./icon-47ftZrjE.js";import"./popover-trigger-kCg_5LKg.js";import"./close-button-CC97c4Av.js";import"./use-ripple-DRMVQrUo.js";import"./index-DCP_Eude.js";import"./index-gGKStiao.js";import"./index-DQZtUkQ0.js";import"./visually-hidden-BE6IIooX.js";import"./loading-1q-H-TJ4.js";const i=M.forwardRef((o,d)=>{const c=Me(),{value:t,...a}={...c},r=_e(o),[s,m]=Ee("Radio",{...a,...o}),{className:p,children:w,disabled:V=a.disabled??r.disabled,gap:F="0.5rem",invalid:G=a.invalid??r.invalid,label:z,readOnly:E=a.readOnly??r.readOnly,required:L=a.required??r.required,iconProps:U,inputProps:A,labelProps:P,...l}=Le(m);l.checked??(l.checked=l.isChecked);const _=t&&l.value?t===l.value:l.checked,W=a.onChange&&l.value?Ue(a.onChange,l.onChange):l.onChange,{checked:D,props:q,getContainerProps:O,getIconProps:B,getInputProps:H,getLabelProps:T}=Ae({...l,checked:_,disabled:V,invalid:G,readOnly:E,required:L,onChange:W}),h=t?D?0:-1:0;return e.jsxs(R.label,{className:We("ui-radio",p),...O(q),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:F,position:"relative",verticalAlign:"top",...s.container},children:[e.jsx(R.input,{className:"ui-radio__input",...H({...A,tabIndex:h},d)}),e.jsx(R.div,{className:"ui-radio__icon",...B(U),__css:{display:"inline-block",position:"relative",userSelect:"none",...s.icon}}),e.jsx(R.span,{className:"ui-radio__label",...T(P),__css:{...s.label},children:w??z})]})});i.displayName="Radio";i.__ui__="Radio";const n=M.forwardRef(({id:o,className:d,colorScheme:c,size:t,variant:a,children:r,direction:s="column",gap:m,items:p=[],...w},V)=>{const{disabled:F,invalid:G,isDisabled:z,isInvalid:E,isReadOnly:L,isRequired:U,labelId:A,readOnly:P,required:l,..._}=_e({id:o,...w}),{id:W,name:D,props:q,value:O,getContainerProps:B,onChange:H}=Pe(_),T=Je(r);let h=[];return!T.length&&p.length&&(h=p.map((Be,He)=>e.jsx(i,{...Be},He))),e.jsx(ze,{value:{name:D,colorScheme:c,size:t,variant:a,disabled:F,invalid:G,readOnly:P,required:l,value:O,onChange:H},children:e.jsx(Ke,{ref:V,className:We("ui-radio-group",d),gap:m??(s==="row"?"1rem":void 0),...B({id:W,"aria-labelledby":A,...q}),direction:s,children:r??h})})});n.displayName="RadioGroup";n.__ui__="RadioGroup";const Xi={component:i,title:"Components / Forms / Radio"},v=()=>e.jsx(i,{children:"孫悟空"}),f=()=>e.jsxs(De,{gap:"md",children:[e.jsx(i,{size:"sm",children:"孫悟空"}),e.jsx(i,{size:"md",children:"ベジータ"}),e.jsx(i,{size:"lg",children:"フリーザ"})]}),x=()=>e.jsx(De,{gap:"md",children:Te.map(o=>e.jsx(i,{colorScheme:o,defaultChecked:!0,children:o},o))}),g=()=>e.jsx(i,{defaultChecked:!0,children:"孫悟空"}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isDisabled:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isReadOnly:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(u,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{isInvalid:!0,children:"All Notifications"}),e.jsx(i,{defaultChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(i,{children:"All Notifications"})}),e.jsx(u,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(n,{defaultValue:"all",children:[e.jsx(i,{value:"all",children:"All Notifications"}),e.jsx(i,{value:"important",children:"Important Notifications"}),e.jsx(i,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const o=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(n,{defaultValue:"孫悟空",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(n,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(n,{defaultValue:"孫悟空",items:o})]})},C=()=>{const[o,d]=M.useState("孫悟空");return e.jsxs(n,{value:o,onChange:d,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]})},k=()=>{const o=t=>{const{getIconProps:a,getInputProps:r}=Ae(t);return e.jsxs(J,{as:"label",children:[e.jsx("input",{...r(),"aria-label":t.value}),e.jsx(J,{as:"span",...a(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:t.value})]})},{getContainerProps:d,getRadioProps:c}=Pe({defaultValue:"孫悟空"});return e.jsxs(Qe,{gap:"sm",...d(),children:[e.jsx(o,{...c({value:"孫悟空"})}),e.jsx(o,{...c({value:"ベジータ"})}),e.jsx(o,{...c({value:"フリーザ"})})]})},y=()=>{var r;const{control:o,formState:{errors:d},handleSubmit:c,watch:t}=Fe(),a=s=>console.log("submit:",s);return console.log("watch:",t()),e.jsxs(qe,{as:"form",onSubmit:c(a),children:[e.jsx(u,{errorMessage:(r=d.radio)==null?void 0:r.message,isInvalid:!!d.radio,legend:"Who is your favorite character?",children:e.jsx(Ge,{name:"radio",control:o,render:({field:s})=>e.jsxs(n,{...s,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},I=()=>{var s;const o={radio:"孫悟空"},{control:d,formState:{errors:c},handleSubmit:t,watch:a}=Fe({defaultValues:o}),r=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(qe,{as:"form",onSubmit:t(r),children:[e.jsx(u,{errorMessage:(s=c.radio)==null?void 0:s.message,isInvalid:!!c.radio,legend:"Who is your favorite character?",children:e.jsx(Ge,{name:"radio",control:d,render:({field:m})=>e.jsxs(n,{...m,children:[e.jsx(i,{value:"孫悟空",children:"孫悟空"}),e.jsx(i,{value:"ベジータ",children:"ベジータ"}),e.jsx(i,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Oe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var K,Q,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(X=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...(ne=(re=g.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var te,se,le;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(le=(se=j.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,ue;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ue=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(he=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var Re,ve,fe;N.parameters={...N.parameters,docs:{...(Re=N.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(fe=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var xe,ge,je;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(ye=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:ye.source}}};var Ie,we,Ve;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ve=(we=I.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};const Yi=["basic","withSize","withColorScheme","withDefaultChecked","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Yi as __namedExportsOrder,v as basic,C as customControl,k as customHook,Xi as default,j as isDisabled,S as isInvalid,b as isReadonly,y as reactHookForm,I as reactHookFormWithDefaultValue,x as withColorScheme,g as withDefaultChecked,N as withGroup,f as withSize};
