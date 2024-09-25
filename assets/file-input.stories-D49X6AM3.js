import{j as e}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{u as pr,C as mr}from"./index.esm-DXPXqkjk.js";import{u as hr}from"./index-BJROMb8v.js";import{u as fr,f as gr,F as M}from"./form-control-aTmtpG9F.js";import{f as xr}from"./forward-ref-BWI-Phbn.js";import{a as Ir}from"./use-component-style-EAJDzyrD.js";import{o as jr}from"./theme-provider-BxuddooS.js";import{V as Fr,B as vr,e as yr,b as d,a as br,c as Cr,d as Sr,h as Rr}from"./factory-BFmlPmGv.js";import{I as L,a as wr,c as kr,d as We}from"./input-group-CL1y8M1Q.js";import{F as Ye}from"./file-BtDgH2ur.js";import{T as Tr}from"./tag-CIAj4yDD.js";import{T as H}from"./text-Cd4dmvuW.js";import{X as Ze}from"./x-BNk4orNY.js";import{V as zr}from"./stack-Ci4lM0q5.js";import{B as Er}from"./button-H0ys-Ob-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-5W_PKLe2.js";import"./lucide-icon-Bl-0HoUI.js";import"./icon-C9JvswpF.js";import"./index-CQq5lcce.js";import"./index-C3wYSRXL.js";import"./use-ripple-BKCJ_73z.js";import"./factory-DrzA6EUf.js";import"./motion-I-9Hg3gW.js";import"./loading-DQUUkNfv.js";const Dr=({name:n})=>n,r=xr(({children:n,...u},s)=>{const[p,c]=Ir("FileInput",u),{className:m,id:q,name:U,accept:h,multiple:o,form:f,placeholder:N,value:er,defaultValue:rr,component:g,format:X=Dr,lineClamp:x=1,separator:$=",",resetRef:nr,onChange:lr,onClick:tr,...J}=fr(jr(c)),{"aria-readonly":ar,...K}=Fr(J,gr),{disabled:Q,readOnly:_}=K,I=a.useRef(null),[l,j]=hr({value:er,defaultValue:rr,onChange:lr}),sr=a.useCallback(()=>{var i;Q||_||(i=I.current)==null||i.click()},[Q,_]),or=a.useCallback(i=>{let t=vr(i.currentTarget.files)?void 0:Array.from(i.currentTarget.files);t!=null&&t.length||(t=void 0),j(t)},[j]),ir=a.useCallback(()=>{I.current&&(I.current.value=""),j(void 0)},[j]);yr(nr,ir);const ur=a.useMemo(()=>l!=null&&l.length?n?n(l):g?e.jsx(d.span,{lineClamp:x,children:l.map((i,t)=>{const F=g({value:i,index:t}),dr={marginBlockStart:"0.125rem",marginBlockEnd:"0.125rem",marginInlineEnd:"0.25rem"};return F?a.cloneElement(F,{style:dr,key:t}):null})}):e.jsx(d.span,{lineClamp:x,children:l.map((i,t)=>{const F=l.length===t+1;return e.jsxs(d.span,{display:"inline-block",me:"0.25rem",children:[X(i,t),F?null:$]},t)})}):e.jsx(d.span,{lineClamp:x,children:N}),[n,X,x,N,$,g,l]),cr={display:"flex",alignItems:"center",cursor:_?"auto":"pointer",...p.field};return e.jsxs(e.Fragment,{children:[e.jsx(d.input,{ref:br(I,s),type:"file","aria-hidden":!0,tabIndex:-1,id:q,name:U,form:f,accept:h,multiple:o,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:or,"aria-readonly":ar,...K}),e.jsx(d.div,{ref:s,className:Cr("ui-file-input",m),py:l!=null&&l.length&&g?"0.125rem":void 0,...J,__css:cr,tabIndex:0,"data-placeholder":Sr(!(l!=null&&l.length)),onClick:Rr(tr,sr),children:ur})]})}),an={title:"Components / Forms / FileInput",component:r},v=()=>e.jsx(r,{placeholder:"basic"}),y=()=>e.jsx(r,{placeholder:"multiple",multiple:!0}),b=()=>e.jsx(r,{placeholder:"only png, jpeg",accept:"image/png,image/jpeg"}),C=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,separator:";"}),S=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,component:({value:{name:n}})=>e.jsx(Tr,{children:n})}),R=()=>e.jsx(r,{placeholder:"multiple",multiple:!0,format:({name:n})=>`${n.substring(0,n.indexOf("."))}`}),w=()=>e.jsx(r,{multiple:!0,children:n=>e.jsxs(H,{children:["Selected: ",(n==null?void 0:n.length)??0]})}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(M,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(M,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(M,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),B=()=>e.jsxs(L,{children:[e.jsx(wr,{children:e.jsx(Ye,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),V=()=>e.jsxs(L,{children:[e.jsx(kr,{children:e.jsx(Ye,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),P=()=>{const[n,u]=a.useState(void 0),s=a.useRef(null),p=()=>{var c;u(void 0),(c=s.current)==null||c.call(s)};return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:["files: ",(n==null?void 0:n.length)??0]}),e.jsxs(L,{children:[e.jsx(r,{multiple:!0,value:n,onChange:u,resetRef:s}),n!=null&&n.length?e.jsx(We,{isClick:!0,onClick:p,children:e.jsx(Ze,{color:"gray.500"})}):null]})]})},A=()=>{const[n,u]=a.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(H,{children:["files: ",n==null?void 0:n.length]}),e.jsx(r,{value:n,onChange:u})]})},G=()=>{var h;const n=a.useRef(null),{control:u,handleSubmit:s,watch:p,setValue:c,formState:{errors:m}}=pr(),q=()=>{var o;c("fileInput",void 0),(o=n.current)==null||o.call(n)},U=o=>console.log("submit:",o);return console.log("watch:",p()),e.jsxs(zr,{as:"form",onSubmit:s(U),children:[e.jsx(M,{isInvalid:!!m.fileInput,label:"Files",errorMessage:(h=m.fileInput)==null?void 0:h.message,children:e.jsx(mr,{name:"fileInput",control:u,rules:{required:{value:!0,message:"This is required."}},render:({field:o})=>{var f;return e.jsxs(L,{children:[e.jsx(r,{multiple:!0,...o,resetRef:n}),(f=o.value)!=null&&f.length?e.jsx(We,{isClick:!0,onClick:q,children:e.jsx(Ze,{color:"gray.500"})}):null]})}})}),e.jsx(Er,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var W,Y,Z;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ne;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple />;
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var le,te,ae;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <FileInput placeholder="only png, jpeg" accept="image/png,image/jpeg" />;
}`,...(ae=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var se,oe,ie;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple separator=";" />;
}`,...(ie=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ue,ce,de;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple component={({
    value: {
      name
    }
  }) => <Tag>{name}</Tag>} />;
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var pe,me,he;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <FileInput placeholder="multiple" multiple format={({
    name
  }) => \`\${name.substring(0, name.indexOf("."))}\`} />;
}`,...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var fe,ge,xe;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <FileInput multiple>
      {files => <Text>Selected: {files?.length ?? 0}</Text>}
    </FileInput>;
}`,...(xe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ie,je,Fe;k.parameters={...k.parameters,docs:{...(Ie=k.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="extra small size" size="xs" />
      <FileInput placeholder="small size" size="sm" />
      <FileInput placeholder="medium size" size="md" />
      <FileInput placeholder="large size" size="lg" />
    </>;
}`,...(Fe=(je=k.parameters)==null?void 0:je.docs)==null?void 0:Fe.source}}};var ve,ye,be;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" placeholder="outline" />
      <FileInput variant="filled" placeholder="filled" />
      <FileInput variant="flushed" placeholder="flushed" />
      <FileInput variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(be=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};var Ce,Se,Re;z.parameters={...z.parameters,docs:{...(Ce=z.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <FileInput placeholder="default border color" />
      <FileInput focusBorderColor="green.500" placeholder="custom border color" />
      <FileInput isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Re=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Re.source}}};var we,ke,Te;E.parameters={...E.parameters,docs:{...(we=E.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <FileInput isDisabled variant="outline" placeholder="outline" />
      <FileInput isDisabled variant="filled" placeholder="filled" />
      <FileInput isDisabled variant="flushed" placeholder="flushed" />
      <FileInput isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Te=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var ze,Ee,De;D.parameters={...D.parameters,docs:{...(ze=D.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <>
      <FileInput isReadOnly variant="outline" placeholder="outline" />
      <FileInput isReadOnly variant="filled" placeholder="filled" />
      <FileInput isReadOnly variant="flushed" placeholder="flushed" />
      <FileInput isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(De=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:De.source}}};var Oe,Be,Ve;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <FileInput isInvalid variant="outline" placeholder="outline" />
      <FileInput isInvalid variant="filled" placeholder="filled" />
      <FileInput isInvalid variant="flushed" placeholder="flushed" />
      <FileInput isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Upload file" errorMessage="File is required.">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Ve=(Be=O.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Pe,Ae,Ge;B.parameters={...B.parameters,docs:{...(Pe=B.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <File />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ge=(Ae=B.parameters)==null?void 0:Ae.docs)==null?void 0:Ge.source}}};var Me,Le,qe;V.parameters={...V.parameters,docs:{...(Me=V.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <File color="gray.500" />
      </InputLeftElement>
      <FileInput type="email" placeholder="Please upload file" />
    </InputGroup>;
}`,...(qe=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ue,_e,He;P.parameters={...P.parameters,docs:{...(Ue=P.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(_e=P.parameters)==null?void 0:_e.docs)==null?void 0:He.source}}};var Ne,Xe,$e;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...($e=(Xe=A.parameters)==null?void 0:Xe.docs)==null?void 0:$e.source}}};var Je,Ke,Qe;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  interface Data {
    fileInput: File[] | undefined;
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
}`,...(Qe=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};const sn=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{sn as __namedExportsOrder,v as basic,A as customControl,an as default,E as isDisabled,O as isInvalid,D as isReadonly,G as reactHookForm,B as useAddon,V as useElement,P as useReset,b as withAccept,z as withBorderColor,w as withChildren,R as withFormat,y as withMultiple,C as withSeparator,k as withSize,S as withTag,T as withVariant};
