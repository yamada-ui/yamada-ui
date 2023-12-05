import{a as e,j as t}from"./jsx-runtime-yA-pgArV.js";import{I as h,u as x,v as hn,a as bn,w as On,x as Dn}from"./fontawesome-icon-WjUWWWA-.js";import{u as pn}from"./index-FxO9NTK8.js";import{r as p}from"./index-IybTgENJ.js";import{c as Ln}from"./index-y7fBSNyz.js";import{c as En,y as In,a5 as _n,a as E,I as zn,H as fn,h as gn,u as L,X as oe,s as Pn,a3 as yn,a6 as Fn,f as ae,v as Nn,o as kn}from"./factory-LMyrE5lk.js";import{P as An,a as Rn,b as Tn}from"./popover-content-P4yRyJHr.js";import{u as Gn}from"./use-component-style-KGYGTazl.js";import{o as Kn}from"./theme-provider-JJMfppNb.js";import{f as _}from"./forward-ref-6T0UNPU-.js";import{u as Un}from"./index-Y8pDyq33.js";import{u as Wn}from"./index-xewpD759.js";import{B as w}from"./button-9VUarSO2.js";import{I as xn}from"./icon-button-eeNsZDvY.js";import{P as jn}from"./container-portal-26CUbQuD.js";import"./index-tvtfaFq4.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./icon-U1tgplMe.js";import"./index-Fmh4I4_s.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-3oe73tbG.js";import"./index-gWY0u-sb.js";import"./index-5aja2wZ-.js";import"./index-Y_jKIPiB.js";import"./index-fuBb7ps8.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./motion-XoqD_6Np.js";import"./slide-fade-iMVCJtgo.js";import"./index-xpiohnTl.js";import"./utils-oLTI8GDX.js";import"./scale-fade-m3hysnV7.js";import"./close-button-dAy_qqj3.js";import"./loading-d5fto5LV.js";import"./index-xIHD0DlW.js";const{DescendantsContextProvider:Vn,useDescendantsContext:qn,useDescendants:Hn,useDescendant:Xn}=Ln(),[$n,y]=En({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),I=r=>{const[s,o]=Gn("Menu",r),{initialFocusRef:u,closeOnSelect:i=!0,placement:m="bottom-start",duration:d=.2,...a}=Kn(o),c=Hn(),[P,b]=p.useState(-1),C=p.useRef(null),l=p.useRef(new Set([])),B=p.useCallback(()=>{requestAnimationFrame(()=>{var S;return(S=C.current)==null?void 0:S.focus({preventScroll:!1})})},[]),O=p.useCallback(()=>{const S=setTimeout(()=>{if(u)return;const F=c.enabledFirstValue();F&&b(F.index)});l.current.add(S)},[c,u]),M=p.useCallback(()=>{const S=setTimeout(()=>{if(u)return;const F=c.enabledLastValue();F&&b(F.index)});l.current.add(S)},[c,u]),D=p.useCallback(()=>{var S;(S=a.onOpen)==null||S.call(a),B()},[B,a]),{isOpen:v,onOpen:z,onClose:k}=pn({...r,onOpen:D});return In(()=>{v||b(-1)},[v]),_n(()=>{l.current.forEach(S=>clearTimeout(S)),l.current.clear()}),e(Vn,{value:c,children:e($n,{value:{isOpen:v,onOpen:z,onClose:k,onFocusFirstItem:O,onFocusLastItem:M,closeOnSelect:i,focusedIndex:P,setFocusedIndex:b,menuRef:C,styles:s},children:e(An,{...a,isOpen:v,onOpen:z,onClose:k,placement:m,duration:d,initialFocusRef:u,closeOnButton:!1})})})},f=_(({className:r,children:s,as:o,...u},i)=>{const{isOpen:m,onOpen:d,onFocusFirstItem:a,onFocusLastItem:c}=y(),P=p.useCallback(C=>{const B={Enter:oe(d,a),ArrowDown:oe(d,a),ArrowUp:oe(d,c)}[C.key];B&&(C.preventDefault(),C.stopPropagation(),B())},[a,c,d]);return e(Rn,{children:e(o||Jn,{ref:i,className:E("ui-menu",r),...u,"data-active":zn(m),"aria-expanded":fn(m),onKeyDown:gn(u.onKeyDown,P),children:e(L.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:s})})})}),Jn=_((r,s)=>{const{styles:o}=y(),u={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...o.button};return e(L.button,{ref:s,__css:u,...r})}),g=_(({className:r,...s},o)=>{const{menuRef:u,focusedIndex:i,setFocusedIndex:m,onClose:d,styles:a}=y(),c=qn(),P=p.useCallback(()=>{const M=c.enabledNextValue(i);M&&m(M.index)},[c,i,m]),b=p.useCallback(()=>{const M=c.enabledPrevValue(i);M&&m(M.index)},[c,i,m]),C=p.useCallback(()=>{const M=c.enabledFirstValue();M&&m(M.index)},[c,m]),l=p.useCallback(()=>{const M=c.enabledLastValue();M&&m(M.index)},[c,m]),B=p.useCallback(M=>{const v={Tab:z=>z.preventDefault(),Escape:d,ArrowDown:i===-1?C:P,ArrowUp:i===-1?l:b,Home:C,End:l}[M.key];v&&(M.preventDefault(),v(M))},[i,d,C,l,P,b]),O={...a.list};return e(Tn,{as:"ul",ref:Pn(u,o),className:E("ui-menu__list",r),role:"menu",tabIndex:-1,__css:O,...s,onKeyDown:gn(s.onKeyDown,B)})}),Qn=r=>{var s;return Fn(r)&&!!((s=r==null?void 0:r.getAttribute("role"))!=null&&s.startsWith("menu-item"))},n=_(({as:r,className:s,type:o,isDisabled:u,isFocusable:i,closeOnSelect:m,icon:d,command:a,children:c,...P},b)=>{const{focusedIndex:C,setFocusedIndex:l,isOpen:B,onClose:O,closeOnSelect:M,menuRef:D,styles:v}=y(),z=u&&!i,k=p.useRef(null),{index:S,register:F}=Xn({disabled:z}),se=S===C,Sn=p.useCallback(N=>{var R;(R=P.onClick)==null||R.call(P,N),Qn(N.currentTarget)&&(m??M)&&O()},[P,m,M,O]),Cn=p.useCallback(N=>{var R;(R=P.onFocus)==null||R.call(P,N),l(S)},[P,l,S]),Bn=Un({onClick:Sn,onFocus:Cn,ref:Pn(F,k,b),isDisabled:u,isFocusable:i});In(()=>{B&&(se&&!z&&k.current?requestAnimationFrame(()=>{var N;return(N=k.current)==null?void 0:N.focus()}):D.current&&!yn(D.current)&&D.current.focus())},[se,z,D,B]),o=r||o?o??void 0:"button",c=d||a?e(L.span,{style:{pointerEvents:"none",flex:1},children:c}):c;const vn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...v.item};return t(L.li,{...P,...Bn,as:r,type:o,role:"menu-item",tabIndex:se?0:-1,className:E("ui-menu__item",s),__css:vn,children:[d?e(wn,{children:d}):null,c,a?e(Yn,{children:a}):null]})}),A=_(({className:r,icon:s,isChecked:o,closeOnSelect:u=!1,children:i,...m},d)=>t(n,{ref:d,className:E("ui-menu__item--option",r),"aria-checked":fn(o),closeOnSelect:u,...m,children:[s!==null?e(wn,{opacity:o?1:0,children:s||e(Zn,{})}):null,i]})),wn=_(({className:r,...s},o)=>{const{styles:u}=y(),i={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...u.icon};return e(L.span,{ref:o,className:E("ui-menu__item__icon",r),__css:i,...s})}),Yn=_(({className:r,...s},o)=>{const{styles:u}=y(),i={...u.command};return e(L.span,{ref:o,className:E("ui-menu__item__command",r),__css:i,...s})}),Zn=()=>e("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),ue=_(({className:r,label:s,children:o,...u},i)=>{const{styles:m}=y(),d={...m.group};return t(L.li,{ref:i,className:E("ui-menu__item","ui-menu__item--group",r),role:"group",__css:d,...u,children:[s?e(L.span,{className:E("ui-menu__item--group-label"),__css:m.groupLabel,children:s}):null,e(L.ul,{className:"ui-menu__item__group",children:o})]})}),ie=p.forwardRef(({className:r,defaultValue:s,type:o,children:u,...i},m)=>{const d=o==="radio";s=d?"":[];const[a,c]=Wn({...i,defaultValue:s}),P=p.useCallback(l=>{if(d&&typeof a=="string"&&c(l),!d&&ae(a)){const B=a.includes(l)?a.filter(O=>O!==l):a.concat(l);c(B)}},[d,a,c]),C=Nn(u).map(l=>{if(l.type!==A)return l;const B=M=>{var D,v;P(l.props.value),(v=(D=l.props).onClick)==null||v.call(D,M)},O=!d&&ae(a)?a.includes(l.props.value):l.props.value===a;return p.cloneElement(l,{type:o,onClick:B,isChecked:O})});return e(ue,{ref:m,className:E("ui-menu__item--group--option",r),...kn(i,["value","onChange"]),children:C})});ie.displayName="MenuOptionGroup";const ce=_(({className:r,...s},o)=>{const{styles:u}=y(),i={...u.divider};return e(L.hr,{ref:o,className:E("ui-menu__divider",r),__css:i,...s})}),Nt={title:"Components / Overlay / Menu",component:I},T=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),G=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{command:"⌘T",children:"New Tab"}),e(n,{command:"⌘N",children:"New Window"}),e(n,{command:"⌘O",children:"Open File"})]})]}),K=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{icon:e(h,{icon:bn}),command:"⌘T",children:"New Tab"}),e(n,{icon:e(h,{icon:On}),command:"⌘N",children:"New Window"}),e(n,{icon:e(h,{icon:Dn}),command:"⌘O",children:"Open File"})]})]}),U=()=>{const r=p.useRef(null);return t(I,{initialFocusRef:r,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{ref:r,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})},W=()=>t(I,{placement:"right-start",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),j=()=>t(I,{animation:"top",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),V=()=>t(I,{offset:[16,16],children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),q=()=>t(I,{gutter:32,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),H=()=>t(I,{duration:.4,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),X=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"}),e(ce,{}),e(n,{children:"Sign out"})]})]}),$=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ue,{label:"account",children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]}),e(ce,{}),e(ue,{label:"action",children:e(n,{children:"Sign out"})})]})]}),J=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ie,{label:"order",type:"radio",children:[e(A,{value:"asc",children:"Ascending"}),e(A,{value:"desc",children:"Descending"})]}),e(ce,{}),t(ie,{label:"display",type:"checkbox",children:[e(A,{value:"gender",children:"gender"}),e(A,{value:"email",children:"email"}),e(A,{value:"phone",children:"phone"})]})]})]}),Q=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),e(jn,{children:t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})})]}),Y=()=>t(I,{closeOnSelect:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{closeOnSelect:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),Z=()=>t(I,{closeOnBlur:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ee=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ne=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),te=()=>t(I,{isLazy:!0,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),re=()=>{const{isOpen:r,onOpen:s,onClose:o}=pn();return t(I,{isOpen:r,onOpen:s,onClose:o,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})};var le,me,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(de=(me=T.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var Me,he,pe;G.parameters={...G.parameters,docs:{...(Me=G.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(pe=(he=G.parameters)==null?void 0:he.docs)==null?void 0:pe.source}}};var Ie,fe,ge;K.parameters={...K.parameters,docs:{...(Ie=K.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(ge=(fe=K.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var Pe,xe,we;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(we=(xe=U.parameters)==null?void 0:xe.docs)==null?void 0:we.source}}};var Se,Ce,Be;W.parameters={...W.parameters,docs:{...(Se=W.parameters)==null?void 0:Se.docs,source:{originalSource:`() => {
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
}`,...(Be=(Ce=W.parameters)==null?void 0:Ce.docs)==null?void 0:Be.source}}};var ve,be,Oe;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Oe=(be=j.parameters)==null?void 0:be.docs)==null?void 0:Oe.source}}};var De,Le,Ee;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Ee=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:Ee.source}}};var _e,ze,ye;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(ye=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:ye.source}}};var Fe,Ne,ke;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(ke=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:ke.source}}};var Ae,Re,Te;X.parameters={...X.parameters,docs:{...(Ae=X.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Te=(Re=X.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ge,Ke,Ue;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Ke=$.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};var We,je,Ve;J.parameters={...J.parameters,docs:{...(We=J.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(Ve=(je=J.parameters)==null?void 0:je.docs)==null?void 0:Ve.source}}};var qe,He,Xe;Q.parameters={...Q.parameters,docs:{...(qe=Q.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
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
}`,...(Xe=(He=Q.parameters)==null?void 0:He.docs)==null?void 0:Xe.source}}};var $e,Je,Qe;Y.parameters={...Y.parameters,docs:{...($e=Y.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=Y.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Ye,Ze,en;Z.parameters={...Z.parameters,docs:{...(Ye=Z.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
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
}`,...(en=(Ze=Z.parameters)==null?void 0:Ze.docs)==null?void 0:en.source}}};var nn,tn,rn;ee.parameters={...ee.parameters,docs:{...(nn=ee.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(rn=(tn=ee.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};var sn,on,un;ne.parameters={...ne.parameters,docs:{...(sn=ne.parameters)==null?void 0:sn.docs,source:{originalSource:`() => {
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
}`,...(un=(on=ne.parameters)==null?void 0:on.docs)==null?void 0:un.source}}};var cn,an,ln;te.parameters={...te.parameters,docs:{...(cn=te.parameters)==null?void 0:cn.docs,source:{originalSource:`() => {
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
}`,...(ln=(an=te.parameters)==null?void 0:an.docs)==null?void 0:ln.source}}};var mn,dn,Mn;re.parameters={...re.parameters,docs:{...(mn=re.parameters)==null?void 0:mn.docs,source:{originalSource:`() => {
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
}`,...(Mn=(dn=re.parameters)==null?void 0:dn.docs)==null?void 0:Mn.source}}};const kt=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{kt as __namedExportsOrder,T as basic,re as customControl,Nt as default,Z as disabledCloseBlur,Y as disabledCloseOnSelect,ee as isDisabled,ne as isFocusable,te as useLazy,j as withAnimation,G as withCommand,X as withDivider,H as withDuration,$ as withGroup,q as withGutter,K as withIcon,U as withInitialFocusRef,V as withOffset,J as withOptionGroup,W as withPlacement,Q as withPortal};
