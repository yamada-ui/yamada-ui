import{j as u}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-CIjPhCfQ.js";import{u as c}from"./index-DS3HKw2q.js";import{B as a}from"./button-rS3w-u9-.js";import{D}from"./dialog-iEG4ddVZ.js";import{T as B}from"./text-rr6Q65aJ.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-CJjTzqIw.js";import"./forward-ref-BmTAT9U5.js";import"./use-ripple-wDY3RbRD.js";import"./index-CSNxn7VS.js";import"./motion-Ceh1Zhyk.js";import"./motion-B0bI6Xcj.js";import"./loading-BQdsdx3B.js";import"./icon-932iDb3I.js";import"./index-DARK8rH5.js";import"./theme-provider-QhVoByOm.js";import"./use-component-style-BHPJug4L.js";import"./index-Br_odY0O.js";import"./index-DhPU70lj.js";import"./Combination--D52Dw1Q.js";import"./component-o6OrGXrC.js";import"./slide-C_79Tyct.js";import"./utils-BIOBGn56.js";import"./fade-DEkLJJXH.js";import"./close-button-DgNeJdEj.js";import"./container-portal-CH8_15h1.js";import"./index-B8XB3FuZ.js";import"./defineProperty-CF1rYIsN.js";import"./inheritsLoose-B8YXPC31.js";import"./slide-fade-BeKQgcMH.js";import"./scale-fade-BtEYc4i1.js";const $={title:"Hooks / useDiclosure"},e=()=>{const{isOpen:o,onOpen:s,onClose:n}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:s}=c();return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:s,children:"Please Click"}),o?u.jsx(B,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:s,onClose:n}=c({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return u.jsxs(u.Fragment,{children:[u.jsx(a,{onClick:()=>s("This is arg"),children:"Open Dialog"}),u.jsx(D,{isOpen:o,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var l,p,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
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
