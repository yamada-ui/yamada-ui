import{a as e,j as n,F as t}from"./jsx-runtime-b08f8875.js";import{I as T,e as je,g as Ae}from"./fontawesome-icon-be87301f.js";import{r as z}from"./index-8ee6c85d.js";import{u as Ue,C as Pe}from"./index.esm-3dbb7ee1.js";import{F as r,I as D,a as He,c as _e,d as qe}from"./input-element-844f5a37.js";import{T as $e}from"./tag-3bb010aa.js";import{T as E}from"./text-50bfeca2.js";import{F as k}from"./form-control-9bc84439.js";import{V as Je}from"./stack-f811b10a.js";import{B as Ke}from"./button-3d1799ed.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-1c0bf186.js";import"./index-6cdd3cb8.js";import"./theme-provider-1097130b.js";import"./factory-ab7c3580.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./input-9a625903.js";import"./use-component-style-07e84389.js";import"./index-7c833fdd.js";import"./index-b013f003.js";import"./index-a3b565a7.js";import"./loading-0bce3a59.js";import"./index-2cfd973b.js";import"./index-a69af9f5.js";const yr={title:"Components / Forms / FileInput",component:r},u=()=>e(r,{placeholder:"basic"}),c=()=>e(r,{placeholder:"multiple",multiple:!0}),p=()=>e(r,{placeholder:"only png, jpeg",accept:"image/png,image/jpeg"}),d=()=>e(r,{placeholder:"multiple",multiple:!0,separator:";"}),m=()=>e(r,{placeholder:"multiple",multiple:!0,component:({value:{name:l}})=>e($e,{children:l})}),h=()=>e(r,{placeholder:"multiple",multiple:!0,format:({name:l})=>`${l.substring(0,l.indexOf("."))}`}),f=()=>e(r,{multiple:!0,children:l=>n(E,{children:["Selected: ",(l==null?void 0:l.length)??0]})}),I=()=>n(t,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),g=()=>n(t,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),F=()=>n(t,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),v=()=>n(t,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isDisabled:!0,label:"Upload file",children:e(r,{type:"email",placeholder:"your file"})})]}),y=()=>n(t,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isReadOnly:!0,label:"Upload file",children:e(r,{type:"email",placeholder:"your file"})})]}),b=()=>n(t,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e(r,{type:"email",placeholder:"your file"})})]}),S=()=>n(D,{children:[e(He,{children:e(T,{icon:je})}),e(r,{type:"tel",placeholder:"Please upload file"})]}),C=()=>n(D,{children:[e(_e,{children:e(T,{icon:je,color:"gray.500"})}),e(r,{type:"email",placeholder:"Please upload file"})]}),R=()=>{const[l,o]=z.useState(null),i=z.useRef(null),O=()=>{var s;o(null),(s=i.current)==null||s.call(i)};return n(t,{children:[n(E,{children:["files: ",(l==null?void 0:l.length)??0]}),n(D,{children:[e(r,{multiple:!0,value:l,onChange:o,resetRef:i}),l!=null&&l.length?e(qe,{isClick:!0,onClick:O,children:e(T,{icon:Ae,color:"gray.500"})}):null]})]})},w=()=>{const[l,o]=z.useState(null);return n(t,{children:[n(E,{children:["files: ",l==null?void 0:l.length]}),e(r,{value:l,onChange:o})]})},x=()=>{var G;const l=z.useRef(null),{control:o,handleSubmit:i,watch:O,setValue:s,formState:{errors:B}}=Ue(),Le=()=>{var a;s("fileInput",null),(a=l.current)==null||a.call(l)},Me=a=>console.log("submit:",a);return console.log("watch:",O()),n(Je,{as:"form",onSubmit:i(Me),children:[e(k,{isInvalid:!!B.fileInput,label:"Files",errorMessage:(G=B.fileInput)==null?void 0:G.message,children:e(Pe,{name:"fileInput",control:o,rules:{required:{value:!0,message:"This is required."}},render:({field:a})=>{var V;return n(D,{children:[e(r,{multiple:!0,...a,resetRef:l}),(V=a.value)!=null&&V.length?e(qe,{isClick:!0,onClick:Le,children:e(T,{icon:Ae,color:"gray.500"})}):null]})}})}),e(Ke,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var j,A,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <FileInput placeholder='basic' />;
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,M,U;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <FileInput placeholder='multiple' multiple />;
}`,...(U=(M=c.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var P,H,_;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <FileInput placeholder='only png, jpeg' accept='image/png,image/jpeg' />;
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var $,J,K;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <FileInput placeholder='multiple' multiple separator=';' />;
}`,...(K=(J=d.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <FileInput placeholder='multiple' multiple component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} />;
}`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <FileInput placeholder='multiple' multiple format={({
    name
  }) => \`\${name.substring(0, name.indexOf('.'))}\`} />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,le;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,te,ae;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder='extra small size' size='xs' />
      <FileInput placeholder='small size' size='sm' />
      <FileInput placeholder='medium size' size='md' />
      <FileInput placeholder='large size' size='lg' />
    </>;
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,ie,se;g.parameters={...g.parameters,docs:{...(oe=g.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant='outline' placeholder='outline' />
      <FileInput variant='filled' placeholder='filled' />
      <FileInput variant='flushed' placeholder='flushed' />
      <FileInput variant='unstyled' placeholder='unstyled' />
    </>;
}`,...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ue,ce,pe;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder='default border color' />
      <FileInput focusBorderColor='green.500' placeholder='custom border color' />
      <FileInput isInvalid errorBorderColor='orange.500' placeholder='custom border color' />
    </>;
}`,...(pe=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var de,me,he;v.parameters={...v.parameters,docs:{...(de=v.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileInput isDisabled variant='outline' placeholder='outline' />
      <FileInput isDisabled variant='filled' placeholder='filled' />
      <FileInput isDisabled variant='flushed' placeholder='flushed' />
      <FileInput isDisabled variant='unstyled' placeholder='unstyled' />

      <FormControl isDisabled label='Upload file'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>;
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,Ie,ge;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isReadOnly variant='outline' placeholder='outline' />
      <FileInput isReadOnly variant='filled' placeholder='filled' />
      <FileInput isReadOnly variant='flushed' placeholder='flushed' />
      <FileInput isReadOnly variant='unstyled' placeholder='unstyled' />

      <FormControl isReadOnly label='Upload file'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>;
}`,...(ge=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var Fe,ve,ye;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isInvalid variant='outline' placeholder='outline' />
      <FileInput isInvalid variant='filled' placeholder='filled' />
      <FileInput isInvalid variant='flushed' placeholder='flushed' />
      <FileInput isInvalid variant='unstyled' placeholder='unstyled' />

      <FormControl isInvalid label='Upload file' errorMessage='File is required.'>
        <FileInput type='email' placeholder='your file' />
      </FormControl>
    </>;
}`,...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Se,Ce;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <Icon icon={faFile} />
      </InputLeftAddon>
      <FileInput type='tel' placeholder='Please upload file' />
    </InputGroup>;
}`,...(Ce=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Re,we,xe;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <Icon icon={faFile} color='gray.500' />
      </InputLeftElement>
      <FileInput type='email' placeholder='Please upload file' />
    </InputGroup>;
}`,...(xe=(we=C.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ze,Te,De;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | null>(null);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(null);
    resetRef.current?.();
  };
  return <>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup>
        <FileInput multiple value={value} onChange={onChange} resetRef={resetRef} />

        {value?.length ? <InputRightElement isClick onClick={onReset}>
            <Icon icon={faClose} color='gray.500' />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(De=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var ke,Oe,Ee;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | null>(null);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Ee=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source}}};var Be,Ge,Ve;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  type Data = {
    fileInput: File[] | null;
  };
  const resetRef = useRef<() => void>(null);
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onReset = () => {
    setValue('fileInput', null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileInput} label='Files' errorMessage={errors.fileInput?.message}>
        <Controller name='fileInput' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
        }
      }} render={({
        field
      }) => <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputRightElement isClick onClick={onReset}>
                  <Icon icon={faClose} color='gray.500' />
                </InputRightElement> : null}
            </InputGroup>} />
      </FormControl>

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Ve=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};const br=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{br as __namedExportsOrder,u as basic,w as customControl,yr as default,v as isDisabled,b as isInvalid,y as isReadonly,x as reactHookForm,S as useAddon,C as useElement,R as useReset,p as withAccept,F as withBorderColor,f as withChildren,h as withFormat,c as withMultiple,d as withSeparator,I as withSize,m as withTag,g as withVariant};
//# sourceMappingURL=file-input.stories-b4bfc383.js.map
