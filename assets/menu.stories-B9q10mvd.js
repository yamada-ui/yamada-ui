import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as s,u,v as rn,a as ln,w as Mn,x as dn}from"./icon-BQcQed63.js";import{u as hn}from"./index-CYZlXLuv.js";import{r as F}from"./index-uCp2LrAq.js";import{a as In,f as d,b as t,c as r,d as n}from"./menu-list-Cnr995Hd.js";import{f as xn}from"./forward-ref-Dr5Hqd9a.js";import{b as W,c as q,s as Y,t as pn}from"./factory-Bf0a1C4O.js";import{u as jn}from"./index-Dc2KQwVC.js";import{M as o,a as Z}from"./menu-button-svwS48AN.js";import{B as i}from"./button-C5HSAH_Q.js";import{I as on}from"./icon-button-De9wLvxW.js";import{M as K}from"./menu-divider-DzOd3_yd.js";import{P as fn}from"./container-portal--tud7o6s.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-BtMBNqBn.js";import"./index-ZgcAASpW.js";import"./theme-provider-CfMKAtcZ.js";import"./index-Bh6_N6k1.js";import"./use-component-style-C1oydc60.js";import"./index-BeEgGBIl.js";import"./index-DnMy6eVY.js";import"./popover-content-DdSqGHqW.js";import"./index-DpNfAtp1.js";import"./index-CBqzus2r.js";import"./index-BPmMvQRx.js";import"./index-DpYz45Vm.js";import"./index-CEbtGM79.js";import"./index-Bz6F23rc.js";import"./motion-BNFRb361.js";import"./slide-fade-DX8q9FlF.js";import"./index-DSHhgXSs.js";import"./motion-Bi86PhT5.js";import"./utils-BQuDdpot.js";import"./scale-fade-C4h3A9D_.js";import"./close-button-B2_55Hm9.js";import"./use-ripple-BZmEDmbU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./loading-CD9zg-8p.js";import"./index-CqS9fqXy.js";const H=xn(({className:m,label:l,children:M,...y},I)=>{const{styles:x}=In(),R={...x.group};return e.jsxs(W.li,{ref:I,className:q("ui-menu__item","ui-menu__item--group",m),role:"group",__css:R,...y,children:[l?e.jsx(W.span,{className:q("ui-menu__item--group-label"),__css:x.groupLabel,children:l}):null,e.jsx(W.ul,{className:"ui-menu__item__group",children:M})]})}),J=F.forwardRef(({className:m,value:l,defaultValue:M,onChange:y,type:I,children:x,...R},un)=>{const h=I==="radio";M??(M=h?"":[]);const[a,k]=jn({value:l,defaultValue:M,onChange:y}),cn=F.useCallback(c=>{if(h&&typeof a=="string"&&k(c),!h&&Y(a)){const A=a.includes(c)?a.filter(U=>U!==c):a.concat(c);k(A)}},[h,a,k]),an=pn(x).map(c=>{if(c.type!==d)return c;const A=mn=>{var Q,X;cn(c.props.value),(X=(Q=c.props).onClick)==null||X.call(Q,mn)},U=!h&&Y(a)?a.includes(c.props.value):c.props.value===a;return F.cloneElement(c,{type:I,onClick:A,isChecked:U})});return e.jsx(H,{ref:un,className:q("ui-menu__item--group--option",m),...R,children:an})});J.displayName="MenuOptionGroup";const is={title:"Components / Overlay / Menu",component:t},p=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),j=()=>e.jsxs(t,{children:[e.jsx(o,{as:on,icon:e.jsx(s,{icon:rn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(o,{as:on,icon:e.jsx(s,{icon:rn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{icon:e.jsx(s,{icon:ln}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(s,{icon:Mn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(s,{icon:dn}),command:"⌘O",children:"Open File"})]})]}),g=()=>{const m=F.useRef(null);return e.jsxs(t,{initialFocusRef:m,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:m,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},P=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),B=()=>e.jsxs(t,{animation:"top",children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),S=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{gutter:32,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{duration:.4,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),v=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(K,{}),e.jsx(n,{children:"Sign out"})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(H,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(K,{}),e.jsx(H,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(J,{label:"order",type:"radio",children:[e.jsx(d,{value:"asc",children:"Ascending"}),e.jsx(d,{value:"desc",children:"Descending"})]}),e.jsx(K,{}),e.jsxs(J,{label:"display",type:"checkbox",children:[e.jsx(d,{value:"gender",children:"gender"}),e.jsx(d,{value:"email",children:"email"}),e.jsx(d,{value:"phone",children:"phone"})]})]})]}),E=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsx(fn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),z=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>{const{isOpen:m,onOpen:l,onClose:M}=hn();return e.jsxs(t,{isOpen:m,onOpen:l,onClose:M,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var $,V,ee;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(ee=(V=p.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,se,te;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(te=(se=j.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,oe,ue;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ue=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,ce,ae;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLLIElement>(null);
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
}`,...(ae=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var me,le,Me;P.parameters={...P.parameters,docs:{...(me=P.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Me=(le=P.parameters)==null?void 0:le.docs)==null?void 0:Me.source}}};var de,he,Ie;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(Ie=(he=B.parameters)==null?void 0:he.docs)==null?void 0:Ie.source}}};var xe,pe,je;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`() => {
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
}`,...(je=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:je.source}}};var fe,ge,Pe;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:Pe.source}}};var Be,Se,we;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Le,ve,Oe;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(Oe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:Oe.source}}};var Ce,Ee,ze;O.parameters={...O.parameters,docs:{...(Ce=O.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ee=O.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};var be,De,Te;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(Te=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Te.source}}};var _e,Ge,Ne;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ge=E.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var Fe,ye,Re;z.parameters={...z.parameters,docs:{...(Fe=z.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => {
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
}`,...(Re=(ye=z.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var ke,Ae,Ue;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:Ue.source}}};var We,qe,He;D.parameters={...D.parameters,docs:{...(We=D.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(He=(qe=D.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Je,Ke,Qe;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;_.parameters={..._.parameters,docs:{...(Xe=_.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=_.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,Ve,en;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(en=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,sn,tn;N.parameters={...N.parameters,docs:{...(nn=N.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(tn=(sn=N.parameters)==null?void 0:sn.docs)==null?void 0:tn.source}}};const cs=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{cs as __namedExportsOrder,p as basic,N as customControl,is as default,D as disabledCloseBlur,b as disabledCloseOnSelect,T as isDisabled,_ as isFocusable,z as nestedMenu,G as useLazy,B as withAnimation,j as withCommand,v as withDivider,L as withDuration,O as withGroup,w as withGutter,f as withIcon,g as withInitialFocusRef,S as withOffset,C as withOptionGroup,P as withPlacement,E as withPortal};
