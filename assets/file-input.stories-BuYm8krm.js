import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as C}from"./index-BwDkhjyp.js";import{u as qe,C as Le}from"./index.esm-CMZNHfZV.js";import{F as r,I as R,a as Me,b as Ue,c as Oe}from"./input-element-DFt19LLJ.js";import{F as Be}from"./file-Cjq8xvix.js";import{T as Pe}from"./tag-C4KS-Bsz.js";import{T}from"./text-B1bw_vjj.js";import{F as w}from"./form-control-qaT0mOOy.js";import{X as Ge}from"./x-BVsnaLsy.js";import{V as He}from"./stack-BylotlZw.js";import{B as Xe}from"./button-DkZfvcgr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-8JqQBj0s.js";import"./theme-provider-DgHPuWDh.js";import"./factory-R2Y4PRbz.js";import"./extends-CF3RwP-h.js";import"./forward-ref-BmTAT9U5.js";import"./input-DhSlFKQ4.js";import"./use-component-style-DhC_P_n8.js";import"./index-DsxzWwQ3.js";import"./lucide-icon-CzbNE7r-.js";import"./icon-Cag4izmS.js";import"./index-BgQAyYS-.js";import"./index-S8W3Ewfq.js";import"./use-ripple-07NCTLKG.js";import"./index-Ms_xn5rh.js";import"./motion-Bd6WkMzw.js";import"./motion-Dpi5adfX.js";import"./loading-CS9bmOQf.js";const jr={title:"Components / Forms / FileInput",component:r},o=()=>e.jsx(r,{placeholder:"basic"}),i=()=>e.jsx(r,{placeholder:"multiple",multiple:!0}),u=()=>e.jsx(r,{placeholder:"only png, jpeg",accept:"image/png,image/jpeg"}),d=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,separator:";"}),p=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,component:({value:{name:l}})=>e.jsx(Pe,{children:l})}),c=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,format:({name:l})=>`${l.substring(0,l.indexOf("."))}`}),m=()=>e.jsx(r,{multiple:!0,children:l=>e.jsxs(T,{children:["Selected: ",(l==null?void 0:l.length)??0]})}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(w,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(w,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(w,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),j=()=>e.jsxs(R,{children:[e.jsx(Me,{children:e.jsx(Be,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),v=()=>e.jsxs(R,{children:[e.jsx(Ue,{children:e.jsx(Be,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),y=()=>{const[l,t]=C.useState(void 0),s=C.useRef(null),z=()=>{var a;t(void 0),(a=s.current)==null||a.call(s)};return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:["files: ",(l==null?void 0:l.length)??0]}),e.jsxs(R,{children:[e.jsx(r,{multiple:!0,value:l,onChange:t,resetRef:s}),l!=null&&l.length?e.jsx(Oe,{isClick:!0,onClick:z,children:e.jsx(Ge,{color:"gray.500"})}):null]})]})},b=()=>{const[l,t]=C.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(T,{children:["files: ",l==null?void 0:l.length]}),e.jsx(r,{value:l,onChange:t})]})},S=()=>{var k;const l=C.useRef(null),{control:t,handleSubmit:s,watch:z,setValue:a,formState:{errors:D}}=qe(),Ve=()=>{var n;a("fileInput",void 0),(n=l.current)==null||n.call(l)},Ae=n=>console.log("submit:",n);return console.log("watch:",z()),e.jsxs(He,{as:"form",onSubmit:s(Ae),children:[e.jsx(w,{isInvalid:!!D.fileInput,label:"Files",errorMessage:(k=D.fileInput)==null?void 0:k.message,children:e.jsx(Le,{name:"fileInput",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:n})=>{var E;return e.jsxs(R,{children:[e.jsx(r,{multiple:!0,...n,resetRef:l}),(E=n.value)!=null&&E.length?e.jsx(Oe,{isClick:!0,onClick:Ve,children:e.jsx(Ge,{color:"gray.500"})}):null]})}})}),e.jsx(Xe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var O,B,G;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(G=(B=o.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var V,A,q;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple />;
}`,...(q=(A=i.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var L,M,U;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <FileInput placeholder="only png, jpeg" accept="image/png,image/jpeg" />;
}`,...(U=(M=u.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var P,H,X;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple separator=";" />;
}`,...(X=(H=d.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var _,$,J;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} />;
}`,...(J=($=p.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var K,N,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple format={({
    name
  }) => \`\${name.substring(0, name.indexOf("."))}\`} />;
}`,...(Q=(N=c.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};var W,Y,Z;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,le;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="extra small size" size="xs" />
      <FileInput placeholder="small size" size="sm" />
      <FileInput placeholder="medium size" size="md" />
      <FileInput placeholder="large size" size="lg" />
    </>;
}`,...(le=(re=h.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ne,te,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,oe,ie;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(ie=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,de,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <FileInput isDisabled variant="outline" placeholder="outline" />
      <FileInput isDisabled variant="filled" placeholder="filled" />
      <FileInput isDisabled variant="flushed" placeholder="flushed" />
      <FileInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,he;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <FileInput isReadOnly variant="outline" placeholder="outline" />
      <FileInput isReadOnly variant="filled" placeholder="filled" />
      <FileInput isReadOnly variant="flushed" placeholder="flushed" />
      <FileInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(he=(me=I.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,xe;F.parameters={...F.parameters,docs:{...(fe=F.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isInvalid variant="outline" placeholder="outline" />
      <FileInput isInvalid variant="filled" placeholder="filled" />
      <FileInput isInvalid variant="flushed" placeholder="flushed" />
      <FileInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(xe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ie,Fe,je;j.parameters={...j.parameters,docs:{...(Ie=j.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <File />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(je=(Fe=j.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var ve,ye,be;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <File color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(be=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Se,Ce,Re;y.parameters={...y.parameters,docs:{...(Se=y.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
            <X color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(Re=(Ce=y.parameters)==null?void 0:Ce.docs)==null?void 0:Re.source}}};var we,ze,Te;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Te=(ze=b.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var De,ke,Ee;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
                  <X color="gray.500" />
                </InputRightElement> : null}
            </InputGroup>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ee=(ke=S.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};const vr=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{vr as __namedExportsOrder,o as basic,b as customControl,jr as default,x as isDisabled,F as isInvalid,I as isReadonly,S as reactHookForm,j as useAddon,v as useElement,y as useReset,u as withAccept,g as withBorderColor,m as withChildren,c as withFormat,i as withMultiple,d as withSeparator,h as withSize,p as withTag,f as withVariant};
