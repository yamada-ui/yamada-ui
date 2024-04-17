import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as M,D as f,E as Mn,a as bn,F as vn,G as On}from"./fontawesome-icon-CrJjB7o8.js";import{u as xn}from"./index-BCh9K19r.js";import{r as x}from"./index-CBqU2yxZ.js";import{c as Dn}from"./index-DWmB6ho2.js";import{r as Ln,e as hn,Q as En,c as O,A as _n,B as pn,h as In,u as v,a5 as re,a as fn,a4 as zn,ah as yn,o as ce,x as Fn,E as Nn}from"./factory-CWQinKm3.js";import{P as An,a as Rn,b as kn}from"./popover-content-DJDHxwwN.js";import{a as Gn}from"./use-component-style-Dz5qfWpi.js";import{o as Tn}from"./theme-provider-WJWtIdo1.js";import{f as E}from"./forward-ref-DuAegr0M.js";import{u as Kn}from"./index-DPqJs3D0.js";import{u as Un}from"./index-jJxk6TFE.js";import{B as j}from"./button-C7YCSYWM.js";import{I as jn}from"./icon-button-B72lEwOJ.js";import{P as Wn}from"./container-portal-CfpUP_zU.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-1uUZCQDj.js";import"./index-BoiZ5iFY.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-D2QFOFdQ.js";import"./index-rYLD436_.js";import"./index-A5-AiDso.js";import"./index-BE4Jse_Z.js";import"./index-Dagt8EGA.js";import"./index-BWlRhMr5.js";import"./index-DnELqC5J.js";import"./motion-JgkBPv6g.js";import"./slide-fade-Bx6fCHOK.js";import"./index-_tcQm2Fk.js";import"./motion-jMqq_iHq.js";import"./utils-4WgWfPat.js";import"./scale-fade-ieKcZsa7.js";import"./close-button-Dm3LDCc-.js";import"./use-ripple-D14yWROS.js";import"./loading-pfo0_GA9.js";import"./index-BtM5VmRH.js";const{DescendantsContextProvider:Vn,useDescendantsContext:qn,useDescendants:Hn,useDescendant:Qn}=Dn(),[$n,z]=Ln({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),h=s=>{const[t,r]=Gn("Menu",s),{initialFocusRef:o,closeOnSelect:u=!0,placement:l="bottom-start",duration:m=.2,...c}=Tn(r),i=Hn(),[S,g]=x.useState(-1),P=x.useRef(null),a=x.useRef(new Set([])),B=x.useCallback(()=>{requestAnimationFrame(()=>{var w;return(w=P.current)==null?void 0:w.focus({preventScroll:!1})})},[]),b=x.useCallback(()=>{const w=setTimeout(()=>{if(o)return;const L=i.enabledFirstValue();L&&g(L.index)});a.current.add(w)},[i,o]),d=x.useCallback(()=>{const w=setTimeout(()=>{if(o)return;const L=i.enabledLastValue();L&&g(L.index)});a.current.add(w)},[i,o]),_=x.useCallback(()=>{var w;(w=c.onOpen)==null||w.call(c),B()},[B,c]),{isOpen:C,onOpen:D,onClose:N}=xn({...s,onOpen:_});return hn(()=>{C||g(-1)},[C]),En(()=>{a.current.forEach(w=>clearTimeout(w)),a.current.clear()}),e.jsx(Vn,{value:i,children:e.jsx($n,{value:{isOpen:C,onOpen:D,onClose:N,onFocusFirstItem:b,onFocusLastItem:d,closeOnSelect:u,focusedIndex:S,setFocusedIndex:g,menuRef:P,styles:t},children:e.jsx(An,{...c,isOpen:C,onOpen:D,onClose:N,placement:l,duration:m,initialFocusRef:o,closeOnButton:!1})})})},p=E(({className:s,children:t,as:r,...o},u)=>{const{isOpen:l,onOpen:m,onFocusFirstItem:c,onFocusLastItem:i}=z(),S=x.useCallback(P=>{const B={Enter:re(m,c),ArrowDown:re(m,c),ArrowUp:re(m,i)}[P.key];B&&(P.preventDefault(),P.stopPropagation(),B())},[c,i,m]),g=r||Jn;return e.jsx(Rn,{children:e.jsx(g,{ref:u,className:O("ui-menu",s),...o,"data-active":_n(l),"aria-expanded":pn(l),onKeyDown:In(o.onKeyDown,S),children:e.jsx(v.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:t})})})}),Jn=E((s,t)=>{const{styles:r}=z(),o={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...r.button};return e.jsx(v.button,{ref:t,__css:o,...s})}),I=E(({className:s,...t},r)=>{const{menuRef:o,focusedIndex:u,setFocusedIndex:l,onClose:m,styles:c}=z(),i=qn(),S=x.useCallback(()=>{const d=i.enabledNextValue(u);d&&l(d.index)},[i,u,l]),g=x.useCallback(()=>{const d=i.enabledPrevValue(u);d&&l(d.index)},[i,u,l]),P=x.useCallback(()=>{const d=i.enabledFirstValue();d&&l(d.index)},[i,l]),a=x.useCallback(()=>{const d=i.enabledLastValue();d&&l(d.index)},[i,l]),B=x.useCallback(d=>{const C={Tab:D=>D.preventDefault(),Escape:m,ArrowDown:u===-1?P:S,ArrowUp:u===-1?a:g,Home:P,End:a}[d.key];C&&(d.preventDefault(),C(d))},[u,m,P,a,S,g]),b={...c.list};return e.jsx(kn,{as:"ul",ref:fn(o,r),className:O("ui-menu__list",s),role:"menu",tabIndex:-1,__css:b,...t,onKeyDown:In(t.onKeyDown,B)})}),Xn=s=>{var t;return yn(s)&&!!((t=s==null?void 0:s.getAttribute("role"))!=null&&t.startsWith("menu-item"))},n=E(({as:s,className:t,type:r,isDisabled:o,isFocusable:u,closeOnSelect:l,icon:m,command:c,children:i,onClick:S,onFocus:g,...P},a)=>{const{focusedIndex:B,setFocusedIndex:b,isOpen:d,onClose:_,closeOnSelect:C,menuRef:D,styles:N}=z(),w=o&&!u,L=x.useRef(null),{index:se,register:wn}=Qn({disabled:w}),te=se===B,Pn=x.useCallback(y=>{S==null||S(y),Xn(y.currentTarget)&&(l??C)&&_()},[S,l,C,_]),Sn=x.useCallback(y=>{g==null||g(y),b(se)},[g,b,se]),Bn=Kn({...P,onClick:Pn,onFocus:Sn,ref:fn(wn,L,a),isDisabled:o,isFocusable:u});hn(()=>{d&&(te&&!w&&L.current?requestAnimationFrame(()=>{var y;return(y=L.current)==null?void 0:y.focus()}):D.current&&!zn(D.current)&&D.current.focus())},[te,w,D,d]),r=s||r?r??void 0:"button",i=m||c?e.jsx(v.span,{style:{flex:1},children:i}):i;const Cn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...N.item};return e.jsxs(v.li,{...Bn,as:s,type:r,role:"menu-item",tabIndex:te?0:-1,className:O("ui-menu__item",t),__css:Cn,children:[m?e.jsx(gn,{children:m}):null,i,c?e.jsx(Yn,{children:c}):null]})}),F=E(({className:s,icon:t,isChecked:r,closeOnSelect:o=!1,children:u,...l},m)=>e.jsxs(n,{ref:m,className:O("ui-menu__item--option",s),"aria-checked":pn(r),closeOnSelect:o,...l,children:[t!==null?e.jsx(gn,{opacity:r?1:0,children:t||e.jsx(Zn,{})}):null,u]})),gn=E(({className:s,...t},r)=>{const{styles:o}=z(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...o.icon};return e.jsx(v.span,{ref:r,className:O("ui-menu__item__icon",s),__css:u,...t})}),Yn=E(({className:s,...t},r)=>{const{styles:o}=z(),u={...o.command};return e.jsx(v.span,{ref:r,className:O("ui-menu__item__command",s),__css:u,...t})}),Zn=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),oe=E(({className:s,label:t,children:r,...o},u)=>{const{styles:l}=z(),m={...l.group};return e.jsxs(v.li,{ref:u,className:O("ui-menu__item","ui-menu__item--group",s),role:"group",__css:m,...o,children:[t?e.jsx(v.span,{className:O("ui-menu__item--group-label"),__css:l.groupLabel,children:t}):null,e.jsx(v.ul,{className:"ui-menu__item__group",children:r})]})}),ue=x.forwardRef(({className:s,defaultValue:t,type:r,children:o,...u},l)=>{const m=r==="radio";t??(t=m?"":[]);const[c,i]=Un({...u,defaultValue:t}),S=x.useCallback(a=>{if(m&&typeof c=="string"&&i(a),!m&&ce(c)){const B=c.includes(a)?c.filter(b=>b!==a):c.concat(a);i(B)}},[m,c,i]),P=Fn(o).map(a=>{if(a.type!==F)return a;const B=d=>{var _,C;S(a.props.value),(C=(_=a.props).onClick)==null||C.call(_,d)},b=!m&&ce(c)?c.includes(a.props.value):a.props.value===c;return x.cloneElement(a,{type:r,onClick:B,isChecked:b})});return e.jsx(oe,{ref:l,className:O("ui-menu__item--group--option",s),...Nn(u,["value","onChange"]),children:P})});ue.displayName="MenuOptionGroup";const ie=E(({className:s,...t},r)=>{const{styles:o}=z(),u={...o.divider};return e.jsx(v.hr,{ref:r,className:O("ui-menu__divider",s),__css:u,...t})}),As={title:"Components / Overlay / Menu",component:h},A=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),R=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),k=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{icon:e.jsx(M,{icon:bn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(M,{icon:vn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(M,{icon:On}),command:"⌘O",children:"Open File"})]})]}),G=()=>{const s=x.useRef(null);return e.jsxs(h,{initialFocusRef:s,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:s,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},T=()=>e.jsxs(h,{placement:"right-start",children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),K=()=>e.jsxs(h,{animation:"top",children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),U=()=>e.jsxs(h,{offset:[16,16],children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),W=()=>e.jsxs(h,{gutter:32,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),V=()=>e.jsxs(h,{duration:.4,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),q=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(ie,{}),e.jsx(n,{children:"Sign out"})]})]}),H=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(oe,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(ie,{}),e.jsx(oe,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),Q=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(ue,{label:"order",type:"radio",children:[e.jsx(F,{value:"asc",children:"Ascending"}),e.jsx(F,{value:"desc",children:"Descending"})]}),e.jsx(ie,{}),e.jsxs(ue,{label:"display",type:"checkbox",children:[e.jsx(F,{value:"gender",children:"gender"}),e.jsx(F,{value:"email",children:"email"}),e.jsx(F,{value:"phone",children:"phone"})]})]})]}),$=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsx(Wn,{children:e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),J=()=>e.jsxs(h,{closeOnSelect:!1,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),X=()=>e.jsxs(h,{closeOnBlur:!1,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Y=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Z=()=>e.jsxs(h,{children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ee=()=>e.jsxs(h,{isLazy:!0,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ne=()=>{const{isOpen:s,onOpen:t,onClose:r}=xn();return e.jsxs(h,{isOpen:s,onOpen:t,onClose:r,children:[e.jsx(p,{as:j,rightIcon:e.jsx(M,{size:"xs",icon:f}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var ae,le,me;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(me=(le=A.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,Me,xe;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(xe=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var he,pe,Ie;k.parameters={...k.parameters,docs:{...(he=k.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant="outline" />

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
}`,...(Ie=(pe=k.parameters)==null?void 0:pe.docs)==null?void 0:Ie.source}}};var fe,je,ge;G.parameters={...G.parameters,docs:{...(fe=G.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(je=G.parameters)==null?void 0:je.docs)==null?void 0:ge.source}}};var we,Pe,Se;T.parameters={...T.parameters,docs:{...(we=T.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
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
}`,...(Se=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Se.source}}};var Be,Ce,be;K.parameters={...K.parameters,docs:{...(Be=K.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(be=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:be.source}}};var ve,Oe,De;U.parameters={...U.parameters,docs:{...(ve=U.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(De=(Oe=U.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Le,Ee,_e;W.parameters={...W.parameters,docs:{...(Le=W.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(_e=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var ze,ye,Fe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Fe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Ne,Ae,Re;q.parameters={...q.parameters,docs:{...(Ne=q.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Re=(Ae=q.parameters)==null?void 0:Ae.docs)==null?void 0:Re.source}}};var ke,Ge,Te;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ge=H.parameters)==null?void 0:Ge.docs)==null?void 0:Te.source}}};var Ke,Ue,We;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(We=(Ue=Q.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ve,qe,He;$.parameters={...$.parameters,docs:{...(Ve=$.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(He=(qe=$.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Qe,$e,Je;J.parameters={...J.parameters,docs:{...(Qe=J.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Je=($e=J.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;X.parameters={...X.parameters,docs:{...(Xe=X.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=X.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;Y.parameters={...Y.parameters,docs:{...(en=Y.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(sn=(nn=Y.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var tn,rn,on;Z.parameters={...Z.parameters,docs:{...(tn=Z.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(rn=Z.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var un,cn,an;ee.parameters={...ee.parameters,docs:{...(un=ee.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(an=(cn=ee.parameters)==null?void 0:cn.docs)==null?void 0:an.source}}};var ln,mn,dn;ne.parameters={...ne.parameters,docs:{...(ln=ne.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(dn=(mn=ne.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};const Rs=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{Rs as __namedExportsOrder,A as basic,ne as customControl,As as default,X as disabledCloseBlur,J as disabledCloseOnSelect,Y as isDisabled,Z as isFocusable,ee as useLazy,K as withAnimation,R as withCommand,q as withDivider,V as withDuration,H as withGroup,W as withGutter,k as withIcon,G as withInitialFocusRef,U as withOffset,Q as withOptionGroup,T as withPlacement,$ as withPortal};
