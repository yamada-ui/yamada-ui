import{j as o,T as p}from"./iframe-Cn-KGvUL.js";import{u as c}from"./use-disclosure-YGf02iCc.js";import{B as l}from"./button-C4DORSB8.js";import{M as m}from"./modal-BuhZbq82.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";import"./use-modal-DOqDIpSQ.js";import"./fade-13_mecHx.js";import"./transition-D_53AchU.js";import"./popover-Bwu1WZpn.js";import"./index-0VZIcMOX.js";import"./index-DaorWep8.js";import"./index-B2sNKoxK.js";import"./event-BKgKqnar.js";import"./slide-fade-CsJj_6_c.js";import"./index-Dzj2ZL1b.js";import"./use-breakpoint-GfC1FdYw.js";import"./use-breakpoint-value-CSnHtgSh.js";import"./use-color-mode-value-Rtca59em.js";import"./fade-scale-B3HdtM8Z.js";import"./close-button-DG6JO1_d.js";import"./icon-button-CnBlN9Ks.js";import"./x-icon-IIj9uYou.js";import"./createLucideIcon-CiWl1mji.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{onOpen:n}=c();return o.jsx(o.Fragment,{children:o.jsx(l,{onClick:n,children:"Open Dialog"})})},r=()=>{const{open:n,onToggle:s}=c();return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s,children:"Please Click"}),n?o.jsx(p,{children:"Hey!"}):null]})},t=()=>{const{open:n,onClose:s,onOpen:a}=c({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>a("This is arg"),children:"Open Dialog"}),o.jsx(m,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
