import{a as e,j as t}from"./jsx-runtime-03b4ddbf.js";import{I as h,r as x,s as hn,j as On,t as bn,u as Dn}from"./fontawesome-icon-a7409a5f.js";import{r as p}from"./index-76fb7be0.js";import{c as En}from"./index-d495c42f.js";import{u as pn}from"./index-2107ab02.js";import{k as Ln,B as In,a5 as _n,e as E,v as zn,s as fn,t as gn,d as L,U as oe,x as Pn,a2 as yn,a6 as Fn,h as ae,p as kn,A as Nn}from"./factory-c9bc4a28.js";import{P as An,a as Rn,b as Tn}from"./popover-content-4385bd9b.js";import{a as Gn}from"./use-component-style-ab2b35f8.js";import{o as Un}from"./theme-provider-a03ffa08.js";import{f as _}from"./forward-ref-8b7d2a6f.js";import{u as jn}from"./index-78c604bb.js";import{I as xn}from"./icon-button-fe5ddf58.js";import{u as Kn}from"./index-b4589c7a.js";import{P as Wn}from"./container-portal-d8f11cbb.js";import{B as w}from"./button-0fc0cb94.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";import"./icon-e1655999.js";import"./index-f08d32bc.js";import"./index-20d9506e.js";import"./index-d68d7549.js";import"./index-8d83eaa2.js";import"./index-6e209327.js";import"./index-32862ccd.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./motion-90200a2f.js";import"./slide-fade-656e79e8.js";import"./index-033cf86e.js";import"./utils-dc7ab2be.js";import"./scale-fade-bf7f1d92.js";import"./close-button-7617767f.js";import"./index-d3ea75b5.js";import"./loading-24ec3d24.js";const{DescendantsContextProvider:Vn,useDescendantsContext:qn,useDescendants:Hn,useDescendant:$n}=En(),[Jn,y]=Ln({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),I=r=>{const[s,o]=Gn("Menu",r),{initialFocusRef:i,closeOnSelect:u=!0,placement:m="bottom-start",duration:d=.2,...a}=Un(o),c=Hn(),[P,O]=p.useState(-1),C=p.useRef(null),l=p.useRef(new Set([])),B=p.useCallback(()=>{requestAnimationFrame(()=>{var S;return(S=C.current)==null?void 0:S.focus({preventScroll:!1})})},[]),b=p.useCallback(()=>{const S=setTimeout(()=>{if(i)return;const F=c.enabledfirstValue();F&&O(F.index)});l.current.add(S)},[c,i]),M=p.useCallback(()=>{const S=setTimeout(()=>{if(i)return;const F=c.enabledlastValue();F&&O(F.index)});l.current.add(S)},[c,i]),D=p.useCallback(()=>{var S;(S=a.onOpen)==null||S.call(a),B()},[B,a]),{isOpen:v,onOpen:z,onClose:N}=pn({...r,onOpen:D});return In(()=>{v||O(-1)},[v]),_n(()=>{l.current.forEach(S=>clearTimeout(S)),l.current.clear()}),e(Vn,{value:c,children:e(Jn,{value:{isOpen:v,onOpen:z,onClose:N,onFocusFirstItem:b,onFocusLastItem:M,closeOnSelect:u,focusedIndex:P,setFocusedIndex:O,menuRef:C,styles:s},children:e(An,{...a,isOpen:v,onOpen:z,onClose:N,placement:m,duration:d,initialFocusRef:i,closeOnButton:!1})})})},f=_(({className:r,children:s,as:o,...i},u)=>{const{isOpen:m,onOpen:d,onFocusFirstItem:a,onFocusLastItem:c}=y(),P=p.useCallback(C=>{const B={Enter:oe(d,a),ArrowDown:oe(d,a),ArrowUp:oe(d,c)}[C.key];B&&(C.preventDefault(),C.stopPropagation(),B())},[a,c,d]);return e(Rn,{children:e(o||Qn,{ref:u,className:E("ui-menu",r),...i,"data-active":zn(m),"aria-expanded":fn(m),onKeyDown:gn(i.onKeyDown,P),children:e(L.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:s})})})}),Qn=_((r,s)=>{const{styles:o}=y(),i={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...o.button};return e(L.button,{ref:s,__css:i,...r})}),g=_(({className:r,...s},o)=>{const{menuRef:i,focusedIndex:u,setFocusedIndex:m,onClose:d,styles:a}=y(),c=qn(),P=p.useCallback(()=>{const M=c.enabledNextValue(u);M&&m(M.index)},[c,u,m]),O=p.useCallback(()=>{const M=c.enabledPrevValue(u);M&&m(M.index)},[c,u,m]),C=p.useCallback(()=>{const M=c.enabledfirstValue();M&&m(M.index)},[c,m]),l=p.useCallback(()=>{const M=c.enabledlastValue();M&&m(M.index)},[c,m]),B=p.useCallback(M=>{const v={Tab:z=>z.preventDefault(),Escape:d,ArrowDown:u===-1?C:P,ArrowUp:u===-1?l:O,Home:C,End:l}[M.key];v&&(M.preventDefault(),v(M))},[u,d,C,l,P,O]),b={...a.list};return e(Tn,{ref:Pn(i,o),className:E("ui-menu__list",r),role:"menu",tabIndex:-1,__css:b,...s,onKeyDown:gn(s.onKeyDown,B)})}),Xn=r=>{var s;return Fn(r)&&!!((s=r==null?void 0:r.getAttribute("role"))!=null&&s.startsWith("menu-item"))},n=_(({as:r,className:s,type:o,isDisabled:i,isFocusable:u,closeOnSelect:m,icon:d,command:a,children:c,...P},O)=>{const{focusedIndex:C,setFocusedIndex:l,isOpen:B,onClose:b,closeOnSelect:M,menuRef:D,styles:v}=y(),z=i&&!u,N=p.useRef(null),{index:S,register:F}=$n({disabled:z}),se=S===C,Sn=p.useCallback(k=>{var R;(R=P.onClick)==null||R.call(P,k),Xn(k.currentTarget)&&(m??M)&&b()},[P,m,M,b]),Cn=p.useCallback(k=>{var R;(R=P.onFocus)==null||R.call(P,k),l(S)},[P,l,S]),Bn=jn({onClick:Sn,onFocus:Cn,ref:Pn(F,N,O),isDisabled:i,isFocusable:u});In(()=>{B&&(se&&!z&&N.current?requestAnimationFrame(()=>{var k;return(k=N.current)==null?void 0:k.focus()}):D.current&&!yn(D.current)&&D.current.focus())},[se,z,D,B]),o=r||o?o??void 0:"button",c=d||a?e(L.span,{style:{pointerEvents:"none",flex:1},children:c}):c;const vn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...v.item};return t(L.button,{...P,...Bn,as:r,type:o,role:"menu-item",tabIndex:se?0:-1,className:E("ui-menu__item",s),__css:vn,children:[d?e(wn,{children:d}):null,c,a?e(Yn,{children:a}):null]})}),A=_(({className:r,icon:s,isChecked:o,closeOnSelect:i=!1,children:u,...m},d)=>t(n,{ref:d,className:E("ui-menu__item--option",r),"aria-checked":fn(o),closeOnSelect:i,...m,children:[s!==null?e(wn,{opacity:o?1:0,children:s||e(Zn,{})}):null,u]})),wn=_(({className:r,...s},o)=>{const{styles:i}=y(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...i.icon};return e(L.span,{ref:o,className:E("ui-menu__item__icon",r),__css:u,...s})}),Yn=_(({className:r,...s},o)=>{const{styles:i}=y(),u={...i.command};return e(L.span,{ref:o,className:E("ui-menu__item__command",r),__css:u,...s})}),Zn=()=>e("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),ie=_(({className:r,title:s,children:o,...i},u)=>{const{styles:m}=y(),d={...m.group};return t(L.div,{ref:u,className:E("ui-menu__item--group",r),role:"group",__css:d,...i,children:[s?e(L.span,{className:E("ui-menu__item--group-title"),__css:m.groupTitle,children:s}):null,o]})}),ue=p.forwardRef(({className:r,defaultValue:s,type:o,children:i,...u},m)=>{const d=o==="radio";s=d?"":[];const[a,c]=Kn({...u,defaultValue:s}),P=p.useCallback(l=>{if(d&&typeof a=="string"&&c(l),!d&&ae(a)){const B=a.includes(l)?a.filter(b=>b!==l):a.concat(l);c(B)}},[d,a,c]),C=kn(i).map(l=>{if(l.type!==A)return l;const B=M=>{var D,v;P(l.props.value),(v=(D=l.props).onClick)==null||v.call(D,M)},b=!d&&ae(a)?a.includes(l.props.value):l.props.value===a;return p.cloneElement(l,{type:o,onClick:B,isChecked:b})});return e(ie,{ref:m,className:E("ui-menu__item--group--option",r),...Nn(u,["value","onChange"]),children:C})});ue.displayName="MenuOptionGroup";const ce=_(({className:r,...s},o)=>{const{styles:i}=y(),u={...i.divider};return e(L.hr,{ref:o,className:E("ui-menu__divider",r),__css:u,...s})}),Ft={title:"Components / Overlay / Menu",component:I},T=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),G=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{command:"⌘T",children:"New Tab"}),e(n,{command:"⌘N",children:"New Window"}),e(n,{command:"⌘O",children:"Open File"})]})]}),U=()=>t(I,{children:[e(f,{as:xn,icon:e(h,{icon:hn}),variant:"outline"}),t(g,{children:[e(n,{icon:e(h,{icon:On}),command:"⌘T",children:"New Tab"}),e(n,{icon:e(h,{icon:bn}),command:"⌘N",children:"New Window"}),e(n,{icon:e(h,{icon:Dn}),command:"⌘O",children:"Open File"})]})]}),j=()=>{const r=p.useRef(null);return t(I,{initialFocusRef:r,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{ref:r,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})},K=()=>t(I,{placement:"right-start",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),W=()=>t(I,{animation:"top",children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),V=()=>t(I,{offset:[16,16],children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),q=()=>t(I,{gutter:32,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),H=()=>t(I,{duration:.4,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),$=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"}),e(ce,{}),e(n,{children:"Sign out"})]})]}),J=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ie,{title:"account",children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]}),e(ce,{}),e(ie,{title:"action",children:e(n,{children:"Sign out"})})]})]}),Q=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[t(ue,{title:"order",type:"radio",children:[e(A,{value:"asc",children:"Ascending"}),e(A,{value:"desc",children:"Descending"})]}),e(ce,{}),t(ue,{title:"display",type:"checkbox",children:[e(A,{value:"gender",children:"gender"}),e(A,{value:"email",children:"email"}),e(A,{value:"phone",children:"phone"})]})]})]}),X=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),e(Wn,{children:t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})})]}),Y=()=>t(I,{closeOnSelect:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{closeOnSelect:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),Z=()=>t(I,{closeOnBlur:!1,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ee=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),ne=()=>t(I,{children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),te=()=>t(I,{isLazy:!0,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]}),re=()=>{const{isOpen:r,onOpen:s,onClose:o}=pn();return t(I,{isOpen:r,onOpen:s,onClose:o,children:[e(f,{as:w,rightIcon:e(h,{size:"xs",icon:x}),children:"Menu"}),t(g,{children:[e(n,{children:"Set status"}),e(n,{children:"Edit Profile"}),e(n,{children:"Preferences"})]})]})};var le,me,de;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(be=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:be.source}}};var De,Ee,Le;V.parameters={...V.parameters,docs:{...(De=V.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Le=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:Le.source}}};var _e,ze,ye;q.parameters={...q.parameters,docs:{...(_e=q.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(ye=(ze=q.parameters)==null?void 0:ze.docs)==null?void 0:ye.source}}};var Fe,ke,Ne;H.parameters={...H.parameters,docs:{...(Fe=H.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Ne=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Ne.source}}};var Ae,Re,Te;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Te=(Re=$.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Ge,Ue,je;J.parameters={...J.parameters,docs:{...(Ge=J.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Mn=(dn=re.parameters)==null?void 0:dn.docs)==null?void 0:Mn.source}}};const kt=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{kt as __namedExportsOrder,T as basic,re as customControl,Ft as default,Z as disabledCloseBlur,Y as disabledCloseOnSelect,ee as isDisabled,ne as isFocusable,te as useLazy,W as withAnimation,G as withCommand,$ as withDivider,H as withDuration,J as withGroup,q as withGutter,U as withIcon,j as withInitialFocusRef,V as withOffset,Q as withOptionGroup,K as withPlacement,X as withPortal};
//# sourceMappingURL=menu.stories-1b3c1d60.js.map
