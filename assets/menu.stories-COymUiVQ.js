import{j as e}from"./extends-CwFRzn3r.js";import{u as ln}from"./index-BSZzY47h.js";import{r as N}from"./index-BwDkhjyp.js";import{C as u,M as sn,S as mn,a as Mn}from"./square-pen-Deg3ozfJ.js";import{a as dn,f as m,b as t,c as r,d as n}from"./menu-list-B8yTk-cX.js";import{f as hn}from"./forward-ref-BWI-Phbn.js";import{b as U,c as W,F as X,p as xn}from"./factory-BPGpAF5Z.js";import{u as pn}from"./index-CJwZPsS_.js";import{M as s,a as Y}from"./menu-button-jRyJFGTI.js";import{B as o}from"./button-9256ovQJ.js";import{I as un}from"./icon-button-pKVs33qi.js";import{P as In}from"./plus-DmHuiAXk.js";import{M as J}from"./menu-divider-CU1ZsP2g.js";import{P as jn}from"./portal-Df1xvvbV.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-DpgM6Xz3.js";import"./icon-BYVaiKtb.js";import"./use-component-style-vGTU0kmU.js";import"./theme-provider-HQUvgn6k.js";import"./use-var-CHlP19MT.js";import"./popover-trigger-BJsmlD02.js";import"./close-button-TCaPA0pi.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./slide-fade-BEHgxEuP.js";import"./index-BRqXaXJK.js";import"./index-B9JWsFAS.js";import"./forward-ref-scR1bmHx.js";import"./utils-wKEdAh9y.js";import"./scale-fade-Cv307av9.js";import"./index-CjlbPsry.js";import"./index-CoJrGj-T.js";import"./index-DMlaarLi.js";import"./index-YIL2lgfe.js";import"./index-BN4Uieo8.js";import"./index-DYLohKMc.js";import"./index-oQ85FuiM.js";import"./loading-BJMWU62O.js";import"./index-Drt3gf4w.js";const H=hn(({className:c,children:M,label:l,labelProps:h,...y},F)=>{const{styles:x}=dn(),R={...x.group};return e.jsxs(U.li,{ref:F,className:W("ui-menu__item","ui-menu__item--group",c),role:"group",__css:R,...y,children:[l?e.jsx(U.span,{className:W("ui-menu__item--group-label"),__css:x.groupLabel,...h,children:l}):null,e.jsx(U.ul,{className:"ui-menu__item__group",children:M})]})}),$=N.forwardRef(({type:c,className:M,children:l,defaultValue:h,value:y,onChange:F,...x},R)=>{const d=c==="radio";h??(h=d?"":[]);const[a,k]=pn({defaultValue:h,value:y,onChange:F}),on=N.useCallback(i=>{if(d&&typeof a=="string"&&k(i),!d&&X(a)){const A=a.includes(i)?a.filter(q=>q!==i):a.concat(i);k(A)}},[d,a,k]),cn=xn(l).map(i=>{if(i.type!==m)return i;const A=an=>{var K,Q;on(i.props.value),(Q=(K=i.props).onClick)==null||Q.call(K,an)},q=!d&&X(a)?a.includes(i.props.value):i.props.value===a;return N.cloneElement(i,{type:c,isChecked:q,onClick:A})});return e.jsx(H,{ref:R,className:W("ui-menu__item--group--option",M),...x,children:cn})});$.displayName="MenuOptionGroup";const ot={component:t,title:"Components / Overlay / Menu"},p=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),I=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),j=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",icon:e.jsx(In,{fontSize:"lg"}),children:"New Tab"}),e.jsx(n,{command:"⌘N",icon:e.jsx(mn,{fontSize:"lg"}),children:"New Window"}),e.jsx(n,{command:"⌘O",icon:e.jsx(Mn,{fontSize:"lg"}),children:"Open File"})]})]}),f=()=>{const c=N.useRef(null);return e.jsxs(t,{initialFocusRef:c,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:c,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},S=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),g=()=>e.jsxs(t,{animation:"top",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),P=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),B=()=>e.jsxs(t,{gutter:32,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{duration:.4,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(J,{}),e.jsx(n,{children:"Sign out"})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(H,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(J,{}),e.jsx(H,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs($,{type:"radio",label:"order",children:[e.jsx(m,{value:"asc",children:"Ascending"}),e.jsx(m,{value:"desc",children:"Descending"})]}),e.jsx(J,{}),e.jsxs($,{type:"checkbox",label:"display",children:[e.jsx(m,{value:"gender",children:"gender"}),e.jsx(m,{value:"email",children:"email"}),e.jsx(m,{value:"phone",children:"phone"})]})]})]}),v=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsx(jn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),C=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),E=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>{const{isOpen:c,onClose:M,onOpen:l}=ln();return e.jsxs(t,{isOpen:c,onClose:M,onOpen:l,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var Z,V,ee;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ee=(V=p.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,te,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(re=(te=I.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ue,oe;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T" icon={<Plus fontSize="lg" />}>
          New Tab
        </MenuItem>
        <MenuItem command="⌘N" icon={<SquareArrowOutUpRight fontSize="lg" />}>
          New Window
        </MenuItem>
        <MenuItem command="⌘O" icon={<SquarePen fontSize="lg" />}>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(oe=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,ce,ae;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ae=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,me,Me;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(Me=(me=S.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var de,he,xe;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(xe=(he=g.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var pe,Ie,je;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(je=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var fe,Se,ge;B.parameters={...B.parameters,docs:{...(fe=B.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(Se=B.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var Pe,Be,we;w.parameters={...w.parameters,docs:{...(Pe=w.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(we=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Le,ze,Oe;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Oe=(ze=L.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var ve,Ce,Ee;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Ee=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var be,De,Te;O.parameters={...O.parameters,docs:{...(be=O.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup type="radio" label="order">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuDivider />

        <MenuOptionGroup type="checkbox" label="display">
          <MenuOptionItem value="gender">gender</MenuOptionItem>
          <MenuOptionItem value="email">email</MenuOptionItem>
          <MenuOptionItem value="phone">phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>;
}`,...(Te=(De=O.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var _e,Ge,Ne;v.parameters={...v.parameters,docs:{...(_e=v.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ge=v.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var ye,Fe,Re;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Re=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,qe;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(qe=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ue,We,He;b.parameters={...b.parameters,docs:{...(Ue=b.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(We=b.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var $e,Je,Ke;D.parameters={...D.parameters,docs:{...($e=D.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Je=D.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;T.parameters={...T.parameters,docs:{...(Qe=T.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Xe=T.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,Ve,en;_.parameters={..._.parameters,docs:{...(Ze=_.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(en=(Ve=_.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,tn,rn;G.parameters={...G.parameters,docs:{...(nn=G.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure();
  return <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <MenuButton as={Button} rightIcon={<ChevronDown fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(rn=(tn=G.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const it=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{it as __namedExportsOrder,p as basic,G as customControl,ot as default,b as disabledCloseBlur,E as disabledCloseOnSelect,D as isDisabled,T as isFocusable,C as nestedMenu,_ as useLazy,g as withAnimation,I as withCommand,L as withDivider,w as withDuration,z as withGroup,B as withGutter,j as withIcon,f as withInitialFocusRef,P as withOffset,O as withOptionGroup,S as withPlacement,v as withPortal};
