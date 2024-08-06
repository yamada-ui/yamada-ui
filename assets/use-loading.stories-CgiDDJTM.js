import{j as n}from"./jsx-runtime-Nms4Y4qS.js";import{u as o}from"./loading-provider-DdrknJQn.js";import{C as s}from"./center-B_1km1ec.js";import{W as c}from"./flex-Chb4wwx3.js";import{B as t}from"./button-DfQHZeQx.js";import{T as m}from"./text-D1mCFSxx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B9PLoIDO.js";import"./factory-CEsHZeW8.js";import"./extends-CF3RwP-h.js";import"./Combination-CONbhR2A.js";import"./loading-BHrGiIMj.js";import"./icon-SoeERY4p.js";import"./index-COQaqARl.js";import"./theme-provider-woLZZCt0.js";import"./use-component-style-BVTnHHBW.js";import"./forward-ref-BmTAT9U5.js";import"./motion-Cp3z4NrY.js";import"./motion-CcTWI5_V.js";import"./index-UcjmprJc.js";import"./container-portal-Df4525l3.js";import"./index-DxjWwZXO.js";import"./use-ripple-bahltC27.js";const rn={title:"Hooks / useLoading"},x=a=>new Promise(e=>{setTimeout(e,a)}),i=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start(),children:"Start background loading"})]})})},d=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({duration:5e3}),children:"Start background loading"})]})})},g=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({message:"Loading",duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:"Loading",duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({message:"Loading",duration:5e3}),children:"Start background loading"})]})})},p=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>a.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n.jsx(t,{onClick:()=>r.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})})},u=()=>{const{screen:a,page:e,background:r}=o();return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>{a.start({message:"Loading",duration:1e4}),setTimeout(()=>{a.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n.jsx(t,{onClick:()=>{e.start({message:"Loading",duration:1e4}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n.jsx(t,{onClick:()=>{r.start({message:"Loading",duration:1e4}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})})},l=()=>{const{page:a}=o(),e=async()=>{a.start({message:"Get Data 1/3"}),await x(3e3),a.update({message:"Please wait 2/3"}),await x(3e3),a.update({message:"Almost done 3/3"}),await x(3e3),a.finish()};return n.jsx(s,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n.jsx(t,{onClick:e,children:"Start page loading"})})};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start()}>Start screen loading</Button>
        <Button onClick={() => page.start()}>Start page loading</Button>
        <Button onClick={() => background.start()}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var C,S,B;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
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
}`,...(B=(S=d.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var j,b,L;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => screen.start({
        message: "Loading",
        duration: 5000
      })}>
          Start screen loading
        </Button>
        <Button onClick={() => page.start({
        message: "Loading",
        duration: 5000
      })}>
          Start page loading
        </Button>
        <Button onClick={() => background.start({
        message: "Loading",
        duration: 5000
      })}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(L=(b=g.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var v,T,W;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
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
      </Wrap>
    </Center>;
}`,...(W=(T=p.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var y,f,P;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const {
    screen,
    page,
    background
  } = useLoading();
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Wrap gap="md">
        <Button onClick={() => {
        screen.start({
          message: "Loading",
          duration: 10000
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
          message: "Loading",
          duration: 10000
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
          message: "Loading",
          duration: 10000
        });
        setTimeout(() => {
          background.update({
            message: "Please wait"
          });
        }, 5000);
      }}>
          Start background loading
        </Button>
      </Wrap>
    </Center>;
}`,...(P=(f=u.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};var M,D,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
  return <Center w="calc(100vw - 16px * 2)" h="calc(100vh - 16px * 2)">
      <Button onClick={getData}>Start page loading</Button>
    </Center>;
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const on=["basic","withTimeout","withMessage","customMessage","updateMessage","asyncFunction"];export{on as __namedExportsOrder,l as asyncFunction,i as basic,p as customMessage,rn as default,u as updateMessage,g as withMessage,d as withTimeout};
