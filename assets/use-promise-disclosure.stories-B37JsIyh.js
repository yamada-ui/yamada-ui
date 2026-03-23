import{r,D as h,j as o,T as s,R as y}from"./iframe-BgJam74t.js";import{u as R}from"./use-disclosure-h3BOEu4P.js";import{M as k}from"./modal-DULGXMLu.js";import"./preload-helper-PPVm8Dsz.js";import"./use-modal-DDCrkEHY.js";import"./popover-BH1yhwVP.js";import"./index-B1eMsdJQ.js";import"./index-CUM7YL1_.js";import"./index-C2RlB7fw.js";import"./index-D6CaUKcr.js";import"./event-CrXzwdKY.js";import"./slide-fade-DYBIi2q9.js";import"./transition-BDYZWmqa.js";import"./fade-scale-qyH7mUep.js";import"./fade-DqOt8X28.js";const w=({disableCloseOnSuccess:t=!1,error:e,...l}={})=>{const{open:a,onClose:n,onOpen:u,onToggle:d}=R(l),i=r.useRef(void 0),m=r.useRef(h),C=r.useCallback(async p=>{const j=new Promise((g,f)=>{m.current=(async x=>{i.current=void 0,g(x),t||await n(x)}),i.current=f});return await u(p),await j},[u,n,t]),T=r.useCallback(async p=>{i.current?.(e),await n(p)},[n,e]);return{open:a,onClose:T,onOpen:C,onSuccess:m.current,onToggle:d}},A={title:"Hooks / usePromiseDisclosure"},c=()=>{const{open:t,onClose:e,onOpen:l,onSuccess:a}=w(),n=async()=>{try{await l(),console.log("やるじゃねえか、サタン!!!"),console.log("おめえはホントに世界の…"),console.log("救世主かもな!!!!")}catch{console.error("地球は滅亡しました")}};return o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"だ…大地よ海よ そして生きているすべての みんな…"}),o.jsx(s,{children:"このオラにほんのちょっとずつだけ元気をわけてくれ…！！！"}),o.jsx(y,{onClick:n,children:"わけない"}),o.jsx(k,{size:"2xl",body:o.jsxs(o.Fragment,{children:[o.jsx(s,{children:"き、きさまらいいかげんにしろーーーっ!!!"}),o.jsx(s,{children:"さっさと協力しないかーーーっ!!!"}),o.jsx(s,{children:"このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!"})]}),cancel:"わけない",open:t,success:"わける",title:"ミスター・サタン",onCancel:e,onClose:e,onSuccess:a})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
      <Text>だ…大地よ海よ そして生きているすべての みんな…</Text>
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
}`,...c.parameters?.docs?.source}}};const G=["Basic"];export{c as Basic,G as __namedExportsOrder,A as default};
