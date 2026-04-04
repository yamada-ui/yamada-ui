import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{B as n,Bt as r,Gt as i,Jr as a,Ss as o,Ut as s,Xp as c,Xr as l,Zr as u,at as d,da as f,dp as p,fa as m,hf as h,jl as g,lp as _,mf as v,o as y,ot as b,pa as x,pf as S,pp as C,qr as w,s as T,ua as E,up as D,xl as O,xs as k,yp as A,z as j}from"./iframe-DfzTHUcv.js";var M,N,P,F,I;e((()=>{M=t(c(),1),k(),O(),E(),l(),w(),r(),d(),j(),y(),S(),p(),_(),N=C(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...v,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...h,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(T,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=D();return(0,N.jsxs)(s,{children:[(0,N.jsx)(i,{children:(0,N.jsx)(u,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(g,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[A(t),` Theme`]},t)})}),(0,N.jsxs)(x,{children:[(0,N.jsx)(m,{children:(0,N.jsxs)(a,{children:[A(t),` Theme`]})}),(0,N.jsxs)(f,{gap:`md`,children:[(0,N.jsx)(n,{gap:`md`,children:(0,N.jsx)(u,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(o,{colorScheme:e,children:e},e)})}),(0,N.jsx)(n,{gap:`md`,children:(0,N.jsx)(u,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(b,{colorScheme:e,children:A(e)},e)})}),(0,N.jsx)(n,{gap:`md`,children:(0,N.jsx)(u,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(g,{colorScheme:e,children:A(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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