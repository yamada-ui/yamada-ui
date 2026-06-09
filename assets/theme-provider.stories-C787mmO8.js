import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{A as n,Cv as r,Dn as i,Dv as a,E_ as o,Fa as s,Jl as c,Lv as l,Ma as u,Nt as d,Pa as f,Pd as p,Pt as m,Sn as h,Sv as g,T_ as _,Tn as v,at as y,by as b,cs as x,it as S,j as C,ja as w,ls as T,os as E,qd as D,ql as O,ss as k,w_ as A,wv as j}from"./iframe-CM6ym36p.js";var M,N,P,F,I;t((()=>{M=e(b(),1),O(),p(),E(),f(),w(),h(),d(),S(),n(),A(),j(),g(),N=a(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({..._,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...o,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(C,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=r();return(0,N.jsxs)(v,{children:[(0,N.jsx)(i,{children:(0,N.jsx)(s,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(D,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[l(t),` Theme`]},t)})}),(0,N.jsxs)(T,{children:[(0,N.jsx)(x,{children:(0,N.jsxs)(u,{children:[l(t),` Theme`]})}),(0,N.jsxs)(k,{gap:`md`,children:[(0,N.jsx)(y,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(c,{colorScheme:e,children:e},e)})}),(0,N.jsx)(y,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(m,{colorScheme:e,children:l(e)},e)})}),(0,N.jsx)(y,{gap:`md`,children:(0,N.jsx)(s,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(D,{colorScheme:e,children:l(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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