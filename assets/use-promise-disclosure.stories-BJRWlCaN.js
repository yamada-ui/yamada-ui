import{r,w as h,j as o,T as s}from"./iframe-COpE3uSe.js";import{u as y}from"./use-disclosure-DqRmIBlX.js";import{B as w}from"./button-C1iRx7Aw.js";import{M as k}from"./modal-AyxdXNPc.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-CEKjhFlf.js";import"./use-ripple-dUKU3i3-.js";import"./rings-3vgxaMbV.js";import"./use-modal-DgmtS6M_.js";import"./fade-Dx1nX7wI.js";import"./transition-Cw2RDG12.js";import"./popover-DNVIrjJp.js";import"./index-jMnWbNjz.js";import"./index-DAMUsjjL.js";import"./index-EOumB-jG.js";import"./event-CGdgg0hP.js";import"./slide-fade-ChbR9eU8.js";import"./index-rIgF0o0K.js";import"./use-breakpoint-Dw6HOVd7.js";import"./use-breakpoint-value-CoBUj51o.js";import"./use-color-mode-value-DQ4glCV3.js";import"./fade-scale-BTAUSPoz.js";import"./close-button-Ch7r7its.js";import"./icon-button-BjF-Bm1-.js";import"./x-icon-DAFzbT0J.js";import"./createLucideIcon-B04U3mbS.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:d}=y(i),a=r.useRef(void 0),u=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((f,g)=>{u.current=(async x=>{a.current=void 0,f(x),t||await n(x)}),a.current=g});return await m(p),await j},[m,n,t]),T=r.useCallback(async p=>{a.current?.(e),await n(p)},[n,e]);return{open:l,onClose:T,onOpen:C,onSuccess:u.current,onToggle:d}},Y={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(w,{onClick:n,children:"わけない"}),o.jsx(k,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
