import{j as n}from"./jsx-runtime-CfatFE5O.js";import{u as o}from"./loading-provider--y3RkBPg.js";import{C as s}from"./center-BAqe7zvx.js";import{W as c}from"./flex-ZeDiVseB.js";import{B as t}from"./button-CP_V-DFs.js";import{T as m}from"./text-Q2VnSl4h.js";import"./index-ClcD9ViR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-B2YNaAAX.js";import"./factory-ZSnRp-09.js";import"./Combination-CkmEMpJG.js";import"./loading-YSmVr9V5.js";import"./icon-D-mdHq7J.js";import"./use-component-style-Bj6hwx_Q.js";import"./theme-provider-B08WIPTu.js";import"./use-var-BqMKFNOM.js";import"./forward-ref-D13m8o2p.js";import"./index-CIS69Ejq.js";import"./proxy-Cmv22F1b.js";import"./portal-Dqf7N2XQ.js";import"./index-ZuzByk-F.js";import"./memo-CTsy6qLS.js";import"./factory-g1ZPYqox.js";import"./use-ripple-DvgegkL5.js";const rn={title:"Hooks / useLoading"},x=async a=>new Promise(e=>{setTimeout(e,a)}),i=()=>{const{background:a,page:e,screen:r}=o();return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start(),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start(),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start(),children:"Start background loading"})]})})},d=()=>{const{background:a,page:e,screen:r}=o();return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({duration:5e3}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({duration:5e3}),children:"Start background loading"})]})})},g=()=>{const{background:a,page:e,screen:r}=o();return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({duration:5e3,message:"Loading"}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({duration:5e3,message:"Loading"}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({duration:5e3,message:"Loading"}),children:"Start background loading"})]})})},p=()=>{const{background:a,page:e,screen:r}=o();return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>r.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start screen loading"}),n.jsx(t,{onClick:()=>e.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start page loading"}),n.jsx(t,{onClick:()=>a.start({message:n.jsx(m,{color:"primary",children:"Loading"})}),children:"Start background loading"})]})})},u=()=>{const{background:a,page:e,screen:r}=o();return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsxs(c,{gap:"md",children:[n.jsx(t,{onClick:()=>{r.start({duration:1e4,message:"Loading"}),setTimeout(()=>{r.update({message:"Please wait"})},5e3)},children:"Start screen loading"}),n.jsx(t,{onClick:()=>{e.start({duration:1e4,message:"Loading"}),setTimeout(()=>{e.update({message:"Please wait"})},5e3)},children:"Start page loading"}),n.jsx(t,{onClick:()=>{a.start({duration:1e4,message:"Loading"}),setTimeout(()=>{a.update({message:"Please wait"})},5e3)},children:"Start background loading"})]})})},l=()=>{const{page:a}=o(),e=async()=>{a.start({message:"Get Data 1/3"}),await x(3e3),a.update({message:"Please wait 2/3"}),await x(3e3),a.update({message:"Almost done 3/3"}),await x(3e3),a.finish()};return n.jsx(s,{h:"calc(100vh - 16px * 2)",w:"calc(100vw - 16px * 2)",children:n.jsx(t,{onClick:e,children:"Start page loading"})})};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    background,
    page,
    screen
  } = useLoading();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    background,
    page,
    screen
  } = useLoading();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
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
      </Wrap>
    </Center>;
}`,...(L=(b=g.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var v,T,W;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const {
    background,
    page,
    screen
  } = useLoading();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
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
    background,
    page,
    screen
  } = useLoading();
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Wrap gap="md">
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
  return <Center h="calc(100vh - 16px * 2)" w="calc(100vw - 16px * 2)">
      <Button onClick={getData}>Start page loading</Button>
    </Center>;
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};const on=["basic","withTimeout","withMessage","customMessage","updateMessage","asyncFunction"];export{on as __namedExportsOrder,l as asyncFunction,i as basic,p as customMessage,rn as default,u as updateMessage,g as withMessage,d as withTimeout};
