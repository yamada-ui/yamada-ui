import{n as ne,o as oe,I as ae,d as xe,a5 as Ce,c as ve,r as o,h as M,m as Se,e as be,a as je,b as q,Q as Re,g as Ve,j as e,s as te,k as D,Y as ke,C as Ie}from"./iframe-Dp_HdYH_.js";import{P as me}from"./props-table-DR2D3jHB.js";import{u as Me}from"./index-CaF8uhwe.js";import{u as we,F as pe}from"./use-field-props-BBv2JCBx.js";import{c as Pe}from"./number-CcP_arM8.js";import{G as ie}from"./ghost-icon-DrtV221b.js";import{S as Oe,F as Fe}from"./smile-icon-DauAslRb.js";import"./preload-helper-PPVm8Dsz.js";import"./grid-BxEmWAV4.js";import"./grid-item-B_xTJ0Vv.js";import"./for-B4pwjnZx.js";import"./flex-Csx8kE93.js";import"./heading-rI5evaQz.js";/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],Te=ne("angry",_e);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],He=ne("laugh",Ee);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],ze=ne("smile-plus",Le);/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Ae=ne("star",De),$e=oe(ae)({as:Te}),qe=oe(ae)({as:He}),Be=oe(ae)({as:ze}),de=oe(ae)({as:Ae}),Ne=xe({base:{group:{position:"relative"},icon:{alignItems:"center",clipPath:"{clip-path}",display:"inline-flex",fill:"currentColor",justifyContent:"center"},item:{"&:has(input:focus-visible)":{...Ce.outside},color:{base:"{empty-color}",_filled:"{filled-color}"},cursor:"pointer",display:"block",lineHeight:"0",rounded:"l1",_notLast:{inset:0,position:"absolute"},_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}},root:{"--empty-color":"colors.bg.muted","--filled-color":"colorScheme.solid",display:"flex",w:"max-content"}},sizes:{xs:{icon:{fontSize:"md"}},sm:{icon:{fontSize:"lg"}},md:{icon:{fontSize:"xl"}},lg:{icon:{fontSize:"2xl"}},xl:{icon:{fontSize:"3xl"}}},defaultProps:{size:"md"}}),se=(t,n)=>{const a=Math.round(t/n)*n,f=`${n}`.split(".")[1]?.length||0;return Number(a.toFixed(f))},[Ge,ge]=ve({name:"RatingContext"}),Ye=(t={})=>{const n=o.useId(),{props:{id:a=n,name:f=n,count:i=5,defaultValue:C=0,disabled:d,fractions:w=1,highlightSelectedOnly:H=!1,readOnly:c,required:b,value:P,onChange:O,onHover:F,...u},ariaProps:_,dataProps:v,eventProps:S}=we({...t,notSupportReadOnly:!0}),T=o.useRef(null),[g,r]=Me({defaultValue:C,value:P,onChange:O}),[l,y]=o.useState(-1),j=o.useRef(!0),R=Math.floor(w),V=Math.floor(i),h=1/R,x=o.useMemo(()=>se(g,h),[h,g]),k=!(c||d),A=l!==-1?l:x,E=o.useCallback(I=>{if(!T.current)return-1;const{left:p,width:re}=T.current.getBoundingClientRect(),he=re/V,ye=(I-p)/he;return Pe(se(ye+h/2,h),h,V)},[V,h]),$=o.useCallback(()=>{k&&(j.current=!1)},[k]),z=o.useCallback(()=>{k&&(y(-1),j.current=!0,l!==-1&&F?.(-1))},[l,F,k,y]),m=o.useCallback(I=>{if(d||c)return;const p=E(I.clientX);y(p),p!==l&&F?.(p)},[d,E,l,c,F]),L=o.useCallback(I=>{I.preventDefault();const p=I.touches[0];if(!p)return;const re=E(p.clientX);r(re)},[E,r]),ue=o.useCallback(I=>{I.preventDefault()},[]),fe=o.useCallback(({ref:I,...p}={})=>({...v,...S,..._,id:a,"aria-label":`${g} Stars`,"aria-readonly":be(c),role:"radiogroup",...u,...p,ref:Se(I,u.ref,T),onMouseEnter:M(p.onMouseEnter,u.onMouseEnter,$),onMouseLeave:M(p.onMouseLeave,u.onMouseLeave,z),onMouseMove:M(p.onMouseMove,u.onMouseMove,m),onTouchEnd:M(p.onTouchEnd,u.onTouchEnd,ue),onTouchStart:M(p.onTouchStart,u.onTouchStart,L)}),[_,v,S,a,$,z,m,ue,L,c,u,g]);return{id:a,name:f,count:V,decimal:h,disabled:d,displayValue:A,fractions:R,highlightSelectedOnly:H,hoveredValue:l,interactive:k,outsideRef:j,readOnly:c,required:b,roundedValue:x,setHoveredValue:y,setValue:r,value:g,ariaProps:_,dataProps:v,eventProps:S,getRootProps:fe}},Ke=({groupValue:t,index:n,...a})=>{const{id:f,name:i,decimal:C,disabled:d,displayValue:w,highlightSelectedOnly:H,interactive:c,outsideRef:b,readOnly:P,required:O,roundedValue:F,setHoveredValue:u,setValue:_,ariaProps:v,dataProps:S,eventProps:T}=ge(),g=C*(t===1?n:n+1),r=o.useMemo(()=>se(t-1+g,C),[C,g,t]),l=r===w,y=r===F,j=H?r===w:r<=w,R=`${f}-${t}-${r}`,V=o.useCallback(()=>{b.current&&u(-1)},[b,u]),h=o.useCallback(m=>{if(!c)return;const L=parseFloat(m.target.value);u(L)},[c,u]),x=o.useCallback(m=>{c&&_(m)},[c,_]),k=o.useCallback(()=>{x(r)},[x,r]),A=o.useCallback(()=>{x(r)},[x,r]),E=o.useCallback(m=>{je(m,{Space:()=>x(r)})},[x,r]),$=o.useCallback(({style:m,...L}={})=>({...S,...v,htmlFor:R,"data-active":q(l),"data-filled":q(j),...a,...L,style:{...m,zIndex:g!==1?l?1:-1:void 0},onMouseDown:M(L.onMouseDown,k),onTouchStart:M(L.onTouchStart,A)}),[l,v,S,j,g,R,k,A,a]),z=o.useCallback((m={})=>({...S,...T,...v,id:R,type:"radio",name:i,style:Re.style,"aria-label":r.toString(),"data-active":q(l),"data-checked":q(y),checked:y,disabled:d,readOnly:P,required:O,value:r,...m,onBlur:M(V,m.onBlur),onChange:M(m.onChange,h),onKeyDown:M(m.onKeyDown,E)}),[R,i,r,l,y,S,T,v,d,P,O,V,h,E]);return{active:l,checked:y,filled:j,fractionValue:g,groupValue:t,value:r,getInputProps:z,getLabelProps:$}},{ComponentContext:Ue,useComponentContext:le,withContext:ce,withProvider:Xe}=Ve("rating",Ne),s=Xe(({color:t,emptyIcon:n,filledIcon:a,groupProps:f,iconProps:i,inputProps:C,itemProps:d,...w})=>{const{id:H,name:c,count:b,decimal:P,disabled:O,displayValue:F,fractions:u,highlightSelectedOnly:_,hoveredValue:v,interactive:S,outsideRef:T,readOnly:g,required:r,roundedValue:l,setHoveredValue:y,setValue:j,value:R,ariaProps:V,dataProps:h,eventProps:x,getRootProps:k}=Ye(w),A=o.useMemo(()=>({id:H,name:c,count:b,decimal:P,disabled:O,displayValue:F,fractions:u,highlightSelectedOnly:_,hoveredValue:v,interactive:S,outsideRef:T,readOnly:g,required:r,roundedValue:l,setHoveredValue:y,setValue:j,value:R,ariaProps:V,dataProps:h,eventProps:x}),[H,c,b,P,O,u,_,v,S,F,T,g,r,l,y,j,R,V,h,x]),E=o.useMemo(()=>({color:t,emptyIcon:n,filledIcon:a,groupProps:f,iconProps:i,inputProps:C,itemProps:d}),[t,n,a,f,i,C,d]);return e.jsx(Ge,{value:A,children:e.jsx(Ue,{value:E,children:e.jsx(te.div,{...k(),children:Array.from({length:b}).map(($,z)=>e.jsx(Qe,{value:z+1},z))})})})},"root")(),Qe=ce(({value:t,...n})=>{const{fractions:a}=ge(),{groupProps:f}=le(),i=o.useMemo(()=>t===1?a+1:a,[t,a]);return e.jsx(te.div,{...D(f,t),...n,children:Array.from({length:i}).map((C,d)=>e.jsx(We,{groupValue:t,index:d},d))})},"group")(),We=ce(t=>{const{active:n,filled:a,fractionValue:f,groupValue:i,getInputProps:C,getLabelProps:d}=Ke(t),{emptyIcon:w=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),filledIcon:H=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),iconProps:c,inputProps:b,itemProps:P}=le(),O=f!==1?`inset(0 ${n?100-f*100:100}% 0 0)`:void 0;return e.jsxs(te.label,{...d(D(P,i)),children:[e.jsx(te.input,{...C(D(b,i))}),e.jsx(Ze,{"--clip-path":O,...D(c,i),children:a?D(H,i):D(w,i)})]})},"item")(void 0,({groupValue:t,...n})=>{const{color:a}=le();return{"--filled-color":ke(D(a,t),"colors"),groupValue:t,...n}}),Ze=ce("div","icon")(),pt={component:s,title:"Components / Rating"},B=()=>e.jsx(s,{}),N=()=>e.jsx(me,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,n,a)=>e.jsx(s,{size:n,defaultValue:3},a)}),G=()=>e.jsx(me,{variant:"stack",rows:Ie,children:(t,n,a)=>e.jsx(s,{colorScheme:n,defaultValue:3},a)}),Y=()=>e.jsx(s,{defaultValue:3}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{count:4}),e.jsx(s,{count:5}),e.jsx(s,{count:6})]}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1+1/2,fractions:2}),e.jsx(s,{defaultValue:2+1/3,fractions:3}),e.jsx(s,{defaultValue:3+1/4,fractions:4})]}),X=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),Q=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,disabled:!0}),e.jsx(pe,{disabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,readOnly:!0}),e.jsx(pe,{label:"How satisfied are you with Yamada UI?",readOnly:!0,children:e.jsx(s,{defaultValue:3})})]}),Z=()=>{const t=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:t,defaultValue:3})]})},J=()=>{const t=n=>{switch(n){case 1:return e.jsx($e,{});case 2:return e.jsx(Fe,{});case 3:return e.jsx(Oe,{});case 4:return e.jsx(qe,{});case 5:return e.jsx(Be,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(ie,{}),filledIcon:e.jsx(ie,{})}),e.jsx(s,{defaultValue:3,emptyIcon:t,filledIcon:t})]})},ee=()=>{const[t,n]=o.useState(3);return e.jsx(s,{value:t,onChange:n})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...B.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Rating key={key} size={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...N.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
      return <Rating key={key} colorScheme={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...G.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating count={4} />
      <Rating count={5} />
      <Rating count={6} />
    </>;
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1 + 1 / 2} fractions={2} />
      <Rating defaultValue={2 + 1 / 3} fractions={3} />
      <Rating defaultValue={3 + 1 / 4} fractions={4} />
    </>;
}`,...U.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...X.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} disabled />

      <Field.Root disabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...Q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} readOnly />

      <Field.Root label="How satisfied are you with Yamada UI?" readOnly>
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...W.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
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
    </>;
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
      <Rating defaultValue={3} emptyIcon={getIcon} filledIcon={getIcon} />
    </>;
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...ee.parameters?.docs?.source}}};const gt=["Basic","Size","ColorScheme","DefaultValue","Count","Fractions","HighlightSelectedOnly","Disabled","ReadOnly","CustomColor","CustomIcon","CustomControl"];export{B as Basic,G as ColorScheme,K as Count,Z as CustomColor,ee as CustomControl,J as CustomIcon,Y as DefaultValue,Q as Disabled,U as Fractions,X as HighlightSelectedOnly,W as ReadOnly,N as Size,gt as __namedExportsOrder,pt as default};
