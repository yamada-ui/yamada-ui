import{n as e}from"./chunk-zsgVPwQN.js";import{Ca as t,El as n,Nu as r,Pu as i,au as a,gl as o,ma as s,ou as c,sm as l}from"./iframe-CHoZGzMw.js";var u,d,f,p;e((()=>{o(),s(),a(),r(),u=l(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:r,onOpen:a,onSuccess:o}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(c,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(n,{onClick:async()=>{try{await a(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(t,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(c,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(c,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:r,onClose:r,onSuccess:o})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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