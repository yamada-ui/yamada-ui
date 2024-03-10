import{j as e,a as k,F as D}from"./jsx-runtime-5BUNAZ9W.js";import{I as _,f as L,r as ct,s as lt,t as it,u as ut,v as dt}from"./fontawesome-icon-QaEYchDX.js";import{r as o}from"./index-4g5l5LRQ.js";import{u as mt,C as ft}from"./index.esm-3DtIbTPy.js";import{u as gt}from"./index-Vh0hV8nJ.js";import{t as pt}from"./index-hShTmnag.js";import{b as ht}from"./icon-TnMv01N9.js";import{f as ie}from"./forward-ref-A-8Arhkk.js";import{B as E,a6 as It,u as ae,a as re,v as St,c as bt,Q as Ct,w as yt,o as Vt,h as v,K as z}from"./factory-Ph6enxrH.js";import{M as Rt}from"./motion-8yXhIBtj.js";import{u as wt,g as Ft,F as ue}from"./form-control-jETNKENd.js";import{c as vt}from"./number-RReIgE2V.js";import{u as xt}from"./use-component-style-ZmBgLZU3.js";import{o as kt}from"./theme-provider-wPz8KGo2.js";import{V as Mt}from"./stack-741Osi6q.js";import{B as Pt}from"./button-fmMV717I.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-n36vw3Ek.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./motion-heeYkzTb.js";import"./use-ripple-hoxvAc5g.js";import"./index-eMn_GZVX.js";import"./loading-6Si3C0_e.js";import"./index-uwAkCu1e.js";import"./index-cLrauuw6.js";const _t=ie(({className:r,groupValue:t,value:n,fractionValue:c,color:s,...d},g)=>{const{styles:m,inputProps:f,emptyIcon:R=e(he,{}),filledIcon:O=e(he,{}),itemProps:x}=oe(),{isActive:S,isFilled:p,getInputProps:w,getItemProps:b}=$t({value:n,groupValue:t,fractionValue:c}),I=E(x,n),C=E(f,n),l=s?{_filled:{color:It(s)?[s,s]:s}}:{},M={display:"block",lineHeight:"0",...m.item,...l};return k(D,{children:[e(ae.input,{...w(C,g)}),e(ae.label,{className:re("ui-rating__item",r),__css:M,...b({...I,...d}),children:e(Dt,{clipPath:c!==1?`inset(0 ${S?100-c*100:100}% 0 0)`:void 0,children:p?E(O,t):E(R,t)})})]})}),Dt=({className:r,children:t,...n})=>{const{styles:c}=oe(),d=St(t).map(m=>o.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",...c.icon};return e(ae.div,{className:re("ui-rating__item__icon",r),__css:g,...n,children:d})},he=({...r})=>e(ht,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Ot=ie(({className:r,value:t,items:n,color:c,...s},d)=>{const{styles:g,decimal:m,groupProps:f,getGroupProps:R}=oe(),O=E(f,t),x={...g.group};return e(Rt,{className:re("ui-rating__group",r),__css:x,...R({value:t,...O,...s},d),children:Array(n).fill(0).map((S,p)=>{const w=m*(t===1?p:p+1),b=le(t-1+w,m);return e(_t,{groupValue:t,value:b,fractionValue:w,color:c},`${t}-${w}`)})})}),le=(r,t)=>{var s;const n=Math.round(r/t)*t,c=((s=`${t}`.split(".")[1])==null?void 0:s.length)||0;return Number(n.toFixed(c))},[zt,oe]=bt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Tt=({name:r,color:t,value:n,defaultValue:c=0,onChange:s,items:d=5,fractions:g=1,highlightSelectedOnly:m=!1,onHover:f,groupProps:R,itemProps:O,inputProps:x,emptyIcon:S,filledIcon:p,...w})=>{let{id:b,...I}=wt(w);const{disabled:C,readOnly:l}=I,M=o.useRef(null),[T,$]=gt({value:n,defaultValue:c,onChange:s}),[y,F]=o.useState(-1),[N,j]=o.useState(!0);b??(b=o.useId()),r??(r=`rating-${b}`);const se=Ct(I,Ft({omit:["aria-readonly"]})),A=Math.floor(g),i=Math.floor(d),V=1/A,B=le(T,V),nt=y!==-1?y:B,G=o.useCallback(u=>{const{left:h,width:P}=M.current.getBoundingClientRect(),ce=P/i,st=(u-h)/ce;return vt(le(st+V/2,V),V,i)},[V,i]),de=o.useCallback(()=>{!C&&!l&&j(!1)},[C,l]),me=o.useCallback(()=>{C||l||(F(-1),j(!0),y!==-1&&(f==null||f(-1)))},[C,y,f,l,F]),fe=o.useCallback(u=>{u.preventDefault();const h=u.touches[0];if(!h)return;const P=G(h.clientX);$(P)},[G,$]),ge=o.useCallback(u=>{u.preventDefault()},[]),pe=o.useCallback(u=>{if(C||l)return;const h=G(u.clientX);F(h),h!==y&&(f==null||f(h))},[C,G,y,l,f]),at=o.useCallback((u={},h=null)=>({ref:yt(h,M),...Vt(I,["aria-readonly"]),...u,id:b,onMouseEnter:v(de,u.onMouseEnter,I.onMouseEnter),onMouseMove:v(pe,u.onMouseMove,I.onMouseMove),onMouseLeave:v(me,u.onMouseLeave,I.onMouseLeave),onTouchStart:v(fe,u.onTouchStart,I.onTouchStart),onTouchEnd:v(ge,u.onTouchEnd,I.onTouchEnd)}),[de,me,pe,ge,fe,b,I]),rt=o.useCallback(({value:u,...h},P=null)=>{const ce=!l&&Math.ceil(y)===u;return{ref:P,whileTap:!C&&!l?{y:-4}:void 0,...h,tabIndex:-1,"data-active":z(ce)}},[C,y,l]),ot=Array(i).fill(0).map((u,h)=>{const P=h+1;return e(Ot,{value:P,color:E(t,P),items:h===0?A+1:A},P)});return{getContainerProps:at,getGroupProps:rt,id:b,name:r,value:T,roundedValue:B,hoveredValue:y,resolvedValue:nt,isOutside:N,setValue:$,setHoveredValue:F,decimal:V,highlightSelectedOnly:m,formControlProps:se,groupProps:R,itemProps:O,inputProps:x,children:ot,emptyIcon:S,filledIcon:p}},$t=({groupValue:r,fractionValue:t,value:n})=>{const{id:c,name:s,formControlProps:d,isOutside:g,highlightSelectedOnly:m,roundedValue:f,resolvedValue:R,setValue:O,setHoveredValue:x}=oe(),{readOnly:S,disabled:p}=d,[w,b]=o.useState(!1),[I,C]=o.useState(!1),l=n===R,M=n===f,T=m?n===R:n<=R,$=o.useCallback(()=>{b(!1),g&&x(-1)},[g,x]),y=o.useCallback(i=>{if(S||p)return;const V=parseFloat(i.target.value);x(V)},[p,S,x]),F=o.useCallback(i=>{S||p||O(i)},[p,S,O]),N=o.useCallback(()=>{S||p||F(n)},[p,F,S,n]),j=o.useCallback(()=>{S||p||F(n)},[p,F,S,n]),se=o.useCallback((i={},V=null)=>{const B=l?1:-1;return{ref:V,htmlFor:`${c}-${r}-${n}`,...d,...i,zIndex:t!==1?B:void 0,onMouseDown:v(N,i.onMouseDown),onTouchStart:v(j,i.onTouchStart),"data-active":z(l),"data-filled":z(T),"data-focus":z(w),"data-focus-visible":z(w&&I)}},[d,t,r,c,l,T,I,w,N,j,n]),A=o.useCallback((i={},V=null)=>({ref:V,"aria-label":`${n}`,...d,...i,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${c}-${r}-${n}`,name:s,value:n,checked:M,onChange:v(y,i.onChange),onFocus:v(()=>b(!0),i.onFocus),onBlur:v($,i.onBlur),onKeyDown:v(B=>B.key===" "?F(n):void 0,i.onKeyDown),"data-active":z(l),"data-checked":z(M)}),[n,d,c,r,s,M,y,$,l,F]);return o.useEffect(()=>pt(C),[]),{isActive:l,isChecked:M,isFilled:T,getItemProps:se,getInputProps:A}},a=ie((r,t)=>{const[n,c]=xt("Rating",r),{className:s,...d}=kt(c),{getContainerProps:g,children:m,...f}=Tt(d),R={display:"flex",...n.container};return e(zt,{value:{styles:n,...f},children:e(ae.div,{className:re("ui-rating",s),__css:R,...g({},t),children:m})})}),dn={title:"Components / Forms / Rating",component:a},U=()=>e(a,{}),Y=()=>k(D,{children:[e(a,{size:"xs",defaultValue:3}),e(a,{size:"sm",defaultValue:3}),e(a,{size:"md",defaultValue:3}),e(a,{size:"lg",defaultValue:3}),e(a,{size:"xl",defaultValue:3})]}),H=()=>k(D,{children:[e(a,{colorScheme:"purple",defaultValue:3}),e(a,{colorScheme:"pink",defaultValue:3})]}),K=()=>e(a,{defaultValue:3}),W=()=>k(D,{children:[e(a,{items:4}),e(a,{items:5}),e(a,{items:6})]}),X=()=>k(D,{children:[e(a,{fractions:2,defaultValue:1.5}),e(a,{fractions:3,defaultValue:2.33}),e(a,{fractions:4,defaultValue:3.75})]}),Q=()=>e(a,{defaultValue:3,highlightSelectedOnly:!0}),q=()=>k(D,{children:[e(a,{isDisabled:!0,defaultValue:3}),e(ue,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),J=()=>k(D,{children:[e(a,{isReadOnly:!0,defaultValue:3}),e(ue,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),Z=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return k(D,{children:[e(a,{color:"green.500",defaultValue:3}),e(a,{color:r,defaultValue:3}),e(a,{color:r,defaultValue:3,fractions:3})]})},ee=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e(_,{icon:dt});case 2:return e(_,{icon:ut});case 3:return e(_,{icon:it});case 4:return e(_,{icon:lt});case 5:return e(_,{icon:ct});default:return null}};return k(D,{children:[e(a,{defaultValue:3,emptyIcon:e(_,{icon:L}),filledIcon:e(_,{icon:L})}),e(a,{defaultValue:2,fractions:3,emptyIcon:e(_,{icon:L}),filledIcon:e(_,{icon:L})}),e(a,{gap:"xs",emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},te=()=>{const[r,t]=o.useState(3);return e(a,{value:r,onChange:t})},ne=()=>{var g;const r={rating:3},{control:t,handleSubmit:n,watch:c,formState:{errors:s}}=mt({defaultValues:r}),d=m=>console.log("submit:",m);return console.log("watch:",c()),k(Mt,{as:"form",onSubmit:n(d),children:[e(ue,{isInvalid:!!s.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(g=s.rating)==null?void 0:g.message,children:e(ft,{name:"rating",control:t,render:({field:m})=>e(a,{...m})})}),e(Pt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ie,Se,be;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(be=(Se=U.parameters)==null?void 0:Se.docs)==null?void 0:be.source}}};var Ce,ye,Ve;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Ve=(ye=Y.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};var Re,we,Fe;H.parameters={...H.parameters,docs:{...(Re=H.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Fe=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var ve,xe,ke;K.parameters={...K.parameters,docs:{...(ve=K.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ke=(xe=K.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Me,Pe,_e;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(_e=(Pe=W.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var De,Oe,ze;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(ze=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Te,$e,Be;Q.parameters={...Q.parameters,docs:{...(Te=Q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Be=($e=Q.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var Ee,je,Ae;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ae=(je=q.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Ne,Ge,Le;J.parameters={...J.parameters,docs:{...(Ne=J.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Le=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};var Ue,Ye,He;Z.parameters={...Z.parameters,docs:{...(Ue=Z.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(Ye=Z.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ke,We,Xe;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Xe=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Qe,qe,Je;te.parameters={...te.parameters,docs:{...(Qe=te.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Je=(qe=te.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Ze,et,tt;ne.parameters={...ne.parameters,docs:{...(Ze=ne.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(tt=(et=ne.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const mn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{mn as __namedExportsOrder,U as basic,Z as customColor,te as customControl,ee as customIcon,dn as default,q as isDisabled,J as isReadonly,ne as reactHookForm,H as withColorScheme,K as withDefaultValue,X as withFractions,Q as withHighlightSelectedOnly,W as withItems,Y as withSize};
