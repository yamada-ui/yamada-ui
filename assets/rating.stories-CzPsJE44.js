import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{u as pt,C as ht}from"./index.esm-Dl1kyd6X.js";import{A as xt,d as k,h as R,I as A,a0 as It,b as re,c as le,g as jt,L as bt,a as St}from"./factory-Nur_zO5a.js";import{u as Rt}from"./index-DKQLNlvR.js";import{t as yt}from"./index-BEKWAhRA.js";import{b as Ct}from"./icon-M07mMfJs.js";import{f as ct}from"./forward-ref-D13m8o2p.js";import{m as wt}from"./forward-ref-2BKBy0Yi.js";import{m as Vt}from"./factory-C7oui4wX.js";import{u as Ft,f as _t}from"./form-control-zj-lY-eQ.js";import{c as vt}from"./number-CcP_arM8.js";import{a as kt}from"./use-component-style-DXYrx7jC.js";import{o as Mt}from"./theme-provider-BsBO7Bt7.js";import{S as Pt,L as Dt,A as Ot}from"./smile-plus-Cn8eW3p4.js";import{F as ge}from"./fieldset-BjUByqVp.js";import{G as Y}from"./ghost-BKekfQFn.js";import{V as zt}from"./stack-C0yA_Fgo.js";import{B as $t}from"./button-CCbGPPx6.js";import{S as Gt,F as Nt}from"./smile-BCtE2kiE.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-BmU0CMcq.js";import"./proxy-BYKFXsWv.js";import"./createLucideIcon-C_T9K6g-.js";import"./visually-hidden-Dg9vUrmA.js";import"./use-ripple-D3zgM-CO.js";import"./index-BkD6i14w.js";import"./loading-Bz0vGPrC.js";const[At,ie]=xt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Et=({fractionValue:a,groupValue:n,value:t})=>{const{id:r,name:i,highlightSelectedOnly:x,isOutside:m,resolvedValue:u,roundedValue:y,setHoveredValue:j,setValue:V,formControlProps:M}=ie(),{"aria-disabled":P,"aria-readonly":p,disabled:l,readOnly:d,...C}=M,[F,D]=o.useState(!1),[$,O]=o.useState(!1),_=t===u,z=t===y,v=x?t===u:t<=u,G=o.useCallback(()=>{D(!1),m&&j(-1)},[m,j]),b=o.useCallback(g=>{if(d||l)return;const h=parseFloat(g.target.value);j(h)},[l,d,j]),S=o.useCallback(g=>{d||l||V(g)},[l,d,V]),T=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),E=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),ce=o.useCallback((g={},h=null)=>{const I=_?1:-1;return{ref:h,htmlFor:`${r}-${n}-${t}`,...C,...g,"data-active":k(_),"data-disabled":k(l),"data-filled":k(v),"data-focus":k(F),"data-focus-visible":k(F&&$),zIndex:a!==1?I:void 0,onMouseDown:R(T,g.onMouseDown),onTouchStart:R(E,g.onTouchStart)}},[l,C,a,n,r,_,v,$,F,T,E,t]),B=o.useCallback((g={},h=null)=>({ref:h,"aria-disabled":P,"aria-label":`${t}`,disabled:l,readOnly:d,...C,...g,id:`${r}-${n}-${t}`,type:"radio",name:i,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"data-active":k(_),"data-checked":k(z),checked:z,value:t,onBlur:R(G,g.onBlur),onChange:R(b,g.onChange),onFocus:R(()=>D(!0),g.onFocus),onKeyDown:R(I=>I.key===" "?S(t):void 0,g.onKeyDown)}),[P,l,d,t,C,r,n,i,z,b,G,_,S]);return o.useEffect(()=>yt(O),[]),{isActive:_,isChecked:z,isFilled:v,getInputProps:B,getItemProps:ce}},fe=ct(({className:a,color:n,fractionValue:t,groupValue:r,value:i,...x},m)=>{const{emptyIcon:u=e.jsx(oe,{}),filledIcon:y=e.jsx(oe,{}),styles:j,inputProps:V,itemProps:M}=ie(),{isActive:P,isFilled:p,getInputProps:l,getItemProps:d}=Et({fractionValue:t,groupValue:r,value:i}),C=A(M,i),F=A(V,i),D=n?{_filled:{color:It(n)?[n,n]:n}}:{},$={display:"block",lineHeight:"0",...j.item,...D};return e.jsxs(e.Fragment,{children:[e.jsx(re.input,{...l(F,m)}),e.jsx(re.label,{className:le("ui-rating__item",a),__css:$,...d({...C,...x}),children:e.jsx(pe,{clipPath:t!==1?`inset(0 ${P?100-t*100:100}% 0 0)`:void 0,children:p?A(y,r):A(u,r)})})]})});fe.displayName="RatingItem";fe.__ui__="RatingItem";const pe=({className:a,children:n,...t})=>{const{styles:r}=ie(),x=jt(n).map(u=>o.cloneElement(u,{style:{maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),m={alignItems:"center",display:"inline-flex",justifyContent:"center",...r.icon};return e.jsx(re.div,{className:le("ui-rating__item__icon",a),__css:m,...t,children:x})};pe.displayName="RatingIcon";pe.__ui__="RatingIcon";const oe=({...a})=>e.jsx(Ct,{strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...a,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})});oe.displayName="RatingStarIcon";oe.__ui__="RatingStarIcon";const me=(a,n)=>{var i;const t=Math.round(a/n)*n,r=((i=`${n}`.split(".")[1])==null?void 0:i.length)||0;return Number(t.toFixed(r))},he=wt(({className:a,color:n,items:t,value:r,...i},x)=>{const{decimal:m,styles:u,getGroupProps:y,groupProps:j}=ie(),V=A(j,r),M={...u.group};return e.jsx(Vt.div,{className:le("ui-rating__group",a),__css:M,...y({value:r,...V,...i},x),children:Array(t).fill(0).map((P,p)=>{const l=m*(r===1?p:p+1),d=me(r-1+l,m);return e.jsx(fe,{color:n,fractionValue:l,groupValue:r,value:d},`${r}-${l}`)})})});he.displayName="RatingGroup";he.__ui__="RatingGroup";const Tt=({name:a,color:n,defaultValue:t=0,emptyIcon:r,filledIcon:i,fractions:x=1,highlightSelectedOnly:m=!1,items:u=5,value:y,groupProps:j,inputProps:V,itemProps:M,onChange:P,onHover:p,onMouseEnter:l,onMouseLeave:d,onMouseMove:C,onTouchEnd:F,onTouchStart:D,...$})=>{let{id:O,..._}=Ft($);const z=o.useRef(null),[v,G]=Rt({defaultValue:t,value:y,onChange:P}),[b,S]=o.useState(-1),[T,E]=o.useState(!0),ce=o.useId();O??(O=ce),a??(a=`rating-${O}`);const[B,g]=bt(_,_t),{disabled:h,readOnly:I,...xe}=B,ue=Math.floor(x),L=Math.floor(u),N=1/ue,Ie=me(v,N),ut=b!==-1?b:Ie,U=o.useCallback(c=>{const{left:f,width:w}=z.current.getBoundingClientRect(),de=w/L,ft=(c-f)/de;return vt(me(ft+N/2,N),N,L)},[N,L]),je=o.useCallback(()=>{!h&&!I&&E(!1)},[h,I]),be=o.useCallback(()=>{h||I||(S(-1),E(!0),b!==-1&&(p==null||p(-1)))},[h,b,p,I,S]),Se=o.useCallback(c=>{c.preventDefault();const f=c.touches[0];if(!f)return;const w=U(f.clientX);G(w)},[U,G]),Re=o.useCallback(c=>{c.preventDefault()},[]),ye=o.useCallback(c=>{if(h||I)return;const f=U(c.clientX);S(f),f!==b&&(p==null||p(f))},[h,U,b,I,p]),dt=o.useCallback((c={},f=null)=>({ref:St(f,z),"aria-label":`${v} Stars`,role:"radiogroup",...xe,...g,...c,id:O,onMouseEnter:R(je,c.onMouseEnter,l),onMouseLeave:R(be,c.onMouseLeave,d),onMouseMove:R(ye,c.onMouseMove,C),onTouchEnd:R(Re,c.onTouchEnd,F),onTouchStart:R(Se,c.onTouchStart,D)}),[xe,g,O,v,je,l,be,d,ye,C,Re,F,Se,D]),mt=o.useCallback(({value:c,...f},w=null)=>{const de=!I&&Math.ceil(b)===c;return{ref:w,whileTap:!h&&!I?{y:-4}:void 0,...f,"data-active":k(de),tabIndex:-1}},[h,b,I]),gt=Array(L).fill(0).map((c,f)=>{const w=f+1;return e.jsx(he,{color:A(n,w),items:f===0?ue+1:ue,value:w},w)});return{id:O,name:a,children:gt,decimal:N,emptyIcon:r,filledIcon:i,highlightSelectedOnly:m,hoveredValue:b,isOutside:T,resolvedValue:ut,roundedValue:Ie,setHoveredValue:S,setValue:G,value:v,formControlProps:B,getContainerProps:dt,getGroupProps:mt,groupProps:j,inputProps:V,itemProps:M}},s=ct((a,n)=>{const[t,r]=kt("Rating",a),{className:i,...x}=Mt(r),{children:m,getContainerProps:u,...y}=Tt(x),j={display:"flex",...t.container};return e.jsx(At,{value:{styles:t,...y},children:e.jsx(re.div,{className:le("ui-rating",i),__css:j,...u({},n),children:m})})});s.displayName="Rating";s.__ui__="Rating";const In={component:s,title:"Components / Forms / Rating"},H=()=>e.jsx(s,{}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),X=()=>e.jsx(s,{defaultValue:3}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1.5,fractions:2}),e.jsx(s,{defaultValue:2.33,fractions:3}),e.jsx(s,{defaultValue:3.75,fractions:4})]}),Q=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isDisabled:!0}),e.jsx(ge,{isDisabled:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isReadOnly:!0}),e.jsx(ge,{isReadOnly:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),te=()=>{const a=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:a,defaultValue:3}),e.jsx(s,{color:a,defaultValue:3,fractions:3})]})},ne=()=>{const a=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx(Ot,{});case 2:return e.jsx(Nt,{});case 3:return e.jsx(Gt,{});case 4:return e.jsx(Dt,{});case 5:return e.jsx(Pt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{})}),e.jsx(s,{defaultValue:2,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{}),fractions:3}),e.jsx(s,{emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{color:a,emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{emptyIcon:n,filledIcon:n,fractions:3,gap:"xs"})]})},se=()=>{const[a,n]=o.useState(3);return e.jsx(s,{value:a,onChange:n})},ae=()=>{var m;const a={rating:3},{control:n,formState:{errors:t},handleSubmit:r,watch:i}=pt({defaultValues:a}),x=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(zt,{as:"form",onSubmit:r(x),children:[e.jsx(ge,{errorMessage:(m=t.rating)==null?void 0:m.message,isInvalid:!!t.rating,legend:"How satisfied are you with Yamada UI?",children:e.jsx(ht,{name:"rating",control:n,render:({field:u})=>e.jsx(s,{...u})})}),e.jsx($t,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ce,we,Ve;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(Ve=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var Fe,_e,ve;K.parameters={...K.parameters,docs:{...(Fe=K.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(ve=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var ke,Me,Pe;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Pe=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var De,Oe,ze;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ze=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var $e,Ge,Ne;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(Ne=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ae,Ee,Te;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>;
}`,...(Te=(Ee=J.parameters)==null?void 0:Ee.docs)==null?void 0:Te.source}}};var Be,Le,Ue;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ue=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,Ke;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isDisabled />

      <Fieldset isDisabled legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(Ke=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var We,Xe,qe;ee.parameters={...ee.parameters,docs:{...(We=ee.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isReadOnly />

      <Fieldset isReadOnly legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(qe=(Xe=ee.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Qe=te.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;ne.parameters={...ne.parameters,docs:{...(et=ne.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
        return <AngryIcon />;
      case 2:
        return <FrownIcon />;
      case 3:
        return <SmileIcon />;
      case 4:
        return <LaughIcon />;
      case 5:
        return <SmilePlusIcon />;
      default:
        return null;
    }
  };
  return <>
      <Rating defaultValue={3} emptyIcon={<GhostIcon />} filledIcon={<GhostIcon />} />

      <Rating defaultValue={2} emptyIcon={<GhostIcon />} filledIcon={<GhostIcon />} fractions={3} />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} gap="xs" />

      <Rating color={getColor} emptyIcon={getIcon} filledIcon={getIcon} gap="xs" />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} fractions={3} gap="xs" />
    </>;
}`,...(nt=(tt=ne.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var st,at,rt;se.parameters={...se.parameters,docs:{...(st=se.parameters)==null?void 0:st.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(rt=(at=se.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var ot,lt,it;ae.parameters={...ae.parameters,docs:{...(ot=ae.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
  interface Data {
    rating: number;
  }
  const defaultValues: Data = {
    rating: 3
  };
  const {
    control,
    formState: {
      errors
    },
    handleSubmit,
    watch
  } = useForm<Data>({
    defaultValues
  });
  const onSubmit: SubmitHandler<Data> = data => console.log("submit:", data);
  console.log("watch:", watch());
  return <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset errorMessage={errors.rating?.message} isInvalid={!!errors.rating} legend="How satisfied are you with Yamada UI?">
        <Controller name="rating" control={control} render={({
        field
      }) => <Rating {...field} />} />
      </Fieldset>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(it=(lt=ae.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};const jn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{jn as __namedExportsOrder,H as basic,te as customColor,se as customControl,ne as customIcon,In as default,Z as isDisabled,ee as isReadonly,ae as reactHookForm,W as withColorScheme,X as withDefaultValue,J as withFractions,Q as withHighlightSelectedOnly,q as withItems,K as withSize};
