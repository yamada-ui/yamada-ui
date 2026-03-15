import{bT as o,j as n,Q as a,T as m,bj as k}from"./iframe-BYxWTAfU.js";import{W as s}from"./wrap-EDT7itfC.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-njHzf6oI.js";const h={parameters:{layout:"centered"},title:"Hooks / useLoading"},i=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>r.start(),children:"Start screen loading"}),n.jsx(a,{onClick:()=>e.start(),children:"Start page loading"}),n.jsx(a,{onClick:()=>t.start(),children:"Start background loading"})]})},c=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>r.start({duration:5e3}),children:"Start screen loading"}),n.jsx(a,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n.jsx(a,{onClick:()=>t.start({duration:5e3}),children:"Start background loading"})]})},d=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>r.start({duration:5e3,message:"Loading"}),children:"Start screen loading"}),n.jsx(a,{onClick:()=>e.start({duration:5e3,message:"Loading"}),children:"Start page loading"}),n.jsx(a,{onClick:()=>t.start({duration:5e3,message:"Loading"}),children:"Start background loading"})]})},g=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>r.start({duration:5e3,loadingScheme:"grid"}),children:"Start screen loading"}),n.jsx(a,{onClick:()=>e.start({duration:5e3,loadingScheme:"dots"}),children:"Start page loading"}),n.jsx(a,{onClick:()=>t.start({duration:5e3,loadingScheme:"puff"}),children:"Start background loading"})]})},u=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>r.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n.jsx(a,{onClick:()=>e.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n.jsx(a,{onClick:()=>t.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})},l=()=>{const{background:t,page:e,screen:r}=o();return n.jsxs(s,{gap:"md",children:[n.jsx(a,{onClick:()=>{r.start({duration:1e4,message:"Loading"}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n.jsx(a,{onClick:()=>{e.start({duration:1e4,message:"Loading"}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n.jsx(a,{onClick:()=>{t.start({duration:1e4,message:"Loading"}),setTimeout(()=>{t.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})},p=()=>{const{page:t}=o(),e=async()=>{t.start({message:"Get Data 1/3"}),await k(3e3),t.update({message:"Please wait 2/3"}),await k(3e3),t.update({message:"Almost done 3/3"}),await k(3e3),t.finish()};return n.jsx(a,{onClick:e,children:"Start page loading"})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Wrap gap="md">
      <Button onClick={() => screen.start({
      duration: 5000,
      loadingScheme: "grid"
    })}>
        Start screen loading
      </Button>
      <Button onClick={() => page.start({
      duration: 5000,
      loadingScheme: "dots"
    })}>
        Start page loading
      </Button>
      <Button onClick={() => background.start({
      duration: 5000,
      loadingScheme: "puff"
    })}>
        Start background loading
      </Button>
    </Wrap>;
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};const b=["Basic","Duration","Message","LoadingScheme","CustomMessage","UpdateMessage","AsyncFunction"];export{p as AsyncFunction,i as Basic,u as CustomMessage,c as Duration,g as LoadingScheme,d as Message,l as UpdateMessage,b as __namedExportsOrder,h as default};
