import{n as we,o as Ge,I as qe,d as Ze,ah as en,ak as nn,r as u,au as rn,J as tn,bD as ke,h as z,m as Ie,M as De,a as on,an,e as Fe,g as sn,j as e,C as un,R as V,$ as ze,V as Ee,S as Be}from"./iframe-Dp_HdYH_.js";import{P as Ae}from"./props-table-DR2D3jHB.js";import{u as Te,C as Me}from"./index.esm-DhXaDIoG.js";import{g as E,i as p,a as ln,u as cn,b as He}from"./input-DHe0vIV4.js";import{t as _e,a as Pe,c as dn}from"./number-CcP_arM8.js";import{u as mn}from"./index-Be32ND8a.js";import{u as pn}from"./index-_xxUZhey.js";import{u as fn,F as T}from"./use-field-props-BBv2JCBx.js";import{u as hn}from"./group-3Z3l4aN_.js";import{I as P,a as pe,b as fe}from"./input-group-DKWHbC5K.js";import{C as bn}from"./chevron-down-icon-Cs_3TMns.js";import{F as O}from"./for-B4pwjnZx.js";import{H as xn}from"./h-stack-CTulkEqr.js";import{P as Ke}from"./plus-icon-CDSUJqMp.js";import{M as Le}from"./minus-icon-DOr6QJqD.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BxEmWAV4.js";import"./grid-item-B_xTJ0Vv.js";import"./flex-Csx8kE93.js";import"./heading-rI5evaQz.js";import"./use-input-border-BYCQJ2Fb.js";import"./index-CF9VD-Dq.js";import"./use-breakpoint-7tNBqLsV.js";import"./use-breakpoint-value-BIoWr8t5.js";import"./use-color-mode-value-NOxgyMgF.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],In=we("chevron-up",gn);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],vn=we("gauge",Sn),Cn=Ge(qe)({as:In}),w=Ge(qe)({as:vn}),jn=Ze({base:{button:{...en.base,flex:"1",lineHeight:"1",rounded:"l1"},control:{display:"flex",flexDirection:"column"},decrement:{},field:p.base,increment:{},root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:p.variants?.filled},flushed:{field:p.variants?.flushed,root:ln("& > input")},outline:{field:p.variants?.outline},plain:{field:p.variants?.plain}},sizes:{xs:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.xs.fontSize},field:p.sizes?.xs,root:E(p.sizes?.xs.minH,"& > input")},sm:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.sm.fontSize},field:p.sizes?.sm,root:E(p.sizes?.sm.minH,"& > input")},md:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:p.sizes?.md.fontSize},field:p.sizes?.md,root:E(p.sizes?.md.minH,"& > input")},lg:{control:{boxSize:"calc({--height} - {spaces.2.5})",fontSize:p.sizes?.lg.fontSize},field:p.sizes?.lg,root:E(p.sizes?.lg.minH,"& > input")},xl:{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:p.sizes?.xl.fontSize},field:p.sizes?.xl,root:E(p.sizes?.xl.minH,"& > input")},"2xl":{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:p.sizes?.["2xl"].fontSize},field:p.sizes?.["2xl"],root:E(p.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),F=n=>parseFloat(n.toString().replace(/[^\w.-]+/g,"")),We=(n,r)=>Math.max(Pe(r),Pe(n)),ge=(n,r,t)=>(n=F(n),Number.isNaN(n)?void 0:_e(n,t??We(n,r))),yn=({keepWithinRange:n=!0,max:r=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,step:a=1,...s}={})=>{const m=nn(s.onChange),[b,S]=u.useState(()=>s.defaultValue==null?"":ge(s.defaultValue,a,s.precision)??""),g=typeof s.value<"u",f=g?s.value:b,x=We(F(f),a),i=s.precision??x,h=u.useCallback(d=>{d!==f&&(g||S(d.toString()),m(d.toString(),F(d)))},[m,g,f]),v=u.useCallback(d=>{let c=d;return n&&(c=dn(c,t,r)),_e(c,i)},[i,n,r,t]),R=u.useCallback((d=a)=>{let c;f===""?c=F(d):c=F(f)+d,c=v(c),h(c)},[v,a,h,f]),C=u.useCallback((d=a)=>{let c;f===""?c=F(-d):c=F(f)-d,c=v(c),h(c)},[v,a,h,f]),M=u.useCallback(()=>{let d;s.defaultValue==null?d="":d=ge(s.defaultValue,a,s.precision)??t,h(d)},[s.defaultValue,s.precision,a,h,t]),y=u.useCallback(d=>{const c=ge(d,a,i)??t;h(c)},[i,a,h,t]),I=F(f),N=I<t||r<I;return{cast:y,clamp:v,decrement:C,increment:R,max:I===r,min:I===t,out:N,precision:i,reset:M,setValue:S,step:a,update:h,value:f,valueAsNumber:I}},Nn=50,Oe=300,Rn=({decrement:n,increment:r})=>{const[t,a]=u.useState(!1),[s,m]=u.useState(null),[b,S]=u.useState(!0),g=u.useRef(null);pn(()=>{s==="increment"&&r(),s==="decrement"&&n()},t?Nn:null);const f=u.useCallback(()=>{b&&r(),g.current=setTimeout(()=>{S(!1),a(!0),m("increment")},Oe)},[r,b]),x=u.useCallback(()=>{b&&n(),g.current=setTimeout(()=>{S(!1),a(!0),m("decrement")},Oe)},[n,b]),i=u.useCallback(()=>clearTimeout(g.current),[]),h=u.useCallback(()=>{S(!0),a(!1),i()},[i]);return rn(i),{down:x,spinning:t,stop:h,up:f}},kn=({decrement:n,disabled:r,increment:t,keepWithinRange:a,max:s,min:m,...b})=>{const S=u.useRef(null),g=u.useRef(null),{down:f,spinning:x,stop:i,up:h}=Rn({decrement:n,increment:t}),{t:v}=tn("numberInput");ke(S,["disabled"],x,i),ke(g,["disabled"],x,i);const R=u.useCallback((y={})=>({type:"button",disabled:r,tabIndex:-1,...b,...y,onPointerLeave:z(y.onPointerLeave,i),onPointerUp:z(y.onPointerUp,i)}),[b,r,i]),C=u.useCallback(({ref:y,...I}={})=>{const N=r||a&&s;return{ref:Ie(y,S),"aria-label":v("Increase"),...R({disabled:N,...I}),onPointerDown:z(I.onPointerDown,k=>{k.button!==0||N||(k.preventDefault(),h())})}},[R,r,a,s,h,v]);return{getDecrementProps:u.useCallback(({ref:y,...I}={})=>{const N=r||a&&m;return{ref:Ie(y,g),"aria-label":v("Decrease"),...R({disabled:N,...I}),onPointerDown:z(I.onPointerDown,k=>{k.button!==0||N||(k.preventDefault(),f())})}},[R,r,a,m,f,v]),getIncrementProps:C}},Dn=n=>n.toString(),Fn=n=>n,zn=n=>/^[Ee0-9+\-.]$/.test(n),Pn=({key:n,altKey:r,ctrlKey:t,metaKey:a},s)=>{const m=t||r||a;return!(n.length===1)||m?!0:s(n)},Ve=({ctrlKey:n,metaKey:r,shiftKey:t})=>{let a=1;return(r||n)&&(a=.1),t&&(a=10),a},Ue=(n={})=>{const{props:{allowMouseWheel:r,clampValueOnBlur:t=!0,defaultValue:a,disabled:s,focusInputOnChange:m=!0,format:b=Dn,getAriaValueText:S,isValidCharacter:g=zn,keepWithinRange:f=!0,max:x=Number.MAX_SAFE_INTEGER,min:i=Number.MIN_SAFE_INTEGER,parse:h=Fn,precision:v,readOnly:R,step:C=1,value:M,onChange:y,...I},ariaProps:N,dataProps:k,eventProps:H}=fn(n),d=!(R||s),c=u.useRef(null),{cast:Se,max:$e,min:Xe,out:ve,setValue:be,update:B,value:D,valueAsNumber:G,..._}=yn({defaultValue:a,keepWithinRange:f,max:x,min:i,precision:v,step:C,value:M,onChange:y}),xe=u.useRef(null),Ce=u.useMemo(()=>{let o=S?.(D);return o??(o=D.toString(),o||void 0)},[D,S]),K=u.useCallback(o=>o.split("").filter(g).join(""),[g]),L=u.useCallback((o=C)=>{d&&(_.increment(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),W=u.useCallback((o=C)=>{d&&(_.decrement(o),m&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,m]),je=u.useCallback(o=>{if(De(o))return;const{selectionEnd:j,selectionStart:A,value:q}=o.currentTarget;B(K(h(q))),xe.current={end:j,start:A}},[h,K,B]),ye=u.useCallback(o=>{if(!xe.current)return;const{end:j,start:A}=xe.current,{selectionStart:q,value:U}=o.currentTarget;o.currentTarget.selectionStart=A??U.length,o.currentTarget.selectionEnd=j??q},[]),Ne=u.useCallback(()=>{if(!t)return;let o=D;if(D==="")return;/^[eE]/.test(D.toString())?be(""):(G<i&&(o=i),G>x&&(o=x),Se(o))},[Se,t,x,i,be,D,G]),Re=u.useCallback(o=>{if(De(o))return;Pn(o,g)||o.preventDefault();const j=Ve(o)*C;on(o,{ArrowDown:()=>W(j),ArrowUp:()=>L(j),End:()=>B(x),Home:()=>B(i)})},[W,L,g,x,i,C,B]),{getDecrementProps:Ye,getIncrementProps:Je}=kn({"aria-disabled":Fe(!d),decrement:W,disabled:s,increment:L,keepWithinRange:f,max:$e,min:Xe,...k});an(()=>{!c.current||!(c.current.value!=D)||be(K(h(c.current.value)))},[h,K]),mn(c.current,"wheel",o=>{const A=(c.current?.ownerDocument??document).activeElement===c.current;if(!r||!A)return;o.preventDefault();const q=Ve(o)*C,U=Math.sign(o.deltaY);U===-1?L(q):U===1&&W(q)},{passive:!1});const Qe=u.useCallback(({ref:o,...j}={})=>({...N,...k,type:"text","aria-invalid":Fe(N["aria-invalid"]??ve),"aria-valuemax":x,"aria-valuemin":i,"aria-valuenow":Number.isNaN(G)?void 0:G,"aria-valuetext":Ce,autoComplete:"off",autoCorrect:"off",disabled:s,inputMode:"decimal",max:x,min:i,pattern:"[0-9]*(.[0-9]+)?",readOnly:R,role:"spinbutton",step:C,value:b(D),...I,...j,ref:Ie(o,I.ref,c),onBlur:z(H.onBlur,j.onBlur,Ne),onChange:z(j.onChange,je),onFocus:z(H.onFocus,j.onFocus,ye),onKeyDown:z(I.onKeyDown,j.onKeyDown,Re)}),[b,ve,D,Ce,N,k,H,x,i,G,s,R,C,I,Re,Ne,ye,je]);return{getDecrementProps:Ye,getIncrementProps:Je,getInputProps:Qe}},{withContext:he,withProvider:On}=sn("number-input",jn),l=On(({className:n,css:r,colorScheme:t,controlProps:a,decrementProps:s,elementProps:m,incrementProps:b,rootProps:S,...g})=>{const[f,x]=hn(g),{getDecrementProps:i,getIncrementProps:h,getInputProps:v}=Ue(x);return e.jsxs(P,{className:n,css:r,colorScheme:t,...f,...S,children:[e.jsx(Vn,{...v()}),e.jsx(pe,{clickable:!0,...m,children:e.jsxs(wn,{...a,children:[e.jsx(Gn,{...h(b)}),e.jsx(qn,{...i(s)})]})})]})},"root")(n=>({...cn(),...n})),Vn=he(He,"field")({"data-group-propagate":""}),wn=he("div","control")(),Gn=he("button",["button","increment"])({children:e.jsx(Cn,{})}),qn=he("button",["button","decrement"])({children:e.jsx(bn,{})}),lr={component:l,title:"Components / NumberInput"},$=()=>e.jsx(l,{placeholder:"Basic"}),X=()=>e.jsx(Ae,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(n,r,t)=>e.jsx(l,{size:n,variant:r,placeholder:`Size (${n})`},t)}),Y=()=>e.jsx(Ae,{variant:"stack",columns:["outline","filled","flushed"],rows:un,children:(n,r,t)=>e.jsx(l,{colorScheme:r,variant:n,placeholder:V(n)},t)}),J=()=>e.jsx(l,{defaultValue:18,placeholder:"Order quantity"}),Q=()=>e.jsx(l,{defaultValue:18,max:31,min:8,placeholder:"Order quantity"}),Z=()=>e.jsx(l,{defaultValue:15,max:30,min:5,placeholder:"Order quantity",step:5}),ee=()=>e.jsx(l,{defaultValue:15,placeholder:"Order quantity",precision:2,step:.2}),ne=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:"Order quantity"}),re=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:"Order quantity"}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,disabled:!0,placeholder:V(n)},r)}),e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,disabled:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:V(n)})]},r)}),e.jsx(T,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(l,{})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,placeholder:V(n),readOnly:!0},r)}),e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,readOnly:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:V(n)})]},r)}),e.jsx(T,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(l,{})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsx(l,{variant:n,invalid:!0,placeholder:V(n)},r)}),e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,invalid:!0,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:V(n)})]},r)}),e.jsx(T,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(l,{})})]}),se=()=>e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,children:[e.jsx(fe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},r)}),ue=()=>e.jsx(O,{each:["outline","filled","flushed"],children:(n,r)=>e.jsxs(P,{variant:n,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Order quantity"})]},r)}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{disabled:!0,placeholder:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(P,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(P,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(pe,{children:e.jsx(w,{})}),e.jsx(l,{placeholder:"Custom border color"})]})]}),ie=()=>e.jsx(l,{placeholder:"Order quantity",decrementProps:{children:e.jsx(Le,{})},incrementProps:{children:e.jsx(Ke,{})}}),ce=()=>{const{getDecrementProps:n,getIncrementProps:r,getInputProps:t}=Ue({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(xn,{gap:"sm",maxW:"xs",children:[e.jsx(ze,{icon:e.jsx(Ke,{fontSize:"2xl"}),...r(),"aria-label":"Increment"}),e.jsx(He,{...t(),"aria-label":"Number input"}),e.jsx(ze,{icon:e.jsx(Le,{fontSize:"2xl"}),...n(),"aria-label":"Decrement"})]})},de=()=>{const{control:n,formState:{errors:r},handleSubmit:t,watch:a}=Te(),s=m=>console.log("submit:",m);return console.log("watch:",a()),e.jsxs(Ee,{as:"form",onSubmit:t(s),children:[e.jsx(T,{errorMessage:r.numberInput?.message,invalid:!!r.numberInput,label:"Age",children:e.jsx(Me,{name:"numberInput",control:n,render:({field:m})=>e.jsx(l,{...m}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(Be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},me=()=>{const n={numberInput:"5"},{control:r,formState:{errors:t},handleSubmit:a,watch:s}=Te({defaultValues:n}),m=b=>console.log("submit:",b);return console.log("watch:",s()),e.jsxs(Ee,{as:"form",onSubmit:a(m),children:[e.jsx(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:"Age",children:e.jsx(Me,{name:"numberInput",control:r,render:({field:b})=>e.jsx(l,{...b}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(Be,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...me.parameters?.docs?.source}}};const ir=["Basic","Size","Variant","DefaultValue","MinMax","Step","Precision","DisabledClampValueOnBlur","DisabledKeepWithinRange","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomStepper","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{se as Addon,$ as Basic,le as BorderColor,ce as CustomComponent,ie as CustomStepper,J as DefaultValue,te as Disabled,ne as DisabledClampValueOnBlur,re as DisabledKeepWithinRange,ue as Element,ae as Invalid,Q as MinMax,ee as Precision,de as ReactHookForm,me as ReactHookFormWithDefaultValue,oe as ReadOnly,X as Size,Z as Step,Y as Variant,ir as __namedExportsOrder,lr as default};
