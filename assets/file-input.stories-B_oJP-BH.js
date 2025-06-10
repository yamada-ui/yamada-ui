import{j as e}from"./jsx-runtime-DztICxWZ.js";import{r as o}from"./index-Bv9Y92EF.js";import{u as hr,C as fr}from"./index.esm-DdgAP9ly.js";import{u as gr}from"./index-BdmKGyZV.js";import{u as xr}from"./index-D3uVnNfI.js";import{u as jr,f as Ir,d as L}from"./form-control-C8eO6U25.js";import{f as Fr}from"./forward-ref-DH6f5tnY.js";import{a as yr}from"./use-component-style-DHLtMqa5.js";import{o as vr}from"./theme-provider-DsbwOWxu.js";import{M as br,L as Cr,n as Sr,b as p,h as Rr,a as wr,d as kr,c as Tr}from"./factory-7Z88KRtK.js";import{I as _,a as zr,c as Or,d as Qe}from"./input-group-ovBX3ufw.js";import{F as We}from"./file-80Q4dKEY.js";import{T as Er}from"./tag-CgF6Q1qr.js";import{T as X}from"./text-KN7rBBtq.js";import{X as Ye}from"./x-B-XJ8GmX.js";import{V as Pr}from"./stack-DL8tKm2J.js";import{B as Br}from"./button-nZ2ZqBRb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BhIdR6KT.js";import"./use-var-Bz9rJ8_M.js";import"./icon-DKuqv-9Z.js";import"./createLucideIcon-Bq8XVWwL.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";const Vr=({name:n})=>n,r=Fr(({children:n,...u},a)=>{const[m,d]=yr("FileInput",u),{id:q,form:U,name:N,className:f,accept:s,component:c,defaultValue:Ze,format:D=Vr,lineClamp:g=1,multiple:$e,placeholder:H,resetRef:er,separator:J=",",value:rr,onChange:nr,onClick:lr,...tr}=jr(vr(d)),[{"aria-readonly":ar,disabled:x,readOnly:h,...K},or]=br(tr,Ir),j=o.useRef(null),[l,I]=xr({defaultValue:Ze,value:rr,onChange:nr}),sr=o.useCallback(()=>{var i;x||h||(i=j.current)==null||i.click()},[x,h]),ir=o.useCallback(i=>{let t=Cr(i.currentTarget.files)?void 0:Array.from(i.currentTarget.files);t!=null&&t.length||(t=void 0),I(t)},[I]),ur=o.useCallback(()=>{j.current&&(j.current.value=""),I(void 0)},[I]);Sr(er,ur);const cr=o.useMemo(()=>l!=null&&l.length?n?n(l):c?e.jsx(p.span,{lineClamp:g,children:l.map((i,t)=>{const F=c({index:t,value:i}),mr={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return F?o.cloneElement(F,{key:t,style:mr}):null})}):e.jsx(p.span,{lineClamp:g,children:l.map((i,t)=>{const F=l.length===t+1;return e.jsxs(p.span,{display:"inline-block",me:"0.25rem",children:[D(i,t),F?null:J]},t)})}):e.jsx(p.span,{lineClamp:g,children:H}),[n,D,g,H,J,c,l]),dr=gr({ref:a,...K,...or,disabled:x||h,onClick:Rr(lr,sr)}),pr={alignItems:"center",cursor:h?"auto":"pointer",display:"flex",...m.field};return e.jsxs(e.Fragment,{children:[e.jsx(p.input,{id:q,ref:wr(j,a),form:U,type:"file",name:N,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,"aria-readonly":ar,accept:s,disabled:x,multiple:$e,readOnly:h,tabIndex:-1,onChange:ir,...K}),e.jsx(p.div,{className:Tr("ui-file-input",f),"data-placeholder":kr(!(l!=null&&l.length)),py:l!=null&&l.length&&c?"0.125rem":void 0,__css:pr,...dr,children:cr})]})});r.displayName="FileInput";r.__ui__="FileInput";const cn={component:r,title:"Components / Forms / FileInput"},y=()=>e.jsx(r,{placeholder:"basic"}),v=()=>e.jsx(r,{multiple:!0,placeholder:"multiple"}),b=()=>e.jsx(r,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),C=()=>e.jsx(r,{multiple:!0,placeholder:"multiple",separator:";"}),S=()=>e.jsx(r,{component:({value:{name:n}})=>e.jsx(Er,{children:n}),multiple:!0,placeholder:"multiple"}),R=()=>e.jsx(r,{format:({name:n})=>n.substring(0,n.indexOf(".")),multiple:!0,placeholder:"multiple"}),w=()=>e.jsx(r,{multiple:!0,children:n=>e.jsxs(X,{children:["Selected: ",(n==null?void 0:n.length)??0]})}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(L,{disabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(r,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(r,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(L,{label:"Upload file",readOnly:!0,children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),P=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(L,{errorMessage:"File is required.",invalid:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),B=()=>e.jsxs(_,{children:[e.jsx(zr,{children:e.jsx(We,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),V=()=>e.jsxs(_,{children:[e.jsx(Or,{children:e.jsx(We,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),A=()=>{const[n,u]=o.useState(void 0),a=o.useRef(null),m=()=>{var d;u(void 0),(d=a.current)==null||d.call(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(_,{children:[e.jsx(r,{multiple:!0,resetRef:a,value:n,onChange:u}),n!=null&&n.length?e.jsx(Qe,{clickable:!0,onClick:m,children:e.jsx(Ye,{color:"gray.500"})}):null]})]})},G=()=>{const[n,u]=o.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(X,{children:["files: ",n==null?void 0:n.length]}),e.jsx(r,{value:n,onChange:u})]})},M=()=>{var f;const n=o.useRef(null),{control:u,formState:{errors:a},handleSubmit:m,setValue:d,watch:q}=hr(),U=()=>{var s;d("fileInput",void 0),(s=n.current)==null||s.call(n)},N=s=>console.log("submit:",s);return console.log("watch:",q()),e.jsxs(Pr,{as:"form",onSubmit:m(N),children:[e.jsx(L,{errorMessage:(f=a.fileInput)==null?void 0:f.message,invalid:!!a.fileInput,label:"Files",children:e.jsx(fr,{name:"fileInput",control:u,render:({field:s})=>{var c;return e.jsxs(_,{children:[e.jsx(r,{multiple:!0,...s,resetRef:n}),(c=s.value)!=null&&c.length?e.jsx(Qe,{clickable:!0,onClick:U,children:e.jsx(Ye,{color:"gray.500"})}):null]})},rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Br,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Q,W,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(Y=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ne,le;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...(le=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:le.source}}};var te,ae,oe;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...(oe=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,ie,ue;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} multiple placeholder="multiple" />;
}`,...(ue=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:ue.source}}};var ce,de,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...(pe=(de=R.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,he,fe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(fe=(he=w.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var ge,xe,je;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileInput size="xs" placeholder="extra small size" />
      <FileInput size="sm" placeholder="small size" />
      <FileInput size="md" placeholder="medium size" />
      <FileInput size="lg" placeholder="large size" />
    </>;
}`,...(je=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Ie,Fe,ye;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
      <FileInput errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(Ce=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Se,Re,we;O.parameters={...O.parameters,docs:{...(Se=O.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" disabled placeholder="outline" />
      <FileInput variant="filled" disabled placeholder="filled" />
      <FileInput variant="flushed" disabled placeholder="flushed" />
      <FileInput variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(we=(Re=O.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var ke,Te,ze;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" readOnly />
      <FileInput variant="filled" placeholder="filled" readOnly />
      <FileInput variant="flushed" placeholder="flushed" readOnly />
      <FileInput variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl label="Upload file" readOnly>
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ze=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Oe,Ee,Pe;P.parameters={...P.parameters,docs:{...(Oe=P.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" invalid placeholder="outline" />
      <FileInput variant="filled" invalid placeholder="filled" />
      <FileInput variant="flushed" invalid placeholder="flushed" />
      <FileInput variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="File is required." invalid label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Pe=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Be,Ve,Ae;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <FileIcon />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ae=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var Ge,Me,Le;V.parameters={...V.parameters,docs:{...(Ge=V.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <FileIcon color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Le=(Me=V.parameters)==null?void 0:Me.docs)==null?void 0:Le.source}}};var _e,qe,Ue;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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

        {value?.length ? <InputRightElement clickable onClick={onReset}>
            <XIcon color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(Ue=(qe=A.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Ne,Xe,De;G.parameters={...G.parameters,docs:{...(Ne=G.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(De=(Xe=G.parameters)==null?void 0:Xe.docs)==null?void 0:De.source}}};var He,Je,Ke;M.parameters={...M.parameters,docs:{...(He=M.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.fileInput?.message} invalid={!!errors.fileInput} label="Files">
        <Controller name="fileInput" control={control} render={({
        field
      }) => <InputGroup>
              <FileInput multiple {...field} resetRef={resetRef} />

              {field.value?.length ? <InputRightElement clickable onClick={onReset}>
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
}`,...(Ke=(Je=M.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const dn=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","disabled","readOnly","invalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{dn as __namedExportsOrder,y as basic,G as customControl,cn as default,O as disabled,P as invalid,M as reactHookForm,E as readOnly,B as useAddon,V as useElement,A as useReset,b as withAccept,z as withBorderColor,w as withChildren,R as withFormat,v as withMultiple,C as withSeparator,k as withSize,S as withTag,T as withVariant};
