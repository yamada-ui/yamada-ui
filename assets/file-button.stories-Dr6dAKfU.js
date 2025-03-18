import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as i}from"./index-BwPxMuoB.js";import{u as Ie,C as Le}from"./index.esm-C038jXrr.js";import{c as Pe}from"./components-aqRY6gsQ.js";import{u as _e,f as De,d as L}from"./form-control-DgcE1-oN.js";import{B as I}from"./button-CqSjNDtY.js";import{f as Me}from"./forward-ref-Ukjd1cIW.js";import{u as He}from"./use-component-style-CpB_lyT3.js";import{a3 as Ve,L as qe,n as Te,b as N,a as We,ab as Ae,h as Ne,c as Ee}from"./factory-DbNU74ts.js";import{I as s}from"./icon-button-DA6sAAAm.js";import{P as c}from"./plus-CM6BpbA3.js";import{L as m}from"./link-bQU4jIIG.js";import{W as H}from"./flex-BYE4mzTi.js";import{T as Ge}from"./text-DKjBQKmK.js";import{H as ve,V as Xe}from"./stack-BP8LKMVN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-ChqdwXGn.js";import"./box-CKfluZfz.js";import"./index-B2an25P7.js";import"./use-checkbox-kKextJMi.js";import"./index-CIcQHIlO.js";import"./factory-DGyI5Ya3.js";import"./proxy-BdCiNrpl.js";import"./index-DCT-NtcY.js";import"./index-CTo6a38W.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-DlbRU9j0.js";import"./tooltip-pq08ah7a.js";import"./index-ZCRYeFYt.js";import"./index-BjpHvtnu.js";import"./index-ZLyktLk6.js";import"./index-Boyzt1qu.js";import"./index-CssvN-gw.js";import"./index-buBh1kfV.js";import"./portal-DI5fdtXX.js";import"./index-CqCuFJOW.js";import"./index-Cpe7O4x1.js";import"./slide-fade-1DMcLXoE.js";import"./forward-ref-Cy2nAbAn.js";import"./utils-BynqOrQy.js";import"./scale-fade-IGHF7_62.js";import"./index-Blkmx9LM.js";import"./index-BOuDj3wB.js";import"./select-75zQ1EOU.js";import"./select-list-C6OImKfQ.js";import"./index-BEog8ndP.js";import"./icon-Dk5VwDTI.js";import"./popover-trigger-Ddfu3ZQC.js";import"./close-button-DMbJ1ePB.js";import"./use-ripple-HQjPVeUd.js";import"./index-MIa0NvBw.js";import"./index-qZwaV1-B.js";import"./index-tzU5ipaZ.js";import"./loading-BVFohscl.js";import"./createLucideIcon-D0BTS2fX.js";const n=Me((o,r)=>{const[t,u]=He("FileButton",o),{id:a,as:h,form:P,name:_,className:f,accept:l,children:d,multiple:D,resetRef:M,onChange:x,onClick:Re,...V}=_e(u),{onBlur:Je,onFocus:Ke,...q}=Ve(V,De),{"aria-invalid":T,disabled:g,readOnly:B,required:W}=q,F=i.useRef(null),A=i.useCallback(()=>{var p;g||B||(p=F.current)==null||p.click()},[g,B]),we=i.useCallback(p=>{const Oe=qe(p.currentTarget.files)?void 0:Array.from(p.currentTarget.files);x==null||x(Oe)},[x]),ze=i.useCallback(()=>{F.current&&(F.current.value="")},[]);return Te(M,ze),e.jsxs(e.Fragment,{children:[e.jsx(N.input,{id:a,ref:We(F,r),form:P,type:"file",name:_,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,accept:l,multiple:D,tabIndex:-1,onChange:we,...q}),Ae(d)?d({disabled:g,invalid:T,isDisabled:g,isInvalid:T,isReadOnly:B,isRequired:W,readOnly:B,required:W,onClick:A}):e.jsx(N.button,{as:h||I,className:Ee("ui-file-button",f),__isProcessSkip:!h,__styles:t,...V,onClick:Ne(Re,A),children:d})]})});n.displayName="FileButton";n.__ui__="FileButton";const $n={component:n,title:"Components / Forms / FileButton"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"})}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),multiple:!0}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(c,{fontSize:"2xl"})}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(H,{gap:"md",children:Pe.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),y=()=>e.jsx(n,{errorBorderColor:"orange.500",invalid:!0,children:"Upload"}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{disabled:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",disabled:!0,icon:e.jsx(c,{fontSize:"2xl"})}),e.jsx(n,{disabled:!0,children:({disabled:o,onClick:r})=>e.jsx(m,{cursor:o?"not-allowed":"pointer",opacity:o?.4:1,_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(L,{disabled:!0,helperMessage:"Please select a file to upload.",label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{readOnly:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),readOnly:!0}),e.jsx(n,{readOnly:!0,children:({readOnly:o,onClick:r})=>e.jsx(m,{cursor:o?"default":"pointer",_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(L,{helperMessage:"Please select a file to upload.",label:"Upload file",readOnly:!0,children:e.jsx(n,{children:"Upload"})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{invalid:!0,children:"Upload"}),e.jsx(n,{as:s,"aria-label":"Upload file",icon:e.jsx(c,{fontSize:"2xl"}),invalid:!0}),e.jsx(L,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),z=()=>{const[o,r]=i.useState(void 0),t=i.useRef(null),u=()=>{var a;r(void 0),(a=t.current)==null||a.call(t)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(ve,{children:[e.jsx(n,{resetRef:t,onChange:r,children:"Upload"}),e.jsx(I,{onClick:u,children:"Reset"})]})]})},O=()=>{var f;const o=i.useRef(null),{control:r,formState:{errors:t},handleSubmit:u,setValue:a,watch:h}=Ie(),P=()=>{var l;a("fileButton",null),(l=o.current)==null||l.call(o)},_=l=>console.log("submit:",l);return console.log("watch:",h()),e.jsxs(Xe,{as:"form",onSubmit:u(_),children:[e.jsx(L,{errorMessage:(f=t.fileButton)==null?void 0:f.message,invalid:!!t.fileButton,label:"Files",children:e.jsx(Le,{name:"fileButton",control:r,render:({field:{ref:l,name:d,onBlur:D,onChange:M}})=>e.jsxs(ve,{children:[e.jsx(n,{ref:l,name:d,onBlur:D,onChange:M,resetRef:o,children:"Upload"}),e.jsx(I,{onClick:P,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,G,X;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(X=(G=S.parameters)==null?void 0:G.docs)==null?void 0:X.source}}};var J,K,Q;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Q=(K=j.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...($=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,oe;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" size="xs">
        X Small
      </FileButton>

      <FileButton colorScheme="secondary" size="sm">
        Small
      </FileButton>

      <FileButton colorScheme="warning" size="md">
        Medium
      </FileButton>

      <FileButton colorScheme="danger" size="lg">
        Large
      </FileButton>
    </Wrap>;
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,te,le;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(le=(te=k.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ie,ae,se;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      <FileButton colorScheme="primary" variant="solid">
        Solid
      </FileButton>

      <FileButton colorScheme="secondary" variant="outline">
        Outline
      </FileButton>

      <FileButton colorScheme="warning" variant="ghost">
        Ghost
      </FileButton>

      <FileButton colorScheme="danger" variant="link">
        Link
      </FileButton>

      <FileButton variant="unstyled">Unstyle</FileButton>
    </Wrap>;
}`,...(se=(ae=U.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,ue,de;y.parameters={...y.parameters,docs:{...(ce=y.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" invalid>
      Upload
    </FileButton>;
}`,...(de=(ue=y.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;v.parameters={...v.parameters,docs:{...(pe=v.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <FileButton disabled>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" disabled icon={<PlusIcon fontSize="2xl" />} />

      <FileButton disabled>
        {({
        disabled,
        onClick
      }) => <Link cursor={disabled ? "not-allowed" : "pointer"} opacity={disabled ? 0.4 : 1} _hover={disabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl disabled helperMessage="Please select a file to upload." label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(he=(me=v.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,xe,ge;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileButton readOnly>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} readOnly />

      <FileButton readOnly>
        {({
        readOnly,
        onClick
      }) => <Link cursor={readOnly ? "default" : "pointer"} _hover={readOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl helperMessage="Please select a file to upload." label="Upload file" readOnly>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(ge=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var Be,Fe,Se;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <>
      <FileButton invalid>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} invalid />

      <FormControl errorMessage="File is required." invalid label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Se=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var je,be,Ce;z.parameters={...z.parameters,docs:{...(je=z.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {files?.length ?? 0}</Text>

      <HStack>
        <FileButton resetRef={resetRef} onChange={onChange}>
          Upload
        </FileButton>

        <Button onClick={onReset}>Reset</Button>
      </HStack>
    </>;
}`,...(Ce=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var ke,Ue,ye;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  interface Data {
    fileButton: File[] | null;
  }
  const resetRef = useRef<() => void>(null);
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    setValue,
    watch
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.fileButton?.message} invalid={!!errors.fileButton} label="Files">
        <Controller name="fileButton" control={control} render={({
        field: {
          ref,
          name,
          onBlur,
          onChange
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onBlur,
          onChange
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ye=(Ue=O.parameters)==null?void 0:Ue.docs)==null?void 0:ye.source}}};const eo=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","disabled","readOnly","invalid","useReset","reactHookForm"];export{eo as __namedExportsOrder,S as basic,$n as default,v as disabled,w as invalid,O as reactHookForm,R as readOnly,z as useReset,b as withAccept,y as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};
