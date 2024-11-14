import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as Oe}from"./index-gGKStiao.js";import{r as p}from"./index-ClcD9ViR.js";import{u as Fe,C as W}from"./index.esm-CEdvtQ_U.js";import{c as _e}from"./components-_imAxZxe.js";import{C as o,a as Ee,u as Ue}from"./checkbox-Dlwy-uIR.js";import{u as Je}from"./index-DPt_fcIQ.js";import{e as Ke}from"./form-control-Y8qD5MxJ.js";import{F as Le,W as we}from"./flex-BgJeD3no.js";import{k as Qe,q as Xe,c as Ye,n as T}from"./factory-COau3w21.js";import{F as d}from"./fieldset-fD6gM2Jx.js";import{V as D,H as Ze}from"./stack-DfTvLKXJ.js";import{B as Ae}from"./button-C2qeh-k-.js";import{B as H}from"./box-Co1KKng-.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BcE809qD.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./theme-provider-CNI9L2WW.js";import"./ui-provider-eJsiD_iL.js";import"./index-B5Fb0Sgv.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CW1g4LYM.js";import"./index-CA_fCdqy.js";import"./Combination-CkmEMpJG.js";import"./loading-DYtJ9fc2.js";import"./icon-BodRPJCf.js";import"./use-component-style-CLSKeq_H.js";import"./use-var-YCfkKbSC.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-CgvdJ0pj.js";import"./index-ZuzByk-F.js";import"./factory-ep9rrzy9.js";import"./notice-0nBeSUXU.js";import"./alert-Br92M73P.js";import"./triangle-alert-D-rdrXiJ.js";import"./createLucideIcon-Czt4prMK.js";import"./close-button-EOT3XTCt.js";import"./use-ripple-D0covPjN.js";import"./container-9UL7bQcu.js";import"./text-BnztNdZ-.js";import"./index-BCBmayc8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-DqnSdWX7.js";import"./index-qyuJ8aiN.js";import"./index-Blij8Q7p.js";import"./index-CYDuQAfY.js";import"./index-J4x_JfHv.js";import"./index-BjGf4nWH.js";import"./slide-fade-DzakJmAy.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-COso-ZNO.js";import"./scale-fade-DAfdo16Z.js";import"./index-Btt-sfjQ.js";import"./index-CRS5qAAq.js";import"./index-B5Z2HpMN.js";import"./select-DiVSeaVw.js";import"./select-list-CJRoYFPx.js";import"./index-C58se0b8.js";import"./popover-trigger-C0a8uwwS.js";import"./index-a5RVC8cz.js";import"./index-Bt_V34Vb.js";import"./visually-hidden-CyKzG3XZ.js";const M=r=>r&&T(r)&&T(r.target),We=({defaultValue:r=[],isNative:n,value:s,onChange:h,...t})=>{const x=Qe(h),[i,a]=Je({defaultValue:r,value:s,onChange:x}),l=p.useCallback(u=>{const m=M(u)?u.target.checked:!i.includes(u),k=M(u)?u.target.value:u,R=m?[...i,k]:i.filter(B=>String(B)!==String(k));a(R)},[i,a]),b=p.useCallback((u={},m=null)=>({role:"group",...u,ref:m}),[]),q=p.useCallback((u={},m=null)=>({...u,ref:m,[n?"checked":"isChecked"]:i.some(k=>String(u.value)===String(k)),onChange:l}),[l,n,i]);return{props:t,setValue:a,value:i,getCheckboxProps:q,getContainerProps:b,onChange:l}},c=p.forwardRef(({className:r,colorScheme:n,size:s,variant:h,children:t,direction:x="column",gap:i,items:a=[],...l},b)=>{const{props:q,value:u,getContainerProps:m,onChange:k}=We(l),{isDisabled:R,isInvalid:B,isReadOnly:De,isRequired:qe,labelId:Re,...Be}=Ke(q),Pe=Xe(t);let P=[];return!Pe.length&&a.length&&(P=a.map(({label:Te,value:He,...Me},ze)=>e.jsx(o,{value:He,...Me,children:Te},ze))),e.jsx(Ee,{value:{colorScheme:n,size:s,variant:h,isDisabled:R,isInvalid:B,isReadOnly:De,isRequired:qe,value:u,onChange:k},children:e.jsx(Le,{ref:b,className:Ye("ui-checkbox-group",r),direction:x,gap:i??(x==="row"?"1rem":void 0),...m({"aria-labelledby":Re,...Be}),children:t??P})})});c.displayName="CheckboxGroup";c.__ui__="CheckboxGroup";const dr={component:o,title:"Components / Forms / Checkbox"},C=()=>e.jsx(o,{children:"孫悟空"}),v=()=>e.jsxs(we,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),f=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),g=()=>e.jsx(we,{gap:"md",children:_e.map(r=>e.jsx(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(d,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(c,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const[r,n]=p.useState([!1,!1]),s=r.every(Boolean),h=r.some(Boolean)&&!s;return e.jsxs(D,{gap:"sm",children:[e.jsx(o,{isChecked:s,isIndeterminate:h,onChange:t=>n([t.target.checked,t.target.checked]),children:"地球人"}),e.jsxs(D,{gap:"sm",pl:"md",children:[e.jsx(o,{isChecked:r[0],onChange:t=>n([t.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{isChecked:r[1],onChange:t=>n([r[0],t.target.checked]),children:"孫悟飯"})]})]})},G=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(c,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(c,{defaultValue:["孫悟空","ベジータ"],direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(c,{defaultValue:["孫悟空","ベジータ"],items:r})]})},y=()=>{const[r,{toggle:n}]=Oe(!1);return e.jsx(o,{isChecked:r,onChange:n,children:"孫悟空"})},V=()=>{const[r,n]=p.useState(["孫悟空","ベジータ"]);return e.jsxs(c,{value:r,onChange:s=>n(s),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},F=()=>{const r=s=>{const{getIconProps:h,getInputProps:t}=Ue(s);return e.jsxs(H,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(H,{...h(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:s.value})]})},{getCheckboxProps:n}=We({defaultValue:["孫悟空"]});return e.jsxs(Ze,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},w=()=>{var x,i;const{control:r,formState:{errors:n},handleSubmit:s,watch:h}=Fe(),t=a=>console.log("submit:",a);return console.log("watch:",h()),e.jsxs(D,{as:"form",onSubmit:s(t),children:[e.jsx(d,{errorMessage:(x=n.checkbox)==null?void 0:x.message,isInvalid:!!n.checkbox,legend:"Who is your favorite character?",children:e.jsx(W,{name:"checkbox",control:r,render:({field:{value:a,...l}})=>e.jsx(o,{isChecked:a,...l,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(d,{errorMessage:(i=n.checkboxGroup)==null?void 0:i.message,isInvalid:!!n.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(W,{name:"checkboxGroup",control:r,render:({field:a})=>e.jsxs(c,{...a,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},A=()=>{var i,a;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,formState:{errors:s},handleSubmit:h,watch:t}=Fe({defaultValues:r}),x=l=>console.log("submit:",l);return console.log("watch:",t()),e.jsxs(D,{as:"form",onSubmit:h(x),children:[e.jsx(d,{errorMessage:(i=s.checkbox)==null?void 0:i.message,isInvalid:!!s.checkbox,legend:"Who is your favorite character?",children:e.jsx(W,{name:"checkbox",control:n,render:({field:{value:l,...b}})=>e.jsx(o,{isChecked:l,...b,children:"孫悟空"}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(d,{errorMessage:(a=s.checkboxGroup)==null?void 0:a.message,isInvalid:!!s.checkboxGroup,legend:"Who is your favorite character?",children:e.jsx(W,{name:"checkboxGroup",control:n,render:({field:l})=>e.jsxs(c,{...l,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var z,O,_;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(_=(O=C.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var E,U,J;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,L,Q;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(oe=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,se;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ie,ae;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(ae=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ce,le,ue;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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
}`,...(ue=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var he,de,xe;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(xe=(de=G.parameters)==null?void 0:de.docs)==null?void 0:xe.source}}};var me,ke,pe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(pe=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:pe.source}}};var be,Ce,ve;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(ve=(Ce=V.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var fe,ge,je;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(je=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var Se,Ie,Ne;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Ne.source}}};var Ge,ye,Ve;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ve=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};const xr=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{xr as __namedExportsOrder,C as basic,y as customControl,V as customControlGroup,F as customHook,dr as default,N as indeterminate,j as isDisabled,I as isInvalid,S as isReadonly,w as reactHookForm,A as reactHookFormWithDefaultValue,g as withColorScheme,f as withDefaultIsChecked,G as withGroup,v as withSize};
