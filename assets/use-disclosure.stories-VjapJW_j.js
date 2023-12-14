import{a as c,F as a,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as l}from"./index-zbTs5DHp.js";import{B as p}from"./button-KH2_YlIF.js";import{D as A}from"./dialog-NGL_3mzg.js";import{T}from"./text-8vwqvLz2.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-xOnmJ4_k.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-vFs2N3lI.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-T7wh5Xor.js";import"./loading-XrRp0hhF.js";import"./index-Ya3bZDsJ.js";import"./theme-provider-YFsjp2SR.js";import"./index-xoGZiekO.js";import"./index-Mbccz9Tu.js";import"./icon-TzdJ8lpu.js";import"./use-component-style-jaCuodUa.js";import"./component-G3mliOEp.js";import"./slide-ae23z9wy.js";import"./utils-AVGYXknw.js";import"./fade-LK5a6GMM.js";import"./close-button-67YWK-fw.js";import"./container-portal-UxAMZgtD.js";import"./index-xIHD0DlW.js";import"./inheritsLoose-lRRTvJTO.js";import"./slide-fade-_wwhEM5w.js";import"./scale-fade-15ryW12l.js";const uu={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:n,onOpen:e,onClose:u}=l();return c(a,{children:[o(p,{onClick:e,children:"Open Dialog"}),o(A,{isOpen:n,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:n,onToggle:e}=l();return c(a,{children:[o(p,{onClick:e,children:"Please Click"}),n?o(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:n,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[o(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),o(A,{isOpen:n,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const ou=["basic","useToggle","withChain"];export{ou as __namedExportsOrder,s as basic,uu as default,r as useToggle,i as withChain};
