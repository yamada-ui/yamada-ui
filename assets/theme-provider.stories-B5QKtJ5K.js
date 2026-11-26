import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Cn as n,_n as r}from"./props-DZ_NCL29.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{g as a,h as o}from"./utils-op0kJ2Xc.js";import{n as s,r as c,t as l}from"./theme-Cv-PS-8G.js";import{r as u,t as d}from"./button-BfYhzfkR.js";import{r as f,t as p}from"./badge-DAASTel9.js";import{i as m,n as h,r as g,t as _}from"./container-Bcv_UsMz.js";import{n as v,t as y}from"./for-COoaBOxp.js";import{n as b,t as x}from"./heading-CEjbxql-.js";import{n as S,t as C}from"./h-stack-DLrlCWvV.js";import{n as w,t as T}from"./v-stack-zknlTZhK.js";import{n as E,t as D}from"./tag-L4ggQ-wL.js";import{n as O,t as k}from"./wrap-ad9kvM3c.js";import{n as A,r as j}from"./iframe--XLkK5ME.js";var M,N,P,F,I;function L(){return(L=e((()=>{M=t(),f(),u(),m(),v(),b(),S(),w(),E(),O(),j(),l(),r(),o(),N=i(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...s,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...c,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(A,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=a();return(0,N.jsxs)(T,{children:[(0,N.jsx)(C,{children:(0,N.jsx)(y,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(d,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[n(t),` Theme`]},t)})}),(0,N.jsxs)(g,{children:[(0,N.jsx)(h,{children:(0,N.jsxs)(x,{children:[n(t),` Theme`]})}),(0,N.jsxs)(_,{gap:`md`,children:[(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(p,{colorScheme:e,children:e},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(D,{colorScheme:e,children:n(e)},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(d,{colorScheme:e,children:n(e)},e)})})]})]})]})},{})})},I=[`SwitchTheming`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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