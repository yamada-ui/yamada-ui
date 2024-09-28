import{j as e}from"./extends-CwFRzn3r.js";import{r as a}from"./index-BwDkhjyp.js";import{u as ot,C as lt}from"./index.esm-DXPXqkjk.js";import{o as ct,h as V,d as _,z as E,a1 as ut,b as ee,c as te,p as it,V as dt,a as mt}from"./factory-CYpx3TMG.js";import{u as gt}from"./index-tU9OGY6h.js";import{t as ft}from"./index-BUuviwyS.js";import{b as pt}from"./icon-FPUxZQsz.js";import{f as et}from"./forward-ref-BWI-Phbn.js";import{m as ht}from"./forward-ref-scR1bmHx.js";import{m as xt}from"./factory-CY7vhjKt.js";import{u as bt,f as jt,F as oe}from"./form-control-DTumWR9y.js";import{c as Ct}from"./number-CcP_arM8.js";import{a as St}from"./use-component-style-CfUS8Ki1.js";import{o as It}from"./theme-provider-BZKkW4ID.js";import{S as yt,L as Rt,a as Vt,F as wt,A as Ft}from"./smile-CXtziOzz.js";import{G}from"./ghost-C8YtfOT4.js";import{V as vt}from"./stack-C8qilfIS.js";import{B as kt}from"./button-Bx26J9Y6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./use-var-B0r_2U-t.js";import"./motion-I-9Hg3gW.js";import"./lucide-icon-cfLZgeB_.js";import"./use-ripple-ug6Wud9C.js";import"./loading-DndL1UZp.js";const[Mt,ne]=ct({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),Pt=({groupValue:r,fractionValue:t,value:n})=>{const{id:l,name:o,formControlProps:i,isOutside:g,highlightSelectedOnly:d,roundedValue:m,resolvedValue:I,setValue:M,setHoveredValue:w}=ne(),{readOnly:b,disabled:f}=i,[y,j]=a.useState(!1),[x,C]=a.useState(!1),c=n===I,F=n===m,D=d?n===I:n<=I,O=a.useCallback(()=>{j(!1),g&&w(-1)},[g,w]),S=a.useCallback(p=>{if(b||f)return;const v=parseFloat(p.target.value);w(v)},[f,b,w]),R=a.useCallback(p=>{b||f||M(p)},[f,b,M]),$=a.useCallback(()=>{b||f||R(n)},[f,R,b,n]),T=a.useCallback(()=>{b||f||R(n)},[f,R,b,n]),se=a.useCallback((p={},v=null)=>{const P=c?1:-1;return{ref:v,htmlFor:`${l}-${r}-${n}`,...i,...p,zIndex:t!==1?P:void 0,onMouseDown:V($,p.onMouseDown),onTouchStart:V(T,p.onTouchStart),"data-active":_(c),"data-filled":_(D),"data-focus":_(y),"data-focus-visible":_(y&&x)}},[i,t,r,l,c,D,x,y,$,T,n]),le=a.useCallback((p={},v=null)=>({ref:v,"aria-label":`${n}`,...i,...p,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${l}-${r}-${n}`,name:o,value:n,checked:F,onChange:V(S,p.onChange),onFocus:V(()=>j(!0),p.onFocus),onBlur:V(O,p.onBlur),onKeyDown:V(P=>P.key===" "?R(n):void 0,p.onKeyDown),"data-active":_(c),"data-checked":_(F)}),[n,i,l,r,o,F,S,O,c,R]);return a.useEffect(()=>ft(C),[]),{isActive:c,isChecked:F,isFilled:D,getItemProps:se,getInputProps:le}},_t=et(({className:r,groupValue:t,value:n,fractionValue:l,color:o,...i},g)=>{const{styles:d,inputProps:m,emptyIcon:I=e.jsx(fe,{}),filledIcon:M=e.jsx(fe,{}),itemProps:w}=ne(),{isActive:b,isFilled:f,getInputProps:y,getItemProps:j}=Pt({value:n,groupValue:t,fractionValue:l}),x=E(w,n),C=E(m,n),c=o?{_filled:{color:ut(o)?[o,o]:o}}:{},F={display:"block",lineHeight:"0",...d.item,...c};return e.jsxs(e.Fragment,{children:[e.jsx(ee.input,{...y(C,g)}),e.jsx(ee.label,{className:te("ui-rating__item",r),__css:F,...j({...x,...i}),children:e.jsx(Dt,{clipPath:l!==1?`inset(0 ${b?100-l*100:100}% 0 0)`:void 0,children:f?E(M,t):E(I,t)})})]})}),Dt=({className:r,children:t,...n})=>{const{styles:l}=ne(),i=it(t).map(d=>a.cloneElement(d,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),g={display:"inline-flex",alignItems:"center",justifyContent:"center",...l.icon};return e.jsx(ee.div,{className:te("ui-rating__item__icon",r),__css:g,...n,children:i})},fe=({...r})=>e.jsx(pt,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),ae=(r,t)=>{var o;const n=Math.round(r/t)*t,l=((o=`${t}`.split(".")[1])==null?void 0:o.length)||0;return Number(n.toFixed(l))},Ot=ht(({className:r,value:t,items:n,color:l,...o},i)=>{const{styles:g,decimal:d,groupProps:m,getGroupProps:I}=ne(),M=E(m,t),w={...g.group};return e.jsx(xt.div,{className:te("ui-rating__group",r),__css:w,...I({value:t,...M,...o},i),children:Array(n).fill(0).map((b,f)=>{const y=d*(t===1?f:f+1),j=ae(t-1+y,d);return e.jsx(_t,{groupValue:t,value:j,fractionValue:y,color:l},`${t}-${y}`)})})}),zt=({name:r,color:t,value:n,defaultValue:l=0,onChange:o,items:i=5,fractions:g=1,highlightSelectedOnly:d=!1,onHover:m,groupProps:I,itemProps:M,inputProps:w,emptyIcon:b,filledIcon:f,...y})=>{let{id:j,...x}=bt(y);const{disabled:C,readOnly:c}=x,F=a.useRef(null),[D,O]=gt({value:n,defaultValue:l,onChange:o}),[S,R]=a.useState(-1),[$,T]=a.useState(!0),se=a.useId();j??(j=se),r??(r=`rating-${j}`);const{"aria-readonly":le,...p}=dt(x,jt),v=Math.floor(g),P=Math.floor(i),z=1/v,ce=ae(D,z),tt=S!==-1?S:ce,A=a.useCallback(u=>{const{left:h,width:k}=F.current.getBoundingClientRect(),re=k/P,at=(u-h)/re;return Ct(ae(at+z/2,z),z,P)},[z,P]),ue=a.useCallback(()=>{!C&&!c&&T(!1)},[C,c]),ie=a.useCallback(()=>{C||c||(R(-1),T(!0),S!==-1&&(m==null||m(-1)))},[C,S,m,c,R]),de=a.useCallback(u=>{u.preventDefault();const h=u.touches[0];if(!h)return;const k=A(h.clientX);O(k)},[A,O]),me=a.useCallback(u=>{u.preventDefault()},[]),ge=a.useCallback(u=>{if(C||c)return;const h=A(u.clientX);R(h),h!==S&&(m==null||m(h))},[C,A,S,c,m]),nt=a.useCallback((u={},h=null)=>({ref:mt(h,F),...x,...u,id:j,onMouseEnter:V(ue,u.onMouseEnter,x.onMouseEnter),onMouseMove:V(ge,u.onMouseMove,x.onMouseMove),onMouseLeave:V(ie,u.onMouseLeave,x.onMouseLeave),onTouchStart:V(de,u.onTouchStart,x.onTouchStart),onTouchEnd:V(me,u.onTouchEnd,x.onTouchEnd)}),[ue,ie,ge,me,de,j,x]),st=a.useCallback(({value:u,...h},k=null)=>{const re=!c&&Math.ceil(S)===u;return{ref:k,whileTap:!C&&!c?{y:-4}:void 0,...h,tabIndex:-1,"data-active":_(re)}},[C,S,c]),rt=Array(P).fill(0).map((u,h)=>{const k=h+1;return e.jsx(Ot,{value:k,color:E(t,k),items:h===0?v+1:v},k)});return{getContainerProps:nt,getGroupProps:st,id:j,name:r,value:D,roundedValue:ce,hoveredValue:S,resolvedValue:tt,isOutside:$,setValue:O,setHoveredValue:R,decimal:z,highlightSelectedOnly:d,formControlProps:p,groupProps:I,itemProps:M,inputProps:w,children:rt,emptyIcon:b,filledIcon:f}},s=et((r,t)=>{const[n,l]=St("Rating",r),{className:o,...i}=It(l),{getContainerProps:g,children:d,...m}=zt(i),I={display:"flex",...n.container};return e.jsx(Mt,{value:{styles:n,...m},children:e.jsx(ee.div,{className:te("ui-rating",o),__css:I,...g({},t),children:d})})}),ln={title:"Components / Forms / Rating",component:s},B=()=>e.jsx(s,{}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"xs",defaultValue:3}),e.jsx(s,{size:"sm",defaultValue:3}),e.jsx(s,{size:"md",defaultValue:3}),e.jsx(s,{size:"lg",defaultValue:3}),e.jsx(s,{size:"xl",defaultValue:3})]}),N=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{colorScheme:"purple",defaultValue:3}),e.jsx(s,{colorScheme:"pink",defaultValue:3})]}),U=()=>e.jsx(s,{defaultValue:3}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{items:4}),e.jsx(s,{items:5}),e.jsx(s,{items:6})]}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{fractions:2,defaultValue:1.5}),e.jsx(s,{fractions:3,defaultValue:2.33}),e.jsx(s,{fractions:4,defaultValue:3.75})]}),K=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isDisabled:!0,defaultValue:3}),e.jsx(oe,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{isReadOnly:!0,defaultValue:3}),e.jsx(oe,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:r,defaultValue:3}),e.jsx(s,{color:r,defaultValue:3,fractions:3})]})},J=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},t=n=>{switch(n){case 1:return e.jsx(Ft,{});case 2:return e.jsx(wt,{});case 3:return e.jsx(Vt,{});case 4:return e.jsx(Rt,{});case 5:return e.jsx(yt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(G,{}),filledIcon:e.jsx(G,{})}),e.jsx(s,{defaultValue:2,fractions:3,emptyIcon:e.jsx(G,{}),filledIcon:e.jsx(G,{})}),e.jsx(s,{gap:"xs",emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",color:r,emptyIcon:t,filledIcon:t}),e.jsx(s,{gap:"xs",fractions:3,emptyIcon:t,filledIcon:t})]})},Q=()=>{const[r,t]=a.useState(3);return e.jsx(s,{value:r,onChange:t})},Z=()=>{var g;const r={rating:3},{control:t,handleSubmit:n,watch:l,formState:{errors:o}}=ot({defaultValues:r}),i=d=>console.log("submit:",d);return console.log("watch:",l()),e.jsxs(vt,{as:"form",onSubmit:n(i),children:[e.jsx(oe,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(g=o.rating)==null?void 0:g.message,children:e.jsx(lt,{name:"rating",control:t,render:({field:d})=>e.jsx(s,{...d})})}),e.jsx(kt,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var pe,he,xe;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(xe=(he=B.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var be,je,Ce;L.parameters={...L.parameters,docs:{...(be=L.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(Ce=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Se,Ie,ye;N.parameters={...N.parameters,docs:{...(Se=N.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(ye=(Ie=N.parameters)==null?void 0:Ie.docs)==null?void 0:ye.source}}};var Re,Ve,we;U.parameters={...U.parameters,docs:{...(Re=U.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(we=(Ve=U.parameters)==null?void 0:Ve.docs)==null?void 0:we.source}}};var Fe,ve,ke;Y.parameters={...Y.parameters,docs:{...(Fe=Y.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(ke=(ve=Y.parameters)==null?void 0:ve.docs)==null?void 0:ke.source}}};var Me,Pe,_e;H.parameters={...H.parameters,docs:{...(Me=H.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(_e=(Pe=H.parameters)==null?void 0:Pe.docs)==null?void 0:_e.source}}};var De,Oe,ze;K.parameters={...K.parameters,docs:{...(De=K.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(ze=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Ee,Te,$e;W.parameters={...W.parameters,docs:{...(Ee=W.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...($e=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ae,Ge,Be;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Be=(Ge=X.parameters)==null?void 0:Ge.docs)==null?void 0:Be.source}}};var Le,Ne,Ue;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var Ye,He,Ke;J.parameters={...J.parameters,docs:{...(Ye=J.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(Ke=(He=J.parameters)==null?void 0:He.docs)==null?void 0:Ke.source}}};var We,Xe,qe;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(qe=(Xe=Q.parameters)==null?void 0:Xe.docs)==null?void 0:qe.source}}};var Je,Qe,Ze;Z.parameters={...Z.parameters,docs:{...(Je=Z.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  interface Data {
    rating: number;
  }
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
}`,...(Ze=(Qe=Z.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source}}};const cn=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{cn as __namedExportsOrder,B as basic,q as customColor,Q as customControl,J as customIcon,ln as default,W as isDisabled,X as isReadonly,Z as reactHookForm,N as withColorScheme,U as withDefaultValue,H as withFractions,K as withHighlightSelectedOnly,Y as withItems,L as withSize};
