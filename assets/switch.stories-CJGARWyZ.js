import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{$c as n,Cv as r,Dn as i,Em as a,Ev as o,Fa as s,Gm as c,Hv as l,Iv as u,Jt as d,Kd as f,Lf as p,Nd as m,Pa as h,Rf as g,Sn as _,Tn as v,Yt as y,el as b,yy as x,zh as S}from"./iframe-4z85howq.js";import{n as C,t as w}from"./storybook-DJV3OteS.js";import{n as T,r as E,t as D}from"./index.esm-CK9hKUqx.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{O=e(x(),1),T(),w(),n(),r(),m(),h(),a(),_(),p(),d(),k=o(),A={component:y,title:`Components / Switch`},j=()=>(0,k.jsx)(y,{children:`Switch`}),M=()=>(0,k.jsx)(C,{columns:[`thick`,`thin`],rows:l,children:(e,t,n)=>(0,k.jsx)(y,{colorScheme:t,variant:e,defaultChecked:!0,children:`Switch`},n)}),N=()=>(0,k.jsx)(C,{columns:[`sm`,`md`,`lg`],rows:l,children:(e,t,n)=>(0,k.jsx)(y,{colorScheme:t,size:e,defaultChecked:!0,children:`Switch`},n)}),P=()=>(0,k.jsx)(s,{each:[`thick`,`thin`],children:(e,t)=>(0,k.jsxs)(O.Fragment,{children:[(0,k.jsx)(y,{variant:e,disabled:!0,children:u(e)}),(0,k.jsx)(y,{variant:e,defaultChecked:!0,disabled:!0,children:u(e)})]},t)}),F=()=>(0,k.jsx)(s,{each:[`thick`,`thin`],children:(e,t)=>(0,k.jsxs)(O.Fragment,{children:[(0,k.jsx)(y,{variant:e,readOnly:!0,children:u(e)}),(0,k.jsx)(y,{variant:e,defaultChecked:!0,readOnly:!0,children:u(e)})]},t)}),I=()=>(0,k.jsx)(C,{variant:`stack`,rows:[`square`,`rounded`,`circle`],children:(e,t,n)=>(0,k.jsx)(O.Fragment,{children:(0,k.jsx)(y,{defaultChecked:!0,shape:t,children:u(t)})},n)}),L=()=>(0,k.jsx)(y,{reverse:!0,children:`Switch`}),R=()=>(0,k.jsx)(y,{size:`lg`,icon:{off:(0,k.jsx)(S,{fontSize:`sm`}),on:(0,k.jsx)(c,{fontSize:`sm`})},children:`Switch`}),z=()=>{let e=(0,O.useId)();return(0,k.jsxs)(i,{gap:`sm`,children:[(0,k.jsx)(g,{as:`label`,htmlFor:e,userSelect:`none`,children:`Please Click`}),(0,k.jsx)(y,{id:e})]})},B=()=>{let[e,{toggle:t}]=b(!1);return(0,k.jsx)(y,{checked:e,onChange:t,children:`Custom control`})},V=()=>{let{control:e,handleSubmit:t}=E();return(0,k.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(D,{name:`switch`,control:e,render:({field:{value:e,...t}})=>(0,k.jsx)(y,{checked:e,...t,children:`Dark mode`})}),(0,k.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},H=()=>{let{control:e,handleSubmit:t}=E({defaultValues:{switch:!0}});return(0,k.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(D,{name:`switch`,control:e,render:({field:{value:e,...t}})=>(0,k.jsx)(y,{checked:e,...t,children:`Dark mode`})}),(0,k.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Switch>Switch</Switch>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["thick", "thin"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} variant={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable columns={["sm", "md", "lg"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => <Switch key={key} colorScheme={row} size={column} defaultChecked>
          Switch
        </Switch>}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["square", "rounded", "circle"]}>
      {(_, row, key) => <Fragment key={key}>
          <Switch defaultChecked shape={row}>
            {toTitleCase(row)}
          </Switch>
        </Fragment>}
    </PropsTable>;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <Switch reverse>Switch</Switch>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <Switch size="lg" icon={{
    off: <MoonIcon fontSize="sm" />,
    on: <SunIcon fontSize="sm" />
  }}>
      Switch
    </Switch>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  const id = useId();
  return <HStack gap="sm">
      <Text as="label" htmlFor={id} userSelect="none">
        Please Click
      </Text>

      <Switch id={id} />
    </HStack>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  const [checked, {
    toggle
  }] = useBoolean(false);
  return <Switch checked={checked} onChange={toggle}>
      Custom control
    </Switch>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Shape`,`Reverse`,`Icon`,`CustomLabel`,`CustomControl`,`ReactHookForm`,`ReactHookFormWithDefaultValue`]}))();export{j as Basic,B as CustomControl,z as CustomLabel,P as Disabled,R as Icon,V as ReactHookForm,H as ReactHookFormWithDefaultValue,F as ReadOnly,L as Reverse,I as Shape,N as Size,M as Variant,U as __namedExportsOrder,A as default};