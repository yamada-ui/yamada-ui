import{n as Ye,o as Qe,I as Ze,d as Je,aO as er,ag as rr,r as u,ap as nr,G as tr,bG as De,h as P,m as Ie,K as Fe,a as or,aa as ar,e as ke,g as sr,j as e,C as ur,P as V,Z as Pe,V as Ge,Q as qe}from"./iframe-D0k82VKj.js";import{P as Ee}from"./props-table-CTaVRFRo.js";import{u as Be,C as we}from"./index.esm-BWmHN2_N.js";import{g as B,i as m,b as lr,u as ir,I as Ae}from"./input-Z3NWNvVg.js";import{t as Te,a as Oe,c as cr}from"./number-CcP_arM8.js";import{u as dr}from"./index-BwXxpkL8.js";import{u as mr}from"./index-Daz67r9q.js";import{u as pr,F as T}from"./use-field-props-CqEx8ctB.js";import{C as fr}from"./chevron-up-icon-BLf9snKY.js";import{u as hr}from"./group-wqTpA82u.js";import{I as O,a as pe,b as fe}from"./input-group-cuo2st2X.js";import{C as br}from"./chevron-down-icon-sbcZmcf2.js";import{F as z}from"./for-VxQ1P6BR.js";import{H as xr}from"./h-stack-2JM7Wrl-.js";import{P as Me}from"./plus-icon-D47NJCFh.js";import{M as He}from"./minus-icon-CSkIMB6w.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-W2jtEO_S.js";import"./grid-item-BEXtmAs-.js";import"./flex-DfSuxPUO.js";import"./heading-Z6IrjMgv.js";import"./use-input-border-BupPeUaJ.js";import"./index-BbBQJmyS.js";import"./use-breakpoint-CrBfJ-6O.js";import"./use-breakpoint-value-pZKkBl49.js";import"./use-color-mode-value-bOkTOA4p.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Ir=Ye("gauge",gr),G=Qe(Ze)({as:Ir}),Sr=Je({base:{button:{...er.base,flex:"1",lineHeight:"1",rounded:"l1"},control:{display:"flex",flexDirection:"column"},decrement:{},field:m.base,increment:{},root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:m.variants?.filled},flushed:{field:m.variants?.flushed,root:lr("& > input")},outline:{field:m.variants?.outline},plain:{field:m.variants?.plain}},sizes:{xs:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:m.sizes?.xs.fontSize},field:m.sizes?.xs,root:B(m.sizes?.xs.minH,"& > input")},sm:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:m.sizes?.sm.fontSize},field:m.sizes?.sm,root:B(m.sizes?.sm.minH,"& > input")},md:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:m.sizes?.md.fontSize},field:m.sizes?.md,root:B(m.sizes?.md.minH,"& > input")},lg:{control:{boxSize:"calc({--height} - {spaces.2.5})",fontSize:m.sizes?.lg.fontSize},field:m.sizes?.lg,root:B(m.sizes?.lg.minH,"& > input")},xl:{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:m.sizes?.xl.fontSize},field:m.sizes?.xl,root:B(m.sizes?.xl.minH,"& > input")},"2xl":{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:m.sizes?.["2xl"].fontSize},field:m.sizes?.["2xl"],root:B(m.sizes?.["2xl"]?.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),k=r=>parseFloat(r.toString().replace(/[^\w.-]+/g,"")),_e=(r,n)=>Math.max(Oe(n),Oe(r)),ge=(r,n,t)=>(r=k(r),Number.isNaN(r)?void 0:Te(r,t??_e(r,n))),vr=({keepWithinRange:r=!0,max:n=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,step:a=1,...s}={})=>{const p=rr(s.onChange),[I,S]=u.useState(()=>s.defaultValue==null?"":ge(s.defaultValue,a,s.precision)??""),x=typeof s.value<"u",f=x?s.value:I,b=_e(k(f),a),i=s.precision??b,h=u.useCallback(d=>{d!==f&&(x||S(d.toString()),p(d.toString(),k(d)))},[p,x,f]),v=u.useCallback(d=>{let c=d;return r&&(c=cr(c,t,n)),Te(c,i)},[i,r,n,t]),R=u.useCallback((d=a)=>{let c;f===""?c=k(d):c=k(f)+d,c=v(c),h(c)},[v,a,h,f]),C=u.useCallback((d=a)=>{let c;f===""?c=k(-d):c=k(f)-d,c=v(c),h(c)},[v,a,h,f]),M=u.useCallback(()=>{let d;s.defaultValue==null?d="":d=ge(s.defaultValue,a,s.precision)??t,h(d)},[s.defaultValue,s.precision,a,h,t]),y=u.useCallback(d=>{const c=ge(d,a,i)??t;h(c)},[i,a,h,t]),g=k(f),N=g<t||n<g;return{cast:y,clamp:v,decrement:C,increment:R,max:g===n,min:g===t,out:N,precision:i,reset:M,setValue:S,step:a,update:h,value:f,valueAsNumber:g}},Cr=50,ze=300,jr=({decrement:r,increment:n})=>{const[t,a]=u.useState(!1),[s,p]=u.useState(null),[I,S]=u.useState(!0),x=u.useRef(null);mr(()=>{s==="increment"&&n(),s==="decrement"&&r()},t?Cr:null);const f=u.useCallback(()=>{I&&n(),x.current=setTimeout(()=>{S(!1),a(!0),p("increment")},ze)},[n,I]),b=u.useCallback(()=>{I&&r(),x.current=setTimeout(()=>{S(!1),a(!0),p("decrement")},ze)},[r,I]),i=u.useCallback(()=>clearTimeout(x.current),[]),h=u.useCallback(()=>{S(!0),a(!1),i()},[i]);return nr(i),{down:b,spinning:t,stop:h,up:f}},yr=({decrement:r,disabled:n,increment:t,keepWithinRange:a,max:s,min:p,...I})=>{const S=u.useRef(null),x=u.useRef(null),{down:f,spinning:b,stop:i,up:h}=jr({decrement:r,increment:t}),{t:v}=tr("numberInput");De(S,["disabled"],b,i),De(x,["disabled"],b,i);const R=u.useCallback((y={})=>({type:"button",disabled:n,tabIndex:-1,...I,...y,onPointerLeave:P(y.onPointerLeave,i),onPointerUp:P(y.onPointerUp,i)}),[I,n,i]),C=u.useCallback(({ref:y,...g}={})=>{const N=n||a&&s;return{ref:Ie(y,S),"aria-label":v("Increase"),...R({disabled:N,...g}),onPointerDown:P(g.onPointerDown,D=>{D.button!==0||N||(D.preventDefault(),h())})}},[R,n,a,s,h,v]);return{getDecrementProps:u.useCallback(({ref:y,...g}={})=>{const N=n||a&&p;return{ref:Ie(y,x),"aria-label":v("Decrease"),...R({disabled:N,...g}),onPointerDown:P(g.onPointerDown,D=>{D.button!==0||N||(D.preventDefault(),f())})}},[R,n,a,p,f,v]),getIncrementProps:C}},Nr=r=>r.toString(),Rr=r=>r,Dr=r=>/^[Ee0-9+\-.]$/.test(r),Fr=({key:r,altKey:n,ctrlKey:t,metaKey:a},s)=>{const p=t||n||a;return!(r.length===1)||p?!0:s(r)},Ve=({ctrlKey:r,metaKey:n,shiftKey:t})=>{let a=1;return(n||r)&&(a=.1),t&&(a=10),a},Ke=(r={})=>{const{props:{allowMouseWheel:n,clampValueOnBlur:t=!0,defaultValue:a,disabled:s,focusInputOnChange:p=!0,format:I=Nr,getAriaValueText:S,isValidCharacter:x=Dr,keepWithinRange:f=!0,max:b=Number.MAX_SAFE_INTEGER,min:i=Number.MIN_SAFE_INTEGER,parse:h=Rr,precision:v,readOnly:R,step:C=1,value:M,onChange:y,...g},ariaProps:N,dataProps:D,eventProps:H}=pr(r),d=!(R||s),c=u.useRef(null),{cast:Se,max:Le,min:We,out:ve,setValue:be,update:w,value:F,valueAsNumber:q,..._}=vr({defaultValue:a,keepWithinRange:f,max:b,min:i,precision:v,step:C,value:M,onChange:y}),xe=u.useRef(null),Ce=u.useMemo(()=>{let o=S?.(F);return o??(o=F.toString(),o||void 0)},[F,S]),K=u.useCallback(o=>o.split("").filter(x).join(""),[x]),L=u.useCallback((o=C)=>{d&&(_.increment(o),p&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,p]),W=u.useCallback((o=C)=>{d&&(_.decrement(o),p&&requestAnimationFrame(()=>{c.current?.focus()}))},[d,_,C,p]),je=u.useCallback(o=>{if(Fe(o))return;const{selectionEnd:j,selectionStart:A,value:E}=o.currentTarget;w(K(h(E))),xe.current={end:j,start:A}},[h,K,w]),ye=u.useCallback(o=>{if(!xe.current)return;const{end:j,start:A}=xe.current,{selectionStart:E,value:U}=o.currentTarget;o.currentTarget.selectionStart=A??U.length,o.currentTarget.selectionEnd=j??E},[]),Ne=u.useCallback(()=>{if(!t)return;let o=F;if(F==="")return;/^[eE]/.test(F.toString())?be(""):(q<i&&(o=i),q>b&&(o=b),Se(o))},[Se,t,b,i,be,F,q]),Re=u.useCallback(o=>{if(Fe(o))return;Fr(o,x)||o.preventDefault();const j=Ve(o)*C;or(o,{ArrowDown:()=>W(j),ArrowUp:()=>L(j),End:()=>w(b),Home:()=>w(i)})},[W,L,x,b,i,C,w]),{getDecrementProps:Ue,getIncrementProps:$e}=yr({"aria-disabled":ke(!d),decrement:W,disabled:s,increment:L,keepWithinRange:f,max:Le,min:We,...D});ar(()=>{!c.current||!(c.current.value!=F)||be(K(h(c.current.value)))},[h,K]),dr(c.current,"wheel",o=>{const A=(c.current?.ownerDocument??document).activeElement===c.current;if(!n||!A)return;o.preventDefault();const E=Ve(o)*C,U=Math.sign(o.deltaY);U===-1?L(E):U===1&&W(E)},{passive:!1});const Xe=u.useCallback(({ref:o,...j}={})=>({...N,...D,type:"text","aria-invalid":ke(N["aria-invalid"]??ve),"aria-valuemax":b,"aria-valuemin":i,"aria-valuenow":Number.isNaN(q)?void 0:q,"aria-valuetext":Ce,autoComplete:"off",autoCorrect:"off",disabled:s,inputMode:"decimal",max:b,min:i,pattern:"[0-9]*(.[0-9]+)?",readOnly:R,role:"spinbutton",step:C,value:I(F),...g,...j,ref:Ie(o,g.ref,c),onBlur:P(H.onBlur,j.onBlur,Ne),onChange:P(j.onChange,je),onFocus:P(H.onFocus,j.onFocus,ye),onKeyDown:P(g.onKeyDown,j.onKeyDown,Re)}),[I,ve,F,Ce,N,D,H,b,i,q,s,R,C,g,Re,Ne,ye,je]);return{getDecrementProps:Ue,getIncrementProps:$e,getInputProps:Xe}},{withContext:he,withProvider:kr}=sr("number-input",Sr),l=kr(({className:r,css:n,colorScheme:t,controlProps:a,decrementProps:s,elementProps:p,incrementProps:I,rootProps:S,...x})=>{const[f,b]=hr(x),{getDecrementProps:i,getIncrementProps:h,getInputProps:v}=Ke(b);return e.jsxs(O,{className:r,css:n,colorScheme:t,...f,...S,children:[e.jsx(Pr,{...v()}),e.jsx(pe,{clickable:!0,...p,children:e.jsxs(Or,{...a,children:[e.jsx(zr,{...h(I)}),e.jsx(Vr,{...i(s)})]})})]})},"root")(r=>({...ir(),...r})),Pr=he(Ae,"field")({"data-group-propagate":""}),Or=he("div","control")(),zr=he("button",["button","increment"])({children:e.jsx(fr,{})}),Vr=he("button",["button","decrement"])({children:e.jsx(br,{})}),sn={component:l,title:"Components / NumberInput"},$=()=>e.jsx(l,{placeholder:"Basic"}),X=()=>e.jsx(Ee,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(l,{size:r,variant:n,placeholder:`Size (${r})`},t)}),Y=()=>e.jsx(Ee,{variant:"stack",columns:["outline","filled","flushed"],rows:ur,children:(r,n,t)=>e.jsx(l,{colorScheme:n,variant:r,placeholder:V(r)},t)}),Q=()=>e.jsx(l,{defaultValue:18,placeholder:"Order quantity"}),Z=()=>e.jsx(l,{defaultValue:18,max:31,min:8,placeholder:"Order quantity"}),J=()=>e.jsx(l,{defaultValue:15,max:30,min:5,placeholder:"Order quantity",step:5}),ee=()=>e.jsx(l,{defaultValue:15,placeholder:"Order quantity",precision:2,step:.2}),re=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:"Order quantity"}),ne=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:"Order quantity"}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,disabled:!0,placeholder:V(r)},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,disabled:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(l,{})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,placeholder:V(r),readOnly:!0},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,readOnly:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(l,{})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,invalid:!0,placeholder:V(r)},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,invalid:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(l,{})})]}),se=()=>e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),ue=()=>e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{disabled:!0,placeholder:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(O,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Custom border color"})]}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(O,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Custom border color"})]})]}),ie=()=>e.jsx(l,{placeholder:"Order quantity",decrementProps:{children:e.jsx(He,{})},incrementProps:{children:e.jsx(Me,{})}}),ce=()=>{const{getDecrementProps:r,getIncrementProps:n,getInputProps:t}=Ke({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(xr,{gap:"sm",maxW:"xs",children:[e.jsx(Pe,{icon:e.jsx(Me,{fontSize:"2xl"}),...n(),"aria-label":"Increment"}),e.jsx(Ae,{...t(),"aria-label":"Number input"}),e.jsx(Pe,{icon:e.jsx(He,{fontSize:"2xl"}),...r(),"aria-label":"Decrement"})]})},de=()=>{const{control:r,formState:{errors:n},handleSubmit:t}=Be(),a=s=>console.log("submit:",s);return e.jsxs(Ge,{as:"form",onSubmit:t(a),children:[e.jsx(T,{errorMessage:n.numberInput?.message,invalid:!!n.numberInput,label:"Age",children:e.jsx(we,{name:"numberInput",control:r,render:({field:s})=>e.jsx(l,{...s}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(qe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},me=()=>{const r={numberInput:"5"},{control:n,formState:{errors:t},handleSubmit:a}=Be({defaultValues:r}),s=p=>console.log("submit:",p);return e.jsxs(Ge,{as:"form",onSubmit:a(s),children:[e.jsx(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:"Age",children:e.jsx(we,{name:"numberInput",control:n,render:({field:p})=>e.jsx(l,{...p}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(qe,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
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
    handleSubmit
  } = useForm<Data>();
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
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
    handleSubmit
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
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
}`,...me.parameters?.docs?.source}}};const un=["Basic","Size","Variant","DefaultValue","MinMax","Step","Precision","DisabledClampValueOnBlur","DisabledKeepWithinRange","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomStepper","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{se as Addon,$ as Basic,le as BorderColor,ce as CustomComponent,ie as CustomStepper,Q as DefaultValue,te as Disabled,re as DisabledClampValueOnBlur,ne as DisabledKeepWithinRange,ue as Element,ae as Invalid,Z as MinMax,ee as Precision,de as ReactHookForm,me as ReactHookFormWithDefaultValue,oe as ReadOnly,X as Size,J as Step,Y as Variant,un as __namedExportsOrder,sn as default};
