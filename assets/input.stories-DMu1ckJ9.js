import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as Se}from"./index-Du0-7Fls.js";import{u as fe}from"./index.esm-DXPXqkjk.js";import{I as n,a as w,d as Fe,b as E,c as D}from"./input-element-BGdGd7p5.js";import{P as Ce}from"./phone-Ce4mC0TE.js";import{I as r}from"./input-BDZrIgdg.js";import{F as l}from"./form-control-CIY1pXM3.js";import{M as q}from"./mail-9RO_WhFp.js";import{C as we}from"./check-BMX5CThc.js";import{B as M}from"./button-CaNlM53L.js";import{V as be}from"./stack-ChUXZSU5.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BpAeq05e.js";import"./theme-provider-8-IaQrJV.js";import"./factory-DIvfNQLw.js";import"./extends-CF3RwP-h.js";import"./forward-ref-DKTvpK5d.js";import"./index-Drjw1BrQ.js";import"./use-component-style-BLXFHnsW.js";import"./lucide-icon-Dvdgi_la.js";import"./icon-Bon_IeHI.js";import"./use-ripple-sRmjwWlS.js";import"./factory-DY7K8SpK.js";import"./motion-Bd6WkMzw.js";import"./loading-_68QapUp.js";const $e={title:"Components / Forms / Input",component:r},c=()=>e.jsx(r,{placeholder:"basic"}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"extra small size",size:"xs"}),e.jsx(r,{placeholder:"small size",size:"sm"}),e.jsx(r,{placeholder:"medium size",size:"md"}),e.jsx(r,{placeholder:"large size",size:"lg"})]}),h=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"outline",placeholder:"outline"}),e.jsx(r,{variant:"filled",placeholder:"filled"}),e.jsx(r,{variant:"flushed",placeholder:"flushed"}),e.jsx(r,{variant:"unstyled",placeholder:"unstyled"})]}),g=()=>e.jsx(e.Fragment,{children:e.jsx(r,{htmlSize:4,width:"auto","aria-label":"Input"})}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default border color"}),e.jsx(r,{focusBorderColor:"green.500",placeholder:"custom border color"}),e.jsx(r,{isInvalid:!0,errorBorderColor:"orange.500",placeholder:"custom border color"})]}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isDisabled:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isDisabled:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isDisabled:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isDisabled:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),j=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isReadOnly:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isReadOnly:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isReadOnly:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isReadOnly:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,variant:"outline",placeholder:"outline"}),e.jsx(r,{isInvalid:!0,variant:"filled",placeholder:"filled"}),e.jsx(r,{isInvalid:!0,variant:"flushed",placeholder:"flushed"}),e.jsx(r,{isInvalid:!0,variant:"unstyled",placeholder:"unstyled"}),e.jsx(l,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e.jsx(r,{type:"email",placeholder:"your email address"})})]}),f=()=>e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(n,{children:[e.jsx(w,{children:"https://"}),e.jsx(r,{placeholder:"your site address"}),e.jsx(Fe,{children:".com"})]})]}),b=()=>{const[a,{toggle:t}]=Se();return e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(E,{children:e.jsx(Ce,{})}),e.jsx(r,{type:"tel",placeholder:"your phone number"})]}),e.jsxs(n,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your email address"}),e.jsx(D,{children:e.jsx(we,{color:"green.500"})})]}),e.jsxs(n,{size:"md",children:[e.jsx(r,{pr:"4.5rem",type:a?"text":"password",placeholder:"your password"}),e.jsx(D,{w:"4.5rem",isClick:!0,children:e.jsx(M,{h:"1.75rem",size:"sm",onClick:t,children:a?"Hide":"Show"})})]})]})},v=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{placeholder:"default placeholder"}),e.jsx(r,{placeholder:"custom placeholder",_placeholder:{opacity:1,color:"blue.500"},_dark:{_placeholder:{opacity:1,color:"blue.500"}}}),e.jsx(r,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"},_dark:{_placeholder:{color:"inherit"}}})]}),S=()=>e.jsx(e.Fragment,{children:e.jsx(r,{placeholder:"Select Date and Time",size:"md",type:"datetime-local"})}),F=()=>{var u,i,d;const{register:a,handleSubmit:t,watch:z,formState:{errors:s}}=fe(),o=p=>console.log("submit:",p);return console.log("watch:",z()),e.jsxs(be,{as:"form",onSubmit:t(o),children:[e.jsx(l,{isInvalid:!!s.name,label:"Name",errorMessage:(u=s.name)==null?void 0:u.message,children:e.jsx(r,{placeholder:"孫悟空",...a("name",{required:{value:!0,message:"This is required."}})})}),e.jsx(l,{isInvalid:!!s.cellphone,label:"Cellphone",errorMessage:(i=s.cellphone)==null?void 0:i.message,children:e.jsxs(n,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"0000-0000",...a("cellphone",{required:{value:!0,message:"This is required."}})})]})}),e.jsx(l,{isInvalid:!!s.email,label:"Email",errorMessage:(d=s.email)==null?void 0:d.message,children:e.jsxs(n,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...a("email",{required:{value:!0,message:"This is required."}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},C=()=>{var i,d,p;const a={name:"孫悟空",cellphone:"090-1234-5678",email:"hoge@example.com"},{register:t,handleSubmit:z,watch:s,formState:{errors:o}}=fe({defaultValues:a}),u=ve=>console.log("submit:",ve);return console.log("watch:",s()),e.jsxs(be,{as:"form",onSubmit:z(u),children:[e.jsx(l,{isInvalid:!!o.name,label:"Name",errorMessage:(i=o.name)==null?void 0:i.message,children:e.jsx(r,{placeholder:"孫悟空",...t("name",{required:{value:!0,message:"This is required."}})})}),e.jsx(l,{isInvalid:!!o.cellphone,label:"Cellphone",errorMessage:(d=o.cellphone)==null?void 0:d.message,children:e.jsxs(n,{children:[e.jsx(w,{children:"+81"}),e.jsx(r,{type:"tel",placeholder:"090-0000-0000",...t("cellphone",{required:{value:!0,message:"This is required."}})})]})}),e.jsx(l,{isInvalid:!!o.email,label:"Email",errorMessage:(p=o.email)==null?void 0:p.message,children:e.jsxs(n,{children:[e.jsx(E,{children:e.jsx(q,{})}),e.jsx(r,{type:"email",placeholder:"your-address@example.com",...t("email",{required:{value:!0,message:"This is required."}})})]})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var R,L,k;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <Input placeholder="basic" />;
}`,...(k=(L=c.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var G,T,B;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="extra small size" size="xs" />
      <Input placeholder="small size" size="sm" />
      <Input placeholder="medium size" size="md" />
      <Input placeholder="large size" size="lg" />
    </>;
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var A,_,V;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <>
      <Input variant="outline" placeholder="outline" />
      <Input variant="filled" placeholder="filled" />
      <Input variant="flushed" placeholder="flushed" />
      <Input variant="unstyled" placeholder="unstyled" />
    </>;
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var O,H,W;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <>
      <Input htmlSize={4} width="auto" aria-label="Input" />
    </>;
}`,...(W=(H=g.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var P,N,J;I.parameters={...I.parameters,docs:{...(P=I.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="default border color" />
      <Input focusBorderColor="green.500" placeholder="custom border color" />
      <Input isInvalid errorBorderColor="orange.500" placeholder="custom border color" />
    </>;
}`,...(J=(N=I.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,U;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <>
      <Input isDisabled variant="outline" placeholder="outline" />
      <Input isDisabled variant="filled" placeholder="filled" />
      <Input isDisabled variant="flushed" placeholder="flushed" />
      <Input isDisabled variant="unstyled" placeholder="unstyled" />

      <FormControl isDisabled label="Email address" helperMessage="We'll never share your email.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(U=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Input isReadOnly variant="outline" placeholder="outline" />
      <Input isReadOnly variant="filled" placeholder="filled" />
      <Input isReadOnly variant="flushed" placeholder="flushed" />
      <Input isReadOnly variant="unstyled" placeholder="unstyled" />

      <FormControl isReadOnly label="Email address" helperMessage="We'll never share your email.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <>
      <Input isInvalid variant="outline" placeholder="outline" />
      <Input isInvalid variant="filled" placeholder="filled" />
      <Input isInvalid variant="flushed" placeholder="flushed" />
      <Input isInvalid variant="unstyled" placeholder="unstyled" />

      <FormControl isInvalid label="Email address" errorMessage="Email is required.">
        <Input type="email" placeholder="your email address" />
      </FormControl>
    </>;
}`,...(re=(ee=y.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,le,ae;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(ae=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,oe,te;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  const [show, {
    toggle
  }] = useBoolean();
  return <>
      <InputGroup>
        <InputLeftElement>
          <Phone />
        </InputLeftElement>
        <Input type="tel" placeholder="your phone number" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement>
          <Mail />
        </InputLeftElement>
        <Input type="email" placeholder="your email address" />
        <InputRightElement>
          <Check color="green.500" />
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
}`,...(te=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ie,de,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ue=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,ce,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <>
      <Input placeholder="Select Date and Time" size="md" type="datetime-local" />
    </>;
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var he,ge,Ie;F.parameters={...F.parameters,docs:{...(he=F.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
            <Mail />
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
}`,...(Ie=(ge=F.parameters)==null?void 0:ge.docs)==null?void 0:Ie.source}}};var xe,je,ye;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
            <Mail />
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
}`,...(ye=(je=C.parameters)==null?void 0:je.docs)==null?void 0:ye.source}}};const er=["basic","withSize","withVariant","withHTMLSize","withBorderColor","isDisabled","isReadonly","isInvalid","useAddon","useElement","stylingPlaceholder","customType","reactHookForm","reactHookFormWithDefaultValue"];export{er as __namedExportsOrder,c as basic,S as customType,$e as default,x as isDisabled,y as isInvalid,j as isReadonly,F as reactHookForm,C as reactHookFormWithDefaultValue,v as stylingPlaceholder,f as useAddon,b as useElement,I as withBorderColor,g as withHTMLSize,m as withSize,h as withVariant};
