import{j as e,a as k,F as O}from"./jsx-runtime-5BUNAZ9W.js";import{I as D,f as G,r as ct,s as lt,t as it,u as ut,v as dt}from"./fontawesome-icon-KKwE51f2.js";import{r as o}from"./index-4g5l5LRQ.js";import{u as mt,C as ft}from"./index.esm-rcUR5vC1.js";import{u as gt}from"./index--H2JViwD.js";import{t as pt}from"./index-BvS90inx.js";import{b as ht}from"./icon-tPRIl-kA.js";import{f as le}from"./forward-ref-A-8Arhkk.js";import{B as T,a5 as It,u as ne,a as ae,v as Ct,c as bt,R as St,w as yt,h as x,K as $}from"./factory-d-SMqVb2.js";import{M as Rt}from"./motion-8v_Pxw1E.js";import{u as Vt,f as wt,F as ie}from"./form-control-PjPXCVZQ.js";import{a as vt}from"./number-T9-jc1Pg.js";import{u as Ft}from"./use-component-style-PZEwb5ud.js";import{o as xt}from"./theme-provider-ra3mBbD9.js";import{V as kt}from"./stack-LEtCveQr.js";import{B as Pt}from"./button-EhfgdiYF.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-as8PIm5E.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./motion-ukEXpwwk.js";import"./use-ripple-Z-W-SYoZ.js";import"./index-EargzzxG.js";import"./loading-PFbLA4vV.js";import"./index-JersHic9.js";import"./index-JczG5yj_.js";const Mt=le(({className:r,groupValue:t,value:n,fractionValue:c,color:s,...u},g)=>{const{styles:d,inputProps:m,emptyIcon:y=e(he,{}),filledIcon:z=e(he,{}),itemProps:w}=re(),{isActive:R,isFilled:I,getInputProps:V,getItemProps:C}=$t({value:n,groupValue:t,fractionValue:c}),h=T(w,n),b=T(m,n),l=s?{_filled:{color:It(s)?[s,s]:s}}:{},P={display:"block",lineHeight:"0",...d.item,...l};return k(O,{children:[e(ne.input,{...V(b,g)}),e(ne.label,{className:ae("ui-rating__item",r),__css:P,...C({...h,...u}),children:e(_t,{clipPath:c!==1?`inset(0 ${R?100-c*100:100}% 0 0)`:void 0,children:I?T(z,t):T(y,t)})})]})}),_t=({className:r,children:t,...n})=>{const{styles:c}=re(),u=Ct(t).map(d=>o.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",...c.icon};return e(ne.div,{className:ae("ui-rating__item__icon",r),__css:g,...n,children:u})},he=({...r})=>e(ht,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),Dt=le(({className:r,value:t,items:n,color:c,...s},u)=>{const{styles:g,decimal:d,groupProps:m,getGroupProps:y}=re(),z=T(m,t),w={...g.group};return e(Rt,{className:ae("ui-rating__group",r),__css:w,...y({value:t,...z,...s},u),children:Array(n).fill(0).map((R,I)=>{const V=d*(t===1?I:I+1),C=ce(t-1+V,d);return e(Mt,{groupValue:t,value:C,fractionValue:V,color:c},`${t}-${V}`)})})}),ce=(r,t)=>{var s;const n=Math.round(r/t)*t,c=((s=`${t}`.split(".")[1])==null?void 0:s.length)||0;return Number(n.toFixed(c))},[Ot,re]=bt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),zt=({name:r,color:t,value:n,defaultValue:c=0,onChange:s,items:u=5,fractions:g=1,highlightSelectedOnly:d=!1,onHover:m,groupProps:y,itemProps:z,inputProps:w,emptyIcon:R,filledIcon:I,...V})=>{let{id:C,...h}=Vt(V);const{disabled:b,readOnly:l}=h,P=o.useRef(null),[B,E]=gt({value:n,defaultValue:c,onChange:s}),[S,M]=o.useState(-1),[A,N]=o.useState(!0);C??(C=o.useId()),r??(r=`rating-${C}`);const oe=St(h,wt),f=Math.floor(g),v=Math.floor(u),F=1/f,ue=ce(B,F),nt=S!==-1?S:ue,j=o.useCallback(i=>{const{left:p,width:_}=P.current.getBoundingClientRect(),se=_/v,st=(i-p)/se;return vt(ce(st+F/2,F),F,v)},[F,v]),de=o.useCallback(()=>{!b&&!l&&N(!1)},[b,l]),me=o.useCallback(()=>{b||l||(M(-1),N(!0),S!==-1&&(m==null||m(-1)))},[b,S,m,l,M]),fe=o.useCallback(i=>{i.preventDefault();const p=i.touches[0];if(!p)return;const _=j(p.clientX);E(_)},[j,E]),ge=o.useCallback(i=>{i.preventDefault()},[]),pe=o.useCallback(i=>{if(b||l)return;const p=j(i.clientX);M(p),p!==S&&(m==null||m(p))},[b,j,S,l,m]),at=o.useCallback((i={},p=null)=>({ref:yt(p,P),...h,...i,id:C,onMouseEnter:x(de,i.onMouseEnter,h.onMouseEnter),onMouseMove:x(pe,i.onMouseMove,h.onMouseMove),onMouseLeave:x(me,i.onMouseLeave,h.onMouseLeave),onTouchStart:x(fe,i.onTouchStart,h.onTouchStart),onTouchEnd:x(ge,i.onTouchEnd,h.onTouchEnd)}),[de,me,pe,ge,fe,C,h]),rt=o.useCallback(({value:i,...p},_=null)=>{const se=!l&&Math.ceil(S)===i;return{ref:_,whileTap:!b&&!l?{y:-4}:void 0,...p,tabIndex:-1,"data-active":$(se)}},[b,S,l]),ot=Array(v).fill(0).map((i,p)=>{const _=p+1;return e(Dt,{value:_,color:T(t,_),items:p===0?f+1:f},_)});return{getContainerProps:at,getGroupProps:rt,id:C,name:r,value:B,roundedValue:ue,hoveredValue:S,resolvedValue:nt,isOutside:A,setValue:E,setHoveredValue:M,decimal:F,highlightSelectedOnly:d,formControlProps:oe,groupProps:y,itemProps:z,inputProps:w,children:ot,emptyIcon:R,filledIcon:I}},$t=({groupValue:r,fractionValue:t,value:n})=>{const{id:c,name:s,formControlProps:u,isOutside:g,highlightSelectedOnly:d,roundedValue:m,resolvedValue:y,setValue:z,setHoveredValue:w}=re(),{readOnly:R,disabled:I}=u,[V,C]=o.useState(!1),[h,b]=o.useState(!1),l=n===y,P=n===m,B=d?n===y:n<=y,E=o.useCallback(()=>{C(!1),g&&w(-1)},[g,w]),S=o.useCallback(f=>{if(R||I)return;const v=parseFloat(f.target.value);w(v)},[I,R,w]),M=o.useCallback(f=>{R||I||z(f)},[I,R,z]),A=o.useCallback(()=>{R||I||M(n)},[I,M,R,n]),N=o.useCallback((f={},v=null)=>{const F=l?1:-1;return{ref:v,htmlFor:`${c}-${r}-${n}`,...u,...f,zIndex:t!==1?F:void 0,onClick:x(A,f.onClick),"data-active":$(l),"data-filled":$(B),"data-focus":$(V),"data-focus-visible":$(V&&h)}},[u,t,r,c,l,B,h,V,A,n]),oe=o.useCallback((f={},v=null)=>({ref:v,"aria-label":`${n}`,...u,...f,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${c}-${r}-${n}`,name:s,value:n,checked:P,onChange:x(S,f.onChange),onFocus:x(()=>C(!0),f.onFocus),onBlur:x(E,f.onBlur),onKeyDown:x(F=>F.key===" "?M(n):void 0,f.onKeyDown),"data-active":$(l),"data-checked":$(P)}),[n,u,c,r,s,P,S,E,l,M]);return o.useEffect(()=>pt(b),[]),{isActive:l,isChecked:P,isFilled:B,getItemProps:N,getInputProps:oe}},a=le((r,t)=>{const[n,c]=Ft("Rating",r),{className:s,...u}=xt(c),{getContainerProps:g,children:d,...m}=zt(u),y={display:"flex",...n.container};return e(Ot,{value:{styles:n,...m},children:e(ne.div,{className:ae("ui-rating",s),__css:y,...g({},t),children:d})})}),un={title:"Components / Forms / Rating",component:a},L=()=>e(a,{}),U=()=>k(O,{children:[e(a,{size:"xs",defaultValue:3}),e(a,{size:"sm",defaultValue:3}),e(a,{size:"md",defaultValue:3}),e(a,{size:"lg",defaultValue:3}),e(a,{size:"xl",defaultValue:3})]}),Y=()=>k(O,{children:[e(a,{colorScheme:"purple",defaultValue:3}),e(a,{colorScheme:"pink",defaultValue:3})]}),H=()=>e(a,{defaultValue:3}),K=()=>k(O,{children:[e(a,{items:4}),e(a,{items:5}),e(a,{items:6})]}),W=()=>k(O,{children:[e(a,{fractions:2,defaultValue:1.5}),e(a,{fractions:3,defaultValue:2.33}),e(a,{fractions:4,defaultValue:3.75})]}),X=()=>e(a,{defaultValue:3,highlightSelectedOnly:!0}),q=()=>k(O,{children:[e(a,{isDisabled:!0,defaultValue:3}),e(ie,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),J=()=>k(O,{children:[e(a,{isReadOnly:!0,defaultValue:3}),e(ie,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e(a,{defaultValue:3})})]}),Q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return k(O,{children:[e(a,{color:"green.500",defaultValue:3}),e(a,{color:r,defaultValue:3}),e(a,{color:r,defaultValue:3,fractions:3})]})},Z=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e(D,{icon:dt});case 2:return e(D,{icon:ut});case 3:return e(D,{icon:it});case 4:return e(D,{icon:lt});case 5:return e(D,{icon:ct});default:return null}};return k(O,{children:[e(a,{defaultValue:3,emptyIcon:e(D,{icon:G}),filledIcon:e(D,{icon:G})}),e(a,{defaultValue:2,fractions:3,emptyIcon:e(D,{icon:G}),filledIcon:e(D,{icon:G})}),e(a,{gap:"xs",emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e(a,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},ee=()=>{const[r,t]=o.useState(3);return e(a,{value:r,onChange:t})},te=()=>{var g;const r={rating:3},{control:t,handleSubmit:n,watch:c,formState:{errors:s}}=mt({defaultValues:r}),u=d=>console.log("submit:",d);return console.log("watch:",c()),k(kt,{as:"form",onSubmit:n(u),children:[e(ie,{isInvalid:!!s.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(g=s.rating)==null?void 0:g.message,children:e(ft,{name:"rating",control:t,render:({field:d})=>e(a,{...d})})}),e(Pt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ie,Ce,be;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(be=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var Se,ye,Re;U.parameters={...U.parameters,docs:{...(Se=U.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Re=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var Ve,we,ve;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(ve=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:ve.source}}};var Fe,xe,ke;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ke=(xe=H.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};var Pe,Me,_e;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(_e=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:_e.source}}};var De,Oe,ze;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(ze=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var $e,Be,Ee;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ee=(Be=X.parameters)==null?void 0:Be.docs)==null?void 0:Ee.source}}};var Te,Ae,Ne;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ne=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source}}};var je,Ge,Le;J.parameters={...J.parameters,docs:{...(je=J.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Le=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Le.source}}};var Ue,Ye,He;Q.parameters={...Q.parameters,docs:{...(Ue=Q.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(Ye=Q.parameters)==null?void 0:Ye.docs)==null?void 0:He.source}}};var Ke,We,Xe;Z.parameters={...Z.parameters,docs:{...(Ke=Z.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Xe=(We=Z.parameters)==null?void 0:We.docs)==null?void 0:Xe.source}}};var qe,Je,Qe;ee.parameters={...ee.parameters,docs:{...(qe=ee.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Qe=(Je=ee.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ze,et,tt;te.parameters={...te.parameters,docs:{...(Ze=te.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(tt=(et=te.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const dn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{dn as __namedExportsOrder,L as basic,Q as customColor,ee as customControl,Z as customIcon,un as default,q as isDisabled,J as isReadonly,te as reactHookForm,Y as withColorScheme,H as withDefaultValue,W as withFractions,X as withHighlightSelectedOnly,K as withItems,U as withSize};
