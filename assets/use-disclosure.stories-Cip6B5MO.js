import{j as o,T as p}from"./iframe-6cyGxZR1.js";import{u as c}from"./use-disclosure-DRht7voi.js";import{B as l}from"./button-G4XTmEMi.js";import{M as m}from"./modal-Do01k22f.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";import"./use-modal-D6_0Kug3.js";import"./fade-COtuqKn_.js";import"./transition-CmvqY4Ot.js";import"./popover-wxawKKgv.js";import"./index-C3xjaTvr.js";import"./index-C1C9cpEy.js";import"./index-DCrRJmFA.js";import"./event-CB3Eyrro.js";import"./slide-fade-CaDegySo.js";import"./index-6RqzWxmQ.js";import"./use-breakpoint-C5fzzoKt.js";import"./use-breakpoint-value-4tu6pM9A.js";import"./use-color-mode-value-C3Jt17hH.js";import"./fade-scale-CXvPvLzq.js";import"./close-button-B6VRuf2Q.js";import"./icon-button-B5j3FGrm.js";import"./x-icon-CpkBhITl.js";import"./createLucideIcon-Teo9AeaP.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{onOpen:n}=c();return o.jsx(o.Fragment,{children:o.jsx(l,{onClick:n,children:"Open Dialog"})})},r=()=>{const{open:n,onToggle:s}=c();return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s,children:"Please Click"}),n?o.jsx(p,{children:"Hey!"}):null]})},t=()=>{const{open:n,onClose:s,onOpen:a}=c({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>a("This is arg"),children:"Open Dialog"}),o.jsx(m,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
