import{j as r}from"./jsx-runtime-CfatFE5O.js";import{c as u}from"./components-CxTYaNXJ.js";import{T as e}from"./tag-CtjR03rB.js";import{P as h}from"./plus-B2z6ic8h.js";import{W as a}from"./flex-B9Z-GWmv.js";import{t as g,B as n}from"./factory-BPYpkDor.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CZjm_Dlq.js";import"./index-DaKwFS8s.js";import"./index-oHEGJEIa.js";import"./ui-provider-DT4ZJWc8.js";import"./index-CCPRJsEV.js";import"./theme-provider-Bsm-0rKu.js";import"./proxy-DwHv-pG9.js";import"./loading-provider-BNFf8qfE.js";import"./index-C5Gv9kmK.js";import"./Combination-__ZWiWyr.js";import"./loading-Bd8HLEYZ.js";import"./icon-DT11Nal8.js";import"./use-component-style-CYL4T5vM.js";import"./use-var-DoLXLJEg.js";import"./forward-ref-D13m8o2p.js";import"./index-2WvfircW.js";import"./portal-Bwu6AgAB.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-BiXCYStP.js";import"./notice-06IzLkX9.js";import"./alert-DuAaTs7C.js";import"./close-button-BMgTv_5f.js";import"./use-ripple-EznoQwCc.js";import"./container-C7BHOlHf.js";import"./stack-D7aiW26x.js";import"./box-b6fbDiUh.js";import"./text-Y1d9IDh4.js";import"./checkbox-BslYf1VK.js";import"./index-BawWMpfG.js";import"./form-control-BcwAaE7G.js";import"./index-5_K1p_ZM.js";import"./index-k5AD2Mr8.js";import"./event-C_48urmU.js";import"./number-CcP_arM8.js";import"./tooltip-JyxElFjD.js";import"./index-CUasfp9R.js";import"./index-B6_HQi_x.js";import"./index-BoVnf8IZ.js";import"./index-DLDmaCYR.js";import"./index-W-WXU9X0.js";import"./slide-fade-DWJKgb--.js";import"./utils-iiSVxag3.js";import"./forward-ref-2BKBy0Yi.js";import"./scale-fade-CUVSWOgb.js";import"./index-LBOEXu_2.js";import"./index-Ds3gfiOt.js";import"./select-DHuQSSGm.js";import"./select-list-siiT5znq.js";import"./index-B-CNuTHF.js";import"./popover-trigger-BK228ndd.js";import"./index-CctIhTei.js";import"./index-gGKStiao.js";import"./index-gbrMdviE.js";import"./createLucideIcon-Czt4prMK.js";const Vr={component:e,title:"Components / Data Display / Tag"},s=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,children:g(o)},o))}),i=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"surface",children:g(o)},o))}),c=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"solid",children:g(o)},o))}),m=()=>r.jsx(a,{gap:"md",children:u.map(o=>r.jsx(e,{colorScheme:o,variant:"outline",children:g(o)},o))}),t=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",size:"sm",children:"Small"}),r.jsx(e,{colorScheme:"secondary",size:"md",children:"Medium"}),r.jsx(e,{colorScheme:"warning",size:"lg",children:"Large"})]}),l=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",size:"sm",startIcon:r.jsx(h,{}),children:"Small"}),r.jsx(e,{colorScheme:"secondary",size:"md",endIcon:r.jsx(h,{}),children:"Medium"}),r.jsx(e,{colorScheme:"warning",size:"lg",startIcon:r.jsx(h,{}),children:"Large"})]}),p=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",rounded:"full",onClose:n,children:"Primary"}),r.jsx(e,{colorScheme:"secondary",rounded:"full",onClose:n,children:"Secondary"}),r.jsx(e,{colorScheme:"success",rounded:"full",onClose:n,children:"Success"}),r.jsx(e,{colorScheme:"warning",rounded:"full",onClose:n,children:"Warning"}),r.jsx(e,{colorScheme:"danger",rounded:"full",onClose:n,children:"Danger"})]}),d=()=>r.jsxs(a,{alignItems:"flex-start",gap:"md",children:[r.jsx(e,{colorScheme:"primary",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Primary"}),r.jsx(e,{colorScheme:"secondary",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Secondary"}),r.jsx(e,{colorScheme:"warning",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Warning"}),r.jsx(e,{colorScheme:"danger",variant:"solid",isDisabled:!0,rounded:"full",onClose:n,children:"Danger"})]});var S,T,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
