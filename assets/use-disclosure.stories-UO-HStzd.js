import{j as a,F as l,a as o}from"./jsx-runtime-yA-pgArV.js";import{u as p}from"./index-FxO9NTK8.js";import{B as m}from"./button-9VUarSO2.js";import{D as B}from"./dialog-OuvsP4wp.js";import{T as x}from"./text--Mf9pjVU.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-LMyrE5lk.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./loading-d5fto5LV.js";import"./index-Fmh4I4_s.js";import"./theme-provider-JJMfppNb.js";import"./index-_Bu2kJOQ.js";import"./index-sG_FZBUS.js";import"./icon-U1tgplMe.js";import"./use-component-style-KGYGTazl.js";import"./component-G3mliOEp.js";import"./slide-FYXKvt-I.js";import"./index-xpiohnTl.js";import"./motion-XoqD_6Np.js";import"./utils-oLTI8GDX.js";import"./fade-OQOS2KZ6.js";import"./close-button-dAy_qqj3.js";import"./container-portal-26CUbQuD.js";import"./index-xIHD0DlW.js";import"./extends-Wb-Reoz1.js";import"./slide-fade-iMVCJtgo.js";import"./scale-fade-m3hysnV7.js";const Z={title:"Hooks / useDiclosure"},r=()=>{const{isOpen:e,onOpen:s,onClose:n}=p();return a(l,{children:[o(m,{onClick:s,children:"Open Dialog"}),o(B,{isOpen:e,onClose:n,header:"孫悟空",cancel:"わけない",onCancel:n,success:"わける",onSuccess:n,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{isOpen:e,onToggle:s}=p();return a(l,{children:[o(m,{onClick:s,children:"Please Click"}),e?o(x,{children:"Hey!"}):null]})},t=()=>{const{isOpen:e,onOpen:s,onClose:n}=p({onOpen:(...c)=>{console.log("Args:",c)},onClose:(...c)=>{console.log("Args:",c)}});return a(l,{children:[o(m,{onClick:()=>s("This is arg"),children:"Open Dialog"}),o(B,{isOpen:e,onClose:()=>n("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>n("This is arg"),success:"わける",onSuccess:()=>n("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var u,g,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(k=(D=t.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};const $=["basic","useToggle","withChain"];export{$ as __namedExportsOrder,r as basic,Z as default,i as useToggle,t as withChain};
