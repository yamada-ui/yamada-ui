import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{u as ze,C as Pe}from"./index.esm-CEdvtQ_U.js";import{c as Le}from"./components-DwxTyLM4.js";import{u as Oe,f as _e,d as P}from"./form-control-CsCePsX1.js";import{B as z}from"./button-CP_V-DFs.js";import{f as Me}from"./forward-ref-D13m8o2p.js";import{u as He}from"./use-component-style-Bj6hwx_Q.js";import{a2 as Ve,K as qe,aa as A,c as Te,h as We,l as Ae,b as Ne,a as Ee}from"./factory-ZSnRp-09.js";import{I as u}from"./icon-button-MU7FiVwO.js";import{P as d}from"./plus-DHwj_NnO.js";import{L as m}from"./link-Q6TuNpax.js";import{W as H}from"./flex-ZeDiVseB.js";import{T as Ge}from"./text-Q2VnSl4h.js";import{H as Re,V as Xe}from"./stack-C-NTCosl.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-provider-B08WIPTu.js";import"./box-C9iD9jp7.js";import"./index-CReU6qRk.js";import"./use-checkbox-U_dzeJq7.js";import"./index-C676fJGf.js";import"./factory-g1ZPYqox.js";import"./proxy-Cmv22F1b.js";import"./index-_1kmLYlG.js";import"./index-BLmAVBUH.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./use-var-BqMKFNOM.js";import"./tooltip-rXJtZ5n9.js";import"./index-DX5Nxq0F.js";import"./index-DB9HLODl.js";import"./index-CP6OdolE.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./index-CIS69Ejq.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./slide-fade-CyNwX6Ij.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-BaE0cyT7.js";import"./index-1Z3RJR9I.js";import"./select-DPhgsqyB.js";import"./select-list-Dk68ypy9.js";import"./index-CGbpPqLk.js";import"./icon-D-mdHq7J.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-Bnw1OyhA.js";import"./loading-YSmVr9V5.js";import"./createLucideIcon-C_T9K6g-.js";const n=Me((o,r)=>{const[t,p]=He("FileButton",o);let{id:c,as:h,form:L,name:O,className:f,accept:i,children:l,multiple:_,resetRef:M,onChange:x,onClick:ye,...V}=Oe(p);const{onBlur:Ke,onFocus:Je,...q}=Ve(V,_e),{"aria-invalid":ve,disabled:g,readOnly:B,required:T}=q,F=s.useRef(null),W=s.useCallback(()=>{var a;g||B||(a=F.current)==null||a.click()},[g,B]),Ie=s.useCallback(a=>{const De=qe(a.currentTarget.files)?void 0:Array.from(a.currentTarget.files);x==null||x(De)},[x]),we=s.useCallback(()=>{F.current&&(F.current.value="")},[]);if(!A(l)){const a=h||z;l=e.jsx(a,{className:Te("ui-file-button",f),__isProcessSkip:!h,__styles:t,...V,onClick:We(ye,W),children:l})}return Ae(M,we),e.jsxs(e.Fragment,{children:[e.jsx(Ne.input,{id:c,ref:Ee(F,r),form:L,type:"file",name:O,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,accept:i,multiple:_,tabIndex:-1,onChange:Ie,...q}),A(l)?l({disabled:g,isDisabled:g,isInvalid:ve,isReadOnly:B,isRequired:T,readOnly:B,required:T,onClick:W}):l]})});n.displayName="FileButton";n.__ui__="FileButton";const Zn={component:n,title:"Components / Forms / FileButton"},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"})}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",accept:"image/png,image/jpeg",icon:e.jsx(d,{fontSize:"2xl"})}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(H,{gap:"md",children:Le.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{errorBorderColor:"orange.500",isInvalid:!0,children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isDisabled:!0}),e.jsx(n,{isDisabled:!0,children:({isDisabled:o,onClick:r})=>e.jsx(m,{cursor:o?"not-allowed":"pointer",opacity:o?.4:1,_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isDisabled:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isReadOnly:!0}),e.jsx(n,{isReadOnly:!0,children:({isReadOnly:o,onClick:r})=>e.jsx(m,{cursor:o?"default":"pointer",_hover:o?{textDecoration:"inherit"}:{textDecoration:"underline"},onClick:r,children:"Upload"})}),e.jsx(P,{helperMessage:"Please select a file to upload.",isReadOnly:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:u,"aria-label":"Upload file",icon:e.jsx(d,{fontSize:"2xl"}),isInvalid:!0}),e.jsx(P,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(n,{children:"Upload"})})]}),w=()=>{const[o,r]=s.useState(void 0),t=s.useRef(null),p=()=>{var c;r(void 0),(c=t.current)==null||c.call(t)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ge,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Re,{children:[e.jsx(n,{resetRef:t,onChange:r,children:"Upload"}),e.jsx(z,{onClick:p,children:"Reset"})]})]})},D=()=>{var f;const o=s.useRef(null),{control:r,formState:{errors:t},handleSubmit:p,setValue:c,watch:h}=ze(),L=()=>{var i;c("fileButton",null),(i=o.current)==null||i.call(o)},O=i=>console.log("submit:",i);return console.log("watch:",h()),e.jsxs(Xe,{as:"form",onSubmit:p(O),children:[e.jsx(P,{errorMessage:(f=t.fileButton)==null?void 0:f.message,isInvalid:!!t.fileButton,label:"Files",children:e.jsx(Pe,{name:"fileButton",control:r,render:({field:{ref:i,name:l,onBlur:_,onChange:M}})=>e.jsxs(Re,{children:[e.jsx(n,{ref:i,name:l,onBlur:_,onChange:M,resetRef:o,children:"Upload"}),e.jsx(z,{onClick:L,children:"Reset"})]}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var N,E,G;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(G=(E=S.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var X,K,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(K=j.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var Q,Y,Z;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" accept="image/png,image/jpeg" icon={<PlusIcon fontSize="2xl" />} />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,ne;C.parameters={...C.parameters,docs:{...($=C.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isDisabled />

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

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isReadOnly />

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
}`,...(xe=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ge,Be,Fe;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} aria-label="Upload file" icon={<PlusIcon fontSize="2xl" />} isInvalid />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Fe=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Se,je,be;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(be=(je=w.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ce,ke,Ue;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(Ue=(ke=D.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};const $n=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{$n as __namedExportsOrder,S as basic,Zn as default,y as isDisabled,I as isInvalid,v as isReadonly,D as reactHookForm,w as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};
