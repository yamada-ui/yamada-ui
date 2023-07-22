import{j as n,a as d}from"./jsx-runtime-276775ef.js";import{r as x}from"./index-1cdf6ce0.js";import{M as h}from"./motion-53506941.js";import{L as T}from"./loading-b1bbd31e.js";import{e as l}from"./extend-config-fa1bfdf9.js";import{U as m}from"./ui-provider-522753f2.js";import{u as p}from"./loading-provider-61e73c0d.js";import{C as g}from"./center-f24092aa.js";import{W as u}from"./flex-d10357f1.js";import{B as o}from"./button-aae638aa.js";import{u as L}from"./index-7320e9bd.js";import{V as j}from"./stack-960c90c9.js";import{T as v}from"./text-914562f0.js";import{j as U}from"./factory-75cc801c.js";import"./motion-1ef152f4.js";import"./forward-ref-86842115.js";import"./index-71f4e961.js";import"./theme-8f32df8a.js";import"./index-7a67cca8.js";import"./index-cb49aa84.js";import"./icon-e7971e5d.js";import"./index-1d8ff3ed.js";import"./environment-provider-f0cd95a3.js";import"./notice-ba0e8aa8.js";import"./alert-185d7d3c.js";import"./use-component-style-9ee8741d.js";import"./close-button-a6b70db7.js";import"./index-f3237c2b.js";import"./container-portal-1f9dc5e6.js";import"./index-a01a9712.js";import"./Combination-05e90cab.js";import"./tslib.es6-90f6c3e8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-51e1fbf6.js";const xn={title:"System / Theme / Loading"},z=i=>new Promise(t=>{setTimeout(t,i)}),r=()=>{const i=l({loading:{screen:{icon:{variant:"grid"},duration:5e3},page:{icon:{variant:"grid"},duration:5e3},background:{icon:{variant:"grid"},duration:5e3}}});return n(m,{config:i,children:n(M,{})})},s=()=>{const i=l({loading:{screen:{initialState:!0,icon:{variant:"dots"}},page:{icon:{variant:"dots"}},background:{icon:{variant:"dots"}}}});return n(m,{config:i,children:n(V,{})})},c=()=>{const i=l({loading:{custom:{component:({initialState:t,message:a,duration:e,onFinish:f})=>(L(f,e),n(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0},animate:{opacity:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{position:"fixed",top:0,right:0,bottom:0,left:0,zIndex:9999,bg:"blackAlpha.600",w:"100vw",h:"100vh",p:"md",display:"flex",justifyContent:"center",alignItems:"center"},children:d(h,{initial:t?!1:"initial",animate:"animate",exit:"exit",variants:{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.95,transition:{duration:.4,ease:[.4,0,1,1]}}},sx:{bg:["white","black"],maxW:"md",p:"md",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"sm",rounded:"md",boxShadow:["lg","dark-lg"]},children:[n(T,{variant:"dots",size:"6xl"}),d(j,{align:"center",mb:"md",gap:"sm",children:[n(v,{children:"Downloading files…"}),a?U(a)?a:n(v,{noOfLines:3,children:a}):null]}),n(o,{size:"sm",onClick:f,children:"Play to background"})]})}))}}});return n(m,{config:i,children:n(D,{})})},M=()=>{const{screen:i,page:t,background:a}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},V=()=>{const{screen:i,page:t,background:a}=p(),e=x.useCallback(async()=>{await z(5e3),i.finish()},[i]);return x.useEffect(()=>{e()},[e]),n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:d(u,{gap:"md",children:[n(o,{onClick:()=>i.start(),children:"Start screen loading"}),n(o,{onClick:()=>t.start(),children:"Start page loading"}),n(o,{onClick:()=>a.start(),children:"Start background loading"})]})})},D=()=>{const{custom:i}=p();return n(g,{w:"calc(100vw - 16px * 2)",h:"calc(100vh - 16px * 2)",children:n(u,{gap:"md",children:n(o,{onClick:()=>i.start({duration:1e4}),children:"Start custom loading"})})})};var k,b,y;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const config = extendConfig({
    loading: {
      screen: {
        icon: {
          variant: 'grid'
        },
        duration: 5000
      },
      page: {
        icon: {
          variant: 'grid'
        },
        duration: 5000
      },
      background: {
        icon: {
          variant: 'grid'
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
          variant: 'dots'
        }
      },
      page: {
        icon: {
          variant: 'dots'
        }
      },
      background: {
        icon: {
          variant: 'dots'
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
          return <Motion initial={!initialState ? 'initial' : false} animate='animate' exit='exit' variants={{
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
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 9999,
            bg: 'blackAlpha.600',
            w: '100vw',
            h: '100vh',
            p: 'md',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <Motion initial={!initialState ? 'initial' : false} animate='animate' exit='exit' variants={{
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
              bg: ['white', 'black'],
              maxW: 'md',
              p: 'md',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'sm',
              rounded: 'md',
              boxShadow: ['lg', 'dark-lg']
            }}>
                <Loading variant='dots' size='6xl' />

                <VStack align='center' mb='md' gap='sm'>
                  <Text>Downloading files…</Text>
                  {message ? isValidElement(message) ? message : <Text noOfLines={3}>{message}</Text> : null}
                </VStack>

                <Button size='sm' onClick={onFinish}>
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
//# sourceMappingURL=loading.stories-f5ac2eac.js.map
