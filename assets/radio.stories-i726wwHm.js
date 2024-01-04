import{j as e,a as s,F as $}from"./jsx-runtime-5BUNAZ9W.js";import{r as u}from"./index-4g5l5LRQ.js";import{u as qe,C as Ee}from"./index.esm-rcUR5vC1.js";import{c as Je}from"./components-CikM4Ac2.js";import{t as Qe}from"./index-HT1cLe3K.js";import{u as Xe}from"./index-lIz39_v8.js";import{a as Me,u as Ye,g as eo,F as S}from"./form-control-H13kU9ou.js";import{F as oo,W as Oe}from"./flex-nM_j58Az.js";import{g as Z,w as ao,c as io,v as no,a as _e,o as He,p as X,Z as ro,u as P,R as to,K as I,h as g}from"./factory-S7NpTOPD.js";import{u as lo}from"./use-component-style-RZgwdKSo.js";import{o as uo}from"./theme-provider-gPsMpKLC.js";import{H as so,V as Te}from"./stack-hSz9mWhW.js";import{B as ze}from"./button-BOuQJR-0.js";import{B as Y}from"./box-fbrrRwZD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-UGPyZe_z.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-X4-G-Ivj.js";import"./environment-provider-StHaV0Js.js";import"./motion-ukEXpwwk.js";import"./loading-provider-_atVP6dC.js";import"./index-qUJCk-PD.js";import"./Combination-8oCz4vin.js";import"./loading-wo-qYTRZ.js";import"./index--9owDyfg.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./icon-BK6khpDY.js";import"./forward-ref-A-8Arhkk.js";import"./motion-Uato0l8n.js";import"./index-EargzzxG.js";import"./container-portal-BQwnZChX.js";import"./index-jmm5gWkb.js";import"./notice-6GkOM2bZ.js";import"./alert-DWXnxKiF.js";import"./close-button-BZ4irXP7.js";import"./use-ripple--PYcbSnX.js";import"./container-WtDyclYB.js";import"./text-ZZ-rJ1wf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const co=i=>i&&X(i)&&X(i.target),Ke=({id:i,name:c,isNative:a,...r})=>{i??(i=u.useId()),c??(c=`radio-${i}`),r.onChange=Z(r.onChange);const[t,d]=Xe({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),m=u.useRef(null),f=u.useCallback(()=>{const l=m.current;if(!l)return;let v="input:not(:disabled):checked",R=l.querySelector(v);R?R.focus():(v="input:not(:disabled)",R=l.querySelector(v),R==null||R.focus())},[]),h=u.useCallback(l=>{const v=co(l)?l.target.value:l;d(v)},[d]),B=u.useCallback((l={},v=null)=>({...l,ref:ao(v,m),role:"group"}),[]),k=u.useCallback((l={},v=null)=>({...l,ref:v,name:c,[a?"checked":"isChecked"]:t!=null?l.value===t:void 0,onChange:h}),[c,t,h,a]);return{name:c,value:t,setValue:d,onChange:h,onFocus:f,getContainerProps:B,getRadioProps:k}},[mo,ho]=io({strict:!1,name:"RadioGroupContext"}),b=u.forwardRef(({className:i,size:c,variant:a,colorScheme:r,children:t,items:d=[],direction:m="column",gap:f,...h},B)=>{const{name:k,value:l,onChange:v,getContainerProps:R}=Ke(h),{isRequired:y,isReadOnly:D,isDisabled:p,isInvalid:N}=Me(h),w=no(t);let A=[];return!w.length&&d.length&&(A=d.map(({label:C,value:x,...G},W)=>e(o,{value:x,...G,children:C},W))),e(mo,{value:{size:c,variant:a,colorScheme:r,isRequired:y,isReadOnly:D,isDisabled:p,isInvalid:N,name:k,value:l,onChange:v},children:e(oo,{ref:B,className:_e("ui-radio-group",i),gap:f??(m==="row"?"1rem":void 0),...R(He(h,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),direction:m,children:t??A})})});b.displayName="RadioGroup";const je=i=>{const{id:c,name:a,value:r,required:t,disabled:d,readOnly:m,...f}=Ye(i),h=to(f,eo({omit:["aria-readonly"]})),[B,k]=u.useState(!1),[l,v]=u.useState(!1),[R,y]=u.useState(!1),[D,p]=u.useState(!1),[N,w]=u.useState(!!i.defaultIsChecked),A=i.isChecked!==void 0,C=A?i.isChecked:N;u.useEffect(()=>Qe(k),[]);const x=Z(n=>{var F;if(m||d){n.preventDefault();return}A||w(n.target.checked),(F=f.onChange)==null||F.call(f,n)},[m,d,A]),G=Z(f.onBlur),W=Z(f.onFocus),J=u.useCallback(({key:n})=>{n===" "&&p(!0)},[p]),Q=u.useCallback(({key:n})=>{n===" "&&p(!1)},[p]),Ue=u.useCallback((n={},F=null)=>({...h,...n,ref:F,"data-checked":I(C)}),[C,h]),Le=u.useCallback((n={},F=null)=>({...h,...n,ref:F,"data-active":I(D),"data-hover":I(R),"data-checked":I(C),"data-focus":I(l),"data-focus-visible":I(l&&B),"aria-hidden":!0,onMouseDown:g(n.onMouseDown,()=>p(!0)),onMouseUp:g(n.onMouseUp,()=>p(!1)),onMouseEnter:g(n.onMouseEnter,()=>y(!0)),onMouseLeave:g(n.onMouseLeave,()=>y(!1))}),[C,D,l,B,R,h]),Ze=u.useCallback((n={},F=null)=>({...h,...n,ref:F,id:c,type:"radio",name:a,value:r,required:t,disabled:d,readOnly:m,checked:C,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:g(n.onChange,x),onBlur:g(n.onBlur,G,()=>v(!1)),onFocus:g(n.onFocus,W,()=>v(!0)),onKeyDown:g(n.onKeyDown,J),onKeyUp:g(n.onKeyUp,Q)}),[h,c,a,r,t,d,m,C,x,G,W,J,Q]),$e=u.useCallback((n={},F=null)=>({...h,props:n,ref:F,onMouseDown:g(n.onMouseDown,V=>{V.preventDefault(),V.stopPropagation()}),onTouchStart:g(n.onTouchStart,V=>{V.preventDefault(),V.stopPropagation()}),"data-checked":I(C)}),[C,h]);return{isFocusVisible:B,isFocused:l,isHovered:R,isActive:D,isChecked:C,getContainerProps:Ue,getInputProps:Ze,getIconProps:Le,getLabelProps:$e}},o=u.forwardRef((i,c)=>{const a=ho(),r=Me(i),[t,d]=lo("Radio",{...a,...i}),{className:m,gap:f="0.5rem",isRequired:h=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:B=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:k=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:l=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:v,inputProps:R,labelProps:y,children:D,...p}=uo(d),{getContainerProps:N,getInputProps:w,getIconProps:A,getLabelProps:C}=je({...p,isRequired:h,isReadOnly:B,isDisabled:k,isInvalid:l,isChecked:a!=null&&a.value&&p.value?a.value===p.value:p.isChecked,onChange:a!=null&&a.onChange&&p.value?ro(a.onChange,p.onChange):p.onChange});return s(P.label,{className:_e("ui-radio",m),...N(),...He(p,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:f,...t.container},children:[e(P.input,{className:"ui-radio__input",...w(R,c)}),e(P.span,{className:"ui-radio__icon",...A(v),__css:{position:"relative",display:"inline-block",userSelect:"none",...t.icon}}),e(P.span,{className:"ui-radio__label",...C(y),__css:{...t.label},children:D})]})});o.displayName="Radio";const ia={title:"Components / Forms / Radio",component:o},q=()=>e(o,{children:"孫悟空"}),E=()=>s(Oe,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),M=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),O=()=>e(Oe,{gap:"md",children:Je.map(i=>e(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),_=()=>s($,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),H=()=>s($,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),T=()=>s($,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:s(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),z=()=>s($,{children:[s(b,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),s(b,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(b,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),K=()=>{const[i,c]=u.useState("孫悟空");return s(b,{value:i,onChange:a=>c(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},j=()=>{const i=r=>{const{getInputProps:t,getIconProps:d}=je(r);return s(Y,{as:"label",children:[e(P.input,{...t(),"aria-label":r.value}),e(Y,{...d(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:c,getRadioProps:a}=Ke({defaultValue:"孫悟空"});return s(so,{gap:"sm",...c(),children:[e(i,{...a({value:"孫悟空"})}),e(i,{...a({value:"ベジータ"})}),e(i,{...a({value:"フリーザ"})})]})},U=()=>{var d;const{control:i,handleSubmit:c,watch:a,formState:{errors:r}}=qe(),t=m=>console.log("submit:",m);return console.log("watch:",a()),s(Te,{as:"form",onSubmit:c(t),children:[e(S,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(d=r.radio)==null?void 0:d.message,children:e(Ee,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:m})=>s(b,{...m,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},L=()=>{var m;const i={radio:"孫悟空"},{control:c,handleSubmit:a,watch:r,formState:{errors:t}}=qe({defaultValues:i}),d=f=>console.log("submit:",f);return console.log("watch:",r()),s(Te,{as:"form",onSubmit:a(d),children:[e(S,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(m=t.radio)==null?void 0:m.message,children:e(Ee,{name:"radio",control:c,rules:{required:{value:!0,message:"This is required."}},render:({field:f})=>s(b,{...f,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ee,oe,ae;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ae=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ie,ne,re;E.parameters={...E.parameters,docs:{...(ie=E.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(re=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var te,le,ue;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(ue=(le=M.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var se,de,ce;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,he,pe;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isDisabled>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isDisabled label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(pe=(he=_.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var fe,ve,Re;H.parameters={...H.parameters,docs:{...(fe=H.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio isReadOnly defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isReadOnly>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isReadOnly label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Re=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Ce,be,ge;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio isInvalid defaultIsChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio value="important" isInvalid>
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl isInvalid label="Which notifications would you like to receive?" errorMessage="This is required.">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(ge=(be=T.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Fe,Be,Ae;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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

      <RadioGroup direction="row" defaultValue="孫悟空">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>;
}`,...(Ae=(Be=z.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};var Se,ke,De;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(De=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};var Ie,ye,Ne;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
    return <Box as="label">
        <ui.input {...getInputProps()} aria-label={props.value} />

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
}`,...(Ne=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Ve,Pe;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
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
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Pe=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:Pe.source}}};var xe,Ge,We;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
  };
  const defaultValues: Data = {
    radio: "孫悟空"
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
      <FormControl isInvalid={!!errors.radio} label="Who is your favorite character?" errorMessage={errors.radio?.message}>
        <Controller name="radio" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(We=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};const na=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{na as __namedExportsOrder,q as basic,K as customControl,j as customHook,ia as default,_ as isDisabled,T as isInvalid,H as isReadonly,U as reactHookForm,L as reactHookFormWithDefaultValue,O as withColorScheme,M as withDefaultIsChecked,z as withGroup,E as withSize};
