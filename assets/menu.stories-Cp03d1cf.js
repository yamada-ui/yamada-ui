import{j as e}from"./jsx-runtime-X2b_N9AH.js";import{I as s,u,v as rn,a as dn,w as hn,x as xn}from"./fontawesome-icon-D_0_moem.js";import{u as In}from"./index-iJMQd47E.js";import{r as F}from"./index-uCp2LrAq.js";import{u as on,d as h,M as t,a as o,b as r,c as n,e as Y}from"./menu-list-B-Osxxtb.js";import{f as un}from"./forward-ref-Dr5Hqd9a.js";import{u as R,c as k,s as Z,t as pn}from"./factory-BskLObbI.js";import{u as jn}from"./index-BHlg0lmH.js";import{B as i}from"./button-Ct3RLDFk.js";import{I as cn}from"./icon-button-crUd0DCt.js";import{P as fn}from"./container-portal-JDqPBgzp.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-fvknOP9v.js";import"./index-H5wmSkhu.js";import"./theme-provider-jjrI8DS5.js";import"./popover-content-K3VsCcDU.js";import"./index-Cn56EYtW.js";import"./index-CBqzus2r.js";import"./index-DdtYzkfd.js";import"./index-Cyj8NBWq.js";import"./index-ByDkVl38.js";import"./index-DsVMZgDm.js";import"./index-CyabjKy8.js";import"./use-component-style-CgbLkkPD.js";import"./motion-BNFRb361.js";import"./slide-fade-Dy4taLR8.js";import"./index-DSHhgXSs.js";import"./motion-CrGhO2Op.js";import"./utils-D4ywmXfj.js";import"./scale-fade-BfUfpFXe.js";import"./close-button-CWeEuSm2.js";import"./use-ripple-CZ_-Qqh5.js";import"./index-Cm-gJahj.js";import"./index-CKCcTrZV.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./loading-saJjm8M-.js";import"./index-CqS9fqXy.js";const H=un(({className:a,label:l,children:M,...x},d)=>{const{styles:p}=on(),A={...p.group};return e.jsxs(R.li,{ref:d,className:k("ui-menu__item","ui-menu__item--group",a),role:"group",__css:A,...x,children:[l?e.jsx(R.span,{className:k("ui-menu__item--group-label"),__css:p.groupLabel,children:l}):null,e.jsx(R.ul,{className:"ui-menu__item__group",children:M})]})}),J=F.forwardRef(({className:a,value:l,defaultValue:M,onChange:x,type:d,children:p,...A},an)=>{const I=d==="radio";M??(M=I?"":[]);const[m,U]=jn({value:l,defaultValue:M,onChange:x}),mn=F.useCallback(c=>{if(I&&typeof m=="string"&&U(c),!I&&Z(m)){const W=m.includes(c)?m.filter(q=>q!==c):m.concat(c);U(W)}},[I,m,U]),ln=pn(p).map(c=>{if(c.type!==h)return c;const W=Mn=>{var Q,X;mn(c.props.value),(X=(Q=c.props).onClick)==null||X.call(Q,Mn)},q=!I&&Z(m)?m.includes(c.props.value):c.props.value===m;return F.cloneElement(c,{type:d,onClick:W,isChecked:q})});return e.jsx(H,{ref:an,className:k("ui-menu__item--group--option",a),...A,children:ln})});J.displayName="MenuOptionGroup";const K=un(({className:a,...l},M)=>{const{styles:x}=on(),d={...x.divider};return e.jsx(R.hr,{ref:M,className:k("ui-menu__divider",a),__css:d,...l})}),os={title:"Components / Overlay / Menu",component:t},j=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(o,{as:cn,icon:e.jsx(s,{icon:rn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),g=()=>e.jsxs(t,{children:[e.jsx(o,{as:cn,icon:e.jsx(s,{icon:rn}),"aria-label":"Menu",variant:"outline"}),e.jsxs(r,{children:[e.jsx(n,{icon:e.jsx(s,{icon:dn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(s,{icon:hn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(s,{icon:xn}),command:"⌘O",children:"Open File"})]})]}),P=()=>{const a=F.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},B=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),S=()=>e.jsxs(t,{animation:"top",children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),v=()=>e.jsxs(t,{gutter:32,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{duration:.4,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(K,{}),e.jsx(n,{children:"Sign out"})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(H,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(K,{}),e.jsx(H,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),E=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(J,{label:"order",type:"radio",children:[e.jsx(h,{value:"asc",children:"Ascending"}),e.jsx(h,{value:"desc",children:"Descending"})]}),e.jsx(K,{}),e.jsxs(J,{label:"display",type:"checkbox",children:[e.jsx(h,{value:"gender",children:"gender"}),e.jsx(h,{value:"email",children:"email"}),e.jsx(h,{value:"phone",children:"phone"})]})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsx(fn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),b=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>e.jsxs(t,{children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),y=()=>{const{isOpen:a,onOpen:l,onClose:M}=In();return e.jsxs(t,{isOpen:a,onOpen:l,onClose:M,children:[e.jsx(o,{as:i,rightIcon:e.jsx(s,{size:"xs",icon:u}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var $,V,ee;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(ee=(V=j.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,se,te;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} aria-label="Menu" variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(te=(se=f.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,oe,ue;g.parameters={...g.parameters,docs:{...(re=g.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(ue=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,ce,ae;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(ae=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var me,le,Me;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(Me=(le=B.parameters)==null?void 0:le.docs)==null?void 0:Me.source}}};var de,he,xe;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(xe=(he=S.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var Ie,pe,je;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => {
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
}`,...(je=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:je.source}}};var fe,ge,Pe;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:Pe.source}}};var Be,Se,we;L.parameters={...L.parameters,docs:{...(Be=L.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(we=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var ve,Le,Oe;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`() => {
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
}`,...(Oe=(Le=O.parameters)==null?void 0:Le.docs)==null?void 0:Oe.source}}};var Ce,Ee,ze;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ze=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:ze.source}}};var be,De,_e;E.parameters={...E.parameters,docs:{...(be=E.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(_e=(De=E.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var Te,Ne,Ge;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`() => {
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
}`,...(Ge=(Ne=z.parameters)==null?void 0:Ne.docs)==null?void 0:Ge.source}}};var ye,Fe,Re;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Re=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,Ue;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(Ue=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Ue.source}}};var We,qe,He;_.parameters={..._.parameters,docs:{...(We=_.parameters)==null?void 0:We.docs,source:{originalSource:`() => {
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
}`,...(He=(qe=_.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Je,Ke,Qe;T.parameters={...T.parameters,docs:{...(Je=T.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;N.parameters={...N.parameters,docs:{...(Xe=N.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,Ve,en;G.parameters={...G.parameters,docs:{...($e=G.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(en=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,sn,tn;y.parameters={...y.parameters,docs:{...(nn=y.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(tn=(sn=y.parameters)==null?void 0:sn.docs)==null?void 0:tn.source}}};const us=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{us as __namedExportsOrder,j as basic,y as customControl,os as default,_ as disabledCloseBlur,D as disabledCloseOnSelect,T as isDisabled,N as isFocusable,b as nestedMenu,G as useLazy,S as withAnimation,f as withCommand,O as withDivider,L as withDuration,C as withGroup,v as withGutter,g as withIcon,P as withInitialFocusRef,w as withOffset,E as withOptionGroup,B as withPlacement,z as withPortal};
