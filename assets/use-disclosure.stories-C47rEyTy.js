import{j as o,Q as i,T as j}from"./iframe-C8QXMNnF.js";import{u as a}from"./use-disclosure-BqfhjoHq.js";import{M as O}from"./modal-BehRK98s.js";import"./preload-helper-C1FmrZbK.js";import"./use-modal-D5hcQyzB.js";import"./popover-C0aL2ZD2.js";import"./index-DpZfx1N6.js";import"./index-DUCQ3yh5.js";import"./index-BJO4T4DI.js";import"./index-CSdQ7dcL.js";import"./event-BEMHquWx.js";import"./slide-fade-CzJVdKsB.js";import"./transition-DwQwmHXG.js";import"./fade-scale-CXbj1njH.js";import"./fade-DXTMMtKY.js";const Q={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=a();return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:l,children:"Open Dialog"}),o.jsx(O,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:e,onToggle:n}=a();return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:n,children:"Please Click"}),e?o.jsx(j,{children:"Hey!"}):null]})},t=()=>{const{open:e,onClose:n,onOpen:l}=a({onClose:c=>{console.log("onClose:",c)},onOpen:c=>{console.log("onOpen:",c)}});return o.jsxs(o.Fragment,{children:[o.jsx(i,{onClick:()=>l("This is arg"),children:"Open Dialog"}),o.jsx(O,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:()=>n("This is arg"),onClose:()=>n("This is arg"),onSuccess:()=>n("This is arg")})]})};var p,u,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,C,d;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    open,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>;
}`,...(d=(C=r.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var h,T,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const q=["Basic","Toggle","Chain"];export{s as Basic,t as Chain,r as Toggle,q as __namedExportsOrder,Q as default};
