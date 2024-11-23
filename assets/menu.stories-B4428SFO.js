import{j as e}from"./jsx-runtime-CfatFE5O.js";import{u as ln}from"./index-BzLdmcXo.js";import{r as x}from"./index-ClcD9ViR.js";import{C as o,S as mn,a as dn}from"./square-pen-DsKbhLno.js";import{M as rn}from"./menu-5xv_i5Un.js";import{a as Mn,f as M,b as t,c as s,d as n}from"./menu-list-CminNqqx.js";import{f as In}from"./forward-ref-D13m8o2p.js";import{b as H,c as J,J as Y,q as xn}from"./factory-Db31n_eg.js";import{u as pn}from"./index-Hr0uPYc7.js";import{M as r,a as Z}from"./menu-button-BbRX-QHj.js";import{B as u}from"./button-BDTEGqqa.js";import{I as on}from"./icon-button-BTyMWrMC.js";import{P as hn}from"./plus-C0uhBiEg.js";import{M as K}from"./menu-divider-CH--WSrj.js";import{P as jn}from"./portal-C11kezrD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-BfxegGWg.js";import"./use-component-style-5HWcAXul.js";import"./theme-provider-C-TvIt_J.js";import"./use-var-BbJRqi2C.js";import"./createLucideIcon-DHJHrKis.js";import"./popover-trigger-CprRNq_c.js";import"./close-button-D9xdjoDk.js";import"./use-ripple-shOr3g-0.js";import"./index-r0TXmcNt.js";import"./proxy-Bq47Fk52.js";import"./factory-BRZ9AYsk.js";import"./slide-fade-BsEH8H2C.js";import"./index-CwhaUW1D.js";import"./index-HHvFIm4v.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-KhqytcjU.js";import"./scale-fade-DAs4TwkQ.js";import"./index-BO2BFO5d.js";import"./index-gGKStiao.js";import"./index-BPP3U8Du.js";import"./index-xVP_xMlv.js";import"./index-DKEGRuFP.js";import"./index-coqOwSQu.js";import"./index-CzwbnnDs.js";import"./loading-BptEEwSR.js";import"./index-ZuzByk-F.js";const p=In(({className:a,children:I,label:d,labelProps:m,...R},k)=>{const{styles:h}=Mn(),A=x.useId(),l=(m==null?void 0:m.id)??A,c={...h.group};return e.jsxs(H.section,{ref:k,className:J("ui-menu__item","ui-menu__item--group",a),"aria-labelledby":l,role:"group",__css:c,...R,children:[d?e.jsx(H.header,{className:J("ui-menu__item--group-label"),role:"presentation",__css:h.groupLabel,...m,id:l,children:d}):null,e.jsx(H.div,{className:"ui-menu__item__group",children:I})]})});p.displayName="MenuGroup";p.__ui__="MenuGroup";const F=x.forwardRef(({type:a,className:I,children:d,defaultValue:m,value:R,onChange:k,...h},A)=>{const l=a==="radio";m??(m=l?"":[]);const[c,q]=pn({defaultValue:m,value:R,onChange:k}),un=x.useCallback(i=>{if(l&&typeof c=="string"&&q(i),!l&&Y(c)){const U=c.includes(i)?c.filter(W=>W!==i):c.concat(i);q(U)}},[l,c,q]),cn=xn(d).map(i=>{if(i.type!==M)return i;const U=an=>{var Q,X;un(i.props.value),(X=(Q=i.props).onClick)==null||X.call(Q,an)},W=!l&&Y(c)?c.includes(i.props.value):i.props.value===c;return x.cloneElement(i,{type:a,isChecked:W,onClick:U})});return e.jsx(p,{ref:A,className:J("ui-menu__item--group--option",I),...h,children:cn})});F.displayName="MenuOptionGroup";F.__ui__="MenuOptionGroup";const ct={component:t,title:"Components / Overlay / Menu"},j=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(r,{as:on,variant:"outline","aria-label":"Menu",icon:e.jsx(rn,{fontSize:"2xl"})}),e.jsxs(s,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),S=()=>e.jsxs(t,{children:[e.jsx(r,{as:on,variant:"outline","aria-label":"Menu",icon:e.jsx(rn,{fontSize:"2xl"})}),e.jsxs(s,{children:[e.jsx(n,{command:"⌘T",icon:e.jsx(hn,{fontSize:"lg"}),children:"New Tab"}),e.jsx(n,{command:"⌘N",icon:e.jsx(mn,{fontSize:"lg"}),children:"New Window"}),e.jsx(n,{command:"⌘O",icon:e.jsx(dn,{fontSize:"lg"}),children:"Open File"})]})]}),P=()=>{const a=x.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},B=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{animation:"top",children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),g=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{gutter:32,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),v=()=>e.jsxs(t,{duration:.4,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),z=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(K,{}),e.jsx(n,{children:"Sign out"})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsxs(p,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(K,{}),e.jsx(p,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsxs(F,{type:"radio",label:"order",children:[e.jsx(M,{value:"asc",children:"Ascending"}),e.jsx(M,{value:"desc",children:"Descending"})]}),e.jsx(K,{}),e.jsxs(F,{type:"checkbox",label:"display",children:[e.jsx(M,{value:"gender",children:"gender"}),e.jsx(M,{value:"email",children:"email"}),e.jsx(M,{value:"phone",children:"phone"})]})]})]}),E=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsx(jn,{children:e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),D=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Settings"}),e.jsxs(s,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Theme"}),e.jsxs(s,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),b=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),y=()=>{const{isOpen:a,onClose:I,onOpen:d}=ln();return e.jsxs(t,{isOpen:a,onClose:I,onOpen:d,children:[e.jsx(r,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(s,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var $,V,ee;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ee=(V=j.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,te,se;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(se=(te=f.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var re,oe,ue;S.parameters={...S.parameters,docs:{...(re=S.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T" icon={<PlusIcon fontSize="lg" />}>
          New Tab
        </MenuItem>
        <MenuItem command="⌘N" icon={<SquareArrowOutUpRightIcon fontSize="lg" />}>
          New Window
        </MenuItem>
        <MenuItem command="⌘O" icon={<SquarePenIcon fontSize="lg" />}>
          Open File
        </MenuItem>
      </MenuList>
    </Menu>;
}`,...(ue=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ue.source}}};var ie,ce,ae;P.parameters={...P.parameters,docs:{...(ie=P.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
  const ref = useRef<HTMLDivElement>(null);
  return <Menu initialFocusRef={ref}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem ref={ref}>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ae=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,me,de;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
  return <Menu placement="right-start">
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(de=(me=B.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var Me,Ie,xe;w.parameters={...w.parameters,docs:{...(Me=w.parameters)==null?void 0:Me.docs,source:{originalSource:`() => {
  return <Menu animation="top">
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(xe=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var pe,he,je;g.parameters={...g.parameters,docs:{...(pe=g.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
  return <Menu offset={[16, 16]}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(je=(he=g.parameters)==null?void 0:he.docs)==null?void 0:je.source}}};var fe,Se,Pe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
  return <Menu gutter={32}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Pe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Be,we,ge;v.parameters={...v.parameters,docs:{...(Be=v.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
  return <Menu duration={0.4}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(ge=(we=v.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};var Le,ve,ze;z.parameters={...z.parameters,docs:{...(Le=z.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(ze=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:ze.source}}};var Oe,Ce,Ee;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(Ee=(Ce=O.parameters)==null?void 0:Ce.docs)==null?void 0:Ee.source}}};var De,be,_e;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(_e=(be=C.parameters)==null?void 0:be.docs)==null?void 0:_e.source}}};var Ge,Te,Ne;E.parameters={...E.parameters,docs:{...(Ge=E.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(Ne=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var ye,Fe,Re;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(Re=(Fe=D.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,qe;b.parameters={...b.parameters,docs:{...(ke=b.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
  return <Menu closeOnSelect={false}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem closeOnSelect>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(qe=(Ae=b.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ue,We,He;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
  return <Menu closeOnBlur={false}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(He=(We=_.parameters)==null?void 0:We.docs)==null?void 0:He.source}}};var Je,Ke,Qe;G.parameters={...G.parameters,docs:{...(Je=G.parameters)==null?void 0:Je.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem isDisabled>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Qe=(Ke=G.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;T.parameters={...T.parameters,docs:{...(Xe=T.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
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
}`,...(Ze=(Ye=T.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var $e,Ve,en;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
  return <Menu isLazy>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(en=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,tn,sn;y.parameters={...y.parameters,docs:{...(nn=y.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure();
  return <Menu isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>
      </MenuList>
    </Menu>;
}`,...(sn=(tn=y.parameters)==null?void 0:tn.docs)==null?void 0:sn.source}}};const at=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{at as __namedExportsOrder,j as basic,y as customControl,ct as default,_ as disabledCloseBlur,b as disabledCloseOnSelect,G as isDisabled,T as isFocusable,D as nestedMenu,N as useLazy,w as withAnimation,f as withCommand,z as withDivider,v as withDuration,O as withGroup,L as withGutter,S as withIcon,P as withInitialFocusRef,g as withOffset,C as withOptionGroup,B as withPlacement,E as withPortal};
