import{j as e,a as r,F as s}from"./jsx-runtime-29545a09.js";import{I as h,j as B}from"./fontawesome-icon-516f4657.js";import{r as u}from"./index-76fb7be0.js";import{u as Le,C as Oe}from"./index.esm-52a02924.js";import{u as Pe,f as ze,F as j}from"./form-control-de73da49.js";import{O as je,E as G,e as Me,y as Ve,v as Te,g as We,d as He,w as qe,z as Ae}from"./factory-5f559ecf.js";import{B as z}from"./button-c5f6c9cf.js";import{f as Ge}from"./forward-ref-8b7d2a6f.js";import{I as F}from"./icon-button-132ac260.js";import{L as S}from"./link-80676434.js";import{W}from"./flex-b48ca9be.js";import{T as _e}from"./text-d2a6f75b.js";import{H as ve,V as Ee}from"./stack-507792b8.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-96427744.js";import"./index-d06ecb96.js";import"./theme-ee3e3fce.js";import"./use-component-style-5e7d3fa1.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./loading-f83bd05e.js";import"./index-e993c520.js";import"./index-a4d0044e.js";const n=Ge(({className:o,resetRef:t,as:a,children:l,...d},g)=>{const{id:M,name:V,accept:f,multiple:c,form:T,...i}=Pe(d),{disabled:m,readOnly:k,required:H,"aria-invalid":we}=i,C=u.useRef(null),q=u.useCallback(()=>{var p;m||k||(p=C.current)==null||p.click()},[m,k]),Ie=u.useCallback(p=>{var A;const De=je(p.currentTarget.files)?null:Array.from(p.currentTarget.files);(A=i.onChange)==null||A.call(i,De)},[i]),xe=u.useCallback(()=>{C.current&&(C.current.value="")},[]);return G(l)||(l=e(a||z,{className:Me("ui-file-button",o),...Ve(i,["onChange"]),onClick:Te(i.onClick,q),children:l})),We(t,xe),r(s,{children:[e(He.input,{ref:qe(C,g),type:"file",tabIndex:-1,id:M,name:V,form:T,accept:f,multiple:c,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:Ie,...Ae(i,ze)}),G(l)?l({onClick:q,disabled:m,readOnly:k,required:H,isDisabled:m,isReadOnly:k,isRequired:H,isInvalid:we}):l]})}),Fn={title:"Components / Forms / FileButton",component:n},y=()=>r(s,{children:[e(n,{children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B})}),e(n,{children:({onClick:o})=>e(S,{onClick:o,children:"Upload"})})]}),b=()=>r(s,{children:[e(n,{multiple:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),multiple:!0}),e(n,{multiple:!0,children:({onClick:o})=>e(S,{onClick:o,children:"Upload"})})]}),R=()=>r(s,{children:[e(n,{accept:"image/png,image/jpeg",children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),accept:"image/png,image/jpeg"}),e(n,{accept:"image/png,image/jpeg",children:({onClick:o})=>e(S,{onClick:o,children:"Upload"})})]}),U=()=>r(W,{gap:"md",children:[e(n,{colorScheme:"primary",size:"xs",children:"X Small"}),e(n,{colorScheme:"secondary",size:"sm",children:"Small"}),e(n,{colorScheme:"warning",size:"md",children:"Medium"}),e(n,{colorScheme:"danger",size:"lg",children:"Large"})]}),v=()=>r(W,{gap:"md",children:[e(n,{colorScheme:"primary",children:"Primary"}),e(n,{colorScheme:"secondary",children:"Secondary"}),e(n,{colorScheme:"warning",children:"Warning"}),e(n,{colorScheme:"danger",children:"Danger"}),e(n,{colorScheme:"link",children:"Link"}),e(n,{colorScheme:"gray",children:"Gray"}),e(n,{colorScheme:"zinc",children:"Zinc"}),e(n,{colorScheme:"neutral",children:"Neutral"}),e(n,{colorScheme:"stone",children:"Stone"}),e(n,{colorScheme:"red",children:"Red"}),e(n,{colorScheme:"rose",children:"Rose"}),e(n,{colorScheme:"pink",children:"Pink"}),e(n,{colorScheme:"orange",children:"Orange"}),e(n,{colorScheme:"amber",children:"Amber"}),e(n,{colorScheme:"yellow",children:"Yellow"}),e(n,{colorScheme:"lime",children:"Lime"}),e(n,{colorScheme:"green",children:"Green"}),e(n,{colorScheme:"emerald",children:"Emerald"}),e(n,{colorScheme:"teal",children:"Teal"}),e(n,{colorScheme:"cyan",children:"Cyan"}),e(n,{colorScheme:"sky",children:"Sky"}),e(n,{colorScheme:"blue",children:"Blue"}),e(n,{colorScheme:"indigo",children:"Indigo"}),e(n,{colorScheme:"violet",children:"Violet"}),e(n,{colorScheme:"purple",children:"Purple"}),e(n,{colorScheme:"fuchsia",children:"Fuchsia"})]}),w=()=>r(W,{gap:"md",children:[e(n,{colorScheme:"primary",variant:"solid",children:"Solid"}),e(n,{colorScheme:"secondary",variant:"outline",children:"Outline"}),e(n,{colorScheme:"warning",variant:"ghost",children:"Ghost"}),e(n,{colorScheme:"danger",variant:"link",children:"Link"}),e(n,{variant:"unstyled",children:"Unstyle"})]}),I=()=>e(n,{isInvalid:!0,errorBorderColor:"orange.500",children:"Upload"}),x=()=>r(s,{children:[e(n,{isDisabled:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isDisabled:!0}),e(n,{isDisabled:!0,children:({onClick:o,isDisabled:t})=>e(S,{onClick:o,opacity:t?.4:1,cursor:t?"not-allowed":"pointer",_hover:t?void 0:{textDecoration:"underline"},children:"Upload"})}),e(j,{isDisabled:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),D=()=>r(s,{children:[e(n,{isReadOnly:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isReadOnly:!0}),e(n,{isReadOnly:!0,children:({onClick:o,isReadOnly:t})=>e(S,{onClick:o,cursor:t?"default":"pointer",_hover:t?void 0:{textDecoration:"underline"},children:"Upload"})}),e(j,{isReadOnly:!0,label:"Upload file",helperMessage:"Please select a file to upload.",children:e(n,{children:"Upload"})})]}),L=()=>r(s,{children:[e(n,{isInvalid:!0,children:"Upload"}),e(n,{as:F,icon:e(h,{icon:B}),isInvalid:!0}),e(j,{isInvalid:!0,label:"Upload file",errorMessage:"File is required.",children:e(n,{children:"Upload"})})]}),O=()=>{const[o,t]=u.useState(null),a=u.useRef(null),l=()=>{var d;t(null),(d=a.current)==null||d.call(a)};return r(s,{children:[r(_e,{children:["files: ",(o==null?void 0:o.length)??0]}),r(ve,{children:[e(n,{resetRef:a,onChange:t,children:"Upload"}),e(z,{onClick:l,children:"Reset"})]})]})},P=()=>{var f;const o=u.useRef(null),{control:t,handleSubmit:a,watch:l,setValue:d,formState:{errors:g}}=Le(),M=()=>{var c;d("fileButton",null),(c=o.current)==null||c.call(o)},V=c=>console.log("submit:",c);return console.log("watch:",l()),r(Ee,{as:"form",onSubmit:a(V),children:[e(j,{isInvalid:!!g.fileButton,label:"Files",errorMessage:(f=g.fileButton)==null?void 0:f.message,children:e(Oe,{name:"fileButton",control:t,rules:{required:{value:!0,message:"This is required."}},render:({field:{ref:c,name:T,onChange:i,onBlur:m}})=>r(ve,{children:[e(n,{ref:c,name:T,onChange:i,onBlur:m,resetRef:o,children:"Upload"}),e(z,{onClick:M,children:"Reset"})]})})}),e(z,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var _,E,N;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <>
      <FileButton>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} />

      <FileButton>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(N=(E=y.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <FileButton multiple>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} multiple />

      <FileButton multiple>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,K,Q;R.parameters={...R.parameters,docs:{...(J=R.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <FileButton accept='image/png,image/jpeg'>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} accept='image/png,image/jpeg' />

      <FileButton accept='image/png,image/jpeg'>
        {({
        onClick
      }) => <Link onClick={onClick}>Upload</Link>}
      </FileButton>
    </>;
}`,...(Q=(K=R.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var $,ee,ne;U.parameters={...U.parameters,docs:{...($=U.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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

      <FileButton colorScheme='zinc'>Zinc</FileButton>

      <FileButton colorScheme='neutral'>Neutral</FileButton>

      <FileButton colorScheme='stone'>Stone</FileButton>

      <FileButton colorScheme='red'>Red</FileButton>

      <FileButton colorScheme='rose'>Rose</FileButton>

      <FileButton colorScheme='pink'>Pink</FileButton>

      <FileButton colorScheme='orange'>Orange</FileButton>

      <FileButton colorScheme='amber'>Amber</FileButton>

      <FileButton colorScheme='yellow'>Yellow</FileButton>

      <FileButton colorScheme='lime'>Lime</FileButton>

      <FileButton colorScheme='green'>Green</FileButton>

      <FileButton colorScheme='emerald'>Emerald</FileButton>

      <FileButton colorScheme='teal'>Teal</FileButton>

      <FileButton colorScheme='cyan'>Cyan</FileButton>

      <FileButton colorScheme='sky'>Sky</FileButton>

      <FileButton colorScheme='blue'>Blue</FileButton>

      <FileButton colorScheme='indigo'>Indigo</FileButton>

      <FileButton colorScheme='violet'>Violet</FileButton>

      <FileButton colorScheme='purple'>Purple</FileButton>

      <FileButton colorScheme='fuchsia'>Fuchsia</FileButton>
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
}`,...(Fe=(Be=D.parameters)==null?void 0:Be.docs)==null?void 0:Fe.source}}};var Se,ge,fe;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <FileButton isInvalid>Upload</FileButton>

      <FileButton as={IconButton} icon={<Icon icon={faPlus} />} isInvalid />

      <FormControl isInvalid label='Upload file' errorMessage='File is required.'>
        <FileButton>Upload</FileButton>
      </FormControl>
    </>;
}`,...(fe=(ge=L.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ke,Ce,ye;O.parameters={...O.parameters,docs:{...(ke=O.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(ye=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var be,Re,Ue;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ue.source}}};const Sn=["basic","withMultiple","withAccept","withSize","withColorScheme","withVariant","withBorderColor","isDisabled","isReadonly","isInvalid","useReset","reactHookForm"];export{Sn as __namedExportsOrder,y as basic,Fn as default,x as isDisabled,L as isInvalid,D as isReadonly,P as reactHookForm,O as useReset,R as withAccept,I as withBorderColor,v as withColorScheme,b as withMultiple,U as withSize,w as withVariant};
//# sourceMappingURL=file-button.stories-d2b9cd09.js.map
