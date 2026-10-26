import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{An as n,En as r,Ht as i,Rn as a,Sn as o,Tn as s,ct as c,dt as l,en as u,ft as d,gn as f,i as p,lt as m,mt as h,o as ee,ot as g,pt as _,tn as v}from"./props-BGlEPbcT.js";import{i as te,r as y}from"./i18n-provider-DoUraa8t.js";import{n as ne,o as re,t as ie}from"./number-u-voAp4w.js";import{t as ae}from"./jsx-runtime-BdxMnOeJ.js";import{n as oe,r as se,t as ce}from"./effect-DSHKlzEK.js";import{d as le,i as b,n as ue,r as de}from"./create-component-bU8PsV5C.js";import{n as fe,r as pe,t as me}from"./icon-CNQ1cFxw.js";import{n as x,t as S}from"./createLucideIcon-ByMcIZ7k.js";import{n as C,t as he}from"./chevron-down-icon-CteHprWt.js";import{n as ge,t as _e}from"./chevron-up-icon-QMteXRnN.js";import{n as ve,t as w}from"./minus-icon-LAY1Nnpa.js";import{n as ye,t as be}from"./plus-icon-acXhJmC8.js";import{n as xe,t as Se}from"./use-event-listener-B6Suh4ZC.js";import{r as Ce,t as we}from"./button-QjBLhmmI.js";import{c as Te,r as Ee,s as T,t as De}from"./use-field-props-KNP5c4Ee.js";import{n as Oe,t as ke}from"./button.style-BwRz4lDo.js";import{r as Ae,t as je}from"./icon-button-CTa1BkTR.js";import{i as Me,r as Ne}from"./group-B0o6b1dx.js";import{a as E,c as Pe,i as Fe,l as D,r as Ie,s as Le,t as Re}from"./input-D75uc4C5.js";import{a as ze,i as Be,n as Ve,o as He,r as Ue,t as O}from"./input-group-BeVJvR2J.js";import{n as We,t as k}from"./for-Dqkq8hvn.js";import{n as Ge,t as Ke}from"./use-interval-Dp8y7NGv.js";import{n as qe,t as Je}from"./h-stack-Cf58wCGR.js";import{n as Ye,t as Xe}from"./v-stack-BfqYc92C.js";import{n as Ze,t as Qe}from"./props-table-f1Xpb6Bc.js";import{n as $e,r as et,t as tt}from"./index.esm-BFTTYzQs.js";var nt,rt;function it(){return(it=e((()=>{x(),nt={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},nt.node,rt=S(nt)})))()}var A;function at(){return(at=e((()=>{it(),pe(),A=fe(me)({as:rt})})))()}var ot;function st(){return(st=e((()=>{le(),Oe(),Pe(),ot=b({base:{button:{...ke.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:D.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:D.variants?.filled},flushed:{field:D.variants?.flushed,root:Le(`& > input`)},outline:{field:D.variants?.outline},plain:{field:D.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.xs.fontSize},field:D.sizes?.xs,root:E(D.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.sm.fontSize},field:D.sizes?.sm,root:E(D.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:D.sizes?.md.fontSize},field:D.sizes?.md,root:E(D.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:D.sizes?.lg.fontSize},field:D.sizes?.lg,root:E(D.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:D.sizes?.xl.fontSize},field:D.sizes?.xl,root:E(D.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:D.sizes?.[`2xl`].fontSize},field:D.sizes?.[`2xl`],root:E(D.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var j,M,ct,lt,ut;function dt(){return(dt=e((()=>{j=t(),g(),M=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),ct=(e,t)=>Math.max(ne(t),ne(e)),lt=(e,t,n)=>(e=M(e),Number.isNaN(e)?void 0:re(e,n??ct(e,t))),ut=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=m(i.onChange),[o,s]=(0,j.useState)(()=>i.defaultValue==null?``:lt(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=ct(M(l),r),d=i.precision??u,f=(0,j.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),M(e)))},[a,c,l]),p=(0,j.useCallback)(r=>{let i=r;return e&&(i=ie(i,n,t)),re(i,d)},[d,e,t,n]),h=(0,j.useCallback)((e=r)=>{let t;t=l===``?M(e):M(l)+e,t=p(t),f(t)},[p,r,f,l]),ee=(0,j.useCallback)((e=r)=>{let t;t=l===``?M(-e):M(l)-e,t=p(t),f(t)},[p,r,f,l]),g=(0,j.useCallback)(()=>{let e;e=i.defaultValue==null?``:lt(i.defaultValue,r,i.precision)??n,f(e)},[i.defaultValue,i.precision,r,f,n]),_=(0,j.useCallback)(e=>{let t=lt(e,r,d)??n;f(t)},[d,r,f,n]),v=M(l);return{cast:_,clamp:p,decrement:ee,increment:h,max:v===t,min:v===n,out:v<n||t<v,precision:d,reset:g,setValue:s,step:r,update:f,value:l,valueAsNumber:v}}})))()}var N,ft,pt,mt;function ht(){return(ht=e((()=>{N=t(),Ke(),ce(),ft=50,pt=300,mt=({decrement:e,increment:t})=>{let[n,r]=(0,N.useState)(!1),[i,a]=(0,N.useState)(null),[o,s]=(0,N.useState)(!0),c=(0,N.useRef)(null);Ge(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?ft:null);let l=(0,N.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},pt)},[t,o]),u=(0,N.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},pt)},[e,o]),d=(0,N.useCallback)(()=>clearTimeout(c.current),[]),f=(0,N.useCallback)(()=>{s(!0),r(!1),d()},[d]);return se(d),{down:u,spinning:n,stop:f,up:l}}})))()}var P,gt;function _t(){return(_t=e((()=>{P=t(),p(),y(),r(),g(),l(),ht(),gt=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:i,min:a,...o})=>{let l=(0,P.useRef)(null),u=(0,P.useRef)(null),{down:d,spinning:f,stop:p,up:m}=mt({decrement:e,increment:n}),{t:g}=te(`numberInput`);h(l,[`disabled`],f,p),h(u,[`disabled`],f,p);let _=(0,P.useCallback)((e={})=>ee({type:`button`,disabled:t,tabIndex:-1},o,e,{onPointerLeave:p,onPointerUp:p})(),[o,t,p]),v=(0,P.useCallback)(({ref:e,...n}={})=>{let a=t||r&&i;return{ref:c(e,l),"aria-label":g(`Increase`),..._({disabled:a,...n}),onPointerDown:s(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),m())})}},[_,t,r,i,m,g]);return{getDecrementProps:(0,P.useCallback)(({ref:e,...n}={})=>{let i=t||r&&a;return{ref:c(e,u),"aria-label":g(`Decrease`),..._({disabled:i,...n}),onPointerDown:s(n.onPointerDown,e=>{e.button!==0||i||(e.preventDefault(),d())})}},[_,t,r,a,d,g]),getIncrementProps:v}}})))()}var F,vt,yt,bt,xt,St,Ct;function wt(){return(wt=e((()=>{F=t(),p(),dt(),Se(),u(),l(),g(),ce(),De(),_t(),vt=e=>e.toString(),yt=e=>e,bt=e=>/^[Ee0-9+\-.]$/.test(e),xt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},St=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},Ct=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:a,focusInputOnChange:o=!0,format:s=vt,getAriaValueText:l,isValidCharacter:u=bt,keepWithinRange:f=!0,max:p=2**53-1,min:m=-(2**53-1),parse:h=yt,precision:g,readOnly:te,step:y=1,value:ne,onChange:re,...ie},ariaProps:ae,dataProps:se,eventProps:ce}=Ee(e),le=!(te||a),b=(0,F.useRef)(null),{cast:ue,max:de,min:fe,out:pe,setValue:me,update:x,value:S,valueAsNumber:C,...he}=ut({defaultValue:r,keepWithinRange:f,max:p,min:m,precision:g,step:y,value:ne,onChange:re}),ge=(0,F.useRef)(null),_e=(0,F.useMemo)(()=>{let e=l?.(S);return e??(e=S.toString(),e||void 0)},[S,l]),ve=(0,F.useCallback)(e=>e.split(``).filter(u).join(``),[u]),w=(0,F.useCallback)((e=y)=>{le&&(he.increment(e),o&&requestAnimationFrame(()=>{b.current?.focus()}))},[le,he,y,o]),ye=(0,F.useCallback)((e=y)=>{le&&(he.decrement(e),o&&requestAnimationFrame(()=>{b.current?.focus()}))},[le,he,y,o]),be=(0,F.useCallback)(e=>{if(d(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;x(ve(h(r))),ge.current={end:t,start:n}},[h,ve,x]),Se=(0,F.useCallback)(e=>{if(!ge.current)return;let{end:t,start:n}=ge.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Ce=(0,F.useCallback)(()=>{if(!n)return;let e=S;S!==``&&(/^[eE]/.test(S.toString())?me(``):(C<m&&(e=m),C>p&&(e=p),ue(e)))},[ue,n,p,m,me,S,C]),we=(0,F.useCallback)(e=>{if(d(e))return;xt(e,u)||e.preventDefault();let t=St(e)*y;_(e,{ArrowDown:()=>ye(t),ArrowUp:()=>w(t),End:()=>x(p),Home:()=>x(m)})},[ye,w,u,p,m,y,x]),{getDecrementProps:Te,getIncrementProps:T}=gt({"aria-disabled":i(!le),decrement:ye,disabled:a,increment:w,keepWithinRange:f,max:de,min:fe,...se});return oe(()=>{b.current&&b.current.value!=S&&me(ve(h(b.current.value)))},[h,ve]),xe(b.current,`wheel`,e=>{if(!b.current)return;let n=v(b.current,b.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=St(e)*y,i=Math.sign(e.deltaY);i===-1?w(r):i===1&&ye(r)},{passive:!1}),{getDecrementProps:Te,getIncrementProps:T,getInputProps:(0,F.useCallback)(({ref:e,...t}={})=>{let{ref:n,...r}=ie;return ee({...ae,...se,type:`text`,"aria-invalid":i(ae[`aria-invalid`]??pe),"aria-valuemax":p,"aria-valuemin":m,"aria-valuenow":Number.isNaN(C)?void 0:C,"aria-valuetext":_e,autoComplete:`off`,autoCorrect:`off`,disabled:a,inputMode:`decimal`,max:p,min:m,pattern:`[0-9]*(.[0-9]+)?`,readOnly:te,role:`spinbutton`,step:y,value:s(S)},r,ce,t,{ref:c(e,n,b),onBlur:Ce,onChange:be,onFocus:Se,onKeyDown:we})()},[s,pe,S,_e,ae,se,ce,p,m,C,a,te,y,ie,we,Ce,Se,be])}}})))()}var I,Tt,Et,Dt,Ot,L,kt,At,jt,Mt;function Nt(){return(Nt=e((()=>{de(),p(),Ne(),C(),ge(),Ie(),Ve(),Be(),st(),wt(),I=ae(),{PropsContext:Tt,usePropsContext:Et,withContext:Dt,withProvider:Ot}=ue(`number-input`,ot),L=Ot(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=Me(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:p}=Ct(u);return(0,I.jsxs)(O,{className:e,css:t,colorScheme:n,...ee(l,s)(),children:[(0,I.jsx)(kt,{...p()}),(0,I.jsx)(Ue,{clickable:!0,...a,children:(0,I.jsxs)(At,{...r,children:[(0,I.jsx)(jt,{...f(o)}),(0,I.jsx)(Mt,{...d(i)})]})})]})},`root`)(e=>{let t=Fe();return ee(t,e)()}),kt=Dt(Re,`field`)({"data-group-propagate":``}),At=Dt(`div`,`control`)(),jt=Dt(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,I.jsx)(_e,{}),...t})),Mt=Dt(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,I.jsx)(he,{}),...t}))})))()}var R,Pt,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ft,It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{$e(),Ze(),a(),f(),Ce(),Ae(),Te(),We(),at(),ve(),ye(),Ie(),Ve(),He(),Be(),qe(),Ye(),Nt(),wt(),R=ae(),Pt={component:L,title:`Components / NumberInput`},z=()=>(0,R.jsx)(L,{placeholder:`Basic`}),B=()=>(0,R.jsx)(Qe,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,R.jsx)(L,{size:e,variant:t,placeholder:`Size (${e})`},n)}),V=()=>(0,R.jsx)(Qe,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:n,children:(e,t,n)=>(0,R.jsx)(L,{colorScheme:t,variant:e,placeholder:o(e)},n)}),H=()=>(0,R.jsx)(L,{defaultValue:18,placeholder:`Order quantity`}),U=()=>(0,R.jsx)(L,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),W=()=>(0,R.jsx)(L,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),G=()=>(0,R.jsx)(L,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),K=()=>(0,R.jsx)(L,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),q=()=>(0,R.jsx)(L,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),J=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,disabled:!0,placeholder:o(e)},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,disabled:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:o(e)})]},t)}),(0,R.jsx)(T,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,R.jsx)(L,{})})]}),Y=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,placeholder:o(e),readOnly:!0},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,readOnly:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:o(e)})]},t)}),(0,R.jsx)(T,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,R.jsx)(L,{})})]}),X=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsx)(L,{variant:e,invalid:!0,placeholder:o(e)},t)}),(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,invalid:!0,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:o(e)})]},t)}),(0,R.jsx)(T,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,R.jsx)(L,{})})]}),Z=()=>(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,children:[(0,R.jsx)(ze,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Order quantity`})]},t)}),Q=()=>(0,R.jsx)(k,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,R.jsxs)(O,{variant:e,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Order quantity`})]},t)}),$=()=>(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(L,{disabled:!0,placeholder:`Default border color`}),(0,R.jsx)(L,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,R.jsxs)(O,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Custom border color`})]}),(0,R.jsx)(L,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,R.jsxs)(O,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,R.jsx)(Ue,{children:(0,R.jsx)(A,{})}),(0,R.jsx)(L,{placeholder:`Custom border color`})]})]}),Ft=()=>(0,R.jsx)(L,{placeholder:`Order quantity`,decrementProps:{children:(0,R.jsx)(w,{})},incrementProps:{children:(0,R.jsx)(be,{})}}),It=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=Ct({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,R.jsxs)(Je,{gap:`sm`,maxW:`xs`,children:[(0,R.jsx)(je,{icon:(0,R.jsx)(be,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,R.jsx)(Re,{...n(),"aria-label":`Number input`}),(0,R.jsx)(je,{icon:(0,R.jsx)(w,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Lt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=et();return(0,R.jsxs)(Xe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,R.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,R.jsx)(tt,{name:`numberInput`,control:e,render:({field:e})=>(0,R.jsx)(L,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,R.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=et({defaultValues:{numberInput:`5`}});return(0,R.jsxs)(Xe,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,R.jsx)(T,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,R.jsx)(tt,{name:`numberInput`,control:e,render:({field:e})=>(0,R.jsx)(L,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,R.jsx)(we,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
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
}`,...$.parameters?.docs?.source}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rt.parameters?.docs?.source}}}})))()}Bt();export{Z as Addon,z as Basic,$ as BorderColor,It as CustomComponent,Ft as CustomStepper,H as DefaultValue,J as Disabled,K as DisabledClampValueOnBlur,q as DisabledKeepWithinRange,Q as Element,X as Invalid,U as MinMax,G as Precision,Lt as ReactHookForm,Rt as ReactHookFormWithDefaultValue,Y as ReadOnly,B as Size,W as Step,V as Variant,zt as __namedExportsOrder,Pt as default};