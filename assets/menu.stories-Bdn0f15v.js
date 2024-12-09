import{j as e}from"./jsx-runtime-CfatFE5O.js";import{r as x}from"./index-ClcD9ViR.js";import{C as o,S as ln,a as mn}from"./square-pen-CiRR21w9.js";import{M as sn}from"./menu-uJ9L-f2q.js";import{a as Mn,f as d,b as t,c as r,d as n}from"./menu-list-Bdr9HGJU.js";import{f as dn}from"./forward-ref-D13m8o2p.js";import{b as H,c as J,P as Y,g as In}from"./factory-ZSnRp-09.js";import{u as xn}from"./index-_1kmLYlG.js";import{M as s,a as Z}from"./menu-button-DSgHyxpo.js";import{B as u}from"./button-CP_V-DFs.js";import{I as on}from"./icon-button-MU7FiVwO.js";import{P as pn}from"./plus-DHwj_NnO.js";import{M as K}from"./menu-separator-C6KXB1Nu.js";import{P as hn}from"./portal-Dqf7N2XQ.js";import{u as jn}from"./index-CReU6qRk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./icon-D-mdHq7J.js";import"./use-component-style-Bj6hwx_Q.js";import"./theme-provider-B08WIPTu.js";import"./use-var-BqMKFNOM.js";import"./createLucideIcon-C_T9K6g-.js";import"./popover-trigger-BUAG4wKM.js";import"./close-button-zTZFYbSs.js";import"./use-ripple-DvgegkL5.js";import"./index-CIS69Ejq.js";import"./proxy-Cmv22F1b.js";import"./factory-g1ZPYqox.js";import"./slide-fade-CyNwX6Ij.js";import"./index-kFzQREm-.js";import"./index-Co5PRCxP.js";import"./forward-ref-2BKBy0Yi.js";import"./utils-CcwEU3c6.js";import"./scale-fade-C0eR_7w0.js";import"./index-CYzpnABI.js";import"./index-gGKStiao.js";import"./index-DX5Nxq0F.js";import"./index-Bnw1OyhA.js";import"./index-CP6OdolE.js";import"./index-CGbpPqLk.js";import"./index-BaE0cyT7.js";import"./loading-YSmVr9V5.js";import"./index-ZuzByk-F.js";const p=dn(({className:a,children:I,label:M,labelProps:m,...R},k)=>{const{styles:h}=Mn(),A=x.useId(),l=(m==null?void 0:m.id)??A,c={...h.group};return e.jsxs(H.section,{ref:k,className:J("ui-menu__item","ui-menu__item--group",a),"aria-labelledby":l,role:"group",__css:c,...R,children:[M?e.jsx(H.header,{className:J("ui-menu__item--group-label"),role:"presentation",__css:h.groupLabel,...m,id:l,children:M}):null,e.jsx(H.div,{className:"ui-menu__item__group",children:I})]})});p.displayName="MenuGroup";p.__ui__="MenuGroup";const F=x.forwardRef(({type:a,className:I,children:M,defaultValue:m,value:R,onChange:k,...h},A)=>{const l=a==="radio";m??(m=l?"":[]);const[c,q]=xn({defaultValue:m,value:R,onChange:k}),un=x.useCallback(i=>{if(l&&typeof c=="string"&&q(i),!l&&Y(c)){const U=c.includes(i)?c.filter(W=>W!==i):c.concat(i);q(U)}},[l,c,q]),cn=In(M).map(i=>{if(i.type!==d)return i;const U=an=>{var Q,X;un(i.props.value),(X=(Q=i.props).onClick)==null||X.call(Q,an)},W=!l&&Y(c)?c.includes(i.props.value):i.props.value===c;return x.cloneElement(i,{type:a,isChecked:W,onClick:U})});return e.jsx(p,{ref:A,className:J("ui-menu__item--group--option",I),...h,children:cn})});F.displayName="MenuOptionGroup";F.__ui__="MenuOptionGroup";const ct={component:t,title:"Components / Overlay / Menu"},j=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),f=()=>e.jsxs(t,{children:[e.jsx(s,{as:on,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),S=()=>e.jsxs(t,{children:[e.jsx(s,{as:on,variant:"outline","aria-label":"Menu",icon:e.jsx(sn,{fontSize:"2xl"})}),e.jsxs(r,{children:[e.jsx(n,{command:"⌘T",icon:e.jsx(pn,{fontSize:"lg"}),children:"New Tab"}),e.jsx(n,{command:"⌘N",icon:e.jsx(ln,{fontSize:"lg"}),children:"New Window"}),e.jsx(n,{command:"⌘O",icon:e.jsx(mn,{fontSize:"lg"}),children:"Open File"})]})]}),P=()=>{const a=x.useRef(null);return e.jsxs(t,{initialFocusRef:a,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:a,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},B=()=>e.jsxs(t,{placement:"right-start",children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),g=()=>e.jsxs(t,{animation:"top",children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),w=()=>e.jsxs(t,{offset:[16,16],children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),L=()=>e.jsxs(t,{gutter:32,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),z=()=>e.jsxs(t,{duration:.4,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),O=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(K,{}),e.jsx(n,{children:"Sign out"})]})]}),C=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(p,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(K,{}),e.jsx(p,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),v=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsxs(F,{type:"radio",label:"order",children:[e.jsx(d,{value:"asc",children:"Ascending"}),e.jsx(d,{value:"desc",children:"Descending"})]}),e.jsx(K,{}),e.jsxs(F,{type:"checkbox",label:"display",children:[e.jsx(d,{value:"gender",children:"gender"}),e.jsx(d,{value:"email",children:"email"}),e.jsx(d,{value:"phone",children:"phone"})]})]})]}),E=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsx(hn,{children:e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),b=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Settings"}),e.jsxs(r,{children:[e.jsx(n,{children:"Extensions"}),e.jsx(n,{children:e.jsxs(t,{children:[e.jsx(Z,{children:"Theme"}),e.jsxs(r,{children:[e.jsx(n,{children:"Color Theme"}),e.jsx(n,{children:"File Icon Theme"}),e.jsx(n,{children:"Product Icon Theme"})]})]})}),e.jsx(n,{children:"User Tasks"})]})]})}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),D=()=>e.jsxs(t,{closeOnSelect:!1,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),_=()=>e.jsxs(t,{closeOnBlur:!1,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),G=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),T=()=>e.jsxs(t,{children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),N=()=>e.jsxs(t,{isLazy:!0,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),y=()=>{const{isOpen:a,onClose:I,onOpen:M}=jn();return e.jsxs(t,{isOpen:a,onClose:I,onOpen:M,children:[e.jsx(s,{as:u,endIcon:e.jsx(o,{fontSize:"xl"}),children:"Menu"}),e.jsxs(r,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var $,V,ee;j.parameters={...j.parameters,docs:{...($=j.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(ee=(V=j.parameters)==null?void 0:V.docs)==null?void 0:ee.source}}};var ne,te,re;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} variant="outline" aria-label="Menu" icon={<MenuIcon fontSize="2xl" />} />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(re=(te=f.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,ue;S.parameters={...S.parameters,docs:{...(se=S.parameters)==null?void 0:se.docs,source:{originalSource:`() => {
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
}`,...(ae=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:ae.source}}};var le,me,Me;B.parameters={...B.parameters,docs:{...(le=B.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(Me=(me=B.parameters)==null?void 0:me.docs)==null?void 0:Me.source}}};var de,Ie,xe;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
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
}`,...(xe=(Ie=g.parameters)==null?void 0:Ie.docs)==null?void 0:xe.source}}};var pe,he,je;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`() => {
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
}`,...(je=(he=w.parameters)==null?void 0:he.docs)==null?void 0:je.source}}};var fe,Se,Pe;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(Pe=(Se=L.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var Be,ge,we;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(we=(ge=z.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var Le,ze,Oe;O.parameters={...O.parameters,docs:{...(Le=O.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuItem>Set status</MenuItem>
        <MenuItem>Edit Profile</MenuItem>
        <MenuItem>Preferences</MenuItem>

        <MenuSeparator />

        <MenuItem>Sign out</MenuItem>
      </MenuList>
    </Menu>;
}`,...(Oe=(ze=O.parameters)==null?void 0:ze.docs)==null?void 0:Oe.source}}};var Ce,ve,Ee;C.parameters={...C.parameters,docs:{...(Ce=C.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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

        <MenuSeparator />

        <MenuGroup label="action">
          <MenuItem>Sign out</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>;
}`,...(Ee=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:Ee.source}}};var be,De,_e;v.parameters={...v.parameters,docs:{...(be=v.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={Button} endIcon={<ChevronDownIcon fontSize="xl" />}>
        Menu
      </MenuButton>

      <MenuList>
        <MenuOptionGroup type="radio" label="order">
          <MenuOptionItem value="asc">Ascending</MenuOptionItem>
          <MenuOptionItem value="desc">Descending</MenuOptionItem>
        </MenuOptionGroup>

        <MenuSeparator />

        <MenuOptionGroup type="checkbox" label="display">
          <MenuOptionItem value="gender">gender</MenuOptionItem>
          <MenuOptionItem value="email">email</MenuOptionItem>
          <MenuOptionItem value="phone">phone</MenuOptionItem>
        </MenuOptionGroup>
      </MenuList>
    </Menu>;
}`,...(_e=(De=v.parameters)==null?void 0:De.docs)==null?void 0:_e.source}}};var Ge,Te,Ne;E.parameters={...E.parameters,docs:{...(Ge=E.parameters)==null?void 0:Ge.docs,source:{originalSource:`() => {
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
}`,...(Ne=(Te=E.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source}}};var ye,Fe,Re;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`() => {
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
}`,...(Re=(Fe=b.parameters)==null?void 0:Fe.docs)==null?void 0:Re.source}}};var ke,Ae,qe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`() => {
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
}`,...(qe=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:qe.source}}};var Ue,We,He;_.parameters={..._.parameters,docs:{...(Ue=_.parameters)==null?void 0:Ue.docs,source:{originalSource:`() => {
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
}`,...(en=(Ve=N.parameters)==null?void 0:Ve.docs)==null?void 0:en.source}}};var nn,tn,rn;y.parameters={...y.parameters,docs:{...(nn=y.parameters)==null?void 0:nn.docs,source:{originalSource:`() => {
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
}`,...(rn=(tn=y.parameters)==null?void 0:tn.docs)==null?void 0:rn.source}}};const at=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withSeparator","withGroup","withOptionGroup","withPortal","nestedMenu","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{at as __namedExportsOrder,j as basic,y as customControl,ct as default,_ as disabledCloseBlur,D as disabledCloseOnSelect,G as isDisabled,T as isFocusable,b as nestedMenu,N as useLazy,g as withAnimation,f as withCommand,z as withDuration,C as withGroup,L as withGutter,S as withIcon,P as withInitialFocusRef,w as withOffset,v as withOptionGroup,B as withPlacement,E as withPortal,O as withSeparator};