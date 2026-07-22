import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Q as r,Z as i,pt as a,qn as o}from"./core-RNiP33lW.js";import{t as s}from"./jsx-runtime-BBQGix-2.js";import{d as c,t as l}from"./button-CqpQ8yWo.js";import{A as u,Cn as d,En as f,Fa as p,Ft as m,Gl as h,Ia as g,Kl as _,Ma as v,Na as y,Pt as b,at as x,ds as S,fs as C,gf as w,hf as T,k as E,mf as D,ms as O,ot as k,ps as A,wn as j}from"./iframe-Clx83w1K.js";var M,N,P,F,I;t((()=>{M=e(n(),1),h(),l(),S(),p(),v(),d(),b(),x(),E(),D(),a(),i(),N=s(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...T,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...w,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(u,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=r();return(0,N.jsxs)(j,{children:[(0,N.jsx)(f,{children:(0,N.jsx)(g,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(c,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[o(t),` Theme`]},t)})}),(0,N.jsxs)(O,{children:[(0,N.jsx)(A,{children:(0,N.jsxs)(y,{children:[o(t),` Theme`]})}),(0,N.jsxs)(C,{gap:`md`,children:[(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(_,{colorScheme:e,children:e},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(m,{colorScheme:e,children:o(e)},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(c,{colorScheme:e,children:o(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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