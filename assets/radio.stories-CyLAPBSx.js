import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as n}from"./index-BwDkhjyp.js";import{u as He,C as Te}from"./index.esm-CnEPCCvu.js";import{c as oo}from"./components-B0rYuGAT.js";import{t as ao}from"./index-BG42zi7T.js";import{u as io}from"./index-ZiYChM0F.js";import{a as ze,u as ro,f as no,F as A}from"./form-control-B2NU480b.js";import{F as to,W as Ke}from"./flex-nF40XCVK.js";import{k as Y,a as so,l as lo,t as uo,c as Ue,F as re,V as co,b as M,a0 as mo,d as w,h as b}from"./factory-CwKxIcmp.js";import{a as po}from"./use-component-style-C6mmquFG.js";import{o as ho}from"./theme-provider-DjdgC7rR.js";import{H as fo,V as Le}from"./stack-D9axiekm.js";import{B as $e}from"./button-D55cFWsi.js";import{B as ne}from"./box-ZylXTsGy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D8iG1bvN.js";import"./index-Cat9P5iw.js";import"./_basePickBy-CjCyl1Ym.js";import"./iframe-DWw6YIgd.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./component-o6OrGXrC.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-Cb07l5sy.js";import"./index-CW-Q_4E8.js";import"./environment-provider-CIfiaLbq.js";import"./motion-DkeuV4DN.js";import"./loading-provider-Dh-8jKf5.js";import"./index-DTaoSdtw.js";import"./Combination--D52Dw1Q.js";import"./loading-DIEre6X5.js";import"./icon-DcxInhKK.js";import"./index-CrSB-fKY.js";import"./forward-ref-BmTAT9U5.js";import"./motion-gzykECjf.js";import"./index-yOmqRA4W.js";import"./container-portal-Dn4jDkCE.js";import"./notice-B9QuadoL.js";import"./alert-CA_Txjj1.js";import"./close-button-DpmXFeq-.js";import"./use-ripple-D3aSUQ2z.js";import"./container-BLvMDHjx.js";import"./text-OHsVmoc6.js";import"./checkbox-Bc_evyoO.js";import"./index-CeUuJBIh.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CSOOM64O.js";import"./index-DXSoq_1q.js";import"./index-Wl0mW6Vh.js";import"./index-C9QWTuWT.js";import"./index-DhTMHHr4.js";import"./index-DH_fprnQ.js";import"./slide-fade-CCk7_Na4.js";import"./utils-JRr3CUzW.js";import"./scale-fade-BAgKyKMD.js";import"./index-CDS8m4kA.js";import"./index-BqSttWob.js";import"./select-IF1h8dLP.js";import"./option-Co32bH8S.js";import"./index-DE7SSzst.js";import"./popover-content-79vwb9iS.js";import"./index-DigcCZ6p.js";import"./index-Du0-7Fls.js";import"./index-BVW_F-YY.js";const vo=a=>a&&re(a)&&re(a.target),Je=({id:a,name:u,isNative:d,value:s,defaultValue:t,onChange:l,...c})=>{a??(a=n.useId()),u??(u=`radio-${a}`);const h=Y(l),[f,R]=io({value:s,defaultValue:t,onChange:h}),F=n.useRef(null),S=n.useCallback(()=>{const r=F.current;if(!r)return;let p="input:not(:disabled):checked",m=r.querySelector(p);m?m.focus():(p="input:not(:disabled)",m=r.querySelector(p),m==null||m.focus())},[]),B=n.useCallback(r=>{const p=vo(r)?r.target.value:r;R(p)},[R]),k=n.useCallback((r={},p=null)=>({role:"radiogroup",...r,ref:so(p,F)}),[]),P=n.useCallback((r={},p=null)=>{const m=r.value===f;return{...r,ref:p,name:u,[d?"checked":"isChecked"]:f!=null?m:void 0,"aria-checked":m,onChange:B}},[u,f,B,d]);return{props:c,id:a,name:u,value:f,setValue:R,onChange:B,onFocus:S,getContainerProps:k,getRadioProps:P}},[Ro,Co]=lo({strict:!1,name:"RadioGroupContext"}),v=n.forwardRef(({id:a,className:u,size:d,variant:s,colorScheme:t,children:l,items:c=[],direction:h="column",gap:f,...R},F)=>{const{labelId:S,isRequired:B,isReadOnly:k,isDisabled:P,isInvalid:r,...p}=ze({id:a,...R}),{id:m,name:x,value:j,onChange:V,getContainerProps:I,props:G}=Je(p),D=uo(l);let g=[];return!D.length&&c.length&&(g=c.map(({label:W,value:E,...y},C)=>e.jsx(o,{value:E,...y,children:W},C))),e.jsx(Ro,{value:{size:d,variant:s,colorScheme:t,isRequired:B,isReadOnly:k,isDisabled:P,isInvalid:r,name:x,value:j,onChange:V},children:e.jsx(to,{ref:F,className:Ue("ui-radio-group",u),gap:f??(h==="row"?"1rem":void 0),...I({id:m,"aria-labelledby":S,...G}),direction:h,children:l??g})})});v.displayName="RadioGroup";const Qe=({id:a,...u})=>{a??(a=n.useId());const{id:d,name:s,value:t,isChecked:l,defaultIsChecked:c,required:h,disabled:f,readOnly:R,onChange:F,onFocus:S,onBlur:B,...k}=ro({id:a,...u}),[{"aria-readonly":P,...r},p]=mo(k,no),[m,x]=n.useState(!1),[j,V]=n.useState(!1),[I,G]=n.useState(!1),[D,g]=n.useState(!1),[W,E]=n.useState(!!c),y=l!==void 0,C=y?l:W;n.useEffect(()=>ao(x),[]);const Z=Y(i=>{if(R||f){i.preventDefault();return}y||E(i.target.checked),F==null||F(i)},[R,f,y]),ee=Y(S),oe=Y(B),ae=n.useCallback(({key:i})=>{i===" "&&g(!0)},[g]),ie=n.useCallback(({key:i})=>{i===" "&&g(!1)},[g]),Xe=n.useCallback((i={},N=null)=>({...r,...i,ref:N,"data-checked":w(C)}),[C,r]),Ye=n.useCallback((i={},N=null)=>({...r,...i,ref:N,"data-active":w(D),"data-hover":w(I),"data-checked":w(C),"data-focus":w(j),"data-focus-visible":w(j&&m),"aria-hidden":!0,onMouseDown:b(i.onMouseDown,()=>g(!0)),onMouseUp:b(i.onMouseUp,()=>g(!1)),onMouseEnter:b(i.onMouseEnter,()=>G(!0)),onMouseLeave:b(i.onMouseLeave,()=>G(!1))}),[C,D,j,m,I,r]),Ze=n.useCallback((i={},N=null)=>({...r,...i,ref:N,id:a,type:"radio",name:s,value:t,required:h,disabled:f,readOnly:R,checked:C,"aria-checked":C,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:b(i.onChange,Z),onBlur:b(i.onBlur,oe,()=>V(!1)),onFocus:b(i.onFocus,ee,()=>V(!0)),onKeyDown:b(i.onKeyDown,ae),onKeyUp:b(i.onKeyUp,ie)}),[r,a,s,t,h,f,R,C,Z,oe,ee,ae,ie]),eo=n.useCallback((i={},N=null)=>({...r,...i,ref:N,onMouseDown:b(i.onMouseDown,q=>{q.preventDefault(),q.stopPropagation()}),onTouchStart:b(i.onTouchStart,q=>{q.preventDefault(),q.stopPropagation()}),"data-checked":w(C)}),[C,r]);return{props:p,isFocusVisible:m,isFocused:j,isHovered:I,isActive:D,isChecked:C,getContainerProps:Xe,getInputProps:Ze,getIconProps:Ye,getLabelProps:eo}},o=n.forwardRef((a,u)=>{const d=Co(),{value:s,...t}={...d},l=ze(a),[c,h]=po("Radio",{...t,...a}),{className:f,gap:R="0.5rem",isRequired:F=t.isRequired??l.isRequired,isReadOnly:S=t.isReadOnly??l.isReadOnly,isDisabled:B=t.isDisabled??l.isDisabled,isInvalid:k=t.isInvalid??l.isInvalid,iconProps:P,inputProps:r,labelProps:p,children:m,...x}=ho(h),j=s&&x.value?s===x.value:x.isChecked,V=t.onChange&&x.value?co(t.onChange,x.onChange):x.onChange,{isChecked:I,getContainerProps:G,getInputProps:D,getIconProps:g,getLabelProps:W,props:E}=Qe({...x,isRequired:F,isReadOnly:S,isDisabled:B,isInvalid:k,isChecked:j,onChange:V}),y=s?I?0:-1:0;return e.jsxs(M.label,{className:Ue("ui-radio",f),...G(E),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:R,...c.container},children:[e.jsx(M.input,{className:"ui-radio__input",...D({...r,tabIndex:y},u)}),e.jsx(M.span,{className:"ui-radio__icon",...g(P),__css:{position:"relative",display:"inline-block",userSelect:"none",...c.icon}}),e.jsx(M.span,{className:"ui-radio__label",...W(p),__css:{...c.label},children:m})]})});o.displayName="Radio";const wa={title:"Components / Forms / Radio",component:o},_=()=>e.jsx(o,{children:"孫悟空"}),O=()=>e.jsxs(Ke,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),H=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),T=()=>e.jsx(Ke,{gap:"md",children:oo.map(a=>e.jsx(o,{colorScheme:a,defaultIsChecked:!0,children:a},a))}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{isDisabled:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(A,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(A,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{isInvalid:!0,defaultIsChecked:!0,children:"All Notifications"}),e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(A,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(A,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e.jsxs(v,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(v,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(v,{direction:"row",defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(v,{defaultValue:"孫悟空",items:a})]})},$=()=>{const[a,u]=n.useState("孫悟空");return e.jsxs(v,{value:a,onChange:d=>u(d),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const a=s=>{const{getInputProps:t,getIconProps:l}=Qe(s);return e.jsxs(ne,{as:"label",children:[e.jsx("input",{...t(),"aria-label":s.value}),e.jsx(ne,{...l(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:s.value})]})},{getContainerProps:u,getRadioProps:d}=Je({defaultValue:"孫悟空"});return e.jsxs(fo,{gap:"sm",...u(),children:[e.jsx(a,{...d({value:"孫悟空"})}),e.jsx(a,{...d({value:"ベジータ"})}),e.jsx(a,{...d({value:"フリーザ"})})]})},Q=()=>{var l;const{control:a,handleSubmit:u,watch:d,formState:{errors:s}}=He(),t=c=>console.log("submit:",c);return console.log("watch:",d()),e.jsxs(Le,{as:"form",onSubmit:u(t),children:[e.jsx(A,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(l=s.radio)==null?void 0:l.message,children:e.jsx(Te,{name:"radio",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:c})=>e.jsxs(v,{...c,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var c;const a={radio:"孫悟空"},{control:u,handleSubmit:d,watch:s,formState:{errors:t}}=He({defaultValues:a}),l=h=>console.log("submit:",h);return console.log("watch:",s()),e.jsxs(Le,{as:"form",onSubmit:d(l),children:[e.jsx(A,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(c=t.radio)==null?void 0:c.message,children:e.jsx(Te,{name:"radio",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:h})=>e.jsxs(v,{...h,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var te,se,le;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(le=(se=_.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ue,de,ce;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var me,pe,he;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(he=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,ve,Re;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(Re=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:Re.source}}};var Ce,xe,ge;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ge=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var be,Fe,Be;K.parameters={...K.parameters,docs:{...(be=K.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Be=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var je,Ae,Se;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(Se=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:Se.source}}};var ke,Ie,De;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(De=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:De.source}}};var ye,Ne,we;$.parameters={...$.parameters,docs:{...(ye=$.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(we=(Ne=$.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Pe,Ve,Ge;J.parameters={...J.parameters,docs:{...(Pe=J.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Ve=J.parameters)==null?void 0:Ve.docs)==null?void 0:Ge.source}}};var We,Ee,qe;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(qe=(Ee=Q.parameters)==null?void 0:Ee.docs)==null?void 0:qe.source}}};var Me,_e,Oe;X.parameters={...X.parameters,docs:{...(Me=X.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
}`,...(Oe=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:Oe.source}}};const Pa=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Pa as __namedExportsOrder,_ as basic,$ as customControl,J as customHook,wa as default,z as isDisabled,U as isInvalid,K as isReadonly,Q as reactHookForm,X as reactHookFormWithDefaultValue,T as withColorScheme,H as withDefaultIsChecked,L as withGroup,O as withSize};
