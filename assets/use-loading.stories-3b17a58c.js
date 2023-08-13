import{j as n,a as c}from"./jsx-runtime-e6a661ac.js";import{u as o}from"./loading-provider-9b0281b0.js";import{C as s}from"./center-29cb8b4c.js";import{W as i}from"./flex-af7b5bf9.js";import{B as t}from"./button-73490b67.js";import{T as h}from"./text-c74b4a28.js";import"./index-61bf1805.js";import"./_commonjsHelpers-de833af9.js";import"./index-121a462f.js";import"./factory-3c20bca9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-5b0f5dab.js";import"./Combination-0278cbee.js";import"./tslib.es6-3f3c652b.js";import"./component-d3e7ea7c.js";import"./motion-eb01b2a4.js";import"./motion-fb190baf.js";import"./forward-ref-c496b87d.js";import"./loading-1f9d49b8.js";import"./index-44980711.js";import"./theme-2199e320.js";import"./index-d90de557.js";import"./index-a700ad96.js";import"./icon-0982bb38.js";import"./index-6bcd17ac.js";import"./container-portal-e35a969d.js";import"./index-2801d3c9.js";import"./use-component-style-277e16ba.js";const dn={title:"Hooks / useLoading"},k=a=>new Promise(e=>{setTimeout(e,a)}),d=()=>{const{screen:a,page:e,background:r}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:c(i,{gap:"md",children:[n(t,{onClick:()=>a.start(),children:"Start screen loading"}),n(t,{onClick:()=>e.start(),children:"Start page loading"}),n(t,{onClick:()=>r.start(),children:"Start background loading"})]})})},g=()=>{const{screen:a,page:e,background:r}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:c(i,{gap:"md",children:[n(t,{onClick:()=>a.start({duration:5e3}),children:"Start screen loading"}),n(t,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n(t,{onClick:()=>r.start({duration:5e3}),children:"Start background loading"})]})})},p=()=>{const{screen:a,page:e,background:r}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:c(i,{gap:"md",children:[n(t,{onClick:()=>a.start({message:"Loading",duration:5e3}),children:"Start screen loading"}),n(t,{onClick:()=>e.start({message:"Loading",duration:5e3}),children:"Start page loading"}),n(t,{onClick:()=>r.start({message:"Loading",duration:5e3}),children:"Start background loading"})]})})},l=()=>{const{screen:a,page:e,background:r}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:c(i,{gap:"md",children:[n(t,{onClick:()=>a.start({message:n(h,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n(t,{onClick:()=>e.start({message:n(h,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n(t,{onClick:()=>r.start({message:n(h,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})})},u=()=>{const{screen:a,page:e,background:r}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:c(i,{gap:"md",children:[n(t,{onClick:()=>{a.start({message:"Loading",duration:1e4}),setTimeout(()=>{a.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n(t,{onClick:()=>{e.start({message:"Loading",duration:1e4}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n(t,{onClick:()=>{r.start({message:"Loading",duration:1e4}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})})},m=()=>{const{page:a}=o();return n(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(t,{onClick:async()=>{a.start({message:"Get Data 1/3"}),await k(3e3),a.update({message:"Please wait 2/3"}),await k(3e3),a.update({message:"Almost done 3/3"}),await k(3e3),a.finish()},children:"Start page loading"})})};var w,C,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var x,B,b;g.parameters={...g.parameters,docs:{...(x=g.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
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
      </Wrap>
    </Center>;
}`,...(b=(B=g.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var L,v,T;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start({
        message: 'Loading',
        duration: 5000
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        message: 'Loading',
        duration: 5000
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        message: 'Loading',
        duration: 5000
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var W,y,f;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => screen.start({
        message: <Text color='primary'>Loading</Text>
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        message: <Text color='primary'>Loading</Text>
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        message: <Text color='primary'>Loading</Text>
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(f=(y=l.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var P,D,M;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Wrap gap='md'>
        <Button onClick={() => {
        screen.start({
          message: 'Loading',
          duration: 10000
        });
        setTimeout(() => {
          screen.update({
            message: 'Please wait'
          });
        }, 5000);
      }}>
          Start screen loading
        </Button>

        <Button onClick={() => {
        page.start({
          message: 'Loading',
          duration: 10000
        });
        setTimeout(() => {
          page.update({
            message: 'Please wait'
          });
        }, 5000);
      }}>
          Start page loading
        </Button>

        <Button onClick={() => {
        background.start({
          message: 'Loading',
          duration: 10000
        });
        setTimeout(() => {
          background.update({
            message: 'Please wait'
          });
        }, 5000);
      }}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(M=(D=u.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var j,A,F;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const {
    page
  } = useLoading();
  const getData = async () => {
    page.start({
      message: 'Get Data 1/3'
    });
    await wait(3000);
    page.update({
      message: 'Please wait 2/3'
    });
    await wait(3000);
    page.update({
      message: 'Almost done 3/3'
    });
    await wait(3000);
    page.finish();
  };
  return <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Button onClick={getData}>Start page loading</Button>
    </Center>;
}`,...(F=(A=m.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};const gn=["basic","withTimeout","withMessage","customMessage","updateMessage","asyncFunction"];export{gn as __namedExportsOrder,m as asyncFunction,d as basic,l as customMessage,dn as default,u as updateMessage,p as withMessage,g as withTimeout};
//# sourceMappingURL=use-loading.stories-3b17a58c.js.map
