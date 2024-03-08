import{a as c,F as a,j as o}from"./jsx-runtime-5BUNAZ9W.js";import{u as l}from"./index-ZrzgeXfq.js";import{B as p}from"./button-74Rie5Vi.js";import{D as A}from"./dialog-WWQfi5Tc.js";import{T}from"./text-puUo1HSE.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-d4qha7R6.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./forward-ref-A-8Arhkk.js";import"./use-ripple-WbBjk5fz.js";import"./index-eMn_GZVX.js";import"./motion-heeYkzTb.js";import"./motion-v7t8L39m.js";import"./loading-a2VmdJrN.js";import"./index-gPPkT-3X.js";import"./theme-provider-bBWP4weD.js";import"./index-NfIPy_Y6.js";import"./index-Ar4QPYE3.js";import"./icon-hF0n87st.js";import"./use-component-style-d9n8R3cE.js";import"./Combination-DfugsOYv.js";import"./slide-kR1KLKKW.js";import"./utils-h8YOuRWu.js";import"./fade-yWFwjOkj.js";import"./close-button-vaxwjIzp.js";import"./container-portal-0Gk-FyfS.js";import"./index-jmm5gWkb.js";import"./defineProperty-LCWoqsbB.js";import"./inheritsLoose-Y9jOMJLd.js";import"./slide-fade-xX0PRyis.js";import"./scale-fade-xanhiKl-.js";const ou={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:n,onOpen:e,onClose:u}=l();return c(a,{children:[o(p,{onClick:e,children:"Open Dialog"}),o(A,{isOpen:n,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:n,onToggle:e}=l();return c(a,{children:[o(p,{onClick:e,children:"Please Click"}),n?o(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:n,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[o(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),o(A,{isOpen:n,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const nu=["basic","useToggle","withChain"];export{nu as __namedExportsOrder,s as basic,ou as default,r as useToggle,i as withChain};
