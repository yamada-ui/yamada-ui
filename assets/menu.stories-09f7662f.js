import{a as e,j as t}from"./jsx-runtime-03b4ddbf.js";import{I as h,r as x,s as hn,j as On,t as bn,u as Dn}from"./fontawesome-icon-1848d6a0.js";import{r as p}from"./index-76fb7be0.js";import{c as Ln}from"./index-9081307e.js";import{u as pn}from"./index-367421d8.js";import{p as En,h as In,U as zn,e as L,w as fn,d as E,L as oe,x as gn,n as ae,t as yn,z as Fn}from"./factory-b055fecf.js";import{P as kn,a as Nn,b as An}from"./popover-content-2aff3d30.js";import{a as Rn}from"./use-component-style-f62022c6.js";import{o as _n,d as Tn,a as Pn,n as Gn,p as Un}from"./theme-provider-87f127bc.js";import{f as z}from"./forward-ref-8b7d2a6f.js";import{u as jn}from"./index-69fece7f.js";import{I as xn}from"./icon-button-eb4f0095.js";import{u as Kn}from"./index-18845d6b.js";import{P as Wn}from"./container-portal-995940dd.js";import{B as w}from"./button-55a1630a.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-4b40a161.js";import"./index-f35d6182.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-da11e809.js";import"./index-d68d7549.js";import"./index-164135f7.js";import"./index-4859bebe.js";import"./index-7d58b739.js";import"./index-38124c2b.js";import"./index-9a807a8c.js";import"./motion-90200a2f.js";import"./close-button-c1250682.js";import"./slide-fade-d292caaf.js";import"./index-033cf86e.js";import"./utils-986549ef.js";import"./scale-fade-2549aabe.js";import"./index-d3ea75b5.js";import"./loading-9bbac61f.js";const{DescendantsContextProvider:Vn,useDescendantsContext:qn,useDescendants:Hn,useDescendant:$n}=Ln(),[Jn,F]=En({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),I=r=>{const[s,o]=Rn("Menu",r),{initialFocusRef:i,closeOnSelect:u=!0,placement:m="bottom-start",duration:d=.2,...a}=_n(o),c=Hn(),[P,O]=p.useState(-1),C=p.useRef(null),l=p.useRef(new Set([])),B=p.useCallback(()=>{requestAnimationFrame(()=>{var S;return(S=C.current)==null?void 0:S.focus({preventScroll:!1})})},[]),b=p.useCallback(()=>{const S=setTimeout(()=>{if(i)return;const k=c.enabledfirstValue();k&&O(k.index)});l.current.add(S)},[c,i]),M=p.useCallback(()=>{const S=setTimeout(()=>{if(i)return;const k=c.enabledlastValue();k&&O(k.index)});l.current.add(S)},[c,i]),D=p.useCallback(()=>{var S;(S=a.onOpen)==null||S.call(a),B()},[B,a]),{isOpen:v,onOpen:y,onClose:A}=pn({...r,onOpen:D});return In(()=>{v||O(-1)},[v]),zn(()=>{l.current.forEach(S=>clearTimeout(S)),l.current.clear()}),e(Vn,{value:c,children:e(Jn,{value:{isOpen:v,onOpen:y,onClose:A,onFocusFirstItem:b,onFocusLastItem:M,closeOnSelect:u,focusedIndex:P,setFocusedIndex:O,menuRef:C,styles:s},children:e(kn,{...a,isOpen:v,onOpen:y,onClose:A,placement:m,duration:d,initialFocusRef:i,closeOnButton:!1})})})},f=z(({className:r,children:s,as:o,...i},u)=>{const{isOpen:m,onOpen:d,onFocusFirstItem:a,onFocusLastItem:c}=F(),P=p.useCallback(C=>{const B={Enter:oe(d,a),ArrowDown:oe(d,a),ArrowUp:oe(d,c)}[C.key];B&&(C.preventDefault(),C.stopPropagation(),B())},[a,c,d]);return e(Nn,{children:e(o||Qn,{ref:u,className:L("ui-menu-button",r),...i,"data-active":Tn(m),"aria-expanded":Pn(m),onKeyDown:fn(i.onKeyDown,P),children:e(E.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:s})})})}),Qn=z((r,s)=>{const{styles:o}=F(),i={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...o.button};return e(E.button,{ref:s,__css:i,...r})}),g=z(({className:r,...s},o)=>{const{menuRef:i,focusedIndex:u,setFocusedIndex:m,onClose:d,styles:a}=F(),c=qn(),P=p.useCallback(()=>{const M=c.enabledNextValue(u);M&&m(M.index)},[c,u,m]),O=p.useCallback(()=>{const M=c.enabledPrevValue(u);M&&m(M.index)},[c,u,m]),C=p.useCallback(()=>{const M=c.enabledfirstValue();M&&m(M.index)},[c,m]),l=p.useCallback(()=>{const M=c.enabledlastValue();M&&m(M.index)},[c,m]),B=p.useCallback(M=>{const v={Tab:y=>y.preventDefault(),Escape:d,ArrowDown:u===-1?C:P,ArrowUp:u===-1?l:O,Home:C,End:l}[M.key];v&&(M.preventDefault(),v(M))},[u,d,C,l,P,O]),b={...a.list};return e(An,{ref:gn(i,o),className:L("ui-menu-list",r),role:"menu",tabIndex:-1,__css:b,...s,onKeyDown:fn(s.onKeyDown,B)})}),Xn=r=>{var s;return Un(r)&&!!((s=r==null?void 0:r.getAttribute("role"))!=null&&s.startsWith("menu-item"))},n=z(({as:r,className:s,type:o,isDisabled:i,isFocusable:u,closeOnSelect:m,icon:d,command:a,children:c,...P},O)=>{const{focusedIndex:C,setFocusedIndex:l,isOpen:B,onClose:b,closeOnSelect:M,menuRef:D,styles:v}=F(),y=i&&!u,A=p.useRef(null),{index:S,register:k}=$n({disabled:y}),se=S===C,Sn=p.useCallback(N=>{var _;(_=P.onClick)==null||_.call(P,N),Xn(N.currentTarget)&&(m??M)&&b()},[P,m,M,b]),Cn=p.useCallback(N=>{var _;(_=P.onFocus)==null||_.call(P,N),l(S)},[P,l,S]),Bn=jn({onClick:Sn,onFocus:Cn,ref:gn(k,A,O),isDisabled:i,isFocusable:u});In(()=>{B&&(se&&!y&&A.current?requestAnimationFrame(()=>{var N;return(N=A.current)==null?void 0:N.focus()}):D.current&&!Gn(D.current)&&D.current.focus())},[se,y,D,B]),o=r||o?o??void 0:"button",c=d||a?e(E.span,{style:{pointerEvents:"none",flex:1},children:c}):c;const vn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...v.item};return t(E.button,{...P,...Bn,as:r,type:o,role:"menu-item",tabIndex:se?0:-1,className:L("ui-menu-item",s),__css:vn,children:[d?e(wn,{children:d}):null,c,a?e(Yn,{children:a}):null]})}),R=z(({className:r,icon:s,isChecked:o,closeOnSelect:i=!1,children:u,...m},d)=>t(n,{ref:d,className:L("ui-menu-option-item",r),"aria-checked":Pn(o),closeOnSelect:i,...m,children:[s!==null?e(wn,{opacity:o?1:0,children:s||e(Zn,{})}):null,u]})),wn=z(({className:r,...s},o)=>{const{styles:i}=F(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...i.icon};return e(E.span,{ref:o,className:L("ui-menu-icon",r),__css:u,...s})}),Yn=z(({className:r,...s},o)=>{const{styles:i}=F(),u={...i.command};return e(E.span,{ref:o,className:L("ui-menu-command",r),__css:u,...s})}),Zn=()=>e("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),ie=z(({className:r,title:s,children:o,...i},u)=>{const{styles:m}=F(),d={...m.group};return t(E.div,{ref:u,className:L("ui-menu-group",r),role:"group",__css:d,...i,children:[s?e(E.span,{className:L("ui-menu-group-title"),__css:m.groupTitle,children:s}):null,o]})}),ue=p.forwardRef(({className:r,defaultValue:s,type:o,children:i,...u},m)=>{const d=o==="radio";s=d?"":[];const[a,c]=Kn({...u,defaultValue:s}),P=p.useCallback(l=>{if(d&&typeof a=="string"&&c(l),!d&&ae(a)){const B=a.includes(l)?a.filter(b=>b!==l):a.concat(l);c(B)}},[d,a,c]),C=yn(i).map(l=>{if(l.type!==R)return l;const B=M=>{var D,v;P(l.props.value),(v=(D=l.props).onClick)==null||v.call(D,M)},b=!d&&ae(a)?a.includes(l.props.value):l.props.value===a;return p.cloneElement(l,{type:o,onClick:B,isChecked:b})});return e(ie,{ref:m,className:L("ui-menu-option-group",r),...Fn(u,["value","onChange"]),children:C})});ue.displayName="MenuOptionGroup";const ce=z(({className:r,...s},o)=>{const{styles:i}=F(),u={...i.divider};return e(E.hr,{ref:o,className:L("ui-menu-divider",r),__css:u,...s})}),Nt={title:"Components / Overlay / Menu",component:I},T=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),G=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{command:"⌘T",children:"New Tab"}),e(n,{command:"⌘N",children:"New Window"}),e(n,{command:"⌘O",children:"Open File"})]})]}),U=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{icon:e(h,{icon:On}),command:"⌘T",children:"New Tab"}),e(n,{icon:e(h,{icon:bn}),command:"⌘N",children:"New Window"}),e(n,{icon:e(h,{icon:Dn}),command:"⌘O",children:"Open File"})]})]}),j=()=>{const r=p.useRef(null);return t(I,{initialFocusRef:r,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{ref:r,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})},K=()=>t(I,{placement:"right-start",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),W=()=>t(I,{animation:"top",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),V=()=>t(I,{offset:[16,16],children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),q=()=>t(I,{gutter:32,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),H=()=>t(I,{duration:.4,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),$=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"}),e(ce,{}),e(n,{children:"Sign out"})]})]}),J=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ie,{title:"account",children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]}),e(ce,{}),e(ie,{title:"action",children:e(n,{children:"Sign out"})})]})]}),Q=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ue,{title:"order",type:"radio",children:[e(R,{value:"asc",children:"Ascending"}),e(R,{value:"desc",children:"Descending"})]}),e(ce,{}),t(ue,{title:"display",type:"checkbox",children:[e(R,{value:"gender",children:"gender"}),e(R,{value:"email",children:"email"}),e(R,{value:"phone",children:"phone"})]})]})]}),X=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),e(Wn,{children:t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})})]}),Y=()=>t(I,{closeOnSelect:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{closeOnSelect:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),Z=()=>t(I,{closeOnBlur:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ee=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ne=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),te=()=>t(I,{isLazy:!0,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),re=()=>{const{isOpen:r,onOpen:s,onClose:o}=pn();return t(I,{isOpen:r,onOpen:s,onClose:o,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})};var le,me,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(pe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Ie,fe,ge;U.parameters={...U.parameters,docs:{...(Ie=U.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=U.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Pe,xe,we;j.parameters={...j.parameters,docs:{...(Pe=j.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(we=(xe=j.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Se,Ce,Be;K.parameters={...K.parameters,docs:{...(Se=K.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Be=(Ce=K.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,Oe,be;W.parameters={...W.parameters,docs:{...(ve=W.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(be=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var De,Le,Ee;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ee=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var ze,ye,Fe;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Fe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var ke,Ne,Ae;H.parameters={...H.parameters,docs:{...(ke=H.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ae=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ae.source}}};var Re,_e,Te;$.parameters={...$.parameters,docs:{...(Re=$.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Te=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Te.source}}};var Ge,Ue,je;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(je=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:je.source}}};var Ke,We,Ve;Q.parameters={...Q.parameters,docs:{...(Ke=Q.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(Ve=(We=Q.parameters)==null?void 0:We.docs)==null?void 0:Ve.source}}};var qe,He,$e;X.parameters={...X.parameters,docs:{...(qe=X.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...($e=(He=X.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var Je,Qe,Xe;Y.parameters={...Y.parameters,docs:{...(Je=Y.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Mn=(dn=re.parameters)==null?void 0:dn.docs)==null?void 0:Mn.source}}};const At=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{At as __namedExportsOrder,T as basic,re as customControl,Nt as default,Z as disabledCloseBlur,Y as disabledCloseOnSelect,ee as isDisabled,ne as isFocusable,te as useLazy,W as withAnimation,G as withCommand,$ as withDivider,H as withDuration,J as withGroup,q as withGutter,U as withIcon,j as withInitialFocusRef,V as withOffset,Q as withOptionGroup,K as withPlacement,X as withPortal};
//# sourceMappingURL=menu.stories-09f7662f.js.map
