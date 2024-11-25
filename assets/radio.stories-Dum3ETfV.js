import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r}from"./index-ClcD9ViR.js";import{u as Ee,C as Ke}from"./index.esm-CEdvtQ_U.js";import{c as no}from"./components-Bzmp6DXo.js";import{t as ro}from"./index-D4erXYdm.js";import{p as to,a0 as so,b as B,c as Ue,Z as lo,k as X,d as D,h as x,a as co,q as uo,n as te}from"./factory-Cp1Ju9mN.js";import{e as Le,c as po,f as mo}from"./form-control-C2QLAsqZ.js";import{a as ho}from"./use-component-style-BGLOU3Ga.js";import{o as fo}from"./theme-provider-DMHFYkuw.js";import{u as vo}from"./index-B2Nxc2b_.js";import{F as Ro,W as Ze}from"./flex-BKtl9XZl.js";import{F as I}from"./fieldset-CzV2J22W.js";import{H as go,V as $e}from"./stack-oDGa6EY5.js";import{B as Je}from"./button-vnBqyEiG.js";import{B as se}from"./box-C6uIdwxO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DeQ1wXyQ.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./ui-provider-DveZq7vD.js";import"./index-CugwT2-N.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-l3NbYd4q.js";import"./index-CX-96MTv.js";import"./Combination-CkmEMpJG.js";import"./loading-DkRHwhPr.js";import"./icon-Ch8QFxk9.js";import"./use-var-cHPN6Ir7.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-PrQSTmZ0.js";import"./index-ZuzByk-F.js";import"./factory-CYGsRDnQ.js";import"./notice-ubAmRwRC.js";import"./alert-OMyiK_aG.js";import"./close-button-KaaR9e9n.js";import"./use-ripple-SSdhQaN8.js";import"./container-CTLEgExA.js";import"./text-CIX2g0cs.js";import"./checkbox-BlkwiFCM.js";import"./index-CGWRA56r.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-DC9Msz77.js";import"./index-C2FBWOq2.js";import"./index-DVuKitli.js";import"./index-BMJcaCPC.js";import"./index-BoHnpcSs.js";import"./index-DM7U-nMi.js";import"./slide-fade-Sj6o3YZF.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CehLRonx.js";import"./scale-fade-BQQzZXA1.js";import"./index-5lzM9kKl.js";import"./index-B5Z2HpMN.js";import"./select-CjndjjYA.js";import"./select-list-oUiitNRG.js";import"./index-Zd4KnGXX.js";import"./popover-trigger-CbTrSW4y.js";import"./index-CilJ2bIs.js";import"./index-gGKStiao.js";import"./index-BDaUJiBA.js";import"./visually-hidden-CO8Y1oU8.js";const[xo,bo]=to({name:"RadioGroupContext",strict:!1}),Qe=({id:a,...l})=>{const d=r.useId();a??(a=d);let{id:p,name:t,checked:s,defaultChecked:c,defaultIsChecked:v,isChecked:C,value:R,onChange:g,...S}=po({id:a,...l});s??(s=C),c??(c=v);const[{"aria-readonly":A,disabled:f,readOnly:b,required:y,onBlur:u,onFocus:m,...i},_]=lo(S,mo),[F,q]=r.useState(!1),[N,G]=r.useState(!1),[w,W]=r.useState(!1),[P,j]=r.useState(!1),[Y,Ye]=r.useState(!!c),ee=s!==void 0,k=ee?s:Y;r.useEffect(()=>ro(q),[]);const oe=X(n=>{if(b||f){n.preventDefault();return}ee||Ye(n.target.checked),g==null||g(n)},[b,f,ee]),ae=X(m),ie=X(u),ne=r.useCallback(({key:n})=>{n===" "&&j(!0)},[j]),re=r.useCallback(({key:n})=>{n===" "&&j(!1)},[j]),eo=r.useCallback((n={},V=null)=>({...i,...n,ref:V,"data-checked":D(k)}),[k,i]),oo=r.useCallback((n={},V=null)=>({...i,...n,ref:V,"aria-hidden":!0,"data-active":D(P),"data-checked":D(k),"data-focus":D(N),"data-focus-visible":D(N&&F),"data-hover":D(w),onMouseDown:x(n.onMouseDown,()=>j(!0)),onMouseEnter:x(n.onMouseEnter,()=>W(!0)),onMouseLeave:x(n.onMouseLeave,()=>W(!1)),onMouseUp:x(n.onMouseUp,()=>j(!1))}),[k,P,N,F,w,i]),ao=r.useCallback((n={},V=null)=>({...i,...n,id:a,ref:V,type:"radio",name:t,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-checked":k,checked:k,disabled:f,readOnly:b,required:y,value:R,onBlur:x(n.onBlur,ie,()=>G(!1)),onChange:x(n.onChange,oe),onFocus:x(n.onFocus,ae,()=>G(!0)),onKeyDown:x(n.onKeyDown,ne),onKeyUp:x(n.onKeyUp,re)}),[i,a,t,R,y,f,b,k,oe,ie,ae,ne,re]),io=r.useCallback((n={},V=null)=>({...i,...n,ref:V,"data-checked":D(k),onMouseDown:x(n.onMouseDown,M=>{M.preventDefault(),M.stopPropagation()}),onTouchStart:x(n.onTouchStart,M=>{M.preventDefault(),M.stopPropagation()})}),[k,i]);return{active:P,checked:k,focused:N,focusVisible:F,hovered:w,props:_,getContainerProps:eo,getIconProps:oo,getInputProps:ao,getLabelProps:io}},o=r.forwardRef((a,l)=>{const d=bo(),{value:p,...t}={...d},s=Le(a),[c,v]=ho("Radio",{...t,...a}),{className:C,children:R,gap:g="0.5rem",isDisabled:S=t.isDisabled??s.isDisabled,isInvalid:A=t.isInvalid??s.isInvalid,isReadOnly:f=t.isReadOnly??s.isReadOnly,isRequired:b=t.isRequired??s.isRequired,iconProps:y,inputProps:u,labelProps:m,...i}=fo(v);i.checked??(i.checked=i.isChecked);const _=p&&i.value?p===i.value:i.checked,F=t.onChange&&i.value?so(t.onChange,i.onChange):i.onChange,{checked:q,props:N,getContainerProps:G,getIconProps:w,getInputProps:W,getLabelProps:P}=Qe({...i,checked:_,isDisabled:S,isInvalid:A,isReadOnly:f,isRequired:b,onChange:F}),j=p?q?0:-1:0;return e.jsxs(B.label,{className:Ue("ui-radio",C),...G(N),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:g,position:"relative",verticalAlign:"top",...c.container},children:[e.jsx(B.input,{className:"ui-radio__input",...W({...u,tabIndex:j},l)}),e.jsx(B.div,{className:"ui-radio__icon",...w(y),__css:{display:"inline-block",position:"relative",userSelect:"none",...c.icon}}),e.jsx(B.span,{className:"ui-radio__label",...P(m),__css:{...c.label},children:R})]})});o.displayName="Radio";o.__ui__="Radio";const jo=a=>a&&te(a)&&te(a.target),Xe=({id:a,name:l,defaultValue:d,isNative:p,value:t,onChange:s,...c})=>{const v=r.useId();a??(a=v),l??(l=`radio-${a}`);const C=X(s),[R,g]=vo({defaultValue:d,value:t,onChange:C}),S=r.useRef(null),A=r.useCallback(()=>{const u=S.current;if(!u)return;let m="input:not(:disabled):checked",i=u.querySelector(m);i?i.focus():(m="input:not(:disabled)",i=u.querySelector(m),i==null||i.focus())},[]),f=r.useCallback(u=>{const m=jo(u)?u.target.value:u;g(m)},[g]),b=r.useCallback((u={},m=null)=>({role:"radiogroup",...u,ref:co(m,S)}),[]),y=r.useCallback((u={},m=null)=>{const i=u.value===R;return{...u,ref:m,name:l,"aria-checked":i,[p?"checked":"isChecked"]:R!=null?i:void 0,onChange:f}},[l,R,f,p]);return{id:a,name:l,props:c,setValue:g,value:R,getContainerProps:b,getRadioProps:y,onChange:f,onFocus:A}},h=r.forwardRef(({id:a,className:l,colorScheme:d,size:p,variant:t,children:s,direction:c="column",gap:v,items:C=[],...R},g)=>{const{isDisabled:S,isInvalid:A,isReadOnly:f,isRequired:b,labelId:y,...u}=Le({id:a,...R}),{id:m,name:i,props:_,value:F,getContainerProps:q,onChange:N}=Xe(u),G=uo(s);let w=[];return!G.length&&C.length&&(w=C.map(({label:W,value:P,...j},Y)=>e.jsx(o,{value:P,...j,children:W},Y))),e.jsx(xo,{value:{name:i,colorScheme:d,size:p,variant:t,isDisabled:S,isInvalid:A,isReadOnly:f,isRequired:b,value:F,onChange:N},children:e.jsx(Ro,{ref:g,className:Ue("ui-radio-group",l),gap:v??(c==="row"?"1rem":void 0),...q({id:m,"aria-labelledby":y,..._}),direction:c,children:s??w})})});h.displayName="RadioGroup";h.__ui__="RadioGroup";const Da={component:o,title:"Components / Forms / Radio"},O=()=>e.jsx(o,{children:"孫悟空"}),H=()=>e.jsxs(Ze,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),T=()=>e.jsx(o,{defaultChecked:!0,children:"孫悟空"}),z=()=>e.jsx(Ze,{gap:"md",children:no.map(a=>e.jsx(o,{colorScheme:a,defaultChecked:!0,children:a},a))}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(I,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultChecked:!0,children:"All Notifications"})}),e.jsx(I,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(I,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(I,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>{const a=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(h,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(h,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(h,{defaultValue:"孫悟空",items:a})]})},Z=()=>{const[a,l]=r.useState("孫悟空");return e.jsxs(h,{value:a,onChange:d=>l(d),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},$=()=>{const a=p=>{const{getIconProps:t,getInputProps:s}=Qe(p);return e.jsxs(se,{as:"label",children:[e.jsx("input",{...s(),"aria-label":p.value}),e.jsx(se,{as:"span",...t(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:p.value})]})},{getContainerProps:l,getRadioProps:d}=Xe({defaultValue:"孫悟空"});return e.jsxs(go,{gap:"sm",...l(),children:[e.jsx(a,{...d({value:"孫悟空"})}),e.jsx(a,{...d({value:"ベジータ"})}),e.jsx(a,{...d({value:"フリーザ"})})]})},J=()=>{var s;const{control:a,formState:{errors:l},handleSubmit:d,watch:p}=Ee(),t=c=>console.log("submit:",c);return console.log("watch:",p()),e.jsxs($e,{as:"form",onSubmit:d(t),children:[e.jsx(I,{errorMessage:(s=l.radio)==null?void 0:s.message,isInvalid:!!l.radio,legend:"Who is your favorite character?",children:e.jsx(Ke,{name:"radio",control:a,render:({field:c})=>e.jsxs(h,{...c,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Je,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},Q=()=>{var c;const a={radio:"孫悟空"},{control:l,formState:{errors:d},handleSubmit:p,watch:t}=Ee({defaultValues:a}),s=v=>console.log("submit:",v);return console.log("watch:",t()),e.jsxs($e,{as:"form",onSubmit:p(s),children:[e.jsx(I,{errorMessage:(c=d.radio)==null?void 0:c.message,isInvalid:!!d.radio,legend:"Who is your favorite character?",children:e.jsx(Ke,{name:"radio",control:l,render:({field:v})=>e.jsxs(h,{...v,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Je,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var le,de,ce;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,me;H.parameters={...H.parameters,docs:{...(ue=H.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(me=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ve;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ve=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Re,ge,xe;z.parameters={...z.parameters,docs:{...(Re=z.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(xe=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var be,je,ke;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio defaultChecked isDisabled>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isDisabled value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(ke=(je=E.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Ce,Se,ye;K.parameters={...K.parameters,docs:{...(Ce=K.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio defaultChecked isReadOnly>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isReadOnly value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <Radio defaultChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(ye=(Se=K.parameters)==null?void 0:Se.docs)==null?void 0:ye.source}}};var Ne,we,Ie;U.parameters={...U.parameters,docs:{...(Ne=U.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio defaultChecked isInvalid>
        All Notifications
      </Radio>

      <RadioGroup defaultValue="all">
        <Radio value="all">All Notifications</Radio>
        <Radio isInvalid value="important">
          Important Notifications
        </Radio>
        <Radio value="service">Service Notifications</Radio>
      </RadioGroup>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <Radio>All Notifications</Radio>
      </Fieldset>

      <Fieldset errorMessage="This is required." isInvalid legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(Ie=(we=U.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var Fe,Pe,Ve;L.parameters={...L.parameters,docs:{...(Fe=L.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Pe=L.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var De,Ae,Ge;Z.parameters={...Z.parameters,docs:{...(De=Z.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>("孫悟空");
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value="孫悟空">孫悟空</Radio>
      <Radio value="ベジータ">ベジータ</Radio>
      <Radio value="フリーザ">フリーザ</Radio>
    </RadioGroup>;
}`,...(Ge=(Ae=Z.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var We,_e,qe;$.parameters={...$.parameters,docs:{...(We=$.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(qe=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:qe.source}}};var Me,Be,Oe;J.parameters={...J.parameters,docs:{...(Me=J.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.radio?.message} isInvalid={!!errors.radio} legend="Who is your favorite character?">
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
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Oe=(Be=J.parameters)==null?void 0:Be.docs)==null?void 0:Oe.source}}};var He,Te,ze;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
      <Fieldset errorMessage={errors.radio?.message} isInvalid={!!errors.radio} legend="Who is your favorite character?">
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
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ze=(Te=Q.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};const Aa=["basic","withSize","withDefaultChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Aa as __namedExportsOrder,O as basic,Z as customControl,$ as customHook,Da as default,E as isDisabled,U as isInvalid,K as isReadonly,J as reactHookForm,Q as reactHookFormWithDefaultValue,z as withColorScheme,T as withDefaultChecked,L as withGroup,H as withSize};
