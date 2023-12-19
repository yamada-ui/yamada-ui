import{a as c,F as a,j as o}from"./jsx-runtime-TtYKBvr-.js";import{u as l}from"./index-_8Bmwy7i.js";import{B as p}from"./button-cSzEQhSn.js";import{D as A}from"./dialog-3hRjuidV.js";import{T}from"./text-dQvy8j4x.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./factory-LHs-Bkmb.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./forward-ref-6T0UNPU-.js";import"./use-ripple-hE5BRJTs.js";import"./index-GPdqE8CR.js";import"./motion-AgWUVtfu.js";import"./motion-HWUA2jNq.js";import"./loading-t4SoIc4G.js";import"./index-S2htefC9.js";import"./theme-provider-AD5gKQ6i.js";import"./index-OsV4SKtw.js";import"./index-Z94ctYOZ.js";import"./icon-lGxzm-PJ.js";import"./use-component-style-eqg6O7Tm.js";import"./component-G3mliOEp.js";import"./slide-osqhD0XC.js";import"./utils-C-nC6PHZ.js";import"./fade-d5sVglrO.js";import"./close-button-TAHFiApU.js";import"./container-portal-wvFwNyEy.js";import"./index-xIHD0DlW.js";import"./inheritsLoose-lRRTvJTO.js";import"./slide-fade-RFNgJp4c.js";import"./scale-fade-sdcGcvy1.js";const uu={title:"Hooks / useDiclosure"},s=()=>{const{isOpen:n,onOpen:e,onClose:u}=l();return c(a,{children:[o(p,{onClick:e,children:"Open Dialog"}),o(A,{isOpen:n,onClose:u,header:"孫悟空",cancel:"わけない",onCancel:u,success:"わける",onSuccess:u,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:n,onToggle:e}=l();return c(a,{children:[o(p,{onClick:e,children:"Please Click"}),n?o(T,{children:"Hey!"}):null]})},i=()=>{const{isOpen:n,onOpen:e,onClose:u}=l({onOpen:(...t)=>{console.log("Args:",t)},onClose:(...t)=>{console.log("Args:",t)}});return c(a,{children:[o(p,{onClick:()=>e("This is arg"),children:"Open Dialog"}),o(A,{isOpen:n,onClose:()=>u("This is arg"),header:"孫悟空",cancel:"わけない",onCancel:()=>u("This is arg"),success:"わける",onSuccess:()=>u("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var m,g,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
