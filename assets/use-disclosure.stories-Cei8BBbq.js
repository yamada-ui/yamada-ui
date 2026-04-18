import{n as e}from"./chunk-zsgVPwQN.js";import{Ca as t,El as n,Fu as r,Iu as i,au as a,gl as o,ma as s,ou as c,sm as l}from"./iframe-CHoZGzMw.js";var u,d,f,p,m,h;e((()=>{o(),s(),a(),r(),u=l(),d={title:`Hooks / useDisclosure`},f=()=>{let{open:e,onClose:r,onOpen:a}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{onClick:a,children:`Open Dialog`}),(0,u.jsx)(t,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:r,onClose:r,onSuccess:r})]})},p=()=>{let{open:e,onToggle:t}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{onClick:t,children:`Please Click`}),e?(0,u.jsx)(c,{children:`Hey!`}):null]})},m=()=>{let{open:e,onClose:r,onOpen:a}=i({onClose:e=>{console.log(`onClose:`,e)},onOpen:e=>{console.log(`onOpen:`,e)}});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(n,{onClick:()=>a(`This is arg`),children:`Open Dialog`}),(0,u.jsx)(t,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:()=>r(`This is arg`),onClose:()=>r(`This is arg`),onSuccess:()=>r(`This is arg`)})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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