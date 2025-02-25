import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as w}from"./index-BwPxMuoB.js";import{u as ge,C as y}from"./index.esm-C038jXrr.js";import{c as Oe}from"./components-Ch0YQfeK.js";import{C as o,a as Te}from"./checkbox-BAqQvmGh.js";import{u as je}from"./use-checkbox-group-DngTsWeQ.js";import{e as He}from"./form-control-DgcE1-oN.js";import{F as Me,W as Se}from"./flex-BYE4mzTi.js";import{g as _e,c as ze}from"./factory-DbNU74ts.js";import{u as Ee}from"./use-checkbox-kKextJMi.js";import{F as c}from"./fieldset-pEQ_2-oV.js";import{V,H as Ue}from"./stack-BP8LKMVN.js";import{u as Je}from"./index-qZwaV1-B.js";import{B as Ie}from"./button-CqSjNDtY.js";import{B as W}from"./box-CKfluZfz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-ChqdwXGn.js";import"./text-DKjBQKmK.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./index-B2an25P7.js";import"./factory-DGyI5Ya3.js";import"./proxy-BdCiNrpl.js";import"./index-DCT-NtcY.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DlbRU9j0.js";import"./tooltip-pq08ah7a.js";import"./index-ZCRYeFYt.js";import"./index-BjpHvtnu.js";import"./index-ZLyktLk6.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-1DMcLXoE.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-Blkmx9LM.js";import"./index-CIcQHIlO.js";import"./index-BOuDj3wB.js";import"./select-75zQ1EOU.js";import"./select-list-C6OImKfQ.js";import"./index-BEog8ndP.js";import"./icon-Dk5VwDTI.js";import"./popover-trigger-Ddfu3ZQC.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-MIa0NvBw.js";import"./index-tzU5ipaZ.js";import"./visually-hidden-Bx6QUwua.js";import"./loading-BVFohscl.js";const t=w.forwardRef(({className:r,colorScheme:n,size:s,variant:l,children:i,direction:h="column",gap:d,items:a=[],...u},F)=>{const{props:Ne,value:Ge,getContainerProps:ye,onChange:Ve}=je(u),{disabled:Fe,invalid:we,isDisabled:Ke,isInvalid:Le,isReadOnly:Qe,isRequired:Xe,labelId:Ae,readOnly:We,required:De,...qe}=He(Ne),Re=_e(i);let A=[];return!Re.length&&a.length&&(A=a.map((Be,Pe)=>e.jsx(o,{...Be},Pe))),e.jsx(Te,{value:{colorScheme:n,size:s,variant:l,disabled:Fe,invalid:we,readOnly:We,required:De,value:Ge,onChange:Ve},children:e.jsx(Me,{ref:F,className:ze("ui-checkbox-group",r),direction:h,gap:d??(h==="row"?"1rem":void 0),...ye({"aria-labelledby":Ae,...qe}),children:i??A})})});t.displayName="CheckboxGroup";t.__ui__="CheckboxGroup";const er={component:o,title:"Components / Forms / Checkbox"},x=()=>e.jsx(o,{children:"孫悟空"}),m=()=>e.jsxs(Se,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),k=()=>e.jsx(Se,{gap:"md",children:Oe.map(r=>e.jsx(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),b=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(c,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(c,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(c,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(t,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),f=()=>{const[r,n]=w.useState([!1,!1]),s=r.every(Boolean),l=r.some(Boolean)&&!s;return e.jsxs(V,{gap:"sm",children:[e.jsx(o,{isChecked:s,isIndeterminate:l,onChange:i=>n([i.target.checked,i.target.checked]),children:"地球人"}),e.jsxs(V,{gap:"sm",pl:"md",children:[e.jsx(o,{isChecked:r[0],onChange:i=>n([i.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{isChecked:r[1],onChange:i=>n([r[0],i.target.checked]),children:"孫悟飯"})]})]})},g=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(t,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(t,{defaultValue:["孫悟空","ベジータ"],direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(t,{defaultValue:["孫悟空","ベジータ"],items:r})]})},j=()=>{const[r,{toggle:n}]=Je(!1);return e.jsx(o,{isChecked:r,onChange:n,children:"孫悟空"})},S=()=>{const[r,n]=w.useState(["孫悟空","ベジータ"]);return e.jsxs(t,{value:r,onChange:s=>n(s),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},I=()=>{const r=s=>{const{getIconProps:l,getInputProps:i}=Ee(s);return e.jsxs(W,{as:"label",children:[e.jsx("input",{...i(),"aria-label":s.value}),e.jsx(W,{...l(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:s.value})]})},{getCheckboxProps:n}=je({defaultValue:["孫悟空"]});return e.jsxs(Ue,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},N=()=>{var h,d;const{control:r,formState:{errors:n},handleSubmit:s,watch:l}=ge(),i=a=>console.log("submit:",a);return console.log("watch:",l()),e.jsxs(V,{as:"form",onSubmit:s(i),children:[e.jsx(c,{errorMessage:(h=n.checkbox)==null?void 0:h.message,isInvalid:!!n.checkbox,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkbox",control:r,render:({field:{value:a,...u}})=>e.jsx(o,{isChecked:a,...u,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(c,{errorMessage:(d=n.checkboxGroup)==null?void 0:d.message,isInvalid:!!n.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkboxGroup",control:r,render:({field:a})=>e.jsxs(t,{...a,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},G=()=>{var d,a;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,formState:{errors:s},handleSubmit:l,watch:i}=ge({defaultValues:r}),h=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(V,{as:"form",onSubmit:l(h),children:[e.jsx(c,{errorMessage:(d=s.checkbox)==null?void 0:d.message,isInvalid:!!s.checkbox,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkbox",control:n,render:({field:{value:u,...F}})=>e.jsx(o,{isChecked:u,...F,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(c,{errorMessage:(a=s.checkboxGroup)==null?void 0:a.message,isInvalid:!!s.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkboxGroup",control:n,render:({field:u})=>e.jsxs(t,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,q,R;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(R=(q=x.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var B,P,O;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(O=(P=m.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var T,H,M;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(M=(H=k.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var _,z,E;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(E=(z=b.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var U,J,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isDisabled>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isDisabled>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isDisabled value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isReadOnly>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isReadOnly>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isReadOnly value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>;
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isInvalid>All Notifications</Checkbox>
      <Checkbox defaultIsChecked isInvalid>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox isInvalid value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <Checkbox>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>;
}`,...($=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,oe,re;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([false, false]);
  const allChecked = values.every(Boolean);
  const isIndeterminate = values.some(Boolean) && !allChecked;
  return <VStack gap="sm">
      <Checkbox isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={e => setValues([e.target.checked, e.target.checked])}>
        地球人
      </Checkbox>

      <VStack gap="sm" pl="md">
        <Checkbox isChecked={values[0]} onChange={e => setValues([e.target.checked, values[1]!])}>
          孫悟空
        </Checkbox>

        <Checkbox isChecked={values[1]} onChange={e => setValues([values[0]!, e.target.checked])}>
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>;
}`,...(re=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,se,ie;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const items: CheckboxItem[] = [{
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
      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]}>
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} direction="row">
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} items={items} />
    </>;
}`,...(ie=(se=g.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var te,ae,ce;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(ce=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var le,ue,he;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var de,xe,me;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  const CustomCheckbox: FC<ReturnType<UseCheckboxGroupReturn["getCheckboxProps"]>> = props => {
    const {
      getIconProps,
      getInputProps
    } = useCheckbox(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box {...getIconProps()} borderWidth="1px" cursor="pointer" px="sm" py="xs" rounded="md" _checked={{
        bg: "blue.500",
        borderColor: "blue.500",
        color: "white"
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getCheckboxProps
  } = useCheckboxGroup<string>({
    defaultValue: ["孫悟空"]
  });
  return <HStack gap="sm">
      <CustomCheckbox {...getCheckboxProps({
      value: "孫悟空"
    })} />
      <CustomCheckbox {...getCheckboxProps({
      value: "ベジータ"
    })} />
      <CustomCheckbox {...getCheckboxProps({
      value: "フリーザ"
    })} />
    </HStack>;
}`,...(me=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var ke,be,pe;N.parameters={...N.parameters,docs:{...(ke=N.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
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
      <Fieldset errorMessage={errors.checkbox?.message} isInvalid={!!errors.checkbox} legend="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Fieldset errorMessage={errors.checkboxGroup?.message} isInvalid={!!errors.checkboxGroup} legend="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} rules={{
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
}`,...(pe=(be=N.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var Ce,ve,fe;G.parameters={...G.parameters,docs:{...(Ce=G.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["孫悟空"]
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
      <Fieldset errorMessage={errors.checkbox?.message} isInvalid={!!errors.checkbox} legend="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Fieldset errorMessage={errors.checkboxGroup?.message} isInvalid={!!errors.checkboxGroup} legend="Who is your favorite character?">
        <Controller name="checkboxGroup" control={control} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} rules={{
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
}`,...(fe=(ve=G.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const or=["basic","withSize","withColorScheme","withDefaultIsChecked","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{or as __namedExportsOrder,x as basic,j as customControl,S as customControlGroup,I as customHook,er as default,f as indeterminate,p as isDisabled,v as isInvalid,C as isReadonly,N as reactHookForm,G as reactHookFormWithDefaultValue,k as withColorScheme,b as withDefaultIsChecked,g as withGroup,m as withSize};
