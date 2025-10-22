import{r,E as h,j as o,T as s,S as y}from"./iframe-CzLob2S8.js";import{u as k}from"./use-disclosure-z7Ww8LBB.js";import{M as w}from"./modal-Ch1pKBTD.js";import"./preload-helper-PPVm8Dsz.js";import"./use-modal-DcJoJBM0.js";import"./fade-CVCPg8kB.js";import"./transition-gVg7kimi.js";import"./popover-B4PPvidZ.js";import"./index-DH3Q8P7u.js";import"./index-CTrYnNmA.js";import"./index-B6tbJis0.js";import"./event-BqUQNVAt.js";import"./slide-fade-DHogtfTH.js";import"./fade-scale-2HbuV2u5.js";const R=({disableCloseOnSuccess:t=!1,error:e,...l}={})=>{const{open:a,onClose:n,onOpen:u,onToggle:d}=k(l),i=r.useRef(void 0),m=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((g,f)=>{m.current=(async x=>{i.current=void 0,g(x),t||await n(x)}),i.current=f});return await u(p),await j},[u,n,t]),T=r.useCallback(async p=>{i.current?.(e),await n(p)},[n,e]);return{open:a,onClose:T,onOpen:C,onSuccess:m.current,onToggle:d}},q={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:l,onSuccess:a}=R(),n=async()=>{try{await l(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(y,{onClick:n,children:"わけない"}),o.jsx(w,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:a})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const A=["Basic"];export{c as Basic,A as __namedExportsOrder,q as default};
