import{j as e,a as d,F as Q}from"./jsx-runtime-TtYKBvr-.js";import{r as s}from"./index-IybTgENJ.js";import{u as Oe,C as Be}from"./index.esm-PVkfQNar.js";import{c as Qe}from"./components-grsdrLqG.js";import{t as Ye}from"./index-D34t7pId.js";import{u as Ze}from"./index-IsKhnU0y.js";import{a as _e,u as eo,f as q,F as y}from"./form-control-BdUo61J_.js";import{F as oo,W as He}from"./flex-568aTMsS.js";import{d as J,v as ao,c as io,p as no,a as Te,o as ze,j as Z,X as ro,u as M,O,I as V,h as g}from"./factory-BpP3TutA.js";import{u as to}from"./use-component-style-cxLt7Ns7.js";import{o as lo}from"./theme-provider-RZopMVJP.js";import{H as so,V as je}from"./stack-U7fyOJfq.js";import{B as Ee}from"./button-Qh4ZXxa_.js";import{B as ee}from"./box-ACqpXpFo.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-v-tIW51c.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-8VOwawlD.js";import"./environment-provider-L2wn23Xn.js";import"./loading-provider-H6tysiaC.js";import"./index-j-OI4-0-.js";import"./component-G3mliOEp.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./icon-C1O_Nmpw.js";import"./forward-ref-6T0UNPU-.js";import"./motion-SXgmxp4L.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-rn_JBcyJ.js";import"./index-xIHD0DlW.js";import"./notice-zcc-loJZ.js";import"./alert-3DyQFsnV.js";import"./close-button-hib_kAYl.js";import"./use-ripple-XZ8Hx3Ay.js";import"./container-5ft8ddZN.js";import"./text-HhFMRBG-.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const co=i=>i&&Z(i)&&Z(i.target),Ke=({id:i,name:u,isNative:a,...r})=>{i??(i=s.useId()),u??(u=`radio-${i}`),r.onChange=J(r.onChange);const[l,c]=Ze({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),m=s.useRef(null),t=s.useCallback(()=>{const h=m.current;if(!h)return;let p="input:not(:disabled):checked",R=h.querySelector(p);R?R.focus():(p="input:not(:disabled)",R=h.querySelector(p),R==null||R.focus())},[]),v=s.useCallback(h=>{const p=co(h)?h.target.value:h;c(p)},[c]),N=s.useCallback((h={},p=null)=>({...h,ref:ao(p,m),role:"group"}),[]),S=s.useCallback((h={},p=null)=>({...h,ref:p,name:u,[a?"checked":"isChecked"]:l!=null?h.value===l:void 0,onChange:v}),[u,l,v,a]);return{name:u,value:l,setValue:c,onChange:v,onFocus:t,getContainerProps:N,getRadioProps:S}},[uo,mo]=io({strict:!1,name:"RadioGroupContext"}),b=s.forwardRef(({className:i,size:u,variant:a,colorScheme:r,children:l,items:c=[],direction:m="column",gap:t,...v},N)=>{const{name:S,value:h,onChange:p,getContainerProps:R}=Ke(v),{isRequired:w,isReadOnly:k,isDisabled:C,isInvalid:x}=_e(v),F=no(l);let f=[];return!F.length&&c.length&&(f=c.map(({label:D,value:P,...G},W)=>e(o,{value:P,...G,children:D},W))),e(uo,{value:{size:u,variant:a,colorScheme:r,isRequired:w,isReadOnly:k,isDisabled:C,isInvalid:x,name:S,value:h,onChange:p},children:e(oo,{ref:N,className:Te("ui-radio-group",i),direction:m,gap:t??(m==="row"?"1rem":void 0),...R(ze(v,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),children:l??f})})});b.displayName="RadioGroup";const Ue=i=>{const{id:u,name:a,value:r,required:l,disabled:c,readOnly:m,...t}=eo(i),[v,N]=s.useState(!1),[S,h]=s.useState(!1),[p,R]=s.useState(!1),[w,k]=s.useState(!1),[C,x]=s.useState(!!i.defaultIsChecked),F=i.isChecked!==void 0,f=F?i.isChecked:C;s.useEffect(()=>Ye(N),[]);const D=J(n=>{var I;if(m||c){n.preventDefault();return}F||x(n.target.checked),(I=t.onChange)==null||I.call(t,n)},[m,c,F]),P=J(t.onBlur),G=J(t.onFocus),W=s.useCallback(({key:n})=>{n===" "&&k(!0)},[k]),Y=s.useCallback(({key:n})=>{n===" "&&k(!1)},[k]),Le=s.useCallback((n={},I=null)=>({...O(t,q),...n,ref:I,"data-checked":V(f)}),[f,t]),Xe=s.useCallback((n={},I=null)=>({...O(t,q),...n,ref:I,"data-active":V(w),"data-hover":V(p),"data-checked":V(f),"data-focus":V(S),"data-focus-visible":V(S&&v),"aria-hidden":!0,onMouseDown:g(n.onMouseDown,()=>k(!0)),onMouseUp:g(n.onMouseUp,()=>k(!1)),onMouseEnter:g(n.onMouseEnter,()=>R(!0)),onMouseLeave:g(n.onMouseLeave,()=>R(!1))}),[f,w,S,v,p,t]),$e=s.useCallback((n={},I=null)=>({...O(t,q),...n,ref:I,id:u,type:"radio",name:a,value:r,required:l,disabled:c,readOnly:m,checked:f,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:g(n.onChange,D),onBlur:g(n.onBlur,P,()=>h(!1)),onFocus:g(n.onFocus,G,()=>h(!0)),onKeyDown:g(n.onKeyDown,W),onKeyUp:g(n.onKeyUp,Y)}),[t,u,a,r,l,c,m,f,D,P,G,W,Y]),Je=s.useCallback((n={},I=null)=>({...O(t,q),props:n,ref:I,onMouseDown:g(n.onMouseDown,A=>{A.preventDefault(),A.stopPropagation()}),onTouchStart:g(n.onTouchStart,A=>{A.preventDefault(),A.stopPropagation()}),"data-checked":V(f)}),[f,t]);return{isFocusVisible:v,isFocused:S,isHovered:p,isActive:w,isChecked:f,getContainerProps:Le,getInputProps:$e,getIconProps:Xe,getLabelProps:Je}},o=s.forwardRef((i,u)=>{const a=mo(),r=_e(i),[l,c]=to("Radio",{...a,...i}),{className:m,gap:t="0.5rem",isRequired:v=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:N=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:S=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:h=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:p,inputProps:R,labelProps:w,children:k,...C}=lo(c),{getContainerProps:x,getInputProps:F,getIconProps:f,getLabelProps:D}=Ue({...C,isRequired:v,isReadOnly:N,isDisabled:S,isInvalid:h,isChecked:a!=null&&a.value&&C.value?a.value===C.value:C.isChecked,onChange:a!=null&&a.onChange&&C.value?ro(a.onChange,C.onChange):C.onChange});return d(M.label,{className:Te("ui-radio",m),...x(),...ze(C,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:t,...l.container},children:[e(M.input,{className:"ui-radio__input",...F(R,u)}),e(M.span,{className:"ui-radio__icon",...f(p),__css:{position:"relative",display:"inline-block",userSelect:"none",...l.icon}}),e(M.span,{className:"ui-radio__label",...D(w),__css:{...l.label},children:k})]})});o.displayName="Radio";const aa={title:"Components / Forms / Radio",component:o},B=()=>e(o,{children:"孫悟空"}),_=()=>d(He,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),H=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),T=()=>e(He,{gap:"md",children:Qe.map(i=>e(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),z=()=>d(Q,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),j=()=>d(Q,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),E=()=>d(Q,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:d(b,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>d(Q,{children:[d(b,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),d(b,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(b,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),U=()=>{const[i,u]=s.useState("孫悟空");return d(b,{value:i,onChange:a=>u(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},L=()=>{const i=r=>{const{getInputProps:l,getIconProps:c}=Ue(r);return d(ee,{as:"label",children:[e("input",{...l()}),e(ee,{...c(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:u,getRadioProps:a}=Ke({defaultValue:"孫悟空"});return d(so,{gap:"sm",...u(),children:[e(i,{...a({value:"孫悟空"})}),e(i,{...a({value:"ベジータ"})}),e(i,{...a({value:"フリーザ"})})]})},X=()=>{var c;const{control:i,handleSubmit:u,watch:a,formState:{errors:r}}=Oe(),l=m=>console.log("submit:",m);return console.log("watch:",a()),d(je,{as:"form",onSubmit:u(l),children:[e(y,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(c=r.radio)==null?void 0:c.message,children:e(Be,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:m})=>d(b,{...m,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},$=()=>{var m;const i={radio:"孫悟空"},{control:u,handleSubmit:a,watch:r,formState:{errors:l}}=Oe({defaultValues:i}),c=t=>console.log("submit:",t);return console.log("watch:",r()),d(je,{as:"form",onSubmit:a(c),children:[e(y,{isInvalid:!!l.radio,label:"Who is your favorite character?",errorMessage:(m=l.radio)==null?void 0:m.message,children:e(Be,{name:"radio",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:t})=>d(b,{...t,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ie;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ie=(ae=B.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,re,te;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(te=(re=_.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,se,de;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(de=(se=H.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,ue,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,pe,fe;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(fe=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ve,Re,be;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(be=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};var Ce,ge,Se;E.parameters={...E.parameters,docs:{...(Ce=E.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(Se=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var ke,Ie,ye;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ne,we,Fe;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Fe=(we=U.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Ve,De,xe;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
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
}`,...(xe=(De=L.parameters)==null?void 0:De.docs)==null?void 0:xe.source}}};var Ae,Pe,Ge;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Pe=X.parameters)==null?void 0:Pe.docs)==null?void 0:Ge.source}}};var We,qe,Me;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Me=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};const ia=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{ia as __namedExportsOrder,B as basic,U as customControl,L as customHook,aa as default,z as isDisabled,E as isInvalid,j as isReadonly,X as reactHookForm,$ as reactHookFormWithDefaultValue,T as withColorScheme,H as withDefaultIsChecked,K as withGroup,_ as withSize};
