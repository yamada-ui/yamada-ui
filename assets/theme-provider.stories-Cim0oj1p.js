import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./react-DiVRNtpo.js";import{bn as n,mn as r}from"./props-Bm02A0Xh.js";import{t as i}from"./jsx-runtime-BdxMnOeJ.js";import{g as a,h as o}from"./utils-WIGDCGPO.js";import{n as s,t as c}from"./theme-CZONF2mu.js";import{a as l,i as u,t as d}from"./ui-provider-I5Dg6jx5.js";import{r as f,t as p}from"./button-D-qzJx4d.js";import{r as m,t as h}from"./badge-DAJl4Sul.js";import{i as g,n as _,r as v,t as y}from"./container-CCYex3Jc.js";import{n as b,t as x}from"./for-D7nCt3i9.js";import{n as S,t as C}from"./heading-CxB3yDKG.js";import{n as w,t as T}from"./h-stack-DanpYYMa.js";import{n as E,t as D}from"./v-stack-n4qGZJTU.js";import{n as O,t as k}from"./tag-Y7cVMS7j.js";import{n as A,t as j}from"./wrap-DRfn04op.js";var M,N,P,F,I;function L(){return(L=e((()=>{M=t(),m(),f(),g(),b(),S(),w(),E(),O(),A(),u(),c(),r(),o(),N=i(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...s,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...l,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(d,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=a();return(0,N.jsxs)(D,{children:[(0,N.jsx)(T,{children:(0,N.jsx)(x,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(p,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[n(t),` Theme`]},t)})}),(0,N.jsxs)(v,{children:[(0,N.jsx)(_,{children:(0,N.jsxs)(C,{children:[n(t),` Theme`]})}),(0,N.jsxs)(y,{gap:`md`,children:[(0,N.jsx)(j,{gap:`md`,children:(0,N.jsx)(x,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(h,{colorScheme:e,children:e},e)})}),(0,N.jsx)(j,{gap:`md`,children:(0,N.jsx)(x,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(k,{colorScheme:e,children:n(e)},e)})}),(0,N.jsx)(j,{gap:`md`,children:(0,N.jsx)(x,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(p,{colorScheme:e,children:n(e)},e)})})]})]})]})},{})})},I=[`SwitchTheming`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{F as SwitchTheming,I as __namedExportsOrder,P as default};