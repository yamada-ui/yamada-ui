import{j as e}from"./extends-CwFRzn3r.js";import{r as t}from"./index-BwDkhjyp.js";import{u as ze,C as Ee}from"./index.esm-DXPXqkjk.js";import{c as ao}from"./components-CyZ2ecjg.js";import{t as io}from"./index-BUuviwyS.js";import{o as no,X as ro,b as O,c as Ue,U as to,k as Z,d as D,h as R,a as so,p as lo,n as re}from"./factory-CYpx3TMG.js";import{a as Ke,u as co,f as uo,F as N}from"./form-control-DTumWR9y.js";import{a as mo}from"./use-component-style-CfUS8Ki1.js";import{o as ho}from"./theme-provider-BZKkW4ID.js";import{u as po}from"./index-tU9OGY6h.js";import{F as fo,W as Le}from"./flex-Dpl6_edk.js";import{H as vo,V as Xe}from"./stack-C8qilfIS.js";import{B as $e}from"./button-Bx26J9Y6.js";import{B as te}from"./box-CJbYVqkD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./index-CFjuI6Rx.js";import"./ui-provider-Bt-rsEu4.js";import"./index-BivS8_08.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-C5VPyroP.js";import"./index-ueIvHVr5.js";import"./Combination-IUp2vs9T.js";import"./loading-DndL1UZp.js";import"./icon-FPUxZQsz.js";import"./forward-ref-BWI-Phbn.js";import"./use-var-B0r_2U-t.js";import"./factory-CY7vhjKt.js";import"./portal-DfxMOg4r.js";import"./index-B8XB3FuZ.js";import"./notice-D4GyB-ww.js";import"./alert-DIva5QhF.js";import"./close-button-CZR8M-ik.js";import"./use-ripple-ug6Wud9C.js";import"./container-OoL9K_ni.js";import"./text-DR0EVEsm.js";import"./checkbox-CXigM3pe.js";import"./index-_SJuZBu6.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-CsU3YgdC.js";import"./index-DEy_TXYI.js";import"./index-DHvgXC6C.js";import"./index-B1LlGrRz.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./slide-fade-RjiVa2b9.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./scale-fade-1_0-ywnN.js";import"./index-C1nnoSu4.js";import"./index-BAaRSIWS.js";import"./select-DJAkWUA7.js";import"./select-list-Dl92l1Le.js";import"./index-CIt0OHe7.js";import"./popover-content-C9K0DE-R.js";import"./index-B8YQiu_Q.js";import"./index-Du0-7Fls.js";import"./index-CuMoPEvO.js";const[Ro,xo]=no({strict:!1,name:"RadioGroupContext"}),Je=({id:i,...d})=>{const c=t.useId();i??(i=c);const{id:m,name:s,value:l,isChecked:u,defaultIsChecked:f,onChange:j,...x}=co({id:i,...d}),[{"aria-readonly":k,required:S,disabled:g,readOnly:v,onFocus:w,onBlur:F,...n},h]=to(x,uo),[r,W]=t.useState(!1),[I,A]=t.useState(!1),[P,G]=t.useState(!1),[y,b]=t.useState(!1),[_,q]=t.useState(!!f),M=u!==void 0,C=M?u:_;t.useEffect(()=>io(W),[]);const ee=Z(a=>{if(v||g){a.preventDefault();return}M||q(a.target.checked),j==null||j(a)},[v,g,M]),oe=Z(w),ae=Z(F),ie=t.useCallback(({key:a})=>{a===" "&&b(!0)},[b]),ne=t.useCallback(({key:a})=>{a===" "&&b(!1)},[b]),Ye=t.useCallback((a={},V=null)=>({...n,...a,ref:V,"data-checked":D(C)}),[C,n]),Ze=t.useCallback((a={},V=null)=>({...n,...a,ref:V,"data-active":D(y),"data-hover":D(P),"data-checked":D(C),"data-focus":D(I),"data-focus-visible":D(I&&r),"aria-hidden":!0,onMouseDown:R(a==null?void 0:a.onMouseDown,()=>b(!0)),onMouseUp:R(a==null?void 0:a.onMouseUp,()=>b(!1)),onMouseEnter:R(a==null?void 0:a.onMouseEnter,()=>G(!0)),onMouseLeave:R(a==null?void 0:a.onMouseLeave,()=>G(!1))}),[C,y,I,r,P,n]),eo=t.useCallback((a={},V=null)=>({...n,...a,ref:V,id:i,type:"radio",name:s,value:l,required:S,disabled:g,readOnly:v,checked:C,"aria-checked":C,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:R(a==null?void 0:a.onChange,ee),onBlur:R(a==null?void 0:a.onBlur,ae,()=>A(!1)),onFocus:R(a==null?void 0:a.onFocus,oe,()=>A(!0)),onKeyDown:R(a==null?void 0:a.onKeyDown,ie),onKeyUp:R(a==null?void 0:a.onKeyUp,ne)}),[n,i,s,l,S,g,v,C,ee,ae,oe,ie,ne]),oo=t.useCallback((a={},V=null)=>({...n,...a,ref:V,onMouseDown:R(a==null?void 0:a.onMouseDown,B=>{B.preventDefault(),B.stopPropagation()}),onTouchStart:R(a==null?void 0:a.onTouchStart,B=>{B.preventDefault(),B.stopPropagation()}),"data-checked":D(C)}),[C,n]);return{props:h,isFocusVisible:r,isFocused:I,isHovered:P,isActive:y,isChecked:C,getContainerProps:Ye,getInputProps:eo,getIconProps:Ze,getLabelProps:oo}},o=t.forwardRef((i,d)=>{const c=xo(),{value:m,...s}={...c},l=Ke(i),[u,f]=mo("Radio",{...s,...i}),{className:j,gap:x="0.5rem",isRequired:k=s.isRequired??l.isRequired,isReadOnly:S=s.isReadOnly??l.isReadOnly,isDisabled:g=s.isDisabled??l.isDisabled,isInvalid:v=s.isInvalid??l.isInvalid,iconProps:w,inputProps:F,labelProps:n,children:h,...r}=ho(f),W=m&&r.value?m===r.value:r.isChecked,I=s.onChange&&r.value?ro(s.onChange,r.onChange):r.onChange,{isChecked:A,getContainerProps:P,getInputProps:G,getIconProps:y,getLabelProps:b,props:_}=Je({...r,isRequired:k,isReadOnly:S,isDisabled:g,isInvalid:v,isChecked:W,onChange:I}),q=m?A?0:-1:0;return e.jsxs(O.label,{className:Ue("ui-radio",j),...P(_),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:x,...u.container},children:[e.jsx(O.input,{className:"ui-radio__input",...G({...F,tabIndex:q},d)}),e.jsx(O.span,{className:"ui-radio__icon",...y(w),__css:{position:"relative",display:"inline-block",userSelect:"none",...u.icon}}),e.jsx(O.span,{className:"ui-radio__label",...b(n),__css:{...u.label},children:h})]})});o.displayName="Radio";o.__ui__="Radio";const go=i=>i&&re(i)&&re(i.target),Qe=({id:i,name:d,isNative:c,value:m,defaultValue:s,onChange:l,...u})=>{const f=t.useId();i??(i=f),d??(d=`radio-${i}`);const j=Z(l),[x,k]=po({value:m,defaultValue:s,onChange:j}),S=t.useRef(null),g=t.useCallback(()=>{const n=S.current;if(!n)return;let h="input:not(:disabled):checked",r=n.querySelector(h);r?r.focus():(h="input:not(:disabled)",r=n.querySelector(h),r==null||r.focus())},[]),v=t.useCallback(n=>{const h=go(n)?n.target.value:n;k(h)},[k]),w=t.useCallback((n={},h=null)=>({role:"radiogroup",...n,ref:so(h,S)}),[]),F=t.useCallback((n={},h=null)=>{const r=n.value===x;return{...n,ref:h,name:d,[c?"checked":"isChecked"]:x!=null?r:void 0,"aria-checked":r,onChange:v}},[d,x,v,c]);return{props:u,id:i,name:d,value:x,setValue:k,onChange:v,onFocus:g,getContainerProps:w,getRadioProps:F}},p=t.forwardRef(({id:i,className:d,size:c,variant:m,colorScheme:s,children:l,items:u=[],direction:f="column",gap:j,...x},k)=>{const{labelId:S,isRequired:g,isReadOnly:v,isDisabled:w,isInvalid:F,...n}=Ke({id:i,...x}),{id:h,name:r,value:W,onChange:I,getContainerProps:A,props:P}=Qe(n),G=lo(l);let y=[];return!G.length&&u.length&&(y=u.map(({label:b,value:_,...q},M)=>e.jsx(o,{value:_,...q,children:b},M))),e.jsx(Ro,{value:{size:c,variant:m,colorScheme:s,isRequired:g,isReadOnly:v,isDisabled:w,isInvalid:F,name:r,value:W,onChange:I},children:e.jsx(fo,{ref:k,className:Ue("ui-radio-group",d),gap:j??(f==="row"?"1rem":void 0),...A({id:h,"aria-labelledby":S,...P}),direction:f,children:l??y})})});p.displayName="RadioGroup";p.__ui__="RadioGroup";const ya={title:"Components / Forms / Radio",component:o},H=()=>e.jsx(o,{children:"孫悟空"}),T=()=>e.jsxs(Le,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),z=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),E=()=>e.jsx(Le,{gap:"md",children:ao.map(i=>e.jsx(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(p,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),X=()=>{const i=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(p,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(p,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(p,{defaultValue:"孫悟空",items:i})]})},$=()=>{const[i,d]=t.useState("孫悟空");return e.jsxs(p,{value:i,onChange:c=>d(c),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const i=m=>{const{getInputProps:s,getIconProps:l}=Je(m);return e.jsxs(te,{as:"label",children:[e.jsx("input",{...s(),"aria-label":m.value}),e.jsx(te,{as:"span",...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:m.value})]})},{getContainerProps:d,getRadioProps:c}=Qe({defaultValue:"孫悟空"});return e.jsxs(vo,{gap:"sm",...d(),children:[e.jsx(i,{...c({value:"孫悟空"})}),e.jsx(i,{...c({value:"ベジータ"})}),e.jsx(i,{...c({value:"フリーザ"})})]})},Q=()=>{var l;const{control:i,handleSubmit:d,watch:c,formState:{errors:m}}=ze(),s=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Xe,{as:"form",onSubmit:d(s),children:[e.jsx(N,{isInvalid:!!m.radio,label:"Who is your favorite character?",errorMessage:(l=m.radio)==null?void 0:l.message,children:e.jsx(Ee,{name:"radio",control:i,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(p,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Y=()=>{var u;const i={radio:"孫悟空"},{control:d,handleSubmit:c,watch:m,formState:{errors:s}}=ze({defaultValues:i}),l=f=>console.log("submit:",f);return console.log("watch:",m()),e.jsxs(Xe,{as:"form",onSubmit:c(l),children:[e.jsx(N,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(u=s.radio)==null?void 0:u.message,children:e.jsx(Ee,{name:"radio",control:d,rules:{required:{value:!0,message:"This is required."}},render:({field:f})=>e.jsxs(p,{...f,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var se,le,de;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,pe,fe;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(fe=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var ve,Re,xe;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(xe=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:xe.source}}};var ge,be,Ce;U.parameters={...U.parameters,docs:{...(ge=U.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(Ce=(be=U.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var je,Se,ke;K.parameters={...K.parameters,docs:{...(je=K.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ke=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var Ie,ye,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(Ne=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Fe,Pe;X.parameters={...X.parameters,docs:{...(we=X.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Fe=X.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ve,De,Ae;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Ae=(De=$.parameters)==null?void 0:De.docs)==null?void 0:Ae.source}}};var Ge,We,_e;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(_e=(We=J.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var qe,Me,Be;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Be=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var Oe,He,Te;Y.parameters={...Y.parameters,docs:{...(Oe=Y.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(Te=(He=Y.parameters)==null?void 0:He.docs)==null?void 0:Te.source}}};const Na=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Na as __namedExportsOrder,H as basic,$ as customControl,J as customHook,ya as default,U as isDisabled,L as isInvalid,K as isReadonly,Q as reactHookForm,Y as reactHookFormWithDefaultValue,E as withColorScheme,z as withDefaultIsChecked,X as withGroup,T as withSize};
