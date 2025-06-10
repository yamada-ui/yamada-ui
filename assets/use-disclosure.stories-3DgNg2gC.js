import{j as n}from"./jsx-runtime-DztICxWZ.js";import{u as m,a as w}from"./index-CQqf5rDh.js";import{B as p}from"./button-nZ2ZqBRb.js";import{D as u}from"./dialog-QGrypijG.js";import{T as s}from"./text-KN7rBBtq.js";import"./index-Bv9Y92EF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./factory-7Z88KRtK.js";import"./forward-ref-DH6f5tnY.js";import"./use-ripple-Vo7SgDWD.js";import"./index-B2HRqSdn.js";import"./proxy-r-x5KraU.js";import"./factory-UaNlpug7.js";import"./loading-DVofVDF_.js";import"./icon-DKuqv-9Z.js";import"./use-component-style-DHLtMqa5.js";import"./theme-provider-DsbwOWxu.js";import"./use-var-Bz9rJ8_M.js";import"./modal-DG93GzgC.js";import"./index-BY3xloYI.js";import"./index-BU1StM4P.js";import"./Combination--fBz1e3g.js";import"./fade-ClU9tq3W.js";import"./forward-ref-BMTIiRn4.js";import"./utils-jtvc7GJt.js";import"./close-button-BbMPcnm8.js";import"./slide-D--aeRUQ.js";import"./slide-fade-CwK7Wr_w.js";import"./scale-fade-D309oxZP.js";import"./portal-CFvSD_dh.js";import"./index-BcXpNjVA.js";import"./index-BaC3dPEX.js";import"./defineProperty-sPAEG9GX.js";const tn={title:"Hooks / useDisclosure"},t=()=>{const{open:e,onClose:o,onOpen:r}=m();return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:r,children:"Open Dialog"}),n.jsx(u,{cancel:"わけない",header:"孫悟空",open:e,success:"わける",onCancel:o,onClose:o,onSuccess:o,children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},i=()=>{const{open:e,onToggle:o}=m();return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:o,children:"Please Click"}),e?n.jsx(s,{children:"Hey!"}):null]})},l=()=>{const{open:e,onClose:o,onOpen:r}=m({onClose:(...c)=>{console.log("Args:",c)},onOpen:(...c)=>{console.log("Args:",c)}});return n.jsxs(n.Fragment,{children:[n.jsx(p,{onClick:()=>r("This is arg"),children:"Open Dialog"}),n.jsx(u,{cancel:"わけない",header:"孫悟空",open:e,success:"わける",onCancel:()=>o("This is arg"),onClose:()=>o("This is arg"),onSuccess:()=>o("This is arg"),children:"だ…大地よ海よ　そして生きているすべての　みんな… このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"})]})},a=()=>{const{open:e,onClose:o,onOpen:r,onSuccess:c}=w(),f=async()=>{try{await r(),console.log("あるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return n.jsxs(n.Fragment,{children:[n.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),n.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),n.jsx(p,{onClick:f,children:"わけない"}),n.jsxs(u,{size:"2xl",cancel:"わけない",header:"ミスター・サタン",open:e,success:"わける",onCancel:o,onClose:o,onSuccess:c,children:[n.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),n.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),n.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]})]})};var g,C,h;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Dialog cancel="わけない" header="孫悟空" open={open} success="わける" onCancel={onClose} onClose={onClose} onSuccess={onClose}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(h=(C=t.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var d,x,T;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const {
    open,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>;
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var j,D,O;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const {
    open,
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

      <Dialog cancel="わけない" header="孫悟空" open={open} success="わける" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")}>
        だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！
      </Dialog>
    </>;
}`,...(O=(D=l.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var k,S,B;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen,
    onSuccess
  } = usePromiseDisclosure();
  const onClick = async () => {
    try {
      await onOpen();
      console.log("あるじゃねえか、サタン!!!");
      console.log("おめえはホントに世界の…");
      console.log("救世主かもな!!!!");
    } catch {
      console.error("地球は滅亡しました");
    }
  };
  return <>
      <Text>だ…大地よ海よ　そして生きているすべての　みんな…</Text>
      <Text>このオラにほんのちょっとずつだけ元気をわけてくれ…！！！</Text>

      <Button onClick={onClick}>わけない</Button>

      <Dialog size="2xl" cancel="わけない" header="ミスター・サタン" open={open} success="わける" onCancel={onClose} onClose={onClose} onSuccess={onSuccess}>
        <Text>き、きさまらいいかげんにしろーーーっ!!!</Text>
        <Text>さっさと協力しないかーーーっ!!!</Text>
        <Text>
          このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!
        </Text>
      </Dialog>
    </>;
}`,...(B=(S=a.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const ln=["basic","useToggle","withChain","withPromise"];export{ln as __namedExportsOrder,t as basic,tn as default,i as useToggle,l as withChain,a as withPromise};
