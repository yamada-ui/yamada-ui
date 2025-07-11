import{r,y as h,j as o,T as s}from"./iframe-Dqv37jui.js";import{u as y}from"./use-disclosure-LBMw-9EN.js";import{B as k}from"./button-C8c51KbT.js";import{M as w}from"./modal-BJXbmAfo.js";import"./use-ripple-Cg_GpsVR.js";import"./rings-B8RJlSoE.js";import"./use-modal-DpS9SDil.js";import"./fade-Cm5RFf8Y.js";import"./transition-BO6mxl9Z.js";import"./popover-CWOd5ZuN.js";import"./index-Dglq9CnQ.js";import"./index-DV2BNl-B.js";import"./index-BeFVXBdh.js";import"./event-Dj3rLfFf.js";import"./slide-fade-CigPds8E.js";import"./index-DPuk35MY.js";import"./use-breakpoint-BI3OQxi_.js";import"./use-breakpoint-value-BmkGzUn3.js";import"./use-color-mode-value-D_U_yHOc.js";import"./fade-scale-DBiRiJFe.js";import"./close-button-BTDOGmwG.js";import"./icon-button-B2blonpm.js";import"./x-icon-CcpzZ4LQ.js";import"./createLucideIcon-9w-Kw71s.js";const R=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:x}=y(i),a=r.useRef(void 0),u=r.useRef(h),d=r.useCallback(async(...p)=>{const T=new Promise((j,f)=>{u.current=async(...g)=>{a.current=void 0,j(),t||await n(...g)},a.current=f});await m(...p),await T},[m,n,t]),C=r.useCallback(async(...p)=>{a.current?.(e),await n(...p)},[n,e]);return{open:l,onClose:C,onOpen:d,onSuccess:u.current,onToggle:x}},W={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=R(),n=async()=>{try{await i(),console.log("あるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(k,{onClick:n,children:"わけない"}),o.jsx(w,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
