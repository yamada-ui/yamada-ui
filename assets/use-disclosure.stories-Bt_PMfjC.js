import{j as o,T as p}from"./iframe-CzCJWi2Q.js";import{u as c}from"./use-disclosure-C1rEArtl.js";import{B as l}from"./button-DehxczKB.js";import{M as m}from"./modal-DNcetajd.js";import"./use-ripple-Cto3JHtM.js";import"./rings-DZYkvdi_.js";import"./use-modal-B8dsYrhD.js";import"./fade-Ds2incjs.js";import"./transition-BGdNtrLW.js";import"./popover-3VyoBIIR.js";import"./index-q8QwgtUT.js";import"./index-DzcIk55C.js";import"./index-2gaSCgmu.js";import"./event-BxWFMjlO.js";import"./slide-fade-BijztsU7.js";import"./index-DKVEtqlH.js";import"./use-breakpoint-kMDbih6w.js";import"./use-breakpoint-value-C7XqWH-l.js";import"./use-color-mode-value-cCNJaHKB.js";import"./fade-scale-C07ANrg8.js";import"./close-button-DVj2goID.js";import"./icon-button-DXfsOg5d.js";import"./x-icon-CCwiYMuX.js";import"./createLucideIcon-NwzbYI2T.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{onOpen:n}=c();return o.jsx(o.Fragment,{children:o.jsx(l,{onClick:n,children:"Open Dialog"})})},r=()=>{const{open:n,onToggle:s}=c();return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s,children:"Please Click"}),n?o.jsx(p,{children:"Hey!"}):null]})},t=()=>{const{open:n,onClose:s,onOpen:a}=c({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>a("This is arg"),children:"Open Dialog"}),o.jsx(m,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
