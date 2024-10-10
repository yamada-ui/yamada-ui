import{j as e}from"./extends-CwFRzn3r.js";import{r as o}from"./index-BwDkhjyp.js";import{u as it,C as ut}from"./index.esm-DXPXqkjk.js";import{o as dt,d as P,h as w,z as E,a1 as mt,b as ee,c as ne,p as gt,W as ft,a as pt}from"./factory-BPGpAF5Z.js";import{u as ht}from"./index-CJwZPsS_.js";import{t as xt}from"./index-lv9ANs0Y.js";import{b as bt}from"./icon-BYVaiKtb.js";import{f as st}from"./forward-ref-BWI-Phbn.js";import{m as jt}from"./forward-ref-scR1bmHx.js";import{m as St}from"./factory-CKjLh6Qg.js";import{u as Ct,f as It,F as le}from"./form-control-CY2fHU0c.js";import{c as Rt}from"./number-CcP_arM8.js";import{a as yt}from"./use-component-style-vGTU0kmU.js";import{o as wt}from"./theme-provider-HQUvgn6k.js";import{S as Vt,L as Ft,a as _t,F as vt,A as kt}from"./smile-plus-fxN13XeT.js";import{G as $}from"./ghost-GxWXN3CG.js";import{V as Mt}from"./stack-Bldv2M3v.js";import{B as Pt}from"./button-9256ovQJ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-CHlP19MT.js";import"./motion-I-9Hg3gW.js";import"./lucide-icon-DpgM6Xz3.js";import"./use-ripple-Cu_bXDXk.js";import"./loading-BJMWU62O.js";const[Dt,se]=dt({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Ot=({fractionValue:a,groupValue:n,value:t})=>{const{id:r,name:c,highlightSelectedOnly:h,isOutside:m,resolvedValue:d,roundedValue:V,setHoveredValue:b,setValue:k,formControlProps:I}=se(),{disabled:x,readOnly:l}=I,[R,j]=o.useState(!1),[p,S]=o.useState(!1),i=t===d,F=t===V,D=h?t===d:t<=d,O=o.useCallback(()=>{j(!1),m&&b(-1)},[m,b]),C=o.useCallback(g=>{if(l||x)return;const _=parseFloat(g.target.value);b(_)},[x,l,b]),y=o.useCallback(g=>{l||x||k(g)},[x,l,k]),G=o.useCallback(()=>{l||x||y(t)},[x,y,l,t]),T=o.useCallback(()=>{l||x||y(t)},[x,y,l,t]),ae=o.useCallback((g={},_=null)=>{const M=i?1:-1;return{ref:_,htmlFor:`${r}-${n}-${t}`,...I,...g,"data-active":P(i),"data-filled":P(D),"data-focus":P(R),"data-focus-visible":P(R&&p),zIndex:a!==1?M:void 0,onMouseDown:w(G,g.onMouseDown),onTouchStart:w(T,g.onTouchStart)}},[I,a,n,r,i,D,p,R,G,T,t]),de=o.useCallback((g={},_=null)=>({ref:_,"aria-label":`${t}`,...I,...g,id:`${r}-${n}-${t}`,type:"radio",name:c,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",margin:"-1px",overflow:"hidden",padding:"0px",position:"absolute",whiteSpace:"nowrap",width:"1px"},"data-active":P(i),"data-checked":P(F),checked:F,value:t,onBlur:w(O,g.onBlur),onChange:w(C,g.onChange),onFocus:w(()=>j(!0),g.onFocus),onKeyDown:w(M=>M.key===" "?y(t):void 0,g.onKeyDown)}),[t,I,r,n,c,F,C,O,i,y]);return o.useEffect(()=>xt(S),[]),{isActive:i,isChecked:F,isFilled:D,getInputProps:de,getItemProps:ae}},ce=st(({className:a,color:n,fractionValue:t,groupValue:r,value:c,...h},m)=>{const{emptyIcon:d=e.jsx(te,{}),filledIcon:V=e.jsx(te,{}),styles:b,inputProps:k,itemProps:I}=se(),{isActive:x,isFilled:l,getInputProps:R,getItemProps:j}=Ot({fractionValue:t,groupValue:r,value:c}),p=E(I,c),S=E(k,c),i=n?{_filled:{color:mt(n)?[n,n]:n}}:{},F={display:"block",lineHeight:"0",...b.item,...i};return e.jsxs(e.Fragment,{children:[e.jsx(ee.input,{...R(S,m)}),e.jsx(ee.label,{className:ne("ui-rating__item",a),__css:F,...j({...p,...h}),children:e.jsx(ie,{clipPath:t!==1?`inset(0 ${x?100-t*100:100}% 0 0)`:void 0,children:l?E(V,r):E(d,r)})})]})});ce.displayName="RatingItem";ce.__ui__="RatingItem";const ie=({className:a,children:n,...t})=>{const{styles:r}=se(),h=gt(n).map(d=>o.cloneElement(d,{style:{maxHeight:"1em",maxWidth:"1em"},"aria-hidden":!0,focusable:!1})),m={alignItems:"center",display:"inline-flex",justifyContent:"center",...r.icon};return e.jsx(ee.div,{className:ne("ui-rating__item__icon",a),__css:m,...t,children:h})};ie.displayName="RatingIcon";ie.__ui__="RatingIcon";const te=({...a})=>e.jsx(bt,{strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",...a,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})});te.displayName="RatingStarIcon";te.__ui__="RatingStarIcon";const oe=(a,n)=>{var c;const t=Math.round(a/n)*n,r=((c=`${n}`.split(".")[1])==null?void 0:c.length)||0;return Number(t.toFixed(r))},ue=jt(({className:a,color:n,items:t,value:r,...c},h)=>{const{decimal:m,styles:d,getGroupProps:V,groupProps:b}=se(),k=E(b,r),I={...d.group};return e.jsx(St.div,{className:ne("ui-rating__group",a),__css:I,...V({value:r,...k,...c},h),children:Array(t).fill(0).map((x,l)=>{const R=m*(r===1?l:l+1),j=oe(r-1+R,m);return e.jsx(ce,{color:n,fractionValue:R,groupValue:r,value:j},`${r}-${R}`)})})});ue.displayName="RatingGroup";ue.__ui__="RatingGroup";const zt=({name:a,color:n,defaultValue:t=0,emptyIcon:r,filledIcon:c,fractions:h=1,highlightSelectedOnly:m=!1,items:d=5,value:V,groupProps:b,inputProps:k,itemProps:I,onChange:x,onHover:l,...R})=>{let{id:j,...p}=Ct(R);const{disabled:S,readOnly:i}=p,F=o.useRef(null),[D,O]=ht({defaultValue:t,value:V,onChange:x}),[C,y]=o.useState(-1),[G,T]=o.useState(!0),ae=o.useId();j??(j=ae),a??(a=`rating-${j}`);const{"aria-readonly":de,...g}=ft(p,It),_=Math.floor(h),M=Math.floor(d),z=1/_,me=oe(D,z),at=C!==-1?C:me,N=o.useCallback(u=>{const{left:f,width:v}=F.current.getBoundingClientRect(),re=v/M,ct=(u-f)/re;return Rt(oe(ct+z/2,z),z,M)},[z,M]),ge=o.useCallback(()=>{!S&&!i&&T(!1)},[S,i]),fe=o.useCallback(()=>{S||i||(y(-1),T(!0),C!==-1&&(l==null||l(-1)))},[S,C,l,i,y]),pe=o.useCallback(u=>{u.preventDefault();const f=u.touches[0];if(!f)return;const v=N(f.clientX);O(v)},[N,O]),he=o.useCallback(u=>{u.preventDefault()},[]),xe=o.useCallback(u=>{if(S||i)return;const f=N(u.clientX);y(f),f!==C&&(l==null||l(f))},[S,N,C,i,l]),rt=o.useCallback((u={},f=null)=>({ref:pt(f,F),...p,...u,id:j,onMouseEnter:w(ge,u.onMouseEnter,p.onMouseEnter),onMouseLeave:w(fe,u.onMouseLeave,p.onMouseLeave),onMouseMove:w(xe,u.onMouseMove,p.onMouseMove),onTouchEnd:w(he,u.onTouchEnd,p.onTouchEnd),onTouchStart:w(pe,u.onTouchStart,p.onTouchStart)}),[ge,fe,xe,he,pe,j,p]),ot=o.useCallback(({value:u,...f},v=null)=>{const re=!i&&Math.ceil(C)===u;return{ref:v,whileTap:!S&&!i?{y:-4}:void 0,...f,"data-active":P(re),tabIndex:-1}},[S,C,i]),lt=Array(M).fill(0).map((u,f)=>{const v=f+1;return e.jsx(ue,{color:E(n,v),items:f===0?_+1:_,value:v},v)});return{id:j,name:a,children:lt,decimal:z,emptyIcon:r,filledIcon:c,highlightSelectedOnly:m,hoveredValue:C,isOutside:G,resolvedValue:at,roundedValue:me,setHoveredValue:y,setValue:O,value:D,formControlProps:g,getContainerProps:rt,getGroupProps:ot,groupProps:b,inputProps:k,itemProps:I}},s=st((a,n)=>{const[t,r]=yt("Rating",a),{className:c,...h}=wt(r),{children:m,getContainerProps:d,...V}=zt(h),b={display:"flex",...t.container};return e.jsx(Dt,{value:{styles:t,...V},children:e.jsx(ee.div,{className:ne("ui-rating",c),__css:b,...d({},n),children:m})})});s.displayName="Rating";s.__ui__="Rating";const ln={component:s,title:"Components / Forms / Rating"},A=()=>e.jsx(s,{}),B=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),U=()=>e.jsx(s,{defaultValue:3}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1.5,fractions:2}),e.jsx(s,{defaultValue:2.33,fractions:3}),e.jsx(s,{defaultValue:3.75,fractions:4})]}),W=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isDisabled:!0}),e.jsx(le,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,isReadOnly:!0}),e.jsx(le,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),q=()=>{const a=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:a,defaultValue:3}),e.jsx(s,{color:a,defaultValue:3,fractions:3})]})},J=()=>{const a=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx(kt,{});case 2:return e.jsx(vt,{});case 3:return e.jsx(_t,{});case 4:return e.jsx(Ft,{});case 5:return e.jsx(Vt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx($,{}),filledIcon:e.jsx($,{})}),e.jsx(s,{defaultValue:2,emptyIcon:e.jsx($,{}),filledIcon:e.jsx($,{}),fractions:3}),e.jsx(s,{emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{color:a,emptyIcon:n,filledIcon:n,gap:"xs"}),e.jsx(s,{emptyIcon:n,filledIcon:n,fractions:3,gap:"xs"})]})},Q=()=>{const[a,n]=o.useState(3);return e.jsx(s,{value:a,onChange:n})},Z=()=>{var m;const a={rating:3},{control:n,formState:{errors:t},handleSubmit:r,watch:c}=it({defaultValues:a}),h=d=>console.log("submit:",d);return console.log("watch:",c()),e.jsxs(Mt,{as:"form",onSubmit:r(h),children:[e.jsx(le,{errorMessage:(m=t.rating)==null?void 0:m.message,isInvalid:!!t.rating,label:"How satisfied are you with Yamada UI?",children:e.jsx(ut,{name:"rating",control:n,render:({field:d})=>e.jsx(s,{...d})})}),e.jsx(Pt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var be,je,Se;A.parameters={...A.parameters,docs:{...(be=A.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(Se=(je=A.parameters)==null?void 0:je.docs)==null?void 0:Se.source}}};var Ce,Ie,Re;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Re=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source}}};var ye,we,Ve;L.parameters={...L.parameters,docs:{...(ye=L.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Ve=(we=L.parameters)==null?void 0:we.docs)==null?void 0:Ve.source}}};var Fe,_e,ve;U.parameters={...U.parameters,docs:{...(Fe=U.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(ve=(_e=U.parameters)==null?void 0:_e.docs)==null?void 0:ve.source}}};var ke,Me,Pe;Y.parameters={...Y.parameters,docs:{...(ke=Y.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(Pe=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:Pe.source}}};var De,Oe,ze;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1.5} fractions={2} />
      <Rating defaultValue={2.33} fractions={3} />
      <Rating defaultValue={3.75} fractions={4} />
    </>;
}`,...(ze=(Oe=H.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ee,Te,Ge;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Ge=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ge.source}}};var Ne,$e,Ae;K.parameters={...K.parameters,docs:{...(Ne=K.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isDisabled />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ae=($e=K.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var Be,Le,Ue;X.parameters={...X.parameters,docs:{...(Be=X.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} isReadOnly />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ue=(Le=X.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source}}};var Ye,He,We;q.parameters={...q.parameters,docs:{...(Ye=q.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(We=(He=q.parameters)==null?void 0:He.docs)==null?void 0:We.source}}};var Ke,Xe,qe;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(qe=(Xe=J.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;Q.parameters={...Q.parameters,docs:{...(Je=Q.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Ze=(Qe=Q.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};var et,tt,nt;Z.parameters={...Z.parameters,docs:{...(et=Z.parameters)==null?void 0:et.docs,source:{originalSource:`() => {
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
}`,...(nt=(tt=Z.parameters)==null?void 0:tt.docs)==null?void 0:nt.source}}};const cn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{cn as __namedExportsOrder,A as basic,q as customColor,Q as customControl,J as customIcon,ln as default,K as isDisabled,X as isReadonly,Z as reactHookForm,L as withColorScheme,U as withDefaultValue,H as withFractions,W as withHighlightSelectedOnly,Y as withItems,B as withSize};
