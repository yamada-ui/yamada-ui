import{a as e,j as n,F as l}from"./jsx-runtime-b08f8875.js";import{I as D,d as R,c as ze}from"./fontawesome-icon-55aa2a9e.js";import{u as Ce}from"./index.esm-b68ff52f.js";import{a as qe}from"./index.esm-86457406.js";import{I as a,a as x,b as De,c as L,d as G}from"./input-element-7e574bd4.js";import{I as r}from"./input-67a14b07.js";import{F as o}from"./form-control-8d0ebc8d.js";import{u as xe}from"./index-c3db8104.js";import{b as Le}from"./icon-a76117e5.js";import{B as k}from"./button-a09a9cfc.js";import{V as Fe}from"./stack-57e4b232.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";import"./index-8d47fad6.js";import"./forward-ref-cf7188bd.js";import"./factory-2d442159.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./index-7636bab8.js";import"./theme-provider-78d359c6.js";import"./index-980936f4.js";import"./use-component-style-b6002d28.js";import"./loading-9c6ba408.js";import"./index-a8e328c0.js";import"./index-0e02ae64.js";const rr={title:"Components / Forms / Input",component:r},h=()=>e(r,{placeholder:"basic"}),I=()=>n(l,{children:[e(r,{placeholder:"extra small size",size:"xs"}),e(r,{placeholder:"small size",size:"sm"}),e(r,{placeholder:"medium size",size:"md"}),e(r,{placeholder:"large size",size:"lg"})]}),g=()=>n(l,{children:[e(r,{variant:"outline",placeholder:"outline"}),e(r,{variant:"filled",placeholder:"filled"}),e(r,{variant:"flushed",placeholder:"flushed"}),e(r,{variant:"unstyled",placeholder:"unstyled"})]}),y=()=>e(l,{children:e(r,{htmlSize:4,width:"auto"})}),f=()=>n(l,{children:[e(r,{placeholder:"default border color"}),e(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),b=()=>n(l,{children:[e(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e(o,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e(r,{type:"email",placeholder:"your email address"})})]}),v=()=>n(l,{children:[e(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e(o,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e(r,{type:"email",placeholder:"your email address"})})]}),S=()=>n(l,{children:[e(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e(o,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e(r,{type:"email",placeholder:"your email address"})})]}),w=()=>n(l,{children:[n(a,{children:[e(x,{children:"+81"}),e(r,{type:"tel",placeholder:"your phone number"})]}),n(a,{children:[e(x,{children:"https://"}),e(r,{placeholder:"your site address"}),e(De,{children:".com"})]})]}),C=()=>{const[t,{toggle:d}]=xe();return n(l,{children:[n(a,{children:[e(L,{children:e(Le,{as:qe,color:"gray.500"})}),e(r,{type:"tel",placeholder:"your phone number"})]}),n(a,{children:[e(L,{children:e(D,{icon:R,color:"gray.500"})}),e(r,{type:"email",placeholder:"your email address"}),e(G,{children:e(D,{icon:ze,color:"green.500"})})]}),n(a,{size:"md",children:[e(r,{pr:"4.5rem",type:t?"text":"password",placeholder:"your password"}),e(G,{w:"4.5rem",isClick:!0,children:e(k,{h:"1.75rem",size:"sm",onClick:d,children:t?"Hide":"Show"})})]})]})},F=()=>n(l,{children:[e(r,{placeholder:"default placeholder"}),e(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"blue.500"},_dark:{_placeholder:{opacity:1,color:"blue.500"}}}),e(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"},_dark:{_placeholder:{color:"inherit"}}})]}),E=()=>e(l,{children:e(r,{placeholder:"Select Date and Time",size:"md",type:"datetime-local"})}),z=()=>{var p,u,c;const{register:t,handleSubmit:d,watch:M,formState:{errors:s}}=Ce(),i=m=>console.log("submit:",m);return console.log("watch:",M()),n(Fe,{as:"form",onSubmit:d(i),children:[e(o,{isInvalid:!!s.name,label:"Name",errorMessage:(p=s.name)==null?void 0:p.message,children:e(r,{placeholder:"孫悟空",...t("name",{required:{value:!0,message:"This is required."}})})}),e(o,{isInvalid:!!s.cellphone,label:"Cellphone",errorMessage:(u=s.cellphone)==null?void 0:u.message,children:n(a,{children:[e(x,{children:"+81"}),e(r,{type:"tel",placeholder:"0000-0000",...t("cellphone",{required:{value:!0,message:"This is required."}})})]})}),e(o,{isInvalid:!!s.email,label:"Email",errorMessage:(c=s.email)==null?void 0:c.message,children:n(a,{children:[e(L,{children:e(D,{icon:R,color:"gray.500"})}),e(r,{type:"email",placeholder:"your-address@example.com",...t("email",{required:{value:!0,message:"This is required."}})})]})}),e(k,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},q=()=>{var u,c,m;const t={name:"孫悟空",cellphone:"090-1234-5678",email:"hoge@example.com"},{register:d,handleSubmit:M,watch:s,formState:{errors:i}}=Ce({defaultValues:t}),p=Ee=>console.log("submit:",Ee);return console.log("watch:",s()),n(Fe,{as:"form",onSubmit:M(p),children:[e(o,{isInvalid:!!i.name,label:"Name",errorMessage:(u=i.name)==null?void 0:u.message,children:e(r,{placeholder:"孫悟空",...d("name",{required:{value:!0,message:"This is required."}})})}),e(o,{isInvalid:!!i.cellphone,label:"Cellphone",errorMessage:(c=i.cellphone)==null?void 0:c.message,children:n(a,{children:[e(x,{children:"+81"}),e(r,{type:"tel",placeholder:"090-0000-0000",...d("cellphone",{required:{value:!0,message:"This is required."}})})]})}),e(o,{isInvalid:!!i.email,label:"Email",errorMessage:(m=i.email)==null?void 0:m.message,children:n(a,{children:[e(L,{children:e(D,{icon:R,color:"gray.500"})}),e(r,{type:"email",placeholder:"your-address@example.com",...d("email",{required:{value:!0,message:"This is required."}})})]})}),e(k,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var A,T,B;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <Input placeholder="basic" />;
}`,...(B=(T=h.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var _,V,O;I.parameters={...I.parameters,docs:{...(_=I.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="sm" />
      <Input placeholder="medium size" size="md" />
      <Input placeholder="large size" size="lg" />
    </>;
}`,...(O=(V=I.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var H,W,N;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(N=(W=g.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,j,$;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Input htmlSize={4} width="auto" />
    </>;
}`,...($=(j=y.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <>
      <Input isDisabled variant="outline" placeholder="outline" />
      <Input isDisabled variant="filled" placeholder="filled" />
      <Input isDisabled variant="flushed" placeholder="flushed" />
      <Input isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Email address" helperMessage="We'll never share your email.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <Input isReadOnly variant="outline" placeholder="outline" />
      <Input isReadOnly variant="filled" placeholder="filled" />
      <Input isReadOnly variant="flushed" placeholder="flushed" />
      <Input isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Email address" helperMessage="We'll never share your email.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,le,ae;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Input isInvalid variant="outline" placeholder="outline" />
      <Input isInvalid variant="filled" placeholder="filled" />
      <Input isInvalid variant="flushed" placeholder="flushed" />
      <Input isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Email address" errorMessage="Email is required.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,te,se;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <>
      <InputGroup>
        <InputLeftAddon>+81</InputLeftAddon>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder="your site address" />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </>;
}`,...(se=(te=w.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,de,ue;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const [show, {
    toggle
  }] = useBoolean();
  return <>
      <InputGroup>
        <InputLeftElement>
          <Icon as={FaPhone} color="gray.500" />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <FontAwesomeIcon icon={faCheck} color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup size="md">
        <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="your password" />
        <InputRightElement w="4.5rem" isClick>
          <Button h="1.75rem" size="sm" onClick={toggle}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>;
}`,...(ue=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,me;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default placeholder" />
      <Input placeholder="custom placeholder" _placeholder={{
      opacity: 1,
      color: "blue.500"
    }} _dark={{
      _placeholder: {
        opacity: 1,
        color: "blue.500"
      }
    }} />
      <Input color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} _dark={{
      _placeholder: {
        color: "inherit"
      }
    }} />
    </>;
}`,...(me=(pe=F.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var he,Ie,ge;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
    </>;
}`,...(ge=(Ie=E.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var ye,fe,be;z.parameters={...z.parameters,docs:{...(ye=z.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  type Data = {
    name: string;
    cellphone: string;
    email: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name} label="Name" errorMessage={errors.name?.message}>
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <FormControl isInvalid={!!errors.cellphone} label="Cellphone" errorMessage={errors.cellphone?.message}>
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input type="tel" placeholder="0000-0000" {...register("cellphone", {
          required: {
            value: true,
            message: "This is required."
          }
        })} />
        </InputGroup>
      </FormControl>

      <FormControl isInvalid={!!errors.email} label="Email" errorMessage={errors.email?.message}>
        <InputGroup>
          <InputLeftElement>
            <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
          </InputLeftElement>
          <Input type="email" placeholder="your-address@example.com" {...register("email", {
          required: {
            value: true,
            message: "This is required."
          }
        })} />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(be=(fe=z.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ve,Se,we;q.parameters={...q.parameters,docs:{...(ve=q.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  type Data = {
    name: string;
    cellphone: string;
    email: string;
  };
  const defaultValues: Data = {
    name: "孫悟空",
    cellphone: "090-1234-5678",
    email: "hoge@example.com"
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.name} label="Name" errorMessage={errors.name?.message}>
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          value: true,
          message: "This is required."
        }
      })} />
      </FormControl>

      <FormControl isInvalid={!!errors.cellphone} label="Cellphone" errorMessage={errors.cellphone?.message}>
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input type="tel" placeholder="090-0000-0000" {...register("cellphone", {
          required: {
            value: true,
            message: "This is required."
          }
        })} />
        </InputGroup>
      </FormControl>

      <FormControl isInvalid={!!errors.email} label="Email" errorMessage={errors.email?.message}>
        <InputGroup>
          <InputLeftElement>
            <FontAwesomeIcon icon={faEnvelope} color="gray.500" />
          </InputLeftElement>
          <Input type="email" placeholder="your-address@example.com" {...register("email", {
          required: {
            value: true,
            message: "This is required."
          }
        })} />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(we=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};const nr=["basic","withSize","withVariant","withHTMLSize","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","stylingPlaceholder","customType","reactHookForm","reactHookFormWithDefaultValue"];export{nr as __namedExportsOrder,h as basic,E as customType,rr as default,b as isDisabled,S as isInvalid,v as isReadonly,z as reactHookForm,q as reactHookFormWithDefaultValue,F as stylingPlaceholder,w as useAddon,C as useElement,f as withBorderColor,y as withHTMLSize,I as withSize,g as withVariant};
//# sourceMappingURL=input.stories-bca60732.js.map
