import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Cn as n,Dn as r,Fn as i,Qt as a,Sn as o,Zt as s,ct as c,dt as l,ft as u,i as d,lt as f,mt as p,o as m,ot as h,pn as g,pt as _,yn as v,zt as y}from"./props-CCQavtXy.js";import{i as ee,r as b}from"./i18n-provider-BSc3faoG.js";import{n as te,o as ne,t as re}from"./number-u-voAp4w.js";import{t as ie}from"./jsx-runtime-BdxMnOeJ.js";import{n as ae,r as oe,t as se}from"./effect-CjnfyxRk.js";import{d as x,i as S,n as ce,r as le}from"./create-component-CNpeiJ0q.js";import{n as ue,r as de,t as fe}from"./icon-D9rbD6WM.js";import{n as C,t as w}from"./createLucideIcon-CKl6Xqme.js";import{n as T,t as pe}from"./chevron-down-icon-0CPWiHAs.js";import{n as me,t as he}from"./chevron-up-icon-CITOkEqx.js";import{n as ge,t as E}from"./minus-icon-D-hQzssa.js";import{n as _e,t as ve}from"./plus-icon-CZ8T9sSA.js";import{n as ye,t as be}from"./use-event-listener-DAd_XATG.js";import{r as xe,t as Se}from"./button-BCcG2Qpy.js";import{c as Ce,r as we,s as D,t as Te}from"./use-field-props-BwIcoUP5.js";import{n as Ee,t as De}from"./button.style-D6wvxqWC.js";import{r as Oe,t as ke}from"./icon-button-CBJmXSsE.js";import{i as Ae,r as je}from"./group-DV5WxYkI.js";import{a as O,c as Me,i as Ne,l as k,r as Pe,s as Fe,t as Ie}from"./input-D740622u.js";import{a as Le,i as Re,n as ze,o as Be,r as Ve,t as A}from"./input-group-B_tkQRR_.js";import{n as He,t as j}from"./for-vlneEBu7.js";import{n as Ue,t as We}from"./use-interval-BqEObVXu.js";import{n as Ge,t as Ke}from"./h-stack-C6vzXOlH.js";import{n as qe,t as Je}from"./v-stack-DFqT3QqZ.js";import{n as Ye,t as Xe}from"./props-table-CbpR6Bxo.js";import{n as Ze,r as Qe,t as $e}from"./index.esm-DO-98hSD.js";var et,tt;function nt(){return(nt=e((()=>{C(),et={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},et.node,tt=w(et)})))()}var M;function rt(){return(rt=e((()=>{nt(),de(),M=ue(fe)({as:tt})})))()}var it;function at(){return(at=e((()=>{x(),Ee(),Me(),it=S({base:{button:{...De.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:k.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:k.variants?.filled},flushed:{field:k.variants?.flushed,root:Fe(`& > input`)},outline:{field:k.variants?.outline},plain:{field:k.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:k.sizes?.xs.fontSize},field:k.sizes?.xs,root:O(k.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:k.sizes?.sm.fontSize},field:k.sizes?.sm,root:O(k.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:k.sizes?.md.fontSize},field:k.sizes?.md,root:O(k.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:k.sizes?.lg.fontSize},field:k.sizes?.lg,root:O(k.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:k.sizes?.xl.fontSize},field:k.sizes?.xl,root:O(k.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:k.sizes?.[`2xl`].fontSize},field:k.sizes?.[`2xl`],root:O(k.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var N,P,ot,st,ct;function lt(){return(lt=e((()=>{N=t(),h(),P=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),ot=(e,t)=>Math.max(te(t),te(e)),st=(e,t,n)=>(e=P(e),Number.isNaN(e)?void 0:ne(e,n??ot(e,t))),ct=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=f(i.onChange),[o,s]=(0,N.useState)(()=>i.defaultValue==null?``:st(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=ot(P(l),r),d=i.precision??u,p=(0,N.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),P(e)))},[a,c,l]),m=(0,N.useCallback)(r=>{let i=r;return e&&(i=re(i,n,t)),ne(i,d)},[d,e,t,n]),h=(0,N.useCallback)((e=r)=>{let t;t=l===``?P(e):P(l)+e,t=m(t),p(t)},[m,r,p,l]),g=(0,N.useCallback)((e=r)=>{let t;t=l===``?P(-e):P(l)-e,t=m(t),p(t)},[m,r,p,l]),_=(0,N.useCallback)(()=>{let e;e=i.defaultValue==null?``:st(i.defaultValue,r,i.precision)??n,p(e)},[i.defaultValue,i.precision,r,p,n]),v=(0,N.useCallback)(e=>{let t=st(e,r,d)??n;p(t)},[d,r,p,n]),y=P(l);return{cast:v,clamp:m,decrement:g,increment:h,max:y===t,min:y===n,out:y<n||t<y,precision:d,reset:_,setValue:s,step:r,update:p,value:l,valueAsNumber:y}}})))()}var F,ut,dt,ft;function pt(){return(pt=e((()=>{F=t(),We(),se(),ut=50,dt=300,ft=({decrement:e,increment:t})=>{let[n,r]=(0,F.useState)(!1),[i,a]=(0,F.useState)(null),[o,s]=(0,F.useState)(!0),c=(0,F.useRef)(null);Ue(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?ut:null);let l=(0,F.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},dt)},[t,o]),u=(0,F.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},dt)},[e,o]),d=(0,F.useCallback)(()=>clearTimeout(c.current),[]),f=(0,F.useCallback)(()=>{s(!0),r(!1),d()},[d]);return oe(d),{down:u,spinning:n,stop:f,up:l}}})))()}var I,mt;function ht(){return(ht=e((()=>{I=t(),d(),b(),n(),h(),l(),pt(),mt=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:i,min:a,...s})=>{let l=(0,I.useRef)(null),u=(0,I.useRef)(null),{down:d,spinning:f,stop:h,up:g}=ft({decrement:e,increment:n}),{t:_}=ee(`numberInput`);p(l,[`disabled`],f,h),p(u,[`disabled`],f,h);let v=(0,I.useCallback)((e={})=>m({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:h,onPointerUp:h})(),[s,t,h]),y=(0,I.useCallback)(({ref:e,...n}={})=>{let a=t||r&&i;return{ref:c(e,l),"aria-label":_(`Increase`),...v({disabled:a,...n}),onPointerDown:o(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),g())})}},[v,t,r,i,g,_]);return{getDecrementProps:(0,I.useCallback)(({ref:e,...n}={})=>{let i=t||r&&a;return{ref:c(e,u),"aria-label":_(`Decrease`),...v({disabled:i,...n}),onPointerDown:o(n.onPointerDown,e=>{e.button!==0||i||(e.preventDefault(),d())})}},[v,t,r,a,d,_]),getIncrementProps:y}}})))()}var L,gt,_t,vt,yt,bt,xt;function St(){return(St=e((()=>{L=t(),d(),lt(),be(),s(),l(),h(),se(),Te(),ht(),gt=e=>e.toString(),_t=e=>e,vt=e=>/^[Ee0-9+\-.]$/.test(e),yt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},bt=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},xt=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:i,focusInputOnChange:o=!0,format:s=gt,getAriaValueText:l,isValidCharacter:d=vt,keepWithinRange:f=!0,max:p=2**53-1,min:h=-(2**53-1),parse:g=_t,precision:v,readOnly:ee,step:b=1,value:te,onChange:ne,...re},ariaProps:ie,dataProps:oe,eventProps:se}=we(e),x=!(ee||i),S=(0,L.useRef)(null),{cast:ce,max:le,min:ue,out:de,setValue:fe,update:C,value:w,valueAsNumber:T,...pe}=ct({defaultValue:r,keepWithinRange:f,max:p,min:h,precision:v,step:b,value:te,onChange:ne}),me=(0,L.useRef)(null),he=(0,L.useMemo)(()=>{let e=l?.(w);return e??(e=w.toString(),e||void 0)},[w,l]),ge=(0,L.useCallback)(e=>e.split(``).filter(d).join(``),[d]),E=(0,L.useCallback)((e=b)=>{x&&(pe.increment(e),o&&requestAnimationFrame(()=>{S.current?.focus()}))},[x,pe,b,o]),_e=(0,L.useCallback)((e=b)=>{x&&(pe.decrement(e),o&&requestAnimationFrame(()=>{S.current?.focus()}))},[x,pe,b,o]),ve=(0,L.useCallback)(e=>{if(u(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;C(ge(g(r))),me.current={end:t,start:n}},[g,ge,C]),be=(0,L.useCallback)(e=>{if(!me.current)return;let{end:t,start:n}=me.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),xe=(0,L.useCallback)(()=>{if(!n)return;let e=w;w!==``&&(/^[eE]/.test(w.toString())?fe(``):(T<h&&(e=h),T>p&&(e=p),ce(e)))},[ce,n,p,h,fe,w,T]),Se=(0,L.useCallback)(e=>{if(u(e))return;yt(e,d)||e.preventDefault();let t=bt(e)*b;_(e,{ArrowDown:()=>_e(t),ArrowUp:()=>E(t),End:()=>C(p),Home:()=>C(h)})},[_e,E,d,p,h,b,C]),{getDecrementProps:Ce,getIncrementProps:D}=mt({"aria-disabled":y(!x),decrement:_e,disabled:i,increment:E,keepWithinRange:f,max:le,min:ue,...oe});return ae(()=>{S.current&&S.current.value!=w&&fe(ge(g(S.current.value)))},[g,ge]),ye(S.current,`wheel`,e=>{if(!S.current)return;let n=a(S.current,S.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=bt(e)*b,i=Math.sign(e.deltaY);i===-1?E(r):i===1&&_e(r)},{passive:!1}),{getDecrementProps:Ce,getIncrementProps:D,getInputProps:(0,L.useCallback)(({ref:e,...t}={})=>{let{ref:n,...r}=re;return m({...ie,...oe,type:`text`,"aria-invalid":y(ie[`aria-invalid`]??de),"aria-valuemax":p,"aria-valuemin":h,"aria-valuenow":Number.isNaN(T)?void 0:T,"aria-valuetext":he,autoComplete:`off`,autoCorrect:`off`,disabled:i,inputMode:`decimal`,max:p,min:h,pattern:`[0-9]*(.[0-9]+)?`,readOnly:ee,role:`spinbutton`,step:b,value:s(w)},r,se,t,{ref:c(e,n,S),onBlur:xe,onChange:ve,onFocus:be,onKeyDown:Se})()},[s,de,w,he,ie,oe,se,p,h,T,i,ee,b,re,Se,xe,be,ve])}}})))()}var R,Ct,wt,Tt,Et,z,Dt,Ot,kt,At;function jt(){return(jt=e((()=>{le(),d(),je(),T(),me(),Pe(),ze(),Re(),at(),St(),R=ie(),{PropsContext:Ct,usePropsContext:wt,withContext:Tt,withProvider:Et}=ce(`number-input`,it),z=Et(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Ae(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:p}=xt(u);return(0,R.jsxs)(A,{className:e,css:t,colorScheme:n,...m(l,s)(),children:[(0,R.jsx)(Dt,{...p()}),(0,R.jsx)(Ve,{clickable:!0,...a,children:(0,R.jsxs)(Ot,{...r,children:[(0,R.jsx)(kt,{...f(o)}),(0,R.jsx)(At,{...d(i)})]})})]})},`root`)(e=>{let t=Ne();return m(t,e)()}),Dt=Tt(Ie,`field`)({"data-group-propagate":``}),Ot=Tt(`div`,`control`)(),kt=Tt(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,R.jsx)(he,{}),...t})),At=Tt(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,R.jsx)(pe,{}),...t}))})))()}var B,Mt,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Nt,Pt,Ft,It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{Ze(),Ye(),i(),g(),xe(),Oe(),Ce(),He(),rt(),ge(),_e(),Pe(),ze(),Be(),Re(),Ge(),qe(),jt(),St(),B=ie(),Mt={component:z,title:`Components / NumberInput`},V=()=>(0,B.jsx)(z,{placeholder:`Basic`}),H=()=>(0,B.jsx)(Xe,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,B.jsx)(z,{size:e,variant:t,placeholder:`Size (${e})`},n)}),U=()=>(0,B.jsx)(Xe,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:r,children:(e,t,n)=>(0,B.jsx)(z,{colorScheme:t,variant:e,placeholder:v(e)},n)}),W=()=>(0,B.jsx)(z,{defaultValue:18,placeholder:`Order quantity`}),G=()=>(0,B.jsx)(z,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),K=()=>(0,B.jsx)(z,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),q=()=>(0,B.jsx)(z,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),J=()=>(0,B.jsx)(z,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),Y=()=>(0,B.jsx)(z,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),X=()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsx)(z,{variant:e,disabled:!0,placeholder:v(e)},t)}),(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsxs)(A,{variant:e,disabled:!0,children:[(0,B.jsx)(Le,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:v(e)})]},t)}),(0,B.jsx)(D,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,B.jsx)(z,{})})]}),Z=()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsx)(z,{variant:e,placeholder:v(e),readOnly:!0},t)}),(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsxs)(A,{variant:e,readOnly:!0,children:[(0,B.jsx)(Le,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:v(e)})]},t)}),(0,B.jsx)(D,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,B.jsx)(z,{})})]}),Q=()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsx)(z,{variant:e,invalid:!0,placeholder:v(e)},t)}),(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsxs)(A,{variant:e,invalid:!0,children:[(0,B.jsx)(Le,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:v(e)})]},t)}),(0,B.jsx)(D,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,B.jsx)(z,{})})]}),$=()=>(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsxs)(A,{variant:e,children:[(0,B.jsx)(Le,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:`Order quantity`})]},t)}),Nt=()=>(0,B.jsx)(j,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,B.jsxs)(A,{variant:e,children:[(0,B.jsx)(Ve,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:`Order quantity`})]},t)}),Pt=()=>(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(z,{disabled:!0,placeholder:`Default border color`}),(0,B.jsx)(z,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,B.jsxs)(A,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,B.jsx)(Ve,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:`Custom border color`})]}),(0,B.jsx)(z,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,B.jsxs)(A,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,B.jsx)(Ve,{children:(0,B.jsx)(M,{})}),(0,B.jsx)(z,{placeholder:`Custom border color`})]})]}),Ft=()=>(0,B.jsx)(z,{placeholder:`Order quantity`,decrementProps:{children:(0,B.jsx)(E,{})},incrementProps:{children:(0,B.jsx)(ve,{})}}),It=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=xt({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,B.jsxs)(Ke,{gap:`sm`,maxW:`xs`,children:[(0,B.jsx)(ke,{icon:(0,B.jsx)(ve,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,B.jsx)(Ie,{...n(),"aria-label":`Number input`}),(0,B.jsx)(ke,{icon:(0,B.jsx)(E,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Lt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=Qe();return(0,B.jsxs)(Je,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,B.jsx)(D,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,B.jsx)($e,{name:`numberInput`,control:e,render:({field:e})=>(0,B.jsx)(z,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,B.jsx)(Se,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=Qe({defaultValues:{numberInput:`5`}});return(0,B.jsxs)(Je,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,B.jsx)(D,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,B.jsx)($e,{name:`numberInput`,control:e,render:({field:e})=>(0,B.jsx)(z,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,B.jsx)(Se,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...$.parameters?.docs?.source}}},Nt.parameters={...Nt.parameters,docs:{...Nt.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Nt.parameters?.docs?.source}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Pt.parameters?.docs?.source}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...Ft.parameters?.docs?.source}}},It.parameters={...It.parameters,docs:{...It.parameters?.docs,source:{originalSource:`() => {
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
}`,...It.parameters?.docs?.source}}},Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Lt.parameters?.docs?.source}}},Rt.parameters={...Rt.parameters,docs:{...Rt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rt.parameters?.docs?.source}}}})))()}Bt();export{$ as Addon,V as Basic,Pt as BorderColor,It as CustomComponent,Ft as CustomStepper,W as DefaultValue,X as Disabled,J as DisabledClampValueOnBlur,Y as DisabledKeepWithinRange,Nt as Element,Q as Invalid,G as MinMax,q as Precision,Lt as ReactHookForm,Rt as ReactHookFormWithDefaultValue,Z as ReadOnly,H as Size,K as Step,U as Variant,zt as __namedExportsOrder,Mt as default};