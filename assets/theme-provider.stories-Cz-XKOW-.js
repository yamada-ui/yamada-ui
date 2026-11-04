import{n as e}from"./rolldown-runtime-BCiCTKAo.js";import{t}from"./react-BWPDF9mI.js";import{Cn as n,_n as r}from"./props-BMk_kdQM.js";import{t as i}from"./jsx-runtime-BB9-612F.js";import{g as a,h as o}from"./utils-DSv0gVii.js";import{n as s,r as c,t as l}from"./theme-BLCBjKIm.js";import{r as u,t as d}from"./button-CmOvQp3A.js";import{r as f,t as p}from"./badge-B6Lf04aD.js";import{i as m,n as h,r as g,t as _}from"./container-CbZl36pB.js";import{n as v,t as y}from"./for-Cman8nIr.js";import{n as b,t as x}from"./heading-bcVkEjA3.js";import{n as S,t as C}from"./h-stack-RcGvqDMi.js";import{n as w,t as T}from"./v-stack-VA9HQqiB.js";import{n as E,t as D}from"./tag-DsSUVUHF.js";import{n as O,t as k}from"./wrap-DnActldc.js";import{a as A,n as j}from"./iframe-BM50lMZ2.js";var M,N,P,F,I;function L(){return(L=e((()=>{M=t(),f(),u(),m(),v(),b(),S(),w(),E(),O(),A(),l(),r(),o(),N=i(),P={title:`Theme / Theming`},F=()=>{let e=(0,M.useMemo)(()=>({...s,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:`blue`,secondary:`cyan`}}},pink:{semanticTokens:{colorSchemes:{primary:`pink`,secondary:`violet`}}},purple:{semanticTokens:{colorSchemes:{primary:`purple`,secondary:`green`}}}}}),[]),t=(0,M.useMemo)(()=>({...c,initialThemeScheme:`pink`}),[]);return(0,N.jsx)(j,{config:t,theme:e,children:(0,N.jsx)(()=>{let{changeThemeScheme:e,themeScheme:t}=a();return(0,N.jsxs)(T,{children:[(0,N.jsx)(C,{children:(0,N.jsx)(y,{each:[`base`,`pink`,`purple`,`blue`],children:t=>(0,N.jsxs)(d,{colorScheme:t===`base`?`mono`:t,onClick:()=>e(t),children:[n(t),` Theme`]},t)})}),(0,N.jsxs)(g,{children:[(0,N.jsx)(h,{children:(0,N.jsxs)(x,{children:[n(t),` Theme`]})}),(0,N.jsxs)(_,{gap:`md`,children:[(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(p,{colorScheme:e,children:e},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(D,{colorScheme:e,children:n(e)},e)})}),(0,N.jsx)(k,{gap:`md`,children:(0,N.jsx)(y,{each:[`primary`,`secondary`,`info`,`success`,`warning`,`error`],children:e=>(0,N.jsx)(d,{colorScheme:e,children:n(e)},e)})})]})]})]})},{})})},I=[`SwitchTheming`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`() => {
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