import{r as a,b1 as d,cg as g,j as e,bQ as u,a5 as S,V as y,Q as m,P as r}from"./iframe-BkSt7vyM.js";import{H as T}from"./h-stack-DUys5R97.js";import{F as o}from"./for-B9rKCkzX.js";import{H as k}from"./heading-CMTXcFtE.js";import{W as s}from"./wrap-a6hFSvA_.js";import{B as f}from"./badge-BgnEFcs3.js";import{T as x}from"./tag-OOKctXal.js";import{C as j,a as C,b}from"./container-DNT0a7pm.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-BpaptubY.js";import"./index-BQdRYVwY.js";import"./index-CB9iRcwt.js";const I={title:"Theme / Theming"},c=()=>{const i=a.useMemo(()=>({...d,themeSchemes:{blue:{semanticTokens:{colorSchemes:{primary:"blue",secondary:"cyan"}}},pink:{semanticTokens:{colorSchemes:{primary:"pink",secondary:"violet"}}},purple:{semanticTokens:{colorSchemes:{primary:"purple",secondary:"green"}}}}}),[]),t=a.useMemo(()=>({...g,initialThemeScheme:"pink"}),[]),h=()=>{const{changeThemeScheme:p,themeScheme:l}=S();return e.jsxs(y,{children:[e.jsx(T,{children:e.jsx(o,{each:["base","pink","purple","blue"],children:n=>e.jsxs(m,{colorScheme:n==="base"?"mono":n,onClick:()=>p(n),children:[r(n)," Theme"]},n)})}),e.jsxs(j,{children:[e.jsx(C,{children:e.jsxs(k,{children:[r(l)," Theme"]})}),e.jsxs(b,{gap:"md",children:[e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(f,{colorScheme:n,children:n},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(x,{colorScheme:n,children:r(n)},n)})}),e.jsx(s,{gap:"md",children:e.jsx(o,{each:["primary","secondary","info","success","warning","error"],children:n=>e.jsx(m,{colorScheme:n,children:r(n)},n)})})]})]})]})};return e.jsx(u,{config:t,theme:i,children:e.jsx(h,{})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};const U=["SwitchTheming"];export{c as SwitchTheming,U as __namedExportsOrder,I as default};
