import{j as e}from"./extends-CwFRzn3r.js";import{r as s}from"./index-BwDkhjyp.js";import{u as hr,C as fr}from"./index.esm-DXPXqkjk.js";import{u as gr}from"./index-BD-dMYlD.js";import{u as xr}from"./index-CsH8woeS.js";import{u as Ir,f as jr,F as M}from"./form-control-DALmJTHd.js";import{f as Fr}from"./forward-ref-BWI-Phbn.js";import{a as yr}from"./use-component-style-DhRiPQIp.js";import{o as vr}from"./theme-provider-Cr3m0r8P.js";import{X as br,E as Cr,e as Sr,b as d,h as Rr,a as wr,c as kr,d as Tr}from"./factory-DBrfn43w.js";import{I as _,a as zr,c as Er,d as Qe}from"./input-group-D0S2XUWq.js";import{F as We}from"./file-B7_Xt6oX.js";import{T as Dr}from"./tag-CfQHY9Wy.js";import{T as N}from"./text-LaTineB_.js";import{X as Ye}from"./x-murJXkIA.js";import{V as Or}from"./stack-BJEIbY7f.js";import{B as Pr}from"./button-HzRyJIss.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-C9q_kkfb.js";import"./use-var-DcJHaFAf.js";import"./lucide-icon-CsDBQyHf.js";import"./icon-CVPWgGuL.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-CWrzRNZL.js";import"./loading-iPLDeGho.js";const Br=({name:l})=>l,r=Fr(({children:l,...u},a)=>{const[m,p]=yr("FileInput",u),{id:L,form:q,name:U,className:f,accept:o,component:c,defaultValue:Ze,format:X=Br,lineClamp:g=1,multiple:$e,placeholder:H,resetRef:er,separator:J=",",value:rr,onChange:lr,onClick:nr,...tr}=Ir(vr(p)),[{"aria-readonly":ar,disabled:x,readOnly:h,...K},sr]=br(tr,jr),I=s.useRef(null),[n,j]=xr({defaultValue:Ze,value:rr,onChange:lr}),or=s.useCallback(()=>{var i;x||h||(i=I.current)==null||i.click()},[x,h]),ir=s.useCallback(i=>{let t=Cr(i.currentTarget.files)?void 0:Array.from(i.currentTarget.files);t!=null&&t.length||(t=void 0),j(t)},[j]),ur=s.useCallback(()=>{I.current&&(I.current.value=""),j(void 0)},[j]);Sr(er,ur);const cr=s.useMemo(()=>n!=null&&n.length?l?l(n):c?e.jsx(d.span,{lineClamp:g,children:n.map((i,t)=>{const F=c({index:t,value:i}),mr={marginBlockEnd:"0.125rem",marginBlockStart:"0.125rem",marginInlineEnd:"0.25rem"};return F?s.cloneElement(F,{key:t,style:mr}):null})}):e.jsx(d.span,{lineClamp:g,children:n.map((i,t)=>{const F=n.length===t+1;return e.jsxs(d.span,{display:"inline-block",me:"0.25rem",children:[X(i,t),F?null:J]},t)})}):e.jsx(d.span,{lineClamp:g,children:H}),[l,X,g,H,J,c,n]),pr=gr({ref:a,...K,...sr,isDisabled:x||h,onClick:Rr(nr,or)}),dr={alignItems:"center",cursor:h?"auto":"pointer",display:"flex",...m.field};return e.jsxs(e.Fragment,{children:[e.jsx(d.input,{id:L,ref:wr(I,a),form:q,type:"file",name:U,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"aria-hidden":!0,"aria-readonly":ar,accept:o,disabled:x,multiple:$e,readOnly:h,tabIndex:-1,onChange:ir,...K}),e.jsx(d.div,{className:kr("ui-file-input",f),"data-placeholder":Tr(!(n!=null&&n.length)),py:n!=null&&n.length&&c?"0.125rem":void 0,__css:dr,...pr,children:cr})]})});r.displayName="FileInput";r.__ui__="FileInput";const ul={component:r,title:"Components / Forms / FileInput"},y=()=>e.jsx(r,{placeholder:"basic"}),v=()=>e.jsx(r,{multiple:!0,placeholder:"multiple"}),b=()=>e.jsx(r,{accept:"image/png,image/jpeg",placeholder:"only png, jpeg"}),C=()=>e.jsx(r,{multiple:!0,placeholder:"multiple",separator:";"}),S=()=>e.jsx(r,{component:({value:{name:l}})=>e.jsx(Dr,{children:l}),multiple:!0,placeholder:"multiple"}),R=()=>e.jsx(r,{format:({name:l})=>l.substring(0,l.indexOf(".")),multiple:!0,placeholder:"multiple"}),w=()=>e.jsx(r,{multiple:!0,children:l=>e.jsxs(N,{children:["Selected: ",(l==null?void 0:l.length)??0]})}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),z=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),E=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(M,{isDisabled:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),D=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(M,{isReadOnly:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),O=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(M,{errorMessage:"File is required.",isInvalid:!0,label:"Upload file",children:e.jsx(r,{type:"email",placeholder:"your file"})})]}),P=()=>e.jsxs(_,{children:[e.jsx(zr,{children:e.jsx(We,{})}),e.jsx(r,{type:"tel",placeholder:"Please upload file"})]}),B=()=>e.jsxs(_,{children:[e.jsx(Er,{children:e.jsx(We,{color:"gray.500"})}),e.jsx(r,{type:"email",placeholder:"Please upload file"})]}),V=()=>{const[l,u]=s.useState(void 0),a=s.useRef(null),m=()=>{var p;u(void 0),(p=a.current)==null||p.call(a)};return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:["files: ",(l==null?void 0:l.length)??0]}),e.jsxs(_,{children:[e.jsx(r,{multiple:!0,resetRef:a,value:l,onChange:u}),l!=null&&l.length?e.jsx(Qe,{isClickable:!0,onClick:m,children:e.jsx(Ye,{color:"gray.500"})}):null]})]})},A=()=>{const[l,u]=s.useState(void 0);return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:["files: ",l==null?void 0:l.length]}),e.jsx(r,{value:l,onChange:u})]})},G=()=>{var f;const l=s.useRef(null),{control:u,formState:{errors:a},handleSubmit:m,setValue:p,watch:L}=hr(),q=()=>{var o;p("fileInput",void 0),(o=l.current)==null||o.call(l)},U=o=>console.log("submit:",o);return console.log("watch:",L()),e.jsxs(Or,{as:"form",onSubmit:m(U),children:[e.jsx(M,{errorMessage:(f=a.fileInput)==null?void 0:f.message,isInvalid:!!a.fileInput,label:"Files",children:e.jsx(fr,{name:"fileInput",control:u,render:({field:o})=>{var c;return e.jsxs(_,{children:[e.jsx(r,{multiple:!0,...o,resetRef:l}),(c=o.value)!=null&&c.length?e.jsx(Qe,{isClickable:!0,onClick:q,children:e.jsx(Ye,{color:"gray.500"})}):null]})},rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Pr,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Q,W,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <FileInput placeholder="basic" />;
}`,...(Y=(W=y.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <FileInput multiple placeholder="multiple" />;
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,le,ne;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <FileInput accept="image/png,image/jpeg" placeholder="only png, jpeg" />;
}`,...(ne=(le=b.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var te,ae,se;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
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
}`,...(Ce=(be=z.parameters)==null?void 0:be.docs)==null?void 0:Ce.source}}};var Se,Re,we;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isDisabled placeholder="outline" />
      <FileInput variant="filled" isDisabled placeholder="filled" />
      <FileInput variant="flushed" isDisabled placeholder="flushed" />
      <FileInput variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl isDisabled label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(we=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var ke,Te,ze;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isReadOnly placeholder="outline" />
      <FileInput variant="filled" isReadOnly placeholder="filled" />
      <FileInput variant="flushed" isReadOnly placeholder="flushed" />
      <FileInput variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl isReadOnly label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(ze=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:ze.source}}};var Ee,De,Oe;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <FileInput variant="outline" isInvalid placeholder="outline" />
      <FileInput variant="filled" isInvalid placeholder="filled" />
      <FileInput variant="flushed" isInvalid placeholder="flushed" />
      <FileInput variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="File is required." isInvalid label="Upload file">
        <FileInput type="email" placeholder="your file" />
      </FormControl>
    </>;
}`,...(Oe=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var Pe,Be,Ve;P.parameters={...P.parameters,docs:{...(Pe=P.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftAddon>
        <File />
      </InputLeftAddon>
      <FileInput type="tel" placeholder="Please upload file" />
    </InputGroup>;
}`,...(Ve=(Be=P.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source}}};var Ae,Ge,Me;B.parameters={...B.parameters,docs:{...(Ae=B.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <InputGroup>
      <InputLeftElement>
        <File color="gray.500" />
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
            <X color="gray.500" />
          </InputRightElement> : null}
      </InputGroup>
    </>;
}`,...(qe=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:qe.source}}};var Ue,Ne,Xe;A.parameters={...A.parameters,docs:{...(Ue=A.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<File[] | undefined>(undefined);
  return <>
      <Text>files: {value?.length}</Text>

      <FileInput value={value} onChange={onChange} />
    </>;
}`,...(Xe=(Ne=A.parameters)==null?void 0:Ne.docs)==null?void 0:Xe.source}}};var He,Je,Ke;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Je=G.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};const cl=["basic","withMultiple","withAccept","withSeparator","withTag","withFormat","withChildren","withSize","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","useReset","customControl","reactHookForm"];export{cl as __namedExportsOrder,y as basic,A as customControl,ul as default,E as isDisabled,O as isInvalid,D as isReadonly,G as reactHookForm,P as useAddon,B as useElement,V as useReset,b as withAccept,z as withBorderColor,w as withChildren,R as withFormat,v as withMultiple,C as withSeparator,k as withSize,S as withTag,T as withVariant};
