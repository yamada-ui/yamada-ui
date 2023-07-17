import{j as a,F as l,a as n}from"./jsx-runtime-4d953e71.js";import{u as p}from"./index-6fc38565.js";import{B as m}from"./button-6d999cdb.js";import{D as B}from"./dialog-41685227.js";import{T as x}from"./text-afdead5d.js";import"./index-de62f0e0.js";import"./factory-07cc9cf0.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-0bdd66d1.js";import"./theme-326cd56d.js";import"./forward-ref-396247d7.js";import"./loading-520f6824.js";import"./index-ac0f8f33.js";import"./index-1532491c.js";import"./index-f989dc93.js";import"./icon-5ed183e8.js";import"./use-component-style-a395c77f.js";import"./Combination-8cb803a5.js";import"./tslib.es6-90f6c3e8.js";import"./slide-34fa851b.js";import"./index-9f37637c.js";import"./motion-d07cf02b.js";import"./utils-e0f638b3.js";import"./fade-5cb89899.js";import"./close-button-5831b830.js";import"./container-portal-1a9228bd.js";import"./index-75381731.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./inheritsLoose-c82a83d4.js";import"./slide-fade-31910bd4.js";import"./scale-fade-0786fd42.js";const $={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:o}=p();return a(l,{children:[n(m,{onClick:s,children:"Open Dialog"}),n(B,{isOpen:e,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[n(m,{onClick:s,children:"Please Click"}),e?n(x,{children:"Hey!"}):null]})},c=()=>{const{isOpen:e,onOpen:s,onClose:o}=p({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return a(l,{children:[n(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),n(B,{isOpen:e,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=use-disclosure.stories-ce51d29e.js.map
