import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{r as a}from"./index-uCp2LrAq.js";import{u as at,C as ot}from"./index.esm-TLwx9zN6.js";import{u as lt}from"./index-Dc2KQwVC.js";import{t as ct}from"./index-BkEwqnoP.js";import{b as ut}from"./icon-CVBZDjqd.js";import{f as oe}from"./forward-ref-Dr5Hqd9a.js";import{B as O,ag as it,b as ee,c as te,t as dt,l as mt,T as gt,a as ft,h as R,d as P}from"./factory-Bf0a1C4O.js";import{M as pt}from"./motion-BPPCNfSa.js";import{u as ht,f as xt,F as le}from"./form-control-WczVVmWv.js";import{c as bt}from"./number-49BHn0Cl.js";import{a as jt}from"./use-component-style-C0MoE1pt.js";import{o as Ct}from"./theme-provider-zwL-D6eR.js";import{S as St,L as It,a as yt,F as Rt,A as Vt}from"./smile-BvNh8D3j.js";import{G as B}from"./ghost-CkQVrR-f.js";import{V as wt}from"./stack-DeQ5YYY4.js";import{B as Ft}from"./button-DOTfyR12.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BJ39ysE2.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./motion-B-hZ6xRg.js";import"./lucide-icon-BNUZiTU8.js";import"./use-ripple-op6oFSyJ.js";import"./index-B5H6KlGO.js";import"./loading-BMMGc-Ko.js";const vt=oe(({className:r,groupValue:t,value:n,fractionValue:l,color:o,...u},h)=>{const{styles:m,inputProps:g,emptyIcon:I=e.jsx(fe,{}),filledIcon:k=e.jsx(fe,{}),itemProps:V}=ne(),{isActive:j,isFilled:x,getInputProps:y,getItemProps:S}=Dt({value:n,groupValue:t,fractionValue:l}),z=O(V,n),C=O(g,n),i=o?{_filled:{color:it(o)?[o,o]:o}}:{},f={display:"block",lineHeight:"0",...m.item,...i};return e.jsxs(e.Fragment,{children:[e.jsx(ee.input,{...y(C,h)}),e.jsx(ee.label,{className:te("ui-rating__item",r),__css:f,...S({...z,...u}),children:e.jsx(kt,{clipPath:l!==1?`inset(0 ${j?100-l*100:100}% 0 0)`:void 0,children:x?O(k,t):O(I,t)})})]})}),kt=({className:r,children:t,...n})=>{const{styles:l}=ne(),u=dt(t).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),h={display:"inline-flex",alignItems:"center",justifyContent:"center",...l.icon};return e.jsx(ee.div,{className:te("ui-rating__item__icon",r),__css:h,...n,children:u})},fe=({...r})=>e.jsx(ut,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Mt=oe(({className:r,value:t,items:n,color:l,...o},u)=>{const{styles:h,decimal:m,groupProps:g,getGroupProps:I}=ne(),k=O(g,t),V={...h.group};return e.jsx(pt,{className:te("ui-rating__group",r),__css:V,...I({value:t,...k,...o},u),children:Array(n).fill(0).map((j,x)=>{const y=m*(t===1?x:x+1),S=ae(t-1+y,m);return e.jsx(vt,{groupValue:t,value:S,fractionValue:y,color:l},`${t}-${y}`)})})}),ae=(r,t)=>{var o;const n=Math.round(r/t)*t,l=((o=`${t}`.split(".")[1])==null?void 0:o.length)||0;return Number(n.toFixed(l))},[Pt,ne]=mt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),_t=({name:r,color:t,value:n,defaultValue:l=0,onChange:o,items:u=5,fractions:h=1,highlightSelectedOnly:m=!1,onHover:g,groupProps:I,itemProps:k,inputProps:V,emptyIcon:j,filledIcon:x,...y})=>{let{id:S,"aria-readonly":z,...C}=ht(y);const{disabled:i,readOnly:f}=C,_=a.useRef(null),[T,D]=lt({value:n,defaultValue:l,onChange:o}),[p,M]=a.useState(-1),[E,$]=a.useState(!0);S??(S=a.useId()),r??(r=`rating-${S}`);const se=gt(C,xt),d=Math.floor(h),w=Math.floor(u),F=1/d,ce=ae(T,F),et=p!==-1?p:ce,A=a.useCallback(c=>{const{left:b,width:v}=_.current.getBoundingClientRect(),re=v/w,rt=(c-b)/re;return bt(ae(rt+F/2,F),F,w)},[F,w]),ue=a.useCallback(()=>{!i&&!f&&$(!1)},[i,f]),ie=a.useCallback(()=>{i||f||(M(-1),$(!0),p!==-1&&(g==null||g(-1)))},[i,p,g,f,M]),de=a.useCallback(c=>{c.preventDefault();const b=c.touches[0];if(!b)return;const v=A(b.clientX);D(v)},[A,D]),me=a.useCallback(c=>{c.preventDefault()},[]),ge=a.useCallback(c=>{if(i||f)return;const b=A(c.clientX);M(b),b!==p&&(g==null||g(b))},[i,A,p,f,g]),tt=a.useCallback((c={},b=null)=>({ref:ft(b,_),...C,...c,id:S,onMouseEnter:R(ue,c.onMouseEnter,C.onMouseEnter),onMouseMove:R(ge,c.onMouseMove,C.onMouseMove),onMouseLeave:R(ie,c.onMouseLeave,C.onMouseLeave),onTouchStart:R(de,c.onTouchStart,C.onTouchStart),onTouchEnd:R(me,c.onTouchEnd,C.onTouchEnd)}),[ue,ie,ge,me,de,S,C]),nt=a.useCallback(({value:c,...b},v=null)=>{const re=!f&&Math.ceil(p)===c;return{ref:v,whileTap:!i&&!f?{y:-4}:void 0,...b,tabIndex:-1,"data-active":P(re)}},[i,p,f]),st=Array(w).fill(0).map((c,b)=>{const v=b+1;return e.jsx(Mt,{value:v,color:O(t,v),items:b===0?d+1:d},v)});return{getContainerProps:tt,getGroupProps:nt,id:S,name:r,value:T,roundedValue:ce,hoveredValue:p,resolvedValue:et,isOutside:E,setValue:D,setHoveredValue:M,decimal:F,highlightSelectedOnly:m,formControlProps:se,groupProps:I,itemProps:k,inputProps:V,children:st,emptyIcon:j,filledIcon:x}},Dt=({groupValue:r,fractionValue:t,value:n})=>{const{id:l,name:o,formControlProps:u,isOutside:h,highlightSelectedOnly:m,roundedValue:g,resolvedValue:I,setValue:k,setHoveredValue:V}=ne(),{readOnly:j,disabled:x}=u,[y,S]=a.useState(!1),[z,C]=a.useState(!1),i=n===I,f=n===g,_=m?n===I:n<=I,T=a.useCallback(()=>{S(!1),h&&V(-1)},[h,V]),D=a.useCallback(d=>{if(j||x)return;const w=parseFloat(d.target.value);V(w)},[x,j,V]),p=a.useCallback(d=>{j||x||k(d)},[x,j,k]),M=a.useCallback(()=>{j||x||p(n)},[x,p,j,n]),E=a.useCallback(()=>{j||x||p(n)},[x,p,j,n]),$=a.useCallback((d={},w=null)=>{const F=i?1:-1;return{ref:w,htmlFor:`${l}-${r}-${n}`,...u,...d,zIndex:t!==1?F:void 0,onMouseDown:R(M,d.onMouseDown),onTouchStart:R(E,d.onTouchStart),"data-active":P(i),"data-filled":P(_),"data-focus":P(y),"data-focus-visible":P(y&&z)}},[u,t,r,l,i,_,z,y,M,E,n]),se=a.useCallback((d={},w=null)=>({ref:w,"aria-label":`${n}`,...u,...d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${l}-${r}-${n}`,name:o,value:n,checked:f,onChange:R(D,d.onChange),onFocus:R(()=>S(!0),d.onFocus),onBlur:R(T,d.onBlur),onKeyDown:R(F=>F.key===" "?p(n):void 0,d.onKeyDown),"data-active":P(i),"data-checked":P(f)}),[n,u,l,r,o,f,D,T,i,p]);return a.useEffect(()=>ct(C),[]),{isActive:i,isChecked:f,isFilled:_,getItemProps:$,getInputProps:se}},s=oe((r,t)=>{const[n,l]=jt("Rating",r),{className:o,...u}=Ct(l),{getContainerProps:h,children:m,...g}=_t(u),I={display:"flex",...n.container};return e.jsx(Pt,{value:{styles:n,...g},children:e.jsx(ee.div,{className:te("ui-rating",o),__css:I,...h({},t),children:m})})}),on={title:"Components / Forms / Rating",component:s},G=()=>e.jsx(s,{}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),U=()=>e.jsx(s,{defaultValue:3}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{fractions:2,defaultValue:1.5}),e.jsx(s,{fractions:3,defaultValue:2.33}),e.jsx(s,{fractions:4,defaultValue:3.75})]}),K=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isDisabled:!0,defaultValue:3}),e.jsx(le,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isReadOnly:!0,defaultValue:3}),e.jsx(le,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:r,defaultValue:3}),e.jsx(s,{color:r,defaultValue:3,fractions:3})]})},J=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e.jsx(Vt,{});case 2:return e.jsx(Rt,{});case 3:return e.jsx(yt,{});case 4:return e.jsx(It,{});case 5:return e.jsx(St,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(B,{}),filledIcon:e.jsx(B,{})}),e.jsx(s,{defaultValue:2,fractions:3,emptyIcon:e.jsx(B,{}),filledIcon:e.jsx(B,{})}),e.jsx(s,{gap:"xs",emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},Q=()=>{const[r,t]=a.useState(3);return e.jsx(s,{value:r,onChange:t})},Z=()=>{var h;const r={rating:3},{control:t,handleSubmit:n,watch:l,formState:{errors:o}}=at({defaultValues:r}),u=m=>console.log("submit:",m);return console.log("watch:",l()),e.jsxs(wt,{as:"form",onSubmit:n(u),children:[e.jsx(le,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(h=o.rating)==null?void 0:h.message,children:e.jsx(ot,{name:"rating",control:t,render:({field:m})=>e.jsx(s,{...m})})}),e.jsx(Ft,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,he,xe;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(xe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var be,je,Ce;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Ce=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Se,Ie,ye;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(ye=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Re,Ve,we;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(we=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Fe,ve,ke;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(ke=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Me,Pe,_e;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(_e=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var De,Oe,ze;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(ze=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Te,Ee,$e;W.parameters={...W.parameters,docs:{...(Te=W.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...($e=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};var Ae,Be,Ge;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ge=(Be=X.parameters)==null?void 0:Be.docs)==null?void 0:Ge.source}}};var Le,Ne,Ue;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "yellow.500";
      case 4:
        return "green.500";
      case 5:
        return "blue.500";
      default:
        return undefined;
    }
  };
  return <>
      <Rating color="green.500" defaultValue={3} />
      <Rating color={getColor} defaultValue={3} />
      <Rating color={getColor} defaultValue={3} fractions={3} />
    </>;
}`,...(Ue=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Ye,He,Ke;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  const getColor = (value: number) => {
    switch (value) {
      case 1:
        return "red.500";
      case 2:
        return "orange.500";
      case 3:
        return "yellow.500";
      case 4:
        return "green.500";
      case 5:
        return "blue.500";
      default:
        return undefined;
    }
  };
  const getIcon = (value: number) => {
    switch (value) {
      case 1:
        return <Angry />;
      case 2:
        return <Frown />;
      case 3:
        return <Smile />;
      case 4:
        return <Laugh />;
      case 5:
        return <SmilePlus />;
      default:
        return null;
    }
  };
  return <>
      <Rating defaultValue={3} emptyIcon={<Ghost />} filledIcon={<Ghost />} />

      <Rating defaultValue={2} fractions={3} emptyIcon={<Ghost />} filledIcon={<Ghost />} />

      <Rating gap="xs" emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" color={getColor} emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" fractions={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>;
}`,...(Ke=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var We,Xe,qe;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(qe=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  type Data = {
    rating: number;
  };
  const defaultValues: Data = {
    rating: 3
  };
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.rating} label="How satisfied are you with Yamada UI?" errorMessage={errors.rating?.message}>
        <Controller name="rating" control={control} render={({
        field
      }) => <Rating {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(Ze=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const ln=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{ln as __namedExportsOrder,G as basic,q as customColor,Q as customControl,J as customIcon,on as default,W as isDisabled,X as isReadonly,Z as reactHookForm,N as withColorScheme,U as withDefaultValue,H as withFractions,K as withHighlightSelectedOnly,Y as withItems,L as withSize};
