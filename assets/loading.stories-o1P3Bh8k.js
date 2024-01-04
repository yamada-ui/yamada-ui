import{j as n,a as d}from"./jsx-runtime-5BUNAZ9W.js";import{u as T}from"./index-qUJCk-PD.js";import{r as x}from"./index-4g5l5LRQ.js";import{U as l}from"./ui-provider-Ru1NF1PL.js";import{e as m}from"./extend-config-ArEOJvRM.js";import{u as p}from"./loading-provider-_atVP6dC.js";import{C as g}from"./center-oo6jguoz.js";import{W as u}from"./flex-nM_j58Az.js";import{B as o}from"./button-BOuQJR-0.js";import{M as h}from"./motion-Uato0l8n.js";import{L as U}from"./loading-wo-qYTRZ.js";import{V as j}from"./stack-hSz9mWhW.js";import{T as v}from"./text-ZZ-rJ1wf.js";import{f as L}from"./factory-S7NpTOPD.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./theme-provider-gPsMpKLC.js";import"./environment-provider-StHaV0Js.js";import"./motion-ukEXpwwk.js";import"./notice-6GkOM2bZ.js";import"./alert-DWXnxKiF.js";import"./use-component-style-RZgwdKSo.js";import"./icon-BK6khpDY.js";import"./index--9owDyfg.js";import"./forward-ref-A-8Arhkk.js";import"./close-button-BZ4irXP7.js";import"./use-ripple--PYcbSnX.js";import"./index-EargzzxG.js";import"./container-portal-BQwnZChX.js";import"./index-jmm5gWkb.js";import"./Combination-8oCz4vin.js";import"./index-9nF0LIhT.js";import"./index-dLbkUGAz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";const xn={title:"System / Theme / Loading"},z=i=>new Promise(t=>{setTimeout(t,i)}),r=()=>{const i=m({loading:{screen:{icon:{variant:"grid"},duration:5e3},page:{icon:{variant:"grid"},duration:5e3},background:{icon:{variant:"grid"},duration:5e3}}});return n(l,{config:i,children:n(M,{})})},s=()=>{const i=m({loading:{screen:{initialState:!0,icon:{variant:"dots"}},page:{icon:{variant:"dots"}},background:{icon:{variant:"dots"}}}});return n(l,{config:i,children:n(V,{})})},c=()=>{const i=m({loading:{custom:{component:({initialState:t,message:a,duration:e,onFinish:f})=>(T(f,e),n(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999,bg:"blackAlpha.600",w:"100vw",h:"100vh",p:"md",display:"flex",justifyContent:"center",alignItems:"center"},children:d(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{bg:["white","black"],maxW:"md",p:"md",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"sm",rounded:"md",boxShadow:["lg","dark-lg"]},children:[n(U,{variant:"dots",size:"6xl"}),d(j,{align:"center",mb:"md",gap:"sm",children:[n(v,{children:"Downloading files…"}),a?L(a)?a:n(v,{lineClamp:3,children:a}):null]}),n(o,{size:"sm",onClick:f,children:"Play to background"})]})}))}}});return n(l,{config:i,children:n(D,{})})},M=()=>{const{screen:i,page:t,background:a}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},V=()=>{const{screen:i,page:t,background:a}=p(),e=x.useCallback(async()=>{await z(5e3),i.finish()},[i]);return x.useEffect(()=>{e()},[e]),n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},D=()=>{const{custom:i}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(u,{gap:"md",children:n(o,{onClick:()=>i.start({duration:1e4}),children:"Start custom loading"})})})};var k,b,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      },
      page: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      },
      background: {
        icon: {
          variant: "grid"
        },
        duration: 5000
      }
    }
  });
  return <UIProvider config={config}>
      <App />
    </UIProvider>;
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var C,S,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        initialState: true,
        icon: {
          variant: "dots"
        }
      },
      page: {
        icon: {
          variant: "dots"
        }
      },
      background: {
        icon: {
          variant: "dots"
        }
      }
    }
  });
  return <UIProvider config={config}>
      <AsyncApp />
    </UIProvider>;
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var I,A,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      custom: {
        component: ({
          initialState,
          message,
          duration,
          onFinish
        }) => {
          useTimeout(onFinish, duration);
          return <Motion initial={!initialState ? "initial" : false} animate="animate" exit="exit" variants={{
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              }
            },
            exit: {
              opacity: 0,
              transition: {
                duration: 0.4,
                ease: [0.4, 0, 1, 1]
              }
            }
          }} sx={{
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9999,
            bg: "blackAlpha.600",
            w: "100vw",
            h: "100vh",
            p: "md",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
              <Motion initial={!initialState ? "initial" : false} animate="animate" exit="exit" variants={{
              initial: {
                opacity: 0,
                scale: 0.95
              },
              animate: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }
              },
              exit: {
                opacity: 0,
                scale: 0.95,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 1, 1]
                }
              }
            }} sx={{
              bg: ["white", "black"],
              maxW: "md",
              p: "md",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "sm",
              rounded: "md",
              boxShadow: ["lg", "dark-lg"]
            }}>
                <Loading variant="dots" size="6xl" />

                <VStack align="center" mb="md" gap="sm">
                  <Text>Downloading files…</Text>
                  {message ? isValidElement(message) ? message : <Text lineClamp={3}>{message}</Text> : null}
                </VStack>

                <Button size="sm" onClick={onFinish}>
                  Play to background
                </Button>
              </Motion>
            </Motion>;
        }
      }
    }
  });
  return <UIProvider config={config}>
      <CustomApp />
    </UIProvider>;
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};const hn=["basic","useInitialState","useCustomLoading"];export{hn as __namedExportsOrder,r as basic,xn as default,c as useCustomLoading,s as useInitialState};
