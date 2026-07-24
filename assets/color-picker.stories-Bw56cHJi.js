import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{_r as ee,l as r,pt as te,qn as i,r as ne,t as re,tr as ie}from"./core-CwFz10Qm.js";import{t as ae}from"./jsx-runtime-BBQGix-2.js";import{bt as a,ft as oe,t as se}from"./icon-BCdQECWv.js";import{a as ce,c as le,d as ue,l as de,t as fe}from"./popover-BMXwI5cZ.js";import{c as pe,d as me,i as he,t as ge}from"./button-B74B6_fk.js";import{As as _e,Cn as ve,Cu as o,Du as ye,Fa as be,Fd as xe,Ia as s,Nl as Se,Os as Ce,Pl as c,Ud as we,bs as Te,dd as Ee,gs as De,hd as l,js as Oe,ks as ke,ku as Ae,vu as je,wn as u,xu as Me,yu as d}from"./iframe-DTxndMIb.js";import{n as f,t as p}from"./storybook-D8sCzE6-.js";import{n as Ne,r as m,t as Pe}from"./index.esm-BGVpNNgE.js";var Fe,h,Ie,Le,g,Re,_,ze,v,Be,Ve,He,Ue,We,Ge=t((()=>{Fe=e(n(),1),re(),te(),De(),xe(),he(),se(),je(),fe(),Oe(),Ce(),h=ae(),{ComponentContext:Ie,PropsContext:Le,useComponentContext:g,usePropsContext:Re,withContext:_,withProvider:ze}=ne(`color-picker`,_e),v=ze(e=>{let[t,{className:n,css:te,colorScheme:i,size:ne,animationScheme:re=`block-start`,colorSwatches:ie,colorSwatchGroupColumns:ae,colorSwatchGroupLabel:a,duration:oe,errorBorderColor:se,focusBorderColor:ce,withColorSwatch:fe=!0,withEyeDropper:me=!0,alphaSliderProps:he,colorSwatchGroupLabelProps:ge,colorSwatchGroupProps:_e,colorSwatchItemProps:ve,colorSwatchProps:o,contentProps:ye,elementProps:be,endElementProps:xe,eyeDropperProps:s,fieldProps:Se,hueSliderProps:Ce,inputProps:c,rootProps:we,saturationSliderProps:Ee,selectorProps:De,startElementProps:l,...Oe}]=pe(e),je=ue(Oe),{value:u,getContentProps:f,getEyeDropperProps:p,getFieldProps:Ne,getInputProps:m,getRootProps:Pe,getSelectorProps:Le,popoverProps:g}=ke({...Oe,...je}),Re=(0,Fe.useMemo)(()=>({animationScheme:re,duration:oe,...g}),[re,oe,g]),_=Ae({errorBorderColor:se,focusBorderColor:ce});return(0,h.jsx)(Ie,{value:(0,Fe.useMemo)(()=>({value:u,getEyeDropperProps:p,getInputProps:m,inputProps:c}),[p,m,c,u]),children:(0,h.jsxs)(le,{...Re,children:[(0,h.jsxs)(d,{...r({className:n,css:te,colorScheme:i},Pe(t),we)(),children:[fe?(0,h.jsx)(Me,{...r(be,l)(),children:(0,h.jsx)(He,{...o})}):null,(0,h.jsx)(de,{children:(0,h.jsx)(Be,{...Ne({..._,...Se})})}),me?(0,h.jsx)(Me,{...r({clickable:!0},be,xe)(),children:(0,h.jsx)(Ue,{...p(s)})}):null]}),(0,h.jsx)(We,{...ee(f(ee(ye))),children:(0,h.jsx)(Te,{size:ne,...Le({colorSwatches:ie,colorSwatchGroupColumns:ae,colorSwatchGroupLabel:a,alphaSliderProps:he,colorSwatchGroupLabelProps:ge,colorSwatchGroupProps:_e,colorSwatchItemProps:ve,hueSliderProps:Ce,saturationSliderProps:Ee,...De})})})]})})},`root`,{transferProps:[`size`]})(e=>r(ye(),e)()),Be=_(`div`,`field`)({"data-group-propagate":``},e=>{let{getInputProps:t,inputProps:n}=g();return{children:(0,h.jsx)(Ve,{...t(n)}),...e}}),Ve=_(`input`,`input`)(),He=_(we,`colorSwatch`)(void 0,e=>{let{value:t}=g();return{variant:`circle`,color:t,...e}}),Ue=_(`div`,`eyeDropper`)(void 0,({children:e,icon:t,...n})=>{let{getEyeDropperProps:ee}=g();return ee({children:t||e||(0,h.jsx)(oe,{}),...n})}),We=_(ce,`content`)()})),Ke,y,qe,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Je;t((()=>{Ke=e(n(),1),Ne(),p(),te(),Se(),ge(),Ee(),be(),se(),je(),ve(),Ge(),y=ae(),qe={component:v,title:`Components / ColorPicker`},b=()=>(0,y.jsx)(v,{placeholder:`#4387f4`}),x=()=>(0,y.jsx)(f,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:ie,children:(e,t,n)=>(0,y.jsx)(v,{colorScheme:t,variant:e,placeholder:i(e)},n)}),S=()=>(0,y.jsx)(f,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,y.jsx)(v,{size:e,variant:t,placeholder:`Size (${e})`},n)}),C=()=>(0,y.jsx)(v,{defaultValue:`#4387f4`,placeholder:`#4387f4`}),w=()=>(0,y.jsx)(v,{defaultValue:`#775999A0`,placeholder:`#775999A0`}),T=()=>(0,y.jsx)(f,{variant:`stack`,rows:[`hex`,`hexa`,`rgb`,`rgba`,`hsl`,`hsla`],children:(e,t,n)=>(0,y.jsx)(v,{format:t,placeholder:`Format (${t})`},n)}),E=()=>(0,y.jsx)(v,{pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387f4`}),D=()=>(0,y.jsx)(v,{formatInput:e=>e.toUpperCase(),pattern:/[^a-fA-F0-9#]/g,placeholder:`#4387F4`}),O=()=>(0,y.jsx)(v,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(45, 100%, 50%)`,`hsl(90, 100%, 50%)`,`hsl(135, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(225, 100%, 50%)`,`hsl(270, 100%, 50%)`,`hsl(315, 100%, 50%)`],colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),k=()=>(0,y.jsx)(v,{colorSwatches:[`hsl(0, 100%, 50%)`,`hsl(36, 100%, 50%)`,`hsl(72, 100%, 50%)`,`hsl(108, 100%, 50%)`,`hsl(144, 100%, 50%)`,`hsl(180, 100%, 50%)`,`hsl(216, 100%, 50%)`,`hsl(252, 100%, 50%)`,`hsl(288, 100%, 50%)`,`hsl(324, 100%, 50%)`],colorSwatchGroupColumns:10,colorSwatchGroupLabel:`Pick a color`,placeholder:`#4387f4`}),A=()=>(0,y.jsx)(v,{offset:[16,16],placeholder:`#4387f4`}),j=()=>(0,y.jsx)(v,{gutter:16,placeholder:`#4387f4`}),M=()=>(0,y.jsx)(v,{animationScheme:`inline-start`,placeholder:`#4387f4`}),N=()=>(0,y.jsx)(v,{animationScheme:`inline-start`,placeholder:`#4387f4`,placement:`center-end`,rootProps:{w:`xs`}}),P=()=>(0,y.jsx)(c,{minH:`200dvh`,w:`full`,children:(0,y.jsx)(v,{blockScrollOnMount:!0,placeholder:`#4387f4`})}),F=()=>(0,y.jsx)(v,{openOnChange:e=>e.target.value.length>1,openOnFocus:!1,placeholder:`#4387f4`}),I=()=>(0,y.jsx)(v,{closeOnChange:e=>!e.target.value.length,openOnFocus:!1,placeholder:`#4387f4`}),L=()=>(0,y.jsx)(c,{minH:`200dvh`,w:`full`,children:(0,y.jsx)(v,{closeOnScroll:!0,placeholder:`#4387f4`})}),R=()=>(0,y.jsx)(v,{openOnFocus:!1,placeholder:`#4387f4`}),z=()=>(0,y.jsx)(v,{openOnClick:!1,placeholder:`#4387f4`}),B=()=>(0,y.jsx)(v,{closeOnBlur:!1,placeholder:`#4387f4`}),V=()=>(0,y.jsx)(v,{closeOnEsc:!1,placeholder:`#4387f4`}),H=()=>(0,y.jsx)(v,{placeholder:`#4387f4`,withEyeDropper:!1}),U=()=>(0,y.jsx)(v,{allowInput:!1,placeholder:`#4387f4`}),W=()=>(0,y.jsx)(v,{placeholder:`#4387f4`,withColorSwatch:!1}),G=()=>(0,y.jsx)(f,{variant:`stack`,rows:[`rounded`,`circle`,`square`],children:(e,t,n)=>(0,y.jsx)(v,{placeholder:`#4387f4`,selectorProps:{shape:t}},n)}),K=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsx)(v,{variant:e,disabled:!0,placeholder:i(e)},t)}),(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsxs)(d,{variant:e,disabled:!0,children:[(0,y.jsx)(o,{children:(0,y.jsx)(a,{})}),(0,y.jsx)(v,{placeholder:i(e)})]},t)}),(0,y.jsx)(l,{disabled:!0,label:`What is your favorite color?`,children:(0,y.jsx)(v,{placeholder:`#4387f4`})})]}),q=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsx)(v,{variant:e,placeholder:i(e),readOnly:!0},t)}),(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsxs)(d,{variant:e,readOnly:!0,children:[(0,y.jsx)(o,{children:(0,y.jsx)(a,{})}),(0,y.jsx)(v,{placeholder:i(e)})]},t)}),(0,y.jsx)(l,{label:`What is your favorite color?`,readOnly:!0,children:(0,y.jsx)(v,{placeholder:`#4387f4`})})]}),J=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsx)(v,{variant:e,invalid:!0,placeholder:i(e)},t)}),(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsxs)(d,{variant:e,invalid:!0,children:[(0,y.jsx)(o,{children:(0,y.jsx)(a,{})}),(0,y.jsx)(v,{placeholder:i(e)})]},t)}),(0,y.jsx)(l,{errorMessage:`This is required.`,invalid:!0,label:`What is your favorite color?`,children:(0,y.jsx)(v,{placeholder:`#4387f4`})})]}),Y=()=>(0,y.jsx)(s,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,y.jsxs)(d,{variant:e,children:[(0,y.jsx)(o,{children:(0,y.jsx)(a,{})}),(0,y.jsx)(v,{placeholder:i(e)})]},t)}),X=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v,{placeholder:`Default border color`}),(0,y.jsx)(v,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,y.jsx)(v,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,y.jsxs)(d,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,y.jsx)(o,{children:(0,y.jsx)(a,{})}),(0,y.jsx)(v,{placeholder:`Custom border color`})]})]}),Z=()=>{let[e,t]=(0,Ke.useState)(`#4387f4`);return(0,y.jsx)(v,{"aria-label":`Choose a color`,value:e,onChange:t})},Q=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=m();return(0,y.jsxs)(u,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,y.jsx)(l,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,y.jsx)(Pe,{name:`colorPicker`,control:e,render:({field:e})=>(0,y.jsx)(v,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,y.jsx)(me,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=m({defaultValues:{colorPicker:`#4387f4`}});return(0,y.jsxs)(u,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,y.jsx)(l,{errorMessage:t.colorPicker?.message,invalid:!!t.colorPicker,label:`What is your favorite color?`,children:(0,y.jsx)(Pe,{name:`colorPicker`,control:e,render:({field:e})=>(0,y.jsx)(v,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,y.jsx)(me,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" />;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <ColorPicker key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <ColorPicker key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#4387f4" placeholder="#4387f4" />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker defaultValue="#775999A0" placeholder="#775999A0" />;
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["hex", "hexa", "rgb", "rgba", "hsl", "hsla"]}>
      {(_, row, key) => <ColorPicker key={key} format={row} placeholder={\`Format (\${row})\`} />}
    </PropsTable>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker pattern={/[^a-fA-F0-9#]/g} placeholder="#4387f4" />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker formatInput={value => value.toUpperCase()} pattern={/[^a-fA-F0-9#]/g} placeholder="#4387F4" />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(45, 100%, 50%)", "hsl(90, 100%, 50%)", "hsl(135, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(225, 100%, 50%)", "hsl(270, 100%, 50%)", "hsl(315, 100%, 50%)"]} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker colorSwatches={["hsl(0, 100%, 50%)", "hsl(36, 100%, 50%)", "hsl(72, 100%, 50%)", "hsl(108, 100%, 50%)", "hsl(144, 100%, 50%)", "hsl(180, 100%, 50%)", "hsl(216, 100%, 50%)", "hsl(252, 100%, 50%)", "hsl(288, 100%, 50%)", "hsl(324, 100%, 50%)"]} colorSwatchGroupColumns={10} colorSwatchGroupLabel="Pick a color" placeholder="#4387f4" />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker offset={[16, 16]} placeholder="#4387f4" />;
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker gutter={16} placeholder="#4387f4" />;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" />;
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker animationScheme="inline-start" placeholder="#4387f4" placement="center-end" rootProps={{
    w: "xs"
  }} />;
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker blockScrollOnMount placeholder="#4387f4" />
    </Box>;
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnChange={ev => ev.target.value.length > 1} openOnFocus={false} placeholder="#4387f4" />;
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnChange={ev => !ev.target.value.length} openOnFocus={false} placeholder="#4387f4" />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <Box minH="200dvh" w="full">
      <ColorPicker closeOnScroll placeholder="#4387f4" />
    </Box>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnFocus={false} placeholder="#4387f4" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker openOnClick={false} placeholder="#4387f4" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnBlur={false} placeholder="#4387f4" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker closeOnEsc={false} placeholder="#4387f4" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withEyeDropper={false} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker allowInput={false} placeholder="#4387f4" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <ColorPicker placeholder="#4387f4" withColorSwatch={false} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["rounded", "circle", "square"]}>
      {(_, row, key) => <ColorPicker key={key} placeholder="#4387f4" selectorProps={{
      shape: row
    }} />}
    </PropsTable>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled label="What is your favorite color?">
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root label="What is your favorite color?" readOnly>
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <ColorPicker key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <PaletteIcon />
            </InputGroup.Addon>
            <ColorPicker placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="This is required." invalid label="What is your favorite color?">
        <ColorPicker placeholder="#4387f4" />
      </Field.Root>
    </>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <PaletteIcon />
          </InputGroup.Addon>
          <ColorPicker placeholder={toTitleCase(variant)} />
        </InputGroup.Root>}
    </For>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <>
      <ColorPicker placeholder="Default border color" />

      <ColorPicker focusBorderColor="green.500" placeholder="Custom border color" />

      <ColorPicker errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>
          <PaletteIcon />
        </InputGroup.Addon>
        <ColorPicker placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const [value, setValue] = useState("#4387f4");
  return <ColorPicker aria-label="Choose a color" value={value} onChange={setValue} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.colorPicker?.message} invalid={!!errors.colorPicker} label="What is your favorite color?">
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorPicker {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    colorPicker: string;
  }
  const defaultValues: Data = {
    colorPicker: "#4387f4"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.colorPicker?.message} invalid={!!errors.colorPicker} label="What is your favorite color?">
        <Controller name="colorPicker" control={control} render={({
        field
      }) => <ColorPicker {...field} />} rules={{
        required: {
          message: "This is required.",
          value: true
        }
      }} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...$.parameters?.docs?.source}}},Je=`Basic.Variant.Size.DefaultValue.Alpha.Format.Pattern.FormatInput.ColorSwatches.ColorSwatchGroupColumns.Offset.Gutter.AnimationScheme.Placement.BlockScrollOnMount.OpenOnChange.CloseOnChange.CloseOnScroll.DisabledOpenOnFocus.DisabledOpenOnClick.DisabledCloseOnBlur.DisabledCloseOnEsc.DisabledEyeDropper.DisallowInput.HiddenColorSwatch.Shape.Disabled.ReadOnly.Invalid.Addon.BorderColor.CustomControl.ReactHookForm.ReactHookFormDefaultValue`.split(`.`)}))();export{Y as Addon,w as Alpha,M as AnimationScheme,b as Basic,P as BlockScrollOnMount,X as BorderColor,I as CloseOnChange,L as CloseOnScroll,k as ColorSwatchGroupColumns,O as ColorSwatches,Z as CustomControl,C as DefaultValue,K as Disabled,B as DisabledCloseOnBlur,V as DisabledCloseOnEsc,H as DisabledEyeDropper,z as DisabledOpenOnClick,R as DisabledOpenOnFocus,U as DisallowInput,T as Format,D as FormatInput,j as Gutter,W as HiddenColorSwatch,J as Invalid,A as Offset,F as OpenOnChange,E as Pattern,N as Placement,Q as ReactHookForm,$ as ReactHookFormDefaultValue,q as ReadOnly,G as Shape,S as Size,x as Variant,Je as __namedExportsOrder,qe as default};