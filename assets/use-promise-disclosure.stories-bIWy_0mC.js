import{r as l,E as w,j as o,T as t,Q as O}from"./iframe-C1QqsVA9.js";import{u as B}from"./use-disclosure-6PKa0G7n.js";import{M as R}from"./modal-DClCyP52.js";import"./preload-helper-C1FmrZbK.js";import"./use-modal-Jtaw9C7U.js";import"./fade-LobJSfbt.js";import"./transition-CAjTtIHs.js";import"./popover-DhD92pCE.js";import"./index-B7LYMO55.js";import"./index-BWHmAA5-.js";import"./index-DOoFD4Ha.js";import"./event-Cy7jkmKm.js";import"./slide-fade-DXhHZ6Pm.js";import"./fade-scale--Ag4Rwlg.js";const S=({disableCloseOnSuccess:r=!1,error:e,...i}={})=>{const{open:p,onClose:n,onOpen:m,onToggle:h}=B(i),s=l.useRef(void 0),x=l.useRef(w),j=l.useCallback(async u=>{const c=new Promise((f,k)=>{x.current=async d=>{s.current=void 0,f(d),r||await n(d)},s.current=k});return await m(u),await c},[m,n,r]),y=l.useCallback(async u=>{var c;(c=s.current)==null||c.call(s,e),await n(u)},[n,e]);return{open:p,onClose:y,onOpen:j,onSuccess:x.current,onToggle:h}},G={title:"Hooks / usePromiseDisclosure"},a=()=>{const{open:r,onClose:e,onOpen:i,onSuccess:p}=S(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(t,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(t,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(O,{onClick:n,children:"わけない"}),o.jsx(R,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(t,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(t,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(t,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:r,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:p})]})};var C,T,g;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
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
      <Text>だ…大地よ海よ　そして生きているすべての　みんな…</Text>
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
}`,...(g=(T=a.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};const J=["Basic"];export{a as Basic,J as __namedExportsOrder,G as default};
