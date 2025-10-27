import{d as re,a3 as ne,r as s,b as f,h as g,m as oe,O as ae,g as se,j as e,s as W,az as ce,C as Q,P as p,T as ie,V as X,Q as G}from"./iframe-Cq3rcaMI.js";import{P as V}from"./props-table-C-lxxN5V.js";import{u as J,C as N}from"./index.esm-UFFg0WXH.js";import{u as le}from"./index-CoHgiz7D.js";import{u as ue}from"./index-CGtAgyPS.js";import{u as de}from"./use-field-props-B0aPqHXg.js";import{F as U}from"./for-CHPKWv_w.js";import{H as me}from"./h-stack-4eXFQ3qJ.js";import{S as he,M as Se}from"./sun-icon-QDNiMaCa.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BSsvxjsk.js";import"./grid-item-DtIdkb4w.js";import"./flex-hG4eu5He.js";import"./heading-vD3e3jk6.js";const pe=re({base:{label:{userSelect:"none"},root:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:"2",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled"}},thumb:{alignItems:"center",bg:"white",display:"inline-flex",justifyContent:"center",position:"absolute",rounded:"inherit",transitionDuration:"fast",transitionProperty:"background, transform",_checked:{transform:"translateX(100%)"}},track:{"--focus-ring-color":"{colorScheme.outline}",alignItems:"center",bg:"bg.muted",boxSizing:"content-box",display:"inline-flex",flexShrink:0,position:"relative",rounded:"full",transitionDuration:"fast",transitionProperty:"background",_peerFocusVisible:{...ne.outline}}},variants:{thin:{thumb:{boxShadow:"2xl",_checked:{bg:"colorScheme.solid"}},track:{"--focus-ring-offset":"4px",_checked:{bg:["colorScheme.muted","colorScheme.subtle"]}}},thick:{thumb:{_checked:{bg:"colorScheme.contrast"}},track:{p:"1",_checked:{bg:"colorScheme.solid"}}}},sizes:{sm:{label:{fontSize:"sm"},thumb:{boxSize:"3"},track:{w:"6"}},md:{label:{fontSize:"md"},thumb:{boxSize:"4"},track:{w:"8"}},lg:{label:{fontSize:"lg"},thumb:{boxSize:"5"},track:{w:"10"}}},props:{reverse:{false:{root:{flexDirection:"row"}},true:{root:{flexDirection:"row-reverse"}}},shape:{circle:{track:{rounded:"full"}},rounded:{thumb:{rounded:"l1"},track:{rounded:"l2"}},square:{track:{rounded:"0"}}}},compounds:[{css:{track:{h:"3"}},size:"sm",variant:"thick"},{css:{track:{h:"4"}},size:"md",variant:"thick"},{css:{track:{h:"5"}},size:"lg",variant:"thick"},{css:{track:{h:"2"}},size:"sm",variant:"thin"},{css:{track:{h:"3"}},size:"md",variant:"thin"},{css:{track:{h:"4"}},size:"lg",variant:"thin"}],defaultProps:{size:"md",variant:"thick",shape:"circle"}}),ke=(t={})=>{const r=s.useId(),{props:{id:o=r,ref:i,name:l,checked:m,checkOnEnter:k=!0,defaultChecked:R=!1,disabled:h,readOnly:S,required:b,value:H,onChange:B,...E},ariaProps:L,dataProps:u,eventProps:I}=de(t),d=!(S||h),M=s.useRef(null),[c,q]=ue({defaultValue:R,value:m}),A=s.useCallback(n=>{if(!d)return n.preventDefault();q(n.target.checked),B?.(n)},[B,q,d]),K=s.useCallback(n=>{d&&k&&n.key==="Enter"&&M.current?.click()},[d,k]),Y=s.useCallback((n={})=>({...u,htmlFor:o,"data-checked":f(c),...E,...n}),[c,E,o,u]),Z=s.useCallback((n={})=>({"data-checked":f(c),...u,...n}),[c,u]),$=s.useCallback((n={})=>({"data-checked":f(c),...u,...n}),[c,u]),ee=s.useCallback((n={})=>({...L,...u,id:o,type:"checkbox",name:l,style:ae.style,checked:c,disabled:h,readOnly:S,required:b,role:"switch",tabIndex:d?0:-1,value:H,...n,ref:oe(M,n.ref,i),onBlur:g(I.onBlur,n.onBlur),onChange:g(n.onChange,A),onFocus:g(I.onFocus,n.onFocus),onKeyDown:g(n.onKeyDown,K)}),[L,u,o,l,c,h,S,b,d,H,i,I,A,K]),te=s.useCallback((n={})=>({...u,"data-checked":f(c),...n}),[u,c]);return{checked:c,getInputProps:ee,getLabelProps:te,getRootProps:Y,getThumbProps:$,getTrackProps:Z}},{withContext:_,withProvider:be}=se("switch",pe),a=be(({children:t,icon:r,inputProps:o,labelProps:i,...l})=>{const{checked:m,getInputProps:k,getLabelProps:R,getRootProps:h,getThumbProps:S,getTrackProps:b}=ke(l);return e.jsxs(W.label,{...h(),children:[e.jsx(W.input,{"data-peer":!0,...k(o)}),e.jsx(ge,{...b(),children:e.jsx(fe,{...S(),children:r&&ce(r)&&"on"in r?m?r.on:r.off:r})}),t?e.jsx(we,{...R(i),children:t}):null]})},"root")(),fe=_("div","thumb")(),ge=_("div","track")(),we=_("span","label")(),_e={component:a,title:"Components / Switch"},w=()=>e.jsx(a,{children:"Switch"}),x=()=>e.jsx(V,{columns:["thick","thin"],rows:Q,children:(t,r,o)=>e.jsx(a,{colorScheme:r,variant:t,defaultChecked:!0,children:"Switch"},o)}),C=()=>e.jsx(V,{columns:["sm","md","lg"],rows:Q,children:(t,r,o)=>e.jsx(a,{colorScheme:r,size:t,defaultChecked:!0,children:"Switch"},o)}),y=()=>e.jsx(U,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,disabled:!0,children:p(t)}),e.jsx(a,{variant:t,defaultChecked:!0,disabled:!0,children:p(t)})]},r)}),j=()=>e.jsx(U,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,readOnly:!0,children:p(t)}),e.jsx(a,{variant:t,defaultChecked:!0,readOnly:!0,children:p(t)})]},r)}),v=()=>e.jsx(V,{variant:"stack",rows:["square","rounded","circle"],children:(t,r,o)=>e.jsx(s.Fragment,{children:e.jsx(a,{defaultChecked:!0,shape:r,children:p(r)})},o)}),P=()=>e.jsx(a,{reverse:!0,children:"Switch"}),F=()=>e.jsx(a,{size:"lg",icon:{off:e.jsx(Se,{fontSize:"sm"}),on:e.jsx(he,{fontSize:"sm"})},children:"Switch"}),z=()=>{const t=s.useId();return e.jsxs(me,{gap:"sm",children:[e.jsx(ie,{as:"label",htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(a,{id:t})]})},D=()=>{const[t,{toggle:r}]=le(!1);return e.jsx(a,{checked:t,onChange:r,children:"Custom control"})},T=()=>{const{control:t,handleSubmit:r}=J(),o=i=>console.log("submit:",i);return e.jsxs(X,{as:"form",onSubmit:r(o),children:[e.jsx(N,{name:"switch",control:t,render:({field:{value:i,...l}})=>e.jsx(a,{checked:i,...l,children:"Dark mode"})}),e.jsx(G,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},O=()=>{const t={switch:!0},{control:r,handleSubmit:o}=J({defaultValues:t}),i=l=>console.log("submit:",l);return e.jsxs(X,{as:"form",onSubmit:o(i),children:[e.jsx(N,{name:"switch",control:r,render:({field:{value:l,...m}})=>e.jsx(a,{checked:l,...m,children:"Dark mode"})}),e.jsx(G,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <Switch>Switch</Switch>;
}`,...w.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["thick", "thin"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} variant={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} size={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["square", "rounded", "circle"]}>
      {(_, row, key) => <Fragment key={key}>
          <Switch defaultChecked shape={row}>
            {toTitleCase(row)}
          </Switch>
        </Fragment>}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Switch reverse>Switch</Switch>;
}`,...P.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <Switch size="lg" icon={{
    off: <MoonIcon fontSize="sm" />,
    on: <SunIcon fontSize="sm" />
  }}>
      Switch
    </Switch>;
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Text as="label" htmlFor={id} userSelect="none">
        Please Click
      </Text>

      <Switch id={id} />
    </HStack>;
}`,...z.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  const [checked, {
    toggle
  }] = useBoolean(false);
  return <Switch checked={checked} onChange={toggle}>
      Custom control
    </Switch>;
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
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
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};const He=["Basic","Variant","Size","Disabled","ReadOnly","Shape","Reverse","Icon","CustomLabel","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{w as Basic,D as CustomControl,z as CustomLabel,y as Disabled,F as Icon,T as ReactHookForm,O as ReactHookFormWithDefaultValue,j as ReadOnly,P as Reverse,v as Shape,C as Size,x as Variant,He as __namedExportsOrder,_e as default};
