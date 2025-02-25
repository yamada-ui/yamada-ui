import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as ye}from"./index.esm-C038jXrr.js";import{I as a,a as w,b as Se,c as E,d as D}from"./input-group-BPieaNB7.js";import{P as Ce}from"./phone-CLaT1lyf.js";import{I as r}from"./input-D8w53ljh.js";import{d as s}from"./form-control-DgcE1-oN.js";import{u as Fe}from"./index-qZwaV1-B.js";import{M as q}from"./mail-HCbeD6l4.js";import{C as we}from"./check-DlCKAjBz.js";import{B as M}from"./button-CqSjNDtY.js";import{V as be}from"./stack-BP8LKMVN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./use-var-DlbRU9j0.js";import"./icon-Dk5VwDTI.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";const Ze={component:r,title:"Components / Forms / Input"},c=()=>e.jsx(r,{placeholder:"basic"}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),I=()=>e.jsx(r,{"aria-label":"Input",htmlSize:4,width:"auto"}),g=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",isInvalid:!0,placeholder:"custom border color"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isDisabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isDisabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isDisabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isDisabled:!0,placeholder:"unstyled"}),e.jsx(s,{helperMessage:"We'll never share your email.",isDisabled:!0,label:"Email address",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isReadOnly:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isReadOnly:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isReadOnly:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isReadOnly:!0,placeholder:"unstyled"}),e.jsx(s,{helperMessage:"We'll never share your email.",isReadOnly:!0,label:"Email address",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",isInvalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",isInvalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",isInvalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",isInvalid:!0,placeholder:"unstyled"}),e.jsx(s,{errorMessage:"Email is required.",isInvalid:!0,label:"Email address",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(a,{children:[e.jsx(w,{children:"https://"}),e.jsx(r,{placeholder:"your site address"}),e.jsx(Se,{children:".com"})]})]}),b=()=>{const[n,{toggle:l}]=Fe();return e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(Ce,{})}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your email address"}),e.jsx(D,{children:e.jsx(we,{color:"green.500"})})]}),e.jsxs(a,{size:"md",children:[e.jsx(r,{type:n?"text":"password",placeholder:"your password",pr:"4.5rem"}),e.jsx(D,{isClickable:!0,w:"4.5rem",children:e.jsx(M,{size:"sm",h:"1.75rem",onClick:l,children:n?"Hide":"Show"})})]})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_dark:{_placeholder:{color:"blue.500",opacity:1}},_placeholder:{color:"blue.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_dark:{_placeholder:{color:"inherit"}},_placeholder:{color:"inherit"}})]}),S=()=>e.jsx(r,{type:"datetime-local",size:"md",placeholder:"Select Date and Time"}),C=()=>{var u,i,d;const{formState:{errors:n},handleSubmit:l,register:o,watch:t}=ye(),z=p=>console.log("submit:",p);return console.log("watch:",t()),e.jsxs(be,{as:"form",onSubmit:l(z),children:[e.jsx(s,{errorMessage:(u=n.name)==null?void 0:u.message,isInvalid:!!n.name,label:"Name",children:e.jsx(r,{placeholder:"孫悟空",...o("name",{required:{message:"This is required.",value:!0}})})}),e.jsx(s,{errorMessage:(i=n.cellphone)==null?void 0:i.message,isInvalid:!!n.cellphone,label:"Cellphone",children:e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"0000-0000",...o("cellphone",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(s,{errorMessage:(d=n.email)==null?void 0:d.message,isInvalid:!!n.email,label:"Email",children:e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...o("email",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},F=()=>{var i,d,p;const n={name:"孫悟空",cellphone:"090-1234-5678",email:"hoge@example.com"},{formState:{errors:l},handleSubmit:o,register:t,watch:z}=ye({defaultValues:n}),u=ve=>console.log("submit:",ve);return console.log("watch:",z()),e.jsxs(be,{as:"form",onSubmit:o(u),children:[e.jsx(s,{errorMessage:(i=l.name)==null?void 0:i.message,isInvalid:!!l.name,label:"Name",children:e.jsx(r,{placeholder:"孫悟空",...t("name",{required:{message:"This is required.",value:!0}})})}),e.jsx(s,{errorMessage:(d=l.cellphone)==null?void 0:d.message,isInvalid:!!l.cellphone,label:"Cellphone",children:e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"090-0000-0000",...t("cellphone",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(s,{errorMessage:(p=l.email)==null?void 0:p.message,isInvalid:!!l.email,label:"Email",children:e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...t("email",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var R,L,k;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Input placeholder="basic" />;
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var G,T,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Input size="xs" placeholder="extra small size" />
      <Input size="sm" placeholder="small size" />
      <Input size="md" placeholder="medium size" />
      <Input size="lg" placeholder="large size" />
    </>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var A,_,V;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var O,H,W;I.parameters={...I.parameters,docs:{...(O=I.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Input aria-label="Input" htmlSize={4} width="auto" />;
}`,...(W=(H=I.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var P,N,J;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input errorBorderColor="orange.500" isInvalid placeholder="custom border color" />
    </>;
}`,...(J=(N=g.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" isDisabled placeholder="outline" />
      <Input variant="filled" isDisabled placeholder="filled" />
      <Input variant="flushed" isDisabled placeholder="flushed" />
      <Input variant="unstyled" isDisabled placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your email." isDisabled label="Email address">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" isReadOnly placeholder="outline" />
      <Input variant="filled" isReadOnly placeholder="filled" />
      <Input variant="flushed" isReadOnly placeholder="flushed" />
      <Input variant="unstyled" isReadOnly placeholder="unstyled" />

      <FormControl helperMessage="We'll never share your email." isReadOnly label="Email address">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" isInvalid placeholder="outline" />
      <Input variant="filled" isInvalid placeholder="filled" />
      <Input variant="flushed" isInvalid placeholder="flushed" />
      <Input variant="unstyled" isInvalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." isInvalid label="Email address">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(re=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,le,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ae=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,oe,te;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [show, {
    toggle
  }] = useBoolean();
  return <>
      <InputGroup>
        <InputLeftElement>
          <PhoneIcon />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <MailIcon />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>

      <InputGroup size="md">
        <Input type={show ? "text" : "password"} placeholder="your password" pr="4.5rem" />
        <InputRightElement isClickable w="4.5rem">
          <Button size="sm" h="1.75rem" onClick={toggle}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>;
}`,...(te=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,de,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default placeholder" />
      <Input placeholder="custom placeholder" _dark={{
      _placeholder: {
        color: "blue.500",
        opacity: 1
      }
    }} _placeholder={{
      color: "blue.500",
      opacity: 1
    }} />
      <Input color="green.500" placeholder="custom placeholder" _dark={{
      _placeholder: {
        color: "inherit"
      }
    }} _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,ce,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Input type="datetime-local" size="md" placeholder="Select Date and Time" />;
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,Ie,ge;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  interface Data {
    name: string;
    cellphone: string;
    email: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.name?.message} isInvalid={!!errors.name} label="Name">
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <FormControl errorMessage={errors.cellphone?.message} isInvalid={!!errors.cellphone} label="Cellphone">
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input type="tel" placeholder="0000-0000" {...register("cellphone", {
          required: {
            message: "This is required.",
            value: true
          }
        })} />
        </InputGroup>
      </FormControl>

      <FormControl errorMessage={errors.email?.message} isInvalid={!!errors.email} label="Email">
        <InputGroup>
          <InputLeftElement>
            <MailIcon />
          </InputLeftElement>
          <Input type="email" placeholder="your-address@example.com" {...register("email", {
          required: {
            message: "This is required.",
            value: true
          }
        })} />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(ge=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:ge.source}}};var xe,je,fe;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  interface Data {
    name: string;
    cellphone: string;
    email: string;
  }
  const defaultValues: Data = {
    name: "孫悟空",
    cellphone: "090-1234-5678",
    email: "hoge@example.com"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl errorMessage={errors.name?.message} isInvalid={!!errors.name} label="Name">
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <FormControl errorMessage={errors.cellphone?.message} isInvalid={!!errors.cellphone} label="Cellphone">
        <InputGroup>
          <InputLeftAddon>+81</InputLeftAddon>
          <Input type="tel" placeholder="090-0000-0000" {...register("cellphone", {
          required: {
            message: "This is required.",
            value: true
          }
        })} />
        </InputGroup>
      </FormControl>

      <FormControl errorMessage={errors.email?.message} isInvalid={!!errors.email} label="Email">
        <InputGroup>
          <InputLeftElement>
            <MailIcon />
          </InputLeftElement>
          <Input type="email" placeholder="your-address@example.com" {...register("email", {
          required: {
            message: "This is required.",
            value: true
          }
        })} />
        </InputGroup>
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(fe=(je=F.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};const $e=["basic","withSize","withVariant","withHTMLSize","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","stylingPlaceholder","customType","reactHookForm","reactHookFormWithDefaultValue"];export{$e as __namedExportsOrder,c as basic,S as customType,Ze as default,x as isDisabled,f as isInvalid,j as isReadonly,C as reactHookForm,F as reactHookFormWithDefaultValue,v as stylingPlaceholder,y as useAddon,b as useElement,g as withBorderColor,I as withHTMLSize,m as withSize,h as withVariant};
