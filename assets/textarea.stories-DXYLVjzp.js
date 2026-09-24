import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{At as n,Nn as r,Nt as i,Sn as a,Tn as o,Yt as s,_n as c,bn as ee,dn as te,i as ne,it as l,nn as re,o as ie,ot as ae,rt as oe,xn as se,zt as ce}from"./props-Bz1FL_va.js";import{a as le,t as u}from"./event-C2y0STOt.js";import{t as ue}from"./jsx-runtime-BdxMnOeJ.js";import{i as de,n as fe,t as pe}from"./effect-CjnfyxRk.js";import{a as me,d as he,r as ge,t as _e}from"./create-component-DtmnY_ce.js";import{n as ve,t as ye}from"./mail-icon-Stvauf3X.js";import{r as be,t as d}from"./button-CFBNyQlD.js";import{c as xe,r as Se,s as f,t as Ce}from"./use-field-props-DklfXwrD.js";import{c as we,i as Te,l as p,o as Ee,r as De,s as Oe}from"./input-Dl7woXLW.js";import{a as m,i as ke,n as Ae,o as je,r as h,t as g}from"./input-group-U0aj6U1q.js";import{n as Me,t as Ne}from"./use-input-border-BBhXSV-4.js";import{n as Pe,t as _}from"./for-BIl9Q3L3.js";import{n as Fe,t as v}from"./v-stack-DgxvBjIl.js";import{n as Ie,t as y}from"./props-table-CLkISL0o.js";import{n as Le,r as b}from"./index.esm-CWrUCFh-.js";var x;function S(){return(S=e((()=>{he(),we(),x=me({base:{...p.base,resize:`vertical`},variants:{filled:p.variants?.filled,flushed:p.variants?.flushed,outline:p.variants?.outline,plain:p.variants?.plain},sizes:{xs:{...p.sizes?.xs,py:`{--space-y}`},sm:{...p.sizes?.sm,py:`{--space-y}`},md:{...p.sizes?.md,py:`{--space-y}`},lg:{...p.sizes?.lg,py:`{--space-y}`},xl:{...p.sizes?.xl,py:`{--space-y}`},"2xl":{...p.sizes?.[`2xl`],py:`{--space-y}`}},compounds:[{css:{...Oe(),...Ee()},variant:`flushed`,layer:`variant`}],defaultProps:{size:`md`,variant:`outline`}})})))()}var C,w,T,E,D,O,k;function A(){return(A=e((()=>{C=t(),le(),s(),se(),l(),n(),pe(),w=[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`,`boxSizing`,`fontFamily`,`fontSize`,`fontStyle`,`fontWeight`,`letterSpacing`,`lineHeight`,`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`,`tabSize`,`textIndent`,`textRendering`,`textTransform`,`width`,`wordBreak`],T={height:`0`,"max-height":`none`,"min-height":`0`,overflow:`hidden`,position:`absolute`,right:`0`,top:`0`,visibility:`hidden`,"z-index":`-1000`},E=e=>{let t=window.getComputedStyle(e);if(t==null)return null;let n=i(t,w);if(n.boxSizing===``)return null;let r=parseFloat(n.paddingBottom)+parseFloat(n.paddingTop);return{style:n,border:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth),padding:r,rowHeight:parseFloat(n.lineHeight)}},D=e=>{Object.keys(T).forEach(t=>{e.style.setProperty(t,T[t],`important`)})},O=(e,t,n,r,i)=>{let a=e.cloneNode();Object.assign(a.style,t.style),D(a),a.value=n;let o=e.getRootNode(),s=re(o)?o:e.ownerDocument.body;s.appendChild(a);let c;if(a.scrollHeight){let e=t.rowHeight;c=Math.min(r,Math.max(i,Math.floor(a.scrollHeight/e)))}else{let e=(n.match(/\n/g)||[]).length;c=Math.min(r,Math.max(i,e+1))}return s.removeChild(a),c},k=({disabled:e=!1,maxRows:t=1/0,minRows:n=2}={})=>{let r=(0,C.useRef)(null),i=(0,C.useRef)(null),o=r.current?.value??``,s=(0,C.useCallback)(()=>{let e=r.current;if(!e)return;let{placeholder:a,value:o}=e;if(o===i.current)return;i.current=o,o||=a||`x`;let s=E(e);s&&(e.rows=O(e,s,o,t,n))},[r,t,n]),c=(0,C.useCallback)((t={})=>({...t,ref:ae(t.ref,r),style:{resize:e?void 0:`none`,...t.style},onChange:ee(t.onChange,e?a:s)}),[r,s,e]);return fe(()=>{if(!ce()||e)return;s();let t=u(window,`resize`,s),n=u(document.fonts,`loadingdone`,s);return()=>{t(),n()}},[]),de(()=>{e||s()},[o]),{ref:r,getTextareaProps:c,onResizeTextarea:s}}})))()}var j,M;function N(){return(N=e((()=>{j=t(),ne(),l(),A(),M=({autosize:e,maxRows:t,minRows:n,resizeRef:r,...i}={})=>{let{ref:a,onResizeTextarea:o}=k({disabled:!e,maxRows:t,minRows:n});return oe(r,o),{getTextareaProps:(0,j.useCallback)((t={})=>ie(i,t,{ref:ae(a),...e?{style:{resize:`none`},onChange:o}:{}})(),[e,o,i,a]),onResizeTextarea:o}}})))()}var Re,ze,P,F;function I(){return(I=e((()=>{ge(),Ce(),Ne(),De(),S(),N(),{PropsContext:Re,usePropsContext:ze,withContext:P}=_e(`textarea`,x),F=P(`textarea`)(e=>({rows:2,...Te(),...e}),e=>{let{props:{errorBorderColor:t,focusBorderColor:n,...r},ariaProps:i,dataProps:a,eventProps:o}=Se(e),{getTextareaProps:s}=M({...i,...a,...o,...r});return{...Me({errorBorderColor:t,focusBorderColor:n}),...s()}})})))()}var Be,L,Ve,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,He;function $(){return($=e((()=>{Be=t(),Le(),Ie(),I(),r(),te(),be(),xe(),Pe(),ve(),Ae(),je(),ke(),Fe(),L=ue(),Ve={component:F,title:`Components / Textarea`},R=()=>(0,L.jsx)(F,{placeholder:`basic`}),z=()=>(0,L.jsx)(y,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:o,children:(e,t,n)=>(0,L.jsx)(F,{colorScheme:t,variant:e,placeholder:c(e)},n)}),B=()=>(0,L.jsx)(y,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,L.jsx)(F,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,disabled:!0,placeholder:e},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,disabled:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:c(e)})]},t)}),(0,L.jsx)(f,{disabled:!0,helperMessage:`We would like to get your feedback.`,label:`Feedback`,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`your feedback`})})]}),H=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,placeholder:e,readOnly:!0},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,readOnly:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:c(e)})]},t)}),(0,L.jsx)(f,{helperMessage:`We would like to get your feedback.`,label:`Feedback`,readOnly:!0,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`your feedback`})})]}),U=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(F,{variant:e,invalid:!0,placeholder:e},t)}),(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,invalid:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:c(e)})]},t)}),(0,L.jsx)(f,{errorMessage:`Feedback is required.`,invalid:!0,label:`Feedback`,children:(0,L.jsx)(F,{variant:`outline`,placeholder:`your feedback`})})]}),W=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:`Your email address`})]},t)}),(0,L.jsxs)(g,{children:[(0,L.jsx)(m,{children:`https://`}),(0,L.jsx)(F,{placeholder:`Your site address`}),(0,L.jsx)(m,{children:`.com`})]})]}),G=()=>(0,L.jsx)(_,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(g,{variant:e,children:[(0,L.jsx)(h,{children:(0,L.jsx)(ye,{fontSize:`xl`})}),(0,L.jsx)(F,{placeholder:`Your email address`})]},t)}),K=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{placeholder:`Default border color`}),(0,L.jsx)(F,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,L.jsxs)(g,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,L.jsx)(h,{children:(0,L.jsx)(ye,{fontSize:`xl`})}),(0,L.jsx)(F,{placeholder:`Custom border color`})]}),(0,L.jsx)(F,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,L.jsxs)(g,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,L.jsx)(m,{children:`Email`}),(0,L.jsx)(F,{placeholder:`Custom border color`})]})]}),q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{placeholder:`default placeholder`}),(0,L.jsx)(F,{placeholder:`custom placeholder`,_placeholder:{color:`gray.500`,opacity:1}}),(0,L.jsx)(F,{color:`green.500`,placeholder:`custom placeholder`,_placeholder:{color:`inherit`}})]}),J=()=>(0,L.jsx)(_,{each:[`block`,`horizontal`,`vertical`,`none`],children:(e,t)=>(0,L.jsx)(F,{placeholder:e,resize:e},t)}),Y=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(F,{autosize:!0,placeholder:`autosize`}),(0,L.jsx)(F,{autosize:!0,minRows:4,placeholder:`autosize, min rows 4`}),(0,L.jsx)(F,{autosize:!0,maxRows:4,placeholder:`autosize, max rows 4`}),(0,L.jsx)(F,{placeholder:`rows 4`,rows:4})]}),X=()=>{let e=(0,Be.useRef)(null);return(0,L.jsxs)(v,{children:[(0,L.jsx)(F,{placeholder:`use resize`,resizeRef:e}),(0,L.jsx)(d,{alignSelf:`flex-end`,onClick:()=>{e.current?.()},children:`Resize`})]})},Z=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=b();return(0,L.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(f,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(F,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(d,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Q=()=>{let{formState:{errors:e},handleSubmit:t,register:n}=b({defaultValues:{textarea:`孫悟空`}});return(0,L.jsxs)(v,{as:`form`,onSubmit:t(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(f,{errorMessage:e.textarea?.message,invalid:!!e.textarea,label:`Feedback`,children:(0,L.jsx)(F,{placeholder:`your feedback`,...n(`textarea`,{required:{message:`This is required.`,value:!0}})})}),(0,L.jsx)(d,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},He=[`Basic`,`Variant`,`Size`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`Placeholder`,`Resize`,`Autosize`,`ControlResize`,`ReactHookForm`,`ReactHookFormDefaultValue`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
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