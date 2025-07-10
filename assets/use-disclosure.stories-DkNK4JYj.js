import{j as o,T as p}from"./iframe-BG38LAQ9.js";import{u as c}from"./use-disclosure-DZly0pAJ.js";import{B as l}from"./button-CfsqSZ9w.js";import{M as m}from"./modal-C9jCeOrv.js";import"./use-ripple-MuLBmFKU.js";import"./rings-BXfyi9cx.js";import"./use-modal-CuOGQQt9.js";import"./fade-DIJpdLvP.js";import"./transition-C6XE1F8x.js";import"./popover-kFfscSNN.js";import"./index-Cz5sG1WL.js";import"./index-DY0A8hcz.js";import"./index-Bg57JL2n.js";import"./event-DH3EB8Zf.js";import"./slide-fade-CqW5hN0h.js";import"./index-JCvfJkvp.js";import"./use-breakpoint-DdpUO0LK.js";import"./use-breakpoint-value-CTTBSlQj.js";import"./use-color-mode-value-CXJLU6LI.js";import"./fade-scale-CVUye-_j.js";import"./close-button-CZL_Dlbb.js";import"./icon-button-CDR5but_.js";import"./x-icon-Cem_7L-6.js";import"./createLucideIcon-CsglGZ6M.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{onOpen:n}=c();return o.jsx(o.Fragment,{children:o.jsx(l,{onClick:n,children:"Open Dialog"})})},r=()=>{const{open:n,onToggle:s}=c();return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s,children:"Please Click"}),n?o.jsx(p,{children:"Hey!"}):null]})},t=()=>{const{open:n,onClose:s,onOpen:a}=c({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>a("This is arg"),children:"Open Dialog"}),o.jsx(m,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:n,success:"わける",title:"孫悟空",onCancel:()=>s("This is arg"),onClose:()=>s("This is arg"),onSuccess:()=>s("This is arg")})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    // open,
    // onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      {/* TODO: Fix this */}
      {/* <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
       >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
       </Dialog> */}
    </>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
  } = useDisclosure({
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    },
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")} />
    </>;
}`,...t.parameters?.docs?.source}}};const v=["Basic","Toggle","Chain"];export{e as Basic,t as Chain,r as Toggle,v as __namedExportsOrder,q as default};
