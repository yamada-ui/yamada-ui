import{d as Le,a3 as Me,r as s,b as g,h as w,m as qe,O as Ae,g as Ke,j as e,s as Q,az as We,C as ze,P as p,T as Qe,V as De,Q as Te}from"./iframe-BIJNUwA0.js";import{P as _}from"./props-table-lmXFHSBz.js";import{u as Oe,C as Re}from"./index.esm-D7liiRN2.js";import{u as Xe}from"./index-CfMfaZt0.js";import{u as Ge}from"./index-CH90kZaX.js";import{u as Je}from"./use-field-props-DKzDJnFJ.js";import{F as Ie}from"./for-Cpsr9B86.js";import{H as Ne}from"./h-stack-DD07j3MN.js";import{S as Ue,M as Ye}from"./sun-icon-sSR6JgAn.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";const Ze=Le({base:{label:{userSelect:"none"},root:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:"2",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled"}},thumb:{alignItems:"center",bg:"white",display:"inline-flex",justifyContent:"center",position:"absolute",rounded:"inherit",transitionDuration:"fast",transitionProperty:"background, transform",_checked:{transform:"translateX(100%)"}},track:{"--focus-ring-color":"{colorScheme.outline}",alignItems:"center",bg:"bg.muted",boxSizing:"content-box",display:"inline-flex",flexShrink:0,position:"relative",rounded:"full",transitionDuration:"fast",transitionProperty:"background",_peerFocusVisible:{...Me.outline}}},variants:{thin:{thumb:{boxShadow:"2xl",_checked:{bg:"colorScheme.solid"}},track:{"--focus-ring-offset":"4px",_checked:{bg:["colorScheme.muted","colorScheme.subtle"]}}},thick:{thumb:{_checked:{bg:"colorScheme.contrast"}},track:{p:"1",_checked:{bg:"colorScheme.solid"}}}},sizes:{sm:{label:{fontSize:"sm"},thumb:{boxSize:"3"},track:{w:"6"}},md:{label:{fontSize:"md"},thumb:{boxSize:"4"},track:{w:"8"}},lg:{label:{fontSize:"lg"},thumb:{boxSize:"5"},track:{w:"10"}}},props:{reverse:{false:{root:{flexDirection:"row"}},true:{root:{flexDirection:"row-reverse"}}},shape:{circle:{track:{rounded:"full"}},rounded:{thumb:{rounded:"l1"},track:{rounded:"l2"}},square:{track:{rounded:"0"}}}},compounds:[{css:{track:{h:"3"}},size:"sm",variant:"thick"},{css:{track:{h:"4"}},size:"md",variant:"thick"},{css:{track:{h:"5"}},size:"lg",variant:"thick"},{css:{track:{h:"2"}},size:"sm",variant:"thin"},{css:{track:{h:"3"}},size:"md",variant:"thin"},{css:{track:{h:"4"}},size:"lg",variant:"thin"}],defaultProps:{size:"md",variant:"thick",shape:"circle"}}),$e=(t={})=>{const r=s.useId(),{props:{id:o=r,ref:i,name:l,checked:m,checkOnEnter:k=!0,defaultChecked:I=!1,disabled:h,readOnly:S,required:b,value:B,onChange:f,...E},ariaProps:L,dataProps:u,eventProps:V}=Je(t),d=!(S||h),M=s.useRef(null),[c,q]=Ge({defaultValue:I,value:m}),A=s.useCallback(n=>{if(!d)return n.preventDefault();q(n.target.checked),f==null||f(n)},[f,q,d]),K=s.useCallback(n=>{var W;d&&k&&n.key==="Enter"&&((W=M.current)==null||W.click())},[d,k]),Ve=s.useCallback((n={})=>({...u,htmlFor:o,"data-checked":g(c),...E,...n}),[c,E,o,u]),_e=s.useCallback((n={})=>({"data-checked":g(c),...u,...n}),[c,u]),He=s.useCallback((n={})=>({"data-checked":g(c),...u,...n}),[c,u]),Be=s.useCallback((n={})=>({...L,...u,id:o,type:"checkbox",name:l,style:Ae.style,checked:c,disabled:h,readOnly:S,required:b,role:"switch",tabIndex:d?0:-1,value:B,...n,ref:qe(M,n.ref,i),onBlur:w(V.onBlur,n.onBlur),onChange:w(n.onChange,A),onFocus:w(V.onFocus,n.onFocus),onKeyDown:w(n.onKeyDown,K)}),[L,u,o,l,c,h,S,b,d,B,i,V,A,K]),Ee=s.useCallback((n={})=>({...u,"data-checked":g(c),...n}),[u,c]);return{checked:c,getInputProps:Be,getLabelProps:Ee,getRootProps:Ve,getThumbProps:He,getTrackProps:_e}},{withContext:H,withProvider:et}=Ke("switch",Ze),a=et(({children:t,icon:r,inputProps:o,labelProps:i,...l})=>{const{checked:m,getInputProps:k,getLabelProps:I,getRootProps:h,getThumbProps:S,getTrackProps:b}=$e(l);return e.jsxs(Q.label,{...h(),children:[e.jsx(Q.input,{"data-peer":!0,...k(o)}),e.jsx(rt,{...b(),children:e.jsx(tt,{...S(),children:r&&We(r)&&"on"in r?m?r.on:r.off:r})}),t?e.jsx(nt,{...I(i),children:t}):null]})},"root")(),tt=H("div","thumb")(),rt=H("div","track")(),nt=H("span","label")(),ft={component:a,title:"Components / Switch"},x=()=>e.jsx(a,{children:"Switch"}),C=()=>e.jsx(_,{columns:["thick","thin"],rows:ze,children:(t,r,o)=>e.jsx(a,{colorScheme:r,variant:t,defaultChecked:!0,children:"Switch"},o)}),y=()=>e.jsx(_,{columns:["sm","md","lg"],rows:ze,children:(t,r,o)=>e.jsx(a,{colorScheme:r,size:t,defaultChecked:!0,children:"Switch"},o)}),j=()=>e.jsx(Ie,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,disabled:!0,children:p(t)}),e.jsx(a,{variant:t,defaultChecked:!0,disabled:!0,children:p(t)})]},r)}),v=()=>e.jsx(Ie,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,readOnly:!0,children:p(t)}),e.jsx(a,{variant:t,defaultChecked:!0,readOnly:!0,children:p(t)})]},r)}),F=()=>e.jsx(_,{variant:"stack",rows:["square","rounded","circle"],children:(t,r,o)=>e.jsx(s.Fragment,{children:e.jsx(a,{defaultChecked:!0,shape:r,children:p(r)})},o)}),P=()=>e.jsx(a,{reverse:!0,children:"Switch"}),z=()=>e.jsx(a,{size:"lg",icon:{off:e.jsx(Ye,{fontSize:"sm"}),on:e.jsx(Ue,{fontSize:"sm"})},children:"Switch"}),D=()=>{const t=s.useId();return e.jsxs(Ne,{gap:"sm",children:[e.jsx(Qe,{as:"label",htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(a,{id:t})]})},T=()=>{const[t,{toggle:r}]=Xe(!1);return e.jsx(a,{checked:t,onChange:r,children:"Custom control"})},O=()=>{const{control:t,handleSubmit:r}=Oe(),o=i=>console.log("submit:",i);return e.jsxs(De,{as:"form",onSubmit:r(o),children:[e.jsx(Re,{name:"switch",control:t,render:({field:{value:i,...l}})=>e.jsx(a,{checked:i,...l,children:"Dark mode"})}),e.jsx(Te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},R=()=>{const t={switch:!0},{control:r,handleSubmit:o}=Oe({defaultValues:t}),i=l=>console.log("submit:",l);return e.jsxs(De,{as:"form",onSubmit:o(i),children:[e.jsx(Re,{name:"switch",control:r,render:({field:{value:l,...m}})=>e.jsx(a,{checked:l,...m,children:"Dark mode"})}),e.jsx(Te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var X,G,J;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
  return <Switch>Switch</Switch>;
}`,...(J=(G=x.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var N,U,Y;C.parameters={...C.parameters,docs:{...(N=C.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  return <PropsTable columns={["thick", "thin"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} variant={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...(Y=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,$,ee;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} size={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...(ee=($=y.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`() => {
  return <For each={["thick", "thin"] as const}>
      {(variant, index) => <Fragment key={index}>
          <Switch variant={variant} disabled>
            {toTitleCase(variant)}
          </Switch>

          <Switch variant={variant} defaultChecked disabled>
            {toTitleCase(variant)}
          </Switch>
        </Fragment>}
    </For>;
}`,...(ne=(re=j.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ae,se;v.parameters={...v.parameters,docs:{...(oe=v.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  return <For each={["thick", "thin"] as const}>
      {(variant, index) => <Fragment key={index}>
          <Switch variant={variant} readOnly>
            {toTitleCase(variant)}
          </Switch>

          <Switch variant={variant} defaultChecked readOnly>
            {toTitleCase(variant)}
          </Switch>
        </Fragment>}
    </For>;
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,ie,le;F.parameters={...F.parameters,docs:{...(ce=F.parameters)==null?void 0:ce.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["square", "rounded", "circle"]}>
      {(_, row, key) => <Fragment key={key}>
          <Switch defaultChecked shape={row}>
            {toTitleCase(row)}
          </Switch>
        </Fragment>}
    </PropsTable>;
}`,...(le=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ue,de,me;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
  return <Switch reverse>Switch</Switch>;
}`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var he,Se,pe;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Switch size="lg" icon={{
    off: <MoonIcon fontSize="sm" />,
    on: <SunIcon fontSize="sm" />
  }}>
      Switch
    </Switch>;
}`,...(pe=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:pe.source}}};var ke,be,fe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Text as="label" htmlFor={id} userSelect="none">
        Please Click
      </Text>

      <Switch id={id} />
    </HStack>;
}`,...(fe=(be=D.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var ge,we,xe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  const [checked, {
    toggle
  }] = useBoolean(false);
  return <Switch checked={checked} onChange={toggle}>
      Custom control
    </Switch>;
}`,...(xe=(we=T.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var Ce,ye,je;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  interface Data {
    switch: boolean;
  }
  const {
    control,
    handleSubmit
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch checked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(je=(ye=O.parameters)==null?void 0:ye.docs)==null?void 0:je.source}}};var ve,Fe,Pe;R.parameters={...R.parameters,docs:{...(ve=R.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  interface Data {
    switch: boolean;
  }
  const defaultValues: Data = {
    switch: true
  };
  const {
    control,
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller name="switch" control={control} render={({
      field: {
        value,
        ...rest
      }
    }) => <Switch checked={value} {...rest}>
            Dark mode
          </Switch>} />

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Pe=(Fe=R.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};const gt=["Basic","Variant","Size","Disabled","ReadOnly","Shape","Reverse","Icon","CustomLabel","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{x as Basic,T as CustomControl,D as CustomLabel,j as Disabled,z as Icon,O as ReactHookForm,R as ReactHookFormWithDefaultValue,v as ReadOnly,P as Reverse,F as Shape,y as Size,C as Variant,gt as __namedExportsOrder,ft as default};
