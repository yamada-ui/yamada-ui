import{r,w as h,j as o,T as s}from"./iframe-zUpmkGgl.js";import{u as y}from"./use-disclosure-3nrGeSn1.js";import{B as w}from"./button-BSJyaaef.js";import{M as k}from"./modal-VAmKzH8A.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-8mUR-5Ot.js";import"./use-ripple-BYstKMN-.js";import"./rings-tpb0S9kk.js";import"./use-modal-DMLqXon5.js";import"./fade-CouizlhH.js";import"./transition-BWA4KZ39.js";import"./popover-CbHmS7oa.js";import"./index-BkfO7WzD.js";import"./index-B5DbfJPc.js";import"./index-CEYmrBXe.js";import"./event-CX1pcGw3.js";import"./slide-fade-Bu6fwAcF.js";import"./index-Dh0dtizH.js";import"./use-breakpoint-rlMFjuDB.js";import"./use-breakpoint-value-CBhdCsru.js";import"./use-color-mode-value-DvQIHb0C.js";import"./fade-scale-BL1fbRuK.js";import"./close-button-5wnkVucO.js";import"./icon-button-DnSVOKtD.js";import"./x-icon-CLxBNWiF.js";import"./createLucideIcon-D8b2f8gg.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:d}=y(i),a=r.useRef(void 0),u=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((f,g)=>{u.current=(async x=>{a.current=void 0,f(x),t||await n(x)}),a.current=g});return await m(p),await j},[m,n,t]),T=r.useCallback(async p=>{a.current?.(e),await n(p)},[n,e]);return{open:l,onClose:T,onOpen:C,onSuccess:u.current,onToggle:d}},Y={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(w,{onClick:n,children:"わけない"}),o.jsx(k,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const Z=["Basic"];export{c as Basic,Z as __namedExportsOrder,Y as default};
