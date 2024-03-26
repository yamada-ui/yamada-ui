import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as M,f as N,u as st,v as ot,w as ct,x as lt,y as it}from"./fontawesome-icon-JaZ0dMxh.js";import{r as s}from"./index-CBqU2yxZ.js";import{u as ut,C as dt}from"./index.esm-CiJ9mLzm.js";import{u as mt}from"./index-DOHT0qqe.js";import{t as ft}from"./index-BVuFOGdT.js";import{b as gt}from"./icon-B3uV5IZ5.js";import{f as ce}from"./forward-ref-DuAegr0M.js";import{D as T,ad as pt,u as te,c as ne,t as ht,p as xt,Q as It,v as jt,C as St,h as w,y as _}from"./factory-D1MzC1Q2.js";import{M as bt}from"./motion-C1gM6QUe.js";import{u as Ct,g as yt,F as le}from"./form-control-Dbo-pJGm.js";import{c as Rt}from"./number-49BHn0Cl.js";import{a as Vt}from"./use-component-style-i7T2CPTB.js";import{o as wt}from"./theme-provider-LCtE2tbw.js";import{V as Ft}from"./stack-Co-fUSRT.js";import{B as vt}from"./button-BkvW6mjw.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CYT3-ShY.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./motion-JgkBPv6g.js";import"./use-ripple-K38Z2Edq.js";import"./index-_tcQm2Fk.js";import"./loading-BxQYss10.js";import"./index-BY3Kv4Lb.js";import"./index-D62GHI4F.js";const kt=ce(({className:r,groupValue:t,value:n,fractionValue:c,color:o,...d},g)=>{const{styles:m,inputProps:f,emptyIcon:y=e.jsx(ge,{}),filledIcon:P=e.jsx(ge,{}),itemProps:F}=ae(),{isActive:I,isFilled:p,getInputProps:R,getItemProps:j}=Ot({value:n,groupValue:t,fractionValue:c}),x=T(F,n),S=T(f,n),l=o?{_filled:{color:pt(o)?[o,o]:o}}:{},v={display:"block",lineHeight:"0",...m.item,...l};return e.jsxs(e.Fragment,{children:[e.jsx(te.input,{...R(S,g)}),e.jsx(te.label,{className:ne("ui-rating__item",r),__css:v,...j({...x,...d}),children:e.jsx(Mt,{clipPath:c!==1?`inset(0 ${I?100-c*100:100}% 0 0)`:void 0,children:p?T(P,t):T(y,t)})})]})}),Mt=({className:r,children:t,...n})=>{const{styles:c}=ae(),d=ht(t).map(m=>s.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",...c.icon};return e.jsx(te.div,{className:ne("ui-rating__item__icon",r),__css:g,...n,children:d})},ge=({...r})=>e.jsx(gt,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Pt=ce(({className:r,value:t,items:n,color:c,...o},d)=>{const{styles:g,decimal:m,groupProps:f,getGroupProps:y}=ae(),P=T(f,t),F={...g.group};return e.jsx(bt,{className:ne("ui-rating__group",r),__css:F,...y({value:t,...P,...o},d),children:Array(n).fill(0).map((I,p)=>{const R=m*(t===1?p:p+1),j=oe(t-1+R,m);return e.jsx(kt,{groupValue:t,value:j,fractionValue:R,color:c},`${t}-${R}`)})})}),oe=(r,t)=>{var o;const n=Math.round(r/t)*t,c=((o=`${t}`.split(".")[1])==null?void 0:o.length)||0;return Number(n.toFixed(c))},[_t,ae]=xt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Dt=({name:r,color:t,value:n,defaultValue:c=0,onChange:o,items:d=5,fractions:g=1,highlightSelectedOnly:m=!1,onHover:f,groupProps:y,itemProps:P,inputProps:F,emptyIcon:I,filledIcon:p,...R})=>{let{id:j,...x}=Ct(R);const{disabled:S,readOnly:l}=x,v=s.useRef(null),[D,O]=mt({value:n,defaultValue:c,onChange:o}),[b,V]=s.useState(-1),[B,E]=s.useState(!0);j??(j=s.useId()),r??(r=`rating-${j}`);const re=It(x,yt({omit:["aria-readonly"]})),$=Math.floor(g),i=Math.floor(d),C=1/$,z=oe(D,C),et=b!==-1?b:z,A=s.useCallback(u=>{const{left:h,width:k}=v.current.getBoundingClientRect(),se=k/i,rt=(u-h)/se;return Rt(oe(rt+C/2,C),C,i)},[C,i]),ie=s.useCallback(()=>{!S&&!l&&E(!1)},[S,l]),ue=s.useCallback(()=>{S||l||(V(-1),E(!0),b!==-1&&(f==null||f(-1)))},[S,b,f,l,V]),de=s.useCallback(u=>{u.preventDefault();const h=u.touches[0];if(!h)return;const k=A(h.clientX);O(k)},[A,O]),me=s.useCallback(u=>{u.preventDefault()},[]),fe=s.useCallback(u=>{if(S||l)return;const h=A(u.clientX);V(h),h!==b&&(f==null||f(h))},[S,A,b,l,f]),tt=s.useCallback((u={},h=null)=>({ref:jt(h,v),...St(x,["aria-readonly"]),...u,id:j,onMouseEnter:w(ie,u.onMouseEnter,x.onMouseEnter),onMouseMove:w(fe,u.onMouseMove,x.onMouseMove),onMouseLeave:w(ue,u.onMouseLeave,x.onMouseLeave),onTouchStart:w(de,u.onTouchStart,x.onTouchStart),onTouchEnd:w(me,u.onTouchEnd,x.onTouchEnd)}),[ie,ue,fe,me,de,j,x]),nt=s.useCallback(({value:u,...h},k=null)=>{const se=!l&&Math.ceil(b)===u;return{ref:k,whileTap:!S&&!l?{y:-4}:void 0,...h,tabIndex:-1,"data-active":_(se)}},[S,b,l]),at=Array(i).fill(0).map((u,h)=>{const k=h+1;return e.jsx(Pt,{value:k,color:T(t,k),items:h===0?$+1:$},k)});return{getContainerProps:tt,getGroupProps:nt,id:j,name:r,value:D,roundedValue:z,hoveredValue:b,resolvedValue:et,isOutside:B,setValue:O,setHoveredValue:V,decimal:C,highlightSelectedOnly:m,formControlProps:re,groupProps:y,itemProps:P,inputProps:F,children:at,emptyIcon:I,filledIcon:p}},Ot=({groupValue:r,fractionValue:t,value:n})=>{const{id:c,name:o,formControlProps:d,isOutside:g,highlightSelectedOnly:m,roundedValue:f,resolvedValue:y,setValue:P,setHoveredValue:F}=ae(),{readOnly:I,disabled:p}=d,[R,j]=s.useState(!1),[x,S]=s.useState(!1),l=n===y,v=n===f,D=m?n===y:n<=y,O=s.useCallback(()=>{j(!1),g&&F(-1)},[g,F]),b=s.useCallback(i=>{if(I||p)return;const C=parseFloat(i.target.value);F(C)},[p,I,F]),V=s.useCallback(i=>{I||p||P(i)},[p,I,P]),B=s.useCallback(()=>{I||p||V(n)},[p,V,I,n]),E=s.useCallback(()=>{I||p||V(n)},[p,V,I,n]),re=s.useCallback((i={},C=null)=>{const z=l?1:-1;return{ref:C,htmlFor:`${c}-${r}-${n}`,...d,...i,zIndex:t!==1?z:void 0,onMouseDown:w(B,i.onMouseDown),onTouchStart:w(E,i.onTouchStart),"data-active":_(l),"data-filled":_(D),"data-focus":_(R),"data-focus-visible":_(R&&x)}},[d,t,r,c,l,D,x,R,B,E,n]),$=s.useCallback((i={},C=null)=>({ref:C,"aria-label":`${n}`,...d,...i,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${c}-${r}-${n}`,name:o,value:n,checked:v,onChange:w(b,i.onChange),onFocus:w(()=>j(!0),i.onFocus),onBlur:w(O,i.onBlur),onKeyDown:w(z=>z.key===" "?V(n):void 0,i.onKeyDown),"data-active":_(l),"data-checked":_(v)}),[n,d,c,r,o,v,b,O,l,V]);return s.useEffect(()=>ft(S),[]),{isActive:l,isChecked:v,isFilled:D,getItemProps:re,getInputProps:$}},a=ce((r,t)=>{const[n,c]=Vt("Rating",r),{className:o,...d}=wt(c),{getContainerProps:g,children:m,...f}=Dt(d),y={display:"flex",...n.container};return e.jsx(_t,{value:{styles:n,...f},children:e.jsx(te.div,{className:ne("ui-rating",o),__css:y,...g({},t),children:m})})}),ln={title:"Components / Forms / Rating",component:a},G=()=>e.jsx(a,{}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",defaultValue:3}),e.jsx(a,{size:"sm",defaultValue:3}),e.jsx(a,{size:"md",defaultValue:3}),e.jsx(a,{size:"lg",defaultValue:3}),e.jsx(a,{size:"xl",defaultValue:3})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{colorScheme:"purple",defaultValue:3}),e.jsx(a,{colorScheme:"pink",defaultValue:3})]}),Y=()=>e.jsx(a,{defaultValue:3}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{items:4}),e.jsx(a,{items:5}),e.jsx(a,{items:6})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{fractions:2,defaultValue:1.5}),e.jsx(a,{fractions:3,defaultValue:2.33}),e.jsx(a,{fractions:4,defaultValue:3.75})]}),W=()=>e.jsx(a,{defaultValue:3,highlightSelectedOnly:!0}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,defaultValue:3}),e.jsx(le,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,defaultValue:3}),e.jsx(le,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"green.500",defaultValue:3}),e.jsx(a,{color:r,defaultValue:3}),e.jsx(a,{color:r,defaultValue:3,fractions:3})]})},J=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e.jsx(M,{icon:it});case 2:return e.jsx(M,{icon:lt});case 3:return e.jsx(M,{icon:ct});case 4:return e.jsx(M,{icon:ot});case 5:return e.jsx(M,{icon:st});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,emptyIcon:e.jsx(M,{icon:N}),filledIcon:e.jsx(M,{icon:N})}),e.jsx(a,{defaultValue:2,fractions:3,emptyIcon:e.jsx(M,{icon:N}),filledIcon:e.jsx(M,{icon:N})}),e.jsx(a,{gap:"xs",emptyIcon:t,filledIcon:t}),e.jsx(a,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e.jsx(a,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},Z=()=>{const[r,t]=s.useState(3);return e.jsx(a,{value:r,onChange:t})},ee=()=>{var g;const r={rating:3},{control:t,handleSubmit:n,watch:c,formState:{errors:o}}=ut({defaultValues:r}),d=m=>console.log("submit:",m);return console.log("watch:",c()),e.jsxs(Ft,{as:"form",onSubmit:n(d),children:[e.jsx(le,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(g=o.rating)==null?void 0:g.message,children:e.jsx(dt,{name:"rating",control:t,render:({field:m})=>e.jsx(a,{...m})})}),e.jsx(vt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,he,xe;G.parameters={...G.parameters,docs:{...(pe=G.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(xe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ie,je,Se;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Se=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var be,Ce,ye;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(ye=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:ye.source}}};var Re,Ve,we;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(we=(Ve=Y.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Fe,ve,ke;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(ke=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Me,Pe,_e;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(_e=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var De,Oe,ze;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(ze=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Te,Ee,$e;X.parameters={...X.parameters,docs:{...(Te=X.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...($e=(Ee=X.parameters)==null?void 0:Ee.docs)==null?void 0:$e.source}}};var Be,Ae,Ne;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ne=(Ae=Q.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var Ge,Le,Ue;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Le=q.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,Ke;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
        return <Icon icon={faFaceSadCry} />;
      case 2:
        return <Icon icon={faFaceSadTear} />;
      case 3:
        return <Icon icon={faFaceSmile} />;
      case 4:
        return <Icon icon={faFaceSmileBeam} />;
      case 5:
        return <Icon icon={faFaceGrinStars} />;
      default:
        return null;
    }
  };
  return <>
      <Rating defaultValue={3} emptyIcon={<Icon icon={faPoo} />} filledIcon={<Icon icon={faPoo} />} />

      <Rating defaultValue={2} fractions={3} emptyIcon={<Icon icon={faPoo} />} filledIcon={<Icon icon={faPoo} />} />

      <Rating gap="xs" emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" color={getColor} emptyIcon={getIcon} filledIcon={getIcon} />

      <Rating gap="xs" fractions={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>;
}`,...(Ke=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var We,Xe,Qe;Z.parameters={...Z.parameters,docs:{...(We=Z.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Qe=(Xe=Z.parameters)==null?void 0:Xe.docs)==null?void 0:Qe.source}}};var qe,Je,Ze;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Ze.source}}};const un=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{un as __namedExportsOrder,G as basic,q as customColor,Z as customControl,J as customIcon,ln as default,X as isDisabled,Q as isReadonly,ee as reactHookForm,U as withColorScheme,Y as withDefaultValue,K as withFractions,W as withHighlightSelectedOnly,H as withItems,L as withSize};
