import{a as e,j as t,F as J}from"./jsx-runtime-03b4ddbf.js";import{r as c}from"./index-76fb7be0.js";import{u as Be,C as Me}from"./index.esm-01877ad2.js";import{t as Je}from"./index-26df8e84.js";import{u as Qe}from"./index-570fd680.js";import{a as _e,u as Xe,f as q,F as N}from"./form-control-a4c7bf52.js";import{F as eo,W as He}from"./flex-2330e9b7.js";import{b as $,x as oo,k as ao,p as no,e as Te,A as ze,j as X,V as io,d as O,D as B,v as V,t as S}from"./factory-94a21dd6.js";import{a as ro}from"./use-component-style-9258d34a.js";import{o as lo}from"./theme-provider-8a6e6dcc.js";import{H as to,V as Ee}from"./stack-8d88e584.js";import{B as Le}from"./button-139bace1.js";import{B as ee}from"./box-4174d02c.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./loading-9f71b7cc.js";import"./index-79f0243f.js";import"./index-f5d80254.js";import"./index-d0666609.js";import"./icon-78aec9fa.js";const co=n=>n&&X(n)&&X(n.target),je=({id:n,name:s,isNative:a,...r})=>{n=n??c.useId(),s=s??`radio-${n}`,r.onChange=$(r.onChange);const[d,u]=Qe({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),h=c.useRef(null),l=c.useCallback(()=>{const m=h.current;if(!m)return;let f="input:not(:disabled):checked",v=m.querySelector(f);v?v.focus():(f="input:not(:disabled)",v=m.querySelector(f),v==null||v.focus())},[]),p=c.useCallback(m=>{const f=co(m)?m.target.value:m;u(f)},[u]),w=c.useCallback((m={},f=null)=>({...m,ref:oo(f,h),role:"group"}),[]),g=c.useCallback((m={},f=null)=>({...m,ref:f,name:s,[a?"checked":"isChecked"]:d!=null?m.value===d:void 0,onChange:p}),[s,d,p,a]);return{name:s,value:d,setValue:u,onChange:p,onFocus:l,getContainerProps:w,getRadioProps:g}},[so,uo]=ao({strict:!1,name:"RadioGroupContext"}),C=c.forwardRef(({className:n,size:s,variant:a,colorScheme:r,children:d,items:u=[],direction:h="column",gap:l,...p},w)=>{const{name:g,value:m,onChange:f,getContainerProps:v}=je(p),{isRequired:I,isReadOnly:b,isDisabled:k,isInvalid:P}=_e(p),F=no(d);let R=[];return!F.length&&u.length&&(R=u.map(({label:D,value:x,...G},W)=>e(o,{value:x,...G,children:D},W))),e(so,{value:{size:s,variant:a,colorScheme:r,isRequired:I,isReadOnly:b,isDisabled:k,isInvalid:P,name:g,value:m,onChange:f},children:e(eo,{ref:w,className:Te("ui-radio-group",n),direction:h,gap:l??(h==="row"?"1rem":void 0),...v(ze(p,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),children:d??R})})});C.displayName="RadioGroup";const Ke=n=>{const{id:s,name:a,value:r,required:d,disabled:u,readOnly:h,...l}=Xe(n),[p,w]=c.useState(!1),[g,m]=c.useState(!1),[f,v]=c.useState(!1),[I,b]=c.useState(!1),[k,P]=c.useState(!!n.defaultChecked),F=n.isChecked!==void 0,R=F?n.isChecked:k;c.useEffect(()=>Je(w),[]);const D=$(i=>{var y;if(h||u){i.preventDefault();return}F||P(i.target.checked),(y=l.onChange)==null||y.call(l,i)},[h,u,F]),x=$(l.onBlur),G=$(l.onFocus),W=c.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),Q=c.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Ue=c.useCallback((i={},y=null)=>({...B(l,q),...i,ref:y,"data-checked":V(R)}),[R,l]),Ye=c.useCallback((i={},y=null)=>({...B(l,q),...i,ref:y,"data-active":V(I),"data-hover":V(f),"data-checked":V(R),"data-focus":V(g),"data-focus-visible":V(g&&p),"aria-hidden":!0,onMouseDown:S(i.onMouseDown,()=>b(!0)),onMouseUp:S(i.onMouseUp,()=>b(!1)),onMouseEnter:S(i.onMouseEnter,()=>v(!0)),onMouseLeave:S(i.onMouseLeave,()=>v(!1))}),[R,I,g,p,f,l]),Ze=c.useCallback((i={},y=null)=>({...B(l,q),...i,ref:y,id:s,type:"radio",name:a,value:r,required:d,disabled:u,readOnly:h,checked:R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:S(i.onChange,D),onBlur:S(i.onBlur,x,()=>m(!1)),onFocus:S(i.onFocus,G,()=>m(!0)),onKeyDown:S(i.onKeyDown,W),onKeyUp:S(i.onKeyUp,Q)}),[l,s,a,r,d,u,h,R,D,x,G,W,Q]),$e=c.useCallback((i={},y=null)=>({...B(l,q),props:i,ref:y,onMouseDown:S(i.onMouseDown,A=>{A.preventDefault(),A.stopPropagation()}),onTouchStart:S(i.onTouchStart,A=>{A.preventDefault(),A.stopPropagation()}),"data-checked":V(R)}),[R,l]);return{isFocusVisible:p,isFocused:g,isHovered:f,isActive:I,isChecked:R,getContainerProps:Ue,getInputProps:Ze,getIconProps:Ye,getLabelProps:$e}},o=c.forwardRef((n,s)=>{const a=uo(),r=_e(n),[d,u]=ro("Radio",{...a,...n}),{className:h,gap:l="0.5rem",isRequired:p=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:w=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:g=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:m=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:f,inputProps:v,labelProps:I,children:b,...k}=lo(u),{getContainerProps:P,getInputProps:F,getIconProps:R,getLabelProps:D}=Ke({...k,isRequired:p,isReadOnly:w,isDisabled:g,isInvalid:m,isChecked:a!=null&&a.value&&k.value?a.value===k.value:k.isChecked,onChange:a!=null&&a.onChange&&k.value?io(a.onChange,k.onChange):k.onChange});return t(O.label,{className:Te("ui-radio",h),...P(),...ze(k,["id","name","value","defaultValue","defaultChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:l,...d.container},children:[e(O.input,{className:"ui-radio__input",...F(v,s)}),e(O.span,{className:"ui-radio__icon",...R(f),__css:{position:"relative",display:"inline-block",userSelect:"none",...d.icon}}),e(O.span,{className:"ui-radio__label",...D(I),__css:{...d.label},children:b})]})});o.displayName="Radio";const xo={title:"Components / Forms / Radio",component:o},M=()=>e(o,{children:"孫悟空"}),_=()=>t(He,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),H=()=>e(o,{defaultChecked:!0,children:"孫悟空"}),T=()=>t(He,{gap:"md",children:[e(o,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(o,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(o,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(o,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(o,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(o,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(o,{colorScheme:"zinc",defaultChecked:!0,children:"Zinc"}),e(o,{colorScheme:"neutral",defaultChecked:!0,children:"Neutral"}),e(o,{colorScheme:"stone",defaultChecked:!0,children:"Stone"}),e(o,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(o,{colorScheme:"rose",defaultChecked:!0,children:"Rose"}),e(o,{colorScheme:"pink",defaultChecked:!0,children:"Pink"}),e(o,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(o,{colorScheme:"amber",defaultChecked:!0,children:"Amber"}),e(o,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(o,{colorScheme:"lime",defaultChecked:!0,children:"Lime"}),e(o,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(o,{colorScheme:"emerald",defaultChecked:!0,children:"Emerald"}),e(o,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(o,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(o,{colorScheme:"sky",defaultChecked:!0,children:"Sky"}),e(o,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(o,{colorScheme:"indigo",defaultChecked:!0,children:"Indigo"}),e(o,{colorScheme:"violet",defaultChecked:!0,children:"Violet"}),e(o,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(o,{colorScheme:"fuchsia",defaultChecked:!0,children:"Fuchsia"})]}),z=()=>t(J,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),E=()=>t(J,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>t(J,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultChecked:!0,children:"All Notifications"}),t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:t(C,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),j=()=>t(J,{children:[t(C,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(C,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),e(C,{defaultValue:"孫悟空",items:[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}]})]}),K=()=>{const[n,s]=c.useState("孫悟空");return t(C,{value:n,onChange:a=>s(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},U=()=>{const n=r=>{const{getInputProps:d,getIconProps:u}=Ke(r);return t(ee,{as:"label",children:[e("input",{...d()}),e(ee,{...u(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:s,getRadioProps:a}=je({defaultValue:"孫悟空"});return t(to,{gap:"sm",...s(),children:[e(n,{...a({value:"孫悟空"})}),e(n,{...a({value:"ベジータ"})}),e(n,{...a({value:"フリーザ"})})]})},Y=()=>{var u;const{control:n,handleSubmit:s,watch:a,formState:{errors:r}}=Be(),d=h=>console.log("submit:",h);return console.log("watch:",a()),t(Ee,{as:"form",onSubmit:s(d),children:[e(N,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(u=r.radio)==null?void 0:u.message,children:e(Me,{name:"radio",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>t(C,{...h,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Le,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Z=()=>{var h;const n={radio:"孫悟空"},{control:s,handleSubmit:a,watch:r,formState:{errors:d}}=Be({defaultValues:n}),u=l=>console.log("submit:",l);return console.log("watch:",r()),t(Ee,{as:"form",onSubmit:a(u),children:[e(N,{isInvalid:!!d.radio,label:"Who is your favorite character?",errorMessage:(h=d.radio)==null?void 0:h.message,children:e(Me,{name:"radio",control:s,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>t(C,{...l,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Le,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ne;M.parameters={...M.parameters,docs:{...(oe=M.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ne=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,re,le;_.parameters={..._.parameters,docs:{...(ie=_.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(le=(re=_.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,de,ce;H.parameters={...H.parameters,docs:{...(te=H.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ce=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var se,ue,he;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio colorScheme="primary" defaultChecked>
        Primary
      </Radio>

      <Radio colorScheme="secondary" defaultChecked>
        Secondary
      </Radio>

      <Radio colorScheme="warning" defaultChecked>
        Warning
      </Radio>

      <Radio colorScheme="danger" defaultChecked>
        Danger
      </Radio>

      <Radio colorScheme="link" defaultChecked>
        Link
      </Radio>

      <Radio colorScheme="gray" defaultChecked>
        Gray
      </Radio>

      <Radio colorScheme="zinc" defaultChecked>
        Zinc
      </Radio>

      <Radio colorScheme="neutral" defaultChecked>
        Neutral
      </Radio>

      <Radio colorScheme="stone" defaultChecked>
        Stone
      </Radio>

      <Radio colorScheme="red" defaultChecked>
        Red
      </Radio>

      <Radio colorScheme="rose" defaultChecked>
        Rose
      </Radio>

      <Radio colorScheme="pink" defaultChecked>
        Pink
      </Radio>

      <Radio colorScheme="orange" defaultChecked>
        Orange
      </Radio>

      <Radio colorScheme="amber" defaultChecked>
        Amber
      </Radio>

      <Radio colorScheme="yellow" defaultChecked>
        Yellow
      </Radio>

      <Radio colorScheme="lime" defaultChecked>
        Lime
      </Radio>

      <Radio colorScheme="green" defaultChecked>
        Green
      </Radio>

      <Radio colorScheme="emerald" defaultChecked>
        Emerald
      </Radio>

      <Radio colorScheme="teal" defaultChecked>
        Teal
      </Radio>

      <Radio colorScheme="cyan" defaultChecked>
        Cyan
      </Radio>

      <Radio colorScheme="sky" defaultChecked>
        Sky
      </Radio>

      <Radio colorScheme="blue" defaultChecked>
        Blue
      </Radio>

      <Radio colorScheme="indigo" defaultChecked>
        Indigo
      </Radio>

      <Radio colorScheme="violet" defaultChecked>
        Violet
      </Radio>

      <Radio colorScheme="purple" defaultChecked>
        Purple
      </Radio>

      <Radio colorScheme="fuchsia" defaultChecked>
        Fuchsia
      </Radio>
    </Wrap>;
}`,...(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,fe,Re;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultChecked>
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
        <Radio defaultChecked>All Notifications</Radio>
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
      <Radio isReadOnly defaultChecked>
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
        <Radio defaultChecked>All Notifications</Radio>
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
      <Radio isInvalid defaultChecked>
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
}`,...(ge=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var be,ye,Ne;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ne=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Ie,Fe;K.parameters={...K.parameters,docs:{...(we=K.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Fe=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Ve,De,Pe;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const CustomRadio: FC<any> = props => {
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
  } = useRadioGroup({
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
}`,...(Pe=(De=U.parameters)==null?void 0:De.docs)==null?void 0:Pe.source}}};var Ae,xe,Ge;Y.parameters={...Y.parameters,docs:{...(Ae=Y.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Oe=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};const Go=["basic","withSize","withDefaultChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Go as __namedExportsOrder,M as basic,K as customControl,U as customHook,xo as default,z as isDisabled,L as isInvalid,E as isReadonly,Y as reactHookForm,Z as reactHookFormWithDefaultValue,T as withColorScheme,H as withDefaultChecked,j as withGroup,_ as withSize};
//# sourceMappingURL=radio.stories-a4c09c2f.js.map
