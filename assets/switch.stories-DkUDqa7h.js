import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{pt as r,qn as i,tr as a}from"./core-CwFz10Qm.js";import{t as o}from"./jsx-runtime-BBQGix-2.js";import{E as s,Ot as c,t as l}from"./icon-BCdQECWv.js";import{t as u}from"./text-CWhjq_ZM.js";import{t as d}from"./text-PitPK9Eo.js";import{d as f,t as p}from"./button-B74B6_fk.js";import{n as m,t as h}from"./use-boolean-BAa8oyUv.js";import{Cn as g,En as _,Fa as v,Ia as y,Xt as b,Yt as x,wn as S}from"./iframe-DTxndMIb.js";import{n as C,t as w}from"./storybook-D8sCzE6-.js";import{n as T,r as E,t as D}from"./index.esm-BGVpNNgE.js";var O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;t((()=>{O=e(n(),1),T(),w(),h(),r(),p(),v(),l(),g(),d(),x(),k=o(),A={component:b,title:`Components / Switch`},j=()=>(0,k.jsx)(b,{children:`Switch`}),M=()=>(0,k.jsx)(C,{columns:[`thick`,`thin`],rows:a,children:(e,t,n)=>(0,k.jsx)(b,{colorScheme:t,variant:e,defaultChecked:!0,children:`Switch`},n)}),N=()=>(0,k.jsx)(C,{columns:[`sm`,`md`,`lg`],rows:a,children:(e,t,n)=>(0,k.jsx)(b,{colorScheme:t,size:e,defaultChecked:!0,children:`Switch`},n)}),P=()=>(0,k.jsx)(y,{each:[`thick`,`thin`],children:(e,t)=>(0,k.jsxs)(O.Fragment,{children:[(0,k.jsx)(b,{variant:e,disabled:!0,children:i(e)}),(0,k.jsx)(b,{variant:e,defaultChecked:!0,disabled:!0,children:i(e)})]},t)}),F=()=>(0,k.jsx)(y,{each:[`thick`,`thin`],children:(e,t)=>(0,k.jsxs)(O.Fragment,{children:[(0,k.jsx)(b,{variant:e,readOnly:!0,children:i(e)}),(0,k.jsx)(b,{variant:e,defaultChecked:!0,readOnly:!0,children:i(e)})]},t)}),I=()=>(0,k.jsx)(C,{variant:`stack`,rows:[`square`,`rounded`,`circle`],children:(e,t,n)=>(0,k.jsx)(O.Fragment,{children:(0,k.jsx)(b,{defaultChecked:!0,shape:t,children:i(t)})},n)}),L=()=>(0,k.jsx)(b,{reverse:!0,children:`Switch`}),R=()=>(0,k.jsx)(b,{size:`lg`,icon:{off:(0,k.jsx)(c,{fontSize:`sm`}),on:(0,k.jsx)(s,{fontSize:`sm`})},children:`Switch`}),z=()=>{let e=(0,O.useId)();return(0,k.jsxs)(_,{gap:`sm`,children:[(0,k.jsx)(u,{as:`label`,htmlFor:e,userSelect:`none`,children:`Please Click`}),(0,k.jsx)(b,{id:e})]})},B=()=>{let[e,{toggle:t}]=m(!1);return(0,k.jsx)(b,{checked:e,onChange:t,children:`Custom control`})},V=()=>{let{control:e,handleSubmit:t}=E();return(0,k.jsxs)(S,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(D,{name:`switch`,control:e,render:({field:{value:e,...t}})=>(0,k.jsx)(b,{checked:e,...t,children:`Dark mode`})}),(0,k.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},H=()=>{let{control:e,handleSubmit:t}=E({defaultValues:{switch:!0}});return(0,k.jsxs)(S,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,k.jsx)(D,{name:`switch`,control:e,render:({field:{value:e,...t}})=>(0,k.jsx)(b,{checked:e,...t,children:`Dark mode`})}),(0,k.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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