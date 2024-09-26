import{j as e}from"./extends-CwFRzn3r.js";import{r as O}from"./index-BwDkhjyp.js";import{b as De,c as Ne,H as A,E,d as Ve,e as Be,R as D}from"./form-control-DAXawruh.js";import{V as N}from"./visually-hidden-yDGzCZ3d.js";import{f as Fe}from"./forward-ref-BWI-Phbn.js";import{a as Ge}from"./use-component-style-D3MffxdG.js";import{o as Je}from"./theme-provider-Bpmh2ODM.js";import{p as Ke,q as _,b as ye,c as qe,d as n}from"./factory-BgMvz7NM.js";import{C as s}from"./checkbox-CHh1Q5wt.js";import{T as v}from"./tag-CiTmQa5I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-zVjQQjxl.js";import"./factory-yZQlYpPU.js";import"./motion-I-9Hg3gW.js";import"./index-Br7ZWcgB.js";import"./index-i7wmI0W_.js";import"./icon-CvhI1IwG.js";import"./use-var-Dgk44aKJ.js";const r=Fe(({id:k,...l},c)=>{const[m,R]=Ge("Fieldset",l),{className:S,isRequired:P=!1,isDisabled:d=!1,isInvalid:i=!1,isReadOnly:g=!1,isReplace:u=!0,legend:h,helperMessage:a,errorMessage:t,children:L,requiredIndicator:ve,optionalIndicator:ke,legendProps:Re,helperMessageProps:Se,errorMessageProps:Pe,...we}=Je(R);k??(k=O.useId());const[H,z]=O.useState(!1),w=Ke(L),_e=_(w,o),Ae=_(w,A),Ee=_(w,E),Le=!!_e,He=!!Ae,ze=!!Ee,Oe={...m.container};return e.jsx(De,{value:{isFocused:H,isRequired:P,isDisabled:d,isInvalid:i,isReadOnly:g,isReplace:u,onFocus:()=>z(!0),onBlur:()=>z(!1)},children:e.jsx(Ne,{value:m,children:e.jsxs(ye.fieldset,{ref:c,className:qe("ui-fieldset",S),disabled:d,"data-focus":n(H),"data-disabled":n(d),"data-invalid":n(i),"data-readonly":n(g),__css:Oe,...we,children:[!Le&&h?e.jsxs(o,{requiredIndicator:ve,optionalIndicator:ke,...Re,children:[h,(!u||!i)&&a?e.jsx(N,{children:a}):null,i&&t?e.jsx(N,{children:t}):null]}):null,L,!He&&a?e.jsx(A,{...Se,children:a}):null,!ze&&t?e.jsx(E,{...Pe,children:t}):null]})})})});r.displayName="Fieldset";r.__ui__="Fieldset";const o=Fe(({className:k,isRequired:l,requiredIndicator:c=null,optionalIndicator:m=null,children:R,...S},P)=>{const{isRequired:d,isFocused:i,isDisabled:g,isInvalid:u,isReadOnly:h}=Ve()??{},a=Be()??{};l??(l=d);const t={...a.legend};return e.jsxs(ye.legend,{ref:P,className:qe("ui-fieldset__legend",k),"data-focus":n(i),"data-disabled":n(g),"data-readonly":n(h),"data-invalid":n(u),__css:t,...S,children:[R,l?c?e.jsx(D,{children:c}):e.jsx(D,{}):m]})});o.displayName="Legend";o.__ui__="Legend";const mr={title:"Components / Forms / Fieldset",component:r},p=()=>e.jsx(r,{legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),C=()=>e.jsx(r,{legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),x=()=>e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",isReplace:!0,children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",isReplace:!1,children:e.jsx(s,{children:"I agree to the Terms and Conditions."})})]}),b=()=>e.jsx(r,{isRequired:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),f=()=>e.jsx(r,{isDisabled:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),j=()=>e.jsx(r,{isReadOnly:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),I=()=>e.jsxs(r,{helperMessage:"Please review the terms carefully before agreeing.",children:[e.jsx(o,{color:"primary",children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]}),M=()=>e.jsxs(r,{legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(A,{color:"gray.300",children:"Please review the terms carefully before agreeing."})]}),F=()=>e.jsxs(r,{isInvalid:!0,legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(E,{color:"gray.300",children:"Agreement is required."})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isRequired:!0,legend:"Terms and Conditions",requiredIndicator:e.jsx(v,{size:"sm",colorScheme:"red",ms:2,children:"required"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{isRequired:!0,children:[e.jsx(o,{requiredIndicator:e.jsx(v,{size:"sm",colorScheme:"red",ms:2,children:"required"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{legend:"Terms and Conditions",optionalIndicator:e.jsx(v,{size:"sm",colorScheme:"primary",ms:2,children:"optional"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{children:[e.jsx(o,{optionalIndicator:e.jsx(v,{size:"sm",colorScheme:"primary",ms:2,children:"optional"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]});var V,B,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Fieldset isInvalid legend="Terms and Conditions" errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Fieldset isInvalid legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required." isReplace={true}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isInvalid legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required." isReplace={false}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Fieldset isRequired legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Fieldset isDisabled legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,te,de;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Fieldset isReadOnly legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(de=(te=j.parameters)==null?void 0:te.docs)==null?void 0:de.source}}};var le,ce,me;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Fieldset helperMessage="Please review the terms carefully before agreeing.">
      <Legend color="primary">Terms and Conditions</Legend>
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ge,ue,he;M.parameters={...M.parameters,docs:{...(ge=M.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <HelperMessage color="gray.300">
        Please review the terms carefully before agreeing.
      </HelperMessage>
    </Fieldset>;
}`,...(he=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var pe,Ce,xe;F.parameters={...F.parameters,docs:{...(pe=F.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Fieldset isInvalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <ErrorMessage color="gray.300">Agreement is required.</ErrorMessage>
    </Fieldset>;
}`,...(xe=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source}}};var Te,be,fe;y.parameters={...y.parameters,docs:{...(Te=y.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Fieldset isRequired legend="Terms and Conditions" requiredIndicator={<Tag size="sm" colorScheme="red" ms={2}>
            required
          </Tag>}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isRequired>
        <Legend requiredIndicator={<Tag size="sm" colorScheme="red" ms={2}>
              required
            </Tag>}>
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var je,Ie,Me;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Fieldset legend="Terms and Conditions" optionalIndicator={<Tag size="sm" colorScheme="primary" ms={2}>
            optional
          </Tag>}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset>
        <Legend optionalIndicator={<Tag size="sm" colorScheme="primary" ms={2}>
              optional
            </Tag>}>
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...(Me=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};const gr=["basic","withHelperMessage","withErrorMessage","isReplace","isRequired","isDisabled","isReadonly","customLegend","customHelperMessage","customErrorMessage","customRequiredIndicator","customOptionalIndicator"];export{gr as __namedExportsOrder,p as basic,F as customErrorMessage,M as customHelperMessage,I as customLegend,q as customOptionalIndicator,y as customRequiredIndicator,mr as default,f as isDisabled,j as isReadonly,T as isReplace,b as isRequired,x as withErrorMessage,C as withHelperMessage};
