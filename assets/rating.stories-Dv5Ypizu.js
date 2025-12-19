import{n as ne,o as oe,I as ae,d as et,a3 as tt,c as nt,r as o,h as w,m as ot,e as at,a as rt,b as q,O as st,g as lt,j as e,s as te,k as A,U as ct,C as ut}from"./iframe-D_HYglKf.js";import{P as Ye}from"./props-table-TlEH2bpt.js";import{u as it}from"./index-DlPqCcPe.js";import{u as dt,F as Xe}from"./use-field-props-DKtq6E-0.js";import{c as mt}from"./number-CcP_arM8.js";import{G as ie}from"./ghost-icon-Dyv7V6oW.js";import{S as pt,F as gt}from"./smile-icon-CF_Vzd7r.js";import"./preload-helper-C1FmrZbK.js";import"./grid-CteH-i1E.js";import"./grid-item-B8xJCE0J.js";import"./for-B7ME2eWM.js";import"./flex-DmJewv6f.js";import"./heading-D4a_pOa-.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}]],ht=ne("angry",ft);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],xt=ne("laugh",yt);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]],St=ne("smile-plus",Ct);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],bt=ne("star",vt),jt=oe(ae)({as:ht}),Rt=oe(ae)({as:xt}),Vt=oe(ae)({as:St}),de=oe(ae)({as:bt}),kt=et({base:{group:{position:"relative"},icon:{alignItems:"center",clipPath:"{clip-path}",display:"inline-flex",fill:"currentColor",justifyContent:"center"},item:{"&:has(input:focus-visible)":{...tt.outside},color:{base:"{empty-color}",_filled:"{filled-color}"},cursor:"pointer",display:"block",lineHeight:"0",rounded:"l1",_notLast:{inset:0,position:"absolute"},_readOnly:{layerStyle:"readOnly"},_disabled:{layerStyle:"disabled"}},root:{"--empty-color":"colors.bg.muted","--filled-color":"colorScheme.solid",display:"flex",w:"max-content"}},sizes:{xs:{icon:{fontSize:"md"}},sm:{icon:{fontSize:"lg"}},md:{icon:{fontSize:"xl"}},lg:{icon:{fontSize:"2xl"}},xl:{icon:{fontSize:"3xl"}}},defaultProps:{size:"md"}}),se=(t,n)=>{var l;const a=Math.round(t/n)*n,f=((l=`${n}`.split(".")[1])==null?void 0:l.length)||0;return Number(a.toFixed(f))},[It,We]=nt({name:"RatingContext"}),Mt=(t={})=>{const n=o.useId(),{props:{id:a=n,name:f=n,count:l=5,defaultValue:S=0,disabled:d,fractions:P=1,highlightSelectedOnly:L=!1,readOnly:u,required:j,value:O,onChange:F,onHover:h,...i},ariaProps:_,dataProps:v,eventProps:b}=dt({...t,notSupportReadOnly:!0}),T=o.useRef(null),[g,r]=it({defaultValue:S,value:O,onChange:F}),[c,x]=o.useState(-1),R=o.useRef(!0),V=Math.floor(P),k=Math.floor(l),y=1/V,C=o.useMemo(()=>se(g,y),[y,g]),I=!(u||d),H=c!==-1?c:C,E=o.useCallback(M=>{if(!T.current)return-1;const{left:p,width:re}=T.current.getBoundingClientRect(),Je=re/k,Qe=(M-p)/Je;return mt(se(Qe+y/2,y),y,k)},[k,y]),$=o.useCallback(()=>{I&&(R.current=!1)},[I]),D=o.useCallback(()=>{I&&(x(-1),R.current=!0,c!==-1&&(h==null||h(-1)))},[c,h,I,x]),m=o.useCallback(M=>{if(d||u)return;const p=E(M.clientX);x(p),p!==c&&(h==null||h(p))},[d,E,c,u,h]),z=o.useCallback(M=>{M.preventDefault();const p=M.touches[0];if(!p)return;const re=E(p.clientX);r(re)},[E,r]),ue=o.useCallback(M=>{M.preventDefault()},[]),Ze=o.useCallback(({ref:M,...p}={})=>({...v,...b,..._,id:a,"aria-label":`${g} Stars`,"aria-readonly":at(u),role:"radiogroup",...i,...p,ref:ot(M,i.ref,T),onMouseEnter:w(p.onMouseEnter,i.onMouseEnter,$),onMouseLeave:w(p.onMouseLeave,i.onMouseLeave,D),onMouseMove:w(p.onMouseMove,i.onMouseMove,m),onTouchEnd:w(p.onTouchEnd,i.onTouchEnd,ue),onTouchStart:w(p.onTouchStart,i.onTouchStart,z)}),[_,v,b,a,$,D,m,ue,z,u,i,g]);return{id:a,name:f,count:k,decimal:y,disabled:d,displayValue:H,fractions:V,highlightSelectedOnly:L,hoveredValue:c,interactive:I,outsideRef:R,readOnly:u,required:j,roundedValue:C,setHoveredValue:x,setValue:r,value:g,ariaProps:_,dataProps:v,eventProps:b,getRootProps:Ze}},wt=({groupValue:t,index:n,...a})=>{const{id:f,name:l,decimal:S,disabled:d,displayValue:P,highlightSelectedOnly:L,interactive:u,outsideRef:j,readOnly:O,required:F,roundedValue:h,setHoveredValue:i,setValue:_,ariaProps:v,dataProps:b,eventProps:T}=We(),g=S*(t===1?n:n+1),r=o.useMemo(()=>se(t-1+g,S),[S,g,t]),c=r===P,x=r===h,R=L?r===P:r<=P,V=`${f}-${t}-${r}`,k=o.useCallback(()=>{j.current&&i(-1)},[j,i]),y=o.useCallback(m=>{if(!u)return;const z=parseFloat(m.target.value);i(z)},[u,i]),C=o.useCallback(m=>{u&&_(m)},[u,_]),I=o.useCallback(()=>{C(r)},[C,r]),H=o.useCallback(()=>{C(r)},[C,r]),E=o.useCallback(m=>{rt(m,{Space:()=>C(r)})},[C,r]),$=o.useCallback(({style:m,...z}={})=>({...b,...v,htmlFor:V,"data-active":q(c),"data-filled":q(R),...a,...z,style:{...m,zIndex:g!==1?c?1:-1:void 0},onMouseDown:w(z.onMouseDown,I),onTouchStart:w(z.onTouchStart,H)}),[c,v,b,R,g,V,I,H,a]),D=o.useCallback((m={})=>({...b,...T,...v,id:V,type:"radio",name:l,style:st.style,"aria-label":r.toString(),"data-active":q(c),"data-checked":q(x),checked:x,disabled:d,readOnly:O,required:F,value:r,...m,onBlur:w(k,m.onBlur),onChange:w(m.onChange,y),onKeyDown:w(m.onKeyDown,E)}),[V,l,r,c,x,b,T,v,d,O,F,k,y,E]);return{active:c,checked:x,filled:R,fractionValue:g,groupValue:t,value:r,getInputProps:D,getLabelProps:$}},{ComponentContext:Pt,useComponentContext:le,withContext:ce,withProvider:Ot}=lt("rating",kt),s=Ot(({color:t,emptyIcon:n,filledIcon:a,groupProps:f,iconProps:l,inputProps:S,itemProps:d,...P})=>{const{id:L,name:u,count:j,decimal:O,disabled:F,displayValue:h,fractions:i,highlightSelectedOnly:_,hoveredValue:v,interactive:b,outsideRef:T,readOnly:g,required:r,roundedValue:c,setHoveredValue:x,setValue:R,value:V,ariaProps:k,dataProps:y,eventProps:C,getRootProps:I}=Mt(P),H=o.useMemo(()=>({id:L,name:u,count:j,decimal:O,disabled:F,displayValue:h,fractions:i,highlightSelectedOnly:_,hoveredValue:v,interactive:b,outsideRef:T,readOnly:g,required:r,roundedValue:c,setHoveredValue:x,setValue:R,value:V,ariaProps:k,dataProps:y,eventProps:C}),[L,u,j,O,F,i,_,v,b,h,T,g,r,c,x,R,V,k,y,C]),E=o.useMemo(()=>({color:t,emptyIcon:n,filledIcon:a,groupProps:f,iconProps:l,inputProps:S,itemProps:d}),[t,n,a,f,l,S,d]);return e.jsx(It,{value:H,children:e.jsx(Pt,{value:E,children:e.jsx(te.div,{...I(),children:Array.from({length:j}).map(($,D)=>e.jsx(Ft,{value:D+1},D))})})})},"root")(),Ft=ce(({value:t,...n})=>{const{fractions:a}=We(),{groupProps:f}=le(),l=o.useMemo(()=>t===1?a+1:a,[t,a]);return e.jsx(te.div,{...A(f,t),...n,children:Array.from({length:l}).map((S,d)=>e.jsx(_t,{groupValue:t,index:d},d))})},"group")(),_t=ce(t=>{const{active:n,filled:a,fractionValue:f,groupValue:l,getInputProps:S,getLabelProps:d}=wt(t),{emptyIcon:P=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),filledIcon:L=e.jsx(de,{fill:"currentColor",strokeColor:"currentColor"}),iconProps:u,inputProps:j,itemProps:O}=le(),F=f!==1?`inset(0 ${n?100-f*100:100}% 0 0)`:void 0;return e.jsxs(te.label,{...d(A(O,l)),children:[e.jsx(te.input,{...S(A(j,l))}),e.jsx(Tt,{"--clip-path":F,...A(u,l),children:a?A(L,l):A(P,l)})]})},"item")(void 0,({groupValue:t,...n})=>{const{color:a}=le();return{"--filled-color":ct(A(a,t),"colors"),groupValue:t,...n}}),Tt=ce("div","icon")(),Xt={component:s,title:"Components / Rating"},B=()=>e.jsx(s,{}),N=()=>e.jsx(Ye,{variant:"stack",rows:["xs","sm","md","lg","xl"],children:(t,n,a)=>e.jsx(s,{size:n,defaultValue:3},a)}),G=()=>e.jsx(Ye,{variant:"stack",rows:ut,children:(t,n,a)=>e.jsx(s,{colorScheme:n,defaultValue:3},a)}),U=()=>e.jsx(s,{defaultValue:3}),K=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{count:4}),e.jsx(s,{count:5}),e.jsx(s,{count:6})]}),Y=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:1+1/2,fractions:2}),e.jsx(s,{defaultValue:2+1/3,fractions:3}),e.jsx(s,{defaultValue:3+1/4,fractions:4})]}),X=()=>e.jsx(s,{defaultValue:3,highlightSelectedOnly:!0}),W=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,disabled:!0}),e.jsx(Xe,{disabled:!0,label:"How satisfied are you with Yamada UI?",children:e.jsx(s,{defaultValue:3})})]}),Z=()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,readOnly:!0}),e.jsx(Xe,{label:"How satisfied are you with Yamada UI?",readOnly:!0,children:e.jsx(s,{defaultValue:3})})]}),J=()=>{const t=n=>{switch(n){case 1:return"red.500";case 2:return"orange.500";case 3:return"yellow.500";case 4:return"green.500";case 5:return"blue.500";default:return}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{color:"green.500",defaultValue:3}),e.jsx(s,{color:t,defaultValue:3})]})},Q=()=>{const t=n=>{switch(n){case 1:return e.jsx(jt,{});case 2:return e.jsx(gt,{});case 3:return e.jsx(pt,{});case 4:return e.jsx(Rt,{});case 5:return e.jsx(Vt,{});default:return null}};return e.jsxs(e.Fragment,{children:[e.jsx(s,{defaultValue:3,emptyIcon:e.jsx(ie,{}),filledIcon:e.jsx(ie,{})}),e.jsx(s,{defaultValue:3,emptyIcon:t,filledIcon:t})]})},ee=()=>{const[t,n]=o.useState(3);return e.jsx(s,{value:t,onChange:n})};var me,pe,ge;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
  return <Rating />;
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var fe,he,ye;N.parameters={...N.parameters,docs:{...(fe=N.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={["xs", "sm", "md", "lg", "xl"]}>
      {(_, row, key) => {
      return <Rating key={key} size={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...(ye=(he=N.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var xe,Ce,Se;G.parameters={...G.parameters,docs:{...(xe=G.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <PropsTable variant="stack" rows={COLOR_SCHEMES}>
      {(_, row, key) => {
      return <Rating key={key} colorScheme={row} defaultValue={3} />;
    }}
    </PropsTable>;
}`,...(Se=(Ce=G.parameters)==null?void 0:Ce.docs)==null?void 0:Se.source}}};var ve,be,je;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} />;
}`,...(je=(be=U.parameters)==null?void 0:be.docs)==null?void 0:je.source}}};var Re,Ve,ke;K.parameters={...K.parameters,docs:{...(Re=K.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <>
      <Rating count={4} />
      <Rating count={5} />
      <Rating count={6} />
    </>;
}`,...(ke=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:ke.source}}};var Ie,Me,we;Y.parameters={...Y.parameters,docs:{...(Ie=Y.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={1 + 1 / 2} fractions={2} />
      <Rating defaultValue={2 + 1 / 3} fractions={3} />
      <Rating defaultValue={3 + 1 / 4} fractions={4} />
    </>;
}`,...(we=(Me=Y.parameters)==null?void 0:Me.docs)==null?void 0:we.source}}};var Pe,Oe,Fe;X.parameters={...X.parameters,docs:{...(Pe=X.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  return <Rating defaultValue={3} highlightSelectedOnly />;
}`,...(Fe=(Oe=X.parameters)==null?void 0:Oe.docs)==null?void 0:Fe.source}}};var _e,Te,Ee;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} disabled />

      <Field.Root disabled label="How satisfied are you with Yamada UI?">
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...(Ee=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Le,ze,De;Z.parameters={...Z.parameters,docs:{...(Le=Z.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <>
      <Rating defaultValue={3} readOnly />

      <Field.Root label="How satisfied are you with Yamada UI?" readOnly>
        <Rating defaultValue={3} />
      </Field.Root>
    </>;
}`,...(De=(ze=Z.parameters)==null?void 0:ze.docs)==null?void 0:De.source}}};var Ae,He,$e;J.parameters={...J.parameters,docs:{...(Ae=J.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...($e=(He=J.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var qe,Be,Ne;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Be=Q.parameters)==null?void 0:Be.docs)==null?void 0:Ne.source}}};var Ge,Ue,Ke;ee.parameters={...ee.parameters,docs:{...(Ge=ee.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const [value, onChange] = useState<number>(3);
  return <Rating value={value} onChange={onChange} />;
}`,...(Ke=(Ue=ee.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};const Wt=["Basic","Size","ColorScheme","DefaultValue","Count","Fractions","HighlightSelectedOnly","Disabled","ReadOnly","CustomColor","CustomIcon","CustomControl"];export{B as Basic,G as ColorScheme,K as Count,J as CustomColor,ee as CustomControl,Q as CustomIcon,U as DefaultValue,W as Disabled,Y as Fractions,X as HighlightSelectedOnly,Z as ReadOnly,N as Size,Wt as __namedExportsOrder,Xt as default};
