import{j as e,a as n,F as A}from"./jsx-runtime-TtYKBvr-.js";import{u as Ge}from"./index-gWY0u-sb.js";import{r as fe}from"./index-IybTgENJ.js";import{u as ge,C as w}from"./index.esm-PVkfQNar.js";import{c as ye}from"./components-sU1s-JAi.js";import{C as o,a as c,u as Ve,b as we}from"./checkbox-HD6dAZhH.js";import{W as Se}from"./flex-568aTMsS.js";import{F as s}from"./form-control-CK1c8hCU.js";import{V as F,H as Fe}from"./stack-U7fyOJfq.js";import{B as Ie}from"./button-LzNje2hk.js";import{B as W}from"./box-ACqpXpFo.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-v-tIW51c.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-zqHb7KR6.js";import"./theme-provider-RZopMVJP.js";import"./factory-BpP3TutA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./environment-provider-L2wn23Xn.js";import"./loading-provider-H6tysiaC.js";import"./index-j-OI4-0-.js";import"./component-G3mliOEp.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./icon-C1O_Nmpw.js";import"./forward-ref-6T0UNPU-.js";import"./motion-SXgmxp4L.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-rn_JBcyJ.js";import"./index-xIHD0DlW.js";import"./notice-Bi-zdf3N.js";import"./alert-cS8W2syV.js";import"./use-component-style-heJEaiUP.js";import"./close-button-qFPHxPzx.js";import"./use-ripple-XZ8Hx3Ay.js";import"./container-0jdfLaVc.js";import"./text-wk7Pq1NB.js";import"./index-D34t7pId.js";import"./index-IsKhnU0y.js";const So={title:"Components / Forms / Checkbox",component:o},b=()=>e(o,{children:"孫悟空"}),k=()=>n(Se,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),C=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),p=()=>e(Se,{gap:"md",children:ye.map(r=>e(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),x=()=>n(A,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(s,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(s,{isDisabled:!0,label:"Which notifications would you like to receive?",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),v=()=>n(A,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(s,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(s,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),f=()=>n(A,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(s,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(s,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:n(c,{defaultValue:["all"],children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),g=()=>{const[r,a]=fe.useState([!1,!1]),i=r.every(Boolean),l=r.some(Boolean)&&!i;return n(F,{gap:"sm",children:[e(o,{isChecked:i,isIndeterminate:l,onChange:t=>a([t.target.checked,t.target.checked]),children:"地球人"}),n(F,{pl:"md",gap:"sm",children:[e(o,{isChecked:r[0],onChange:t=>a([t.target.checked,r[1]]),children:"孫悟空"}),e(o,{isChecked:r[1],onChange:t=>a([r[0],t.target.checked]),children:"孫悟飯"})]})]})},S=()=>n(A,{children:[n(c,{defaultValue:["孫悟空","ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),n(c,{direction:"row",defaultValue:["孫悟空","ベジータ"],children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(c,{defaultValue:["孫悟空","ベジータ"],items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),I=()=>{const[r,{toggle:a}]=Ge(!1);return e(o,{isChecked:r,onChange:a,children:"孫悟空"})},N=()=>{const[r,a]=fe.useState(["孫悟空","ベジータ"]);return n(c,{value:r,onChange:i=>a(i),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},G=()=>{const r=i=>{const{getInputProps:l,getIconProps:t}=we(i);return n(W,{as:"label",children:[e("input",{...l()}),e(W,{...t(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:i.value})]})},{getCheckboxProps:a}=Ve({defaultValue:["孫悟空"]});return n(Fe,{gap:"sm",children:[e(r,{...a({value:"孫悟空"})}),e(r,{...a({value:"ベジータ"})}),e(r,{...a({value:"フリーザ"})})]})},y=()=>{var m,d;const{control:r,handleSubmit:a,watch:i,formState:{errors:l}}=ge(),t=u=>console.log("submit:",u);return console.log("watch:",i()),n(F,{as:"form",onSubmit:a(t),children:[e(s,{isInvalid:!!l.checkbox,label:"Who is your favorite character?",errorMessage:(m=l.checkbox)==null?void 0:m.message,children:e(w,{name:"checkbox",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:u,...h}})=>e(o,{isChecked:u,...h,children:"孫悟空"})})}),e(s,{isInvalid:!!l.checkboxGroup,label:"Who is your favorite character?",errorMessage:(d=l.checkboxGroup)==null?void 0:d.message,children:e(w,{name:"checkboxGroup",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>n(c,{...u,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},V=()=>{var d,u;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:a,handleSubmit:i,watch:l,formState:{errors:t}}=ge({defaultValues:r}),m=h=>console.log("submit:",h);return console.log("watch:",l()),n(F,{as:"form",onSubmit:i(m),children:[e(s,{isInvalid:!!t.checkbox,label:"Who is your favorite character?",errorMessage:(d=t.checkbox)==null?void 0:d.message,children:e(w,{name:"checkbox",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:h,...Ne}})=>e(o,{isChecked:h,...Ne,children:"孫悟空"})})}),e(s,{isInvalid:!!t.checkboxGroup,label:"Who is your favorite character?",errorMessage:(u=t.checkboxGroup)==null?void 0:u.message,children:e(w,{name:"checkboxGroup",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>n(c,{...h,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ie,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var D,q,B;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,T,H;k.parameters={...k.parameters,docs:{...(R=k.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Checkbox size="sm">孫悟空</Checkbox>
      <Checkbox size="md">ベジータ</Checkbox>
      <Checkbox size="lg">フリーザ</Checkbox>
    </Wrap>;
}`,...(H=(T=k.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var M,P,O;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Checkbox defaultIsChecked>孫悟空</Checkbox>;
}`,...(O=(P=C.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var z,_,j;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Checkbox key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Checkbox>)}
    </Wrap>;
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var E,U,J;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
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
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,oe;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(oe=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,ae;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ae=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var te,ce,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(ie=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,se,ue;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(ue=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var he,de,me;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(me=(de=G.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var be,ke,Ce;y.parameters={...y.parameters,docs:{...(be=y.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var pe,xe,ve;V.parameters={...V.parameters,docs:{...(pe=V.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(ve=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};const Io=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Io as __namedExportsOrder,b as basic,I as customControl,N as customControlGroup,G as customHook,So as default,g as indeterminate,x as isDisabled,f as isInvalid,v as isReadonly,y as reactHookForm,V as reactHookFormWithDefaultValue,p as withColorScheme,C as withDefaultIsChecked,S as withGroup,k as withSize};
