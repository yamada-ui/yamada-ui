import{j as e}from"./extends-CwFRzn3r.js";import{r as O}from"./index-BwDkhjyp.js";import{b as Ne,c as Ve,H as A,E,d as Be,e as Ge,R as D}from"./form-control-Cr_hm2rR.js";import{V as N}from"./visually-hidden-CRnhCbHq.js";import{f as Fe}from"./forward-ref-BWI-Phbn.js";import{a as Je}from"./use-component-style-Givb0biW.js";import{o as Ke}from"./theme-provider-B8NHi_rL.js";import{q as Qe,w as _,b as ye,c as qe,d as n}from"./factory-CBW6YcbY.js";import{C as s}from"./checkbox-ClDyirdc.js";import{T as v}from"./tag-0pp8p8bG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_OjANVlL.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-B6ZnNkK9.js";import"./index-BEwlKK2P.js";import"./index-qHjnnOt4.js";import"./icon-CQ7oKYSm.js";import"./use-var-BcRMoVLh.js";const r=Fe(({id:k,...R},l)=>{const[c,m]=Je("Fieldset",R),{className:S,children:g,errorMessage:i,helperMessage:a,isDisabled:d=!1,isInvalid:t=!1,isReadOnly:u=!1,isReplace:h=!0,isRequired:w=!1,legend:L,optionalIndicator:ve,requiredIndicator:ke,errorMessageProps:Re,helperMessageProps:Se,legendProps:we,...Pe}=Ke(m),_e=O.useId();k??(k=_e);const[H,z]=O.useState(!1),P=Qe(g),Ae=_(P,o),Ee=_(P,A),Le=_(P,E),He=!!Ae,ze=!!Ee,Oe=!!Le,De={...c.container};return e.jsx(Ne,{value:{isDisabled:d,isFocused:H,isInvalid:t,isReadOnly:u,isReplace:h,isRequired:w,onBlur:()=>z(!1),onFocus:()=>z(!0)},children:e.jsx(Ve,{value:c,children:e.jsxs(ye.fieldset,{ref:l,className:qe("ui-fieldset",S),"data-disabled":n(d),"data-focus":n(H),"data-invalid":n(t),"data-readonly":n(u),disabled:d,__css:De,...Pe,children:[!He&&L?e.jsxs(o,{optionalIndicator:ve,requiredIndicator:ke,...we,children:[L,(!h||!t)&&a?e.jsx(N,{children:a}):null,t&&i?e.jsx(N,{children:i}):null]}):null,g,!ze&&a?e.jsx(A,{...Se,children:a}):null,!Oe&&i?e.jsx(E,{...Re,children:i}):null]})})})});r.displayName="Fieldset";r.__ui__="Fieldset";const o=Fe(({className:k,children:R,isRequired:l,optionalIndicator:c=null,requiredIndicator:m=null,...S},g)=>{const{isDisabled:i,isFocused:a,isInvalid:d,isReadOnly:t,isRequired:u}=Be()??{},h=Ge()??{};l??(l=u);const w={...h.legend};return e.jsxs(ye.legend,{ref:g,className:qe("ui-fieldset__legend",k),"data-disabled":n(i),"data-focus":n(a),"data-invalid":n(d),"data-readonly":n(t),__css:w,...S,children:[R,l?m?e.jsx(D,{children:m}):e.jsx(D,{}):c]})});o.displayName="Legend";o.__ui__="Legend";const ur={component:r,title:"Components / Forms / Fieldset"},p=()=>e.jsx(r,{legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),C=()=>e.jsx(r,{helperMessage:"Please review the terms carefully before agreeing.",legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),x=()=>e.jsx(r,{errorMessage:"Agreement is required.",isInvalid:!0,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{errorMessage:"Agreement is required.",helperMessage:"Please review the terms carefully before agreeing.",isInvalid:!0,isReplace:!0,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsx(r,{errorMessage:"Agreement is required.",helperMessage:"Please review the terms carefully before agreeing.",isInvalid:!0,isReplace:!1,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})})]}),b=()=>e.jsx(r,{errorMessage:"Agreement is required.",helperMessage:"Please review the terms carefully before agreeing.",isRequired:!0,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),f=()=>e.jsx(r,{errorMessage:"Agreement is required.",helperMessage:"Please review the terms carefully before agreeing.",isDisabled:!0,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),j=()=>e.jsx(r,{errorMessage:"Agreement is required.",helperMessage:"Please review the terms carefully before agreeing.",isReadOnly:!0,legend:"Terms and Conditions",children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),I=()=>e.jsxs(r,{helperMessage:"Please review the terms carefully before agreeing.",children:[e.jsx(o,{color:"primary",children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]}),M=()=>e.jsxs(r,{legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(A,{color:"gray.300",children:"Please review the terms carefully before agreeing."})]}),F=()=>e.jsxs(r,{isInvalid:!0,legend:"Terms and Conditions",children:[e.jsx(s,{children:"I agree to the Terms and Conditions."}),e.jsx(E,{color:"gray.300",children:"Agreement is required."})]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{isRequired:!0,legend:"Terms and Conditions",requiredIndicator:e.jsx(v,{colorScheme:"red",size:"sm",ms:2,children:"required"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{isRequired:!0,children:[e.jsx(o,{requiredIndicator:e.jsx(v,{colorScheme:"red",size:"sm",ms:2,children:"required"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{legend:"Terms and Conditions",optionalIndicator:e.jsx(v,{colorScheme:"primary",size:"sm",ms:2,children:"optional"}),children:e.jsx(s,{children:"I agree to the Terms and Conditions."})}),e.jsxs(r,{children:[e.jsx(o,{optionalIndicator:e.jsx(v,{colorScheme:"primary",size:"sm",ms:2,children:"optional"}),children:"Terms and Conditions"}),e.jsx(s,{children:"I agree to the Terms and Conditions."})]})]});var V,B,G;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  return <Fieldset legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
  return <Fieldset helperMessage="Please review the terms carefully before agreeing." legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
  return <Fieldset errorMessage="Agreement is required." isInvalid legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(X=(W=x.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,$;T.parameters={...T.parameters,docs:{...(Y=T.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <>
      <Fieldset errorMessage="Agreement is required." helperMessage="Please review the terms carefully before agreeing." isInvalid isReplace legend="Terms and Conditions">
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset errorMessage="Agreement is required." helperMessage="Please review the terms carefully before agreeing." isInvalid isReplace={false} legend="Terms and Conditions">
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...($=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Fieldset errorMessage="Agreement is required." helperMessage="Please review the terms carefully before agreeing." isRequired legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(se=(re=b.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ie;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Fieldset errorMessage="Agreement is required." helperMessage="Please review the terms carefully before agreeing." isDisabled legend="Terms and Conditions">
      <Checkbox>I agree to the Terms and Conditions.</Checkbox>
    </Fieldset>;
}`,...(ie=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var ae,te,de;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Fieldset errorMessage="Agreement is required." helperMessage="Please review the terms carefully before agreeing." isReadOnly legend="Terms and Conditions">
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
      <Fieldset isRequired legend="Terms and Conditions" requiredIndicator={<Tag colorScheme="red" size="sm" ms={2}>
            required
          </Tag>}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset isRequired>
        <Legend requiredIndicator={<Tag colorScheme="red" size="sm" ms={2}>
              required
            </Tag>}>
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...(fe=(be=y.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var je,Ie,Me;q.parameters={...q.parameters,docs:{...(je=q.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Fieldset legend="Terms and Conditions" optionalIndicator={<Tag colorScheme="primary" size="sm" ms={2}>
            optional
          </Tag>}>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>

      <Fieldset>
        <Legend optionalIndicator={<Tag colorScheme="primary" size="sm" ms={2}>
              optional
            </Tag>}>
          Terms and Conditions
        </Legend>
        <Checkbox>I agree to the Terms and Conditions.</Checkbox>
      </Fieldset>
    </>;
}`,...(Me=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Me.source}}};const hr=["basic","withHelperMessage","withErrorMessage","isReplace","isRequired","isDisabled","isReadonly","customLegend","customHelperMessage","customErrorMessage","customRequiredIndicator","customOptionalIndicator"];export{hr as __namedExportsOrder,p as basic,F as customErrorMessage,M as customHelperMessage,I as customLegend,q as customOptionalIndicator,y as customRequiredIndicator,ur as default,f as isDisabled,j as isReadonly,T as isReplace,b as isRequired,x as withErrorMessage,C as withHelperMessage};
