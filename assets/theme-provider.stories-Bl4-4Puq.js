import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,El as r,Fa as i,Gs as a,Ht as o,Ia as s,Ks as c,La as l,Lt as u,N as d,P as f,Pa as p,am as m,cp as h,gi as g,gl as _,hi as v,im as y,lp as b,mm as x,nt as S,o as C,qm as w,rm as T,rt as E,s as D,sm as O,sp as k,vi as A,yi as j}from"./iframe-CHoZGzMw.js";var M,N,P,F,I;e((()=>{M=t(w(),1),a(),_(),p(),A(),v(),u(),S(),d(),C(),k(),m(),T(),N=O(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...h,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...b,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(D,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=y();return(0,N.jsxs)(n,{children:[(0,N.jsx)(o,{children:(0,N.jsx)(j,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(r,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[x(t),` Theme`]},t)})}),(0,N.jsxs)(l,{children:[(0,N.jsx)(s,{children:(0,N.jsxs)(g,{children:[x(t),` Theme`]})}),(0,N.jsxs)(i,{gap:`md`,children:[(0,N.jsx)(f,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(c,{colorScheme:e,children:e},e)})}),(0,N.jsx)(f,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(E,{colorScheme:e,children:x(e)},e)})}),(0,N.jsx)(f,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(r,{colorScheme:e,children:x(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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