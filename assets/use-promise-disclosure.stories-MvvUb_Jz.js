import{r,v as h,j as o,T as s}from"./iframe-CDTQ5ROD.js";import{u as y}from"./use-disclosure-D7jE1FXj.js";import{B as k}from"./button-DJ5m59RZ.js";import{M as w}from"./modal-BIUFHYjB.js";import"./preload-helper-D9Z9MdNV.js";import"./use-ripple-CRajOxML.js";import"./rings-dYmcfrIU.js";import"./use-modal-B6HI9Vbq.js";import"./fade-DOpjQicd.js";import"./transition-BQ9QLj2F.js";import"./popover-DGyEaDIX.js";import"./index-CwV9TfzL.js";import"./index-W8ugI876.js";import"./index-VIgT-dW9.js";import"./event-FkP6pOuW.js";import"./slide-fade-T7DBRmJ-.js";import"./index-DiHcGD1N.js";import"./use-breakpoint-CMnSSNhN.js";import"./use-breakpoint-value-D9ZXJUvj.js";import"./use-color-mode-value-CFswxupI.js";import"./fade-scale-BwIcW2YG.js";import"./close-button-BcP8ND9i.js";import"./icon-button-DjGAPh7m.js";import"./x-icon-Br5DKOS7.js";import"./createLucideIcon-D7lzYFmP.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:d}=y(i),a=r.useRef(void 0),u=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((f,g)=>{u.current=async x=>{a.current=void 0,f(x),t||await n(x)},a.current=g});return await m(p),await j},[m,n,t]),T=r.useCallback(async p=>{a.current?.(e),await n(p)},[n,e]);return{open:l,onClose:T,onOpen:C,onSuccess:u.current,onToggle:d}},X={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(k,{onClick:n,children:"わけない"}),o.jsx(w,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const Y=["Basic"];export{c as Basic,Y as __namedExportsOrder,X as default};
