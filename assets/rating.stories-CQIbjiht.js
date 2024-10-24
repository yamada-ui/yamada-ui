import{j as e}from"./extends-CwFRzn3r.js";import{r as o}from"./index-BwDkhjyp.js";import{u as pt,C as ht}from"./index.esm-BPKd4vtG.js";import{p as xt,d as k,h as I,B as E,a3 as bt,b as se,c as le,q as jt,X as Ct,a as St}from"./factory-DBrfn43w.js";import{u as It}from"./index-CsH8woeS.js";import{t as Rt}from"./index-DPmjC07T.js";import{b as yt}from"./icon-CVPWgGuL.js";import{f as ct}from"./forward-ref-BWI-Phbn.js";import{m as wt}from"./forward-ref-scR1bmHx.js";import{m as Vt}from"./factory-CWrzRNZL.js";import{u as Ft,f as _t,F as ge}from"./form-control-DALmJTHd.js";import{c as vt}from"./number-CcP_arM8.js";import{a as kt}from"./use-component-style-DhRiPQIp.js";import{o as Mt}from"./theme-provider-Cr3m0r8P.js";import{S as Pt,L as Dt,a as Ot,F as zt,A as $t}from"./smile-plus-C7SBcHwP.js";import{G as Y}from"./ghost-DYqh4o_R.js";import{V as Gt}from"./stack-BJEIbY7f.js";import{B as Nt}from"./button-HzRyJIss.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-DcJHaFAf.js";import"./motion-B7t0mTYZ.js";import"./lucide-icon-CsDBQyHf.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./loading-iPLDeGho.js";const[Et,ie]=xt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Tt=({fractionValue:r,groupValue:n,value:t})=>{const{id:s,name:i,highlightSelectedOnly:x,isOutside:m,resolvedValue:u,roundedValue:R,setHoveredValue:j,setValue:V,formControlProps:M}=ie(),{"aria-disabled":P,"aria-readonly":p,disabled:l,readOnly:d,...y}=M,[F,D]=o.useState(!1),[$,O]=o.useState(!1),_=t===u,z=t===R,v=x?t===u:t<=u,G=o.useCallback(()=>{D(!1),m&&j(-1)},[m,j]),C=o.useCallback(g=>{if(d||l)return;const h=parseFloat(g.target.value);j(h)},[l,d,j]),S=o.useCallback(g=>{d||l||V(g)},[l,d,V]),A=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),T=o.useCallback(()=>{d||l||S(t)},[l,S,d,t]),ce=o.useCallback((g={},h=null)=>{const b=_?1:-1;return{ref:h,htmlFor:`${s}-${n}-${t}`,...y,...g,"data-active":k(_),"data-disabled":k(l),"data-filled":k(v),"data-focus":k(F),"data-focus-visible":k(F&&$),zIndex:r!==1?b:void 0,onMouseDown:I(A,g.onMouseDown),onTouchStart:I(T,g.onTouchStart)}},[l,y,r,n,s,_,v,$,F,A,T,t]),B=o.useCallback((g={},h=null)=>({ref:h,"aria-disabled":P,"aria-label":`${t}`,disabled:l,readOnly:d,...y,...g,id:`${s}-${n}-${t}`,type:"radio",name:i,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"data-active":k(_),"data-checked":k(z),checked:z,value:t,onBlur:I(G,g.onBlur),onChange:I(C,g.onChange),onFocus:I(()=>D(!0),g.onFocus),onKeyDown:I(b=>b.key===" "?S(t):void 0,g.onKeyDown)}),[P,l,d,t,y,s,n,i,z,C,G,_,S]);return o.useEffect(()=>Rt(O),[]),{isActive:_,isChecked:z,isFilled:v,getInputProps:B,getItemProps:ce}},fe=ct(({className:r,color:n,fractionValue:t,groupValue:s,value:i,...x},m)=>{const{emptyIcon:u=e.jsx(oe,{}),filledIcon:R=e.jsx(oe,{}),styles:j,inputProps:V,itemProps:M}=ie(),{isActive:P,isFilled:p,getInputProps:l,getItemProps:d}=Tt({fractionValue:t,groupValue:s,value:i}),y=E(M,i),F=E(V,i),D=n?{_filled:{color:bt(n)?[n,n]:n}}:{},$={display:"block",lineHeight:"0",...j.item,...D};return e.jsxs(e.Fragment,{children:[e.jsx(se.input,{...l(F,m)}),e.jsx(se.label,{className:le("ui-rating__item",r),__css:$,...d({...y,...x}),children:e.jsx(pe,{clipPath:t!==1?`inset(0 ${P?100-t*100:100}% 0 0)`:void 0,children:p?E(R,s):E(u,s)})})]})});fe.displayName="RatingItem";fe.__ui__="RatingItem";const pe=({className:r,children:n,...t})=>{const{styles:s}=ie(),x=jt(n).map(u=>o.cloneElement(u,{style:{maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),m={alignItems:"center",display:"inline-flex",justifyContent:"center",...s.icon};return e.jsx(se.div,{className:le("ui-rating__item__icon",r),__css:m,...t,children:x})};pe.displayName="RatingIcon";pe.__ui__="RatingIcon";const oe=({...r})=>e.jsx(yt,{strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})});oe.displayName="RatingStarIcon";oe.__ui__="RatingStarIcon";const me=(r,n)=>{var i;const t=Math.round(r/n)*n,s=((i=`${n}`.split(".")[1])==null?void 0:i.length)||0;return Number(t.toFixed(s))},he=wt(({className:r,color:n,items:t,value:s,...i},x)=>{const{decimal:m,styles:u,getGroupProps:R,groupProps:j}=ie(),V=E(j,s),M={...u.group};return e.jsx(Vt.div,{className:le("ui-rating__group",r),__css:M,...R({value:s,...V,...i},x),children:Array(t).fill(0).map((P,p)=>{const l=m*(s===1?p:p+1),d=me(s-1+l,m);return e.jsx(fe,{color:n,fractionValue:l,groupValue:s,value:d},`${s}-${l}`)})})});he.displayName="RatingGroup";he.__ui__="RatingGroup";const At=({name:r,color:n,defaultValue:t=0,emptyIcon:s,filledIcon:i,fractions:x=1,highlightSelectedOnly:m=!1,items:u=5,value:R,groupProps:j,inputProps:V,itemProps:M,onChange:P,onHover:p,onMouseEnter:l,onMouseLeave:d,onMouseMove:y,onTouchEnd:F,onTouchStart:D,...$})=>{let{id:O,..._}=Ft($);const z=o.useRef(null),[v,G]=It({defaultValue:t,value:R,onChange:P}),[C,S]=o.useState(-1),[A,T]=o.useState(!0),ce=o.useId();O??(O=ce),r??(r=`rating-${O}`);const[B,g]=Ct(_,_t),{disabled:h,readOnly:b,...xe}=B,ue=Math.floor(x),L=Math.floor(u),N=1/ue,be=me(v,N),ut=C!==-1?C:be,U=o.useCallback(c=>{const{left:f,width:w}=z.current.getBoundingClientRect(),de=w/L,ft=(c-f)/de;return vt(me(ft+N/2,N),N,L)},[N,L]),je=o.useCallback(()=>{!h&&!b&&T(!1)},[h,b]),Ce=o.useCallback(()=>{h||b||(S(-1),T(!0),C!==-1&&(p==null||p(-1)))},[h,C,p,b,S]),Se=o.useCallback(c=>{c.preventDefault();const f=c.touches[0];if(!f)return;const w=U(f.clientX);G(w)},[U,G]),Ie=o.useCallback(c=>{c.preventDefault()},[]),Re=o.useCallback(c=>{if(h||b)return;const f=U(c.clientX);S(f),f!==C&&(p==null||p(f))},[h,U,C,b,p]),dt=o.useCallback((c={},f=null)=>({ref:St(f,z),"aria-label":`${v} Stars`,role:"radiogroup",...xe,...g,...c,id:O,onMouseEnter:I(je,c.onMouseEnter,l),onMouseLeave:I(Ce,c.onMouseLeave,d),onMouseMove:I(Re,c.onMouseMove,y),onTouchEnd:I(Ie,c.onTouchEnd,F),onTouchStart:I(Se,c.onTouchStart,D)}),[xe,g,O,v,je,l,Ce,d,Re,y,Ie,F,Se,D]),mt=o.useCallback(({value:c,...f},w=null)=>{const de=!b&&Math.ceil(C)===c;return{ref:w,whileTap:!h&&!b?{y:-4}:void 0,...f,"data-active":k(de),tabIndex:-1}},[h,C,b]),gt=Array(L).fill(0).map((c,f)=>{const w=f+1;return e.jsx(he,{color:E(n,w),items:f===0?ue+1:ue,value:w},w)});return{id:O,name:r,children:gt,decimal:N,emptyIcon:s,filledIcon:i,highlightSelectedOnly:m,hoveredValue:C,isOutside:A,resolvedValue:ut,roundedValue:be,setHoveredValue:S,setValue:G,value:v,formControlProps:B,getContainerProps:dt,getGroupProps:mt,groupProps:j,inputProps:V,itemProps:M}},a=ct((r,n)=>{const[t,s]=kt("Rating",r),{className:i,...x}=Mt(s),{children:m,getContainerProps:u,...R}=At(x),j={display:"flex",...t.container};return e.jsx(Et,{value:{styles:t,...R},children:e.jsx(se.div,{className:le("ui-rating",i),__css:j,...u({},n),children:m})})});a.displayName="Rating";a.__ui__="Rating";const pn={component:a,title:"Components / Forms / Rating"},H=()=>e.jsx(a,{}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",defaultValue:3}),e.jsx(a,{size:"sm",defaultValue:3}),e.jsx(a,{size:"md",defaultValue:3}),e.jsx(a,{size:"lg",defaultValue:3}),e.jsx(a,{size:"xl",defaultValue:3})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{colorScheme:"purple",defaultValue:3}),e.jsx(a,{colorScheme:"pink",defaultValue:3})]}),W=()=>e.jsx(a,{defaultValue:3}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{items:4}),e.jsx(a,{items:5}),e.jsx(a,{items:6})]}),J=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:1.5,fractions:2}),e.jsx(a,{defaultValue:2.33,fractions:3}),e.jsx(a,{defaultValue:3.75,fractions:4})]}),Q=()=>e.jsx(a,{defaultValue:3,highlightSelectedOnly:!0}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,isDisabled:!0}),e.jsx(ge,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,isReadOnly:!0}),e.jsx(ge,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),te=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"green.500",defaultValue:3}),e.jsx(a,{color:r,defaultValue:3}),e.jsx(a,{color:r,defaultValue:3,fractions:3})]})},ne=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx($t,{});case 2:return e.jsx(zt,{});case 3:return e.jsx(Ot,{});case 4:return e.jsx(Dt,{});case 5:return e.jsx(Pt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{})}),e.jsx(a,{defaultValue:2,emptyIcon:e.jsx(Y,{}),filledIcon:e.jsx(Y,{}),fractions:3}),e.jsx(a,{emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(a,{color:r,emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(a,{emptyIcon:n,filledIcon:n,fractions:3,gap:"xs"})]})},ae=()=>{const[r,n]=o.useState(3);return e.jsx(a,{value:r,onChange:n})},re=()=>{var m;const r={rating:3},{control:n,formState:{errors:t},handleSubmit:s,watch:i}=pt({defaultValues:r}),x=u=>console.log("submit:",u);return console.log("watch:",i()),e.jsxs(Gt,{as:"form",onSubmit:s(x),children:[e.jsx(ge,{errorMessage:(m=t.rating)==null?void 0:m.message,isInvalid:!!t.rating,label:"How satisfied are you with Yamada UI?",children:e.jsx(ht,{name:"rating",control:n,render:({field:u})=>e.jsx(a,{...u})})}),e.jsx(Nt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var ye,we,Ve;H.parameters={...H.parameters,docs:{...(ye=H.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Ee,Te,Ae;J.parameters={...J.parameters,docs:{...(Ee=J.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>;
}`,...(Ae=(Te=J.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Be,Le,Ue;Q.parameters={...Q.parameters,docs:{...(Be=Q.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ue=(Le=Q.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,Xe;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isDisabled />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Xe=(He=Z.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var Ke,We,qe;ee.parameters={...ee.parameters,docs:{...(Ke=ee.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isReadOnly />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(qe=(We=ee.parameters)==null?void 0:We.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;te.parameters={...te.parameters,docs:{...(Je=te.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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

      <Rating defaultValue={2} emptyIcon={<Ghost />} filledIcon={<Ghost />} fractions={3} />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} gap="xs" />

      <Rating color={getColor} emptyIcon={getIcon} filledIcon={getIcon} gap="xs" />

      <Rating emptyIcon={getIcon} filledIcon={getIcon} fractions={3} gap="xs" />
    </>;
}`,...(nt=(tt=ne.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};var at,rt,st;ae.parameters={...ae.parameters,docs:{...(at=ae.parameters)==null?void 0:at.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(st=(rt=ae.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var ot,lt,it;re.parameters={...re.parameters,docs:{...(ot=re.parameters)==null?void 0:ot.docs,source:{originalSource:`() => {
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
      <FormControl errorMessage={errors.rating?.message} isInvalid={!!errors.rating} label="How satisfied are you with Yamada UI?">
        <Controller name="rating" control={control} render={({
        field
      }) => <Rating {...field} />} />
      </FormControl>

      <Button type="submit" alignSelf="flex-end">
        Submit
      </Button>
    </VStack>;
}`,...(it=(lt=re.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};const hn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{hn as __namedExportsOrder,H as basic,te as customColor,ae as customControl,ne as customIcon,pn as default,Z as isDisabled,ee as isReadonly,re as reactHookForm,K as withColorScheme,W as withDefaultValue,J as withFractions,Q as withHighlightSelectedOnly,q as withItems,X as withSize};
