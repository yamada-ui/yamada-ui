import{n as e}from"./chunk-zsgVPwQN.js";import{Ca as t,Nu as n,Pu as r,im as i,iu as a,ma as o,ml as s,ru as c,wl as l}from"./iframe-BNaKCSd5.js";var u,d,f,p,m,h;e((()=>{s(),o(),c(),n(),u=i(),d={title:`Hooks / useDisclosure`},f=()=>{let{open:e,onClose:n,onOpen:i}=r();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{onClick:i,children:`Open Dialog`}),(0,u.jsx)(t,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:n,onClose:n,onSuccess:n})]})},p=()=>{let{open:e,onToggle:t}=r();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{onClick:t,children:`Please Click`}),e?(0,u.jsx)(a,{children:`Hey!`}):null]})},m=()=>{let{open:e,onClose:n,onOpen:i}=r({onClose:e=>{console.log(`onClose:`,e)},onOpen:e=>{console.log(`onOpen:`,e)}});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{onClick:()=>i(`This is arg`),children:`Open Dialog`}),(0,u.jsx)(t,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:()=>n(`This is arg`),onClose:()=>n(`This is arg`),onSuccess:()=>n(`This is arg`)})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure();
  return <>
      <Button onClick={onOpen}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={onClose} onClose={onClose} onSuccess={onClose} />
    </>;
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onToggle
  } = useDisclosure();
  return <>
      <Button onClick={onToggle}>Please Click</Button>

      {open ? <Text>Hey!</Text> : null}
    </>;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen
  } = useDisclosure<string, string>({
    onClose: value => {
      console.log("onClose:", value);
    },
    onOpen: value => {
      console.log("onOpen:", value);
    }
  });
  return <>
      <Button onClick={() => onOpen("This is arg")}>Open Dialog</Button>

      <Modal.Root body="だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！" cancel="わけない" open={open} success="わける" title="孫悟空" onCancel={() => onClose("This is arg")} onClose={() => onClose("This is arg")} onSuccess={() => onClose("This is arg")} />
    </>;
}`,...m.parameters?.docs?.source}}},h=[`Basic`,`Toggle`,`Chain`]}))();export{f as Basic,m as Chain,p as Toggle,h as __namedExportsOrder,d as default};