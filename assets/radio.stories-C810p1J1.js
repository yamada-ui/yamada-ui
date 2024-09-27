import{j as e}from"./extends-CwFRzn3r.js";import{r}from"./index-BwDkhjyp.js";import{u as Te,C as ze}from"./index.esm-DXPXqkjk.js";import{c as oo}from"./components-BP8xC0Zk.js";import{t as ao}from"./index-zVjQQjxl.js";import{o as io,X as no,b as B,c as Ee,U as ro,k as Y,d as A,h as b,a as to,p as so,n as ne}from"./factory-BgMvz7NM.js";import{a as Ue,u as lo,f as co,F as y}from"./form-control-DAXawruh.js";import{a as uo}from"./use-component-style-D3MffxdG.js";import{o as mo}from"./theme-provider-Bpmh2ODM.js";import{u as ho}from"./index-Dz6agydm.js";import{F as po,W as Ke}from"./flex-Cl1zHQNi.js";import{H as fo,V as Le}from"./stack-c0WUIOCC.js";import{B as Xe}from"./button-knJHP-Ba.js";import{B as re}from"./box-Bx0dCD5X.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-B6ycpjcM.js";import"./ui-provider-DY2oYN-S.js";import"./index-AqDG4z1T.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-TBFbx4D4.js";import"./index-CjGDoYdX.js";import"./Combination-IUp2vs9T.js";import"./loading-B_aB2PJP.js";import"./icon-CvhI1IwG.js";import"./forward-ref-BWI-Phbn.js";import"./use-var-Dgk44aKJ.js";import"./factory-yZQlYpPU.js";import"./portal-C14XFhbI.js";import"./index-B8XB3FuZ.js";import"./notice-DVwxRQgn.js";import"./alert-B0TkXEfE.js";import"./close-button-CrGbJmFz.js";import"./use-ripple-BWg06y-U.js";import"./container-CS7gHKs5.js";import"./text-CxEGNgXo.js";import"./checkbox-CHh1Q5wt.js";import"./index-B4mTSuWb.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-rjHfP52r.js";import"./index-i7wmI0W_.js";import"./index-BzBNm7Tp.js";import"./index-eVjHUBC4.js";import"./index-B9IsUjMJ.js";import"./index-CzplldKp.js";import"./slide-fade-oCi7TKjr.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bm7s5BqF.js";import"./scale-fade-BQTws92u.js";import"./index-DkfW55MP.js";import"./index-BAaRSIWS.js";import"./select-CkRuMJ8t.js";import"./select-list-CoK2isOp.js";import"./index-Br7ZWcgB.js";import"./popover-content-CkkufdAv.js";import"./index-DX38EdL3.js";import"./index-Du0-7Fls.js";import"./index-UbUyUaFk.js";const[vo,Ro]=io({strict:!1,name:"RadioGroupContext"}),$e=({id:i,...d})=>{i??(i=r.useId());const{id:c,name:s,value:t,isChecked:l,defaultIsChecked:u,onChange:p,...C}=lo({id:i,...d}),[{"aria-readonly":k,required:S,disabled:j,readOnly:v,onFocus:N,onBlur:w,...n},h]=ro(C,co),[m,x]=r.useState(!1),[I,G]=r.useState(!1),[F,W]=r.useState(!1),[P,g]=r.useState(!1),[_,q]=r.useState(!!u),V=l!==void 0,R=V?l:_;r.useEffect(()=>ao(x),[]);const Z=Y(a=>{if(v||j){a.preventDefault();return}V||q(a.target.checked),p==null||p(a)},[v,j,V]),ee=Y(N),oe=Y(w),ae=r.useCallback(({key:a})=>{a===" "&&g(!0)},[g]),ie=r.useCallback(({key:a})=>{a===" "&&g(!1)},[g]),Qe=r.useCallback((a={},D=null)=>({...n,...a,ref:D,"data-checked":A(R)}),[R,n]),Ye=r.useCallback((a={},D=null)=>({...n,...a,ref:D,"data-active":A(P),"data-hover":A(F),"data-checked":A(R),"data-focus":A(I),"data-focus-visible":A(I&&m),"aria-hidden":!0,onMouseDown:b(a==null?void 0:a.onMouseDown,()=>g(!0)),onMouseUp:b(a==null?void 0:a.onMouseUp,()=>g(!1)),onMouseEnter:b(a==null?void 0:a.onMouseEnter,()=>W(!0)),onMouseLeave:b(a==null?void 0:a.onMouseLeave,()=>W(!1))}),[R,P,I,m,F,n]),Ze=r.useCallback((a={},D=null)=>({...n,...a,ref:D,id:i,type:"radio",name:s,value:t,required:S,disabled:j,readOnly:v,checked:R,"aria-checked":R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:b(a==null?void 0:a.onChange,Z),onBlur:b(a==null?void 0:a.onBlur,oe,()=>G(!1)),onFocus:b(a==null?void 0:a.onFocus,ee,()=>G(!0)),onKeyDown:b(a==null?void 0:a.onKeyDown,ae),onKeyUp:b(a==null?void 0:a.onKeyUp,ie)}),[n,i,s,t,S,j,v,R,Z,oe,ee,ae,ie]),eo=r.useCallback((a={},D=null)=>({...n,...a,ref:D,onMouseDown:b(a==null?void 0:a.onMouseDown,M=>{M.preventDefault(),M.stopPropagation()}),onTouchStart:b(a==null?void 0:a.onTouchStart,M=>{M.preventDefault(),M.stopPropagation()}),"data-checked":A(R)}),[R,n]);return{props:h,isFocusVisible:m,isFocused:I,isHovered:F,isActive:P,isChecked:R,getContainerProps:Qe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=r.forwardRef((i,d)=>{const c=Ro(),{value:s,...t}={...c},l=Ue(i),[u,p]=uo("Radio",{...t,...i}),{className:C,gap:k="0.5rem",isRequired:S=t.isRequired??l.isRequired,isReadOnly:j=t.isReadOnly??l.isReadOnly,isDisabled:v=t.isDisabled??l.isDisabled,isInvalid:N=t.isInvalid??l.isInvalid,iconProps:w,inputProps:n,labelProps:h,children:m,...x}=mo(p),I=s&&x.value?s===x.value:x.isChecked,G=t.onChange&&x.value?no(t.onChange,x.onChange):x.onChange,{isChecked:F,getContainerProps:W,getInputProps:P,getIconProps:g,getLabelProps:_,props:q}=$e({...x,isRequired:S,isReadOnly:j,isDisabled:v,isInvalid:N,isChecked:I,onChange:G}),V=s?F?0:-1:0;return e.jsxs(B.label,{className:Ee("ui-radio",C),...W(q),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:k,...u.container},children:[e.jsx(B.input,{className:"ui-radio__input",...P({...n,tabIndex:V},d)}),e.jsx(B.span,{className:"ui-radio__icon",...g(w),__css:{position:"relative",display:"inline-block",userSelect:"none",...u.icon}}),e.jsx(B.span,{className:"ui-radio__label",..._(h),__css:{...u.label},children:m})]})});o.displayName="Radio";o.__ui__="Radio";const xo=i=>i&&ne(i)&&ne(i.target),Je=({id:i,name:d,isNative:c,value:s,defaultValue:t,onChange:l,...u})=>{i??(i=r.useId()),d??(d=`radio-${i}`);const p=Y(l),[C,k]=ho({value:s,defaultValue:t,onChange:p}),S=r.useRef(null),j=r.useCallback(()=>{const n=S.current;if(!n)return;let h="input:not(:disabled):checked",m=n.querySelector(h);m?m.focus():(h="input:not(:disabled)",m=n.querySelector(h),m==null||m.focus())},[]),v=r.useCallback(n=>{const h=xo(n)?n.target.value:n;k(h)},[k]),N=r.useCallback((n={},h=null)=>({role:"radiogroup",...n,ref:to(h,S)}),[]),w=r.useCallback((n={},h=null)=>{const m=n.value===C;return{...n,ref:h,name:d,[c?"checked":"isChecked"]:C!=null?m:void 0,"aria-checked":m,onChange:v}},[d,C,v,c]);return{props:u,id:i,name:d,value:C,setValue:k,onChange:v,onFocus:j,getContainerProps:N,getRadioProps:w}},f=r.forwardRef(({id:i,className:d,size:c,variant:s,colorScheme:t,children:l,items:u=[],direction:p="column",gap:C,...k},S)=>{const{labelId:j,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:n,...h}=Ue({id:i,...k}),{id:m,name:x,value:I,onChange:G,getContainerProps:F,props:W}=Je(h),P=so(l);let g=[];return!P.length&&u.length&&(g=u.map(({label:_,value:q,...V},R)=>e.jsx(o,{value:q,...V,children:_},R))),e.jsx(vo,{value:{size:c,variant:s,colorScheme:t,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:n,name:x,value:I,onChange:G},children:e.jsx(po,{ref:S,className:Ee("ui-radio-group",d),gap:C??(p==="row"?"1rem":void 0),...F({id:m,"aria-labelledby":j,...W}),direction:p,children:l??g})})});f.displayName="RadioGroup";f.__ui__="RadioGroup";const Ia={title:"Components / Forms / Radio",component:o},O=()=>e.jsx(o,{children:"孫悟空"}),H=()=>e.jsxs(Ke,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),T=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),z=()=>e.jsx(Ke,{gap:"md",children:oo.map(i=>e.jsx(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const i=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(f,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(f,{defaultValue:"孫悟空",items:i})]})},X=()=>{const[i,d]=r.useState("孫悟空");return e.jsxs(f,{value:i,onChange:c=>d(c),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},$=()=>{const i=s=>{const{getInputProps:t,getIconProps:l}=$e(s);return e.jsxs(re,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(re,{as:"span",...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:s.value})]})},{getContainerProps:d,getRadioProps:c}=Je({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...d(),children:[e.jsx(i,{...c({value:"孫悟空"})}),e.jsx(i,{...c({value:"ベジータ"})}),e.jsx(i,{...c({value:"フリーザ"})})]})},J=()=>{var l;const{control:i,handleSubmit:d,watch:c,formState:{errors:s}}=Te(),t=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Le,{as:"form",onSubmit:d(t),children:[e.jsx(y,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(l=s.radio)==null?void 0:l.message,children:e.jsx(ze,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(f,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(Xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Q=()=>{var u;const i={radio:"孫悟空"},{control:d,handleSubmit:c,watch:s,formState:{errors:t}}=Te({defaultValues:i}),l=p=>console.log("submit:",p);return console.log("watch:",s()),e.jsxs(Le,{as:"form",onSubmit:c(l),children:[e.jsx(y,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e.jsx(ze,{name:"radio",control:d,rules:{required:{value:!0,message:"This is required."}},render:({field:p})=>e.jsxs(f,{...p,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx(Xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(le=(se=O.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,ue;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(ue=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,he,pe;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(be=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var Ce,je,Se;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(Se=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var ke,Ie,ye;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ie=K.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Ne,we,Fe;L.parameters={...L.parameters,docs:{...(Ne=L.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Fe=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var Pe,Ve,De;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(De=(Ve=X.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var Ae,Ge,We;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(We=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var _e,qe,Me;J.parameters={...J.parameters,docs:{...(_e=J.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Me=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:Me.source}}};var Be,Oe,He;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(He=(Oe=Q.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};const ya=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{ya as __namedExportsOrder,O as basic,X as customControl,$ as customHook,Ia as default,E as isDisabled,K as isInvalid,U as isReadonly,J as reactHookForm,Q as reactHookFormWithDefaultValue,z as withColorScheme,T as withDefaultIsChecked,L as withGroup,H as withSize};
