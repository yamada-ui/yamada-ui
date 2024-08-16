import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{r as a}from"./index-BwDkhjyp.js";import{u as at,C as ot}from"./index.esm-CMZNHfZV.js";import{u as lt}from"./index-CYOgy8MG.js";import{t as ct}from"./index-B3VHUiMU.js";import{b as ut}from"./icon-DlM2UXmR.js";import{f as Ze}from"./forward-ref-BmTAT9U5.js";import{B as O,Y as it,b as ee,c as te,t as dt,l as mt,T as gt,a as ft,h as R,d as P}from"./factory-CZghEhwx.js";import{m as pt,M as ht}from"./motion-BbiaHiM5.js";import{u as xt,f as bt,F as oe}from"./form-control-DfYO3poJ.js";import{c as jt}from"./number-49BHn0Cl.js";import{a as Ct}from"./use-component-style-CvJcpWCJ.js";import{o as St}from"./theme-provider-pE-Jw8XJ.js";import{S as It,L as yt,a as Rt,F as wt,A as Vt}from"./smile-C94KQef3.js";import{G as B}from"./ghost-DS_XWqEF.js";import{V as Ft}from"./stack-C1fz6XaD.js";import{B as vt}from"./button-DRFp3Iqw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CFbrAKmS.js";import"./extends-CF3RwP-h.js";import"./motion-Bd6WkMzw.js";import"./lucide-icon-CszED9-7.js";import"./use-ripple-F66HgrKB.js";import"./index-Ms_xn5rh.js";import"./loading-C_vx8yvh.js";const kt=Ze(({className:r,groupValue:t,value:n,fractionValue:l,color:o,...u},h)=>{const{styles:m,inputProps:g,emptyIcon:I=e.jsx(ge,{}),filledIcon:k=e.jsx(ge,{}),itemProps:w}=ne(),{isActive:j,isFilled:x,getInputProps:y,getItemProps:S}=Ot({value:n,groupValue:t,fractionValue:l}),z=O(w,n),C=O(g,n),i=o?{_filled:{color:it(o)?[o,o]:o}}:{},f={display:"block",lineHeight:"0",...m.item,...i};return e.jsxs(e.Fragment,{children:[e.jsx(ee.input,{...y(C,h)}),e.jsx(ee.label,{className:te("ui-rating__item",r),__css:f,...S({...z,...u}),children:e.jsx(Mt,{clipPath:l!==1?`inset(0 ${j?100-l*100:100}% 0 0)`:void 0,children:x?O(k,t):O(I,t)})})]})}),Mt=({className:r,children:t,...n})=>{const{styles:l}=ne(),u=dt(t).map(m=>a.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),h={display:"inline-flex",alignItems:"center",justifyContent:"center",...l.icon};return e.jsx(ee.div,{className:te("ui-rating__item__icon",r),__css:h,...n,children:u})},ge=({...r})=>e.jsx(ut,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Pt=pt(({className:r,value:t,items:n,color:l,...o},u)=>{const{styles:h,decimal:m,groupProps:g,getGroupProps:I}=ne(),k=O(g,t),w={...h.group};return e.jsx(ht,{className:te("ui-rating__group",r),__css:w,...I({value:t,...k,...o},u),children:Array(n).fill(0).map((j,x)=>{const y=m*(t===1?x:x+1),S=ae(t-1+y,m);return e.jsx(kt,{groupValue:t,value:S,fractionValue:y,color:l},`${t}-${y}`)})})}),ae=(r,t)=>{var o;const n=Math.round(r/t)*t,l=((o=`${t}`.split(".")[1])==null?void 0:o.length)||0;return Number(n.toFixed(l))},[_t,ne]=mt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Dt=({name:r,color:t,value:n,defaultValue:l=0,onChange:o,items:u=5,fractions:h=1,highlightSelectedOnly:m=!1,onHover:g,groupProps:I,itemProps:k,inputProps:w,emptyIcon:j,filledIcon:x,...y})=>{let{id:S,"aria-readonly":z,...C}=xt(y);const{disabled:i,readOnly:f}=C,_=a.useRef(null),[T,D]=lt({value:n,defaultValue:l,onChange:o}),[p,M]=a.useState(-1),[E,$]=a.useState(!0);S??(S=a.useId()),r??(r=`rating-${S}`);const se=gt(C,bt),d=Math.floor(h),V=Math.floor(u),F=1/d,le=ae(T,F),et=p!==-1?p:le,A=a.useCallback(c=>{const{left:b,width:v}=_.current.getBoundingClientRect(),re=v/V,rt=(c-b)/re;return jt(ae(rt+F/2,F),F,V)},[F,V]),ce=a.useCallback(()=>{!i&&!f&&$(!1)},[i,f]),ue=a.useCallback(()=>{i||f||(M(-1),$(!0),p!==-1&&(g==null||g(-1)))},[i,p,g,f,M]),ie=a.useCallback(c=>{c.preventDefault();const b=c.touches[0];if(!b)return;const v=A(b.clientX);D(v)},[A,D]),de=a.useCallback(c=>{c.preventDefault()},[]),me=a.useCallback(c=>{if(i||f)return;const b=A(c.clientX);M(b),b!==p&&(g==null||g(b))},[i,A,p,f,g]),tt=a.useCallback((c={},b=null)=>({ref:ft(b,_),...C,...c,id:S,onMouseEnter:R(ce,c.onMouseEnter,C.onMouseEnter),onMouseMove:R(me,c.onMouseMove,C.onMouseMove),onMouseLeave:R(ue,c.onMouseLeave,C.onMouseLeave),onTouchStart:R(ie,c.onTouchStart,C.onTouchStart),onTouchEnd:R(de,c.onTouchEnd,C.onTouchEnd)}),[ce,ue,me,de,ie,S,C]),nt=a.useCallback(({value:c,...b},v=null)=>{const re=!f&&Math.ceil(p)===c;return{ref:v,whileTap:!i&&!f?{y:-4}:void 0,...b,tabIndex:-1,"data-active":P(re)}},[i,p,f]),st=Array(V).fill(0).map((c,b)=>{const v=b+1;return e.jsx(Pt,{value:v,color:O(t,v),items:b===0?d+1:d},v)});return{getContainerProps:tt,getGroupProps:nt,id:S,name:r,value:T,roundedValue:le,hoveredValue:p,resolvedValue:et,isOutside:E,setValue:D,setHoveredValue:M,decimal:F,highlightSelectedOnly:m,formControlProps:se,groupProps:I,itemProps:k,inputProps:w,children:st,emptyIcon:j,filledIcon:x}},Ot=({groupValue:r,fractionValue:t,value:n})=>{const{id:l,name:o,formControlProps:u,isOutside:h,highlightSelectedOnly:m,roundedValue:g,resolvedValue:I,setValue:k,setHoveredValue:w}=ne(),{readOnly:j,disabled:x}=u,[y,S]=a.useState(!1),[z,C]=a.useState(!1),i=n===I,f=n===g,_=m?n===I:n<=I,T=a.useCallback(()=>{S(!1),h&&w(-1)},[h,w]),D=a.useCallback(d=>{if(j||x)return;const V=parseFloat(d.target.value);w(V)},[x,j,w]),p=a.useCallback(d=>{j||x||k(d)},[x,j,k]),M=a.useCallback(()=>{j||x||p(n)},[x,p,j,n]),E=a.useCallback(()=>{j||x||p(n)},[x,p,j,n]),$=a.useCallback((d={},V=null)=>{const F=i?1:-1;return{ref:V,htmlFor:`${l}-${r}-${n}`,...u,...d,zIndex:t!==1?F:void 0,onMouseDown:R(M,d.onMouseDown),onTouchStart:R(E,d.onTouchStart),"data-active":P(i),"data-filled":P(_),"data-focus":P(y),"data-focus-visible":P(y&&z)}},[u,t,r,l,i,_,z,y,M,E,n]),se=a.useCallback((d={},V=null)=>({ref:V,"aria-label":`${n}`,...u,...d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${l}-${r}-${n}`,name:o,value:n,checked:f,onChange:R(D,d.onChange),onFocus:R(()=>S(!0),d.onFocus),onBlur:R(T,d.onBlur),onKeyDown:R(F=>F.key===" "?p(n):void 0,d.onKeyDown),"data-active":P(i),"data-checked":P(f)}),[n,u,l,r,o,f,D,T,i,p]);return a.useEffect(()=>ct(C),[]),{isActive:i,isChecked:f,isFilled:_,getItemProps:$,getInputProps:se}},s=Ze((r,t)=>{const[n,l]=Ct("Rating",r),{className:o,...u}=St(l),{getContainerProps:h,children:m,...g}=Dt(u),I={display:"flex",...n.container};return e.jsx(_t,{value:{styles:n,...g},children:e.jsx(ee.div,{className:te("ui-rating",o),__css:I,...h({},t),children:m})})}),ln={title:"Components / Forms / Rating",component:s},G=()=>e.jsx(s,{}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),Y=()=>e.jsx(s,{defaultValue:3}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{fractions:2,defaultValue:1.5}),e.jsx(s,{fractions:3,defaultValue:2.33}),e.jsx(s,{fractions:4,defaultValue:3.75})]}),K=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isDisabled:!0,defaultValue:3}),e.jsx(oe,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isReadOnly:!0,defaultValue:3}),e.jsx(oe,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:r,defaultValue:3}),e.jsx(s,{color:r,defaultValue:3,fractions:3})]})},J=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e.jsx(Vt,{});case 2:return e.jsx(wt,{});case 3:return e.jsx(Rt,{});case 4:return e.jsx(yt,{});case 5:return e.jsx(It,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(B,{}),filledIcon:e.jsx(B,{})}),e.jsx(s,{defaultValue:2,fractions:3,emptyIcon:e.jsx(B,{}),filledIcon:e.jsx(B,{})}),e.jsx(s,{gap:"xs",emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},Q=()=>{const[r,t]=a.useState(3);return e.jsx(s,{value:r,onChange:t})},Z=()=>{var h;const r={rating:3},{control:t,handleSubmit:n,watch:l,formState:{errors:o}}=at({defaultValues:r}),u=m=>console.log("submit:",m);return console.log("watch:",l()),e.jsxs(Ft,{as:"form",onSubmit:n(u),children:[e.jsx(oe,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(h=o.rating)==null?void 0:h.message,children:e.jsx(ot,{name:"rating",control:t,render:({field:m})=>e.jsx(s,{...m})})}),e.jsx(vt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var fe,pe,he;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(he=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var xe,be,je;L.parameters={...L.parameters,docs:{...(xe=L.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(je=(be=L.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Ce,Se,Ie;N.parameters={...N.parameters,docs:{...(Ce=N.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Ie=(Se=N.parameters)==null?void 0:Se.docs)==null?void 0:Ie.source}}};var ye,Re,we;Y.parameters={...Y.parameters,docs:{...(ye=Y.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(we=(Re=Y.parameters)==null?void 0:Re.docs)==null?void 0:we.source}}};var Ve,Fe,ve;U.parameters={...U.parameters,docs:{...(Ve=U.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(ve=(Fe=U.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var ke,Me,Pe;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(Pe=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var _e,De,Oe;K.parameters={...K.parameters,docs:{...(_e=K.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Oe=(De=K.parameters)==null?void 0:De.docs)==null?void 0:Oe.source}}};var ze,Te,Ee;W.parameters={...W.parameters,docs:{...(ze=W.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ee=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var $e,Ae,Be;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Be=(Ae=X.parameters)==null?void 0:Ae.docs)==null?void 0:Be.source}}};var Ge,Le,Ne;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Ne.source}}};var Ye,Ue,He;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(He=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:He.source}}};var Ke,We,Xe;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Xe=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var qe,Je,Qe;Z.parameters={...Z.parameters,docs:{...(qe=Z.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=Z.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};const cn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{cn as __namedExportsOrder,G as basic,q as customColor,Q as customControl,J as customIcon,ln as default,W as isDisabled,X as isReadonly,Z as reactHookForm,N as withColorScheme,Y as withDefaultValue,H as withFractions,K as withHighlightSelectedOnly,U as withItems,L as withSize};
