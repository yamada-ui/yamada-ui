import{j as o,T as u}from"./iframe-DkaXVr_9.js";import{u as i}from"./use-disclosure-CJrHhbAy.js";import{B as a}from"./button-RXS8KHkm.js";import{M as p}from"./modal-D-DvEqUb.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-Conhq2CH.js";import"./rings-Dawgqh-Z.js";import"./use-modal-Daw9xLtp.js";import"./fade-jP2mJjq5.js";import"./transition-zrqlHNeF.js";import"./popover-CTESSn84.js";import"./index-CR4pI5Z8.js";import"./index-Cu9ztsMm.js";import"./index-DTV67aQM.js";import"./event-EnOIk5Pv.js";import"./slide-fade-DZ4Yx26B.js";import"./index-3YgWOY-Y.js";import"./use-breakpoint-BTniZXuw.js";import"./use-breakpoint-value-CouZTxc7.js";import"./use-color-mode-value-x7SRIQlN.js";import"./fade-scale-BTOYKWwc.js";import"./close-button-BJ755Stx.js";import"./icon-button-Ctlc7N6B.js";import"./x-icon-CRBquYg-.js";import"./createLucideIcon-C_OTIpjj.js";const w={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:e,onToggle:n}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),e?o.jsx(u,{children:"Hey!"}):null]})},t=()=>{const{open:e,onClose:n,onOpen:l}=i({onClose:c=>{console.log("onClose:",c)},onOpen:c=>{console.log("onOpen:",c)}});return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>l("This is arg"),children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
}`,...t.parameters?.docs?.source}}};const z=["Basic","Toggle","Chain"];export{s as Basic,t as Chain,r as Toggle,z as __namedExportsOrder,w as default};
