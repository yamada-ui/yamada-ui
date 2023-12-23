import{j as r,a as d}from"./jsx-runtime-TtYKBvr-.js";import{I as p,a as g}from"./fontawesome-icon-xG-XeWyo.js";import{c as u}from"./components-zBFIWnAw.js";import{T as e}from"./tag--Ce-Pk2s.js";import{W as n}from"./flex-l98I0aH1.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-tvtfaFq4.js";import"./icon-rps1Vs7a.js";import"./index-bmva5xHb.js";import"./theme-provider-H1stovVN.js";import"./factory-KjDUWRxd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./index-GHCv8G38.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-X4MokycB.js";import"./environment-provider-ra6fenE8.js";import"./motion-AgWUVtfu.js";import"./loading-provider-7DxCwU1o.js";import"./index-qTVxZlDV.js";import"./component-G3mliOEp.js";import"./loading-M7zTGsj5.js";import"./index-6KIs1ztp.js";import"./index-AvH0vXKE.js";import"./motion-74zfp4gy.js";import"./index-GPdqE8CR.js";import"./container-portal-T4nwKhGV.js";import"./index-xIHD0DlW.js";import"./notice-5zx5q3Pt.js";import"./alert-oiGaTZZx.js";import"./use-component-style-xqqjtukQ.js";import"./close-button-ER8lbnZ7.js";import"./use-ripple-h-5pxw8v.js";import"./container-GwzpLKpq.js";import"./stack-YqX3it-a.js";import"./box-4BZ_0t4v.js";import"./text-ww6NuSgX.js";import"./index-K_WZoPyR.js";import"./index-rjSDsFlM.js";const zr={title:"Components / Data Display / Tag",component:e},a=()=>r(n,{gap:"md",children:u.map(o=>r(e,{colorScheme:o,children:o},o))}),c=()=>r(n,{gap:"md",children:u.map(o=>r(e,{variant:"solid",colorScheme:o,children:o},o))}),l=()=>r(n,{gap:"md",children:u.map(o=>r(e,{variant:"outline",colorScheme:o,children:o},o))}),i=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",size:"sm",children:"Small"}),r(e,{colorScheme:"secondary",size:"md",children:"Medium"}),r(e,{colorScheme:"warning",size:"lg",children:"Large"})]}),s=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",size:"sm",leftIcon:r(p,{icon:g}),children:"Small"}),r(e,{colorScheme:"secondary",size:"md",rightIcon:r(p,{icon:g}),children:"Medium"}),r(e,{colorScheme:"warning",size:"lg",leftIcon:r(p,{icon:g}),children:"Large"})]}),m=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",rounded:"full",onClose:()=>{},children:"Primary"}),r(e,{colorScheme:"secondary",rounded:"full",onClose:()=>{},children:"Secondary"}),r(e,{colorScheme:"success",rounded:"full",onClose:()=>{},children:"Success"}),r(e,{colorScheme:"warning",rounded:"full",onClose:()=>{},children:"Warning"}),r(e,{colorScheme:"danger",rounded:"full",onClose:()=>{},children:"Danger"})]}),t=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{variant:"solid",colorScheme:"primary",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Primary"}),r(e,{variant:"solid",colorScheme:"secondary",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Secondary"}),r(e,{variant:"solid",colorScheme:"warning",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Warning"}),r(e,{variant:"solid",colorScheme:"danger",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Danger"})]});var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,y,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} variant="solid" colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,W,w;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} variant="outline" colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(w=(W=l.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,z,b;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
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
}`,...(b=(z=i.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var v,x,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
      <Tag colorScheme="primary" size="sm" leftIcon={<Icon icon={faPlus} />}>
        Small
      </Tag>

      <Tag colorScheme="secondary" size="md" rightIcon={<Icon icon={faPlus} />}>
        Medium
      </Tag>

      <Tag colorScheme="warning" size="lg" leftIcon={<Icon icon={faPlus} />}>
        Large
      </Tag>
    </Wrap>;
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var L,M,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
      <Tag colorScheme="primary" rounded="full" onClose={() => {}}>
        Primary
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={() => {}}>
        Secondary
      </Tag>

      <Tag colorScheme="success" rounded="full" onClose={() => {}}>
        Success
      </Tag>

      <Tag colorScheme="warning" rounded="full" onClose={() => {}}>
        Warning
      </Tag>

      <Tag colorScheme="danger" rounded="full" onClose={() => {}}>
        Danger
      </Tag>
    </Wrap>;
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var k,B,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
      <Tag variant="solid" colorScheme="primary" rounded="full" onClose={() => {}} isDisabled>
        Primary
      </Tag>

      <Tag variant="solid" colorScheme="secondary" rounded="full" onClose={() => {}} isDisabled>
        Secondary
      </Tag>

      <Tag variant="solid" colorScheme="warning" rounded="full" onClose={() => {}} isDisabled>
        Warning
      </Tag>

      <Tag variant="solid" colorScheme="danger" rounded="full" onClose={() => {}} isDisabled>
        Danger
      </Tag>
    </Wrap>;
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const br=["subtle","solid","outline","withSize","withIcon","withCloseButton","withDisabled"];export{br as __namedExportsOrder,zr as default,l as outline,c as solid,a as subtle,m as withCloseButton,t as withDisabled,s as withIcon,i as withSize};
