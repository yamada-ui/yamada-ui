import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as M,D as j,E as Mn,a as Bn,F as vn,G as bn}from"./fontawesome-icon-JaZ0dMxh.js";import{u as xn}from"./index-C-D6xzpN.js";import{r as x}from"./index-CBqU2yxZ.js";import{c as On}from"./index-Bknf-GSb.js";import{p as Dn,d as hn,P as Ln,c as D,y as En,z as pn,h as In,u as O,aa as re,v as fn,a9 as _n,ae as zn,l as ce,t as yn,C as Fn}from"./factory-D1MzC1Q2.js";import{P as Nn,a as kn,b as Rn}from"./popover-content-Dzj6KE1S.js";import{a as An}from"./use-component-style-i7T2CPTB.js";import{o as Gn}from"./theme-provider-LCtE2tbw.js";import{f as L}from"./forward-ref-DuAegr0M.js";import{u as Tn}from"./index-BAkiw5U8.js";import{u as Kn}from"./index-DOHT0qqe.js";import{B as g}from"./button-BkvW6mjw.js";import{I as jn}from"./icon-button-BRLUPhww.js";import{P as Un}from"./container-portal-CAcQI922.js";import"./index-D3ylJrlI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./icon-B3uV5IZ5.js";import"./index-CYT3-ShY.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./index-DD9eRhK7.js";import"./index-rYLD436_.js";import"./index-BTbHygxe.js";import"./index-CrNYDEDJ.js";import"./index-ormjCxW4.js";import"./index-BY3Kv4Lb.js";import"./index-D62GHI4F.js";import"./motion-JgkBPv6g.js";import"./slide-fade-DJiINvtX.js";import"./index-_tcQm2Fk.js";import"./motion-C1gM6QUe.js";import"./utils-D4EaS3mH.js";import"./scale-fade-BDJIhGhc.js";import"./close-button-CIKMrptQ.js";import"./use-ripple-K38Z2Edq.js";import"./loading-BxQYss10.js";import"./index-BtM5VmRH.js";const{DescendantsContextProvider:Wn,useDescendantsContext:Vn,useDescendants:qn,useDescendant:Hn}=On(),[$n,_]=Dn({name:"MenuContext",errorMessage:`useMenu returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />"`}),h=s=>{const[t,r]=An("Menu",s),{initialFocusRef:o,closeOnSelect:u=!0,placement:l="bottom-start",duration:m=.2,...c}=Gn(r),i=qn(),[f,C]=x.useState(-1),w=x.useRef(null),a=x.useRef(new Set([])),S=x.useCallback(()=>{requestAnimationFrame(()=>{var P;return(P=w.current)==null?void 0:P.focus({preventScroll:!1})})},[]),v=x.useCallback(()=>{const P=setTimeout(()=>{if(o)return;const z=i.enabledFirstValue();z&&C(z.index)});a.current.add(P)},[i,o]),d=x.useCallback(()=>{const P=setTimeout(()=>{if(o)return;const z=i.enabledLastValue();z&&C(z.index)});a.current.add(P)},[i,o]),b=x.useCallback(()=>{var P;(P=c.onOpen)==null||P.call(c),S()},[S,c]),{isOpen:B,onOpen:E,onClose:F}=xn({...s,onOpen:b});return hn(()=>{B||C(-1)},[B]),Ln(()=>{a.current.forEach(P=>clearTimeout(P)),a.current.clear()}),e.jsx(Wn,{value:i,children:e.jsx($n,{value:{isOpen:B,onOpen:E,onClose:F,onFocusFirstItem:v,onFocusLastItem:d,closeOnSelect:u,focusedIndex:f,setFocusedIndex:C,menuRef:w,styles:t},children:e.jsx(Nn,{...c,isOpen:B,onOpen:E,onClose:F,placement:l,duration:m,initialFocusRef:o,closeOnButton:!1})})})},p=L(({className:s,children:t,as:r,...o},u)=>{const{isOpen:l,onOpen:m,onFocusFirstItem:c,onFocusLastItem:i}=_(),f=x.useCallback(w=>{const S={Enter:re(m,c),ArrowDown:re(m,c),ArrowUp:re(m,i)}[w.key];S&&(w.preventDefault(),w.stopPropagation(),S())},[c,i,m]),C=r||Jn;return e.jsx(kn,{children:e.jsx(C,{ref:u,className:D("ui-menu",s),...o,"data-active":En(l),"aria-expanded":pn(l),onKeyDown:In(o.onKeyDown,f),children:e.jsx(O.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:t})})})}),Jn=L((s,t)=>{const{styles:r}=_(),o={display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...r.button};return e.jsx(O.button,{ref:t,__css:o,...s})}),I=L(({className:s,...t},r)=>{const{menuRef:o,focusedIndex:u,setFocusedIndex:l,onClose:m,styles:c}=_(),i=Vn(),f=x.useCallback(()=>{const d=i.enabledNextValue(u);d&&l(d.index)},[i,u,l]),C=x.useCallback(()=>{const d=i.enabledPrevValue(u);d&&l(d.index)},[i,u,l]),w=x.useCallback(()=>{const d=i.enabledFirstValue();d&&l(d.index)},[i,l]),a=x.useCallback(()=>{const d=i.enabledLastValue();d&&l(d.index)},[i,l]),S=x.useCallback(d=>{const B={Tab:E=>E.preventDefault(),Escape:m,ArrowDown:u===-1?w:f,ArrowUp:u===-1?a:C,Home:w,End:a}[d.key];B&&(d.preventDefault(),B(d))},[u,m,w,a,f,C]),v={...c.list};return e.jsx(Rn,{as:"ul",ref:fn(o,r),className:D("ui-menu__list",s),role:"menu",tabIndex:-1,__css:v,...t,onKeyDown:In(t.onKeyDown,S)})}),Qn=s=>{var t;return zn(s)&&!!((t=s==null?void 0:s.getAttribute("role"))!=null&&t.startsWith("menu-item"))},n=L(({as:s,className:t,type:r,isDisabled:o,isFocusable:u,closeOnSelect:l,icon:m,command:c,children:i,...f},C)=>{const{focusedIndex:w,setFocusedIndex:a,isOpen:S,onClose:v,closeOnSelect:d,menuRef:b,styles:B}=_(),E=o&&!u,F=x.useRef(null),{index:P,register:z}=Hn({disabled:E}),te=P===w,Pn=x.useCallback(y=>{var k;(k=f.onClick)==null||k.call(f,y),Qn(y.currentTarget)&&(l??d)&&v()},[f,l,d,v]),wn=x.useCallback(y=>{var k;(k=f.onFocus)==null||k.call(f,y),a(P)},[f,a,P]),Sn=Tn({onClick:Pn,onFocus:wn,ref:fn(z,F,C),isDisabled:o,isFocusable:u});hn(()=>{S&&(te&&!E&&F.current?requestAnimationFrame(()=>{var y;return(y=F.current)==null?void 0:y.focus()}):b.current&&!_n(b.current)&&b.current.focus())},[te,E,b,S]),r=s||r?r??void 0:"button",i=m||c?e.jsx(O.span,{style:{pointerEvents:"none",flex:1},children:i}):i;const Cn={textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,gap:"0.75rem",...B.item};return e.jsxs(O.li,{...f,...Sn,as:s,type:r,role:"menu-item",tabIndex:te?0:-1,className:D("ui-menu__item",t),__css:Cn,children:[m?e.jsx(gn,{children:m}):null,i,c?e.jsx(Xn,{children:c}):null]})}),N=L(({className:s,icon:t,isChecked:r,closeOnSelect:o=!1,children:u,...l},m)=>e.jsxs(n,{ref:m,className:D("ui-menu__item--option",s),"aria-checked":pn(r),closeOnSelect:o,...l,children:[t!==null?e.jsx(gn,{opacity:r?1:0,children:t||e.jsx(Yn,{})}):null,u]})),gn=L(({className:s,...t},r)=>{const{styles:o}=_(),u={flexShrink:0,display:"inline-flex",justifyContent:"center",alignItems:"center",fontSize:"0.85em",...o.icon};return e.jsx(O.span,{ref:r,className:D("ui-menu__item__icon",s),__css:u,...t})}),Xn=L(({className:s,...t},r)=>{const{styles:o}=_(),u={...o.command};return e.jsx(O.span,{ref:r,className:D("ui-menu__item__command",s),__css:u,...t})}),Yn=()=>e.jsx("svg",{viewBox:"0 0 14 14",width:"1em",height:"1em",children:e.jsx("polygon",{fill:"currentColor",points:"5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"})}),oe=L(({className:s,label:t,children:r,...o},u)=>{const{styles:l}=_(),m={...l.group};return e.jsxs(O.li,{ref:u,className:D("ui-menu__item","ui-menu__item--group",s),role:"group",__css:m,...o,children:[t?e.jsx(O.span,{className:D("ui-menu__item--group-label"),__css:l.groupLabel,children:t}):null,e.jsx(O.ul,{className:"ui-menu__item__group",children:r})]})}),ue=x.forwardRef(({className:s,defaultValue:t,type:r,children:o,...u},l)=>{const m=r==="radio";t=m?"":[];const[c,i]=Kn({...u,defaultValue:t}),f=x.useCallback(a=>{if(m&&typeof c=="string"&&i(a),!m&&ce(c)){const S=c.includes(a)?c.filter(v=>v!==a):c.concat(a);i(S)}},[m,c,i]),w=yn(o).map(a=>{if(a.type!==N)return a;const S=d=>{var b,B;f(a.props.value),(B=(b=a.props).onClick)==null||B.call(b,d)},v=!m&&ce(c)?c.includes(a.props.value):a.props.value===c;return x.cloneElement(a,{type:r,onClick:S,isChecked:v})});return e.jsx(oe,{ref:l,className:D("ui-menu__item--group--option",s),...Fn(u,["value","onChange"]),children:w})});ue.displayName="MenuOptionGroup";const ie=L(({className:s,...t},r)=>{const{styles:o}=_(),u={...o.divider};return e.jsx(O.hr,{ref:r,className:D("ui-menu__divider",s),__css:u,...t})}),Ns={title:"Components / Overlay / Menu",component:h},R=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),A=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{command:"⌘T",children:"New Tab"}),e.jsx(n,{command:"⌘N",children:"New Window"}),e.jsx(n,{command:"⌘O",children:"Open File"})]})]}),G=()=>e.jsxs(h,{children:[e.jsx(p,{as:jn,icon:e.jsx(M,{icon:Mn}),variant:"outline"}),e.jsxs(I,{children:[e.jsx(n,{icon:e.jsx(M,{icon:Bn}),command:"⌘T",children:"New Tab"}),e.jsx(n,{icon:e.jsx(M,{icon:vn}),command:"⌘N",children:"New Window"}),e.jsx(n,{icon:e.jsx(M,{icon:bn}),command:"⌘O",children:"Open File"})]})]}),T=()=>{const s=x.useRef(null);return e.jsxs(h,{initialFocusRef:s,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{ref:s,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})},K=()=>e.jsxs(h,{placement:"right-start",children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),U=()=>e.jsxs(h,{animation:"top",children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),W=()=>e.jsxs(h,{offset:[16,16],children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),V=()=>e.jsxs(h,{gutter:32,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),q=()=>e.jsxs(h,{duration:.4,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),H=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"}),e.jsx(ie,{}),e.jsx(n,{children:"Sign out"})]})]}),$=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(oe,{label:"account",children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]}),e.jsx(ie,{}),e.jsx(oe,{label:"action",children:e.jsx(n,{children:"Sign out"})})]})]}),J=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsxs(ue,{label:"order",type:"radio",children:[e.jsx(N,{value:"asc",children:"Ascending"}),e.jsx(N,{value:"desc",children:"Descending"})]}),e.jsx(ie,{}),e.jsxs(ue,{label:"display",type:"checkbox",children:[e.jsx(N,{value:"gender",children:"gender"}),e.jsx(N,{value:"email",children:"email"}),e.jsx(N,{value:"phone",children:"phone"})]})]})]}),Q=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsx(Un,{children:e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})})]}),X=()=>e.jsxs(h,{closeOnSelect:!1,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{closeOnSelect:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Y=()=>e.jsxs(h,{closeOnBlur:!1,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),Z=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ee=()=>e.jsxs(h,{children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{isDisabled:!0,isFocusable:!0,children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),ne=()=>e.jsxs(h,{isLazy:!0,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]}),se=()=>{const{isOpen:s,onOpen:t,onClose:r}=xn();return e.jsxs(h,{isOpen:s,onOpen:t,onClose:r,children:[e.jsx(p,{as:g,rightIcon:e.jsx(M,{size:"xs",icon:j}),children:"Menu"}),e.jsxs(I,{children:[e.jsx(n,{children:"Set status"}),e.jsx(n,{children:"Edit Profile"}),e.jsx(n,{children:"Preferences"})]})]})};var ae,le,me;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`() => {
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
}`,...(me=(le=R.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};var de,Me,xe;A.parameters={...A.parameters,docs:{...(de=A.parameters)==null?void 0:de.docs,source:{originalSource:`() => {
  return <Menu>
      <MenuButton as={IconButton} icon={<Icon icon={faBars} />} variant="outline" />

      <MenuList>
        <MenuItem command="⌘T">New Tab</MenuItem>
        <MenuItem command="⌘N">New Window</MenuItem>
        <MenuItem command="⌘O">Open File</MenuItem>
      </MenuList>
    </Menu>;
}`,...(xe=(Me=A.parameters)==null?void 0:Me.docs)==null?void 0:xe.source}}};var he,pe,Ie;G.parameters={...G.parameters,docs:{...(he=G.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
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
}`,...(Se=(we=K.parameters)==null?void 0:we.docs)==null?void 0:Se.source}}};var Ce,Be,ve;U.parameters={...U.parameters,docs:{...(Ce=U.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => {
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
}`,...(ve=(Be=U.parameters)==null?void 0:Be.docs)==null?void 0:ve.source}}};var be,Oe,De;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`() => {
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
}`,...(De=(Oe=W.parameters)==null?void 0:Oe.docs)==null?void 0:De.source}}};var Le,Ee,_e;V.parameters={...V.parameters,docs:{...(Le=V.parameters)==null?void 0:Le.docs,source:{originalSource:`() => {
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
}`,...(_e=(Ee=V.parameters)==null?void 0:Ee.docs)==null?void 0:_e.source}}};var ze,ye,Fe;q.parameters={...q.parameters,docs:{...(ze=q.parameters)==null?void 0:ze.docs,source:{originalSource:`() => {
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
}`,...(Fe=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:Fe.source}}};var Ne,ke,Re;H.parameters={...H.parameters,docs:{...(Ne=H.parameters)==null?void 0:Ne.docs,source:{originalSource:`() => {
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
}`,...(Re=(ke=H.parameters)==null?void 0:ke.docs)==null?void 0:Re.source}}};var Ae,Ge,Te;$.parameters={...$.parameters,docs:{...(Ae=$.parameters)==null?void 0:Ae.docs,source:{originalSource:`() => {
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
}`,...(Te=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Te.source}}};var Ke,Ue,We;J.parameters={...J.parameters,docs:{...(Ke=J.parameters)==null?void 0:Ke.docs,source:{originalSource:`() => {
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
}`,...(We=(Ue=J.parameters)==null?void 0:Ue.docs)==null?void 0:We.source}}};var Ve,qe,He;Q.parameters={...Q.parameters,docs:{...(Ve=Q.parameters)==null?void 0:Ve.docs,source:{originalSource:`() => {
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
}`,...(He=(qe=Q.parameters)==null?void 0:qe.docs)==null?void 0:He.source}}};var $e,Je,Qe;X.parameters={...X.parameters,docs:{...($e=X.parameters)==null?void 0:$e.docs,source:{originalSource:`() => {
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
}`,...(Qe=(Je=X.parameters)==null?void 0:Je.docs)==null?void 0:Qe.source}}};var Xe,Ye,Ze;Y.parameters={...Y.parameters,docs:{...(Xe=Y.parameters)==null?void 0:Xe.docs,source:{originalSource:`() => {
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
}`,...(dn=(mn=se.parameters)==null?void 0:mn.docs)==null?void 0:dn.source}}};const ks=["basic","withCommand","withIcon","withInitialFocusRef","withPlacement","withAnimation","withOffset","withGutter","withDuration","withDivider","withGroup","withOptionGroup","withPortal","disabledCloseOnSelect","disabledCloseBlur","isDisabled","isFocusable","useLazy","customControl"];export{ks as __namedExportsOrder,R as basic,se as customControl,Ns as default,Y as disabledCloseBlur,X as disabledCloseOnSelect,Z as isDisabled,ee as isFocusable,ne as useLazy,U as withAnimation,A as withCommand,H as withDivider,q as withDuration,$ as withGroup,V as withGutter,G as withIcon,T as withInitialFocusRef,W as withOffset,J as withOptionGroup,K as withPlacement,Q as withPortal};
