import{p as U,r as f,h as V,m as W,E as q,an as Z,a7 as J,P as K,bW as Q,a4 as X,q as ee,j as e,C as re,R as P,V as A,S as M}from"./iframe-C__kp2ks.js";import{P as _}from"./props-table-flhWbqk2.js";import{u as L}from"./index.esm-ByGiMBUg.js";import{c as oe,a as ae,i as c,u as ne}from"./input-CHGuhKse.js";import{b as H}from"./event-BcwgsvgA.js";import{u as te,F as g}from"./use-field-props-LsV8SBOq.js";import{u as se}from"./use-input-border-iHBjQJm9.js";import{F as u}from"./for-CRlK2fzt.js";import{I as h,b as x,a as Y}from"./input-group-B8WcQGjn.js";import{M as N}from"./mail-icon-k2Sxhee7.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-CbQIAmub.js";import"./grid-item-CKqfh7d_.js";import"./flex-DoNkosyX.js";import"./heading-Dbu8pZSv.js";import"./group-CCuWCZo3.js";import"./index-D-M46-mS.js";import"./use-breakpoint-C5KitVzQ.js";import"./use-breakpoint-value-B8HA7l9O.js";import"./use-color-mode-value-sfPGuesh.js";const le=U({base:{...c.base,resize:"vertical"},variants:{filled:c.variants?.filled,flushed:c.variants?.flushed,outline:c.variants?.outline,plain:c.variants?.plain},sizes:{xs:{...c.sizes?.xs,py:"{--space-y}"},sm:{...c.sizes?.sm,py:"{--space-y}"},md:{...c.sizes?.md,py:"{--space-y}"},lg:{...c.sizes?.lg,py:"{--space-y}"},xl:{...c.sizes?.xl,py:"{--space-y}"},"2xl":{...c.sizes?.["2xl"],py:"{--space-y}"}},compounds:[{css:{...ae(),...oe()},variant:"flushed",layer:"variant"}],defaultProps:{size:"md",variant:"outline"}}),ie=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],O={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},de=r=>{const o=window.getComputedStyle(r);if(o==null)return null;const n=Q(o,ie);if(n.boxSizing==="")return null;const l=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),i=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),t=parseFloat(n.lineHeight);return{style:n,border:i,padding:l,rowHeight:t}},ce=r=>{Object.keys(O).forEach(o=>{r.style.setProperty(o,O[o],"important")})},ue=(r,o,n,l,i)=>{const t=r.cloneNode();Object.assign(t.style,o.style),ce(t),t.value=n,document.body.appendChild(t);let s;if(t.scrollHeight){const p=o.rowHeight;s=Math.min(l,Math.max(i,Math.floor(t.scrollHeight/p)))}else{const p=(n.match(/\n/g)||[]).length;s=Math.min(l,Math.max(i,p+1))}return document.body.removeChild(t),s},pe=({disabled:r=!1,maxRows:o=1/0,minRows:n=2}={})=>{const l=f.useRef(null),i=f.useRef(null),t=l.current?.value??"",s=f.useCallback(()=>{const d=l.current;if(!d)return;let{placeholder:m,value:b}=d;if(b===i.current)return;i.current=b,b||=m||"x";const D=de(d);if(!D)return;const $=ue(d,D,b,o,n);d.rows=$},[l,o,n]),p=f.useCallback((d={})=>({...d,ref:W(d.ref,l),style:{resize:r?void 0:"none",...d.style},onChange:V(d.onChange,r?q:s)}),[l,s,r]);return Z(()=>{if(!J()||r)return;s();const d=H(window,"resize",s),m=H(document.fonts,"loadingdone",s);return()=>{d(),m()}},[]),K(()=>{r||s()},[t]),{ref:l,getTextareaProps:p,onResizeTextarea:s}},he=({autosize:r,maxRows:o,minRows:n,resizeRef:l,...i}={})=>{const{ref:t,onResizeTextarea:s}=pe({disabled:!r,maxRows:o,minRows:n});return X(l,s),{getTextareaProps:f.useCallback(({style:d,...m}={})=>({...i,...m,ref:W(m.ref,i.ref,t),style:{resize:r?"none":void 0,...i.style,...d},onChange:V(m.onChange,i.onChange,r?s:q)}),[r,s,i,t]),onResizeTextarea:s}},{withContext:me}=ee("textarea",le),a=me("textarea")(r=>({rows:2,...ne(),...r}),r=>{const{props:{errorBorderColor:o,focusBorderColor:n,...l},ariaProps:i,dataProps:t,eventProps:s}=te(r),{getTextareaProps:p}=he({...i,...t,...s,...l});return{...se({errorBorderColor:o,focusBorderColor:n}),...p()}}),Ae={component:a,title:"Components / Textarea"},S=()=>e.jsx(a,{placeholder:"basic"}),v=()=>e.jsx(_,{variant:"stack",columns:["outline","filled","flushed"],rows:re,children:(r,o,n)=>e.jsx(a,{colorScheme:o,variant:r,placeholder:P(r)},n)}),j=()=>e.jsx(_,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,o,n)=>e.jsx(a,{size:r,variant:o,placeholder:`Size (${r})`},n)}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,disabled:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(h,{variant:r,disabled:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{disabled:!0,helperMessage:"We would like to get your feedback.",label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,placeholder:r,readOnly:!0},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(h,{variant:r,readOnly:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{helperMessage:"We would like to get your feedback.",label:"Feedback",readOnly:!0,children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,invalid:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(h,{variant:r,invalid:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{errorMessage:"Feedback is required.",invalid:!0,label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(h,{variant:r,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:"Your email address"})]},o)}),e.jsxs(h,{children:[e.jsx(x,{children:"https://"}),e.jsx(a,{placeholder:"Your site address"}),e.jsx(x,{children:".com"})]})]}),z=()=>e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(h,{variant:r,children:[e.jsx(Y,{children:e.jsx(N,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Your email address"})]},o)}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"Default border color"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(h,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(Y,{children:e.jsx(N,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Custom border color"})]}),e.jsx(a,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(h,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(x,{children:"Email"}),e.jsx(a,{placeholder:"Custom border color"})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default placeholder"}),e.jsx(a,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(a,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),C=()=>e.jsx(u,{each:["block","horizontal","vertical","none"],children:(r,o)=>e.jsx(a,{placeholder:r,resize:r},o)}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{autosize:!0,placeholder:"autosize"}),e.jsx(a,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(a,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(a,{placeholder:"rows 4",rows:4})]}),E=()=>{const r=f.useRef(null),o=()=>{r.current?.()};return e.jsxs(A,{children:[e.jsx(a,{placeholder:"use resize",resizeRef:r}),e.jsx(M,{alignSelf:"flex-end",onClick:o,children:"Resize"})]})},G=()=>{const{formState:{errors:r},handleSubmit:o,register:n,watch:l}=L(),i=t=>console.log("submit:",t);return console.log("watch:",l()),e.jsxs(A,{as:"form",onSubmit:o(i),children:[e.jsx(g,{errorMessage:r.textarea?.message,invalid:!!r.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...n("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},B=()=>{const r={textarea:"孫悟空"},{formState:{errors:o},handleSubmit:n,register:l,watch:i}=L({defaultValues:r}),t=s=>console.log("submit:",s);return console.log("watch:",i()),e.jsxs(A,{as:"form",onSubmit:n(t),children:[e.jsx(g,{errorMessage:o.textarea?.message,invalid:!!o.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...l("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(M,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
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
}`,...w.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...B.parameters?.docs?.source}}};const Me=["Basic","Variant","Size","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Placeholder","Resize","Autosize","ControlResize","ReactHookForm","ReactHookFormDefaultValue"];export{F as Addon,w as Autosize,S as Basic,T as BorderColor,E as ControlResize,y as Disabled,z as Element,R as Invalid,I as Placeholder,G as ReactHookForm,B as ReactHookFormDefaultValue,k as ReadOnly,C as Resize,j as Size,v as Variant,Me as __namedExportsOrder,Ae as default};
