import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as s}from"./index-ClcD9ViR.js";import{u as hr,C as fr}from"./index.esm-CEdvtQ_U.js";import{u as gr}from"./index-Zd4KnGXX.js";import{u as xr}from"./index-B2Nxc2b_.js";import{c as Ir,f as jr,d as M}from"./form-control-C2QLAsqZ.js";import{f as Fr}from"./forward-ref-D13m8o2p.js";import{a as yr}from"./use-component-style-BGLOU3Ga.js";import{o as vr}from"./theme-provider-DMHFYkuw.js";import{Z as br,F as Cr,e as Sr,b as d,h as Rr,a as wr,c as kr,d as Tr}from"./factory-Cp1Ju9mN.js";import{I as _,a as zr,c as Dr,d as Ke}from"./input-group-DiyjHlyf.js";import{F as Qe}from"./file-DQRwz4RK.js";import{T as Er}from"./tag-DwYnYzUN.js";import{T as N}from"./text-CIX2g0cs.js";import{X as We}from"./x-cY8xpFbP.js";import{V as Or}from"./stack-oDGa6EY5.js";import{B as Pr}from"./button-vnBqyEiG.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-C2FBWOq2.js";import"./use-var-cHPN6Ir7.js";import"./icon-Ch8QFxk9.js";import"./createLucideIcon-DHJHrKis.js";import"./use-ripple-SSdhQaN8.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-CYGsRDnQ.js";import"./loading-DkRHwhPr.js";const Br=({name:n})=>n,r=Fr(({children:n,...u},a)=>{const[m,p]=yr("FileInput",u),{id:L,form:q,name:U,className:f,accept:o,component:c,defaultValue:Ye,format:X=Br,lineClamp:g=1,multiple:$e,placeholder:H,resetRef:er,separator:Z=",",value:rr,onChange:nr,onClick:lr,...tr}=Ir(vr(p)),[{"aria-readonly":ar,disabled:x,readOnly:h,...J},sr]=br(tr,jr),I=s.useRef(null),[l,j]=xr({defaultValue:Ye,value:rr,onChange:nr}),or=s.useCallback(()=>{var i;x||h||(i=I.current)==null||i.click()},[x,h]),ir=s.useCallback(i=>{let t=Cr(i.currentTarget.files)?void 0:Array.from(i.currentTarget.files);t!=null&&t.length||(t=void 0),j(t)},[j]),ur=s.useCallback(()=>{I.current&&(I.current.value=""),j(void 0)},[j]);Sr(er,ur);const cr=s.useMemo(()=>l!=null&&l.length?n?n(l):c?e.jsx(d.span,{lineClamp:g,children:l.map((i,t)=>{const F=c({index:t,value:i}),mr={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return F?s.cloneElement(F,{key:t,style:mr}):null})}):e.jsx(d.span,{lineClamp:g,children:l.map((i,t)=>{const F=l.length===t+1;return e.jsxs(d.span,{display:"inline-block",me:"0.25rem",children:[X(i,t),F?null:Z]},t)})}):e.jsx(d.span,{lineClamp:g,children:H}),[n,X,g,H,Z,c,l]),pr=gr({ref:a,...J,...sr,isDisabled:x||h,onClick:Rr(lr,or)}),dr={alignItems:"center",cursor:h?"auto":"pointer",display:"flex",...m.field};return e.jsxs(e.Fragment,{children:[e.jsx(d.input,{id:L,ref:wr(I,a),form:q,type:"file",name:U,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,"aria-readonly":ar,accept:o,disabled:x,multiple:$e,readOnly:h,tabIndex:-1,onChange:ir,...J}),e.jsx(d.div,{className:kr("ui-file-input",f),"data-placeholder":Tr(!(l!=null&&l.length)),py:l!=null&&l.length&&c?"0.125rem":void 0,__css:dr,...pr,children:cr})]})});r.displayName="FileInput";r.__ui__="FileInput";const cn={component:r,title:"Components / Forms / FileInput"},y=()=>e.jsx(r,{placeholder:"basic"}),v=()=>e.jsx(r,{multiple:!0,placeholder:"multiple"}),b=()=>e.jsx(r,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),C=()=>e.jsx(r,{multiple:!0,placeholder:"multiple",separator:";"}),S=()=>e.jsx(r,{component:({value:{name:n}})=>e.jsx(Er,{children:n}),multiple:!0,placeholder:"multiple"}),R=()=>e.jsx(r,{format:({name:n})=>n.substring(0,n.indexOf(".")),multiple:!0,placeholder:"multiple"}),w=()=>e.jsx(r,{multiple:!0,children:n=>e.jsxs(N,{children:["Selected: ",(n==null?void 0:n.length)??0]})}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(M,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(M,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(M,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),P=()=>e.jsxs(_,{children:[e.jsx(zr,{children:e.jsx(Qe,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),B=()=>e.jsxs(_,{children:[e.jsx(Dr,{children:e.jsx(Qe,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),V=()=>{const[n,u]=s.useState(void 0),a=s.useRef(null),m=()=>{var p;u(void 0),(p=a.current)==null||p.call(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(_,{children:[e.jsx(r,{multiple:!0,resetRef:a,value:n,onChange:u}),n!=null&&n.length?e.jsx(Ke,{isClickable:!0,onClick:m,children:e.jsx(We,{color:"gray.500"})}):null]})]})},A=()=>{const[n,u]=s.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:["files: ",n==null?void 0:n.length]}),e.jsx(r,{value:n,onChange:u})]})},G=()=>{var f;const n=s.useRef(null),{control:u,formState:{errors:a},handleSubmit:m,setValue:p,watch:L}=hr(),q=()=>{var o;p("fileInput",void 0),(o=n.current)==null||o.call(n)},U=o=>console.log("submit:",o);return console.log("watch:",L()),e.jsxs(Or,{as:"form",onSubmit:m(U),children:[e.jsx(M,{errorMessage:(f=a.fileInput)==null?void 0:f.message,isInvalid:!!a.fileInput,label:"Files",children:e.jsx(fr,{name:"fileInput",control:u,render:({field:o})=>{var c;return e.jsxs(_,{children:[e.jsx(r,{multiple:!0,...o,resetRef:n}),(c=o.value)!=null&&c.length?e.jsx(Ke,{isClickable:!0,onClick:q,children:e.jsx(We,{color:"gray.500"})}):null]})},rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Pr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var K,Q,W;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,$,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,le;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...(le=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,ae,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...(se=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var oe,ie,ue;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} multiple placeholder="multiple" />;
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,pe,de;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...(de=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:de.source}}};var me,he,fe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(fe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,xe,Ie;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileInput size="xs" placeholder="extra small size" />
      <FileInput size="sm" placeholder="small size" />
      <FileInput size="md" placeholder="medium size" />
      <FileInput size="lg" placeholder="large size" />
    </>;
}`,...(Ie=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var je,Fe,ye;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(ye=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var ve,be,Ce;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(Ce=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Se,Re,we;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isDisabled placeholder="outline" />
      <FileInput variant="filled" isDisabled placeholder="filled" />
      <FileInput variant="flushed" isDisabled placeholder="flushed" />
      <FileInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(we=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var ke,Te,ze;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isReadOnly placeholder="outline" />
      <FileInput variant="filled" isReadOnly placeholder="filled" />
      <FileInput variant="flushed" isReadOnly placeholder="flushed" />
      <FileInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ze=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var De,Ee,Oe;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isInvalid placeholder="outline" />
      <FileInput variant="filled" isInvalid placeholder="filled" />
      <FileInput variant="flushed" isInvalid placeholder="flushed" />
      <FileInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Oe=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:Oe.source}}};var Pe,Be,Ve;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <FileIcon />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ve=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ae,Ge,Me;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <FileIcon color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Me=(Ge=B.parameters)==null?void 0:Ge.docs)==null?void 0:Me.source}}};var _e,Le,qe;V.parameters={...V.parameters,docs:{...(_e=V.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(undefined);
    resetRef.current?.();
  };
  return <>
      <Text>files: {value?.length ?? 0}</Text>

      <InputGroup>
        <FileInput multiple resetRef={resetRef} value={value} onChange={onChange} />

        {value?.length ? <InputRightElement isClickable onClick={onReset}>
            <XIcon color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(qe=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ue,Ne,Xe;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Xe=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Xe.source}}};var He,Ze,Je;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  interface Data {
    fileInput: File[] | undefined;
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
    setValue("fileInput", undefined);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.fileInput?.message} isInvalid={!!errors.fileInput} label="Files">
        <Controller name="fileInput" control={control} render={({
        field
      }) => <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputRightElement isClickable onClick={onReset}>
                  <XIcon color="gray.500" />
                </InputRightElement> : null}
            </InputGroup>} rules={{
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
}`,...(Je=(Ze=G.parameters)==null?void 0:Ze.docs)==null?void 0:Je.source}}};const pn=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{pn as __namedExportsOrder,y as basic,A as customControl,cn as default,D as isDisabled,O as isInvalid,E as isReadonly,G as reactHookForm,P as useAddon,B as useElement,V as useReset,b as withAccept,z as withBorderColor,w as withChildren,R as withFormat,v as withMultiple,C as withSeparator,k as withSize,S as withTag,T as withVariant};