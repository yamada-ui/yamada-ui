import{j as e,a as n,F as t}from"./jsx-runtime-TtYKBvr-.js";import{I as T,k as je,l as Ae}from"./fontawesome-icon-WgPsJE1p.js";import{r as z}from"./index-IybTgENJ.js";import{u as Ue,C as Pe}from"./index.esm-PVkfQNar.js";import{F as r,I as D,a as He,b as _e,c as qe}from"./input-element-kQNZ2Hjq.js";import{T as $e}from"./tag-5kDaAFLv.js";import{T as E}from"./text-PxnNsGqg.js";import{F as k}from"./form-control-6FCLsDVs.js";import{V as Je}from"./stack-xEEocqNB.js";import{B as Ke}from"./button-6NxM0NUu.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-BD8oeysU.js";import"./index-Lh081jSR.js";import"./theme-provider-vO4EDbtR.js";import"./factory-ZREtkjNV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./input-Ct7fzCRH.js";import"./use-component-style-AHnEqYWU.js";import"./index-82gY87KG.js";import"./index-830-SUsu.js";import"./index-AdjU39Kh.js";import"./use-ripple-bdnM8HM1.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-chCMEBtI.js";import"./loading-jbTC64Ts.js";import"./index-RVLpZDmo.js";import"./index-zqhOpJbI.js";const Rr={title:"Components / Forms / FileInput",component:r},u=()=>e(r,{placeholder:"basic"}),d=()=>e(r,{placeholder:"multiple",multiple:!0}),c=()=>e(r,{placeholder:"only png, jpeg",accept:"image/png,image/jpeg"}),p=()=>e(r,{placeholder:"multiple",multiple:!0,separator:";"}),m=()=>e(r,{placeholder:"multiple",multiple:!0,component:({value:{name:l}})=>e($e,{children:l})}),h=()=>e(r,{placeholder:"multiple",multiple:!0,format:({name:l})=>`${l.substring(0,l.indexOf("."))}`}),f=()=>e(r,{multiple:!0,children:l=>n(E,{children:["Selected: ",(l==null?void 0:l.length)??0]})}),I=()=>n(t,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),g=()=>n(t,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),F=()=>n(t,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),v=()=>n(t,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isDisabled:!0,label:"Upload file",children:e(r,{type:"email",placeholder:"your file"})})]}),y=()=>n(t,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isReadOnly:!0,label:"Upload file",children:e(r,{type:"email",placeholder:"your file"})})]}),b=()=>n(t,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(k,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e(r,{type:"email",placeholder:"your file"})})]}),S=()=>n(D,{children:[e(He,{children:e(T,{icon:je})}),e(r,{type:"tel",placeholder:"Please upload file"})]}),C=()=>n(D,{children:[e(_e,{children:e(T,{icon:je,color:"gray.500"})}),e(r,{type:"email",placeholder:"Please upload file"})]}),R=()=>{const[l,a]=z.useState(void 0),i=z.useRef(null),O=()=>{var s;a(void 0),(s=i.current)==null||s.call(i)};return n(t,{children:[n(E,{children:["files: ",(l==null?void 0:l.length)??0]}),n(D,{children:[e(r,{multiple:!0,value:l,onChange:a,resetRef:i}),l!=null&&l.length?e(qe,{isClick:!0,onClick:O,children:e(T,{icon:Ae,color:"gray.500"})}):null]})]})},w=()=>{const[l,a]=z.useState(void 0);return n(t,{children:[n(E,{children:["files: ",l==null?void 0:l.length]}),e(r,{value:l,onChange:a})]})},x=()=>{var G;const l=z.useRef(null),{control:a,handleSubmit:i,watch:O,setValue:s,formState:{errors:B}}=Ue(),Le=()=>{var o;s("fileInput",void 0),(o=l.current)==null||o.call(l)},Me=o=>console.log("submit:",o);return console.log("watch:",O()),n(Je,{as:"form",onSubmit:i(Me),children:[e(k,{isInvalid:!!B.fileInput,label:"Files",errorMessage:(G=B.fileInput)==null?void 0:G.message,children:e(Pe,{name:"fileInput",control:a,rules:{required:{value:!0,message:"This is required."}},render:({field:o})=>{var V;return n(D,{children:[e(r,{multiple:!0,...o,resetRef:l}),(V=o.value)!=null&&V.length?e(qe,{isClick:!0,onClick:Le,children:e(T,{icon:Ae,color:"gray.500"})}):null]})}})}),e(Ke,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var j,A,q;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(q=(A=u.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,M,U;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple />;
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var P,H,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <FileInput placeholder="only png, jpeg" accept="image/png,image/jpeg" />;
}`,...(_=(H=c.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var $,J,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple separator=";" />;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,Q,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} />;
}`,...(W=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple format={({
    name
  }) => \`\${name.substring(0, name.indexOf("."))}\`} />;
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,le;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(le=(re=f.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,te,oe;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="extra small size" size="xs" />
      <FileInput placeholder="small size" size="sm" />
      <FileInput placeholder="medium size" size="md" />
      <FileInput placeholder="large size" size="lg" />
    </>;
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ae,ie,se;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(se=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ue,de,ce;F.parameters={...F.parameters,docs:{...(ue=F.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isDisabled variant="outline" placeholder="outline" />
      <FileInput isDisabled variant="filled" placeholder="filled" />
      <FileInput isDisabled variant="flushed" placeholder="flushed" />
      <FileInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,Ie,ge;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isReadOnly variant="outline" placeholder="outline" />
      <FileInput isReadOnly variant="filled" placeholder="filled" />
      <FileInput isReadOnly variant="flushed" placeholder="flushed" />
      <FileInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ge=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var Fe,ve,ye;b.parameters={...b.parameters,docs:{...(Fe=b.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isInvalid variant="outline" placeholder="outline" />
      <FileInput isInvalid variant="filled" placeholder="filled" />
      <FileInput isInvalid variant="flushed" placeholder="flushed" />
      <FileInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ye=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var be,Se,Ce;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <Icon icon={faFile} />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ce=(Se=S.parameters)==null?void 0:Se.docs)==null?void 0:Ce.source}}};var Re,we,xe;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <Icon icon={faFile} color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(xe=(we=C.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ze,Te,De;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(De=(Te=R.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var ke,Oe,Ee;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Ee=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Ee.source}}};var Be,Ge,Ve;x.parameters={...x.parameters,docs:{...(Be=x.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Ve=(Ge=x.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.source}}};const wr=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{wr as __namedExportsOrder,u as basic,w as customControl,Rr as default,v as isDisabled,b as isInvalid,y as isReadonly,x as reactHookForm,S as useAddon,C as useElement,R as useReset,c as withAccept,F as withBorderColor,f as withChildren,h as withFormat,d as withMultiple,p as withSeparator,I as withSize,m as withTag,g as withVariant};
