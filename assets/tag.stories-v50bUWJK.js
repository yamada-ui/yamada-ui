import{j as r,a as d}from"./jsx-runtime-TtYKBvr-.js";import{I as p,a as g}from"./fontawesome-icon-XmXrmOUL.js";import{c as u}from"./components-zkK38ecY.js";import{T as e}from"./tag-Wnnphm-B.js";import{W as n}from"./flex-FqnJRexk.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-tvtfaFq4.js";import"./icon-lGxzm-PJ.js";import"./index-S2htefC9.js";import"./theme-provider-AD5gKQ6i.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./index-GHCv8G38.js";import"./mapValues-_vaJbJvv.js";import"./_basePickBy-nbC0p6ki.js";import"./isPlainObject-OQ1vr7Ox.js";import"./index-PPLHz8o0.js";import"./ui-provider-LAJgtBvr.js";import"./environment-provider-NYB_0qG3.js";import"./loading-provider-Ui44F5D8.js";import"./index-hatv1oHP.js";import"./component-G3mliOEp.js";import"./loading-t4SoIc4G.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./motion-HWUA2jNq.js";import"./motion-AgWUVtfu.js";import"./index-GPdqE8CR.js";import"./container-portal-wvFwNyEy.js";import"./index-xIHD0DlW.js";import"./notice-pqftIvtQ.js";import"./alert-7XsCQIkH.js";import"./use-component-style-eqg6O7Tm.js";import"./close-button-TAHFiApU.js";import"./use-ripple-hE5BRJTs.js";import"./container-8zZh0Bf0.js";import"./stack-eN2E0mK0.js";import"./box-o_C1MUpU.js";import"./text-dQvy8j4x.js";import"./index-ojR1eB3p.js";import"./index-55Zbf_Rl.js";const zr={title:"Components / Data Display / Tag",component:e},a=()=>r(n,{gap:"md",children:u.map(o=>r(e,{colorScheme:o,children:o},o))}),i=()=>r(n,{gap:"md",children:u.map(o=>r(e,{variant:"solid",colorScheme:o,children:o},o))}),c=()=>r(n,{gap:"md",children:u.map(o=>r(e,{variant:"outline",colorScheme:o,children:o},o))}),l=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",size:"sm",children:"Small"}),r(e,{colorScheme:"secondary",size:"md",children:"Medium"}),r(e,{colorScheme:"warning",size:"lg",children:"Large"})]}),s=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",size:"sm",leftIcon:r(p,{icon:g}),children:"Small"}),r(e,{colorScheme:"secondary",size:"md",rightIcon:r(p,{icon:g}),children:"Medium"}),r(e,{colorScheme:"warning",size:"lg",leftIcon:r(p,{icon:g}),children:"Large"})]}),m=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{colorScheme:"primary",rounded:"full",onClose:()=>{},children:"Cyan"}),r(e,{colorScheme:"secondary",rounded:"full",onClose:()=>{},children:"Secondary"}),r(e,{colorScheme:"warning",rounded:"full",onClose:()=>{},children:"Warning"}),r(e,{colorScheme:"danger",rounded:"full",onClose:()=>{},children:"Danger"})]}),t=()=>d(n,{gap:"md",alignItems:"flex-start",children:[r(e,{variant:"solid",colorScheme:"primary",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Cyan"}),r(e,{variant:"solid",colorScheme:"secondary",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Secondary"}),r(e,{variant:"solid",colorScheme:"warning",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Warning"}),r(e,{variant:"solid",colorScheme:"danger",rounded:"full",onClose:()=>{},isDisabled:!0,children:"Danger"})]});var h,S,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,y,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} variant="solid" colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var I,W,w;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <Wrap gap="md">
      {colorSchemes.map(colorScheme => <Tag key={colorScheme} variant="outline" colorScheme={colorScheme}>
          {colorScheme}
        </Tag>)}
    </Wrap>;
}`,...(w=(W=c.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var D,z,b;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
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
}`,...(b=(z=l.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var v,x,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var M,P,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
      <Tag colorScheme="primary" rounded="full" onClose={() => {}}>
        Cyan
      </Tag>

      <Tag colorScheme="secondary" rounded="full" onClose={() => {}}>
        Secondary
      </Tag>

      <Tag colorScheme="warning" rounded="full" onClose={() => {}}>
        Warning
      </Tag>

      <Tag colorScheme="danger" rounded="full" onClose={() => {}}>
        Danger
      </Tag>
    </Wrap>;
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var k,B,_;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  return <Wrap gap="md" alignItems="flex-start">
      <Tag variant="solid" colorScheme="primary" rounded="full" onClose={() => {}} isDisabled>
        Cyan
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
}`,...(_=(B=t.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const br=["subtle","solid","outline","withSize","withIcon","withCloseButton","withDisabled"];export{br as __namedExportsOrder,zr as default,c as outline,i as solid,a as subtle,m as withCloseButton,t as withDisabled,s as withIcon,l as withSize};
