import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as t}from"./index-ClcD9ViR.js";import{u as ze,C as Ee}from"./index.esm-CEdvtQ_U.js";import{c as io}from"./components-DzxwAZf_.js";import{t as ao}from"./index-B1fFV9TL.js";import{p as no,a0 as ro,Z as to,k as Y,d as D,h as R,a as O,c as Ke,n as re,b as so,q as lo}from"./factory-CsPvKZdD.js";import{e as Ue,c as co,f as uo}from"./form-control-DwB49xkU.js";import{a as po}from"./use-component-style-DigxQCYK.js";import{o as mo}from"./theme-provider-BzJf26st.js";import{u as ho}from"./index-BZgEUlQ7.js";import{F as fo,W as Le}from"./flex-CX-Ahrvt.js";import{F as N}from"./fieldset-DL-8OK2y.js";import{H as vo,V as Ze}from"./stack-B8FEb0Oy.js";import{B as te}from"./box-BdEuml_r.js";import{B as $e}from"./button-mz3Uh9F2.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B5j6RQ3N.js";import"./index-DaKwFS8s.js";import"./index-oHEGJEIa.js";import"./ui-provider-C3MgCnY9.js";import"./index-DUHq8AHJ.js";import"./proxy-DwHv-pG9.js";import"./loading-provider-Cg8nPq1d.js";import"./index-BbxJDMiU.js";import"./Combination-__ZWiWyr.js";import"./loading-Dqjo7Xgj.js";import"./icon-DQQopEtL.js";import"./use-var-U7aWLCqe.js";import"./forward-ref-D13m8o2p.js";import"./index-2WvfircW.js";import"./portal-Chl-LWlv.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-CGSCAS8e.js";import"./notice-BbLIVVfQ.js";import"./alert-Bk9OHeii.js";import"./close-button-DsBKj5el.js";import"./use-ripple-D3QnPsMa.js";import"./container-Q5QjkINy.js";import"./text-CM9qqEsI.js";import"./checkbox-Mc7RrhLM.js";import"./index-BZkq-FqQ.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-BYTt16HH.js";import"./index-F33a9ApW.js";import"./index-vvrM3dVN.js";import"./index-Di2qk_cd.js";import"./index-CA44hmXO.js";import"./index-XEGGZinu.js";import"./slide-fade-yXDA2CMz.js";import"./utils-BNH5haTV.js";import"./forward-ref-2BKBy0Yi.js";import"./scale-fade-DFHqnXn5.js";import"./index-Bkx9JLGf.js";import"./index-Ds3gfiOt.js";import"./select-yFKUlqH1.js";import"./select-list-c1Qg2-Ii.js";import"./index-Ao7Zu0I0.js";import"./popover-trigger-D5Ix9XTE.js";import"./index-ojuFZliC.js";import"./index-gGKStiao.js";import"./index-MfhOSOV0.js";import"./visually-hidden-PxmNUEpl.js";const[Ro,go]=no({name:"RadioGroupContext",strict:!1}),Je=({id:i,...l})=>{const d=t.useId();i??(i=d);const{id:p,name:s,defaultIsChecked:c,isChecked:u,value:f,onChange:g,...x}=co({id:i,...l}),[{"aria-readonly":k,disabled:v,readOnly:b,required:j,onBlur:w,onFocus:F,...n},m]=to(x,uo),[r,W]=t.useState(!1),[I,A]=t.useState(!1),[P,G]=t.useState(!1),[y,C]=t.useState(!1),[_,q]=t.useState(!!c),M=u!==void 0,S=M?u:_;t.useEffect(()=>ao(W),[]);const ee=Y(a=>{if(b||v){a.preventDefault();return}M||q(a.target.checked),g==null||g(a)},[b,v,M]),oe=Y(F),ie=Y(w),ae=t.useCallback(({key:a})=>{a===" "&&C(!0)},[C]),ne=t.useCallback(({key:a})=>{a===" "&&C(!1)},[C]),Xe=t.useCallback((a={},V=null)=>({...n,...a,ref:V,"data-checked":D(S)}),[S,n]),Ye=t.useCallback((a={},V=null)=>({...n,...a,ref:V,"aria-hidden":!0,"data-active":D(y),"data-checked":D(S),"data-focus":D(I),"data-focus-visible":D(I&&r),"data-hover":D(P),onMouseDown:R(a.onMouseDown,()=>C(!0)),onMouseEnter:R(a.onMouseEnter,()=>G(!0)),onMouseLeave:R(a.onMouseLeave,()=>G(!1)),onMouseUp:R(a.onMouseUp,()=>C(!1))}),[S,y,I,r,P,n]),eo=t.useCallback((a={},V=null)=>({...n,...a,id:i,ref:V,type:"radio",name:s,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-checked":S,checked:S,disabled:v,readOnly:b,required:j,value:f,onBlur:R(a.onBlur,ie,()=>A(!1)),onChange:R(a.onChange,ee),onFocus:R(a.onFocus,oe,()=>A(!0)),onKeyDown:R(a.onKeyDown,ae),onKeyUp:R(a.onKeyUp,ne)}),[n,i,s,f,j,v,b,S,ee,ie,oe,ae,ne]),oo=t.useCallback((a={},V=null)=>({...n,...a,ref:V,"data-checked":D(S),onMouseDown:R(a.onMouseDown,B=>{B.preventDefault(),B.stopPropagation()}),onTouchStart:R(a.onTouchStart,B=>{B.preventDefault(),B.stopPropagation()})}),[S,n]);return{isActive:y,isChecked:S,isFocused:I,isFocusVisible:r,isHovered:P,props:m,getContainerProps:Xe,getIconProps:Ye,getInputProps:eo,getLabelProps:oo}},o=t.forwardRef((i,l)=>{const d=go(),{value:p,...s}={...d},c=Ue(i),[u,f]=po("Radio",{...s,...i}),{className:g,children:x,gap:k="0.5rem",isDisabled:v=s.isDisabled??c.isDisabled,isInvalid:b=s.isInvalid??c.isInvalid,isReadOnly:j=s.isReadOnly??c.isReadOnly,isRequired:w=s.isRequired??c.isRequired,iconProps:F,inputProps:n,labelProps:m,...r}=mo(f),W=p&&r.value?p===r.value:r.isChecked,I=s.onChange&&r.value?ro(s.onChange,r.onChange):r.onChange,{isChecked:A,props:P,getContainerProps:G,getIconProps:y,getInputProps:C,getLabelProps:_}=Je({...r,isChecked:W,isDisabled:v,isInvalid:b,isReadOnly:j,isRequired:w,onChange:I}),q=p?A?0:-1:0;return e.jsxs(O.label,{className:Ke("ui-radio",g),...G(P),__css:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:k,position:"relative",verticalAlign:"top",...u.container},children:[e.jsx(O.input,{className:"ui-radio__input",...C({...n,tabIndex:q},l)}),e.jsx(O.div,{className:"ui-radio__icon",...y(F),__css:{display:"inline-block",position:"relative",userSelect:"none",...u.icon}}),e.jsx(O.span,{className:"ui-radio__label",..._(m),__css:{...u.label},children:x})]})});o.displayName="Radio";o.__ui__="Radio";const xo=i=>i&&re(i)&&re(i.target),Qe=({id:i,name:l,defaultValue:d,isNative:p,value:s,onChange:c,...u})=>{const f=t.useId();i??(i=f),l??(l=`radio-${i}`);const g=Y(c),[x,k]=ho({defaultValue:d,value:s,onChange:g}),v=t.useRef(null),b=t.useCallback(()=>{const n=v.current;if(!n)return;let m="input:not(:disabled):checked",r=n.querySelector(m);r?r.focus():(m="input:not(:disabled)",r=n.querySelector(m),r==null||r.focus())},[]),j=t.useCallback(n=>{const m=xo(n)?n.target.value:n;k(m)},[k]),w=t.useCallback((n={},m=null)=>({role:"radiogroup",...n,ref:so(m,v)}),[]),F=t.useCallback((n={},m=null)=>{const r=n.value===x;return{...n,ref:m,name:l,"aria-checked":r,[p?"checked":"isChecked"]:x!=null?r:void 0,onChange:j}},[l,x,j,p]);return{id:i,name:l,props:u,setValue:k,value:x,getContainerProps:w,getRadioProps:F,onChange:j,onFocus:b}},h=t.forwardRef(({id:i,className:l,colorScheme:d,size:p,variant:s,children:c,direction:u="column",gap:f,items:g=[],...x},k)=>{const{isDisabled:v,isInvalid:b,isReadOnly:j,isRequired:w,labelId:F,...n}=Ue({id:i,...x}),{id:m,name:r,props:W,value:I,getContainerProps:A,onChange:P}=Qe(n),G=lo(c);let y=[];return!G.length&&g.length&&(y=g.map(({label:C,value:_,...q},M)=>e.jsx(o,{value:_,...q,children:C},M))),e.jsx(Ro,{value:{name:r,colorScheme:d,size:p,variant:s,isDisabled:v,isInvalid:b,isReadOnly:j,isRequired:w,value:I,onChange:P},children:e.jsx(fo,{ref:k,className:Ke("ui-radio-group",l),gap:f??(u==="row"?"1rem":void 0),...A({id:m,"aria-labelledby":F,...W}),direction:u,children:c??y})})});h.displayName="RadioGroup";h.__ui__="RadioGroup";const Pi={component:o,title:"Components / Forms / Radio"},H=()=>e.jsx(o,{children:"孫悟空"}),T=()=>e.jsxs(Le,{gap:"md",children:[e.jsx(o,{size:"sm",children:"孫悟空"}),e.jsx(o,{size:"md",children:"ベジータ"}),e.jsx(o,{size:"lg",children:"フリーザ"})]}),z=()=>e.jsx(o,{defaultIsChecked:!0,children:"孫悟空"}),E=()=>e.jsx(Le,{gap:"md",children:io.map(i=>e.jsx(o,{colorScheme:i,defaultIsChecked:!0,children:i},i))}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isDisabled:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isDisabled:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isDisabled:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isDisabled:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isReadOnly:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isReadOnly:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isReadOnly:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{defaultIsChecked:!0,children:"All Notifications"})}),e.jsx(N,{isReadOnly:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(o,{isInvalid:!0,children:"All Notifications"}),e.jsx(o,{defaultIsChecked:!0,isInvalid:!0,children:"All Notifications"}),e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{isInvalid:!0,value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]}),e.jsx(N,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsx(o,{children:"All Notifications"})}),e.jsx(N,{errorMessage:"This is required.",isInvalid:!0,legend:"Which notifications would you like to receive?",children:e.jsxs(h,{defaultValue:"all",children:[e.jsx(o,{value:"all",children:"All Notifications"}),e.jsx(o,{value:"important",children:"Important Notifications"}),e.jsx(o,{value:"service",children:"Service Notifications"})]})})]}),Z=()=>{const i=[{label:"孫悟空",value:"孫悟空"},{label:"ベジータ",value:"ベジータ"},{label:"フリーザ",value:"フリーザ"}];return e.jsxs(e.Fragment,{children:[e.jsxs(h,{defaultValue:"孫悟空",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsxs(h,{defaultValue:"孫悟空",direction:"row",children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),e.jsx(h,{defaultValue:"孫悟空",items:i})]})},$=()=>{const[i,l]=t.useState("孫悟空");return e.jsxs(h,{value:i,onChange:d=>l(d),children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]})},J=()=>{const i=p=>{const{getIconProps:s,getInputProps:c}=Je(p);return e.jsxs(te,{as:"label",children:[e.jsx("input",{...c(),"aria-label":p.value}),e.jsx(te,{as:"span",...s(),borderWidth:"1px",cursor:"pointer",px:"sm",py:"xs",rounded:"md",_checked:{bg:"blue.500",borderColor:"blue.500",color:"white"},children:p.value})]})},{getContainerProps:l,getRadioProps:d}=Qe({defaultValue:"孫悟空"});return e.jsxs(vo,{gap:"sm",...l(),children:[e.jsx(i,{...d({value:"孫悟空"})}),e.jsx(i,{...d({value:"ベジータ"})}),e.jsx(i,{...d({value:"フリーザ"})})]})},Q=()=>{var c;const{control:i,formState:{errors:l},handleSubmit:d,watch:p}=ze(),s=u=>console.log("submit:",u);return console.log("watch:",p()),e.jsxs(Ze,{as:"form",onSubmit:d(s),children:[e.jsx(N,{errorMessage:(c=l.radio)==null?void 0:c.message,isInvalid:!!l.radio,legend:"Who is your favorite character?",children:e.jsx(Ee,{name:"radio",control:i,render:({field:u})=>e.jsxs(h,{...u,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},X=()=>{var u;const i={radio:"孫悟空"},{control:l,formState:{errors:d},handleSubmit:p,watch:s}=ze({defaultValues:i}),c=f=>console.log("submit:",f);return console.log("watch:",s()),e.jsxs(Ze,{as:"form",onSubmit:p(c),children:[e.jsx(N,{errorMessage:(u=d.radio)==null?void 0:u.message,isInvalid:!!d.radio,legend:"Who is your favorite character?",children:e.jsx(Ee,{name:"radio",control:l,render:({field:f})=>e.jsxs(h,{...f,children:[e.jsx(o,{value:"孫悟空",children:"孫悟空"}),e.jsx(o,{value:"ベジータ",children:"ベジータ"}),e.jsx(o,{value:"フリーザ",children:"フリーザ"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var se,le,de;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(de=(le=H.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <Radio size="sm">孫悟空</Radio>
      <Radio size="md">ベジータ</Radio>
      <Radio size="lg">フリーザ</Radio>
    </Wrap>;
}`,...(pe=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,he,fe;z.parameters={...z.parameters,docs:{...(me=z.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Radio defaultIsChecked>孫悟空</Radio>;
}`,...(fe=(he=z.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ve,Re,ge;E.parameters={...E.parameters,docs:{...(ve=E.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Radio key={colorScheme} colorScheme={colorScheme} defaultIsChecked>
          {colorScheme}
        </Radio>)}
    </Wrap>;
}`,...(ge=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:ge.source}}};var xe,be,je;K.parameters={...K.parameters,docs:{...(xe=K.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isDisabled legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
    </>;
}`,...(je=(be=K.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ce,Se,ke;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <Radio defaultIsChecked>All Notifications</Radio>
      </Fieldset>

      <Fieldset isReadOnly legend="Which notifications would you like to receive?">
        <RadioGroup defaultValue="all">
          <Radio value="all">All Notifications</Radio>
          <Radio value="important">Important Notifications</Radio>
          <Radio value="service">Service Notifications</Radio>
        </RadioGroup>
      </Fieldset>
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
}`,...(Ne=(ye=L.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Fe,Pe;Z.parameters={...Z.parameters,docs:{...(we=Z.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Fe=Z.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ve,De,Ae;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(Te=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Te.source}}};const Vi=["basic","withSize","withDefaultIsChecked","withColorScheme","isDisabled","isReadonly","isInvalid","withGroup","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Vi as __namedExportsOrder,H as basic,$ as customControl,J as customHook,Pi as default,K as isDisabled,L as isInvalid,U as isReadonly,Q as reactHookForm,X as reactHookFormWithDefaultValue,E as withColorScheme,z as withDefaultIsChecked,Z as withGroup,T as withSize};
