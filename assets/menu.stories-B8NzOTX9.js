import{j as e}from"./jsx-runtime-Nms4Y4qS.js";import{u as ln}from"./index-l3-ow9aL.js";import{r as N}from"./index-BwDkhjyp.js";import{C as u,M as rn,S as mn,a as Mn}from"./square-pen-DuADUzWr.js";import{a as dn,f as M,b as t,c as r,d as n}from"./menu-list-gw7RTRCs.js";import{f as hn}from"./forward-ref-BmTAT9U5.js";import{b as q,c as U,s as Q,t as xn}from"./factory-R2Y4PRbz.js";import{u as pn}from"./index-DsxzWwQ3.js";import{M as s,a as X}from"./menu-button-hDdZy_Sx.js";import{B as o}from"./button-DkZfvcgr.js";import{I as sn}from"./icon-button-B9mp7f_7.js";import{P as In}from"./plus-BKURZcR4.js";import{M as $}from"./menu-divider-BKL3UwfF.js";import{P as jn}from"./container-portal-3TEhbyIR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-CzbNE7r-.js";import"./icon-Cag4izmS.js";import"./index-8JqQBj0s.js";import"./theme-provider-DgHPuWDh.js";import"./use-component-style-DhC_P_n8.js";import"./index-DarizNyh.js";import"./index-BgQAyYS-.js";import"./index-S8W3Ewfq.js";import"./popover-content-CSBEfcVB.js";import"./index--1NhZ_DV.js";import"./index-Du0-7Fls.js";import"./index-cDSTOvqi.js";import"./index-jR8x9-Ez.js";import"./index-DZFlsgPM.js";import"./index-DDGSjvsI.js";import"./motion-Dpi5adfX.js";import"./motion-Bd6WkMzw.js";import"./slide-fade-BgnG1T0R.js";import"./index-Ms_xn5rh.js";import"./utils-B6NRY1gi.js";import"./scale-fade-BYdP9kSX.js";import"./close-button-B0zD6pHy.js";import"./use-ripple-07NCTLKG.js";import"./extends-CF3RwP-h.js";import"./loading-CS9bmOQf.js";import"./index-DxjWwZXO.js";const W=hn(({className:a,label:l,children:m,...y},h)=>{const{styles:x}=dn(),F={...x.group};return e.jsxs(q.li,{ref:h,className:U("ui-menu__item","ui-menu__item--group",a),role:"group",__css:F,...y,children:[l?e.jsx(q.span,{className:U("ui-menu__item--group-label"),__css:x.groupLabel,children:l}):null,e.jsx(q.ul,{className:"ui-menu__item__group",children:m})]})}),H=N.forwardRef(({className:a,value:l,defaultValue:m,onChange:y,type:h,children:x,...F},un)=>{const d=h==="radio";m??(m=d?"":[]);const[c,R]=pn({value:l,defaultValue:m,onChange:y}),on=N.useCallback(i=>{if(d&&typeof c=="string"&&R(i),!d&&Q(c)){const k=c.includes(i)?c.filter(A=>A!==i):c.concat(i);R(k)}},[d,c,R]),cn=xn(x).map(i=>{if(i.type!==M)return i;const k=an=>{var J,K;on(i.props.value),(K=(J=i.props).onClick)==null||K.call(J,an)},A=!d&&Q(c)?c.includes(i.props.value):i.props.value===c;return N.cloneElement(i,{type:h,onClick:k,isChecked:A})});return e.jsx(W,{ref:un,className:U("ui-menu__item--group--option",a),...F,children:cn})});H.displayName="MenuOptionGroup";const it={title:"Components / Overlay / Menu",component:t},p=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),I=()=>e.jsxs(t,{children:[e.jsx(s,{as:sn,icon:e.jsx(rn,{fontSize:"2xl"}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),j=()=>e.jsxs(t,{children:[e.jsx(s,{as:sn,icon:e.jsx(rn,{fontSize:"2xl"}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{icon:e.jsx(In,{fontSize:"lg"}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(mn,{fontSize:"lg"}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(Mn,{fontSize:"lg"}),command:"⌘O",children:"Open File"})]})]}),f=()=>{const a=N.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},S=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),g=()=>e.jsxs(t,{animation:"top",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),P=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),B=()=>e.jsxs(t,{gutter:32,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{duration:.4,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx($,{}),e.jsx(n,{children:"Sign out"})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(W,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx($,{}),e.jsx(W,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(H,{label:"order",type:"radio",children:[e.jsx(M,{value:"asc",children:"Ascending"}),e.jsx(M,{value:"desc",children:"Descending"})]}),e.jsx($,{}),e.jsxs(H,{label:"display",type:"checkbox",children:[e.jsx(M,{value:"gender",children:"gender"}),e.jsx(M,{value:"email",children:"email"}),e.jsx(M,{value:"phone",children:"phone"})]})]})]}),v=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsx(jn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),C=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(X,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(X,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),E=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>{const{isOpen:a,onOpen:l,onClose:m}=ln();return e.jsxs(t,{isOpen:a,onOpen:l,onClose:m,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var Y,Z,V;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(V=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:V.source}}};var ee,ne,te;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<MenuIcon fontSize="2xl" />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(te=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var re,se,ue;j.parameters={...j.parameters,docs:{...(re=j.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<MenuIcon fontSize="2xl" />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem icon={<Plus fontSize="lg" />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<SquareArrowOutUpRight fontSize="lg" />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<SquarePen fontSize="lg" />} command="⌘O">
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(ue=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var oe,ie,ce;f.parameters={...f.parameters,docs:{...(oe=f.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLLIElement>(null);
  return <Menu initialFocusRef={ref}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ce=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ae,le,me;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
  return <Menu placement="right-start">
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(me=(le=S.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var Me,de,he;g.parameters={...g.parameters,docs:{...(Me=g.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <Menu animation="top">
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(he=(de=g.parameters)==null?void 0:de.docs)==null?void 0:he.source}}};var xe,pe,Ie;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
  return <Menu offset={[16, 16]}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ie=(pe=P.parameters)==null?void 0:pe.docs)==null?void 0:Ie.source}}};var je,fe,Se;B.parameters={...B.parameters,docs:{...(je=B.parameters)==null?void 0:je.docs,source:{originalSource:`() => {
  return <Menu gutter={32}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Se=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ge,Pe,Be;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`() => {
  return <Menu duration={0.4}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Be=(Pe=w.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var we,Le,ze;L.parameters={...L.parameters,docs:{...(we=L.parameters)==null?void 0:we.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(ze=(Le=L.parameters)==null?void 0:Le.docs)==null?void 0:ze.source}}};var Oe,ve,Ce;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(Ce=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var Ee,be,De;O.parameters={...O.parameters,docs:{...(Ee=O.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(De=(be=O.parameters)==null?void 0:be.docs)==null?void 0:De.source}}};var Te,_e,Ge;v.parameters={...v.parameters,docs:{...(Te=v.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(Ge=(_e=v.parameters)==null?void 0:_e.docs)==null?void 0:Ge.source}}};var Ne,ye,Fe;C.parameters={...C.parameters,docs:{...(Ne=C.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(Fe=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Re,ke,Ae;E.parameters={...E.parameters,docs:{...(Re=E.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect={true}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ae=(ke=E.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var qe,Ue,We;b.parameters={...b.parameters,docs:{...(qe=b.parameters)==null?void 0:qe.docs,source:{originalSource:`() => {
  return <Menu closeOnBlur={false}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(We=(Ue=b.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var He,$e,Je;D.parameters={...D.parameters,docs:{...(He=D.parameters)==null?void 0:He.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Je=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Ke,Qe,Xe;T.parameters={...T.parameters,docs:{...(Ke=T.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
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
}`,...(Xe=(Qe=T.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Ye,Ze,Ve;_.parameters={..._.parameters,docs:{...(Ye=_.parameters)==null?void 0:Ye.docs,source:{originalSource:`() => {
  return <Menu isLazy>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Ve=(Ze=_.parameters)==null?void 0:Ze.docs)==null?void 0:Ve.source}}};var en,nn,tn;G.parameters={...G.parameters,docs:{...(en=G.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <Menu isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(tn=(nn=G.parameters)==null?void 0:nn.docs)==null?void 0:tn.source}}};const ct=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{ct as __namedExportsOrder,p as basic,G as customControl,it as default,b as disabledCloseBlur,E as disabledCloseOnSelect,D as isDisabled,T as isFocusable,C as nestedMenu,_ as useLazy,g as withAnimation,I as withCommand,L as withDivider,w as withDuration,z as withGroup,B as withGutter,j as withIcon,f as withInitialFocusRef,P as withOffset,O as withOptionGroup,S as withPlacement,v as withPortal};
