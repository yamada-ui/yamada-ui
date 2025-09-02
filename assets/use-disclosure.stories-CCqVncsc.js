import{j as o,T as u}from"./iframe-zUpmkGgl.js";import{u as c}from"./use-disclosure-3nrGeSn1.js";import{B as a}from"./button-BSJyaaef.js";import{M as p}from"./modal-VAmKzH8A.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";import"./use-modal-DMLqXon5.js";import"./fade-CouizlhH.js";import"./transition-BWA4KZ39.js";import"./popover-CbHmS7oa.js";import"./index-BkfO7WzD.js";import"./index-B5DbfJPc.js";import"./index-CEYmrBXe.js";import"./event-CX1pcGw3.js";import"./slide-fade-Bu6fwAcF.js";import"./index-Dh0dtizH.js";import"./use-breakpoint-rlMFjuDB.js";import"./use-breakpoint-value-CBhdCsru.js";import"./use-color-mode-value-DvQIHb0C.js";import"./fade-scale-BL1fbRuK.js";import"./close-button-5wnkVucO.js";import"./icon-button-DnSVOKtD.js";import"./x-icon-CLxBNWiF.js";import"./createLucideIcon-D8b2f8gg.js";const z={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:i}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:i,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
