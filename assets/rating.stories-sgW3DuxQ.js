import{j as e,a as k,F as D}from"./jsx-runtime-5BUNAZ9W.js";import{I as O,f as G,r as ct,s as lt,t as it,u as ut,v as dt}from"./fontawesome-icon-2ePRZBC_.js";import{r as o}from"./index-4g5l5LRQ.js";import{u as mt,C as ft}from"./index.esm-rcUR5vC1.js";import{u as gt}from"./index-jXL2Te6W.js";import{t as pt}from"./index-vCh5g2YD.js";import{b as ht}from"./icon-_12WOtQg.js";import{f as le}from"./forward-ref-A-8Arhkk.js";import{B as T,a6 as It,u as ne,a as ae,v as Ct,c as bt,Q as St,w as yt,o as Vt,h as x,K as $}from"./factory-_mTQY6PK.js";import{M as Rt}from"./motion-V5SSOO6i.js";import{u as wt,g as Ft,F as ie}from"./form-control-9XpnQ7XD.js";import{c as vt}from"./number-RReIgE2V.js";import{u as xt}from"./use-component-style-lJBCD4Hi.js";import{o as kt}from"./theme-provider-XorC6D0y.js";import{V as Pt}from"./stack-_c9sAZKA.js";import{B as Mt}from"./button-cMSAhBpk.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-z6pzycMb.js";import"./motion-heeYkzTb.js";import"./use-ripple-NMzR3tTC.js";import"./index-eMn_GZVX.js";import"./loading-MtZqCvSr.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";const _t=le(({className:r,groupValue:t,value:n,fractionValue:c,color:s,...u},g)=>{const{styles:d,inputProps:m,emptyIcon:y=e(he,{}),filledIcon:z=e(he,{}),itemProps:w}=re(),{isActive:V,isFilled:I,getInputProps:R,getItemProps:C}=Bt({value:n,groupValue:t,fractionValue:c}),h=T(w,n),b=T(m,n),l=s?{_filled:{color:It(s)?[s,s]:s}}:{},P={display:"block",lineHeight:"0",...d.item,...l};return k(D,{children:[e(ne.input,{...R(b,g)}),e(ne.label,{className:ae("ui-rating__item",r),__css:P,...C({...h,...u}),children:e(Ot,{clipPath:c!==1?`inset(0 ${V?100-c*100:100}% 0 0)`:void 0,children:I?T(z,t):T(y,t)})})]})}),Ot=({className:r,children:t,...n})=>{const{styles:c}=re(),u=Ct(t).map(d=>o.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",...c.icon};return e(ne.div,{className:ae("ui-rating__item__icon",r),__css:g,...n,children:u})},he=({...r})=>e(ht,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Dt=le(({className:r,value:t,items:n,color:c,...s},u)=>{const{styles:g,decimal:d,groupProps:m,getGroupProps:y}=re(),z=T(m,t),w={...g.group};return e(Rt,{className:ae("ui-rating__group",r),__css:w,...y({value:t,...z,...s},u),children:Array(n).fill(0).map((V,I)=>{const R=d*(t===1?I:I+1),C=ce(t-1+R,d);return e(_t,{groupValue:t,value:C,fractionValue:R,color:c},`${t}-${R}`)})})}),ce=(r,t)=>{var s;const n=Math.round(r/t)*t,c=((s=`${t}`.split(".")[1])==null?void 0:s.length)||0;return Number(n.toFixed(c))},[zt,re]=bt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),$t=({name:r,color:t,value:n,defaultValue:c=0,onChange:s,items:u=5,fractions:g=1,highlightSelectedOnly:d=!1,onHover:m,groupProps:y,itemProps:z,inputProps:w,emptyIcon:V,filledIcon:I,...R})=>{let{id:C,...h}=wt(R);const{disabled:b,readOnly:l}=h,P=o.useRef(null),[B,E]=gt({value:n,defaultValue:c,onChange:s}),[S,M]=o.useState(-1),[j,A]=o.useState(!0);C??(C=o.useId()),r??(r=`rating-${C}`);const oe=St(h,Ft({omit:["aria-readonly"]})),f=Math.floor(g),F=Math.floor(u),v=1/f,ue=ce(B,v),nt=S!==-1?S:ue,N=o.useCallback(i=>{const{left:p,width:_}=P.current.getBoundingClientRect(),se=_/F,st=(i-p)/se;return vt(ce(st+v/2,v),v,F)},[v,F]),de=o.useCallback(()=>{!b&&!l&&A(!1)},[b,l]),me=o.useCallback(()=>{b||l||(M(-1),A(!0),S!==-1&&(m==null||m(-1)))},[b,S,m,l,M]),fe=o.useCallback(i=>{i.preventDefault();const p=i.touches[0];if(!p)return;const _=N(p.clientX);E(_)},[N,E]),ge=o.useCallback(i=>{i.preventDefault()},[]),pe=o.useCallback(i=>{if(b||l)return;const p=N(i.clientX);M(p),p!==S&&(m==null||m(p))},[b,N,S,l,m]),at=o.useCallback((i={},p=null)=>({ref:yt(p,P),...Vt(h,["aria-readonly"]),...i,id:C,onMouseEnter:x(de,i.onMouseEnter,h.onMouseEnter),onMouseMove:x(pe,i.onMouseMove,h.onMouseMove),onMouseLeave:x(me,i.onMouseLeave,h.onMouseLeave),onTouchStart:x(fe,i.onTouchStart,h.onTouchStart),onTouchEnd:x(ge,i.onTouchEnd,h.onTouchEnd)}),[de,me,pe,ge,fe,C,h]),rt=o.useCallback(({value:i,...p},_=null)=>{const se=!l&&Math.ceil(S)===i;return{ref:_,whileTap:!b&&!l?{y:-4}:void 0,...p,tabIndex:-1,"data-active":$(se)}},[b,S,l]),ot=Array(F).fill(0).map((i,p)=>{const _=p+1;return e(Dt,{value:_,color:T(t,_),items:p===0?f+1:f},_)});return{getContainerProps:at,getGroupProps:rt,id:C,name:r,value:B,roundedValue:ue,hoveredValue:S,resolvedValue:nt,isOutside:j,setValue:E,setHoveredValue:M,decimal:v,highlightSelectedOnly:d,formControlProps:oe,groupProps:y,itemProps:z,inputProps:w,children:ot,emptyIcon:V,filledIcon:I}},Bt=({groupValue:r,fractionValue:t,value:n})=>{const{id:c,name:s,formControlProps:u,isOutside:g,highlightSelectedOnly:d,roundedValue:m,resolvedValue:y,setValue:z,setHoveredValue:w}=re(),{readOnly:V,disabled:I}=u,[R,C]=o.useState(!1),[h,b]=o.useState(!1),l=n===y,P=n===m,B=d?n===y:n<=y,E=o.useCallback(()=>{C(!1),g&&w(-1)},[g,w]),S=o.useCallback(f=>{if(V||I)return;const F=parseFloat(f.target.value);w(F)},[I,V,w]),M=o.useCallback(f=>{V||I||z(f)},[I,V,z]),j=o.useCallback(()=>{V||I||M(n)},[I,M,V,n]),A=o.useCallback((f={},F=null)=>{const v=l?1:-1;return{ref:F,htmlFor:`${c}-${r}-${n}`,...u,...f,zIndex:t!==1?v:void 0,onClick:x(j,f.onClick),"data-active":$(l),"data-filled":$(B),"data-focus":$(R),"data-focus-visible":$(R&&h)}},[u,t,r,c,l,B,h,R,j,n]),oe=o.useCallback((f={},F=null)=>({ref:F,"aria-label":`${n}`,...u,...f,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${c}-${r}-${n}`,name:s,value:n,checked:P,onChange:x(S,f.onChange),onFocus:x(()=>C(!0),f.onFocus),onBlur:x(E,f.onBlur),onKeyDown:x(v=>v.key===" "?M(n):void 0,f.onKeyDown),"data-active":$(l),"data-checked":$(P)}),[n,u,c,r,s,P,S,E,l,M]);return o.useEffect(()=>pt(b),[]),{isActive:l,isChecked:P,isFilled:B,getItemProps:A,getInputProps:oe}},a=le((r,t)=>{const[n,c]=xt("Rating",r),{className:s,...u}=kt(c),{getContainerProps:g,children:d,...m}=$t(u),y={display:"flex",...n.container};return e(zt,{value:{styles:n,...m},children:e(ne.div,{className:ae("ui-rating",s),__css:y,...g({},t),children:d})})}),ln={title:"Components / Forms / Rating",component:a},L=()=>e(a,{}),U=()=>k(D,{children:[e(a,{size:"xs",defaultValue:3}),e(a,{size:"sm",defaultValue:3}),e(a,{size:"md",defaultValue:3}),e(a,{size:"lg",defaultValue:3}),e(a,{size:"xl",defaultValue:3})]}),Y=()=>k(D,{children:[e(a,{colorScheme:"purple",defaultValue:3}),e(a,{colorScheme:"pink",defaultValue:3})]}),H=()=>e(a,{defaultValue:3}),K=()=>k(D,{children:[e(a,{items:4}),e(a,{items:5}),e(a,{items:6})]}),W=()=>k(D,{children:[e(a,{fractions:2,defaultValue:1.5}),e(a,{fractions:3,defaultValue:2.33}),e(a,{fractions:4,defaultValue:3.75})]}),X=()=>e(a,{defaultValue:3,highlightSelectedOnly:!0}),Q=()=>k(D,{children:[e(a,{isDisabled:!0,defaultValue:3}),e(ie,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),q=()=>k(D,{children:[e(a,{isReadOnly:!0,defaultValue:3}),e(ie,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),J=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return k(D,{children:[e(a,{color:"green.500",defaultValue:3}),e(a,{color:r,defaultValue:3}),e(a,{color:r,defaultValue:3,fractions:3})]})},Z=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e(O,{icon:dt});case 2:return e(O,{icon:ut});case 3:return e(O,{icon:it});case 4:return e(O,{icon:lt});case 5:return e(O,{icon:ct});default:return null}};return k(D,{children:[e(a,{defaultValue:3,emptyIcon:e(O,{icon:G}),filledIcon:e(O,{icon:G})}),e(a,{defaultValue:2,fractions:3,emptyIcon:e(O,{icon:G}),filledIcon:e(O,{icon:G})}),e(a,{gap:"xs",emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},ee=()=>{const[r,t]=o.useState(3);return e(a,{value:r,onChange:t})},te=()=>{var g;const r={rating:3},{control:t,handleSubmit:n,watch:c,formState:{errors:s}}=mt({defaultValues:r}),u=d=>console.log("submit:",d);return console.log("watch:",c()),k(Pt,{as:"form",onSubmit:n(u),children:[e(ie,{isInvalid:!!s.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(g=s.rating)==null?void 0:g.message,children:e(ft,{name:"rating",control:t,render:({field:d})=>e(a,{...d})})}),e(Mt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ie,Ce,be;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(be=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Se,ye,Ve;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Ve=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:Ve.source}}};var Re,we,Fe;Y.parameters={...Y.parameters,docs:{...(Re=Y.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Fe=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var ve,xe,ke;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ke=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Pe,Me,_e;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(_e=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var Oe,De,ze;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(ze=(De=W.parameters)==null?void 0:De.docs)==null?void 0:ze.source}}};var $e,Be,Ee;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ee=(Be=X.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Te,je,Ae;Q.parameters={...Q.parameters,docs:{...(Te=Q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ae=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:Ae.source}}};var Ne,Ge,Le;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Le=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};var Ue,Ye,He;J.parameters={...J.parameters,docs:{...(Ue=J.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(Ye=J.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ke,We,Xe;Z.parameters={...Z.parameters,docs:{...(Ke=Z.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Xe=(We=Z.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var Qe,qe,Je;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Je=(qe=ee.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Ze,et,tt;te.parameters={...te.parameters,docs:{...(Ze=te.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(tt=(et=te.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const un=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{un as __namedExportsOrder,L as basic,J as customColor,ee as customControl,Z as customIcon,ln as default,Q as isDisabled,q as isReadonly,te as reactHookForm,Y as withColorScheme,H as withDefaultValue,W as withFractions,X as withHighlightSelectedOnly,K as withItems,U as withSize};
