import{a as e,j as t}from"./jsx-runtime-4d953e71.js";import{I as h,u as x,v as hn,a as On,w as bn,x as Dn}from"./fontawesome-icon-982dd7b4.js";import{r as p}from"./index-de62f0e0.js";import{c as En}from"./index-c9cb8387.js";import{u as pn}from"./index-6fc38565.js";import{c as Ln,e as In,S as zn,a as E,h as fn,u as L,J as oe,q as gn,k as ae,t as yn,o as Fn}from"./factory-07cc9cf0.js";import{P as kn,a as Nn,b as An}from"./popover-content-0a3b437d.js";import{u as Rn}from"./use-component-style-a395c77f.js";import{o as _n,h as Tn,f as Pn,n as Gn,p as Kn}from"./theme-326cd56d.js";import{f as z}from"./forward-ref-396247d7.js";import{u as Un}from"./index-f5798947.js";import{u as Wn}from"./index-6000b458.js";import{B as w}from"./button-6d999cdb.js";import{I as xn}from"./icon-button-30f486b0.js";import{P as jn}from"./container-portal-1a9228bd.js";import"./index-e19e1475.js";import"./icon-5ed183e8.js";import"./index-ac0f8f33.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./index-ebf28f83.js";import"./index-f1306a69.js";import"./index-690d7341.js";import"./index-55e62adc.js";import"./index-53f8c568.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./motion-d07cf02b.js";import"./close-button-5831b830.js";import"./slide-fade-31910bd4.js";import"./index-9f37637c.js";import"./utils-e0f638b3.js";import"./scale-fade-0786fd42.js";import"./loading-520f6824.js";import"./index-75381731.js";const{DescendantsContextProvider:qn,useDescendantsContext:Vn,useDescendants:Hn,useDescendant:Jn}=En(),[$n,F]=Ln({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),I=r=>{const[s,o]=Rn("Menu",r),{initialFocusRef:u,closeOnSelect:i=!0,placement:m="bottom-start",duration:d=.2,...a}=_n(o),c=Hn(),[P,O]=p.useState(-1),C=p.useRef(null),l=p.useRef(new Set([])),B=p.useCallback(()=>{requestAnimationFrame(()=>{var S;return(S=C.current)==null?void 0:S.focus({preventScroll:!1})})},[]),b=p.useCallback(()=>{const S=setTimeout(()=>{if(u)return;const k=c.enabledfirstValue();k&&O(k.index)});l.current.add(S)},[c,u]),M=p.useCallback(()=>{const S=setTimeout(()=>{if(u)return;const k=c.enabledlastValue();k&&O(k.index)});l.current.add(S)},[c,u]),D=p.useCallback(()=>{var S;(S=a.onOpen)==null||S.call(a),B()},[B,a]),{isOpen:v,onOpen:y,onClose:A}=pn({...r,onOpen:D});return In(()=>{v||O(-1)},[v]),zn(()=>{l.current.forEach(S=>clearTimeout(S)),l.current.clear()}),e(qn,{value:c,children:e($n,{value:{isOpen:v,onOpen:y,onClose:A,onFocusFirstItem:b,onFocusLastItem:M,closeOnSelect:i,focusedIndex:P,setFocusedIndex:O,menuRef:C,styles:s},children:e(kn,{...a,isOpen:v,onOpen:y,onClose:A,placement:m,duration:d,initialFocusRef:u,closeOnButton:!1})})})},f=z(({className:r,children:s,as:o,...u},i)=>{const{isOpen:m,onOpen:d,onFocusFirstItem:a,onFocusLastItem:c}=F(),P=p.useCallback(C=>{const B={Enter:oe(d,a),ArrowDown:oe(d,a),ArrowUp:oe(d,c)}[C.key];B&&(C.preventDefault(),C.stopPropagation(),B())},[a,c,d]);return e(Nn,{children:e(o||Qn,{ref:i,className:E("ui-menu-button",r),...u,"data-active":Tn(m),"aria-expanded":Pn(m),onKeyDown:fn(u.onKeyDown,P),children:e(L.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:s})})})}),Qn=z((r,s)=>{const{styles:o}=F(),u={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...o.button};return e(L.button,{ref:s,__css:u,...r})}),g=z(({className:r,...s},o)=>{const{menuRef:u,focusedIndex:i,setFocusedIndex:m,onClose:d,styles:a}=F(),c=Vn(),P=p.useCallback(()=>{const M=c.enabledNextValue(i);M&&m(M.index)},[c,i,m]),O=p.useCallback(()=>{const M=c.enabledPrevValue(i);M&&m(M.index)},[c,i,m]),C=p.useCallback(()=>{const M=c.enabledfirstValue();M&&m(M.index)},[c,m]),l=p.useCallback(()=>{const M=c.enabledlastValue();M&&m(M.index)},[c,m]),B=p.useCallback(M=>{const v={Tab:y=>y.preventDefault(),Escape:d,ArrowDown:i===-1?C:P,ArrowUp:i===-1?l:O,Home:C,End:l}[M.key];v&&(M.preventDefault(),v(M))},[i,d,C,l,P,O]),b={...a.list};return e(An,{ref:gn(u,o),className:E("ui-menu-list",r),role:"menu",tabIndex:-1,__css:b,...s,onKeyDown:fn(s.onKeyDown,B)})}),Xn=r=>{var s;return Kn(r)&&!!((s=r==null?void 0:r.getAttribute("role"))!=null&&s.startsWith("menu-item"))},n=z(({as:r,className:s,type:o,isDisabled:u,isFocusable:i,closeOnSelect:m,icon:d,command:a,children:c,...P},O)=>{const{focusedIndex:C,setFocusedIndex:l,isOpen:B,onClose:b,closeOnSelect:M,menuRef:D,styles:v}=F(),y=u&&!i,A=p.useRef(null),{index:S,register:k}=Jn({disabled:y}),se=S===C,Sn=p.useCallback(N=>{var _;(_=P.onClick)==null||_.call(P,N),Xn(N.currentTarget)&&(m??M)&&b()},[P,m,M,b]),Cn=p.useCallback(N=>{var _;(_=P.onFocus)==null||_.call(P,N),l(S)},[P,l,S]),Bn=Un({onClick:Sn,onFocus:Cn,ref:gn(k,A,O),isDisabled:u,isFocusable:i});In(()=>{B&&(se&&!y&&A.current?requestAnimationFrame(()=>{var N;return(N=A.current)==null?void 0:N.focus()}):D.current&&!Gn(D.current)&&D.current.focus())},[se,y,D,B]),o=r||o?o??void 0:"button",c=d||a?e(L.span,{style:{pointerEvents:"none",flex:1},children:c}):c;const vn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...v.item};return t(L.button,{...P,...Bn,as:r,type:o,role:"menu-item",tabIndex:se?0:-1,className:E("ui-menu-item",s),__css:vn,children:[d?e(wn,{children:d}):null,c,a?e(Yn,{children:a}):null]})}),R=z(({className:r,icon:s,isChecked:o,closeOnSelect:u=!1,children:i,...m},d)=>t(n,{ref:d,className:E("ui-menu-option-item",r),"aria-checked":Pn(o),closeOnSelect:u,...m,children:[s!==null?e(wn,{opacity:o?1:0,children:s||e(Zn,{})}):null,i]})),wn=z(({className:r,...s},o)=>{const{styles:u}=F(),i={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...u.icon};return e(L.span,{ref:o,className:E("ui-menu-icon",r),__css:i,...s})}),Yn=z(({className:r,...s},o)=>{const{styles:u}=F(),i={...u.command};return e(L.span,{ref:o,className:E("ui-menu-command",r),__css:i,...s})}),Zn=()=>e("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),ue=z(({className:r,title:s,children:o,...u},i)=>{const{styles:m}=F(),d={...m.group};return t(L.div,{ref:i,className:E("ui-menu-group",r),role:"group",__css:d,...u,children:[s?e(L.span,{className:E("ui-menu-group-title"),__css:m.groupTitle,children:s}):null,o]})}),ie=p.forwardRef(({className:r,defaultValue:s,type:o,children:u,...i},m)=>{const d=o==="radio";s=d?"":[];const[a,c]=Wn({...i,defaultValue:s}),P=p.useCallback(l=>{if(d&&typeof a=="string"&&c(l),!d&&ae(a)){const B=a.includes(l)?a.filter(b=>b!==l):a.concat(l);c(B)}},[d,a,c]),C=yn(u).map(l=>{if(l.type!==R)return l;const B=M=>{var D,v;P(l.props.value),(v=(D=l.props).onClick)==null||v.call(D,M)},b=!d&&ae(a)?a.includes(l.props.value):l.props.value===a;return p.cloneElement(l,{type:o,onClick:B,isChecked:b})});return e(ue,{ref:m,className:E("ui-menu-option-group",r),...Fn(i,["value","onChange"]),children:C})});ie.displayName="MenuOptionGroup";const ce=z(({className:r,...s},o)=>{const{styles:u}=F(),i={...u.divider};return e(L.hr,{ref:o,className:E("ui-menu-divider",r),__css:i,...s})}),kt={title:"Components / Overlay / Menu",component:I},T=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),G=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{command:"⌘T",children:"New Tab"}),e(n,{command:"⌘N",children:"New Window"}),e(n,{command:"⌘O",children:"Open File"})]})]}),K=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{icon:e(h,{icon:On}),command:"⌘T",children:"New Tab"}),e(n,{icon:e(h,{icon:bn}),command:"⌘N",children:"New Window"}),e(n,{icon:e(h,{icon:Dn}),command:"⌘O",children:"Open File"})]})]}),U=()=>{const r=p.useRef(null);return t(I,{initialFocusRef:r,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{ref:r,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})},W=()=>t(I,{placement:"right-start",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),j=()=>t(I,{animation:"top",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),q=()=>t(I,{offset:[16,16],children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),V=()=>t(I,{gutter:32,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),H=()=>t(I,{duration:.4,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),J=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"}),e(ce,{}),e(n,{children:"Sign out"})]})]}),$=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ue,{title:"account",children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]}),e(ce,{}),e(ue,{title:"action",children:e(n,{children:"Sign out"})})]})]}),Q=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ie,{title:"order",type:"radio",children:[e(R,{value:"asc",children:"Ascending"}),e(R,{value:"desc",children:"Descending"})]}),e(ce,{}),t(ie,{title:"display",type:"checkbox",children:[e(R,{value:"gender",children:"gender"}),e(R,{value:"email",children:"email"}),e(R,{value:"phone",children:"phone"})]})]})]}),X=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),e(jn,{children:t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})})]}),Y=()=>t(I,{closeOnSelect:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{closeOnSelect:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),Z=()=>t(I,{closeOnBlur:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ee=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ne=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),te=()=>t(I,{isLazy:!0,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),re=()=>{const{isOpen:r,onOpen:s,onClose:o}=pn();return t(I,{isOpen:r,onOpen:s,onClose:o,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})};var le,me,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(de=(me=T.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var Me,he,pe;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant='outline' />

      <MenuList>
        <MenuItem command='⌘T'>New Tab</MenuItem>
        <MenuItem command='⌘N'>New Window</MenuItem>
        <MenuItem command='⌘O'>Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(pe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Ie,fe,ge;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant='outline' />

      <MenuList>
        <MenuItem icon={<Icon icon={faPlus} />} command='⌘T'>
          New Tab
        </MenuItem>
        <MenuItem icon={<Icon icon={faArrowUpRightFromSquare} />} command='⌘N'>
          New Window
        </MenuItem>
        <MenuItem icon={<Icon icon={faEdit} />} command='⌘O'>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(ge=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Pe,xe,we;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLButtonElement>(null);
  return <Menu initialFocusRef={ref}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(we=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Se,Ce,Be;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
  return <Menu placement='right-start'>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Be=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,Oe,be;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
  return <Menu animation='top'>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(be=(Oe=j.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var De,Ee,Le;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Menu offset={[16, 16]}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Le=(Ee=q.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var ze,ye,Fe;V.parameters={...V.parameters,docs:{...(ze=V.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
  return <Menu gutter={32}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Fe=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var ke,Ne,Ae;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Menu duration={0.4}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ae=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Re,_e,Te;J.parameters={...J.parameters,docs:{...(Re=J.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
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
}`,...(Te=(_e=J.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var Ge,Ke,Ue;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuGroup title='account'>
          <MenuItem>Set status</MenuItem>
          <MenuItem>Edit Profile</MenuItem>
          <MenuItem>Preferences</MenuItem>
        </MenuGroup>

        <MenuDivider />

        <MenuGroup title='action'>
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>;
}`,...(Ue=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var We,je,qe;Q.parameters={...Q.parameters,docs:{...(We=Q.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup title='order' type='radio'>
          <MenuOptionItem value='asc'>Ascending</MenuOptionItem>
          <MenuOptionItem value='desc'>Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup title='display' type='checkbox'>
          <MenuOptionItem value='gender'>gender</MenuOptionItem>
          <MenuOptionItem value='email'>email</MenuOptionItem>
          <MenuOptionItem value='phone'>phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>;
}`,...(qe=(je=Q.parameters)==null?void 0:je.docs)==null?void 0:qe.source}}};var Ve,He,Je;X.parameters={...X.parameters,docs:{...(Ve=X.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
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
}`,...(Je=(He=X.parameters)==null?void 0:He.docs)==null?void 0:Je.source}}};var $e,Qe,Xe;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect={true}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Xe=(Qe=Y.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,en;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <Menu closeOnBlur={false}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(en=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,rn;ee.parameters={...ee.parameters,docs:{...(nn=ee.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(rn=(tn=ee.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var sn,on,un;ne.parameters={...ne.parameters,docs:{...(sn=ne.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
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
}`,...(un=(on=ne.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var cn,an,ln;te.parameters={...te.parameters,docs:{...(cn=te.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
  return <Menu isLazy>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ln=(an=te.parameters)==null?void 0:an.docs)==null?void 0:ln.source}}};var mn,dn,Mn;re.parameters={...re.parameters,docs:{...(mn=re.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton as={Button} rightIcon={<Icon size='xs' icon={faChevronDown} />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Mn=(dn=re.parameters)==null?void 0:dn.docs)==null?void 0:Mn.source}}};const Nt=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{Nt as __namedExportsOrder,T as basic,re as customControl,kt as default,Z as disabledCloseBlur,Y as disabledCloseOnSelect,ee as isDisabled,ne as isFocusable,te as useLazy,j as withAnimation,G as withCommand,J as withDivider,H as withDuration,$ as withGroup,V as withGutter,K as withIcon,U as withInitialFocusRef,q as withOffset,Q as withOptionGroup,W as withPlacement,X as withPortal};
//# sourceMappingURL=menu.stories-1beb29e9.js.map
