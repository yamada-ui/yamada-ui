import{j as e}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{r as s}from"./index-BwDkhjyp.js";import{u as De,C as ze}from"./index.esm-DfhtmKwW.js";import{c as Ie}from"./components-IexM--GU.js";import{u as Le,f as Oe,F as I}from"./form-control-CmHbIVTx.js";import{B as z}from"./button-rS3w-u9-.js";import{f as Pe}from"./forward-ref-BmTAT9U5.js";import{C as Me,X as _,c as He,h as Te,e as Ve,b as qe,a as We,T as _e}from"./factory-CJjTzqIw.js";import{L as p}from"./link-C7QuAPpb.js";import{I as u}from"./icon-button-D5mRfhc2.js";import{P as d}from"./plus-CBpB706n.js";import{W as V}from"./flex-DpdDxX4h.js";import{T as Ae}from"./text-rr6Q65aJ.js";import{H as Ue,V as Ee}from"./stack-DAUYtLCM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DS3HKw2q.js";import"./index-DeXfte5N.js";import"./_basePickBy-B_axDCjb.js";import"./iframe-ai-2Zayy.js";import"../sb-preview/runtime.js";import"./index-B8XB3FuZ.js";import"./component-o6OrGXrC.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-t_Q4obj2.js";import"./index-BBYQdQx5.js";import"./theme-provider-QhVoByOm.js";import"./environment-provider-ChTqlOMC.js";import"./motion-Ceh1Zhyk.js";import"./loading-provider-CZSQS1oy.js";import"./index-C0N86Ahx.js";import"./Combination--D52Dw1Q.js";import"./loading-BQdsdx3B.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./use-component-style-BHPJug4L.js";import"./motion-B0bI6Xcj.js";import"./index-CSNxn7VS.js";import"./container-portal-CH8_15h1.js";import"./notice-BVeSRnXU.js";import"./alert-BkGI-yA3.js";import"./close-button-DgNeJdEj.js";import"./use-ripple-wDY3RbRD.js";import"./container-8CVTVcoK.js";import"./box-D9DbeuYV.js";import"./checkbox-CknF-wiK.js";import"./index-DtgtGtD-.js";import"./index-D8-nW8Om.js";import"./index-CYn1E4d3.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-B0NaL7kn.js";import"./index-0B4xF-cu.js";import"./index-CXrE4vub.js";import"./index-hT-y6TS8.js";import"./index-Br_odY0O.js";import"./index-DhPU70lj.js";import"./slide-fade-BeKQgcMH.js";import"./utils-BIOBGn56.js";import"./scale-fade-BtEYc4i1.js";import"./index-Dk1mP1up.js";import"./index-C5_X1M3g.js";import"./select-Dp0JpCeW.js";import"./option-Bz4GHctA.js";import"./index-Bwtna2_q.js";import"./popover-content-CDvGxZAU.js";import"./index-pi5p6VHu.js";import"./index-Du0-7Fls.js";import"./index-yOlLmrbe.js";import"./lucide-icon-DuYAgJii.js";const n=Pe(({className:o,resetRef:r,as:i,children:t,...c},m)=>{const{id:L,name:O,accept:h,multiple:l,form:P,"aria-readonly":M,onClick:H,onChange:x,...T}=Le(c),{disabled:f,readOnly:g,required:q,"aria-invalid":Re}=T,F=s.useRef(null),W=s.useCallback(()=>{var a;f||g||(a=F.current)==null||a.click()},[f,g]),ye=s.useCallback(a=>{const we=Me(a.currentTarget.files)?void 0:Array.from(a.currentTarget.files);x==null||x(we)},[x]),ve=s.useCallback(()=>{F.current&&(F.current.value="")},[]);if(!_(t)){const a=i||z;t=e.jsx(a,{className:He("ui-file-button",o),...T,onClick:Te(H,W),children:t})}return Ve(r,ve),e.jsxs(e.Fragment,{children:[e.jsx(qe.input,{ref:We(F,m),type:"file","aria-hidden":!0,tabIndex:-1,id:L,name:O,form:P,accept:h,multiple:l,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:ye,"aria-readonly":M,..._e(T,Oe)}),_(t)?t({onClick:W,disabled:f,readOnly:g,required:q,isDisabled:f,isReadOnly:g,isRequired:q,isInvalid:Re}):t]})}),co={title:"Components / Forms / FileButton",component:n},B=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),"aria-label":"Upload file"}),e.jsx(n,{children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),multiple:!0,"aria-label":"Upload file"}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(p,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(V,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),C=()=>e.jsx(V,{gap:"md",children:Ie.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),k=()=>e.jsxs(V,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),U=()=>e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isDisabled:!0,"aria-label":"Upload file"}),e.jsx(n,{isDisabled:!0,children:({onClick:o,isDisabled:r})=>e.jsx(p,{onClick:o,opacity:r?.4:1,cursor:r?"not-allowed":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(I,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isReadOnly:!0,"aria-label":"Upload file"}),e.jsx(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:r})=>e.jsx(p,{onClick:o,cursor:r?"default":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(I,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:u,icon:e.jsx(d,{fontSize:"2xl"}),isInvalid:!0,"aria-label":"Upload file"}),e.jsx(I,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(n,{children:"Upload"})})]}),w=()=>{const[o,r]=s.useState(void 0),i=s.useRef(null),t=()=>{var c;r(void 0),(c=i.current)==null||c.call(i)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Ue,{children:[e.jsx(n,{resetRef:i,onChange:r,children:"Upload"}),e.jsx(z,{onClick:t,children:"Reset"})]})]})},D=()=>{var h;const o=s.useRef(null),{control:r,handleSubmit:i,watch:t,setValue:c,formState:{errors:m}}=De(),L=()=>{var l;c("fileButton",null),(l=o.current)==null||l.call(o)},O=l=>console.log("submit:",l);return console.log("watch:",t()),e.jsxs(Ee,{as:"form",onSubmit:i(O),children:[e.jsx(I,{isInvalid:!!m.fileButton,label:"Files",errorMessage:(h=m.fileButton)==null?void 0:h.message,children:e.jsx(ze,{name:"fileButton",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:l,name:P,onChange:M,onBlur:H}})=>e.jsxs(Ue,{children:[e.jsx(n,{ref:l,name:P,onChange:M,onBlur:H,resetRef:o,children:"Upload"}),e.jsx(z,{onClick:L,children:"Reset"})]})})}),e.jsx(z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,E,X;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(X=(E=B.parameters)==null?void 0:E.docs)==null?void 0:X.source}}};var G,N,J;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(N=S.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,Y;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} accept="image/png,image/jpeg" aria-label="Upload file" />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ne,oe,re;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(re=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var te,ie,le;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(le=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ae,se,ce;U.parameters={...U.parameters,docs:{...(ae=U.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(ce=(se=U.parameters)==null?void 0:se.docs)==null?void 0:ce.source}}};var ue,de,pe;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,he,xe;y.parameters={...y.parameters,docs:{...(me=y.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(xe=(he=y.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var fe,ge,Fe;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Plus fontSize="2xl" />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Fe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:Fe.source}}};var Be,Se,je;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(je=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:je.source}}};var be,Ce,ke;D.parameters={...D.parameters,docs:{...(be=D.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  type Data = {
    fileButton: File[] | null;
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
}`,...(ke=(Ce=D.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};const uo=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{uo as __namedExportsOrder,B as basic,co as default,R as isDisabled,v as isInvalid,y as isReadonly,D as reactHookForm,w as useReset,j as withAccept,U as withBorderColor,C as withColorScheme,S as withMultiple,b as withSize,k as withVariant};
