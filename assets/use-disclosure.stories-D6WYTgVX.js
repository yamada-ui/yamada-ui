import{j as o,T as p}from"./iframe-Dqv37jui.js";import{u as c}from"./use-disclosure-LBMw-9EN.js";import{B as l}from"./button-C8c51KbT.js";import{M as m}from"./modal-BJXbmAfo.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";import"./use-modal-DpS9SDil.js";import"./fade-Cm5RFf8Y.js";import"./transition-BO6mxl9Z.js";import"./popover-CWOd5ZuN.js";import"./index-Dglq9CnQ.js";import"./index-DV2BNl-B.js";import"./index-BeFVXBdh.js";import"./event-Dj3rLfFf.js";import"./slide-fade-CigPds8E.js";import"./index-DPuk35MY.js";import"./use-breakpoint-BI3OQxi_.js";import"./use-breakpoint-value-BmkGzUn3.js";import"./use-color-mode-value-D_U_yHOc.js";import"./fade-scale-DBiRiJFe.js";import"./close-button-BTDOGmwG.js";import"./icon-button-B2blonpm.js";import"./x-icon-CcpzZ4LQ.js";import"./createLucideIcon-9w-Kw71s.js";const q={title:"Hooks / useDisclosure"},e=()=>{const{onOpen:n}=c();return o.jsx(o.Fragment,{children:o.jsx(l,{onClick:n,children:"Open Dialog"})})},r=()=>{const{open:n,onToggle:s}=c();return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:s,children:"Please Click"}),n?o.jsx(p,{children:"Hey!"}):null]})},t=()=>{const{open:n,onClose:s,onOpen:a}=c({onClose:(...i)=>{console.log("Args:",i)},onOpen:(...i)=>{console.log("Args:",i)}});return o.jsxs(o.Fragment,{children:[o.jsx(l,{onClick:()=>a("This is arg"),children:"Open Dialog"}),o.jsx(m,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:"わけない",open:n,success:"わける",title:"孫悟空",onCancel:()=>s("This is arg"),onClose:()=>s("This is arg"),onSuccess:()=>s("This is arg")})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const {
    // open,
    // onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      {/* TODO: Fix this */}
      {/* <Dialog
        cancel="わけない"
        header="孫悟空"
        open={open}
        success="わける"
        onCancel={onClose}
        onClose={onClose}
        onSuccess={onClose}
       >
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
       </Dialog> */}
    </>;
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
  } = useDisclosure({
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    },
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")} />
    </>;
}`,...t.parameters?.docs?.source}}};const v=["Basic","Toggle","Chain"];export{e as Basic,t as Chain,r as Toggle,v as __namedExportsOrder,q as default};
