import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{A as n,C_ as r,Cv as i,Dn as a,Ev as o,Fa as s,Iv as c,Kd as l,Kl as u,Ma as d,Nd as f,Nt as p,Pa as m,Pt as h,Sn as g,Sv as _,T_ as v,Tn as y,at as b,cs as x,it as S,j as C,ja as w,ls as T,os as E,ql as D,ss as O,w_ as k,xv as A,yy as j}from"./iframe-4z85howq.js";var M,N,P,F,I;t((()=>{M=e(j(),1),u(),f(),E(),m(),w(),g(),p(),S(),n(),r(),i(),A(),N=o(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...k,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...v,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(C,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=_();return(0,N.jsxs)(y,{children:[(0,N.jsx)(a,{children:(0,N.jsx)(s,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(l,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[c(t),` Theme`]},t)})}),(0,N.jsxs)(T,{children:[(0,N.jsx)(x,{children:(0,N.jsxs)(d,{children:[c(t),` Theme`]})}),(0,N.jsxs)(O,{gap:`md`,children:[(0,N.jsx)(b,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(D,{colorScheme:e,children:e},e)})}),(0,N.jsx)(b,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(h,{colorScheme:e,children:c(e)},e)})}),(0,N.jsx)(b,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(l,{colorScheme:e,children:c(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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