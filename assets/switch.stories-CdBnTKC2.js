import{d as re,a4 as ne,r as s,b as f,h as w,m as oe,P as ae,g as se,j as e,s as W,a5 as ce,C as Q,Q as k,T as ie,V as X,R as G}from"./iframe-Brv718Ke.js";import{P as V}from"./props-table-BhZ2Cxzm.js";import{u as J,C as N}from"./index.esm-DLcPDS83.js";import{u as le}from"./index-2Zpngp_N.js";import{u as ue}from"./index-DcQLEJWH.js";import{u as de}from"./use-field-props-CVZTzbsP.js";import{F as U}from"./for-y9tZyjCV.js";import{H as he}from"./h-stack-CxP5ixKU.js";import{S as me,M as Se}from"./sun-icon-H2g6kqjH.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-DLYm4Rks.js";import"./grid-item-DWuT-LWZ.js";import"./flex-DhUoci5A.js";import"./heading-DLtRtgvj.js";const pe=re({base:{label:{userSelect:"none"},root:{alignItems:"center",cursor:"pointer",display:"inline-flex",gap:"2",_readOnly:{layerStyle:"readOnly",pointerEvents:"none"},_disabled:{layerStyle:"disabled"}},thumb:{alignItems:"center",bg:"white",display:"inline-flex",justifyContent:"center",position:"absolute",rounded:"inherit",transitionDuration:"fast",transitionProperty:"background, transform",_checked:{transform:"translateX(100%)"}},track:{"--focus-ring-color":"{colorScheme.outline}",alignItems:"center",bg:"bg.muted",boxSizing:"content-box",display:"inline-flex",flexShrink:0,position:"relative",rounded:"full",transitionDuration:"fast",transitionProperty:"background",_peerFocusVisible:{...ne.outline}}},variants:{thin:{thumb:{boxShadow:"2xl",_checked:{bg:"colorScheme.solid"}},track:{"--focus-ring-offset":"4px",_checked:{bg:["colorScheme.muted","colorScheme.subtle"]}}},thick:{thumb:{_checked:{bg:"colorScheme.contrast"}},track:{p:"1",_checked:{bg:"colorScheme.solid"}}}},sizes:{sm:{label:{fontSize:"sm"},thumb:{boxSize:"3"},track:{w:"6"}},md:{label:{fontSize:"md"},thumb:{boxSize:"4"},track:{w:"8"}},lg:{label:{fontSize:"lg"},thumb:{boxSize:"5"},track:{w:"10"}}},props:{reverse:{false:{root:{flexDirection:"row"}},true:{root:{flexDirection:"row-reverse"}}},shape:{circle:{track:{rounded:"full"}},rounded:{thumb:{rounded:"l1"},track:{rounded:"l2"}},square:{track:{rounded:"0"}}}},compounds:[{css:{track:{h:"3"}},size:"sm",variant:"thick"},{css:{track:{h:"4"}},size:"md",variant:"thick"},{css:{track:{h:"5"}},size:"lg",variant:"thick"},{css:{track:{h:"2"}},size:"sm",variant:"thin"},{css:{track:{h:"3"}},size:"md",variant:"thin"},{css:{track:{h:"4"}},size:"lg",variant:"thin"}],defaultProps:{size:"md",variant:"thick",shape:"circle"}}),ke=(t={})=>{const r=s.useId(),{props:{id:o=r,ref:d,name:i,checked:u,checkOnEnter:h=!0,defaultChecked:O=!1,disabled:S,readOnly:p,required:b,value:H,onChange:B,...E},ariaProps:L,dataProps:l,eventProps:I}=de(t),m=!(p||S),M=s.useRef(null),[c,q]=ue({defaultValue:O,value:u}),A=s.useCallback(n=>{if(!m)return n.preventDefault();q(n.target.checked),B?.(n)},[B,q,m]),K=s.useCallback(n=>{m&&h&&n.key==="Enter"&&M.current?.click()},[m,h]),Y=s.useCallback((n={})=>({...l,htmlFor:o,"data-checked":f(c),...E,...n}),[c,E,o,l]),Z=s.useCallback((n={})=>({"data-checked":f(c),...l,...n}),[c,l]),$=s.useCallback((n={})=>({"data-checked":f(c),...l,...n}),[c,l]),ee=s.useCallback((n={})=>({...L,...l,id:o,type:"checkbox",name:i,style:ae.style,checked:c,disabled:S,readOnly:p,required:b,role:"switch",tabIndex:m?0:-1,value:H,...n,ref:oe(M,n.ref,d),onBlur:w(I.onBlur,n.onBlur),onChange:w(n.onChange,A),onFocus:w(I.onFocus,n.onFocus),onKeyDown:w(n.onKeyDown,K)}),[L,l,o,i,c,S,p,b,m,H,d,I,A,K]),te=s.useCallback((n={})=>({...l,"data-checked":f(c),...n}),[l,c]);return{checked:c,getInputProps:ee,getLabelProps:te,getRootProps:Y,getThumbProps:$,getTrackProps:Z}},{withContext:_,withProvider:be}=se("switch",pe),a=be(({children:t,icon:r,inputProps:o,labelProps:d,...i})=>{const{checked:u,getInputProps:h,getLabelProps:O,getRootProps:S,getThumbProps:p,getTrackProps:b}=ke(i);return e.jsxs(W.label,{...S(),children:[e.jsx(W.input,{"data-peer":!0,...h(o)}),e.jsx(we,{...b(),children:e.jsx(fe,{...p(),children:r&&ce(r)&&"on"in r?u?r.on:r.off:r})}),t?e.jsx(ge,{...O(d),children:t}):null]})},"root")(),fe=_("div","thumb")(),we=_("div","track")(),ge=_("span","label")(),_e={component:a,title:"Components / Switch"},g=()=>e.jsx(a,{children:"Switch"}),x=()=>e.jsx(V,{columns:["thick","thin"],rows:Q,children:(t,r,o)=>e.jsx(a,{colorScheme:r,variant:t,defaultChecked:!0,children:"Switch"},o)}),C=()=>e.jsx(V,{columns:["sm","md","lg"],rows:Q,children:(t,r,o)=>e.jsx(a,{colorScheme:r,size:t,defaultChecked:!0,children:"Switch"},o)}),y=()=>e.jsx(U,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,disabled:!0,children:k(t)}),e.jsx(a,{variant:t,defaultChecked:!0,disabled:!0,children:k(t)})]},r)}),j=()=>e.jsx(U,{each:["thick","thin"],children:(t,r)=>e.jsxs(s.Fragment,{children:[e.jsx(a,{variant:t,readOnly:!0,children:k(t)}),e.jsx(a,{variant:t,defaultChecked:!0,readOnly:!0,children:k(t)})]},r)}),v=()=>e.jsx(V,{variant:"stack",rows:["square","rounded","circle"],children:(t,r,o)=>e.jsx(s.Fragment,{children:e.jsx(a,{defaultChecked:!0,shape:r,children:k(r)})},o)}),P=()=>e.jsx(a,{reverse:!0,children:"Switch"}),F=()=>e.jsx(a,{size:"lg",icon:{off:e.jsx(Se,{fontSize:"sm"}),on:e.jsx(me,{fontSize:"sm"})},children:"Switch"}),z=()=>{const t=s.useId();return e.jsxs(he,{gap:"sm",children:[e.jsx(ie,{as:"label",htmlFor:t,userSelect:"none",children:"Please Click"}),e.jsx(a,{id:t})]})},D=()=>{const[t,{toggle:r}]=le(!1);return e.jsx(a,{checked:t,onChange:r,children:"Custom control"})},T=()=>{const{control:t,handleSubmit:r,watch:o}=J(),d=i=>console.log("submit:",i);return console.log("watch:",o()),e.jsxs(X,{as:"form",onSubmit:r(d),children:[e.jsx(N,{name:"switch",control:t,render:({field:{value:i,...u}})=>e.jsx(a,{checked:i,...u,children:"Dark mode"})}),e.jsx(G,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},R=()=>{const t={switch:!0},{control:r,handleSubmit:o,watch:d}=J({defaultValues:t}),i=u=>console.log("submit:",u);return console.log("watch:",d()),e.jsxs(X,{as:"form",onSubmit:o(i),children:[e.jsx(N,{name:"switch",control:r,render:({field:{value:u,...h}})=>e.jsx(a,{checked:u,...h,children:"Dark mode"})}),e.jsx(G,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Switch>Switch</Switch>;
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
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
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...T.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    switch: boolean;
  }
  const defaultValues: Data = {
    switch: true
  };
  const {
    control,
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
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
}`,...R.parameters?.docs?.source}}};const He=["Basic","Variant","Size","Disabled","ReadOnly","Shape","Reverse","Icon","CustomLabel","CustomControl","ReactHookForm","ReactHookFormWithDefaultValue"];export{g as Basic,D as CustomControl,z as CustomLabel,y as Disabled,F as Icon,T as ReactHookForm,R as ReactHookFormWithDefaultValue,j as ReadOnly,P as Reverse,v as Shape,C as Size,x as Variant,He as __namedExportsOrder,_e as default};
