import{a,F as l,j as n}from"./jsx-runtime-e6a661ac.js";import{u as p}from"./index-5cf9c010.js";import{D as B}from"./dialog-e0784a08.js";import{B as m}from"./button-73490b67.js";import{T as x}from"./text-c74b4a28.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./theme-2199e320.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./slide-bf3fe3d1.js";import"./index-6bcd17ac.js";import"./motion-fb190baf.js";import"./utils-274130e6.js";import"./forward-ref-c496b87d.js";import"./fade-7e718439.js";import"./close-button-922cce2a.js";import"./use-component-style-277e16ba.js";import"./icon-0982bb38.js";import"./index-44980711.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./defineProperty-823cf908.js";import"./slide-fade-a3d3ee31.js";import"./scale-fade-28d0374c.js";import"./loading-1f9d49b8.js";const oo={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:o}=p();return a(l,{children:[n(m,{onClick:s,children:"Open Dialog"}),n(B,{isOpen:e,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[n(m,{onClick:s,children:"Please Click"}),e?n(x,{children:"Hey!"}):null]})},t=()=>{const{isOpen:e,onOpen:s,onClose:o}=p({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return a(l,{children:[n(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),n(B,{isOpen:e,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(O=(h=i.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,D,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const no=["basic","useToggle","withChain"];export{no as __namedExportsOrder,r as basic,oo as default,i as useToggle,t as withChain};
//# sourceMappingURL=use-disclosure.stories-d510692d.js.map
