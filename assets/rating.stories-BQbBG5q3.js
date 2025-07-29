import{l as ne,I as oe,d as xe,aP as Ce,c as ve,r as a,a9 as Se,h as P,m as be,b as je,M as Re,a as q,ax as Ve,f as ke,j as e,s as te,g as z,D as Ie,C as Me}from"./iframe-B58gGoPv.js";import{P as me}from"./props-table-DoDUM-tj.js";import{u as we}from"./index-Dp97PSmK.js";import{u as Pe,F as pe}from"./use-field-props-DAwmxNtQ.js";import{c as Fe}from"./number-CcP_arM8.js";import{c as ae}from"./createLucideIcon-BaHwRC9x.js";import{G as ie}from"./ghost-icon-fWtwPA36.js";import{S as Oe,F as _e}from"./smile-icon-Dqp0oLuG.js";import"./grid-BkobzWyq.js";import"./grid-item-Cy-ugCgy.js";import"./for-Bky_3Tl1.js";import"./flex-Col0vMQb.js";import"./heading-Cefe2Dmh.js";/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],Ee=ae("angry",Te);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],Le=ae("laugh",He);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],ze=ae("smile-plus",De);/**
 * @license lucide-react v0.533.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],$e=ae("star",Ae),qe=ne(oe)({as:Ee}),Be=ne(oe)({as:Le}),Ne=ne(oe)({as:ze}),de=ne(oe)({as:$e}),Ge=xe({base:{group:{position:"relative"},icon:{alignItems:"center",clipPath:"{clip-path}",display:"inline-flex",fill:"currentColor",justifyContent:"center"},item:{"&:has(input:focus-visible)":{...Ce.outside},color:{base:"{empty-color}",_filled:"{filled-color}"},cursor:"pointer",display:"block",lineHeight:"0",rounded:"l1",_notLast:{inset:0,position:"absolute"},_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}},root:{"--empty-color":"colors.bg.muted","--filled-color":"colorScheme.solid",display:"flex",w:"max-content"}},sizes:{xs:{icon:{fontSize:"md"}},sm:{icon:{fontSize:"lg"}},md:{icon:{fontSize:"xl"}},lg:{icon:{fontSize:"2xl"}},xl:{icon:{fontSize:"3xl"}}},defaultProps:{size:"md"}}),se=(t,n)=>{const r=Math.round(t/n)*n,p=`${n}`.split(".")[1]?.length||0;return Number(r.toFixed(p))},[Ke,ge]=ve({name:"RatingContext"}),Ue=(t={})=>{const n=a.useId(),{props:{id:r=n,name:p=n,count:c=5,defaultValue:C=0,disabled:u,fractions:F=1,highlightSelectedOnly:E=!1,required:v,value:k,onChange:O,onHover:h,...g},ariaProps:S,dataProps:I,eventProps:b}=Pe({...t,notSupportReadOnly:!0}),j=a.useRef(null),[R,y]=we({defaultValue:C,value:k,onChange:O}),[o,m]=a.useState(-1),V=a.useRef(!0),_=Math.floor(F),x=Math.floor(c),f=1/_,H=a.useMemo(()=>se(R,f),[f,R]),l=Se(I["data-readonly"]),M=!(l||u),A=o!==-1?o:H,T=a.useCallback(w=>{if(!j.current)return-1;const{left:d,width:re}=j.current.getBoundingClientRect(),he=re/x,ye=(w-d)/he;return Fe(se(ye+f/2,f),f,x)},[x,f]),$=a.useCallback(()=>{M&&(V.current=!1)},[M]),D=a.useCallback(()=>{M&&(m(-1),V.current=!0,o!==-1&&h?.(-1))},[o,h,M,m]),i=a.useCallback(w=>{if(u||l)return;const d=T(w.clientX);m(d),d!==o&&h?.(d)},[u,T,o,l,h]),L=a.useCallback(w=>{w.preventDefault();const d=w.touches[0];if(!d)return;const re=T(d.clientX);y(re)},[T,y]),ue=a.useCallback(w=>{w.preventDefault()},[]),fe=a.useCallback(({ref:w,...d}={})=>({...I,...b,...S,id:r,"aria-label":`${R} Stars`,"aria-readonly":je(l),role:"radiogroup",...g,...d,ref:be(w,g.ref,j),onMouseEnter:P(d.onMouseEnter,g.onMouseEnter,$),onMouseLeave:P(d.onMouseLeave,g.onMouseLeave,D),onMouseMove:P(d.onMouseMove,g.onMouseMove,i),onTouchEnd:P(d.onTouchEnd,g.onTouchEnd,ue),onTouchStart:P(d.onTouchStart,g.onTouchStart,L)}),[S,I,b,r,$,D,i,ue,L,l,g,R]);return{id:r,name:p,count:x,decimal:f,disabled:u,displayValue:A,fractions:_,highlightSelectedOnly:E,hoveredValue:o,interactive:M,outsideRef:V,readOnly:l,required:v,roundedValue:H,setHoveredValue:m,setValue:y,value:R,ariaProps:S,dataProps:I,eventProps:b,getRootProps:fe}},Ye=({groupValue:t,index:n,...r})=>{const{id:p,name:c,decimal:C,disabled:u,displayValue:F,highlightSelectedOnly:E,interactive:v,outsideRef:k,readOnly:O,required:h,roundedValue:g,setHoveredValue:S,setValue:I,ariaProps:b,dataProps:j,eventProps:R}=ge(),y=C*(t===1?n:n+1),o=a.useMemo(()=>se(t-1+y,C),[C,y,t]),m=o===F,V=o===g,_=E?o===F:o<=F,x=`${p}-${t}-${o}`,f=a.useCallback(()=>{k.current&&S(-1)},[k,S]),H=a.useCallback(i=>{if(!v)return;const L=parseFloat(i.target.value);S(L)},[v,S]),l=a.useCallback(i=>{v&&I(i)},[v,I]),M=a.useCallback(()=>{l(o)},[l,o]),A=a.useCallback(()=>{l(o)},[l,o]),T=a.useCallback(i=>{Re(i,{Space:()=>l(o)})},[l,o]),$=a.useCallback(({style:i,...L}={})=>({...j,...b,htmlFor:x,"data-active":q(m),"data-filled":q(_),...r,...L,style:{...i,zIndex:y!==1?m?1:-1:void 0},onMouseDown:P(L.onMouseDown,M),onTouchStart:P(L.onTouchStart,A)}),[m,b,j,_,y,x,M,A,r]),D=a.useCallback((i={})=>({...j,...R,...b,id:x,type:"radio",name:c,style:Ve.style,"aria-label":o.toString(),"data-active":q(m),"data-checked":q(V),checked:V,disabled:u,readOnly:O,required:h,value:o,...i,onBlur:P(f,i.onBlur),onChange:P(i.onChange,H),onKeyDown:P(i.onKeyDown,T)}),[x,c,o,m,V,j,R,b,u,O,h,f,H,T]);return{active:m,checked:V,filled:_,fractionValue:y,groupValue:t,value:o,getInputProps:D,getLabelProps:$}},{ComponentContext:Xe,useComponentContext:le,withContext:ce,withProvider:We}=ke("rating",Ge),s=We(({color:t,emptyIcon:n,filledIcon:r,groupProps:p,iconProps:c,inputProps:C,itemProps:u,...F})=>{const{id:E,name:v,count:k,decimal:O,disabled:h,displayValue:g,fractions:S,highlightSelectedOnly:I,hoveredValue:b,interactive:j,outsideRef:R,readOnly:y,required:o,roundedValue:m,setHoveredValue:V,setValue:_,value:x,ariaProps:f,dataProps:H,eventProps:l,getRootProps:M}=Ue(F),A=a.useMemo(()=>({id:E,name:v,count:k,decimal:O,disabled:h,displayValue:g,fractions:S,highlightSelectedOnly:I,hoveredValue:b,interactive:j,outsideRef:R,readOnly:y,required:o,roundedValue:m,setHoveredValue:V,setValue:_,value:x,ariaProps:f,dataProps:H,eventProps:l}),[E,v,k,O,h,S,I,b,j,g,R,y,o,m,V,_,x,f,H,l]),T=a.useMemo(()=>({color:t,emptyIcon:n,filledIcon:r,groupProps:p,iconProps:c,inputProps:C,itemProps:u}),[t,n,r,p,c,C,u]);return e.jsx(Ke,{value:A,children:e.jsx(Xe,{value:T,children:e.jsx(te.div,{...M(),children:Array.from({length:k}).map(($,D)=>e.jsx(Ze,{value:D+1},D))})})})},"root")(),Ze=ce(({value:t,...n})=>{const{fractions:r}=ge(),{groupProps:p}=le(),c=a.useMemo(()=>t===1?r+1:r,[t,r]);return e.jsx(te.div,{...z(p,t),...n,children:Array.from({length:c}).map((C,u)=>e.jsx(Je,{groupValue:t,index:u},u))})},"group")(),Je=ce(t=>{const{active:n,filled:r,fractionValue:p,groupValue:c,getInputProps:C,getLabelProps:u}=Ye(t),{emptyIcon:F=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),filledIcon:E=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),iconProps:v,inputProps:k,itemProps:O}=le(),h=p!==1?`inset(0 ${n?100-p*100:100}% 0 0)`:void 0;return e.jsxs(te.label,{...u(z(O,c)),children:[e.jsx(te.input,{...C(z(k,c))}),e.jsx(Qe,{"--clip-path":h,...z(v,c),children:r?z(E,c):z(F,c)})]})},"item")(void 0,({groupValue:t,...n})=>{const{color:r}=le();return{"--filled-color":Ie(z(r,t),"colors"),groupValue:t,...n}}),Qe=ce("div","icon")(),gt={component:s,title:"Components / Rating"},B=()=>e.jsx(s,{}),N=()=>e.jsx(me,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,n,r)=>e.jsx(s,{size:n,defaultValue:3},r)}),G=()=>e.jsx(me,{variant:"stack",rows:Me,children:(t,n,r)=>e.jsx(s,{colorScheme:n,defaultValue:3},r)}),K=()=>e.jsx(s,{defaultValue:3}),U=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{count:4}),e.jsx(s,{count:5}),e.jsx(s,{count:6})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1+1/2,fractions:2}),e.jsx(s,{defaultValue:2+1/3,fractions:3}),e.jsx(s,{defaultValue:3+1/4,fractions:4})]}),X=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,disabled:!0}),e.jsx(pe,{disabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,readOnly:!0}),e.jsx(pe,{label:"How satisfied are you with Yamada UI?",readOnly:!0,children:e.jsx(s,{defaultValue:3})})]}),J=()=>{const t=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:t,defaultValue:3})]})},Q=()=>{const t=n=>{switch(n){case 1:return e.jsx(qe,{});case 2:return e.jsx(_e,{});case 3:return e.jsx(Oe,{});case 4:return e.jsx(Be,{});case 5:return e.jsx(Ne,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(ie,{}),filledIcon:e.jsx(ie,{})}),e.jsx(s,{defaultValue:3,emptyIcon:t,filledIcon:t})]})},ee=()=>{const[t,n]=a.useState(3);return e.jsx(s,{value:t,onChange:n})};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`() => {
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
}`,...G.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating count={4} />
      <Rating count={5} />
      <Rating count={6} />
    </>;
}`,...U.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1 + 1 / 2} fractions={2} />
      <Rating defaultValue={2 + 1 / 3} fractions={3} />
      <Rating defaultValue={3 + 1 / 4} fractions={4} />
    </>;
}`,...Y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...X.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} disabled />

      <Field.Root disabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...W.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} readOnly />

      <Field.Root label="How satisfied are you with Yamada UI?" readOnly>
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...Z.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`() => {
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
}`,...Q.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...ee.parameters?.docs?.source}}};const ft=["Basic","Size","ColorScheme","DefaultValue","Count","Fractions","HighlightSelectedOnly","Disabled","Readonly","CustomColor","CustomIcon","CustomControl"];export{B as Basic,G as ColorScheme,U as Count,J as CustomColor,ee as CustomControl,Q as CustomIcon,K as DefaultValue,W as Disabled,Y as Fractions,X as HighlightSelectedOnly,Z as Readonly,N as Size,ft as __namedExportsOrder,gt as default};
