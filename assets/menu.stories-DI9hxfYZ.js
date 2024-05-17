import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as x,D as S,E as Tn,a as Yn,F as Zn,G as et}from"./fontawesome-icon-BI5x-FK8.js";import{u as An}from"./index-BDungtGN.js";import{r as t}from"./index-uCp2LrAq.js";import{c as nt}from"./index-COFWkQGM.js";import{u as tt}from"./index-DfTP5aZU.js";import{l as Se,aa as Pe,h as Be,a as Gn,f as Un,u as L,c as E,y as st,af as rt,ab as K,R as ot,e as ut,d as it,s as Le,t as ct}from"./factory-DvGXL-YE.js";import{f as z}from"./forward-ref-Dr5Hqd9a.js";import{P as at,a as lt,b as mt}from"./popover-content-D0i23Fqm.js";import{a as dt}from"./use-component-style-CKVmhMoE.js";import{o as Mt}from"./theme-provider-CElU3JB-.js";import{c as xt}from"./icon-BzEDtuLR.js";import{u as ht}from"./index-kpYE7fkF.js";import{B}from"./button-CZaZ02yG.js";import{I as Kn}from"./icon-button-DLFhBOpv.js";import{P as ft}from"./container-portal-DUjfKwAM.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-eirgXVfp.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-D3Fv6YO_.js";import"./index-BH3td1an.js";import"./index-CBqzus2r.js";import"./index-BSwE3osH.js";import"./index-C5-qRgl_.js";import"./index-BILTrIN3.js";import"./index-DwcR2jrO.js";import"./motion-BNFRb361.js";import"./slide-fade-Fj4MfLsk.js";import"./index-DSHhgXSs.js";import"./motion-Byty22b7.js";import"./utils-DV_cUTLG.js";import"./scale-fade-DfTmt9WP.js";import"./close-button-Tr2YE8bZ.js";import"./use-ripple-DPDtWmDJ.js";import"./index-BhLFEsxu.js";import"./loading-CCrvoEQI.js";import"./index-CqS9fqXy.js";const[It,be]=Se({strict:!1,name:"UpstreamMenuItemContext"}),pt=s=>{var o;return rt(s)&&!!((o=s==null?void 0:s.getAttribute("role"))!=null&&o.startsWith("menu-item"))},n=z(({as:s,className:o,type:u,isDisabled:r,isFocusable:c,closeOnSelect:m,icon:p,command:b,children:a,onClick:d,onFocus:f,onMouseEnter:v,onMouseMove:O,onMouseLeave:D,onKeyDown:l,...i},P)=>{const{focusedIndex:C,setFocusedIndex:g,isOpen:T,onClose:y,onUpstreamClose:F,closeOnSelect:A,menuRef:q,requestAnimationFrameId:V,isNested:$,styles:pe}=N(),{onUpstreamRestoreFocus:X}=be()??{},J=r&&!c,k=t.useRef(null),W=t.useRef(!1),R=t.useRef(()=>{}),{index:_,register:G}=Bt({disabled:J}),[w,U]=t.useState(!1),je=_===C,ge=t.useCallback(M=>{v==null||v(M),!r&&g(_)},[g,_,r,v]),qn=t.useCallback(M=>{O==null||O(M),k.current&&!Pe(k.current)&&ge(M)},[ge,O]),Vn=t.useCallback(M=>{D==null||D(M),!r&&g(-1)},[g,r,D]),Wn=t.useCallback(M=>{if(d==null||d(M),!pt(M.currentTarget))return;const Q=W.current;(m??(!Q&&A))&&(y(),F==null||F())},[d,m,A,y,F]),Hn=t.useCallback(M=>{f==null||f(M),g(_)},[f,g,_]),$n=t.useCallback(()=>{var M;(M=k.current)==null||M.focus(),g(_)},[g,_]),Jn=t.useCallback(M=>{l==null||l(M);const De={ArrowLeft:$?K(X,y):void 0}[M.key];De&&(M.preventDefault(),M.stopPropagation(),De())},[l,X,y,$]),Qn=tt({focusOnClick:!1,...i,onClick:Wn,onFocus:Hn,onMouseEnter:ge,onMouseMove:qn,onMouseLeave:Vn,onKeyDown:Be(Jn,R.current),ref:Gn(G,k,P),isDisabled:r,isFocusable:c});Un(()=>{if(!T)return;const M=V.current;return je&&!J&&k.current?(M&&cancelAnimationFrame(M),V.current=requestAnimationFrame(()=>{var Q;(Q=k.current)==null||Q.focus({preventScroll:!0}),V.current=null})):q.current&&!Pe(q.current)&&q.current.focus({preventScroll:!0}),()=>{M&&cancelAnimationFrame(M)}},[je,J,q,T]),u=s||u?u??void 0:"button",a=p||b?e.jsx(L.span,{style:{flex:1},children:a}):a;const Xn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...pe.item};return e.jsx(It,{value:{onKeyDownRef:R,onUpstreamRestoreFocus:$n,setDownstreamOpen:U,hasDownstreamRef:W},children:e.jsxs(L.li,{...Qn,...w?{"data-active":""}:{},as:s,type:u,role:"menu-item",tabIndex:je?0:-1,className:E("ui-menu__item",o),__css:Xn,children:[p?e.jsx(ve,{children:p}):null,a,b?e.jsx(jt,{children:b}):null]})})}),H=z(({className:s,icon:o,isChecked:u,closeOnSelect:r=!1,children:c,...m},p)=>e.jsxs(n,{ref:p,className:E("ui-menu__item--option",s),"aria-checked":st(u),closeOnSelect:r,...m,children:[o!==null?e.jsx(ve,{opacity:u?1:0,children:o||e.jsx(gt,{})}):null,c]})),ve=z(({className:s,...o},u)=>{const{styles:r}=N(),c={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...r.icon};return e.jsx(L.span,{ref:u,className:E("ui-menu__item__icon",s),__css:c,...o})}),jt=z(({className:s,...o},u)=>{const{styles:r}=N(),c={...r.command};return e.jsx(L.span,{ref:u,className:E("ui-menu__item__command",s),__css:c,...o})}),gt=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),{DescendantsContextProvider:wt,useDescendantsContext:Ct,useDescendants:St,useDescendant:Bt}=nt(),[bt,N]=Se({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[vt,Ot]=Se({strict:!1,name:"UpstreamMenuContext"}),h=s=>{const[o,u]=dt("Menu",s);let{initialFocusRef:r,closeOnSelect:c=!0,closeOnBlur:m,placement:p,duration:b=.2,offset:a,onOpen:d,onClose:f,...v}=Mt(u);const{relatedRef:O,onUpstreamClose:D,onDownstreamCloseMapRef:l}=Ot()??{},{setDownstreamOpen:i,hasDownstreamRef:P}=be()??{},C=!!O;C?(p??(p="right-start"),a??(a=[-8,8]),m??(m=!1)):p??(p="bottom-start");const g=St(),[T,y]=t.useState(-1),F=t.useRef(null),A=t.useRef(new Set([])),q=t.useRef(null),V=t.useRef(new Map),$=t.useCallback(()=>{requestAnimationFrame(()=>{var w;return(w=F.current)==null?void 0:w.focus({preventScroll:!1})})},[]),pe=t.useCallback(()=>{const w=setTimeout(()=>{if(r)return;const U=g.enabledFirstValue();U&&y(U.index)});A.current.add(w)},[g,r]),X=t.useCallback(()=>{const w=setTimeout(()=>{if(r)return;const U=g.enabledLastValue();U&&y(U.index)});A.current.add(w)},[g,r]),J=t.useCallback(()=>{d==null||d(),C||$()},[d,C,$]),k=t.useCallback(()=>{f==null||f();for(const w of V.current.values())w()},[f]),W=t.useId(),{isOpen:R,onOpen:_,onClose:G}=An({...s,onOpen:J,onClose:k});return t.useEffect(()=>{const w=l==null?void 0:l.current;return w==null||w.set(W,G),()=>{w==null||w.delete(W)}},[W,G,l]),t.useEffect(()=>{i&&i(R)},[i,R]),t.useEffect(()=>(P&&(P.current=!0),()=>{P&&(P.current=!1)})),Un(()=>{R||y(-1)},[R]),ot(()=>{A.current.forEach(w=>clearTimeout(w)),A.current.clear()}),e.jsx(wt,{value:g,children:e.jsx(vt,{value:{relatedRef:F,onDownstreamCloseMapRef:V,onUpstreamClose:K(D,G)},children:e.jsx(bt,{value:{isOpen:R,onOpen:_,onClose:G,onUpstreamClose:D,onFocusFirstItem:pe,onFocusLastItem:X,closeOnSelect:c,focusedIndex:T,setFocusedIndex:y,menuRef:F,requestAnimationFrameId:q,isNested:C,styles:o},children:e.jsx(at,{trigger:C?"hover":"click",...v,isOpen:R,onOpen:_,onClose:G,placement:p,offset:a,duration:b,initialFocusRef:r,relatedRef:O,closeOnButton:!1,closeOnBlur:m})})})})},j=z(({className:s,children:o,as:u,...r},c)=>{const{onKeyDownRef:m,onUpstreamRestoreFocus:p}=be()??{},{isOpen:b,onOpen:a,onClose:d,onFocusFirstItem:f,onFocusLastItem:v}=N(),O=t.useCallback(i=>{const C={Enter:K(a,f),ArrowDown:K(a,f),ArrowUp:K(a,v)}[i.key];C&&(i.preventDefault(),C())},[f,v,a]),D=t.useCallback(i=>{const C={ArrowRight:b?void 0:K(a,f),ArrowLeft:b?K(p,d):void 0}[i.key];C&&(i.preventDefault(),C())},[b,a,f,p,d]);ut(m,D);const l=u?L(u):Dt;return e.jsx(lt,{children:e.jsx(l,{ref:c,className:E("ui-menu",s),"aria-haspopup":"menu","aria-expanded":b,...r,"data-active":it(b),onKeyDown:Be(r.onKeyDown,O),children:o})})}),Dt=z((s,o)=>{const{styles:u}=N(),r={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...u.button};return e.jsx(L.button,{ref:o,__css:r,...s})}),Ee=z(({className:s,children:o,innerProps:u,icon:r,iconProps:c,...m},p)=>e.jsxs(j,{ref:p,className:E("ui-menu__item-button",s),flex:"1",...m,children:[e.jsx(L.span,{as:"span",flex:"1",...u,children:o}),e.jsx(ve,{...c,children:r??e.jsx(xt,{fontSize:"1.5em",transform:"rotate(-90deg)"})})]})),I=z(({className:s,...o},u)=>{const{menuRef:r,focusedIndex:c,setFocusedIndex:m,onClose:p,styles:b}=N(),a=Ct(),d=t.useCallback(()=>{const i=a.enabledNextValue(c);i&&m(i.index)},[a,c,m]),f=t.useCallback(()=>{const i=a.enabledPrevValue(c);i&&m(i.index)},[a,c,m]),v=t.useCallback(()=>{const i=a.enabledFirstValue();i&&m(i.index)},[a,m]),O=t.useCallback(()=>{const i=a.enabledLastValue();i&&m(i.index)},[a,m]),D=t.useCallback(i=>{const C={Tab:g=>g.preventDefault(),Escape:p,ArrowDown:c===-1?v:d,ArrowUp:c===-1?O:f,Home:v,End:O}[i.key];C&&(i.preventDefault(),C(i))},[c,p,v,O,d,f]),l={...b.list};return e.jsx(mt,{as:"ul",ref:Gn(r,u),className:E("ui-menu__list",s),role:"menu",tabIndex:-1,__css:l,...o,onKeyDown:Be(o.onKeyDown,D)})}),we=z(({className:s,label:o,children:u,...r},c)=>{const{styles:m}=N(),p={...m.group};return e.jsxs(L.li,{ref:c,className:E("ui-menu__item","ui-menu__item--group",s),role:"group",__css:p,...r,children:[o?e.jsx(L.span,{className:E("ui-menu__item--group-label"),__css:m.groupLabel,children:o}):null,e.jsx(L.ul,{className:"ui-menu__item__group",children:u})]})}),Ce=t.forwardRef(({className:s,value:o,defaultValue:u,onChange:r,type:c,children:m,...p},b)=>{const a=c==="radio";u??(u=a?"":[]);const[d,f]=ht({value:o,defaultValue:u,onChange:r}),v=t.useCallback(l=>{if(a&&typeof d=="string"&&f(l),!a&&Le(d)){const i=d.includes(l)?d.filter(P=>P!==l):d.concat(l);f(i)}},[a,d,f]),D=ct(m).map(l=>{if(l.type!==H)return l;const i=C=>{var g,T;v(l.props.value),(T=(g=l.props).onClick)==null||T.call(g,C)},P=!a&&Le(d)?d.includes(l.props.value):l.props.value===d;return t.cloneElement(l,{type:c,onClick:i,isChecked:P})});return e.jsx(we,{ref:b,className:E("ui-menu__item--group--option",s),...p,children:D})});Ce.displayName="MenuOptionGroup";const Oe=z(({className:s,...o},u)=>{const{styles:r}=N(),c={...r.divider};return e.jsx(L.hr,{ref:u,className:E("ui-menu__divider",s),__css:c,...o})}),ds={title:"Components / Overlay / Menu",component:h},Y=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Z=()=>e.jsxs(h,{children:[e.jsx(j,{as:Kn,icon:e.jsx(x,{icon:Tn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),ee=()=>e.jsxs(h,{children:[e.jsx(j,{as:Kn,icon:e.jsx(x,{icon:Tn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{icon:e.jsx(x,{icon:Yn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(x,{icon:Zn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(x,{icon:et}),command:"⌘O",children:"Open File"})]})]}),ne=()=>{const s=t.useRef(null);return e.jsxs(h,{initialFocusRef:s,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:s,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},te=()=>e.jsxs(h,{placement:"right-start",children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),se=()=>e.jsxs(h,{animation:"top",children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),re=()=>e.jsxs(h,{offset:[16,16],children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),oe=()=>e.jsxs(h,{gutter:32,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ue=()=>e.jsxs(h,{duration:.4,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ie=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(Oe,{}),e.jsx(n,{children:"Sign out"})]})]}),ce=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(we,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(Oe,{}),e.jsx(we,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),ae=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(Ce,{label:"order",type:"radio",children:[e.jsx(H,{value:"asc",children:"Ascending"}),e.jsx(H,{value:"desc",children:"Descending"})]}),e.jsx(Oe,{}),e.jsxs(Ce,{label:"display",type:"checkbox",children:[e.jsx(H,{value:"gender",children:"gender"}),e.jsx(H,{value:"email",children:"email"}),e.jsx(H,{value:"phone",children:"phone"})]})]})]}),le=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsx(ft,{children:e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),me=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:e.jsxs(h,{children:[e.jsx(Ee,{children:"Settings"}),e.jsxs(I,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(h,{children:[e.jsx(Ee,{children:"Theme"}),e.jsxs(I,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),de=()=>e.jsxs(h,{closeOnSelect:!1,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Me=()=>e.jsxs(h,{closeOnBlur:!1,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),xe=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),he=()=>e.jsxs(h,{children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),fe=()=>e.jsxs(h,{isLazy:!0,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Ie=()=>{const{isOpen:s,onOpen:o,onClose:u}=An();return e.jsxs(h,{isOpen:s,onOpen:o,onClose:u,children:[e.jsx(j,{as:B,rightIcon:e.jsx(x,{size:"xs",icon:S}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var _e,ze,ye;Y.parameters={...Y.parameters,docs:{...(_e=Y.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ye=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:ye.source}}};var Re,Fe,ke;Z.parameters={...Z.parameters,docs:{...(Re=Z.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ke=(Fe=Z.parameters)==null?void 0:Fe.docs)==null?void 0:ke.source}}};var Ne,Te,Ae;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem icon={<Icon icon={faPlus} />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<Icon icon={faArrowUpRightFromSquare} />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<Icon icon={faEdit} />} command="⌘O">
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ae=(Te=ee.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ge,Ue,Ke;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLButtonElement>(null);
  return <Menu initialFocusRef={ref}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ke=(Ue=ne.parameters)==null?void 0:Ue.docs)==null?void 0:Ke.source}}};var qe,Ve,We;te.parameters={...te.parameters,docs:{...(qe=te.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <Menu placement="right-start">
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(We=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var He,$e,Je;se.parameters={...se.parameters,docs:{...(He=se.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <Menu animation="top">
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Je=($e=se.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Qe,Xe,Ye;re.parameters={...re.parameters,docs:{...(Qe=re.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
  return <Menu offset={[16, 16]}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ye=(Xe=re.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,en,nn;oe.parameters={...oe.parameters,docs:{...(Ze=oe.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
  return <Menu gutter={32}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(nn=(en=oe.parameters)==null?void 0:en.docs)==null?void 0:nn.source}}};var tn,sn,rn;ue.parameters={...ue.parameters,docs:{...(tn=ue.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
  return <Menu duration={0.4}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(rn=(sn=ue.parameters)==null?void 0:sn.docs)==null?void 0:rn.source}}};var on,un,cn;ie.parameters={...ie.parameters,docs:{...(on=ie.parameters)==null?void 0:on.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>

        <MenuDivider />

        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>;
}`,...(cn=(un=ie.parameters)==null?void 0:un.docs)==null?void 0:cn.source}}};var an,ln,mn;ce.parameters={...ce.parameters,docs:{...(an=ce.parameters)==null?void 0:an.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup label="account">
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup label="action">
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>;
}`,...(mn=(ln=ce.parameters)==null?void 0:ln.docs)==null?void 0:mn.source}}};var dn,Mn,xn;ae.parameters={...ae.parameters,docs:{...(dn=ae.parameters)==null?void 0:dn.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup label="order" type="radio">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup label="display" type="checkbox">
          <MenuOptionItem value="gender">gender</MenuOptionItem>
          <MenuOptionItem value="email">email</MenuOptionItem>
          <MenuOptionItem value="phone">phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>;
}`,...(xn=(Mn=ae.parameters)==null?void 0:Mn.docs)==null?void 0:xn.source}}};var hn,fn,In;le.parameters={...le.parameters,docs:{...(hn=le.parameters)==null?void 0:hn.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <Portal>
        <MenuList>
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuList>
      </Portal>
    </Menu>;
}`,...(In=(fn=le.parameters)==null?void 0:fn.docs)==null?void 0:In.source}}};var pn,jn,gn;me.parameters={...me.parameters,docs:{...(pn=me.parameters)==null?void 0:pn.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>
          <Menu>
            <MenuItemButton>Settings</MenuItemButton>

            <MenuList>
              <MenuItem>Extensions</MenuItem>
              <MenuItem>
                <Menu>
                  <MenuItemButton>Theme</MenuItemButton>

                  <MenuList>
                    <MenuItem>Color Theme</MenuItem>
                    <MenuItem>File Icon Theme</MenuItem>
                    <MenuItem>Product Icon Theme</MenuItem>
                  </MenuList>
                </Menu>
              </MenuItem>
              <MenuItem>User Tasks</MenuItem>
            </MenuList>
          </Menu>
        </MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(gn=(jn=me.parameters)==null?void 0:jn.docs)==null?void 0:gn.source}}};var wn,Cn,Sn;de.parameters={...de.parameters,docs:{...(wn=de.parameters)==null?void 0:wn.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect={true}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Sn=(Cn=de.parameters)==null?void 0:Cn.docs)==null?void 0:Sn.source}}};var Bn,bn,vn;Me.parameters={...Me.parameters,docs:{...(Bn=Me.parameters)==null?void 0:Bn.docs,source:{originalSource:`() => {
  return <Menu closeOnBlur={false}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(vn=(bn=Me.parameters)==null?void 0:bn.docs)==null?void 0:vn.source}}};var On,Dn,Pn;xe.parameters={...xe.parameters,docs:{...(On=xe.parameters)==null?void 0:On.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Pn=(Dn=xe.parameters)==null?void 0:Dn.docs)==null?void 0:Pn.source}}};var Ln,En,_n;he.parameters={...he.parameters,docs:{...(Ln=he.parameters)==null?void 0:Ln.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled isFocusable>
          Edit Profile
        </MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(_n=(En=he.parameters)==null?void 0:En.docs)==null?void 0:_n.source}}};var zn,yn,Rn;fe.parameters={...fe.parameters,docs:{...(zn=fe.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
  return <Menu isLazy>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Rn=(yn=fe.parameters)==null?void 0:yn.docs)==null?void 0:Rn.source}}};var Fn,kn,Nn;Ie.parameters={...Ie.parameters,docs:{...(Fn=Ie.parameters)==null?void 0:Fn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton as={Button} rightIcon={<Icon size="xs" icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Nn=(kn=Ie.parameters)==null?void 0:kn.docs)==null?void 0:Nn.source}}};const Ms=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{Ms as __namedExportsOrder,Y as basic,Ie as customControl,ds as default,Me as disabledCloseBlur,de as disabledCloseOnSelect,xe as isDisabled,he as isFocusable,me as nestedMenu,fe as useLazy,se as withAnimation,Z as withCommand,ie as withDivider,ue as withDuration,ce as withGroup,oe as withGutter,ee as withIcon,ne as withInitialFocusRef,re as withOffset,ae as withOptionGroup,te as withPlacement,le as withPortal};
