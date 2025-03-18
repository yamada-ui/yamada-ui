import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as A}from"./index-BwPxMuoB.js";import{u as ge,C as V}from"./index.esm-C038jXrr.js";import{c as Te}from"./components-aqRY6gsQ.js";import{C as o,a as He}from"./checkbox-BAqQvmGh.js";import{u as je}from"./use-checkbox-group-lj92ZWvl.js";import{e as Me}from"./form-control-DgcE1-oN.js";import{F as _e,W as Se}from"./flex-BYE4mzTi.js";import{g as ze,c as Re}from"./factory-DbNU74ts.js";import{u as Ee}from"./use-checkbox-kKextJMi.js";import{F as s}from"./fieldset-Co85odFD.js";import{V as F,H as Ue}from"./stack-BP8LKMVN.js";import{u as Je}from"./index-qZwaV1-B.js";import{B as Ne}from"./button-CqSjNDtY.js";import{B as I}from"./box-CKfluZfz.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-ChqdwXGn.js";import"./text-DKjBQKmK.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./index-B2an25P7.js";import"./factory-DGyI5Ya3.js";import"./proxy-BdCiNrpl.js";import"./index-DCT-NtcY.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DlbRU9j0.js";import"./tooltip-pq08ah7a.js";import"./index-ZCRYeFYt.js";import"./index-BjpHvtnu.js";import"./index-ZLyktLk6.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-1DMcLXoE.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-Blkmx9LM.js";import"./index-CIcQHIlO.js";import"./index-BOuDj3wB.js";import"./select-75zQ1EOU.js";import"./select-list-C6OImKfQ.js";import"./index-BEog8ndP.js";import"./icon-Dk5VwDTI.js";import"./popover-trigger-Ddfu3ZQC.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-MIa0NvBw.js";import"./index-tzU5ipaZ.js";import"./visually-hidden-C2KN4GNP.js";import"./loading-BVFohscl.js";const c=A.forwardRef(({className:r,colorScheme:n,size:t,variant:l,children:a,direction:d="column",gap:h,items:i=[],...u},w)=>{const{props:Ge,value:ye,getContainerProps:Ve,onChange:Fe}=je(u),{disabled:we,invalid:Ae,isDisabled:Ke,isInvalid:Le,isReadOnly:Qe,isRequired:Xe,labelId:We,readOnly:Ie,required:qe,...Be}=Me(Ge),Oe=ze(a);let W=[];return!Oe.length&&i.length&&(W=i.map((Pe,De)=>e.jsx(o,{...Pe},De))),e.jsx(He,{value:{colorScheme:n,size:t,variant:l,disabled:we,invalid:Ae,readOnly:Ie,required:qe,value:ye,onChange:Fe},children:e.jsx(_e,{ref:w,className:Re("ui-checkbox-group",r),direction:d,gap:h??(d==="row"?"1rem":void 0),...Ve({"aria-labelledby":We,...Be}),children:a??W})})});c.displayName="CheckboxGroup";c.__ui__="CheckboxGroup";const er={component:o,title:"Components / Forms / Checkbox"},x=()=>e.jsx(o,{children:"孫悟空"}),m=()=>e.jsxs(Se,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),k=()=>e.jsx(Se,{gap:"md",children:Te.map(r=>e.jsx(o,{colorScheme:r,defaultChecked:!0,children:r},r))}),b=()=>e.jsx(o,{defaultChecked:!0,children:"孫悟空"}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{disabled:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,disabled:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{disabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(s,{disabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(s,{disabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{readOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,readOnly:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{readOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(s,{legend:"Which notifications would you like to receive?",readOnly:!0,children:e.jsx(o,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(s,{legend:"Which notifications would you like to receive?",readOnly:!0,children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{invalid:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,invalid:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{invalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(s,{errorMessage:"This is required.",invalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(s,{errorMessage:"This is required.",invalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),f=()=>{const[r,n]=A.useState([!1,!1]),t=r.every(Boolean),l=r.some(Boolean)&&!t;return e.jsxs(F,{gap:"sm",children:[e.jsx(o,{checked:t,indeterminate:l,onChange:a=>n([a.target.checked,a.target.checked]),children:"地球人"}),e.jsxs(F,{gap:"sm",pl:"md",children:[e.jsx(o,{checked:r[0],onChange:a=>n([a.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{checked:r[1],onChange:a=>n([r[0],a.target.checked]),children:"孫悟飯"})]})]})},g=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(c,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(c,{defaultValue:["孫悟空","ベジータ"],direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(c,{defaultValue:["孫悟空","ベジータ"],items:r})]})},j=()=>{const[r,{toggle:n}]=Je(!1);return e.jsx(o,{checked:r,onChange:n,children:"孫悟空"})},S=()=>{const[r,n]=A.useState(["孫悟空","ベジータ"]);return e.jsxs(c,{value:r,onChange:t=>n(t),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},N=()=>{const r=t=>{const{getIconProps:l,getInputProps:a}=Ee(t);return e.jsxs(I,{as:"label",children:[e.jsx("input",{...a(),"aria-label":t.value}),e.jsx(I,{...l(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:t.value})]})},{getCheckboxProps:n}=je({defaultValue:["孫悟空"]});return e.jsxs(Ue,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},G=()=>{var d,h;const{control:r,formState:{errors:n},handleSubmit:t,watch:l}=ge(),a=i=>console.log("submit:",i);return console.log("watch:",l()),e.jsxs(F,{as:"form",onSubmit:t(a),children:[e.jsx(s,{errorMessage:(d=n.checkbox)==null?void 0:d.message,invalid:!!n.checkbox,legend:"Who is your favorite character?",children:e.jsx(V,{name:"checkbox",control:r,render:({field:{value:i,...u}})=>e.jsx(o,{checked:i,...u,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(s,{errorMessage:(h=n.checkboxGroup)==null?void 0:h.message,invalid:!!n.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(V,{name:"checkboxGroup",control:r,render:({field:i})=>e.jsxs(c,{...i,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},y=()=>{var h,i;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,formState:{errors:t},handleSubmit:l,watch:a}=ge({defaultValues:r}),d=u=>console.log("submit:",u);return console.log("watch:",a()),e.jsxs(F,{as:"form",onSubmit:l(d),children:[e.jsx(s,{errorMessage:(h=t.checkbox)==null?void 0:h.message,invalid:!!t.checkbox,legend:"Who is your favorite character?",children:e.jsx(V,{name:"checkbox",control:n,render:({field:{value:u,...w}})=>e.jsx(o,{checked:u,...w,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(s,{errorMessage:(i=t.checkboxGroup)==null?void 0:i.message,invalid:!!t.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(V,{name:"checkboxGroup",control:n,render:({field:u})=>e.jsxs(c,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ne,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var q,B,O;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(O=(B=x.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var P,D,T;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(T=(D=m.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var H,M,_;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(_=(M=k.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var z,R,E;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Checkbox defaultChecked>孫悟空</Checkbox>;
}`,...(E=(R=b.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var U,J,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Checkbox disabled>All Notifications</Checkbox>
      <Checkbox defaultChecked disabled>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox disabled value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset disabled legend="Which notifications would you like to receive?">
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset disabled legend="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var L,Q,X;C.parameters={...C.parameters,docs:{...(L=C.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <Checkbox readOnly>All Notifications</Checkbox>
      <Checkbox defaultChecked readOnly>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox readOnly value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset legend="Which notifications would you like to receive?" readOnly>
        <Checkbox defaultChecked>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset legend="Which notifications would you like to receive?" readOnly>
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </Fieldset>
    </>;
}`,...(X=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Checkbox invalid>All Notifications</Checkbox>
      <Checkbox defaultChecked invalid>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox invalid value="important">
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <Fieldset errorMessage="This is required." invalid legend="Which notifications would you like to receive?">
        <Checkbox>All Notifications</Checkbox>
      </Fieldset>

      <Fieldset errorMessage="This is required." invalid legend="Which notifications would you like to receive?">
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
      <Checkbox checked={allChecked} indeterminate={isIndeterminate} onChange={e => setValues([e.target.checked, e.target.checked])}>
        地球人
      </Checkbox>

      <VStack gap="sm" pl="md">
        <Checkbox checked={values[0]} onChange={e => setValues([e.target.checked, values[1]!])}>
          孫悟空
        </Checkbox>

        <Checkbox checked={values[1]} onChange={e => setValues([values[0]!, e.target.checked])}>
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>;
}`,...(re=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,te,ae;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ce,ie,se;j.parameters={...j.parameters,docs:{...(ce=j.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox checked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(se=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var le,ue,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(de=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var he,xe,me;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(me=(xe=N.parameters)==null?void 0:xe.docs)==null?void 0:me.source}}};var ke,be,pe;G.parameters={...G.parameters,docs:{...(ke=G.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.checkbox?.message} invalid={!!errors.checkbox} legend="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox checked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Fieldset errorMessage={errors.checkboxGroup?.message} invalid={!!errors.checkboxGroup} legend="Who is your favorite character?">
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
}`,...(pe=(be=G.parameters)==null?void 0:be.docs)==null?void 0:pe.source}}};var Ce,ve,fe;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.checkbox?.message} invalid={!!errors.checkbox} legend="Who is your favorite character?">
        <Controller name="checkbox" control={control} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox checked={value} {...rest}>
              孫悟空
            </Checkbox>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Fieldset>

      <Fieldset errorMessage={errors.checkboxGroup?.message} invalid={!!errors.checkboxGroup} legend="Who is your favorite character?">
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
}`,...(fe=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const or=["basic","withSize","withColorScheme","withDefaultIsChecked","disabled","readOnly","invalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{or as __namedExportsOrder,x as basic,j as customControl,S as customControlGroup,N as customHook,er as default,p as disabled,f as indeterminate,v as invalid,G as reactHookForm,y as reactHookFormWithDefaultValue,C as readOnly,k as withColorScheme,b as withDefaultIsChecked,g as withGroup,m as withSize};
