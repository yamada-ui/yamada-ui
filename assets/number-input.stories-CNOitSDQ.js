import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-eq8zrF0J.js";import{Cn as n,Dn as r,En as i,Ut as a,_n as o,ft as s,ht as c,i as l,jn as u,lt as d,mt as f,nn as p,o as ee,pt as m,st as h,tn as g,ut as _,zn as v}from"./props-sAZv67b_.js";import{i as te,r as y}from"./i18n-provider-CVU3vuxJ.js";import{n as ne,o as re,t as ie}from"./number-u-voAp4w.js";import{t as ae}from"./jsx-runtime-BdxMnOeJ.js";import{n as oe,r as se,t as ce}from"./effect-DSHKlzEK.js";import{d as b,i as x,n as le,r as ue}from"./create-component-CMKj7xAv.js";import{n as de,r as fe,t as pe}from"./icon-xw_sbHRh.js";import{n as S,t as C}from"./createLucideIcon-ByMcIZ7k.js";import{n as w,t as me}from"./chevron-down-icon-Cphx4gZ3.js";import{n as he,t as ge}from"./chevron-up-icon-DhWz6llg.js";import{n as _e,t as T}from"./minus-icon-9R_pDi-f.js";import{n as ve,t as ye}from"./plus-icon-C1DquOls.js";import{n as be,t as xe}from"./use-event-listener-CqPlNE82.js";import{r as Se,t as Ce}from"./button-AV9CQoi4.js";import{c as we,r as Te,s as E,t as Ee}from"./use-field-props-CyoS4fh-.js";import{n as De,t as Oe}from"./button.style-DxmXQPWD.js";import{r as ke,t as Ae}from"./icon-button-Dv1oAMnF.js";import{i as je,r as Me}from"./group-CQXy65sq.js";import{a as D,c as Ne,i as Pe,l as O,r as Fe,s as Ie,t as Le}from"./input-B5TB9MIC.js";import{a as Re,i as ze,n as Be,o as Ve,r as He,t as k}from"./input-group-Rhq0kt_k.js";import{n as Ue,t as A}from"./for-qrDiH4Lk.js";import{n as We,t as Ge}from"./use-interval-CVS6qf5s.js";import{n as Ke,t as qe}from"./h-stack-CJ3-YqDh.js";import{n as Je,t as Ye}from"./v-stack-DiF-BdkI.js";import{n as Xe,t as Ze}from"./props-table-DnYpWynU.js";import{n as Qe,r as $e,t as et}from"./index.esm-BFTTYzQs.js";var tt,nt;function rt(){return(rt=e((()=>{S(),tt={name:`gauge`,size:24,node:[[`path`,{d:`m12 14 4-4`,key:`9kzdfg`}],[`path`,{d:`M3.34 19a10 10 0 1 1 17.32 0`,key:`19p75a`}]]},tt.node,nt=C(tt)})))()}var j;function it(){return(it=e((()=>{rt(),fe(),j=de(pe)({as:nt})})))()}var at;function ot(){return(ot=e((()=>{b(),De(),Ne(),at=x({base:{button:{...Oe.base,flex:`1`,lineHeight:`1`,rounded:`l1`},control:{display:`flex`,flexDirection:`column`},decrement:{},field:O.base,increment:{},root:{}},variants:{base:{button:{layerStyle:`ghost`,focusVisibleRing:`none`,_hover:{layerStyle:`ghost.hover`},_focusVisible:{layerStyle:`ghost.hover`}}},filled:{field:O.variants?.filled},flushed:{field:O.variants?.flushed,root:Ie(`& > input`)},outline:{field:O.variants?.outline},plain:{field:O.variants?.plain}},sizes:{xs:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.xs.fontSize},field:O.sizes?.xs,root:D(O.sizes?.xs.minH,`& > input`)},sm:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.sm.fontSize},field:O.sizes?.sm,root:D(O.sizes?.sm.minH,`& > input`)},md:{control:{boxSize:`calc({--height} - {spaces.2})`,fontSize:O.sizes?.md.fontSize},field:O.sizes?.md,root:D(O.sizes?.md.minH,`& > input`)},lg:{control:{boxSize:`calc({--height} - {spaces.2.5})`,fontSize:O.sizes?.lg.fontSize},field:O.sizes?.lg,root:D(O.sizes?.lg.minH,`& > input`)},xl:{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:O.sizes?.xl.fontSize},field:O.sizes?.xl,root:D(O.sizes?.xl.minH,`& > input`)},"2xl":{control:{boxSize:`calc({--height} - {spaces.3})`,fontSize:O.sizes?.[`2xl`].fontSize},field:O.sizes?.[`2xl`],root:D(O.sizes?.[`2xl`].minH,`& > input`)}},defaultProps:{size:`md`,variant:`outline`}})})))()}var M,N,st,ct,lt;function ut(){return(ut=e((()=>{M=t(),h(),N=e=>parseFloat(e.toString().replace(/[^\w.-]+/g,``)),st=(e,t)=>Math.max(ne(t),ne(e)),ct=(e,t,n)=>(e=N(e),Number.isNaN(e)?void 0:re(e,n??st(e,t))),lt=({keepWithinRange:e=!0,max:t=2**53-1,min:n=-(2**53-1),step:r=1,...i}={})=>{let a=_(i.onChange),[o,s]=(0,M.useState)(()=>i.defaultValue==null?``:ct(i.defaultValue,r,i.precision)??``),c=i.value!==void 0,l=c?i.value:o,u=st(N(l),r),d=i.precision??u,f=(0,M.useCallback)(e=>{e!==l&&(c||s(e.toString()),a(e.toString(),N(e)))},[a,c,l]),p=(0,M.useCallback)(r=>{let i=r;return e&&(i=ie(i,n,t)),re(i,d)},[d,e,t,n]),ee=(0,M.useCallback)((e=r)=>{let t;t=l===``?N(e):N(l)+e,t=p(t),f(t)},[p,r,f,l]),m=(0,M.useCallback)((e=r)=>{let t;t=l===``?N(-e):N(l)-e,t=p(t),f(t)},[p,r,f,l]),h=(0,M.useCallback)(()=>{let e;e=i.defaultValue==null?``:ct(i.defaultValue,r,i.precision)??n,f(e)},[i.defaultValue,i.precision,r,f,n]),g=(0,M.useCallback)(e=>{let t=ct(e,r,d)??n;f(t)},[d,r,f,n]),v=N(l);return{cast:g,clamp:p,decrement:m,increment:ee,max:v===t,min:v===n,out:v<n||t<v,precision:d,reset:h,setValue:s,step:r,update:f,value:l,valueAsNumber:v}}})))()}var P,dt,ft,pt;function mt(){return(mt=e((()=>{P=t(),Ge(),ce(),dt=50,ft=300,pt=({decrement:e,increment:t})=>{let[n,r]=(0,P.useState)(!1),[i,a]=(0,P.useState)(null),[o,s]=(0,P.useState)(!0),c=(0,P.useRef)(null);We(()=>{i===`increment`&&t(),i===`decrement`&&e()},n?dt:null);let l=(0,P.useCallback)(()=>{o&&t(),c.current=setTimeout(()=>{s(!1),r(!0),a(`increment`)},ft)},[t,o]),u=(0,P.useCallback)(()=>{o&&e(),c.current=setTimeout(()=>{s(!1),r(!0),a(`decrement`)},ft)},[e,o]),d=(0,P.useCallback)(()=>clearTimeout(c.current),[]),f=(0,P.useCallback)(()=>{s(!0),r(!1),d()},[d]);return se(d),{down:u,spinning:n,stop:f,up:l}}})))()}var F,ht;function gt(){return(gt=e((()=>{F=t(),l(),y(),r(),h(),s(),mt(),ht=({decrement:e,disabled:t,increment:n,keepWithinRange:r,max:a,min:o,...s})=>{let l=(0,F.useRef)(null),u=(0,F.useRef)(null),{down:f,spinning:p,stop:m,up:h}=pt({decrement:e,increment:n}),{t:g}=te(`numberInput`);c(l,[`disabled`],p,m),c(u,[`disabled`],p,m);let _=(0,F.useCallback)((e={})=>ee({type:`button`,disabled:t,tabIndex:-1},s,e,{onPointerLeave:m,onPointerUp:m})(),[s,t,m]),v=(0,F.useCallback)(({ref:e,...n}={})=>{let o=t||r&&a;return{ref:d(e,l),"aria-label":g(`Increase`),..._({disabled:o,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||o||(e.preventDefault(),h())})}},[_,t,r,a,h,g]);return{getDecrementProps:(0,F.useCallback)(({ref:e,...n}={})=>{let a=t||r&&o;return{ref:d(e,u),"aria-label":g(`Decrease`),..._({disabled:a,...n}),onPointerDown:i(n.onPointerDown,e=>{e.button!==0||a||(e.preventDefault(),f())})}},[_,t,r,o,f,g]),getIncrementProps:v}}})))()}var I,_t,vt,yt,bt,xt,St;function Ct(){return(Ct=e((()=>{I=t(),l(),ut(),xe(),g(),s(),h(),ce(),Ee(),gt(),_t=e=>e.toString(),vt=e=>e,yt=e=>/^[Ee0-9+\-.]$/.test(e),bt=({key:e,altKey:t,ctrlKey:n,metaKey:r},i)=>{let a=n||t||r;return e.length!==1||a?!0:i(e)},xt=({ctrlKey:e,metaKey:t,shiftKey:n})=>{let r=1;return(t||e)&&(r=.1),n&&(r=10),r},St=(e={})=>{let{props:{allowMouseWheel:t,clampValueOnBlur:n=!0,defaultValue:r,disabled:i,focusInputOnChange:o=!0,format:s=_t,getAriaValueText:c,isValidCharacter:l=yt,keepWithinRange:u=!0,max:h=2**53-1,min:g=-(2**53-1),parse:_=vt,precision:v,readOnly:te,step:y=1,value:ne,onChange:re,...ie},ariaProps:ae,dataProps:se,eventProps:ce}=Te(e),b=!(te||i),x=(0,I.useRef)(null),{cast:le,max:ue,min:de,out:fe,setValue:pe,update:S,value:C,valueAsNumber:w,...me}=lt({defaultValue:r,keepWithinRange:u,max:h,min:g,precision:v,step:y,value:ne,onChange:re}),he=(0,I.useRef)(null),ge=(0,I.useMemo)(()=>{let e=c?.(C);return e??(e=C.toString(),e||void 0)},[C,c]),_e=(0,I.useCallback)(e=>e.split(``).filter(l).join(``),[l]),T=(0,I.useCallback)((e=y)=>{b&&(me.increment(e),o&&requestAnimationFrame(()=>{x.current?.focus()}))},[b,me,y,o]),ve=(0,I.useCallback)((e=y)=>{b&&(me.decrement(e),o&&requestAnimationFrame(()=>{x.current?.focus()}))},[b,me,y,o]),ye=(0,I.useCallback)(e=>{if(m(e))return;let{selectionEnd:t,selectionStart:n,value:r}=e.currentTarget;S(_e(_(r))),he.current={end:t,start:n}},[_,_e,S]),xe=(0,I.useCallback)(e=>{if(!he.current)return;let{end:t,start:n}=he.current,{selectionStart:r,value:i}=e.currentTarget;e.currentTarget.selectionStart=n??i.length,e.currentTarget.selectionEnd=t??r},[]),Se=(0,I.useCallback)(()=>{if(!n)return;let e=C;C!==``&&(/^[eE]/.test(C.toString())?pe(``):(w<g&&(e=g),w>h&&(e=h),le(e)))},[le,n,h,g,pe,C,w]),Ce=(0,I.useCallback)(e=>{if(m(e))return;bt(e,l)||e.preventDefault();let t=xt(e)*y;f(e,{ArrowDown:()=>ve(t),ArrowUp:()=>T(t),End:()=>S(h),Home:()=>S(g)})},[ve,T,l,h,g,y,S]),{getDecrementProps:we,getIncrementProps:E}=ht({"aria-disabled":a(!b),decrement:ve,disabled:i,increment:T,keepWithinRange:u,max:ue,min:de,...se});return oe(()=>{x.current&&x.current.value!=C&&pe(_e(_(x.current.value)))},[_,_e]),be(x.current,`wheel`,e=>{if(!x.current)return;let n=p(x.current,x.current.getRootNode());if(!t||!n)return;e.preventDefault();let r=xt(e)*y,i=Math.sign(e.deltaY);i===-1?T(r):i===1&&ve(r)},{passive:!1}),{getDecrementProps:we,getIncrementProps:E,getInputProps:(0,I.useCallback)(({ref:e,...t}={})=>{let{ref:n,...r}=ie;return ee({...ae,...se,type:`text`,"aria-invalid":a(ae[`aria-invalid`]??fe),"aria-valuemax":h,"aria-valuemin":g,"aria-valuenow":Number.isNaN(w)?void 0:w,"aria-valuetext":ge,autoComplete:`off`,autoCorrect:`off`,disabled:i,inputMode:`decimal`,max:h,min:g,pattern:`[0-9]*(.[0-9]+)?`,readOnly:te,role:`spinbutton`,step:y,value:s(C)},r,ce,t,{ref:d(e,n,x),onBlur:Se,onChange:ye,onFocus:xe,onKeyDown:Ce})()},[s,fe,C,ge,ae,se,ce,h,g,w,i,te,y,ie,Ce,Se,xe,ye])}}})))()}var L,wt,Tt,Et,Dt,R,Ot,kt,At,jt;function Mt(){return(Mt=e((()=>{ue(),l(),Me(),w(),he(),Fe(),Be(),ze(),ot(),Ct(),L=ae(),{PropsContext:wt,usePropsContext:Tt,withContext:Et,withProvider:Dt}=le(`number-input`,at),R=Dt(({className:e,css:t,colorScheme:n,controlProps:r,decrementProps:i,elementProps:a,incrementProps:o,rootProps:s,...c})=>{let[l,u]=je(c),{getDecrementProps:d,getIncrementProps:f,getInputProps:p}=St(u);return(0,L.jsxs)(k,{className:e,css:t,colorScheme:n,...ee(l,s)(),children:[(0,L.jsx)(Ot,{...p()}),(0,L.jsx)(He,{clickable:!0,...a,children:(0,L.jsxs)(kt,{...r,children:[(0,L.jsx)(At,{...f(o)}),(0,L.jsx)(jt,{...d(i)})]})})]})},`root`)(e=>{let t=Pe();return ee(t,e)()}),Ot=Et(Le,`field`)({"data-group-propagate":``}),kt=Et(`div`,`control`)(),At=Et(`button`,[`button`,`increment`])(({children:e,...t})=>({children:e??(0,L.jsx)(ge,{}),...t})),jt=Et(`button`,[`button`,`decrement`])(({children:e,...t})=>({children:e??(0,L.jsx)(me,{}),...t}))})))()}var z,Nt,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Pt,Ft,It,Lt,Rt,zt;function Bt(){return(Bt=e((()=>{Qe(),Xe(),v(),o(),Se(),ke(),we(),Ue(),it(),_e(),ve(),Fe(),Be(),Ve(),ze(),Ke(),Je(),Mt(),Ct(),z=ae(),Nt={component:R,title:`Components / NumberInput`},B=()=>(0,z.jsx)(R,{placeholder:`Basic`}),V=()=>(0,z.jsx)(Ze,{variant:`stack`,columns:[`xs`,`sm`,`md`,`lg`,`xl`],rows:[`outline`,`filled`,`flushed`],children:(e,t,n)=>(0,z.jsx)(R,{size:e,variant:t,placeholder:`Size (${e})`},n)}),H=()=>(0,z.jsx)(Ze,{variant:`stack`,columns:[`outline`,`filled`,`flushed`],rows:u,children:(e,t,r)=>(0,z.jsx)(R,{colorScheme:t,variant:e,placeholder:n(e)},r)}),U=()=>(0,z.jsx)(R,{defaultValue:18,placeholder:`Order quantity`}),W=()=>(0,z.jsx)(R,{defaultValue:18,max:31,min:8,placeholder:`Order quantity`}),G=()=>(0,z.jsx)(R,{defaultValue:15,max:30,min:5,placeholder:`Order quantity`,step:5}),K=()=>(0,z.jsx)(R,{defaultValue:15,placeholder:`Order quantity`,precision:2,step:.2}),q=()=>(0,z.jsx)(R,{clampValueOnBlur:!1,defaultValue:15,max:30,placeholder:`Order quantity`}),J=()=>(0,z.jsx)(R,{clampValueOnBlur:!1,defaultValue:15,keepWithinRange:!1,max:30,placeholder:`Order quantity`}),Y=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,disabled:!0,placeholder:n(e)},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,disabled:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:n(e)})]},t)}),(0,z.jsx)(E,{disabled:!0,helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,children:(0,z.jsx)(R,{})})]}),X=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,placeholder:n(e),readOnly:!0},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,readOnly:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:n(e)})]},t)}),(0,z.jsx)(E,{helperMessage:`Please enter the quantity you wish to order.`,label:`Order quantity`,readOnly:!0,children:(0,z.jsx)(R,{})})]}),Z=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsx)(R,{variant:e,invalid:!0,placeholder:n(e)},t)}),(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,invalid:!0,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:n(e)})]},t)}),(0,z.jsx)(E,{errorMessage:`Order quantity is required.`,invalid:!0,label:`Order quantity`,children:(0,z.jsx)(R,{})})]}),Q=()=>(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,children:[(0,z.jsx)(Re,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Order quantity`})]},t)}),$=()=>(0,z.jsx)(A,{each:[`outline`,`filled`,`flushed`],children:(e,t)=>(0,z.jsxs)(k,{variant:e,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Order quantity`})]},t)}),Pt=()=>(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(R,{disabled:!0,placeholder:`Default border color`}),(0,z.jsx)(R,{focusBorderColor:`green.500`,placeholder:`Custom border color`}),(0,z.jsxs)(k,{variant:`flushed`,focusBorderColor:`green.500`,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Custom border color`})]}),(0,z.jsx)(R,{errorBorderColor:`orange.500`,invalid:!0,placeholder:`Custom border color`}),(0,z.jsxs)(k,{errorBorderColor:`orange.500`,invalid:!0,children:[(0,z.jsx)(He,{children:(0,z.jsx)(j,{})}),(0,z.jsx)(R,{placeholder:`Custom border color`})]})]}),Ft=()=>(0,z.jsx)(R,{placeholder:`Order quantity`,decrementProps:{children:(0,z.jsx)(T,{})},incrementProps:{children:(0,z.jsx)(ye,{})}}),It=()=>{let{getDecrementProps:e,getIncrementProps:t,getInputProps:n}=St({defaultValue:3.14,max:4,min:3,precision:2,step:.01});return(0,z.jsxs)(qe,{gap:`sm`,maxW:`xs`,children:[(0,z.jsx)(Ae,{icon:(0,z.jsx)(ye,{fontSize:`2xl`}),...t(),"aria-label":`Increment`}),(0,z.jsx)(Le,{...n(),"aria-label":`Number input`}),(0,z.jsx)(Ae,{icon:(0,z.jsx)(T,{fontSize:`2xl`}),...e(),"aria-label":`Decrement`})]})},Lt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=$e();return(0,z.jsxs)(Ye,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,z.jsx)(E,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,z.jsx)(et,{name:`numberInput`,control:e,render:({field:e})=>(0,z.jsx)(R,{...e}),rules:{max:{message:`The maximum value is 5.`,value:5},required:{message:`This is required.`,value:!0}}})}),(0,z.jsx)(Ce,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},Rt=()=>{let{control:e,formState:{errors:t},handleSubmit:n}=$e({defaultValues:{numberInput:`5`}});return(0,z.jsxs)(Ye,{as:`form`,onSubmit:n(e=>console.log(`submit:`,e)),children:[(0,z.jsx)(E,{errorMessage:t.numberInput?.message,invalid:!!t.numberInput,label:`Age`,children:(0,z.jsx)(et,{name:`numberInput`,control:e,render:({field:e})=>(0,z.jsx)(R,{...e}),rules:{required:{message:`This is required.`,value:!0}}})}),(0,z.jsx)(Ce,{type:`submit`,alignSelf:`flex-end`,children:`Submit`})]})},zt=[`Basic`,`Size`,`Variant`,`DefaultValue`,`MinMax`,`Step`,`Precision`,`DisabledClampValueOnBlur`,`DisabledKeepWithinRange`,`Disabled`,`ReadOnly`,`Invalid`,`Addon`,`Element`,`BorderColor`,`CustomStepper`,`CustomComponent`,`ReactHookForm`,`ReactHookFormWithDefaultValue`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <NumberInput placeholder="Basic" />;
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  return <For each={["outline", "filled", "flushed"] as const}>
      {(variant, index) => <InputGroup.Root key={index} variant={variant}>
          <InputGroup.Element>
            <GaugeIcon />
          </InputGroup.Element>
          <NumberInput placeholder="Order quantity" />
        </InputGroup.Root>}
    </For>;
}`,...$.parameters?.docs?.source}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`() => {
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
}`,...Rt.parameters?.docs?.source}}}})))()}Bt();export{Q as Addon,B as Basic,Pt as BorderColor,It as CustomComponent,Ft as CustomStepper,U as DefaultValue,Y as Disabled,q as DisabledClampValueOnBlur,J as DisabledKeepWithinRange,$ as Element,Z as Invalid,W as MinMax,K as Precision,Lt as ReactHookForm,Rt as ReactHookFormWithDefaultValue,X as ReadOnly,V as Size,G as Step,H as Variant,zt as __namedExportsOrder,Nt as default};