import{j as e}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{u as pr,C as mr}from"./index.esm-DXPXqkjk.js";import{u as hr}from"./index-DeXdSJTC.js";import{u as fr,f as gr,F as A}from"./form-control-DEVK4waL.js";import{f as xr}from"./forward-ref-BWI-Phbn.js";import{a as Ir}from"./use-component-style-CLkw4iG2.js";import{o as jr}from"./theme-provider-D1j4LEQ9.js";import{W as Fr,B as yr,e as vr,b as p,a as br,c as Cr,d as Sr,h as Rr}from"./factory-CB2imrkD.js";import{I as G,a as wr,c as kr,d as Qe}from"./input-group-DVsT9Ldb.js";import{F as Ye}from"./file-Bbr73dG0.js";import{T as Tr}from"./tag-C8nkEeOd.js";import{T as U}from"./text-DzUFhekZ.js";import{X as Ze}from"./x-BBVmacfI.js";import{V as zr}from"./stack-DlPMk-Cq.js";import{B as Er}from"./button-D6MtFxez.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-D-eiJB8b.js";import"./lucide-icon-DTzfJBKH.js";import"./icon-GDJ6YhRU.js";import"./index-LwS2tk1a.js";import"./index-C60CJblF.js";import"./use-ripple-D_F9Vz55.js";import"./factory-C3FBZMw9.js";import"./motion-I-9Hg3gW.js";import"./loading-6PAwx6O9.js";const Dr=({name:n})=>n,r=xr(({children:n,...u},a)=>{const[m,d]=Ir("FileInput",u),{id:M,form:_,name:L,className:h,accept:o,component:c,defaultValue:$e,format:N=Dr,lineClamp:f=1,multiple:er,placeholder:H,resetRef:rr,separator:X=",",value:nr,onChange:lr,onClick:tr,...W}=fr(jr(d)),{"aria-readonly":ar,...J}=Fr(W,gr),{disabled:K,readOnly:q}=J,g=s.useRef(null),[l,x]=hr({defaultValue:$e,value:nr,onChange:lr}),sr=s.useCallback(()=>{var i;K||q||(i=g.current)==null||i.click()},[K,q]),or=s.useCallback(i=>{let t=yr(i.currentTarget.files)?void 0:Array.from(i.currentTarget.files);t!=null&&t.length||(t=void 0),x(t)},[x]),ir=s.useCallback(()=>{g.current&&(g.current.value=""),x(void 0)},[x]);vr(rr,ir);const ur=s.useMemo(()=>l!=null&&l.length?n?n(l):c?e.jsx(p.span,{lineClamp:f,children:l.map((i,t)=>{const I=c({index:t,value:i}),dr={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return I?s.cloneElement(I,{key:t,style:dr}):null})}):e.jsx(p.span,{lineClamp:f,children:l.map((i,t)=>{const I=l.length===t+1;return e.jsxs(p.span,{display:"inline-block",me:"0.25rem",children:[N(i,t),I?null:X]},t)})}):e.jsx(p.span,{lineClamp:f,children:H}),[n,N,f,H,X,c,l]),cr={alignItems:"center",cursor:q?"auto":"pointer",display:"flex",...m.field};return e.jsxs(e.Fragment,{children:[e.jsx(p.input,{id:M,ref:br(g,a),form:_,type:"file",name:L,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,"aria-readonly":ar,accept:o,multiple:er,tabIndex:-1,onChange:or,...J}),e.jsx(p.div,{ref:a,className:Cr("ui-file-input",h),py:l!=null&&l.length&&c?"0.125rem":void 0,...W,"data-placeholder":Sr(!(l!=null&&l.length)),tabIndex:0,onClick:Rr(tr,sr),__css:cr,children:ur})]})});r.displayName="FileInput";r.__ui__="FileInput";const an={component:r,title:"Components / Forms / FileInput"},j=()=>e.jsx(r,{placeholder:"basic"}),F=()=>e.jsx(r,{multiple:!0,placeholder:"multiple"}),y=()=>e.jsx(r,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),v=()=>e.jsx(r,{multiple:!0,placeholder:"multiple",separator:";"}),b=()=>e.jsx(r,{component:({value:{name:n}})=>e.jsx(Tr,{children:n}),multiple:!0,placeholder:"multiple"}),C=()=>e.jsx(r,{format:({name:n})=>n.substring(0,n.indexOf(".")),multiple:!0,placeholder:"multiple"}),S=()=>e.jsx(r,{multiple:!0,children:n=>e.jsxs(U,{children:["Selected: ",(n==null?void 0:n.length)??0]})}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(A,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(A,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(A,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),D=()=>e.jsxs(G,{children:[e.jsx(wr,{children:e.jsx(Ye,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),O=()=>e.jsxs(G,{children:[e.jsx(kr,{children:e.jsx(Ye,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),B=()=>{const[n,u]=s.useState(void 0),a=s.useRef(null),m=()=>{var d;u(void 0),(d=a.current)==null||d.call(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(G,{children:[e.jsx(r,{multiple:!0,resetRef:a,value:n,onChange:u}),n!=null&&n.length?e.jsx(Qe,{isClickable:!0,onClick:m,children:e.jsx(Ze,{color:"gray.500"})}):null]})]})},P=()=>{const[n,u]=s.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:["files: ",n==null?void 0:n.length]}),e.jsx(r,{value:n,onChange:u})]})},V=()=>{var h;const n=s.useRef(null),{control:u,formState:{errors:a},handleSubmit:m,setValue:d,watch:M}=pr(),_=()=>{var o;d("fileInput",void 0),(o=n.current)==null||o.call(n)},L=o=>console.log("submit:",o);return console.log("watch:",M()),e.jsxs(zr,{as:"form",onSubmit:m(L),children:[e.jsx(A,{errorMessage:(h=a.fileInput)==null?void 0:h.message,isInvalid:!!a.fileInput,label:"Files",children:e.jsx(mr,{name:"fileInput",control:u,render:({field:o})=>{var c;return e.jsxs(G,{children:[e.jsx(r,{multiple:!0,...o,resetRef:n}),(c=o.value)!=null&&c.length?e.jsx(Qe,{isClickable:!0,onClick:_,children:e.jsx(Ze,{color:"gray.500"})}):null]})},rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Er,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Q,Y,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;F.parameters={...F.parameters,docs:{...($=F.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...(re=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,le,te;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...(te=(le=y.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ae,se,oe;v.parameters={...v.parameters,docs:{...(ae=v.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" separator=";" />;
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ue,ce;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <FileInput component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} multiple placeholder="multiple" />;
}`,...(ce=(ue=b.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};var de,pe,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <FileInput format={({
    name
  }) => name.substring(0, name.indexOf("."))} multiple placeholder="multiple" />;
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,fe,ge;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(ge=(fe=S.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var xe,Ie,je;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <FileInput size="xs" placeholder="extra small size" />
      <FileInput size="sm" placeholder="small size" />
      <FileInput size="md" placeholder="medium size" />
      <FileInput size="lg" placeholder="large size" />
    </>;
}`,...(je=(Ie=R.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var Fe,ye,ve;w.parameters={...w.parameters,docs:{...(Fe=w.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(ve=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var be,Ce,Se;k.parameters={...k.parameters,docs:{...(be=k.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(Se=(Ce=k.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var Re,we,ke;T.parameters={...T.parameters,docs:{...(Re=T.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isDisabled placeholder="outline" />
      <FileInput variant="filled" isDisabled placeholder="filled" />
      <FileInput variant="flushed" isDisabled placeholder="flushed" />
      <FileInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ke=(we=T.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var Te,ze,Ee;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isReadOnly placeholder="outline" />
      <FileInput variant="filled" isReadOnly placeholder="filled" />
      <FileInput variant="flushed" isReadOnly placeholder="flushed" />
      <FileInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Ee=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var De,Oe,Be;E.parameters={...E.parameters,docs:{...(De=E.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isInvalid placeholder="outline" />
      <FileInput variant="filled" isInvalid placeholder="filled" />
      <FileInput variant="flushed" isInvalid placeholder="flushed" />
      <FileInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Be=(Oe=E.parameters)==null?void 0:Oe.docs)==null?void 0:Be.source}}};var Pe,Ve,Ae;D.parameters={...D.parameters,docs:{...(Pe=D.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <File />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ae=(Ve=D.parameters)==null?void 0:Ve.docs)==null?void 0:Ae.source}}};var Ge,Me,_e;O.parameters={...O.parameters,docs:{...(Ge=O.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <File color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(_e=(Me=O.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Le,qe,Ue;B.parameters={...B.parameters,docs:{...(Le=B.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
            <X color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(Ue=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var Ne,He,Xe;P.parameters={...P.parameters,docs:{...(Ne=P.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Xe=(He=P.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var We,Je,Ke;V.parameters={...V.parameters,docs:{...(We=V.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
                  <X color="gray.500" />
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
}`,...(Ke=(Je=V.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const sn=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{sn as __namedExportsOrder,j as basic,P as customControl,an as default,T as isDisabled,E as isInvalid,z as isReadonly,V as reactHookForm,D as useAddon,O as useElement,B as useReset,y as withAccept,k as withBorderColor,S as withChildren,C as withFormat,F as withMultiple,v as withSeparator,R as withSize,b as withTag,w as withVariant};
