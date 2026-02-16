import{j as o,Q as a,T as j}from"./iframe-Bh9OJiMa.js";import{u as i}from"./use-disclosure-BIhcLmn4.js";import{M as O}from"./modal-BQgzp8j6.js";import"./preload-helper-C1FmrZbK.js";import"./use-modal-BLO9cM8C.js";import"./popover-D_wSxUaV.js";import"./index-DupE20-r.js";import"./index-Bzsm2wkF.js";import"./index-9337QP8d.js";import"./event-DM2KZhP3.js";import"./slide-fade-Dh-Frf9q.js";import"./transition-DnNDhiYV.js";import"./fade-scale-D-3hOjPB.js";import"./fade-Dk434FhA.js";const _={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:t}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:t,children:"Open Dialog"}),o.jsx(O,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:e,success:"わける",title:"孫悟空",onCancel:n,onClose:n,onSuccess:n})]})},r=()=>{const{open:e,onToggle:n}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:n,children:"Please Click"}),e?o.jsx(j,{children:"Hey!"}):null]})},l=()=>{const{open:e,onClose:n,onOpen:t}=i({onClose:c=>{console.log("onClose:",c)},onOpen:c=>{console.log("onOpen:",c)}});return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:()=>t("This is arg"),children:"Open Dialog"}),o.jsx(O,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
}`,...(d=(C=r.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var h,T,x;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const Q=["Basic","Toggle","Chain"];export{s as Basic,l as Chain,r as Toggle,Q as __namedExportsOrder,_ as default};
