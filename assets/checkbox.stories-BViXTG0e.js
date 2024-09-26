import{j as e}from"./extends-CwFRzn3r.js";import{r as k}from"./index-BwDkhjyp.js";import{u as Fe,C as W}from"./index.esm-DXPXqkjk.js";import{c as Oe}from"./components-Bn8vSq6n.js";import{u as Ee}from"./index-Du0-7Fls.js";import{C as o,a as _e,u as Ue}from"./checkbox-CHh1Q5wt.js";import{u as Je}from"./index-Dz6agydm.js";import{a as Ke,F as d}from"./form-control-DAXawruh.js";import{F as Le,W as we}from"./flex-Cl1zHQNi.js";import{k as Qe,p as Xe,c as Ye,n as T}from"./factory-BgMvz7NM.js";import{V as D,H as Ze}from"./stack-c0WUIOCC.js";import{B as Ae}from"./button-knJHP-Ba.js";import{B as H}from"./box-Bx0dCD5X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-B6ycpjcM.js";import"./theme-provider-Bpmh2ODM.js";import"./ui-provider-DY2oYN-S.js";import"./index-AqDG4z1T.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-TBFbx4D4.js";import"./index-CjGDoYdX.js";import"./Combination-IUp2vs9T.js";import"./loading-B_aB2PJP.js";import"./icon-CvhI1IwG.js";import"./forward-ref-BWI-Phbn.js";import"./use-component-style-D3MffxdG.js";import"./use-var-Dgk44aKJ.js";import"./factory-yZQlYpPU.js";import"./portal-C14XFhbI.js";import"./index-B8XB3FuZ.js";import"./notice-DVwxRQgn.js";import"./alert-B0TkXEfE.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./container-CS7gHKs5.js";import"./text-CxEGNgXo.js";import"./index-B4mTSuWb.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-rjHfP52r.js";import"./index-i7wmI0W_.js";import"./index-BzBNm7Tp.js";import"./index-eVjHUBC4.js";import"./index-B9IsUjMJ.js";import"./index-CzplldKp.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./index-DkfW55MP.js";import"./index-zVjQQjxl.js";import"./index-BAaRSIWS.js";import"./select-B5zLdiRc.js";import"./select-list-czIeuCwx.js";import"./index-Br7ZWcgB.js";import"./popover-content-BSy-Q-lS.js";import"./index-DX38EdL3.js";import"./index-UbUyUaFk.js";const M=r=>r&&T(r)&&T(r.target),We=({value:r,defaultValue:n=[],onChange:a,isNative:c,...t})=>{const m=Qe(a),[s,l]=Je({value:r,defaultValue:n,onChange:m}),u=k.useCallback(i=>{const x=M(i)?i.target.checked:!s.includes(i),b=M(i)?i.target.value:i,R=x?[...s,b]:s.filter(B=>String(B)!==String(b));l(R)},[s,l]),C=k.useCallback((i={},x=null)=>({role:"group",...i,ref:x}),[]),q=k.useCallback((i={},x=null)=>({...i,ref:x,[c?"checked":"isChecked"]:s.some(b=>String(i==null?void 0:i.value)===String(b)),onChange:u}),[u,c,s]);return{props:t,value:s,setValue:l,onChange:u,getContainerProps:C,getCheckboxProps:q}},h=k.forwardRef(({className:r,size:n,variant:a,colorScheme:c,children:t,items:m=[],direction:s="column",gap:l,...u},C)=>{const{value:q,onChange:i,props:x,getContainerProps:b}=We(u),{labelId:R,isRequired:B,isReadOnly:De,isDisabled:qe,isInvalid:Re,...Be}=Ke(x),Pe=Xe(t);let P=[];return!Pe.length&&m.length&&(P=m.map(({label:Te,value:He,...Me},ze)=>e.jsx(o,{value:He,...Me,children:Te},ze))),e.jsx(_e,{value:{size:n,variant:a,colorScheme:c,isRequired:B,isReadOnly:De,isDisabled:qe,isInvalid:Re,value:q,onChange:i},children:e.jsx(Le,{ref:C,className:Ye("ui-checkbox-group",r),direction:s,gap:l??(s==="row"?"1rem":void 0),...b({"aria-labelledby":R,...Be}),children:t??P})})});h.displayName="CheckboxGroup";const sr={title:"Components / Forms / Checkbox",component:o},p=()=>e.jsx(o,{children:"孫悟空"}),v=()=>e.jsxs(we,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),f=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),g=()=>e.jsx(we,{gap:"md",children:Oe.map(r=>e.jsx(o,{colorScheme:r,defaultIsChecked:!0,children:r},r))}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(d,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(d,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(d,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(h,{defaultValue:["all"],children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),N=()=>{const[r,n]=k.useState([!1,!1]),a=r.every(Boolean),c=r.some(Boolean)&&!a;return e.jsxs(D,{gap:"sm",children:[e.jsx(o,{isChecked:a,isIndeterminate:c,onChange:t=>n([t.target.checked,t.target.checked]),children:"地球人"}),e.jsxs(D,{pl:"md",gap:"sm",children:[e.jsx(o,{isChecked:r[0],onChange:t=>n([t.target.checked,r[1]]),children:"孫悟空"}),e.jsx(o,{isChecked:r[1],onChange:t=>n([r[0],t.target.checked]),children:"孫悟飯"})]})]})},G=()=>{const r=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(h,{defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(h,{direction:"row",defaultValue:["孫悟空","ベジータ"],children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(h,{defaultValue:["孫悟空","ベジータ"],items:r})]})},y=()=>{const[r,{toggle:n}]=Ee(!1);return e.jsx(o,{isChecked:r,onChange:n,children:"孫悟空"})},V=()=>{const[r,n]=k.useState(["孫悟空","ベジータ"]);return e.jsxs(h,{value:r,onChange:a=>n(a),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},F=()=>{const r=a=>{const{getInputProps:c,getIconProps:t}=Ue(a);return e.jsxs(H,{as:"label",children:[e.jsx("input",{...c(),"aria-label":a.value}),e.jsx(H,{...t(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:a.value})]})},{getCheckboxProps:n}=We({defaultValue:["孫悟空"]});return e.jsxs(Ze,{gap:"sm",children:[e.jsx(r,{...n({value:"孫悟空"})}),e.jsx(r,{...n({value:"ベジータ"})}),e.jsx(r,{...n({value:"フリーザ"})})]})},w=()=>{var m,s;const{control:r,handleSubmit:n,watch:a,formState:{errors:c}}=Fe(),t=l=>console.log("submit:",l);return console.log("watch:",a()),e.jsxs(D,{as:"form",onSubmit:n(t),children:[e.jsx(d,{isInvalid:!!c.checkbox,label:"Who is your favorite character?",errorMessage:(m=c.checkbox)==null?void 0:m.message,children:e.jsx(W,{name:"checkbox",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:l,...u}})=>e.jsx(o,{isChecked:l,...u,children:"孫悟空"})})}),e.jsx(d,{isInvalid:!!c.checkboxGroup,label:"Who is your favorite character?",errorMessage:(s=c.checkboxGroup)==null?void 0:s.message,children:e.jsx(W,{name:"checkboxGroup",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(h,{...l,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},A=()=>{var s,l;const r={checkbox:!0,checkboxGroup:["孫悟空"]},{control:n,handleSubmit:a,watch:c,formState:{errors:t}}=Fe({defaultValues:r}),m=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(D,{as:"form",onSubmit:a(m),children:[e.jsx(d,{isInvalid:!!t.checkbox,label:"Who is your favorite character?",errorMessage:(s=t.checkbox)==null?void 0:s.message,children:e.jsx(W,{name:"checkbox",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:{value:u,...C}})=>e.jsx(o,{isChecked:u,...C,children:"孫悟空"})})}),e.jsx(d,{isInvalid:!!t.checkboxGroup,label:"Who is your favorite character?",errorMessage:(l=t.checkboxGroup)==null?void 0:l.message,children:e.jsx(W,{name:"checkboxGroup",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(h,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(Ae,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var z,O,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Checkbox>孫悟空</Checkbox>;
}`,...(E=(O=p.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var _,U,J;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(oe=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:oe.source}}};var re,ne,te;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(te=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ae,se,ce;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(ce=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ie,le,ue;N.parameters={...N.parameters,docs:{...(ie=N.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ue=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var he,de,me;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(me=(de=G.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var xe,be,ke;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  const [isChecked, {
    toggle
  }] = useBoolean(false);
  return <Checkbox isChecked={isChecked} onChange={toggle}>
      孫悟空
    </Checkbox>;
}`,...(ke=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ke.source}}};var Ce,pe,ve;V.parameters={...V.parameters,docs:{...(Ce=V.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string[]>(["孫悟空", "ベジータ"]);
  return <CheckboxGroup value={value} onChange={value => setValue(value)}>
      <Checkbox value="孫悟空">孫悟空</Checkbox>
      <Checkbox value="ベジータ">ベジータ</Checkbox>
      <Checkbox value="フリーザ">フリーザ</Checkbox>
    </CheckboxGroup>;
}`,...(ve=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ve.source}}};var fe,ge,je;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  const CustomCheckbox: FC<ReturnType<UseCheckboxGroupReturn["getCheckboxProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useCheckbox(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

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
}`,...(je=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:je.source}}};var Se,Ie,Ne;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  interface Data {
    checkbox: boolean;
    checkboxGroup: string[];
  }
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
}`,...(Ve=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};const cr=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","indeterminate","withGroup","customControl","customControlGroup","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{cr as __namedExportsOrder,p as basic,y as customControl,V as customControlGroup,F as customHook,sr as default,N as indeterminate,j as isDisabled,I as isInvalid,S as isReadonly,w as reactHookForm,A as reactHookFormWithDefaultValue,g as withColorScheme,f as withDefaultIsChecked,G as withGroup,v as withSize};
