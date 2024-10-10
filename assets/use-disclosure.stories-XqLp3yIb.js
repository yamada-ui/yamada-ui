import{j as n}from"./extends-CwFRzn3r.js";import{u as a}from"./index-BSZzY47h.js";import{B as l}from"./button-9256ovQJ.js";import{D as x}from"./dialog-o8XSiiHn.js";import{T as D}from"./text-Cf22NS09.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-BPGpAF5Z.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-Cu_bXDXk.js";import"./factory-CKjLh6Qg.js";import"./motion-I-9Hg3gW.js";import"./loading-BJMWU62O.js";import"./icon-BYVaiKtb.js";import"./use-component-style-vGTU0kmU.js";import"./theme-provider-HQUvgn6k.js";import"./use-var-CHlP19MT.js";import"./modal-C9r3GTRX.js";import"./index-BRqXaXJK.js";import"./index-B9JWsFAS.js";import"./Combination-IUp2vs9T.js";import"./fade-B8Y5Vm4j.js";import"./forward-ref-scR1bmHx.js";import"./utils-wKEdAh9y.js";import"./close-button-TCaPA0pi.js";import"./slide-lOE0azmv.js";import"./slide-fade-BEHgxEuP.js";import"./scale-fade-Cv307av9.js";import"./portal-Df1xvvbV.js";import"./index-Drt3gf4w.js";import"./defineProperty-UXmCCx-B.js";import"./inheritsLoose-DR8r8Ogv.js";const $={title:"Hooks / useDisclosure"},e=()=>{const{isOpen:s,onClose:o,onOpen:t}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:t,children:"Open Dialog"}),n.jsx(x,{cancel:"わけない",header:"孫悟空",isOpen:s,success:"わける",onCancel:o,onClose:o,onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:s,onToggle:o}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:o,children:"Please Click"}),s?n.jsx(D,{children:"Hey!"}):null]})},i=()=>{const{isOpen:s,onClose:o,onOpen:t}=a({onClose:(...c)=>{console.log("Args:",c)},onOpen:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:()=>t("This is arg"),children:"Open Dialog"}),n.jsx(x,{cancel:"わけない",header:"孫悟空",isOpen:s,success:"わける",onCancel:()=>o("This is arg"),onClose:()=>o("This is arg"),onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog cancel="わけない" header="孫悟空" isOpen={isOpen} success="わける" onCancel={onClose} onClose={onClose} onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,C,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {isOpen ? <Text>Hey!</Text> : null}
    </>;
}`,...(d=(C=r.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};var h,O,T;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    isOpen,
    onClose,
    onOpen
  } = useDisclosure({
    onClose: (...args: string[]) => {
      console.log("Args:", args);
    },
    onOpen: (...args: string[]) => {
      console.log("Args:", args);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Dialog cancel="わけない" header="孫悟空" isOpen={isOpen} success="わける" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};const nn=["basic","useToggle","withChain"];export{nn as __namedExportsOrder,e as basic,$ as default,r as useToggle,i as withChain};
