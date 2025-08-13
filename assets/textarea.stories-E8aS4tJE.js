import{n as X,r as f,h as W,m as _,v as q,ac as Z,X as J,E as K,by as Q,P as ee,o as re,j as e,C as oe,F as P,V as A}from"./iframe-BHZTlJ0V.js";import{P as L}from"./props-table-C4SE-e-6.js";import{u as Y}from"./index.esm-CFPRqPkB.js";import{a as H,i as c,u as ae}from"./input-C6rXQcn1.js";import{b as V}from"./event-BpBfpFn5.js";import{u as ne,F as g}from"./use-field-props-CVbuf8Se.js";import{u as te}from"./use-input-border-Bnt3lK9m.js";import{F as u}from"./for-VorXHFQH.js";import{B as M}from"./button-BB2ssYQZ.js";import{I as m,b as x,a as N}from"./input-group-C__1TAHv.js";import{M as $}from"./mail-icon-DOLOn-po.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-ftZgIPsh.js";import"./grid-item-DzHPtOXT.js";import"./flex-DAlkda-X.js";import"./heading-CZleZHQ4.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./group-DVyg0qWk.js";import"./index-DBNyBkxR.js";import"./use-breakpoint-BHTgFfav.js";import"./use-breakpoint-value-DTZaut4a.js";import"./use-color-mode-value-ZthzxX7p.js";import"./createLucideIcon-D8IHT0xS.js";const se=X({base:{...c.base,resize:"vertical"},variants:{filled:{...c.variants?.filled},flushed:{...c.variants?.flushed,...H()},outline:{...c.variants?.outline},plain:{...c.variants?.plain}},sizes:{xs:{...c.sizes?.xs,py:"{--input-space-y}"},sm:{...c.sizes?.sm,py:"{--input-space-y}"},md:{...c.sizes?.md,py:"{--input-space-y}"},lg:{...c.sizes?.lg,py:"{--input-space-y}"},xl:{...c.sizes?.xl,py:"{--input-space-y}"},"2xl":{...c.sizes?.["2xl"],py:"{--input-space-y}"}},compounds:[{css:H(),variant:"flushed"}],defaultProps:{size:"md",variant:"outline"}}),le=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],O={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},ie=r=>{const o=window.getComputedStyle(r);if(o==null)return null;const n=Q(o,le);if(n.boxSizing==="")return null;const l=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),t=parseFloat(n.lineHeight);return{style:n,border:i,padding:l,rowHeight:t}},de=r=>{Object.keys(O).forEach(o=>{r.style.setProperty(o,O[o],"important")})},ce=(r,o,n,l,i)=>{const t=r.cloneNode();Object.assign(t.style,o.style),de(t),t.value=n,document.body.appendChild(t);let s;if(t.scrollHeight){const p=o.rowHeight;s=Math.min(l,Math.max(i,Math.floor(t.scrollHeight/p)))}else{const p=(n.match(/\n/g)||[]).length;s=Math.min(l,Math.max(i,p+1))}return document.body.removeChild(t),s},ue=({disabled:r=!1,maxRows:o=1/0,minRows:n=2}={})=>{const l=f.useRef(null),i=f.useRef(null),t=l.current?.value??"",s=f.useCallback(()=>{const d=l.current;if(!d)return;let{placeholder:h,value:b}=d;if(b===i.current)return;i.current=b,b||=h||"x";const D=ie(d);if(!D)return;const U=ce(d,D,b,o,n);d.rows=U},[l,o,n]),p=f.useCallback((d={})=>({...d,ref:_(d.ref,l),style:{resize:r?void 0:"none",...d.style},onChange:W(d.onChange,r?q:s)}),[l,s,r]);return Z(()=>{if(!J()||r)return;s();const d=V(window,"resize",s),h=V(document.fonts,"loadingdone",s);return()=>{d(),h()}},[]),K(()=>{r||s()},[t]),{ref:l,getTextareaProps:p,onResizeTextarea:s}},pe=({autosize:r,maxRows:o,minRows:n,resizeRef:l,...i}={})=>{const{ref:t,onResizeTextarea:s}=ue({disabled:!r,maxRows:o,minRows:n});return ee(l,s),{getTextareaProps:f.useCallback(({style:d,...h}={})=>({...i,...h,ref:_(h.ref,i.ref,t),style:{resize:r?"none":void 0,...i.style,...d},onChange:W(h.onChange,i.onChange,r?s:q)}),[r,s,i,t]),onResizeTextarea:s}},{withContext:me}=re("textarea",se),a=me("textarea")(r=>({rows:2,...ae(),...r}),r=>{const{props:{errorBorderColor:o,focusBorderColor:n,...l},ariaProps:i,dataProps:t,eventProps:s}=ne(r),{getTextareaProps:p}=pe({...i,...t,...s,...l});return{...te({errorBorderColor:o,focusBorderColor:n}),...p()}}),He={component:a,title:"Components / Textarea"},S=()=>e.jsx(a,{placeholder:"basic"}),v=()=>e.jsx(L,{variant:"stack",columns:["outline","filled","flushed"],rows:oe,children:(r,o,n)=>e.jsx(a,{colorScheme:o,variant:r,placeholder:P(r)},n)}),j=()=>e.jsx(L,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,o,n)=>e.jsx(a,{size:r,variant:o,placeholder:`Size (${r})`},n)}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,disabled:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,disabled:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{disabled:!0,helperMessage:"We would like to get your feedback.",label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,placeholder:r,readOnly:!0},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,readOnly:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{helperMessage:"We would like to get your feedback.",label:"Feedback",readOnly:!0,children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,invalid:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,invalid:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{errorMessage:"Feedback is required.",invalid:!0,label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:"Your email address"})]},o)}),e.jsxs(m,{children:[e.jsx(x,{children:"https://"}),e.jsx(a,{placeholder:"Your site address"}),e.jsx(x,{children:".com"})]})]}),z=()=>e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,children:[e.jsx(N,{children:e.jsx($,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Your email address"})]},o)}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"Default border color"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(m,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(N,{children:e.jsx($,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Custom border color"})]}),e.jsx(a,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(m,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:"Custom border color"})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default placeholder"}),e.jsx(a,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(a,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),C=()=>e.jsx(u,{each:["block","horizontal","vertical","none"],children:(r,o)=>e.jsx(a,{placeholder:r,resize:r},o)}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{autosize:!0,placeholder:"autosize"}),e.jsx(a,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(a,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(a,{placeholder:"rows 4",rows:4})]}),G=()=>{const r=f.useRef(null),o=()=>{r.current?.()};return e.jsxs(A,{children:[e.jsx(a,{placeholder:"use resize",resizeRef:r}),e.jsx(M,{alignSelf:"flex-end",onClick:o,children:"Resize"})]})},E=()=>{const{formState:{errors:r},handleSubmit:o,register:n,watch:l}=Y(),i=t=>console.log("submit:",t);return console.log("watch:",l()),e.jsxs(A,{as:"form",onSubmit:o(i),children:[e.jsx(g,{errorMessage:r.textarea?.message,invalid:!!r.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...n("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},B=()=>{const r={textarea:"孫悟空"},{formState:{errors:o},handleSubmit:n,register:l,watch:i}=Y({defaultValues:r}),t=s=>console.log("submit:",s);return console.log("watch:",i()),e.jsxs(A,{as:"form",onSubmit:n(t),children:[e.jsx(g,{errorMessage:o.textarea?.message,invalid:!!o.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...l("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Textarea key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Textarea key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} disabled placeholder={variant} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled helperMessage="We would like to get your feedback." label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} placeholder={variant} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root helperMessage="We would like to get your feedback." label="Feedback" readOnly>
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <Textarea key={index} variant={variant} invalid placeholder={variant} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="Feedback is required." invalid label="Feedback">
        <Textarea variant="outline" placeholder="your feedback" />
      </Field.Root>
    </>;
}`,...R.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant}>
            <InputGroup.Addon>Email</InputGroup.Addon>
            <Textarea placeholder="Your email address" />
          </InputGroup.Root>}
      </For>

      <InputGroup.Root>
        <InputGroup.Addon>https://</InputGroup.Addon>
        <Textarea placeholder="Your site address" />
        <InputGroup.Addon>.com</InputGroup.Addon>
      </InputGroup.Root>
    </>;
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <MailIcon fontSize="xl" />
          </InputGroup.Element>
          <Textarea placeholder="Your email address" />
        </InputGroup.Root>}
    </For>;
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="Default border color" />

      <Textarea focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <MailIcon fontSize="xl" />
        </InputGroup.Element>
        <Textarea placeholder="Custom border color" />
      </InputGroup.Root>

      <Textarea errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Addon>Email</InputGroup.Addon>
        <Textarea placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...T.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="default placeholder" />

      <Textarea placeholder="custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />

      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...w.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const resizeRef = useRef<() => void>(null);
  const onResize = () => {
    resizeRef.current?.();
  };
  return <VStack>
      <Textarea placeholder="use resize" resizeRef={resizeRef} />

      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>;
}`,...G.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...E.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const defaultValues: Data = {
    textarea: "孫悟空"
  };
  const {
    formState: {
      errors
    },
    handleSubmit,
    register,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.textarea?.message} invalid={!!errors.textarea} label="Feedback">
        <Textarea placeholder="your feedback" {...register("textarea", {
        required: {
          message: "This is required.",
          value: true
        }
      })} />
      </Field.Root>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...B.parameters?.docs?.source}}};const Ve=["Basic","Variant","Size","Disabled","Readonly","Invalid","Addon","Element","BorderColor","Placeholder","Resize","Autosize","ControlResize","ReactHookForm","ReactHookFormDefaultValue"];export{F as Addon,w as Autosize,S as Basic,T as BorderColor,G as ControlResize,y as Disabled,z as Element,R as Invalid,I as Placeholder,E as ReactHookForm,B as ReactHookFormDefaultValue,k as Readonly,C as Resize,j as Size,v as Variant,Ve as __namedExportsOrder,He as default};
