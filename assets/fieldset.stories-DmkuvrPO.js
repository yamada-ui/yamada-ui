import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as O}from"./index-BwDkhjyp.js";import{b as Oe,c as De,H as E,E as H,d as Ne,e as Ve,R as Be}from"./form-control-C8wk9nRT.js";import{V as D}from"./visually-hidden-Dz5P2tdz.js";import{f as Me}from"./forward-ref-BmTAT9U5.js";import{a as Ge}from"./use-component-style-BVTnHHBW.js";import{o as Je}from"./theme-provider-woLZZCt0.js";import{t as Ke,w as A,b as Fe,c as ye,d as n}from"./factory-CEsHZeW8.js";import{C as s}from"./checkbox-CkhrFoGt.js";import{T as q}from"./tag-BIUEXn5W.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-CF3RwP-h.js";import"./index-Cd_6Vxlk.js";import"./index-AEOZ2ZJT.js";import"./index-UcjmprJc.js";import"./motion-CcTWI5_V.js";import"./flex-Chb4wwx3.js";import"./index-mMbOwMyI.js";import"./index-BiU9JfDX.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";const r=Me(({id:v,...l},k)=>{const[c,R]=Ge("Fieldset",l),{className:S,isRequired:w=!1,isDisabled:t=!1,isInvalid:o=!1,isReadOnly:m=!1,isReplace:g=!0,legend:u,helperMessage:i,errorMessage:a,children:L,requiredIndicator:qe,optionalIndicator:ve,legendProps:ke,helperMessageProps:Re,errorMessageProps:Se,...we}=Je(R);v??(v=O.useId());const[z,_]=O.useState(!1),P=Ke(L),[Pe]=A(P,d),[Ae]=A(P,E),[Ee]=A(P,H),He=!!Pe,Le=!!Ae,ze=!!Ee,_e={...c.container};return e.jsx(Oe,{value:{isFocused:z,isRequired:w,isDisabled:t,isInvalid:o,isReadOnly:m,isReplace:g,onFocus:()=>_(!0),onBlur:()=>_(!1)},children:e.jsx(De,{value:c,children:e.jsxs(Fe.fieldset,{ref:k,className:ye("ui-fieldset",S),disabled:t,"data-focus":n(z),"data-disabled":n(t),"data-invalid":n(o),"data-readonly":n(m),__css:_e,...we,children:[!He&&u?e.jsxs(d,{requiredIndicator:qe,optionalIndicator:ve,...ke,children:[u,(!g||!o)&&i?e.jsx(D,{children:i}):null,o&&a?e.jsx(D,{children:a}):null]}):null,L,!Le&&i?e.jsx(E,{...Re,children:i}):null,!ze&&a?e.jsx(H,{...Se,children:a}):null]})})})}),d=Me(({className:v,isRequired:l,requiredIndicator:k=e.jsx(Be,{}),optionalIndicator:c=null,children:R,...S},w)=>{const{isRequired:t,isFocused:o,isDisabled:m,isInvalid:g,isReadOnly:u}=Ne()??{},i=Ve()??{};l??(l=t);const a={...i.legend};return e.jsxs(Fe.legend,{ref:w,className:ye("ui-fieldset__legend",v),"data-focus":n(o),"data-disabled":n(m),"data-readonly":n(u),"data-invalid":n(g),__css:a,...S,children:[R,l?k:c]})}),hr={title:"Components / Forms / Fieldset",component:r},h=()=>e.jsx(r,{legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),p=()=>e.jsx(r,{legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),C=()=>e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",isReplace:!0,children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsx(r,{isInvalid:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",isReplace:!1,children:e.jsx(s,{children:"I agree to the Terms and Conditions."})})]}),T=()=>e.jsx(r,{isRequired:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),b=()=>e.jsx(r,{isDisabled:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),f=()=>e.jsx(r,{isReadOnly:!0,legend:"Terms and Conditions",helperMessage:"Please review the terms carefully before agreeing.",errorMessage:"Agreement is required.",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),I=()=>e.jsxs(r,{helperMessage:"Please review the terms carefully before agreeing.",children:[e.jsx(d,{color:"primary",children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]}),j=()=>e.jsxs(r,{legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(E,{color:"gray.300",children:"Please review the terms carefully before agreeing."})]}),M=()=>e.jsxs(r,{isInvalid:!0,legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(H,{color:"gray.300",children:"Agreement is required."})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isRequired:!0,legend:"Terms and Conditions",requiredIndicator:e.jsx(q,{size:"sm",colorScheme:"red",ms:2,children:"required"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{isRequired:!0,children:[e.jsx(d,{requiredIndicator:e.jsx(q,{size:"sm",colorScheme:"red",ms:2,children:"required"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{legend:"Terms and Conditions",optionalIndicator:e.jsx(q,{size:"sm",colorScheme:"primary",ms:2,children:"optional"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{children:[e.jsx(d,{optionalIndicator:e.jsx(q,{size:"sm",colorScheme:"primary",ms:2,children:"optional"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]});var N,V,B;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(B=(V=h.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};var G,J,K;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,W;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  return <Fieldset isInvalid legend="Terms and Conditions" errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(W=(U=C.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var X,Y,Z;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <>
      <Fieldset isInvalid legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required." isReplace={true}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isInvalid legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required." isReplace={false}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...(Z=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;T.parameters={...T.parameters,docs:{...($=T.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Fieldset isRequired legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(re=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ne,oe;b.parameters={...b.parameters,docs:{...(se=b.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Fieldset isDisabled legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ae,te;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  return <Fieldset isReadOnly legend="Terms and Conditions" helperMessage="Please review the terms carefully before agreeing." errorMessage="Agreement is required.">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(te=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var de,le,ce;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Fieldset helperMessage="Please review the terms carefully before agreeing.">
      <Legend color="primary">Terms and Conditions</Legend>
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(ce=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,ge,ue;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <HelperMessage color="gray.300">
        Please review the terms carefully before agreeing.
      </HelperMessage>
    </Fieldset>;
}`,...(ue=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var he,pe,Ce;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Fieldset isInvalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      <ErrorMessage color="gray.300">Agreement is required.</ErrorMessage>
    </Fieldset>;
}`,...(Ce=(pe=M.parameters)==null?void 0:pe.docs)==null?void 0:Ce.source}}};var xe,Te,be;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(be=(Te=F.parameters)==null?void 0:Te.docs)==null?void 0:be.source}}};var fe,Ie,je;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(je=(Ie=y.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};const pr=["basic","withHelperMessage","withErrorMessage","isReplace","isRequired","isDisabled","isReadonly","customLegend","customHelperMessage","customErrorMessage","customRequiredIndicator","customOptionalIndicator"];export{pr as __namedExportsOrder,h as basic,M as customErrorMessage,j as customHelperMessage,I as customLegend,y as customOptionalIndicator,F as customRequiredIndicator,hr as default,b as isDisabled,f as isReadonly,x as isReplace,T as isRequired,C as withErrorMessage,p as withHelperMessage};
