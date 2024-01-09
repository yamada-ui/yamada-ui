import{a as c,F as a,j as n}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-fHDnOWnT.js";import{B as p}from"./button-F5n5_bzK.js";import{D as A}from"./dialog-AaXx6NTM.js";import{T}from"./text-3hpqDbhU.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-Ddmu4EkR.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-X0fM5X0u.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-z0k3I5F3.js";import"./loading-WkkQcnq4.js";import"./index-qNazZ1dd.js";import"./theme-provider-ePNg-PER.js";import"./index-4KtNWCXs.js";import"./index-Jxs9usl9.js";import"./icon-R3NodgbI.js";import"./use-component-style-zqeBCG90.js";import"./Combination-8oCz4vin.js";import"./slide-T2Mp9BRh.js";import"./utils-RzNMSjXS.js";import"./fade-DEWwiATF.js";import"./close-button-dEBEBSoK.js";import"./container-portal-NwpTnrUg.js";import"./index-jmm5gWkb.js";import"./defineProperty-LCWoqsbB.js";import"./slide-fade-6x5GQZrf.js";import"./scale-fade-tsdz-DPz.js";const $={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:o,onOpen:e,onClose:u}=l();return c(a,{children:[n(p,{onClick:e,children:"Open Dialog"}),n(A,{isOpen:o,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:e}=l();return c(a,{children:[n(p,{onClick:e,children:"Please Click"}),o?n(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[n(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),n(A,{isOpen:o,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var F,d,h;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(h=(d=r.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var O,D,B;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const uu=["basic","useToggle","withChain"];export{uu as __namedExportsOrder,s as basic,$ as default,r as useToggle,i as withChain};
