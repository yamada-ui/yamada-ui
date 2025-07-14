import{r,y as h,j as o,T as s}from"./iframe-Cn-KGvUL.js";import{u as y}from"./use-disclosure-YGf02iCc.js";import{B as k}from"./button-C4DORSB8.js";import{M as w}from"./modal-BuhZbq82.js";import"./use-ripple-we29PBC5.js";import"./rings-Bgjjtt2b.js";import"./use-modal-DOqDIpSQ.js";import"./fade-13_mecHx.js";import"./transition-D_53AchU.js";import"./popover-Bwu1WZpn.js";import"./index-0VZIcMOX.js";import"./index-DaorWep8.js";import"./index-B2sNKoxK.js";import"./event-BKgKqnar.js";import"./slide-fade-CsJj_6_c.js";import"./index-Dzj2ZL1b.js";import"./use-breakpoint-GfC1FdYw.js";import"./use-breakpoint-value-CSnHtgSh.js";import"./use-color-mode-value-Rtca59em.js";import"./fade-scale-B3HdtM8Z.js";import"./close-button-DG6JO1_d.js";import"./icon-button-CnBlN9Ks.js";import"./x-icon-IIj9uYou.js";import"./createLucideIcon-CiWl1mji.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:x}=y(i),a=r.useRef(void 0),u=r.useRef(h),d=r.useCallback(async(...p)=>{const T=new Promise((j,f)=>{u.current=async(...g)=>{a.current=void 0,j(),t||await n(...g)},a.current=f});await m(...p),await T},[m,n,t]),C=r.useCallback(async(...p)=>{a.current?.(e),await n(...p)},[n,e]);return{open:l,onClose:C,onOpen:d,onSuccess:u.current,onToggle:x}},W={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("あるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(k,{onClick:n,children:"わけない"}),o.jsx(w,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
