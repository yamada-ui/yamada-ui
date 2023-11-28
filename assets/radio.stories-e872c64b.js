import{a as e,j as t,F as J}from"./jsx-runtime-b08f8875.js";import{r as s}from"./index-8ee6c85d.js";import{u as Be,C as Me}from"./index.esm-b68ff52f.js";import{t as Je}from"./index-0a4d4100.js";import{u as Qe}from"./index-fb6972ca.js";import{a as _e,u as Xe,f as q,F as y}from"./form-control-8e97ab42.js";import{F as eo,W as He}from"./flex-e769fe53.js";import{b as $,x as oo,k as ao,p as no,e as Te,A as ze,j as X,W as io,d as O,D as B,v as V,t as S}from"./factory-7bddb6ec.js";import{a as ro}from"./use-component-style-873f0974.js";import{o as lo}from"./theme-provider-9d5cd644.js";import{H as to,V as Ee}from"./stack-6e2bfede.js";import{B as Le}from"./button-1f60b64e.js";import{B as ee}from"./box-c903f1eb.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-cf7188bd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./loading-66c4e6ca.js";import"./index-96d7938f.js";import"./index-b9ad7a9b.js";import"./index-bd8d7283.js";import"./icon-2893f38a.js";const so=n=>n&&X(n)&&X(n.target),je=({id:n,name:u,isNative:a,...r})=>{n??(n=s.useId()),u??(u=`radio-${n}`),r.onChange=$(r.onChange);const[d,c]=Qe({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),h=s.useRef(null),l=s.useCallback(()=>{const m=h.current;if(!m)return;let f="input:not(:disabled):checked",v=m.querySelector(f);v?v.focus():(f="input:not(:disabled)",v=m.querySelector(f),v==null||v.focus())},[]),p=s.useCallback(m=>{const f=so(m)?m.target.value:m;c(f)},[c]),N=s.useCallback((m={},f=null)=>({...m,ref:oo(f,h),role:"group"}),[]),g=s.useCallback((m={},f=null)=>({...m,ref:f,name:u,[a?"checked":"isChecked"]:d!=null?m.value===d:void 0,onChange:p}),[u,d,p,a]);return{name:u,value:d,setValue:c,onChange:p,onFocus:l,getContainerProps:N,getRadioProps:g}},[co,uo]=ao({strict:!1,name:"RadioGroupContext"}),C=s.forwardRef(({className:n,size:u,variant:a,colorScheme:r,children:d,items:c=[],direction:h="column",gap:l,...p},N)=>{const{name:g,value:m,onChange:f,getContainerProps:v}=je(p),{isRequired:w,isReadOnly:b,isDisabled:k,isInvalid:A}=_e(p),F=no(d);let R=[];return!F.length&&c.length&&(R=c.map(({label:P,value:x,...G},W)=>e(o,{value:x,...G,children:P},W))),e(co,{value:{size:u,variant:a,colorScheme:r,isRequired:w,isReadOnly:b,isDisabled:k,isInvalid:A,name:g,value:m,onChange:f},children:e(eo,{ref:N,className:Te("ui-radio-group",n),direction:h,gap:l??(h==="row"?"1rem":void 0),...v(ze(p,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),children:d??R})})});C.displayName="RadioGroup";const Ke=n=>{const{id:u,name:a,value:r,required:d,disabled:c,readOnly:h,...l}=Xe(n),[p,N]=s.useState(!1),[g,m]=s.useState(!1),[f,v]=s.useState(!1),[w,b]=s.useState(!1),[k,A]=s.useState(!!n.defaultIsChecked),F=n.isChecked!==void 0,R=F?n.isChecked:k;s.useEffect(()=>Je(N),[]);const P=$(i=>{var I;if(h||c){i.preventDefault();return}F||A(i.target.checked),(I=l.onChange)==null||I.call(l,i)},[h,c,F]),x=$(l.onBlur),G=$(l.onFocus),W=s.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),Q=s.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Ue=s.useCallback((i={},I=null)=>({...B(l,q),...i,ref:I,"data-checked":V(R)}),[R,l]),Ye=s.useCallback((i={},I=null)=>({...B(l,q),...i,ref:I,"data-active":V(w),"data-hover":V(f),"data-checked":V(R),"data-focus":V(g),"data-focus-visible":V(g&&p),"aria-hidden":!0,onMouseDown:S(i.onMouseDown,()=>b(!0)),onMouseUp:S(i.onMouseUp,()=>b(!1)),onMouseEnter:S(i.onMouseEnter,()=>v(!0)),onMouseLeave:S(i.onMouseLeave,()=>v(!1))}),[R,w,g,p,f,l]),Ze=s.useCallback((i={},I=null)=>({...B(l,q),...i,ref:I,id:u,type:"radio",name:a,value:r,required:d,disabled:c,readOnly:h,checked:R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:S(i.onChange,P),onBlur:S(i.onBlur,x,()=>m(!1)),onFocus:S(i.onFocus,G,()=>m(!0)),onKeyDown:S(i.onKeyDown,W),onKeyUp:S(i.onKeyUp,Q)}),[l,u,a,r,d,c,h,R,P,x,G,W,Q]),$e=s.useCallback((i={},I=null)=>({...B(l,q),props:i,ref:I,onMouseDown:S(i.onMouseDown,D=>{D.preventDefault(),D.stopPropagation()}),onTouchStart:S(i.onTouchStart,D=>{D.preventDefault(),D.stopPropagation()}),"data-checked":V(R)}),[R,l]);return{isFocusVisible:p,isFocused:g,isHovered:f,isActive:w,isChecked:R,getContainerProps:Ue,getInputProps:Ze,getIconProps:Ye,getLabelProps:$e}},o=s.forwardRef((n,u)=>{const a=uo(),r=_e(n),[d,c]=ro("Radio",{...a,...n}),{className:h,gap:l="0.5rem",isRequired:p=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:N=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:g=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:m=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:f,inputProps:v,labelProps:w,children:b,...k}=lo(c),{getContainerProps:A,getInputProps:F,getIconProps:R,getLabelProps:P}=Ke({...k,isRequired:p,isReadOnly:N,isDisabled:g,isInvalid:m,isChecked:a!=null&&a.value&&k.value?a.value===k.value:k.isChecked,onChange:a!=null&&a.onChange&&k.value?io(a.onChange,k.onChange):k.onChange});return t(O.label,{className:Te("ui-radio",h),...A(),...ze(k,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:l,...d.container},children:[e(O.input,{className:"ui-radio__input",...F(v,u)}),e(O.span,{className:"ui-radio__icon",...R(f),__css:{position:"relative",display:"inline-block",userSelect:"none",...d.icon}}),e(O.span,{className:"ui-radio__label",...P(w),__css:{...d.label},children:b})]})});o.displayName="Radio";const Go={title:"Components / Forms / Radio",component:o},M=()=>e(o,{children:"孫悟空"}),_=()=>t(He,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),H=()=>e(o,{defaultIsChecked:!0,children:"孫悟空"}),T=()=>t(He,{gap:"md",children:[e(o,{colorScheme:"primary",defaultIsChecked:!0,children:"Primary"}),e(o,{colorScheme:"secondary",defaultIsChecked:!0,children:"Secondary"}),e(o,{colorScheme:"warning",defaultIsChecked:!0,children:"Warning"}),e(o,{colorScheme:"danger",defaultIsChecked:!0,children:"Danger"}),e(o,{colorScheme:"link",defaultIsChecked:!0,children:"Link"}),e(o,{colorScheme:"gray",defaultIsChecked:!0,children:"Gray"}),e(o,{colorScheme:"zinc",defaultIsChecked:!0,children:"Zinc"}),e(o,{colorScheme:"neutral",defaultIsChecked:!0,children:"Neutral"}),e(o,{colorScheme:"stone",defaultIsChecked:!0,children:"Stone"}),e(o,{colorScheme:"red",defaultIsChecked:!0,children:"Red"}),e(o,{colorScheme:"rose",defaultIsChecked:!0,children:"Rose"}),e(o,{colorScheme:"pink",defaultIsChecked:!0,children:"Pink"}),e(o,{colorScheme:"orange",defaultIsChecked:!0,children:"Orange"}),e(o,{colorScheme:"amber",defaultIsChecked:!0,children:"Amber"}),e(o,{colorScheme:"yellow",defaultIsChecked:!0,children:"Yellow"}),e(o,{colorScheme:"lime",defaultIsChecked:!0,children:"Lime"}),e(o,{colorScheme:"green",defaultIsChecked:!0,children:"Green"}),e(o,{colorScheme:"emerald",defaultIsChecked:!0,children:"Emerald"}),e(o,{colorScheme:"teal",defaultIsChecked:!0,children:"Teal"}),e(o,{colorScheme:"cyan",defaultIsChecked:!0,children:"Cyan"}),e(o,{colorScheme:"sky",defaultIsChecked:!0,children:"Sky"}),e(o,{colorScheme:"blue",defaultIsChecked:!0,children:"Blue"}),e(o,{colorScheme:"indigo",defaultIsChecked:!0,children:"Indigo"}),e(o,{colorScheme:"violet",defaultIsChecked:!0,children:"Violet"}),e(o,{colorScheme:"purple",defaultIsChecked:!0,children:"Purple"}),e(o,{colorScheme:"fuchsia",defaultIsChecked:!0,children:"Fuchsia"})]}),z=()=>t(J,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),E=()=>t(J,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultIsChecked:!0,children:"All Notifications"})}),e(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>t(J,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),j=()=>t(J,{children:[t(C,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(C,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(C,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),K=()=>{const[n,u]=s.useState("孫悟空");return t(C,{value:n,onChange:a=>u(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},U=()=>{const n=r=>{const{getInputProps:d,getIconProps:c}=Ke(r);return t(ee,{as:"label",children:[e("input",{...d()}),e(ee,{...c(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:u,getRadioProps:a}=je({defaultValue:"孫悟空"});return t(to,{gap:"sm",...u(),children:[e(n,{...a({value:"孫悟空"})}),e(n,{...a({value:"ベジータ"})}),e(n,{...a({value:"フリーザ"})})]})},Y=()=>{var c;const{control:n,handleSubmit:u,watch:a,formState:{errors:r}}=Be(),d=h=>console.log("submit:",h);return console.log("watch:",a()),t(Ee,{as:"form",onSubmit:u(d),children:[e(y,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(c=r.radio)==null?void 0:c.message,children:e(Me,{name:"radio",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>t(C,{...h,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Le,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Z=()=>{var h;const n={radio:"孫悟空"},{control:u,handleSubmit:a,watch:r,formState:{errors:d}}=Be({defaultValues:n}),c=l=>console.log("submit:",l);return console.log("watch:",r()),t(Ee,{as:"form",onSubmit:a(c),children:[e(y,{isInvalid:!!d.radio,label:"Who is your favorite character?",errorMessage:(h=d.radio)==null?void 0:h.message,children:e(Me,{name:"radio",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>t(C,{...l,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Le,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ne=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,re,le;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(le=(re=_.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,de,se;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(se=(de=H.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,ue,he;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio colorScheme="primary" defaultIsChecked>
        Primary
      </Radio>

      <Radio colorScheme="secondary" defaultIsChecked>
        Secondary
      </Radio>

      <Radio colorScheme="warning" defaultIsChecked>
        Warning
      </Radio>

      <Radio colorScheme="danger" defaultIsChecked>
        Danger
      </Radio>

      <Radio colorScheme="link" defaultIsChecked>
        Link
      </Radio>

      <Radio colorScheme="gray" defaultIsChecked>
        Gray
      </Radio>

      <Radio colorScheme="zinc" defaultIsChecked>
        Zinc
      </Radio>

      <Radio colorScheme="neutral" defaultIsChecked>
        Neutral
      </Radio>

      <Radio colorScheme="stone" defaultIsChecked>
        Stone
      </Radio>

      <Radio colorScheme="red" defaultIsChecked>
        Red
      </Radio>

      <Radio colorScheme="rose" defaultIsChecked>
        Rose
      </Radio>

      <Radio colorScheme="pink" defaultIsChecked>
        Pink
      </Radio>

      <Radio colorScheme="orange" defaultIsChecked>
        Orange
      </Radio>

      <Radio colorScheme="amber" defaultIsChecked>
        Amber
      </Radio>

      <Radio colorScheme="yellow" defaultIsChecked>
        Yellow
      </Radio>

      <Radio colorScheme="lime" defaultIsChecked>
        Lime
      </Radio>

      <Radio colorScheme="green" defaultIsChecked>
        Green
      </Radio>

      <Radio colorScheme="emerald" defaultIsChecked>
        Emerald
      </Radio>

      <Radio colorScheme="teal" defaultIsChecked>
        Teal
      </Radio>

      <Radio colorScheme="cyan" defaultIsChecked>
        Cyan
      </Radio>

      <Radio colorScheme="sky" defaultIsChecked>
        Sky
      </Radio>

      <Radio colorScheme="blue" defaultIsChecked>
        Blue
      </Radio>

      <Radio colorScheme="indigo" defaultIsChecked>
        Indigo
      </Radio>

      <Radio colorScheme="violet" defaultIsChecked>
        Violet
      </Radio>

      <Radio colorScheme="purple" defaultIsChecked>
        Purple
      </Radio>

      <Radio colorScheme="fuchsia" defaultIsChecked>
        Fuchsia
      </Radio>
    </Wrap>;
}`,...(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,fe,Re;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Re=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:Re.source}}};var pe,ve,Ce;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ve=E.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var ke,Se,ge;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(ge=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var be,Ie,ye;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ne,we,Fe;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Fe=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Ve,Pe,Ae;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Pe=U.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var De,xe,Ge;Y.parameters={...Y.parameters,docs:{...(De=Y.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ge=(xe=Y.parameters)==null?void 0:xe.docs)==null?void 0:Ge.source}}};var We,qe,Oe;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Oe=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};const Wo=["basic","withSize","withdefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Wo as __namedExportsOrder,M as basic,K as customControl,U as customHook,Go as default,z as isDisabled,L as isInvalid,E as isReadonly,Y as reactHookForm,Z as reactHookFormWithDefaultValue,T as withColorScheme,j as withGroup,_ as withSize,H as withdefaultIsChecked};
//# sourceMappingURL=radio.stories-e872c64b.js.map
