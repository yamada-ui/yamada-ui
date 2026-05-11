import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-D_578c1K.js";import{n,r}from"./use-disclosure-CesGvtXt.js";import{t as i}from"./text-b_IgAtWs.js";import{t as a}from"./text-BspHgeMQ.js";import{l as o,t as s}from"./button-B2ZpDhpb.js";import{t as c,u as l}from"./modal-CHsB91N3.js";var u,d,f,p;e((()=>{s(),c(),a(),n(),u=t(),d={title:`Hooks / usePromiseDisclosure`},f=()=>{let{open:e,onClose:t,onOpen:n,onSuccess:a}=r();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,u.jsx)(i,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,u.jsx)(o,{onClick:async()=>{try{await n(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,u.jsx)(l,{size:`2xl`,body:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,u.jsx)(i,{children:`さっさと協力しないかーーーっ!!!`}),(0,u.jsx)(i,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:t,onClose:t,onSuccess:a})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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