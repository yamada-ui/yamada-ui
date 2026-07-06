import{c as e,i as t}from"./preload-helper-B45gAKPr.js";import{t as n}from"./react-CymAsZIc.js";import{Q as r,Z as i,pt as a,qn as o}from"./core-DEigGAm3.js";import{t as s}from"./jsx-runtime-BBQGix-2.js";import{d as c,t as l}from"./button-8Wr1cScD.js";import{A as u,Dn as d,Ft as f,Ia as p,It as m,Kl as h,La as g,Na as _,Pa as v,Tn as y,_f as b,fs as x,gf as S,hf as C,hs as w,j as T,ms as E,ot as D,ps as O,ql as k,st as A,wn as j}from"./iframe-D00dh1DN.js";var M,N,P,F,I;t((()=>{M=e(n(),1),h(),l(),x(),p(),_(),j(),f(),D(),u(),C(),a(),i(),N=s(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...S,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...b,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(T,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=r();return(0,N.jsxs)(y,{children:[(0,N.jsx)(d,{children:(0,N.jsx)(g,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(c,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[o(t),` Theme`]},t)})}),(0,N.jsxs)(w,{children:[(0,N.jsx)(E,{children:(0,N.jsxs)(v,{children:[o(t),` Theme`]})}),(0,N.jsxs)(O,{gap:`md`,children:[(0,N.jsx)(A,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(k,{colorScheme:e,children:e},e)})}),(0,N.jsx)(A,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(m,{colorScheme:e,children:o(e)},e)})}),(0,N.jsx)(A,{gap:`md`,children:(0,N.jsx)(g,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(c,{colorScheme:e,children:o(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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