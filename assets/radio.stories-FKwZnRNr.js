import{j as e}from"./extends-CwFRzn3r.js";import{r as t}from"./index-BwDkhjyp.js";import{u as ze,C as Ee}from"./index.esm-DXPXqkjk.js";import{c as ao}from"./components-CLh_vwUz.js";import{t as io}from"./index-BYZyC25U.js";import{o as ro,Y as no,b as O,c as Ke,V as to,k as Z,d as D,h as R,a as so,p as lo,n as ne}from"./factory-zMrA9M4D.js";import{a as Ue,u as co,f as uo,F as N}from"./form-control-GogIMfYi.js";import{a as mo}from"./use-component-style-BfdzvKeB.js";import{o as po}from"./theme-provider-D6YJ9wXo.js";import{u as ho}from"./index-nT_1Y3_X.js";import{F as fo,W as Le}from"./flex-BnJGBwfm.js";import{H as vo,V as Ye}from"./stack-DMEesNao.js";import{B as $e}from"./button-D-OQqBLL.js";import{B as te}from"./box-BYZOdHuG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index--DMNeOYf.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-BfeIzj9w.js";import"./index-BZt5DUIX.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BpmNmCeI.js";import"./index-B7Zbs5MR.js";import"./Combination-IUp2vs9T.js";import"./loading-BAxQru_S.js";import"./icon-CZT7FJOE.js";import"./use-var-De9F6Sch.js";import"./forward-ref-BWI-Phbn.js";import"./factory-ps7NpXEL.js";import"./portal-B1eO2HpC.js";import"./index-Drt3gf4w.js";import"./notice-bC31F2zA.js";import"./alert-Dj98_OB7.js";import"./close-button-BokoKt_j.js";import"./use-ripple-C38FK3R5.js";import"./container-SFrOoU0z.js";import"./text-BcL7IUWQ.js";import"./checkbox-BSjjP4jA.js";import"./index-vjRMQ8Sb.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-BksmTx8g.js";import"./index-B_BUNkbK.js";import"./index-CPvTbioc.js";import"./index-BCZXDNnZ.js";import"./index-Dl_ChV9G.js";import"./index-DhEy0zJC.js";import"./slide-fade-Dap2K32n.js";import"./forward-ref-scR1bmHx.js";import"./utils-C5KjwI5H.js";import"./scale-fade-DAWTvTKN.js";import"./index-CyIlvs5K.js";import"./index-BAaRSIWS.js";import"./select-BMiytW9K.js";import"./select-list-Ddqst00q.js";import"./index-DDPoa15D.js";import"./popover-trigger-D9NiKBlG.js";import"./index-BmlESF8C.js";import"./index-CoJrGj-T.js";import"./index-CsI5Apoe.js";const[Ro,xo]=ro({name:"RadioGroupContext",strict:!1}),Je=({id:a,...l})=>{const d=t.useId();a??(a=d);const{id:m,name:s,defaultIsChecked:c,isChecked:u,value:f,onChange:x,...g}=co({id:a,...l}),[{"aria-readonly":k,disabled:v,readOnly:b,required:C,onBlur:w,onFocus:F,...r},p]=to(g,uo),[n,W]=t.useState(!1),[I,A]=t.useState(!1),[P,G]=t.useState(!1),[y,j]=t.useState(!1),[_,q]=t.useState(!!c),M=u!==void 0,S=M?u:_;t.useEffect(()=>io(W),[]);const ee=Z(i=>{if(b||v){i.preventDefault();return}M||q(i.target.checked),x==null||x(i)},[b,v,M]),oe=Z(F),ae=Z(w),ie=t.useCallback(({key:i})=>{i===" "&&j(!0)},[j]),re=t.useCallback(({key:i})=>{i===" "&&j(!1)},[j]),Xe=t.useCallback((i={},V=null)=>({...r,...i,ref:V,"data-checked":D(S)}),[S,r]),Ze=t.useCallback((i={},V=null)=>({...r,...i,ref:V,"aria-hidden":!0,"data-active":D(y),"data-checked":D(S),"data-focus":D(I),"data-focus-visible":D(I&&n),"data-hover":D(P),onMouseDown:R(i.onMouseDown,()=>j(!0)),onMouseEnter:R(i.onMouseEnter,()=>G(!0)),onMouseLeave:R(i.onMouseLeave,()=>G(!1)),onMouseUp:R(i.onMouseUp,()=>j(!1))}),[S,y,I,n,P,r]),eo=t.useCallback((i={},V=null)=>({...r,...i,id:a,ref:V,type:"radio",name:s,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-checked":S,checked:S,disabled:v,readOnly:b,required:C,value:f,onBlur:R(i.onBlur,ae,()=>A(!1)),onChange:R(i.onChange,ee),onFocus:R(i.onFocus,oe,()=>A(!0)),onKeyDown:R(i.onKeyDown,ie),onKeyUp:R(i.onKeyUp,re)}),[r,a,s,f,C,v,b,S,ee,ae,oe,ie,re]),oo=t.useCallback((i={},V=null)=>({...r,...i,ref:V,"data-checked":D(S),onMouseDown:R(i.onMouseDown,B=>{B.preventDefault(),B.stopPropagation()}),onTouchStart:R(i.onTouchStart,B=>{B.preventDefault(),B.stopPropagation()})}),[S,r]);return{isActive:y,isChecked:S,isFocused:I,isFocusVisible:n,isHovered:P,props:p,getContainerProps:Xe,getIconProps:Ze,getInputProps:eo,getLabelProps:oo}},o=t.forwardRef((a,l)=>{const d=xo(),{value:m,...s}={...d},c=Ue(a),[u,f]=mo("Radio",{...s,...a}),{className:x,children:g,gap:k="0.5rem",isDisabled:v=s.isDisabled??c.isDisabled,isInvalid:b=s.isInvalid??c.isInvalid,isReadOnly:C=s.isReadOnly??c.isReadOnly,isRequired:w=s.isRequired??c.isRequired,iconProps:F,inputProps:r,labelProps:p,...n}=po(f),W=m&&n.value?m===n.value:n.isChecked,I=s.onChange&&n.value?no(s.onChange,n.onChange):n.onChange,{isChecked:A,props:P,getContainerProps:G,getIconProps:y,getInputProps:j,getLabelProps:_}=Je({...n,isChecked:W,isDisabled:v,isInvalid:b,isReadOnly:C,isRequired:w,onChange:I}),q=m?A?0:-1:0;return e.jsxs(O.label,{className:Ke("ui-radio",x),...G(P),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:k,position:"relative",verticalAlign:"top",...u.container},children:[e.jsx(O.input,{className:"ui-radio__input",...j({...r,tabIndex:q},l)}),e.jsx(O.span,{className:"ui-radio__icon",...y(F),__css:{display:"inline-block",position:"relative",userSelect:"none",...u.icon}}),e.jsx(O.span,{className:"ui-radio__label",..._(p),__css:{...u.label},children:g})]})});o.displayName="Radio";o.__ui__="Radio";const go=a=>a&&ne(a)&&ne(a.target),Qe=({id:a,name:l,defaultValue:d,isNative:m,value:s,onChange:c,...u})=>{const f=t.useId();a??(a=f),l??(l=`radio-${a}`);const x=Z(c),[g,k]=ho({defaultValue:d,value:s,onChange:x}),v=t.useRef(null),b=t.useCallback(()=>{const r=v.current;if(!r)return;let p="input:not(:disabled):checked",n=r.querySelector(p);n?n.focus():(p="input:not(:disabled)",n=r.querySelector(p),n==null||n.focus())},[]),C=t.useCallback(r=>{const p=go(r)?r.target.value:r;k(p)},[k]),w=t.useCallback((r={},p=null)=>({role:"radiogroup",...r,ref:so(p,v)}),[]),F=t.useCallback((r={},p=null)=>{const n=r.value===g;return{...r,ref:p,name:l,"aria-checked":n,[m?"checked":"isChecked"]:g!=null?n:void 0,onChange:C}},[l,g,C,m]);return{id:a,name:l,props:u,setValue:k,value:g,getContainerProps:w,getRadioProps:F,onChange:C,onFocus:b}},h=t.forwardRef(({id:a,className:l,colorScheme:d,size:m,variant:s,children:c,direction:u="column",gap:f,items:x=[],...g},k)=>{const{isDisabled:v,isInvalid:b,isReadOnly:C,isRequired:w,labelId:F,...r}=Ue({id:a,...g}),{id:p,name:n,props:W,value:I,getContainerProps:A,onChange:P}=Qe(r),G=lo(c);let y=[];return!G.length&&x.length&&(y=x.map(({label:j,value:_,...q},M)=>e.jsx(o,{value:_,...q,children:j},M))),e.jsx(Ro,{value:{name:n,colorScheme:d,size:m,variant:s,isDisabled:v,isInvalid:b,isReadOnly:C,isRequired:w,value:I,onChange:P},children:e.jsx(fo,{ref:k,className:Ke("ui-radio-group",l),gap:f??(u==="row"?"1rem":void 0),...A({id:p,"aria-labelledby":F,...W}),direction:u,children:c??y})})});h.displayName="RadioGroup";h.__ui__="RadioGroup";const ya={component:o,title:"Components / Forms / Radio"},H=()=>e.jsx(o,{children:"孫悟空"}),T=()=>e.jsxs(Le,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),z=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),E=()=>e.jsx(Le,{gap:"md",children:ao.map(a=>e.jsx(o,{colorScheme:a,defaultIsChecked:!0,children:a},a))}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(N,{errorMessage:"This is required.",isInvalid:!0,label:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),Y=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(h,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(h,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(h,{defaultValue:"孫悟空",items:a})]})},$=()=>{const[a,l]=t.useState("孫悟空");return e.jsxs(h,{value:a,onChange:d=>l(d),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const a=m=>{const{getIconProps:s,getInputProps:c}=Je(m);return e.jsxs(te,{as:"label",children:[e.jsx("input",{...c(),"aria-label":m.value}),e.jsx(te,{as:"span",...s(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:m.value})]})},{getContainerProps:l,getRadioProps:d}=Qe({defaultValue:"孫悟空"});return e.jsxs(vo,{gap:"sm",...l(),children:[e.jsx(a,{...d({value:"孫悟空"})}),e.jsx(a,{...d({value:"ベジータ"})}),e.jsx(a,{...d({value:"フリーザ"})})]})},Q=()=>{var c;const{control:a,formState:{errors:l},handleSubmit:d,watch:m}=ze(),s=u=>console.log("submit:",u);return console.log("watch:",m()),e.jsxs(Ye,{as:"form",onSubmit:d(s),children:[e.jsx(N,{errorMessage:(c=l.radio)==null?void 0:c.message,isInvalid:!!l.radio,label:"Who is your favorite character?",children:e.jsx(Ee,{name:"radio",control:a,render:({field:u})=>e.jsxs(h,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var u;const a={radio:"孫悟空"},{control:l,formState:{errors:d},handleSubmit:m,watch:s}=ze({defaultValues:a}),c=f=>console.log("submit:",f);return console.log("watch:",s()),e.jsxs(Ye,{as:"form",onSubmit:m(c),children:[e.jsx(N,{errorMessage:(u=d.radio)==null?void 0:u.message,isInvalid:!!d.radio,label:"Who is your favorite character?",children:e.jsx(Ee,{name:"radio",control:l,render:({field:f})=>e.jsxs(h,{...f,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var se,le,de;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,he,fe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(fe=(he=z.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,Re,xe;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(xe=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var ge,be,Ce;K.parameters={...K.parameters,docs:{...(ge=K.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio defaultIsChecked isDisabled>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isDisabled value="important">
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
}`,...(Ce=(be=K.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var je,Se,ke;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio defaultIsChecked isReadOnly>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isReadOnly value="important">
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
}`,...(ke=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ie,ye,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio defaultIsChecked isInvalid>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isInvalid value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl errorMessage="This is required." isInvalid label="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Ne=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Fe,Pe;Y.parameters={...Y.parameters,docs:{...(we=Y.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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

      <RadioGroup defaultValue="孫悟空" direction="row">
        <Radio value="孫悟空">孫悟空</Radio>
        <Radio value="ベジータ">ベジータ</Radio>
        <Radio value="フリーザ">フリーザ</Radio>
      </RadioGroup>

      <RadioGroup defaultValue="孫悟空" items={items} />
    </>;
}`,...(Pe=(Fe=Y.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ve,De,Ae;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Ae=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Ge,We,_e;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getIconProps,
      getInputProps
    } = useRadio(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box as="span" {...getIconProps()} borderWidth="1px" cursor="pointer" px="sm" py="xs" rounded="md" _checked={{
        bg: "blue.500",
        borderColor: "blue.500",
        color: "white"
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
}`,...(_e=(We=J.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var qe,Me,Be;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
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
      <FormControl errorMessage={errors.radio?.message} isInvalid={!!errors.radio} label="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Be=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Oe,He,Te;X.parameters={...X.parameters,docs:{...(Oe=X.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
  const defaultValues: Data = {
    radio: "孫悟空"
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
      <FormControl errorMessage={errors.radio?.message} isInvalid={!!errors.radio} label="Who is your favorite character?">
        <Controller name="radio" control={control} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value="孫悟空">孫悟空</Radio>
              <Radio value="ベジータ">ベジータ</Radio>
              <Radio value="フリーザ">フリーザ</Radio>
            </RadioGroup>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Te=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Te.source}}};const Na=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Na as __namedExportsOrder,H as basic,$ as customControl,J as customHook,ya as default,K as isDisabled,L as isInvalid,U as isReadonly,Q as reactHookForm,X as reactHookFormWithDefaultValue,E as withColorScheme,z as withDefaultIsChecked,Y as withGroup,T as withSize};
