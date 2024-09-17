import{j as e}from"./extends-CwFRzn3r.js";import{r}from"./index-BwDkhjyp.js";import{u as Te,C as ze}from"./index.esm-DXPXqkjk.js";import{c as oo}from"./components-DBTQUZsw.js";import{t as ao}from"./index-WsJcG9Vu.js";import{l as io,V as no,b as B,c as Ee,S as ro,k as Y,d as A,h as b,a as to,t as so,F as ne}from"./factory-BjF4_dRw.js";import{a as Ke,u as lo,f as co,F as y}from"./form-control-wNB_sh9j.js";import{a as uo}from"./use-component-style-DVO-iEPi.js";import{o as mo}from"./theme-provider-CpaSpGZh.js";import{u as ho}from"./index-BaNhddRa.js";import{F as po,W as Ue}from"./flex-uUFGZwrf.js";import{H as fo,V as Le}from"./stack-D4S-2JYT.js";import{B as $e}from"./button-y-1VIkvD.js";import{B as re}from"./box-B5FcoOR4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_Ccg1d.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./forward-ref-BWI-Phbn.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./text-CpJ_XsDk.js";import"./checkbox-vlO53CvA.js";import"./index-B4Eu0jvp.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-BqI1L0G9.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./index-DroqNDDt.js";import"./index-D-jN3opM.js";import"./index-BxBWkPyk.js";import"./slide-fade-Deo3lGhM.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-CjM9KEIz.js";import"./select-list-BP77M_ft.js";import"./index-BjUO4q1E.js";import"./popover-content-qljWb4pK.js";import"./index-is6smmpS.js";import"./index-Du0-7Fls.js";import"./index-C53kKj3W.js";const[vo,Ro]=io({strict:!1,name:"RadioGroupContext"}),Je=({id:i,...c})=>{i??(i=r.useId());const{id:d,name:s,value:t,isChecked:l,defaultIsChecked:u,onChange:p,...C}=lo({id:i,...c}),[{"aria-readonly":k,required:S,disabled:j,readOnly:v,onFocus:N,onBlur:w,...n},h]=ro(C,co),[m,x]=r.useState(!1),[I,G]=r.useState(!1),[F,W]=r.useState(!1),[P,g]=r.useState(!1),[q,M]=r.useState(!!u),V=l!==void 0,R=V?l:q;r.useEffect(()=>ao(x),[]);const Z=Y(a=>{if(v||j){a.preventDefault();return}V||M(a.target.checked),p==null||p(a)},[v,j,V]),ee=Y(N),oe=Y(w),ae=r.useCallback(({key:a})=>{a===" "&&g(!0)},[g]),ie=r.useCallback(({key:a})=>{a===" "&&g(!1)},[g]),Xe=r.useCallback((a={},D=null)=>({...n,...a,ref:D,"data-checked":A(R)}),[R,n]),Ye=r.useCallback((a={},D=null)=>({...n,...a,ref:D,"data-active":A(P),"data-hover":A(F),"data-checked":A(R),"data-focus":A(I),"data-focus-visible":A(I&&m),"aria-hidden":!0,onMouseDown:b(a==null?void 0:a.onMouseDown,()=>g(!0)),onMouseUp:b(a==null?void 0:a.onMouseUp,()=>g(!1)),onMouseEnter:b(a==null?void 0:a.onMouseEnter,()=>W(!0)),onMouseLeave:b(a==null?void 0:a.onMouseLeave,()=>W(!1))}),[R,P,I,m,F,n]),Ze=r.useCallback((a={},D=null)=>({...n,...a,ref:D,id:i,type:"radio",name:s,value:t,required:S,disabled:j,readOnly:v,checked:R,"aria-checked":R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:b(a==null?void 0:a.onChange,Z),onBlur:b(a==null?void 0:a.onBlur,oe,()=>G(!1)),onFocus:b(a==null?void 0:a.onFocus,ee,()=>G(!0)),onKeyDown:b(a==null?void 0:a.onKeyDown,ae),onKeyUp:b(a==null?void 0:a.onKeyUp,ie)}),[n,i,s,t,S,j,v,R,Z,oe,ee,ae,ie]),eo=r.useCallback((a={},D=null)=>({...n,...a,ref:D,onMouseDown:b(a==null?void 0:a.onMouseDown,_=>{_.preventDefault(),_.stopPropagation()}),onTouchStart:b(a==null?void 0:a.onTouchStart,_=>{_.preventDefault(),_.stopPropagation()}),"data-checked":A(R)}),[R,n]);return{props:h,isFocusVisible:m,isFocused:I,isHovered:F,isActive:P,isChecked:R,getContainerProps:Xe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=r.forwardRef((i,c)=>{const d=Ro(),{value:s,...t}={...d},l=Ke(i),[u,p]=uo("Radio",{...t,...i}),{className:C,gap:k="0.5rem",isRequired:S=t.isRequired??l.isRequired,isReadOnly:j=t.isReadOnly??l.isReadOnly,isDisabled:v=t.isDisabled??l.isDisabled,isInvalid:N=t.isInvalid??l.isInvalid,iconProps:w,inputProps:n,labelProps:h,children:m,...x}=mo(p),I=s&&x.value?s===x.value:x.isChecked,G=t.onChange&&x.value?no(t.onChange,x.onChange):x.onChange,{isChecked:F,getContainerProps:W,getInputProps:P,getIconProps:g,getLabelProps:q,props:M}=Je({...x,isRequired:S,isReadOnly:j,isDisabled:v,isInvalid:N,isChecked:I,onChange:G}),V=s?F?0:-1:0;return e.jsxs(B.label,{className:Ee("ui-radio",C),...W(M),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:k,...u.container},children:[e.jsx(B.input,{className:"ui-radio__input",...P({...n,tabIndex:V},c)}),e.jsx(B.span,{className:"ui-radio__icon",...g(w),__css:{position:"relative",display:"inline-block",userSelect:"none",...u.icon}}),e.jsx(B.span,{className:"ui-radio__label",...q(h),__css:{...u.label},children:m})]})});o.displayName="Radio";const xo=i=>i&&ne(i)&&ne(i.target),Qe=({id:i,name:c,isNative:d,value:s,defaultValue:t,onChange:l,...u})=>{i??(i=r.useId()),c??(c=`radio-${i}`);const p=Y(l),[C,k]=ho({value:s,defaultValue:t,onChange:p}),S=r.useRef(null),j=r.useCallback(()=>{const n=S.current;if(!n)return;let h="input:not(:disabled):checked",m=n.querySelector(h);m?m.focus():(h="input:not(:disabled)",m=n.querySelector(h),m==null||m.focus())},[]),v=r.useCallback(n=>{const h=xo(n)?n.target.value:n;k(h)},[k]),N=r.useCallback((n={},h=null)=>({role:"radiogroup",...n,ref:to(h,S)}),[]),w=r.useCallback((n={},h=null)=>{const m=n.value===C;return{...n,ref:h,name:c,[d?"checked":"isChecked"]:C!=null?m:void 0,"aria-checked":m,onChange:v}},[c,C,v,d]);return{props:u,id:i,name:c,value:C,setValue:k,onChange:v,onFocus:j,getContainerProps:N,getRadioProps:w}},f=r.forwardRef(({id:i,className:c,size:d,variant:s,colorScheme:t,children:l,items:u=[],direction:p="column",gap:C,...k},S)=>{const{labelId:j,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:n,...h}=Ke({id:i,...k}),{id:m,name:x,value:I,onChange:G,getContainerProps:F,props:W}=Qe(h),P=so(l);let g=[];return!P.length&&u.length&&(g=u.map(({label:q,value:M,...V},R)=>e.jsx(o,{value:M,...V,children:q},R))),e.jsx(vo,{value:{size:d,variant:s,colorScheme:t,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:n,name:x,value:I,onChange:G},children:e.jsx(po,{ref:S,className:Ee("ui-radio-group",c),gap:C??(p==="row"?"1rem":void 0),...F({id:m,"aria-labelledby":j,...W}),direction:p,children:l??g})})});f.displayName="RadioGroup";const Ia={title:"Components / Forms / Radio",component:o},O=()=>e.jsx(o,{children:"孫悟空"}),H=()=>e.jsxs(Ue,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),T=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),z=()=>e.jsx(Ue,{gap:"md",children:oo.map(i=>e.jsx(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const i=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(f,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(f,{defaultValue:"孫悟空",items:i})]})},$=()=>{const[i,c]=r.useState("孫悟空");return e.jsxs(f,{value:i,onChange:d=>c(d),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const i=s=>{const{getInputProps:t,getIconProps:l}=Je(s);return e.jsxs(re,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(re,{as:"span",...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:s.value})]})},{getContainerProps:c,getRadioProps:d}=Qe({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...c(),children:[e.jsx(i,{...d({value:"孫悟空"})}),e.jsx(i,{...d({value:"ベジータ"})}),e.jsx(i,{...d({value:"フリーザ"})})]})},Q=()=>{var l;const{control:i,handleSubmit:c,watch:d,formState:{errors:s}}=Te(),t=u=>console.log("submit:",u);return console.log("watch:",d()),e.jsxs(Le,{as:"form",onSubmit:c(t),children:[e.jsx(y,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(l=s.radio)==null?void 0:l.message,children:e.jsx(ze,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(f,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var u;const i={radio:"孫悟空"},{control:c,handleSubmit:d,watch:s,formState:{errors:t}}=Te({defaultValues:i}),l=p=>console.log("submit:",p);return console.log("watch:",s()),e.jsxs(Le,{as:"form",onSubmit:d(l),children:[e.jsx(y,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e.jsx(ze,{name:"radio",control:c,rules:{required:{value:!0,message:"This is required."}},render:({field:p})=>e.jsxs(f,{...p,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(le=(se=O.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,de,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var me,he,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(pe=(he=T.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var fe,ve,Re;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(Re=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var xe,ge,be;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ce,je,Se;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(Se=(je=K.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var ke,Ie,ye;U.parameters={...U.parameters,docs:{...(ke=U.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ie=U.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ne,we,Fe;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Fe=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Pe,Ve,De;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(De=(Ve=$.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var Ae,Ge,We;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  const CustomRadio: FC<ReturnType<UseRadioGroupReturn["getRadioProps"]>> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
    return <Box as="label">
        <input {...getInputProps()} aria-label={props.value} />

        <Box as="span" {...getIconProps()} cursor="pointer" borderWidth="1px" py="xs" px="sm" rounded="md" _checked={{
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
}`,...(We=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var qe,Me,_e;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
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
}`,...(_e=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Be,Oe,He;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  interface Data {
    radio: string;
  }
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
}`,...(He=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};const ya=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{ya as __namedExportsOrder,O as basic,$ as customControl,J as customHook,Ia as default,E as isDisabled,U as isInvalid,K as isReadonly,Q as reactHookForm,X as reactHookFormWithDefaultValue,z as withColorScheme,T as withDefaultIsChecked,L as withGroup,H as withSize};
