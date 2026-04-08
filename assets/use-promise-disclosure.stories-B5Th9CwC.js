import{n as e}from"./chunk-zsgVPwQN.js";import{Du as t,Eu as n,Ki as r,bc as i,jl as a,pp as o,ta as s,xl as c,yc as l}from"./iframe-xN-XyuUR.js";var u,d,f,p;e((()=>{c(),r(),n(),l(),u=o(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:n,onOpen:r,onSuccess:o}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(t,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(a,{onClick:async()=>{try{await r(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(s,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(t,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(t,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(t,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:n,onClose:n,onSuccess:o})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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