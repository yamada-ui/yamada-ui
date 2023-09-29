import{j as e,a as t,F as U}from"./jsx-runtime-29545a09.js";import{r as d}from"./index-76fb7be0.js";import{u as Be,C as Me}from"./index.esm-e2e4d158.js";import{t as Je}from"./index-4d7f7dd8.js";import{u as Qe}from"./index-7847f267.js";import{a as He,u as Xe,f as A,F as N}from"./form-control-8de414a9.js";import{F as eo,W as Te}from"./flex-7243abe6.js";import{c as K,w as oo,o as ao,e as ze,y as _e,n as X,L as no,d as x,z as G,v as k}from"./factory-0893e977.js";import{a as io}from"./use-component-style-aad79748.js";import{o as ro,d as F}from"./theme-53967a8a.js";import{H as lo,V as Le}from"./stack-e0824e8f.js";import{B as Ee}from"./button-47cccc58.js";import{B as ee}from"./box-17a9b8c9.js";import"./_commonjsHelpers-de833af9.js";import"./forward-ref-8b7d2a6f.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-0658c608.js";import"./index-500c6d69.js";import"./index-24d8bf0d.js";import"./index-7b119b1a.js";import"./icon-1cfd45cb.js";const to=n=>n&&X(n)&&X(n.target),je=({id:n,name:c,isNative:a,...l})=>{n=n??d.useId(),c=c??`radio-${n}`,l.onChange=K(l.onChange);const[s,u]=Qe({value:l.value,defaultValue:l.defaultValue,onChange:l.onChange}),m=d.useRef(null),r=d.useCallback(()=>{const h=m.current;if(!h)return;let f="input:not(:disabled):checked",R=h.querySelector(f);R?R.focus():(f="input:not(:disabled)",R=h.querySelector(f),R==null||R.focus())},[]),C=d.useCallback(h=>{const f=to(h)?h.target.value:h;u(f)},[u]),w=d.useCallback((h={},f=null)=>({...h,ref:oo(f,m),role:"group"}),[]),g=d.useCallback((h={},f=null)=>({...h,ref:f,name:c,[a?"checked":"isChecked"]:s!=null?h.value===s:void 0,onChange:C}),[c,s,C,a]);return{name:c,value:s,setValue:u,onChange:C,onFocus:r,getContainerProps:w,getRadioProps:g}},[co,so]=ao({strict:!1,name:"RadioGroupContext"}),v=d.forwardRef(({className:n,size:c,variant:a,colorScheme:l,children:s,direction:u="column",gap:m,...r},C)=>{const{name:w,value:g,onChange:h,getContainerProps:f}=je(r),{isRequired:R,isReadOnly:I,isDisabled:b,isInvalid:p}=He(r);return e(co,{value:{size:c,variant:a,colorScheme:l,isRequired:R,isReadOnly:I,isDisabled:b,isInvalid:p,name:w,value:g,onChange:h},children:e(eo,{ref:C,className:ze("ui-radio-group",n),direction:u,gap:m??(u==="row"?"1rem":void 0),...f(_e(r,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),children:s})})});v.displayName="RadioGroup";const Ke=n=>{const{id:c,name:a,value:l,required:s,disabled:u,readOnly:m,...r}=Xe(n),[C,w]=d.useState(!1),[g,h]=d.useState(!1),[f,R]=d.useState(!1),[I,b]=d.useState(!1),[p,Y]=d.useState(!!n.defaultChecked),P=n.isChecked!==void 0,S=P?n.isChecked:p;d.useEffect(()=>Je(w),[]);const V=K(i=>{var y;if(m||u){i.preventDefault();return}P||Y(i.target.checked),(y=r.onChange)==null||y.call(r,i)},[m,u,P]),Z=K(r.onBlur),$=K(r.onFocus),J=d.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),Q=d.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Ue=d.useCallback((i={},y=null)=>({...G(r,A),...i,ref:y,"data-checked":F(S)}),[S,r]),Ye=d.useCallback((i={},y=null)=>({...G(r,A),...i,ref:y,"data-active":F(I),"data-hover":F(f),"data-checked":F(S),"data-focus":F(g),"data-focus-visible":F(g&&C),"aria-hidden":!0,onMouseDown:k(i.onMouseDown,()=>b(!0)),onMouseUp:k(i.onMouseUp,()=>b(!1)),onMouseEnter:k(i.onMouseEnter,()=>R(!0)),onMouseLeave:k(i.onMouseLeave,()=>R(!1))}),[S,I,g,C,f,r]),Ze=d.useCallback((i={},y=null)=>({...G(r,A),...i,ref:y,id:c,type:"radio",name:a,value:l,required:s,disabled:u,readOnly:m,checked:S,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:k(i.onChange,V),onBlur:k(i.onBlur,Z,()=>h(!1)),onFocus:k(i.onFocus,$,()=>h(!0)),onKeyDown:k(i.onKeyDown,J),onKeyUp:k(i.onKeyUp,Q)}),[r,c,a,l,s,u,m,S,V,Z,$,J,Q]),$e=d.useCallback((i={},y=null)=>({...G(r,A),props:i,ref:y,onMouseDown:k(i.onMouseDown,D=>{D.preventDefault(),D.stopPropagation()}),onTouchStart:k(i.onTouchStart,D=>{D.preventDefault(),D.stopPropagation()}),"data-checked":F(S)}),[S,r]);return{isFocusVisible:C,isFocused:g,isHovered:f,isActive:I,isChecked:S,getContainerProps:Ue,getInputProps:Ze,getIconProps:Ye,getLabelProps:$e}},o=d.forwardRef((n,c)=>{const a=so(),l=He(n),[s,u]=io("Radio",{...a,...n}),{className:m,gap:r="0.5rem",isRequired:C=(a==null?void 0:a.isRequired)??l.isRequired,isReadOnly:w=(a==null?void 0:a.isReadOnly)??l.isReadOnly,isDisabled:g=(a==null?void 0:a.isDisabled)??l.isDisabled,isInvalid:h=(a==null?void 0:a.isInvalid)??l.isInvalid,iconProps:f,inputProps:R,labelProps:I,children:b,...p}=ro(u),{getContainerProps:Y,getInputProps:P,getIconProps:S,getLabelProps:V}=Ke({...p,isRequired:C,isReadOnly:w,isDisabled:g,isInvalid:h,isChecked:a!=null&&a.value&&p.value?a.value===p.value:p.isChecked,onChange:a!=null&&a.onChange&&p.value?no(a.onChange,p.onChange):p.onChange});return t(x.label,{className:ze("ui-radio",m),...Y(),..._e(p,["id","name","value","defaultValue","defaultChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:r,...s.container},children:[e(x.input,{className:"ui-radio-input",...P(R,c)}),e(x.span,{className:"ui-radio-icon",...S(f),__css:{position:"relative",display:"inline-block",userSelect:"none",...s.icon}}),e(x.span,{className:"ui-radio-label",...V(I),__css:{...s.label},children:b})]})});o.displayName="Radio";const xo={title:"Components / Forms / Radio",component:o},W=()=>e(o,{children:"孫悟空"}),q=()=>t(Te,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),O=()=>e(o,{defaultChecked:!0,children:"孫悟空"}),B=()=>t(Te,{gap:"md",children:[e(o,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(o,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(o,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(o,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(o,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(o,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(o,{colorScheme:"zinc",defaultChecked:!0,children:"Zinc"}),e(o,{colorScheme:"neutral",defaultChecked:!0,children:"Neutral"}),e(o,{colorScheme:"stone",defaultChecked:!0,children:"Stone"}),e(o,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(o,{colorScheme:"rose",defaultChecked:!0,children:"Rose"}),e(o,{colorScheme:"pink",defaultChecked:!0,children:"Pink"}),e(o,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(o,{colorScheme:"amber",defaultChecked:!0,children:"Amber"}),e(o,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(o,{colorScheme:"lime",defaultChecked:!0,children:"Lime"}),e(o,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(o,{colorScheme:"emerald",defaultChecked:!0,children:"Emerald"}),e(o,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(o,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(o,{colorScheme:"sky",defaultChecked:!0,children:"Sky"}),e(o,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(o,{colorScheme:"indigo",defaultChecked:!0,children:"Indigo"}),e(o,{colorScheme:"violet",defaultChecked:!0,children:"Violet"}),e(o,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(o,{colorScheme:"fuchsia",defaultChecked:!0,children:"Fuchsia"})]}),M=()=>t(U,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultChecked:!0,children:"All Notifications"}),t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),H=()=>t(U,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultChecked:!0,children:"All Notifications"}),t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),T=()=>t(U,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultChecked:!0,children:"All Notifications"}),t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:t(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),z=()=>t(U,{children:[t(v,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),t(v,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),_=()=>{const[n,c]=d.useState("孫悟空");return t(v,{value:n,onChange:a=>c(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},L=()=>{const n=l=>{const{getInputProps:s,getIconProps:u}=Ke(l);return t(ee,{as:"label",children:[e("input",{...s()}),e(ee,{...u(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:l.value})]})},{getContainerProps:c,getRadioProps:a}=je({defaultValue:"孫悟空"});return t(lo,{gap:"sm",...c(),children:[e(n,{...a({value:"孫悟空"})}),e(n,{...a({value:"ベジータ"})}),e(n,{...a({value:"フリーザ"})})]})},E=()=>{var u;const{control:n,handleSubmit:c,watch:a,formState:{errors:l}}=Be(),s=m=>console.log("submit:",m);return console.log("watch:",a()),t(Le,{as:"form",onSubmit:c(s),children:[e(N,{isInvalid:!!l.radio,label:"Who is your favorite character?",errorMessage:(u=l.radio)==null?void 0:u.message,children:e(Me,{name:"radio",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:m})=>t(v,{...m,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},j=()=>{var m;const n={radio:"孫悟空"},{control:c,handleSubmit:a,watch:l,formState:{errors:s}}=Be({defaultValues:n}),u=r=>console.log("submit:",r);return console.log("watch:",l()),t(Le,{as:"form",onSubmit:a(u),children:[e(N,{isInvalid:!!s.radio,label:"Who is your favorite character?",errorMessage:(m=s.radio)==null?void 0:m.message,children:e(Me,{name:"radio",control:c,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>t(v,{...r,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ne;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ne=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,re,le;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Radio size='sm'>孫悟空</Radio>
      <Radio size='md'>ベジータ</Radio>
      <Radio size='lg'>フリーザ</Radio>
    </Wrap>;
}`,...(le=(re=q.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var te,de,ce;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var se,ue,he;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Radio colorScheme='primary' defaultChecked>
        Primary
      </Radio>

      <Radio colorScheme='secondary' defaultChecked>
        Secondary
      </Radio>

      <Radio colorScheme='warning' defaultChecked>
        Warning
      </Radio>

      <Radio colorScheme='danger' defaultChecked>
        Danger
      </Radio>

      <Radio colorScheme='link' defaultChecked>
        Link
      </Radio>

      <Radio colorScheme='gray' defaultChecked>
        Gray
      </Radio>

      <Radio colorScheme='zinc' defaultChecked>
        Zinc
      </Radio>

      <Radio colorScheme='neutral' defaultChecked>
        Neutral
      </Radio>

      <Radio colorScheme='stone' defaultChecked>
        Stone
      </Radio>

      <Radio colorScheme='red' defaultChecked>
        Red
      </Radio>

      <Radio colorScheme='rose' defaultChecked>
        Rose
      </Radio>

      <Radio colorScheme='pink' defaultChecked>
        Pink
      </Radio>

      <Radio colorScheme='orange' defaultChecked>
        Orange
      </Radio>

      <Radio colorScheme='amber' defaultChecked>
        Amber
      </Radio>

      <Radio colorScheme='yellow' defaultChecked>
        Yellow
      </Radio>

      <Radio colorScheme='lime' defaultChecked>
        Lime
      </Radio>

      <Radio colorScheme='green' defaultChecked>
        Green
      </Radio>

      <Radio colorScheme='emerald' defaultChecked>
        Emerald
      </Radio>

      <Radio colorScheme='teal' defaultChecked>
        Teal
      </Radio>

      <Radio colorScheme='cyan' defaultChecked>
        Cyan
      </Radio>

      <Radio colorScheme='sky' defaultChecked>
        Sky
      </Radio>

      <Radio colorScheme='blue' defaultChecked>
        Blue
      </Radio>

      <Radio colorScheme='indigo' defaultChecked>
        Indigo
      </Radio>

      <Radio colorScheme='violet' defaultChecked>
        Violet
      </Radio>

      <Radio colorScheme='purple' defaultChecked>
        Purple
      </Radio>

      <Radio colorScheme='fuchsia' defaultChecked>
        Fuchsia
      </Radio>
    </Wrap>;
}`,...(he=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,fe,Re;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Radio isDisabled>All Notifications</Radio>
      <Radio isDisabled defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isDisabled>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <Radio defaultChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isDisabled label='Which notifications would you like to receive?'>
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Re=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:Re.source}}};var pe,ve,Ce;H.parameters={...H.parameters,docs:{...(pe=H.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <Radio isReadOnly>All Notifications</Radio>
      <Radio isReadOnly defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isReadOnly>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <Radio defaultChecked>All Notifications</Radio>
      </FormControl>

      <FormControl isReadOnly label='Which notifications would you like to receive?'>
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(Ce=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Se,ke,ge;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Radio isInvalid>All Notifications</Radio>
      <Radio isInvalid defaultChecked>
        All Notifications
      </Radio>

      <RadioGroup defaultValue='all'>
        <Radio value='all'>All Notifications</Radio>
        <Radio value='important' isInvalid>
          Important Notifications
        </Radio>
        <Radio value='service'>Service Notifications</Radio>
      </RadioGroup>

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <Radio>All Notifications</Radio>
      </FormControl>

      <FormControl isInvalid label='Which notifications would you like to receive?' errorMessage='This is required.'>
        <RadioGroup defaultValue='all'>
          <Radio value='all'>All Notifications</Radio>
          <Radio value='important'>Important Notifications</Radio>
          <Radio value='service'>Service Notifications</Radio>
        </RadioGroup>
      </FormControl>
    </>;
}`,...(ge=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:ge.source}}};var be,ye,Ne;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <RadioGroup defaultValue='孫悟空'>
        <Radio value='孫悟空'>孫悟空</Radio>
        <Radio value='ベジータ'>ベジータ</Radio>
        <Radio value='フリーザ'>フリーザ</Radio>
      </RadioGroup>

      <RadioGroup direction='row' defaultValue='孫悟空'>
        <Radio value='孫悟空'>孫悟空</Radio>
        <Radio value='ベジータ'>ベジータ</Radio>
        <Radio value='フリーザ'>フリーザ</Radio>
      </RadioGroup>
    </>;
}`,...(Ne=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Ie,Fe;_.parameters={..._.parameters,docs:{...(we=_.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('孫悟空');
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value='孫悟空'>孫悟空</Radio>
      <Radio value='ベジータ'>ベジータ</Radio>
      <Radio value='フリーザ'>フリーザ</Radio>
    </RadioGroup>;
}`,...(Fe=(Ie=_.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var Pe,De,Ve;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const CustomRadio: FC<any> = props => {
    const {
      getInputProps,
      getIconProps
    } = useRadio(props);
    return <Box as='label'>
        <input {...getInputProps()} />

        <Box {...getIconProps()} cursor='pointer' borderWidth='1px' py='xs' px='sm' rounded='md' _checked={{
        bg: 'blue.500',
        color: 'white',
        borderColor: 'blue.500'
      }}>
          {props.value}
        </Box>
      </Box>;
  };
  const {
    getContainerProps,
    getRadioProps
  } = useRadioGroup({
    defaultValue: '孫悟空'
  });
  return <HStack gap='sm' {...getContainerProps()}>
      <CustomRadio {...getRadioProps({
      value: '孫悟空'
    })} />
      <CustomRadio {...getRadioProps({
      value: 'ベジータ'
    })} />
      <CustomRadio {...getRadioProps({
      value: 'フリーザ'
    })} />
    </HStack>;
}`,...(Ve=(De=L.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var Ae,xe,Ge;E.parameters={...E.parameters,docs:{...(Ae=E.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.radio} label='Who is your favorite character?' errorMessage={errors.radio?.message}>
        <Controller name='radio' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value='孫悟空'>孫悟空</Radio>
              <Radio value='ベジータ'>ベジータ</Radio>
              <Radio value='フリーザ'>フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Ge=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:Ge.source}}};var We,qe,Oe;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  type Data = {
    radio: string;
  };
  const defaultValues: Data = {
    radio: '孫悟空'
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
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.radio} label='Who is your favorite character?' errorMessage={errors.radio?.message}>
        <Controller name='radio' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <RadioGroup {...field}>
              <Radio value='孫悟空'>孫悟空</Radio>
              <Radio value='ベジータ'>ベジータ</Radio>
              <Radio value='フリーザ'>フリーザ</Radio>
            </RadioGroup>} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Oe=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};const Go=["basic","withSize","withDefaultChecked","withColorScheme","isDisabled","isReadonly","isInvalid","group","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Go as __namedExportsOrder,W as basic,_ as customControl,L as customHook,xo as default,z as group,M as isDisabled,T as isInvalid,H as isReadonly,E as reactHookForm,j as reactHookFormWithDefaultValue,B as withColorScheme,O as withDefaultChecked,q as withSize};
//# sourceMappingURL=radio.stories-92b033ae.js.map
