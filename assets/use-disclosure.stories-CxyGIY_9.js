import{j as o,T as u}from"./iframe-Cz9Hkuf2.js";import{u as i}from"./use-disclosure-CXEZpN0k.js";import{B as a}from"./button-D91gE1vK.js";import{M as p}from"./modal-DXC-xczf.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-BqwrQuB9.js";import"./rings-DpK90kMJ.js";import"./use-modal-C4gsHnXd.js";import"./fade-BBL1MBWe.js";import"./transition-V9ja_QF0.js";import"./popover-D63z6uQL.js";import"./index-CX6e_c9w.js";import"./index-DEamhdkv.js";import"./index-BTBuWLrl.js";import"./event-28KyvPoM.js";import"./slide-fade-Bkfs6aHT.js";import"./index-CkPYMTpu.js";import"./use-breakpoint-DOO0N3ER.js";import"./use-breakpoint-value-CUr9mfl-.js";import"./use-color-mode-value-BvcvNE7L.js";import"./fade-scale-CyeksrzV.js";import"./close-button-B-hz-qvj.js";import"./icon-button-D-ZVEkgW.js";import"./x-icon-6zAZuUPL.js";import"./createLucideIcon-CBK9Ft_T.js";const w={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
