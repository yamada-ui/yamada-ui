import{j as e}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{u as Pe,C as Le}from"./index.esm-DXPXqkjk.js";import{c as Oe}from"./components-DBTQUZsw.js";import{u as Me,f as _e,F as P}from"./form-control-wNB_sh9j.js";import{B as I}from"./button-y-1VIkvD.js";import{f as Te}from"./forward-ref-BWI-Phbn.js";import{u as He}from"./use-component-style-DVO-iEPi.js";import{o as Ve}from"./theme-provider-CpaSpGZh.js";import{T as qe,C as We,Z as A,c as Ae,h as Ee,e as Ne,b as Ge,a as Xe}from"./factory-BjF4_dRw.js";import{L as m}from"./link-Ch_fROS_.js";import{I as u}from"./icon-button-BiKyozLB.js";import{P as d}from"./plus-ClNr2GHW.js";import{W as T}from"./flex-uUFGZwrf.js";import{T as Ze}from"./text-CpJ_XsDk.js";import{H as Re,V as Je}from"./stack-D4S-2JYT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BM_Ccg1d.js";import"./index-D7AEQMi7.js";import"./index-BneYb4WH.js";import"./ui-provider-Bsa2Wmgf.js";import"./index-MCBmKyEn.js";import"./motion-I-9Hg3gW.js";import"./loading-provider-BQd0Ifle.js";import"./index-DEs2iorh.js";import"./Combination-IUp2vs9T.js";import"./loading-XAGgHBOO.js";import"./icon-Dq9f0XvE.js";import"./index-CuJ7J3XN.js";import"./factory-COh1-7fC.js";import"./portal-BL3IvHN0.js";import"./index-Drt3gf4w.js";import"./notice-DwW4vMoU.js";import"./alert-A1AK0WXZ.js";import"./close-button-B01cMkKC.js";import"./use-ripple-tjN9Ka0j.js";import"./container-B3-Ah45D.js";import"./box-B5FcoOR4.js";import"./checkbox-vlO53CvA.js";import"./index-WsJcG9Vu.js";import"./index-BaNhddRa.js";import"./index-B4Eu0jvp.js";import"./event-wx3HPSqP.js";import"./number-CcP_arM8.js";import"./tooltip-BqI1L0G9.js";import"./index-DA9-26wc.js";import"./index-CWXuA_sE.js";import"./index-DroqNDDt.js";import"./index-D-jN3opM.js";import"./index-BxBWkPyk.js";import"./slide-fade-Deo3lGhM.js";import"./forward-ref-scR1bmHx.js";import"./utils-Dfmdu_89.js";import"./scale-fade-5IkQq2Gw.js";import"./index-Dy1RW4Oq.js";import"./index-BAaRSIWS.js";import"./select-CjM9KEIz.js";import"./select-list-BP77M_ft.js";import"./index-BjUO4q1E.js";import"./popover-content-qljWb4pK.js";import"./index-is6smmpS.js";import"./index-Du0-7Fls.js";import"./index-C53kKj3W.js";import"./lucide-icon-UlF0E1NS.js";const n=Te((o,r)=>{const[i,p]=He("FileButton",o),c=Ve(p);let{className:h,resetRef:L,as:f,children:t,id:l,name:O,accept:M,multiple:_,form:ye,onClick:ve,onChange:x,...H}=Me(c);const{onFocus:Ke,onBlur:Qe,...V}=qe(H,_e),{disabled:g,readOnly:F,required:q,"aria-invalid":we}=V,B=s.useRef(null),W=s.useCallback(()=>{var a;g||F||(a=B.current)==null||a.click()},[g,F]),De=s.useCallback(a=>{const Ie=We(a.currentTarget.files)?void 0:Array.from(a.currentTarget.files);x==null||x(Ie)},[x]),ze=s.useCallback(()=>{B.current&&(B.current.value="")},[]);if(!A(t)){const a=f||I;t=e.jsx(a,{className:Ae("ui-file-button",h),__isProcessSkip:!f,__styles:i,...H,onClick:Ee(ve,W),children:t})}return Ne(L,ze),e.jsxs(e.Fragment,{children:[e.jsx(Ge.input,{ref:Xe(B,r),type:"file","aria-hidden":!0,tabIndex:-1,id:l,name:O,form:ye,accept:M,multiple:_,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:De,...V}),A(t)?t({onClick:W,disabled:g,readOnly:F,required:q,isDisabled:g,isReadOnly:F,isRequired:q,isInvalid:we}):t]})}),co={title:"Components / Forms / FileButton",component:n},S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),"aria-label":"Upload file"}),e.jsx(n,{children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0,"aria-label":"Upload file"}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(m,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(T,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),k=()=>e.jsx(T,{gap:"md",children:Oe.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),U=()=>e.jsxs(T,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isDisabled:!0,"aria-label":"Upload file"}),e.jsx(n,{isDisabled:!0,children:({onClick:o,isDisabled:r})=>e.jsx(m,{onClick:o,opacity:r?.4:1,cursor:r?"not-allowed":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(P,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isReadOnly:!0,"aria-label":"Upload file"}),e.jsx(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:r})=>e.jsx(m,{onClick:o,cursor:r?"default":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(P,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isInvalid:!0,"aria-label":"Upload file"}),e.jsx(P,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(n,{children:"Upload"})})]}),D=()=>{const[o,r]=s.useState(void 0),i=s.useRef(null),p=()=>{var c;r(void 0),(c=i.current)==null||c.call(i)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ze,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Re,{children:[e.jsx(n,{resetRef:i,onChange:r,children:"Upload"}),e.jsx(I,{onClick:p,children:"Reset"})]})]})},z=()=>{var t;const o=s.useRef(null),{control:r,handleSubmit:i,watch:p,setValue:c,formState:{errors:h}}=Pe(),L=()=>{var l;c("fileButton",null),(l=o.current)==null||l.call(o)},f=l=>console.log("submit:",l);return console.log("watch:",p()),e.jsxs(Je,{as:"form",onSubmit:i(f),children:[e.jsx(P,{isInvalid:!!h.fileButton,label:"Files",errorMessage:(t=h.fileButton)==null?void 0:t.message,children:e.jsx(Le,{name:"fileButton",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:l,name:O,onChange:M,onBlur:_}})=>e.jsxs(Re,{children:[e.jsx(n,{ref:l,name:O,onChange:M,onBlur:_,resetRef:o,children:"Upload"}),e.jsx(I,{onClick:L,children:"Reset"})]})})}),e.jsx(I,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var E,N,G;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(G=(N=S.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var X,Z,J;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,Y;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} accept="image/png,image/jpeg" aria-label="Upload file" />

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
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(ue=(ce=R.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isDisabled aria-label="Upload file" />

      <FileButton isDisabled>
        {({
        onClick,
        isDisabled
      }) => <Link onClick={onClick} opacity={isDisabled ? 0.4 : 1} cursor={isDisabled ? "not-allowed" : "pointer"} _hover={isDisabled ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isDisabled label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(me=(pe=y.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,xe;v.parameters={...v.parameters,docs:{...(he=v.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isReadOnly aria-label="Upload file" />

      <FileButton isReadOnly>
        {({
        onClick,
        isReadOnly
      }) => <Link onClick={onClick} cursor={isReadOnly ? "default" : "pointer"} _hover={isReadOnly ? {
        textDecoration: "inherit"
      } : {
        textDecoration: "underline"
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isReadOnly label="Upload file" helperMessage="Please select a file to upload.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(xe=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var ge,Fe,Be;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
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
    handleSubmit,
    watch,
    setValue,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onReset = () => {
    setValue("fileButton", null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileButton} label="Files" errorMessage={errors.fileButton?.message}>
        <Controller name="fileButton" control={control} rules={{
        required: {
          value: true,
          message: "This is required."
        }
      }} render={({
        field: {
          ref,
          name,
          onChange,
          onBlur
        }
      }) => <HStack>
              <FileButton {...{
          ref,
          name,
          onChange,
          onBlur
        }} resetRef={resetRef}>
                Upload
              </FileButton>

              <Button onClick={onReset}>Reset</Button>
            </HStack>} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ue=(ke=z.parameters)==null?void 0:ke.docs)==null?void 0:Ue.source}}};const uo=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{uo as __namedExportsOrder,S as basic,co as default,y as isDisabled,w as isInvalid,v as isReadonly,z as reactHookForm,D as useReset,b as withAccept,R as withBorderColor,k as withColorScheme,j as withMultiple,C as withSize,U as withVariant};
