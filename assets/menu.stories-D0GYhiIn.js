import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as M,D as j,E as Mn,a as Cn,F as vn,G as bn}from"./fontawesome-icon-UR0vgLdA.js";import{u as xn}from"./index-DLf9ZhAh.js";import{r as x}from"./index-CBqU2yxZ.js";import{c as On}from"./index-CPkx3e3e.js";import{r as Dn,e as hn,Q as En,c as D,A as Ln,B as pn,h as In,u as O,a5 as re,a as fn,a4 as _n,ah as zn,o as ce,x as yn,E as Fn}from"./factory-DBv693c8.js";import{P as Nn,a as kn,b as An}from"./popover-content-CjO9YtPY.js";import{a as Rn}from"./use-component-style-x77HgIAf.js";import{o as Gn}from"./theme-provider-B81-8twE.js";import{f as E}from"./forward-ref-DuAegr0M.js";import{u as Tn}from"./index-B97qfhL4.js";import{u as Kn}from"./index-BApQmalj.js";import{B as g}from"./button-D6Xv5gej.js";import{I as jn}from"./icon-button-76fs57cK.js";import{P as Un}from"./container-portal-DETs5NTV.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-CttZDCjD.js";import"./index-BLOGRGTX.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-CUiYxF6a.js";import"./index-rYLD436_.js";import"./index-CsDlsuI0.js";import"./index-DuhzhdoQ.js";import"./index-B_YMZWdv.js";import"./index-DT1MKHzI.js";import"./index-C_T8L7c2.js";import"./motion-JgkBPv6g.js";import"./slide-fade-DdOsQRD0.js";import"./index-_tcQm2Fk.js";import"./motion-B78TtHbt.js";import"./utils-A5OWcIbE.js";import"./scale-fade-wPjcuW5S.js";import"./close-button-Y2pf9k3r.js";import"./use-ripple-BGPrLyn5.js";import"./loading-BZATwpJ-.js";import"./index-BtM5VmRH.js";const{DescendantsContextProvider:Wn,useDescendantsContext:Vn,useDescendants:qn,useDescendant:Hn}=On(),[Qn,_]=Dn({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),h=s=>{const[t,r]=Rn("Menu",s),{initialFocusRef:o,closeOnSelect:u=!0,placement:l="bottom-start",duration:m=.2,...c}=Gn(r),i=qn(),[f,B]=x.useState(-1),w=x.useRef(null),a=x.useRef(new Set([])),S=x.useCallback(()=>{requestAnimationFrame(()=>{var P;return(P=w.current)==null?void 0:P.focus({preventScroll:!1})})},[]),v=x.useCallback(()=>{const P=setTimeout(()=>{if(o)return;const z=i.enabledFirstValue();z&&B(z.index)});a.current.add(P)},[i,o]),d=x.useCallback(()=>{const P=setTimeout(()=>{if(o)return;const z=i.enabledLastValue();z&&B(z.index)});a.current.add(P)},[i,o]),b=x.useCallback(()=>{var P;(P=c.onOpen)==null||P.call(c),S()},[S,c]),{isOpen:C,onOpen:L,onClose:F}=xn({...s,onOpen:b});return hn(()=>{C||B(-1)},[C]),En(()=>{a.current.forEach(P=>clearTimeout(P)),a.current.clear()}),e.jsx(Wn,{value:i,children:e.jsx(Qn,{value:{isOpen:C,onOpen:L,onClose:F,onFocusFirstItem:v,onFocusLastItem:d,closeOnSelect:u,focusedIndex:f,setFocusedIndex:B,menuRef:w,styles:t},children:e.jsx(Nn,{...c,isOpen:C,onOpen:L,onClose:F,placement:l,duration:m,initialFocusRef:o,closeOnButton:!1})})})},p=E(({className:s,children:t,as:r,...o},u)=>{const{isOpen:l,onOpen:m,onFocusFirstItem:c,onFocusLastItem:i}=_(),f=x.useCallback(w=>{const S={Enter:re(m,c),ArrowDown:re(m,c),ArrowUp:re(m,i)}[w.key];S&&(w.preventDefault(),w.stopPropagation(),S())},[c,i,m]),B=r||$n;return e.jsx(kn,{children:e.jsx(B,{ref:u,className:D("ui-menu",s),...o,"data-active":Ln(l),"aria-expanded":pn(l),onKeyDown:In(o.onKeyDown,f),children:e.jsx(O.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:t})})})}),$n=E((s,t)=>{const{styles:r}=_(),o={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...r.button};return e.jsx(O.button,{ref:t,__css:o,...s})}),I=E(({className:s,...t},r)=>{const{menuRef:o,focusedIndex:u,setFocusedIndex:l,onClose:m,styles:c}=_(),i=Vn(),f=x.useCallback(()=>{const d=i.enabledNextValue(u);d&&l(d.index)},[i,u,l]),B=x.useCallback(()=>{const d=i.enabledPrevValue(u);d&&l(d.index)},[i,u,l]),w=x.useCallback(()=>{const d=i.enabledFirstValue();d&&l(d.index)},[i,l]),a=x.useCallback(()=>{const d=i.enabledLastValue();d&&l(d.index)},[i,l]),S=x.useCallback(d=>{const C={Tab:L=>L.preventDefault(),Escape:m,ArrowDown:u===-1?w:f,ArrowUp:u===-1?a:B,Home:w,End:a}[d.key];C&&(d.preventDefault(),C(d))},[u,m,w,a,f,B]),v={...c.list};return e.jsx(An,{as:"ul",ref:fn(o,r),className:D("ui-menu__list",s),role:"menu",tabIndex:-1,__css:v,...t,onKeyDown:In(t.onKeyDown,S)})}),Jn=s=>{var t;return zn(s)&&!!((t=s==null?void 0:s.getAttribute("role"))!=null&&t.startsWith("menu-item"))},n=E(({as:s,className:t,type:r,isDisabled:o,isFocusable:u,closeOnSelect:l,icon:m,command:c,children:i,...f},B)=>{const{focusedIndex:w,setFocusedIndex:a,isOpen:S,onClose:v,closeOnSelect:d,menuRef:b,styles:C}=_(),L=o&&!u,F=x.useRef(null),{index:P,register:z}=Hn({disabled:L}),te=P===w,Pn=x.useCallback(y=>{var k;(k=f.onClick)==null||k.call(f,y),Jn(y.currentTarget)&&(l??d)&&v()},[f,l,d,v]),wn=x.useCallback(y=>{var k;(k=f.onFocus)==null||k.call(f,y),a(P)},[f,a,P]),Sn=Tn({onClick:Pn,onFocus:wn,ref:fn(z,F,B),isDisabled:o,isFocusable:u});hn(()=>{S&&(te&&!L&&F.current?requestAnimationFrame(()=>{var y;return(y=F.current)==null?void 0:y.focus()}):b.current&&!_n(b.current)&&b.current.focus())},[te,L,b,S]),r=s||r?r??void 0:"button",i=m||c?e.jsx(O.span,{style:{pointerEvents:"none",flex:1},children:i}):i;const Bn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...C.item};return e.jsxs(O.li,{...f,...Sn,as:s,type:r,role:"menu-item",tabIndex:te?0:-1,className:D("ui-menu__item",t),__css:Bn,children:[m?e.jsx(gn,{children:m}):null,i,c?e.jsx(Xn,{children:c}):null]})}),N=E(({className:s,icon:t,isChecked:r,closeOnSelect:o=!1,children:u,...l},m)=>e.jsxs(n,{ref:m,className:D("ui-menu__item--option",s),"aria-checked":pn(r),closeOnSelect:o,...l,children:[t!==null?e.jsx(gn,{opacity:r?1:0,children:t||e.jsx(Yn,{})}):null,u]})),gn=E(({className:s,...t},r)=>{const{styles:o}=_(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...o.icon};return e.jsx(O.span,{ref:r,className:D("ui-menu__item__icon",s),__css:u,...t})}),Xn=E(({className:s,...t},r)=>{const{styles:o}=_(),u={...o.command};return e.jsx(O.span,{ref:r,className:D("ui-menu__item__command",s),__css:u,...t})}),Yn=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),oe=E(({className:s,label:t,children:r,...o},u)=>{const{styles:l}=_(),m={...l.group};return e.jsxs(O.li,{ref:u,className:D("ui-menu__item","ui-menu__item--group",s),role:"group",__css:m,...o,children:[t?e.jsx(O.span,{className:D("ui-menu__item--group-label"),__css:l.groupLabel,children:t}):null,e.jsx(O.ul,{className:"ui-menu__item__group",children:r})]})}),ue=x.forwardRef(({className:s,defaultValue:t,type:r,children:o,...u},l)=>{const m=r==="radio";t=m?"":[];const[c,i]=Kn({...u,defaultValue:t}),f=x.useCallback(a=>{if(m&&typeof c=="string"&&i(a),!m&&ce(c)){const S=c.includes(a)?c.filter(v=>v!==a):c.concat(a);i(S)}},[m,c,i]),w=yn(o).map(a=>{if(a.type!==N)return a;const S=d=>{var b,C;f(a.props.value),(C=(b=a.props).onClick)==null||C.call(b,d)},v=!m&&ce(c)?c.includes(a.props.value):a.props.value===c;return x.cloneElement(a,{type:r,onClick:S,isChecked:v})});return e.jsx(oe,{ref:l,className:D("ui-menu__item--group--option",s),...Fn(u,["value","onChange"]),children:w})});ue.displayName="MenuOptionGroup";const ie=E(({className:s,...t},r)=>{const{styles:o}=_(),u={...o.divider};return e.jsx(O.hr,{ref:r,className:D("ui-menu__divider",s),__css:u,...t})}),Ns={title:"Components / Overlay / Menu",component:h},A=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),R=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),G=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{icon:e.jsx(M,{icon:Cn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(M,{icon:vn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(M,{icon:bn}),command:"⌘O",children:"Open File"})]})]}),T=()=>{const s=x.useRef(null);return e.jsxs(h,{initialFocusRef:s,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:s,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},K=()=>e.jsxs(h,{placement:"right-start",children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),U=()=>e.jsxs(h,{animation:"top",children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),W=()=>e.jsxs(h,{offset:[16,16],children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),V=()=>e.jsxs(h,{gutter:32,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),q=()=>e.jsxs(h,{duration:.4,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),H=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(ie,{}),e.jsx(n,{children:"Sign out"})]})]}),Q=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(oe,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(ie,{}),e.jsx(oe,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),$=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(ue,{label:"order",type:"radio",children:[e.jsx(N,{value:"asc",children:"Ascending"}),e.jsx(N,{value:"desc",children:"Descending"})]}),e.jsx(ie,{}),e.jsxs(ue,{label:"display",type:"checkbox",children:[e.jsx(N,{value:"gender",children:"gender"}),e.jsx(N,{value:"email",children:"email"}),e.jsx(N,{value:"phone",children:"phone"})]})]})]}),J=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsx(Un,{children:e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),X=()=>e.jsxs(h,{closeOnSelect:!1,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Y=()=>e.jsxs(h,{closeOnBlur:!1,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Z=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ee=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ne=()=>e.jsxs(h,{isLazy:!0,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),se=()=>{const{isOpen:s,onOpen:t,onClose:r}=xn();return e.jsxs(h,{isOpen:s,onOpen:t,onClose:r,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var ae,le,me;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(me=(le=A.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,Me,xe;R.parameters={...R.parameters,docs:{...(de=R.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(xe=(Me=R.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var he,pe,Ie;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(Ie=(pe=G.parameters)==null?void 0:pe.docs)==null?void 0:Ie.source}}};var fe,je,ge;T.parameters={...T.parameters,docs:{...(fe=T.parameters)==null?void 0:fe.docs,source:{originalSource:`() => {
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
}`,...(ge=(je=T.parameters)==null?void 0:je.docs)==null?void 0:ge.source}}};var Pe,we,Se;K.parameters={...K.parameters,docs:{...(Pe=K.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => {
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
}`,...(Se=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Be,Ce,ve;U.parameters={...U.parameters,docs:{...(Be=U.parameters)==null?void 0:Be.docs,source:{originalSource:`() => {
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
}`,...(ve=(Ce=U.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source}}};var be,Oe,De;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(De=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Ee,Le,_e;V.parameters={...V.parameters,docs:{...(Ee=V.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => {
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
}`,...(_e=(Le=V.parameters)==null?void 0:Le.docs)==null?void 0:_e.source}}};var ze,ye,Fe;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Fe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Ne,ke,Ae;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Ae=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Ae.source}}};var Re,Ge,Te;Q.parameters={...Q.parameters,docs:{...(Re=Q.parameters)==null?void 0:Re.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ge=Q.parameters)==null?void 0:Ge.docs)==null?void 0:Te.source}}};var Ke,Ue,We;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(We=(Ue=$.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ve,qe,He;J.parameters={...J.parameters,docs:{...(Ve=J.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(He=(qe=J.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var Qe,$e,Je;X.parameters={...X.parameters,docs:{...(Qe=X.parameters)==null?void 0:Qe.docs,source:{originalSource:`() => {
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
}`,...(Je=($e=X.parameters)==null?void 0:$e.docs)==null?void 0:Je.source}}};var Xe,Ye,Ze;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(Ze=(Ye=Y.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source}}};var en,nn,sn;Z.parameters={...Z.parameters,docs:{...(en=Z.parameters)==null?void 0:en.docs,source:{originalSource:`() => {
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
}`,...(sn=(nn=Z.parameters)==null?void 0:nn.docs)==null?void 0:sn.source}}};var tn,rn,on;ee.parameters={...ee.parameters,docs:{...(tn=ee.parameters)==null?void 0:tn.docs,source:{originalSource:`() => {
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
}`,...(on=(rn=ee.parameters)==null?void 0:rn.docs)==null?void 0:on.source}}};var un,cn,an;ne.parameters={...ne.parameters,docs:{...(un=ne.parameters)==null?void 0:un.docs,source:{originalSource:`() => {
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
}`,...(an=(cn=ne.parameters)==null?void 0:cn.docs)==null?void 0:an.source}}};var ln,mn,dn;se.parameters={...se.parameters,docs:{...(ln=se.parameters)==null?void 0:ln.docs,source:{originalSource:`() => {
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
}`,...(dn=(mn=se.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};const ks=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{ks as __namedExportsOrder,A as basic,se as customControl,Ns as default,Y as disabledCloseBlur,X as disabledCloseOnSelect,Z as isDisabled,ee as isFocusable,ne as useLazy,U as withAnimation,R as withCommand,H as withDivider,q as withDuration,Q as withGroup,V as withGutter,G as withIcon,T as withInitialFocusRef,W as withOffset,$ as withOptionGroup,K as withPlacement,J as withPortal};
