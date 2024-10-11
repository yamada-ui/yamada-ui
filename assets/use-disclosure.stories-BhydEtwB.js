import{j as n}from"./extends-CwFRzn3r.js";import{u as a}from"./index-CdVvibsY.js";import{B as l}from"./button-DIEsmS57.js";import{D as x}from"./dialog-DwT9nKOw.js";import{T as D}from"./text-CdDC9Ji7.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-uBtAHRUq.js";import"./forward-ref-BWI-Phbn.js";import"./use-ripple-B-yka01P.js";import"./factory-BoNL08IU.js";import"./motion-I-9Hg3gW.js";import"./loading-B8wvkUDD.js";import"./icon-fUKD81HD.js";import"./use-component-style-Dk4hKw8J.js";import"./theme-provider-CXgbrDrx.js";import"./use-var-OedIQrNj.js";import"./modal-Congx5Q1.js";import"./index-Dh2DJXhk.js";import"./index-xmsMNee1.js";import"./Combination-IUp2vs9T.js";import"./fade-BUs5UviT.js";import"./forward-ref-scR1bmHx.js";import"./utils-CZR-v0D9.js";import"./close-button-C86qv8Qn.js";import"./slide-S57I87pi.js";import"./slide-fade-B_1RBE5b.js";import"./scale-fade-BS37GZ5e.js";import"./portal-DePa0xuj.js";import"./index-Drt3gf4w.js";import"./defineProperty-UXmCCx-B.js";import"./inheritsLoose-DR8r8Ogv.js";const $={title:"Hooks / useDisclosure"},e=()=>{const{isOpen:s,onClose:o,onOpen:t}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:t,children:"Open Dialog"}),n.jsx(x,{cancel:"わけない",header:"孫悟空",isOpen:s,success:"わける",onCancel:o,onClose:o,onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},r=()=>{const{isOpen:s,onToggle:o}=a();return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:o,children:"Please Click"}),s?n.jsx(D,{children:"Hey!"}):null]})},i=()=>{const{isOpen:s,onClose:o,onOpen:t}=a({onClose:(...c)=>{console.log("Args:",c)},onOpen:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(l,{onClick:()=>t("This is arg"),children:"Open Dialog"}),n.jsx(x,{cancel:"わけない",header:"孫悟空",isOpen:s,success:"わける",onCancel:()=>o("This is arg"),onClose:()=>o("This is arg"),onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})};var p,m,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
