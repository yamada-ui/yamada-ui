import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Bn as n,Dn as r,Mn as i,On as a,Wt as o,ft as s,ht as c,i as l,lt as u,mt as d,nn as f,o as p,pt as m,rn as h,st as g,ut as _,vn as v,wn as y}from"./props-DIwllvnO.js";import{i as b,r as ee}from"./i18n-provider-CIH7SocD.js";import{n as te,o as ne,t as re}from"./number-BwwiSOB8.js";import{t as ie}from"./jsx-runtime-BB9-612F.js";import{n as ae,r as oe,t as x}from"./effect-BX-3lD32.js";import{d as S,i as se,n as ce,r as le}from"./create-component-BVL_n9ri.js";import{n as ue,r as de,t as C}from"./icon-Bb2f7DYH.js";import{n as w,t as T}from"./createLucideIcon-CjKfYf7_.js";import{n as fe,t as pe}from"./chevron-down-icon-B6FlXwHc.js";import{n as me,t as he}from"./chevron-up-icon-btYidjmU.js";import{n as ge,t as E}from"./minus-icon-D5GZQLPE.js";import{n as _e,t as ve}from"./plus-icon-7FgN_n24.js";import{n as ye,t as be}from"./use-event-listener-CTeRdOPh.js";import{r as xe,t as Se}from"./button-B8YJTvd2.js";import{c as Ce,r as we,s as Te,t as Ee}from"./use-field-props-Dr11fFoE.js";import{n as De,t as Oe}from"./button.style-Dd_4a45X.js";import{r as ke,t as Ae}from"./icon-button-DfmCi6S3.js";import{i as je,r as Me}from"./group-DsKofYhL.js";import{a as D,c as Ne,i as Pe,l as O,r as Fe,s as Ie,t as Le}from"./input-CBPepMYt.js";import{a as Re,i as ze,n as Be,o as Ve,r as He,t as k}from"./input-group-CNbfaJNr.js";import{n as Ue,t as A}from"./for-BBhEc7Et.js";import{n as We,t as Ge}from"./use-interval-DIGTLqlz.js";import{n as Ke,t as qe}from"./h-stack-DIPI3-R3.js";import{n as Je,t as Ye}from"./v-stack-B1U2X-F4.js";import{n as Xe,t as Ze}from"./props-table-Cbmwv9eT.js";import{n as Qe,r as $e,t as et}from"./index.esm-B9xG1hy1.js";var tt,nt;function rt(){return(rt=e((()=>{w(),tt={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},tt.node,nt=T(tt)})))()}var j;function it(){return(it=e((()=>{rt(),de(),j=ue(C)({as:nt})})))()}var at;function ot(){return(ot=e((()=>{S(),De(),Ne(),at=se({base:{button:{...Oe.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:O.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:O.variants?.filled},flushed:{field:O.variants?.flushed,root:Ie(`& > input`)},outline:{field:O.variants?.outline},plain:{field:O.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.xs.fontSize},field:O.sizes?.xs,root:D(O.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.sm.fontSize},field:O.sizes?.sm,root:D(O.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.md.fontSize},field:O.sizes?.md,root:D(O.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:O.sizes?.lg.fontSize},field:O.sizes?.lg,root:D(O.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:O.sizes?.xl.fontSize},field:O.sizes?.xl,root:D(O.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:O.sizes?.[`2xl`].fontSize},field:O.sizes?.[`2xl`],root:D(O.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var M,N,st,ct,lt;function ut(){return(ut=e((()=>{M=t(),g(),N=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),st=(e,t)=>Math.max(te(t),te(e)),ct=(e,t,n)=>(e=N(e),Number.isNaN(e)?void 0:ne(e,n??st(e,t))),lt=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=_(i.onChange),[o,s]=(0,M.useState)(()=>i.defaultValue==null?``:ct(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=st(N(l),r),d=i.precision??u,f=(0,M.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),N(e)))},[a,c,l]),p=(0,M.useCallback)(r=>{let i=r;return e&&(i=re(i,n,t)),ne(i,d)},[d,e,t,n]),m=(0,M.useCallback)((e=r)=>{let t;t=l===``?N(e):N(l)+e,t=p(t),f(t)},[p,r,f,l]),h=(0,M.useCallback)((e=r)=>{let t;t=l===``?N(-e):N(l)-e,t=p(t),f(t)},[p,r,f,l]),g=(0,M.useCallback)(()=>{let e;e=i.defaultValue==null?``:ct(i.defaultValue,r,i.precision)??n,f(e)},[i.defaultValue,i.precision,r,f,n]),v=(0,M.useCallback)(e=>{let t=ct(e,r,d)??n;f(t)},[d,r,f,n]),y=N(l);return{cast:v,clamp:p,decrement:h,increment:m,max:y===t,min:y===n,out:y<n||t<y,precision:d,reset:g,setValue:s,step:r,update:f,value:l,valueAsNumber:y}}})))()}var P,dt,ft,pt;function mt(){return(mt=e((()=>{P=t(),Ge(),x(),dt=50,ft=300,pt=({decrement:e,increment:t})=>{let[n,r]=(0,P.useState)(!1),[i,a]=(0,P.useState)(null),[o,s]=(0,P.useState)(!0),c=(0,P.useRef)(null);We(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?dt:null);let l=(0,P.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},ft)},[t,o]),u=(0,P.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},ft)},[e,o]),d=(0,P.useCallback)(()=>clearTimeout(c.current),[]),f=(0,P.useCallback)(()=>{s(!0),r(!1),d()},[d]);return oe(d),{down:u,spinning:n,stop:f,up:l}}})))()}var F,ht;function gt(){return(gt=e((()=>{F=t(),l(),ee(),a(),g(),s(),mt(),ht=({decrement:e,disabled:t,increment:n,keepWithinRange:i,max:a,min:o,...s})=>{let l=(0,F.useRef)(null),d=(0,F.useRef)(null),{down:f,spinning:m,stop:h,up:g}=pt({decrement:e,increment:n}),{t:_}=b(`numberInput`);c(l,[`disabled`],m,h),c(d,[`disabled`],m,h);let v=(0,F.useCallback)((e={})=>p({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:h,onPointerUp:h})(),[s,t,h]),y=(0,F.useCallback)(({ref:e,...n}={})=>{let o=t||i&&a;return{ref:u(e,l),"aria-label":_(`Increase`),...v({disabled:o,...n}),onPointerDown:r(n.onPointerDown,e=>{e.button!==0||o||(e.preventDefault(),g())})}},[v,t,i,a,g,_]);return{getDecrementProps:(0,F.useCallback)(({ref:e,...n}={})=>{let a=t||i&&o;return{ref:u(e,d),"aria-label":_(`Decrease`),...v({disabled:a,...n}),onPointerDown:r(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),f())})}},[v,t,i,o,f,_]),getIncrementProps:y}}})))()}var I,_t,vt,yt,bt,xt,St;function Ct(){return(Ct=e((()=>{I=t(),l(),ut(),be(),f(),s(),x(),Ee(),gt(),_t=e=>e.toString(),vt=e=>e,yt=e=>/^[Ee0-9+\-.]$/.test(e),bt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},xt=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},St=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:i,focusInputOnChange:a=!0,format:s=_t,getAriaValueText:c,isValidCharacter:l=yt,keepWithinRange:u=!0,max:f=2**53-1,min:g=-(2**53-1),parse:_=vt,precision:v,readOnly:y,step:b=1,value:ee,onChange:te,...ne},ariaProps:re,dataProps:ie,eventProps:oe}=we(e),x=!(y||i),S=(0,I.useRef)(null),{cast:se,max:ce,min:le,out:ue,setValue:de,update:C,value:w,valueAsNumber:T,...fe}=lt({defaultValue:r,keepWithinRange:u,max:f,min:g,precision:v,step:b,value:ee,onChange:te}),pe=(0,I.useRef)(null),me=(0,I.useMemo)(()=>{let e=c?.(w);return e??(e=w.toString(),e||void 0)},[w,c]),he=(0,I.useCallback)(e=>e.split(``).filter(l).join(``),[l]),ge=(0,I.useCallback)((e=b)=>{x&&(fe.increment(e),a&&requestAnimationFrame(()=>{S.current?.focus()}))},[x,fe,b,a]),E=(0,I.useCallback)((e=b)=>{x&&(fe.decrement(e),a&&requestAnimationFrame(()=>{S.current?.focus()}))},[x,fe,b,a]),_e=(0,I.useCallback)(e=>{if(m(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;C(he(_(r))),pe.current={end:t,start:n}},[_,he,C]),ve=(0,I.useCallback)(e=>{if(!pe.current)return;let{end:t,start:n}=pe.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),be=(0,I.useCallback)(()=>{if(!n)return;let e=w;w!==``&&(/^[eE]/.test(w.toString())?de(``):(T<g&&(e=g),T>f&&(e=f),se(e)))},[se,n,f,g,de,w,T]),xe=(0,I.useCallback)(e=>{if(m(e))return;bt(e,l)||e.preventDefault();let t=xt(e)*b;d(e,{ArrowDown:()=>E(t),ArrowUp:()=>ge(t),End:()=>C(f),Home:()=>C(g)})},[E,ge,l,f,g,b,C]),{getDecrementProps:Se,getIncrementProps:Ce}=ht({"aria-disabled":o(!x),decrement:E,disabled:i,increment:ge,keepWithinRange:u,max:ce,min:le,...ie});return ae(()=>{S.current&&S.current.value!=w&&de(he(_(S.current.value)))},[_,he]),ye(S.current,`wheel`,e=>{if(!S.current)return;let n=h(S.current,S.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=xt(e)*b,i=Math.sign(e.deltaY);i===-1?ge(r):i===1&&E(r)},{passive:!1}),{getDecrementProps:Se,getIncrementProps:Ce,getInputProps:(0,I.useCallback)((e={})=>p(re,ie,{type:`text`,"aria-invalid":o(re[`aria-invalid`]??ue),"aria-valuemax":f,"aria-valuemin":g,"aria-valuenow":Number.isNaN(T)?void 0:T,"aria-valuetext":me,autoComplete:`off`,autoCorrect:`off`,disabled:i,inputMode:`decimal`,max:f,min:g,pattern:`[0-9]*(.[0-9]+)?`,readOnly:y,role:`spinbutton`,step:b,value:s(w)},ne,oe,e,{ref:S,onBlur:be,onChange:_e,onFocus:ve,onKeyDown:xe})(),[s,ue,w,me,re,ie,oe,f,g,T,i,y,b,ne,xe,be,ve,_e])}}})))()}var L,wt,Tt,Et,Dt,R,Ot,kt,At,jt;function Mt(){return(Mt=e((()=>{le(),l(),Me(),fe(),me(),Fe(),Be(),ze(),ot(),Ct(),L=ie(),{PropsContext:wt,usePropsContext:Tt,withContext:Et,withProvider:Dt}=ce(`number-input`,at),R=Dt(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=je(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:m}=St(u);return(0,L.jsxs)(k,{className:e,css:t,colorScheme:n,...p(l,s)(),children:[(0,L.jsx)(Ot,{...m()}),(0,L.jsx)(He,{clickable:!0,...a,children:(0,L.jsxs)(kt,{...r,children:[(0,L.jsx)(At,{...f(o)}),(0,L.jsx)(jt,{...d(i)})]})})]})},`root`)(e=>{let t=Pe();return p(t,e)()}),Ot=Et(Le,`field`)({"data-group-propagate":``}),kt=Et(`div`,`control`)(),At=Et(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,L.jsx)(he,{}),...t})),jt=Et(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,L.jsx)(pe,{}),...t}))})))()}var z,Nt,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,Pt,Ft,It,Lt,Rt,$,zt;function Bt(){return(Bt=e((()=>{Qe(),Xe(),n(),v(),xe(),ke(),Ce(),Ue(),it(),ge(),_e(),Fe(),Be(),Ve(),ze(),Ke(),Je(),Mt(),Ct(),z=ie(),Nt={component:R,title:`Components / NumberInput`},B=()=>(0,z.jsx)(R,{placeholder:`Order quantity`}),V=()=>(0,z.jsx)(Ze,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,z.jsx)(R,{size:e,variant:t,placeholder:`Size (${e})`},n)}),H=()=>(0,z.jsx)(Ze,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:i,children:(e,t,n)=>(0,z.jsx)(R,{colorScheme:t,variant:e,placeholder:y(e)},n)}),U=()=>(0,z.jsx)(R,{defaultValue:18,placeholder:`Order quantity`}),W=()=>(0,z.jsx)(R,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),G=()=>(0,z.jsx)(R,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),K=()=>(0,z.jsx)(R,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),q=()=>(0,z.jsx)(R,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),J=()=>(0,z.jsx)(R,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),Y=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,disabled:!0,placeholder:y(e)},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,disabled:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:y(e)})]},t)}),(0,z.jsx)(Te,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,z.jsx)(R,{})})]}),X=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,placeholder:y(e),readOnly:!0},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,readOnly:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:y(e)})]},t)}),(0,z.jsx)(Te,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,z.jsx)(R,{})})]}),Z=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,invalid:!0,placeholder:y(e)},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,invalid:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:y(e)})]},t)}),(0,z.jsx)(Te,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,z.jsx)(R,{})})]}),Q=()=>(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Order quantity`})]},t)}),Pt=()=>(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Order quantity`})]},t)}),Ft=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(R,{disabled:!0,placeholder:`Default border color`}),(0,z.jsx)(R,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,z.jsxs)(k,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Custom border color`})]}),(0,z.jsx)(R,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,z.jsxs)(k,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Custom border color`})]})]}),It=()=>(0,z.jsx)(R,{placeholder:`Order quantity`,decrementProps:{children:(0,z.jsx)(E,{})},incrementProps:{children:(0,z.jsx)(ve,{})}}),Lt=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=St({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,z.jsxs)(qe,{gap:`sm`,maxW:`xs`,children:[(0,z.jsx)(Ae,{icon:(0,z.jsx)(ve,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,z.jsx)(Le,{...n(),"aria-label":`Number input`}),(0,z.jsx)(Ae,{icon:(0,z.jsx)(E,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=$e();return(0,z.jsxs)(Ye,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,z.jsx)(Te,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,z.jsx)(et,{name:`numberInput`,control:e,render:({field:e})=>(0,z.jsx)(R,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,z.jsx)(Se,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},$=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=$e({defaultValues:{numberInput:`5`}});return(0,z.jsxs)(Ye,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,z.jsx)(Te,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,z.jsx)(et,{name:`numberInput`,control:e,render:({field:e})=>(0,z.jsx)(R,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,z.jsx)(Se,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Order quantity" />;
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["xs", "sm", "md", "lg", "xl"]} rows={["outline", "filled", "flushed"]}>
      {(column, row, key) => {
      return <NumberInput key={key} size={column} variant={row} placeholder={\`Size (\${column})\`} />;
    }}
    </PropsTable>;
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" columns={["outline", "filled", "flushed"]} rows={COLOR_SCHEMES}>
      {(column, row, key) => {
      return <NumberInput key={key} colorScheme={row} variant={column} placeholder={toTitleCase(column)} />;
    }}
    </PropsTable>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} placeholder="Order quantity" />;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={18} max={31} min={8} placeholder="Order quantity" />;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} max={30} min={5} placeholder="Order quantity" step={5} />;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput defaultValue={15} placeholder="Order quantity" precision={2} step={0.2} />;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} max={30} placeholder="Order quantity" />;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={30} placeholder="Order quantity" />;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Addon>
            <GaugeIcon />
          </InputGroup.Addon>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Q.parameters?.docs?.source}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...Pt.parameters?.docs?.source}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}}})))()}Bt();export{Q as Addon,B as Basic,Ft as BorderColor,Lt as CustomComponent,It as CustomStepper,U as DefaultValue,Y as Disabled,q as DisabledClampValueOnBlur,J as DisabledKeepWithinRange,Pt as Element,Z as Invalid,W as MinMax,K as Precision,Rt as ReactHookForm,$ as ReactHookFormWithDefaultValue,X as ReadOnly,V as Size,G as Step,H as Variant,zt as __namedExportsOrder,Nt as default};