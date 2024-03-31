import{j as u}from"./jsx-runtime-CKrituN3.js";import{u as c}from"./index-B_ZeHhCe.js";import{B as a}from"./button-oNOtr6rX.js";import{D}from"./dialog-B9OWkc7z.js";import{T as B}from"./text-CY2A-aql.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-DKdOmnTE.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./forward-ref-DuAegr0M.js";import"./use-ripple-CmSVpGdD.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CLgphBsa.js";import"./loading-wACCLo5l.js";import"./index-CdrX07di.js";import"./theme-provider-6JRwGmsH.js";import"./index-mdwqubC6.js";import"./index-5LWoB8xm.js";import"./icon-1JWgpStP.js";import"./use-component-style-CM81S9bB.js";import"./Combination-DlzjZhkT.js";import"./slide-QP6mCrsr.js";import"./utils-Bs-IWrvS.js";import"./fade-DTN3xAFK.js";import"./close-button-0-3R9bmA.js";import"./container-portal-D2xVMWUg.js";import"./index-BtM5VmRH.js";import"./defineProperty-oP4RI-GC.js";import"./slide-fade-DSkGhpsW.js";import"./scale-fade-BKc-0Sur.js";const Z={title:"Hooks / useDiclosure"},e=()=>{const{isOpen:o,onOpen:s,onClose:n}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:s}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Please Click"}),o?u.jsx(B,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:s,onClose:n}=c({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:()=>s("This is arg"),children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const $=["basic","useToggle","withChain"];export{$ as __namedExportsOrder,e as basic,Z as default,r as useToggle,i as withChain};
