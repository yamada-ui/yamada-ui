import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{Bt as n,Fa as r,Ht as i,Lt as a,Ma as o,N as s,Na as c,P as l,Pa as u,Us as d,Wm as f,Ws as p,ap as m,dm as h,em as g,gi as _,hi as v,im as y,ip as b,ml as x,nm as S,nt as C,o as w,op as T,rt as E,s as D,tm as O,vi as k,wl as A,yi as j}from"./iframe-DSqJiJ7B.js";var M,N,P,F,I;e((()=>{M=t(f(),1),d(),x(),o(),k(),v(),a(),C(),s(),w(),b(),S(),g(),N=y(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...m,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...T,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(D,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=O();return(0,N.jsxs)(n,{children:[(0,N.jsx)(i,{children:(0,N.jsx)(j,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(A,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[h(t),` Theme`]},t)})}),(0,N.jsxs)(r,{children:[(0,N.jsx)(u,{children:(0,N.jsxs)(_,{children:[h(t),` Theme`]})}),(0,N.jsxs)(c,{gap:`md`,children:[(0,N.jsx)(l,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(p,{colorScheme:e,children:e},e)})}),(0,N.jsx)(l,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(E,{colorScheme:e,children:h(e)},e)})}),(0,N.jsx)(l,{gap:`md`,children:(0,N.jsx)(j,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(A,{colorScheme:e,children:h(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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