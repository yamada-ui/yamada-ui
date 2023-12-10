import{a,F as l,j as n}from"./jsx-runtime-TtYKBvr-.js";import{u as p}from"./index-czoUJTU6.js";import{B as m}from"./button-Qh4ZXxa_.js";import{D as B}from"./dialog-E1Dn5kkm.js";import{T as x}from"./text-HhFMRBG-.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-BpP3TutA.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-XZ8Hx3Ay.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-SXgmxp4L.js";import"./loading-An8bmO0F.js";import"./index-3Y8obiWq.js";import"./theme-provider-RZopMVJP.js";import"./index-c2grodQ_.js";import"./index-spaFW0BD.js";import"./icon-C1O_Nmpw.js";import"./use-component-style-cxLt7Ns7.js";import"./component-G3mliOEp.js";import"./slide-MOTl1ya7.js";import"./utils-g9VGj7JG.js";import"./fade-BGTR3Ing.js";import"./close-button-hib_kAYl.js";import"./container-portal-rn_JBcyJ.js";import"./index-xIHD0DlW.js";import"./extends-Wb-Reoz1.js";import"./slide-fade-890EqpEs.js";import"./scale-fade-lfXQbwaG.js";const oo={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:o}=p();return a(l,{children:[n(m,{onClick:s,children:"Open Dialog"}),n(B,{isOpen:e,onClose:o,header:"孫悟空",cancel:"わけない",onCancel:o,success:"わける",onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[n(m,{onClick:s,children:"Please Click"}),e?n(x,{children:"Hey!"}):null]})},t=()=>{const{isOpen:e,onOpen:s,onClose:o}=p({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return a(l,{children:[n(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),n(B,{isOpen:e,onClose:()=>o("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>o("This is arg"),success:"わける",onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const no=["basic","useToggle","withChain"];export{no as __namedExportsOrder,r as basic,oo as default,i as useToggle,t as withChain};
