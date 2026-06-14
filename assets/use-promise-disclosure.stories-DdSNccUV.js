import{i as e}from"./preload-helper-usAeo7Bx.js";import{Ev as t,Kd as n,Ko as r,Lf as i,Lo as a,Nd as o,Rf as s,gp as c,hp as l}from"./iframe-4z85howq.js";var u,d,f,p;e((()=>{o(),a(),i(),l(),u=t(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:t,onOpen:i,onSuccess:a}=c();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(s,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(n,{onClick:async()=>{try{await i(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(r,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(s,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(s,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:t,onClose:t,onSuccess:a})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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