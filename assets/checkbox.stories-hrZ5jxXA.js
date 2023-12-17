import{j as e,a as n,F as y}from"./jsx-runtime-TtYKBvr-.js";import{u as Se}from"./index-gWY0u-sb.js";import{r as fe}from"./index-IybTgENJ.js";import{u as Be,C as N}from"./index.esm-PVkfQNar.js";import{c as Ie}from"./components-ZfvGJ72a.js";import{C as o,a as c,u as De,b as Ne}from"./checkbox-8D5FnFQD.js";import{W as Fe}from"./flex-JMU2u5xt.js";import{F as l}from"./form-control-FwzeaZdC.js";import{V as G,H as Ge}from"./stack-XX7xMkh4.js";import{B as ge}from"./button-vw3_AT4f.js";import{B as V}from"./box-rBvPdJwr.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-jxkA9W0j.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-QSpUaAIF.js";import"./theme-provider-Wsw433nP.js";import"./factory-yYnGGCem.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-AgGaubw6.js";import"./loading-provider-eLBvA5DO.js";import"./index-JFdRY6YH.js";import"./component-G3mliOEp.js";import"./loading-JdMW4dxy.js";import"./index-dINoAjpC.js";import"./index-ndgh9KrK.js";import"./index-i3K_3DZd.js";import"./icon-h0N_MwdT.js";import"./forward-ref-6T0UNPU-.js";import"./motion-ONtTX0Ck.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-C0JWommc.js";import"./index-xIHD0DlW.js";import"./notice-t31q7X58.js";import"./alert-k4hBOFJJ.js";import"./use-component-style-5-ma296Y.js";import"./close-button-Nk1l7Q8c.js";import"./use-ripple-oUvMmrsO.js";import"./container-8YcCAsLj.js";import"./text-Kd5_YHaX.js";import"./index-5DX-dFPX.js";import"./index-yP8_fdVn.js";const Fo={title:"Components / Forms / Checkbox",component:o},C=()=>e(o,{children:"孫悟空"}),b=()=>n(Fe,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),k=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),p=()=>e(Fe,{gap:"md",children:Ie.map(r=>e(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),x=()=>n(y,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(l,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(l,{isDisabled:!0,label:"Which notifications would you like to receive?",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),v=()=>n(y,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(l,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(l,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),f=()=>n(y,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(l,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(l,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),B=()=>{const[r,a]=fe.useState([!1,!1]),u=r.every(Boolean),i=r.some(Boolean)&&!u;return n(G,{gap:"sm",children:[e(o,{isChecked:u,isIndeterminate:i,onChange:t=>a([t.target.checked,t.target.checked]),children:"地球人"}),n(G,{pl:"md",gap:"sm",children:[e(o,{isChecked:r[0],onChange:t=>a([t.target.checked,r[1]]),children:"孫悟空"}),e(o,{isChecked:r[1],onChange:t=>a([r[0],t.target.checked]),children:"孫悟飯"})]})]})},F=()=>n(y,{children:[n(c,{defaultValue:["孫悟空","ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),n(c,{direction:"row",defaultValue:["孫悟空","ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(c,{defaultValue:["孫悟空","ベジータ"],items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),g=()=>{const[r,{toggle:a}]=Se(!1);return e(o,{isChecked:r,onChange:a,children:"孫悟空"})},A=()=>{const[r,a]=fe.useState(["孫悟空","ベジータ"]);return n(c,{value:r,onChange:u=>a(u),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},S=()=>{const r=u=>{const{getInputProps:i,getIconProps:t}=Ne(u);return n(V,{as:"label",children:[e("input",{...i()}),e(V,{...t(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:u.value})]})},{getCheckboxProps:a}=De({defaultValue:["孫悟空"]});return n(Ge,{gap:"sm",children:[e(r,{...a({value:"孫悟空"})}),e(r,{...a({value:"ベジータ"})}),e(r,{...a({value:"フリーザ"})})]})},I=()=>{var m,d;const{control:r,handleSubmit:a,watch:u,formState:{errors:i}}=Be(),t=s=>console.log("submit:",s);return console.log("watch:",u()),n(G,{as:"form",onSubmit:a(t),children:[e(l,{isInvalid:!!i.checkbox,label:"Who is your favorite character?",errorMessage:(m=i.checkbox)==null?void 0:m.message,children:e(N,{name:"checkbox",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:s,...h}})=>e(o,{isChecked:s,...h,children:"孫悟空"})})}),e(l,{isInvalid:!!i.checkboxGroup,label:"Who is your favorite character?",errorMessage:(d=i.checkboxGroup)==null?void 0:d.message,children:e(N,{name:"checkboxGroup",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:s})=>n(c,{...s,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},D=()=>{var d,s;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:a,handleSubmit:u,watch:i,formState:{errors:t}}=Be({defaultValues:r}),m=h=>console.log("submit:",h);return console.log("watch:",i()),n(G,{as:"form",onSubmit:u(m),children:[e(l,{isInvalid:!!t.checkbox,label:"Who is your favorite character?",errorMessage:(d=t.checkbox)==null?void 0:d.message,children:e(N,{name:"checkbox",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:h,...Ae}})=>e(o,{isChecked:h,...Ae,children:"孫悟空"})})}),e(l,{isInvalid:!!t.checkboxGroup,label:"Who is your favorite character?",errorMessage:(s=t.checkboxGroup)==null?void 0:s.message,children:e(N,{name:"checkboxGroup",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>n(c,{...h,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ge,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var w,W,q;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(q=(W=C.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var E,R,T;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(T=(R=b.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var H,M,P;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(P=(M=k.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var O,z,_;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(_=(z=p.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var j,U,J;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isDisabled>All Notifications</Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isDisabled>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(J=(U=x.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var K,L,Q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isReadOnly>All Notifications</Checkbox>
      <Checkbox isReadOnly defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isReadOnly>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Checkbox defaultIsChecked>All Notifications</Checkbox>
      </FormControl>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(Q=(L=v.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Checkbox isInvalid>All Notifications</Checkbox>
      <Checkbox isInvalid defaultIsChecked>
        All Notifications
      </Checkbox>

      <CheckboxGroup defaultValue={["all"]}>
        <Checkbox value="all">All Notifications</Checkbox>
        <Checkbox value="important" isInvalid>
          Important Notifications
        </Checkbox>
        <Checkbox value="service">Service Notifications</Checkbox>
      </CheckboxGroup>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Checkbox>All Notifications</Checkbox>
      </FormControl>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <CheckboxGroup defaultValue={["all"]}>
          <Checkbox value="all">All Notifications</Checkbox>
          <Checkbox value="important">Important Notifications</Checkbox>
          <Checkbox value="service">Service Notifications</Checkbox>
        </CheckboxGroup>
      </FormControl>
    </>;
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;B.parameters={...B.parameters,docs:{...($=B.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  const [values, setValues] = useState([false, false]);
  const allChecked = values.every(Boolean);
  const isIndeterminate = values.some(Boolean) && !allChecked;
  return <VStack gap="sm">
      <Checkbox isChecked={allChecked} isIndeterminate={isIndeterminate} onChange={e => setValues([e.target.checked, e.target.checked])}>
        地球人
      </Checkbox>

      <VStack pl="md" gap="sm">
        <Checkbox isChecked={values[0]} onChange={e => setValues([e.target.checked, values[1]])}>
          孫悟空
        </Checkbox>

        <Checkbox isChecked={values[1]} onChange={e => setValues([values[0], e.target.checked])}>
          孫悟飯
        </Checkbox>
      </VStack>
    </VStack>;
}`,...(oe=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,ae;F.parameters={...F.parameters,docs:{...(re=F.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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

      <CheckboxGroup direction="row" defaultValue={["孫悟空", "ベジータ"]}>
        <Checkbox value="孫悟空">孫悟空</Checkbox>
        <Checkbox value="ベジータ">ベジータ</Checkbox>
        <Checkbox value="フリーザ">フリーザ</Checkbox>
      </CheckboxGroup>

      <CheckboxGroup defaultValue={["孫悟空", "ベジータ"]} items={items} />
    </>;
}`,...(ae=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,ce,ue;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(ue=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ie,le,se;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(se=(le=A.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var he,de,me;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const CustomCheckbox: FC<ReturnType<UseCheckboxGroupReturn["getCheckboxProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useCheckbox(props);
    return <Box as="label">
        <input {...getInputProps()} />

        <Box {...getIconProps()} cursor="pointer" borderWidth="1px" py="xs" px="sm" rounded="md" _checked={{
        bg: "blue.500",
        color: "white",
        borderColor: "blue.500"
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
}`,...(me=(de=S.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var Ce,be,ke;I.parameters={...I.parameters,docs:{...(Ce=I.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  type Data = {
    checkbox: boolean;
    checkboxGroup: string[];
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.checkbox} label="Who is your favorite character?" errorMessage={errors.checkbox?.message}>
        <Controller name="checkbox" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} />
      </FormControl>

      <FormControl isInvalid={!!errors.checkboxGroup} label="Who is your favorite character?" errorMessage={errors.checkboxGroup?.message}>
        <Controller name="checkboxGroup" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ke=(be=I.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var pe,xe,ve;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  type Data = {
    checkbox: boolean;
    checkboxGroup: string[];
  };
  const defaultValues: Data = {
    checkbox: true,
    checkboxGroup: ["孫悟空"]
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
      <FormControl isInvalid={!!errors.checkbox} label="Who is your favorite character?" errorMessage={errors.checkbox?.message}>
        <Controller name="checkbox" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field: {
          value,
          ...rest
        }
      }) => <Checkbox isChecked={value} {...rest}>
              孫悟空
            </Checkbox>} />
      </FormControl>

      <FormControl isInvalid={!!errors.checkboxGroup} label="Who is your favorite character?" errorMessage={errors.checkboxGroup?.message}>
        <Controller name="checkboxGroup" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <CheckboxGroup {...field}>
              <Checkbox value="孫悟空">孫悟空</Checkbox>
              <Checkbox value="ベジータ">ベジータ</Checkbox>
              <Checkbox value="フリーザ">フリーザ</Checkbox>
            </CheckboxGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ve=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const go=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{go as __namedExportsOrder,C as basic,g as customControl,A as customControlGroup,S as customHook,Fo as default,B as indeterminate,x as isDisabled,f as isInvalid,v as isReadonly,I as reactHookForm,D as reactHookFormWithDefaultValue,p as withColorScheme,k as withDefaultIsChecked,F as withGroup,b as withSize};
