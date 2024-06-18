import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as R,k as Be,l as Ge}from"./icon-BQcQed63.js";import{r as C}from"./index-uCp2LrAq.js";import{u as Le,C as Me}from"./index.esm-TLwx9zN6.js";import{F as r,I as w,a as Ue,b as Pe,c as Ve}from"./input-element-BJDEzSSe.js";import{T as He}from"./tag-B91XyPzB.js";import{T as D}from"./text-BOhk0htq.js";import{F as z}from"./form-control-CXekA9Vm.js";import{V as _e}from"./stack-DeQ5YYY4.js";import{B as $e}from"./button-C5HSAH_Q.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./theme-provider-CfMKAtcZ.js";import"./factory-Bf0a1C4O.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./forward-ref-Dr5Hqd9a.js";import"./input-D1y3qOBd.js";import"./use-component-style-C1oydc60.js";import"./index-Dc2KQwVC.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./use-ripple-BZmEDmbU.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-Bi86PhT5.js";import"./loading-CD9zg-8p.js";const jr={title:"Components / Forms / FileInput",component:r},s=()=>e.jsx(r,{placeholder:"basic"}),i=()=>e.jsx(r,{placeholder:"multiple",multiple:!0}),u=()=>e.jsx(r,{placeholder:"only png, jpeg",accept:"image/png,image/jpeg"}),d=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,separator:";"}),c=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,component:({value:{name:l}})=>e.jsx(He,{children:l})}),p=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,format:({name:l})=>`${l.substring(0,l.indexOf("."))}`}),m=()=>e.jsx(r,{multiple:!0,children:l=>e.jsxs(D,{children:["Selected: ",(l==null?void 0:l.length)??0]})}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(z,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(z,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(z,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),j=()=>e.jsxs(w,{children:[e.jsx(Ue,{children:e.jsx(R,{icon:Be})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),v=()=>e.jsxs(w,{children:[e.jsx(Pe,{children:e.jsx(R,{icon:Be,color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),y=()=>{const[l,t]=C.useState(void 0),o=C.useRef(null),T=()=>{var a;t(void 0),(a=o.current)==null||a.call(o)};return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["files: ",(l==null?void 0:l.length)??0]}),e.jsxs(w,{children:[e.jsx(r,{multiple:!0,value:l,onChange:t,resetRef:o}),l!=null&&l.length?e.jsx(Ve,{isClick:!0,onClick:T,children:e.jsx(R,{icon:Ge,color:"gray.500"})}):null]})]})},b=()=>{const[l,t]=C.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(D,{children:["files: ",l==null?void 0:l.length]}),e.jsx(r,{value:l,onChange:t})]})},S=()=>{var E;const l=C.useRef(null),{control:t,handleSubmit:o,watch:T,setValue:a,formState:{errors:k}}=Le(),Ae=()=>{var n;a("fileInput",void 0),(n=l.current)==null||n.call(l)},qe=n=>console.log("submit:",n);return console.log("watch:",T()),e.jsxs(_e,{as:"form",onSubmit:o(qe),children:[e.jsx(z,{isInvalid:!!k.fileInput,label:"Files",errorMessage:(E=k.fileInput)==null?void 0:E.message,children:e.jsx(Me,{name:"fileInput",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:n})=>{var O;return e.jsxs(w,{children:[e.jsx(r,{multiple:!0,...n,resetRef:l}),(O=n.value)!=null&&O.length?e.jsx(Ve,{isClick:!0,onClick:Ae,children:e.jsx(R,{icon:Ge,color:"gray.500"})}):null]})}})}),e.jsx($e,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var B,G,V;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(V=(G=s.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var A,q,L;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple />;
}`,...(L=(q=i.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var M,U,P;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <FileInput placeholder="only png, jpeg" accept="image/png,image/jpeg" />;
}`,...(P=(U=u.parameters)==null?void 0:U.docs)==null?void 0:P.source}}};var H,_,$;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple separator=";" />;
}`,...($=(_=d.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var J,K,N;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} />;
}`,...(N=(K=c.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var Q,W,X;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple format={({
    name
  }) => \`\${name.substring(0, name.indexOf("."))}\`} />;
}`,...(X=(W=p.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,ee;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,le,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="extra small size" size="xs" />
      <FileInput placeholder="small size" size="sm" />
      <FileInput placeholder="medium size" size="md" />
      <FileInput placeholder="large size" size="lg" />
    </>;
}`,...(ne=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var te,oe,ae;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(ae=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ie,ue;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(ue=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var de,ce,pe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileInput isDisabled variant="outline" placeholder="outline" />
      <FileInput isDisabled variant="filled" placeholder="filled" />
      <FileInput isDisabled variant="flushed" placeholder="flushed" />
      <FileInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(pe=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,he,fe;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <FileInput isReadOnly variant="outline" placeholder="outline" />
      <FileInput isReadOnly variant="filled" placeholder="filled" />
      <FileInput isReadOnly variant="flushed" placeholder="flushed" />
      <FileInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(fe=(he=x.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,Ie,xe;F.parameters={...F.parameters,docs:{...(ge=F.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileInput isInvalid variant="outline" placeholder="outline" />
      <FileInput isInvalid variant="filled" placeholder="filled" />
      <FileInput isInvalid variant="flushed" placeholder="flushed" />
      <FileInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(xe=(Ie=F.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var Fe,je,ve;j.parameters={...j.parameters,docs:{...(Fe=j.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <Icon icon={faFile} />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(ve=(je=j.parameters)==null?void 0:je.docs)==null?void 0:ve.source}}};var ye,be,Se;v.parameters={...v.parameters,docs:{...(ye=v.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <Icon icon={faFile} color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Se=(be=v.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var Ce,Re,we;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup>
        <FileInput multiple value={value} onChange={onChange} resetRef={resetRef} />

        {value?.length ? <InputRightElement isClick onClick={onReset}>
            <Icon icon={faClose} color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(we=(Re=y.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var ze,Te,De;b.parameters={...b.parameters,docs:{...(ze=b.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(De=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var ke,Ee,Oe;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  type Data = {
    fileInput: File[] | undefined;
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
    setValue("fileInput", undefined);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileInput} label="Files" errorMessage={errors.fileInput?.message}>
        <Controller name="fileInput" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field
      }) => <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputRightElement isClick onClick={onReset}>
                  <Icon icon={faClose} color="gray.500" />
                </InputRightElement> : null}
            </InputGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Oe=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};const vr=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{vr as __namedExportsOrder,s as basic,b as customControl,jr as default,I as isDisabled,F as isInvalid,x as isReadonly,S as reactHookForm,j as useAddon,v as useElement,y as useReset,u as withAccept,g as withBorderColor,m as withChildren,p as withFormat,i as withMultiple,d as withSeparator,h as withSize,c as withTag,f as withVariant};
