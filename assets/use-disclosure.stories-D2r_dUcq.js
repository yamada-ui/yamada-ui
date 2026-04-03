import{j as o,B as i,T as u}from"./iframe-Gd2wA5UH.js";import{u as a}from"./use-disclosure-JBHrDYTC.js";import{M as p}from"./modal-DH7Vs7QP.js";import"./preload-helper-PPVm8Dsz.js";import"./use-modal-BmR0N3EH.js";import"./popover-CkMXClLp.js";import"./index-CP3PE3DO.js";import"./index-FPzRM6JW.js";import"./index-BIztub15.js";import"./index-BAVD1pKw.js";import"./event-DnNdx6hE.js";import"./slide-fade-BMNR-h3_.js";import"./transition-_cZ26p0R.js";import"./fade-scale-dldhs_Gb.js";import"./fade-SlIj8boG.js";const f={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=a();return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
