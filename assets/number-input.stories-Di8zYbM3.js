import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Cn as n,Dn as r,En as i,Ut as a,_n as o,ft as s,i as c,jn as l,lt as u,mt as d,nn as f,o as p,pt as ee,st as m,tn as h,ut as g,zn as _}from"./props-DZ_NCL29.js";import{a as v,o as te}from"./event-Dwtkrk6m.js";import{i as ne,r as re}from"./i18n-provider-D2DtSsuv.js";import{n as ie,o as ae,t as oe}from"./number-BwwiSOB8.js";import{t as se}from"./jsx-runtime-BB9-612F.js";import{n as ce,r as le,t as y}from"./effect-BX-3lD32.js";import{d as ue,i as de,n as fe,r as pe}from"./create-component-Ct2AiAAx.js";import{n as me,r as b,t as x}from"./icon-7-lOAC1T.js";import{n as S,t as he}from"./createLucideIcon-CjKfYf7_.js";import{n as ge,t as _e}from"./chevron-down-icon-DR7YqsYz.js";import{n as ve,t as ye}from"./chevron-up-icon-dAb-shsa.js";import{n as be,t as xe}from"./minus-icon-DjXrCVvq.js";import{n as Se,t as Ce}from"./plus-icon-BUoxUQpL.js";import{n as we,t as Te}from"./use-event-listener-BcCUbvdr.js";import{r as Ee,t as De}from"./button-BfYhzfkR.js";import{c as Oe,r as ke,s as Ae,t as je}from"./use-field-props-CRSAqPOE.js";import{n as Me,t as Ne}from"./button.style-DzMqCeMK.js";import{r as Pe,t as Fe}from"./icon-button-Bu3CYoaZ.js";import{i as Ie,r as Le}from"./group-Ct7LVpMl.js";import{a as C,c as Re,i as ze,l as w,r as Be,s as Ve,t as He}from"./input-BecwRudO.js";import{a as Ue,i as We,n as Ge,o as Ke,r as qe,t as T}from"./input-group-CvME34aS.js";import{n as Je,t as E}from"./for-COoaBOxp.js";import{n as Ye,t as Xe}from"./use-interval-Blph5enc.js";import{n as Ze,t as Qe}from"./h-stack-DLrlCWvV.js";import{n as $e,t as et}from"./v-stack-zknlTZhK.js";import{n as tt,t as nt}from"./props-table-CU-k6wL6.js";import{n as rt,r as it,t as at}from"./index.esm-xmO_zH4i.js";var ot,st;function ct(){return(ct=e((()=>{S(),ot={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},ot.node,st=he(ot)})))()}var D;function lt(){return(lt=e((()=>{ct(),b(),D=me(x)({as:st})})))()}var ut;function dt(){return(dt=e((()=>{ue(),Me(),Re(),ut=de({base:{button:{...Ne.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:w.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:w.variants?.filled},flushed:{field:w.variants?.flushed,root:Ve(`& > input`)},outline:{field:w.variants?.outline},plain:{field:w.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:w.sizes?.xs.fontSize},field:w.sizes?.xs,root:C(w.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:w.sizes?.sm.fontSize},field:w.sizes?.sm,root:C(w.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:w.sizes?.md.fontSize},field:w.sizes?.md,root:C(w.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:w.sizes?.lg.fontSize},field:w.sizes?.lg,root:C(w.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:w.sizes?.xl.fontSize},field:w.sizes?.xl,root:C(w.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:w.sizes?.[`2xl`].fontSize},field:w.sizes?.[`2xl`],root:C(w.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var O,k,ft,pt,mt;function ht(){return(ht=e((()=>{O=t(),m(),k=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),ft=(e,t)=>Math.max(ie(t),ie(e)),pt=(e,t,n)=>(e=k(e),Number.isNaN(e)?void 0:ae(e,n??ft(e,t))),mt=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=g(i.onChange),[o,s]=(0,O.useState)(()=>i.defaultValue==null?``:pt(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=ft(k(l),r),d=i.precision??u,f=(0,O.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),k(e)))},[a,c,l]),p=(0,O.useCallback)(r=>{let i=r;return e&&(i=oe(i,n,t)),ae(i,d)},[d,e,t,n]),ee=(0,O.useCallback)((e=r)=>{let t;t=l===``?k(e):k(l)+e,t=p(t),f(t)},[p,r,f,l]),m=(0,O.useCallback)((e=r)=>{let t;t=l===``?k(-e):k(l)-e,t=p(t),f(t)},[p,r,f,l]),h=(0,O.useCallback)(()=>{let e;e=i.defaultValue==null?``:pt(i.defaultValue,r,i.precision)??n,f(e)},[i.defaultValue,i.precision,r,f,n]),_=(0,O.useCallback)(e=>{let t=pt(e,r,d)??n;f(t)},[d,r,f,n]),v=k(l);return{cast:_,clamp:p,decrement:m,increment:ee,max:v===t,min:v===n,out:v<n||t<v,precision:d,reset:h,setValue:s,step:r,update:f,value:l,valueAsNumber:v}}})))()}var A,gt,_t,vt;function yt(){return(yt=e((()=>{A=t(),Xe(),y(),gt=50,_t=300,vt=({decrement:e,increment:t})=>{let[n,r]=(0,A.useState)(!1),[i,a]=(0,A.useState)(null),[o,s]=(0,A.useState)(!0),c=(0,A.useRef)(null);Ye(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?gt:null);let l=(0,A.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},_t)},[t,o]),u=(0,A.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},_t)},[e,o]),d=(0,A.useCallback)(()=>clearTimeout(c.current),[]),f=(0,A.useCallback)(()=>{s(!0),r(!1),d()},[d]);return le(d),{down:u,spinning:n,stop:f,up:l}}})))()}var j,bt;function xt(){return(xt=e((()=>{j=t(),c(),re(),r(),m(),s(),yt(),bt=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:a,min:o,...s})=>{let c=(0,j.useRef)(null),l=(0,j.useRef)(null),{down:f,spinning:ee,stop:m,up:h}=vt({decrement:e,increment:n}),{t:g}=ne(`numberInput`);d(c,[`disabled`],ee,m),d(l,[`disabled`],ee,m);let _=(0,j.useCallback)((e={})=>p({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:m,onPointerUp:m})(),[s,t,m]),v=(0,j.useCallback)(({ref:e,...n}={})=>{let o=t||r&&a;return{ref:u(e,c),"aria-label":g(`Increase`),..._({disabled:o,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||o||(e.preventDefault(),h())})}},[_,t,r,a,h,g]);return{getDecrementProps:(0,j.useCallback)(({ref:e,...n}={})=>{let a=t||r&&o;return{ref:u(e,l),"aria-label":g(`Decrease`),..._({disabled:a,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),f())})}},[_,t,r,o,f,g]),getIncrementProps:v}}})))()}var M,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=e((()=>{M=t(),c(),ht(),Te(),h(),v(),s(),y(),je(),xt(),St=e=>e.toString(),Ct=e=>e,wt=e=>/^[Ee0-9+\-.]$/.test(e),Tt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},Et=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},Dt=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:i,focusInputOnChange:o=!0,format:s=St,getAriaValueText:c,isValidCharacter:l=wt,keepWithinRange:u=!0,max:d=2**53-1,min:m=-(2**53-1),parse:h=Ct,precision:g,readOnly:_,step:v=1,value:ne,onChange:re,...ie},ariaProps:ae,dataProps:oe,eventProps:se}=ke(e),le=!(_||i),y=(0,M.useRef)(null),{cast:ue,max:de,min:fe,out:pe,setValue:me,update:b,value:x,valueAsNumber:S,...he}=mt({defaultValue:r,keepWithinRange:u,max:d,min:m,precision:g,step:v,value:ne,onChange:re}),ge=(0,M.useRef)(null),_e=(0,M.useMemo)(()=>{let e=c?.(x);return e??(e=x.toString(),e||void 0)},[x,c]),ve=(0,M.useCallback)(e=>e.split(``).filter(l).join(``),[l]),ye=(0,M.useCallback)((e=v)=>{le&&(he.increment(e),o&&requestAnimationFrame(()=>{y.current?.focus()}))},[le,he,v,o]),be=(0,M.useCallback)((e=v)=>{le&&(he.decrement(e),o&&requestAnimationFrame(()=>{y.current?.focus()}))},[le,he,v,o]),xe=(0,M.useCallback)(e=>{if(te(e.nativeEvent))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;b(ve(h(r))),ge.current={end:t,start:n}},[h,ve,b]),Se=(0,M.useCallback)(e=>{if(!ge.current)return;let{end:t,start:n}=ge.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Ce=(0,M.useCallback)(()=>{if(!n)return;let e=x;x!==``&&(/^[eE]/.test(x.toString())?me(``):(S<m&&(e=m),S>d&&(e=d),ue(e)))},[ue,n,d,m,me,x,S]),Te=(0,M.useCallback)(e=>{if(te(e.nativeEvent))return;Tt(e,l)||e.preventDefault();let t=Et(e)*v;ee(e,{ArrowDown:()=>be(t),ArrowUp:()=>ye(t),End:()=>b(d),Home:()=>b(m)})},[be,ye,l,d,m,v,b]),{getDecrementProps:Ee,getIncrementProps:De}=bt({"aria-disabled":a(!le),decrement:be,disabled:i,increment:ye,keepWithinRange:u,max:de,min:fe,...oe});return ce(()=>{y.current&&y.current.value!=x&&me(ve(h(y.current.value)))},[h,ve]),we(y.current,`wheel`,e=>{if(!y.current)return;let n=f(y.current,y.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=Et(e)*v,i=Math.sign(e.deltaY);i===-1?ye(r):i===1&&be(r)},{passive:!1}),{getDecrementProps:Ee,getIncrementProps:De,getInputProps:(0,M.useCallback)((e={})=>p(ae,oe,{type:`text`,"aria-invalid":a(ae[`aria-invalid`]??pe),"aria-valuemax":d,"aria-valuemin":m,"aria-valuenow":Number.isNaN(S)?void 0:S,"aria-valuetext":_e,autoComplete:`off`,autoCorrect:`off`,disabled:i,inputMode:`decimal`,max:d,min:m,pattern:`[0-9]*(.[0-9]+)?`,readOnly:_,role:`spinbutton`,step:v,value:s(x)},ie,se,e,{ref:y,onBlur:Ce,onChange:xe,onFocus:Se,onKeyDown:Te})(),[s,pe,x,_e,ae,oe,se,d,m,S,i,_,v,ie,Te,Ce,Se,xe])}}})))()}var N,kt,At,jt,Mt,P,Nt,Pt,Ft,It;function Lt(){return(Lt=e((()=>{pe(),c(),Le(),ge(),ve(),Be(),Ge(),We(),dt(),Ot(),N=se(),{PropsContext:kt,usePropsContext:At,withContext:jt,withProvider:Mt}=fe(`number-input`,ut),P=Mt(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Ie(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:ee}=Dt(u);return(0,N.jsxs)(T,{className:e,css:t,colorScheme:n,...p(l,s)(),children:[(0,N.jsx)(Nt,{...ee()}),(0,N.jsx)(qe,{clickable:!0,...a,children:(0,N.jsxs)(Pt,{...r,children:[(0,N.jsx)(Ft,{...f(o)}),(0,N.jsx)(It,{...d(i)})]})})]})},`root`)(e=>{let t=ze();return p(t,e)()}),Nt=jt(He,`field`)({"data-group-propagate":``}),Pt=jt(`div`,`control`)(),Ft=jt(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,N.jsx)(ye,{}),...t})),It=jt(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,N.jsx)(_e,{}),...t}))})))()}var F,Rt,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,zt,Bt;function Vt(){return(Vt=e((()=>{rt(),tt(),_(),o(),Ee(),Pe(),Oe(),Je(),lt(),be(),Se(),Be(),Ge(),Ke(),We(),Ze(),$e(),Lt(),Ot(),F=se(),Rt={component:P,title:`Components / NumberInput`},I=()=>(0,F.jsx)(P,{placeholder:`Order quantity`}),L=()=>(0,F.jsx)(nt,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,F.jsx)(P,{size:e,variant:t,placeholder:`Size (${e})`},n)}),R=()=>(0,F.jsx)(nt,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:l,children:(e,t,r)=>(0,F.jsx)(P,{colorScheme:t,variant:e,placeholder:n(e)},r)}),z=()=>(0,F.jsx)(P,{defaultValue:18,placeholder:`Order quantity`}),B=()=>(0,F.jsx)(P,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),V=()=>(0,F.jsx)(P,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),H=()=>(0,F.jsx)(P,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),U=()=>(0,F.jsx)(P,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),W=()=>(0,F.jsx)(P,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),G=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsx)(P,{variant:e,disabled:!0,placeholder:n(e)},t)}),(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsxs)(T,{variant:e,disabled:!0,children:[(0,F.jsx)(Ue,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:n(e)})]},t)}),(0,F.jsx)(Ae,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,F.jsx)(P,{})})]}),K=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsx)(P,{variant:e,placeholder:n(e),readOnly:!0},t)}),(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsxs)(T,{variant:e,readOnly:!0,children:[(0,F.jsx)(Ue,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:n(e)})]},t)}),(0,F.jsx)(Ae,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,F.jsx)(P,{})})]}),q=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsx)(P,{variant:e,invalid:!0,placeholder:n(e)},t)}),(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsxs)(T,{variant:e,invalid:!0,children:[(0,F.jsx)(Ue,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:n(e)})]},t)}),(0,F.jsx)(Ae,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,F.jsx)(P,{})})]}),J=()=>(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsxs)(T,{variant:e,children:[(0,F.jsx)(Ue,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:`Order quantity`})]},t)}),Y=()=>(0,F.jsx)(E,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,F.jsxs)(T,{variant:e,children:[(0,F.jsx)(qe,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:`Order quantity`})]},t)}),X=()=>(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(P,{disabled:!0,placeholder:`Default border color`}),(0,F.jsx)(P,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,F.jsxs)(T,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,F.jsx)(qe,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:`Custom border color`})]}),(0,F.jsx)(P,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,F.jsxs)(T,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,F.jsx)(qe,{children:(0,F.jsx)(D,{})}),(0,F.jsx)(P,{placeholder:`Custom border color`})]})]}),Z=()=>(0,F.jsx)(P,{placeholder:`Order quantity`,decrementProps:{children:(0,F.jsx)(xe,{})},incrementProps:{children:(0,F.jsx)(Ce,{})}}),Q=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=Dt({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,F.jsxs)(Qe,{gap:`sm`,maxW:`xs`,children:[(0,F.jsx)(Fe,{icon:(0,F.jsx)(Ce,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,F.jsx)(He,{...n(),"aria-label":`Number input`}),(0,F.jsx)(Fe,{icon:(0,F.jsx)(xe,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=it();return(0,F.jsxs)(et,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,F.jsx)(Ae,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,F.jsx)(at,{name:`numberInput`,control:e,render:({field:e})=>(0,F.jsx)(P,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,F.jsx)(De,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=it({defaultValues:{numberInput:`5`}});return(0,F.jsxs)(et,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,F.jsx)(Ae,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,F.jsx)(at,{name:`numberInput`,control:e,render:({field:e})=>(0,F.jsx)(P,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,F.jsx)(De,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Bt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" />;
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...zt.parameters?.docs?.source}}}})))()}Vt();export{J as Addon,I as Basic,X as BorderColor,Q as CustomComponent,Z as CustomStepper,z as DefaultValue,G as Disabled,U as DisabledClampValueOnBlur,W as DisabledKeepWithinRange,Y as Element,q as Invalid,B as MinMax,H as Precision,$ as ReactHookForm,zt as ReactHookFormWithDefaultValue,K as ReadOnly,L as Size,V as Step,R as Variant,Bt as __namedExportsOrder,Rt as default};