import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Cn as n,Dn as r,En as i,Gt as a,It as o,On as s,_n as c,cn as l,i as u,jn as ee,lt as te,o as ne,st as re,tn as ie,zn as ae,zt as oe}from"./props-DZ_NCL29.js";import{a as se,t as ce}from"./event-Dwtkrk6m.js";import{t as le}from"./jsx-runtime-BB9-612F.js";import{i as ue,n as de,t as fe}from"./effect-BX-3lD32.js";import{a as pe,d as me,r as he,t as ge}from"./create-component-Ct2AiAAx.js";import{n as _e,t as ve}from"./mail-icon-BoV7Xrsj.js";import{r as ye,t as d}from"./button-BfYhzfkR.js";import{c as be,r as xe,s as f,t as Se}from"./use-field-props-CRSAqPOE.js";import{c as Ce,i as we,l as p,o as Te,r as Ee,s as De}from"./input-BecwRudO.js";import{a as m,i as Oe,n as ke,o as Ae,r as h,t as g}from"./input-group-CvME34aS.js";import{n as je,t as Me}from"./use-input-border-BnL1hsGP.js";import{n as Ne,t as _}from"./for-COoaBOxp.js";import{n as Pe,t as v}from"./v-stack-zknlTZhK.js";import{n as Fe,t as y}from"./props-table-CU-k6wL6.js";import{n as Ie,r as b}from"./index.esm-xmO_zH4i.js";var x;function S(){return(S=e((()=>{me(),Ce(),x=pe({base:{...p.base,resize:`vertical`},variants:{filled:p.variants?.filled,flushed:p.variants?.flushed,outline:p.variants?.outline,plain:p.variants?.plain},sizes:{xs:{...p.sizes?.xs,py:`{--space-y}`},sm:{...p.sizes?.sm,py:`{--space-y}`},md:{...p.sizes?.md,py:`{--space-y}`},lg:{...p.sizes?.lg,py:`{--space-y}`},xl:{...p.sizes?.xl,py:`{--space-y}`},"2xl":{...p.sizes?.[`2xl`],py:`{--space-y}`}},compounds:[{css:{...De(),...Te()},variant:`flushed`,layer:`variant`}],defaultProps:{size:`md`,variant:`outline`}})})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{C=t(),se(),ie(),r(),re(),o(),fe(),w=[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`,`boxSizing`,`fontFamily`,`fontSize`,`fontStyle`,`fontWeight`,`letterSpacing`,`lineHeight`,`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`,`tabSize`,`textIndent`,`textRendering`,`textTransform`,`width`,`wordBreak`],T={height:`0`,"max-height":`none`,"min-height":`0`,overflow:`hidden`,position:`absolute`,right:`0`,top:`0`,visibility:`hidden`,"z-index":`-1000`},E=e=>{let t=window.getComputedStyle(e);if(t==null)return null;let n=oe(t,w);if(n.boxSizing===``)return null;let r=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop);return{style:n,border:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),padding:r,rowHeight:parseFloat(n.lineHeight)}},D=e=>{Object.keys(T).forEach(t=>{e.style.setProperty(t,T[t],`important`)})},O=(e,t,n,r,i)=>{let a=e.cloneNode();Object.assign(a.style,t.style),D(a),a.value=n;let o=e.getRootNode(),s=l(o)?o:e.ownerDocument.body;s.appendChild(a);let c;if(a.scrollHeight){let e=t.rowHeight;c=Math.min(r,Math.max(i,Math.floor(a.scrollHeight/e)))}else{let e=(n.match(/\n/g)||[]).length;c=Math.min(r,Math.max(i,e+1))}return s.removeChild(a),c},k=({disabled:e=!1,maxRows:t=1/0,minRows:n=2}={})=>{let r=(0,C.useRef)(null),o=(0,C.useRef)(null),c=r.current?.value??``,l=(0,C.useCallback)(()=>{let e=r.current;if(!e)return;let{placeholder:i,value:a}=e;if(a===o.current)return;o.current=a,a||=i||`x`;let s=E(e);s&&(e.rows=O(e,s,a,t,n))},[r,t,n]),u=(0,C.useCallback)((t={})=>({...t,ref:te(t.ref,r),style:{resize:e?void 0:`none`,...t.style},onChange:i(t.onChange,e?s:l)}),[r,l,e]);return de(()=>{if(!a()||e)return;l();let t=ce(window,`resize`,l),n=ce(document.fonts,`loadingdone`,l);return()=>{t(),n()}},[]),ue(()=>{e||l()},[c]),{ref:r,getTextareaProps:u,onResizeTextarea:l}}})))()}var j,M;function N(){return(N=e((()=>{j=t(),u(),A(),M=({autosize:e,maxRows:t,minRows:n,resizeRef:r,...i}={})=>{let{ref:a,onResizeTextarea:o}=k({disabled:!e,maxRows:t,minRows:n});return(0,j.useImperativeHandle)(r,()=>o,[o]),{getTextareaProps:(0,j.useCallback)((t={})=>ne(i,t,{ref:a},e?{style:{resize:`none`},onChange:o}:void 0)(),[e,o,i,a]),onResizeTextarea:o}}})))()}var Le,Re,P,F;function I(){return(I=e((()=>{he(),Se(),Me(),Ee(),S(),N(),{PropsContext:Le,usePropsContext:Re,withContext:P}=ge(`textarea`,x),F=P(`textarea`)(e=>({rows:2,...we(),...e}),e=>{let{props:{errorBorderColor:t,focusBorderColor:n,...r},ariaProps:i,dataProps:a,eventProps:o}=xe(e),{getTextareaProps:s}=M({...i,...a,...o,...r});return{...je({errorBorderColor:t,focusBorderColor:n}),...s()}})})))()}var ze,L,Be,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Ve;function $(){return($=e((()=>{ze=t(),Ie(),Fe(),I(),ae(),c(),ye(),be(),Ne(),_e(),ke(),Ae(),Oe(),Pe(),L=le(),Be={component:F,title:`Components / Textarea`},R=()=>(0,L.jsx)(F,{placeholder:`Your feedback`}),z=()=>(0,L.jsx)(y,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:ee,children:(e,t,r)=>(0,L.jsx)(F,{colorScheme:t,variant:e,placeholder:n(e)},r)}),B=()=>(0,L.jsx)(y,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,L.jsx)(F,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,disabled:!0,placeholder:e},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,disabled:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:n(e)})]},t)}),(0,L.jsx)(f,{disabled:!0,helperMessage:`We would like to get your feedback.`,label:`Feedback`,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`Your feedback`})})]}),H=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,placeholder:e,readOnly:!0},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,readOnly:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:n(e)})]},t)}),(0,L.jsx)(f,{helperMessage:`We would like to get your feedback.`,label:`Feedback`,readOnly:!0,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`Your feedback`})})]}),U=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,invalid:!0,placeholder:e},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,invalid:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:n(e)})]},t)}),(0,L.jsx)(f,{errorMessage:`Feedback is required.`,invalid:!0,label:`Feedback`,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`Your feedback`})})]}),W=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:`Your email address`})]},t)}),(0,L.jsxs)(g,{children:[(0,L.jsx)(m,{children:`https://`}),(0,L.jsx)(F,{placeholder:`Your site address`}),(0,L.jsx)(m,{children:`.com`})]})]}),G=()=>(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,children:[(0,L.jsx)(h,{children:(0,L.jsx)(ve,{fontSize:`xl`})}),(0,L.jsx)(F,{placeholder:`Your email address`})]},t)}),K=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{placeholder:`Default border color`}),(0,L.jsx)(F,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,L.jsxs)(g,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,L.jsx)(h,{children:(0,L.jsx)(ve,{fontSize:`xl`})}),(0,L.jsx)(F,{placeholder:`Custom border color`})]}),(0,L.jsx)(F,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,L.jsxs)(g,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:`Custom border color`})]})]}),q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{placeholder:`Default placeholder`}),(0,L.jsx)(F,{placeholder:`Custom placeholder`,_placeholder:{color:`gray.500`,opacity:1}}),(0,L.jsx)(F,{color:`green.500`,placeholder:`Custom placeholder`,_placeholder:{color:`inherit`}})]}),J=()=>(0,L.jsx)(_,{each:[`block`,`horizontal`,`vertical`,`none`],children:(e,t)=>(0,L.jsx)(F,{placeholder:e,resize:e},t)}),Y=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{autosize:!0,placeholder:`Your feedback (automatically resizes)`}),(0,L.jsx)(F,{autosize:!0,minRows:4,placeholder:`Your feedback (at least 4 rows)`}),(0,L.jsx)(F,{autosize:!0,maxRows:4,placeholder:`Your feedback (up to 4 rows)`}),(0,L.jsx)(F,{placeholder:`Your feedback (4 rows)`,rows:4})]}),X=()=>{let e=(0,ze.useRef)(null);return(0,L.jsxs)(v,{children:[(0,L.jsx)(F,{placeholder:`Your feedback`,resizeRef:e}),(0,L.jsx)(d,{alignSelf:`flex-end`,onClick:()=>{e.current?.()},children:`Resize`})]})},Z=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=b();return(0,L.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(f,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(F,{placeholder:`Your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(d,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Q=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=b({defaultValues:{textarea:`孫悟空`}});return(0,L.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(f,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(F,{placeholder:`Your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(d,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Ve=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Placeholder`,`Resize`,`Autosize`,`ControlResize`,`ReactHookForm`,`ReactHookFormDefaultValue`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <Textarea placeholder="Your feedback" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <Textarea key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <Textarea key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
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
        <Textarea variant="outline" placeholder="Your feedback" />
      </Field.Root>
    </>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
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
        <Textarea variant="outline" placeholder="Your feedback" />
      </Field.Root>
    </>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
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
        <Textarea variant="outline" placeholder="Your feedback" />
      </Field.Root>
    </>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <MailIcon fontSize="xl" />
          </InputGroup.Element>
          <Textarea placeholder="Your email address" />
        </InputGroup.Root>}
    </For>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea placeholder="Default placeholder" />

      <Textarea placeholder="Custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />

      <Textarea color="green.500" placeholder="Custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="Your feedback (automatically resizes)" />
      <Textarea autosize minRows={4} placeholder="Your feedback (at least 4 rows)" />
      <Textarea autosize maxRows={4} placeholder="Your feedback (up to 4 rows)" />
      <Textarea placeholder="Your feedback (4 rows)" rows={4} />
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const resizeRef = useRef<() => void>(null);
  const onResize = () => {
    resizeRef.current?.();
  };
  return <VStack>
      <Textarea placeholder="Your feedback" resizeRef={resizeRef} />

      <Button alignSelf="flex-end" onClick={onResize}>
        Resize
      </Button>
    </VStack>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
        <Textarea placeholder="Your feedback" {...register("textarea", {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
        <Textarea placeholder="Your feedback" {...register("textarea", {
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{W as Addon,Y as Autosize,R as Basic,K as BorderColor,X as ControlResize,V as Disabled,G as Element,U as Invalid,q as Placeholder,Z as ReactHookForm,Q as ReactHookFormDefaultValue,H as ReadOnly,J as Resize,B as Size,z as Variant,Ve as __namedExportsOrder,Be as default};