import{a as c,F as a,j as n}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-06oYMTNp.js";import{B as p}from"./button-fXXqKWAC.js";import{D as A}from"./dialog-WsNq4N2P.js";import{T}from"./text-3Ui1tvgC.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-cZuM5uc7.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple--RYc3gC9.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-LsoKV39r.js";import"./loading-61VaiPw8.js";import"./index-R-iIN9fN.js";import"./theme-provider-YeTkYVXb.js";import"./index-_j_eT4tT.js";import"./index-o8caY6Jh.js";import"./icon-bIO0usjb.js";import"./use-component-style-UguhvTUx.js";import"./Combination-8oCz4vin.js";import"./slide-lWvUC_Hg.js";import"./utils-5xs1x2zh.js";import"./fade-UrWuVW5a.js";import"./close-button-vHPhk_et.js";import"./container-portal-y4qjr1wr.js";import"./index-jmm5gWkb.js";import"./defineProperty-LCWoqsbB.js";import"./slide-fade-2ewZrLoL.js";import"./scale-fade-rBDvZlDk.js";const $={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:o,onOpen:e,onClose:u}=l();return c(a,{children:[n(p,{onClick:e,children:"Open Dialog"}),n(A,{isOpen:o,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:o,onToggle:e}=l();return c(a,{children:[n(p,{onClick:e,children:"Please Click"}),o?n(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:o,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[n(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),n(A,{isOpen:o,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
