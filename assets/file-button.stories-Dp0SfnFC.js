import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as p,a as m}from"./fontawesome-icon-D6ZryXKH.js";import{r as c}from"./index-CBqU2yxZ.js";import{u as Ie,C as we}from"./index.esm-CEuCMWHm.js";import{c as De}from"./components-D0auPjiy.js";import{u as Oe,f as Le,F as L}from"./form-control-DzLz1dOu.js";import{B as O}from"./button-ByzKvAA6.js";import{f as Pe}from"./forward-ref-DuAegr0M.js";import{D as Me,U as W,c as ze,B as He,h as Ve,d as qe,u as Te,a as We,R as _e}from"./factory-HTeyK_fA.js";import{L as f}from"./link-CQXI5JpN.js";import{I as h}from"./icon-button-C25xQlon.js";import{W as H}from"./flex-BWDrtgeb.js";import{T as Ae}from"./text-sgxCCRlS.js";import{H as Ue,V as Ee}from"./stack-DoT5LYu9.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-B1_QQpZG.js";import"./index-dkYwPDS2.js";import"./theme-provider-DvYDGHdP.js";import"./index-BRIizmwy.js";import"./index-BWEOj2cQ.js";import"./_basePickBy-Ce0JGe9z.js";import"./iframe-RLAL46IO.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-BtM5VmRH.js";import"./mapValues-SH5BukUW.js";import"./isPlainObject-BuOqb7Pk.js";import"./index-DrFu-skq.js";import"./ui-provider-uCX0VjQR.js";import"./index-DAq9QMov.js";import"./environment-provider-d2aKwQWw.js";import"./motion-JgkBPv6g.js";import"./loading-provider-CizUmNU_.js";import"./index-B0FPZzFH.js";import"./Combination-DlzjZhkT.js";import"./loading-DnyjtoRI.js";import"./use-component-style-CaxTiwrP.js";import"./motion-DzQfhwIS.js";import"./index-_tcQm2Fk.js";import"./container-portal-CXToMjiT.js";import"./notice-BZoviSZm.js";import"./alert-B-zE3qzJ.js";import"./close-button-CsU1qDnP.js";import"./use-ripple-C7PrLSTl.js";import"./container-DCsdu_m8.js";import"./box-BNFaYC6y.js";import"./index-08h5wHR4.js";import"./index-DRoJptwM.js";import"./index-CVU6I4PY.js";import"./event-imqIgfLG.js";import"./number-49BHn0Cl.js";import"./tooltip-CcLJ6ORU.js";import"./index-_rFdYV1q.js";import"./index-NNY8n33j.js";import"./index-CI2IYPpt.js";import"./index-Cv5NyirI.js";import"./slide-fade-Dwa26ik0.js";import"./utils-Cf-6jYhN.js";import"./scale-fade-DPj_1rnM.js";import"./index-D4YPUvP0.js";import"./index-CpvBRLJe.js";import"./select-DqS5OFQm.js";import"./option-DSs6ggHa.js";import"./index-D4PdZs2E.js";import"./popover-content-CjL3x1dA.js";import"./index-BBR8_Uz5.js";import"./index-rYLD436_.js";import"./index-AbGqtBFc.js";import"./index-B84wXCVI.js";const n=Pe(({className:o,resetRef:r,as:a,children:t,...u},g)=>{const{id:P,name:M,accept:x,multiple:l,form:z,...i}=Oe(u),{disabled:d,readOnly:B,required:V,"aria-invalid":ke}=i,F=c.useRef(null),q=c.useCallback(()=>{var s;d||B||(s=F.current)==null||s.click()},[d,B]),Re=c.useCallback(s=>{var T;const ye=Me(s.currentTarget.files)?void 0:Array.from(s.currentTarget.files);(T=i.onChange)==null||T.call(i,ye)},[i]),ve=c.useCallback(()=>{F.current&&(F.current.value="")},[]);if(!W(t)){const s=a||O;t=e.jsx(s,{className:ze("ui-file-button",o),...He(i,["onChange","aria-readonly"]),onClick:Ve(i.onClick,q),children:t})}return qe(r,ve),e.jsxs(e.Fragment,{children:[e.jsx(Te.input,{ref:We(F,g),type:"file","aria-hidden":!0,tabIndex:-1,id:P,name:M,form:z,accept:x,multiple:l,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:Re,..._e(i,Le)}),W(t)?t({onClick:q,disabled:d,readOnly:B,required:V,isDisabled:d,isReadOnly:B,isRequired:V,isInvalid:ke}):t]})}),so={title:"Components / Forms / FileButton",component:n},j=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),"aria-label":"Upload file"}),e.jsx(n,{children:({onClick:o})=>e.jsx(f,{onClick:o,children:"Upload"})})]}),S=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{multiple:!0,children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),multiple:!0,"aria-label":"Upload file"}),e.jsx(n,{multiple:!0,children:({onClick:o})=>e.jsx(f,{onClick:o,children:"Upload"})})]}),b=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{accept:"image/png,image/jpeg",children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),accept:"image/png,image/jpeg","aria-label":"Upload file"}),e.jsx(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e.jsx(f,{onClick:o,children:"Upload"})})]}),C=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e.jsx(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e.jsx(n,{colorScheme:"warning",size:"md",children:"Medium"}),e.jsx(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),U=()=>e.jsx(H,{gap:"md",children:De.map(o=>e.jsx(n,{colorScheme:o,children:o},o))}),k=()=>e.jsxs(H,{gap:"md",children:[e.jsx(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e.jsx(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e.jsx(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e.jsx(n,{colorScheme:"danger",variant:"link",children:"Link"}),e.jsx(n,{variant:"unstyled",children:"Unstyle"})]}),R=()=>e.jsx(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),v=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isDisabled:!0,children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),isDisabled:!0,"aria-label":"Upload file"}),e.jsx(n,{isDisabled:!0,children:({onClick:o,isDisabled:r})=>e.jsx(f,{onClick:o,opacity:r?.4:1,cursor:r?"not-allowed":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(L,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isReadOnly:!0,children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),isReadOnly:!0,"aria-label":"Upload file"}),e.jsx(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:r})=>e.jsx(f,{onClick:o,cursor:r?"default":"pointer",_hover:r?{textDecoration:"inherit"}:{textDecoration:"underline"},children:"Upload"})}),e.jsx(L,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e.jsx(n,{children:"Upload"})})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(n,{isInvalid:!0,children:"Upload"}),e.jsx(n,{as:h,icon:e.jsx(p,{icon:m}),isInvalid:!0,"aria-label":"Upload file"}),e.jsx(L,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(n,{children:"Upload"})})]}),w=()=>{const[o,r]=c.useState(void 0),a=c.useRef(null),t=()=>{var u;r(void 0),(u=a.current)==null||u.call(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(Ae,{children:["files: ",(o==null?void 0:o.length)??0]}),e.jsxs(Ue,{children:[e.jsx(n,{resetRef:a,onChange:r,children:"Upload"}),e.jsx(O,{onClick:t,children:"Reset"})]})]})},D=()=>{var x;const o=c.useRef(null),{control:r,handleSubmit:a,watch:t,setValue:u,formState:{errors:g}}=Ie(),P=()=>{var l;u("fileButton",null),(l=o.current)==null||l.call(o)},M=l=>console.log("submit:",l);return console.log("watch:",t()),e.jsxs(Ee,{as:"form",onSubmit:a(M),children:[e.jsx(L,{isInvalid:!!g.fileButton,label:"Files",errorMessage:(x=g.fileButton)==null?void 0:x.message,children:e.jsx(we,{name:"fileButton",control:r,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:l,name:z,onChange:i,onBlur:d}})=>e.jsxs(Ue,{children:[e.jsx(n,{ref:l,name:z,onChange:i,onBlur:d,resetRef:o,children:"Upload"}),e.jsx(O,{onClick:P,children:"Reset"})]})})}),e.jsx(O,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,A,E;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} aria-label="Upload file" />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(E=(A=j.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var G,N,X;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple aria-label="Upload file" />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(X=(N=S.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var J,K,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept="image/png,image/jpeg">Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} accept="image/png,image/jpeg" aria-label="Upload file" />

      <FileButton accept="image/png,image/jpeg">
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Q=(K=b.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,$;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
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
}`,...($=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ne,oe;U.parameters={...U.parameters,docs:{...(ee=U.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <FileButton key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </FileButton>)}
    </Wrap>;
}`,...(oe=(ne=U.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,te,ie;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ie=(te=k.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,le,se;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor="orange.500">
      Upload
    </FileButton>;
}`,...(se=(le=R.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};var ce,ue,de;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isDisabled aria-label="Upload file" />

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
}`,...(de=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,me,he;y.parameters={...y.parameters,docs:{...(pe=y.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isReadOnly aria-label="Upload file" />

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
}`,...(he=(me=y.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,xe;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid aria-label="Upload file" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(xe=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Be,Fe,je;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(je=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Se,be,Ce;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Ce=(be=D.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};const co=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{co as __namedExportsOrder,j as basic,so as default,v as isDisabled,I as isInvalid,y as isReadonly,D as reactHookForm,w as useReset,b as withAccept,R as withBorderColor,U as withColorScheme,S as withMultiple,C as withSize,k as withVariant};
