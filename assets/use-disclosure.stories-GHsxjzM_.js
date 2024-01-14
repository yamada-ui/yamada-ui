import{a as c,F as a,j as n}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-n7ruz947.js";import{B as p}from"./button-cMSAhBpk.js";import{D as A}from"./dialog-YmBM9MuN.js";import{T}from"./text-iDDnHZIy.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-_mTQY6PK.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-NMzR3tTC.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-V5SSOO6i.js";import"./loading-MtZqCvSr.js";import"./index-z6pzycMb.js";import"./theme-provider-XorC6D0y.js";import"./index-Qpz5-nu_.js";import"./index-nv1zPk__.js";import"./icon-_12WOtQg.js";import"./use-component-style-lJBCD4Hi.js";import"./Combination-8oCz4vin.js";import"./slide-D8-Mvks_.js";import"./utils-PqxgXkDx.js";import"./fade--2K3JlEN.js";import"./close-button-bBA8Anc2.js";import"./container-portal-2rZsAQsm.js";import"./index-jmm5gWkb.js";import"./defineProperty-LCWoqsbB.js";import"./slide-fade-NVrmNfm2.js";import"./scale-fade-9BW0d5Vb.js";const $={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:o,onOpen:e,onClose:u}=l();return c(a,{children:[n(p,{onClick:e,children:"Open Dialog"}),n(A,{isOpen:o,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:e}=l();return c(a,{children:[n(p,{onClick:e,children:"Please Click"}),o?n(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[n(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),n(A,{isOpen:o,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
