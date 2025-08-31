import{j as o,T as u}from"./iframe-COpE3uSe.js";import{u as c}from"./use-disclosure-DqRmIBlX.js";import{B as a}from"./button-C1iRx7Aw.js";import{M as p}from"./modal-AyxdXNPc.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";import"./use-modal-DgmtS6M_.js";import"./fade-Dx1nX7wI.js";import"./transition-Cw2RDG12.js";import"./popover-DNVIrjJp.js";import"./index-jMnWbNjz.js";import"./index-DAMUsjjL.js";import"./index-EOumB-jG.js";import"./event-CGdgg0hP.js";import"./slide-fade-ChbR9eU8.js";import"./index-rIgF0o0K.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";import"./fade-scale-BTAUSPoz.js";import"./close-button-Ch7r7its.js";import"./icon-button-BjF-Bm1-.js";import"./x-icon-DAFzbT0J.js";import"./createLucideIcon-B04U3mbS.js";const z={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:i}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:i,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
