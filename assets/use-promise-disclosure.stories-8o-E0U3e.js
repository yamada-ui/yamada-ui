import{i as e}from"./preload-helper-B45gAKPr.js";import{t}from"./jsx-runtime-BBQGix-2.js";import{n,r}from"./use-disclosure-DE5HrKah.js";import{t as i}from"./text-ljAYVXXn.js";import{t as a}from"./text-DGi1MGSU.js";import{d as o,t as s}from"./button-DWoK_lmA.js";import{Qo as c,Uo as l}from"./iframe-D5Y3ROF5.js";var u,d,f,p;e((()=>{s(),l(),a(),n(),u=t(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:t,onOpen:n,onSuccess:a}=r();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(i,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(o,{onClick:async()=>{try{await n(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(c,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(i,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(i,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:t,onClose:t,onSuccess:a})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen,
    onSuccess
  } = usePromiseDisclosure();
  const onClick = async () => {
    try {
      await onOpen();
      console.log("やるじゃねえか、サタン!!!");
      console.log("おめえはホントに世界の…");
      console.log("救世主かもな!!!!");
    } catch {
      console.error("地球は滅亡しました");
    }
  };
  return <>
      <Text>だ…大地よ海よ そして生きているすべての みんな…</Text>
      <Text>このオラにほんのちょっとずつだけ元気をわけてくれ…！！！</Text>

      <Button onClick={onClick}>わけない</Button>

      <Modal.Root size="2xl" body={<>
            <Text>き、きさまらいいかげんにしろーーーっ!!!</Text>
            <Text>さっさと協力しないかーーーっ!!!</Text>
            <Text>
              このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!
            </Text>
          </>} cancel="わけない" open={open} success="わける" title="ミスター・サタン" onCancel={onClose} onClose={onClose} onSuccess={onSuccess} />
    </>;
}`,...f.parameters?.docs?.source}}},p=[`Basic`]}))();export{f as Basic,p as __namedExportsOrder,d as default};