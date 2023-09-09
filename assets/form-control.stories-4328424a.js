import{j as e,a as s,F as E}from"./jsx-runtime-29545a09.js";import{F as r,L as M,H as re,E as ae}from"./form-control-de73da49.js";import{I as a}from"./input-98fee7c8.js";import{T as g}from"./tag-9fe7b57f.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-5f559ecf.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./forward-ref-8b7d2a6f.js";import"./use-component-style-5e7d3fa1.js";import"./theme-ee3e3fce.js";import"./index-490f5d03.js";import"./index-55be9bf6.js";import"./icon-96427744.js";import"./index-d06ecb96.js";const Me={title:"Components / Forms / FormControl",component:r},l=()=>e(r,{label:"Email address",children:e(a,{type:"email",placeholder:"your email address"})}),o=()=>e(r,{label:"Email address",helperMessage:"We'll never share your email.",children:e(a,{type:"email",placeholder:"your email address"})}),i=()=>e(r,{isInvalid:!0,label:"Email address",errorMessage:"Email is required.",children:e(a,{type:"email",placeholder:"your email address"})}),d=()=>s(E,{children:[e(r,{isInvalid:!0,label:"Email address",helperMessage:"We'll never share your email.",errorMessage:"Email is required.",isReplace:!0,children:e(a,{type:"email",placeholder:"your email address"})}),e(r,{isInvalid:!0,label:"Email address",helperMessage:"We'll never share your email.",errorMessage:"Email is required.",isReplace:!1,children:e(a,{type:"email",placeholder:"your email address"})})]}),m=()=>e(r,{isRequired:!0,label:"Email address",helperMessage:"We'll never share your email.",errorMessage:"Email is required.",children:e(a,{type:"email",placeholder:"your email address"})}),n=()=>e(r,{isDisabled:!0,label:"Email address",helperMessage:"We'll never share your email.",errorMessage:"Email is required.",children:e(a,{type:"email",placeholder:"your email address"})}),t=()=>e(r,{isReadOnly:!0,label:"Email address",helperMessage:"We'll never share your email.",errorMessage:"Email is required.",children:e(a,{type:"email",placeholder:"your email address"})}),c=()=>s(r,{helperMessage:"We'll never share your email.",children:[e(M,{color:"primary",children:"Email address"}),e(a,{type:"email",placeholder:"your email address"})]}),p=()=>s(r,{label:"Email address",children:[e(a,{type:"email",placeholder:"your email address"}),e(re,{color:"gray.300",children:"We'll never share your email."})]}),u=()=>s(r,{isInvalid:!0,label:"Email address",children:[e(a,{type:"email",placeholder:"your email address"}),e(ae,{color:"gray.300",children:"Email is required."})]}),h=()=>s(E,{children:[e(r,{isRequired:!0,label:"Email address",requiredIndicator:e(g,{colorScheme:"red",ms:1,children:"required"}),children:e(a,{type:"email",placeholder:"your email address"})}),s(r,{isRequired:!0,children:[e(M,{requiredIndicator:e(g,{colorScheme:"red",ms:1,children:"required"}),children:"Email address"}),e(a,{type:"email",placeholder:"your email address"})]})]}),y=()=>s(E,{children:[e(r,{label:"Email address",optionalIndicator:e(g,{colorScheme:"primary",ms:1,children:"optional"}),children:e(a,{type:"email",placeholder:"your email address"})}),s(r,{children:[e(M,{optionalIndicator:e(g,{colorScheme:"primary",ms:1,children:"optional"}),children:"Email address"}),e(a,{type:"email",placeholder:"your email address"})]})]});var b,I,F;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return <FormControl label='Email address'>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(F=(I=l.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var C,q,v;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <FormControl label='Email address' helperMessage="We'll never share your email.">
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(v=(q=o.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};var R,S,W;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <FormControl isInvalid label='Email address' errorMessage='Email is required.'>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(W=(S=i.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var L,T,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <>
      <FormControl isInvalid label='Email address' helperMessage="We'll never share your email." errorMessage='Email is required.' isReplace={true}>
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl isInvalid label='Email address' helperMessage="We'll never share your email." errorMessage='Email is required.' isReplace={false}>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>;
}`,...(H=(T=d.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var f,O,w;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <FormControl isRequired label='Email address' helperMessage="We'll never share your email." errorMessage='Email is required.'>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(w=(O=m.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var x,D,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  return <FormControl isDisabled label='Email address' helperMessage="We'll never share your email." errorMessage='Email is required.'>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var _,k,z;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  return <FormControl isReadOnly label='Email address' helperMessage="We'll never share your email." errorMessage='Email is required.'>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(z=(k=t.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,B,G;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  return <FormControl helperMessage="We'll never share your email.">
      <Label color='primary'>Email address</Label>
      <Input type='email' placeholder='your email address' />
    </FormControl>;
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,N;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <FormControl label='Email address'>
      <Input type='email' placeholder='your email address' />
      <HelperMessage color='gray.300'>
        We'll never share your email.
      </HelperMessage>
    </FormControl>;
}`,...(N=(K=p.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var P,Q,U;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  return <FormControl isInvalid label='Email address'>
      <Input type='email' placeholder='your email address' />
      <ErrorMessage color='gray.300'>Email is required.</ErrorMessage>
    </FormControl>;
}`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <>
      <FormControl isRequired label='Email address' requiredIndicator={<Tag colorScheme='red' ms={1}>
            required
          </Tag>}>
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl isRequired>
        <Label requiredIndicator={<Tag colorScheme='red' ms={1}>
              required
            </Tag>}>
          Email address
        </Label>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>;
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <>
      <FormControl label='Email address' optionalIndicator={<Tag colorScheme='primary' ms={1}>
            optional
          </Tag>}>
        <Input type='email' placeholder='your email address' />
      </FormControl>

      <FormControl>
        <Label optionalIndicator={<Tag colorScheme='primary' ms={1}>
              optional
            </Tag>}>
          Email address
        </Label>
        <Input type='email' placeholder='your email address' />
      </FormControl>
    </>;
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const be=["basic","withHelperMessage","withErrorMessage","isReplace","isRequired","isDisabled","isReadonly","customLabel","customHelperMessage","customErrorMessage","customRequiredIndicator","customOptionalIndicator"];export{be as __namedExportsOrder,l as basic,u as customErrorMessage,p as customHelperMessage,c as customLabel,y as customOptionalIndicator,h as customRequiredIndicator,Me as default,n as isDisabled,t as isReadonly,d as isReplace,m as isRequired,i as withErrorMessage,o as withHelperMessage};
//# sourceMappingURL=form-control.stories-4328424a.js.map
