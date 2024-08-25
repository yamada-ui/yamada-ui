import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as n}from"./index-BwDkhjyp.js";import{u as Te,C as ze}from"./index.esm-CMZNHfZV.js";import{c as oo}from"./components-Q4o8L7pN.js";import{t as ao}from"./index-BpRvIbo0.js";import{u as io}from"./index-DhlHQJq_.js";import{a as Ee,u as ro,f as no,F as I}from"./form-control-DFW2rk8c.js";import{F as to,W as Ke}from"./flex-CA-i6_9p.js";import{k as Y,a as so,l as lo,t as co,c as Ue,F as re,V as uo,b as B,a1 as mo,d as D,h as C}from"./factory-EKX9DfWO.js";import{a as po}from"./use-component-style-3J6UAnbr.js";import{o as ho}from"./theme-provider-CuwCkym_.js";import{H as fo,V as Le}from"./stack-D91i49_J.js";import{B as $e}from"./button-BdpTc5Vf.js";import{B as ne}from"./box-n5Fo5JA2.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BicLiV9m.js";import"./index-DwVKC9Jw.js";import"./index-8jxD160K.js";import"./ui-provider-DCRsUyjs.js";import"./index-DEjiXZkw.js";import"./motion-Bd6WkMzw.js";import"./loading-provider-HL8gAXwY.js";import"./index-BSWiOGL_.js";import"./Combination-CONbhR2A.js";import"./loading-CRwdCDw3.js";import"./icon-Bu5zyKtF.js";import"./index-UQAO-kLr.js";import"./forward-ref-BmTAT9U5.js";import"./motion-B_4DOUn5.js";import"./index-Ms_xn5rh.js";import"./container-portal-CECpxDWy.js";import"./index-DxjWwZXO.js";import"./notice-ClGFv-vs.js";import"./alert-BtG-t92n.js";import"./close-button-HuZkQ3Ew.js";import"./use-ripple-B2dghNjE.js";import"./container-VdeNhP8k.js";import"./text-COyfleYz.js";import"./checkbox-Bbou0Mbc.js";import"./index-CqJAT4P8.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-B_ceceuy.js";import"./index-ByUNUozh.js";import"./index-DRG4LbkO.js";import"./index-XLuwk0SB.js";import"./index-4Gt8jg-E.js";import"./index-Dj6MDi8M.js";import"./slide-fade-BMyyzG7L.js";import"./utils-Bqd04Qt3.js";import"./scale-fade-C2yiJ92K.js";import"./index-DzGRWxgB.js";import"./index-Bqz3rL1X.js";import"./select-Dg6wY2Nd.js";import"./option-Con4M0tj.js";import"./index-CG4JKEVD.js";import"./popover-content-BOclz9bm.js";import"./index-BLx-LETd.js";import"./index-Du0-7Fls.js";import"./index-CMAEynL2.js";import"./extends-CF3RwP-h.js";const vo=a=>a&&re(a)&&re(a.target),Je=({id:a,name:d,isNative:c,value:s,defaultValue:t,onChange:l,...u})=>{a??(a=n.useId()),d??(d=`radio-${a}`);const h=Y(l),[f,R]=io({value:s,defaultValue:t,onChange:h}),j=n.useRef(null),y=n.useCallback(()=>{const r=j.current;if(!r)return;let p="input:not(:disabled):checked",m=r.querySelector(p);m?m.focus():(p="input:not(:disabled)",m=r.querySelector(p),m==null||m.focus())},[]),S=n.useCallback(r=>{const p=vo(r)?r.target.value:r;R(p)},[R]),N=n.useCallback((r={},p=null)=>({role:"radiogroup",...r,ref:so(p,j)}),[]),A=n.useCallback((r={},p=null)=>{const m=r.value===f;return{...r,ref:p,name:d,[c?"checked":"isChecked"]:f!=null?m:void 0,"aria-checked":m,onChange:S}},[d,f,S,c]);return{props:u,id:a,name:d,value:f,setValue:R,onChange:S,onFocus:y,getContainerProps:N,getRadioProps:A}},[Ro,xo]=lo({strict:!1,name:"RadioGroupContext"}),v=n.forwardRef(({id:a,className:d,size:c,variant:s,colorScheme:t,children:l,items:u=[],direction:h="column",gap:f,...R},j)=>{const{labelId:y,isRequired:S,isReadOnly:N,isDisabled:A,isInvalid:r,...p}=Ee({id:a,...R}),{id:m,name:g,value:k,onChange:G,getContainerProps:w,props:W}=Je(p),F=co(l);let b=[];return!F.length&&u.length&&(b=u.map(({label:q,value:M,...P},x)=>e.jsx(o,{value:M,...P,children:q},x))),e.jsx(Ro,{value:{size:c,variant:s,colorScheme:t,isRequired:S,isReadOnly:N,isDisabled:A,isInvalid:r,name:g,value:k,onChange:G},children:e.jsx(to,{ref:j,className:Ue("ui-radio-group",d),gap:f??(h==="row"?"1rem":void 0),...w({id:m,"aria-labelledby":y,...W}),direction:h,children:l??b})})});v.displayName="RadioGroup";const Qe=({id:a,...d})=>{a??(a=n.useId());const{id:c,name:s,value:t,isChecked:l,defaultIsChecked:u,required:h,disabled:f,readOnly:R,onChange:j,onFocus:y,onBlur:S,...N}=ro({id:a,...d}),[{"aria-readonly":A,...r},p]=mo(N,no),[m,g]=n.useState(!1),[k,G]=n.useState(!1),[w,W]=n.useState(!1),[F,b]=n.useState(!1),[q,M]=n.useState(!!u),P=l!==void 0,x=P?l:q;n.useEffect(()=>ao(g),[]);const Z=Y(i=>{if(R||f){i.preventDefault();return}P||M(i.target.checked),j==null||j(i)},[R,f,P]),ee=Y(y),oe=Y(S),ae=n.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),ie=n.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Xe=n.useCallback((i={},V=null)=>({...r,...i,ref:V,"data-checked":D(x)}),[x,r]),Ye=n.useCallback((i={},V=null)=>({...r,...i,ref:V,"data-active":D(F),"data-hover":D(w),"data-checked":D(x),"data-focus":D(k),"data-focus-visible":D(k&&m),"aria-hidden":!0,onMouseDown:C(i.onMouseDown,()=>b(!0)),onMouseUp:C(i.onMouseUp,()=>b(!1)),onMouseEnter:C(i.onMouseEnter,()=>W(!0)),onMouseLeave:C(i.onMouseLeave,()=>W(!1))}),[x,F,k,m,w,r]),Ze=n.useCallback((i={},V=null)=>({...r,...i,ref:V,id:a,type:"radio",name:s,value:t,required:h,disabled:f,readOnly:R,checked:x,"aria-checked":x,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:C(i.onChange,Z),onBlur:C(i.onBlur,oe,()=>G(!1)),onFocus:C(i.onFocus,ee,()=>G(!0)),onKeyDown:C(i.onKeyDown,ae),onKeyUp:C(i.onKeyUp,ie)}),[r,a,s,t,h,f,R,x,Z,oe,ee,ae,ie]),eo=n.useCallback((i={},V=null)=>({...r,...i,ref:V,onMouseDown:C(i.onMouseDown,_=>{_.preventDefault(),_.stopPropagation()}),onTouchStart:C(i.onTouchStart,_=>{_.preventDefault(),_.stopPropagation()}),"data-checked":D(x)}),[x,r]);return{props:p,isFocusVisible:m,isFocused:k,isHovered:w,isActive:F,isChecked:x,getContainerProps:Xe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=n.forwardRef((a,d)=>{const c=xo(),{value:s,...t}={...c},l=Ee(a),[u,h]=po("Radio",{...t,...a}),{className:f,gap:R="0.5rem",isRequired:j=t.isRequired??l.isRequired,isReadOnly:y=t.isReadOnly??l.isReadOnly,isDisabled:S=t.isDisabled??l.isDisabled,isInvalid:N=t.isInvalid??l.isInvalid,iconProps:A,inputProps:r,labelProps:p,children:m,...g}=ho(h),k=s&&g.value?s===g.value:g.isChecked,G=t.onChange&&g.value?uo(t.onChange,g.onChange):g.onChange,{isChecked:w,getContainerProps:W,getInputProps:F,getIconProps:b,getLabelProps:q,props:M}=Qe({...g,isRequired:j,isReadOnly:y,isDisabled:S,isInvalid:N,isChecked:k,onChange:G}),P=s?w?0:-1:0;return e.jsxs(B.label,{className:Ue("ui-radio",f),...W(M),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:R,...u.container},children:[e.jsx(B.input,{className:"ui-radio__input",...F({...r,tabIndex:P},d)}),e.jsx(B.span,{className:"ui-radio__icon",...b(A),__css:{position:"relative",display:"inline-block",userSelect:"none",...u.icon}}),e.jsx(B.span,{className:"ui-radio__label",...q(p),__css:{...u.label},children:m})]})});o.displayName="Radio";const ya={title:"Components / Forms / Radio",component:o},O=()=>e.jsx(o,{children:"孫悟空"}),H=()=>e.jsxs(Ke,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),T=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),z=()=>e.jsx(Ke,{gap:"md",children:oo.map(a=>e.jsx(o,{colorScheme:a,defaultIsChecked:!0,children:a},a))}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(I,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(I,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(I,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(v,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(v,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(v,{defaultValue:"孫悟空",items:a})]})},$=()=>{const[a,d]=n.useState("孫悟空");return e.jsxs(v,{value:a,onChange:c=>d(c),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const a=s=>{const{getInputProps:t,getIconProps:l}=Qe(s);return e.jsxs(ne,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(ne,{...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:s.value})]})},{getContainerProps:d,getRadioProps:c}=Je({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...d(),children:[e.jsx(a,{...c({value:"孫悟空"})}),e.jsx(a,{...c({value:"ベジータ"})}),e.jsx(a,{...c({value:"フリーザ"})})]})},Q=()=>{var l;const{control:a,handleSubmit:d,watch:c,formState:{errors:s}}=Te(),t=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Le,{as:"form",onSubmit:d(t),children:[e.jsx(I,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(l=s.radio)==null?void 0:l.message,children:e.jsx(ze,{name:"radio",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:u})=>e.jsxs(v,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var u;const a={radio:"孫悟空"},{control:d,handleSubmit:c,watch:s,formState:{errors:t}}=Te({defaultValues:a}),l=h=>console.log("submit:",h);return console.log("watch:",s()),e.jsxs(Le,{as:"form",onSubmit:c(l),children:[e.jsx(I,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e.jsx(ze,{name:"radio",control:d,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>e.jsxs(v,{...h,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
