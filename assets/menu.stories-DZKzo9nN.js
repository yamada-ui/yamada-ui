import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as h,D as C,E as Tn,a as Zn,F as et,G as nt}from"./fontawesome-icon-DUpCn2CC.js";import{u as An}from"./index-m_mncMBS.js";import{r as t}from"./index-CBqU2yxZ.js";import{c as tt}from"./index-B4gSFzwB.js";import{u as st}from"./index-DCJ79jOd.js";import{k as Se,a4 as Pe,h as Be,a as Gn,e as Un,u as L,c as E,y as qn,ah as rt,a5 as U,Q as ot,d as ut,x as it,q as Le,s as ct,B as at}from"./factory-C06z1xU-.js";import{f as z}from"./forward-ref-DuAegr0M.js";import{P as lt,a as mt,b as dt}from"./popover-content-DoAFd61Y.js";import{a as Mt}from"./use-component-style-DsbQcAsS.js";import{o as xt}from"./theme-provider-CPLFDFaK.js";import{c as ht}from"./icon-BlFf9vuW.js";import{u as ft}from"./index-DEC9cry9.js";import{B as S}from"./button-wbKktb-r.js";import{I as Kn}from"./icon-button-CKr__I7j.js";import{P as It}from"./container-portal-BBLTjt9V.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-dOiiHaRb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-XCeQ5uE8.js";import"./index-rYLD436_.js";import"./index-Dv3jTNze.js";import"./index-BWkppTmR.js";import"./index-NLPK5oDZ.js";import"./index-C9RPSCst.js";import"./motion-JgkBPv6g.js";import"./slide-fade-z6exBYUA.js";import"./index-_tcQm2Fk.js";import"./motion-CogyOzDV.js";import"./utils-CK4Vuz3E.js";import"./scale-fade-Db1JbvCk.js";import"./close-button-rHbhkx-n.js";import"./use-ripple-CjJeY8ag.js";import"./index-32fc5dt2.js";import"./loading-g7zVV2FP.js";import"./index-BtM5VmRH.js";const[pt,be]=Se({strict:!1,name:"UpstreamMenuItemContext"}),jt=s=>{var o;return rt(s)&&!!((o=s==null?void 0:s.getAttribute("role"))!=null&&o.startsWith("menu-item"))},n=z(({as:s,className:o,type:u,isDisabled:r,isFocusable:i,closeOnSelect:m,icon:d,command:x,children:a,onClick:B,onFocus:j,onMouseEnter:O,onMouseMove:l,onMouseLeave:D,onKeyDown:b,...c},P)=>{const{focusedIndex:g,setFocusedIndex:v,isOpen:J,onClose:y,onUpstreamClose:R,closeOnSelect:T,menuRef:q,requestAnimationFrameId:K,isNested:H,styles:pe}=N(),{onUpstreamRestoreFocus:X}=be()??{},Q=r&&!i,k=t.useRef(null),V=t.useRef(!1),F=t.useRef(()=>{}),{index:_,register:A}=bt({disabled:Q}),[w,G]=t.useState(!1),je=_===g,ge=t.useCallback(M=>{O==null||O(M),!r&&v(_)},[v,_,r,O]),Vn=t.useCallback(M=>{l==null||l(M),k.current&&!Pe(k.current)&&ge(M)},[ge,l]),Wn=t.useCallback(M=>{D==null||D(M),!r&&v(-1)},[v,r,D]),Hn=t.useCallback(M=>{if(B==null||B(M),!jt(M.currentTarget))return;const $=V.current;(m??(!$&&T))&&(y(),R==null||R())},[B,m,T,y,R]),Qn=t.useCallback(M=>{j==null||j(M),v(_)},[j,v,_]),$n=t.useCallback(()=>{var M;(M=k.current)==null||M.focus(),v(_)},[v,_]),Jn=t.useCallback(M=>{b==null||b(M);const De={ArrowLeft:H?U(X,y):void 0}[M.key];De&&(M.preventDefault(),M.stopPropagation(),De())},[b,X,y,H]),Xn=st({focusOnClick:!1,...c,onClick:Hn,onFocus:Qn,onMouseEnter:ge,onMouseMove:Vn,onMouseLeave:Wn,onKeyDown:Be(Jn,F.current),ref:Gn(A,k,P),isDisabled:r,isFocusable:i});Un(()=>{if(!J)return;const M=K.current;return je&&!Q&&k.current?(M&&cancelAnimationFrame(M),K.current=requestAnimationFrame(()=>{var $;($=k.current)==null||$.focus({preventScroll:!0}),K.current=null})):q.current&&!Pe(q.current)&&q.current.focus({preventScroll:!0}),()=>{M&&cancelAnimationFrame(M)}},[je,Q,q,J]),u=s||u?u??void 0:"button",a=d||x?e.jsx(L.span,{style:{flex:1},children:a}):a;const Yn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...pe.item};return e.jsx(pt,{value:{onKeyDownRef:F,onUpstreamRestoreFocus:$n,setDownstreamOpen:G,hasDownstreamRef:V},children:e.jsxs(L.li,{...Xn,...w?{"data-active":""}:{},as:s,type:u,role:"menu-item",tabIndex:je?0:-1,className:E("ui-menu__item",o),__css:Yn,children:[d?e.jsx(ve,{children:d}):null,a,x?e.jsx(gt,{children:x}):null]})})}),W=z(({className:s,icon:o,isChecked:u,closeOnSelect:r=!1,children:i,...m},d)=>e.jsxs(n,{ref:d,className:E("ui-menu__item--option",s),"aria-checked":qn(u),closeOnSelect:r,...m,children:[o!==null?e.jsx(ve,{opacity:u?1:0,children:o||e.jsx(wt,{})}):null,i]})),ve=z(({className:s,...o},u)=>{const{styles:r}=N(),i={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...r.icon};return e.jsx(L.span,{ref:u,className:E("ui-menu__item__icon",s),__css:i,...o})}),gt=z(({className:s,...o},u)=>{const{styles:r}=N(),i={...r.command};return e.jsx(L.span,{ref:u,className:E("ui-menu__item__command",s),__css:i,...o})}),wt=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),{DescendantsContextProvider:Ct,useDescendantsContext:St,useDescendants:Bt,useDescendant:bt}=tt(),[vt,N]=Se({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),[Ot,Dt]=Se({strict:!1,name:"UpstreamMenuContext"}),f=s=>{const[o,u]=Mt("Menu",s);let{initialFocusRef:r,closeOnSelect:i=!0,closeOnBlur:m,placement:d,duration:x=.2,offset:a,onOpen:B,onClose:j,...O}=xt(u);const{relatedRef:l,onUpstreamClose:D,onDownstreamCloseMapRef:b}=Dt()??{},{setDownstreamOpen:c,hasDownstreamRef:P}=be()??{},g=!!l;g?(d??(d="right-start"),a??(a=[-8,8]),m??(m=!1)):d??(d="bottom-start");const v=Bt(),[J,y]=t.useState(-1),R=t.useRef(null),T=t.useRef(new Set([])),q=t.useRef(null),K=t.useRef(new Map),H=t.useCallback(()=>{requestAnimationFrame(()=>{var w;return(w=R.current)==null?void 0:w.focus({preventScroll:!1})})},[]),pe=t.useCallback(()=>{const w=setTimeout(()=>{if(r)return;const G=v.enabledFirstValue();G&&y(G.index)});T.current.add(w)},[v,r]),X=t.useCallback(()=>{const w=setTimeout(()=>{if(r)return;const G=v.enabledLastValue();G&&y(G.index)});T.current.add(w)},[v,r]),Q=t.useCallback(()=>{B==null||B(),g||H()},[B,g,H]),k=t.useCallback(()=>{j==null||j();for(const w of K.current.values())w()},[j]),V=t.useId(),{isOpen:F,onOpen:_,onClose:A}=An({...s,onOpen:Q,onClose:k});return t.useEffect(()=>{const w=b==null?void 0:b.current;return w==null||w.set(V,A),()=>{w==null||w.delete(V)}},[V,A,b]),t.useEffect(()=>{c&&c(F)},[c,F]),t.useEffect(()=>(P&&(P.current=!0),()=>{P&&(P.current=!1)})),Un(()=>{F||y(-1)},[F]),ot(()=>{T.current.forEach(w=>clearTimeout(w)),T.current.clear()}),e.jsx(Ct,{value:v,children:e.jsx(Ot,{value:{relatedRef:R,onDownstreamCloseMapRef:K,onUpstreamClose:U(D,A)},children:e.jsx(vt,{value:{isOpen:F,onOpen:_,onClose:A,onUpstreamClose:D,onFocusFirstItem:pe,onFocusLastItem:X,closeOnSelect:i,focusedIndex:J,setFocusedIndex:y,menuRef:R,requestAnimationFrameId:q,isNested:g,styles:o},children:e.jsx(lt,{trigger:g?"hover":"click",...O,isOpen:F,onOpen:_,onClose:A,placement:d,offset:a,duration:x,initialFocusRef:r,relatedRef:l,closeOnButton:!1,closeOnBlur:m})})})})},p=z(({className:s,children:o,as:u,...r},i)=>{const{onKeyDownRef:m,onUpstreamRestoreFocus:d}=be()??{},{isOpen:x,onOpen:a,onClose:B,onFocusFirstItem:j,onFocusLastItem:O}=N(),l=t.useCallback(c=>{const g={Enter:U(a,j),ArrowDown:U(a,j),ArrowUp:U(a,O)}[c.key];g&&(c.preventDefault(),g())},[j,O,a]),D=t.useCallback(c=>{const g={ArrowRight:x?void 0:U(a,j),ArrowLeft:x?U(d,B):void 0}[c.key];g&&(c.preventDefault(),g())},[x,a,j,d,B]);ut(m,D);const b=u?L(u):Pt;return e.jsx(mt,{children:e.jsx(b,{ref:i,className:E("ui-menu",s),...r,"data-active":it(x),"aria-expanded":qn(x),onKeyDown:Be(r.onKeyDown,l),children:o})})}),Pt=z((s,o)=>{const{styles:u}=N(),r={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...u.button};return e.jsx(L.button,{ref:o,__css:r,...s})}),Ee=z(({className:s,children:o,innerProps:u,icon:r,iconProps:i,...m},d)=>e.jsxs(p,{ref:d,className:E("ui-menu__item-button",s),flex:"1",...m,children:[e.jsx(L.span,{as:"span",flex:"1",...u,children:o}),e.jsx(ve,{...i,children:r??e.jsx(ht,{fontSize:"1.5em",transform:"rotate(-90deg)"})})]})),I=z(({className:s,...o},u)=>{const{menuRef:r,focusedIndex:i,setFocusedIndex:m,onClose:d,styles:x}=N(),a=St(),B=t.useCallback(()=>{const c=a.enabledNextValue(i);c&&m(c.index)},[a,i,m]),j=t.useCallback(()=>{const c=a.enabledPrevValue(i);c&&m(c.index)},[a,i,m]),O=t.useCallback(()=>{const c=a.enabledFirstValue();c&&m(c.index)},[a,m]),l=t.useCallback(()=>{const c=a.enabledLastValue();c&&m(c.index)},[a,m]),D=t.useCallback(c=>{const g={Tab:v=>v.preventDefault(),Escape:d,ArrowDown:i===-1?O:B,ArrowUp:i===-1?l:j,Home:O,End:l}[c.key];g&&(c.preventDefault(),g(c))},[i,d,O,l,B,j]),b={...x.list};return e.jsx(dt,{as:"ul",ref:Gn(r,u),className:E("ui-menu__list",s),role:"menu",tabIndex:-1,__css:b,...o,onKeyDown:Be(o.onKeyDown,D)})}),we=z(({className:s,label:o,children:u,...r},i)=>{const{styles:m}=N(),d={...m.group};return e.jsxs(L.li,{ref:i,className:E("ui-menu__item","ui-menu__item--group",s),role:"group",__css:d,...r,children:[o?e.jsx(L.span,{className:E("ui-menu__item--group-label"),__css:m.groupLabel,children:o}):null,e.jsx(L.ul,{className:"ui-menu__item__group",children:u})]})}),Ce=t.forwardRef(({className:s,defaultValue:o,type:u,children:r,...i},m)=>{const d=u==="radio";o??(o=d?"":[]);const[x,a]=ft({...i,defaultValue:o}),B=t.useCallback(l=>{if(d&&typeof x=="string"&&a(l),!d&&Le(x)){const D=x.includes(l)?x.filter(b=>b!==l):x.concat(l);a(D)}},[d,x,a]),O=ct(r).map(l=>{if(l.type!==W)return l;const D=c=>{var P,g;B(l.props.value),(g=(P=l.props).onClick)==null||g.call(P,c)},b=!d&&Le(x)?x.includes(l.props.value):l.props.value===x;return t.cloneElement(l,{type:u,onClick:D,isChecked:b})});return e.jsx(we,{ref:m,className:E("ui-menu__item--group--option",s),...at(i,["value","onChange"]),children:O})});Ce.displayName="MenuOptionGroup";const Oe=z(({className:s,...o},u)=>{const{styles:r}=N(),i={...r.divider};return e.jsx(L.hr,{ref:u,className:E("ui-menu__divider",s),__css:i,...o})}),Ms={title:"Components / Overlay / Menu",component:f},Y=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Z=()=>e.jsxs(f,{children:[e.jsx(p,{as:Kn,icon:e.jsx(h,{icon:Tn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),ee=()=>e.jsxs(f,{children:[e.jsx(p,{as:Kn,icon:e.jsx(h,{icon:Tn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{icon:e.jsx(h,{icon:Zn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(h,{icon:et}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(h,{icon:nt}),command:"⌘O",children:"Open File"})]})]}),ne=()=>{const s=t.useRef(null);return e.jsxs(f,{initialFocusRef:s,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:s,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},te=()=>e.jsxs(f,{placement:"right-start",children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),se=()=>e.jsxs(f,{animation:"top",children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),re=()=>e.jsxs(f,{offset:[16,16],children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),oe=()=>e.jsxs(f,{gutter:32,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ue=()=>e.jsxs(f,{duration:.4,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ie=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(Oe,{}),e.jsx(n,{children:"Sign out"})]})]}),ce=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(we,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(Oe,{}),e.jsx(we,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),ae=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(Ce,{label:"order",type:"radio",children:[e.jsx(W,{value:"asc",children:"Ascending"}),e.jsx(W,{value:"desc",children:"Descending"})]}),e.jsx(Oe,{}),e.jsxs(Ce,{label:"display",type:"checkbox",children:[e.jsx(W,{value:"gender",children:"gender"}),e.jsx(W,{value:"email",children:"email"}),e.jsx(W,{value:"phone",children:"phone"})]})]})]}),le=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsx(It,{children:e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),me=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:e.jsxs(f,{children:[e.jsx(Ee,{children:"Settings"}),e.jsxs(I,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(f,{children:[e.jsx(Ee,{children:"Theme"}),e.jsxs(I,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),de=()=>e.jsxs(f,{closeOnSelect:!1,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Me=()=>e.jsxs(f,{closeOnBlur:!1,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),xe=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),he=()=>e.jsxs(f,{children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),fe=()=>e.jsxs(f,{isLazy:!0,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Ie=()=>{const{isOpen:s,onOpen:o,onClose:u}=An();return e.jsxs(f,{isOpen:s,onOpen:o,onClose:u,children:[e.jsx(p,{as:S,rightIcon:e.jsx(h,{size:"xs",icon:C}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var _e,ze,ye;Y.parameters={...Y.parameters,docs:{...(_e=Y.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(ye=(ze=Y.parameters)==null?void 0:ze.docs)==null?void 0:ye.source}}};var Fe,Re,ke;Z.parameters={...Z.parameters,docs:{...(Fe=Z.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ke=(Re=Z.parameters)==null?void 0:Re.docs)==null?void 0:ke.source}}};var Ne,Te,Ae;ee.parameters={...ee.parameters,docs:{...(Ne=ee.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Te=ee.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var Ge,Ue,qe;ne.parameters={...ne.parameters,docs:{...(Ge=ne.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(qe=(Ue=ne.parameters)==null?void 0:Ue.docs)==null?void 0:qe.source}}};var Ke,Ve,We;te.parameters={...te.parameters,docs:{...(Ke=te.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(We=(Ve=te.parameters)==null?void 0:Ve.docs)==null?void 0:We.source}}};var He,Qe,$e;se.parameters={...se.parameters,docs:{...(He=se.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
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
}`,...($e=(Qe=se.parameters)==null?void 0:Qe.docs)==null?void 0:$e.source}}};var Je,Xe,Ye;re.parameters={...re.parameters,docs:{...(Je=re.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(_n=(En=he.parameters)==null?void 0:En.docs)==null?void 0:_n.source}}};var zn,yn,Fn;fe.parameters={...fe.parameters,docs:{...(zn=fe.parameters)==null?void 0:zn.docs,source:{originalSource:`() => {
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
}`,...(Fn=(yn=fe.parameters)==null?void 0:yn.docs)==null?void 0:Fn.source}}};var Rn,kn,Nn;Ie.parameters={...Ie.parameters,docs:{...(Rn=Ie.parameters)==null?void 0:Rn.docs,source:{originalSource:`() => {
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
}`,...(Nn=(kn=Ie.parameters)==null?void 0:kn.docs)==null?void 0:Nn.source}}};const xs=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{xs as __namedExportsOrder,Y as basic,Ie as customControl,Ms as default,Me as disabledCloseBlur,de as disabledCloseOnSelect,xe as isDisabled,he as isFocusable,me as nestedMenu,fe as useLazy,se as withAnimation,Z as withCommand,ie as withDivider,ue as withDuration,ce as withGroup,oe as withGutter,ee as withIcon,ne as withInitialFocusRef,re as withOffset,ae as withOptionGroup,te as withPlacement,le as withPortal};
