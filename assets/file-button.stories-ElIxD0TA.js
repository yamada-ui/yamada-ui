import{j as e}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Pe,C as Le}from"./index.esm-BPKd4vtG.js";import{c as Oe}from"./components-Cw5H5a09.js";import{u as _e,f as Me,F as P}from"./form-control-Cr_hm2rR.js";import{B as I}from"./button-BtgxkHkM.js";import{f as He}from"./forward-ref-BWI-Phbn.js";import{u as Te}from"./use-component-style-Givb0biW.js";import{o as Ve}from"./theme-provider-B8NHi_rL.js";import{Z as qe,F as We,a3 as A,c as Ae,h as Ne,e as Ee,b as Ge,a as Xe}from"./factory-CBW6YcbY.js";import{I as u}from"./icon-button-X9qwghDn.js";import{P as d}from"./plus-JAgW-wCv.js";import{L as m}from"./link-C7FjXuvo.js";import{W as H}from"./flex-DUDUzRpg.js";import{T as Ze}from"./text-DSnzXlBX.js";import{H as Re,V as Je}from"./stack-BVZkmmtU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D7MGIgCi.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bvww1J3G.js";import"./index-33MD56qN.js";import"./motion-B7t0mTYZ.js";import"./loading-provider-Ds-i5NRY.js";import"./index-BhJ-TW00.js";import"./Combination-IUp2vs9T.js";import"./loading-DZQf4R8P.js";import"./icon-CQ7oKYSm.js";import"./use-var-BcRMoVLh.js";import"./index-CGy0U2a3.js";import"./portal-DCEThVLn.js";import"./index-CS4BWtGh.js";import"./factory-B6ZnNkK9.js";import"./notice-CImpiTIX.js";import"./alert-Dm48qGsv.js";import"./triangle-alert-C2tUJAbO.js";import"./lucide-icon-4Wt4_XDL.js";import"./close-button-C6-nxxOU.js";import"./use-ripple-BqSD0U-m.js";import"./container-Bb6n-9Nj.js";import"./box-BtRRJWAU.js";import"./checkbox-ClDyirdc.js";import"./index-_OjANVlL.js";import"./index-DAOPkzwd.js";import"./index-AiDWnf-T.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-Dn_xNEqu.js";import"./index-qHjnnOt4.js";import"./index-DbHNzxol.js";import"./index-B1KvLq6v.js";import"./index-ZFP3ngUa.js";import"./index-DP81e-8u.js";import"./slide-fade-BtzrfF3F.js";import"./forward-ref-scR1bmHx.js";import"./utils-CC31eNL0.js";import"./scale-fade-ChN5nit0.js";import"./index-BOsfR7XW.js";import"./index-L-hgD5dt.js";import"./select-BLWUescs.js";import"./select-list-Bfn9G0IQ.js";import"./index-BEwlKK2P.js";import"./popover-trigger-DqVaQlWy.js";import"./index-Du-PXOJx.js";import"./index-CoJrGj-T.js";import"./index-Cyo00D5l.js";const n=He((o,r)=>{const[t,p]=Te("FileButton",o),c=Ve(p);let{id:L,as:h,form:O,name:f,className:i,accept:_,children:l,multiple:M,resetRef:ye,onChange:x,onClick:ve,...T}=_e(c);const{onBlur:Ke,onFocus:Qe,...V}=qe(T,Me),{"aria-invalid":we,disabled:g,readOnly:F,required:q}=V,B=s.useRef(null),W=s.useCallback(()=>{var a;g||F||(a=B.current)==null||a.click()},[g,F]),De=s.useCallback(a=>{const Ie=We(a.currentTarget.files)?void 0:Array.from(a.currentTarget.files);x==null||x(Ie)},[x]),ze=s.useCallback(()=>{B.current&&(B.current.value="")},[]);if(!A(l)){const a=h||I;l=e.jsx(a,{className:Ae("ui-file-button",i),__isProcessSkip:!h,__styles:t,...T,onClick:Ne(ve,W),children:l})}return Ee(ye,ze),e.jsxs(e.Fragment,{children:[e.jsx(Ge.input,{id:L,ref:Xe(B,r),form:O,type:"file",name:f,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,accept:_,multiple:M,tabIndex:-1,onChange:De,...V}),A(l)?l({disabled:g,isDisabled:g,isInvalid:we,isReadOnly:F,isRequired:q,readOnly:F,required:q,onClick:W}):l]})});n.displayName="FileButton";n.__ui__="FileButton";const po={component:n,title:"Components / Forms / FileButton"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"})}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(d,{fontSize:"2xl"})}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(H,{gap:"md",children:Oe.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isDisabled:!0}),e.jsx(n,{isDisabled:!0,children:({isDisabled:o,onClick:r})=>e.jsx(m,{cursor:o?"not-allowed":"pointer",opacity:o?.4:1,_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isDisabled:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isReadOnly:!0}),e.jsx(n,{isReadOnly:!0,children:({isReadOnly:o,onClick:r})=>e.jsx(m,{cursor:o?"default":"pointer",_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isReadOnly:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isInvalid:!0}),e.jsx(P,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),D=()=>{const[o,r]=s.useState(void 0),t=s.useRef(null),p=()=>{var c;r(void 0),(c=t.current)==null||c.call(t)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ze,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Re,{children:[e.jsx(n,{resetRef:t,onChange:r,children:"Upload"}),e.jsx(I,{onClick:p,children:"Reset"})]})]})},z=()=>{var f;const o=s.useRef(null),{control:r,formState:{errors:t},handleSubmit:p,setValue:c,watch:L}=Pe(),h=()=>{var i;c("fileButton",null),(i=o.current)==null||i.call(o)},O=i=>console.log("submit:",i);return console.log("watch:",L()),e.jsxs(Je,{as:"form",onSubmit:p(O),children:[e.jsx(P,{errorMessage:(f=t.fileButton)==null?void 0:f.message,isInvalid:!!t.fileButton,label:"Files",children:e.jsx(Le,{name:"fileButton",control:r,render:({field:{ref:i,name:_,onBlur:l,onChange:M}})=>e.jsxs(Re,{children:[e.jsx(n,{ref:i,name:_,onBlur:l,onChange:M,resetRef:o,children:"Upload"}),e.jsx(I,{onClick:h,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var N,E,G;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<Plus fontSize="2xl" />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(G=(E=S.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var X,Z,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<Plus fontSize="2xl" />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<Plus fontSize="2xl" />} />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Y=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var $,ee,ne;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(ne=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;k.parameters={...k.parameters,docs:{...(oe=k.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(te=(re=k.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ie,le,ae;U.parameters={...U.parameters,docs:{...(ie=U.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ae=(le=U.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,ce,ue;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileButton errorBorderColor="orange.500" isInvalid>
      Upload
    </FileButton>;
}`,...(ue=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<Plus fontSize="2xl" />} isDisabled />

      <FileButton isDisabled>
        {({
        isDisabled,
        onClick
      }) => <Link cursor={isDisabled ? "not-allowed" : "pointer"} opacity={isDisabled ? 0.4 : 1} _hover={isDisabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl helperMessage="Please select a file to upload." isDisabled label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<Plus fontSize="2xl" />} isReadOnly />

      <FileButton isReadOnly>
        {({
        isReadOnly,
        onClick
      }) => <Link cursor={isReadOnly ? "default" : "pointer"} _hover={isReadOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }} onClick={onClick}>
            Upload
          </Link>}
      </FileButton>

      <FormControl helperMessage="Please select a file to upload." isReadOnly label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(xe=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ge,Fe,Be;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<Plus fontSize="2xl" />} isInvalid />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Be=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var Se,je,be;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(be=(je=D.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ce,ke,Ue;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.fileButton?.message} isInvalid={!!errors.fileButton} label="Files">
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
}`,...(Ue=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};const mo=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{mo as __namedExportsOrder,S as basic,po as default,y as isDisabled,w as isInvalid,v as isReadonly,z as reactHookForm,D as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};
