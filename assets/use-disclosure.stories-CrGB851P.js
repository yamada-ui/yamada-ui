import{j as u}from"./jsx-runtime-X2b_N9AH.js";import{u as c}from"./index-1abRQEVN.js";import{B as a}from"./button-Dg1r1tLc.js";import{D}from"./dialog-VmWodzek.js";import{T as B}from"./text-RJq6WCVA.js";import"./index-uCp2LrAq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-eGqOwxJN.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-xaNYqS-v.js";import"./forward-ref-Dr5Hqd9a.js";import"./use-ripple-BL9M4SmM.js";import"./index-DSHhgXSs.js";import"./motion-BNFRb361.js";import"./motion-D9P5qI5Q.js";import"./loading-RZrS9-iD.js";import"./icon-C4f_KbJN.js";import"./index-BAZmNyaF.js";import"./theme-provider-DBZuijdl.js";import"./use-component-style-DAcjH3Cb.js";import"./index-BOin0i7A.js";import"./index-7pS6GFaA.js";import"./Combination-nrDmEbEK.js";import"./component-IvP1ueaU.js";import"./slide-Eb93SCSu.js";import"./utils-BvetsyWM.js";import"./fade-BIWVrN_n.js";import"./close-button-BMtw8-jq.js";import"./container-portal-BaP6G2_r.js";import"./index-CqS9fqXy.js";import"./defineProperty-CF1rYIsN.js";import"./inheritsLoose-B8YXPC31.js";import"./slide-fade-2zDTdsfJ.js";import"./scale-fade-D5z6P0Jx.js";const uu={title:"Hooks / useDiclosure"},e=()=>{const{isOpen:n,onOpen:s,onClose:o}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Open Dialog"}),u.jsx(D,{isOpen:n,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:n,onToggle:s}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Please Click"}),n?u.jsx(B,{children:"Hey!"}):null]})},i=()=>{const{isOpen:n,onOpen:s,onClose:o}=c({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:()=>s("This is arg"),children:"Open Dialog"}),u.jsx(D,{isOpen:n,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};const ou=["basic","useToggle","withChain"];export{ou as __namedExportsOrder,e as basic,uu as default,r as useToggle,i as withChain};
