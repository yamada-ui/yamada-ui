import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Gt as n,Nn as r,On as i,Tn as a,Vn as o,ct as s,dt as c,gt as l,ht as u,i as d,in as f,kn as p,mt as m,o as ee,pt as h,rn as g,ut as te,yn as _}from"./props-D9Bstnnu.js";import{i as v,r as ne}from"./i18n-provider-UZzIHtiK.js";import{n as re,o as ie,t as ae}from"./number-BwwiSOB8.js";import{t as oe}from"./jsx-runtime-BB9-612F.js";import{n as se,r as ce,t as y}from"./effect-BX-3lD32.js";import{d as b,i as le,n as ue,r as de}from"./create-component-eO5xvpJx.js";import{n as fe,r as pe,t as x}from"./icon-C0mFP3cE.js";import{n as S,t as C}from"./createLucideIcon-CjKfYf7_.js";import{n as me,t as he}from"./chevron-down-icon-Bo91S_zC.js";import{n as ge,t as _e}from"./chevron-up-icon-jfJw5QIo.js";import{n as ve,t as w}from"./minus-icon-C98DKVge.js";import{n as ye,t as be}from"./plus-icon-BAGw8NxH.js";import{n as xe,t as Se}from"./use-event-listener-80MzrQBk.js";import{r as Ce,t as we}from"./button-Cd89TaQS.js";import{c as Te,r as Ee,s as De,t as Oe}from"./use-field-props-DBNHiEhj.js";import{n as ke,t as Ae}from"./button.style-B49i4SPL.js";import{r as je,t as Me}from"./icon-button-CMUkQ9uV.js";import{i as Ne,r as Pe}from"./group-DKF7iHbg.js";import{a as T,c as Fe,i as Ie,l as E,r as Le,s as Re,t as ze}from"./input-oZA0qoxf.js";import{a as Be,i as Ve,n as He,o as Ue,r as We,t as D}from"./input-group-DelyHs7q.js";import{n as Ge,t as O}from"./for-BBgJJ9QB.js";import{n as Ke,t as qe}from"./use-interval-BsaiL2Ic.js";import{n as Je,t as Ye}from"./h-stack-Bo0zYeDq.js";import{n as Xe,t as Ze}from"./v-stack-CUMptwh8.js";import{n as Qe,t as $e}from"./props-table-DdfTAg_e.js";import{n as et,r as tt,t as nt}from"./index.esm-xmO_zH4i.js";var rt,it;function at(){return(at=e((()=>{S(),rt={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},rt.node,it=C(rt)})))()}var k;function ot(){return(ot=e((()=>{at(),pe(),k=fe(x)({as:it})})))()}var st;function ct(){return(ct=e((()=>{b(),ke(),Fe(),st=le({base:{button:{...Ae.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:E.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:E.variants?.filled},flushed:{field:E.variants?.flushed,root:Re(`& > input`)},outline:{field:E.variants?.outline},plain:{field:E.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:E.sizes?.xs.fontSize},field:E.sizes?.xs,root:T(E.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:E.sizes?.sm.fontSize},field:E.sizes?.sm,root:T(E.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:E.sizes?.md.fontSize},field:E.sizes?.md,root:T(E.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:E.sizes?.lg.fontSize},field:E.sizes?.lg,root:T(E.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:E.sizes?.xl.fontSize},field:E.sizes?.xl,root:T(E.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:E.sizes?.[`2xl`].fontSize},field:E.sizes?.[`2xl`],root:T(E.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var A,j,lt,ut,dt;function ft(){return(ft=e((()=>{A=t(),s(),j=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),lt=(e,t)=>Math.max(re(t),re(e)),ut=(e,t,n)=>(e=j(e),Number.isNaN(e)?void 0:ie(e,n??lt(e,t))),dt=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=c(i.onChange),[o,s]=(0,A.useState)(()=>i.defaultValue==null?``:ut(i.defaultValue,r,i.precision)??``),l=i.value!==void 0,u=l?i.value:o,d=lt(j(u),r),f=i.precision??d,p=(0,A.useCallback)(e=>{e!==u&&(l||s(e.toString()),a(e.toString(),j(e)))},[a,l,u]),m=(0,A.useCallback)(r=>{let i=r;return e&&(i=ae(i,n,t)),ie(i,f)},[f,e,t,n]),ee=(0,A.useCallback)((e=r)=>{let t;t=u===``?j(e):j(u)+e,t=m(t),p(t)},[m,r,p,u]),h=(0,A.useCallback)((e=r)=>{let t;t=u===``?j(-e):j(u)-e,t=m(t),p(t)},[m,r,p,u]),g=(0,A.useCallback)(()=>{let e;e=i.defaultValue==null?``:ut(i.defaultValue,r,i.precision)??n,p(e)},[i.defaultValue,i.precision,r,p,n]),te=(0,A.useCallback)(e=>{let t=ut(e,r,f)??n;p(t)},[f,r,p,n]),_=j(u);return{cast:te,clamp:m,decrement:h,increment:ee,max:_===t,min:_===n,out:_<n||t<_,precision:f,reset:g,setValue:s,step:r,update:p,value:u,valueAsNumber:_}}})))()}var M,pt,mt,ht;function gt(){return(gt=e((()=>{M=t(),qe(),y(),pt=50,mt=300,ht=({decrement:e,increment:t})=>{let[n,r]=(0,M.useState)(!1),[i,a]=(0,M.useState)(null),[o,s]=(0,M.useState)(!0),c=(0,M.useRef)(null);Ke(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?pt:null);let l=(0,M.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},mt)},[t,o]),u=(0,M.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},mt)},[e,o]),d=(0,M.useCallback)(()=>clearTimeout(c.current),[]),f=(0,M.useCallback)(()=>{s(!0),r(!1),d()},[d]);return ce(d),{down:u,spinning:n,stop:f,up:l}}})))()}var N,_t;function vt(){return(vt=e((()=>{N=t(),d(),ne(),p(),s(),h(),gt(),_t=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:a,min:o,...s})=>{let c=(0,N.useRef)(null),u=(0,N.useRef)(null),{down:d,spinning:f,stop:p,up:m}=ht({decrement:e,increment:n}),{t:h}=v(`numberInput`);l(c,[`disabled`],f,p),l(u,[`disabled`],f,p);let g=(0,N.useCallback)((e={})=>ee({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:p,onPointerUp:p})(),[s,t,p]),_=(0,N.useCallback)(({ref:e,...n}={})=>{let o=t||r&&a;return{ref:te(e,c),"aria-label":h(`Increase`),...g({disabled:o,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||o||(e.preventDefault(),m())})}},[g,t,r,a,m,h]);return{getDecrementProps:(0,N.useCallback)(({ref:e,...n}={})=>{let a=t||r&&o;return{ref:te(e,u),"aria-label":h(`Decrease`),...g({disabled:a,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),d())})}},[g,t,r,o,d,h]),getIncrementProps:_}}})))()}var P,yt,bt,xt,St,Ct,wt;function Tt(){return(Tt=e((()=>{P=t(),d(),ft(),Se(),g(),h(),y(),Oe(),vt(),yt=e=>e.toString(),bt=e=>e,xt=e=>/^[Ee0-9+\-.]$/.test(e),St=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},Ct=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},wt=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:r=!0,defaultValue:i,disabled:a,focusInputOnChange:o=!0,format:s=yt,getAriaValueText:c,isValidCharacter:l=xt,keepWithinRange:d=!0,max:p=2**53-1,min:h=-(2**53-1),parse:g=bt,precision:te,readOnly:_,step:v=1,value:ne,onChange:re,...ie},ariaProps:ae,dataProps:oe,eventProps:ce}=Ee(e),y=!(_||a),b=(0,P.useRef)(null),{cast:le,max:ue,min:de,out:fe,setValue:pe,update:x,value:S,valueAsNumber:C,...me}=dt({defaultValue:i,keepWithinRange:d,max:p,min:h,precision:te,step:v,value:ne,onChange:re}),he=(0,P.useRef)(null),ge=(0,P.useMemo)(()=>{let e=c?.(S);return e??(e=S.toString(),e||void 0)},[S,c]),_e=(0,P.useCallback)(e=>e.split(``).filter(l).join(``),[l]),ve=(0,P.useCallback)((e=v)=>{y&&(me.increment(e),o&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,me,v,o]),w=(0,P.useCallback)((e=v)=>{y&&(me.decrement(e),o&&requestAnimationFrame(()=>{b.current?.focus()}))},[y,me,v,o]),ye=(0,P.useCallback)(e=>{if(m(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;x(_e(g(r))),he.current={end:t,start:n}},[g,_e,x]),be=(0,P.useCallback)(e=>{if(!he.current)return;let{end:t,start:n}=he.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Se=(0,P.useCallback)(()=>{if(!r)return;let e=S;S!==``&&(/^[eE]/.test(S.toString())?pe(``):(C<h&&(e=h),C>p&&(e=p),le(e)))},[le,r,p,h,pe,S,C]),Ce=(0,P.useCallback)(e=>{if(m(e))return;St(e,l)||e.preventDefault();let t=Ct(e)*v;u(e,{ArrowDown:()=>w(t),ArrowUp:()=>ve(t),End:()=>x(p),Home:()=>x(h)})},[w,ve,l,p,h,v,x]),{getDecrementProps:we,getIncrementProps:Te}=_t({"aria-disabled":n(!y),decrement:w,disabled:a,increment:ve,keepWithinRange:d,max:ue,min:de,...oe});return se(()=>{b.current&&b.current.value!=S&&pe(_e(g(b.current.value)))},[g,_e]),xe(b.current,`wheel`,e=>{if(!b.current)return;let n=f(b.current,b.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=Ct(e)*v,i=Math.sign(e.deltaY);i===-1?ve(r):i===1&&w(r)},{passive:!1}),{getDecrementProps:we,getIncrementProps:Te,getInputProps:(0,P.useCallback)((e={})=>ee(ae,oe,{type:`text`,"aria-invalid":n(ae[`aria-invalid`]??fe),"aria-valuemax":p,"aria-valuemin":h,"aria-valuenow":Number.isNaN(C)?void 0:C,"aria-valuetext":ge,autoComplete:`off`,autoCorrect:`off`,disabled:a,inputMode:`decimal`,max:p,min:h,pattern:`[0-9]*(.[0-9]+)?`,readOnly:_,role:`spinbutton`,step:v,value:s(S)},ie,ce,e,{ref:b,onBlur:Se,onChange:ye,onFocus:be,onKeyDown:Ce})(),[s,fe,S,ge,ae,oe,ce,p,h,C,a,_,v,ie,Ce,Se,be,ye])}}})))()}var F,Et,Dt,Ot,kt,I,At,jt,Mt,Nt;function Pt(){return(Pt=e((()=>{de(),d(),Pe(),me(),ge(),Le(),He(),Ve(),ct(),Tt(),F=oe(),{PropsContext:Et,usePropsContext:Dt,withContext:Ot,withProvider:kt}=ue(`number-input`,st),I=kt(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Ne(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:p}=wt(u);return(0,F.jsxs)(D,{className:e,css:t,colorScheme:n,...ee(l,s)(),children:[(0,F.jsx)(At,{...p()}),(0,F.jsx)(We,{clickable:!0,...a,children:(0,F.jsxs)(jt,{...r,children:[(0,F.jsx)(Mt,{...f(o)}),(0,F.jsx)(Nt,{...d(i)})]})})]})},`root`)(e=>{let t=Ie();return ee(t,e)()}),At=Ot(ze,`field`)({"data-group-propagate":``}),jt=Ot(`div`,`control`)(),Mt=Ot(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,F.jsx)(_e,{}),...t})),Nt=Ot(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,F.jsx)(he,{}),...t}))})))()}var L,Ft,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,It,Lt,Rt,$,zt;function Bt(){return(Bt=e((()=>{et(),Qe(),o(),_(),Ce(),je(),Te(),Ge(),ot(),ve(),ye(),Le(),He(),Ue(),Ve(),Je(),Xe(),Pt(),Tt(),L=oe(),Ft={component:I,title:`Components / NumberInput`},R=()=>(0,L.jsx)(I,{placeholder:`Order quantity`}),z=()=>(0,L.jsx)($e,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,L.jsx)(I,{size:e,variant:t,placeholder:`Size (${e})`},n)}),B=()=>(0,L.jsx)($e,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:r,children:(e,t,n)=>(0,L.jsx)(I,{colorScheme:t,variant:e,placeholder:a(e)},n)}),V=()=>(0,L.jsx)(I,{defaultValue:18,placeholder:`Order quantity`}),H=()=>(0,L.jsx)(I,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),U=()=>(0,L.jsx)(I,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),W=()=>(0,L.jsx)(I,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),G=()=>(0,L.jsx)(I,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),K=()=>(0,L.jsx)(I,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,disabled:!0,placeholder:a(e)},t)}),(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(D,{variant:e,disabled:!0,children:[(0,L.jsx)(Be,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:a(e)})]},t)}),(0,L.jsx)(De,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,L.jsx)(I,{})})]}),J=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,placeholder:a(e),readOnly:!0},t)}),(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(D,{variant:e,readOnly:!0,children:[(0,L.jsx)(Be,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:a(e)})]},t)}),(0,L.jsx)(De,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,L.jsx)(I,{})})]}),Y=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsx)(I,{variant:e,invalid:!0,placeholder:a(e)},t)}),(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(D,{variant:e,invalid:!0,children:[(0,L.jsx)(Be,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:a(e)})]},t)}),(0,L.jsx)(De,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,L.jsx)(I,{})})]}),X=()=>(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(D,{variant:e,children:[(0,L.jsx)(Be,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:`Order quantity`})]},t)}),Z=()=>(0,L.jsx)(O,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,L.jsxs)(D,{variant:e,children:[(0,L.jsx)(We,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:`Order quantity`})]},t)}),Q=()=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(I,{disabled:!0,placeholder:`Default border color`}),(0,L.jsx)(I,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,L.jsxs)(D,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,L.jsx)(We,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:`Custom border color`})]}),(0,L.jsx)(I,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,L.jsxs)(D,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,L.jsx)(We,{children:(0,L.jsx)(k,{})}),(0,L.jsx)(I,{placeholder:`Custom border color`})]})]}),It=()=>(0,L.jsx)(I,{placeholder:`Order quantity`,decrementProps:{children:(0,L.jsx)(w,{})},incrementProps:{children:(0,L.jsx)(be,{})}}),Lt=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=wt({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,L.jsxs)(Ye,{gap:`sm`,maxW:`xs`,children:[(0,L.jsx)(Me,{icon:(0,L.jsx)(be,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,L.jsx)(ze,{...n(),"aria-label":`Number input`}),(0,L.jsx)(Me,{icon:(0,L.jsx)(w,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=tt();return(0,L.jsxs)(Ze,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(De,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,L.jsx)(nt,{name:`numberInput`,control:e,render:({field:e})=>(0,L.jsx)(I,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,L.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=tt({defaultValues:{numberInput:`5`}});return(0,L.jsxs)(Ze,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,L.jsx)(De,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,L.jsx)(nt,{name:`numberInput`,control:e,render:({field:e})=>(0,L.jsx)(I,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,L.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" />;
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},It.parameters={...It.parameters,docs:{...It.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Bt();export{X as Addon,R as Basic,Q as BorderColor,Lt as CustomComponent,It as CustomStepper,V as DefaultValue,q as Disabled,G as DisabledClampValueOnBlur,K as DisabledKeepWithinRange,Z as Element,Y as Invalid,H as MinMax,W as Precision,Rt as ReactHookForm,$ as ReactHookFormWithDefaultValue,J as ReadOnly,z as Size,U as Step,B as Variant,zt as __namedExportsOrder,Ft as default};