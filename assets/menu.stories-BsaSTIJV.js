import{j as e}from"./extends-CwFRzn3r.js";import{u as ln}from"./index-Dbjktjet.js";import{r as x}from"./index-BwDkhjyp.js";import{C as u,S as mn,a as Mn}from"./square-pen-CE8JlWKM.js";import{M as sn}from"./menu-m6N51Xwy.js";import{a as dn,f as d,b as t,c as r,d as n}from"./menu-list-DgXraQ2g.js";import{f as hn}from"./forward-ref-BWI-Phbn.js";import{b as U,c as W,I as X,q as xn}from"./factory-DBrfn43w.js";import{u as pn}from"./index-CsH8woeS.js";import{M as s,a as Y}from"./menu-button-Cc1z4k3A.js";import{B as o}from"./button-HzRyJIss.js";import{I as un}from"./icon-button-esGqFFIV.js";import{P as In}from"./plus-BNdDXVwj.js";import{M as J}from"./menu-divider-CuXEskK5.js";import{P as jn}from"./portal-BEtwgqzG.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lucide-icon-CsDBQyHf.js";import"./icon-CVPWgGuL.js";import"./use-component-style-DhRiPQIp.js";import"./theme-provider-Cr3m0r8P.js";import"./use-var-DcJHaFAf.js";import"./popover-trigger-C4B9Wa4t.js";import"./close-button-BDLDbh2v.js";import"./use-ripple-C_jFl7Io.js";import"./index-CGy0U2a3.js";import"./motion-B7t0mTYZ.js";import"./factory-CWrzRNZL.js";import"./slide-fade-DV-SS8EA.js";import"./index-BukEwq1c.js";import"./index-C_z-NEqe.js";import"./forward-ref-scR1bmHx.js";import"./utils-Bot02Mqw.js";import"./scale-fade-CARss9Lv.js";import"./index-DX5CNJFl.js";import"./index-CoJrGj-T.js";import"./index-C9q_kkfb.js";import"./index-Ds_xHjLF.js";import"./index-pFyedNCb.js";import"./index-BD-dMYlD.js";import"./index-ByFQ-olM.js";import"./loading-iPLDeGho.js";import"./index-CS4BWtGh.js";const H=hn(({className:a,children:h,label:M,labelProps:m,...y},F)=>{const{styles:p}=dn(),R=x.useId(),l=(m==null?void 0:m.id)??R,c={...p.group};return e.jsxs(U.section,{ref:F,className:W("ui-menu__item","ui-menu__item--group",a),"aria-labelledby":l,role:"group",__css:c,...y,children:[M?e.jsx(U.header,{className:W("ui-menu__item--group-label"),role:"presentation",__css:p.groupLabel,...m,id:l,children:M}):null,e.jsx(U.div,{className:"ui-menu__item__group",children:h})]})}),$=x.forwardRef(({type:a,className:h,children:M,defaultValue:m,value:y,onChange:F,...p},R)=>{const l=a==="radio";m??(m=l?"":[]);const[c,k]=pn({defaultValue:m,value:y,onChange:F}),on=x.useCallback(i=>{if(l&&typeof c=="string"&&k(i),!l&&X(c)){const A=c.includes(i)?c.filter(q=>q!==i):c.concat(i);k(A)}},[l,c,k]),cn=xn(M).map(i=>{if(i.type!==d)return i;const A=an=>{var K,Q;on(i.props.value),(Q=(K=i.props).onClick)==null||Q.call(K,an)},q=!l&&X(c)?c.includes(i.props.value):i.props.value===c;return x.cloneElement(i,{type:a,isChecked:q,onClick:A})});return e.jsx(H,{ref:R,className:W("ui-menu__item--group--option",h),...p,children:cn})});$.displayName="MenuOptionGroup";const ct={component:t,title:"Components / Overlay / Menu"},I=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),j=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(s,{as:un,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",icon:e.jsx(In,{fontSize:"lg"}),children:"New Tab"}),e.jsx(n,{command:"⌘N",icon:e.jsx(mn,{fontSize:"lg"}),children:"New Window"}),e.jsx(n,{command:"⌘O",icon:e.jsx(Mn,{fontSize:"lg"}),children:"Open File"})]})]}),S=()=>{const a=x.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},g=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),P=()=>e.jsxs(t,{animation:"top",children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),B=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{gutter:32,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{duration:.4,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),v=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(J,{}),e.jsx(n,{children:"Sign out"})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(H,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(J,{}),e.jsx(H,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs($,{type:"radio",label:"order",children:[e.jsx(d,{value:"asc",children:"Ascending"}),e.jsx(d,{value:"desc",children:"Descending"})]}),e.jsx(J,{}),e.jsxs($,{type:"checkbox",label:"display",children:[e.jsx(d,{value:"gender",children:"gender"}),e.jsx(d,{value:"email",children:"email"}),e.jsx(d,{value:"phone",children:"phone"})]})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsx(jn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),E=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Y,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>{const{isOpen:a,onClose:h,onOpen:M}=ln();return e.jsxs(t,{isOpen:a,onClose:h,onOpen:M,children:[e.jsx(s,{as:o,rightIcon:e.jsx(u,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var Z,V,ee;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ee=(V=I.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,te,re;j.parameters={...j.parameters,docs:{...(ne=j.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ue,oe;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(oe=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:oe.source}}};var ie,ce,ae;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
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
}`,...(ae=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,me,Me;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(Me=(me=g.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var de,he,xe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(xe=(he=P.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var pe,Ie,je;B.parameters={...B.parameters,docs:{...(pe=B.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(je=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:je.source}}};var fe,Se,ge;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:ge.source}}};var Pe,Be,we;L.parameters={...L.parameters,docs:{...(Pe=L.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(we=(Be=L.parameters)==null?void 0:Be.docs)==null?void 0:we.source}}};var Le,ve,ze;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(ze=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:ze.source}}};var Oe,Ce,Ee;z.parameters={...z.parameters,docs:{...(Oe=z.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
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
}`,...(Ee=(Ce=z.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var De,be,Te;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
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
}`,...(Te=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Te.source}}};var _e,Ge,Ne;C.parameters={...C.parameters,docs:{...(_e=C.parameters)==null?void 0:_e.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Ge=C.parameters)==null?void 0:Ge.docs)==null?void 0:Ne.source}}};var ye,Fe,Re;E.parameters={...E.parameters,docs:{...(ye=E.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Re=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,qe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(qe=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ue,We,He;b.parameters={...b.parameters,docs:{...(Ue=b.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(He=(We=b.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var $e,Je,Ke;T.parameters={...T.parameters,docs:{...($e=T.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Ke=(Je=T.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Qe,Xe,Ye;_.parameters={..._.parameters,docs:{...(Qe=_.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Ye=(Xe=_.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,Ve,en;G.parameters={...G.parameters,docs:{...(Ze=G.parameters)==null?void 0:Ze.docs,source:{originalSource:`() => {
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
}`,...(en=(Ve=G.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,tn,rn;N.parameters={...N.parameters,docs:{...(nn=N.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(rn=(tn=N.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const at=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{at as __namedExportsOrder,I as basic,N as customControl,ct as default,b as disabledCloseBlur,D as disabledCloseOnSelect,T as isDisabled,_ as isFocusable,E as nestedMenu,G as useLazy,P as withAnimation,j as withCommand,v as withDivider,L as withDuration,z as withGroup,w as withGutter,f as withIcon,S as withInitialFocusRef,B as withOffset,O as withOptionGroup,g as withPlacement,C as withPortal};
