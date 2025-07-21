import{j as o,T as m}from"./iframe-BbB59fLB.js";import{u as l}from"./use-disclosure-C1hw0230.js";import{B as a}from"./button-C7yiHaiH.js";import{M as p}from"./modal-B56LQJT1.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";import"./use-modal-BzD597I7.js";import"./fade-Cg78lHyM.js";import"./transition-Bz5hSF40.js";import"./popover-DJgZdrj7.js";import"./index-BtJNXXBu.js";import"./index-BfD6Scyj.js";import"./index-CACjuGj1.js";import"./event-qMMKDYUE.js";import"./slide-fade-D9la6OPs.js";import"./index-C-Jh1PQi.js";import"./use-breakpoint-CIqEKCzG.js";import"./use-breakpoint-value-DwWi_T2I.js";import"./use-color-mode-value-DJWSrxpj.js";import"./fade-scale-QzWhc2bC.js";import"./close-button-CLzghRy3.js";import"./icon-button-B48cT_t-.js";import"./x-icon-6cA71kZ4.js";import"./createLucideIcon-BfIMf7K-.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{open:s,onClose:n,onOpen:c}=l();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:c,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:s,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:s,onToggle:n}=l();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),s?o.jsx(m,{children:"Hey!"}):null]})},t=()=>{const{open:s,onClose:n,onOpen:c}=l({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>c("This is arg"),children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:s,success:"わける",title:"孫悟空",onCancel:()=>n("This is arg"),onClose:()=>n("This is arg"),onSuccess:()=>n("This is arg")})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
