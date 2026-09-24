import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Lt as n,Nn as r,Tn as i,Xt as a,Yt as o,_n as s,bn as c,dn as l,dt as u,ft as d,i as f,it as p,lt as m,o as ee,ot as te,st as h,ut as g,xn as _}from"./props-Bz1FL_va.js";import{i as ne,r as v}from"./i18n-provider-Cc12Ys91.js";import{n as re,o as ie,t as ae}from"./number-u-voAp4w.js";import{t as oe}from"./jsx-runtime-BdxMnOeJ.js";import{n as se,r as ce,t as le}from"./effect-CjnfyxRk.js";import{d as y,i as b,n as ue,r as de}from"./create-component-DtmnY_ce.js";import{n as fe,r as pe,t as me}from"./icon-vei_-6m2.js";import{n as x,t as S}from"./createLucideIcon-CKl6Xqme.js";import{n as C,t as he}from"./chevron-down-icon-BoO9S_Pl.js";import{n as ge,t as _e}from"./chevron-up-icon-CvHC2u3O.js";import{n as ve,t as w}from"./minus-icon-CUXRdnUa.js";import{n as ye,t as be}from"./plus-icon-rBaNJSiU.js";import{n as xe,t as Se}from"./use-event-listener-DiKzjyxm.js";import{r as Ce,t as we}from"./button-CFBNyQlD.js";import{c as Te,r as Ee,s as T,t as De}from"./use-field-props-DklfXwrD.js";import{n as Oe,t as ke}from"./button.style-D5ukyhjN.js";import{r as Ae,t as je}from"./icon-button-BPVZ8V7k.js";import{i as Me,r as Ne}from"./group-DDgp5sVV.js";import{a as E,c as Pe,i as Fe,l as D,r as Ie,s as Le,t as Re}from"./input-Dl7woXLW.js";import{a as ze,i as Be,n as Ve,o as He,r as Ue,t as O}from"./input-group-U0aj6U1q.js";import{n as We,t as k}from"./for-BIl9Q3L3.js";import{n as Ge,t as Ke}from"./use-interval-D1-cuyDe.js";import{n as qe,t as Je}from"./h-stack-CueUnXBe.js";import{n as Ye,t as Xe}from"./v-stack-DgxvBjIl.js";import{n as Ze,t as Qe}from"./props-table-CLkISL0o.js";import{n as $e,r as et,t as tt}from"./index.esm-CWrUCFh-.js";var nt,rt;function it(){return(it=e((()=>{x(),nt={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},nt.node,rt=S(nt)})))()}var A;function at(){return(at=e((()=>{it(),pe(),A=fe(me)({as:rt})})))()}var ot;function st(){return(st=e((()=>{y(),Oe(),Pe(),ot=b({base:{button:{...ke.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:D.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:D.variants?.filled},flushed:{field:D.variants?.flushed,root:Le(`& > input`)},outline:{field:D.variants?.outline},plain:{field:D.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.xs.fontSize},field:D.sizes?.xs,root:E(D.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.sm.fontSize},field:D.sizes?.sm,root:E(D.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.md.fontSize},field:D.sizes?.md,root:E(D.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:D.sizes?.lg.fontSize},field:D.sizes?.lg,root:E(D.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:D.sizes?.xl.fontSize},field:D.sizes?.xl,root:E(D.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:D.sizes?.[`2xl`].fontSize},field:D.sizes?.[`2xl`],root:E(D.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var j,M,ct,lt,ut;function dt(){return(dt=e((()=>{j=t(),p(),M=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),ct=(e,t)=>Math.max(re(t),re(e)),lt=(e,t,n)=>(e=M(e),Number.isNaN(e)?void 0:ie(e,n??ct(e,t))),ut=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=h(i.onChange),[o,s]=(0,j.useState)(()=>i.defaultValue==null?``:lt(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=ct(M(l),r),d=i.precision??u,f=(0,j.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),M(e)))},[a,c,l]),p=(0,j.useCallback)(r=>{let i=r;return e&&(i=ae(i,n,t)),ie(i,d)},[d,e,t,n]),m=(0,j.useCallback)((e=r)=>{let t;t=l===``?M(e):M(l)+e,t=p(t),f(t)},[p,r,f,l]),ee=(0,j.useCallback)((e=r)=>{let t;t=l===``?M(-e):M(l)-e,t=p(t),f(t)},[p,r,f,l]),te=(0,j.useCallback)(()=>{let e;e=i.defaultValue==null?``:lt(i.defaultValue,r,i.precision)??n,f(e)},[i.defaultValue,i.precision,r,f,n]),g=(0,j.useCallback)(e=>{let t=lt(e,r,d)??n;f(t)},[d,r,f,n]),_=M(l);return{cast:g,clamp:p,decrement:ee,increment:m,max:_===t,min:_===n,out:_<n||t<_,precision:d,reset:te,setValue:s,step:r,update:f,value:l,valueAsNumber:_}}})))()}var N,ft,pt,mt;function ht(){return(ht=e((()=>{N=t(),Ke(),le(),ft=50,pt=300,mt=({decrement:e,increment:t})=>{let[n,r]=(0,N.useState)(!1),[i,a]=(0,N.useState)(null),[o,s]=(0,N.useState)(!0),c=(0,N.useRef)(null);Ge(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?ft:null);let l=(0,N.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},pt)},[t,o]),u=(0,N.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},pt)},[e,o]),d=(0,N.useCallback)(()=>clearTimeout(c.current),[]),f=(0,N.useCallback)(()=>{s(!0),r(!1),d()},[d]);return ce(d),{down:u,spinning:n,stop:f,up:l}}})))()}var P,gt;function _t(){return(_t=e((()=>{P=t(),f(),v(),_(),p(),m(),ht(),gt=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:i,min:a,...o})=>{let s=(0,P.useRef)(null),l=(0,P.useRef)(null),{down:u,spinning:f,stop:p,up:m}=mt({decrement:e,increment:n}),{t:h}=ne(`numberInput`);d(s,[`disabled`],f,p),d(l,[`disabled`],f,p);let g=(0,P.useCallback)((e={})=>ee({type:`button`,disabled:t,tabIndex:-1},o,e,{onPointerLeave:p,onPointerUp:p})(),[o,t,p]),_=(0,P.useCallback)(({ref:e,...n}={})=>{let a=t||r&&i;return{ref:te(e,s),"aria-label":h(`Increase`),...g({disabled:a,...n}),onPointerDown:c(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),m())})}},[g,t,r,i,m,h]);return{getDecrementProps:(0,P.useCallback)(({ref:e,...n}={})=>{let i=t||r&&a;return{ref:te(e,l),"aria-label":h(`Decrease`),...g({disabled:i,...n}),onPointerDown:c(n.onPointerDown,e=>{e.button!==0||i||(e.preventDefault(),u())})}},[g,t,r,a,u,h]),getIncrementProps:_}}})))()}var F,vt,yt,bt,xt,St,Ct;function wt(){return(wt=e((()=>{F=t(),f(),dt(),Se(),o(),m(),p(),le(),De(),_t(),vt=e=>e.toString(),yt=e=>e,bt=e=>/^[Ee0-9+\-.]$/.test(e),xt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},St=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},Ct=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:r=!0,defaultValue:i,disabled:o,focusInputOnChange:s=!0,format:c=vt,getAriaValueText:l,isValidCharacter:d=bt,keepWithinRange:f=!0,max:p=2**53-1,min:m=-(2**53-1),parse:h=yt,precision:_,readOnly:ne,step:v=1,value:re,onChange:ie,...ae},ariaProps:oe,dataProps:ce,eventProps:le}=Ee(e),y=!(ne||o),b=(0,F.useRef)(null),{cast:ue,max:de,min:fe,out:pe,setValue:me,update:x,value:S,valueAsNumber:C,...he}=ut({defaultValue:i,keepWithinRange:f,max:p,min:m,precision:_,step:v,value:re,onChange:ie}),ge=(0,F.useRef)(null),_e=(0,F.useMemo)(()=>{let e=l?.(S);return e??(e=S.toString(),e||void 0)},[S,l]),ve=(0,F.useCallback)(e=>e.split(``).filter(d).join(``),[d]),w=(0,F.useCallback)((e=v)=>{y&&(he.increment(e),s&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,he,v,s]),ye=(0,F.useCallback)((e=v)=>{y&&(he.decrement(e),s&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,he,v,s]),be=(0,F.useCallback)(e=>{if(g(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;x(ve(h(r))),ge.current={end:t,start:n}},[h,ve,x]),Se=(0,F.useCallback)(e=>{if(!ge.current)return;let{end:t,start:n}=ge.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Ce=(0,F.useCallback)(()=>{if(!r)return;let e=S;S!==``&&(/^[eE]/.test(S.toString())?me(``):(C<m&&(e=m),C>p&&(e=p),ue(e)))},[ue,r,p,m,me,S,C]),we=(0,F.useCallback)(e=>{if(g(e))return;xt(e,d)||e.preventDefault();let t=St(e)*v;u(e,{ArrowDown:()=>ye(t),ArrowUp:()=>w(t),End:()=>x(p),Home:()=>x(m)})},[ye,w,d,p,m,v,x]),{getDecrementProps:Te,getIncrementProps:T}=gt({"aria-disabled":n(!y),decrement:ye,disabled:o,increment:w,keepWithinRange:f,max:de,min:fe,...ce});return se(()=>{b.current&&b.current.value!=S&&me(ve(h(b.current.value)))},[h,ve]),xe(b.current,`wheel`,e=>{if(!b.current)return;let n=a(b.current,b.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=St(e)*v,i=Math.sign(e.deltaY);i===-1?w(r):i===1&&ye(r)},{passive:!1}),{getDecrementProps:Te,getIncrementProps:T,getInputProps:(0,F.useCallback)(({ref:e,...t}={})=>{let{ref:r,...i}=ae;return ee({...oe,...ce,type:`text`,"aria-invalid":n(oe[`aria-invalid`]??pe),"aria-valuemax":p,"aria-valuemin":m,"aria-valuenow":Number.isNaN(C)?void 0:C,"aria-valuetext":_e,autoComplete:`off`,autoCorrect:`off`,disabled:o,inputMode:`decimal`,max:p,min:m,pattern:`[0-9]*(.[0-9]+)?`,readOnly:ne,role:`spinbutton`,step:v,value:c(S)},i,le,t,{ref:te(e,r,b),onBlur:Ce,onChange:be,onFocus:Se,onKeyDown:we})()},[c,pe,S,_e,oe,ce,le,p,m,C,o,ne,v,ae,we,Ce,Se,be])}}})))()}var I,Tt,Et,Dt,Ot,L,kt,At,jt,Mt;function Nt(){return(Nt=e((()=>{de(),f(),Ne(),C(),ge(),Ie(),Ve(),Be(),st(),wt(),I=oe(),{PropsContext:Tt,usePropsContext:Et,withContext:Dt,withProvider:Ot}=ue(`number-input`,ot),L=Ot(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Me(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:p}=Ct(u);return(0,I.jsxs)(O,{className:e,css:t,colorScheme:n,...ee(l,s)(),children:[(0,I.jsx)(kt,{...p()}),(0,I.jsx)(Ue,{clickable:!0,...a,children:(0,I.jsxs)(At,{...r,children:[(0,I.jsx)(jt,{...f(o)}),(0,I.jsx)(Mt,{...d(i)})]})})]})},`root`)(e=>{let t=Fe();return ee(t,e)()}),kt=Dt(Re,`field`)({"data-group-propagate":``}),At=Dt(`div`,`control`)(),jt=Dt(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,I.jsx)(_e,{}),...t})),Mt=Dt(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,I.jsx)(he,{}),...t}))})))()}var R,Pt,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Ft,It,Lt,Rt,$,zt;function Bt(){return(Bt=e((()=>{$e(),Ze(),r(),l(),Ce(),Ae(),Te(),We(),at(),ve(),ye(),Ie(),Ve(),He(),Be(),qe(),Ye(),Nt(),wt(),R=oe(),Pt={component:L,title:`Components / NumberInput`},z=()=>(0,R.jsx)(L,{placeholder:`Basic`}),B=()=>(0,R.jsx)(Qe,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,R.jsx)(L,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,R.jsx)(Qe,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,R.jsx)(L,{colorScheme:t,variant:e,placeholder:s(e)},n)}),H=()=>(0,R.jsx)(L,{defaultValue:18,placeholder:`Order quantity`}),U=()=>(0,R.jsx)(L,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),W=()=>(0,R.jsx)(L,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),G=()=>(0,R.jsx)(L,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),K=()=>(0,R.jsx)(L,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),q=()=>(0,R.jsx)(L,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),J=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,disabled:!0,placeholder:s(e)},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,disabled:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:s(e)})]},t)}),(0,R.jsx)(T,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,R.jsx)(L,{})})]}),Y=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,placeholder:s(e),readOnly:!0},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,readOnly:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:s(e)})]},t)}),(0,R.jsx)(T,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,R.jsx)(L,{})})]}),X=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,invalid:!0,placeholder:s(e)},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,invalid:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:s(e)})]},t)}),(0,R.jsx)(T,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,R.jsx)(L,{})})]}),Z=()=>(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Order quantity`})]},t)}),Q=()=>(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Order quantity`})]},t)}),Ft=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(L,{disabled:!0,placeholder:`Default border color`}),(0,R.jsx)(L,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,R.jsxs)(O,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Custom border color`})]}),(0,R.jsx)(L,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,R.jsxs)(O,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Custom border color`})]})]}),It=()=>(0,R.jsx)(L,{placeholder:`Order quantity`,decrementProps:{children:(0,R.jsx)(w,{})},incrementProps:{children:(0,R.jsx)(be,{})}}),Lt=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=Ct({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,R.jsxs)(Je,{gap:`sm`,maxW:`xs`,children:[(0,R.jsx)(je,{icon:(0,R.jsx)(be,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,R.jsx)(Re,{...n(),"aria-label":`Number input`}),(0,R.jsx)(je,{icon:(0,R.jsx)(w,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=et();return(0,R.jsxs)(Xe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,R.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,R.jsx)(tt,{name:`numberInput`,control:e,render:({field:e})=>(0,R.jsx)(L,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,R.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=et({defaultValues:{numberInput:`5`}});return(0,R.jsxs)(Xe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,R.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,R.jsx)(tt,{name:`numberInput`,control:e,render:({field:e})=>(0,R.jsx)(L,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,R.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Q.parameters?.docs?.source}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`() => {
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
}`,...Ft.parameters?.docs?.source}}},It.parameters={...It.parameters,docs:{...It.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" decrementProps={{
    children: <MinusIcon />
  }} incrementProps={{
    children: <PlusIcon />
  }} />;
}`,...It.parameters?.docs?.source}}},Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Lt.parameters?.docs?.source}}},Rt.parameters={...Rt.parameters,docs:{...Rt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rt.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Bt();export{Z as Addon,z as Basic,Ft as BorderColor,Lt as CustomComponent,It as CustomStepper,H as DefaultValue,J as Disabled,K as DisabledClampValueOnBlur,q as DisabledKeepWithinRange,Q as Element,X as Invalid,U as MinMax,G as Precision,Rt as ReactHookForm,$ as ReactHookFormWithDefaultValue,Y as ReadOnly,B as Size,W as Step,V as Variant,zt as __namedExportsOrder,Pt as default};