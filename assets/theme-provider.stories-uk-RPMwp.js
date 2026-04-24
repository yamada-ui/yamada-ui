import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{t as n}from"./react-mE7dFmCG.js";import{B as r,Z as i,yn as a,z as o}from"./core-C7NnSGLR.js";import{t as s}from"./jsx-runtime-D_578c1K.js";import{c,n as l,o as u,s as d,t as f}from"./ui-provider-CvH0jSWU.js";import{l as p,t as m}from"./button-C66K-mOB.js";import{t as h}from"./heading-DnIVTUkI.js";import{a as g,r as _}from"./z-stack-D_lbkXhr.js";import{t as v}from"./wrap-DVXQ7Jc8.js";import{Dt as y,Gi as b,Go as x,Hr as S,K as C,Ki as w,T,Ur as E,Wi as D,Wo as O,Wr as k,q as A,qi as j}from"./iframe-EKcHb3H8.js";var M,N,P,F,I;e((()=>{M=t(n(),1),O(),m(),D(),E(),S(),y(),C(),T(),f(),u(),i(),o(),N=s(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...c,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(l,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=r();return(0,N.jsxs)(_,{children:[(0,N.jsx)(g,{children:(0,N.jsx)(k,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(p,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[a(t),` Theme`]},t)})}),(0,N.jsxs)(j,{children:[(0,N.jsx)(w,{children:(0,N.jsxs)(h,{children:[a(t),` Theme`]})}),(0,N.jsxs)(b,{gap:`md`,children:[(0,N.jsx)(v,{gap:`md`,children:(0,N.jsx)(k,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(x,{colorScheme:e,children:e},e)})}),(0,N.jsx)(v,{gap:`md`,children:(0,N.jsx)(k,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(A,{colorScheme:e,children:a(e)},e)})}),(0,N.jsx)(v,{gap:`md`,children:(0,N.jsx)(k,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(p,{colorScheme:e,children:a(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
  const theme = useMemo(() => ({
    ...defaultTheme,
    themeSchemes: {
      blue: {
        semanticTokens: {
          colorSchemes: {
            primary: "blue",
            secondary: "cyan"
          }
        }
      },
      pink: {
        semanticTokens: {
          colorSchemes: {
            primary: "pink",
            secondary: "violet"
          }
        }
      },
      purple: {
        semanticTokens: {
          colorSchemes: {
            primary: "purple",
            secondary: "green"
          }
        }
      }
    }
  }), []);
  const config = useMemo(() => ({
    ...defaultConfig,
    initialThemeScheme: "pink" as ThemeScheme
  }), []);
  const App: FC = () => {
    const {
      changeThemeScheme,
      themeScheme
    } = useTheme<typeof theme>();
    return <VStack>
        <HStack>
          <For each={["base", "pink", "purple", "blue"] as const}>
            {themeScheme => <Button key={themeScheme} colorScheme={"base" === themeScheme ? "mono" : themeScheme} onClick={() => changeThemeScheme(themeScheme)}>
                {toTitleCase(themeScheme)} Theme
              </Button>}
          </For>
        </HStack>

        <Container.Root>
          <Container.Header>
            <Heading>{toTitleCase(themeScheme)} Theme</Heading>
          </Container.Header>

          <Container.Body gap="md">
            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Badge key={colorScheme} colorScheme={colorScheme}>
                    {colorScheme}
                  </Badge>}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Tag key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Tag>}
              </For>
            </Wrap>

            <Wrap gap="md">
              <For each={["primary", "secondary", "info", "success", "warning", "error"] as const}>
                {colorScheme => <Button key={colorScheme} colorScheme={colorScheme}>
                    {toTitleCase(colorScheme)}
                  </Button>}
              </For>
            </Wrap>
          </Container.Body>
        </Container.Root>
      </VStack>;
  };
  return <UIProvider config={config} theme={theme}>
      <App />
    </UIProvider>;
}`,...F.parameters?.docs?.source}}},I=[`SwitchTheming`]}))();export{F as SwitchTheming,I as __namedExportsOrder,P as default};