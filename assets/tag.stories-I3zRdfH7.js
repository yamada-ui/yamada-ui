import{j as r}from"./jsx-runtime-CfatFE5O.js";import{c as u}from"./components-DB3iZufq.js";import{T as e}from"./tag-aw8caCsi.js";import{P as h}from"./plus-C0uhBiEg.js";import{W as a}from"./flex-DJhA_QMj.js";import{t as g,B as n}from"./factory-Db31n_eg.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-BzLdmcXo.js";import"./index-BTMolVUU.js";import"./index-12mLNQJN.js";import"./theme-provider-C-TvIt_J.js";import"./ui-provider-j01dqFxO.js";import"./index-CpHdNd90.js";import"./proxy-Bq47Fk52.js";import"./loading-provider-CQ__EqHq.js";import"./index-olb3wru2.js";import"./Combination-CkmEMpJG.js";import"./loading-BptEEwSR.js";import"./icon-BfxegGWg.js";import"./use-component-style-5HWcAXul.js";import"./use-var-BbJRqi2C.js";import"./forward-ref-D13m8o2p.js";import"./memo-CTsy6qLS.js";import"./index-r0TXmcNt.js";import"./portal-C11kezrD.js";import"./index-ZuzByk-F.js";import"./factory-BRZ9AYsk.js";import"./notice-CLeDQ0y9.js";import"./alert-CowBiq15.js";import"./close-button-D9xdjoDk.js";import"./use-ripple-shOr3g-0.js";import"./container-BPlve5cw.js";import"./stack-CE6YRnd8.js";import"./box-PM3mhqIt.js";import"./text-BffdhSXQ.js";import"./checkbox-BmwB4_Oz.js";import"./index-B9u4w19G.js";import"./form-control-DiJsSBY_.js";import"./index-Hr0uPYc7.js";import"./index-ChJGuMS4.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-Dv_7tSML.js";import"./index-BPP3U8Du.js";import"./index-D7WKgYAe.js";import"./index-DKEGRuFP.js";import"./index-CwhaUW1D.js";import"./index-HHvFIm4v.js";import"./slide-fade-BsEH8H2C.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-KhqytcjU.js";import"./scale-fade-DAs4TwkQ.js";import"./index-CzwbnnDs.js";import"./index-B5Z2HpMN.js";import"./select-RrKDEJBp.js";import"./select-list-Cp0p548w.js";import"./index-coqOwSQu.js";import"./popover-trigger-CprRNq_c.js";import"./index-BO2BFO5d.js";import"./index-gGKStiao.js";import"./index-xVP_xMlv.js";import"./createLucideIcon-DHJHrKis.js";const Vr={component:e,title:"Components / Data Display / Tag"},s=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,children:g(o)},o))}),i=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"surface",children:g(o)},o))}),c=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"solid",children:g(o)},o))}),m=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"outline",children:g(o)},o))}),t=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",size:"sm",children:"Small"}),r.jsx(e,{colorScheme:"secondary",size:"md",children:"Medium"}),r.jsx(e,{colorScheme:"warning",size:"lg",children:"Large"})]}),l=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",size:"sm",startIcon:r.jsx(h,{}),children:"Small"}),r.jsx(e,{colorScheme:"secondary",size:"md",endIcon:r.jsx(h,{}),children:"Medium"}),r.jsx(e,{colorScheme:"warning",size:"lg",startIcon:r.jsx(h,{}),children:"Large"})]}),p=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",rounded:"full",onClose:n,children:"Primary"}),r.jsx(e,{colorScheme:"secondary",rounded:"full",onClose:n,children:"Secondary"}),r.jsx(e,{colorScheme:"success",rounded:"full",onClose:n,children:"Success"}),r.jsx(e,{colorScheme:"warning",rounded:"full",onClose:n,children:"Warning"}),r.jsx(e,{colorScheme:"danger",rounded:"full",onClose:n,children:"Danger"})]}),d=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Primary"}),r.jsx(e,{colorScheme:"secondary",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Secondary"}),r.jsx(e,{colorScheme:"warning",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Warning"}),r.jsx(e,{colorScheme:"danger",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Danger"})]});var S,T,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme}>
          {toTitleCase(colorScheme)}
        </Tag>)}
    </Wrap>;
}`,...(x=(T=s.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var f,j,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme} variant="surface">
          {toTitleCase(colorScheme)}
        </Tag>)}
    </Wrap>;
}`,...(y=(j=i.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,W,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme} variant="solid">
          {toTitleCase(colorScheme)}
        </Tag>)}
    </Wrap>;
}`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var w,D,v;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme} variant="outline">
          {toTitleCase(colorScheme)}
        </Tag>)}
    </Wrap>;
}`,...(v=(D=m.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var z,b,P;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" size="sm">
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md">
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg">
        Large
      </Tag>
    </Wrap>;
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var k,L,M;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" size="sm" startIcon={<PlusIcon />}>
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md" endIcon={<PlusIcon />}>
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg" startIcon={<PlusIcon />}>
        Large
      </Tag>
    </Wrap>;
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var B,E,_;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" rounded="full" onClose={noop}>
        Primary
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={noop}>
        Secondary
      </Tag>

      <Tag colorScheme="success" rounded="full" onClose={noop}>
        Success
      </Tag>

      <Tag colorScheme="warning" rounded="full" onClose={noop}>
        Warning
      </Tag>

      <Tag colorScheme="danger" rounded="full" onClose={noop}>
        Danger
      </Tag>
    </Wrap>;
}`,...(_=(E=p.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var O,R,q;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  return <Wrap alignItems="flex-start" gap="md">
      <Tag colorScheme="primary" variant="solid" isDisabled rounded="full" onClose={noop}>
        Primary
      </Tag>

      <Tag colorScheme="secondary" variant="solid" isDisabled rounded="full" onClose={noop}>
        Secondary
      </Tag>

      <Tag colorScheme="warning" variant="solid" isDisabled rounded="full" onClose={noop}>
        Warning
      </Tag>

      <Tag colorScheme="danger" variant="solid" isDisabled rounded="full" onClose={noop}>
        Danger
      </Tag>
    </Wrap>;
}`,...(q=(R=d.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const Xr=["subtle","surface","solid","outline","withSize","withIcon","withCloseButton","withDisabled"];export{Xr as __namedExportsOrder,Vr as default,m as outline,c as solid,s as subtle,i as surface,p as withCloseButton,d as withDisabled,l as withIcon,t as withSize};
