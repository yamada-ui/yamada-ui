import{j as a,F as l,a as o}from"./jsx-runtime-03b4ddbf.js";import{u as p}from"./index-2107ab02.js";import{D as B}from"./dialog-7ff35d03.js";import{B as m}from"./button-0fc0cb94.js";import{T as x}from"./text-d5943c82.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./factory-c9bc4a28.js";import"./index-a701aaa0.js";import"./index-85f341f5.js";import"./theme-provider-a03ffa08.js";import"./tslib.es6-90f6c3e8.js";import"./slide-5734d1f8.js";import"./index-033cf86e.js";import"./motion-90200a2f.js";import"./utils-dc7ab2be.js";import"./forward-ref-8b7d2a6f.js";import"./fade-03299fa1.js";import"./close-button-7617767f.js";import"./use-component-style-ab2b35f8.js";import"./icon-e1655999.js";import"./index-f08d32bc.js";import"./container-portal-d8f11cbb.js";import"./index-d3ea75b5.js";import"./extends-90dea224.js";import"./slide-fade-656e79e8.js";import"./scale-fade-bf7f1d92.js";import"./loading-24ec3d24.js";const Y={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:n}=p();return a(l,{children:[o(m,{onClick:s,children:"Open Dialog"}),o(B,{isOpen:e,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[o(m,{onClick:s,children:"Please Click"}),e?o(x,{children:"Hey!"}):null]})},c=()=>{const{isOpen:e,onOpen:s,onClose:n}=p({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return a(l,{children:[o(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),o(B,{isOpen:e,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
    onOpen: (...args: string[]) => {
      console.log('Args:', args);
    },
    onClose: (...args: string[]) => {
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
}`,...(k=(D=c.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const Z=["basic","useToggle","withChain"];export{Z as __namedExportsOrder,r as basic,Y as default,i as useToggle,c as withChain};
//# sourceMappingURL=use-disclosure.stories-00e78249.js.map
