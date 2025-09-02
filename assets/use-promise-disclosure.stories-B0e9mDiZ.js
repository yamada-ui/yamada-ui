import{r,w as h,j as o,T as s}from"./iframe-XeUDGc9-.js";import{u as y}from"./use-disclosure-Q_gHOiKq.js";import{B as w}from"./button-BMwb3xqF.js";import{M as k}from"./modal-BXsczGCZ.js";import"./preload-helper-D9Z9MdNV.js";import"./button.style-CgX_lvjC.js";import"./use-ripple-CRLgxef_.js";import"./rings-DhKaXPYE.js";import"./use-modal-P5HlX_Bz.js";import"./fade-CwZvbUJ7.js";import"./transition-BE9h2tni.js";import"./popover-CS_rKV3m.js";import"./index-DOSqIMwN.js";import"./index-3YqRVpD6.js";import"./index-Dyl3Q8ML.js";import"./event-Bys_A0Hz.js";import"./slide-fade-NLK9p0c-.js";import"./index-DEnd7V5M.js";import"./use-breakpoint-yc9KJhMy.js";import"./use-breakpoint-value-DixKx_R9.js";import"./use-color-mode-value-BtM7ZDp0.js";import"./fade-scale-lSw9y0IV.js";import"./close-button-DLwJLQZv.js";import"./icon-button-Cnht_NtW.js";import"./x-icon-D4Qk9xtz.js";import"./createLucideIcon-BIZS7xSf.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:d}=y(i),a=r.useRef(void 0),u=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((f,g)=>{u.current=(async x=>{a.current=void 0,f(x),t||await n(x)}),a.current=g});return await m(p),await j},[m,n,t]),T=r.useCallback(async p=>{a.current?.(e),await n(p)},[n,e]);return{open:l,onClose:T,onOpen:C,onSuccess:u.current,onToggle:d}},Y={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(w,{onClick:n,children:"わけない"}),o.jsx(k,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
