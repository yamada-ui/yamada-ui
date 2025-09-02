import{j as o,T as u}from"./iframe-XeUDGc9-.js";import{u as c}from"./use-disclosure-Q_gHOiKq.js";import{B as a}from"./button-BMwb3xqF.js";import{M as p}from"./modal-BXsczGCZ.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-CgX_lvjC.js";import"./use-ripple-CRLgxef_.js";import"./rings-DhKaXPYE.js";import"./use-modal-P5HlX_Bz.js";import"./fade-CwZvbUJ7.js";import"./transition-BE9h2tni.js";import"./popover-CS_rKV3m.js";import"./index-DOSqIMwN.js";import"./index-3YqRVpD6.js";import"./index-Dyl3Q8ML.js";import"./event-Bys_A0Hz.js";import"./slide-fade-NLK9p0c-.js";import"./index-DEnd7V5M.js";import"./use-breakpoint-yc9KJhMy.js";import"./use-breakpoint-value-DixKx_R9.js";import"./use-color-mode-value-BtM7ZDp0.js";import"./fade-scale-lSw9y0IV.js";import"./close-button-DLwJLQZv.js";import"./icon-button-Cnht_NtW.js";import"./x-icon-D4Qk9xtz.js";import"./createLucideIcon-BIZS7xSf.js";const z={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:i}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:i,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:e,onToggle:n}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),e?o.jsx(u,{children:"Hey!"}):null]})},t=()=>{const{open:e,onClose:n,onOpen:i}=c({onClose:l=>{console.log("onClose:",l)},onOpen:l=>{console.log("onOpen:",l)}});return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>i("This is arg"),children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:()=>n("This is arg"),onClose:()=>n("This is arg"),onSuccess:()=>n("This is arg")})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={onClose} onClose={onClose} onSuccess={onClose} />
    </>;
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>;
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure<string, string>({
    onClose: value => {
      console.log("onClose:", value);
    },
    onOpen: value => {
      console.log("onOpen:", value);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")} />
    </>;
}`,...t.parameters?.docs?.source}}};const A=["Basic","Toggle","Chain"];export{s as Basic,t as Chain,r as Toggle,A as __namedExportsOrder,z as default};
