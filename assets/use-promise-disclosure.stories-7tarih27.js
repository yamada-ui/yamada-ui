import{r,E as h,j as o,T as s,R as y}from"./iframe-Brv718Ke.js";import{u as R}from"./use-disclosure-BYF1u-hC.js";import{M as k}from"./modal-BcpzkJpm.js";import"./preload-helper-D9Z9MdNV.js";import"./use-modal-BNe-Q-wj.js";import"./fade-DATQ6KAy.js";import"./transition-CCH_TLdJ.js";import"./popover-Bk2nGGEg.js";import"./index-BGBV8ojj.js";import"./index-DsKa-CWj.js";import"./index-BszBT9JL.js";import"./event-zg1wb38L.js";import"./slide-fade-OHaUQ7yy.js";import"./index-D5wu8vhg.js";import"./use-breakpoint-BYwrrTnn.js";import"./use-breakpoint-value-B49E1fW3.js";import"./use-color-mode-value-DNz64yif.js";import"./fade-scale-D-lBHAYU.js";const w=({disableCloseOnSuccess:t=!1,error:e,...i}={})=>{const{open:l,onClose:n,onOpen:m,onToggle:d}=R(i),a=r.useRef(void 0),u=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((g,f)=>{u.current=(async x=>{a.current=void 0,g(x),t||await n(x)}),a.current=f});return await m(p),await j},[m,n,t]),T=r.useCallback(async p=>{a.current?.(e),await n(p)},[n,e]);return{open:l,onClose:T,onOpen:C,onSuccess:u.current,onToggle:d}},K={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:i,onSuccess:l}=w(),n=async()=>{try{await i(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ　そして生きているすべての　みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(y,{onClick:n,children:"わけない"}),o.jsx(k,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:l})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const L=["Basic"];export{c as Basic,L as __namedExportsOrder,K as default};
