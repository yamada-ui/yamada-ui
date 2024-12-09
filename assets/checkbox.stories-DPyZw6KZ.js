import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as w}from"./index-ClcD9ViR.js";import{u as ge,C as y}from"./index.esm-CEdvtQ_U.js";import{c as Te}from"./components-DwxTyLM4.js";import{C as o,a as He}from"./checkbox-C4RdA26J.js";import{u as je}from"./use-checkbox-group-e0bRijWi.js";import{e as Me}from"./form-control-CsCePsX1.js";import{F as Oe,W as Se}from"./flex-ZeDiVseB.js";import{g as ze,c as _e}from"./factory-ZSnRp-09.js";import{u as Ee}from"./use-checkbox-U_dzeJq7.js";import{F as c}from"./fieldset-BzdZREpL.js";import{V,H as Ue}from"./stack-C-NTCosl.js";import{u as Je}from"./index-gGKStiao.js";import{B as Ie}from"./button-CP_V-DFs.js";import{B as W}from"./box-C9iD9jp7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-B08WIPTu.js";import"./text-Q2VnSl4h.js";import"./forward-ref-D13m8o2p.js";import"./use-component-style-Bj6hwx_Q.js";import"./index-CReU6qRk.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-C676fJGf.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./icon-D-mdHq7J.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-Bnw1OyhA.js";import"./visually-hidden-DlKdK2Br.js";import"./loading-YSmVr9V5.js";const i=w.forwardRef(({className:r,colorScheme:n,size:s,variant:l,children:t,direction:h="column",gap:d,items:a=[],...u},F)=>{const{props:Ne,value:Ge,getContainerProps:ye,onChange:Ve}=je(u),{isDisabled:Fe,isInvalid:we,isReadOnly:Ae,isRequired:We,labelId:De,...qe}=Me(Ne),Be=ze(t);let A=[];return!Be.length&&a.length&&(A=a.map((Re,Pe)=>e.jsx(o,{...Re},Pe))),e.jsx(He,{value:{colorScheme:n,size:s,variant:l,isDisabled:Fe,isInvalid:we,isReadOnly:Ae,isRequired:We,value:Ge,onChange:Ve},children:e.jsx(Oe,{ref:F,className:_e("ui-checkbox-group",r),direction:h,gap:d??(h==="row"?"1rem":void 0),...ye({"aria-labelledby":De,...qe}),children:t??A})})});i.displayName="CheckboxGroup";i.__ui__="CheckboxGroup";const Qo={component:o,title:"Components / Forms / Checkbox"},x=()=>e.jsx(o,{children:"孫悟空"}),m=()=>e.jsxs(Se,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),k=()=>e.jsx(Se,{gap:"md",children:Te.map(r=>e.jsx(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),b=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(c,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),C=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(c,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(c,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(c,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(i,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),f=()=>{const[r,n]=w.useState([!1,!1]),s=r.every(Boolean),l=r.some(Boolean)&&!s;return e.jsxs(V,{gap:"sm",children:[e.jsx(o,{isChecked:s,isIndeterminate:l,onChange:t=>n([t.target.checked,t.target.checked]),children:"地球人"}),e.jsxs(V,{gap:"sm",pl:"md",children:[e.jsx(o,{isChecked:r[0],onChange:t=>n([t.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{isChecked:r[1],onChange:t=>n([r[0],t.target.checked]),children:"孫悟飯"})]})]})},g=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(i,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(i,{defaultValue:["孫悟空","ベジータ"],direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(i,{defaultValue:["孫悟空","ベジータ"],items:r})]})},j=()=>{const[r,{toggle:n}]=Je(!1);return e.jsx(o,{isChecked:r,onChange:n,children:"孫悟空"})},S=()=>{const[r,n]=w.useState(["孫悟空","ベジータ"]);return e.jsxs(i,{value:r,onChange:s=>n(s),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},I=()=>{const r=s=>{const{getIconProps:l,getInputProps:t}=Ee(s);return e.jsxs(W,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(W,{...l(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:s.value})]})},{getCheckboxProps:n}=je({defaultValue:["孫悟空"]});return e.jsxs(Ue,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},N=()=>{var h,d;const{control:r,formState:{errors:n},handleSubmit:s,watch:l}=ge(),t=a=>console.log("submit:",a);return console.log("watch:",l()),e.jsxs(V,{as:"form",onSubmit:s(t),children:[e.jsx(c,{errorMessage:(h=n.checkbox)==null?void 0:h.message,isInvalid:!!n.checkbox,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkbox",control:r,render:({field:{value:a,...u}})=>e.jsx(o,{isChecked:a,...u,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(c,{errorMessage:(d=n.checkboxGroup)==null?void 0:d.message,isInvalid:!!n.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkboxGroup",control:r,render:({field:a})=>e.jsxs(i,{...a,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},G=()=>{var d,a;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,formState:{errors:s},handleSubmit:l,watch:t}=ge({defaultValues:r}),h=u=>console.log("submit:",u);return console.log("watch:",t()),e.jsxs(V,{as:"form",onSubmit:l(h),children:[e.jsx(c,{errorMessage:(d=s.checkbox)==null?void 0:d.message,isInvalid:!!s.checkbox,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkbox",control:n,render:({field:{value:u,...F}})=>e.jsx(o,{isChecked:u,...F,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(c,{errorMessage:(a=s.checkboxGroup)==null?void 0:a.message,isInvalid:!!s.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(y,{name:"checkboxGroup",control:n,render:({field:u})=>e.jsxs(i,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,q,B;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,P,T;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(T=(P=m.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var H,M,O;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(O=(M=k.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var z,_,E;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(E=(_=b.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var U,J,K;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(re=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ne,se,te;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(te=(se=g.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,ae,ce;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(fe=(ve=G.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};const Xo=["basic","withSize","withColorScheme","withDefaultIsChecked","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Xo as __namedExportsOrder,x as basic,j as customControl,S as customControlGroup,I as customHook,Qo as default,f as indeterminate,p as isDisabled,v as isInvalid,C as isReadonly,N as reactHookForm,G as reactHookFormWithDefaultValue,k as withColorScheme,b as withDefaultIsChecked,g as withGroup,m as withSize};