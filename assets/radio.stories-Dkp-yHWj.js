import{j as e,a as d,F as $}from"./jsx-runtime-5BUNAZ9W.js";import{r as l}from"./index-4g5l5LRQ.js";import{u as qe,C as Ee}from"./index.esm-rcUR5vC1.js";import{c as Je}from"./components-9DLTqQwv.js";import{t as Qe}from"./index-67b4IVDo.js";import{u as Xe}from"./index-y79f_l8l.js";import{a as Me,u as Ye,g as eo,F as S}from"./form-control-qBNxiCCw.js";import{F as oo,W as Oe}from"./flex-_DHY_GRp.js";import{g as Z,w as ao,c as io,v as no,a as _e,o as He,p as X,Z as ro,u as P,R as to,K as I,h as g}from"./factory-qmA5MQgQ.js";import{u as lo}from"./use-component-style-rHEypyE8.js";import{o as uo}from"./theme-provider-hZoT5C0K.js";import{H as so,V as Te}from"./stack-y7x4UPa7.js";import{B as ze}from"./button-sZRtE2Id.js";import{B as Y}from"./box-40EI1Djt.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-kZ9TUvrv.js";import"./mapValues-fvZQFbEN.js";import"./_basePickBy-VIqm4fI2.js";import"./isPlainObject-mmZlXdLr.js";import"./index-PPLHz8o0.js";import"./ui-provider-rTBqrtPM.js";import"./environment-provider-FNXndkDC.js";import"./motion-ukEXpwwk.js";import"./loading-provider-VBJZrAI9.js";import"./index-y3gJVxZf.js";import"./Combination-8oCz4vin.js";import"./loading-UQYqEc74.js";import"./index-4cYQkiTb.js";import"./index-DtOM48_0.js";import"./index-ffCptnWF.js";import"./icon-fOnK7QCM.js";import"./forward-ref-A-8Arhkk.js";import"./motion-klEGzG2n.js";import"./index-EargzzxG.js";import"./container-portal-zuGopSwV.js";import"./index-jmm5gWkb.js";import"./notice-s08z__HM.js";import"./alert-vMUSGwPs.js";import"./close-button-Ry_zDY-s.js";import"./use-ripple-FTR2ufPl.js";import"./container-iQuO4WSv.js";import"./text-ornXzEn5.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const co=i=>i&&X(i)&&X(i.target),Ke=({id:i,name:m,isNative:a,...r})=>{i??(i=l.useId()),m??(m=`radio-${i}`),r.onChange=Z(r.onChange);const[t,c]=Xe({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),u=l.useRef(null),b=l.useCallback(()=>{const s=u.current;if(!s)return;let f="input:not(:disabled):checked",v=s.querySelector(f);v?v.focus():(f="input:not(:disabled)",v=s.querySelector(f),v==null||v.focus())},[]),h=l.useCallback(s=>{const f=co(s)?s.target.value:s;c(f)},[c]),B=l.useCallback((s={},f=null)=>({...s,ref:ao(f,u),role:"group"}),[]),k=l.useCallback((s={},f=null)=>({...s,ref:f,name:m,[a?"checked":"isChecked"]:t!=null?s.value===t:void 0,onChange:h}),[m,t,h,a]);return{name:m,value:t,setValue:c,onChange:h,onFocus:b,getContainerProps:B,getRadioProps:k}},[mo,ho]=io({strict:!1,name:"RadioGroupContext"}),C=l.forwardRef(({className:i,size:m,variant:a,colorScheme:r,children:t,items:c=[],direction:u="column",gap:b,...h},B)=>{const{name:k,value:s,onChange:f,getContainerProps:v}=Ke(h),{isRequired:y,isReadOnly:D,isDisabled:p,isInvalid:N}=Me(h),w=no(t);let A=[];return!w.length&&c.length&&(A=c.map(({label:R,value:x,...G},W)=>e(o,{value:x,...G,children:R},W))),e(mo,{value:{size:m,variant:a,colorScheme:r,isRequired:y,isReadOnly:D,isDisabled:p,isInvalid:N,name:k,value:s,onChange:f},children:e(oo,{ref:B,className:_e("ui-radio-group",i),gap:b??(u==="row"?"1rem":void 0),...v(He(h,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),direction:u,children:t??A})})});C.displayName="RadioGroup";const je=i=>{const{name:m,value:a,required:r,disabled:t,readOnly:c,...u}=Ye(i),b=i.id||l.useId(),h=to(u,eo({omit:["aria-readonly"]})),[B,k]=l.useState(!1),[s,f]=l.useState(!1),[v,y]=l.useState(!1),[D,p]=l.useState(!1),[N,w]=l.useState(!!i.defaultIsChecked),A=i.isChecked!==void 0,R=A?i.isChecked:N;l.useEffect(()=>Qe(k),[]);const x=Z(n=>{var F;if(c||t){n.preventDefault();return}A||w(n.target.checked),(F=u.onChange)==null||F.call(u,n)},[c,t,A]),G=Z(u.onBlur),W=Z(u.onFocus),J=l.useCallback(({key:n})=>{n===" "&&p(!0)},[p]),Q=l.useCallback(({key:n})=>{n===" "&&p(!1)},[p]),Ue=l.useCallback((n={},F=null)=>({...h,...n,ref:F,"data-checked":I(R)}),[R,h]),Le=l.useCallback((n={},F=null)=>({...h,...n,ref:F,"data-active":I(D),"data-hover":I(v),"data-checked":I(R),"data-focus":I(s),"data-focus-visible":I(s&&B),"aria-hidden":!0,onMouseDown:g(n.onMouseDown,()=>p(!0)),onMouseUp:g(n.onMouseUp,()=>p(!1)),onMouseEnter:g(n.onMouseEnter,()=>y(!0)),onMouseLeave:g(n.onMouseLeave,()=>y(!1))}),[R,D,s,B,v,h]),Ze=l.useCallback((n={},F=null)=>({...h,...n,ref:F,id:b,type:"radio",name:m,value:a,required:r,disabled:t,readOnly:c,checked:R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:g(n.onChange,x),onBlur:g(n.onBlur,G,()=>f(!1)),onFocus:g(n.onFocus,W,()=>f(!0)),onKeyDown:g(n.onKeyDown,J),onKeyUp:g(n.onKeyUp,Q)}),[h,b,m,a,r,t,c,R,x,G,W,J,Q]),$e=l.useCallback((n={},F=null)=>({...h,props:n,ref:F,onMouseDown:g(n.onMouseDown,V=>{V.preventDefault(),V.stopPropagation()}),onTouchStart:g(n.onTouchStart,V=>{V.preventDefault(),V.stopPropagation()}),"data-checked":I(R)}),[R,h]);return{isFocusVisible:B,isFocused:s,isHovered:v,isActive:D,isChecked:R,getContainerProps:Ue,getInputProps:Ze,getIconProps:Le,getLabelProps:$e}},o=l.forwardRef((i,m)=>{const a=ho(),r=Me(i),[t,c]=lo("Radio",{...a,...i}),{className:u,gap:b="0.5rem",isRequired:h=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:B=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:k=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:s=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:f,inputProps:v,labelProps:y,children:D,...p}=uo(c),{getContainerProps:N,getInputProps:w,getIconProps:A,getLabelProps:R}=je({...p,isRequired:h,isReadOnly:B,isDisabled:k,isInvalid:s,isChecked:a!=null&&a.value&&p.value?a.value===p.value:p.isChecked,onChange:a!=null&&a.onChange&&p.value?ro(a.onChange,p.onChange):p.onChange});return d(P.label,{className:_e("ui-radio",u),...N(),...He(p,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:b,...t.container},children:[e(P.input,{className:"ui-radio__input",...w(v,m)}),e(P.span,{className:"ui-radio__icon",...A(f),__css:{position:"relative",display:"inline-block",userSelect:"none",...t.icon}}),e(P.span,{className:"ui-radio__label",...R(y),__css:{...t.label},children:D})]})});o.displayName="Radio";const ia={title:"Components / Forms / Radio",component:o},q=()=>e(o,{children:"孫悟空"}),E=()=>d(Oe,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),M=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),O=()=>e(Oe,{gap:"md",children:Je.map(i=>e(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),_=()=>d($,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isDisabled:!0,label:"Which notifications would you like to receive?",children:d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),H=()=>d($,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(S,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),T=()=>d($,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(S,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:d(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),z=()=>d($,{children:[d(C,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),d(C,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(C,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),K=()=>{const[i,m]=l.useState("孫悟空");return d(C,{value:i,onChange:a=>m(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},j=()=>{const i=r=>{const{getInputProps:t,getIconProps:c}=je(r);return d(Y,{as:"label",children:[e(P.input,{...t(),"aria-label":r.value}),e(Y,{...c(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:m,getRadioProps:a}=Ke({defaultValue:"孫悟空"});return d(so,{gap:"sm",...m(),children:[e(i,{...a({value:"孫悟空"})}),e(i,{...a({value:"ベジータ"})}),e(i,{...a({value:"フリーザ"})})]})},U=()=>{var c;const{control:i,handleSubmit:m,watch:a,formState:{errors:r}}=qe(),t=u=>console.log("submit:",u);return console.log("watch:",a()),d(Te,{as:"form",onSubmit:m(t),children:[e(S,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(c=r.radio)==null?void 0:c.message,children:e(Ee,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>d(C,{...u,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},L=()=>{var u;const i={radio:"孫悟空"},{control:m,handleSubmit:a,watch:r,formState:{errors:t}}=qe({defaultValues:i}),c=b=>console.log("submit:",b);return console.log("watch:",r()),d(Te,{as:"form",onSubmit:a(c),children:[e(S,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e(Ee,{name:"radio",control:m,rules:{required:{value:!0,message:"This is required."}},render:({field:b})=>d(C,{...b,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(ze,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ee,oe,ae;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
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
