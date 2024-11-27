import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as o}from"./index-ClcD9ViR.js";import{u as pt,C as ht}from"./index.esm-CEdvtQ_U.js";import{p as xt,d as k,h as R,C as E,X as It,b as re,c as le,q as jt,Z as bt,a as St}from"./factory-CehSyZ2b.js";import{u as Rt}from"./index-CSLw8Az-.js";import{t as Ct}from"./index-DOxqo9Dt.js";import{b as yt}from"./icon-Tcjn8UpA.js";import{f as it}from"./forward-ref-D13m8o2p.js";import{m as wt}from"./forward-ref-2BKBy0Yi.js";import{m as Vt}from"./factory-C8sDf1Q7.js";import{c as Ft,f as _t}from"./form-control-DPI4oJtA.js";import{c as vt}from"./number-CcP_arM8.js";import{a as kt}from"./use-component-style-PhZ538dD.js";import{o as Mt}from"./theme-provider-BOnS9RWG.js";import{S as Pt,L as Dt,a as Ot,F as zt,A as $t}from"./smile-plus-C7B3gOzj.js";import{F as ge}from"./fieldset-B73Yaklm.js";import{G as Y}from"./ghost-CdBOiyEi.js";import{V as Gt}from"./stack-q1-yo-90.js";import{B as Nt}from"./button-OnwWSCmB.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./use-var-C7Dt5UAR.js";import"./proxy-Bq47Fk52.js";import"./createLucideIcon-DHJHrKis.js";import"./visually-hidden-CiG0gAhZ.js";import"./use-ripple-lPfPkpPL.js";import"./index-r0TXmcNt.js";import"./loading-J7FyZR17.js";const[Et,ce]=xt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Tt=({fractionValue:a,groupValue:n,value:t})=>{const{id:r,name:c,highlightSelectedOnly:x,isOutside:m,resolvedValue:u,roundedValue:C,setHoveredValue:j,setValue:V,formControlProps:M}=ce(),{"aria-disabled":P,"aria-readonly":p,disabled:l,readOnly:d,...y}=M,[F,D]=o.useState(!1),[$,O]=o.useState(!1),_=t===u,z=t===C,v=x?t===u:t<=u,G=o.useCallback(()=>{D(!1),m&&j(-1)},[m,j]),b=o.useCallback(g=>{if(d||l)return;const h=parseFloat(g.target.value);j(h)},[l,d,j]),S=o.useCallback(g=>{d||l||V(g)},[l,d,V]),A=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),T=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),ie=o.useCallback((g={},h=null)=>{const I=_?1:-1;return{ref:h,htmlFor:`${r}-${n}-${t}`,...y,...g,"data-active":k(_),"data-disabled":k(l),"data-filled":k(v),"data-focus":k(F),"data-focus-visible":k(F&&$),zIndex:a!==1?I:void 0,onMouseDown:R(A,g.onMouseDown),onTouchStart:R(T,g.onTouchStart)}},[l,y,a,n,r,_,v,$,F,A,T,t]),B=o.useCallback((g={},h=null)=>({ref:h,"aria-disabled":P,"aria-label":`${t}`,disabled:l,readOnly:d,...y,...g,id:`${r}-${n}-${t}`,type:"radio",name:c,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"data-active":k(_),"data-checked":k(z),checked:z,value:t,onBlur:R(G,g.onBlur),onChange:R(b,g.onChange),onFocus:R(()=>D(!0),g.onFocus),onKeyDown:R(I=>I.key===" "?S(t):void 0,g.onKeyDown)}),[P,l,d,t,y,r,n,c,z,b,G,_,S]);return o.useEffect(()=>Ct(O),[]),{isActive:_,isChecked:z,isFilled:v,getInputProps:B,getItemProps:ie}},fe=it(({className:a,color:n,fractionValue:t,groupValue:r,value:c,...x},m)=>{const{emptyIcon:u=e.jsx(oe,{}),filledIcon:C=e.jsx(oe,{}),styles:j,inputProps:V,itemProps:M}=ce(),{isActive:P,isFilled:p,getInputProps:l,getItemProps:d}=Tt({fractionValue:t,groupValue:r,value:c}),y=E(M,c),F=E(V,c),D=n?{_filled:{color:It(n)?[n,n]:n}}:{},$={display:"block",lineHeight:"0",...j.item,...D};return e.jsxs(e.Fragment,{children:[e.jsx(re.input,{...l(F,m)}),e.jsx(re.label,{className:le("ui-rating__item",a),__css:$,...d({...y,...x}),children:e.jsx(pe,{clipPath:t!==1?`inset(0 ${P?100-t*100:100}% 0 0)`:void 0,children:p?E(C,r):E(u,r)})})]})});fe.displayName="RatingItem";fe.__ui__="RatingItem";const pe=({className:a,children:n,...t})=>{const{styles:r}=ce(),x=jt(n).map(u=>o.cloneElement(u,{style:{maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),m={alignItems:"center",display:"inline-flex",justifyContent:"center",...r.icon};return e.jsx(re.div,{className:le("ui-rating__item__icon",a),__css:m,...t,children:x})};pe.displayName="RatingIcon";pe.__ui__="RatingIcon";const oe=({...a})=>e.jsx(yt,{strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...a,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})});oe.displayName="RatingStarIcon";oe.__ui__="RatingStarIcon";const me=(a,n)=>{var c;const t=Math.round(a/n)*n,r=((c=`${n}`.split(".")[1])==null?void 0:c.length)||0;return Number(t.toFixed(r))},he=wt(({className:a,color:n,items:t,value:r,...c},x)=>{const{decimal:m,styles:u,getGroupProps:C,groupProps:j}=ce(),V=E(j,r),M={...u.group};return e.jsx(Vt.div,{className:le("ui-rating__group",a),__css:M,...C({value:r,...V,...c},x),children:Array(t).fill(0).map((P,p)=>{const l=m*(r===1?p:p+1),d=me(r-1+l,m);return e.jsx(fe,{color:n,fractionValue:l,groupValue:r,value:d},`${r}-${l}`)})})});he.displayName="RatingGroup";he.__ui__="RatingGroup";const At=({name:a,color:n,defaultValue:t=0,emptyIcon:r,filledIcon:c,fractions:x=1,highlightSelectedOnly:m=!1,items:u=5,value:C,groupProps:j,inputProps:V,itemProps:M,onChange:P,onHover:p,onMouseEnter:l,onMouseLeave:d,onMouseMove:y,onTouchEnd:F,onTouchStart:D,...$})=>{let{id:O,..._}=Ft($);const z=o.useRef(null),[v,G]=Rt({defaultValue:t,value:C,onChange:P}),[b,S]=o.useState(-1),[A,T]=o.useState(!0),ie=o.useId();O??(O=ie),a??(a=`rating-${O}`);const[B,g]=bt(_,_t),{disabled:h,readOnly:I,...xe}=B,ue=Math.floor(x),L=Math.floor(u),N=1/ue,Ie=me(v,N),ut=b!==-1?b:Ie,U=o.useCallback(i=>{const{left:f,width:w}=z.current.getBoundingClientRect(),de=w/L,ft=(i-f)/de;return vt(me(ft+N/2,N),N,L)},[N,L]),je=o.useCallback(()=>{!h&&!I&&T(!1)},[h,I]),be=o.useCallback(()=>{h||I||(S(-1),T(!0),b!==-1&&(p==null||p(-1)))},[h,b,p,I,S]),Se=o.useCallback(i=>{i.preventDefault();const f=i.touches[0];if(!f)return;const w=U(f.clientX);G(w)},[U,G]),Re=o.useCallback(i=>{i.preventDefault()},[]),Ce=o.useCallback(i=>{if(h||I)return;const f=U(i.clientX);S(f),f!==b&&(p==null||p(f))},[h,U,b,I,p]),dt=o.useCallback((i={},f=null)=>({ref:St(f,z),"aria-label":`${v} Stars`,role:"radiogroup",...xe,...g,...i,id:O,onMouseEnter:R(je,i.onMouseEnter,l),onMouseLeave:R(be,i.onMouseLeave,d),onMouseMove:R(Ce,i.onMouseMove,y),onTouchEnd:R(Re,i.onTouchEnd,F),onTouchStart:R(Se,i.onTouchStart,D)}),[xe,g,O,v,je,l,be,d,Ce,y,Re,F,Se,D]),mt=o.useCallback(({value:i,...f},w=null)=>{const de=!I&&Math.ceil(b)===i;return{ref:w,whileTap:!h&&!I?{y:-4}:void 0,...f,"data-active":k(de),tabIndex:-1}},[h,b,I]),gt=Array(L).fill(0).map((i,f)=>{const w=f+1;return e.jsx(he,{color:E(n,w),items:f===0?ue+1:ue,value:w},w)});return{id:O,name:a,children:gt,decimal:N,emptyIcon:r,filledIcon:c,highlightSelectedOnly:m,hoveredValue:b,isOutside:A,resolvedValue:ut,roundedValue:Ie,setHoveredValue:S,setValue:G,value:v,formControlProps:B,getContainerProps:dt,getGroupProps:mt,groupProps:j,inputProps:V,itemProps:M}},s=it((a,n)=>{const[t,r]=kt("Rating",a),{className:c,...x}=Mt(r),{children:m,getContainerProps:u,...C}=At(x),j={display:"flex",...t.container};return e.jsx(Et,{value:{styles:t,...C},children:e.jsx(re.div,{className:le("ui-rating",c),__css:j,...u({},n),children:m})})});s.displayName="Rating";s.__ui__="Rating";const xn={component:s,title:"Components / Forms / Rating"},H=()=>e.jsx(s,{}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),W=()=>e.jsx(s,{defaultValue:3}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1.5,fractions:2}),e.jsx(s,{defaultValue:2.33,fractions:3}),e.jsx(s,{defaultValue:3.75,fractions:4})]}),J=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isDisabled:!0}),e.jsx(ge,{isDisabled:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isReadOnly:!0}),e.jsx(ge,{isReadOnly:!0,legend:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),te=()=>{const a=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:a,defaultValue:3}),e.jsx(s,{color:a,defaultValue:3,fractions:3})]})},ne=()=>{const a=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx($t,{});case 2:return e.jsx(zt,{});case 3:return e.jsx(Ot,{});case 4:return e.jsx(Dt,{});case 5:return e.jsx(Pt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{})}),e.jsx(s,{defaultValue:2,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{}),fractions:3}),e.jsx(s,{emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{color:a,emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{emptyIcon:n,filledIcon:n,fractions:3,gap:"xs"})]})},se=()=>{const[a,n]=o.useState(3);return e.jsx(s,{value:a,onChange:n})},ae=()=>{var m;const a={rating:3},{control:n,formState:{errors:t},handleSubmit:r,watch:c}=pt({defaultValues:a}),x=u=>console.log("submit:",u);return console.log("watch:",c()),e.jsxs(Gt,{as:"form",onSubmit:r(x),children:[e.jsx(ge,{errorMessage:(m=t.rating)==null?void 0:m.message,isInvalid:!!t.rating,legend:"How satisfied are you with Yamada UI?",children:e.jsx(ht,{name:"rating",control:n,render:({field:u})=>e.jsx(s,{...u})})}),e.jsx(Nt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ye,we,Ve;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(Ve=(we=H.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var Fe,_e,ve;X.parameters={...X.parameters,docs:{...(Fe=X.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(ve=(_e=X.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var ke,Me,Pe;K.parameters={...K.parameters,docs:{...(ke=K.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Pe=(Me=K.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var De,Oe,ze;W.parameters={...W.parameters,docs:{...(De=W.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ze=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var $e,Ge,Ne;q.parameters={...q.parameters,docs:{...($e=q.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(Ne=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ee,Te,Ae;Z.parameters={...Z.parameters,docs:{...(Ee=Z.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>;
}`,...(Ae=(Te=Z.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Be,Le,Ue;J.parameters={...J.parameters,docs:{...(Be=J.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ue=(Le=J.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,Xe;Q.parameters={...Q.parameters,docs:{...(Ye=Q.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isDisabled />

      <Fieldset isDisabled legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(Xe=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Ke,We,qe;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isReadOnly />

      <Fieldset isReadOnly legend="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Fieldset>
    </>;
}`,...(qe=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Ze,Je,Qe;te.parameters={...te.parameters,docs:{...(Ze=te.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=te.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var et,tt,nt;ne.parameters={...ne.parameters,docs:{...(et=ne.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(rt=(at=se.parameters)==null?void 0:at.docs)==null?void 0:rt.source}}};var ot,lt,ct;ae.parameters={...ae.parameters,docs:{...(ot=ae.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
}`,...(ct=(lt=ae.parameters)==null?void 0:lt.docs)==null?void 0:ct.source}}};const In=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{In as __namedExportsOrder,H as basic,te as customColor,se as customControl,ne as customIcon,xn as default,Q as isDisabled,ee as isReadonly,ae as reactHookForm,K as withColorScheme,W as withDefaultValue,Z as withFractions,J as withHighlightSelectedOnly,q as withItems,X as withSize};
