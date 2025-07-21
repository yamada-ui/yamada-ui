import{r,y as h,j as o,T as s}from"./iframe-BbB59fLB.js";import{u as y}from"./use-disclosure-C1hw0230.js";import{B as k}from"./button-C7yiHaiH.js";import{M as w}from"./modal-B56LQJT1.js";import"./use-ripple-DxxJnXZN.js";import"./rings-YRmwo_R-.js";import"./use-modal-BzD597I7.js";import"./fade-Cg78lHyM.js";import"./transition-Bz5hSF40.js";import"./popover-DJgZdrj7.js";import"./index-BtJNXXBu.js";import"./index-BfD6Scyj.js";import"./index-CACjuGj1.js";import"./event-qMMKDYUE.js";import"./slide-fade-D9la6OPs.js";import"./index-C-Jh1PQi.js";import"./use-breakpoint-CIqEKCzG.js";import"./use-breakpoint-value-DwWi_T2I.js";import"./use-color-mode-value-DJWSrxpj.js";import"./fade-scale-QzWhc2bC.js";import"./close-button-CLzghRy3.js";import"./icon-button-B48cT_t-.js";import"./x-icon-6cA71kZ4.js";import"./createLucideIcon-BfIMf7K-.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:x}=y(i),a=r.useRef(void 0),u=r.useRef(h),d=r.useCallback(async(...p)=>{const T=new Promise((j,f)=>{u.current=async(...g)=>{a.current=void 0,j(),t||await n(...g)},a.current=f});await m(...p),await T},[m,n,t]),C=r.useCallback(async(...p)=>{a.current?.(e),await n(...p)},[n,e]);return{open:l,onClose:C,onOpen:d,onSuccess:u.current,onToggle:x}},W={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("あるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(k,{onClick:n,children:"わけない"}),o.jsx(w,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    open,
    onClose,
    onOpen,
    onSuccess
  } = usePromiseDisclosure();
  const onClick = async () => {
    try {
      await onOpen();
      console.log("あるじゃねえか、サタン!!!");
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
}`,...c.parameters?.docs?.source}}};const X=["Basic"];export{c as Basic,X as __namedExportsOrder,W as default};
