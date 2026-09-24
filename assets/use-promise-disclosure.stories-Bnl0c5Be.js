import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{Sn as n,xn as r}from"./props-Bz1FL_va.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{n as a,t as o}from"./use-disclosure-B4a0PX0z.js";import{n as s,t as c}from"./text-b2W5euYI.js";import{r as l,t as u}from"./button-CFBNyQlD.js";import{d,l as f}from"./modal-iAQ-uKLw.js";var p,m;function h(){return(h=e((()=>{p=t(),r(),o(),m=({disableCloseOnSuccess:e=!1,error:t,...r}={})=>{let{open:i,onClose:o,onOpen:s,onToggle:c}=a(r),l=(0,p.useRef)(void 0),u=(0,p.useRef)(n),d=(0,p.useCallback)(async t=>{let n=new Promise((t,n)=>{u.current=(async n=>{l.current=void 0,t(n),e||await o(n)}),l.current=n});return await s(t),await n},[s,o,e]);return{open:i,onClose:(0,p.useCallback)(async e=>{l.current?.(t),await o(e)},[o,t]),onOpen:d,onSuccess:u.current,onToggle:c}}})))()}var g,_,v,y;function b(){return(b=e((()=>{l(),d(),s(),h(),g=i(),_={title:`Hooks / usePromiseDisclosure`},v=()=>{let{open:e,onClose:t,onOpen:n,onSuccess:r}=m();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`だ…大地よ海よ そして生きているすべての みんな…`}),(0,g.jsx)(c,{children:`このオラにほんのちょっとずつだけ元気をわけてくれ…！！！`}),(0,g.jsx)(u,{onClick:async()=>{try{await n(),console.log(`やるじゃねえか、サタン!!!`),console.log(`おめえはホントに世界の…`),console.log(`救世主かもな!!!!`)}catch{console.error(`地球は滅亡しました`)}},children:`わけない`}),(0,g.jsx)(f,{size:`2xl`,body:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(c,{children:`き、きさまらいいかげんにしろーーーっ!!!`}),(0,g.jsx)(c,{children:`さっさと協力しないかーーーっ!!!`}),(0,g.jsx)(c,{children:`このミスター・サタンさまのたのみも、きけんというのかーーーっ!!!`})]}),cancel:`わけない`,open:e,success:`わける`,title:`ミスター・サタン`,onCancel:t,onClose:t,onSuccess:r})]})},y=[`Basic`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as Basic,y as __namedExportsOrder,_ as default};