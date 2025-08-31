import{n as Oe,I as we,d as Qe,a8 as Ze,r as u,aq as er,A as rr,bj as Re,h as z,m as Ie,a as nr,ab as tr,e as ke,g as or,j as e,C as ar,F as O,V as Ee}from"./iframe-COpE3uSe.js";import{P as qe}from"./props-table-XBnOiVZc.js";import{u as Ge,C as Be}from"./index.esm-p-x6aPWY.js";import{g as G,i as p,a as sr,u as ur,b as Ae}from"./input-CEApOgG-.js";import{b as lr}from"./button.style-CEKjhFlf.js";import{t as Te,a as De,c as ir}from"./number-CcP_arM8.js";import{u as cr}from"./index-jMnWbNjz.js";import{u as dr}from"./index-BzmwWrKt.js";import{u as mr,F as T}from"./use-field-props-qOu5Tg87.js";import{c as Me}from"./createLucideIcon-B04U3mbS.js";import{u as pr}from"./group-BcN9SPfp.js";import{I as P,a as pe,b as fe}from"./input-group-B9e3kRKs.js";import{C as fr}from"./chevron-down-icon-DQAa7-10.js";import{F as V}from"./for-DdiNkdzb.js";import{H as hr}from"./h-stack-tyGUwiCe.js";import{I as ze}from"./icon-button-BjF-Bm1-.js";import{B as He}from"./button-C1iRx7Aw.js";import{P as _e}from"./plus-icon-Bl9QSzVx.js";import{M as Ke}from"./minus-icon-BxeXJlQe.js";import"./preload-helper-D9Z9MdNV.js";import"./grid-C-W568Cz.js";import"./grid-item-Bvrr_-qm.js";import"./flex-v97S7pBb.js";import"./heading-B0z9i4jI.js";import"./use-input-border-C5BYnfYe.js";import"./index-rIgF0o0K.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],xr=Me("chevron-up",br);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ir=Me("gauge",gr),Sr=Oe(we)({as:xr}),w=Oe(we)({as:Ir}),vr=Qe({base:{button:{...lr.base,flex:"1",lineHeight:"1",rounded:"l1"},control:{display:"flex",flexDirection:"column"},decrement:{},field:p.base,increment:{},root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:p.variants?.filled},flushed:{field:p.variants?.flushed,root:sr("& > input")},outline:{field:p.variants?.outline},plain:{field:p.variants?.plain}},sizes:{xs:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.xs.fontSize},field:p.sizes?.xs,root:G(p.sizes?.xs.minH,"& > input")},sm:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.sm.fontSize},field:p.sizes?.sm,root:G(p.sizes?.sm.minH,"& > input")},md:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.md.fontSize},field:p.sizes?.md,root:G(p.sizes?.md.minH,"& > input")},lg:{control:{boxSize:"calc({--height} - {spaces.2.5})",fontSize:p.sizes?.lg.fontSize},field:p.sizes?.lg,root:G(p.sizes?.lg.minH,"& > input")},xl:{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:p.sizes?.xl.fontSize},field:p.sizes?.xl,root:G(p.sizes?.xl.minH,"& > input")},"2xl":{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:p.sizes?.["2xl"].fontSize},field:p.sizes?.["2xl"],root:G(p.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),D=r=>parseFloat(r.toString().replace(/[^\w.-]+/g,"")),Le=(r,n)=>Math.max(De(n),De(r)),ge=(r,n,t)=>(r=D(r),Number.isNaN(r)?void 0:Te(r,t??Le(r,n))),Cr=({keepWithinRange:r=!0,max:n=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,step:a=1,...s}={})=>{const m=Ze(s.onChange),[b,S]=u.useState(()=>s.defaultValue==null?"":ge(s.defaultValue,a,s.precision)??""),g=typeof s.value<"u",f=g?s.value:b,x=Le(D(f),a),i=s.precision??x,h=u.useCallback(d=>{d!==f&&(g||S(d.toString()),m(d.toString(),D(d)))},[m,g,f]),v=u.useCallback(d=>{let c=d;return r&&(c=ir(c,t,n)),Te(c,i)},[i,r,n,t]),F=u.useCallback((d=a)=>{let c;f===""?c=D(d):c=D(f)+d,c=v(c),h(c)},[v,a,h,f]),C=u.useCallback((d=a)=>{let c;f===""?c=D(-d):c=D(f)-d,c=v(c),h(c)},[v,a,h,f]),M=u.useCallback(()=>{let d;s.defaultValue==null?d="":d=ge(s.defaultValue,a,s.precision)??t,h(d)},[s.defaultValue,s.precision,a,h,t]),y=u.useCallback(d=>{const c=ge(d,a,i)??t;h(c)},[i,a,h,t]),I=D(f),N=I<t||n<I;return{cast:y,clamp:v,decrement:C,increment:F,max:I===n,min:I===t,out:N,precision:i,reset:M,setValue:S,step:a,update:h,value:f,valueAsNumber:I}},jr=50,Pe=300,yr=({decrement:r,increment:n})=>{const[t,a]=u.useState(!1),[s,m]=u.useState(null),[b,S]=u.useState(!0),g=u.useRef(null);dr(()=>{s==="increment"&&n(),s==="decrement"&&r()},t?jr:null);const f=u.useCallback(()=>{b&&n(),g.current=setTimeout(()=>{S(!1),a(!0),m("increment")},Pe)},[n,b]),x=u.useCallback(()=>{b&&r(),g.current=setTimeout(()=>{S(!1),a(!0),m("decrement")},Pe)},[r,b]),i=u.useCallback(()=>clearTimeout(g.current),[]),h=u.useCallback(()=>{S(!0),a(!1),i()},[i]);return er(i),{down:x,spinning:t,stop:h,up:f}},Nr=({decrement:r,disabled:n,increment:t,keepWithinRange:a,max:s,min:m,...b})=>{const S=u.useRef(null),g=u.useRef(null),{down:f,spinning:x,stop:i,up:h}=yr({decrement:r,increment:t}),{t:v}=rr("numberInput");Re(S,["disabled"],x,i),Re(g,["disabled"],x,i);const F=u.useCallback((y={})=>({type:"button",disabled:n,tabIndex:-1,...b,...y,onPointerLeave:z(y.onPointerLeave,i),onPointerUp:z(y.onPointerUp,i)}),[b,n,i]),C=u.useCallback(({ref:y,...I}={})=>{const N=n||a&&s;return{ref:Ie(y,S),"aria-label":v("Increase"),...F({disabled:N,...I}),onPointerDown:z(I.onPointerDown,R=>{R.button!==0||N||(R.preventDefault(),h())})}},[F,n,a,s,h,v]);return{getDecrementProps:u.useCallback(({ref:y,...I}={})=>{const N=n||a&&m;return{ref:Ie(y,g),"aria-label":v("Decrease"),...F({disabled:N,...I}),onPointerDown:z(I.onPointerDown,R=>{R.button!==0||N||(R.preventDefault(),f())})}},[F,n,a,m,f,v]),getIncrementProps:C}},Fr=r=>r.toString(),Rr=r=>r,kr=r=>/^[Ee0-9+\-.]$/.test(r),Dr=({key:r,altKey:n,ctrlKey:t,metaKey:a},s)=>{const m=t||n||a;return!(r.length===1)||m?!0:s(r)},Ve=({ctrlKey:r,metaKey:n,shiftKey:t})=>{let a=1;return(n||r)&&(a=.1),t&&(a=10),a},We=(r={})=>{const{props:{allowMouseWheel:n,clampValueOnBlur:t=!0,defaultValue:a,disabled:s,focusInputOnChange:m=!0,format:b=Fr,getAriaValueText:S,isValidCharacter:g=kr,keepWithinRange:f=!0,max:x=Number.MAX_SAFE_INTEGER,min:i=Number.MIN_SAFE_INTEGER,parse:h=Rr,precision:v,readOnly:F,step:C=1,value:M,onChange:y,...I},ariaProps:N,dataProps:R,eventProps:H}=mr(r),d=!(F||s),c=u.useRef(null),{cast:Se,max:Ue,min:$e,out:ve,setValue:be,update:B,value:k,valueAsNumber:E,..._}=Cr({defaultValue:a,keepWithinRange:f,max:x,min:i,precision:v,step:C,value:M,onChange:y}),xe=u.useRef(null),Ce=u.useMemo(()=>{let o=S?.(k);return o??(o=k.toString(),o||void 0)},[k,S]),K=u.useCallback(o=>o.split("").filter(g).join(""),[g]),L=u.useCallback((o=C)=>{d&&(_.increment(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),W=u.useCallback((o=C)=>{d&&(_.decrement(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),je=u.useCallback(o=>{if(o.nativeEvent.isComposing)return;const{selectionEnd:j,selectionStart:A,value:q}=o.currentTarget;B(K(h(q))),xe.current={end:j,start:A}},[h,K,B]),ye=u.useCallback(o=>{if(!xe.current)return;const{end:j,start:A}=xe.current,{selectionStart:q,value:U}=o.currentTarget;o.currentTarget.selectionStart=A??U.length,o.currentTarget.selectionEnd=j??q},[]),Ne=u.useCallback(()=>{if(!t)return;let o=k;if(k==="")return;/^[eE]/.test(k.toString())?be(""):(E<i&&(o=i),E>x&&(o=x),Se(o))},[Se,t,x,i,be,k,E]),Fe=u.useCallback(o=>{if(o.nativeEvent.isComposing)return;Dr(o,g)||o.preventDefault();const j=Ve(o)*C;nr(o,{ArrowDown:()=>W(j),ArrowUp:()=>L(j),End:()=>B(x),Home:()=>B(i)})},[W,L,g,x,i,C,B]),{getDecrementProps:Xe,getIncrementProps:Ye}=Nr({"aria-disabled":ke(!d),decrement:W,disabled:s,increment:L,keepWithinRange:f,max:Ue,min:$e,...R});tr(()=>{!c.current||!(c.current.value!=k)||be(K(h(c.current.value)))},[h,K]),cr(c.current,"wheel",o=>{const A=(c.current?.ownerDocument??document).activeElement===c.current;if(!n||!A)return;o.preventDefault();const q=Ve(o)*C,U=Math.sign(o.deltaY);U===-1?L(q):U===1&&W(q)},{passive:!1});const Je=u.useCallback(({ref:o,...j}={})=>({...N,...R,type:"text","aria-invalid":ke(N["aria-invalid"]??ve),"aria-valuemax":x,"aria-valuemin":i,"aria-valuenow":Number.isNaN(E)?void 0:E,"aria-valuetext":Ce,autoComplete:"off",autoCorrect:"off",disabled:s,inputMode:"decimal",max:x,min:i,pattern:"[0-9]*(.[0-9]+)?",readOnly:F,role:"spinbutton",step:C,value:b(k),...I,...j,ref:Ie(o,I.ref,c),onBlur:z(H.onBlur,j.onBlur,Ne),onChange:z(j.onChange,je),onFocus:z(H.onFocus,j.onFocus,ye),onKeyDown:z(I.onKeyDown,j.onKeyDown,Fe)}),[b,ve,k,Ce,N,R,H,x,i,E,s,F,C,I,Fe,Ne,ye,je]);return{getDecrementProps:Xe,getIncrementProps:Ye,getInputProps:Je}},{withContext:he,withProvider:zr}=or("number-input",vr),l=zr(({className:r,css:n,colorScheme:t,controlProps:a,decrementProps:s,elementProps:m,incrementProps:b,rootProps:S,...g})=>{const[f,x]=pr(g),{getDecrementProps:i,getIncrementProps:h,getInputProps:v}=We(x);return e.jsxs(P,{className:r,css:n,colorScheme:t,...f,...S,children:[e.jsx(Pr,{...v()}),e.jsx(pe,{clickable:!0,...m,children:e.jsxs(Vr,{...a,children:[e.jsx(Or,{...h(b)}),e.jsx(wr,{...i(s)})]})})]})},"root")(r=>({...ur(),...r})),Pr=he(Ae,"field")({"data-group-propagate":""}),Vr=he("div","control")(),Or=he("button",["button","increment"])({children:e.jsx(Sr,{})}),wr=he("button",["button","decrement"])({children:e.jsx(fr,{})}),pn={component:l,title:"Components / NumberInput"},$=()=>e.jsx(l,{placeholder:"Basic"}),X=()=>e.jsx(qe,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(l,{size:r,variant:n,placeholder:`Size (${r})`},t)}),Y=()=>e.jsx(qe,{variant:"stack",columns:["outline","filled","flushed"],rows:ar,children:(r,n,t)=>e.jsx(l,{colorScheme:n,variant:r,placeholder:O(r)},t)}),J=()=>e.jsx(l,{defaultValue:18,placeholder:"Order quantity"}),Q=()=>e.jsx(l,{defaultValue:18,max:31,min:8,placeholder:"Order quantity"}),Z=()=>e.jsx(l,{defaultValue:15,max:30,min:5,placeholder:"Order quantity",step:5}),ee=()=>e.jsx(l,{defaultValue:15,placeholder:"Order quantity",precision:2,step:.2}),re=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:"Order quantity"}),ne=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:"Order quantity"}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,disabled:!0,placeholder:O(r)},n)}),e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(P,{variant:r,disabled:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(r)})]},n)}),e.jsx(T,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(l,{})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,placeholder:O(r),readOnly:!0},n)}),e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(P,{variant:r,readOnly:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(r)})]},n)}),e.jsx(T,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(l,{})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,invalid:!0,placeholder:O(r)},n)}),e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(P,{variant:r,invalid:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:O(r)})]},n)}),e.jsx(T,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(l,{})})]}),se=()=>e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(P,{variant:r,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),ue=()=>e.jsx(V,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(P,{variant:r,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{disabled:!0,placeholder:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(P,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(P,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]})]}),ie=()=>e.jsx(l,{placeholder:"Order quantity",decrementProps:{children:e.jsx(Ke,{})},incrementProps:{children:e.jsx(_e,{})}}),ce=()=>{const{getDecrementProps:r,getIncrementProps:n,getInputProps:t}=We({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(hr,{gap:"sm",maxW:"xs",children:[e.jsx(ze,{icon:e.jsx(_e,{fontSize:"2xl"}),...n(),"aria-label":"Increment"}),e.jsx(Ae,{...t(),"aria-label":"Number input"}),e.jsx(ze,{icon:e.jsx(Ke,{fontSize:"2xl"}),...r(),"aria-label":"Decrement"})]})},de=()=>{const{control:r,formState:{errors:n},handleSubmit:t,watch:a}=Ge(),s=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(Ee,{as:"form",onSubmit:t(s),children:[e.jsx(T,{errorMessage:n.numberInput?.message,invalid:!!n.numberInput,label:"Age",children:e.jsx(Be,{name:"numberInput",control:r,render:({field:m})=>e.jsx(l,{...m}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},me=()=>{const r={numberInput:"5"},{control:n,formState:{errors:t},handleSubmit:a,watch:s}=Ge({defaultValues:r}),m=b=>console.log("submit:",b);return console.log("watch:",s()),e.jsxs(Ee,{as:"form",onSubmit:a(m),children:[e.jsx(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:"Age",children:e.jsx(Be,{name:"numberInput",control:n,render:({field:b})=>e.jsx(l,{...b}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(He,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...ee.parameters?.docs?.source}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...re.parameters?.docs?.source}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...ne.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`() => {
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
}`,...me.parameters?.docs?.source}}};const fn=["Basic","Size","Variant","DefaultValue","MinMax","Step","Precision","DisabledClampValueOnBlur","DisabledKeepWithinRange","Disabled","Readonly","Invalid","Addon","Element","BorderColor","CustomStepper","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{se as Addon,$ as Basic,le as BorderColor,ce as CustomComponent,ie as CustomStepper,J as DefaultValue,te as Disabled,re as DisabledClampValueOnBlur,ne as DisabledKeepWithinRange,ue as Element,ae as Invalid,Q as MinMax,ee as Precision,de as ReactHookForm,me as ReactHookFormWithDefaultValue,oe as Readonly,X as Size,Z as Step,Y as Variant,fn as __namedExportsOrder,pn as default};
