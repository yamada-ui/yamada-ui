import{a,F as l,j as n}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-ac4ac717.js";import{D as B}from"./dialog-5364a287.js";import{B as m}from"./button-e3cfca6e.js";import{T as x}from"./text-55afa3ec.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-ea08dcfd.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-74b59fee.js";import"./index-803a57bb.js";import"./theme-17a0d6cf.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./slide-dab7e081.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-baea46f8.js";import"./forward-ref-8b7d2a6f.js";import"./fade-531960b3.js";import"./close-button-07e9b685.js";import"./use-component-style-fa830b0f.js";import"./icon-cd648dc6.js";import"./index-c817ab90.js";import"./container-portal-e051976e.js";import"./index-d3ea75b5.js";import"./defineProperty-823cf908.js";import"./slide-fade-4f04a3af.js";import"./scale-fade-d29aa4dd.js";import"./loading-bc85ffb6.js";const $={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:o}=p();return a(l,{children:[n(m,{onClick:s,children:"Open Dialog"}),n(B,{isOpen:e,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[n(m,{onClick:s,children:"Please Click"}),e?n(x,{children:"Hey!"}):null]})},c=()=>{const{isOpen:e,onOpen:s,onClose:o}=p({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return a(l,{children:[n(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),n(B,{isOpen:e,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={onClose} header='孫悟空' cancel='わけない' onCancel={onClose} success='わける' onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var d,h,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,D,k;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure({
    onOpen: (...args) => {
      console.log('Args:', args);
    },
    onClose: (...args) => {
      console.log('Args:', args);
    }
  });
  return <>
      <Button onClick={() => onOpen('This is arg')}>Open Dialog</Button>

      <Dialog isOpen={isOpen} onClose={() => onClose('This is arg')} header='孫悟空' cancel='わけない' onCancel={() => onClose('This is arg')} success='わける' onSuccess={() => onClose('This is arg')}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const oo=["basic","useToggle","withChain"];export{oo as __namedExportsOrder,r as basic,$ as default,i as useToggle,c as withChain};
//# sourceMappingURL=use-disclosure.stories-96dca7b5.js.map
