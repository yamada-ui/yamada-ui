import{aK as s,j as n,T as p}from"./iframe-6cyGxZR1.js";import{W as o}from"./wrap-CND43N8c.js";import{B as t}from"./button-G4XTmEMi.js";import"./flex-BPUJT_MQ.js";import"./use-ripple-CX8fxYrT.js";import"./rings-Cf-feOW-.js";const h={parameters:{layout:"centered"},title:"Hooks / useLoading"},m=async a=>new Promise(e=>{setTimeout(e,a)}),i=()=>{const{background:a,page:e,screen:r}=s();return n.jsxs(o,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start(),children:"Start background loading"})]})},c=()=>{const{background:a,page:e,screen:r}=s();return n.jsxs(o,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({duration:5e3}),children:"Start background loading"})]})},g=()=>{const{background:a,page:e,screen:r}=s();return n.jsxs(o,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({duration:5e3,message:"Loading"}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3,message:"Loading"}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({duration:5e3,message:"Loading"}),children:"Start background loading"})]})},d=()=>{const{background:a,page:e,screen:r}=s();return n.jsxs(o,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({message:n.jsx(p,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:n.jsx(p,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({message:n.jsx(p,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})},u=()=>{const{background:a,page:e,screen:r}=s();return n.jsxs(o,{gap:"md",children:[n.jsx(t,{onClick:()=>{r.start({duration:1e4,message:"Loading"}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n.jsx(t,{onClick:()=>{e.start({duration:1e4,message:"Loading"}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n.jsx(t,{onClick:()=>{a.start({duration:1e4,message:"Loading"}),setTimeout(()=>{a.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})},l=()=>{const{page:a}=s(),e=async()=>{a.start({message:"Get Data 1/3"}),await m(3e3),a.update({message:"Please wait 2/3"}),await m(3e3),a.update({message:"Almost done 3/3"}),await m(3e3),a.finish()};return n.jsx(t,{onClick:e,children:"Start page loading"})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => screen.start()}>Start screen loading</Button>
      <Button onClick={() => page.start()}>Start page loading</Button>
      <Button onClick={() => background.start()}>
        Start background loading
      </Button>
    </Wrap>;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => screen.start({
      duration: 5000
    })}>
        Start screen loading
      </Button>
      <Button onClick={() => page.start({
      duration: 5000
    })}>
        Start page loading
      </Button>
      <Button onClick={() => background.start({
      duration: 5000
    })}>
        Start background loading
      </Button>
    </Wrap>;
}`,...c.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => screen.start({
      duration: 5000,
      message: "Loading"
    })}>
        Start screen loading
      </Button>
      <Button onClick={() => page.start({
      duration: 5000,
      message: "Loading"
    })}>
        Start page loading
      </Button>
      <Button onClick={() => background.start({
      duration: 5000,
      message: "Loading"
    })}>
        Start background loading
      </Button>
    </Wrap>;
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => screen.start({
      message: <Text color="primary">Loading</Text>
    })}>
        Start screen loading
      </Button>
      <Button onClick={() => page.start({
      message: <Text color="primary">Loading</Text>
    })}>
        Start page loading
      </Button>
      <Button onClick={() => background.start({
      message: <Text color="primary">Loading</Text>
    })}>
        Start background loading
      </Button>
    </Wrap>;
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => {
      screen.start({
        duration: 10000,
        message: "Loading"
      });
      setTimeout(() => {
        screen.update({
          message: "Please wait"
        });
      }, 5000);
    }}>
        Start screen loading
      </Button>

      <Button onClick={() => {
      page.start({
        duration: 10000,
        message: "Loading"
      });
      setTimeout(() => {
        page.update({
          message: "Please wait"
        });
      }, 5000);
    }}>
        Start page loading
      </Button>

      <Button onClick={() => {
      background.start({
        duration: 10000,
        message: "Loading"
      });
      setTimeout(() => {
        background.update({
          message: "Please wait"
        });
      }, 5000);
    }}>
        Start background loading
      </Button>
    </Wrap>;
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const getData = async () => {
    page.start({
      message: "Get Data 1/3"
    });
    await wait(3000);
    page.update({
      message: "Please wait 2/3"
    });
    await wait(3000);
    page.update({
      message: "Almost done 3/3"
    });
    await wait(3000);
    page.finish();
  };
  return <Button onClick={getData}>Start page loading</Button>;
}`,...l.parameters?.docs?.source}}};const j=["Basic","Timeout","Message","CustomMessage","UpdateMessage","AsyncFunction"];export{l as AsyncFunction,i as Basic,d as CustomMessage,g as Message,c as Timeout,u as UpdateMessage,j as __namedExportsOrder,h as default};
