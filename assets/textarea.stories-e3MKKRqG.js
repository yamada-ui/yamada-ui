import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Cn as n,Dn as r,En as i,Gt as a,It as o,On as s,_n as c,cn as l,i as u,jn as ee,lt as d,o as te,ot as ne,st as f,tn as re,zn as ie,zt as ae}from"./props-sAZv67b_.js";import{a as oe,t as p}from"./event-FXz52UKI.js";import{t as se}from"./jsx-runtime-BdxMnOeJ.js";import{i as ce,n as le,t as ue}from"./effect-DSHKlzEK.js";import{a as de,d as fe,r as pe,t as me}from"./create-component-DQMvd0DD.js";import{n as he,t as m}from"./mail-icon-Bhh1Q3Ix.js";import{r as ge,t as h}from"./button-Cv19gcjc.js";import{c as _e,r as ve,s as g,t as ye}from"./use-field-props-z5XETqFY.js";import{c as be,i as xe,l as _,o as Se,r as Ce,s as we}from"./input-ats-LDD2.js";import{a as v,i as Te,n as Ee,o as De,r as y,t as b}from"./input-group-DiutC6CX.js";import{n as Oe,t as ke}from"./use-input-border-DA4HAdzA.js";import{n as Ae,t as x}from"./for-qrDiH4Lk.js";import{n as je,t as S}from"./v-stack-C4vQZUGD.js";import{n as Me,t as C}from"./props-table-4oG1zn7C.js";import{n as Ne,r as w}from"./index.esm-BFTTYzQs.js";var T;function E(){return(E=e((()=>{fe(),be(),T=de({base:{..._.base,resize:`vertical`},variants:{filled:_.variants?.filled,flushed:_.variants?.flushed,outline:_.variants?.outline,plain:_.variants?.plain},sizes:{xs:{..._.sizes?.xs,py:`{--space-y}`},sm:{..._.sizes?.sm,py:`{--space-y}`},md:{..._.sizes?.md,py:`{--space-y}`},lg:{..._.sizes?.lg,py:`{--space-y}`},xl:{..._.sizes?.xl,py:`{--space-y}`},"2xl":{..._.sizes?.[`2xl`],py:`{--space-y}`}},compounds:[{css:{...we(),...Se()},variant:`flushed`,layer:`variant`}],defaultProps:{size:`md`,variant:`outline`}})})))()}var D,O,k,Pe,Fe,Ie,Le;function Re(){return(Re=e((()=>{D=t(),oe(),re(),r(),f(),o(),ue(),O=[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`,`boxSizing`,`fontFamily`,`fontSize`,`fontStyle`,`fontWeight`,`letterSpacing`,`lineHeight`,`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`,`tabSize`,`textIndent`,`textRendering`,`textTransform`,`width`,`wordBreak`],k={height:`0`,"max-height":`none`,"min-height":`0`,overflow:`hidden`,position:`absolute`,right:`0`,top:`0`,visibility:`hidden`,"z-index":`-1000`},Pe=e=>{let t=window.getComputedStyle(e);if(t==null)return null;let n=ae(t,O);if(n.boxSizing===``)return null;let r=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop);return{style:n,border:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),padding:r,rowHeight:parseFloat(n.lineHeight)}},Fe=e=>{Object.keys(k).forEach(t=>{e.style.setProperty(t,k[t],`important`)})},Ie=(e,t,n,r,i)=>{let a=e.cloneNode();Object.assign(a.style,t.style),Fe(a),a.value=n;let o=e.getRootNode(),s=l(o)?o:e.ownerDocument.body;s.appendChild(a);let c;if(a.scrollHeight){let e=t.rowHeight;c=Math.min(r,Math.max(i,Math.floor(a.scrollHeight/e)))}else{let e=(n.match(/\n/g)||[]).length;c=Math.min(r,Math.max(i,e+1))}return s.removeChild(a),c},Le=({disabled:e=!1,maxRows:t=1/0,minRows:n=2}={})=>{let r=(0,D.useRef)(null),o=(0,D.useRef)(null),c=r.current?.value??``,l=(0,D.useCallback)(()=>{let e=r.current;if(!e)return;let{placeholder:i,value:a}=e;if(a===o.current)return;o.current=a,a||=i||`x`;let s=Pe(e);s&&(e.rows=Ie(e,s,a,t,n))},[r,t,n]),u=(0,D.useCallback)((t={})=>({...t,ref:d(t.ref,r),style:{resize:e?void 0:`none`,...t.style},onChange:i(t.onChange,e?s:l)}),[r,l,e]);return le(()=>{if(!a()||e)return;l();let t=p(window,`resize`,l),n=p(document.fonts,`loadingdone`,l);return()=>{t(),n()}},[]),ce(()=>{e||l()},[c]),{ref:r,getTextareaProps:u,onResizeTextarea:l}}})))()}var A,j;function M(){return(M=e((()=>{A=t(),u(),f(),Re(),j=({autosize:e,maxRows:t,minRows:n,resizeRef:r,...i}={})=>{let{ref:a,onResizeTextarea:o}=Le({disabled:!e,maxRows:t,minRows:n});return ne(r,o),{getTextareaProps:(0,A.useCallback)((t={})=>te(i,t,{ref:d(a),...e?{style:{resize:`none`},onChange:o}:{}})(),[e,o,i,a]),onResizeTextarea:o}}})))()}var ze,Be,N,P;function F(){return(F=e((()=>{pe(),ye(),ke(),Ce(),E(),M(),{PropsContext:ze,usePropsContext:Be,withContext:N}=me(`textarea`,T),P=N(`textarea`)(e=>({rows:2,...xe(),...e}),e=>{let{props:{errorBorderColor:t,focusBorderColor:n,...r},ariaProps:i,dataProps:a,eventProps:o}=ve(e),{getTextareaProps:s}=j({...i,...a,...o,...r});return{...Oe({errorBorderColor:t,focusBorderColor:n}),...s()}})})))()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ve;function He(){return(He=e((()=>{I=t(),Ne(),Me(),F(),ie(),c(),ge(),_e(),Ae(),he(),Ee(),De(),Te(),je(),L=se(),R={component:P,title:`Components / Textarea`},z=()=>(0,L.jsx)(P,{placeholder:`basic`}),B=()=>(0,L.jsx)(C,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:ee,children:(e,t,r)=>(0,L.jsx)(P,{colorScheme:t,variant:e,placeholder:n(e)},r)}),V=()=>(0,L.jsx)(C,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,L.jsx)(P,{size:e,variant:t,placeholder:`Size (${e})`},n)}),H=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(P,{variant:e,disabled:!0,placeholder:e},t)}),(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(b,{variant:e,disabled:!0,children:[(0,L.jsx)(v,{children:`Email`}),(0,L.jsx)(P,{placeholder:n(e)})]},t)}),(0,L.jsx)(g,{disabled:!0,helperMessage:`We would like to get your feedback.`,label:`Feedback`,children:(0,L.jsx)(P,{variant:`outline`,placeholder:`your feedback`})})]}),U=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(P,{variant:e,placeholder:e,readOnly:!0},t)}),(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(b,{variant:e,readOnly:!0,children:[(0,L.jsx)(v,{children:`Email`}),(0,L.jsx)(P,{placeholder:n(e)})]},t)}),(0,L.jsx)(g,{helperMessage:`We would like to get your feedback.`,label:`Feedback`,readOnly:!0,children:(0,L.jsx)(P,{variant:`outline`,placeholder:`your feedback`})})]}),W=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(P,{variant:e,invalid:!0,placeholder:e},t)}),(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(b,{variant:e,invalid:!0,children:[(0,L.jsx)(v,{children:`Email`}),(0,L.jsx)(P,{placeholder:n(e)})]},t)}),(0,L.jsx)(g,{errorMessage:`Feedback is required.`,invalid:!0,label:`Feedback`,children:(0,L.jsx)(P,{variant:`outline`,placeholder:`your feedback`})})]}),G=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(b,{variant:e,children:[(0,L.jsx)(v,{children:`Email`}),(0,L.jsx)(P,{placeholder:`Your email address`})]},t)}),(0,L.jsxs)(b,{children:[(0,L.jsx)(v,{children:`https://`}),(0,L.jsx)(P,{placeholder:`Your site address`}),(0,L.jsx)(v,{children:`.com`})]})]}),K=()=>(0,L.jsx)(x,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(b,{variant:e,children:[(0,L.jsx)(y,{children:(0,L.jsx)(m,{fontSize:`xl`})}),(0,L.jsx)(P,{placeholder:`Your email address`})]},t)}),q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P,{placeholder:`Default border color`}),(0,L.jsx)(P,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,L.jsxs)(b,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,L.jsx)(y,{children:(0,L.jsx)(m,{fontSize:`xl`})}),(0,L.jsx)(P,{placeholder:`Custom border color`})]}),(0,L.jsx)(P,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,L.jsxs)(b,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,L.jsx)(v,{children:`Email`}),(0,L.jsx)(P,{placeholder:`Custom border color`})]})]}),J=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P,{placeholder:`default placeholder`}),(0,L.jsx)(P,{placeholder:`custom placeholder`,_placeholder:{color:`gray.500`,opacity:1}}),(0,L.jsx)(P,{color:`green.500`,placeholder:`custom placeholder`,_placeholder:{color:`inherit`}})]}),Y=()=>(0,L.jsx)(x,{each:[`block`,`horizontal`,`vertical`,`none`],children:(e,t)=>(0,L.jsx)(P,{placeholder:e,resize:e},t)}),X=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(P,{autosize:!0,placeholder:`autosize`}),(0,L.jsx)(P,{autosize:!0,minRows:4,placeholder:`autosize, min rows 4`}),(0,L.jsx)(P,{autosize:!0,maxRows:4,placeholder:`autosize, max rows 4`}),(0,L.jsx)(P,{placeholder:`rows 4`,rows:4})]}),Z=()=>{let e=(0,I.useRef)(null);return(0,L.jsxs)(S,{children:[(0,L.jsx)(P,{placeholder:`use resize`,resizeRef:e}),(0,L.jsx)(h,{alignSelf:`flex-end`,onClick:()=>{e.current?.()},children:`Resize`})]})},Q=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=w();return(0,L.jsxs)(S,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(g,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(P,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=w({defaultValues:{textarea:`孫悟空`}});return(0,L.jsxs)(S,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(g,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(P,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(h,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Ve=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Placeholder`,`Resize`,`Autosize`,`ControlResize`,`ReactHookForm`,`ReactHookFormDefaultValue`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Textarea key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Textarea key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <MailIcon fontSize="xl" />
          </InputGroup.Element>
          <Textarea placeholder="Your email address" />
        </InputGroup.Root>}
    </For>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}He();export{G as Addon,X as Autosize,z as Basic,q as BorderColor,Z as ControlResize,H as Disabled,K as Element,W as Invalid,J as Placeholder,Q as ReactHookForm,$ as ReactHookFormDefaultValue,U as ReadOnly,Y as Resize,V as Size,B as Variant,Ve as __namedExportsOrder,R as default};