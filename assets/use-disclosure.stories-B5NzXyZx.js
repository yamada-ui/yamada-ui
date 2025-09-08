import{j as o,T as u}from"./iframe-6Bjnmk15.js";import{u as c}from"./use-disclosure-2VLKsv7H.js";import{B as a}from"./button-CsD90Sgr.js";import{M as p}from"./modal-CE_4NQB4.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-BS6NiYW5.js";import"./use-ripple-DerRjSwg.js";import"./rings-B9NsMSz3.js";import"./use-modal-CFzxVyjn.js";import"./fade-CD-kWR8Y.js";import"./transition-DHxJDoY-.js";import"./popover-D9A3-tl8.js";import"./index-CX0CAc80.js";import"./index-DUawkkKk.js";import"./index-BSp_bLS_.js";import"./event-XJrGbvyU.js";import"./slide-fade-Du8ZD4Kp.js";import"./index-DRWHxUSc.js";import"./use-breakpoint-Dh_Zsenw.js";import"./use-breakpoint-value-DpYoCjbb.js";import"./use-color-mode-value-CCXFyZ78.js";import"./fade-scale-Dp_7G10W.js";import"./close-button--iDlU9jP.js";import"./icon-button-CbRY8Yre.js";import"./x-icon-BTSVN-YL.js";import"./createLucideIcon-dBwzvMsk.js";const z={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:i}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:i,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
