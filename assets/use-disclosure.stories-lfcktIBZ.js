import{j as o,Q as i,T as u}from"./iframe-DyywAl9M.js";import{u as a}from"./use-disclosure-Dt3eLHwc.js";import{M as p}from"./modal-B73zq1fn.js";import"./preload-helper-PPVm8Dsz.js";import"./use-modal-BdnzOaAH.js";import"./popover-DsgsLmqt.js";import"./index-dqh6NKh7.js";import"./index-DicEFgu4.js";import"./index-BbvlZnlb.js";import"./index-REjHn7K4.js";import"./event-CBin4f3O.js";import"./slide-fade-dNPklWdN.js";import"./transition-DkqPcRr1.js";import"./fade-scale-p-hgm2x3.js";import"./fade-0kT0kgdz.js";const f={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=a();return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:e,onToggle:n}=a();return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:n,children:"Please Click"}),e?o.jsx(u,{children:"Hey!"}):null]})},t=()=>{const{open:e,onClose:n,onOpen:l}=a({onClose:c=>{console.log("onClose:",c)},onOpen:c=>{console.log("onOpen:",c)}});return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:()=>l("This is arg"),children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
}`,...t.parameters?.docs?.source}}};const v=["Basic","Toggle","Chain"];export{s as Basic,t as Chain,r as Toggle,v as __namedExportsOrder,f as default};
