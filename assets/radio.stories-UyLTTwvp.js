import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{u as Te,C as ze}from"./index.esm-DXPXqkjk.js";import{c as oo}from"./components-DE0UBxZd.js";import{t as ao}from"./index-CIAQ5aMs.js";import{u as io}from"./index-JO6qx1eo.js";import{a as Ee,u as ro,f as no,F as y}from"./form-control-Cvo0pEjR.js";import{F as to,W as Ke}from"./flex-DUnpOgsS.js";import{k as Y,a as so,l as lo,t as co,c as Ue,F as re,V as uo,b as B,S as mo,d as A,h as b}from"./factory-C2Uq3ahE.js";import{a as po}from"./use-component-style-Bx1vUO5y.js";import{o as ho}from"./theme-provider-jP6jS-pg.js";import{H as fo,V as Le}from"./stack-BcAy0aux.js";import{B as $e}from"./button-Bi9n-vY3.js";import{B as ne}from"./box-Bfrem8P5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bx4dOF2q.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-Cu1AqUuF.js";import"./index-CnSrmUBS.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-B7yikQzP.js";import"./index-BTZYfykl.js";import"./Combination-CONbhR2A.js";import"./loading-BNVTi1QG.js";import"./icon-sIHrqgYT.js";import"./index-UM7KnhWq.js";import"./forward-ref-DKTvpK5d.js";import"./factory-uWFUvYzf.js";import"./container-portal-C3bX__47.js";import"./index-DxjWwZXO.js";import"./notice-B_nwBXae.js";import"./alert-Bdbz62Ge.js";import"./close-button-BxbDD0Pp.js";import"./use-ripple-Cy0wrTvg.js";import"./container-D9O-7ma4.js";import"./text-BJvDpKxV.js";import"./checkbox-C_K9haI-.js";import"./index-BAUyeFMr.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-C6BB_r2F.js";import"./index-Cphrmm8n.js";import"./index-P1R8teSk.js";import"./index-C18qiKmS.js";import"./index-Bhd-KZw0.js";import"./index-DkkKXtPY.js";import"./slide-fade-CVIp2BLX.js";import"./motion-forward-ref-DCsEbWHi.js";import"./utils-BQr-qST1.js";import"./scale-fade-DOMI91dn.js";import"./index-aK7o6Gpo.js";import"./index-Bqz3rL1X.js";import"./select-DrMIp6gA.js";import"./option-CTJ4JvQy.js";import"./index-DIig5QpT.js";import"./popover-content-Br-m-ZU6.js";import"./index-BEMgSfZS.js";import"./index-Du0-7Fls.js";import"./index-YQxVgXoz.js";import"./extends-CF3RwP-h.js";const vo=a=>a&&re(a)&&re(a.target),Je=({id:a,name:d,isNative:c,value:s,defaultValue:t,onChange:l,...u})=>{a??(a=n.useId()),d??(d=`radio-${a}`);const h=Y(l),[C,k]=io({value:s,defaultValue:t,onChange:h}),S=n.useRef(null),j=n.useCallback(()=>{const r=S.current;if(!r)return;let p="input:not(:disabled):checked",m=r.querySelector(p);m?m.focus():(p="input:not(:disabled)",m=r.querySelector(p),m==null||m.focus())},[]),v=n.useCallback(r=>{const p=vo(r)?r.target.value:r;k(p)},[k]),N=n.useCallback((r={},p=null)=>({role:"radiogroup",...r,ref:so(p,S)}),[]),w=n.useCallback((r={},p=null)=>{const m=r.value===C;return{...r,ref:p,name:d,[c?"checked":"isChecked"]:C!=null?m:void 0,"aria-checked":m,onChange:v}},[d,C,v,c]);return{props:u,id:a,name:d,value:C,setValue:k,onChange:v,onFocus:j,getContainerProps:N,getRadioProps:w}},[Ro,xo]=lo({strict:!1,name:"RadioGroupContext"}),f=n.forwardRef(({id:a,className:d,size:c,variant:s,colorScheme:t,children:l,items:u=[],direction:h="column",gap:C,...k},S)=>{const{labelId:j,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:r,...p}=Ee({id:a,...k}),{id:m,name:x,value:I,onChange:G,getContainerProps:F,props:W}=Je(p),P=co(l);let g=[];return!P.length&&u.length&&(g=u.map(({label:q,value:M,...V},R)=>e.jsx(o,{value:M,...V,children:q},R))),e.jsx(Ro,{value:{size:c,variant:s,colorScheme:t,isRequired:v,isReadOnly:N,isDisabled:w,isInvalid:r,name:x,value:I,onChange:G},children:e.jsx(to,{ref:S,className:Ue("ui-radio-group",d),gap:C??(h==="row"?"1rem":void 0),...F({id:m,"aria-labelledby":j,...W}),direction:h,children:l??g})})});f.displayName="RadioGroup";const Qe=({id:a,...d})=>{a??(a=n.useId());const{id:c,name:s,value:t,isChecked:l,defaultIsChecked:u,onChange:h,...C}=ro({id:a,...d}),[{"aria-readonly":k,required:S,disabled:j,readOnly:v,onFocus:N,onBlur:w,...r},p]=mo(C,no),[m,x]=n.useState(!1),[I,G]=n.useState(!1),[F,W]=n.useState(!1),[P,g]=n.useState(!1),[q,M]=n.useState(!!u),V=l!==void 0,R=V?l:q;n.useEffect(()=>ao(x),[]);const Z=Y(i=>{if(v||j){i.preventDefault();return}V||M(i.target.checked),h==null||h(i)},[v,j,V]),ee=Y(N),oe=Y(w),ae=n.useCallback(({key:i})=>{i===" "&&g(!0)},[g]),ie=n.useCallback(({key:i})=>{i===" "&&g(!1)},[g]),Xe=n.useCallback((i={},D=null)=>({...r,...i,ref:D,"data-checked":A(R)}),[R,r]),Ye=n.useCallback((i={},D=null)=>({...r,...i,ref:D,"data-active":A(P),"data-hover":A(F),"data-checked":A(R),"data-focus":A(I),"data-focus-visible":A(I&&m),"aria-hidden":!0,onMouseDown:b(i.onMouseDown,()=>g(!0)),onMouseUp:b(i.onMouseUp,()=>g(!1)),onMouseEnter:b(i.onMouseEnter,()=>W(!0)),onMouseLeave:b(i.onMouseLeave,()=>W(!1))}),[R,P,I,m,F,r]),Ze=n.useCallback((i={},D=null)=>({...r,...i,ref:D,id:a,type:"radio",name:s,value:t,required:S,disabled:j,readOnly:v,checked:R,"aria-checked":R,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:b(i.onChange,Z),onBlur:b(i.onBlur,oe,()=>G(!1)),onFocus:b(i.onFocus,ee,()=>G(!0)),onKeyDown:b(i.onKeyDown,ae),onKeyUp:b(i.onKeyUp,ie)}),[r,a,s,t,S,j,v,R,Z,oe,ee,ae,ie]),eo=n.useCallback((i={},D=null)=>({...r,...i,ref:D,onMouseDown:b(i.onMouseDown,_=>{_.preventDefault(),_.stopPropagation()}),onTouchStart:b(i.onTouchStart,_=>{_.preventDefault(),_.stopPropagation()}),"data-checked":A(R)}),[R,r]);return{props:p,isFocusVisible:m,isFocused:I,isHovered:F,isActive:P,isChecked:R,getContainerProps:Xe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=n.forwardRef((a,d)=>{const c=xo(),{value:s,...t}={...c},l=Ee(a),[u,h]=po("Radio",{...t,...a}),{className:C,gap:k="0.5rem",isRequired:S=t.isRequired??l.isRequired,isReadOnly:j=t.isReadOnly??l.isReadOnly,isDisabled:v=t.isDisabled??l.isDisabled,isInvalid:N=t.isInvalid??l.isInvalid,iconProps:w,inputProps:r,labelProps:p,children:m,...x}=ho(h),I=s&&x.value?s===x.value:x.isChecked,G=t.onChange&&x.value?uo(t.onChange,x.onChange):x.onChange,{isChecked:F,getContainerProps:W,getInputProps:P,getIconProps:g,getLabelProps:q,props:M}=Qe({...x,isRequired:S,isReadOnly:j,isDisabled:v,isInvalid:N,isChecked:I,onChange:G}),V=s?F?0:-1:0;return e.jsxs(B.label,{className:Ue("ui-radio",C),...W(M),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:k,...u.container},children:[e.jsx(B.input,{className:"ui-radio__input",...P({...r,tabIndex:V},d)}),e.jsx(B.span,{className:"ui-radio__icon",...g(w),__css:{position:"relative",display:"inline-block",userSelect:"none",...u.icon}}),e.jsx(B.span,{className:"ui-radio__label",...q(p),__css:{...u.label},children:m})]})});o.displayName="Radio";const ya={title:"Components / Forms / Radio",component:o},O=()=>e.jsx(o,{children:"孫悟空"}),H=()=>e.jsxs(Ke,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),T=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),z=()=>e.jsx(Ke,{gap:"md",children:oo.map(a=>e.jsx(o,{colorScheme:a,defaultIsChecked:!0,children:a},a))}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(y,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(y,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(f,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(f,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(f,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(f,{defaultValue:"孫悟空",items:a})]})},$=()=>{const[a,d]=n.useState("孫悟空");return e.jsxs(f,{value:a,onChange:c=>d(c),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const a=s=>{const{getInputProps:t,getIconProps:l}=Qe(s);return e.jsxs(ne,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(ne,{...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:s.value})]})},{getContainerProps:d,getRadioProps:c}=Je({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...d(),children:[e.jsx(a,{...c({value:"孫悟空"})}),e.jsx(a,{...c({value:"ベジータ"})}),e.jsx(a,{...c({value:"フリーザ"})})]})},Q=()=>{var l;const{control:a,handleSubmit:d,watch:c,formState:{errors:s}}=Te(),t=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Le,{as:"form",onSubmit:d(t),children:[e.jsx(y,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(l=s.radio)==null?void 0:l.message,children:e.jsx(ze,{name:"radio",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(f,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var u;const a={radio:"孫悟空"},{control:d,handleSubmit:c,watch:s,formState:{errors:t}}=Te({defaultValues:a}),l=h=>console.log("submit:",h);return console.log("watch:",s()),e.jsxs(Le,{as:"form",onSubmit:c(l),children:[e.jsx(y,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e.jsx(ze,{name:"radio",control:d,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>e.jsxs(f,{...h,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(le=(se=O.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,ce,ue;H.parameters={...H.parameters,docs:{...(de=H.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(ue=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var me,pe,he;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(he=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,ve,Re;z.parameters={...z.parameters,docs:{...(fe=z.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(We=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:We.source}}};var qe,Me,_e;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(_e=(Me=Q.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Be,Oe,He;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(He=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:He.source}}};const Na=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Na as __namedExportsOrder,O as basic,$ as customControl,J as customHook,ya as default,E as isDisabled,U as isInvalid,K as isReadonly,Q as reactHookForm,X as reactHookFormWithDefaultValue,z as withColorScheme,T as withDefaultIsChecked,L as withGroup,H as withSize};
