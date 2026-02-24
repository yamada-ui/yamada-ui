import{j as o,Q as a,T as j}from"./iframe-B_86_9qz.js";import{u as i}from"./use-disclosure-dRBrZqCW.js";import{M as O}from"./modal-B9sk_cHn.js";import"./preload-helper-C1FmrZbK.js";import"./use-modal-DIidbc_0.js";import"./popover-CEzPnhyG.js";import"./index-BQih90Ur.js";import"./index-DXEN4v7Z.js";import"./index-pt1-ZGTX.js";import"./event-iupogAX5.js";import"./slide-fade-BKakXAt3.js";import"./transition-CI7GJut2.js";import"./fade-scale-DXglGw3b.js";import"./fade-CCGun8lL.js";const _={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:t}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:t,children:"Open Dialog"}),o.jsx(O,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
