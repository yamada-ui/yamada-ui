import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as d}from"./index-ClcD9ViR.js";import{u as Be}from"./index-De_nPH_B.js";import{y as Me,J as O,P as ye,l as Ue,b as we,c as ke,d as A,h as Ae}from"./factory-Dfrbb1EY.js";import{f as Ce}from"./forward-ref-D13m8o2p.js";import{u as Ee,R as Ne}from"./use-ripple-59xURXHY.js";import{a as qe}from"./use-component-style-fOirb5M1.js";import{o as Je}from"./theme-provider-DSx3k1bh.js";import{B as o,I as N,U as K}from"./underline-BVzQW_oe.js";import{W as E}from"./flex-DjgpQWnX.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-DeSWW4o7.js";import"./icon-DDeGQYl6.js";import"./use-var-BQS3JFPa.js";import"./createLucideIcon-DHJHrKis.js";const[He,Ke]=Me({name:"ToggleGroupContext",strict:!1}),z=Ce(({className:r,size:a,variant:n,defaultValue:g,direction:h,disabled:i,isDisabled:S,isReadOnly:W,readOnly:s,value:j,onChange:F,...f},P)=>{i??(i=S),s??(s=W);const[u,m]=Be({defaultValue:g,value:j,onChange:F}),b=d.useRef(!O(u)),v=d.useCallback(c=>{O(c)||m(t=>ye(t)?t.includes(c)?t.filter(M=>M!==c):[...t,c]:c===t?void 0:c)},[m]),T={display:"inline-flex",flexDirection:h,gap:"0.5rem"},D=d.useMemo(()=>({size:a,variant:n,controlled:b.current,disabled:i,readOnly:s,value:u,onChange:v}),[u,a,n,i,s,v]);return Ue(()=>{O(u)||(b.current=!0)},[j]),e.jsx(He,{value:D,children:e.jsx(we.div,{ref:P,className:ke("ui-toggle-group",r),role:"group",__css:T,...f})})});z.displayName="ToggleGroup";z.__ui__="ToggleGroup";const l=Ce((r,a)=>{const{controlled:n,disabled:g,readOnly:h,value:i,onChange:S,...W}=Ke()??{},[s,j]=qe("Toggle",{...W,isDisabled:g,isReadOnly:h,...r});let{className:F,active:f,children:P,defaultIsSelected:u=!1,defaultSelected:m,disabled:b,disableRipple:v,fullRounded:T,icon:D,isActive:c,isDisabled:t=g,isReadOnly:q=h,isRounded:M,isSelected:Re,readOnly:x,selected:J,value:p,onChange:Ve,...U}=Je(j);b??(b=t),x??(x=q),f??(f=c),J??(J=Re),T??(T=M),m??(m=u);const[_e,Ge]=Be({defaultValue:m,value:J,onChange:Ve});n&&O(p)&&console.warn("Toggle: value is required. Please set the value.");const Oe=ye(i)?i.includes(p??""):p===i,H=n?Oe:_e,{onPointerDown:ze,...We}=Ee({...U,disabled:v||b}),Fe=()=>{Ge(De=>!De),S==null||S(p)},Pe=d.useMemo(()=>({alignItems:"center",appearance:"none",display:"inline-flex",gap:"fallback(2, 0.5rem)",justifyContent:"center",outline:"none",overflow:"hidden",pointerEvents:x?"none":"auto",position:"relative",userSelect:"none",verticalAlign:"middle",...s,...T?{borderRadius:"fallback(full, 9999px)"}:{}}),[T,s,x]);return e.jsxs(we.button,{ref:a,type:"button",className:ke("ui-toggle",F),"aria-pressed":H,"data-active":A(f),"data-readonly":A(x),"data-selected":A(H),disabled:b,tabIndex:x?-1:0,__css:Pe,...U,onClick:Ae(U.onClick,Fe),onPointerDown:ze,children:[P||D,e.jsx(Ne,{...We})]})});l.displayName="Toggle";l.__ui__="Toggle";const ul={component:l,title:"Components / Forms / Toggle"},I=()=>e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{})}),B=()=>e.jsxs(l,{px:"4",children:[e.jsx(N,{}),"Italic"]}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",size:"xs","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",size:"sm","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",size:"md","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",size:"lg","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",icon:e.jsx(o,{})}),e.jsx(l,{variant:"unstyled","aria-label":"Toggle bold",icon:e.jsx(o,{})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsxs(E,{gap:"md",children:[e.jsx(l,{colorScheme:"primary","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(E,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]}),e.jsxs(E,{gap:"md",children:[e.jsx(l,{colorScheme:"primary",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"success",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"warning",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"danger",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"link",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"gray",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"neutral",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"red",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"rose",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"pink",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"orange",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"amber",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"yellow",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"lime",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"green",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"emerald",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"teal",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"cyan",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"sky",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"blue",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"indigo",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"violet",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"purple",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"fuchsia",variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{})})]})]}),C=()=>e.jsx(l,{"aria-label":"Toggle bold",defaultSelected:!0,fullRounded:!0,icon:e.jsx(o,{})}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,disabled:!0,icon:e.jsx(o,{})})]}),V=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{colorScheme:"primary",variant:"subtle","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0}),e.jsx(l,{colorScheme:"secondary",variant:"solid","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0}),e.jsx(l,{variant:"outline","aria-label":"Toggle bold",defaultSelected:!0,icon:e.jsx(o,{}),readOnly:!0})]}),_=()=>{const[r,a]=d.useState(!1);return e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),selected:r,onChange:a})},G=()=>{const[r,a]=d.useState(void 0),[n,g]=d.useState([]);return e.jsxs(e.Fragment,{children:[e.jsxs(z,{value:r,onChange:a,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(N,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(K,{}),value:"underline"})]}),e.jsxs(z,{value:n,onChange:g,children:[e.jsx(l,{"aria-label":"Toggle bold",icon:e.jsx(o,{}),value:"bold"}),e.jsx(l,{"aria-label":"Toggle italic",icon:e.jsx(N,{}),value:"italic"}),e.jsx(l,{"aria-label":"Toggle underline",icon:e.jsx(K,{}),value:"underline"})]})]})};var L,Q,X;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} />;
}`,...(X=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Toggle px="4">
      <ItalicIcon />
      Italic
    </Toggle>;
}`,...($=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,le,oe;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" size="xs" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" size="sm" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="warning" size="md" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="danger" size="lg" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(oe=(le=y.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var ae,ce,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="outline" aria-label="Toggle bold" icon={<BoldIcon />} />
      <Toggle variant="unstyled" aria-label="Toggle bold" icon={<BoldIcon />} />
    </>;
}`,...(re=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:re.source}}};var ne,ie,te;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <>
      <Wrap gap="md">
        <Toggle colorScheme="primary" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>

      <Wrap gap="md">
        <Toggle colorScheme="primary" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="secondary" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="success" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="warning" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="danger" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="link" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="gray" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="neutral" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="red" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="rose" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="pink" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="orange" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="amber" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="yellow" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="lime" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="green" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="emerald" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="teal" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="cyan" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="sky" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="blue" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="indigo" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="violet" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="purple" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
        <Toggle colorScheme="fuchsia" variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} />
      </Wrap>
    </>;
}`,...(te=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:te.source}}};var de,ge,se;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Toggle aria-label="Toggle bold" defaultSelected fullRounded icon={<BoldIcon />} />;
}`,...(se=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:se.source}}};var ue,be,Se;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
      <Toggle variant="outline" aria-label="Toggle bold" defaultSelected disabled icon={<BoldIcon />} />
    </>;
}`,...(Se=(be=R.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var me,Te,xe;V.parameters={...V.parameters,docs:{...(me=V.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <>
      <Toggle colorScheme="primary" variant="subtle" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
      <Toggle colorScheme="secondary" variant="solid" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
      <Toggle variant="outline" aria-label="Toggle bold" defaultSelected icon={<BoldIcon />} readOnly />
    </>;
}`,...(xe=(Te=V.parameters)==null?void 0:Te.docs)==null?void 0:xe.source}}};var he,je,fe;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return <Toggle aria-label="Toggle bold" icon={<BoldIcon />} selected={isSelected} onChange={setIsSelected} />;
}`,...(fe=(je=_.parameters)==null?void 0:je.docs)==null?void 0:fe.source}}};var ve,pe,Ie;G.parameters={...G.parameters,docs:{...(ve=G.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  const [singleValue, setSingleValue] = useState<string | undefined>(undefined);
  const [multiValue, setMultiValue] = useState<string[]>([]);
  return <>
      <ToggleGroup value={singleValue} onChange={setSingleValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>

      <ToggleGroup value={multiValue} onChange={setMultiValue}>
        <Toggle aria-label="Toggle bold" icon={<BoldIcon />} value="bold" />
        <Toggle aria-label="Toggle italic" icon={<ItalicIcon />} value="italic" />
        <Toggle aria-label="Toggle underline" icon={<UnderlineIcon />} value="underline" />
      </ToggleGroup>
    </>;
}`,...(Ie=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:Ie.source}}};const bl=["basic","withText","withSize","withVariant","withColorScheme","isRounded","isDisabled","isReadonly","customControl","useGroup"];export{bl as __namedExportsOrder,I as basic,_ as customControl,ul as default,R as isDisabled,V as isReadonly,C as isRounded,G as useGroup,k as withColorScheme,y as withSize,B as withText,w as withVariant};
