import{j as o,T as u}from"./iframe-CDvKCJeY.js";import{u as i}from"./use-disclosure-CXcPC--n.js";import{B as a}from"./button-CJHWYlLB.js";import{M as p}from"./modal-DRBy79xR.js";import"./use-ripple-BOWtBklS.js";import"./rings-CTwWZ55N.js";import"./use-modal-kOuqBWCR.js";import"./fade-CW_NDHHI.js";import"./transition-CVELWytn.js";import"./popover-CQAU3cpM.js";import"./index-CoUV4hMd.js";import"./index-Dxt9yS7S.js";import"./index-NTRU7Fsv.js";import"./event-DA1u3P-_.js";import"./slide-fade-jktQ9oVt.js";import"./index-BdN8tNZC.js";import"./use-breakpoint-DJL3dOjD.js";import"./use-breakpoint-value-DnHVYPvO.js";import"./use-color-mode-value-et3DRqaV.js";import"./fade-scale-mGeU9hPE.js";import"./close-button-Dt_WUjHv.js";import"./icon-button-BY5_vXRW.js";import"./x-icon-Cl7yPkvf.js";import"./createLucideIcon-DLwdYwoU.js";const q={title:"Hooks / useDisclosure"},s=()=>{const{open:e,onClose:n,onOpen:l}=i();return o.jsxs(o.Fragment,{children:[o.jsx(a,{onClick:l,children:"Open Dialog"}),o.jsx(p,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
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
}`,...t.parameters?.docs?.source}}};const w=["Basic","Toggle","Chain"];export{s as Basic,t as Chain,r as Toggle,w as __namedExportsOrder,q as default};
