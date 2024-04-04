import{j as e}from"./jsx-runtime-CKrituN3.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as Pe,C as Ge}from"./index.esm-CiJ9mLzm.js";import{c as $e}from"./components-Cghh_z0C.js";import{t as Je}from"./index-CWmLHDC_.js";import{u as Qe}from"./index-eENvL-zr.js";import{a as We,u as Xe,g as Ye,F as B}from"./form-control-BYWtcG_D.js";import{F as Ze,W as Ee}from"./flex-CB3lumw3.js";import{j as L,a as eo,r as oo,x as ao,c as qe,E as Me,p as Q,ab as io,u as N,R as no,A as S,h as x}from"./factory-BVMa8fXZ.js";import{a as ro}from"./use-component-style-DFx-AFMQ.js";import{o as to}from"./theme-provider-BXaPRWNI.js";import{H as so,V as Oe}from"./stack-Y-4i-p3Z.js";import{B as _e}from"./button-Dx5nl3ZL.js";import{B as X}from"./box-DD-NA1tL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BFfB8ey4.js";import"./index-MJ29hH3n.js";import"./_basePickBy-C_jmhI8X.js";import"./iframe-sDZV4vDB.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-JdRuaFY6.js";import"./isPlainObject-80CfKZvR.js";import"./index-DrFu-skq.js";import"./ui-provider-BehHG7Nc.js";import"./index-qfwbxg5S.js";import"./environment-provider-DfVYCp7H.js";import"./motion-JgkBPv6g.js";import"./loading-provider-C42Sy3Y8.js";import"./index-WRgVllkg.js";import"./Combination-DlzjZhkT.js";import"./loading-CvwcjMtk.js";import"./index-BtoBQEmV.js";import"./index-sakSwYJY.js";import"./index-CXM4NpVI.js";import"./icon-BlEaeaZb.js";import"./forward-ref-DuAegr0M.js";import"./motion-CvgaHKJY.js";import"./index-_tcQm2Fk.js";import"./container-portal-Noj2PZgk.js";import"./notice-CRlI_njf.js";import"./alert-CAvcd948.js";import"./close-button-C6pcLWIT.js";import"./use-ripple-D6WSMWHz.js";import"./container-DB4x0OTp.js";import"./text-CocBWv30.js";import"./index-_K0FJqMm.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-BSBoRBkp.js";import"./index-DhdFwUso.js";import"./index-BZMtSqRZ.js";import"./slide-fade-C5auomOa.js";import"./utils-CCAUAsB4.js";import"./scale-fade-CKENLmw4.js";import"./index-DH1WMIuf.js";import"./index-CpvBRLJe.js";import"./select-gkd88pT7.js";import"./option-J4MwLaAj.js";import"./index-DFE8F9kp.js";import"./popover-content-_Pdg-9F5.js";import"./index-BN1YOB1a.js";import"./index-rYLD436_.js";import"./index-BCwV-Nep.js";import"./index-4igDc-3Z.js";const lo=i=>i&&Q(i)&&Q(i.target),He=({id:i,name:c,isNative:a,...r})=>{i??(i=s.useId()),c??(c=`radio-${i}`),r.onChange=L(r.onChange);const[t,d]=Qe({value:r.value,defaultValue:r.defaultValue,onChange:r.onChange}),l=s.useRef(null),C=s.useCallback(()=>{const u=l.current;if(!u)return;let h="input:not(:disabled):checked",f=u.querySelector(h);f?f.focus():(h="input:not(:disabled)",f=u.querySelector(h),f==null||f.focus())},[]),m=s.useCallback(u=>{const h=lo(u)?u.target.value:u;d(h)},[d]),g=s.useCallback((u={},h=null)=>({...u,ref:eo(h,l),role:"group"}),[]),j=s.useCallback((u={},h=null)=>({...u,ref:h,name:c,[a?"checked":"isChecked"]:t!=null?u.value===t:void 0,onChange:m}),[c,t,m,a]);return{name:c,value:t,setValue:d,onChange:m,onFocus:C,getContainerProps:g,getRadioProps:j}},[uo,co]=oo({strict:!1,name:"RadioGroupContext"}),R=s.forwardRef(({className:i,size:c,variant:a,colorScheme:r,children:t,items:d=[],direction:l="column",gap:C,...m},g)=>{const{name:j,value:u,onChange:h,getContainerProps:f}=He(m),{isRequired:k,isReadOnly:A,isDisabled:p,isInvalid:D}=We(m),I=ao(t);let F=[];return!I.length&&d.length&&(F=d.map(({label:v,value:w,...V},P)=>e.jsx(o,{value:w,...V,children:v},P))),e.jsx(uo,{value:{size:c,variant:a,colorScheme:r,isRequired:k,isReadOnly:A,isDisabled:p,isInvalid:D,name:j,value:u,onChange:h},children:e.jsx(Ze,{ref:g,className:qe("ui-radio-group",i),gap:C??(l==="row"?"1rem":void 0),...f(Me(m,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),direction:l,children:t??F})})});R.displayName="RadioGroup";const Te=i=>{const{name:c,value:a,required:r,disabled:t,readOnly:d,...l}=Xe(i),C=i.id||s.useId(),m=no(l,Ye({omit:["aria-readonly"]})),[g,j]=s.useState(!1),[u,h]=s.useState(!1),[f,k]=s.useState(!1),[A,p]=s.useState(!1),[D,I]=s.useState(!!i.defaultIsChecked),F=i.isChecked!==void 0,v=F?i.isChecked:D;s.useEffect(()=>Je(j),[]);const w=L(n=>{var b;if(d||t){n.preventDefault();return}F||I(n.target.checked),(b=l.onChange)==null||b.call(l,n)},[d,t,F]),V=L(l.onBlur),P=L(l.onFocus),$=s.useCallback(({key:n})=>{n===" "&&p(!0)},[p]),J=s.useCallback(({key:n})=>{n===" "&&p(!1)},[p]),ze=s.useCallback((n={},b=null)=>({...m,...n,ref:b,"data-checked":S(v)}),[v,m]),Ke=s.useCallback((n={},b=null)=>({...m,...n,ref:b,"data-active":S(A),"data-hover":S(f),"data-checked":S(v),"data-focus":S(u),"data-focus-visible":S(u&&g),"aria-hidden":!0,onMouseDown:x(n.onMouseDown,()=>p(!0)),onMouseUp:x(n.onMouseUp,()=>p(!1)),onMouseEnter:x(n.onMouseEnter,()=>k(!0)),onMouseLeave:x(n.onMouseLeave,()=>k(!1))}),[v,A,u,g,f,m]),Ue=s.useCallback((n={},b=null)=>({...m,...n,ref:b,id:C,type:"radio",name:c,value:a,required:r,disabled:t,readOnly:d,checked:v,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:x(n.onChange,w),onBlur:x(n.onBlur,V,()=>h(!1)),onFocus:x(n.onFocus,P,()=>h(!0)),onKeyDown:x(n.onKeyDown,$),onKeyUp:x(n.onKeyUp,J)}),[m,C,c,a,r,t,d,v,w,V,P,$,J]),Le=s.useCallback((n={},b=null)=>({...m,props:n,ref:b,onMouseDown:x(n.onMouseDown,y=>{y.preventDefault(),y.stopPropagation()}),onTouchStart:x(n.onTouchStart,y=>{y.preventDefault(),y.stopPropagation()}),"data-checked":S(v)}),[v,m]);return{isFocusVisible:g,isFocused:u,isHovered:f,isActive:A,isChecked:v,getContainerProps:ze,getInputProps:Ue,getIconProps:Ke,getLabelProps:Le}},o=s.forwardRef((i,c)=>{const a=co(),r=We(i),[t,d]=ro("Radio",{...a,...i}),{className:l,gap:C="0.5rem",isRequired:m=(a==null?void 0:a.isRequired)??r.isRequired,isReadOnly:g=(a==null?void 0:a.isReadOnly)??r.isReadOnly,isDisabled:j=(a==null?void 0:a.isDisabled)??r.isDisabled,isInvalid:u=(a==null?void 0:a.isInvalid)??r.isInvalid,iconProps:h,inputProps:f,labelProps:k,children:A,...p}=to(d),{getContainerProps:D,getInputProps:I,getIconProps:F,getLabelProps:v}=Te({...p,isRequired:m,isReadOnly:g,isDisabled:j,isInvalid:u,isChecked:a!=null&&a.value&&p.value?a.value===p.value:p.isChecked,onChange:a!=null&&a.onChange&&p.value?io(a.onChange,p.onChange):p.onChange});return e.jsxs(N.label,{className:qe("ui-radio",l),...D(),...Me(p,["id","name","value","defaultValue","defaultIsChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:C,...t.container},children:[e.jsx(N.input,{className:"ui-radio__input",...I(f,c)}),e.jsx(N.span,{className:"ui-radio__icon",...F(h),__css:{position:"relative",display:"inline-block",userSelect:"none",...t.icon}}),e.jsx(N.span,{className:"ui-radio__label",...v(k),__css:{...t.label},children:A})]})});o.displayName="Radio";const ja={title:"Components / Forms / Radio",component:o},G=()=>e.jsx(o,{children:"孫悟空"}),W=()=>e.jsxs(Ee,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),E=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),q=()=>e.jsx(Ee,{gap:"md",children:$e.map(i=>e.jsx(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),M=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(B,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(B,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(B,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(B,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),_=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(B,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(B,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(R,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),H=()=>{const i=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(R,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(R,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(R,{defaultValue:"孫悟空",items:i})]})},T=()=>{const[i,c]=s.useState("孫悟空");return e.jsxs(R,{value:i,onChange:a=>c(a),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},z=()=>{const i=r=>{const{getInputProps:t,getIconProps:d}=Te(r);return e.jsxs(X,{as:"label",children:[e.jsx(N.input,{...t(),"aria-label":r.value}),e.jsx(X,{...d(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:r.value})]})},{getContainerProps:c,getRadioProps:a}=He({defaultValue:"孫悟空"});return e.jsxs(so,{gap:"sm",...c(),children:[e.jsx(i,{...a({value:"孫悟空"})}),e.jsx(i,{...a({value:"ベジータ"})}),e.jsx(i,{...a({value:"フリーザ"})})]})},K=()=>{var d;const{control:i,handleSubmit:c,watch:a,formState:{errors:r}}=Pe(),t=l=>console.log("submit:",l);return console.log("watch:",a()),e.jsxs(Oe,{as:"form",onSubmit:c(t),children:[e.jsx(B,{isInvalid:!!r.radio,label:"Who is your favorite character?",errorMessage:(d=r.radio)==null?void 0:d.message,children:e.jsx(Ge,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:l})=>e.jsxs(R,{...l,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},U=()=>{var l;const i={radio:"孫悟空"},{control:c,handleSubmit:a,watch:r,formState:{errors:t}}=Pe({defaultValues:i}),d=C=>console.log("submit:",C);return console.log("watch:",r()),e.jsxs(Oe,{as:"form",onSubmit:a(d),children:[e.jsx(B,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(l=t.radio)==null?void 0:l.message,children:e.jsx(Ge,{name:"radio",control:c,rules:{required:{value:!0,message:"This is required."}},render:({field:C})=>e.jsxs(R,{...C,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(_e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Y,Z,ee;G.parameters={...G.parameters,docs:{...(Y=G.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ee=(Z=G.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var oe,ae,ie;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(ie=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var ne,re,te;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(te=(re=E.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,le,ue;q.parameters={...q.parameters,docs:{...(se=q.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(ue=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,ce,me;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(me=(ce=M.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var pe,he,fe;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(fe=(he=O.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,Re,Ce;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Ce=(Re=_.parameters)==null?void 0:Re.docs)==null?void 0:Ce.source}}};var xe,be,ge;H.parameters={...H.parameters,docs:{...(xe=H.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(ge=(be=H.parameters)==null?void 0:be.docs)==null?void 0:ge.source}}};var Fe,Be,je;T.parameters={...T.parameters,docs:{...(Fe=T.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(je=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:je.source}}};var Ae,Se,ke;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(ke=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var De,Ie,ye;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ne,we,Ve;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Ve=(we=U.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};const Aa=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Aa as __namedExportsOrder,G as basic,T as customControl,z as customHook,ja as default,M as isDisabled,_ as isInvalid,O as isReadonly,K as reactHookForm,U as reactHookFormWithDefaultValue,q as withColorScheme,E as withDefaultIsChecked,H as withGroup,W as withSize};
