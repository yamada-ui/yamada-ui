import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{u as ye}from"./index.esm-C038jXrr.js";import{I as a,a as w,b as Se,c as E,d as L}from"./input-group-BPieaNB7.js";import{P as Fe}from"./phone-CLaT1lyf.js";import{I as r}from"./input-D8w53ljh.js";import{d as o}from"./form-control-DgcE1-oN.js";import{u as Ce}from"./index-qZwaV1-B.js";import{M as q}from"./mail-HCbeD6l4.js";import{C as we}from"./check-DlCKAjBz.js";import{B as M}from"./button-CqSjNDtY.js";import{V as be}from"./stack-BP8LKMVN.js";import"./index-BwPxMuoB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-DbNU74ts.js";import"./forward-ref-Ukjd1cIW.js";import"./use-component-style-CpB_lyT3.js";import"./theme-provider-ChqdwXGn.js";import"./use-var-DlbRU9j0.js";import"./icon-Dk5VwDTI.js";import"./createLucideIcon-D0BTS2fX.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./proxy-BdCiNrpl.js";import"./factory-DGyI5Ya3.js";import"./loading-BVFohscl.js";const Ze={component:r,title:"Components / Forms / Input"},c=()=>e.jsx(r,{placeholder:"basic"}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"xs",placeholder:"extra small size"}),e.jsx(r,{size:"sm",placeholder:"small size"}),e.jsx(r,{size:"md",placeholder:"medium size"}),e.jsx(r,{size:"lg",placeholder:"large size"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsx(r,{"aria-label":"Input",htmlSize:4,width:"auto"}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{errorBorderColor:"orange.500",invalid:!0,placeholder:"custom border color"})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",disabled:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",disabled:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",disabled:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",disabled:!0,placeholder:"unstyled"}),e.jsx(o,{disabled:!0,helperMessage:"We'll never share your email.",label:"Email address",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline",readOnly:!0}),e.jsx(r,{variant:"filled",placeholder:"filled",readOnly:!0}),e.jsx(r,{variant:"flushed",placeholder:"flushed",readOnly:!0}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled",readOnly:!0}),e.jsx(o,{helperMessage:"We'll never share your email.",label:"Email address",readOnly:!0,children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",invalid:!0,placeholder:"outline"}),e.jsx(r,{variant:"filled",invalid:!0,placeholder:"filled"}),e.jsx(r,{variant:"flushed",invalid:!0,placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",invalid:!0,placeholder:"unstyled"}),e.jsx(o,{errorMessage:"Email is required.",invalid:!0,label:"Email address",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(a,{children:[e.jsx(w,{children:"https://"}),e.jsx(r,{placeholder:"your site address"}),e.jsx(Se,{children:".com"})]})]}),b=()=>{const[n,{toggle:l}]=Ce();return e.jsxs(e.Fragment,{children:[e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(Fe,{})}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your email address"}),e.jsx(L,{children:e.jsx(we,{color:"green.500"})})]}),e.jsxs(a,{size:"md",children:[e.jsx(r,{type:n?"text":"password",placeholder:"your password",pr:"4.5rem"}),e.jsx(L,{clickable:!0,w:"4.5rem",children:e.jsx(M,{size:"sm",h:"1.75rem",onClick:l,children:n?"Hide":"Show"})})]})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_dark:{_placeholder:{color:"blue.500",opacity:1}},_placeholder:{color:"blue.500",opacity:1}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_dark:{_placeholder:{color:"inherit"}},_placeholder:{color:"inherit"}})]}),S=()=>e.jsx(r,{type:"datetime-local",size:"md",placeholder:"Select Date and Time"}),F=()=>{var u,i,d;const{formState:{errors:n},handleSubmit:l,register:s,watch:t}=ye(),z=p=>console.log("submit:",p);return console.log("watch:",t()),e.jsxs(be,{as:"form",onSubmit:l(z),children:[e.jsx(o,{errorMessage:(u=n.name)==null?void 0:u.message,invalid:!!n.name,label:"Name",children:e.jsx(r,{placeholder:"孫悟空",...s("name",{required:{message:"This is required.",value:!0}})})}),e.jsx(o,{errorMessage:(i=n.cellphone)==null?void 0:i.message,invalid:!!n.cellphone,label:"Cellphone",children:e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"0000-0000",...s("cellphone",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(o,{errorMessage:(d=n.email)==null?void 0:d.message,invalid:!!n.email,label:"Email",children:e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...s("email",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},C=()=>{var i,d,p;const n={name:"孫悟空",cellphone:"090-1234-5678",email:"hoge@example.com"},{formState:{errors:l},handleSubmit:s,register:t,watch:z}=ye({defaultValues:n}),u=ve=>console.log("submit:",ve);return console.log("watch:",z()),e.jsxs(be,{as:"form",onSubmit:s(u),children:[e.jsx(o,{errorMessage:(i=l.name)==null?void 0:i.message,invalid:!!l.name,label:"Name",children:e.jsx(r,{placeholder:"孫悟空",...t("name",{required:{message:"This is required.",value:!0}})})}),e.jsx(o,{errorMessage:(d=l.cellphone)==null?void 0:d.message,invalid:!!l.cellphone,label:"Cellphone",children:e.jsxs(a,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"090-0000-0000",...t("cellphone",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(o,{errorMessage:(p=l.email)==null?void 0:p.message,invalid:!!l.email,label:"Email",children:e.jsxs(a,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...t("email",{required:{message:"This is required.",value:!0}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var k,G,T;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Input placeholder="basic" />;
}`,...(T=(G=c.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var B,A,_;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <>
      <Input size="xs" placeholder="extra small size" />
      <Input size="sm" placeholder="small size" />
      <Input size="md" placeholder="medium size" />
      <Input size="lg" placeholder="large size" />
    </>;
}`,...(_=(A=m.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var O,V,D;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(D=(V=h.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var H,R,W;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  return <Input aria-label="Input" htmlSize={4} width="auto" />;
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var P,N,J;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input errorBorderColor="orange.500" invalid placeholder="custom border color" />
    </>;
}`,...(J=(N=x.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,U;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" disabled placeholder="outline" />
      <Input variant="filled" disabled placeholder="filled" />
      <Input variant="flushed" disabled placeholder="flushed" />
      <Input variant="unstyled" disabled placeholder="unstyled" />

      <FormControl disabled helperMessage="We'll never share your email." label="Email address">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(U=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" placeholder="outline" readOnly />
      <Input variant="filled" placeholder="filled" readOnly />
      <Input variant="flushed" placeholder="flushed" readOnly />
      <Input variant="unstyled" placeholder="unstyled" readOnly />

      <FormControl helperMessage="We'll never share your email." label="Email address" readOnly>
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" invalid placeholder="outline" />
      <Input variant="filled" invalid placeholder="filled" />
      <Input variant="flushed" invalid placeholder="flushed" />
      <Input variant="unstyled" invalid placeholder="unstyled" />

      <FormControl errorMessage="Email is required." invalid label="Email address">
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
}`,...(ae=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var oe,se,te;b.parameters={...b.parameters,docs:{...(oe=b.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
        <InputRightElement clickable w="4.5rem">
          <Button size="sm" h="1.75rem" onClick={toggle}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>;
}`,...(te=(se=b.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,de,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,ge,xe;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.name?.message} invalid={!!errors.name} label="Name">
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <FormControl errorMessage={errors.cellphone?.message} invalid={!!errors.cellphone} label="Cellphone">
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

      <FormControl errorMessage={errors.email?.message} invalid={!!errors.email} label="Email">
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
}`,...(xe=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var Ie,je,fe;C.parameters={...C.parameters,docs:{...(Ie=C.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.name?.message} invalid={!!errors.name} label="Name">
        <Input placeholder="孫悟空" {...register("name", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </FormControl>

      <FormControl errorMessage={errors.cellphone?.message} invalid={!!errors.cellphone} label="Cellphone">
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

      <FormControl errorMessage={errors.email?.message} invalid={!!errors.email} label="Email">
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
}`,...(fe=(je=C.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};const $e=["basic","withSize","withVariant","withHTMLSize","withBorderColor","disabled","readOnly","invalid","useAddon","useElement","stylingPlaceholder","customType","reactHookForm","reactHookFormWithDefaultValue"];export{$e as __namedExportsOrder,c as basic,S as customType,Ze as default,I as disabled,f as invalid,F as reactHookForm,C as reactHookFormWithDefaultValue,j as readOnly,v as stylingPlaceholder,y as useAddon,b as useElement,x as withBorderColor,g as withHTMLSize,m as withSize,h as withVariant};
