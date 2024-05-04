import{j as u}from"./jsx-runtime-Nms4Y4qS.js";import{u as c}from"./index-DZZOTJJl.js";import{B as a}from"./button-CLAnfRTj.js";import{D}from"./dialog-j4QGvxdM.js";import{T as B}from"./text-ya_NqogR.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-DB2JyeD8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bp5jvseW.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-BNFWROsb.js";import"./index-D53P4PVU.js";import"./motion-B93Hlbuy.js";import"./motion-DWzc3n8e.js";import"./loading-qhJXVDYI.js";import"./icon-BD9QHthp.js";import"./index-D8MHxai4.js";import"./theme-provider-CVa4tFyh.js";import"./use-component-style-eZPQMXFE.js";import"./index-D5h8F0KJ.js";import"./index-BwIEhPvN.js";import"./Combination-DJN7gWe0.js";import"./slide-CbY9CrhS.js";import"./utils-C5-Q2ph8.js";import"./fade-DhN3JgYU.js";import"./close-button-BMomi7bd.js";import"./container-portal-Dedn3QCZ.js";import"./index-B8XB3FuZ.js";import"./defineProperty-CD0dYXUn.js";import"./inheritsLoose-BNvgJjam.js";import"./slide-fade-BmzJ2k-W.js";import"./scale-fade-DjjwaArw.js";const $={title:"Hooks / useDiclosure"},e=()=>{const{isOpen:o,onOpen:s,onClose:n}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:s}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Please Click"}),o?u.jsx(B,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:s,onClose:n}=c({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:()=>s("This is arg"),children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,C,F;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(F=(C=r.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var d,h,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const uu=["basic","useToggle","withChain"];export{uu as __namedExportsOrder,e as basic,$ as default,r as useToggle,i as withChain};
