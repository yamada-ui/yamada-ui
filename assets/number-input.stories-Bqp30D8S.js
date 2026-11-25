import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Bn as n,Dn as r,Mn as i,On as a,Wt as o,ct as s,dt as c,ht as l,i as u,mt as d,nn as f,o as p,pt as m,rn as ee,ut as h,vn as g,wn as _}from"./props-D6D-sCZr.js";import{a as v,o as te}from"./event-CfcwCipa.js";import{i as ne,r as re}from"./i18n-provider-aQr6ZdRC.js";import{n as ie,o as ae,t as oe}from"./number-BwwiSOB8.js";import{t as se}from"./jsx-runtime-BB9-612F.js";import{n as ce,r as y,t as b}from"./effect-BX-3lD32.js";import{d as le,i as ue,n as de,r as fe}from"./create-component-DPzORBjX.js";import{n as pe,r as x,t as S}from"./icon-DBw3g3ZB.js";import{n as C,t as me}from"./createLucideIcon-CjKfYf7_.js";import{n as he,t as ge}from"./chevron-down-icon-DwLzhcl-.js";import{n as _e,t as ve}from"./chevron-up-icon-D-XejTHA.js";import{n as ye,t as be}from"./minus-icon-0L8nSEJh.js";import{n as xe,t as Se}from"./plus-icon-E6lXGbDi.js";import{n as Ce,t as we}from"./use-event-listener-Y8mfztTh.js";import{r as Te,t as Ee}from"./button-DQXDEnDl.js";import{c as De,r as Oe,s as ke,t as Ae}from"./use-field-props-CdmABtrw.js";import{n as je,t as Me}from"./button.style-C4LD86B0.js";import{r as Ne,t as Pe}from"./icon-button-CRVbetoL.js";import{i as Fe,r as Ie}from"./group-BHcfs4zh.js";import{a as w,c as Le,i as Re,l as T,r as ze,s as Be,t as Ve}from"./input-Dng1Ex6a.js";import{a as He,i as Ue,n as We,o as Ge,r as Ke,t as E}from"./input-group-BcZFDzGP.js";import{n as qe,t as D}from"./for-BuZ7k33D.js";import{n as Je,t as Ye}from"./use-interval-ilb3hAlU.js";import{n as Xe,t as Ze}from"./h-stack-DVpD6LTE.js";import{n as Qe,t as $e}from"./v-stack-CHra5wFX.js";import{n as et,t as tt}from"./props-table-C6HdG2Z0.js";import{n as nt,r as rt,t as it}from"./index.esm-xmO_zH4i.js";var at,ot;function st(){return(st=e((()=>{C(),at={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},at.node,ot=me(at)})))()}var O;function ct(){return(ct=e((()=>{st(),x(),O=pe(S)({as:ot})})))()}var lt;function ut(){return(ut=e((()=>{le(),je(),Le(),lt=ue({base:{button:{...Me.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:T.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:T.variants?.filled},flushed:{field:T.variants?.flushed,root:Be(`& > input`)},outline:{field:T.variants?.outline},plain:{field:T.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:T.sizes?.xs.fontSize},field:T.sizes?.xs,root:w(T.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:T.sizes?.sm.fontSize},field:T.sizes?.sm,root:w(T.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:T.sizes?.md.fontSize},field:T.sizes?.md,root:w(T.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:T.sizes?.lg.fontSize},field:T.sizes?.lg,root:w(T.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:T.sizes?.xl.fontSize},field:T.sizes?.xl,root:w(T.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:T.sizes?.[`2xl`].fontSize},field:T.sizes?.[`2xl`],root:w(T.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var k,A,dt,ft,pt;function mt(){return(mt=e((()=>{k=t(),s(),A=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),dt=(e,t)=>Math.max(ie(t),ie(e)),ft=(e,t,n)=>(e=A(e),Number.isNaN(e)?void 0:ae(e,n??dt(e,t))),pt=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=c(i.onChange),[o,s]=(0,k.useState)(()=>i.defaultValue==null?``:ft(i.defaultValue,r,i.precision)??``),l=i.value!==void 0,u=l?i.value:o,d=dt(A(u),r),f=i.precision??d,p=(0,k.useCallback)(e=>{e!==u&&(l||s(e.toString()),a(e.toString(),A(e)))},[a,l,u]),m=(0,k.useCallback)(r=>{let i=r;return e&&(i=oe(i,n,t)),ae(i,f)},[f,e,t,n]),ee=(0,k.useCallback)((e=r)=>{let t;t=u===``?A(e):A(u)+e,t=m(t),p(t)},[m,r,p,u]),h=(0,k.useCallback)((e=r)=>{let t;t=u===``?A(-e):A(u)-e,t=m(t),p(t)},[m,r,p,u]),g=(0,k.useCallback)(()=>{let e;e=i.defaultValue==null?``:ft(i.defaultValue,r,i.precision)??n,p(e)},[i.defaultValue,i.precision,r,p,n]),_=(0,k.useCallback)(e=>{let t=ft(e,r,f)??n;p(t)},[f,r,p,n]),v=A(u);return{cast:_,clamp:m,decrement:h,increment:ee,max:v===t,min:v===n,out:v<n||t<v,precision:f,reset:g,setValue:s,step:r,update:p,value:u,valueAsNumber:v}}})))()}var j,ht,gt,_t;function vt(){return(vt=e((()=>{j=t(),Ye(),b(),ht=50,gt=300,_t=({decrement:e,increment:t})=>{let[n,r]=(0,j.useState)(!1),[i,a]=(0,j.useState)(null),[o,s]=(0,j.useState)(!0),c=(0,j.useRef)(null);Je(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?ht:null);let l=(0,j.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},gt)},[t,o]),u=(0,j.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},gt)},[e,o]),d=(0,j.useCallback)(()=>clearTimeout(c.current),[]),f=(0,j.useCallback)(()=>{s(!0),r(!1),d()},[d]);return y(d),{down:u,spinning:n,stop:f,up:l}}})))()}var M,yt;function bt(){return(bt=e((()=>{M=t(),u(),re(),a(),s(),m(),vt(),yt=({decrement:e,disabled:t,increment:n,keepWithinRange:i,max:a,min:o,...s})=>{let c=(0,M.useRef)(null),u=(0,M.useRef)(null),{down:d,spinning:f,stop:m,up:ee}=_t({decrement:e,increment:n}),{t:g}=ne(`numberInput`);l(c,[`disabled`],f,m),l(u,[`disabled`],f,m);let _=(0,M.useCallback)((e={})=>p({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:m,onPointerUp:m})(),[s,t,m]),v=(0,M.useCallback)(({ref:e,...n}={})=>{let o=t||i&&a;return{ref:h(e,c),"aria-label":g(`Increase`),..._({disabled:o,...n}),onPointerDown:r(n.onPointerDown,e=>{e.button!==0||o||(e.preventDefault(),ee())})}},[_,t,i,a,ee,g]);return{getDecrementProps:(0,M.useCallback)(({ref:e,...n}={})=>{let a=t||i&&o;return{ref:h(e,u),"aria-label":g(`Decrease`),..._({disabled:a,...n}),onPointerDown:r(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),d())})}},[_,t,i,o,d,g]),getIncrementProps:v}}})))()}var N,xt,St,Ct,wt,Tt,Et;function Dt(){return(Dt=e((()=>{N=t(),u(),mt(),we(),f(),v(),m(),b(),Ae(),bt(),xt=e=>e.toString(),St=e=>e,Ct=e=>/^[Ee0-9+\-.]$/.test(e),wt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},Tt=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},Et=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:i,focusInputOnChange:a=!0,format:s=xt,getAriaValueText:c,isValidCharacter:l=Ct,keepWithinRange:u=!0,max:f=2**53-1,min:m=-(2**53-1),parse:h=St,precision:g,readOnly:_,step:v=1,value:ne,onChange:re,...ie},ariaProps:ae,dataProps:oe,eventProps:se}=Oe(e),y=!(_||i),b=(0,N.useRef)(null),{cast:le,max:ue,min:de,out:fe,setValue:pe,update:x,value:S,valueAsNumber:C,...me}=pt({defaultValue:r,keepWithinRange:u,max:f,min:m,precision:g,step:v,value:ne,onChange:re}),he=(0,N.useRef)(null),ge=(0,N.useMemo)(()=>{let e=c?.(S);return e??(e=S.toString(),e||void 0)},[S,c]),_e=(0,N.useCallback)(e=>e.split(``).filter(l).join(``),[l]),ve=(0,N.useCallback)((e=v)=>{y&&(me.increment(e),a&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,me,v,a]),ye=(0,N.useCallback)((e=v)=>{y&&(me.decrement(e),a&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,me,v,a]),be=(0,N.useCallback)(e=>{if(te(e.nativeEvent))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;x(_e(h(r))),he.current={end:t,start:n}},[h,_e,x]),xe=(0,N.useCallback)(e=>{if(!he.current)return;let{end:t,start:n}=he.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Se=(0,N.useCallback)(()=>{if(!n)return;let e=S;S!==``&&(/^[eE]/.test(S.toString())?pe(``):(C<m&&(e=m),C>f&&(e=f),le(e)))},[le,n,f,m,pe,S,C]),we=(0,N.useCallback)(e=>{if(te(e.nativeEvent))return;wt(e,l)||e.preventDefault();let t=Tt(e)*v;d(e,{ArrowDown:()=>ye(t),ArrowUp:()=>ve(t),End:()=>x(f),Home:()=>x(m)})},[ye,ve,l,f,m,v,x]),{getDecrementProps:Te,getIncrementProps:Ee}=yt({"aria-disabled":o(!y),decrement:ye,disabled:i,increment:ve,keepWithinRange:u,max:ue,min:de,...oe});return ce(()=>{b.current&&b.current.value!=S&&pe(_e(h(b.current.value)))},[h,_e]),Ce(b.current,`wheel`,e=>{if(!b.current)return;let n=ee(b.current,b.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=Tt(e)*v,i=Math.sign(e.deltaY);i===-1?ve(r):i===1&&ye(r)},{passive:!1}),{getDecrementProps:Te,getIncrementProps:Ee,getInputProps:(0,N.useCallback)((e={})=>p(ae,oe,{type:`text`,"aria-invalid":o(ae[`aria-invalid`]??fe),"aria-valuemax":f,"aria-valuemin":m,"aria-valuenow":Number.isNaN(C)?void 0:C,"aria-valuetext":ge,autoComplete:`off`,autoCorrect:`off`,disabled:i,inputMode:`decimal`,max:f,min:m,pattern:`[0-9]*(.[0-9]+)?`,readOnly:_,role:`spinbutton`,step:v,value:s(S)},ie,se,e,{ref:b,onBlur:Se,onChange:be,onFocus:xe,onKeyDown:we})(),[s,fe,S,ge,ae,oe,se,f,m,C,i,_,v,ie,we,Se,xe,be])}}})))()}var P,Ot,kt,At,jt,F,Mt,Nt,Pt,Ft;function It(){return(It=e((()=>{fe(),u(),Ie(),he(),_e(),ze(),We(),Ue(),ut(),Dt(),P=se(),{PropsContext:Ot,usePropsContext:kt,withContext:At,withProvider:jt}=de(`number-input`,lt),F=jt(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Fe(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:m}=Et(u);return(0,P.jsxs)(E,{className:e,css:t,colorScheme:n,...p(l,s)(),children:[(0,P.jsx)(Mt,{...m()}),(0,P.jsx)(Ke,{clickable:!0,...a,children:(0,P.jsxs)(Nt,{...r,children:[(0,P.jsx)(Pt,{...f(o)}),(0,P.jsx)(Ft,{...d(i)})]})})]})},`root`)(e=>{let t=Re();return p(t,e)()}),Mt=At(Ve,`field`)({"data-group-propagate":``}),Nt=At(`div`,`control`)(),Pt=At(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,P.jsx)(ve,{}),...t})),Ft=At(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,P.jsx)(ge,{}),...t}))})))()}var I,Lt,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Rt,zt,Bt;function Vt(){return(Vt=e((()=>{nt(),et(),n(),g(),Te(),Ne(),De(),qe(),ct(),ye(),xe(),ze(),We(),Ge(),Ue(),Xe(),Qe(),It(),Dt(),I=se(),Lt={component:F,title:`Components / NumberInput`},L=()=>(0,I.jsx)(F,{placeholder:`Order quantity`}),R=()=>(0,I.jsx)(tt,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,I.jsx)(F,{size:e,variant:t,placeholder:`Size (${e})`},n)}),z=()=>(0,I.jsx)(tt,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,I.jsx)(F,{colorScheme:t,variant:e,placeholder:_(e)},n)}),B=()=>(0,I.jsx)(F,{defaultValue:18,placeholder:`Order quantity`}),V=()=>(0,I.jsx)(F,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),H=()=>(0,I.jsx)(F,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),U=()=>(0,I.jsx)(F,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),W=()=>(0,I.jsx)(F,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),G=()=>(0,I.jsx)(F,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),K=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(F,{variant:e,disabled:!0,placeholder:_(e)},t)}),(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(E,{variant:e,disabled:!0,children:[(0,I.jsx)(He,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:_(e)})]},t)}),(0,I.jsx)(ke,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,I.jsx)(F,{})})]}),q=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(F,{variant:e,placeholder:_(e),readOnly:!0},t)}),(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(E,{variant:e,readOnly:!0,children:[(0,I.jsx)(He,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:_(e)})]},t)}),(0,I.jsx)(ke,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,I.jsx)(F,{})})]}),J=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsx)(F,{variant:e,invalid:!0,placeholder:_(e)},t)}),(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(E,{variant:e,invalid:!0,children:[(0,I.jsx)(He,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:_(e)})]},t)}),(0,I.jsx)(ke,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,I.jsx)(F,{})})]}),Y=()=>(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(E,{variant:e,children:[(0,I.jsx)(He,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:`Order quantity`})]},t)}),X=()=>(0,I.jsx)(D,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,I.jsxs)(E,{variant:e,children:[(0,I.jsx)(Ke,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:`Order quantity`})]},t)}),Z=()=>(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(F,{disabled:!0,placeholder:`Default border color`}),(0,I.jsx)(F,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,I.jsxs)(E,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,I.jsx)(Ke,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:`Custom border color`})]}),(0,I.jsx)(F,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,I.jsxs)(E,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,I.jsx)(Ke,{children:(0,I.jsx)(O,{})}),(0,I.jsx)(F,{placeholder:`Custom border color`})]})]}),Q=()=>(0,I.jsx)(F,{placeholder:`Order quantity`,decrementProps:{children:(0,I.jsx)(be,{})},incrementProps:{children:(0,I.jsx)(Se,{})}}),$=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=Et({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,I.jsxs)(Ze,{gap:`sm`,maxW:`xs`,children:[(0,I.jsx)(Pe,{icon:(0,I.jsx)(Se,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,I.jsx)(Ve,{...n(),"aria-label":`Number input`}),(0,I.jsx)(Pe,{icon:(0,I.jsx)(be,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt();return(0,I.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,I.jsx)(ke,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,I.jsx)(it,{name:`numberInput`,control:e,render:({field:e})=>(0,I.jsx)(F,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,I.jsx)(Ee,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=rt({defaultValues:{numberInput:`5`}});return(0,I.jsxs)($e,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,I.jsx)(ke,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,I.jsx)(it,{name:`numberInput`,control:e,render:({field:e})=>(0,I.jsx)(F,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,I.jsx)(Ee,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Bt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" />;
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},Rt.parameters={...Rt.parameters,docs:{...Rt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rt.parameters?.docs?.source}}},zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`() => {
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
}`,...zt.parameters?.docs?.source}}}})))()}Vt();export{Y as Addon,L as Basic,Z as BorderColor,$ as CustomComponent,Q as CustomStepper,B as DefaultValue,K as Disabled,W as DisabledClampValueOnBlur,G as DisabledKeepWithinRange,X as Element,J as Invalid,V as MinMax,U as Precision,Rt as ReactHookForm,zt as ReactHookFormWithDefaultValue,q as ReadOnly,R as Size,H as Step,z as Variant,Bt as __namedExportsOrder,Lt as default};