import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Dn as r,Fn as i,Ft as a,Mt as o,Sn as s,Vt as c,Zt as ee,at as te,ct as ne,i as re,in as ie,o as ae,ot as l,pn as oe,wn as se,yn as u}from"./props-CCQavtXy.js";import{a as ce,t as d}from"./event-B_26neYN.js";import{t as le}from"./jsx-runtime-BdxMnOeJ.js";import{i as ue,n as de,t as fe}from"./effect-CjnfyxRk.js";import{a as pe,d as me,r as he,t as ge}from"./create-component-CNpeiJ0q.js";import{n as _e,t as ve}from"./mail-icon-DZHiCyVr.js";import{r as ye,t as f}from"./button-BCcG2Qpy.js";import{c as be,r as xe,s as p,t as Se}from"./use-field-props-BwIcoUP5.js";import{c as Ce,i as we,l as m,o as Te,r as Ee,s as De}from"./input-D740622u.js";import{a as h,i as Oe,n as ke,o as Ae,r as g,t as _}from"./input-group-B_tkQRR_.js";import{n as je,t as Me}from"./use-input-border-C63XHJ9D.js";import{n as Ne,t as v}from"./for-vlneEBu7.js";import{n as Pe,t as y}from"./v-stack-DFqT3QqZ.js";import{n as Fe,t as b}from"./props-table-CbpR6Bxo.js";import{n as Ie,r as x}from"./index.esm-DO-98hSD.js";var S;function C(){return(C=e((()=>{me(),Ce(),S=pe({base:{...m.base,resize:`vertical`},variants:{filled:m.variants?.filled,flushed:m.variants?.flushed,outline:m.variants?.outline,plain:m.variants?.plain},sizes:{xs:{...m.sizes?.xs,py:`{--space-y}`},sm:{...m.sizes?.sm,py:`{--space-y}`},md:{...m.sizes?.md,py:`{--space-y}`},lg:{...m.sizes?.lg,py:`{--space-y}`},xl:{...m.sizes?.xl,py:`{--space-y}`},"2xl":{...m.sizes?.[`2xl`],py:`{--space-y}`}},compounds:[{css:{...De(),...Te()},variant:`flushed`,layer:`variant`}],defaultProps:{size:`md`,variant:`outline`}})})))()}var w,T,E,D,O,k,A;function j(){return(j=e((()=>{w=t(),ce(),ee(),n(),l(),o(),fe(),T=[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`,`boxSizing`,`fontFamily`,`fontSize`,`fontStyle`,`fontWeight`,`letterSpacing`,`lineHeight`,`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`,`tabSize`,`textIndent`,`textRendering`,`textTransform`,`width`,`wordBreak`],E={height:`0`,"max-height":`none`,"min-height":`0`,overflow:`hidden`,position:`absolute`,right:`0`,top:`0`,visibility:`hidden`,"z-index":`-1000`},D=e=>{let t=window.getComputedStyle(e);if(t==null)return null;let n=a(t,T);if(n.boxSizing===``)return null;let r=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop);return{style:n,border:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),padding:r,rowHeight:parseFloat(n.lineHeight)}},O=e=>{Object.keys(E).forEach(t=>{e.style.setProperty(t,E[t],`important`)})},k=(e,t,n,r,i)=>{let a=e.cloneNode();Object.assign(a.style,t.style),O(a),a.value=n;let o=e.getRootNode(),s=ie(o)?o:e.ownerDocument.body;s.appendChild(a);let c;if(a.scrollHeight){let e=t.rowHeight;c=Math.min(r,Math.max(i,Math.floor(a.scrollHeight/e)))}else{let e=(n.match(/\n/g)||[]).length;c=Math.min(r,Math.max(i,e+1))}return s.removeChild(a),c},A=({disabled:e=!1,maxRows:t=1/0,minRows:n=2}={})=>{let r=(0,w.useRef)(null),i=(0,w.useRef)(null),a=r.current?.value??``,o=(0,w.useCallback)(()=>{let e=r.current;if(!e)return;let{placeholder:a,value:o}=e;if(o===i.current)return;i.current=o,o||=a||`x`;let s=D(e);s&&(e.rows=k(e,s,o,t,n))},[r,t,n]),ee=(0,w.useCallback)((t={})=>({...t,ref:ne(t.ref,r),style:{resize:e?void 0:`none`,...t.style},onChange:s(t.onChange,e?se:o)}),[r,o,e]);return de(()=>{if(!c()||e)return;o();let t=d(window,`resize`,o),n=d(document.fonts,`loadingdone`,o);return()=>{t(),n()}},[]),ue(()=>{e||o()},[a]),{ref:r,getTextareaProps:ee,onResizeTextarea:o}}})))()}var M,N;function P(){return(P=e((()=>{M=t(),re(),l(),j(),N=({autosize:e,maxRows:t,minRows:n,resizeRef:r,...i}={})=>{let{ref:a,onResizeTextarea:o}=A({disabled:!e,maxRows:t,minRows:n});return te(r,o),{getTextareaProps:(0,M.useCallback)((t={})=>ae(i,t,{ref:ne(a),...e?{style:{resize:`none`},onChange:o}:{}})(),[e,o,i,a]),onResizeTextarea:o}}})))()}var Le,Re,F,I;function ze(){return(ze=e((()=>{he(),Se(),Me(),Ee(),C(),P(),{PropsContext:Le,usePropsContext:Re,withContext:F}=ge(`textarea`,S),I=F(`textarea`)(e=>({rows:2,...we(),...e}),e=>{let{props:{errorBorderColor:t,focusBorderColor:n,...r},ariaProps:i,dataProps:a,eventProps:o}=xe(e),{getTextareaProps:s}=N({...i,...a,...o,...r});return{...je({errorBorderColor:t,focusBorderColor:n}),...s()}})})))()}var Be,L,Ve,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,He;function $(){return($=e((()=>{Be=t(),Ie(),Fe(),ze(),i(),oe(),ye(),be(),Ne(),_e(),ke(),Ae(),Oe(),Pe(),L=le(),Ve={component:I,title:`Components / Textarea`},R=()=>(0,L.jsx)(I,{placeholder:`basic`}),z=()=>(0,L.jsx)(b,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:r,children:(e,t,n)=>(0,L.jsx)(I,{colorScheme:t,variant:e,placeholder:u(e)},n)}),B=()=>(0,L.jsx)(b,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,L.jsx)(I,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,disabled:!0,placeholder:e},t)}),(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(_,{variant:e,disabled:!0,children:[(0,L.jsx)(h,{children:`Email`}),(0,L.jsx)(I,{placeholder:u(e)})]},t)}),(0,L.jsx)(p,{disabled:!0,helperMessage:`We would like to get your feedback.`,label:`Feedback`,children:(0,L.jsx)(I,{variant:`outline`,placeholder:`your feedback`})})]}),H=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,placeholder:e,readOnly:!0},t)}),(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(_,{variant:e,readOnly:!0,children:[(0,L.jsx)(h,{children:`Email`}),(0,L.jsx)(I,{placeholder:u(e)})]},t)}),(0,L.jsx)(p,{helperMessage:`We would like to get your feedback.`,label:`Feedback`,readOnly:!0,children:(0,L.jsx)(I,{variant:`outline`,placeholder:`your feedback`})})]}),U=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,invalid:!0,placeholder:e},t)}),(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(_,{variant:e,invalid:!0,children:[(0,L.jsx)(h,{children:`Email`}),(0,L.jsx)(I,{placeholder:u(e)})]},t)}),(0,L.jsx)(p,{errorMessage:`Feedback is required.`,invalid:!0,label:`Feedback`,children:(0,L.jsx)(I,{variant:`outline`,placeholder:`your feedback`})})]}),W=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(_,{variant:e,children:[(0,L.jsx)(h,{children:`Email`}),(0,L.jsx)(I,{placeholder:`Your email address`})]},t)}),(0,L.jsxs)(_,{children:[(0,L.jsx)(h,{children:`https://`}),(0,L.jsx)(I,{placeholder:`Your site address`}),(0,L.jsx)(h,{children:`.com`})]})]}),G=()=>(0,L.jsx)(v,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(_,{variant:e,children:[(0,L.jsx)(g,{children:(0,L.jsx)(ve,{fontSize:`xl`})}),(0,L.jsx)(I,{placeholder:`Your email address`})]},t)}),K=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{placeholder:`Default border color`}),(0,L.jsx)(I,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,L.jsxs)(_,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,L.jsx)(g,{children:(0,L.jsx)(ve,{fontSize:`xl`})}),(0,L.jsx)(I,{placeholder:`Custom border color`})]}),(0,L.jsx)(I,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,L.jsxs)(_,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,L.jsx)(h,{children:`Email`}),(0,L.jsx)(I,{placeholder:`Custom border color`})]})]}),q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{placeholder:`default placeholder`}),(0,L.jsx)(I,{placeholder:`custom placeholder`,_placeholder:{color:`gray.500`,opacity:1}}),(0,L.jsx)(I,{color:`green.500`,placeholder:`custom placeholder`,_placeholder:{color:`inherit`}})]}),J=()=>(0,L.jsx)(v,{each:[`block`,`horizontal`,`vertical`,`none`],children:(e,t)=>(0,L.jsx)(I,{placeholder:e,resize:e},t)}),Y=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{autosize:!0,placeholder:`autosize`}),(0,L.jsx)(I,{autosize:!0,minRows:4,placeholder:`autosize, min rows 4`}),(0,L.jsx)(I,{autosize:!0,maxRows:4,placeholder:`autosize, max rows 4`}),(0,L.jsx)(I,{placeholder:`rows 4`,rows:4})]}),X=()=>{let e=(0,Be.useRef)(null);return(0,L.jsxs)(y,{children:[(0,L.jsx)(I,{placeholder:`use resize`,resizeRef:e}),(0,L.jsx)(f,{alignSelf:`flex-end`,onClick:()=>{e.current?.()},children:`Resize`})]})},Z=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=x();return(0,L.jsxs)(y,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(p,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(I,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Q=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=x({defaultValues:{textarea:`孫悟空`}});return(0,L.jsxs)(y,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(p,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(I,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(f,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},He=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Placeholder`,`Resize`,`Autosize`,`ControlResize`,`ReactHookForm`,`ReactHookFormDefaultValue`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <Textarea placeholder="basic" />;
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
        <Textarea variant="outline" placeholder="your feedback" />
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
        <Textarea variant="outline" placeholder="your feedback" />
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
        <Textarea variant="outline" placeholder="your feedback" />
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
      <Textarea placeholder="default placeholder" />

      <Textarea placeholder="custom placeholder" _placeholder={{
      color: "gray.500",
      opacity: 1
    }} />

      <Textarea color="green.500" placeholder="custom placeholder" _placeholder={{
      color: "inherit"
    }} />
    </>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <For each={["block", "horizontal", "vertical", "none"] as const}>
      {(resize, index) => <Textarea key={index} placeholder={resize} resize={resize} />}
    </For>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Textarea autosize placeholder="autosize" />
      <Textarea autosize minRows={4} placeholder="autosize, min rows 4" />
      <Textarea autosize maxRows={4} placeholder="autosize, max rows 4" />
      <Textarea placeholder="rows 4" rows={4} />
    </>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}}})))()}$();export{W as Addon,Y as Autosize,R as Basic,K as BorderColor,X as ControlResize,V as Disabled,G as Element,U as Invalid,q as Placeholder,Z as ReactHookForm,Q as ReactHookFormDefaultValue,H as ReadOnly,J as Resize,B as Size,z as Variant,He as __namedExportsOrder,Ve as default};