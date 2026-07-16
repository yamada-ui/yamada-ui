import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{a as n,i as r}from"./use-disclosure-DE5HrKah.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{d as o,t as s}from"./button-DWoK_lmA.js";import{Qo as c,Uo as l}from"./iframe-D5Y3ROF5.js";var u,d,f,p,m,h;e((()=>{s(),l(),a(),r(),u=t(),d={title:`Hooks / useDisclosure`},f=()=>{let{open:e,onClose:t,onOpen:r}=n();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{onClick:r,children:`Open Dialog`}),(0,u.jsx)(c,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:t,onClose:t,onSuccess:t})]})},p=()=>{let{open:e,onToggle:t}=n();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{onClick:t,children:`Please Click`}),e?(0,u.jsx)(i,{children:`Hey!`}):null]})},m=()=>{let{open:e,onClose:t,onOpen:r}=n({onClose:e=>{console.log(`onClose:`,e)},onOpen:e=>{console.log(`onOpen:`,e)}});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(o,{onClick:()=>r(`This is arg`),children:`Open Dialog`}),(0,u.jsx)(c,{body:`だ…大地よ海よ　そして生きているすべての　みんな…
        このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`,cancel:`わけない`,open:e,success:`わける`,title:`孫悟空`,onCancel:()=>t(`This is arg`),onClose:()=>t(`This is arg`),onSuccess:()=>t(`This is arg`)})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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