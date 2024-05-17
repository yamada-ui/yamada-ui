import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as k,f as N,u as on,v as cn,w as ln,x as un,y as dn}from"./fontawesome-icon-BI5x-FK8.js";import{r as s}from"./index-uCp2LrAq.js";import{u as mn,C as fn}from"./index.esm-4Uv-W69H.js";import{u as gn}from"./index-kpYE7fkF.js";import{t as pn}from"./index-BMlyiGLg.js";import{b as hn}from"./icon-BzEDtuLR.js";import{f as ce}from"./forward-ref-Dr5Hqd9a.js";import{B as z,ae as xn,u as ne,c as te,t as In,l as Sn,S as jn,a as bn,h as R,d as _}from"./factory-DvGXL-YE.js";import{M as Cn}from"./motion-Byty22b7.js";import{u as yn,f as Rn,F as le}from"./form-control-BS-ucNQf.js";import{c as Vn}from"./number-49BHn0Cl.js";import{a as wn}from"./use-component-style-CKVmhMoE.js";import{o as Fn}from"./theme-provider-CElU3JB-.js";import{V as vn}from"./stack-BGA8UW5h.js";import{B as kn}from"./button-CZaZ02yG.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BhLFEsxu.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./motion-BNFRb361.js";import"./use-ripple-DPDtWmDJ.js";import"./index-DSHhgXSs.js";import"./loading-CCrvoEQI.js";const Mn=ce(({className:r,groupValue:n,value:t,fractionValue:c,color:o,...i},h)=>{const{styles:m,inputProps:f,emptyIcon:C=e.jsx(pe,{}),filledIcon:M=e.jsx(pe,{}),itemProps:V}=ae(),{isActive:S,isFilled:x,getInputProps:y,getItemProps:b}=zn({value:t,groupValue:n,fractionValue:c}),T=z(V,t),j=z(f,t),u=o?{_filled:{color:xn(o)?[o,o]:o}}:{},g={display:"block",lineHeight:"0",...m.item,...u};return e.jsxs(e.Fragment,{children:[e.jsx(ne.input,{...y(j,h)}),e.jsx(ne.label,{className:te("ui-rating__item",r),__css:g,...b({...T,...i}),children:e.jsx(Pn,{clipPath:c!==1?`inset(0 ${S?100-c*100:100}% 0 0)`:void 0,children:x?z(M,n):z(C,n)})})]})}),Pn=({className:r,children:n,...t})=>{const{styles:c}=ae(),i=In(n).map(m=>s.cloneElement(m,{focusable:!1,"aria-hidden":!0,style:{maxWidth:"1em",maxHeight:"1em"}})),h={display:"inline-flex",alignItems:"center",justifyContent:"center",...c.icon};return e.jsx(ne.div,{className:te("ui-rating__item__icon",r),__css:h,...t,children:i})},pe=({...r})=>e.jsx(hn,{viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",...r,children:e.jsx("path",{d:"M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"})}),_n=ce(({className:r,value:n,items:t,color:c,...o},i)=>{const{styles:h,decimal:m,groupProps:f,getGroupProps:C}=ae(),M=z(f,n),V={...h.group};return e.jsx(Cn,{className:te("ui-rating__group",r),__css:V,...C({value:n,...M,...o},i),children:Array(t).fill(0).map((S,x)=>{const y=m*(n===1?x:x+1),b=oe(n-1+y,m);return e.jsx(Mn,{groupValue:n,value:b,fractionValue:y,color:c},`${n}-${y}`)})})}),oe=(r,n)=>{var o;const t=Math.round(r/n)*n,c=((o=`${n}`.split(".")[1])==null?void 0:o.length)||0;return Number(t.toFixed(c))},[Dn,ae]=Sn({name:"RatingContext",errorMessage:`useRatingContext returned is 'undefined'. Seems you forgot to wrap the components in "<Rating />"`}),On=({name:r,color:n,value:t,defaultValue:c=0,onChange:o,items:i=5,fractions:h=1,highlightSelectedOnly:m=!1,onHover:f,groupProps:C,itemProps:M,inputProps:V,emptyIcon:S,filledIcon:x,...y})=>{let{id:b,"aria-readonly":T,...j}=yn(y);const{disabled:u,readOnly:g}=j,D=s.useRef(null),[E,O]=gn({value:t,defaultValue:c,onChange:o}),[p,P]=s.useState(-1),[$,B]=s.useState(!0);b??(b=s.useId()),r??(r=`rating-${b}`);const re=jn(j,Rn),d=Math.floor(h),w=Math.floor(i),F=1/d,ie=oe(E,F),nn=p!==-1?p:ie,A=s.useCallback(l=>{const{left:I,width:v}=D.current.getBoundingClientRect(),se=v/w,sn=(l-I)/se;return Vn(oe(sn+F/2,F),F,w)},[F,w]),ue=s.useCallback(()=>{!u&&!g&&B(!1)},[u,g]),de=s.useCallback(()=>{u||g||(P(-1),B(!0),p!==-1&&(f==null||f(-1)))},[u,p,f,g,P]),me=s.useCallback(l=>{l.preventDefault();const I=l.touches[0];if(!I)return;const v=A(I.clientX);O(v)},[A,O]),fe=s.useCallback(l=>{l.preventDefault()},[]),ge=s.useCallback(l=>{if(u||g)return;const I=A(l.clientX);P(I),I!==p&&(f==null||f(I))},[u,A,p,g,f]),tn=s.useCallback((l={},I=null)=>({ref:bn(I,D),...j,...l,id:b,onMouseEnter:R(ue,l.onMouseEnter,j.onMouseEnter),onMouseMove:R(ge,l.onMouseMove,j.onMouseMove),onMouseLeave:R(de,l.onMouseLeave,j.onMouseLeave),onTouchStart:R(me,l.onTouchStart,j.onTouchStart),onTouchEnd:R(fe,l.onTouchEnd,j.onTouchEnd)}),[ue,de,ge,fe,me,b,j]),an=s.useCallback(({value:l,...I},v=null)=>{const se=!g&&Math.ceil(p)===l;return{ref:v,whileTap:!u&&!g?{y:-4}:void 0,...I,tabIndex:-1,"data-active":_(se)}},[u,p,g]),rn=Array(w).fill(0).map((l,I)=>{const v=I+1;return e.jsx(_n,{value:v,color:z(n,v),items:I===0?d+1:d},v)});return{getContainerProps:tn,getGroupProps:an,id:b,name:r,value:E,roundedValue:ie,hoveredValue:p,resolvedValue:nn,isOutside:$,setValue:O,setHoveredValue:P,decimal:F,highlightSelectedOnly:m,formControlProps:re,groupProps:C,itemProps:M,inputProps:V,children:rn,emptyIcon:S,filledIcon:x}},zn=({groupValue:r,fractionValue:n,value:t})=>{const{id:c,name:o,formControlProps:i,isOutside:h,highlightSelectedOnly:m,roundedValue:f,resolvedValue:C,setValue:M,setHoveredValue:V}=ae(),{readOnly:S,disabled:x}=i,[y,b]=s.useState(!1),[T,j]=s.useState(!1),u=t===C,g=t===f,D=m?t===C:t<=C,E=s.useCallback(()=>{b(!1),h&&V(-1)},[h,V]),O=s.useCallback(d=>{if(S||x)return;const w=parseFloat(d.target.value);V(w)},[x,S,V]),p=s.useCallback(d=>{S||x||M(d)},[x,S,M]),P=s.useCallback(()=>{S||x||p(t)},[x,p,S,t]),$=s.useCallback(()=>{S||x||p(t)},[x,p,S,t]),B=s.useCallback((d={},w=null)=>{const F=u?1:-1;return{ref:w,htmlFor:`${c}-${r}-${t}`,...i,...d,zIndex:n!==1?F:void 0,onMouseDown:R(P,d.onMouseDown),onTouchStart:R($,d.onTouchStart),"data-active":_(u),"data-filled":_(D),"data-focus":_(y),"data-focus-visible":_(y&&T)}},[i,n,r,c,u,D,T,y,P,$,t]),re=s.useCallback((d={},w=null)=>({ref:w,"aria-label":`${t}`,...i,...d,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},type:"radio",id:`${c}-${r}-${t}`,name:o,value:t,checked:g,onChange:R(O,d.onChange),onFocus:R(()=>b(!0),d.onFocus),onBlur:R(E,d.onBlur),onKeyDown:R(F=>F.key===" "?p(t):void 0,d.onKeyDown),"data-active":_(u),"data-checked":_(g)}),[t,i,c,r,o,g,O,E,u,p]);return s.useEffect(()=>pn(j),[]),{isActive:u,isChecked:g,isFilled:D,getItemProps:B,getInputProps:re}},a=ce((r,n)=>{const[t,c]=wn("Rating",r),{className:o,...i}=Fn(c),{getContainerProps:h,children:m,...f}=On(i),C={display:"flex",...t.container};return e.jsx(Dn,{value:{styles:t,...f},children:e.jsx(ne.div,{className:te("ui-rating",o),__css:C,...h({},n),children:m})})}),ct={title:"Components / Forms / Rating",component:a},G=()=>e.jsx(a,{}),L=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{size:"xs",defaultValue:3}),e.jsx(a,{size:"sm",defaultValue:3}),e.jsx(a,{size:"md",defaultValue:3}),e.jsx(a,{size:"lg",defaultValue:3}),e.jsx(a,{size:"xl",defaultValue:3})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{colorScheme:"purple",defaultValue:3}),e.jsx(a,{colorScheme:"pink",defaultValue:3})]}),Y=()=>e.jsx(a,{defaultValue:3}),H=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{items:4}),e.jsx(a,{items:5}),e.jsx(a,{items:6})]}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{fractions:2,defaultValue:1.5}),e.jsx(a,{fractions:3,defaultValue:2.33}),e.jsx(a,{fractions:4,defaultValue:3.75})]}),W=()=>e.jsx(a,{defaultValue:3,highlightSelectedOnly:!0}),X=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isDisabled:!0,defaultValue:3}),e.jsx(le,{isDisabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),q=()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{isReadOnly:!0,defaultValue:3}),e.jsx(le,{isReadOnly:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(a,{defaultValue:3})})]}),J=()=>{const r=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{color:"green.500",defaultValue:3}),e.jsx(a,{color:r,defaultValue:3}),e.jsx(a,{color:r,defaultValue:3,fractions:3})]})},Q=()=>{const r=t=>{switch(t){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}},n=t=>{switch(t){case 1:return e.jsx(k,{icon:dn});case 2:return e.jsx(k,{icon:un});case 3:return e.jsx(k,{icon:ln});case 4:return e.jsx(k,{icon:cn});case 5:return e.jsx(k,{icon:on});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(a,{defaultValue:3,emptyIcon:e.jsx(k,{icon:N}),filledIcon:e.jsx(k,{icon:N})}),e.jsx(a,{defaultValue:2,fractions:3,emptyIcon:e.jsx(k,{icon:N}),filledIcon:e.jsx(k,{icon:N})}),e.jsx(a,{gap:"xs",emptyIcon:n,filledIcon:n}),e.jsx(a,{gap:"xs",color:r,emptyIcon:n,filledIcon:n}),e.jsx(a,{gap:"xs",fractions:3,emptyIcon:n,filledIcon:n})]})},Z=()=>{const[r,n]=s.useState(3);return e.jsx(a,{value:r,onChange:n})},ee=()=>{var h;const r={rating:3},{control:n,handleSubmit:t,watch:c,formState:{errors:o}}=mn({defaultValues:r}),i=m=>console.log("submit:",m);return console.log("watch:",c()),e.jsxs(vn,{as:"form",onSubmit:t(i),children:[e.jsx(le,{isInvalid:!!o.rating,label:"How satisfied are you with Yamada UI?",errorMessage:(h=o.rating)==null?void 0:h.message,children:e.jsx(fn,{name:"rating",control:n,render:({field:m})=>e.jsx(a,{...m})})}),e.jsx(kn,{type:"submit",alignSelf:"flex-end",children:"Submit"})]})};var he,xe,Ie;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(Ie=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:Ie.source}}};var Se,je,be;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <>
      <Rating size="xs" defaultValue={3} />
      <Rating size="sm" defaultValue={3} />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={3} />
      <Rating size="xl" defaultValue={3} />
    </>;
}`,...(be=(je=L.parameters)==null?void 0:je.docs)==null?void 0:be.source}}};var Ce,ye,Re;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
  return <>
      <Rating colorScheme="purple" defaultValue={3} />
      <Rating colorScheme="pink" defaultValue={3} />
    </>;
}`,...(Re=(ye=U.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var Ve,we,Fe;Y.parameters={...Y.parameters,docs:{...(Ve=Y.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(Fe=(we=Y.parameters)==null?void 0:we.docs)==null?void 0:Fe.source}}};var ve,ke,Me;H.parameters={...H.parameters,docs:{...(ve=H.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <>
      <Rating items={4} />
      <Rating items={5} />
      <Rating items={6} />
    </>;
}`,...(Me=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Me.source}}};var Pe,_e,De;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <>
      <Rating fractions={2} defaultValue={1.5} />
      <Rating fractions={3} defaultValue={2.33} />
      <Rating fractions={4} defaultValue={3.75} />
    </>;
}`,...(De=(_e=K.parameters)==null?void 0:_e.docs)==null?void 0:De.source}}};var Oe,ze,Te;W.parameters={...W.parameters,docs:{...(Oe=W.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Te=(ze=W.parameters)==null?void 0:ze.docs)==null?void 0:Te.source}}};var Ee,$e,Be;X.parameters={...X.parameters,docs:{...(Ee=X.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <>
      <Rating isDisabled defaultValue={3} />

      <FormControl isDisabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Be=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:Be.source}}};var Ae,Ne,Ge;q.parameters={...q.parameters,docs:{...(Ae=q.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
  return <>
      <Rating isReadOnly defaultValue={3} />

      <FormControl isReadOnly label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </FormControl>
    </>;
}`,...(Ge=(Ne=q.parameters)==null?void 0:Ne.docs)==null?void 0:Ge.source}}};var Le,Ue,Ye;J.parameters={...J.parameters,docs:{...(Le=J.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:Ye.source}}};var He,Ke,We;Q.parameters={...Q.parameters,docs:{...(He=Q.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...(We=(Ke=Q.parameters)==null?void 0:Ke.docs)==null?void 0:We.source}}};var Xe,qe,Je;Z.parameters={...Z.parameters,docs:{...(Xe=Z.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Je=(qe=Z.parameters)==null?void 0:qe.docs)==null?void 0:Je.source}}};var Qe,Ze,en;ee.parameters={...ee.parameters,docs:{...(Qe=ee.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(en=(Ze=ee.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};const lt=["basic","withSize","withColorScheme","withDefaultValue","withItems","withFractions","withHighlightSelectedOnly","isDisabled","isReadonly","customColor","customIcon","customControl","reactHookForm"];export{lt as __namedExportsOrder,G as basic,J as customColor,Z as customControl,Q as customIcon,ct as default,X as isDisabled,q as isReadonly,ee as reactHookForm,U as withColorScheme,Y as withDefaultValue,K as withFractions,W as withHighlightSelectedOnly,H as withItems,L as withSize};
