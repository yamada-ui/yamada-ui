import{n as yn,o as Nn,I as Rn,d as Dn,aO as Fn,ag as kn,r as u,ap as Pn,G as On,bH as Fe,h as P,m as Ie,K as ke,a as zn,aa as Vn,e as Pe,g as Gn,j as e,C as qn,P as V,Z as Oe,V as un,Q as ln}from"./iframe-BIJNUwA0.js";import{P as cn}from"./props-table-lmXFHSBz.js";import{u as dn,C as mn}from"./index.esm-D7liiRN2.js";import{g as B,i as p,b as En,u as Bn,I as pn}from"./input-DV8HDa7P.js";import{t as fn,a as ze,c as wn}from"./number-CcP_arM8.js";import{u as An}from"./index-DuRkUgur.js";import{u as Tn}from"./index-DKPyJOcz.js";import{u as Mn,F as T}from"./use-field-props-DKzDJnFJ.js";import{C as Hn}from"./chevron-up-icon-BatxY-kw.js";import{u as _n}from"./group-VmPLRg4N.js";import{I as O,a as pe,b as fe}from"./input-group-WndhHXJh.js";import{C as Kn}from"./chevron-down-icon-B3yr9rYU.js";import{F as z}from"./for-Cpsr9B86.js";import{H as Ln}from"./h-stack-DD07j3MN.js";import{P as hn}from"./plus-icon-BE0-Ao7V.js";import{M as bn}from"./minus-icon-DU51C8J-.js";import"./preload-helper-C1FmrZbK.js";import"./grid-ZAyucFZG.js";import"./grid-item-DOf84ZDr.js";import"./flex-KEdsfNWm.js";import"./heading-Bz9uY6e0.js";import"./use-input-border-DSgVNCGu.js";import"./index-0kQpDINk.js";import"./use-breakpoint-Des1U5dl.js";import"./use-breakpoint-value-Ci56feJn.js";import"./use-color-mode-value-DllOdTyO.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Un=yn("gauge",Wn),G=Nn(Rn)({as:Un});var qe,Ee,Be,we,Ae,Te,Me,He,_e,Ke,Le,We,Ue,$e,Xe,Ye,Qe,Ze,Je,er,rr,nr,tr;const $n=Dn({base:{button:{...Fn.base,flex:"1",lineHeight:"1",rounded:"l1"},control:{display:"flex",flexDirection:"column"},decrement:{},field:p.base,increment:{},root:{}},variants:{base:{button:{layerStyle:"ghost",focusVisibleRing:"none",_hover:{layerStyle:"ghost.hover"},_focusVisible:{layerStyle:"ghost.hover"}}},filled:{field:(qe=p.variants)==null?void 0:qe.filled},flushed:{field:(Ee=p.variants)==null?void 0:Ee.flushed,root:En("& > input")},outline:{field:(Be=p.variants)==null?void 0:Be.outline},plain:{field:(we=p.variants)==null?void 0:we.plain}},sizes:{xs:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:(Ae=p.sizes)==null?void 0:Ae.xs.fontSize},field:(Te=p.sizes)==null?void 0:Te.xs,root:B((Me=p.sizes)==null?void 0:Me.xs.minH,"& > input")},sm:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:(He=p.sizes)==null?void 0:He.sm.fontSize},field:(_e=p.sizes)==null?void 0:_e.sm,root:B((Ke=p.sizes)==null?void 0:Ke.sm.minH,"& > input")},md:{control:{boxSize:"calc({--height} - {spaces.2})",fontSize:(Le=p.sizes)==null?void 0:Le.md.fontSize},field:(We=p.sizes)==null?void 0:We.md,root:B((Ue=p.sizes)==null?void 0:Ue.md.minH,"& > input")},lg:{control:{boxSize:"calc({--height} - {spaces.2.5})",fontSize:($e=p.sizes)==null?void 0:$e.lg.fontSize},field:(Xe=p.sizes)==null?void 0:Xe.lg,root:B((Ye=p.sizes)==null?void 0:Ye.lg.minH,"& > input")},xl:{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:(Qe=p.sizes)==null?void 0:Qe.xl.fontSize},field:(Ze=p.sizes)==null?void 0:Ze.xl,root:B((Je=p.sizes)==null?void 0:Je.xl.minH,"& > input")},"2xl":{control:{boxSize:"calc({--height} - {spaces.3})",fontSize:(er=p.sizes)==null?void 0:er["2xl"].fontSize},field:(rr=p.sizes)==null?void 0:rr["2xl"],root:B((tr=(nr=p.sizes)==null?void 0:nr["2xl"])==null?void 0:tr.minH,"& > input")}},defaultProps:{size:"md",variant:"outline"}}),k=r=>parseFloat(r.toString().replace(/[^\w.-]+/g,"")),xn=(r,n)=>Math.max(ze(n),ze(r)),ge=(r,n,t)=>(r=k(r),Number.isNaN(r)?void 0:fn(r,t??xn(r,n))),Xn=({keepWithinRange:r=!0,max:n=Number.MAX_SAFE_INTEGER,min:t=Number.MIN_SAFE_INTEGER,step:a=1,...s}={})=>{const d=kn(s.onChange),[x,S]=u.useState(()=>s.defaultValue==null?"":ge(s.defaultValue,a,s.precision)??""),I=typeof s.value<"u",f=I?s.value:x,g=xn(k(f),a),i=s.precision??g,h=u.useCallback(m=>{m!==f&&(I||S(m.toString()),d(m.toString(),k(m)))},[d,I,f]),C=u.useCallback(m=>{let c=m;return r&&(c=wn(c,t,n)),fn(c,i)},[i,r,n,t]),R=u.useCallback((m=a)=>{let c;f===""?c=k(m):c=k(f)+m,c=C(c),h(c)},[C,a,h,f]),j=u.useCallback((m=a)=>{let c;f===""?c=k(-m):c=k(f)-m,c=C(c),h(c)},[C,a,h,f]),M=u.useCallback(()=>{let m;s.defaultValue==null?m="":m=ge(s.defaultValue,a,s.precision)??t,h(m)},[s.defaultValue,s.precision,a,h,t]),y=u.useCallback(m=>{const c=ge(m,a,i)??t;h(c)},[i,a,h,t]),v=k(f),N=v<t||n<v;return{cast:y,clamp:C,decrement:j,increment:R,max:v===n,min:v===t,out:N,precision:i,reset:M,setValue:S,step:a,update:h,value:f,valueAsNumber:v}},Yn=50,Ve=300,Qn=({decrement:r,increment:n})=>{const[t,a]=u.useState(!1),[s,d]=u.useState(null),[x,S]=u.useState(!0),I=u.useRef(null);Tn(()=>{s==="increment"&&n(),s==="decrement"&&r()},t?Yn:null);const f=u.useCallback(()=>{x&&n(),I.current=setTimeout(()=>{S(!1),a(!0),d("increment")},Ve)},[n,x]),g=u.useCallback(()=>{x&&r(),I.current=setTimeout(()=>{S(!1),a(!0),d("decrement")},Ve)},[r,x]),i=u.useCallback(()=>clearTimeout(I.current),[]),h=u.useCallback(()=>{S(!0),a(!1),i()},[i]);return Pn(i),{down:g,spinning:t,stop:h,up:f}},Zn=({decrement:r,disabled:n,increment:t,keepWithinRange:a,max:s,min:d,...x})=>{const S=u.useRef(null),I=u.useRef(null),{down:f,spinning:g,stop:i,up:h}=Qn({decrement:r,increment:t}),{t:C}=On("numberInput");Fe(S,["disabled"],g,i),Fe(I,["disabled"],g,i);const R=u.useCallback((y={})=>({type:"button",disabled:n,tabIndex:-1,...x,...y,onPointerLeave:P(y.onPointerLeave,i),onPointerUp:P(y.onPointerUp,i)}),[x,n,i]),j=u.useCallback(({ref:y,...v}={})=>{const N=n||a&&s;return{ref:Ie(y,S),"aria-label":C("Increase"),...R({disabled:N,...v}),onPointerDown:P(v.onPointerDown,D=>{D.button!==0||N||(D.preventDefault(),h())})}},[R,n,a,s,h,C]);return{getDecrementProps:u.useCallback(({ref:y,...v}={})=>{const N=n||a&&d;return{ref:Ie(y,I),"aria-label":C("Decrease"),...R({disabled:N,...v}),onPointerDown:P(v.onPointerDown,D=>{D.button!==0||N||(D.preventDefault(),f())})}},[R,n,a,d,f,C]),getIncrementProps:j}},Jn=r=>r.toString(),et=r=>r,rt=r=>/^[Ee0-9+\-.]$/.test(r),nt=({key:r,altKey:n,ctrlKey:t,metaKey:a},s)=>{const d=t||n||a;return!(r.length===1)||d?!0:s(r)},Ge=({ctrlKey:r,metaKey:n,shiftKey:t})=>{let a=1;return(n||r)&&(a=.1),t&&(a=10),a},gn=(r={})=>{const{props:{allowMouseWheel:n,clampValueOnBlur:t=!0,defaultValue:a,disabled:s,focusInputOnChange:d=!0,format:x=Jn,getAriaValueText:S,isValidCharacter:I=rt,keepWithinRange:f=!0,max:g=Number.MAX_SAFE_INTEGER,min:i=Number.MIN_SAFE_INTEGER,parse:h=et,precision:C,readOnly:R,step:j=1,value:M,onChange:y,...v},ariaProps:N,dataProps:D,eventProps:H}=Mn(r),m=!(R||s),c=u.useRef(null),{cast:Se,max:In,min:Sn,out:ve,setValue:be,update:w,value:F,valueAsNumber:q,..._}=Xn({defaultValue:a,keepWithinRange:f,max:g,min:i,precision:C,step:j,value:M,onChange:y}),xe=u.useRef(null),Ce=u.useMemo(()=>{let o=S==null?void 0:S(F);return o??(o=F.toString(),o||void 0)},[F,S]),K=u.useCallback(o=>o.split("").filter(I).join(""),[I]),L=u.useCallback((o=j)=>{m&&(_.increment(o),d&&requestAnimationFrame(()=>{var b;(b=c.current)==null||b.focus()}))},[m,_,j,d]),W=u.useCallback((o=j)=>{m&&(_.decrement(o),d&&requestAnimationFrame(()=>{var b;(b=c.current)==null||b.focus()}))},[m,_,j,d]),je=u.useCallback(o=>{if(ke(o))return;const{selectionEnd:b,selectionStart:A,value:E}=o.currentTarget;w(K(h(E))),xe.current={end:b,start:A}},[h,K,w]),ye=u.useCallback(o=>{if(!xe.current)return;const{end:b,start:A}=xe.current,{selectionStart:E,value:U}=o.currentTarget;o.currentTarget.selectionStart=A??U.length,o.currentTarget.selectionEnd=b??E},[]),Ne=u.useCallback(()=>{if(!t)return;let o=F;if(F==="")return;/^[eE]/.test(F.toString())?be(""):(q<i&&(o=i),q>g&&(o=g),Se(o))},[Se,t,g,i,be,F,q]),Re=u.useCallback(o=>{if(ke(o))return;nt(o,I)||o.preventDefault();const b=Ge(o)*j;zn(o,{ArrowDown:()=>W(b),ArrowUp:()=>L(b),End:()=>w(g),Home:()=>w(i)})},[W,L,I,g,i,j,w]),{getDecrementProps:vn,getIncrementProps:Cn}=Zn({"aria-disabled":Pe(!m),decrement:W,disabled:s,increment:L,keepWithinRange:f,max:In,min:Sn,...D});Vn(()=>{!c.current||!(c.current.value!=F)||be(K(h(c.current.value)))},[h,K]),An(c.current,"wheel",o=>{var De;const A=(((De=c.current)==null?void 0:De.ownerDocument)??document).activeElement===c.current;if(!n||!A)return;o.preventDefault();const E=Ge(o)*j,U=Math.sign(o.deltaY);U===-1?L(E):U===1&&W(E)},{passive:!1});const jn=u.useCallback(({ref:o,...b}={})=>({...N,...D,type:"text","aria-invalid":Pe(N["aria-invalid"]??ve),"aria-valuemax":g,"aria-valuemin":i,"aria-valuenow":Number.isNaN(q)?void 0:q,"aria-valuetext":Ce,autoComplete:"off",autoCorrect:"off",disabled:s,inputMode:"decimal",max:g,min:i,pattern:"[0-9]*(.[0-9]+)?",readOnly:R,role:"spinbutton",step:j,value:x(F),...v,...b,ref:Ie(o,v.ref,c),onBlur:P(H.onBlur,b.onBlur,Ne),onChange:P(b.onChange,je),onFocus:P(H.onFocus,b.onFocus,ye),onKeyDown:P(v.onKeyDown,b.onKeyDown,Re)}),[x,ve,F,Ce,N,D,H,g,i,q,s,R,j,v,Re,Ne,ye,je]);return{getDecrementProps:vn,getIncrementProps:Cn,getInputProps:jn}},{withContext:he,withProvider:tt}=Gn("number-input",$n),l=tt(({className:r,css:n,colorScheme:t,controlProps:a,decrementProps:s,elementProps:d,incrementProps:x,rootProps:S,...I})=>{const[f,g]=_n(I),{getDecrementProps:i,getIncrementProps:h,getInputProps:C}=gn(g);return e.jsxs(O,{className:r,css:n,colorScheme:t,...f,...S,children:[e.jsx(ot,{...C()}),e.jsx(pe,{clickable:!0,...d,children:e.jsxs(at,{...a,children:[e.jsx(st,{...h(x)}),e.jsx(ut,{...i(s)})]})})]})},"root")(r=>({...Bn(),...r})),ot=he(pn,"field")({"data-group-propagate":""}),at=he("div","control")(),st=he("button",["button","increment"])({children:e.jsx(Hn,{})}),ut=he("button",["button","decrement"])({children:e.jsx(Kn,{})}),Gt={component:l,title:"Components / NumberInput"},$=()=>e.jsx(l,{placeholder:"Basic"}),X=()=>e.jsx(cn,{variant:"stack",columns:["xs","sm","md","lg","xl"],rows:["outline","filled","flushed"],children:(r,n,t)=>e.jsx(l,{size:r,variant:n,placeholder:`Size (${r})`},t)}),Y=()=>e.jsx(cn,{variant:"stack",columns:["outline","filled","flushed"],rows:qn,children:(r,n,t)=>e.jsx(l,{colorScheme:n,variant:r,placeholder:V(r)},t)}),Q=()=>e.jsx(l,{defaultValue:18,placeholder:"Order quantity"}),Z=()=>e.jsx(l,{defaultValue:18,max:31,min:8,placeholder:"Order quantity"}),J=()=>e.jsx(l,{defaultValue:15,max:30,min:5,placeholder:"Order quantity",step:5}),ee=()=>e.jsx(l,{defaultValue:15,placeholder:"Order quantity",precision:2,step:.2}),re=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:"Order quantity"}),ne=()=>e.jsx(l,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:"Order quantity"}),te=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,disabled:!0,placeholder:V(r)},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,disabled:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{disabled:!0,helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",children:e.jsx(l,{})})]}),oe=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,placeholder:V(r),readOnly:!0},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,readOnly:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{helperMessage:"Please enter the quantity you wish to order.",label:"Order quantity",readOnly:!0,children:e.jsx(l,{})})]}),ae=()=>e.jsxs(e.Fragment,{children:[e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsx(l,{variant:r,invalid:!0,placeholder:V(r)},n)}),e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,invalid:!0,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:V(r)})]},n)}),e.jsx(T,{errorMessage:"Order quantity is required.",invalid:!0,label:"Order quantity",children:e.jsx(l,{})})]}),se=()=>e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,children:[e.jsx(fe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),ue=()=>e.jsx(z,{each:["outline","filled","flushed"],children:(r,n)=>e.jsxs(O,{variant:r,children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Order quantity"})]},n)}),le=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{disabled:!0,placeholder:"Default border color"}),e.jsx(l,{focusBorderColor:"green.500",placeholder:"Custom border color"}),e.jsxs(O,{variant:"flushed",focusBorderColor:"green.500",children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Custom border color"})]}),e.jsx(l,{errorBorderColor:"orange.500",invalid:!0,placeholder:"Custom border color"}),e.jsxs(O,{errorBorderColor:"orange.500",invalid:!0,children:[e.jsx(pe,{children:e.jsx(G,{})}),e.jsx(l,{placeholder:"Custom border color"})]})]}),ie=()=>e.jsx(l,{placeholder:"Order quantity",decrementProps:{children:e.jsx(bn,{})},incrementProps:{children:e.jsx(hn,{})}}),ce=()=>{const{getDecrementProps:r,getIncrementProps:n,getInputProps:t}=gn({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return e.jsxs(Ln,{gap:"sm",maxW:"xs",children:[e.jsx(Oe,{icon:e.jsx(hn,{fontSize:"2xl"}),...n(),"aria-label":"Increment"}),e.jsx(pn,{...t(),"aria-label":"Number input"}),e.jsx(Oe,{icon:e.jsx(bn,{fontSize:"2xl"}),...r(),"aria-label":"Decrement"})]})},de=()=>{var s;const{control:r,formState:{errors:n},handleSubmit:t}=dn(),a=d=>console.log("submit:",d);return e.jsxs(un,{as:"form",onSubmit:t(a),children:[e.jsx(T,{errorMessage:(s=n.numberInput)==null?void 0:s.message,invalid:!!n.numberInput,label:"Age",children:e.jsx(mn,{name:"numberInput",control:r,render:({field:d})=>e.jsx(l,{...d}),rules:{max:{message:"The maximum value is 5.",value:5},required:{message:"This is required.",value:!0}}})}),e.jsx(ln,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})},me=()=>{var d;const r={numberInput:"5"},{control:n,formState:{errors:t},handleSubmit:a}=dn({defaultValues:r}),s=x=>console.log("submit:",x);return e.jsxs(un,{as:"form",onSubmit:a(s),children:[e.jsx(T,{errorMessage:(d=t.numberInput)==null?void 0:d.message,invalid:!!t.numberInput,label:"Age",children:e.jsx(mn,{name:"numberInput",control:n,render:({field:x})=>e.jsx(l,{...x}),rules:{required:{message:"This is required.",value:!0}}})}),e.jsx(ln,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var or,ar,sr;$.parameters={...$.parameters,docs:{...(or=$.parameters)==null?void 0:or.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
}`,...(sr=(ar=$.parameters)==null?void 0:ar.docs)==null?void 0:sr.source}}};var ur,lr,ir;X.parameters={...X.parameters,docs:{...(ur=X.parameters)==null?void 0:ur.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...(ir=(lr=X.parameters)==null?void 0:lr.docs)==null?void 0:ir.source}}};var cr,dr,mr;Y.parameters={...Y.parameters,docs:{...(cr=Y.parameters)==null?void 0:cr.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...(mr=(dr=Y.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var pr,fr,hr;Q.parameters={...Q.parameters,docs:{...(pr=Q.parameters)==null?void 0:pr.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...(hr=(fr=Q.parameters)==null?void 0:fr.docs)==null?void 0:hr.source}}};var br,xr,gr;Z.parameters={...Z.parameters,docs:{...(br=Z.parameters)==null?void 0:br.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...(gr=(xr=Z.parameters)==null?void 0:xr.docs)==null?void 0:gr.source}}};var Ir,Sr,vr;J.parameters={...J.parameters,docs:{...(Ir=J.parameters)==null?void 0:Ir.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...(vr=(Sr=J.parameters)==null?void 0:Sr.docs)==null?void 0:vr.source}}};var Cr,jr,yr;ee.parameters={...ee.parameters,docs:{...(Cr=ee.parameters)==null?void 0:Cr.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...(yr=(jr=ee.parameters)==null?void 0:jr.docs)==null?void 0:yr.source}}};var Nr,Rr,Dr;re.parameters={...re.parameters,docs:{...(Nr=re.parameters)==null?void 0:Nr.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...(Dr=(Rr=re.parameters)==null?void 0:Rr.docs)==null?void 0:Dr.source}}};var Fr,kr,Pr;ne.parameters={...ne.parameters,docs:{...(Fr=ne.parameters)==null?void 0:Fr.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...(Pr=(kr=ne.parameters)==null?void 0:kr.docs)==null?void 0:Pr.source}}};var Or,zr,Vr;te.parameters={...te.parameters,docs:{...(Or=te.parameters)==null?void 0:Or.docs,source:{originalSource:`() => {
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
}`,...(Vr=(zr=te.parameters)==null?void 0:zr.docs)==null?void 0:Vr.source}}};var Gr,qr,Er;oe.parameters={...oe.parameters,docs:{...(Gr=oe.parameters)==null?void 0:Gr.docs,source:{originalSource:`() => {
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
}`,...(Er=(qr=oe.parameters)==null?void 0:qr.docs)==null?void 0:Er.source}}};var Br,wr,Ar;ae.parameters={...ae.parameters,docs:{...(Br=ae.parameters)==null?void 0:Br.docs,source:{originalSource:`() => {
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
}`,...(Ar=(wr=ae.parameters)==null?void 0:wr.docs)==null?void 0:Ar.source}}};var Tr,Mr,Hr;se.parameters={...se.parameters,docs:{...(Tr=se.parameters)==null?void 0:Tr.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...(Hr=(Mr=se.parameters)==null?void 0:Mr.docs)==null?void 0:Hr.source}}};var _r,Kr,Lr;ue.parameters={...ue.parameters,docs:{...(_r=ue.parameters)==null?void 0:_r.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...(Lr=(Kr=ue.parameters)==null?void 0:Kr.docs)==null?void 0:Lr.source}}};var Wr,Ur,$r;le.parameters={...le.parameters,docs:{...(Wr=le.parameters)==null?void 0:Wr.docs,source:{originalSource:`() => {
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
}`,...($r=(Ur=le.parameters)==null?void 0:Ur.docs)==null?void 0:$r.source}}};var Xr,Yr,Qr;ie.parameters={...ie.parameters,docs:{...(Xr=ie.parameters)==null?void 0:Xr.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...(Qr=(Yr=ie.parameters)==null?void 0:Yr.docs)==null?void 0:Qr.source}}};var Zr,Jr,en;ce.parameters={...ce.parameters,docs:{...(Zr=ce.parameters)==null?void 0:Zr.docs,source:{originalSource:`() => {
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
}`,...(en=(Jr=ce.parameters)==null?void 0:Jr.docs)==null?void 0:en.source}}};var rn,nn,tn;de.parameters={...de.parameters,docs:{...(rn=de.parameters)==null?void 0:rn.docs,source:{originalSource:`() => {
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
}`,...(tn=(nn=de.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};var on,an,sn;me.parameters={...me.parameters,docs:{...(on=me.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
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
}`,...(sn=(an=me.parameters)==null?void 0:an.docs)==null?void 0:sn.source}}};const qt=["Basic","Size","Variant","DefaultValue","MinMax","Step","Precision","DisabledClampValueOnBlur","DisabledKeepWithinRange","Disabled","ReadOnly","Invalid","Addon","Element","BorderColor","CustomStepper","CustomComponent","ReactHookForm","ReactHookFormWithDefaultValue"];export{se as Addon,$ as Basic,le as BorderColor,ce as CustomComponent,ie as CustomStepper,Q as DefaultValue,te as Disabled,re as DisabledClampValueOnBlur,ne as DisabledKeepWithinRange,ue as Element,ae as Invalid,Z as MinMax,ee as Precision,de as ReactHookForm,me as ReactHookFormWithDefaultValue,oe as ReadOnly,X as Size,J as Step,Y as Variant,qt as __namedExportsOrder,Gt as default};
