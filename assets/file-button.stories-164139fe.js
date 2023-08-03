import{j as e,a as r,F as s}from"./jsx-runtime-37f7df21.js";import{I as h,j as B}from"./fontawesome-icon-d6608406.js";import{r as u}from"./index-f1f2c4b1.js";import{u as Oe,C as Le}from"./index.esm-fb125d97.js";import{u as Pe,f as je,F as M}from"./form-control-7888c8d6.js";import{O as Me,E as _,e as ze,y as Te,v as We,g as He,d as Ve,w as qe,z as Ge}from"./factory-81c6291d.js";import{B as j}from"./button-664b0d8f.js";import{f as _e}from"./forward-ref-92ccee95.js";import{I as F}from"./icon-button-ff4a8ecc.js";import{L as g}from"./link-2854dfe0.js";import{W as H}from"./flex-4195fd55.js";import{T as Ae}from"./text-6737f911.js";import{H as ve,V as Ee}from"./stack-58a54e70.js";import"./index-d6b32626.js";import"./icon-36765902.js";import"./index-e84132d8.js";import"./theme-2b4f2a73.js";import"./use-component-style-f03a93f0.js";import"./extends-3d932e16.js";import"./loading-8fe548f5.js";import"./index-c08cc7ee.js";import"./index-18b70ca1.js";const n=_e(({className:o,resetRef:t,as:a,children:l,...d},S)=>{const{id:z,name:T,accept:f,multiple:c,form:W,...i}=Pe(d),{disabled:m,readOnly:k,required:V,"aria-invalid":we}=i,C=u.useRef(null),q=u.useCallback(()=>{var p;m||k||(p=C.current)==null||p.click()},[m,k]),Ie=u.useCallback(p=>{var G;const De=Me(p.currentTarget.files)?null:Array.from(p.currentTarget.files);(G=i.onChange)==null||G.call(i,De)},[i]),xe=u.useCallback(()=>{C.current&&(C.current.value="")},[]);return _(l)||(l=e(a||j,{className:ze("ui-file-button",o),...Te(i,["onChange"]),onClick:We(i.onClick,q),children:l})),He(t,xe),r(s,{children:[e(Ve.input,{ref:qe(C,S),type:"file",tabIndex:-1,id:z,name:T,form:W,accept:f,multiple:c,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:Ie,...Ge(i,je)}),_(l)?l({onClick:q,disabled:m,readOnly:k,required:V,isDisabled:m,isReadOnly:k,isRequired:V,isInvalid:we}):l]})}),Bn={title:"Components / Forms / FileButton",component:n},y=()=>r(s,{children:[e(n,{children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B})}),e(n,{children:({onClick:o})=>e(g,{onClick:o,children:"Upload"})})]}),b=()=>r(s,{children:[e(n,{multiple:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),multiple:!0}),e(n,{multiple:!0,children:({onClick:o})=>e(g,{onClick:o,children:"Upload"})})]}),R=()=>r(s,{children:[e(n,{accept:"image/png,image/jpeg",children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),accept:"image/png,image/jpeg"}),e(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e(g,{onClick:o,children:"Upload"})})]}),U=()=>r(H,{gap:"md",children:[e(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e(n,{colorScheme:"warning",size:"md",children:"Medium"}),e(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),v=()=>r(H,{gap:"md",children:[e(n,{colorScheme:"primary",children:"Primary"}),e(n,{colorScheme:"secondary",children:"Secondary"}),e(n,{colorScheme:"warning",children:"Warning"}),e(n,{colorScheme:"danger",children:"Danger"}),e(n,{colorScheme:"link",children:"Link"}),e(n,{colorScheme:"gray",children:"Gray"}),e(n,{colorScheme:"red",children:"Red"}),e(n,{colorScheme:"orange",children:"Orange"}),e(n,{colorScheme:"yellow",children:"Yellow"}),e(n,{colorScheme:"green",children:"Green"}),e(n,{colorScheme:"teal",children:"Teal"}),e(n,{colorScheme:"blue",children:"Blue"}),e(n,{colorScheme:"cyan",children:"Cyan"}),e(n,{colorScheme:"purple",children:"Purple"}),e(n,{colorScheme:"pink",children:"pink"})]}),w=()=>r(H,{gap:"md",children:[e(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e(n,{colorScheme:"danger",variant:"link",children:"Link"}),e(n,{variant:"unstyled",children:"Unstyle"})]}),I=()=>e(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),x=()=>r(s,{children:[e(n,{isDisabled:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isDisabled:!0}),e(n,{isDisabled:!0,children:({onClick:o,isDisabled:t})=>e(g,{onClick:o,opacity:t?.4:1,cursor:t?"not-allowed":"pointer",_hover:t?void 0:{textDecoration:"underline"},children:"Upload"})}),e(M,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),D=()=>r(s,{children:[e(n,{isReadOnly:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isReadOnly:!0}),e(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:t})=>e(g,{onClick:o,cursor:t?"default":"pointer",_hover:t?void 0:{textDecoration:"underline"},children:"Upload"})}),e(M,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),O=()=>r(s,{children:[e(n,{isInvalid:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isInvalid:!0}),e(M,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e(n,{children:"Upload"})})]}),L=()=>{const[o,t]=u.useState(null),a=u.useRef(null),l=()=>{var d;t(null),(d=a.current)==null||d.call(a)};return r(s,{children:[r(Ae,{children:["files: ",(o==null?void 0:o.length)??0]}),r(ve,{children:[e(n,{resetRef:a,onChange:t,children:"Upload"}),e(j,{onClick:l,children:"Reset"})]})]})},P=()=>{var f;const o=u.useRef(null),{control:t,handleSubmit:a,watch:l,setValue:d,formState:{errors:S}}=Oe(),z=()=>{var c;d("fileButton",null),(c=o.current)==null||c.call(o)},T=c=>console.log("submit:",c);return console.log("watch:",l()),r(Ee,{as:"form",onSubmit:a(T),children:[e(M,{isInvalid:!!S.fileButton,label:"Files",errorMessage:(f=S.fileButton)==null?void 0:f.message,children:e(Le,{name:"fileButton",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:c,name:W,onChange:i,onBlur:m}})=>r(ve,{children:[e(n,{ref:c,name:W,onChange:i,onBlur:m,resetRef:o,children:"Upload"}),e(j,{onClick:z,children:"Reset"})]})})}),e(j,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,E,N;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var X,Y,J;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(J=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var K,Q,Z;R.parameters={...R.parameters,docs:{...(K=R.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept='image/png,image/jpeg'>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} accept='image/png,image/jpeg' />

      <FileButton accept='image/png,image/jpeg'>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Z=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var $,ee,ne;U.parameters={...U.parameters,docs:{...($=U.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <FileButton colorScheme='primary' size='xs'>
        X Small
      </FileButton>

      <FileButton colorScheme='secondary' size='sm'>
        Small
      </FileButton>

      <FileButton colorScheme='warning' size='md'>
        Medium
      </FileButton>

      <FileButton colorScheme='danger' size='lg'>
        Large
      </FileButton>
    </Wrap>;
}`,...(ne=(ee=U.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,re,te;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <FileButton colorScheme='primary'>Primary</FileButton>

      <FileButton colorScheme='secondary'>Secondary</FileButton>

      <FileButton colorScheme='warning'>Warning</FileButton>

      <FileButton colorScheme='danger'>Danger</FileButton>

      <FileButton colorScheme='link'>Link</FileButton>

      <FileButton colorScheme='gray'>Gray</FileButton>

      <FileButton colorScheme='red'>Red</FileButton>

      <FileButton colorScheme='orange'>Orange</FileButton>

      <FileButton colorScheme='yellow'>Yellow</FileButton>

      <FileButton colorScheme='green'>Green</FileButton>

      <FileButton colorScheme='teal'>Teal</FileButton>

      <FileButton colorScheme='blue'>Blue</FileButton>

      <FileButton colorScheme='cyan'>Cyan</FileButton>

      <FileButton colorScheme='purple'>Purple</FileButton>

      <FileButton colorScheme='pink'>pink</FileButton>
    </Wrap>;
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,ie,ae;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Wrap gap='md'>
      <FileButton colorScheme='primary' variant='solid'>
        Solid
      </FileButton>

      <FileButton colorScheme='secondary' variant='outline'>
        Outline
      </FileButton>

      <FileButton colorScheme='warning' variant='ghost'>
        Ghost
      </FileButton>

      <FileButton colorScheme='danger' variant='link'>
        Link
      </FileButton>

      <FileButton variant='unstyled'>Unstyle</FileButton>
    </Wrap>;
}`,...(ae=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:ae.source}}};var ce,se,ue;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <FileButton isInvalid errorBorderColor='orange.500'>
      Upload
    </FileButton>;
}`,...(ue=(se=I.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var de,me,pe;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <>
      <FileButton isDisabled>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isDisabled />

      <FileButton isDisabled>
        {({
        onClick,
        isDisabled
      }) => <Link onClick={onClick} opacity={isDisabled ? 0.4 : 1} cursor={isDisabled ? 'not-allowed' : 'pointer'} _hover={isDisabled ? undefined : {
        textDecoration: 'underline'
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isDisabled label='Upload file' helperMessage='Please select a file to upload.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(pe=(me=x.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var he,Be,Fe;D.parameters={...D.parameters,docs:{...(he=D.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <FileButton isReadOnly>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isReadOnly />

      <FileButton isReadOnly>
        {({
        onClick,
        isReadOnly
      }) => <Link onClick={onClick} cursor={isReadOnly ? 'default' : 'pointer'} _hover={isReadOnly ? undefined : {
        textDecoration: 'underline'
      }}>
            Upload
          </Link>}
      </FileButton>

      <FormControl isReadOnly label='Upload file' helperMessage='Please select a file to upload.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(Fe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var ge,Se,fe;O.parameters={...O.parameters,docs:{...(ge=O.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid />

      <FormControl isInvalid label='Upload file' errorMessage='File is required.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(fe=(Se=O.parameters)==null?void 0:Se.docs)==null?void 0:fe.source}}};var ke,Ce,ye;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const [files, onChange] = useState<File[] | null>(null);
  const resetRef = useRef<() => void>(null);
  const onReset = () => {
    onChange(null);
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
}`,...(ye=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var be,Re,Ue;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
    setValue('fileButton', null);
    resetRef.current?.();
  };
  const onSubmit: SubmitHandler<Data> = data => console.log('submit:', data);
  console.log('watch:', watch());
  return <VStack as='form' onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.fileButton} label='Files' errorMessage={errors.fileButton?.message}>
        <Controller name='fileButton' control={control} rules={{
        required: {
          value: true,
          message: 'This is required.'
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

      <Button type='submit' alignSelf='flex-end'>
        Submit
      </Button>
    </VStack>;
}`,...(Ue=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source}}};const Fn=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{Fn as __namedExportsOrder,y as basic,Bn as default,x as isDisabled,O as isInvalid,D as isReadonly,P as reactHookForm,L as useReset,R as withAccept,I as withBorderColor,v as withColorScheme,b as withMultiple,U as withSize,w as withVariant};
//# sourceMappingURL=file-button.stories-164139fe.js.map
