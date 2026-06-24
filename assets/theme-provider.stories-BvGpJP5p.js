import{c as e,i as t}from"./preload-helper-usAeo7Bx.js";import{t as n}from"./react-IGKVQItS.js";import{Gn as r,Q as i,Z as a,dt as o}from"./core-DkLkzQLq.js";import{t as s}from"./jsx-runtime-O9QVJvLM.js";import{d as c,t as l}from"./button-Dd3r5aCq.js";import{A as u,Aa as d,Bl as f,Dn as p,Ma as m,Na as h,Nt as g,Pt as _,Sn as v,Tn as y,Vl as b,as as x,at as S,if as C,is as w,it as T,j as E,ka as D,nf as O,os as k,rf as A,ss as j}from"./iframe-QFtltEr1.js";var M,N,P,F,I;t((()=>{M=e(n(),1),f(),l(),w(),m(),D(),v(),g(),T(),u(),O(),o(),a(),N=s(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...A,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...C,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(E,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=i();return(0,N.jsxs)(y,{children:[(0,N.jsx)(p,{children:(0,N.jsx)(h,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(c,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[r(t),` Theme`]},t)})}),(0,N.jsxs)(j,{children:[(0,N.jsx)(k,{children:(0,N.jsxs)(d,{children:[r(t),` Theme`]})}),(0,N.jsxs)(x,{gap:`md`,children:[(0,N.jsx)(S,{gap:`md`,children:(0,N.jsx)(h,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(b,{colorScheme:e,children:e},e)})}),(0,N.jsx)(S,{gap:`md`,children:(0,N.jsx)(h,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(_,{colorScheme:e,children:r(e)},e)})}),(0,N.jsx)(S,{gap:`md`,children:(0,N.jsx)(h,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(c,{colorScheme:e,children:r(e)},e)})})]})]})]})},{})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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