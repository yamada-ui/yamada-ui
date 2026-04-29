import{n as e}from"./chunk-jRWAZmH_.js";import{Tn as t,Z as n}from"./core-C7NnSGLR.js";import{t as r}from"./jsx-runtime-D_578c1K.js";import{d as i,u as a}from"./loading-CckKcRW6.js";import{t as o}from"./text-DSMMc5B6.js";import{t as s}from"./text-BM4F8FHS.js";import{l as c,t as l}from"./button-C66K-mOB.js";import{t as u}from"./wrap-DVXQ7Jc8.js";import{T as d}from"./iframe-CkHNN6iF.js";var f,p,m,h,g,_,v,y,b,x;e((()=>{n(),l(),s(),d(),a(),f=r(),p={parameters:{layout:`centered`},title:`Hooks / useLoading`},m=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>n.start(),children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>t.start(),children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>e.start(),children:`Start background loading`})]})},h=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>n.start({duration:5e3}),children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>t.start({duration:5e3}),children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>e.start({duration:5e3}),children:`Start background loading`})]})},g=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>n.start({duration:5e3,message:`Loading`}),children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>t.start({duration:5e3,message:`Loading`}),children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>e.start({duration:5e3,message:`Loading`}),children:`Start background loading`})]})},_=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>n.start({duration:5e3,loadingScheme:`grid`}),children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>t.start({duration:5e3,loadingScheme:`dots`}),children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>e.start({duration:5e3,loadingScheme:`puff`}),children:`Start background loading`})]})},v=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>n.start({message:(0,f.jsx)(o,{color:`primary`,children:`Loading`})}),children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>t.start({message:(0,f.jsx)(o,{color:`primary`,children:`Loading`})}),children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>e.start({message:(0,f.jsx)(o,{color:`primary`,children:`Loading`})}),children:`Start background loading`})]})},y=()=>{let{background:e,page:t,screen:n}=i();return(0,f.jsxs)(u,{gap:`md`,children:[(0,f.jsx)(c,{onClick:()=>{n.start({duration:1e4,message:`Loading`}),setTimeout(()=>{n.update({message:`Please wait`})},5e3)},children:`Start screen loading`}),(0,f.jsx)(c,{onClick:()=>{t.start({duration:1e4,message:`Loading`}),setTimeout(()=>{t.update({message:`Please wait`})},5e3)},children:`Start page loading`}),(0,f.jsx)(c,{onClick:()=>{e.start({duration:1e4,message:`Loading`}),setTimeout(()=>{e.update({message:`Please wait`})},5e3)},children:`Start background loading`})]})},b=()=>{let{page:e}=i();return(0,f.jsx)(c,{onClick:async()=>{e.start({message:`Get Data 1/3`}),await t(3e3),e.update({message:`Please wait 2/3`}),await t(3e3),e.update({message:`Almost done 3/3`}),await t(3e3),e.finish()},children:`Start page loading`})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
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
}`,...b.parameters?.docs?.source}}},x=[`Basic`,`Duration`,`Message`,`LoadingScheme`,`CustomMessage`,`UpdateMessage`,`AsyncFunction`]}))();export{b as AsyncFunction,m as Basic,v as CustomMessage,h as Duration,_ as LoadingScheme,g as Message,y as UpdateMessage,x as __namedExportsOrder,p as default};