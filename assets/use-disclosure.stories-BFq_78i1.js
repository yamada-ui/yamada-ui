import{j as o,T as u}from"./iframe-BHZTlJ0V.js";import{u as i}from"./use-disclosure-ChtgJwpN.js";import{B as a}from"./button-BB2ssYQZ.js";import{M as p}from"./modal-CbVU6oWu.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-CEYjf3L4.js";import"./rings-LKYpvJ7H.js";import"./use-modal-FTxYLUHj.js";import"./fade-B8BF4ywI.js";import"./transition-4ErXAUgo.js";import"./popover-BnP-7biB.js";import"./index-Cmt_1U34.js";import"./index-B5IB_e67.js";import"./index-Di6m6aJF.js";import"./event-BpBfpFn5.js";import"./slide-fade-DMpQUH2f.js";import"./index-DBNyBkxR.js";import"./use-breakpoint-BHTgFfav.js";import"./use-breakpoint-value-DTZaut4a.js";import"./use-color-mode-value-ZthzxX7p.js";import"./fade-scale-SfbXXvhw.js";import"./close-button-BHw4z_nZ.js";import"./icon-button-DctN4AEW.js";import"./x-icon-DAt3WC61.js";import"./createLucideIcon-D8IHT0xS.js";const w={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
