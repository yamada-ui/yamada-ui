import{j as e}from"./jsx-runtime-BpbtHYHY.js";import{r as o}from"./index-BwPxMuoB.js";import{u as pt,C as ht}from"./index.esm-C038jXrr.js";import{B as xt,h as R,d as F,J as E,a1 as It,b as re,c as le,g as jt,M as bt,a as St}from"./factory-DbNU74ts.js";import{u as Rt}from"./index-DCT-NtcY.js";import{t as yt}from"./index-CIcQHIlO.js";import{b as Ct}from"./icon-Dk5VwDTI.js";import{f as it}from"./forward-ref-Ukjd1cIW.js";import{m as wt}from"./forward-ref-Cy2nAbAn.js";import{m as Vt}from"./factory-DGyI5Ya3.js";import{u as _t,f as Ft}from"./form-control-DgcE1-oN.js";import{c as vt}from"./number-CcP_arM8.js";import{a as kt}from"./use-component-style-CpB_lyT3.js";import{o as Mt}from"./theme-provider-ChqdwXGn.js";import{S as Pt,L as Dt,A as zt}from"./smile-plus-CwfCyYSL.js";import{F as ge}from"./fieldset-pEQ_2-oV.js";import{G as Y}from"./ghost-CVmvGRFY.js";import{V as Ot}from"./stack-BP8LKMVN.js";import{B as $t}from"./button-CqSjNDtY.js";import{S as Gt,F as Nt}from"./smile-CAPrQuUd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-DlbRU9j0.js";import"./proxy-BdCiNrpl.js";import"./createLucideIcon-D0BTS2fX.js";import"./visually-hidden-Bx6QUwua.js";import"./use-ripple-HQjPVeUd.js";import"./index-buBh1kfV.js";import"./loading-BVFohscl.js";const[Et,ce]=xt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Tt=({fractionValue:s,groupValue:n,value:t})=>{const{id:r,name:c,highlightSelectedOnly:I,outside:m,resolvedValue:u,roundedValue:y,setHoveredValue:b,setValue:V,formControlProps:v}=ce(),{"aria-disabled":k,"aria-readonly":h,disabled:l,readOnly:d,...C}=v,[_,M]=o.useState(!1),[z,ie]=o.useState(!1),S=t===u,O=t===y,$=I?t===u:t<=u,P=o.useCallback(()=>{M(!1),m&&b(-1)},[m,b]),G=o.useCallback(f=>{if(d||l)return;const x=parseFloat(f.target.value);b(x)},[l,d,b]),g=o.useCallback(f=>{d||l||V(f)},[l,d,V]),D=o.useCallback(()=>{d||l||g(t)},[l,g,d,t]),T=o.useCallback(()=>{d||l||g(t)},[l,g,d,t]),B=o.useCallback((f={},x=null)=>{const j=S?1:-1;return{ref:x,htmlFor:`${r}-${n}-${t}`,...C,...f,"data-active":F(S),"data-disabled":F(l),"data-filled":F($),"data-focus":F(_),"data-focus-visible":F(_&&z),zIndex:s!==1?j:void 0,onMouseDown:R(D,f.onMouseDown),onTouchStart:R(T,f.onTouchStart)}},[l,C,s,n,r,S,$,z,_,D,T,t]),A=o.useCallback((f={},x=null)=>({ref:x,"aria-disabled":k,"aria-label":`${t}`,disabled:l,readOnly:d,...C,...f,id:`${r}-${n}-${t}`,type:"radio",name:c,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"data-active":F(S),"data-checked":F(O),checked:O,value:t,onBlur:R(P,f.onBlur),onChange:R(G,f.onChange),onFocus:R(()=>M(!0),f.onFocus),onKeyDown:R(j=>j.key===" "?g(t):void 0,f.onKeyDown)}),[k,l,d,t,C,r,n,c,O,G,P,S,g]);return o.useEffect(()=>yt(ie),[]),{active:S,checked:O,filled:$,getInputProps:A,getItemProps:B}},fe=it(({className:s,color:n,fractionValue:t,groupValue:r,value:c,...I},m)=>{const{emptyIcon:u=e.jsx(oe,{}),filledIcon:y=e.jsx(oe,{}),styles:b,inputProps:V,itemProps:v}=ce(),{active:k,filled:h,getInputProps:l,getItemProps:d}=Tt({fractionValue:t,groupValue:r,value:c}),C=E(v,c),_=E(V,c),M=n?{_filled:{color:It(n)?[n,n]:n}}:{},z={display:"block",lineHeight:"0",...b.item,...M};return e.jsxs(e.Fragment,{children:[e.jsx(re.input,{...l(_,m)}),e.jsx(re.label,{className:le("ui-rating__item",s),__css:z,...d({...C,...I}),children:e.jsx(pe,{clipPath:t!==1?`inset(0 ${k?100-t*100:100}% 0 0)`:void 0,children:h?E(y,r):E(u,r)})})]})});fe.displayName="RatingItem";fe.__ui__="RatingItem";const pe=({className:s,children:n,...t})=>{const{styles:r}=ce(),I=jt(n).map(u=>o.cloneElement(u,{style:{maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),m={alignItems:"center",display:"inline-flex",justifyContent:"center",...r.icon};return e.jsx(re.div,{className:le("ui-rating__item__icon",s),__css:m,...t,children:I})};pe.displayName="RatingIcon";pe.__ui__="RatingIcon";const oe=({...s})=>e.jsx(Ct,{strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...s,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})});oe.displayName="RatingStarIcon";oe.__ui__="RatingStarIcon";const me=(s,n)=>{var c;const t=Math.round(s/n)*n,r=((c=`${n}`.split(".")[1])==null?void 0:c.length)||0;return Number(t.toFixed(r))},he=wt(({className:s,color:n,items:t,value:r,...c},I)=>{const{decimal:m,styles:u,getGroupProps:y,groupProps:b}=ce(),V=E(b,r),v={...u.group};return e.jsx(Vt.div,{className:le("ui-rating__group",s),__css:v,...y({value:r,...V,...c},I),children:Array(t).fill(0).map((k,h)=>{const l=m*(r===1?h:h+1),d=me(r-1+l,m);return e.jsx(fe,{color:n,fractionValue:l,groupValue:r,value:d},`${r}-${l}`)})})});he.displayName="RatingGroup";he.__ui__="RatingGroup";const Bt=({name:s,color:n,defaultValue:t=0,emptyIcon:r,filledIcon:c,fractions:I=1,highlightSelectedOnly:m=!1,items:u=5,value:y,groupProps:b,inputProps:V,itemProps:v,onChange:k,onHover:h,onMouseEnter:l,onMouseLeave:d,onMouseMove:C,onTouchEnd:_,onTouchStart:M,...z})=>{const ie=o.useId(),{id:S=ie,...O}=_t(z),$=o.useRef(null),[P,G]=Rt({defaultValue:t,value:y,onChange:k}),[g,D]=o.useState(-1),[T,B]=o.useState(!0),[A,f]=bt(O,Ft),{disabled:x,readOnly:j,...xe}=A,ue=Math.floor(I),L=Math.floor(u),N=1/ue,Ie=me(P,N),ut=g!==-1?g:Ie;s??(s=`rating-${S}`);const U=o.useCallback(i=>{const{left:p,width:w}=$.current.getBoundingClientRect(),de=w/L,ft=(i-p)/de;return vt(me(ft+N/2,N),N,L)},[N,L]),je=o.useCallback(()=>{!x&&!j&&B(!1)},[x,j]),be=o.useCallback(()=>{x||j||(D(-1),B(!0),g!==-1&&(h==null||h(-1)))},[x,g,h,j,D]),Se=o.useCallback(i=>{i.preventDefault();const p=i.touches[0];if(!p)return;const w=U(p.clientX);G(w)},[U,G]),Re=o.useCallback(i=>{i.preventDefault()},[]),ye=o.useCallback(i=>{if(x||j)return;const p=U(i.clientX);D(p),p!==g&&(h==null||h(p))},[x,U,g,j,h]),dt=o.useCallback((i={},p=null)=>({ref:St(p,$),"aria-label":`${P} Stars`,role:"radiogroup",...xe,...f,...i,id:S,onMouseEnter:R(je,i.onMouseEnter,l),onMouseLeave:R(be,i.onMouseLeave,d),onMouseMove:R(ye,i.onMouseMove,C),onTouchEnd:R(Re,i.onTouchEnd,_),onTouchStart:R(Se,i.onTouchStart,M)}),[xe,f,S,P,je,l,be,d,ye,C,Re,_,Se,M]),mt=o.useCallback(({value:i,...p},w=null)=>{const de=!j&&Math.ceil(g)===i;return{ref:w,whileTap:!x&&!j?{y:-4}:void 0,...p,"data-active":F(de),tabIndex:-1}},[x,g,j]),gt=Array(L).fill(0).map((i,p)=>{const w=p+1;return e.jsx(he,{color:E(n,w),items:p===0?ue+1:ue,value:w},w)});return{id:S,name:s,children:gt,decimal:N,emptyIcon:r,filledIcon:c,highlightSelectedOnly:m,hoveredValue:g,outside:T,resolvedValue:ut,roundedValue:Ie,setHoveredValue:D,setValue:G,value:P,formControlProps:A,getContainerProps:dt,getGroupProps:mt,groupProps:b,inputProps:V,itemProps:v}},a=it((s,n)=>{const[t,r]=kt("Rating",s),{className:c,...I}=Mt(r),{children:m,getContainerProps:u,...y}=Bt(I),b={display:"flex",...t.container};return e.jsx(Et,{value:{styles:t,...y},children:e.jsx(re.div,{className:le("ui-rating",c),__css:b,...u({},n),children:m})})});a.displayName="Rating";a.__ui__="Rating";const In={component:a,title:"Components / Forms / Rating"},H=()=>e.jsx(a,{}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",defaultValue:3}),e.jsx(a,{size:"sm",defaultValue:3}),e.jsx(a,{size:"md",defaultValue:3}),e.jsx(a,{size:"lg",defaultValue:3}),e.jsx(a,{size:"xl",defaultValue:3})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{colorScheme:"purple",defaultValue:3}),e.jsx(a,{colorScheme:"pink",defaultValue:3})]}),X=()=>e.jsx(a,{defaultValue:3}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{items:4}),e.jsx(a,{items:5}),e.jsx(a,{items:6})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:1.5,fractions:2}),e.jsx(a,{defaultValue:2.33,fractions:3}),e.jsx(a,{defaultValue:3.75,fractions:4})]}),Q=()=>e.jsx(a,{defaultValue:3,highlightSelectedOnly:!0}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,isDisabled:!0}),e.jsx(ge,{isDisabled:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,isReadOnly:!0}),e.jsx(ge,{isReadOnly:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),te=()=>{const s=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"green.500",defaultValue:3}),e.jsx(a,{color:s,defaultValue:3}),e.jsx(a,{color:s,defaultValue:3,fractions:3})]})},ne=()=>{const s=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx(zt,{});case 2:return e.jsx(Nt,{});case 3:return e.jsx(Gt,{});case 4:return e.jsx(Dt,{});case 5:return e.jsx(Pt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{})}),e.jsx(a,{defaultValue:2,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{}),fractions:3}),e.jsx(a,{emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(a,{color:s,emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(a,{emptyIcon:n,filledIcon:n,fractions:3,gap:"xs"})]})},ae=()=>{const[s,n]=o.useState(3);return e.jsx(a,{value:s,onChange:n})},se=()=>{var m;const s={rating:3},{control:n,formState:{errors:t},handleSubmit:r,watch:c}=pt({defaultValues:s}),I=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Ot,{as:"form",onSubmit:r(I),children:[e.jsx(ge,{errorMessage:(m=t.rating)==null?void 0:m.message,isInvalid:!!t.rating,legend:"How satisfied are you with Yamada UI?",children:e.jsx(ht,{name:"rating",control:n,render:({field:u})=>e.jsx(a,{...u})})}),e.jsx($t,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var Ce,we,Ve;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(Ve=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var _e,Fe,ve;K.parameters={...K.parameters,docs:{...(_e=K.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(ve=(Fe=K.parameters)==null?void 0:Fe.docs)==null?void 0:ve.source}}};var ke,Me,Pe;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Pe=(Me=W.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var De,ze,Oe;X.parameters={...X.parameters,docs:{...(De=X.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(Oe=(ze=X.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var $e,Ge,Ne;J.parameters={...J.parameters,docs:{...($e=J.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(Ne=(Ge=J.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ee,Te,Be;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>;
}`,...(Be=(Te=q.parameters)==null?void 0:Te.docs)==null?void 0:Be.source}}};var Ae,Le,Ue;Q.parameters={...Q.parameters,docs:{...(Ae=Q.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ue=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,Ke;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isDisabled />

      <Fieldset isDisabled legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(Ke=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var We,Xe,Je;ee.parameters={...ee.parameters,docs:{...(We=ee.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isReadOnly />

      <Fieldset isReadOnly legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(Je=(Xe=ee.parameters)==null?void 0:Xe.docs)==null?void 0:Je.source}}};var qe,Qe,Ze;te.parameters={...te.parameters,docs:{...(qe=te.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(nt=(tt=ne.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,st,rt;ae.parameters={...ae.parameters,docs:{...(at=ae.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(rt=(st=ae.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ot,lt,ct;se.parameters={...se.parameters,docs:{...(ot=se.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(ct=(lt=se.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};const jn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{jn as __namedExportsOrder,H as basic,te as customColor,ae as customControl,ne as customIcon,In as default,Z as isDisabled,ee as isReadonly,se as reactHookForm,W as withColorScheme,X as withDefaultValue,q as withFractions,Q as withHighlightSelectedOnly,J as withItems,K as withSize};
