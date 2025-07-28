import{q as Oe,I as we,d as Qe,a5 as Ze,r as u,am as en,H as nn,bd as ke,h as z,m as Ie,N as rn,a7 as tn,b as De,f as on,j as e,C as an,J as O,V as Ee}from"./iframe-BHpF9Anv.js";import{P as qe}from"./props-table-BDseLMKU.js";import{u as Ge,C as Be}from"./index.esm-BGtN-sX4.js";import{b as G,i as p,g as sn,u as un,I as Ae}from"./input-BmduL3UZ.js";import{b as ln,B as Te}from"./button-D5SiRG3I.js";import{t as Me,a as Fe,c as cn}from"./number-CcP_arM8.js";import{u as dn}from"./index-9k2c-L2q.js";import{u as mn}from"./index-1hrRX5Z_.js";import{u as pn,F as T}from"./use-field-props-B3xRWuJL.js";import{c as He}from"./createLucideIcon-Ch8LwIgJ.js";import{u as fn}from"./group-B1PiohLH.js";import{I as P,b as pe,a as fe}from"./input-group-DkRfAfIw.js";import{C as hn}from"./chevron-down-icon-DcC8zDnW.js";import{F as V}from"./for-ByLCT2H8.js";import{H as bn}from"./h-stack-BO_IWPAf.js";import{I as ze}from"./icon-button-Dh58kTcW.js";import{P as _e}from"./plus-icon-BHXr5YCz.js";import{M as Ke}from"./minus-icon-DGfWxaOj.js";import"./grid-ByedI7Nf.js";import"./grid-item-DEAolyKT.js";import"./flex-BfatBxpB.js";import"./heading-D9cNz4N2.js";import"./use-input-border-B889gwgx.js";import"./use-ripple-CxqsGXIn.js";import"./rings-BBe5N9Nh.js";import"./index-HzxE17GX.js";import"./use-breakpoint-DjjBb8t0.js";import"./use-breakpoint-value-BjmteGR7.js";import"./use-color-mode-value-CuZcykHs.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],gn=He("chevron-up",xn);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Sn=He("gauge",In),vn=Oe(we)({as:gn}),w=Oe(we)({as:Sn}),Cn=Qe({base:{button:{...ln.base,flex:"1",lineHeight:"1",rounded:"l1"},control:{display:"flex",flexDirection:"column"},decrement:{},field:p.base,increment:{},root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:p.variants?.filled},flushed:{field:p.variants?.flushed,root:sn("& > input")},outline:{field:p.variants?.outline},plain:{field:p.variants?.plain}},sizes:{xs:{control:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:p.sizes?.xs.fontSize},field:p.sizes?.xs,root:G(p.sizes?.xs.minH,"& > input")},sm:{control:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:p.sizes?.sm.fontSize},field:p.sizes?.sm,root:G(p.sizes?.sm.minH,"& > input")},md:{control:{boxSize:"calc({--input-height} - {spaces.2})",fontSize:p.sizes?.md.fontSize},field:p.sizes?.md,root:G(p.sizes?.md.minH,"& > input")},lg:{control:{boxSize:"calc({--input-height} - {spaces.2.5})",fontSize:p.sizes?.lg.fontSize},field:p.sizes?.lg,root:G(p.sizes?.lg.minH,"& > input")},xl:{control:{boxSize:"calc({--input-height} - {spaces.3})",fontSize:p.sizes?.xl.fontSize},field:p.sizes?.xl,root:G(p.sizes?.xl.minH,"& > input")},"2xl":{control:{boxSize:"calc({--input-height} - {spaces.3})",fontSize:p.sizes?.["2xl"].fontSize},field:p.sizes?.["2xl"],root:G(p.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),F=n=>parseFloat(n.toString().replace(/[^\w.-]+/g,"")),Le=(n,r)=>Math.max(Fe(r),Fe(n)),ge=(n,r,t)=>(n=F(n),Number.isNaN(n)?void 0:Me(n,t??Le(n,r))),jn=({keepWithinRange:n=!0,max:r=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,step:a=1,...s}={})=>{const m=Ze(s.onChange),[b,S]=u.useState(()=>s.defaultValue==null?"":ge(s.defaultValue,a,s.precision)??""),g=typeof s.value<"u",f=g?s.value:b,x=Le(F(f),a),i=s.precision??x,h=u.useCallback(d=>{d!==f&&(g||S(d.toString()),m(d.toString(),F(d)))},[m,g,f]),v=u.useCallback(d=>{let c=d;return n&&(c=cn(c,t,r)),Me(c,i)},[i,n,r,t]),R=u.useCallback((d=a)=>{let c;f===""?c=F(d):c=F(f)+d,c=v(c),h(c)},[v,a,h,f]),C=u.useCallback((d=a)=>{let c;f===""?c=F(-d):c=F(f)-d,c=v(c),h(c)},[v,a,h,f]),M=u.useCallback(()=>{let d;s.defaultValue==null?d="":d=ge(s.defaultValue,a,s.precision)??t,h(d)},[s.defaultValue,s.precision,a,h,t]),y=u.useCallback(d=>{const c=ge(d,a,i)??t;h(c)},[i,a,h,t]),I=F(f),N=I<t||r<I;return{cast:y,clamp:v,decrement:C,increment:R,max:I===r,min:I===t,out:N,precision:i,reset:M,setValue:S,step:a,update:h,value:f,valueAsNumber:I}},yn=50,Pe=300,Nn=({decrement:n,increment:r})=>{const[t,a]=u.useState(!1),[s,m]=u.useState(null),[b,S]=u.useState(!0),g=u.useRef(null);mn(()=>{s==="increment"&&r(),s==="decrement"&&n()},t?yn:null);const f=u.useCallback(()=>{b&&r(),g.current=setTimeout(()=>{S(!1),a(!0),m("increment")},Pe)},[r,b]),x=u.useCallback(()=>{b&&n(),g.current=setTimeout(()=>{S(!1),a(!0),m("decrement")},Pe)},[n,b]),i=u.useCallback(()=>clearTimeout(g.current),[]),h=u.useCallback(()=>{S(!0),a(!1),i()},[i]);return en(i),{down:x,spinning:t,stop:h,up:f}},Rn=({decrement:n,disabled:r,increment:t,keepWithinRange:a,max:s,min:m,...b})=>{const S=u.useRef(null),g=u.useRef(null),{down:f,spinning:x,stop:i,up:h}=Nn({decrement:n,increment:t}),{t:v}=nn("numberInput");ke(S,["disabled"],x,i),ke(g,["disabled"],x,i);const R=u.useCallback((y={})=>({type:"button",disabled:r,tabIndex:-1,...b,...y,onPointerLeave:z(y.onPointerLeave,i),onPointerUp:z(y.onPointerUp,i)}),[b,r,i]),C=u.useCallback(({ref:y,...I}={})=>{const N=r||a&&s;return{ref:Ie(y,S),"aria-label":v("Increase"),...R({disabled:N,...I}),onPointerDown:z(I.onPointerDown,k=>{k.button!==0||N||(k.preventDefault(),h())})}},[R,r,a,s,h,v]);return{getDecrementProps:u.useCallback(({ref:y,...I}={})=>{const N=r||a&&m;return{ref:Ie(y,g),"aria-label":v("Decrease"),...R({disabled:N,...I}),onPointerDown:z(I.onPointerDown,k=>{k.button!==0||N||(k.preventDefault(),f())})}},[R,r,a,m,f,v]),getIncrementProps:C}},kn=n=>n.toString(),Dn=n=>n,Fn=n=>/^[Ee0-9+\-.]$/.test(n),zn=({key:n,altKey:r,ctrlKey:t,metaKey:a},s)=>{const m=t||r||a;return!(n.length===1)||m?!0:s(n)},Ve=({ctrlKey:n,metaKey:r,shiftKey:t})=>{let a=1;return(r||n)&&(a=.1),t&&(a=10),a},We=(n={})=>{const{props:{allowMouseWheel:r,clampValueOnBlur:t=!0,defaultValue:a,disabled:s,focusInputOnChange:m=!0,format:b=kn,getAriaValueText:S,isValidCharacter:g=Fn,keepWithinRange:f=!0,max:x=Number.MAX_SAFE_INTEGER,min:i=Number.MIN_SAFE_INTEGER,parse:h=Dn,precision:v,readOnly:R,step:C=1,value:M,onChange:y,...I},ariaProps:N,dataProps:k,eventProps:H}=pn(n),d=!(R||s),c=u.useRef(null),{cast:Se,max:Ue,min:$e,out:ve,setValue:be,update:B,value:D,valueAsNumber:E,..._}=jn({defaultValue:a,keepWithinRange:f,max:x,min:i,precision:v,step:C,value:M,onChange:y}),xe=u.useRef(null),Ce=u.useMemo(()=>{let o=S?.(D);return o??(o=D.toString(),o||void 0)},[D,S]),K=u.useCallback(o=>o.split("").filter(g).join(""),[g]),L=u.useCallback((o=C)=>{d&&(_.increment(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),W=u.useCallback((o=C)=>{d&&(_.decrement(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),je=u.useCallback(o=>{if(o.nativeEvent.isComposing)return;const{selectionEnd:j,selectionStart:A,value:q}=o.currentTarget;B(K(h(q))),xe.current={end:j,start:A}},[h,K,B]),ye=u.useCallback(o=>{if(!xe.current)return;const{end:j,start:A}=xe.current,{selectionStart:q,value:U}=o.currentTarget;o.currentTarget.selectionStart=A??U.length,o.currentTarget.selectionEnd=j??q},[]),Ne=u.useCallback(()=>{if(!t)return;let o=D;if(D==="")return;/^[eE]/.test(D.toString())?be(""):(E<i&&(o=i),E>x&&(o=x),Se(o))},[Se,t,x,i,be,D,E]),Re=u.useCallback(o=>{if(o.nativeEvent.isComposing)return;zn(o,g)||o.preventDefault();const j=Ve(o)*C;rn(o,{ArrowDown:()=>W(j),ArrowUp:()=>L(j),End:()=>B(x),Home:()=>B(i)})},[W,L,g,x,i,C,B]),{getDecrementProps:Xe,getIncrementProps:Ye}=Rn({"aria-disabled":De(!d),decrement:W,disabled:s,increment:L,keepWithinRange:f,max:Ue,min:$e,...k});tn(()=>{!c.current||!(c.current.value!=D)||be(K(h(c.current.value)))},[h,K]),dn(c.current,"wheel",o=>{const A=(c.current?.ownerDocument??document).activeElement===c.current;if(!r||!A)return;o.preventDefault();const q=Ve(o)*C,U=Math.sign(o.deltaY);U===-1?L(q):U===1&&W(q)},{passive:!1});const Je=u.useCallback(({ref:o,...j}={})=>({...N,...k,type:"text","aria-invalid":De(N["aria-invalid"]??ve),"aria-valuemax":x,"aria-valuemin":i,"aria-valuenow":Number.isNaN(E)?void 0:E,"aria-valuetext":Ce,autoComplete:"off",autoCorrect:"off",disabled:s,inputMode:"decimal",max:x,min:i,pattern:"[0-9]*(.[0-9]+)?",readOnly:R,role:"spinbutton",step:C,value:b(D),...I,...j,ref:Ie(o,I.ref,c),onBlur:z(H.onBlur,j.onBlur,Ne),onChange:z(j.onChange,je),onFocus:z(H.onFocus,j.onFocus,ye),onKeyDown:z(I.onKeyDown,j.onKeyDown,Re)}),[b,ve,D,Ce,N,k,H,x,i,E,s,R,C,I,Re,Ne,ye,je]);return{getDecrementProps:Xe,getIncrementProps:Ye,getInputProps:Je}},{withContext:he,withProvider:Pn}=on("number-input",Cn),l=Pn(({className:n,css:r,colorScheme:t,controlProps:a,decrementProps:s,elementProps:m,incrementProps:b,rootProps:S,...g})=>{const[f,x]=fn(g),{getDecrementProps:i,getIncrementProps:h,getInputProps:v}=We(x);return e.jsxs(P,{className:n,css:r,colorScheme:t,...f,...S,children:[e.jsx(Vn,{...v()}),e.jsx(pe,{clickable:!0,...m,children:e.jsxs(On,{...a,children:[e.jsx(wn,{...h(b)}),e.jsx(En,{...i(s)})]})})]})},"root")(n=>({...un(),...n})),Vn=he(Ae,"field")({"data-group-propagate":""}),On=he("div","control")(),wn=he("button",["button","increment"])({children:e.jsx(vn,{})}),En=he("button",["button","decrement"])({children:e.jsx(hn,{})}),dr={component:l,title:"Components / NumberInput"},$=()=>e.jsx(l,{placeholder:"Basic"}),X=()=>e.jsx(qe,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,r,t)=>e.jsx(l,{size:n,variant:r,placeholder:`Size (${n})`},t)}),Y=()=>e.jsx(qe,{variant:"stack",columns:["outline","filled","flushed"],rows:an,children:(n,r,t)=>e.jsx(l,{colorScheme:r,variant:n,placeholder:O(n)},t)}),J=()=>e.jsx(l,{defaultValue:18,placeholder:"Order quantity"}),Q=()=>e.jsx(l,{defaultValue:18,max:31,min:8,placeholder:"Order quantity"}),Z=()=>e.jsx(l,{defaultValue:15,max:30,min:5,placeholder:"Order quantity",step:5}),ee=()=>e.jsx(l,{defaultValue:15,placeholder:"Order quantity",precision:2,step:.2}),ne=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:"Order quantity"}),re=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:"Order quantity"}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,disabled:!0,placeholder:O(n)},r)}),e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,disabled:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(n)})]},r)}),e.jsx(T,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(l,{})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,placeholder:O(n),readOnly:!0},r)}),e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,readOnly:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(n)})]},r)}),e.jsx(T,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(l,{})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,invalid:!0,placeholder:O(n)},r)}),e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,invalid:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(n)})]},r)}),e.jsx(T,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(l,{})})]}),se=()=>e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},r)}),ue=()=>e.jsx(V,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},r)}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{disabled:!0,placeholder:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(P,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(P,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]})]}),ie=()=>e.jsx(l,{placeholder:"Order quantity",decrementProps:{children:e.jsx(Ke,{})},incrementProps:{children:e.jsx(_e,{})}}),ce=()=>{const{getDecrementProps:n,getIncrementProps:r,getInputProps:t}=We({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(bn,{gap:"sm",maxW:"xs",children:[e.jsx(ze,{icon:e.jsx(_e,{fontSize:"2xl"}),...r(),"aria-label":"Increment"}),e.jsx(Ae,{...t(),"aria-label":"Number input"}),e.jsx(ze,{icon:e.jsx(Ke,{fontSize:"2xl"}),...n(),"aria-label":"Decrement"})]})},de=()=>{const{control:n,formState:{errors:r},handleSubmit:t,watch:a}=Ge(),s=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(Ee,{as:"form",onSubmit:t(s),children:[e.jsx(T,{errorMessage:r.numberInput?.message,invalid:!!r.numberInput,label:"Age",children:e.jsx(Be,{name:"numberInput",control:n,render:({field:m})=>e.jsx(l,{...m}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(Te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},me=()=>{const n={numberInput:"5"},{control:r,formState:{errors:t},handleSubmit:a,watch:s}=Ge({defaultValues:n}),m=b=>console.log("submit:",b);return console.log("watch:",s()),e.jsxs(Ee,{as:"form",onSubmit:a(m),children:[e.jsx(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:"Age",children:e.jsx(Be,{name:"numberInput",control:r,render:({field:b})=>e.jsx(l,{...b}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Te,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
}`,...$.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...X.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...Y.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...ee.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...ne.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...re.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} disabled placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} disabled>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root disabled helperMessage="Please enter the quantity you wish to order." label="Order quantity">
        <NumberInput />
      </Field.Root>
    </>;
}`,...te.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} placeholder={toTitleCase(variant)} readOnly />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} readOnly>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root helperMessage="Please enter the quantity you wish to order." label="Order quantity" readOnly>
        <NumberInput />
      </Field.Root>
    </>;
}`,...oe.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`() => {
  return <>
      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <NumberInput key={index} variant={variant} invalid placeholder={toTitleCase(variant)} />}
      </For>

      <For each={["outline", "filled", "flushed"] as const}>
        {(variant, index) => <InputGroup.Root key={index} variant={variant} invalid>
            <InputGroup.Addon>
              <GaugeIcon />
            </InputGroup.Addon>
            <NumberInput placeholder={toTitleCase(variant)} />
          </InputGroup.Root>}
      </For>

      <Field.Root errorMessage="Order quantity is required." invalid label="Order quantity">
        <NumberInput />
      </Field.Root>
    </>;
}`,...ae.parameters?.docs?.source}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...se.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...ue.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`() => {
  return <>
      <NumberInput disabled placeholder="Default border color" />

      <NumberInput focusBorderColor="green.500" placeholder="Custom border color" />

      <InputGroup.Root variant="flushed" focusBorderColor="green.500">
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>

      <NumberInput errorBorderColor="orange.500" invalid placeholder="Custom border color" />

      <InputGroup.Root errorBorderColor="orange.500" invalid>
        <InputGroup.Element>
          <GaugeIcon />
        </InputGroup.Element>
        <NumberInput placeholder="Custom border color" />
      </InputGroup.Root>
    </>;
}`,...le.parameters?.docs?.source}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...ie.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`() => {
  const {
    getDecrementProps,
    getIncrementProps,
    getInputProps
  } = useNumberInput({
    defaultValue: 3.14,
    max: 4,
    min: 3,
    precision: 2,
    step: 0.01
  });
  return <HStack gap="sm" maxW="xs">
      <IconButton icon={<PlusIcon fontSize="2xl" />} {...getIncrementProps()} aria-label="Increment" />
      <Input {...getInputProps()} aria-label="Number input" />
      <IconButton icon={<MinusIcon fontSize="2xl" />} {...getDecrementProps()} aria-label="Decrement" />
    </HStack>;
}`,...ce.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    numberInput: string;
  }
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
        <Controller name="numberInput" control={control} render={({
        field
      }) => <NumberInput {...field} />} rules={{
        max: {
          message: "The maximum value is 5.",
          value: 5
        },
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
}`,...de.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`() => {
  interface Data {
    numberInput: string;
  }
  const defaultValues: Data = {
    numberInput: "5"
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Field.Root errorMessage={errors.numberInput?.message} invalid={!!errors.numberInput} label="Age">
        <Controller name="numberInput" control={control} render={({
        field
      }) => <NumberInput {...field} />} rules={{
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
}`,...me.parameters?.docs?.source}}};const mr=["Basic","Size","Variant","DefaultValue","MinMax","Step","Precision","DisabledClampValueOnBlur","DisabledKeepWithinRange","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomStepper","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{se as Addon,$ as Basic,le as BorderColor,ce as CustomComponent,ie as CustomStepper,J as DefaultValue,te as Disabled,ne as DisabledClampValueOnBlur,re as DisabledKeepWithinRange,ue as Element,ae as Invalid,Q as MinMax,ee as Precision,de as ReactHookForm,me as ReactHookFormWithDefaultValue,oe as Readonly,X as Size,Z as Step,Y as Variant,mr as __namedExportsOrder,dr as default};
