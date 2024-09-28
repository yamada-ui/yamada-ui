import{j as n}from"./extends-CwFRzn3r.js";import{u as a}from"./index-CFjuI6Rx.js";import{B as l}from"./button-Bx26J9Y6.js";import{D as x}from"./dialog-Dc5ViFoy.js";import{T as D}from"./text-DR0EVEsm.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CYpx3TMG.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-ug6Wud9C.js";import"./factory-CY7vhjKt.js";import"./motion-I-9Hg3gW.js";import"./loading-DndL1UZp.js";import"./icon-FPUxZQsz.js";import"./use-component-style-CfUS8Ki1.js";import"./theme-provider-BZKkW4ID.js";import"./use-var-B0r_2U-t.js";import"./modal-footer-qTc4EMdP.js";import"./index-eyuXmfUh.js";import"./index-CDflVp_n.js";import"./Combination-IUp2vs9T.js";import"./fade-BscQrTHq.js";import"./forward-ref-scR1bmHx.js";import"./utils-3QxJ8ZLx.js";import"./close-button-CZR8M-ik.js";import"./slide-CGR_lz1t.js";import"./slide-fade-RjiVa2b9.js";import"./scale-fade-1_0-ywnN.js";import"./portal-DfxMOg4r.js";import"./index-B8XB3FuZ.js";import"./defineProperty-UXmCCx-B.js";import"./inheritsLoose-DR8r8Ogv.js";const $={title:"Hooks / useDisclosure"},r=()=>{const{isOpen:s,onOpen:e,onClose:o}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:e,children:"Open Dialog"}),n.jsx(x,{isOpen:s,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:s,onToggle:e}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:e,children:"Please Click"}),s?n.jsx(D,{children:"Hey!"}):null]})},t=()=>{const{isOpen:s,onOpen:e,onClose:o}=a({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:()=>e("This is arg"),children:"Open Dialog"}),n.jsx(x,{isOpen:s,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header="孫悟空" cancel="わけない" onCancel={onClose} success="わける" onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,C,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(d=(C=i.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var h,O,T;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure({
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    },
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={() => onClose("This is arg")} header="孫悟空" cancel="わけない" onCancel={() => onClose("This is arg")} success="わける" onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(T=(O=t.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const nn=["basic","useToggle","withChain"];export{nn as __namedExportsOrder,r as basic,$ as default,i as useToggle,t as withChain};
