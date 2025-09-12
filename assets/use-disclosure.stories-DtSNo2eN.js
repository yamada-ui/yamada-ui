import{j as o,T as u}from"./iframe-Bn8cMbTR.js";import{u as c}from"./use-disclosure-CbupGkcW.js";import{B as a}from"./button-BuVkzRhm.js";import{M as p}from"./modal-q6Adj3HA.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-JbSDZe-p.js";import"./use-ripple-B-Mo0cfK.js";import"./rings-Di-RwxpC.js";import"./use-modal-CUjB0WyR.js";import"./fade-BxjOQ3bk.js";import"./transition-DpqajPmD.js";import"./popover-CmReBfwG.js";import"./index-D0aT385A.js";import"./index-D737cZ0S.js";import"./index-bAn1OFqz.js";import"./event-D0xwebfJ.js";import"./slide-fade-B6YXJ2Va.js";import"./index-BcSg2jSG.js";import"./use-breakpoint-eUizr5Li.js";import"./use-breakpoint-value-ItGV-DAn.js";import"./use-color-mode-value-bM_ELEgZ.js";import"./fade-scale-ykVFDxAy.js";import"./close-button-CWLh_QZS.js";import"./icon-button-CMJ7K4VL.js";import"./x-icon-CUNqek_Z.js";import"./createLucideIcon-C--YS6xs.js";const z={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:i}=c();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:i,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
