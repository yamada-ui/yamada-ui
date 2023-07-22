import{j as e,a as l,F as U}from"./jsx-runtime-276775ef.js";import{r as s}from"./index-1cdf6ce0.js";import{u as Be,C as Me}from"./index.esm-070aff36.js";import{t as Qe}from"./index-c680f243.js";import{u as Xe}from"./index-a2ab5035.js";import{a as He,u as Ze,f as x,F as N}from"./form-control-942fbad2.js";import{F as eo,W as Te}from"./flex-d10357f1.js";import{c as L,w as oo,o as ao,e as _e,y as ze,n as Z,I as no,d as A,z as G,v as S}from"./factory-75cc801c.js";import{a as io}from"./use-component-style-9ee8741d.js";import{o as ro,d as F}from"./theme-8f32df8a.js";import{H as to,V as je}from"./stack-960c90c9.js";import{B as Ee}from"./button-aae638aa.js";import{B as ee}from"./box-34b29ebb.js";import"./forward-ref-86842115.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";import"./loading-b1bbd31e.js";import"./index-71f4e961.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";const lo=n=>n&&Z(n)&&Z(n.target),Ke=({id:n,name:d,isNative:a,...t})=>{n=n??s.useId(),d=d??`radio-${n}`,t.onChange=L(t.onChange);const[c,u]=Xe({value:t.value,defaultValue:t.defaultValue,onChange:t.onChange}),m=s.useRef(null),r=s.useCallback(()=>{const h=m.current;if(!h)return;let f="input:not(:disabled):checked",p=h.querySelector(f);p?p.focus():(f="input:not(:disabled)",p=h.querySelector(f),p==null||p.focus())},[]),C=s.useCallback(h=>{const f=lo(h)?h.target.value:h;u(f)},[u]),w=s.useCallback((h={},f=null)=>({...h,ref:oo(f,m),role:"group"}),[]),k=s.useCallback((h={},f=null)=>({...h,ref:f,name:d,[a?"checked":"isChecked"]:c!=null?h.value===c:void 0,onChange:C}),[d,c,C,a]);return{name:d,value:c,setValue:u,onChange:C,onFocus:r,getContainerProps:w,getRadioProps:k}},[so,co]=ao({strict:!1,name:"RadioGroupContext"}),v=s.forwardRef(({className:n,size:d,variant:a,colorScheme:t,children:c,direction:u="column",gap:m,...r},C)=>{const{name:w,value:k,onChange:h,getContainerProps:f}=Ke(r),{isRequired:p,isReadOnly:I,isDisabled:b,isInvalid:R}=He(r);return e(so,{value:{size:d,variant:a,colorScheme:t,isRequired:p,isReadOnly:I,isDisabled:b,isInvalid:R,name:w,value:k,onChange:h},children:e(eo,{ref:C,className:_e("ui-radio-group",n),direction:u,gap:m??(u==="row"?"1rem":void 0),...f(ze(r,["onChange","isInvalid","isDisabled","isRequired","isReadOnly"])),children:c})})});v.displayName="RadioGroup";const Le=n=>{const{id:d,name:a,value:t,required:c,disabled:u,readOnly:m,...r}=Ze(n),[C,w]=s.useState(!1),[k,h]=s.useState(!1),[f,p]=s.useState(!1),[I,b]=s.useState(!1),[R,Y]=s.useState(!!n.defaultChecked),D=n.isChecked!==void 0,g=D?n.isChecked:R;s.useEffect(()=>Qe(w),[]);const V=L(i=>{var y;if(m||u){i.preventDefault();return}D||Y(i.target.checked),(y=r.onChange)==null||y.call(r,i)},[m,u,D]),$=L(r.onBlur),J=L(r.onFocus),Q=s.useCallback(({key:i})=>{i===" "&&b(!0)},[b]),X=s.useCallback(({key:i})=>{i===" "&&b(!1)},[b]),Ue=s.useCallback((i={},y=null)=>({...G(r,x),...i,ref:y,"data-checked":F(g)}),[g,r]),Ye=s.useCallback((i={},y=null)=>({...G(r,x),...i,ref:y,"data-active":F(I),"data-hover":F(f),"data-checked":F(g),"data-focus":F(k),"data-focus-visible":F(k&&C),"aria-hidden":!0,onMouseDown:S(i.onMouseDown,()=>b(!0)),onMouseUp:S(i.onMouseUp,()=>b(!1)),onMouseEnter:S(i.onMouseEnter,()=>p(!0)),onMouseLeave:S(i.onMouseLeave,()=>p(!1))}),[g,I,k,C,f,r]),$e=s.useCallback((i={},y=null)=>({...G(r,x),...i,ref:y,id:d,type:"radio",name:a,value:t,required:c,disabled:u,readOnly:m,checked:g,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:S(i.onChange,V),onBlur:S(i.onBlur,$,()=>h(!1)),onFocus:S(i.onFocus,J,()=>h(!0)),onKeyDown:S(i.onKeyDown,Q),onKeyUp:S(i.onKeyUp,X)}),[r,d,a,t,c,u,m,g,V,$,J,Q,X]),Je=s.useCallback((i={},y=null)=>({...G(r,x),props:i,ref:y,onMouseDown:S(i.onMouseDown,P=>{P.preventDefault(),P.stopPropagation()}),onTouchStart:S(i.onTouchStart,P=>{P.preventDefault(),P.stopPropagation()}),"data-checked":F(g)}),[g,r]);return{isFocusVisible:C,isFocused:k,isHovered:f,isActive:I,isChecked:g,getContainerProps:Ue,getInputProps:$e,getIconProps:Ye,getLabelProps:Je}},o=s.forwardRef((n,d)=>{const a=co(),t=He(n),[c,u]=io("Radio",{...a,...n}),{className:m,gap:r="0.5rem",isRequired:C=(a==null?void 0:a.isRequired)??t.isRequired,isReadOnly:w=(a==null?void 0:a.isReadOnly)??t.isReadOnly,isDisabled:k=(a==null?void 0:a.isDisabled)??t.isDisabled,isInvalid:h=(a==null?void 0:a.isInvalid)??t.isInvalid,iconProps:f,inputProps:p,labelProps:I,children:b,...R}=ro(u),{getContainerProps:Y,getInputProps:D,getIconProps:g,getLabelProps:V}=Le({...R,isRequired:C,isReadOnly:w,isDisabled:k,isInvalid:h,isChecked:a!=null&&a.value&&R.value?a.value===R.value:R.isChecked,onChange:a!=null&&a.onChange&&R.value?no(a.onChange,R.onChange):R.onChange});return l(A.label,{className:_e("ui-radio",m),...Y(),...ze(R,["id","name","value","defaultValue","defaultChecked","isChecked","onChange","onBlur","onFocus"]),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:r,...c.container},children:[e(A.input,{className:"ui-radio-input",...D(p,d)}),e(A.span,{className:"ui-radio-icon",...g(f),__css:{position:"relative",display:"inline-block",userSelect:"none",...c.icon}}),e(A.span,{className:"ui-radio-label",...V(I),__css:{...c.label},children:b})]})});o.displayName="Radio";const xo={title:"Components / Forms / Radio",component:o},W=()=>e(o,{children:"孫悟空"}),q=()=>l(Te,{gap:"md",children:[e(o,{size:"sm",children:"孫悟空"}),e(o,{size:"md",children:"ベジータ"}),e(o,{size:"lg",children:"フリーザ"})]}),O=()=>e(o,{defaultChecked:!0,children:"孫悟空"}),B=()=>l(Te,{gap:"md",children:[e(o,{colorScheme:"primary",defaultChecked:!0,children:"Primary"}),e(o,{colorScheme:"secondary",defaultChecked:!0,children:"Secondary"}),e(o,{colorScheme:"warning",defaultChecked:!0,children:"Warning"}),e(o,{colorScheme:"danger",defaultChecked:!0,children:"Danger"}),e(o,{colorScheme:"link",defaultChecked:!0,children:"Link"}),e(o,{colorScheme:"gray",defaultChecked:!0,children:"Gray"}),e(o,{colorScheme:"red",defaultChecked:!0,children:"Red"}),e(o,{colorScheme:"orange",defaultChecked:!0,children:"Orange"}),e(o,{colorScheme:"yellow",defaultChecked:!0,children:"Yellow"}),e(o,{colorScheme:"green",defaultChecked:!0,children:"Green"}),e(o,{colorScheme:"teal",defaultChecked:!0,children:"Teal"}),e(o,{colorScheme:"blue",defaultChecked:!0,children:"Blue"}),e(o,{colorScheme:"cyan",defaultChecked:!0,children:"Cyan"}),e(o,{colorScheme:"purple",defaultChecked:!0,children:"Purple"}),e(o,{colorScheme:"pink",defaultChecked:!0,children:"pink"})]}),M=()=>l(U,{children:[e(o,{isDisabled:!0,children:"All Notifications"}),e(o,{isDisabled:!0,defaultChecked:!0,children:"All Notifications"}),l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isDisabled:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isDisabled:!0,label:"Which notifications would you like to receive?",children:l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),H=()=>l(U,{children:[e(o,{isReadOnly:!0,children:"All Notifications"}),e(o,{isReadOnly:!0,defaultChecked:!0,children:"All Notifications"}),l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isReadOnly:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:e(o,{defaultChecked:!0,children:"All Notifications"})}),e(N,{isReadOnly:!0,label:"Which notifications would you like to receive?",children:l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),T=()=>l(U,{children:[e(o,{isInvalid:!0,children:"All Notifications"}),e(o,{isInvalid:!0,defaultChecked:!0,children:"All Notifications"}),l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",isInvalid:!0,children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:e(o,{children:"All Notifications"})}),e(N,{isInvalid:!0,label:"Which notifications would you like to receive?",errorMessage:"This is required.",children:l(v,{defaultValue:"all",children:[e(o,{value:"all",children:"All Notifications"}),e(o,{value:"important",children:"Important Notifications"}),e(o,{value:"service",children:"Service Notifications"})]})})]}),_=()=>l(U,{children:[l(v,{defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]}),l(v,{direction:"row",defaultValue:"孫悟空",children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})]}),z=()=>{const[n,d]=s.useState("孫悟空");return l(v,{value:n,onChange:a=>d(a),children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})},j=()=>{const n=t=>{const{getInputProps:c,getIconProps:u}=Le(t);return l(ee,{as:"label",children:[e("input",{...c()}),e(ee,{...u(),cursor:"pointer",borderWidth:"1px",py:"xs",px:"sm",rounded:"md",_checked:{bg:"blue.500",color:"white",borderColor:"blue.500"},children:t.value})]})},{getContainerProps:d,getRadioProps:a}=Ke({defaultValue:"孫悟空"});return l(to,{gap:"sm",...d(),children:[e(n,{...a({value:"孫悟空"})}),e(n,{...a({value:"ベジータ"})}),e(n,{...a({value:"フリーザ"})})]})},E=()=>{var u;const{control:n,handleSubmit:d,watch:a,formState:{errors:t}}=Be(),c=m=>console.log("submit:",m);return console.log("watch:",a()),l(je,{as:"form",onSubmit:d(c),children:[e(N,{isInvalid:!!t.radio,label:"Who is your favorite character?",errorMessage:(u=t.radio)==null?void 0:u.message,children:e(Me,{name:"radio",control:n,rules:{required:{value:!0,message:"This is required."}},render:({field:m})=>l(v,{...m,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},K=()=>{var m;const n={radio:"孫悟空"},{control:d,handleSubmit:a,watch:t,formState:{errors:c}}=Be({defaultValues:n}),u=r=>console.log("submit:",r);return console.log("watch:",t()),l(je,{as:"form",onSubmit:a(u),children:[e(N,{isInvalid:!!c.radio,label:"Who is your favorite character?",errorMessage:(m=c.radio)==null?void 0:m.message,children:e(Me,{name:"radio",control:d,rules:{required:{value:!0,message:"This is required."}},render:({field:r})=>l(v,{...r,children:[e(o,{value:"孫悟空",children:"孫悟空"}),e(o,{value:"ベジータ",children:"ベジータ"}),e(o,{value:"フリーザ",children:"フリーザ"})]})})}),e(Ee,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var oe,ae,ne;W.parameters={...W.parameters,docs:{...(oe=W.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Radio>孫悟空</Radio>;
}`,...(ne=(ae=W.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,re,te;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <Radio size='sm'>孫悟空</Radio>
      <Radio size='md'>ベジータ</Radio>
      <Radio size='lg'>フリーザ</Radio>
    </Wrap>;
}`,...(te=(re=q.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,se,de;O.parameters={...O.parameters,docs:{...(le=O.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Radio defaultChecked>孫悟空</Radio>;
}`,...(de=(se=O.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ce,ue,he;B.parameters={...B.parameters,docs:{...(ce=B.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
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

      <Radio colorScheme='red' defaultChecked>
        Red
      </Radio>

      <Radio colorScheme='orange' defaultChecked>
        Orange
      </Radio>

      <Radio colorScheme='yellow' defaultChecked>
        Yellow
      </Radio>

      <Radio colorScheme='green' defaultChecked>
        Green
      </Radio>

      <Radio colorScheme='teal' defaultChecked>
        Teal
      </Radio>

      <Radio colorScheme='blue' defaultChecked>
        Blue
      </Radio>

      <Radio colorScheme='cyan' defaultChecked>
        Cyan
      </Radio>

      <Radio colorScheme='purple' defaultChecked>
        Purple
      </Radio>

      <Radio colorScheme='pink' defaultChecked>
        pink
      </Radio>
    </Wrap>;
}`,...(he=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,fe,pe;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(pe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var Re,ve,Ce;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Ce=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var ge,Se,ke;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
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
}`,...(ke=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:ke.source}}};var be,ye,Ne;_.parameters={..._.parameters,docs:{...(be=_.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ne=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:Ne.source}}};var we,Ie,Fe;z.parameters={...z.parameters,docs:{...(we=z.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, setValue] = useState<string>('孫悟空');
  return <RadioGroup value={value} onChange={value => setValue(value)}>
      <Radio value='孫悟空'>孫悟空</Radio>
      <Radio value='ベジータ'>ベジータ</Radio>
      <Radio value='フリーザ'>フリーザ</Radio>
    </RadioGroup>;
}`,...(Fe=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:Fe.source}}};var De,Pe,Ve;j.parameters={...j.parameters,docs:{...(De=j.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.source}}};var xe,Ae,Ge;E.parameters={...E.parameters,docs:{...(xe=E.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var We,qe,Oe;K.parameters={...K.parameters,docs:{...(We=K.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Oe=(qe=K.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};const Ao=["basic","withSize","withDefaultChecked","withColorScheme","isDisabled","isReadonly","isInvalid","group","customControl","customHook","reactHookForm","reactHookFormWithDefaultValue"];export{Ao as __namedExportsOrder,W as basic,z as customControl,j as customHook,xo as default,_ as group,M as isDisabled,T as isInvalid,H as isReadonly,E as reactHookForm,K as reactHookFormWithDefaultValue,B as withColorScheme,O as withDefaultChecked,q as withSize};
//# sourceMappingURL=radio.stories-db1d707b.js.map
