import{p as Xe,r as x,h as _e,D as qe,m as Le,aa as Ze,a5 as Je,N as Ke,bX as er,a2 as rr,w as or,j as e,V as M,Q as D,P,C as ar}from"./iframe-Bh9OJiMa.js";import{P as Ye}from"./props-table-Clbdh-et.js";import{u as Ne}from"./index.esm-kNUr14AM.js";import{i as c,c as nr,b as tr,u as sr}from"./input-_rmp-yT3.js";import{b as O}from"./event-DM2KZhP3.js";import{u as lr,F as g}from"./use-field-props-B2_L45Q1.js";import{u as ir}from"./use-input-border-DIvm5bmb.js";import{F as u}from"./for-Drx2NpVa.js";import{I as m,b as h,a as $e}from"./input-group-WyNQkowt.js";import{M as Qe}from"./mail-icon-CS-CS4fZ.js";import"./preload-helper-C1FmrZbK.js";import"./grid-DEBT4jh_.js";import"./grid-item-DglFRIPa.js";import"./flex-Cq9fG4Y2.js";import"./heading-D9jKM5Is.js";import"./group-BL2xRsYz.js";import"./index-IKP2hWx8.js";import"./use-breakpoint-Ccmb_yNp.js";import"./use-breakpoint-value-DH9gKxXR.js";import"./use-color-mode-value-1gZklRVD.js";var W,_,q,L,Y,N,$,Q,U,X;const dr=Xe({base:{...c.base,resize:"vertical"},variants:{filled:(W=c.variants)==null?void 0:W.filled,flushed:(_=c.variants)==null?void 0:_.flushed,outline:(q=c.variants)==null?void 0:q.outline,plain:(L=c.variants)==null?void 0:L.plain},sizes:{xs:{...(Y=c.sizes)==null?void 0:Y.xs,py:"{--space-y}"},sm:{...(N=c.sizes)==null?void 0:N.sm,py:"{--space-y}"},md:{...($=c.sizes)==null?void 0:$.md,py:"{--space-y}"},lg:{...(Q=c.sizes)==null?void 0:Q.lg,py:"{--space-y}"},xl:{...(U=c.sizes)==null?void 0:U.xl,py:"{--space-y}"},"2xl":{...(X=c.sizes)==null?void 0:X["2xl"],py:"{--space-y}"}},compounds:[{css:{...tr(),...nr()},variant:"flushed",layer:"variant"}],defaultProps:{size:"md",variant:"outline"}}),cr=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],V={height:"0","max-height":"none","min-height":"0",overflow:"hidden",position:"absolute",right:"0",top:"0",visibility:"hidden","z-index":"-1000"},ur=r=>{const o=window.getComputedStyle(r);if(o==null)return null;const n=er(o,cr);if(n.boxSizing==="")return null;const i=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),s=parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),t=parseFloat(n.lineHeight);return{style:n,border:s,padding:i,rowHeight:t}},pr=r=>{Object.keys(V).forEach(o=>{r.style.setProperty(o,V[o],"important")})},mr=(r,o,n,i,s)=>{const t=r.cloneNode();Object.assign(t.style,o.style),pr(t),t.value=n,document.body.appendChild(t);let l;if(t.scrollHeight){const p=o.rowHeight;l=Math.min(i,Math.max(s,Math.floor(t.scrollHeight/p)))}else{const p=(n.match(/\n/g)||[]).length;l=Math.min(i,Math.max(s,p+1))}return document.body.removeChild(t),l},hr=({disabled:r=!1,maxRows:o=1/0,minRows:n=2}={})=>{var f;const i=x.useRef(null),s=x.useRef(null),t=((f=i.current)==null?void 0:f.value)??"",l=x.useCallback(()=>{const d=i.current;if(!d)return;let{placeholder:A,value:b}=d;if(b===s.current)return;s.current=b,b||(b=A||"x");const H=ur(d);if(!H)return;const Ue=mr(d,H,b,o,n);d.rows=Ue},[i,o,n]),p=x.useCallback((d={})=>({...d,ref:Le(d.ref,i),style:{resize:r?void 0:"none",...d.style},onChange:_e(d.onChange,r?qe:l)}),[i,l,r]);return Ze(()=>{if(!Je()||r)return;l();const d=O(window,"resize",l),A=O(document.fonts,"loadingdone",l);return()=>{d(),A()}},[]),Ke(()=>{r||l()},[t]),{ref:i,getTextareaProps:p,onResizeTextarea:l}},xr=({autosize:r,maxRows:o,minRows:n,resizeRef:i,...s}={})=>{const{ref:t,onResizeTextarea:l}=hr({disabled:!r,maxRows:o,minRows:n});return rr(i,l),{getTextareaProps:x.useCallback(({style:f,...d}={})=>({...s,...d,ref:Le(d.ref,s.ref,t),style:{resize:r?"none":void 0,...s.style,...f},onChange:_e(d.onChange,s.onChange,r?l:qe)}),[r,l,s,t]),onResizeTextarea:l}},{withContext:fr}=or("textarea",dr),a=fr("textarea")(r=>({rows:2,...sr(),...r}),r=>{const{props:{errorBorderColor:o,focusBorderColor:n,...i},ariaProps:s,dataProps:t,eventProps:l}=lr(r),{getTextareaProps:p}=xr({...s,...t,...l,...i});return{...ir({errorBorderColor:o,focusBorderColor:n}),...p()}}),Dr={component:a,title:"Components / Textarea"},S=()=>e.jsx(a,{placeholder:"basic"}),v=()=>e.jsx(Ye,{variant:"stack",columns:["outline","filled","flushed"],rows:ar,children:(r,o,n)=>e.jsx(a,{colorScheme:o,variant:r,placeholder:P(r)},n)}),j=()=>e.jsx(Ye,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,o,n)=>e.jsx(a,{size:r,variant:o,placeholder:`Size (${r})`},n)}),y=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,disabled:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,disabled:!0,children:[e.jsx(h,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{disabled:!0,helperMessage:"We would like to get your feedback.",label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),k=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,placeholder:r,readOnly:!0},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,readOnly:!0,children:[e.jsx(h,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{helperMessage:"We would like to get your feedback.",label:"Feedback",readOnly:!0,children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),R=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsx(a,{variant:r,invalid:!0,placeholder:r},o)}),e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,invalid:!0,children:[e.jsx(h,{children:"Email"}),e.jsx(a,{placeholder:P(r)})]},o)}),e.jsx(g,{errorMessage:"Feedback is required.",invalid:!0,label:"Feedback",children:e.jsx(a,{variant:"outline",placeholder:"your feedback"})})]}),F=()=>e.jsxs(e.Fragment,{children:[e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,children:[e.jsx(h,{children:"Email"}),e.jsx(a,{placeholder:"Your email address"})]},o)}),e.jsxs(m,{children:[e.jsx(h,{children:"https://"}),e.jsx(a,{placeholder:"Your site address"}),e.jsx(h,{children:".com"})]})]}),z=()=>e.jsx(u,{each:["outline","filled","flushed"],children:(r,o)=>e.jsxs(m,{variant:r,children:[e.jsx($e,{children:e.jsx(Qe,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Your email address"})]},o)}),T=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"Default border color"}),e.jsx(a,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(m,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx($e,{children:e.jsx(Qe,{fontSize:"xl"})}),e.jsx(a,{placeholder:"Custom border color"})]}),e.jsx(a,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(m,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(h,{children:"Email"}),e.jsx(a,{placeholder:"Custom border color"})]})]}),I=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{placeholder:"default placeholder"}),e.jsx(a,{placeholder:"custom placeholder",_placeholder:{color:"gray.500",opacity:1}}),e.jsx(a,{color:"green.500",placeholder:"custom placeholder",_placeholder:{color:"inherit"}})]}),C=()=>e.jsx(u,{each:["block","horizontal","vertical","none"],children:(r,o)=>e.jsx(a,{placeholder:r,resize:r},o)}),w=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{autosize:!0,placeholder:"autosize"}),e.jsx(a,{autosize:!0,minRows:4,placeholder:"autosize, min rows 4"}),e.jsx(a,{autosize:!0,maxRows:4,placeholder:"autosize, max rows 4"}),e.jsx(a,{placeholder:"rows 4",rows:4})]}),G=()=>{const r=x.useRef(null),o=()=>{var n;(n=r.current)==null||n.call(r)};return e.jsxs(M,{children:[e.jsx(a,{placeholder:"use resize",resizeRef:r}),e.jsx(D,{alignSelf:"flex-end",onClick:o,children:"Resize"})]})},E=()=>{var s;const{formState:{errors:r},handleSubmit:o,register:n}=Ne(),i=t=>console.log("submit:",t);return e.jsxs(M,{as:"form",onSubmit:o(i),children:[e.jsx(g,{errorMessage:(s=r.textarea)==null?void 0:s.message,invalid:!!r.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...n("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(D,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},B=()=>{var t;const r={textarea:"孫悟空"},{formState:{errors:o},handleSubmit:n,register:i}=Ne({defaultValues:r}),s=l=>console.log("submit:",l);return e.jsxs(M,{as:"form",onSubmit:n(s),children:[e.jsx(g,{errorMessage:(t=o.textarea)==null?void 0:t.message,invalid:!!o.textarea,label:"Feedback",children:e.jsx(a,{placeholder:"your feedback",...i("textarea",{required:{message:"This is required.",value:!0}})})}),e.jsx(D,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Z,J,K;S.parameters={...S.parameters,docs:{...(Z=S.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var ee,re,oe;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Textarea key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(oe=(re=v.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,ne,te;j.parameters={...j.parameters,docs:{...(ae=j.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Textarea key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(te=(ne=j.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var se,le,ie;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var de,ce,ue;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(ue=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var pe,me,he;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,fe,ge;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=F.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var be,Se,ve;z.parameters={...z.parameters,docs:{...(be=z.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <MailIcon fontSize="xl" />
          </InputGroup.Element>
          <Textarea placeholder="Your email address" />
        </InputGroup.Root>}
    </For>;
}`,...(ve=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:ve.source}}};var je,ye,ke;T.parameters={...T.parameters,docs:{...(je=T.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
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
}`,...(ke=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:ke.source}}};var Re,Fe,ze;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(ze=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source}}};var Te,Ie,Ce;C.parameters={...C.parameters,docs:{...(Te=C.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...(Ce=(Ie=C.parameters)==null?void 0:Ie.docs)==null?void 0:Ce.source}}};var we,Ge,Ee;w.parameters={...w.parameters,docs:{...(we=w.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...(Ee=(Ge=w.parameters)==null?void 0:Ge.docs)==null?void 0:Ee.source}}};var Be,Pe,Ae;G.parameters={...G.parameters,docs:{...(Be=G.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Pe=G.parameters)==null?void 0:Pe.docs)==null?void 0:Ae.source}}};var Me,De,He;E.parameters={...E.parameters,docs:{...(Me=E.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  interface Data {
    textarea: string;
  }
  const {
    formState: {
      errors
    },
    handleSubmit,
    register
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
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
}`,...(He=(De=E.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Oe,Ve,We;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
    register
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
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
}`,...(We=(Ve=B.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};const Hr=["Basic","Variant","Size","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","Placeholder","Resize","Autosize","ControlResize","ReactHookForm","ReactHookFormDefaultValue"];export{F as Addon,w as Autosize,S as Basic,T as BorderColor,G as ControlResize,y as Disabled,z as Element,R as Invalid,I as Placeholder,E as ReactHookForm,B as ReactHookFormDefaultValue,k as ReadOnly,C as Resize,j as Size,v as Variant,Hr as __namedExportsOrder,Dr as default};
