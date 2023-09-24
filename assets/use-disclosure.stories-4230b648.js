import{a,F as l,j as n}from"./jsx-runtime-29545a09.js";import{u as p}from"./index-8946f17c.js";import{D as B}from"./dialog-7ef54464.js";import{B as m}from"./button-900c3cb1.js";import{T as x}from"./text-3eddeed3.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-3e6420ff.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./index-f3546514.js";import"./index-bd23768e.js";import"./theme-f3d0af46.js";import"./Combination-14beb162.js";import"./tslib.es6-90f6c3e8.js";import"./slide-3647ceab.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-f00ed058.js";import"./forward-ref-8b7d2a6f.js";import"./fade-d6ea0302.js";import"./close-button-9cffda7a.js";import"./use-component-style-fb710021.js";import"./icon-2298db64.js";import"./index-d953af92.js";import"./container-portal-ebea413f.js";import"./index-d3ea75b5.js";import"./slide-fade-d0484666.js";import"./scale-fade-b8499830.js";import"./loading-a8f76bf0.js";const Z={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:o}=p();return a(l,{children:[n(m,{onClick:s,children:"Open Dialog"}),n(B,{isOpen:e,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[n(m,{onClick:s,children:"Please Click"}),e?n(x,{children:"Hey!"}):null]})},c=()=>{const{isOpen:e,onOpen:s,onClose:o}=p({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return a(l,{children:[n(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),n(B,{isOpen:e,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const $=["basic","useToggle","withChain"];export{$ as __namedExportsOrder,r as basic,Z as default,i as useToggle,c as withChain};
//# sourceMappingURL=use-disclosure.stories-4230b648.js.map
