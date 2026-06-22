import{i as e}from"./preload-helper-usAeo7Bx.js";import{Dv as t,Ko as n,Lo as r,Pd as i,Rf as a,_p as o,gp as s,qd as c,zf as l}from"./iframe-B_JZPEyf.js";var u,d,f,p;e((()=>{i(),r(),a(),s(),u=t(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:t,onOpen:r,onSuccess:i}=o();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(l,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(c,{onClick:async()=>{try{await r(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(n,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(l,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(l,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:t,onClose:t,onSuccess:i})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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